"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: 6-Concept Analytical Lens Matrix
// =============================================================================

type ConceptKey = "bias" | "causality" | "change" | "measurement" | "perspective" | "responsibility";
type ScenarioKey = "sleep-lab" | "burnout-survey" | "cafe-obs" | "ai-interviews";

interface ConceptAnalysis {
  severity: number; // 1–5
  question: string;
  evidence: string;
  modification: string;
}

interface StudyScenario {
  id: ScenarioKey;
  shortLabel: string;
  title: string;
  methodBadge: string;
  vignette: string;
  topPair: [ConceptKey, ConceptKey];
  lenses: Record<ConceptKey, ConceptAnalysis>;
}

const CONCEPT_META: readonly { key: ConceptKey; label: string; short: string; colour: string; angleDeg: number }[] = [
  { key: "bias", label: "Bias", short: "Bias", colour: "#ea580c", angleDeg: -90 },
  { key: "causality", label: "Causality", short: "Causality", colour: "#7c3aed", angleDeg: -30 },
  { key: "change", label: "Change", short: "Change", colour: "#15803d", angleDeg: 30 },
  { key: "measurement", label: "Measurement", short: "Measure.", colour: "#0369a1", angleDeg: 90 },
  { key: "perspective", label: "Perspective", short: "Persp.", colour: "#db2777", angleDeg: 150 },
  { key: "responsibility", label: "Responsibility", short: "Resp.", colour: "#d97706", angleDeg: 210 },
];

