"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type InterventionKey = "none" | "ssri" | "cbt" | "combined" | "community";
type SeverityKey = "mild" | "severe";

interface TreatmentProfile {
  label: string;
  shortLabel: string;
  acuteRemissionMild: number;
  acuteRemissionSevere: number;
  relapse12mMild: number;
  relapse12mSevere: number;
  culturalFit: string;
  summary: string;
}

const TREATMENTS: Record<InterventionKey, TreatmentProfile> = {
  none: {
    label: "Placebo / Waitlist",
    shortLabel: "Control",
    acuteRemissionMild: 42,
    acuteRemissionSevere: 26,
    relapse12mMild: 62,
    relapse12mSevere: 78,
    culturalFit: "Baseline",
    summary:
      "Placebo expectancy still drives substantial improvement in mild–moderate distress (Kirsch et al., 2008), but drops sharply in severe, chronic episodes.",
  },
  ssri: {
    label: "SSRI Only",
    shortLabel: "SSRI",
    acuteRemissionMild: 52,
    acuteRemissionSevere: 46,
    relapse12mMild: 68,
    relapse12mSevere: 74,
    culturalFit: "Low literacy barrier",
    summary:
      "Blocks presynaptic SERT reuptake and promotes BDNF plasticity. Clinically clearer advantage over placebo in severe MDD (Kirsch, 2008; Cipriani, 2018), yet discontinuation carries high relapse because schemas remain unchanged (Hollon, 2005).",
  },
  cbt: {
    label: "CBT Only",
    shortLabel: "CBT",
    acuteRemissionMild: 62,
    acuteRemissionSevere: 50,
    relapse12mMild: 28,
    relapse12mSevere: 34,
    culturalFit: "Needs adaptation",
    summary:
      "Cognitive restructuring and behavioural activation match medication acutely and roughly halve 12-month relapse (DeRubeis, 2005; Hollon, 2005), though severe inertia or unadapted Western norms can impede engagement.",
  },
  combined: {
    label: "SSRI + CBT",
    shortLabel: "Combined",
    acuteRemissionMild: 67,
    acuteRemissionSevere: 66,
    relapse12mMild: 26,
    relapse12mSevere: 31,
    culturalFit: "Resource-intensive",
    summary:
      "Outperforms either monotherapy in severe and chronic MDD (Cuijpers et al., 2014): SSRIs relieve acute inertia enough to unlock durable CBT skill-building.",
  },
  community: {
    label: "Culturally Adapted",
    shortLabel: "Community",
    acuteRemissionMild: 66,
    acuteRemissionSevere: 54,
    relapse12mMild: 32,
    relapse12mSevere: 42,
    culturalFit: "High emic fit",
    summary:
      "Models such as Zimbabwe's Friendship Bench (Chibanda et al., 2016) and adapted therapies (Griner & Smith, 2006, d = 0.45) lower stigma and expand equitable access (Perspective & Responsibility).",
  },
};

