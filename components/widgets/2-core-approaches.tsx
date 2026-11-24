"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Synapse Neurotransmission & Agonist/Antagonist Modeller
// ============================================================================
type NtKey = "ach" | "serotonin" | "dopamine";
type ModKey = "baseline" | "agonist" | "reuptake" | "antagonist";

const NT_META: Record<
  NtKey,
  {
    name: string;
    short: string;
    role: string;
    color: string;
    agonistEx: string;
    reuptakeEx: string;
    antagonistEx: string;
    studyNote: Record<ModKey, string>;
  }
> = {
  ach: {
    name: "Acetylcholine (ACh)",
    short: "ACh",
    role: "Hippocampal spatial & declarative memory encoding",
    color: "#7c3aed",
    agonistEx: "Nicotine (cholinergic agonist)",
    reuptakeEx: "Donepezil (AChE breakdown inhibitor)",
    antagonistEx: "Scopolamine (muscarinic antagonist)",
    studyNote: {
      baseline: "Baseline hippocampal acetylcholine supports normal spatial encoding and attention.",
      agonist: "Direct cholinergic agonists mimic ACh at postsynaptic receptors, boosting excitatory firing.",
      reuptake: "Blocking synaptic ACh clearance (e.g. Alzheimer's cholinesterase inhibitors) extends ACh action in hippocampal clefts — a functional agonist effect.",
      antagonist: "Matches Antonova et al. (2011): scopolamine occupies muscarinic ACh receptors without opening them, slashing hippocampal BOLD activation and impairing VR spatial navigation.",
    },
  },
  serotonin: {
    name: "Serotonin (5-HT)",
    short: "5-HT",
    role: "Mood regulation, sleep & harm-aversion control",
    color: "#0369a1",
    agonistEx: "Buspirone (5-HT1A partial agonist)",
    reuptakeEx: "SSRI / Fluoxetine (reuptake inhibitor)",
    antagonistEx: "Ketanserin (5-HT2A antagonist)",
    studyNote: {
      baseline: "Baseline serotonin regulates emotional stability and impulse restraint across cortical-limbic circuits.",
      agonist: "Direct serotonergic agonists bind postsynaptic 5-HT receptors to enhance serotonergic signalling.",
      reuptake: "SSRIs block presynaptic reuptake pumps so native serotonin lingers in the cleft — proving why SSRIs are functional AGONISTS (linked to Crockett et al., 2010 harm aversion).",
      antagonist: "Blocking postsynaptic serotonin receptors dampens serotonergic signal transmission despite normal presynaptic release.",
    },
  },
  dopamine: {
    name: "Dopamine (DA)",
    short: "DA",
    role: "Reward prediction error, motivation & motor control",
    color: "#0d9488",
    agonistEx: "Pramipexole (D2 receptor agonist)",
    reuptakeEx: "Cocaine / Methylphenidate (DAT blocker)",
    antagonistEx: "Haloperidol (D2 receptor antagonist)",
    studyNote: {
      baseline: "Baseline mesolimbic dopamine signals unexpected reward prediction errors to guide motivational 'wanting'.",
      agonist: "Direct D2 agonists activate postsynaptic dopamine receptors directly, amplifying reward and motor signalling.",
      reuptake: "Blocking dopamine transporters (DAT) traps dopamine in the cleft, causing intense postsynaptic overstimulation and reinforcement.",
      antagonist: "D2 antagonists such as haloperidol competitively block dopamine binding, reducing mesolimbic firing (used to dampen psychosis).",
    },
  },
};

