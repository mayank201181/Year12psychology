"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type CulturalLens = "imposed" | "emic" | "derived";
type FallacyLevel = "low" | "high";
type CulturePreset = "henrich" | "imposed" | "hong" | "derived";

function WeirdCulturalValidityWidget() {
  const [lens, setLens] = useState<CulturalLens>("imposed");
  const [weirdPct, setWeirdPct] = useState(96);
  const [adaptation, setAdaptation] = useState(25);
  const [fallacy, setFallacy] = useState<FallacyLevel>("high");
  const [preset, setPreset] = useState<CulturePreset>("henrich");

  const applyPreset = (p: CulturePreset) => {
    setPreset(p);
    if (p === "henrich") {
      setLens("imposed");
      setWeirdPct(96);
      setAdaptation(25);
      setFallacy("high");
    } else if (p === "imposed") {
      setLens("imposed");
      setWeirdPct(84);
      setAdaptation(15);
      setFallacy("high");
    } else if (p === "hong") {
      setLens("emic");
      setWeirdPct(48);
      setAdaptation(80);
      setFallacy("low");
    } else {
      setLens("derived");
      setWeirdPct(24);
      setAdaptation(90);
      setFallacy("low");
    }
  };

  const nonWeirdPct = 100 - weirdPct;
  const overRep = +(weirdPct / 12).toFixed(1);

  // Population validity falls as WEIRD share diverges from humanity's 12% baseline
  const popValidity = Math.max(8, Math.min(100, Math.round(100 - Math.abs(weirdPct - 12) * 0.98)));

  // Construct validity blends local adaptation with lens bonus/penalty
  const lensModifier = lens === "imposed" ? -22 : lens === "emic" ? 12 : 18;
  const constructValidity = Math.max(10, Math.min(100, Math.round(adaptation + lensModifier)));

  const ecoRisk =
    fallacy === "high"
      ? "High (Ecological Fallacy)"
      : lens === "imposed"
        ? "Moderate (Unadapted Scale)"
        : "Low (Individualized)";

  const weirdBarW = Math.max(8, Math.round((weirdPct / 100) * 230));
  const nonWeirdBarW = Math.max(0, 230 - weirdBarW);

  const popTone: "good" | "bad" | "brand" = popValidity >= 70 ? "good" : popValidity < 40 ? "bad" : "brand";
  const conTone: "good" | "bad" | "brand" = constructValidity >= 70 ? "good" : constructValidity < 45 ? "bad" : "brand";
  const repTone: "good" | "bad" | "brand" = overRep <= 2.5 ? "good" : overRep >= 5 ? "bad" : "brand";

  const lensSummary =
    lens === "imposed"
      ? "Exporting a single-culture rubric unchanged creates an **imposed etic**, masking local idioms of distress or parenting norms and inflating construct Bias."
      : lens === "emic"
        ? "An **emic insider** design builds deep local construct validity in one cultural system, though cross-cultural generalization remains cautious until multi-site synthesis occurs."
        : "A **derived etic** synthesizes multiple local emic inquiries first, balancing high construct equivalence with valid cross-cultural comparison.";

  return (
    <WidgetFrame
      title="Emic/Etic & WEIRD Cultural Validity Inspector [HL]"
      tryThis={[
        "Start at Henrich et al.'s (2010) 96% WEIRD baseline (8.0× skew), then drag WEIRD share down toward 24% to see population validity recover.",
        "Switch from **Imposed Etic** to **Derived Etic** and raise local construct adaptation above 80% — notice how construct validity separates from sampling alone.",
        "Toggle **Country-Average Stereotyping** to inspect how projecting a national Hofstede score onto individuals triggers the **ecological fallacy**.",
      ]}
      caption={
        <div className="space-y-1.5">
          <p>
            <strong>Lens Diagnosis:</strong> {lensSummary.replace(/\*\*/g, "")}
          </p>
          <p className="text-ink-2">
            At <strong>{weirdPct}% WEIRD</strong> ({nonWeirdPct}% non-WEIRD), Western educated samples are represented at{" "}
            <strong>{overRep}×</strong> their 12% share of humanity (Henrich et al., 2010).{" "}
            {fallacy === "high"
              ? "Warning: attributing a country-level Hofstede average directly to an individual commits the ecological fallacy — contrast with Hong et al. (2000) bicultural frame-switching."
              : "Measuring individual cultural endorsement (Chiao et al., 2009) avoids the ecological fallacy."}
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Study Presets</div>
          <Segmented<CulturePreset>
            label="Study presets"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "henrich", label: "Henrich (96%)" },
              { value: "imposed", label: "Imposed Scale" },
              { value: "hong", label: "Hong Bicultural" },
              { value: "derived", label: "Derived Etic" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Cross-Cultural Research Lens</div>
            <Segmented<CulturalLens>
              label="Cross-cultural research lens"
              value={lens}
              onChange={(v) => setLens(v)}
              options={[
                { value: "imposed", label: "Imposed Etic" },
                { value: "emic", label: "Emic Insider" },
                { value: "derived", label: "Derived Etic" },
              ]}
            />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Individual vs Country-Mean Inference</div>
            <Segmented<FallacyLevel>
              label="Ecological fallacy setting"
              value={fallacy}
              onChange={(v) => setFallacy(v)}
              options={[
                { value: "low", label: "Individual Endorsement" },
                { value: "high", label: "Apply National Mean" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="WEIRD Share of Study Sample"
            value={weirdPct}
            min={12}
            max={100}
            step={2}
            onChange={setWeirdPct}
            format={(v) => `${v}% WEIRD`}
          />
          <Slider
            label="Local Construct Adaptation / Emic Depth"
            value={adaptation}
            min={10}
            max={100}
            step={5}
            onChange={setAdaptation}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            viewBox="0 0 560 220"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`WEIRD sampling comparison showing ${weirdPct}% WEIRD sample vs 12% global WEIRD population, with ${popValidity}% population validity and ${constructValidity}% construct validity`}
            className="block h-auto w-full"
          >
            <rect x="0" y="0" width="560" height="220" rx="10" fill="#ffffff" />
            <text x="140" y="22" fontFamily="system-ui,sans-serif" fontSize="12.5" fontWeight="700" textAnchor="middle" fill="#1c1630">
              Global Population vs Study Sample
            </text>

            <text x="20" y="50" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#5b5375">
              World Population (12% WEIRD / 88% Non-WEIRD)
            </text>
            <rect x="20" y="58" width="28" height="30" rx="4" fill="#7c3aed" />
            <rect x="50" y="58" width="200" height="30" rx="4" fill="#0d9488" />
            <text x="34" y="77" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#ffffff">
              12%
            </text>
            <text x="150" y="77" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="#ffffff">
              88% Non-WEIRD
            </text>

            <text x="20" y="114" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#5b5375">
              Your Sample ({weirdPct}% WEIRD / {nonWeirdPct}% Non-WEIRD)
            </text>
            <rect x="20" y="122" width={weirdBarW} height="30" rx="4" fill="#7c3aed" />
            {nonWeirdBarW > 2 ? (
              <rect x={22 + weirdBarW} y="122" width={Math.max(2, nonWeirdBarW - 2)} height="30" rx="4" fill="#0d9488" />
            ) : null}
            <text
              x={20 + weirdBarW / 2}
              y="141"
              fontFamily="system-ui,sans-serif"
              fontSize={weirdPct <= 16 ? "9.5" : "10.5"}
              fontWeight="700"
              textAnchor="middle"
              fill="#ffffff"
            >
              {weirdPct}%
            </text>
            {nonWeirdPct >= 14 ? (
              <text
                x={22 + weirdBarW + (nonWeirdBarW - 2) / 2}
                y="141"
                fontFamily="system-ui,sans-serif"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
                fill="#ffffff"
              >
                {nonWeirdPct}%
              </text>
            ) : null}

            <rect x="20" y="168" width="230" height="38" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
            <text x="135" y="185" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" fill="#5b21b6">
              WEIRD Skew: {overRep}× Global Share
            </text>
            <text x="135" y="199" fontFamily="system-ui,sans-serif" fontSize="9.5" textAnchor="middle" fill="#5b5375">
              {weirdPct}% ÷ 12% = {overRep}×
            </text>

            <line x1="276" y1="16" x2="276" y2="206" stroke="#e2dcf0" strokeWidth="1.5" strokeDasharray="4 4" />

            <text x="418" y="22" fontFamily="system-ui,sans-serif" fontSize="12.5" fontWeight="700" textAnchor="middle" fill="#1c1630">
              Validity &amp; Cultural Bias Profile
            </text>

            <text x="296" y="54" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#1c1630">
              Population Validity
            </text>
            <text x="536" y="54" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" textAnchor="end" fill="#1c1630">
              {popValidity}%
            </text>
            <rect x="296" y="62" width="240" height="16" rx="8" fill="#f1eef9" />
            <rect
              x="296"
              y="62"
              width={Math.round((popValidity / 100) * 240)}
              height="16"
              rx="8"
              fill={popValidity >= 70 ? "#15803d" : popValidity < 40 ? "#c2410c" : "#7c3aed"}
            />

            <text x="296" y="106" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#1c1630">
              Cross-Cultural Construct Validity
            </text>
            <text x="536" y="106" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" textAnchor="end" fill="#1c1630">
              {constructValidity}%
            </text>
            <rect x="296" y="114" width="240" height="16" rx="8" fill="#f1eef9" />
            <rect
              x="296"
              y="114"
              width={Math.round((constructValidity / 100) * 240)}
              height="16"
              rx="8"
              fill={constructValidity >= 70 ? "#15803d" : constructValidity < 45 ? "#c2410c" : "#2563eb"}
            />

            <rect
              x="296"
              y="150"
              width="240"
              height="56"
              rx="8"
              fill={fallacy === "high" ? "#ffedd5" : "#dcfce7"}
              stroke={fallacy === "high" ? "#fdba74" : "#86efac"}
            />
            <text
              x="416"
              y="172"
              fontFamily="system-ui,sans-serif"
              fontSize="11"
              fontWeight="700"
              textAnchor="middle"
              fill={fallacy === "high" ? "#9a3412" : "#166534"}
            >
              {ecoRisk}
            </text>
            <text x="416" y="192" fontFamily="system-ui,sans-serif" fontSize="9.8" textAnchor="middle" fill="#1c1630">
              {lens === "imposed"
                ? "Lens: Imposed Etic (High Measurement Bias)"
                : lens === "emic"
                  ? "Lens: Emic Insider (High Local Depth)"
                  : "Lens: Derived Etic (Multi-Site Validated)"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout label="Over-Rep Factor" value={`${overRep}×`} tone={repTone} />
          <Readout label="Population Validity" value={`${popValidity}%`} tone={popTone} />
          <Readout label="Construct Validity" value={`${constructValidity}%`} tone={conTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type ModellerTab = "sdt" | "digital";
type RewardMode = "none" | "informational" | "controlling";
type RpeState = "positive" | "zero" | "negative";
type PhoneLoc = "desk" | "pocket" | "room";
type SocialMode = "active" | "passive";

function MotivationAndDigitalAttentionWidget() {
  const [tab, setTab] = useState<ModellerTab>("sdt");

  // Mode A: SDT & Dopamine RPE
  const [autonomy, setAutonomy] = useState(75);
  const [competence, setCompetence] = useState(70);
  const [relatedness, setRelatedness] = useState(65);
  const [rewardMode, setRewardMode] = useState<RewardMode>("none");
  const [rpeState, setRpeState] = useState<RpeState>("positive");

  // Mode B: Digital Attention & Effect Size
  const [phoneLoc, setPhoneLoc] = useState<PhoneLoc>("desk");
  const [dependence, setDependence] = useState(7);
  const [switchFreq, setSwitchFreq] = useState(6);
  const [socialMode, setSocialMode] = useState<SocialMode>("passive");
  const [corrAbs, setCorrAbs] = useState(0.06);

  // Compute SDT score (0..100)
  const effectiveAutonomy =
    rewardMode === "controlling" ? Math.max(5, autonomy - 38) : rewardMode === "informational" ? Math.min(100, autonomy + 5) : autonomy;
  const effectiveCompetence = rewardMode === "informational" ? Math.min(100, competence + 12) : competence;
  const sdtScore = Math.round(effectiveAutonomy * 0.45 + effectiveCompetence * 0.3 + relatedness * 0.25);

  const sdtStage =
    sdtScore < 20
      ? "Amotivation"
      : sdtScore < 38
        ? "External"
        : sdtScore < 55
          ? "Introjected"
          : sdtScore < 72
            ? "Identified"
            : sdtScore < 86
              ? "Integrated"
              : "Intrinsic";

  const overjustificationRisk =
    rewardMode === "controlling" && autonomy >= 50
      ? "High (Crowding-Out!)"
      : rewardMode === "controlling"
        ? "Moderate (Controlling)"
        : "Low (Preserved)";

  const needleX = Math.round(28 + (sdtScore / 100) * 504);

  const rpePath =
    rpeState === "positive"
      ? "34,64 110,64 128,34 146,64 164,30 182,64 200,36 218,64 310,64"
      : rpeState === "zero"
        ? "34,64 72,64 86,38 100,64 114,42 128,64 310,64"
        : "34,58 148,58 170,82 222,82 242,58 310,58";

  const rpeColor = rpeState === "positive" ? "#15803d" : rpeState === "zero" ? "#7c3aed" : "#c2410c";
  const rpeLabel =
    rpeState === "positive"
      ? "+RPE: Phasic VTA → NAc burst (unexpected reward)"
      : rpeState === "zero"
        ? "0 RPE: Burst shifts to cue; predictable outcome flat"
        : "−RPE: Firing dips below baseline (omitted reward)";

  // Compute Digital Attention & Orben Effect-Size model
  const locMultiplier = phoneLoc === "desk" ? 1.0 : phoneLoc === "pocket" ? 0.48 : 0.08;
  const wmDropPct = Math.round(locMultiplier * (4 + dependence * 2.1));
  const availWm = Math.max(55, 100 - wmDropPct);
  const rtCostPct = Math.round(switchFreq * 4.5 + (phoneLoc === "desk" ? 4 : 0));
  const r2Pct = +(corrAbs * corrAbs * 100).toFixed(2);
  const moodEffect =
    socialMode === "passive"
      ? "Negative (Upward Comparison)"
      : "Neutral / Supportive";

  const wmTone: "good" | "bad" | "brand" = availWm >= 90 ? "good" : availWm <= 78 ? "bad" : "brand";
  const rtTone: "good" | "bad" | "brand" = rtCostPct <= 12 ? "good" : rtCostPct >= 30 ? "bad" : "brand";
  const r2Tone: "brand" | "good" | "bad" | "ink" = r2Pct < 1 ? "brand" : r2Pct >= 3 ? "bad" : "ink";

  const barScale = (pct: number) => Math.min(128, Math.max(4, Math.round((pct / 6.25) * 128)));
  const r2BarW = barScale(r2Pct);
  const orbenBarW = barScale(0.4);
  const bullyBarW = barScale(3.0);
  const sleepBarW = barScale(4.5);

  return (
    <WidgetFrame
      title="Self-Determination Motivation & Digital Attention Modeller [HL]"
      tryThis={[
        "In **SDT & Dopamine**, set high Autonomy (80+), then switch rewards to **Expected Controlling** to watch Lepper et al.'s (1973) **overjustification** pull the continuum needle leftward.",
        "Cycle **Reward Prediction** from Unexpected (+RPE) to Expected (0 RPE) to Omitted (−RPE) to compare Schultz et al.'s (1997) firing trace.",
        "Switch to **Digital Attention** and move the silent phone from **On Desk** to **Other Room** at high phone dependence (Ward et al., 2017), then drag |r| = 0.06 vs 0.20 to see why **R²** scales quadratically (Orben & Przybylski, 2019).",
      ]}
      caption={
        tab === "sdt" ? (
          <div className="space-y-1.5">
            <p>
              <strong>SDT &amp; Neurobiology Synthesis:</strong> With Autonomy {autonomy}, Competence {competence}, and Relatedness{" "}
              {relatedness}, motivation sits at <strong>{sdtStage}</strong> ({sdtScore}/100).
            </p>
            <p className="text-ink-2">
              {rewardMode === "controlling"
                ? "Expected controlling rewards shift locus of causality outward, undermining Autonomy and triggering the overjustification effect (Lepper et al., 1973)."
                : rewardMode === "informational"
                  ? "Informational mastery feedback supports Competence without coercing Autonomy (Deci & Ryan)."
                  : "Unpressured need satisfaction supports internalized motivation; remember Iyengar & Lepper (1999) showed Relatedness and trusted in-group choice can harmonize with Autonomy."}
            </p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <p>
              <strong>Digital Attention &amp; Effect-Size Nuance:</strong> Keeping a silent phone{" "}
              <strong>{phoneLoc === "desk" ? "on the desk" : phoneLoc === "pocket" ? "in a pocket/bag" : "in another room"}</strong> at
              dependence {dependence}/10 leaves ~<strong>{availWm}%</strong> working-memory capacity (Ward et al., 2017), while task
              switching adds ~<strong>{rtCostPct}%</strong> latency cost (Ophir et al., 2009).
            </p>
            <p className="text-ink-2">
              A survey correlation of <strong>|r| = {corrAbs.toFixed(2)}</strong> explains{" "}
              <strong>{r2Pct}%</strong> of variance (R² = r² × 100%).{" "}
              {socialMode === "passive"
                ? "Passive scrolling elevates upward social comparison and envy (Verduyn et al., 2015) far more than raw screen hours predict."
                : "Active social messaging maintains interpersonal connectedness without the envy penalty of passive feeds (Verduyn et al., 2015)."}
            </p>
          </div>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<ModellerTab>
          label="Modeller tab"
          value={tab}
          onChange={setTab}
          options={[
            { value: "sdt", label: "SDT & Dopamine RPE" },
            { value: "digital", label: "Digital Brain Drain & R²" },
          ]}
        />

        {tab === "sdt" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider label="Autonomy (Volition)" value={autonomy} min={0} max={100} step={5} onChange={setAutonomy} />
              <Slider label="Competence (Mastery)" value={competence} min={0} max={100} step={5} onChange={setCompetence} />
              <Slider label="Relatedness (Belonging)" value={relatedness} min={0} max={100} step={5} onChange={setRelatedness} />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">External Reward Regime</div>
                <Segmented<RewardMode>
                  label="External reward regime"
                  value={rewardMode}
                  onChange={setRewardMode}
                  options={[
                    { value: "none", label: "No Reward" },
                    { value: "informational", label: "Informational" },
                    { value: "controlling", label: "Controlling" },
                  ]}
                />
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Dopamine Prediction (Schultz)</div>
                <Segmented<RpeState>
                  label="Dopamine prediction error state"
                  value={rpeState}
                  onChange={setRpeState}
                  options={[
                    { value: "positive", label: "Unexpected (+)" },
                    { value: "zero", label: "Expected (0)" },
                    { value: "negative", label: "Omitted (−)" },
                  ]}
                />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
              <svg
                viewBox="0 0 560 225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Live SDT motivation continuum positioned at ${sdtStage} (${sdtScore} out of 100) alongside VTA dopamine ${rpeState} prediction error firing trace`}
                className="block h-auto w-full"
              >
                <rect x="0" y="0" width="560" height="225" rx="10" fill="#ffffff" />
                <text x="20" y="20" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="700" fill="#1c1630">
                  VTA → NAc Dopamine Trace: {rpeLabel}
                </text>
                <rect x="20" y="28" width="305" height="68" rx="8" fill="#f7f5fc" stroke="#e2dcf0" />
                <line x1="34" y1="64" x2="310" y2="64" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points={rpePath} fill="none" stroke={rpeColor} strokeWidth="2.5" strokeLinejoin="round" />
                <text x="86" y="88" fontFamily="system-ui,sans-serif" fontSize="9.5" textAnchor="middle" fill="#5b5375">
                  Cue
                </text>
                <text x="190" y="88" fontFamily="system-ui,sans-serif" fontSize="9.5" textAnchor="middle" fill="#5b5375">
                  Reward Window
                </text>

                <rect
                  x="338"
                  y="28"
                  width="202"
                  height="68"
                  rx="8"
                  fill={rewardMode === "controlling" ? "#ffedd5" : "#dcfce7"}
                  stroke={rewardMode === "controlling" ? "#fdba74" : "#86efac"}
                />
                <text
                  x="439"
                  y="52"
                  fontFamily="system-ui,sans-serif"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  fill={rewardMode === "controlling" ? "#9a3412" : "#166534"}
                >
                  Overjustification Risk
                </text>
                <text x="439" y="74" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" fill="#1c1630">
                  {overjustificationRisk}
                </text>

                <text x="20" y="122" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="700" fill="#1c1630">
                  SDT Internalization Continuum (Deci &amp; Ryan)
                </text>
                <rect x="20" y="136" width="84" height="36" rx="5" fill="#f1eef9" stroke="#cbd5e1" />
                <rect x="106" y="136" width="84" height="36" rx="5" fill="#ffedd5" stroke="#fdba74" />
                <rect x="192" y="136" width="84" height="36" rx="5" fill="#fef3c7" stroke="#fcd34d" />
                <rect x="278" y="136" width="84" height="36" rx="5" fill="#e0f2fe" stroke="#7dd3fc" />
                <rect x="364" y="136" width="84" height="36" rx="5" fill="#ede9fe" stroke="#c4b5fd" />
                <rect x="450" y="136" width="90" height="36" rx="5" fill="#dcfce7" stroke="#86efac" />

                <text x="62" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#475569">
                  Amotivation
                </text>
                <text x="148" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#9a3412">
                  External
                </text>
                <text x="234" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#92400e">
                  Introjected
                </text>
                <text x="320" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#0369a1">
                  Identified
                </text>
                <text x="406" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#5b21b6">
                  Integrated
                </text>
                <text x="495" y="158" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#166534">
                  Intrinsic
                </text>

                <polygon points={`${needleX},174 ${needleX - 7},188 ${needleX + 7},188`} fill="#7c3aed" />
                <text x={Math.min(485, Math.max(75, needleX))} y="206" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" fill="#5b21b6">
                  Current State: {sdtStage} ({sdtScore}/100)
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <Readout label="SDT Stage" value={sdtStage} tone={sdtScore >= 70 ? "good" : sdtScore < 40 ? "bad" : "brand"} />
              <Readout label="Internalization" value={`${sdtScore}/100`} tone="brand" />
              <Readout
                label="Dopamine Signal"
                value={rpeState === "positive" ? "+RPE Burst" : rpeState === "zero" ? "0 RPE (Cue)" : "−RPE Dip"}
                tone={rpeState === "positive" ? "good" : rpeState === "negative" ? "bad" : "brand"}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Silent Phone Location (Ward et al., 2017)</div>
                <Segmented<PhoneLoc>
                  label="Silent smartphone location"
                  value={phoneLoc}
                  onChange={setPhoneLoc}
                  options={[
                    { value: "desk", label: "On Desk" },
                    { value: "pocket", label: "Pocket/Bag" },
                    { value: "room", label: "Other Room" },
                  ]}
                />
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Social Media Mode (Verduyn et al., 2015)</div>
                <Segmented<SocialMode>
                  label="Social media usage mode"
                  value={socialMode}
                  onChange={setSocialMode}
                  options={[
                    { value: "active", label: "Active Chat" },
                    { value: "passive", label: "Passive Scroll" },
                  ]}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider label="Phone Dependence" value={dependence} min={1} max={10} step={1} onChange={setDependence} format={(v) => `${v}/10`} />
              <Slider label="Media Multitasking" value={switchFreq} min={0} max={10} step={1} onChange={setSwitchFreq} format={(v) => `${v}/10`} />
              <Slider
                label="Survey |r| (Orben)"
                value={corrAbs}
                min={0.04}
                max={0.25}
                step={0.01}
                onChange={setCorrAbs}
                format={(v) => `|r| = ${v.toFixed(2)}`}
              />
            </div>

            <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
              <svg
                viewBox="0 0 560 220"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Working memory capacity at ${availWm}%, task switching cost at ${rtCostPct}%, and variance explained ${r2Pct}% compared with Orben and Przybylski benchmarks`}
                className="block h-auto w-full"
              >
                <rect x="0" y="0" width="560" height="220" rx="10" fill="#ffffff" />
                <text x="132" y="22" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" fill="#1c1630">
                  Cognitive Control Impact
                </text>

                <text x="20" y="54" fontFamily="system-ui,sans-serif" fontSize="10.8" fontWeight="600" fill="#1c1630">
                  Available Working Memory
                </text>
                <text x="242" y="54" fontFamily="system-ui,sans-serif" fontSize="10.8" fontWeight="700" textAnchor="end" fill="#1c1630">
                  {availWm}%
                </text>
                <rect x="20" y="62" width="222" height="18" rx="9" fill="#f1eef9" />
                <rect
                  x="20"
                  y="62"
                  width={Math.round((availWm / 100) * 222)}
                  height="18"
                  rx="9"
                  fill={availWm >= 90 ? "#15803d" : availWm <= 78 ? "#c2410c" : "#f59e0b"}
                />

                <text x="20" y="108" fontFamily="system-ui,sans-serif" fontSize="10.8" fontWeight="600" fill="#1c1630">
                  Task-Switching RT Penalty
                </text>
                <text x="242" y="108" fontFamily="system-ui,sans-serif" fontSize="10.8" fontWeight="700" textAnchor="end" fill="#c2410c">
                  +{rtCostPct}%
                </text>
                <rect x="20" y="116" width="222" height="18" rx="9" fill="#f1eef9" />
                <rect
                  x="20"
                  y="116"
                  width={Math.min(222, Math.round((rtCostPct / 50) * 222))}
                  height="18"
                  rx="9"
                  fill={rtCostPct <= 12 ? "#0d9488" : rtCostPct >= 30 ? "#c2410c" : "#7c3aed"}
                />

                <rect
                  x="20"
                  y="152"
                  width="222"
                  height="52"
                  rx="8"
                  fill={socialMode === "passive" ? "#ffedd5" : "#dcfce7"}
                  stroke={socialMode === "passive" ? "#fdba74" : "#86efac"}
                />
                <text
                  x="131"
                  y="173"
                  fontFamily="system-ui,sans-serif"
                  fontSize="10.5"
                  fontWeight="700"
                  textAnchor="middle"
                  fill={socialMode === "passive" ? "#9a3412" : "#166534"}
                >
                  Social Feed Mode: {socialMode === "passive" ? "Passive Scrolling" : "Active Messaging"}
                </text>
                <text x="131" y="191" fontFamily="system-ui,sans-serif" fontSize="9.8" textAnchor="middle" fill="#1c1630">
                  {moodEffect}
                </text>

                <line x1="266" y1="16" x2="266" y2="206" stroke="#e2dcf0" strokeWidth="1.5" strokeDasharray="4 4" />

                <text x="414" y="22" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" fill="#1c1630">
                  Variance Explained (R² = r² × 100%)
                </text>

                <text x="284" y="58" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#5b21b6">
                  Your |r| = {corrAbs.toFixed(2)}
                </text>
                <rect x="380" y="45" width={r2BarW} height="18" rx="4" fill="#7c3aed" />
                <text x={386 + r2BarW} y="58" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#5b21b6">
                  {r2Pct}%
                </text>

                <text x="284" y="96" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="600" fill="#1c1630">
                  Orben Tech
                </text>
                <rect x="380" y="83" width={orbenBarW} height="18" rx="4" fill="#0d9488" />
                <text x={386 + orbenBarW} y="96" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#0d9488">
                  0.40%
                </text>

                <text x="284" y="134" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="600" fill="#1c1630">
                  Bullying
                </text>
                <rect x="380" y="121" width={bullyBarW} height="18" rx="4" fill="#c2410c" />
                <text x={386 + bullyBarW} y="134" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#c2410c">
                  3.00%
                </text>

                <text x="284" y="172" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="600" fill="#1c1630">
                  Sleep/Meal
                </text>
                <rect x="380" y="159" width={sleepBarW} height="18" rx="4" fill="#2563eb" />
                <text x={386 + sleepBarW} y="172" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#2563eb">
                  4.50%
                </text>

                <text x="414" y="202" fontFamily="system-ui,sans-serif" fontSize="9.8" textAnchor="middle" fill="#5b5375">
                  Quadratic scale: quadrupling |r| increases R² by 16×!
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <Readout label="Working Memory" value={`${availWm}%`} tone={wmTone} />
              <Readout label="Switching Cost" value={`+${rtCostPct}%`} tone={rtTone} />
              <Readout label="Variance R²" value={`${r2Pct}%`} tone={r2Tone} />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hl-weird-cultural-validity",
    title: "Emic/Etic & WEIRD Cultural Validity Inspector [HL]",
    blurb:
      "Explore how WEIRD sample skew (Henrich et al., 2010), Berry's **Imposed vs Derived Etic** lens, and country-mean stereotyping shift population validity, construct validity, and ecological fallacy risk.",
    Component: WeirdCulturalValidityWidget,
  },
  {
    id: "hl-sdt-digital-attention",
    title: "Self-Determination Motivation & Digital Attention Modeller [HL]",
    blurb:
      "Simulate Deci & Ryan's **SDT continuum**, Lepper's **overjustification effect**, Schultz's **dopamine RPE**, Ward's smartphone **Brain Drain**, and Orben & Przybylski's **R²** effect-size scaling.",
    Component: MotivationAndDigitalAttentionWidget,
  },
];

export default widgets;