function BiopsychosocialTreatmentComparator() {
  const [bio, setBio] = useState(55);
  const [cog, setCog] = useState(60);
  const [socio, setSocio] = useState(65);
  const [buffer, setBuffer] = useState(25);
  const [severity, setSeverity] = useState<SeverityKey>("severe");
  const [treatment, setTreatment] = useState<InterventionKey>("combined");

  // Weighted biopsychosocial diathesis-stress index (threshold = 100)
  const rawLoad = Math.round(bio * 0.55 + cog * 0.6 + socio * 0.65);
  const netLoad = Math.max(0, Math.min(160, rawLoad - Math.round(buffer * 0.75)));
  const threshold = 100;
  const crossesThreshold = netLoad >= threshold;

  const t = TREATMENTS[treatment];
  const baseCtrl = TREATMENTS.none;
  const placeboRemission = severity === "mild" ? baseCtrl.acuteRemissionMild : baseCtrl.acuteRemissionSevere;

  // Adjust remission slightly by protective buffer (+ up to 6 pts)
  const bufferBonus = Math.round((buffer - 25) * 0.1);
  const acuteRemission = Math.max(
    12,
    Math.min(88, (severity === "mild" ? t.acuteRemissionMild : t.acuteRemissionSevere) + bufferBonus),
  );
  const relapse12m = Math.max(
    14,
    Math.min(88, (severity === "mild" ? t.relapse12mMild : t.relapse12mSevere) - Math.round(bufferBonus * 0.8)),
  );

  const arr = (acuteRemission - Math.max(12, Math.min(88, placeboRemission + bufferBonus))) / 100;
  const nntDisplay = treatment === "none" ? "—" : arr > 0.01 ? (1 / arr).toFixed(1) : "N/A";

  // SVG bar widths (max bar = 240px corresponding to 160 load pts)
  const scaleLoad = (v: number) => Math.min(240, Math.max(0, (v / 160) * 240));
  const bioW = scaleLoad(bio * 0.55);
  const cogW = scaleLoad(cog * 0.6);
  const socioW = scaleLoad(socio * 0.65);
  const netBarW = scaleLoad(netLoad);
  const threshX = 24 + scaleLoad(threshold);

  return (
    <WidgetFrame
      title="Biopsychosocial Aetiology & Treatment Comparator"
      tryThis={[
        "Raise **Biological Diathesis** to 80%, then increase **Protective Social Buffer** to 70% — notice how a confiding network keeps net risk below the clinical threshold (Brown & Harris, 1978).",
        "Switch between **Mild–Moderate** and **Severe / Chronic** while selecting **SSRI Only**: watch **NNT vs Placebo** tighten dramatically (Kirsch et al., 2008).",
        "Compare **SSRI Only** against **CBT Only** and **SSRI + CBT** on **12-Month Relapse %** (Hollon et al., 2005; Cuijpers et al., 2014).",
      ]}
      caption={
        <span>
          <strong>{t.label} ({severity === "mild" ? "Mild–Moderate" : "Severe / Chronic"}):</strong> {t.summary}{" "}
          {crossesThreshold
            ? `Current biopsychosocial net load (${netLoad}) crosses the clinical threshold (${threshold}), showing how polygenic vulnerability, negative schemas, and chronic stressors interact.`
            : `Current biopsychosocial net load (${netLoad}) stays below the clinical threshold (${threshold}) — illustrating probabilistic Causality and social buffering.`}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              1. Diathesis–Stress Inputs (Aetiology)
            </div>
            <Slider
              label="Biological Diathesis (Genes / HPA)"
              value={bio}
              min={10}
              max={90}
              step={5}
              onChange={setBio}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Cognitive Schema Risk (Beck Triad)"
              value={cog}
              min={10}
              max={90}
              step={5}
              onChange={setCog}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Sociocultural Stressors (Adversity)"
              value={socio}
              min={10}
              max={90}
              step={5}
              onChange={setSocio}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Protective Social Buffer (Confiding Support)"
              value={buffer}
              min={0}
              max={80}
              step={5}
              onChange={setBuffer}
              format={(v) => `−${v}%`}
            />
          </div>

          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              2. Clinical Severity &amp; Intervention Plan
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-ink-2">Baseline Episode Severity</div>
              <Segmented<SeverityKey>
                label="Baseline Episode Severity"
                value={severity}
                onChange={setSeverity}
                options={[
                  { value: "mild", label: "Mild–Moderate" },
                  { value: "severe", label: "Severe / Chronic" },
                ]}
              />
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-ink-2">Intervention Strategy</div>
              <Segmented<InterventionKey>
                label="Intervention Strategy"
                value={treatment}
                onChange={setTreatment}
                options={[
                  { value: "none", label: "Control" },
                  { value: "ssri", label: "SSRI" },
                  { value: "cbt", label: "CBT" },
                  { value: "combined", label: "Combined" },
                  { value: "community", label: "Community" },
                ]}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Readout
                label="Net Risk Load"
                value={`${netLoad} / 100`}
                tone={crossesThreshold ? "bad" : "good"}
              />
              <Readout
                label="NNT vs Placebo"
                value={nntDisplay}
                tone={treatment === "none" ? "ink" : "brand"}
              />
              <Readout label="12-Wk Remission" value={`${acuteRemission}%`} tone="good" />
              <Readout
                label="12-Mo Relapse"
                value={`${relapse12m}%`}
                tone={relapse12m <= 36 ? "good" : "bad"}
              />
            </div>
          </div>
        </div>

        {/* Live SVG visualization */}
        <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 215"
            role="img"
            aria-label="Live biopsychosocial threshold meter and treatment remission versus 12 month relapse chart"
            className="h-auto w-full"
          >
            {/* Left: Diathesis-Stress Stacked Bar */}
            <text x="24" y="22" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#1c1630">
              Diathesis × Stress Threshold Meter
            </text>

            {/* Stacked raw components */}
            <text x="24" y="42" fontFamily="system-ui, sans-serif" fontSize="10.5" fill="#475569">
              Unbuffered load (Bio + Cog + Socio): {rawLoad} pts
            </text>
            <rect x="24" y="50" width="240" height="22" rx="6" fill="#f1f5f9" />
            <rect x="24" y="50" width={Math.min(240, bioW)} height="22" rx="4" fill="#7c3aed" />
            <rect
              x={24 + Math.min(240, bioW)}
              y="50"
              width={Math.max(0, Math.min(240 - bioW, cogW))}
              height="22"
              fill="#0d9488"
            />
            <rect
              x={24 + Math.min(240, bioW + cogW)}
              y="50"
              width={Math.max(0, Math.min(240 - bioW - cogW, socioW))}
              height="22"
              rx="4"
              fill="#ea580c"
            />

            {/* Net buffered load */}
            <text x="24" y="96" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="700" fill="#1e293b">
              Net load (after −{Math.round(buffer * 0.75)} buffer): {netLoad} pts
            </text>
            <rect x="24" y="104" width="240" height="26" rx="6" fill="#f1f5f9" />
            <rect
              x="24"
              y="104"
              width={netBarW}
              height="26"
              rx="6"
              fill={crossesThreshold ? "#dc2626" : "#15803d"}
            />
            <text
              x={Math.max(54, Math.min(254, 24 + netBarW - 8))}
              y="121"
              textAnchor="end"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight="800"
              fill="#ffffff"
            >
              {crossesThreshold ? "EPISODE" : "BUFFERED"}
            </text>

            {/* Threshold marker */}
            <line x1={threshX} y1="45" x2={threshX} y2="142" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
            <text x={threshX} y="156" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#dc2626">
              Threshold (100)
            </text>

            {/* Legend */}
            <rect x="24" y="176" width="10" height="10" rx="2" fill="#7c3aed" />
            <text x="38" y="185" fontFamily="system-ui, sans-serif" fontSize="10" fill="#334155">Bio</text>
            <rect x="74" y="176" width="10" height="10" rx="2" fill="#0d9488" />
            <text x="88" y="185" fontFamily="system-ui, sans-serif" fontSize="10" fill="#334155">Cog</text>
            <rect x="128" y="176" width="10" height="10" rx="2" fill="#ea580c" />
            <text x="142" y="185" fontFamily="system-ui, sans-serif" fontSize="10" fill="#334155">Socio</text>
            <text x="24" y="203" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#64748b">
              Cultural fit ({t.shortLabel}): {t.culturalFit}
            </text>

            {/* Divider */}
            <line x1="296" y1="16" x2="296" y2="202" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Right: Treatment Outcome Comparison Bars */}
            <text x="318" y="22" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#1c1630">
              Treatment Outcomes: {t.label}
            </text>
            <text x="318" y="40" fontFamily="system-ui, sans-serif" fontSize="9.8" fill="#475569">
              Kirsch (2008) · Hollon (2005) · Cuijpers (2014)
            </text>

            {/* Baseline axis */}
            <line x1="330" y1="176" x2="578" y2="176" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Bar A: Placebo Remission */}
            <rect
              x="346"
              y={176 - placeboRemission * 1.15}
              width="58"
              height={placeboRemission * 1.15}
              rx="6"
              fill="#cbd5e1"
            />
            <text
              x="375"
              y={170 - placeboRemission * 1.15}
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight="800"
              fill="#475569"
            >
              {placeboRemission}%
            </text>
            <text x="375" y="191" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#475569">
              Placebo
            </text>
            <text x="375" y="203" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#64748b">
              12-wk remit
            </text>

            {/* Bar B: Selected Treatment Acute Remission */}
            <rect
              x="426"
              y={176 - acuteRemission * 1.15}
              width="58"
              height={acuteRemission * 1.15}
              rx="6"
              fill="#15803d"
            />
            <text
              x="455"
              y={170 - acuteRemission * 1.15}
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight="800"
              fill="#15803d"
            >
              {acuteRemission}%
            </text>
            <text x="455" y="191" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#15803d">
              {t.shortLabel}
            </text>
            <text x="455" y="203" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#166534">
              12-wk remit
            </text>

            {/* Bar C: 12-Month Post-Termination Relapse */}
            <rect
              x="506"
              y={176 - relapse12m * 1.15}
              width="58"
              height={relapse12m * 1.15}
              rx="6"
              fill={relapse12m <= 36 ? "#0284c7" : "#c2410c"}
            />
            <text
              x="535"
              y={170 - relapse12m * 1.15}
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight="800"
              fill={relapse12m <= 36 ? "#0369a1" : "#c2410c"}
            >
              {relapse12m}%
            </text>
            <text x="535" y="191" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#334155">
              Relapse
            </text>
            <text x="535" y="203" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#64748b">
              12-mo post
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: SAM / HPA Chronic Stress & Coping Appraisal Simulator
// =============================================================================
type DurationKey = "acute" | "exam" | "chronic";
type CopingKey = "avoidant" | "emotion" | "problem";

function SamHpaStressSimulator() {
  const [duration, setDuration] = useState<DurationKey>("chronic");
  const [threat, setThreat] = useState(8);
  const [resources, setResources] = useState(3);
  const [support, setSupport] = useState(3);
  const [coping, setCoping] = useState<CopingKey>("avoidant");

  // Lazarus & Folkman net appraisal gap (positive = perceived threat outweighs resources)
  const appraisalGap = threat - resources;

  // Coping effectiveness depends on controllability of the stressor
  const copingMod =
    coping === "avoidant"
      ? 1.2
      : coping === "problem"
        ? duration === "chronic"
          ? 0.85
          : 0.65
        : duration === "chronic"
          ? 0.72
          : 0.82;

  // Social support (tend-and-befriend / Kiecolt-Glaser loneliness buffer)
  const supportFactor = 1.18 - support * 0.055; // ~1.12 at support=1 down to 0.63 at support=10

  // Compute SAM adrenaline peak (0..100) and HPA sustained cortisol load (0..100)
  const samPeak = Math.max(18, Math.min(98, Math.round(threat * 9.5 + Math.max(0, appraisalGap) * 2)));
  const durationMult = duration === "acute" ? 0.22 : duration === "exam" ? 0.68 : 1.05;
  const hpaSustained = Math.max(
    10,
    Math.min(
      98,
      Math.round((24 + Math.max(-2, appraisalGap) * 8.5 + threat * 2.5) * durationMult * copingMod * supportFactor),
    ),
  );

  // Immune NK-cell activity % of healthy baseline (100% = baseline; drops under high HPA + low support)
  const nkActivity = Math.max(46, Math.min(100, Math.round(104 - hpaSustained * 0.52)));
  // Standardized 3.5mm wound healing days (baseline 39 days -> ~49+ days under high chronic HPA load, Kiecolt-Glaser 1995)
  const woundDays = +(39 + (duration === "acute" ? 0 : (hpaSustained - 15) * 0.14)).toFixed(1);
  const pctSlower = Math.max(0, Math.round(((woundDays - 39) / 39) * 100));

  const appraisalLabel =
    appraisalGap <= -1 ? "Challenge" : appraisalGap <= 2 ? "Manageable" : "Overload";

  // Build SVG polyline curves across 11 normalized time steps (t = 0..10)
  const x0 = 46;
  const xW = 480;
  const yBase = 176;
  const yH = 132;

  const samPoints: string[] = [];
  const hpaPoints: string[] = [];
  for (let i = 0; i <= 10; i++) {
    const x = x0 + (i / 10) * xW;
    // SAM spikes sharply at t=1 then recovers quickly (or stays mildly elevated under high threat)
    const samVal =
      i === 0
        ? 14
        : i === 1
          ? samPeak
          : i === 2
            ? Math.round(samPeak * (duration === "acute" ? 0.55 : 0.72))
            : duration === "acute"
              ? Math.max(14, Math.round(14 + (samPeak - 14) * Math.exp(-(i - 1) * 0.75)))
              : Math.max(20, Math.round(22 + (samPeak - 22) * 0.38 * Math.exp(-(i - 2) * 0.2)));

    // HPA rises more slowly; recovers in acute stress, stays elevated in chronic stress
    const hpaVal =
      i === 0
        ? 14
        : duration === "acute"
          ? Math.round(14 + hpaSustained * Math.sin((Math.min(i, 6) / 6) * Math.PI) * 0.85)
          : Math.round(14 + (hpaSustained - 14) * (1 - Math.exp(-i * 0.45)));

    samPoints.push(`${x.toFixed(1)},${(yBase - (samVal / 100) * yH).toFixed(1)}`);
    hpaPoints.push(`${x.toFixed(1)},${(yBase - (hpaVal / 100) * yH).toFixed(1)}`);
  }

  const timeLabels =
    duration === "acute"
      ? ["0 min", "2 min", "10 min", "30 min"]
      : duration === "exam"
        ? ["Day 1", "Week 1", "Week 2", "Exam Peak"]
        : ["Month 0", "Month 4", "Month 8", "Month 12"];

  return (
    <WidgetFrame
      title="SAM / HPA Stress Axis & Appraisal Simulator"
      tryThis={[
        "Toggle **Stressor Duration** from **Acute (5 min)** to **Chronic (12 mo)** — watch fast **SAM adrenaline** drop off while slow **HPA cortisol** climbs into allostatic load.",
        "In **Exam** or **Chronic** mode, drag **Social Support** from 2 to 9 — watch **NK-Cell Immunity** recover (Kiecolt-Glaser et al., 1984 loneliness buffer & Taylor et al., 2000 tend-and-befriend).",
        "Match **Secondary Coping Resources** to **Primary Threat** and switch from **Avoidant** to **Problem-Focused** or **Emotion-Focused** coping to pull wound healing back toward baseline.",
      ]}
      caption={
        <span>
          <strong>Live Psychoneuroimmunology Readout:</strong>{" "}
          {duration === "acute"
            ? "Acute stress triggers the fast SAM pathway (adrenal medulla → adrenaline) for seconds-to-minutes survival, followed by parasympathetic homeostasis with zero immune damage."
            : hpaSustained >= 60
              ? `High primary threat (${threat}/10) outweighs coping resources (${resources}/10), locking the HPA axis (CRH → ACTH → adrenal cortex cortisol) into chronic allostatic load: NK cells drop to ${nkActivity}% and estimated wound healing slows by +${pctSlower}% (Kiecolt-Glaser et al., 1984, 1995).`
              : `Balanced secondary appraisal, adaptive ${coping}-focused coping, and social affiliation keep HPA cortisol moderated (${hpaSustained}/100), preserving ${nkActivity}% NK-cell immunity.`}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-ink-2">Stressor Timescale</div>
              <Segmented<DurationKey>
                label="Stressor Timescale"
                value={duration}
                onChange={setDuration}
                options={[
                  { value: "acute", label: "Acute (5 min)" },
                  { value: "exam", label: "Exams (3 wk)" },
                  { value: "chronic", label: "Chronic (12 mo)" },
                ]}
              />
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-bold text-ink-2">Coping Strategy (Lazarus &amp; Folkman)</div>
              <Segmented<CopingKey>
                label="Coping Strategy"
                value={coping}
                onChange={setCoping}
                options={[
                  { value: "avoidant", label: "Avoidant" },
                  { value: "emotion", label: "Emotion-Focused" },
                  { value: "problem", label: "Problem-Focused" },
                ]}
              />
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Slider
              label="Primary Threat Appraisal"
              value={threat}
              min={1}
              max={10}
              onChange={setThreat}
              format={(v) => `${v}/10`}
            />
            <Slider
              label="Secondary Coping Resources"
              value={resources}
              min={1}
              max={10}
              onChange={setResources}
              format={(v) => `${v}/10`}
            />
            <Slider
              label="Social Affiliation / Support"
              value={support}
              min={1}
              max={10}
              onChange={setSupport}
              format={(v) => `${v}/10`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout
            label="Appraisal State"
            value={appraisalLabel}
            tone={appraisalLabel === "Overload" ? "bad" : appraisalLabel === "Challenge" ? "good" : "brand"}
          />
          <Readout
            label="HPA Cortisol Load"
            value={`${hpaSustained} / 100`}
            tone={hpaSustained >= 60 ? "bad" : hpaSustained <= 35 ? "good" : "brand"}
          />
          <Readout
            label="NK-Cell Immunity"
            value={`${nkActivity}%`}
            tone={nkActivity >= 80 ? "good" : nkActivity <= 65 ? "bad" : "brand"}
          />
          <Readout
            label="Wound Healing"
            value={`${woundDays} d`}
            tone={pctSlower >= 15 ? "bad" : "good"}
          />
        </div>

        <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 560 212"
            role="img"
            aria-label="Live physiological stress graph comparing fast SAM adrenaline curve and slow HPA cortisol curve over time"
            className="h-auto w-full"
          >
            <text x="46" y="20" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#1c1630">
              Fast SAM (Adrenaline) vs Slow HPA (Cortisol) Over Time
            </text>

            {/* Gridlines */}
            {[25, 50, 75, 100].map((v) => {
              const y = yBase - (v / 100) * yH;
              return (
                <g key={v}>
                  <line x1={x0} y1={y} x2={x0 + xW} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                  <text x={x0 - 8} y={y + 3} textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#64748b">
                    {v}
                  </text>
                </g>
              );
            })}

            {/* Immune suppression warning zone */}
            <rect x={x0} y={yBase - 0.98 * yH} width={xW} height={0.38 * yH} fill="#fee2e2" opacity="0.45" />
            <text x={x0 + xW - 6} y={yBase - 0.87 * yH} textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#b91c1c">
              Chronic Immune-Suppression Zone (Allostatic Load)
            </text>

            {/* Axes */}
            <line x1={x0} y1={yBase - yH} x2={x0} y2={yBase} stroke="#64748b" strokeWidth="1.5" />
            <line x1={x0} y1={yBase} x2={x0 + xW} y2={yBase} stroke="#64748b" strokeWidth="1.5" />

            {/* SAM Adrenaline curve */}
            <polyline
              fill="none"
              stroke="#ea580c"
              strokeWidth="3"
              strokeDasharray="7 4"
              strokeLinejoin="round"
              points={samPoints.join(" ")}
            />

            {/* HPA Cortisol curve */}
            <polyline
              fill="none"
              stroke="#7c3aed"
              strokeWidth="3.5"
              strokeLinejoin="round"
              points={hpaPoints.join(" ")}
            />

            {/* X-axis labels */}
            {timeLabels.map((lbl, idx) => (
              <text
                key={lbl}
                x={x0 + (idx / 3) * xW}
                y={yBase + 16}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="10"
                fontWeight="700"
                fill="#475569"
              >
                {lbl}
              </text>
            ))}

            {/* Legend */}
            <line x1="46" y1="204" x2="72" y2="204" stroke="#ea580c" strokeWidth="3" strokeDasharray="6 3" />
            <text x="78" y="207" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#9a3412">
              SAM Adrenaline (Adrenal Medulla)
            </text>
            <line x1="274" y1="204" x2="300" y2="204" stroke="#7c3aed" strokeWidth="3.5" />
            <text x="306" y="207" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#5b21b6">
              HPA Cortisol (Adrenal Cortex)
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "biopsychosocial-treatment-comparator",
    title: "Biopsychosocial Aetiology & Treatment Comparator",
    blurb:
      "Adjust biological, cognitive, sociocultural, and protective factors alongside clinical severity to explore diathesis–stress thresholds, **NNT**, and 12-month relapse across SSRIs, CBT, combined care, and culturally adapted community models.",
    Component: BiopsychosocialTreatmentComparator,
  },
  {
    id: "sam-hpa-stress-simulator",
    title: "SAM / HPA Stress Axis & Appraisal Simulator",
    blurb:
      "Compare acute **SAM** adrenaline against chronic **HPA** cortisol as you shift **Lazarus & Folkman** appraisal, coping style, and social affiliation — tracking live **NK-cell immunity** and wound-healing speed.",
    Component: SamHpaStressSimulator,
  },
];

export default widgets;
