"use client";
import { useState } from "react";
import { PlaneGrid, Readout, Segmented, Slider, Stepper, WidgetFrame, makePlane, type WidgetDef } from "./kit";

type DesignView = "both" | "longitudinal" | "cross" | "sequential";

function LongitudinalCohortExplorer() {
  const [view, setView] = useState<DesignView>("both");
  const [ageSlope, setAgeSlope] = useState(3);
  const [cohortShift, setCohortShift] = useState(5);
  const [attritionPct, setAttritionPct] = useState(10);

  const ages = [20, 30, 40, 50, 60];
  const baseAt20For1966 = 52;

  // True trajectory for Cohort 1966 from age 20 -> 60
  const truePts = ages.map((age, idx) => ({
    age,
    y: Math.max(12, Math.min(95, baseAt20For1966 + idx * ageSlope)),
  }));

  // Cross-sectional snapshot in 2026:
  // Age 60 = born 1966 (0 younger decades)
  // Age 50 = born 1976 (+1 younger decade)
  // Age 40 = born 1986 (+2 younger decades)
  // Age 30 = born 1996 (+3 younger decades)
  // Age 20 = born 2006 (+4 younger decades)
  const crossPts = ages.map((age, idx) => {
    const youngerDecades = 4 - idx;
    const score = baseAt20For1966 + idx * ageSlope + youngerDecades * cohortShift;
    return {
      age,
      y: Math.max(12, Math.min(96, score)),
    };
  });

  // Selective attrition biased longitudinal curve (losing lower-scoring participants lifts later wave means)
  const attrPts = ages.map((age, idx) => {
    const biasLift = idx * (attritionPct * 0.22);
    return {
      age,
      y: Math.max(12, Math.min(96, truePts[idx].y + biasLift)),
    };
  });

  // Second cohort (Born 1986) tracked from age 20 -> 40 for Cross-Sequential comparison
  const seqCohort2 = [20, 30, 40].map((age, idx) => ({
    age,
    y: Math.max(12, Math.min(96, baseAt20For1966 + 2 * cohortShift + idx * ageSlope)),
  }));

  const true40YrChange = 4 * ageSlope;
  const observedCrossChange = 4 * ageSlope - 4 * cohortShift;
  const cohortDistortion = observedCrossChange - true40YrChange;
  const initialN = 400;
  const retFactor = Math.pow(1 - attritionPct / 100, 3);
  const retainedN = Math.round(initialN * retFactor);
  const totalAttrPct = Math.round((1 - retFactor) * 1000) / 10;

  const plane = makePlane({
    width: 460,
    height: 245,
    xMin: 15,
    xMax: 65,
    yMin: 10,
    yMax: 100,
    pad: 36,
  });

  const toPolyline = (pts: { age: number; y: number }[]) =>
    pts.map((p) => `${plane.px(p.age).toFixed(1)},${plane.py(p.y).toFixed(1)}`).join(" ");

  const fakeDecline = true40YrChange > 0 && observedCrossChange < 0;
  const showTrue = view === "both" || view === "longitudinal" || view === "sequential";
  const showCross = view === "both" || view === "cross";
  const showAttr = (view === "both" || view === "longitudinal") && attritionPct > 0;
  const showSeq = view === "sequential";

  const c1966Age40 = truePts[2].y;
  const c1986Age40 = seqCohort2[2].y;

  const fmtSigned = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");

  return (
    <WidgetFrame
      title="Longitudinal vs Cross-Sectional Cohort-Effect Explorer"
      tryThis={[
        "Keep **True Age Trend = +3** and slide **Cohort Effect** up to **+6**: watch a genuine age gain turn into an illusory cross-sectional decline!",
        "Switch to **Longitudinal** and raise **Selective Attrition** to **25%**: notice how losing lower-scoring dropouts artificially bends the observed curve upward.",
        "Switch to **Cross-Sequential** to see how comparing two birth cohorts at the **exact same age (40)** isolates the cohort shift cleanly.",
      ]}
      caption={
        <span>
          {fakeDecline ? (
            <>
              <strong className="text-bad">Cohort Illusion Triggered!</strong> Individuals truly gain{" "}
              <strong>{fmtSigned(true40YrChange)} points</strong> from age 20 to 60, yet the 2026 cross-sectional snapshot shows{" "}
              <strong>{fmtSigned(observedCrossChange)} points</strong> because younger generations start{" "}
              <strong>{fmtSigned(cohortShift)} pts/decade</strong> higher (<strong>Measurement</strong> &amp; <strong>Bias</strong>).
            </>
          ) : view === "sequential" ? (
            <>
              <strong>Cross-Sequential Separation:</strong> At <strong>age 40</strong>, the 1986 cohort scores{" "}
              <strong>{c1986Age40.toFixed(0)}</strong> vs <strong>{c1966Age40.toFixed(0)}</strong> for the 1966 cohort—directly measuring the{" "}
              <strong>{fmtSigned(Math.round(c1986Age40 - c1966Age40))} pt</strong> 20-year cohort effect while each line tracks real intra-individual{" "}
              <strong>Change</strong>.
            </>
          ) : (
            <>
              True longitudinal change (age 20→60) is <strong>{fmtSigned(true40YrChange)} pts</strong>, while a 2026 cross-sectional snapshot reads{" "}
              <strong>{fmtSigned(observedCrossChange)} pts</strong> (confound = <strong>{fmtSigned(cohortDistortion)} pts</strong>). With{" "}
              <strong>{attritionPct}%</strong> per-wave dropout, <strong>{retainedN}/{initialN}</strong> participants survive 3 waves (overall attrition{" "}
              <strong>{totalAttrPct}%</strong>).
            </>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Developmental research design view"
            value={view}
            onChange={setView}
            options={[
              { value: "both", label: "Compare Both" },
              { value: "longitudinal", label: "Longitudinal" },
              { value: "cross", label: "Cross-Sectional" },
              { value: "sequential", label: "Cross-Sequential" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="True Age Trend (pts/decade)"
            value={ageSlope}
            min={-4}
            max={6}
            step={1}
            onChange={setAgeSlope}
            format={(v) => fmtSigned(v)}
          />
          <Slider
            label="Cohort Effect (younger +pts/dec)"
            value={cohortShift}
            min={-6}
            max={8}
            step={1}
            onChange={setCohortShift}
            format={(v) => fmtSigned(v)}
          />
          <Slider
            label="Selective Attrition / wave"
            value={attritionPct}
            min={0}
            max={25}
            step={5}
            onChange={setAttritionPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460 245"
            role="img"
            aria-label="Interactive developmental trajectory chart comparing longitudinal, cross-sectional, attrition-biased, and cross-sequential curves across ages 20 to 60"
            className="block h-auto w-full"
          >
            <PlaneGrid plane={plane} step={10} labels={false} />
            <line x1={plane.px(15)} y1={plane.py(10)} x2={plane.px(65)} y2={plane.py(10)} className="stroke-ink-2" strokeWidth={1.6} />
            <line x1={plane.px(15)} y1={plane.py(10)} x2={plane.px(15)} y2={plane.py(100)} className="stroke-ink-2" strokeWidth={1.6} />

            {ages.map((a) => (
              <text key={`ax-${a}`} x={plane.px(a)} y={plane.py(10) + 15} fontSize={10.5} textAnchor="middle" className="fill-ink-2">
                {a}
              </text>
            ))}
            {[20, 40, 60, 80, 100].map((v) => (
              <text key={`ay-${v}`} x={plane.px(15) - 7} y={plane.py(v) + 3.5} fontSize={10} textAnchor="end" className="fill-ink-2">
                {v}
              </text>
            ))}
            <text x={plane.px(40)} y={238} fontSize={10.5} fontWeight={700} textAnchor="middle" className="fill-ink-2">
              Participant Age (Years)
            </text>
            <text
              x={11}
              y={124}
              fontSize={10}
              fontWeight={700}
              textAnchor="middle"
              className="fill-ink-2"
              transform="rotate(-90 11 124)"
            >
              Cognitive Score
            </text>

            {showTrue ? (
              <g>
                <polyline fill="none" stroke="var(--brand)" strokeWidth={3} points={toPolyline(truePts)} />
                {truePts.map((p) => (
                  <circle key={`t-${p.age}`} cx={plane.px(p.age)} cy={plane.py(p.y)} r={4} fill="var(--brand)" />
                ))}
              </g>
            ) : null}

            {showAttr ? (
              <g>
                <polyline fill="none" stroke="var(--s-ratio)" strokeWidth={2.4} strokeDasharray="3,4" points={toPolyline(attrPts)} />
                {attrPts.map((p) => (
                  <circle key={`a-${p.age}`} cx={plane.px(p.age)} cy={plane.py(p.y)} r={3.2} fill="var(--s-ratio)" />
                ))}
              </g>
            ) : null}

            {showCross ? (
              <g>
                <polyline fill="none" stroke="var(--bad)" strokeWidth={2.8} strokeDasharray="7,4" points={toPolyline(crossPts)} />
                {crossPts.map((p) => (
                  <rect
                    key={`c-${p.age}`}
                    x={plane.px(p.age) - 3.5}
                    y={plane.py(p.y) - 3.5}
                    width={7}
                    height={7}
                    rx={1.5}
                    fill="var(--bad)"
                  />
                ))}
              </g>
            ) : null}

            {showSeq ? (
              <g>
                <polyline fill="none" stroke="var(--info)" strokeWidth={2.8} points={toPolyline(seqCohort2)} />
                {seqCohort2.map((p) => (
                  <circle key={`s-${p.age}`} cx={plane.px(p.age)} cy={plane.py(p.y)} r={4} fill="var(--info)" />
                ))}
                {Math.abs(c1986Age40 - c1966Age40) >= 1 ? (
                  <>
                    <line
                      x1={plane.px(40)}
                      y1={plane.py(c1966Age40)}
                      x2={plane.px(40)}
                      y2={plane.py(c1986Age40)}
                      stroke="var(--accent)"
                      strokeWidth={2.5}
                      strokeDasharray="3,2"
                    />
                    <text
                      x={plane.px(40) + 7}
                      y={plane.py((c1966Age40 + c1986Age40) / 2) + 3}
                      fontSize={10}
                      fontWeight={800}
                      fill="var(--warn)"
                    >
                      Cohort gap at age 40
                    </text>
                  </>
                ) : (
                  <text
                    x={plane.px(40) + 8}
                    y={plane.py(c1966Age40) - 8}
                    fontSize={10}
                    fontWeight={800}
                    fill="var(--good)"
                  >
                    0 cohort gap at age 40
                  </text>
                )}
              </g>
            ) : null}
          </svg>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-ink-2">
            {showTrue ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-4 rounded-sm bg-brand" aria-hidden />
                True Longitudinal (1966 cohort)
              </span>
            ) : null}
            {showAttr ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-4 rounded-sm bg-s-ratio" aria-hidden />
                Attrition-Biased Longitudinal
              </span>
            ) : null}
            {showCross ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-4 rounded-sm bg-bad" aria-hidden />
                2026 Cross-Sectional Snapshot
              </span>
            ) : null}
            {showSeq ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-4 rounded-sm bg-info" aria-hidden />
                Cohort 2 (Born 1986)
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="True 40-yr Change" value={`${fmtSigned(true40YrChange)} pts`} tone={true40YrChange >= 0 ? "good" : "bad"} />
          <Readout
            label="Cross-Sec Gap"
            value={`${fmtSigned(observedCrossChange)} pts`}
            tone={fakeDecline ? "bad" : "brand"}
          />
          <Readout
            label="Cohort Confound"
            value={`${fmtSigned(cohortDistortion)} pts`}
            tone={cohortDistortion === 0 ? "good" : "bad"}
          />
          <Readout label="Surviving N (3 waves)" value={`${retainedN} / ${initialN}`} tone={totalAttrPct >= 30 ? "bad" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type CultureKey = "usa" | "germany" | "japan" | "britain" | "sweden" | "custom";
type LensKey = "etic" | "emic";

interface CultureProfile {
  label: string;
  secure: number;
  avoidant: number;
  resistant: number;
  caregivingNorm: string;
  eticReading: string;
  emicReading: string;
  reunionCue: string;
}

const CULTURE_PROFILES: Record<Exclude<CultureKey, "custom">, CultureProfile> = {
  usa: {
    label: "USA (18 studies)",
    secure: 65,
    avoidant: 21,
    resistant: 14,
    caregivingNorm: "Moderate experience with brief babysitter/daycare separations; dyadic caregiver focus.",
    eticReading: "Original Baltimore reference baseline: ~65% Secure, ~21% Avoidant, ~14% Resistant.",
    emicReading: "Protocol matches Western nuclear-family routines most closely—yet intra-US variation across SES groups remains wide.",
    reunionCue: "Most infants seek reassurance briefly on reunion and quickly resume toy exploration.",
  },
  germany: {
    label: "West Germany (3 studies)",
    secure: 57,
    avoidant: 35,
    resistant: 8,
    caregivingNorm: "North German parenting actively prizes early autonomy, self-soothing, and non-clinginess (Grossmann et al., 1985).",
    eticReading: "Elevated 35% Type A (Avoidant) scored as 'insecure' under standard US reunion criteria.",
    emicReading: "Calm, independent reunion behaviour reflects culturally valued self-reliance rather than maternal rejection—a classic imposed etic bias.",
    reunionCue: "Many toddlers regulate emotions independently on reunion without immediate clinging.",
  },
  japan: {
    label: "Japan (2 studies)",
    secure: 68,
    avoidant: 5,
    resistant: 27,
    caregivingNorm: "High physical closeness (amae), co-sleeping, and rare separation from mothers before age 1 (Takahashi, 1986).",
    eticReading: "Elevated 27% Type C (Resistant) and very low 5% Avoidant scored under standard US separation protocol.",
    emicReading: "Being left alone in a strange room is an extreme, unfamiliar shock—so intense crying reflects procedural stress, not insensitive caregiving.",
    reunionCue: "Infants often become deeply distressed during separation (episodes sometimes halted early ethically).",
  },
  britain: {
    label: "Great Britain (1 study)",
    secure: 75,
    avoidant: 22,
    resistant: 3,
    caregivingNorm: "Similar Western separation familiarity to USA with strong responsive dyadic caregiving norms.",
    eticReading: "High 75% Secure majority alongside 22% Avoidant and very low 3% Resistant.",
    emicReading: "Single-study sample (N = 72) warns against overgeneralizing one city sample to an entire nation (small-sample bias).",
    reunionCue: "High proportion use caregiver as a secure base and settle swiftly upon reunion.",
  },
  sweden: {
    label: "Sweden (1 study)",
    secure: 75,
    avoidant: 21,
    resistant: 4,
    caregivingNorm: "Generous parental leave policies supporting consistent early caregiving sensitivity across both parents.",
    eticReading: "High 75% Secure majority with 21% Avoidant and 4% Resistant.",
    emicReading: "Illustrates how national family-leave policies (sociocultural macro-context) support sensitive caregiving—though single-study generalization needs caution.",
    reunionCue: "Consistent warm reunion greetings and confident exploration around the room.",
  },
};

function AttachmentCultureMatrix() {
  const [culture, setCulture] = useState<CultureKey>("japan");
  const [lens, setLens] = useState<LensKey>("emic");
  const [sampleN, setSampleN] = useState(100);
  const [sepFamiliarity, setSepFamiliarity] = useState(50);
  const [indepPush, setIndepPush] = useState(40);

  let securePct: number;
  let avoidantPct: number;
  let resistantPct: number;
  let profile: CultureProfile;

  if (culture === "custom") {
    // Smooth, pedagogically realistic model summing strictly to 100%
    const rawAvoid = Math.round(6 + indepPush * 0.32 + sepFamiliarity * 0.06);
    const rawResist = Math.round(4 + (100 - sepFamiliarity) * 0.28 + (100 - indepPush) * 0.05);
    avoidantPct = Math.max(4, Math.min(42, rawAvoid));
    resistantPct = Math.max(3, Math.min(38, rawResist));
    securePct = Math.max(25, 100 - avoidantPct - resistantPct);
    const diff = 100 - (securePct + avoidantPct + resistantPct);
    securePct += diff;

    profile = {
      label: "Custom Caregiving Profile",
      secure: securePct,
      avoidant: avoidantPct,
      resistant: resistantPct,
      caregivingNorm: `Separation familiarity ${sepFamiliarity}% · Encouraged early independence ${indepPush}%.`,
      eticReading: `Standard US rubric scores ${securePct}% Secure, ${avoidantPct}% Avoidant, and ${resistantPct}% Resistant.`,
      emicReading:
        indepPush >= 65
          ? "High cultural emphasis on early self-reliance shifts behaviours toward Type A cues—requiring emic home observation before assuming insecurity."
          : sepFamiliarity <= 30
            ? "Infrequent separation makes the Strange Situation unusually stressful, inflating Type C distress cues via imposed etic bias."
            : "Balanced separation familiarity and responsiveness align closely with Secure Base reunion cues while still showing within-culture diversity.",
      reunionCue:
        resistantPct > avoidantPct
          ? "Elevated separation protest and prolonged soothing needed upon caregiver return."
          : "Calmer separation response with more autonomous play upon caregiver return.",
    };
  } else {
    profile = CULTURE_PROFILES[culture];
    securePct = profile.secure;
    avoidantPct = profile.avoidant;
    resistantPct = profile.resistant;
  }

  const secureCount = Math.round((sampleN * securePct) / 100);
  const avoidantCount = Math.round((sampleN * avoidantPct) / 100);
  const resistantCount = sampleN - secureCount - avoidantCount;

  const modalLabel =
    securePct >= avoidantPct && securePct >= resistantPct
      ? "Type B · Secure"
      : avoidantPct >= resistantPct
        ? "Type A · Avoidant"
        : "Type C · Resistant";

  const barMaxW = 250;
  const barW = (pct: number) => Math.max(6, (pct / 80) * barMaxW);

  return (
    <WidgetFrame
      title="Attachment & Cross-Cultural Caregiving Matrix"
      tryThis={[
        "Compare **West Germany** and **Japan**: notice that **Type B (Secure)** stays the modal majority in both, even as Type A vs Type C swap places!",
        "Toggle between **Etic (Western Lab Rubric)** and **Emic (Cultural Perspective)** to see how identical reunion data receive starkly different interpretations.",
        "Open **Custom**, lower **Separation Familiarity** to **10%**, and watch Type C distress surge—modelling Takahashi's (1986) Japanese finding.",
      ]}
      caption={
        <span>
          <strong>{lens === "emic" ? "Emic Perspective:" : "Etic Rubric Reading:"}</strong>{" "}
          {lens === "emic" ? profile.emicReading : profile.eticReading}{" "}
          <span className="text-ink-2">
            (Remember van IJzendoorn &amp; Kroonenberg, 1988: <strong>intra-cultural variation ≈ 1.5× inter-cultural variation</strong>.)
          </span>
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Select cultural sample"
            value={culture}
            onChange={setCulture}
            options={[
              { value: "usa", label: "USA" },
              { value: "germany", label: "W. Germany" },
              { value: "japan", label: "Japan" },
              { value: "britain", label: "Britain" },
              { value: "sweden", label: "Sweden" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented
            label="Interpretive cultural lens"
            value={lens}
            onChange={setLens}
            options={[
              { value: "etic", label: "Etic (Western Rubric)" },
              { value: "emic", label: "Emic (Cultural Lens)" },
            ]}
          />
          <Stepper label="Sample size (N)" value={sampleN} min={40} max={240} step={20} onChange={setSampleN} />
        </div>

        {culture === "custom" ? (
          <div className="grid grid-cols-1 gap-3 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-2">
            <Slider
              label="Separation Familiarity"
              value={sepFamiliarity}
              min={10}
              max={90}
              step={5}
              onChange={setSepFamiliarity}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Encouraged Early Independence"
              value={indepPush}
              min={10}
              max={90}
              step={5}
              onChange={setIndepPush}
              format={(v) => `${v}%`}
            />
          </div>
        ) : null}

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2">
            <span>{profile.label}</span>
            <span>N = {sampleN} infants</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460 156"
            role="img"
            aria-label="Horizontal bar chart displaying Secure, Avoidant, and Resistant Strange Situation attachment percentages and infant counts"
            className="block h-auto w-full"
          >
            {/* 50% majority reference line */}
            <line
              x1={115 + barW(50)}
              y1={12}
              x2={115 + barW(50)}
              y2={132}
              stroke="var(--line)"
              strokeWidth={1.5}
              strokeDasharray="4,3"
            />
            <text x={115 + barW(50)} y={148} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
              50% majority line
            </text>

            {/* Type B */}
            <text x={108} y={36} fontSize={11} fontWeight={800} textAnchor="end" className="fill-ink">
              Type B · Secure
            </text>
            <rect x={115} y={20} width={barW(securePct)} height={24} rx={6} fill="var(--good)" />
            <text x={122 + barW(securePct)} y={36} fontSize={11} fontWeight={800} className="fill-ink">
              {securePct}% ({secureCount})
            </text>

            {/* Type A */}
            <text x={108} y={76} fontSize={11} fontWeight={800} textAnchor="end" className="fill-ink">
              Type A · Avoidant
            </text>
            <rect x={115} y={60} width={barW(avoidantPct)} height={24} rx={6} fill="var(--info)" />
            <text x={122 + barW(avoidantPct)} y={76} fontSize={11} fontWeight={800} className="fill-ink">
              {avoidantPct}% ({avoidantCount})
            </text>

            {/* Type C */}
            <text x={108} y={116} fontSize={11} fontWeight={800} textAnchor="end" className="fill-ink">
              Type C · Resistant
            </text>
            <rect x={115} y={100} width={barW(resistantPct)} height={24} rx={6} fill="var(--bad)" />
            <text x={122 + barW(resistantPct)} y={116} fontSize={11} fontWeight={800} className="fill-ink">
              {resistantPct}% ({resistantCount})
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Local Caregiving Norm</div>
            <p className="mt-1 text-ink">{profile.caregivingNorm}</p>
          </div>
          <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">Strange Situation Reunion Cue</div>
            <p className="mt-1 text-ink">{profile.reunionCue}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Type B Secure" value={`${securePct}% (${secureCount})`} tone="good" />
          <Readout label="Type A Avoidant" value={`${avoidantPct}% (${avoidantCount})`} tone="brand" />
          <Readout label="Type C Resistant" value={`${resistantPct}% (${resistantCount})`} tone="bad" />
          <Readout label="Modal Pattern" value={modalLabel} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "longitudinal-vs-cohort-explorer",
    title: "Longitudinal vs Cross-Sectional Cohort-Effect Explorer",
    blurb:
      "Adjust true developmental age change, generational cohort shifts, and selective longitudinal attrition to see why developmental designs disagree (**Change**, **Measurement**, **Bias**).",
    Component: LongitudinalCohortExplorer,
  },
  {
    id: "attachment-culture-matrix",
    title: "Attachment & Cross-Cultural Caregiving Matrix",
    blurb:
      "Explore van IJzendoorn & Kroonenberg's (1988) Strange Situation data across cultures and toggle between **Etic** and **Emic** interpretations (**Perspective**, **Measurement**).",
    Component: AttachmentCultureMatrix,
  },
];

export default widgets;
