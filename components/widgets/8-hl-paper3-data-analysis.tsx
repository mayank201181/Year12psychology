"use client";
// ---------------------------------------------------------------------------
// Topic 8 (HL Only): Interactive widgets for HL Paper 3 Data Analysis (FA2027).
// 1. Paper 3 p-Value, Effect Size (Cohen's d) & Error-Bar Lab [HL]
// 2. Qualitative Coding & Researcher-Reflexivity Highlighter [HL]
// ---------------------------------------------------------------------------
import { useMemo, useState } from "react";
import { renderInline } from "../Rich";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ========================== EXACT STATS HELPERS ============================

function logGamma(z: number): number {
  const c = [
    76.18009172947146,
    -86.50532032941677,
    24.01409824083091,
    -1.231739572450155,
    0.001208650973866179,
    -0.000005395239384953,
  ];
  let y = z;
  const x = z;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (let j = 0; j < 6; j++) ser += c[j] / ++y;
  return -tmp + Math.log((2.5066282746310005 * ser) / x);
}

function betacf(a: number, b: number, x: number): number {
  const MAXIT = 120;
  const EPS = 3e-7;
  const FPMIN = 1e-30;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= MAXIT; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < EPS) break;
  }
  return h;
}

function betai(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(
    logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x),
  );
  if (x < (a + 1) / (a + b + 2)) return (bt * betacf(a, b, x)) / a;
  return 1 - (bt * betacf(b, a, 1 - x)) / b;
}

function twoTailedTP(t: number, df: number): number {
  if (!Number.isFinite(t) || t <= 0) return 1;
  const x = df / (df + t * t);
  return Math.max(0, Math.min(1, betai(df / 2, 0.5, x)));
}

function erfcApprox(x: number): number {
  const z = Math.abs(x);
  const t = 1 / (1 + 0.5 * z);
  const ans =
    t *
    Math.exp(
      -z * z -
        1.26551223 +
        t *
          (1.00002368 +
            t *
              (0.37409196 +
                t *
                  (0.09678418 +
                    t *
                      (-0.18628806 +
                        t *
                          (0.27886807 +
                            t *
                              (-1.13520398 +
                                t *
                                  (1.48851587 +
                                    t * (-0.82215223 + t * 0.17087277)))))))),
    );
  return x >= 0 ? ans : 2 - ans;
}

function normalCdf(z: number): number {
  return 0.5 * erfcApprox(-z / Math.SQRT2);
}

function formatP(p: number): string {
  if (p < 0.001) return "< 0.001";
  return p.toFixed(3);
}

function classifyD(absD: number): { label: string; tone: "brand" | "good" | "bad" | "ink" } {
  if (absD < 0.2) return { label: "Negligible", tone: "bad" };
  if (absD < 0.5) return { label: "Small", tone: "ink" };
  if (absD < 0.8) return { label: "Medium", tone: "brand" };
  return { label: "Large", tone: "good" };
}

// ========================== WIDGET 1: QUANT LAB ============================

type QuantContextId = "tech" | "motivation" | "culture";
type AlphaChoice = "0.05" | "0.01";
type BarType = "sd" | "ci";
type AxisMode = "honest" | "truncated";

const SAMPLE_STEPS = [10, 15, 20, 30, 50, 100, 250, 500, 1000, 2000] as const;

const QUANT_PRESETS: Record<
  QuantContextId,
  {
    label: string;
    metric: string;
    g1: string;
    g2: string;
    m1: number;
    m2: number;
    sd: number;
    nIdx: number;
  }
> = {
  tech: {
    label: "Technology",
    metric: "Working-Memory Recall (0–100)",
    g1: "Phone Away",
    g2: "Phone on Desk",
    m1: 68,
    m2: 61,
    sd: 12,
    nIdx: 3, // n = 30
  },
  motivation: {
    label: "Motivation",
    metric: "Intrinsic Engagement (0–100)",
    g1: "Autonomy Coach",
    g2: "Leaderboard",
    m1: 74,
    m2: 65,
    sd: 11,
    nIdx: 3, // n = 30
  },
  culture: {
    label: "Culture",
    metric: "Collaborative Mastery (0–100)",
    g1: "Emic Group AI",
    g2: "Solo AI Tool",
    m1: 71,
    m2: 64,
    sd: 10,
    nIdx: 4, // n = 50
  },
};