function SynapseModeller() {
  const [nt, setNt] = useState<NtKey>("ach");
  const [mod, setMod] = useState<ModKey>("antagonist");
  const [firingHz, setFiringHz] = useState(55);
  const [dosePct, setDosePct] = useState(70);

  const meta = NT_META[nt];
  const effectiveDose = mod === "baseline" ? 0 : dosePct / 100;

  // Quantitative synaptic model (0..100 scale)
  const releaseFactor = firingHz / 90; // ~0.11..1.0
  const reuptakeBlocked = mod === "reuptake" ? 0.8 * effectiveDose : 0;
  const cleftConc = Math.min(100, Math.round(releaseFactor * 62 * (1 + 1.35 * reuptakeBlocked) + (mod === "baseline" ? 8 : 6)));

  // Receptor states across 6 visual postsynaptic channels
  const blockedReceptors = mod === "antagonist" ? Math.min(5, Math.round(effectiveDose * 5.2)) : 0;
  const agonistReceptors = mod === "agonist" ? Math.min(5, Math.round(effectiveDose * 4.2)) : 0;
  const openForNative = Math.max(0, 6 - blockedReceptors - agonistReceptors);
  const nativeBound = Math.min(openForNative, Math.round((cleftConc / 100) * openForNative * 1.15));
  const activeReceptors = Math.min(6, nativeBound + agonistReceptors);
  const activePct = Math.round((activeReceptors / 6) * 100);

  // Membrane potential from −70 mV resting up toward +25 mV firing
  const rawMv = -70 + Math.round(activePct * 0.42 + (cleftConc * 0.08 * (mod === "antagonist" ? 0.25 : 1)));
  const membraneMv = Math.max(-72, Math.min(30, rawMv >= -52 ? Math.min(30, rawMv + 26) : rawMv));
  const firesActionPotential = membraneMv >= -52;

  const receptorStates: Array<"native" | "agonist" | "antagonist" | "empty"> = [];
  for (let i = 0; i < 6; i++) {
    if (i < blockedReceptors) receptorStates.push("antagonist");
    else if (i < blockedReceptors + agonistReceptors) receptorStates.push("agonist");
    else if (i < blockedReceptors + agonistReceptors + nativeBound) receptorStates.push("native");
    else receptorStates.push("empty");
  }

  // Deterministic cleft particle positions so React render stays 100% pure
  const cleftDotsCount = Math.max(3, Math.min(16, Math.round(cleftConc / 6.5)));
  const cleftDots = Array.from({ length: cleftDotsCount }, (_, i) => ({
    x: 112 + ((i * 53 + 19) % 316),
    y: 120 + ((i * 29 + 7) % 42),
  }));

  const drugParticlesCount = mod === "baseline" ? 0 : Math.max(2, Math.round(effectiveDose * 8));
  const drugParticles = Array.from({ length: drugParticlesCount }, (_, i) => ({
    x: 108 + ((i * 67 + 31) % 324),
    y: 122 + ((i * 37 + 13) % 38),
  }));

  const signalLabel = firesActionPotential ? "Fires AP ↑" : activePct <= 25 ? "Blocked ↓" : "Resting";
  const signalTone = firesActionPotential ? "good" : activePct <= 25 ? "bad" : "ink";

  return (
    <WidgetFrame
      title="Synapse Neurotransmission & Agonist / Antagonist Modeller"
      tryThis={[
        "Select **Acetylcholine (ACh)** + **Competitive Antagonist** and raise dose to 80% — replicate **Antonova et al. (2011)** scopolamine receptor blockade.",
        "Switch to **Serotonin (5-HT)** + **Reuptake Inhibitor** (SSRI) and watch cleft concentration rise even though presynaptic firing stays constant.",
        "Compare **Direct Agonist** vs **Reuptake Inhibitor**: notice how *both* push the postsynaptic neuron past the −55 mV firing threshold!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>{meta.name}</strong> ({meta.role}) —{" "}
            <strong>
              {mod === "baseline"
                ? "Unmedicated Baseline"
                : mod === "agonist"
                  ? meta.agonistEx
                  : mod === "reuptake"
                    ? meta.reuptakeEx
                    : meta.antagonistEx}
            </strong>
            .
          </p>
          <p className="text-ink-2">{meta.studyNote[mod]}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <Segmented<NtKey>
            label="Neurotransmitter system"
            value={nt}
            onChange={setNt}
            options={[
              { value: "ach", label: "ACh (Memory)" },
              { value: "serotonin", label: "5-HT (Mood)" },
              { value: "dopamine", label: "DA (Reward)" },
            ]}
          />
          <Segmented<ModKey>
            label="Modulator condition"
            value={mod}
            onChange={setMod}
            options={[
              { value: "baseline", label: "Baseline" },
              { value: "agonist", label: "Agonist" },
              { value: "reuptake", label: "Reuptake Blocker" },
              { value: "antagonist", label: "Antagonist" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Presynaptic Firing Rate"
            value={firingHz}
            min={10}
            max={90}
            step={5}
            onChange={setFiringHz}
            format={(v) => `${v} Hz`}
          />
          <Slider
            label={mod === "baseline" ? "Drug Dose (inactive in baseline)" : "Modulator Dose / Affinity"}
            value={mod === "baseline" ? 0 : dosePct}
            min={0}
            max={100}
            step={5}
            onChange={(v) => {
              if (mod === "baseline" && v > 0) setMod("agonist");
              setDosePct(v);
            }}
            format={(v) => `${v}%`}
          />
        </div>

        {/* Live Interactive SVG Synapse */}
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 540 272"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Interactive synaptic cleft diagram for ${meta.name} under ${mod} condition showing ${activePct}% receptor activation`}
            className="mx-auto block h-auto w-full max-w-[540px]"
          >
            <rect x="0" y="0" width="540" height="272" fill="#ffffff" rx="10" />

            {/* Presynaptic Axon Terminal */}
            <path
              d="M95,12 L445,12 L445,78 C445,100 390,108 270,108 C150,108 95,100 95,78 Z"
              fill="#f1eef9"
              stroke={meta.color}
              strokeWidth={2}
            />
            <text x="270" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize={11} fontWeight={700} fill="#1c1630">
              Presynaptic Terminal · Firing {firingHz} Hz ({meta.short})
            </text>

            {/* Vesicles */}
            {[175, 270, 355].map((cx, idx) => (
              <g key={cx}>
                <circle cx={cx} cy={idx === 1 ? 82 : 70} r={14} fill="#ffffff" stroke={meta.color} strokeWidth={1.6} />
                <circle cx={cx - 4} cy={(idx === 1 ? 82 : 70) - 2} r={3} fill={meta.color} />
                <circle cx={cx + 4} cy={(idx === 1 ? 82 : 70) + 3} r={3} fill={meta.color} />
                <circle cx={cx + 1} cy={(idx === 1 ? 82 : 70) - 5} r={3} fill={meta.color} />
              </g>
            ))}

            {/* Reuptake Transporter Pump */}
            <rect
              x="408"
              y="78"
              width="30"
              height="24"
              rx="5"
              fill={mod === "reuptake" ? "#ffedd5" : "#fef3c7"}
              stroke={mod === "reuptake" ? "#c2410c" : "#d97706"}
              strokeWidth={1.8}
            />
            <text x="423" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize={9} fontWeight={700} fill="#92400e">
              {mod === "reuptake" ? "✕ RU" : "↑ RU"}
            </text>
            <text x="488" y="88" textAnchor="middle" fontFamily="sans-serif" fontSize={8.5} fontWeight={700} fill={mod === "reuptake" ? "#c2410c" : "#78350f"}>
              Reuptake
            </text>
            <text x="488" y="99" textAnchor="middle" fontFamily="sans-serif" fontSize={8.5} fill={mod === "reuptake" ? "#c2410c" : "#78350f"}>
              {mod === "reuptake" ? "BLOCKED" : "Active"}
            </text>

            {/* Synaptic Cleft Label */}
            <text x="48" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fontWeight={700} fill="#5b5375">
              Synaptic
            </text>
            <text x="48" y="152" textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fontWeight={700} fill="#5b5375">
              Cleft
            </text>

            {/* Free Native NT Molecules */}
            {cleftDots.map((pt, i) => (
              <circle key={`nt-${i}`} cx={pt.x} cy={pt.y} r={4.2} fill={meta.color} opacity={0.9} />
            ))}

            {/* Free Drug Particles */}
            {drugParticles.map((pt, i) =>
              mod === "agonist" ? (
                <polygon
                  key={`dr-${i}`}
                  points={`${pt.x},${pt.y - 5} ${pt.x + 5},${pt.y + 4} ${pt.x - 5},${pt.y + 4}`}
                  fill="#15803d"
                />
              ) : mod === "antagonist" ? (
                <rect key={`dr-${i}`} x={pt.x - 4.5} y={pt.y - 4.5} width={9} height={9} rx={2} fill="#c2410c" />
              ) : (
                <circle key={`dr-${i}`} cx={pt.x} cy={pt.y} r={3.5} fill="#d97706" stroke="#ffffff" strokeWidth={1} />
              ),
            )}

            {/* Postsynaptic Dendrite Membrane */}
            <path
              d="M80,192 C80,180 460,180 460,192 L460,248 L80,248 Z"
              fill={firesActionPotential ? "#dcfce7" : activePct <= 25 ? "#fff7ed" : "#f8fafc"}
              stroke={firesActionPotential ? "#15803d" : activePct <= 25 ? "#c2410c" : "#64748b"}
              strokeWidth={2}
            />
            <text x="270" y="236" textAnchor="middle" fontFamily="sans-serif" fontSize={10.5} fontWeight={700} fill="#1c1630">
              Postsynaptic Neuron · {membraneMv > 0 ? `+${membraneMv}` : membraneMv} mV ({signalLabel})
            </text>

            {/* 6 Postsynaptic Receptors */}
            {receptorStates.map((st, idx) => {
              const rx = 112 + idx * 58;
              const fillColor =
                st === "native" ? meta.color : st === "agonist" ? "#15803d" : st === "antagonist" ? "#c2410c" : "#94a3b8";
              return (
                <g key={`rec-${idx}`}>
                  <path
                    d={`M${rx - 11},174 L${rx - 11},190 L${rx + 11},190 L${rx + 11},174 L${rx + 6},174 L${rx + 6},182 L${rx - 6},182 L${rx - 6},174 Z`}
                    fill={fillColor}
                  />
                  {st === "native" ? <circle cx={rx} cy={175} r={5} fill={meta.color} stroke="#ffffff" strokeWidth={1} /> : null}
                  {st === "agonist" ? (
                    <polygon points={`${rx},168 ${rx + 5.5},179 ${rx - 5.5},179`} fill="#15803d" stroke="#ffffff" strokeWidth={1} />
                  ) : null}
                  {st === "antagonist" ? (
                    <rect x={rx - 6} y={169} width={12} height={10} rx={2} fill="#c2410c" stroke="#ffffff" strokeWidth={1} />
                  ) : null}
                  <text x={rx} y={205} textAnchor="middle" fontFamily="sans-serif" fontSize={8} fontWeight={700} fill={fillColor}>
                    {st === "native" ? "ON" : st === "agonist" ? "AG+" : st === "antagonist" ? "BLK" : "—"}
                  </text>
                </g>
              );
            })}

            {/* Compact legend */}
            <circle cx={96} cy={262} r={4} fill={meta.color} />
            <text x={105} y={265} fontFamily="sans-serif" fontSize={8.5} fill="#334155">Native {meta.short}</text>
            <polygon points="200,257 205,266 195,266" fill="#15803d" />
            <text x={210} y={265} fontFamily="sans-serif" fontSize={8.5} fill="#334155">Direct Agonist (+)</text>
            <rect x={324} y={258} width={8} height={8} rx={1.5} fill="#c2410c" />
            <text x={337} y={265} fontFamily="sans-serif" fontSize={8.5} fill="#334155">Antagonist Block (✕)</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Cleft NT Level" value={`${cleftConc}%`} tone="brand" />
          <Readout label="Active Receptors" value={`${activeReceptors}/6 (${activePct}%)`} tone={activePct >= 50 ? "good" : "bad"} />
          <Readout label="Membrane Pot." value={`${membraneMv > 0 ? `+${membraneMv}` : membraneMv} mV`} tone={signalTone} />
          <Readout label="Postsynaptic" value={signalLabel} tone={signalTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Dual-Process Heuristics & Framing Lab
// ============================================================================
type LabMode = "framing" | "anchoring" | "baserate";
type FrameType = "gain" | "loss";
type ProbKey = "quarter" | "third" | "half";

const PROB_INFO: Record<ProbKey, { p: number; label: string; compLabel: string }> = {
  quarter: { p: 0.25, label: "1/4", compLabel: "3/4" },
  third: { p: 1 / 3, label: "1/3", compLabel: "2/3" },
  half: { p: 0.5, label: "1/2", compLabel: "1/2" },
};

function DualProcessFramingLab() {
  const [mode, setMode] = useState<LabMode>("framing");

  // Mode 1: Framing Effect (Asian Disease)
  const [frame, setFrame] = useState<FrameType>("gain");
  const [population, setPopulation] = useState(600);
  const [probKey, setProbKey] = useState<ProbKey>("third");

  // Mode 2: Anchoring & Adjustment
  const [anchor, setAnchor] = useState(65);
  const [sys2Effort, setSys2Effort] = useState(25);

  // Mode 3: Base-Rate Neglect (Natural Frequencies out of 1,000)
  const [majBasePct, setMajBasePct] = useState(90);
  const [minMatchPct, setMinMatchPct] = useState(80);
  const [majMatchPct, setMajMatchPct] = useState(20);

  // Calculations for Mode 1 (Framing)
  const pInfo = PROB_INFO[probKey];
  const savedSure = Math.round(population * pInfo.p);
  const diedSure = population - savedSure;
  // Prospect Theory value function: v(x) = x^0.65 for gains, -2.25 * |x|^0.65 for losses
  const vSureGain = Math.pow(savedSure, 0.65);
  const vGambleGain = pInfo.p * Math.pow(population, 0.65);
  const vSureLoss = -2.25 * Math.pow(diedSure, 0.65);
  const vGambleLoss = (1 - pInfo.p) * (-2.25 * Math.pow(population, 0.65));

  const sureChoicePct =
    frame === "gain"
      ? probKey === "third"
        ? 72
        : probKey === "quarter"
          ? 76
          : 68
      : probKey === "third"
        ? 22
        : probKey === "quarter"
          ? 19
          : 26;
  const gambleChoicePct = 100 - sureChoicePct;

  // Calculations for Mode 2 (Anchoring — True value = 28% African UN nations)
  const trueVal = 28;
  const anchorPullWeight = 0.62 * (1 - sys2Effort / 115);
  const predictedEst = Math.round(trueVal + (anchor - trueVal) * anchorPullWeight);
  const anchorError = predictedEst - trueVal;

  // Calculations for Mode 3 (Base-Rate Neglect out of 1,000)
  const nMaj = majBasePct * 10;
  const nMin = 1000 - nMaj;
  const hitMaj = Math.round((nMaj * majMatchPct) / 100);
  const hitMin = Math.round((nMin * minMatchPct) / 100);
  const totalHits = Math.max(1, hitMaj + hitMin);
  const truePosteriorMajPct = Math.round((hitMaj / totalHits) * 100);
  const naiveSys1MinPct = Math.round((minMatchPct / (minMatchPct + majMatchPct)) * 100);

  return (
    <WidgetFrame
      title="Dual-Process Heuristics & Framing Lab (Kahneman & Tversky)"
      tryThis={[
        "In **Framing Effect**, toggle **Gain Frame** ↔ **Loss Frame**: watch Expected Lives Saved stay identical while predicted preferences reverse completely!",
        "In **Anchoring**, slide the arbitrary wheel from **10** to **65**, then increase **System 2 Deliberation** to see how effortful checking shrinks bias.",
        "In **Base-Rate Neglect**, set Majority = **90%**, Minority match = **80%**, Majority match = **20%** — see why a trait-matching stranger is still **69% likely** to belong to the majority!",
      ]}
      caption={
        mode === "framing" ? (
          <p>
            <strong>Prospect Theory Reversal:</strong> Both options yield an identical Expected Value of{" "}
            <strong>{savedSure} lives saved</strong> ({diedSure} deaths). Yet because losses hurt ~2.25× harder than equivalent gains (
            <strong>loss aversion</strong>), the concave Gain curve drives <strong>{sureChoicePct}% risk aversion</strong> in Gain Frame while
            the convex Loss curve flips to <strong>{gambleChoicePct}% risk seeking</strong> in Loss Frame (Tversky &amp; Kahneman, 1981).
          </p>
        ) : mode === "anchoring" ? (
          <p>
            <strong>Insufficient Adjustment:</strong> Starting from an arbitrary anchor of <strong>{anchor}%</strong> (True UN African nations ≈{" "}
            <strong>{trueVal}%</strong>) pulls System 1&apos;s predicted estimate to <strong>{predictedEst}%</strong> (error{" "}
            {anchorError >= 0 ? `+${anchorError}` : anchorError} pp). Raising System 2 deliberation effort overrides part — though rarely all — of the
            anchor (Tversky &amp; Kahneman, 1974; Englich et al., 2006).
          </p>
        ) : (
          <p>
            <strong>Gigerenzer&apos;s Natural Frequencies:</strong> Out of 1,000 people, <strong>{hitMaj}</strong> majority members and{" "}
            <strong>{hitMin}</strong> minority members display the trait ({totalHits} total). System 1&apos;s representativeness heuristic ignores the{" "}
            {majBasePct}:{100 - majBasePct} base rate and guesses {naiveSys1MinPct}% minority — whereas System 2 reveals{" "}
            <strong>{truePosteriorMajPct}%</strong> of trait matches are actually majority members!
          </p>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<LabMode>
          label="Cognitive bias experiment"
          value={mode}
          onChange={setMode}
          options={[
            { value: "framing", label: "Framing Effect" },
            { value: "anchoring", label: "Anchoring" },
            { value: "baserate", label: "Base-Rate Neglect" },
          ]}
        />

        {mode === "framing" ? (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <Segmented<FrameType>
                label="Decision frame"
                value={frame}
                onChange={setFrame}
                options={[
                  { value: "gain", label: "Gain Frame (Saved)" },
                  { value: "loss", label: "Loss Frame (Die)" },
                ]}
              />
              <Segmented<ProbKey>
                label="Gamble survival probability"
                value={probKey}
                onChange={setProbKey}
                options={[
                  { value: "quarter", label: "p = 1/4" },
                  { value: "third", label: "p = 1/3 (Classic)" },
                  { value: "half", label: "p = 1/2" },
                ]}
              />
            </div>

            <Slider
              label="Outbreak Population at Risk (N)"
              value={population}
              min={300}
              max={1200}
              step={300}
              onChange={setPopulation}
              format={(v) => `${v} people`}
            />

            <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
              <div className="font-bold text-ink">
                {frame === "gain" ? "Gain-Frame Wording:" : "Loss-Frame Wording:"}
              </div>
              <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-line bg-surface p-2.5">
                  <div className="text-xs font-bold uppercase text-brand">Sure Option</div>
                  <div className="mt-0.5 text-ink">
                    {frame === "gain"
                      ? `Exactly ${savedSure} people will be saved.`
                      : `Exactly ${diedSure} people will die.`}
                  </div>
                </div>
                <div className="rounded-lg border border-line bg-surface p-2.5">
                  <div className="text-xs font-bold uppercase text-bad">Risky Gamble</div>
                  <div className="mt-0.5 text-ink">
                    {frame === "gain"
                      ? `${pInfo.label} chance all ${population} saved; ${pInfo.compLabel} chance 0 saved.`
                      : `${pInfo.label} chance 0 die; ${pInfo.compLabel} chance all ${population} die.`}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
              <svg
                viewBox="0 0 540 220"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Prospect Theory value curve and predicted participant choice split under ${frame} framing`}
                className="mx-auto block h-auto w-full max-w-[540px]"
              >
                <rect x="0" y="0" width="540" height="220" fill="#ffffff" rx="8" />
                <text x="140" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize={11} fontWeight={700} fill="#1c1630">
                  Prospect Theory Value Curve
                </text>
                <text x="410" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize={11} fontWeight={700} fill="#1c1630">
                  Predicted Choice Split ({frame === "gain" ? "Gain" : "Loss"})
                </text>
                <line x1="280" y1="12" x2="280" y2="208" stroke="#e2dcf0" strokeWidth={1.5} strokeDasharray="4 4" />

                {/* Left: Value Curve */}
                <line x1="24" y1="114" x2="262" y2="114" stroke="#64748b" strokeWidth={1.4} />
                <line x1="142" y1="30" x2="142" y2="198" stroke="#64748b" strokeWidth={1.4} />
                <text x="260" y="106" textAnchor="end" fontFamily="sans-serif" fontSize={8.5} fontWeight={700} fill="#15803d">Gains</text>
                <text x="26" y="106" textAnchor="start" fontFamily="sans-serif" fontSize={8.5} fontWeight={700} fill="#c2410c">Losses</text>

                <path d="M142,114 C166,74 205,54 252,48" fill="none" stroke="#15803d" strokeWidth={frame === "gain" ? 3.2 : 1.6} opacity={frame === "gain" ? 1 : 0.4} />
                <path d="M142,114 C122,164 86,184 36,192" fill="none" stroke="#c2410c" strokeWidth={frame === "loss" ? 3.2 : 1.6} opacity={frame === "loss" ? 1 : 0.4} />

                {/* Active quadrant markers */}
                {frame === "gain" ? (
                  <g>
                    <circle cx={142 + pInfo.p * 110} cy={114 - Math.pow(pInfo.p, 0.65) * 66} r={5.5} fill="#7c3aed" />
                    <circle cx={142 + pInfo.p * 110} cy={114 - pInfo.p * 66} r={5} fill="#c2410c" />
                    <text x="140" y="42" textAnchor="middle" fontFamily="sans-serif" fontSize={8.5} fontWeight={700} fill="#4c1d95">
                      Sure ({vSureGain.toFixed(0)}) &gt; Gamble ({vGambleGain.toFixed(0)})
                    </text>
                  </g>
                ) : (
                  <g>
                    <circle cx={142 - (1 - pInfo.p) * 106} cy={114 + Math.pow(1 - pInfo.p, 0.65) * 78} r={5.5} fill="#7c3aed" />
                    <circle cx={142 - (1 - pInfo.p) * 106} cy={114 + (1 - pInfo.p) * 78} r={5} fill="#c2410c" />
                    <text x="140" y="206" textAnchor="middle" fontFamily="sans-serif" fontSize={8.5} fontWeight={700} fill="#9a3412">
                      Gamble ({vGambleLoss.toFixed(0)}) &gt; Sure ({vSureLoss.toFixed(0)})
                    </text>
                  </g>
                )}

                {/* Right: Choice Split Bars */}
                <text x="304" y="66" fontFamily="sans-serif" fontSize={10} fontWeight={700} fill="#4c1d95">Sure Option</text>
                <rect x="304" y="74" width="212" height="28" rx="6" fill="#f1eef9" />
                <rect x="304" y="74" width={(212 * sureChoicePct) / 100} height="28" rx="6" fill="#7c3aed" />
                <text x="510" y="92" textAnchor="end" fontFamily="sans-serif" fontSize={11} fontWeight={700} fill={sureChoicePct > 75 ? "#ffffff" : "#1c1630"}>
                  {sureChoicePct}%
                </text>

                <text x="304" y="134" fontFamily="sans-serif" fontSize={10} fontWeight={700} fill="#9a3412">Risky Gamble</text>
                <rect x="304" y="142" width="212" height="28" rx="6" fill="#ffedd5" />
                <rect x="304" y="142" width={(212 * gambleChoicePct) / 100} height="28" rx="6" fill="#c2410c" />
                <text x="510" y="160" textAnchor="end" fontFamily="sans-serif" fontSize={11} fontWeight={700} fill={gambleChoicePct > 75 ? "#ffffff" : "#1c1630"}>
                  {gambleChoicePct}%
                </text>

                <text x="410" y="198" textAnchor="middle" fontFamily="sans-serif" fontSize={9} fontWeight={700} fill="#15803d">
                  Identical Expected Value = {savedSure} lives saved
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <Readout label="Expected Saved" value={`${savedSure}`} tone="good" />
              <Readout label="Expected Deaths" value={`${diedSure}`} tone="ink" />
              <Readout label="Pick Sure Option" value={`${sureChoicePct}%`} tone={frame === "gain" ? "brand" : "ink"} />
              <Readout label="Pick Gamble" value={`${gambleChoicePct}%`} tone={frame === "loss" ? "bad" : "ink"} />
            </div>
          </div>
        ) : mode === "anchoring" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Slider
                label="Rigged Wheel Anchor (10 vs 65 classic)"
                value={anchor}
                min={5}
                max={95}
                step={5}
                onChange={setAnchor}
                format={(v) => `${v}%`}
              />
              <Slider
                label="System 2 Deliberation Effort"
                value={sys2Effort}
                min={0}
                max={100}
                step={5}
                onChange={setSys2Effort}
                format={(v) => `${v}%`}
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
              <svg
                viewBox="0 0 540 165"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Anchoring scale showing arbitrary anchor ${anchor}%, true value ${trueVal}%, and pulled participant estimate ${predictedEst}%`}
                className="mx-auto block h-auto w-full max-w-[540px]"
              >
                <rect x="0" y="0" width="540" height="165" fill="#ffffff" rx="8" />
                <text x="270" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize={11.5} fontWeight={700} fill="#1c1630">
                  Estimate: Percentage of African Nations in the UN (Tversky &amp; Kahneman, 1974)
                </text>

                {/* Number line 0..100 mapped to x=40..500 */}
                <line x1="40" y1="92" x2="500" y2="92" stroke="#cbd5e1" strokeWidth={6} strokeLinecap="round" />
                {[0, 20, 40, 60, 80, 100].map((tick) => {
                  const x = 40 + tick * 4.6;
                  return (
                    <g key={tick}>
                      <line x1={x} y1={84} x2={x} y2={100} stroke="#64748b" strokeWidth={1.4} />
                      <text x={x} y={116} textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fill="#5b5375">
                        {tick}%
                      </text>
                    </g>
                  );
                })}

                {/* Pull bar between trueVal and predictedEst */}
                <line
                  x1={40 + trueVal * 4.6}
                  y1={92}
                  x2={40 + predictedEst * 4.6}
                  y2={92}
                  stroke="#7c3aed"
                  strokeWidth={6}
                  strokeLinecap="round"
                />

                {/* True Value Marker */}
                <circle cx={40 + trueVal * 4.6} cy={92} r={7} fill="#15803d" stroke="#ffffff" strokeWidth={2} />
                <text x={40 + trueVal * 4.6} y={138} textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fontWeight={700} fill="#14532d">
                  True ({trueVal}%)
                </text>

                {/* Arbitrary Anchor Marker */}
                <rect x={40 + anchor * 4.6 - 6} y={62} width={12} height={12} rx={2} fill="#c2410c" />
                <line x1={40 + anchor * 4.6} y1={74} x2={40 + anchor * 4.6} y2={88} stroke="#c2410c" strokeWidth={1.6} strokeDasharray="3 2" />
                <text x={40 + anchor * 4.6} y={54} textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fontWeight={700} fill="#9a3412">
                  Anchor ({anchor}%)
                </text>

                {/* Predicted Estimate Marker */}
                <circle cx={40 + predictedEst * 4.6} cy={92} r={8} fill="#7c3aed" stroke="#ffffff" strokeWidth={2} />
                <text x={40 + predictedEst * 4.6} y={154} textAnchor="middle" fontFamily="sans-serif" fontSize={10} fontWeight={700} fill="#4c1d95">
                  Estimate ({predictedEst}%)
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Readout label="Random Anchor" value={`${anchor}%`} tone="bad" />
              <Readout label="Predicted Est." value={`${predictedEst}%`} tone="brand" />
              <Readout label="Bias Error" value={`${anchorError >= 0 ? `+${anchorError}` : anchorError} pp`} tone={Math.abs(anchorError) <= 5 ? "good" : "bad"} />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider
                label="Majority Base Rate"
                value={majBasePct}
                min={50}
                max={95}
                step={5}
                onChange={setMajBasePct}
                format={(v) => `${v}% (${v * 10})`}
              />
              <Slider
                label="Minority Trait Match"
                value={minMatchPct}
                min={50}
                max={95}
                step={5}
                onChange={setMinMatchPct}
                format={(v) => `${v}%`}
              />
              <Slider
                label="Majority Trait Match"
                value={majMatchPct}
                min={5}
                max={45}
                step={5}
                onChange={setMajMatchPct}
                format={(v) => `${v}%`}
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
              <svg
                viewBox="0 0 540 180"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Natural frequency comparison out of 1,000 showing ${hitMaj} majority trait matches versus ${hitMin} minority trait matches`}
                className="mx-auto block h-auto w-full max-w-[540px]"
              >
                <rect x="0" y="0" width="540" height="180" fill="#ffffff" rx="8" />
                <text x="270" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize={11.5} fontWeight={700} fill="#1c1630">
                  Natural Frequencies out of 1,000 People (Representativeness vs Base Rate)
                </text>

                {/* Bar 1: Majority Matches */}
                <text x="24" y="56" fontFamily="sans-serif" fontSize={10} fontWeight={700} fill="#4c1d95">
                  Majority members matching trait ({majMatchPct}% of {nMaj}) = {hitMaj} people
                </text>
                <rect x="24" y="64" width="492" height="24" rx="6" fill="#f1eef9" />
                <rect x="24" y="64" width={Math.max(8, (492 * hitMaj) / totalHits)} height="24" rx="6" fill="#7c3aed" />
                <text x="510" y="80" textAnchor="end" fontFamily="sans-serif" fontSize={10.5} fontWeight={700} fill={truePosteriorMajPct > 82 ? "#ffffff" : "#1c1630"}>
                  {truePosteriorMajPct}% of matches
                </text>

                {/* Bar 2: Minority Matches */}
                <text x="24" y="116" fontFamily="sans-serif" fontSize={10} fontWeight={700} fill="#9a3412">
                  Minority members matching trait ({minMatchPct}% of {nMin}) = {hitMin} people
                </text>
                <rect x="24" y="124" width="492" height="24" rx="6" fill="#ffedd5" />
                <rect x="24" y="124" width={Math.max(8, (492 * hitMin) / totalHits)} height="24" rx="6" fill="#c2410c" />
                <text x="510" y="140" textAnchor="end" fontFamily="sans-serif" fontSize={10.5} fontWeight={700} fill={100 - truePosteriorMajPct > 82 ? "#ffffff" : "#1c1630"}>
                  {100 - truePosteriorMajPct}% of matches
                </text>

                <text x="270" y="168" textAnchor="middle" fontFamily="sans-serif" fontSize={9.5} fill="#5b5375">
                  Total people fitting stereotype = {hitMaj} + {hitMin} = {totalHits}
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Readout label="True P(Majority)" value={`${truePosteriorMajPct}%`} tone="brand" />
              <Readout label="True P(Minority)" value={`${100 - truePosteriorMajPct}%`} tone="good" />
              <Readout label="System 1 Guess" value={`${naiveSys1MinPct}% Min.`} tone="bad" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "synapse-modeller",
    title: "Synapse Neurotransmission & Agonist / Antagonist Modeller",
    blurb: "Simulate acetylcholine, serotonin, and dopamine synapses under agonists, SSRIs, and competitive antagonists.",
    Component: SynapseModeller,
  },
  {
    id: "dual-process-framing-lab",
    title: "Dual-Process Heuristics & Framing Lab",
    blurb: "Explore Prospect Theory gain/loss reversals, anchoring pull under System 2 fatigue, and natural-frequency base rates.",
    Component: DualProcessFramingLab,
  },
];

export default widgets;
