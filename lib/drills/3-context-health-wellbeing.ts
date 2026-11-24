import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const NAMES = [
  "Aisha", "Ben", "Chloe", "Daniel", "Elena", "Farid", "Grace", "Hana",
  "Ivan", "Jia", "Kenji", "Leila", "Mateo", "Nadia", "Omar", "Priya",
  "Rohan", "Sofia", "Tariq", "Mei", "Zara", "Liam",
] as const;

const CLINICS = [
  "a youth outpatient clinic",
  "a university health centre",
  "a community mental-health hub",
  "a regional hospital assessment unit",
  "a stepped-care primary clinic",
  "an urban psychological clinic",
] as const;

const MANUALS = ["DSM-5-TR", "ICD-11"] as const;

const DISORDER_PAIRS = [
  "Major Depressive Disorder and Generalized Anxiety Disorder",
  "Major Depressive Disorder and Bipolar II Disorder",
  "Generalized Anxiety Disorder and Panic Disorder",
  "PTSD and Major Depressive Disorder",
  "Social Anxiety Disorder and Major Depressive Disorder",
] as const;

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: Diagnostic Reliability, Cohen's Kappa & Clinical Bias (Section 1)
  // ===========================================================================
  {
    id: "3-context-health-wellbeing.diagnostic-reliability-bias",
    topicId: "3-context-health-wellbeing",
    title: "Diagnostic Concordance, Kappa & Bias",
    level: 1,
    ibLevel: "SL",
    guideRef: "diagnosis-classification-bias",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const totals = [20, 40, 50, 80, 100, 120, 160, 200] as const;
        const total = rng.pick(totals);
        // Pick agreements giving exact whole or .5 percentage between 40% and 95%
        const pctSteps: number[] = [];
        for (let a = Math.ceil(total * 0.4); a <= Math.floor(total * 0.95); a++) {
          const pct = (a / total) * 100;
          if (Math.abs(pct * 2 - Math.round(pct * 2)) < 1e-9 && a !== total / 2) {
            pctSteps.push(a);
          }
        }
        const agreed = rng.pick(pctSteps);
        const pct = clean(roundTo((agreed / total) * 100, 1));
        const disagree = total - agreed;
        const disagreePct = clean(roundTo((disagree / total) * 100, 1));
        const clinic = rng.pick(CLINICS);
        const manual = rng.pick(MANUALS);
        const pair = rng.pick(DISORDER_PAIRS);
        const traps: Trap[] = [];
        if (disagreePct !== pct) {
          traps.push({
            spec: { type: "number", value: disagreePct, tolerance: 0.1 },
            feedback: `${num(disagreePct)}% is the disagreement rate (${disagree} ÷ ${total}) — compute agreement (${agreed} ÷ ${total}) × 100.`,
          });
        }
        return {
          prompt: `At ${clinic}, two psychiatrists independently assess **${total}** referrals using the **${manual}** (primarily screening for ${pair}). They agree on the primary diagnosis for **${agreed}** patients. Calculate the raw percentage inter-rater concordance.`,
          answer: { type: "number", value: pct, tolerance: 0.1, display: `${num(pct)}%` },
          traps,
          hint: "Divide agreed cases by total cases, then multiply by 100.",
          solution: [
            `Raw concordance % = {{(${agreed} / ${total}) * 100}} = **${num(pct)}%**.`,
            "Remember: raw concordance does not subtract chance agreement (unlike Cohen's kappa).",
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.45)) {
          // Reverse / disagreement-framed concordance
          const totals = [40, 50, 80, 100, 120, 160, 200] as const;
          const total = rng.pick(totals);
          const choices: number[] = [];
          for (let d = Math.ceil(total * 0.1); d <= Math.floor(total * 0.45); d++) {
            const pct = ((total - d) / total) * 100;
            if (Math.abs(pct * 2 - Math.round(pct * 2)) < 1e-9 && d !== total / 2) choices.push(d);
          }
          const disagreed = rng.pick(choices);
          const agreed = total - disagreed;
          const pct = clean(roundTo((agreed / total) * 100, 1));
          const wrongPct = clean(roundTo((disagreed / total) * 100, 1));
          const clinic = rng.pick(CLINICS);
          const manual = rng.pick(MANUALS);
          const traps: Trap[] = [];
          if (wrongPct !== pct) {
            traps.push({
              spec: { type: "number", value: wrongPct, tolerance: 0.1 },
              feedback: `${num(wrongPct)}% is the disagreement rate — subtract ${disagreed} from ${total} first to get ${agreed} agreements.`,
            });
          }
          return {
            prompt: `During a **${manual}** reliability audit at ${clinic}, two clinicians independently evaluate **${total}** clients and **disagree** on the primary diagnosis for **${disagreed}** clients. Calculate their percentage inter-rater concordance.`,
            answer: { type: "number", value: pct, tolerance: 0.1, display: `${num(pct)}%` },
            traps,
            hint: "Find agreed cases first (total − disagreements), then divide by total and multiply by 100.",
            solution: [
              `Agreed cases = {{${total} - ${disagreed}}} = ${agreed}.`,
              `Concordance = {{(${agreed} / ${total}) * 100}} = **${num(pct)}%**.`,
            ],
          };
        }

        // Clinical bias / validity classification with randomized person, age, and setting
        const name = rng.pick(NAMES);
        const age = rng.int(17, 52);
        const clinic = rng.pick(CLINICS);
        const cases = [
          {
            prompt: `At ${clinic}, ${name} (age ${age}) has a prior bipolar label on file. When ${name} arrives complaining of sharp chest tightness and dizziness, triage staff immediately record 'manic agitation' without running cardiac checks. Name this clinical labelling bias.`,
            accept: ["diagnostic overshadowing"],
            display: "Diagnostic overshadowing",
            hint: "A pre-existing psychiatric label casts a 'shadow' over real physical medical complaints.",
            explain: "**Diagnostic overshadowing** occurs when clinicians attribute genuine physical symptoms to a patient's psychiatric diagnosis.",
          },
          {
            prompt: `At ${clinic}, once ${name} (age ${age}) is provisionally labelled with schizophrenia, ward nurses log ${name}'s ordinary habit of writing daily study notes as 'obsessive delusional journaling'. Name the cognitive bias illustrated (as in Rosenhan, 1973).`,
            accept: ["confirmation bias", "clinician confirmation bias"],
            display: "Confirmation bias",
            hint: "Which bias makes staff interpret ambiguous or ordinary behaviour to fit an existing diagnostic label?",
            explain: "**Confirmation bias** leads observers to interpret neutral behaviour as supporting a sticky diagnostic schema.",
          },
          {
            prompt: `A researcher at ${clinic} applies a Western guilt-focused depression checklist directly to ${name} (age ${age}), whose cultural community expresses emotional distress mainly through somatic headaches and fatigue (*shenjing shuairuo*). Name Kleinman's two-word term for this cultural validity error.`,
            accept: ["category fallacy"],
            display: "Category fallacy",
            hint: "Kleinman (1977) warned against imposing an *etic* Western diagnostic group where it lacks local validity.",
            explain: "**Category fallacy** is imposing a Western diagnostic category onto a culture where it does not share local validity.",
          },
          {
            prompt: `During assessment at ${clinic}, ${name} (age ${age}) simultaneously meets full DSM-5-TR diagnostic criteria for both Major Depressive Disorder and Generalized Anxiety Disorder. State the one-word clinical term for having two or more co-occurring disorders.`,
            accept: ["comorbidity", "co-morbidity"],
            display: "Comorbidity",
            hint: "Starts with 'co-' meaning 'occurring together'.",
            explain: "**Comorbidity** refers to the simultaneous presence of two or more diagnoses in the same individual.",
          },
          {
            prompt: `Two clinicians at ${clinic} interview ${name} (age ${age}), who reports insomnia, fatigue, restlessness, and poor concentration. Because those exact criteria appear in both MDD and GAD manuals, the clinicians assign different diagnoses. Name this two-word validity threat.`,
            accept: ["symptom overlap"],
            display: "Symptom overlap",
            hint: "Identical diagnostic criteria appear across multiple distinct manual categories.",
            explain: "**Symptom overlap** blurs boundaries between categories like MDD and GAD, reducing inter-rater reliability and construct validity.",
          },
        ] as const;
        const c = rng.pick(cases);
        return {
          prompt: c.prompt,
          answer: { type: "text", accept: [...c.accept], display: c.display },
          hint: c.hint,
          solution: [c.explain],
        };
      }

      // Tier 3: Chance-corrected Cohen's kappa (exact to 2 dp)
      const peOptions = [0.2, 0.4, 0.5, 0.6] as const;
      const pe = rng.pick(peOptions);
      const denom = clean(1 - pe);
      // Choose kappa in [0.25, 0.90] in clean 0.05 increments so po = pe + kappa * (1 - pe) is clean 2 dp
      const kappaStep = rng.int(5, 18); // 0.25 to 0.90
      const kappa = clean(roundTo(kappaStep * 0.05, 2));
      const po = clean(roundTo(pe + kappa * denom, 2));
      const exactKappa = clean(roundTo((po - pe) / (1 - pe), 2));
      const diff = clean(roundTo(po - pe, 2));
      const clinic = rng.pick(CLINICS);
      const manual = rng.pick(MANUALS);
      const traps: Trap[] = [];
      if (diff !== exactKappa) {
        traps.push({
          spec: { type: "number", value: diff, tolerance: 0.01 },
          feedback: `${num(diff)} is only (P_o − P_e) — remember to divide by (1 − P_e) = ${num(denom)}.`,
        });
      }
      return {
        prompt: `In a **${manual}** diagnostic reliability study at ${clinic}, two clinicians achieve observed agreement {{P_o = ${po.toFixed(2)}}} while chance agreement is {{P_e = ${pe.toFixed(2)}}}. Calculate **Cohen's kappa (κ)** to 2 decimal places using {{kappa = (P_o - P_e) / (1 - P_e)}}.`,
        answer: { type: "number", value: exactKappa, tolerance: 0.01, display: exactKappa.toFixed(2) },
        traps,
        hint: "Subtract chance agreement P_e from observed agreement P_o, then divide by (1 − P_e).",
        solution: [
          `Numerator: {{${po.toFixed(2)} - ${pe.toFixed(2)}}} = ${diff.toFixed(2)}.`,
          `Denominator: {{1 - ${pe.toFixed(2)}}} = ${denom.toFixed(2)}.`,
          `Cohen's κ = {{${diff.toFixed(2)} / ${denom.toFixed(2)}}} = **${exactKappa.toFixed(2)}**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: Biopsychosocial Aetiology & Twin/Cognitive Metrics (Section 2)
  // ===========================================================================
  {
    id: "3-context-health-wellbeing.biopsychosocial-aetiology",
    topicId: "3-context-health-wellbeing",
    title: "Biopsychosocial Aetiology & Diathesis–Stress",
    level: 1,
    ibLevel: "SL",
    guideRef: "aetiology-mental-health",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const disorders = [
        "Major Depressive Disorder",
        "Generalized Anxiety Disorder",
        "Panic Disorder",
        "Social Anxiety Disorder",
        "Obsessive-Compulsive Disorder",
      ] as const;
      const cohorts = [
        "a Swedish twin registry",
        "an Australian longitudinal twin cohort",
        "a UK population twin study",
        "a Nordic clinical twin sample",
        "an East Asian twin study",
      ] as const;

      if (tier === 1) {
        if (rng.bool(0.5)) {
          const mz = rng.int(28, 68);
          const dz = rng.int(10, Math.min(26, mz - 10));
          const discord = 100 - mz;
          const disorder = rng.pick(disorders);
          const cohort = rng.pick(cohorts);
          const traps: Trap[] = [];
          if (mz - dz !== discord) {
            traps.push({
              spec: { type: "number", value: mz - dz },
              feedback: `${mz - dz} is the MZ − DZ difference. Discordance in MZ twins is 100% − MZ concordance.`,
            });
          }
          return {
            prompt: `In ${cohort} of **${disorder}**, monozygotic (MZ) twin concordance is **${mz}%** and dizygotic (DZ) concordance is **${dz}%**. What percentage of MZ twin pairs are **discordant**?`,
            answer: { type: "number", value: discord, display: `${discord}%` },
            traps,
            hint: "Concordant MZ pairs + discordant MZ pairs = 100%.",
            solution: [
              `MZ discordance = {{100 - ${mz}}} = **${discord}%**.`,
              "Because MZ twins share ~100% of segregating genes, substantial discordance proves environmental and cognitive factors are essential.",
            ],
          };
        }

        // Biopsychosocial approach classifier
        const name = rng.pick(NAMES);
        const age = rng.int(16, 48);
        const items = [
          {
            text: `${name} (age ${age}) shows elevated morning HPA-axis cortisol and reduced hippocampal BDNF following chronic adversity.`,
            approach: "Biological",
            accept: ["biological", "biological approach"],
            why: "Hormones (cortisol), neuroplasticity (BDNF), and brain structures belong to the **Biological** approach.",
          },
          {
            text: `${name} (age ${age}) inherits polygenic vulnerability to anxiety and displays heightened amygdala threat reactivity on fMRI.`,
            approach: "Biological",
            accept: ["biological", "biological approach"],
            why: "Polygenic risk and amygdala neural reactivity belong to the **Biological** approach.",
          },
          {
            text: `${name} (age ${age}) interprets one awkward conversation through catastrophizing schemas ('Everyone hates me and I will always be alone').`,
            approach: "Cognitive",
            accept: ["cognitive", "cognitive approach"],
            why: "Maladaptive schemas, Beck's negative triad, and cognitive distortions belong to the **Cognitive** approach.",
          },
          {
            text: `${name} (age ${age}) misinterprets a mild caffeine-induced pulse increase as an impending heart attack, triggering a panic loop.`,
            approach: "Cognitive",
            accept: ["cognitive", "cognitive approach"],
            why: "Clark's catastrophic misinterpretation of bodily sensations is a **Cognitive** mechanism.",
          },
          {
            text: `${name} (age ${age}) experiences job insecurity, chronic urban poverty, and lacks a close confiding partner after relocating.`,
            approach: "Sociocultural",
            accept: ["sociocultural", "sociocultural approach", "socio-cultural"],
            why: "Socioeconomic adversity, isolation, and Brown & Harris's vulnerability factors belong to the **Sociocultural** approach.",
          },
          {
            text: `${name} (age ${age}) belongs to a community where emotional restraint norms encourage reporting fatigue and headaches rather than verbal sadness.`,
            approach: "Sociocultural",
            accept: ["sociocultural", "sociocultural approach", "socio-cultural"],
            why: "Cultural display norms shaping somatic vs affective symptom presentation belong to the **Sociocultural** approach.",
          },
        ] as const;
        const item = rng.pick(items);
        return {
          prompt: `Classify the primary IB Psychology approach (**Biological**, **Cognitive**, or **Sociocultural**) illustrated below:\n\n${item.text}`,
          answer: { type: "text", accept: [...item.accept], display: item.approach },
          hint: "Ask whether the factor focuses on neurobiology/genes, thought appraisals/schemas, or social/cultural context.",
          solution: [item.why],
        };
      }

      if (tier === 2) {
        const name = rng.pick(NAMES);
        const age = rng.int(16, 35);
        const triggers = [
          "receiving a lower-than-expected mock exam mark",
          "missing a penalty shot in a varsity match",
          "making a small slip during a class presentation",
          "not getting a reply to a group chat message",
          "getting constructive feedback on an essay draft",
        ] as const;
        const trig = rng.pick(triggers);
        const mode = rng.int(0, 5);
        if (mode === 0) {
          return {
            prompt: `After ${trig}, ${name} (age ${age}) thinks: *"I am fundamentally worthless and incompetent."* Which corner of **Beck's negative cognitive triad** (**Self**, **World**, or **Future**) is targeted?`,
            answer: { type: "text", accept: ["self", "negative view of self", "view of self"], display: "Self" },
            hint: "Beck's triad contains negative views of the Self, World, and Future.",
            solution: ["Calling oneself 'worthless and incompetent' exemplifies a negative view of the **Self**."],
          };
        }
        if (mode === 1) {
          return {
            prompt: `After ${trig}, ${name} (age ${age}) thinks: *"Everyone around me is hostile and sets impossible demands."* Which corner of **Beck's negative cognitive triad** (**Self**, **World**, or **Future**) is targeted?`,
            answer: { type: "text", accept: ["world", "negative view of the world", "view of the world"], display: "World" },
            hint: "Notice the thought evaluates other people and surrounding circumstances.",
            solution: ["Viewing others and the environment as uniformly hostile reflects a negative view of the **World**."],
          };
        }
        if (mode === 2) {
          return {
            prompt: `After ${trig}, ${name} (age ${age}) thinks: *"Things will never get better; I am guaranteed to fail from now on."* Which corner of **Beck's negative cognitive triad** (**Self**, **World**, or **Future**) is targeted?`,
            answer: { type: "text", accept: ["future", "negative view of the future", "view of the future"], display: "Future" },
            hint: "Notice the hopeless prediction about what lies ahead.",
            solution: ["Predicting permanent hopelessness ('never get better') reflects a negative view of the **Future**."],
          };
        }
        if (mode === 3) {
          return {
            prompt: `After ${trig}, ${name} (age ${age}) thinks: *"It happened entirely because of my own personal flaws, not the tough situation."* Under Abramson's learned-helplessness model, which attributional dimension (**Internal**, **Stable**, or **Global**) is shown?`,
            answer: { type: "text", accept: ["internal", "internal attribution"], display: "Internal" },
            hint: "Internal = blaming oneself; Stable = lasting forever; Global = spreading to all life areas.",
            solution: ["Blaming personal flaws rather than situational factors is an **Internal** attribution."],
          };
        }
        if (mode === 4) {
          return {
            prompt: `After ${trig}, ${name} (age ${age}) thinks: *"This flaw is permanent — it will keep happening forever no matter what I do."* Under Abramson's learned-helplessness model, which attributional dimension (**Internal**, **Stable**, or **Global**) is shown?`,
            answer: { type: "text", accept: ["stable", "stable attribution"], display: "Stable" },
            hint: "Notice the focus on permanence across time.",
            solution: ["Expecting a negative cause to persist permanently is a **Stable** attribution."],
          };
        }
        return {
          prompt: `After ${trig}, ${name} (age ${age}) thinks: *"This proves I ruin everything — academics, friendships, hobbies, and family life."* Under Abramson's learned-helplessness model, which attributional dimension (**Internal**, **Stable**, or **Global**) is shown?`,
          answer: { type: "text", accept: ["global", "global attribution"], display: "Global" },
          hint: "Notice how one setback generalizes across every unrelated domain of life.",
          solution: ["Extending a single setback across every life domain is a **Global** attribution."],
        };
      }

      // Tier 3: Prospective risk ratio (Alloy et al. style) OR MZ vs DZ excess analysis
      if (rng.bool(0.55)) {
        const lowRate = rng.pick([1, 2, 3, 4, 5] as const);
        const mult = rng.int(3, 12);
        const highRate = lowRate * mult;
        const years = rng.pick([2, 2.5, 3, 4, 5] as const);
        const disorder = rng.pick(disorders);
        const sampleN = rng.pick([240, 300, 350, 420, 500, 600] as const);
        return {
          prompt: `In a ${years}-year prospective study modelled on **Alloy et al. (1999)** (*N* = ${sampleN} initially non-clinical students), **${highRate}%** of the high-cognitive-vulnerability group developed a first episode of **${disorder}** compared with **${lowRate}%** of the low-risk group. How many **times greater** was the onset rate in the high-risk group?`,
          answer: { type: "number", value: mult, display: `${mult}` },
          traps: [
            {
              spec: { type: "number", value: highRate - lowRate },
              feedback: `${highRate - lowRate} is the percentage-point difference — divide ${highRate} by ${lowRate} to find how many times greater.`,
            },
          ],
          hint: "Divide the high-risk onset percentage by the low-risk onset percentage.",
          solution: [
            `Risk ratio = {{${highRate} / ${lowRate}}} = **${mult}** times greater.`,
            "Prospective tracking before illness onset helps address bidirectional causality.",
          ],
        };
      }

      const mz = rng.int(34, 72);
      const dz = rng.int(12, mz - 12);
      const diff = mz - dz;
      const discord = 100 - mz;
      const disorder = rng.pick(disorders);
      const cohort = rng.pick(cohorts);
      const traps: Trap[] = [];
      if (discord !== diff) {
        traps.push({
          spec: { type: "number", value: discord },
          feedback: `${discord}% is MZ discordance (100 − ${mz}) — the question asks for the percentage-point excess of MZ over DZ.`,
        });
      }
      return {
        prompt: `In ${cohort} examining **${disorder}**, monozygotic (MZ) concordance is **${mz}%** while same-sex dizygotic (DZ) concordance is **${dz}%**. By how many **percentage points** does MZ concordance exceed DZ concordance?`,
        answer: { type: "number", value: diff, display: `${diff}` },
        traps,
        hint: "Subtract DZ concordance from MZ concordance.",
        solution: [
          `MZ − DZ excess = {{${mz} - ${dz}}} = **${diff}** percentage points (supporting polygenic vulnerability, while ${discord}% MZ discordance confirms environmental interaction).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: Treatment Efficacy, % Improvement & NNT (Section 3)
  // ===========================================================================
  {
    id: "3-context-health-wellbeing.treatment-efficacy-nnt",
    topicId: "3-context-health-wellbeing",
    title: "Treatment Improvement %, Relapse & NNT",
    level: 2,
    ibLevel: "SL",
    guideRef: "treatments-interventions",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const therapies = [
        "12 weeks of CBT",
        "14 weeks of culturally adapted CBT",
        "10 weeks of combined SSRI + CBT care",
        "6 sessions of Friendship Bench problem-solving therapy",
        "12 weeks of guided internet-based CBT (iCBT)",
        "16 weeks of interpersonal psychotherapy",
      ] as const;
      const scales = [
        "Hamilton Depression Rating Scale (HAM-D)",
        "Beck Depression Inventory (BDI-II)",
        "GAD-7 Anxiety Scale",
        "PHQ-9 Depression Scale",
      ] as const;

      if (tier === 1) {
        // Exact symptom % improvement
        const baselines = [20, 24, 25, 30, 32, 40, 50] as const;
        const pre = rng.pick(baselines);
        const validPosts: number[] = [];
        for (let post = Math.ceil(pre * 0.2); post <= Math.floor(pre * 0.75); post++) {
          const imp = ((pre - post) / pre) * 100;
          if (Math.abs(imp * 2 - Math.round(imp * 2)) < 1e-9) validPosts.push(post);
        }
        const post = rng.pick(validPosts);
        const drop = pre - post;
        const pct = clean(roundTo((drop / pre) * 100, 1));
        const therapy = rng.pick(therapies);
        const scale = rng.pick(scales);
        const traps: Trap[] = [];
        if (drop !== pct) {
          traps.push({
            spec: { type: "number", value: drop },
            feedback: `${drop} is the raw score drop — divide ${drop} by the baseline score (${pre}) and multiply by 100.`,
          });
        }
        return {
          prompt: `After **${therapy}**, a patient cohort's mean score on the **${scale}** falls from **${pre}** at baseline to **${post}** post-treatment. Calculate the **percentage symptom improvement**.`,
          answer: { type: "number", value: pct, tolerance: 0.1, display: `${num(pct)}%` },
          traps,
          hint: "Percentage improvement = ((Baseline − Post) ÷ Baseline) × 100.",
          solution: [
            `Score drop = {{${pre} - ${post}}} = ${drop} points.`,
            `Percentage improvement = {{(${drop} / ${pre}) * 100}} = **${num(pct)}%**.`,
          ],
        };
      }

      if (tier === 2) {
        // Clean integer NNT from remission percentages
        const arrPairs: ReadonlyArray<[number, number]> = [
          [5, 20],
          [10, 10],
          [20, 5],
          [25, 4],
          [50, 2],
        ];
        const [arrPct, nnt] = rng.pick(arrPairs);
        const ctrlPct = rng.int(12, Math.min(45, 92 - arrPct));
        const treatPct = ctrlPct + arrPct;
        const arrDec = clean(arrPct / 100);
        const therapy = rng.pick(therapies);
        const controls = ["inert placebo", "enhanced usual care", "waitlist control"] as const;
        const ctrl = rng.pick(controls);
        const traps: Trap[] = [];
        if (arrPct !== nnt) {
          traps.push({
            spec: { type: "number", value: arrPct },
            feedback: `${arrPct}% (0.${arrPct < 10 ? "0" + arrPct : arrPct}) is the Absolute Benefit Increase (ARR). Compute NNT = 1 ÷ ARR.`,
          });
        }
        return {
          prompt: `In a randomized controlled trial comparing **${therapy}** against **${ctrl}**, **${treatPct}%** of the treatment group achieve clinical remission compared with **${ctrlPct}%** of the control group. Calculate the **Number Needed to Treat (NNT)** as a whole number.`,
          answer: { type: "number", value: nnt, display: `${nnt}` },
          traps,
          hint: "Convert both remission percentages to decimals, subtract to get ARR, then compute NNT = 1 ÷ ARR.",
          solution: [
            `ARR = {{${(treatPct / 100).toFixed(2)} - ${(ctrlPct / 100).toFixed(2)}}} = ${num(arrDec)}.`,
            `NNT = {{1 / ${num(arrDec)}}} = **${nnt}** patients.`,
          ],
        };
      }

      // Tier 3: Raw-count multi-step NNT from equal-arm RCTs
      // Choose arm size n and exact ARR so all proportions are exact terminating decimals (<= 3 dp) and NNT is whole
      const configs: ReadonlyArray<{ n: number; diffCount: number; nnt: number; step?: number }> = [
        { n: 40, diffCount: 8, nnt: 5 },
        { n: 40, diffCount: 10, nnt: 4 },
        { n: 40, diffCount: 20, nnt: 2 },
        { n: 50, diffCount: 5, nnt: 10 },
        { n: 50, diffCount: 10, nnt: 5 },
        { n: 50, diffCount: 25, nnt: 2 },
        { n: 80, diffCount: 8, nnt: 10, step: 2 },
        { n: 80, diffCount: 10, nnt: 8, step: 2 },
        { n: 80, diffCount: 16, nnt: 5, step: 2 },
        { n: 80, diffCount: 20, nnt: 4, step: 2 },
        { n: 100, diffCount: 5, nnt: 20 },
        { n: 100, diffCount: 10, nnt: 10 },
        { n: 100, diffCount: 20, nnt: 5 },
        { n: 100, diffCount: 25, nnt: 4 },
        { n: 120, diffCount: 12, nnt: 10, step: 6 },
        { n: 120, diffCount: 24, nnt: 5, step: 6 },
        { n: 120, diffCount: 30, nnt: 4, step: 6 },
        { n: 160, diffCount: 20, nnt: 8, step: 4 },
        { n: 200, diffCount: 20, nnt: 10, step: 2 },
        { n: 200, diffCount: 40, nnt: 5, step: 2 },
      ];
      const cfg = rng.pick(configs);
      const step = cfg.step ?? 1;
      const minCtrl = Math.max(step, Math.ceil((cfg.n * 0.2) / step) * step);
      const maxCtrl = Math.floor(Math.min(cfg.n - cfg.diffCount - step, cfg.n * 0.55) / step) * step;
      const stepsAvail = Math.max(0, Math.floor((maxCtrl - minCtrl) / step));
      const ctrlCount = minCtrl + rng.int(0, stepsAvail) * step;
      const treatCount = ctrlCount + cfg.diffCount;
      const pTreat = roundTo(treatCount / cfg.n, 4);
      const pCtrl = roundTo(ctrlCount / cfg.n, 4);
      const arr = roundTo(pTreat - pCtrl, 4);
      const therapy = rng.pick(therapies);
      const totalN = cfg.n * 2;
      const traps: Trap[] = [];
      if (cfg.diffCount !== cfg.nnt) {
        traps.push({
          spec: { type: "number", value: cfg.diffCount },
          feedback: `${cfg.diffCount} is the raw difference in remitters — divide each arm by ${cfg.n} first to find ARR, then take 1 ÷ ARR.`,
        });
      }
      return {
        prompt: `In a double-blind RCT of **${totalN}** adults split equally (**${cfg.n}** per arm), **${treatCount}** patients receiving **${therapy}** reach remission compared with **${ctrlCount}** patients receiving placebo. Calculate the **Number Needed to Treat (NNT)** as a whole number.`,
        answer: { type: "number", value: cfg.nnt, display: `${cfg.nnt}` },
        traps,
        hint: `Convert both arms into proportions out of ${cfg.n} (not ${totalN}), subtract to get ARR, then compute 1 ÷ ARR.`,
        solution: [
          `Treatment proportion = {{${treatCount} / ${cfg.n}}} = ${num(pTreat)}; placebo proportion = {{${ctrlCount} / ${cfg.n}}} = ${num(pCtrl)}.`,
          `ARR = {{${num(pTreat)} - ${num(pCtrl)}}} = ${num(arr)}.`,
          `NNT = {{1 / ${num(arr)}}} = **${cfg.nnt}** patients.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: Stress Pathways, Psychoneuroimmunology & Health Models (Section 4)
  // ===========================================================================
  {
    id: "3-context-health-wellbeing.stress-health-models",
    topicId: "3-context-health-wellbeing",
    title: "SAM/HPA Stress Pathways, Immunity & HBM/TPB",
    level: 3,
    ibLevel: "SL",
    guideRef: "stress-addiction-health-promotion",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const name = rng.pick(NAMES);
      const age = rng.int(16, 55);

      if (tier === 1) {
        // SAM vs HPA pathway & hormone/gland classification with varied vignettes
        const acuteEvents = [
          "swerves suddenly to avoid a speeding cyclist",
          "hears a loud fire alarm during a silent mock exam",
          "narrowly avoids slipping on wet subway stairs",
          "is startled by a barking dog while jogging at dusk",
          "sees a car brake abruptly directly ahead",
        ] as const;
        const chronicEvents = [
          "spends 18 months caring for a relative with dementia",
          "faces 9 months of severe housing insecurity and night-shift fatigue",
          "endures an entire semester of relentless exam pressure while isolated",
          "works two unstable jobs for a year while supporting dependents",
          "lives through prolonged workplace bullying for 10 months",
        ] as const;

        const kind = rng.int(0, 5);
        if (kind === 0) {
          const ev = rng.pick(acuteEvents);
          return {
            prompt: `${name} (age ${age}) ${ev}, and within two seconds ${name}'s heart pounds and breathing quickens. Which stress pathway (**SAM** or **HPA**) triggered this rapid fight-or-flight surge?`,
            answer: { type: "text", accept: ["SAM", "SAM pathway", "sympathomedullary", "sympathomedullary pathway"], display: "SAM" },
            traps: [{ spec: { type: "text", accept: ["HPA", "HPA axis"] }, feedback: "HPA is the slower hormonal cortisol cascade; a 2-second neural surge is the fast SAM pathway." }],
            hint: "Seconds-scale neural fight-or-flight vs slower hormonal cortisol cascade.",
            solution: ["Acute seconds-scale fight-or-flight runs along the fast **SAM (Sympathomedullary)** pathway."],
          };
        }
        if (kind === 1) {
          const ev = rng.pick(chronicEvents);
          return {
            prompt: `${name} (age ${age}) ${ev}, leading to chronically elevated cortisol and frequent viral colds. Which physiological stress system (**SAM** or **HPA**) drives sustained cortisol secretion?`,
            answer: { type: "text", accept: ["HPA", "HPA axis", "hypothalamic-pituitary-adrenal", "hypothalamic pituitary adrenal axis"], display: "HPA" },
            traps: [{ spec: { type: "text", accept: ["SAM", "SAM pathway"] }, feedback: "SAM secretes rapid adrenaline; chronic cortisol is governed by the HPA axis." }],
            hint: "Three-letter hormonal cascade running from hypothalamus to pituitary to adrenal cortex.",
            solution: ["Chronic cortisol and psychoneuroimmunological suppression run through the **HPA (Hypothalamic–Pituitary–Adrenal)** axis."],
          };
        }
        if (kind === 2) {
          const ev = rng.pick(acuteEvents);
          return {
            prompt: `${name} (age ${age}) ${ev}. Which specific inner region of the adrenal gland receives sympathetic nerve signals to release adrenaline?`,
            answer: { type: "text", accept: ["adrenal medulla", "the adrenal medulla", "medulla"], display: "Adrenal medulla" },
            traps: [{ spec: { type: "text", accept: ["adrenal cortex", "cortex"] }, feedback: "The outer adrenal cortex secretes cortisol in HPA; the inner adrenal medulla secretes adrenaline in SAM." }],
            hint: "SAM stands for Sympatho-Adreno-Medullary.",
            solution: ["The **adrenal medulla** releases adrenaline and noradrenaline during acute SAM activation."],
          };
        }
        if (kind === 3) {
          const ev = rng.pick(chronicEvents);
          return {
            prompt: `${name} (age ${age}) ${ev}. Which outer region of the adrenal gland responds to pituitary ACTH by secreting cortisol?`,
            answer: { type: "text", accept: ["adrenal cortex", "the adrenal cortex", "cortex"], display: "Adrenal cortex" },
            traps: [{ spec: { type: "text", accept: ["adrenal medulla", "medulla"] }, feedback: "The adrenal medulla releases adrenaline in SAM; the adrenal cortex secretes cortisol in HPA." }],
            hint: "Outer layer of the adrenal gland — same word as the outer layer of the brain.",
            solution: ["Pituitary ACTH stimulates the **adrenal cortex** to secrete cortisol."],
          };
        }
        if (kind === 4) {
          const ev = rng.pick(chronicEvents);
          return {
            prompt: `As ${name} (age ${age}) ${ev}, the hypothalamus secretes CRH to trigger a hormone from the **anterior pituitary gland**. Name that pituitary hormone (abbreviation or full name).`,
            answer: { type: "text", accept: ["ACTH", "adrenocorticotropic hormone", "adrenocorticotrophic hormone"], display: "ACTH" },
            traps: [{ spec: { type: "text", accept: ["CRH", "cortisol"] }, feedback: "CRH comes from the hypothalamus and cortisol from the adrenal cortex — the pituitary releases ACTH." }],
            hint: "Four-letter abbreviation bridging CRH and cortisol in the HPA axis.",
            solution: ["Hypothalamus (CRH) → Anterior Pituitary (**ACTH**) → Adrenal Cortex (Cortisol)."],
          };
        }
        const ev = rng.pick(acuteEvents);
        return {
          prompt: `Once danger passes five minutes after ${name} (age ${age}) ${ev}, which branch of the autonomic nervous system slows heart rate and restores homeostasis?`,
          answer: { type: "text", accept: ["parasympathetic", "parasympathetic nervous system", "parasympathetic branch"], display: "Parasympathetic nervous system" },
          traps: [{ spec: { type: "text", accept: ["sympathetic", "sympathetic nervous system"] }, feedback: "The sympathetic branch accelerates fight-or-flight; the parasympathetic branch ('rest and digest') restores calm." }],
          hint: "'Rest and digest' counterpart to the sympathetic branch.",
          solution: ["The **parasympathetic nervous system** counterbalances sympathetic SAM arousal to restore homeostasis."],
        };
      }

      if (tier === 2) {
        // Mix of psychoneuroimmunology % change calculation + Health Belief Model construct classification
        if (rng.bool(0.5)) {
          const bases = [20, 25, 32, 40, 50] as const;
          const base = rng.pick(bases);
          const pctSteps = [10, 15, 20, 25, 30, 35, 40] as const;
          const validPcts = pctSteps.filter((p) => Number.isInteger((base * p) / 100));
          const pct = rng.pick(validPcts);
          const delta = (base * pct) / 100;
          if (rng.bool(0.5)) {
            const stressed = base + delta;
            const groups = ["Alzheimer's caregivers", "chronic night-shift nurses", "exhausted medical residents", "chronically stressed volunteers"] as const;
            const grp = rng.pick(groups);
            const traps: Trap[] = [];
            const wrongDenom = clean(roundTo((delta / stressed) * 100, 1));
            if (wrongDenom !== pct) {
              traps.push({
                spec: { type: "number", value: wrongDenom, tolerance: 0.2 },
                feedback: `Divide the ${delta}-day delay by the control baseline (${base} days), not by the stressed group mean (${stressed} days).`,
              });
            }
            return {
              prompt: `In a psychoneuroimmunology biopsy study modelled on **Kiecolt-Glaser et al. (1995)**, skin wounds in **${grp}** heal in a mean of **${stressed} days** versus **${base} days** in matched controls. Calculate the **percentage increase** in healing time.`,
              answer: { type: "number", value: pct, display: `${pct}%` },
              traps,
              hint: "Divide extra healing days by the control baseline mean, then multiply by 100.",
              solution: [
                `Extra days = {{${stressed} - ${base}}} = ${delta} days.`,
                `Percentage increase = {{(${delta} / ${base}) * 100}} = **${pct}%**.`,
              ],
            };
          }
          const stressed = base - delta;
          const cohorts = ["medical students during final exams", "IB Year 13 students during mock week", "undergraduates during thesis deadlines", "isolated exam candidates"] as const;
          const coh = rng.pick(cohorts);
          return {
            prompt: `In an immunity study modelled on **Kiecolt-Glaser et al. (1984)**, mean natural killer (NK) cell activity in **${coh}** drops from **${base} units** at baseline to **${stressed} units** during exams. Calculate the **percentage decrease** in NK cell activity.`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            hint: "Divide the drop in NK activity by the baseline score, then multiply by 100.",
            solution: [
              `Drop = {{${base} - ${stressed}}} = ${delta} units.`,
              `Percentage decrease = {{(${delta} / ${base}) * 100}} = **${pct}%**.`,
            ],
          };
        }

        // HBM construct classifier across varied public-health behaviours
        const topic = rng.pick([
          "annual flu vaccination",
          "daily sunscreen protection",
          "routine dental check-ups",
          "choosing low-sugar Nutri-Grade drinks",
          "nicotine-free living",
          "regular blood-pressure screening",
        ] as const);
        const hbmCases = [
          {
            quote: `*"People my age almost never face serious health risks here — it simply won't happen to me."*`,
            ans: "Perceived susceptibility",
            accept: ["perceived susceptibility", "susceptibility"],
            hint: "Personal belief about one's own vulnerability or likelihood of getting the condition.",
            why: "Judging oneself unlikely to be personally affected reflects low **perceived susceptibility**.",
          },
          {
            quote: `*"Even if a health problem did develop, the consequences would be mild and trivial, not life-changing."*`,
            ans: "Perceived severity",
            accept: ["perceived severity", "severity"],
            hint: "Belief about how serious or dangerous the consequences of an illness would be.",
            why: "Minimizing the seriousness of clinical consequences reflects low **perceived severity**.",
          },
          {
            quote: `*"I believe ${topic} genuinely cuts my risk and keeps me healthier throughout the year."*`,
            ans: "Perceived benefits",
            accept: ["perceived benefits", "perceived benefit", "benefits"],
            hint: "Belief in the effectiveness and positive payoff of taking the health action.",
            why: "Recognizing that the preventive step works reflects high **perceived benefits**.",
          },
          {
            quote: `*"I intend to keep up with ${topic}, except it feels too expensive, inconvenient, and awkward to fit into my week."*`,
            ans: "Perceived barriers",
            accept: ["perceived barriers", "perceived barrier", "barriers"],
            hint: "Practical, financial, or psychological obstacles blocking action.",
            why: "Cost, inconvenience, and hassle are classic **perceived barriers**.",
          },
          {
            quote: `*"Receiving an SMS reminder and spotting a bright colour-coded poster prompted me to follow through on ${topic} today."*`,
            ans: "Cues to action",
            accept: ["cues to action", "cue to action"],
            hint: "External or internal prompts that trigger readiness into immediate behaviour.",
            why: "Reminders, symptoms, and salient labels serve as **cues to action**.",
          },
          {
            quote: `*"Even during a hectic exam month, I feel genuinely confident that I can stick to ${topic}."*`,
            ans: "Self-efficacy",
            accept: ["self-efficacy", "self efficacy"],
            hint: "Bandura's concept added to HBM representing confidence in one's ability to perform the behaviour.",
            why: "Confidence in one's own ability to execute the health behaviour is **self-efficacy**.",
          },
        ] as const;
        const c = rng.pick(hbmCases);
        return {
          prompt: `During a health-promotion interview about **${topic}**, ${name} (age ${age}) says: ${c.quote}\n\nIdentify the specific **Health Belief Model (HBM)** construct illustrated.`,
          answer: { type: "text", accept: [...c.accept], display: c.ans },
          hint: c.hint,
          solution: [c.why],
        };
      }

      // Tier 3: Appraisal, Coping, TPB & Addiction constructs with high variety
      const stressContext = rng.pick([
        "an upcoming IB Higher Level exam week",
        "a demanding internship deadline",
        "a sudden family relocation",
        "a competitive university interview",
        "a sports team selection trial",
      ] as const);
      const t3Cases = [
        {
          prompt: `Facing ${stressContext}, ${name} (age ${age}) first asks: *"Is this situation a dangerous threat to my future, or an exciting opportunity for growth?"* Name this stage in **Lazarus & Folkman's (1984)** model.`,
          accept: ["primary appraisal"],
          display: "Primary appraisal",
          hint: "Evaluating the event itself (threat, harm/loss, or challenge) comes first.",
          why: "Evaluating whether an event poses harm, threat, or challenge is **primary appraisal**.",
        },
        {
          prompt: `Facing ${stressContext}, ${name} (age ${age}) assesses: *"Do I have enough study time, strategies, and support from mentors to handle this?"* Name this stage in **Lazarus & Folkman's (1984)** model.`,
          accept: ["secondary appraisal"],
          display: "Secondary appraisal",
          hint: "Evaluating your coping resources and perceived control comes second.",
          why: "Evaluating available coping options and resources is **secondary appraisal**.",
        },
        {
          prompt: `Because ${stressContext} is controllable, ${name} (age ${age}) breaks the workload into daily checklists and schedules office hours to fix weak areas directly. Name this coping category in **Lazarus & Folkman (1984)**.`,
          accept: ["problem-focused coping", "problem focused coping", "problem-focused", "problem focused"],
          display: "Problem-focused coping",
          hint: "Directly modifying the stressor rather than only soothing emotional distress.",
          why: "Directly tackling a controllable stressor through planning and action is **problem-focused coping**.",
        },
        {
          prompt: `After an irreversible bereavement unrelated to ${stressContext}, ${name} (age ${age}) uses mindful acceptance and talks openly with loved ones to regulate grief. Name this coping category in **Lazarus & Folkman (1984)**.`,
          accept: ["emotion-focused coping", "emotion focused coping", "emotion-focused", "emotion focused"],
          display: "Emotion-focused coping",
          hint: "Regulating emotional distress when a stressor cannot be reversed.",
          why: "Managing internal emotional distress for an uncontrollable stressor is **emotion-focused coping**.",
        },
        {
          prompt: `Although ${name} (age ${age}) personally wants to avoid vaping around ${stressContext}, ${name} vapes anyway because close friends strongly approve of it. Under **Ajzen's Theory of Planned Behaviour (TPB)**, which construct is driving ${name}'s intention?`,
          accept: ["subjective norms", "subjective norm"],
          display: "Subjective norms",
          hint: "TPB adds perceived social approval/pressure from valued peers beyond HBM.",
          why: "Perceived social expectations from valued peers represent **subjective norms** in TPB.",
        },
        {
          prompt: `A smoker quits for eight weeks around ${stressContext}, has one cigarette after an argument, and thinks: *"I've ruined everything and have zero willpower — I may as well buy a full pack."* Name this cognitive relapse phenomenon.`,
          accept: ["abstinence violation effect", "the abstinence violation effect"],
          display: "Abstinence violation effect",
          hint: "Marlatt's three-word term describing how all-or-nothing self-blame turns a single lapse into full relapse.",
          why: "The **abstinence violation effect** turns an isolated slip into full relapse through collapsed self-efficacy.",
        },
        {
          prompt: `After months of daily mobile gambling around ${stressContext}, ${name} (age ${age}) admits playing no longer feels enjoyable ('liking' has fallen), yet app alerts still trigger intense dopamine-driven craving ('wanting'). Name **Berridge & Robinson's** theory explaining this split.`,
          accept: ["incentive sensitization", "incentive sensitization theory", "incentive-sensitization", "incentive-sensitization theory"],
          display: "Incentive Sensitization Theory",
          hint: "Mesolimbic dopamine becomes hypersensitized to addiction cues ('wanting' > 'liking').",
          why: "**Incentive Sensitization Theory** explains how sensitized mesolimbic dopamine amplifies cue-driven 'wanting' even as hedonic 'liking' declines.",
        },
        {
          prompt: `Critiquing early male-only fight-or-flight studies, **Taylor et al. (2000)** proposed an oxytocin-modulated affiliative stress response especially prominent in females. Name this three-word model.`,
          accept: ["tend-and-befriend", "tend and befriend", "tend-and-befriend model"],
          display: "Tend-and-befriend",
          hint: "Two verbs joined by 'and' — nurturing/protecting and building social alliances.",
          why: "**Tend-and-befriend** highlights oxytocin-linked caregiving and social coalition building under stress.",
        },
      ] as const;
      const picked = rng.pick(t3Cases);
      return {
        prompt: picked.prompt,
        answer: { type: "text", accept: [...picked.accept], display: picked.display },
        hint: picked.hint,
        solution: [picked.why],
      };
    },
  },
];
