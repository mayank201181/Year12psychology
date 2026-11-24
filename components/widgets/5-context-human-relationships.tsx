"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type Ambiguity = "clear" | "ambiguous";
type CueMode = "passive" | "callout";

function BystanderAcrWidget() {
  const [bystanders, setBystanders] = useState(6);
  const [ambiguity, setAmbiguity] = useState<Ambiguity>("ambiguous");
  const [cue, setCue] = useState<CueMode>("passive");
  const [costHelp, setCostHelp] = useState(4);
  const [costNoHelp, setCostNoHelp] = useState(7);

  // Equal responsibility share 1/N (shifts to 100% under direct personal callout)
  const respShare = cue === "callout" ? 100 : +(100 / bystanders).toFixed(1);

  // Latané & Darley 5-step survival percentages (educational simulation calibrated to classic studies)
  const step1Notice = Math.max(72, 98 - Math.round((bystanders - 1) * 1.6));
  const step2Interpret =
    ambiguity === "clear"
      ? 96
      : Math.max(16, Math.round(78 - (bystanders - 1) * 6.5));
  const step3Resp =
    cue === "callout"
      ? 96
      : Math.max(24, Math.round(92 / Math.pow(bystanders, 0.42)));
  const costBoost = (costNoHelp - costHelp) * 4.2;
  const step5Act = Math.max(12, Math.min(96, Math.round(62 + costBoost)));

  const rawInd = (step1Notice / 100) * (step2Interpret / 100) * (step3Resp / 100) * (step5Act / 100);
  const indPct = Math.max(6, Math.min(96, Math.round(rawInd * 100)));
  // Probability that at least one bystander intervenes (Philpot et al., 2020 insight)
  const collectivePct = Math.max(
    indPct,
    Math.min(99, Math.round((1 - Math.pow(1 - indPct / 100, bystanders)) * 100)),
  );

  // Piliavin 2×2 Arousal–Cost–Reward Quadrant
  const highNoHelp = costNoHelp >= 6;
  const highHelp = costHelp >= 6;
  const quadrant = highNoHelp
    ? highHelp
      ? {
          id: "indirect",
          label: "Indirect Help / Redefine",
          detail: "High guilt yet high danger — witnesses call authorities or cognitively reduce victim blame.",
          tone: "brand" as const,
        }
      : {
          id: "direct",
          label: "Direct Intervention",
          detail: "High empathic arousal & low personal risk — rapid direct aid (Piliavin cane condition: 95%).",
          tone: "good" as const,
        }
    : highHelp
      ? {
          id: "leave",
          label: "Leave Scene / Ignore",
          detail: "Low guilt and high helping cost — bystanders walk away (Piliavin stigmatised/drunk trials).",
          tone: "bad" as const,
        }
      : {
          id: "norms",
          label: "Norm-Dependent Aid",
          detail: "Both costs are modest — cultural norms (e.g. Levine's simpatía) and mood tip the balance.",
          tone: "ink" as const,
        };

  const bars = [
    { label: "1. Notice", pct: step1Notice, color: "#7c3aed" },
    { label: "2. Interpret", pct: step2Interpret, color: ambiguity === "ambiguous" && bystanders > 1 ? "#c2410c" : "#7c3aed" },
    { label: "3. Responsibility", pct: step3Resp, color: cue === "passive" && bystanders > 1 ? "#ea580c" : "#15803d" },
    { label: "5. Cost–Reward", pct: step5Act, color: costNoHelp >= costHelp ? "#15803d" : "#c2410c" },
  ];

  return (
    <WidgetFrame
      title="Bystander Diffusion & Arousal–Cost–Reward Simulator"
      tryThis={[
        "Start at **6 passive witnesses** in an **ambiguous** scene, then switch to **Clear** and **Direct callout** — watch pluralistic ignorance and diffusion vanish.",
        "Raise **Cost of helping** to 8 while keeping **Cost of not helping** at 8 to trigger Piliavin's *Indirect Help / Redefine* quadrant.",
        "Compare **Individual %** (Darley & Latané) against **At least 1 helps %** (Philpot et al., 2020 CCTV finding) as crowd size grows.",
      ]}
      caption={
        <span>
          With <strong>{bystanders}</strong> {bystanders === 1 ? "witness" : "witnesses"} (
          {ambiguity === "ambiguous" ? "ambiguous cues" : "clear emergency"},{" "}
          {cue === "callout" ? "direct personal callout" : "silent crowd"}), each person feels{" "}
          <strong>{respShare}%</strong> responsibility (<M>{cue === "callout" ? "1/1" : `1/${bystanders}`}</M>).{" "}
          Piliavin&apos;s model predicts <strong>{quadrant.label}</strong>: {quadrant.detail}
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <Stepper
            label="Number of bystanders (N)"
            value={bystanders}
            min={1}
            max={12}
            onChange={setBystanders}
          />
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Emergency Clarity (Step 2)</div>
            <Segmented<Ambiguity>
              label="Emergency clarity"
              value={ambiguity}
              onChange={setAmbiguity}
              options={[
                { value: "clear", label: "Clear collapse" },
                { value: "ambiguous", label: "Ambiguous cue" },
              ]}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Social Accountability (Step 3)</div>
            <Segmented<CueMode>
              label="Social accountability"
              value={cue}
              onChange={setCue}
              options={[
                { value: "passive", label: "Silent crowd" },
                { value: "callout", label: "Direct callout" },
              ]}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Slider
            label="Cost of helping (danger / effort)"
            value={costHelp}
            min={1}
            max={10}
            onChange={setCostHelp}
            format={(v) => `${v} / 10`}
          />
          <Slider
            label="Cost of NOT helping (guilt / empathy)"
            value={costNoHelp}
            min={1}
            max={10}
            onChange={setCostNoHelp}
            format={(v) => `${v} / 10`}
          />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout label="Responsibility" value={`${respShare}%`} tone={respShare >= 50 ? "good" : "bad"} />
            <Readout label="Individual P(help)" value={`${indPct}%`} tone={indPct >= 50 ? "good" : "bad"} />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-white p-2 sm:p-3">
        <svg
          viewBox="0 0 500 205"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Live bystander decision step bars and Piliavin two-by-two arousal cost reward matrix"
          className="h-auto w-full"
        >
          <text x="128" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#1c1630">
            Latané &amp; Darley Step Survival (%)
          </text>
          {bars.map((b, idx) => {
            const y = 32 + idx * 38;
            const w = Math.max(8, Math.round((b.pct / 100) * 140));
            return (
              <g key={b.label}>
                <text x="8" y={y + 15} fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#334155">
                  {b.label}
                </text>
                <rect x="98" y={y + 3} width="140" height="17" rx="5" fill="#f1f5f9" />
                <rect x="98" y={y + 3} width={w} height="17" rx="5" fill={b.color} />
                <text x="244" y={y + 15} fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#1c1630">
                  {b.pct}%
                </text>
              </g>
            );
          })}

          <line x1="274" y1="12" x2="274" y2="192" stroke="#e2e8f0" strokeWidth="1.5" />

          <text x="388" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#1c1630">
            Piliavin Cost–Reward Matrix
          </text>
          <text x="342" y="34" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#475569">
            Low Help Cost
          </text>
          <text x="438" y="34" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#475569">
            High Help Cost
          </text>

          {/* Top-Left: Direct Intervention */}
          <rect
            x="294"
            y="42"
            width="92"
            height="64"
            rx="8"
            fill={quadrant.id === "direct" ? "#dcfce7" : "#f8fafc"}
            stroke={quadrant.id === "direct" ? "#15803d" : "#cbd5e1"}
            strokeWidth={quadrant.id === "direct" ? 2.4 : 1.2}
          />
          <text x="340" y="68" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#166534">
            Direct Help
          </text>
          <text x="340" y="83" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            High guilt,
          </text>
          <text x="340" y="94" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            low risk
          </text>

          {/* Top-Right: Indirect / Redefine */}
          <rect
            x="394"
            y="42"
            width="92"
            height="64"
            rx="8"
            fill={quadrant.id === "indirect" ? "#ede9fe" : "#f8fafc"}
            stroke={quadrant.id === "indirect" ? "#7c3aed" : "#cbd5e1"}
            strokeWidth={quadrant.id === "indirect" ? 2.4 : 1.2}
          />
          <text x="440" y="68" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#5b21b6">
            Indirect Aid
          </text>
          <text x="440" y="83" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            Call 995 /
          </text>
          <text x="440" y="94" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            redefine blame
          </text>

          {/* Bottom-Left: Norm-dependent */}
          <rect
            x="294"
            y="114"
            width="92"
            height="64"
            rx="8"
            fill={quadrant.id === "norms" ? "#e0f2fe" : "#f8fafc"}
            stroke={quadrant.id === "norms" ? "#0369a1" : "#cbd5e1"}
            strokeWidth={quadrant.id === "norms" ? 2.4 : 1.2}
          />
          <text x="340" y="140" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#075985">
            Social Norms
          </text>
          <text x="340" y="155" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            Simpatía &amp;
          </text>
          <text x="340" y="166" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            mood decide
          </text>

          {/* Bottom-Right: Leave Scene */}
          <rect
            x="394"
            y="114"
            width="92"
            height="64"
            rx="8"
            fill={quadrant.id === "leave" ? "#ffedd5" : "#f8fafc"}
            stroke={quadrant.id === "leave" ? "#c2410c" : "#cbd5e1"}
            strokeWidth={quadrant.id === "leave" ? 2.4 : 1.2}
          />
          <text x="440" y="140" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#9a3412">
            Leave Scene
          </text>
          <text x="440" y="155" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            Low guilt,
          </text>
          <text x="440" y="166" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155">
            high risk
          </text>

          <text x="285" y="77" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#475569" transform="rotate(-90 285 77)">
            High Guilt
          </text>
          <text x="285" y="148" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#475569" transform="rotate(-90 285 148)">
            Low Guilt
          </text>
          <text x="250" y="198" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#5b5375">
            Collective chance at least 1 of {bystanders} helps: {collectivePct}% (vs {indPct}% per individual)
          </text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Readout label="Piliavin Prediction" value={quadrant.label} tone={quadrant.tone} />
        <Readout
          label="≥ 1 Bystander Helps (Philpot)"
          value={`${collectivePct}%`}
          tone={collectivePct >= 75 ? "good" : "brand"}
        />
      </div>
    </WidgetFrame>
  );
}

type HorsemanKey = "criticism" | "contempt" | "defensiveness" | "stonewalling";

const HORSEMEN_META: ReadonlyArray<{ key: HorsemanKey; label: string; penalty: number }> = [
  { key: "criticism", label: "Criticism", penalty: 1 },
  { key: "contempt", label: "Contempt (strongest)", penalty: 3 },
  { key: "defensiveness", label: "Defensiveness", penalty: 1 },
  { key: "stonewalling", label: "Stonewalling", penalty: 2 },
];

function RusbultGottmanWidget() {
  const [pos, setPos] = useState(18);
  const [neg, setNeg] = useState(4);
  const [horsemen, setHorsemen] = useState<Record<HorsemanKey, boolean>>({
    criticism: false,
    contempt: false,
    defensiveness: false,
    stonewalling: false,
  });
  const [sat, setSat] = useState(7);
  const [alt, setAlt] = useState(3);
  const [inv, setInv] = useState(7);

  const toggleHorseman = (key: HorsemanKey) => {
    setHorsemen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ratio = +(pos / neg).toFixed(2);
  const addNeeded = Math.max(0, 5 * neg - pos);
  const horsemanRisk = HORSEMEN_META.reduce((sum, h) => sum + (horsemen[h.key] ? h.penalty : 0), 0);
  const commitment = sat - alt + inv; // range: 1 - 10 + 1 = -8 up to 10 - 1 + 10 = 19
  const commitPct = Math.max(0, Math.min(100, Math.round(((commitment + 8) / 27) * 100)));

  // Determine relationship profile & Duck phase indicator
  const stableRatio = ratio >= 5 && !horsemen.contempt;
  const profile =
    commitment >= 8 && sat <= 4
      ? {
          title: "Trapped Commitment (Low S, High I)",
          duckIndex: 1,
          tone: "bad" as const,
          note: "Rusbult's paradox: high investment and poor alternatives sustain commitment despite low satisfaction.",
        }
      : stableRatio && commitment >= 9 && horsemanRisk <= 1
        ? {
            title: "Stable & Thriving Maintenance",
            duckIndex: 0,
            tone: "good" as const,
            note: "Meets Gottman's ≥ 5 : 1 ratio without contempt, backed by strong Rusbult commitment.",
          }
        : commitment <= 2 || (ratio < 1.5 && horsemen.contempt)
          ? {
              title: "High Dissolution Risk",
              duckIndex: commitment <= 0 ? 4 : 3,
              tone: "bad" as const,
              note: horsemen.contempt
                ? "Active contempt plus collapsing commitment strongly forecast dissolution (Gottman & Levenson)."
                : "Low commitment and negative communication push the couple across Duck's social/grave-dressing thresholds.",
            }
          : {
              title: "Strain — Communication Repair Needed",
              duckIndex: horsemanRisk >= 3 || ratio < 3 ? 2 : 1,
              tone: "brand" as const,
              note:
                addNeeded > 0
                  ? `Below 5 : 1 — add ${addNeeded} positive interaction${addNeeded === 1 ? "" : "s"} and counter active Horsemen.`
                  : "Positivity ratio reaches 5 : 1, yet active Horsemen or attractive alternatives still create vulnerability.",
            };

  const duckPhases = ["Stable", "1. Intrapsychic", "2. Dyadic", "3. Social", "4. Grave-Dressing"];
  const ratioBarWidth = Math.min(280, Math.round((Math.min(ratio, 7) / 7) * 280));
  const fiveMarkerX = 112 + Math.round((5 / 7) * 280);
  const commitBarWidth = Math.max(6, Math.round((commitPct / 100) * 280));

  return (
    <WidgetFrame
      title="Rusbult Investment & Gottman 5:1 Relationship Stability Lab"
      tryThis={[
        "Set **Positive = 20** and **Negative = 4** to hit Gottman's exact **5 : 1** threshold, then toggle **Contempt** to see why disrespect overrides raw counts.",
        "Drop **Satisfaction (S) to 2**, set **Alternatives (A) to 2**, and raise **Investment (I) to 10** — notice how Rusbult's model predicts staying despite unhappiness.",
        "Raise **Alternatives (A) to 9** (e.g. swipe-based dating overload) while keeping **Investment (I) low** to watch commitment collapse into Duck's dissolution phases.",
      ]}
      caption={
        <span>
          <strong>Gottman ratio:</strong> {ratio.toFixed(1)} : 1{" "}
          {addNeeded > 0 ? `(needs +${addNeeded} positive for 5 : 1)` : "(meets ≥ 5 : 1)"} ·{" "}
          <strong>Rusbult <M>{"C = S - A + I"}</M>:</strong>{" "}
          <M>{`${sat} - ${alt} + ${inv} = ${commitment}`}</M>. {profile.note}
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-line bg-surface-2/50 p-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            Gottman 15-Min Conflict Coding
          </div>
          <Slider
            label="Positive interactions (P)"
            value={pos}
            min={0}
            max={30}
            onChange={setPos}
          />
          <Slider
            label="Negative interactions (N)"
            value={neg}
            min={1}
            max={10}
            onChange={setNeg}
          />
          <div className="space-y-1.5 pt-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Toggle Active Four Horsemen
            </div>
            <div className="flex flex-wrap gap-1.5">
              {HORSEMEN_META.map((h) => {
                const active = horsemen[h.key];
                return (
                  <button
                    key={h.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleHorseman(h.key)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                      active
                        ? "border-bad bg-bad-soft text-bad"
                        : "border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    {active ? "✓ " : "+ "}
                    {h.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-line bg-surface-2/50 p-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            Rusbult Investment Model (C = S − A + I)
          </div>
          <Slider
            label="Satisfaction (S)"
            value={sat}
            min={1}
            max={10}
            onChange={setSat}
            format={(v) => `${v} / 10`}
          />
          <Slider
            label="Quality of Alternatives (A)"
            value={alt}
            min={1}
            max={10}
            onChange={setAlt}
            format={(v) => `${v} / 10`}
          />
          <Slider
            label="Investment Size (I)"
            value={inv}
            min={1}
            max={10}
            onChange={setInv}
            format={(v) => `${v} / 10`}
          />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-white p-2 sm:p-3">
        <svg
          viewBox="0 0 500 202"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Live gauges showing Gottman positive to negative conflict ratio against the 5 to 1 threshold, Rusbult commitment score, and Duck dissolution phase indicator"
          className="h-auto w-full"
        >
          {/* Gottman Ratio Bar */}
          <text x="14" y="24" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#1c1630">
            Gottman P : N
          </text>
          <rect x="112" y="12" width="280" height="20" rx="6" fill="#f1f5f9" />
          <rect
            x="112"
            y="12"
            width={Math.max(4, ratioBarWidth)}
            height="20"
            rx="6"
            fill={ratio >= 5 && !horsemen.contempt ? "#15803d" : ratio >= 3 ? "#f59e0b" : "#c2410c"}
          />
          <line x1={fiveMarkerX} y1="6" x2={fiveMarkerX} y2="38" stroke="#1c1630" strokeWidth="2" strokeDasharray="3 2" />
          <text x={fiveMarkerX} y="50" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#1c1630">
            5 : 1 threshold
          </text>
          <text x="404" y="26" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#1c1630">
            {ratio.toFixed(1)} : 1
          </text>

          {/* Rusbult Commitment Bar */}
          <text x="14" y="84" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#1c1630">
            Commitment (C)
          </text>
          <rect x="112" y="71" width="280" height="20" rx="6" fill="#f1f5f9" />
          <rect
            x="112"
            y="71"
            width={commitBarWidth}
            height="20"
            rx="6"
            fill={commitment >= 8 ? "#7c3aed" : commitment >= 4 ? "#0369a1" : "#c2410c"}
          />
          <text x="404" y="85" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#1c1630">
            C = {commitment}
          </text>
          <text x="112" y="106" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#475569">
            S ({sat}) − A ({alt}) + I ({inv}) = {commitment} ({commitPct}% structural commitment)
          </text>

          {/* Duck's 4-Phase Dissolution Indicator */}
          <text x="14" y="136" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#4c1d95">
            Duck&apos;s Dissolution Trajectory Indicator
          </text>
          {duckPhases.map((label, i) => {
            const x = 14 + i * 95;
            const active = i === profile.duckIndex;
            const passed = i < profile.duckIndex;
            const fill = active
              ? i === 0
                ? "#dcfce7"
                : "#ffedd5"
              : passed
                ? "#ede9fe"
                : "#f8fafc";
            const stroke = active
              ? i === 0
                ? "#15803d"
                : "#c2410c"
              : passed
                ? "#7c3aed"
                : "#cbd5e1";
            return (
              <g key={label}>
                <rect x={x} y="146" width="88" height="36" rx="8" fill={fill} stroke={stroke} strokeWidth={active ? 2.2 : 1.2} />
                <text
                  x={x + 44}
                  y="168"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                  fontSize="9"
                  fontWeight={active ? "800" : "600"}
                  fill={active ? "#1c1630" : "#475569"}
                >
                  {label}
                </text>
              </g>
            );
          })}
          <text x="250" y="196" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#5b5375">
            {horsemen.contempt
              ? "Warning: Contempt active — single strongest behavioural predictor of divorce."
              : "Tip: Combine Gottman observational metrics with Rusbult structural commitment."}
          </text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Readout label="Gottman Ratio" value={`${ratio.toFixed(1)} : 1`} tone={stableRatio ? "good" : "bad"} />
        <Readout label="Rusbult Commitment" value={`C = ${commitment}`} tone={commitment >= 8 ? "brand" : "bad"} />
        <Readout label="Diagnosis" value={profile.title} tone={profile.tone} />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bystander-diffusion-acr",
    title: "Bystander Diffusion & Arousal–Cost–Reward Simulator",
    blurb: "Adjust crowd size N, clarity, direct callout, and Piliavin costs to compare individual diffusion with collective intervention.",
    Component: BystanderAcrWidget,
  },
  {
    id: "rusbult-gottman-stability-lab",
    title: "Rusbult Investment & Gottman 5:1 Relationship Stability Lab",
    blurb: "Test Gottman's 5:1 conflict ratio, Four Horsemen, and Rusbult's C = S − A + I commitment equation side-by-side.",
    Component: RusbultGottmanWidget,
  },
];

export default widgets;