const SCENARIOS: Record<ScenarioKey, StudyScenario> = {
  "sleep-lab": {
    id: "sleep-lab",
    shortLabel: "Sleep Lab",
    title: "Sleep Loss & Reaction Time Lab",
    methodBadge: "Experiment · N = 28",
    vignette:
      "28 UK psychology undergraduates complete a manual stopwatch reaction test rested (Day 1), then stay awake 24 hours and retake the test (Day 2) timed by a researcher predicting slower scores.",
    topPair: ["causality", "responsibility"],
    lenses: {
      bias: {
        severity: 4,
        question: "Whose expectations or narrow demographics skew the scores?",
        evidence:
          "Only 28 UK undergraduates (WEIRD convenience sample) took part, and manual timing by a researcher who knows the hypothesis invites experimenter expectancy bias.",
        modification:
          "Use automated millisecond computer timing (eliminating scorer bias) and recruit a broader age/cultural sample (trade-off: higher recruitment cost).",
      },
      causality: {
        severity: 5,
        question: "Did sleep loss alone cause the shift, or did order confounds intervene?",
        evidence:
          "Every student did Rested → Sleep-Deprived with zero AB/BA counterbalancing; practice or boredom across days confounds sleep deprivation.",
        modification:
          "Counterbalance condition order (half sleep-deprived first after a recovery washout week) to isolate Causality (trade-off: longer duration and attrition risk).",
      },
      change: {
        severity: 3,
        question: "Does a single 24-hour spike mirror chronic sleep change?",
        evidence:
          "Testing one acute 24-hour deprivation snapshot cannot show how cognition adapts or degrades across weeks of chronic 5-hour teenage sleep.",
        modification:
          "Add multi-week naturalistic sleep-diary tracking to study sustained Change alongside acute lab performance.",
      },
      measurement: {
        severity: 4,
        question: "Was reaction speed operationalised accurately and reliably?",
        evidence:
          "A handheld stopwatch adds human latency error (~150–250 ms), lowering Measurement precision, while simple button presses have limited ecological validity for real driving or study.",
        modification:
          "Replace manual timing with a validated computerised Psychomotor Vigilance Task (PVT) for millisecond reliability.",
      },
      perspective: {
        severity: 3,
        question: "What biological or sociocultural context is missed?",
        evidence:
          "Focusing only on cognitive reaction speed ignores biological circadian chronotypes (morning vs evening larks) and cultural napping norms.",
        modification:
          "Record chronotype and salivary cortisol alongside cognitive speed for a stronger biopsychosocial Perspective.",
      },
      responsibility: {
        severity: 5,
        question: "Were participants protected from foreseeable harm?",
        evidence:
          "Keeping students awake for 24 hours induces acute fatigue and safety risks (e.g. commuting home drowsy), challenging protection from physical/psychological harm.",
        modification:
          "Test mild, ethically supervised sleep restriction (e.g. 6 h vs 8 h) or natural sleep variation, arrange safe transport, and guarantee unconditional right to withdraw.",
      },
    },
  },
  "burnout-survey": {
    id: "burnout-survey",
    shortLabel: "Burnout Poll",
    title: "Social Media & Burnout Poll",
    methodBadge: "Survey · N = 160",
    vignette:
      "An English-only Instagram poll recruits 160 self-selected teenagers to rate 'Do heavy homework and excessive phone use ruin your mood?' and claims phone use causes burnout (r = +0.54).",
    topPair: ["causality", "measurement"],
    lenses: {
      bias: {
        severity: 4,
        question: "Who self-selected into this Instagram sample?",
        evidence:
          "Recruiting voluntarily on Instagram excludes non-users and attracts teens already passionate about screen stress (self-selection & WEIRD English-only bias).",
        modification:
          "Use proportional stratified school sampling across multiple regions with translated versions (trade-off: slower administration).",
      },
      causality: {
        severity: 5,
        question: "Can r = +0.54 justify claiming phones cause burnout?",
        evidence:
          "Purely correlational survey with no manipulated IV: burned-out teens may scroll more to escape stress (reverse causation), or exam pressure may drive both (third variable).",
        modification:
          "Run a randomised controlled screen-limit experiment or longitudinal cross-lagged study (trade-off: harder adherence and higher attrition).",
      },
      change: {
        severity: 3,
        question: "Does a one-time poll capture how burnout develops?",
        evidence:
          "A single cross-sectional snapshot misses seasonal exam peaks and whether reducing screen habits actually triggers recovery over time.",
        modification:
          "Add three repeated waves across an academic term to chart genuine intra-individual Change.",
      },
      measurement: {
        severity: 5,
        question: "Does the questionnaire item measure burnout validly?",
        evidence:
          "The prompt is both double-barrelled (homework AND phone use in one item) and emotionally leading ('excessive', 'ruin'), severely eroding construct validity.",
        modification:
          "Split into neutral, validated multi-item Likert scales with reverse-scored items and back-translation checks.",
      },
      perspective: {
        severity: 3,
        question: "Are cross-cultural meanings of stress captured?",
        evidence:
          "Using an English-only Western burnout idiom assumes universal expression of distress (imposed etic) and ignores family/school cultural norms.",
        modification:
          "Pair translated surveys with emic semi-structured interviews exploring local definitions of academic stress.",
      },
      responsibility: {
        severity: 4,
        question: "Were minors consented and findings reported responsibly?",
        evidence:
          "Recruiting minors via social media without verifying parental consent or providing mental-health signposting risks ethical breaches; causal headlines can stigmatise teens.",
        modification:
          "Obtain verified parental consent + teen assent via schools, keep responses strictly anonymous, and report correlational limits accurately.",
      },
    },
  },
  "cafe-obs": {
    id: "cafe-obs",
    shortLabel: "Covert Obs.",
    title: "Covert School Canteen Observation",
    methodBadge: "Observation · Covert",
    vignette:
      "One researcher secretly films 15-year-olds in a school canteen while a confederate drops books, tallying 'kindness' without a coding schedule or student/parental knowledge.",
    topPair: ["responsibility", "measurement"],
    lenses: {
      bias: {
        severity: 4,
        question: "Can a lone observer interpret 'kindness' objectively?",
        evidence:
          "A single observer tallying subjective 'kindness' with no blind second coder invites confirmation bias based on students' appearance or friend groups.",
        modification:
          "Use two independent coders blind to expectations and compute inter-observer agreement (target ≥ 80%).",
      },
      causality: {
        severity: 4,
        question: "Could canteen noise or rush-hour schedules confound helping?",
        evidence:
          "In a busy naturalistic canteen, class bells, peer friendships, and crowd density vary uncontrolled across trials, weakening causal claims.",
        modification:
          "Standardise trial timing and distance from the confederate, or follow up with a controlled lab vignette (trade-off: lower ecological realism).",
      },
      change: {
        severity: 2,
        question: "Does one lunchtime show enduring prosocial development?",
        evidence:
          "A brief lunchtime snapshot shows immediate situational action rather than developmental Change in empathy.",
        modification:
          "Observe across multiple weeks or compare age cohorts longitudinally to evaluate prosocial Change.",
      },
      measurement: {
        severity: 5,
        question: "Is 'kindness' operationalised and scored reliably?",
        evidence:
          "Without mutually exclusive observable categories (e.g. bends down to pick up ≥ 1 book within 5 s) or a second coder, inter-observer reliability is unverified.",
        modification:
          "Build a pilot-tested behavioural coding schedule using event sampling and verify IOA ≥ 80%.",
      },
      perspective: {
        severity: 3,
        question: "Can silent watching explain why someone hesitated?",
        evidence:
          "External observation sees action only — it cannot distinguish indifference from shyness, hurry, or cultural norms of non-intrusion.",
        modification:
          "Triangulate observation with brief consenting follow-up interviews to capture participants' internal Perspective.",
      },
      responsibility: {
        severity: 5,
        question: "Is secret filming of 15-year-olds in a closed school ethical?",
        evidence:
          "Filming minors covertly in a non-public school canteen breaches informed consent, parental consent, privacy, right to withdraw, and debriefing.",
        modification:
          "Drop covert filming; secure parental consent + student assent for an overt observation (with habituation period) or consenting vignette simulation.",
      },
    },
  },
  "ai-interviews": {
    id: "ai-interviews",
    shortLabel: "AI Focus Grp",
    title: "Teacher-Led AI-Tutor Focus Group",
    methodBadge: "Interview · Focus Group",
    vignette:
      "A teacher runs one 10-student focus group asking her own exam class whether AI chatbots make them lazy, coding transcripts deductively alone with no member checking.",
    topPair: ["bias", "responsibility"],
    lenses: {
      bias: {
        severity: 5,
        question: "Will students speak candidly to their own teacher in front of peers?",
        evidence:
          "Leading wording ('make them lazy'), peer conformity, dominant classmates, and wanting to please their own teacher create severe social desirability and confirmation bias.",
        modification:
          "Use an independent neutral interviewer in private semi-structured interviews with neutral open prompts and inductive coding + reflexivity.",
      },
      causality: {
        severity: 2,
        question: "Do focus-group quotes test cause and effect?",
        evidence:
          "Qualitative interviews explore lived perceptions rather than manipulating AI usage to establish experimental Causality.",
        modification:
          "Frame aims honestly around subjective experience, or triangulate with a controlled learning experiment if testing causal gains.",
      },
      change: {
        severity: 3,
        question: "How do study habits evolve over a full IB course?",
        evidence:
          "One discussion captures attitudes at a single point, missing how students' AI reliance shifts from Year 12 novelty to Year 13 mock exams.",
        modification:
          "Conduct repeated semi-structured interviews across two terms to trace adaptive study Change.",
      },
      measurement: {
        severity: 4,
        question: "How trustworthy and credible is the thematic analysis?",
        evidence:
          "Relying solely on lone deductive coding ('laziness') with zero member checking or researcher triangulation risks forcing transcripts into preconceived boxes.",
        modification:
          "Add inductive coding by a second analyst, keep an audit trail, and run member checking with interviewees.",
      },
      perspective: {
        severity: 4,
        question: "Whose perspectives are amplified or silenced?",
        evidence:
          "Loud students and the teacher's framing dominate, silencing bilingual or neurodivergent learners who use AI as an accessibility scaffold.",
        modification:
          "Use purposive private interviews to hear diverse learner Perspectives without group silencing.",
      },
      responsibility: {
        severity: 5,
        question: "Can confidentiality and voluntary consent hold in a teacher-led group?",
        evidence:
          "Teacher authority creates subtle coercion over marks, and classmates hear one another's admissions of AI misuse, making peer confidentiality impossible.",
        modification:
          "Recruit via an independent staff member with explicit grade separation, private confidential interviews, and pseudonymised transcripts.",
      },
    },
  },
};