function Paper3QuantLab() {
  const [contextId, setContextId] = useState<QuantContextId>("tech");
  const [m1, setM1] = useState<number>(68);
  const [m2, setM2] = useState<number>(61);
  const [sd, setSd] = useState<number>(12);
  const [nIdx, setNIdx] = useState<number>(3);
  const [alphaStr, setAlphaStr] = useState<AlphaChoice>("0.05");
  const [barType, setBarType] = useState<BarType>("sd");
  const [axisMode, setAxisMode] = useState<AxisMode>("honest");

  const preset = QUANT_PRESETS[contextId];
  const n = SAMPLE_STEPS[nIdx];
  const alpha = Number(alphaStr);

  const applyContext = (next: QuantContextId) => {
    const p = QUANT_PRESETS[next];
    setContextId(next);
    setM1(p.m1);
    setM2(p.m2);
    setSd(p.sd);
    setNIdx(p.nIdx);
    setAxisMode("honest");
  };

  const applyLargeNTrap = () => {
    setM1(64.5);
    setM2(63.0);
    setSd(12);
    setNIdx(9); // n = 2000 per group (N = 4000)
    setAlphaStr("0.05");
    setAxisMode("truncated");
  };

  const applyUnderpoweredPilot = () => {
    setM1(72);
    setM2(64);
    setSd(13);
    setNIdx(0); // n = 10 per group (N = 20)
    setAlphaStr("0.05");
    setAxisMode("honest");
  };

  const stats = useMemo(() => {
    const diff = m1 - m2;
    const d = diff / sd;
    const absD = Math.abs(d);
    const df = 2 * n - 2;
    const seDiff = sd * Math.sqrt(2 / n);
    const tStat = Math.abs(diff) / seDiff;
    const pVal = twoTailedTP(tStat, df);
    const significant = pVal < alpha;
    const overlapPct = 200 * normalCdf(-absD / 2);
    const tCrit95 = 1.96 + 2.37 / df + 3.2 / (df * df);
    const ci95 = tCrit95 * (sd / Math.sqrt(n));
    const dInfo = classifyD(absD);
    return { diff, d, absD, df, tStat, pVal, significant, overlapPct, ci95, dInfo };
  }, [m1, m2, sd, n, alpha]);

  // SVG Left Panel geometry (Bar chart: x = 54..248, y = 34..176)
  const yMin = axisMode === "honest" ? 0 : Math.max(0, Math.floor(Math.min(m1, m2) - 5));
  const yMax = axisMode === "honest" ? 100 : Math.min(100, Math.ceil(Math.max(m1, m2) + 5));
  const ySpan = Math.max(4, yMax - yMin);
  const toBarY = (val: number) => {
    const clamped = Math.max(yMin, Math.min(yMax, val));
    return 176 - ((clamped - yMin) / ySpan) * 138;
  };
  const errHalf = barType === "sd" ? sd : stats.ci95;

  // SVG Right Panel geometry (Normal bell curves: x = 296..546, y = 44..176)
  const curvePaths = useMemo(() => {
    const xLeft = 300;
    const xRight = 542;
    const baseY = 176;
    const peakH = 112;
    const midMean = (m1 + m2) / 2;
    const halfSpan = Math.max(3.6 * sd, Math.abs(m1 - m2) * 0.75 + 2.6 * sd);
    const xMinVal = midMean - halfSpan;
    const xMaxVal = midMean + halfSpan;
    const mapX = (v: number) => xLeft + ((v - xMinVal) / (xMaxVal - xMinVal)) * (xRight - xLeft);
    const gauss = (v: number, mu: number) => {
      const z = (v - mu) / sd;
      return Math.exp(-0.5 * z * z);
    };
    const buildCurve = (mu: number) => {
      const pts: string[] = [];
      const steps = 64;
      for (let i = 0; i <= steps; i++) {
        const v = xMinVal + (i / steps) * (xMaxVal - xMinVal);
        const px = mapX(v).toFixed(1);
        const py = (baseY - gauss(v, mu) * peakH).toFixed(1);
        pts.push(`${i === 0 ? "M" : "L"} ${px} ${py}`);
      }
      return `${pts.join(" ")} L ${xRight} ${baseY} L ${xLeft} ${baseY} Z`;
    };
    return {
      path1: buildCurve(m1),
      path2: buildCurve(m2),
      x1: mapX(m1),
      x2: mapX(m2),
    };
  }, [m1, m2, sd]);

  const isLargeNTrap = stats.significant && stats.absD < 0.2;
  const isType2Risk = !stats.significant && stats.absD >= 0.5;

  return (
    <WidgetFrame
      title="Paper 3 p-Value, Effect Size (Cohen's d) & Error-Bar Lab [HL]"
      tryThis={[
        "Click **Large-N Triviality Trap** to see `p < 0.001` hide a tiny `d = 0.13` gap magnified by a truncated y-axis!",
        "Click **Underpowered Pilot** (`n = 10`) to watch a real medium-to-large effect (`d = 0.62`) miss `p < 0.05` (Type II error risk).",
        "Toggle **±1 SD vs 95% CI** as you raise `n` from `10` to `2,000`: notice which error bar shrinks while the other stays fixed!",
      ]}
      caption={
        <div className="space-y-1">
          <p className="font-bold">
            {isLargeNTrap ? (
              <span className="text-bad">
                ⚠️ Large-N Triviality Trap detected! p = {formatP(stats.pVal)} rejects H₀ purely because N = {(2 * n).toLocaleString()}, yet Cohen&apos;s d = {stats.d.toFixed(2)} ({stats.dInfo.label}) leaves {stats.overlapPct.toFixed(0)}% distribution overlap!
              </span>
            ) : isType2Risk ? (
              <span className="text-warn">
                🔎 Underpowered Type II Risk! Despite a {stats.dInfo.label.toLowerCase()} effect (d = {stats.d.toFixed(2)}), p = {formatP(stats.pVal)} ≥ {alphaStr} at n = {n}/group — never write “proves zero effect”!
              </span>
            ) : (
              <span>
                <strong>Paper 3 Verdict ({preset.label}):</strong>{" "}
                {stats.significant
                  ? `Statistically significant at α = ${alphaStr} (reject H₀, p = ${formatP(stats.pVal)})`
                  : `Not statistically significant at α = ${alphaStr} (fail to reject H₀, p = ${formatP(stats.pVal)})`}{" "}
                with a <strong>{stats.dInfo.label.toLowerCase()}</strong> practical effect (Cohen&apos;s d = {stats.d.toFixed(2)}, {stats.overlapPct.toFixed(0)}% score overlap).
              </span>
            )}
          </p>
          {axisMode === "truncated" ? (
            <p className="text-xs text-bad">
              <strong>Visual Bias Warning:</strong> The left y-axis starts at {yMin} instead of 0 — artificially exaggerating a {Math.abs(stats.diff).toFixed(1)}-point difference on a 0–100 scale.
            </p>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        {/* Preset selectors & quick Paper 3 trap buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="HL Extension context"
            value={contextId}
            onChange={applyContext}
            options={[
              { value: "tech", label: "📱 Tech" },
              { value: "motivation", label: "🎯 Motivation" },
              { value: "culture", label: "🌏 Culture" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button type="button" onClick={applyLargeNTrap} className="btn btn-secondary btn-sm text-xs">
              🚨 Large-N Trap
            </button>
            <button type="button" onClick={applyUnderpoweredPilot} className="btn btn-secondary btn-sm text-xs">
              🧪 Type II Pilot
            </button>
          </div>
        </div>

        {/* Live dual-panel SVG visualization */}
        <div className="rounded-xl border border-line bg-white p-2 text-[#1c1630]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 560 218"
            role="img"
            aria-label={`Interactive Paper 3 comparison of ${preset.g1} mean ${m1} and ${preset.g2} mean ${m2} with ${barType === "sd" ? "plus or minus 1 SD" : "95% CI"} error bars and overlapping score distributions showing Cohen d of ${stats.d.toFixed(2)}`}
            className="block h-auto w-full"
          >
            {/* Left panel: Bar Chart */}
            <rect
              x="6"
              y="6"
              width="266"
              height="206"
              rx="8"
              fill={axisMode === "truncated" ? "#fff7ed" : "#f8f7fc"}
              stroke={axisMode === "truncated" ? "#fb923c" : "#e2dcf0"}
            />
            <text x="139" y="24" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="#1c1630">
              {preset.metric}
            </text>
            {axisMode === "truncated" ? (
              <text x="139" y="36" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#c2410c">
                TRUNCATED AXIS ({yMin}–{yMax}) · BIAS TRAP!
              </text>
            ) : (
              <text x="139" y="36" fontSize="8.5" textAnchor="middle" fill="#5b5375">
                Honest 0–100 scale · Error bars = {barType === "sd" ? "±1 SD" : "95% CI"}
              </text>
            )}

            {/* Axes */}
            <line x1="48" y1="38" x2="48" y2="176" stroke="#1c1630" strokeWidth="1.4" />
            <line x1="48" y1="176" x2="254" y2="176" stroke="#1c1630" strokeWidth="1.4" />
            {[yMin, Math.round((yMin + yMax) / 2), yMax].map((tick) => (
              <g key={tick}>
                <line x1="44" y1={toBarY(tick)} x2="254" y2={toBarY(tick)} stroke="#e2dcf0" strokeDasharray="3,3" />
                <text x="41" y={toBarY(tick) + 3} fontSize="8.5" textAnchor="end" fill="#5b5375">
                  {tick}
                </text>
              </g>
            ))}

            {/* Group 1 bar + error bar */}
            <rect
              x="76"
              y={toBarY(m1)}
              width="52"
              height={Math.max(2, 176 - toBarY(m1))}
              rx="3"
              fill="#7c3aed"
              fillOpacity="0.82"
            />
            <line x1="102" y1={toBarY(m1 + errHalf)} x2="102" y2={toBarY(m1 - errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <line x1="94" y1={toBarY(m1 + errHalf)} x2="110" y2={toBarY(m1 + errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <line x1="94" y1={toBarY(m1 - errHalf)} x2="110" y2={toBarY(m1 - errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <text x="102" y="191" fontSize="9" fontWeight="700" textAnchor="middle" fill="#4c1d95">
              {preset.g1}
            </text>
            <text x="102" y="203" fontSize="8.5" textAnchor="middle" fill="#5b5375">
              M₁ = {m1.toFixed(1)}
            </text>

            {/* Group 2 bar + error bar */}
            <rect
              x="166"
              y={toBarY(m2)}
              width="52"
              height={Math.max(2, 176 - toBarY(m2))}
              rx="3"
              fill="#0d9488"
              fillOpacity="0.82"
            />
            <line x1="192" y1={toBarY(m2 + errHalf)} x2="192" y2={toBarY(m2 - errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <line x1="184" y1={toBarY(m2 + errHalf)} x2="200" y2={toBarY(m2 + errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <line x1="184" y1={toBarY(m2 - errHalf)} x2="200" y2={toBarY(m2 - errHalf)} stroke="#1c1630" strokeWidth="1.8" />
            <text x="192" y="191" fontSize="9" fontWeight="700" textAnchor="middle" fill="#115e59">
              {preset.g2}
            </text>
            <text x="192" y="203" fontSize="8.5" textAnchor="middle" fill="#5b5375">
              M₂ = {m2.toFixed(1)}
            </text>

            {/* Right panel: Overlapping Normal Curves */}
            <rect x="282" y="6" width="272" height="206" rx="8" fill="#f8f7fc" stroke="#e2dcf0" />
            <text x="418" y="24" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="#1c1630">
              Individual Score Overlap (Cohen&apos;s d)
            </text>
            <text x="418" y="36" fontSize="8.5" textAnchor="middle" fill="#5b5375">
              d = {stats.d.toFixed(2)} ({stats.dInfo.label}) · {stats.overlapPct.toFixed(0)}% distributions overlap
            </text>
            <line x1="298" y1="176" x2="544" y2="176" stroke="#1c1630" strokeWidth="1.3" />
            <path d={curvePaths.path2} fill="#0d9488" fillOpacity="0.28" stroke="#0d9488" strokeWidth="2" />
            <path d={curvePaths.path1} fill="#7c3aed" fillOpacity="0.28" stroke="#7c3aed" strokeWidth="2" />
            <line x1={curvePaths.x1} y1="64" x2={curvePaths.x1} y2="176" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="3,2" />
            <line x1={curvePaths.x2} y1="64" x2={curvePaths.x2} y2="176" stroke="#0d9488" strokeWidth="1.3" strokeDasharray="3,2" />
            {Math.abs(curvePaths.x1 - curvePaths.x2) > 10 ? (
              <g>
                <line x1={curvePaths.x1} y1="54" x2={curvePaths.x2} y2="54" stroke="#1c1630" strokeWidth="1.5" />
                <text x={(curvePaths.x1 + curvePaths.x2) / 2} y="49" fontSize="8.5" fontWeight="800" textAnchor="middle" fill="#1c1630">
                  {Math.abs(stats.d).toFixed(2)} SD
                </text>
              </g>
            ) : null}
            <text x="418" y="193" fontSize="8.8" fontWeight="700" textAnchor="middle" fill="#5b5375">
              t({stats.df}) = {stats.tStat.toFixed(2)} · Total N = {(2 * n).toLocaleString()}
            </text>
            <text x="418" y="205" fontSize="8.3" textAnchor="middle" fill="#5b5375">
              Notice: changing n alters p &amp; 95% CI, NEVER Cohen&apos;s d!
            </text>
          </svg>
        </div>

        {/* Live numerical readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Cohen's d" value={`${stats.d.toFixed(2)} · ${stats.dInfo.label}`} tone={stats.dInfo.tone} />
          <Readout label="Two-tailed p" value={formatP(stats.pVal)} tone={stats.significant ? "good" : "ink"} />
          <Readout
            label={`Decision (α=${alphaStr})`}
            value={stats.significant ? "Reject H₀" : "Retain H₀"}
            tone={isLargeNTrap ? "bad" : stats.significant ? "good" : "ink"}
          />
          <Readout label="Score Overlap" value={`${stats.overlapPct.toFixed(0)}%`} tone="brand" />
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label={`${preset.g1} Mean (M₁)`}
            value={m1}
            min={35}
            max={85}
            step={0.5}
            onChange={setM1}
            format={(v) => v.toFixed(1)}
          />
          <Slider
            label={`${preset.g2} Mean (M₂)`}
            value={m2}
            min={35}
            max={85}
            step={0.5}
            onChange={setM2}
            format={(v) => v.toFixed(1)}
          />
          <Slider
            label="Common Spread (SD)"
            value={sd}
            min={4}
            max={24}
            step={0.5}
            onChange={setSd}
            format={(v) => `±${v.toFixed(1)}`}
          />
          <Slider
            label="Sample Size per Group (n)"
            value={nIdx}
            min={0}
            max={SAMPLE_STEPS.length - 1}
            step={1}
            onChange={setNIdx}
            format={(idx) => `n = ${SAMPLE_STEPS[idx]} (N = ${(SAMPLE_STEPS[idx] * 2).toLocaleString()})`}
          />
        </div>

        {/* Display toggles */}
        <div className="flex flex-wrap items-center gap-3">
          <Segmented
            label="Significance threshold alpha"
            value={alphaStr}
            onChange={setAlphaStr}
            options={[
              { value: "0.05", label: "α = 0.05" },
              { value: "0.01", label: "α = 0.01" },
            ]}
          />
          <Segmented
            label="Error bar type"
            value={barType}
            onChange={setBarType}
            options={[
              { value: "sd", label: "±1 SD Bars" },
              { value: "ci", label: "95% CI Bars" },
            ]}
          />
          <Segmented
            label="Vertical axis scale"
            value={axisMode}
            onChange={setAxisMode}
            options={[
              { value: "honest", label: "Honest Axis (0–100)" },
              { value: "truncated", label: "Truncated Axis Trap" },
            ]}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ==================== WIDGET 2: QUALITATIVE CODING LAB =====================

type QualCaseId = "culture-ai" | "motivation-streaks" | "tech-filters";
type QualLens = "semantic" | "latent" | "reflexivity";

interface TranscriptSpan {
  id: string;
  quote: string;
  semanticCode: string;
  latentTheme: string;
  codingType: "Inductive (Emic)" | "Deductive (SDT)";
  reflexivityFlag: string;
  trustworthinessPillar: "Credibility" | "Transferability" | "Dependability" | "Confirmability";
  remedy: string;
  paper3Sentence: string;
}

interface QualCase {
  id: QualCaseId;
  tabLabel: string;
  title: string;
  methodBrief: string;
  spans: TranscriptSpan[];
  auditClaim: string;
  auditIsFlawed: boolean;
  auditExplanation: string;
}

const QUAL_CASES: Record<QualCaseId, QualCase> = {
  "culture-ai": {
    id: "culture-ai",
    tabLabel: "🌏 Culture & AI",
    title: "Bicultural Student Interview on AI Study Chatbots (P4)",
    methodBrief:
      "Method Brief: n = 10 Year 12 students in Singapore; interviewed one-to-one by a Western visiting researcher who coded transcripts alone without member checking.",
    spans: [
      {
        id: "c1",
        quote: "“I ask the AI chatbot my physics doubts past midnight instead of raising my hand in class—",
        semanticCode: "Late-night chatbot use for academic questions instead of class participation",
        latentTheme: "Collectivist face-saving & avoiding disruption to group lesson flow (Emic norm)",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Personal reflexivity: An outsider Western coder risks mislabelling face-saving as 'social anxiety' or 'tech addiction' (imposed-etic bias).",
        trustworthinessPillar: "Credibility",
        remedy: "Run member checking with P4 and co-code with a culturally insider researcher (researcher triangulation).",
        paper3Sentence:
          "Source B (P4) illustrates how inductive emic coding uncovers collectivist face-saving norms rather than individual anxiety, highlighting why researcher reflexivity protects Perspective and Credibility.",
      },
      {
        id: "c2",
        quote: "I don't want to slow everyone else down or look selfish before mock exams.",
        semanticCode: "Concern about delaying classmates during exam preparation",
        latentTheme: "Socially oriented achievement motivation balancing peer harmony with exam pressure",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Confirmability risk: Coding deductively via Western individualist autonomy scales would erase P4's relational motivation.",
        trustworthinessPillar: "Confirmability",
        remedy: "Maintain a reflexive bracketing journal documenting cultural assumptions throughout codebook revisions.",
        paper3Sentence:
          "By keeping a reflexive journal and audit trail, analysts improve Confirmability so P4's group-harmony motive is grounded in participant voice rather than Western preconceptions.",
      },
      {
        id: "c3",
        quote: "Honestly, it never judges me—though I feel a bit guilty hiding my stress from real friends.”",
        semanticCode: "Perceived non-judgemental AI support paired with guilt toward friends",
        latentTheme: "Emotional displacement: 24/7 algorithmic reassurance subtly substituting for human relatedness",
        codingType: "Deductive (SDT)",
        reflexivityFlag: "Negative-case alert: Deleting P4's guilt clause to tell a tidy 'AI lowers stress' story commits confirmation bias!",
        trustworthinessPillar: "Dependability",
        remedy: "Log both positive reassurance and negative displacement codes transparently in a time-stamped audit trail.",
        paper3Sentence:
          "Retaining P4's ambivalence ('guilty hiding my stress') acts as negative-case analysis, strengthening Credibility and exposing an ethical Responsibility concern around emotional AI dependency.",
      },
    ],
    auditClaim:
      "“Because 4 of the 10 interviewees mentioned hiding stress from friends, this qualitative source proves 40% of Asian teenagers suffer AI-induced isolation.”",
    auditIsFlawed: true,
    auditExplanation:
      "Flawed! This commits **quantification bias** — converting 4/10 purposive interviewees into a statistical population percentage ('40% of Asian teenagers'). Judge contextual fit via **thick description (Transferability)** instead.",
  },
  "motivation-streaks": {
    id: "motivation-streaks",
    tabLabel: "🎯 Streaks & SDT",
    title: "Teacher-Moderated Interview on Gamified Vocabulary App (P2)",
    methodBrief:
      "Method Brief: n = 8 students interviewed by their own subject teacher right after a 2-week leaderboard trial (Source A showed daily app minutes rose d = 0.78, yet retention failed to improve, p = 0.44).",
    spans: [
      {
        id: "m1",
        quote: "“Oh, the streak flames definitely motivate me—I would never skip a day, of course!",
        semanticCode: "Verbal endorsement of daily streak flames as motivating",
        latentTheme: "Performative compliance & polite impression management toward an authority figure",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Personal reflexivity: Because the interviewer is P2's own grading teacher, power asymmetry fuels strong social desirability ('of course!').",
        trustworthinessPillar: "Confirmability",
        remedy: "Replace the grading teacher with an independent external interviewer and guarantee pseudonymized confidentiality.",
        paper3Sentence:
          "Personal reflexivity exposes teacher–student power asymmetry in P2's emphatic praise ('of course!'), indicating social desirability bias that weakens qualitative Confirmability.",
      },
      {
        id: "m2",
        quote: "Usually at 11:55 p.m. I just tap through Level 1 flashcards I already know",
        semanticCode: "Repeating easy Level 1 cards right before midnight deadline",
        latentTheme: "Extrinsic metric gaming undermining Measurement validity of 'daily minutes'",
        codingType: "Deductive (SDT)",
        reflexivityFlag: "Mixed-method triangulation goldmine: P2 explains WHY Source A's high logged minutes (d = 0.78) failed to boost retention (p = 0.44)!",
        trustworthinessPillar: "Credibility",
        remedy: "Triangulate verbatim admissions with behavioural retention tests rather than relying on raw platform minutes.",
        paper3Sentence:
          "Triangulating Source A (d = 0.78 minutes vs p = 0.44 retention) with Source B (P2 repeating Level 1 cards at 11:55 p.m.) exposes poor construct validity under Measurement.",
      },
      {
        id: "m3",
        quote: "so my flame doesn't reset—I honestly stopped enjoying the new words.”",
        semanticCode: "Loss of enjoyment while protecting the streak counter",
        latentTheme: "Overjustification crowding-out: extrinsic streak loss-aversion erodes intrinsic autonomy (SDT)",
        codingType: "Deductive (SDT)",
        reflexivityFlag: "Transferability note: Without thick description of school grading pressure, readers cannot judge if this transfers to non-exam hobby learners.",
        trustworthinessPillar: "Transferability",
        remedy: "Provide thick description of age, exam pressure, and leaderboard visibility so readers judge contextual transfer.",
        paper3Sentence:
          "At a latent level, P2's lost enjoyment ('stopped enjoying the new words') illustrates SDT overjustification, showing how extrinsic streak anxiety crowds out intrinsic Change.",
      },
    ],
    auditClaim:
      "“Triangulating P2's admission about repeating easy Level 1 cards with Source A's non-significant retention test (p = 0.44) strengthens Credibility and exposes a Measurement construct-validity flaw.”",
    auditIsFlawed: false,
    auditExplanation:
      "Top-band Paper 3 reasoning! It integrates specific quantitative figures (`p = 0.44`) with verbatim qualitative voice (`P2`) via **methodological triangulation** and links directly to **Measurement**.",
  },
  "tech-filters": {
    id: "tech-filters",
    tabLabel: "📱 Focus Group",
    title: "Peer Focus Group on Social-Media Appearance Filters (P7)",
    methodBrief:
      "Method Brief: Two 6-person mixed-gender classroom focus groups (N = 12, aged 15–16) moderated publicly by a school counsellor; no demographic context or coding log published.",
    spans: [
      {
        id: "t1",
        quote: "“Nobody here really cares about beauty filters—we just use them for fun, right guys?",
        semanticCode: "Claims filters are purely playful with no personal concern",
        latentTheme: "Normative peer conformity & defensive minimisation in a public group setting",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Epistemological reflexivity: The focus-group format itself ('right guys?') triggers peer scrutiny, censoring private body-image vulnerability.",
        trustworthinessPillar: "Credibility",
        remedy: "Use private one-to-one interviews or anonymous longitudinal diaries so peer conformity does not distort accounts.",
        paper3Sentence:
          "Epistemological reflexivity reveals how the public focus-group method itself elicited peer-seeking validation ('right guys?'), lowering Credibility on sensitive appearance norms.",
      },
      {
        id: "t2",
        quote: "Though after seeing edited holiday posts for an hour I sometimes delete my own photos",
        semanticCode: "Deleting personal photos after prolonged exposure to edited peer posts",
        latentTheme: "Upward social comparison silently eroding self-efficacy despite verbal dismissal",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Internal contradiction cue: P7's behavioural admission clashes with their opening denial — coding only surface words misses this tension!",
        trustworthinessPillar: "Dependability",
        remedy: "Document coding rules for handling contradictory statements inside an explicit audit trail and codebook.",
        paper3Sentence:
          "Latent coding catches the contrast between P7's casual dismissal and photo-deletion behaviour, underscoring why transparent audit trails enhance Dependability.",
      },
      {
        id: "t3",
        quote: "—actually, forget I said that, it sounds stupid.”",
        semanticCode: "Self-censorship and embarrassment withdrawing a personal disclosure",
        latentTheme: "Psychological vulnerability requiring ethical Responsibility & safe withdrawal protocols",
        codingType: "Inductive (Emic)",
        reflexivityFlag: "Ethical Responsibility alert: Conducting body-image focus groups with 15-year-olds risks peer embarrassment and social harm!",
        trustworthinessPillar: "Transferability",
        remedy: "Ensure parental consent + minor assent, private withdrawal of quotes, debriefing support, and thick contextual reporting.",
        paper3Sentence:
          "P7's abrupt self-censorship ('forget I said that') flags an ethical Responsibility flaw: public peer focus groups risk psychological discomfort for minors and require confidential alternatives.",
      },
    ],
    auditClaim:
      "“With only N = 12 teenagers, this qualitative focus-group study is statistically invalid and unusable unless expanded to at least 200 interviewees.”",
    auditIsFlawed: true,
    auditExplanation:
      "Flawed! Dismissing qualitative inquiry solely for 'small N' applies the wrong quantitative yardstick. Critique **epistemological reflexivity** (public peer conformity), **missing audit trail (Dependability)**, and **minor ethical Responsibility** instead!",
  },
};

function QualitativeCodingLab() {
  const [caseId, setCaseId] = useState<QualCaseId>("culture-ai");
  const [lens, setLens] = useState<QualLens>("latent");
  const [activeSpanId, setActiveSpanId] = useState<string>("c1");
  const [auditChoice, setAuditChoice] = useState<"strong" | "flawed" | null>(null);

  const currentCase = QUAL_CASES[caseId];
  const activeSpan = currentCase.spans.find((s) => s.id === activeSpanId) ?? currentCase.spans[0];

  const switchCase = (next: QualCaseId) => {
    setCaseId(next);
    setActiveSpanId(QUAL_CASES[next].spans[0].id);
    setAuditChoice(null);
  };

  const spanHighlightClass = (isActive: boolean) => {
    if (lens === "semantic") {
      return isActive
        ? "bg-info-soft text-ink ring-2 ring-info"
        : "bg-info-soft/45 text-ink hover:bg-info-soft";
    }
    if (lens === "latent") {
      return isActive
        ? "bg-brand-soft text-ink ring-2 ring-brand"
        : "bg-brand-soft/45 text-ink hover:bg-brand-soft";
    }
    return isActive
      ? "bg-bad-soft text-ink ring-2 ring-bad"
      : "bg-bad-soft/45 text-ink hover:bg-bad-soft";
  };

  const auditCorrect =
    auditChoice !== null &&
    ((auditChoice === "flawed" && currentCase.auditIsFlawed) ||
      (auditChoice === "strong" && !currentCase.auditIsFlawed));

  return (
    <WidgetFrame
      title="Qualitative Coding & Researcher-Reflexivity Highlighter [HL]"
      tryThis={[
        "Click each highlighted transcript segment and switch between **Semantic**, **Latent**, and **Reflexivity** lenses.",
        "Spot how the **interviewer's identity** (personal reflexivity) and **focus-group format** (epistemological reflexivity) reshape Participant quotes.",
        "Complete the **Examiner Audit Check** at the bottom to test whether you can catch quantification bias and 'small N' fallacies!",
      ]}
      caption={
        <p>
          <strong>Paper 3 Model Sentence ({activeSpan.trustworthinessPillar}):</strong>{" "}
          {activeSpan.paper3Sentence}
        </p>
      }
    >
      <div className="space-y-4">
        {/* Case & Lens switchers */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Segmented
            label="Paper 3 qualitative transcript"
            value={caseId}
            onChange={switchCase}
            options={[
              { value: "culture-ai", label: QUAL_CASES["culture-ai"].tabLabel },
              { value: "motivation-streaks", label: QUAL_CASES["motivation-streaks"].tabLabel },
              { value: "tech-filters", label: QUAL_CASES["tech-filters"].tabLabel },
            ]}
          />
          <Segmented
            label="Qualitative analysis lens"
            value={lens}
            onChange={setLens}
            options={[
              { value: "semantic", label: "Surface (Semantic)" },
              { value: "latent", label: "Deep (Latent)" },
              { value: "reflexivity", label: "Reflexivity & Bias" },
            ]}
          />
        </div>

        {/* Method brief */}
        <div className="rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-xs leading-relaxed text-ink-2">
          <span className="font-extrabold text-ink">{currentCase.title}</span>
          <span className="mt-0.5 block">{currentCase.methodBrief}</span>
        </div>

        {/* Interactive clickable transcript */}
        <div className="rounded-xl border border-line bg-surface p-3.5 sm:p-4">
          <div className="mb-2 flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-ink-2">
            <span>Tap any highlighted phrase to inspect coding</span>
            <span className="chip">{activeSpan.codingType}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-sm leading-relaxed sm:text-base">
            {currentCase.spans.map((span, idx) => {
              const isActive = span.id === activeSpan.id;
              return (
                <button
                  key={span.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveSpanId(span.id)}
                  className={`cursor-pointer rounded-lg px-2 py-1 text-left font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${spanHighlightClass(isActive)}`}
                >
                  <span className="mr-1 text-xs font-extrabold opacity-70">[{idx + 1}]</span>
                  {span.quote}
                </button>
              );
            })}
          </div>
        </div>

        {/* Structured Analyst Card */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">Semantic (Surface) Code</div>
            <p className="mt-1 text-sm text-ink">{activeSpan.semanticCode}</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Latent (Underlying) Theme</div>
            <p className="mt-1 text-sm text-ink">{activeSpan.latentTheme}</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-bad">
              Reflexivity · {activeSpan.trustworthinessPillar}
            </div>
            <p className="mt-1 text-sm text-ink">{activeSpan.reflexivityFlag}</p>
            <p className="mt-1.5 text-xs font-semibold text-good">Fix: {activeSpan.remedy}</p>
          </div>
        </div>

        {/* Examiner Quick Audit */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Paper 3 Examiner Audit Check
          </div>
          <p className="mt-1 text-sm font-semibold text-ink">{currentCase.auditClaim}</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setAuditChoice("strong")}
              aria-pressed={auditChoice === "strong"}
              className={`btn btn-sm ${auditChoice === "strong" ? "btn-primary" : "btn-secondary"}`}
            >
              ✅ Strong HL Evaluation
            </button>
            <button
              type="button"
              onClick={() => setAuditChoice("flawed")}
              aria-pressed={auditChoice === "flawed"}
              className={`btn btn-sm ${auditChoice === "flawed" ? "btn-primary" : "btn-secondary"}`}
            >
              🚫 Flawed Reasoning
            </button>
          </div>
          {auditChoice !== null ? (
            <div
              role="status"
              aria-live="polite"
              className={`mt-2.5 rounded-lg border px-3 py-2 text-sm ${
                auditCorrect
                  ? "border-good bg-good-soft text-ink"
                  : "border-bad bg-bad-soft text-ink"
              }`}
            >
              <span className="font-extrabold">{auditCorrect ? "Spot on! " : "Not quite — "}</span>
              {renderInline(currentCase.auditExplanation)}
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "paper3-pvalue-cohens-d-lab",
    title: "Paper 3 p-Value, Cohen's d & Error-Bar Lab [HL]",
    blurb:
      "Manipulate group means, SD, sample size `n`, `α`, and axis truncation to see why `p < 0.05` never guarantees practical importance.",
    Component: Paper3QuantLab,
  },
  {
    id: "paper3-qual-coding-reflexivity",
    title: "Qualitative Coding & Reflexivity Highlighter [HL]",
    blurb:
      "Inspect semantic vs latent coding, personal & epistemological reflexivity, and Lincoln & Guba's 4 trustworthiness pillars on unseen Paper 3 quotes.",
    Component: QualitativeCodingLab,
  },
];

export default widgets;