function polarPoint(cx: number, cy: number, radius: number, angleDeg: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [+(cx + radius * Math.cos(rad)).toFixed(2), +(cy + radius * Math.sin(rad)).toFixed(2)];
}

function SixConceptLensMatrix() {
  const [scenarioId, setScenarioId] = useState<ScenarioKey>("sleep-lab");
  const [activeConcept, setActiveConcept] = useState<ConceptKey>("causality");

  const scenario = SCENARIOS[scenarioId];
  const detail = scenario.lenses[activeConcept];
  const meta = CONCEPT_META.find((c) => c.key === activeConcept) ?? CONCEPT_META[0];

  const cx = 180;
  const cy = 142;
  const maxR = 92;

  const polygonPoints = CONCEPT_META.map((c) => {
    const score = scenario.lenses[c.key].severity;
    const [x, y] = polarPoint(cx, cy, (score / 5) * maxR, c.angleDeg);
    return `${x},${y}`;
  }).join(" ");

  const severityLabel =
    detail.severity >= 5 ? "5/5 Critical" : detail.severity === 4 ? "4/5 High" : detail.severity === 3 ? "3/5 Medium" : `${detail.severity}/5 Low`;
  const severityTone = detail.severity >= 4 ? "bad" : detail.severity === 3 ? "brand" : "good";

  return (
    <WidgetFrame
      title="6-Concept Analytical Lens Matrix (Paper 2 Trainer)"
      tryThis={[
        "Switch between all 4 unseen studies and inspect how the red/violet threat polygon reshapes.",
        "Tap **Paper 2 Top Pair** to compare the two highest-yield Core Concepts for each unseen study.",
      ]}
      caption={
        <span>
          <strong>C–E–I–M Paper 2 Move ({meta.label}):</strong> {detail.modification}
        </span>
      }
    >
      <div className="space-y-4">
        {/* Scenario Picker */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose an Unseen Paper 2 Study</div>
          <Segmented
            label="Unseen Study Scenario"
            value={scenarioId}
            onChange={(next) => {
              setScenarioId(next);
              setActiveConcept(SCENARIOS[next].topPair[0]);
            }}
            options={Object.values(SCENARIOS).map((s) => ({ value: s.id, label: s.shortLabel }))}
          />
        </div>

        {/* Stimulus Card */}
        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm leading-relaxed text-ink">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-ink">{scenario.title}</span>
            <span className="chip text-xs">{scenario.methodBadge}</span>
          </div>
          <p className="mt-1.5 text-ink-2">{scenario.vignette}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-ink-2">Recommended Paper 2 Pair:</span>
            {scenario.topPair.map((k) => {
              const cm = CONCEPT_META.find((c) => c.key === k);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setActiveConcept(k)}
                  className={`rounded-full px-2.5 py-0.5 font-bold transition ${
                    activeConcept === k ? "bg-brand text-brand-ink" : "bg-surface text-brand border border-line hover:bg-brand-soft"
                  }`}
                >
                  {cm?.label} ({scenario.lenses[k].severity}/5)
                </button>
              );
            })}
          </div>
        </div>

        {/* Radar + Diagnostic Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
          {/* Interactive Hexagonal Radar */}
          <div className="rounded-xl border border-line bg-surface p-2">
            <svg
              viewBox="0 0 360 284"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Six-concept threat profile radar for ${scenario.title}`}
              className="mx-auto block h-auto w-full max-w-[360px]"
            >
              {/* Concentric rings (levels 1..5) */}
              {[1, 2, 3, 4, 5].map((lvl) => {
                const pts = CONCEPT_META.map((c) => polarPoint(cx, cy, (lvl / 5) * maxR, c.angleDeg).join(",")).join(" ");
                return (
                  <polygon
                    key={lvl}
                    points={pts}
                    fill="none"
                    className="stroke-line"
                    strokeWidth={lvl === 5 ? 1.5 : 1}
                    strokeDasharray={lvl === 5 ? undefined : "3 3"}
                  />
                );
              })}
              {/* Axis spokes */}
              {CONCEPT_META.map((c) => {
                const [x, y] = polarPoint(cx, cy, maxR, c.angleDeg);
                return <line key={c.key} x1={cx} y1={cy} x2={x} y2={y} className="stroke-line" strokeWidth={1.2} />;
              })}
              {/* Threat polygon */}
              <polygon points={polygonPoints} fill="var(--brand)" fillOpacity={0.22} stroke="var(--brand)" strokeWidth={2.4} />
              {/* Vertices + Labels */}
              {CONCEPT_META.map((c) => {
                const score = scenario.lenses[c.key].severity;
                const [vx, vy] = polarPoint(cx, cy, (score / 5) * maxR, c.angleDeg);
                const [lx, ly] = polarPoint(cx, cy, maxR + 28, c.angleDeg);
                const isSelected = c.key === activeConcept;
                return (
                  <g key={c.key}>
                    <circle
                      cx={vx}
                      cy={vy}
                      r={isSelected ? 7.5 : 5}
                      fill={c.colour}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                    <text
                      x={lx}
                      y={ly + 4}
                      textAnchor="middle"
                      fontSize={isSelected ? 12 : 10.5}
                      fontWeight={isSelected ? 800 : 700}
                      className={isSelected ? "fill-brand" : "fill-ink-2"}
                    >
                      {c.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Concept Selector + C-E-I Breakdown */}
          <div className="min-w-0 space-y-3">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Inspect Any Core Concept</div>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {CONCEPT_META.map((c) => {
                  const selected = c.key === activeConcept;
                  const score = scenario.lenses[c.key].severity;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setActiveConcept(c.key)}
                      aria-pressed={selected}
                      className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                        selected
                          ? "border-brand bg-brand text-brand-ink shadow-sm"
                          : "border-line bg-surface text-ink hover:bg-surface-2"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span>{c.label}</span>
                        <span className="tabular-nums opacity-85">{score}/5</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Active Concept" value={meta.label} tone="brand" />
              <Readout label="Threat Priority" value={severityLabel} tone={severityTone} />
            </div>

            <div className="space-y-2 rounded-xl border border-line bg-surface p-3 text-sm">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Examiner Question</div>
              <p className="font-semibold text-ink">{detail.question}</p>
              <div className="pt-1 text-xs font-extrabold uppercase tracking-wide text-ink-2">Stimulus Evidence &amp; Impact</div>
              <p className="text-ink-2 leading-relaxed">{detail.evidence}</p>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Class Practical Method & Validity/Ethics Stress-Tester
// =============================================================================

type PracticalKey = "experiment" | "survey" | "interview" | "observation";
type ConsentMode = "full" | "mild" | "covert";

const PRACTICAL_PROFILES: Record<
  PracticalKey,
  {
    label: string;
    short: string;
    baseCausality: number;
    baseEcological: number;
    baseReliability: number;
    controlHint: string;
    rigourHint: string;
    iaToolRequirement: string;
  }
> = {
  experiment: {
    label: "Experiment",
    short: "Experiment",
    baseCausality: 66,
    baseEcological: 36,
    baseReliability: 62,
    controlHint: "IV standardisation, counterbalancing & blinding",
    rigourHint: "Random allocation, parallel tasks & power",
    iaToolRequirement: "Standardised experimental stimulus/task sheet + ≥ 5 scored trials/items in appendix (no data collection).",
  },
  survey: {
    label: "Survey / Questionnaire",
    short: "Survey",
    baseCausality: 22,
    baseEcological: 62,
    baseReliability: 56,
    controlHint: "Neutral wording, no double-barrelled items & reverse scoring",
    rigourHint: "Stratified sampling & high response-rate plan",
    iaToolRequirement: "Complete ≥ 5-item Likert/open questionnaire in appendix (hypothetical IA proposal only).",
  },
  interview: {
    label: "Interview",
    short: "Interview",
    baseCausality: 16,
    baseEcological: 76,
    baseReliability: 42,
    controlHint: "Semi-structured guide & non-leading open probes",
    rigourHint: "Member checking, reflexivity & dual thematic coding",
    iaToolRequirement: "Semi-structured interview schedule with ≥ 5 open core questions + probes in appendix.",
  },
  observation: {
    label: "Observation",
    short: "Observation",
    baseCausality: 28,
    baseEcological: 78,
    baseReliability: 46,
    controlHint: "Operationalised coding schedule + event/time sampling rule",
    rigourHint: "Dual independent coders (IOA ≥ 80%) & habituation",
    iaToolRequirement: "Operationalised behavioural coding grid with ≥ 5 mutually exclusive categories in appendix.",
  },
};

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, Math.round(v)));
}

function PracticalStressTester() {
  const [method, setMethod] = useState<PracticalKey>("experiment");
  const [sampleN, setSampleN] = useState<number>(40);
  const [controlLvl, setControlLvl] = useState<number>(4);
  const [rigourLvl, setRigourLvl] = useState<number>(3);
  const [consent, setConsent] = useState<ConsentMode>("full");

  const prof = PRACTICAL_PROFILES[method];

  // Transparent, methodologically faithful live model (0–100)
  const sampleBoost = method === "interview" ? (sampleN <= 20 ? 8 : sampleN <= 40 ? 2 : -10) : Math.min(14, Math.round(Math.log2(sampleN / 10 + 1) * 4));
  const causalityScore = clamp(
    prof.baseCausality + (controlLvl - 3) * (method === "experiment" ? 9 : 4) + (rigourLvl - 3) * 4 + (method === "experiment" && sampleN >= 40 ? 5 : 0),
    8,
    98,
  );
  const ecologicalScore = clamp(
    prof.baseEcological - (controlLvl - 3) * (method === "experiment" ? 6 : 3) + (consent === "covert" ? 10 : consent === "mild" ? 4 : -4) + (method === "interview" && sampleN <= 20 ? 6 : 0),
    15,
    96,
  );
  const reliabilityScore = clamp(
    prof.baseReliability + (controlLvl - 3) * 6 + (rigourLvl - 3) * 8 + sampleBoost,
    18,
    98,
  );
  const ethicsScore = clamp(
    (consent === "full" ? 88 : consent === "mild" ? 66 : 22) + (rigourLvl >= 4 ? 6 : 0) - (method === "observation" && consent === "covert" ? 10 : 0) - (method === "interview" && consent === "covert" ? 15 : 0),
    8,
    98,
  );

  const bars: readonly { label: string; value: number; fill: string }[] = [
    { label: "Causality / Internal", value: causalityScore, fill: "#7c3aed" },
    { label: "Ecological Realism", value: ecologicalScore, fill: "#0d9488" },
    { label: "Measurement Rigour", value: reliabilityScore, fill: "#2563eb" },
    { label: "Ethical Safety", value: ethicsScore, fill: ethicsScore >= 75 ? "#15803d" : ethicsScore >= 50 ? "#d97706" : "#c2410c" },
  ];

  // Live IA & Paper 2 Diagnostic Verdict
  const verdict =
    consent === "covert"
      ? "ETHICS ALERT (Responsibility): Covert or coerced procedures without consent fail IB ethical review unless restricted strictly to non-intrusive public observation. Redesign with informed consent or debriefed minimal-risk alternatives."
      : method === "interview" && sampleN > 50
        ? `FEASIBILITY WARNING: N = ${sampleN} is realistic for a Survey, not in-depth qualitative Interviews! Aim for a purposive sample of 8–15 interviewees with verbatim transcription, member checking, and reflexivity.`
        : method === "survey" && sampleN < 30
          ? `SAMPLING WARNING (Bias): N = ${sampleN} is very small for a quantitative Survey. Aim for N ≥ 60–100 via stratified sampling to reduce sampling Bias and non-response distortion.`
          : method === "experiment" && controlLvl <= 2
            ? "CAUSALITY WARNING: Low standardisation and missing counterbalancing/blinding leave extraneous confounds uncontrolled — tighten controls before claiming cause and effect."
            : `SOLID FA2027 DESIGN: Balanced ${prof.label.toLowerCase()} blueprint (N = ${sampleN}). Remember: your FA2027 IA is a Research Proposal (NO data collection) — attach: ${prof.iaToolRequirement}`;

  return (
    <WidgetFrame
      title="Class Practical Method & Validity/Ethics Stress-Tester"
      tryThis={[
        "Switch between all 4 Class Practicals and watch how **Causality** vs **Ecological Realism** trade off.",
        "Test what happens to Ethical Safety vs Ecological Realism if you switch from *Full Overt Consent* to *Covert / Coerced*.",
        "Set **Interview** with N = 100 or **Survey** with N = 20 to trigger realistic IB IA feasibility checks.",
      ]}
      caption={verdict}
    >
      <div className="space-y-4">
        {/* Method Picker */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Select FA2027 Class Practical Method</div>
          <Segmented
            label="FA2027 Class Practical Method"
            value={method}
            onChange={setMethod}
            options={[
              { value: "experiment", label: "Experiment" },
              { value: "survey", label: "Survey" },
              { value: "interview", label: "Interview" },
              { value: "observation", label: "Observation" },
            ]}
          />
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Stepper
              label="Target Sample Size (N)"
              value={sampleN}
              min={10}
              max={160}
              step={10}
              onChange={setSampleN}
            />
            <Slider
              label={`Protocol Control (${prof.controlHint})`}
              value={controlLvl}
              min={1}
              max={5}
              onChange={setControlLvl}
              format={(v) => `${v} / 5`}
            />
            <Slider
              label={`Sampling / Coding Rigour (${prof.rigourHint})`}
              value={rigourLvl}
              min={1}
              max={5}
              onChange={setRigourLvl}
              format={(v) => `${v} / 5`}
            />
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Consent &amp; Transparency Protocol</div>
              <Segmented
                label="Consent Protocol"
                value={consent}
                onChange={setConsent}
                options={[
                  { value: "full", label: "Full Consent" },
                  { value: "mild", label: "Mild Deception" },
                  { value: "covert", label: "Covert / Coerced" },
                ]}
              />
            </div>

            <div className="rounded-lg border border-line bg-surface p-2.5 text-xs leading-relaxed text-ink-2">
              <span className="font-extrabold text-brand">FA2027 IA Appendix Check: </span>
              {prof.iaToolRequirement}
            </div>
          </div>
        </div>

        {/* Live SVG Profile Chart */}
        <div className="rounded-xl border border-line bg-surface p-3">
          <svg
            viewBox="0 0 420 170"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Live validity, reliability, and ethical safety bar chart for ${prof.label}`}
            className="mx-auto block h-auto w-full max-w-[520px]"
          >
            {/* Reference guide lines at 50% and 80% */}
            <line x1={140 + 0.5 * 240} y1={14} x2={140 + 0.5 * 240} y2={146} className="stroke-line" strokeDasharray="3 3" strokeWidth={1.2} />
            <line x1={140 + 0.8 * 240} y1={14} x2={140 + 0.8 * 240} y2={146} className="stroke-line" strokeDasharray="3 3" strokeWidth={1.2} />
            <text x={140 + 0.5 * 240} y={162} textAnchor="middle" fontSize={9.5} className="fill-ink-2">50% Caution</text>
            <text x={140 + 0.8 * 240} y={162} textAnchor="middle" fontSize={9.5} className="fill-ink-2">80% Strong</text>
            {bars.map((bar, idx) => {
              const y = 20 + idx * 32;
              const width = (bar.value / 100) * 240;
              return (
                <g key={bar.label}>
                  <text x={132} y={y + 15} textAnchor="end" fontSize={11} fontWeight={700} className="fill-ink">
                    {bar.label}
                  </text>
                  <rect x={140} y={y} width={240} height={20} rx={6} className="fill-surface-2" />
                  <rect x={140} y={y} width={width} height={20} rx={6} fill={bar.fill} />
                  <text x={386} y={y + 14.5} fontSize={10.5} fontWeight={800} className="fill-ink">
                    {bar.value}%
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 4 Readout Tiles */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Causality" value={`${causalityScore}%`} tone={causalityScore >= 70 ? "good" : causalityScore >= 40 ? "brand" : "ink"} />
          <Readout label="Ecological" value={`${ecologicalScore}%`} tone={ecologicalScore >= 70 ? "good" : "brand"} />
          <Readout label="Reliability" value={`${reliabilityScore}%`} tone={reliabilityScore >= 75 ? "good" : reliabilityScore >= 50 ? "brand" : "bad"} />
          <Readout label="Ethics" value={`${ethicsScore}%`} tone={ethicsScore >= 75 ? "good" : ethicsScore >= 50 ? "brand" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "six-concept-lens-matrix",
    title: "6-Concept Analytical Lens Matrix",
    blurb: "Interrogate four realistic Paper 2 unseen studies through Bias, Causality, Change, Measurement, Perspective, and Responsibility.",
    Component: SixConceptLensMatrix,
  },
  {
    id: "practical-stress-tester",
    title: "Class Practical Method & Validity/Ethics Stress-Tester",
    blurb: "Stress-test Experiments, Surveys, Interviews, and Observations across sample size, controls, and consent protocols.",
    Component: PracticalStressTester,
  },
];

export default widgets;
