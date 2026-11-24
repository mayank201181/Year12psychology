import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, frac, roundTo } from "./helpers.ts";

// Shared realistic psychological study domains for combinatorial variety
const BEHAVIOURS = [
  "word-list recall",
  "Stroop reaction time",
  "teenage sleep quality",
  "classroom note-taking",
  "exam anxiety",
  "prosocial helping",
  "attentional focus",
  "divergent problem-solving",
  "study procrastination",
  "bilingual switching speed",
  "mindfulness coping",
  "working-memory span",
] as const;

const SETTINGS = [
  "an international school in Singapore",
  "a sixth-form college in Manchester",
  "a university library in Melbourne",
  "a community youth centre in Toronto",
  "a public commuter café in Zurich",
  "a secondary campus in Auckland",
] as const;

const GROUPS = [
  "Year 12 psychology students",
  "first-year university volunteers",
  "adolescent athletes",
  "evening adult learners",
  "commuter office workers",
  "sixth-form boarding students",
] as const;

// =============================================================================
// DRILL 1: 6 Core Concepts Scenario Matcher (SL, Level 1, six-core-concepts)
// =============================================================================
function genCoreConceptLens(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const behaviour = rng.pick(BEHAVIOURS);
  const setting = rng.pick(SETTINGS);
  const group = rng.pick(GROUPS);
  const n = rng.pick([28, 36, 42, 48, 54, 65, 72, 90, 110]);
  const rVal = rng.pick(["+0.46", "+0.52", "+0.61", "−0.49", "−0.57", "+0.68"]);
  const weeks = rng.pick([6, 8, 12, 16, 24]);
  const months = rng.pick([6, 12, 18, 24, 36]);

  if (tier === 1) {
    const kind = rng.int(0, 5);
    switch (kind) {
      case 0:
        return {
          prompt: `A researcher studies ${behaviour} using only ${n} self-selected Western university students at ${setting}, then generalises the pattern to all humans worldwide. State which single FA2027 Core Concept is primarily threatened.`,
          answer: { type: "text", accept: ["Bias", "bias"], display: "Bias" },
          hint: "WEIRD convenience sampling systematically distorts who is represented.",
          traps: [
            { spec: { type: "text", accept: ["Responsibility", "responsibility"] }, feedback: "No participant harm occurred — the distortion comes from an unrepresentative WEIRD sample." },
          ],
          solution: [
            "Recruiting a narrow WEIRD convenience sample systematically distorts generalisability.",
            "Primary FA2027 Core Concept: **Bias**.",
          ],
        };
      case 1:
        return {
          prompt: `A questionnaire finds a correlation of {{r = ${rVal}}} between daily caffeine intake and ${behaviour} among ${n} ${group}, and the headline declares caffeine 'causes' the outcome. State which single FA2027 Core Concept is primarily violated.`,
          answer: { type: "text", accept: ["Causality", "causality"], display: "Causality" },
          hint: "Correlational surveys lack IV manipulation and random allocation.",
          traps: [
            { spec: { type: "text", accept: ["Measurement", "measurement"] }, feedback: "The core error here is claiming cause-and-effect from a non-experimental correlation." },
          ],
          solution: [
            "Correlation cannot rule out reverse causation or confounding third variables without experimental manipulation.",
            "Primary FA2027 Core Concept: **Causality**.",
          ],
        };
      case 2:
        return {
          prompt: `A longitudinal study tracks ${n} ${group} over ${months} months to map neuroplastic cortical shifts and developmental improvements in ${behaviour}. State which single FA2027 Core Concept is the central focus.`,
          answer: { type: "text", accept: ["Change", "change"], display: "Change" },
          hint: "Notice the focus on neuroplasticity and longitudinal shifts over time.",
          solution: [
            "Tracking how brain structure and behaviour transform across months directly investigates **Change**.",
          ],
        };
      case 3:
        return {
          prompt: `To study ${behaviour} in ${n} ${group}, a researcher invents an unvalidated 1-question rating scale with vague wording and inconsistent scoring across trials. State which single FA2027 Core Concept is primarily weakened.`,
          answer: { type: "text", accept: ["Measurement", "measurement"], display: "Measurement" },
          hint: "Operationalisation, construct validity, and reliability sit under one Core Concept.",
          traps: [
            { spec: { type: "text", accept: ["Bias", "bias"] }, feedback: "The issue here is how accurately and reliably the construct is operationalised and scored." },
          ],
          solution: [
            "Poor operationalisation, weak construct validity, and inconsistent scoring undermine **Measurement**.",
          ],
        };
      case 4:
        return {
          prompt: `An investigation of ${behaviour} combines cortisol assays (Biological), appraisal schemas (Cognitive), and family norms (Sociocultural) to avoid single-approach reductionism. State which single FA2027 Core Concept is strengthened.`,
          answer: { type: "text", accept: ["Perspective", "perspective"], display: "Perspective" },
          hint: "Which Core Concept evaluates theoretical lenses and biopsychosocial triangulation?",
          solution: [
            "Integrating Biological, Cognitive, and Sociocultural lenses strengthens **Perspective**.",
          ],
        };
      default:
        return {
          prompt: `A researcher films ${n} minors at ${setting} during a stressful task related to ${behaviour} without parental consent, debriefing, or right to withdraw. State which single FA2027 Core Concept is most severely breached.`,
          answer: { type: "text", accept: ["Responsibility", "responsibility"], display: "Responsibility" },
          hint: "Informed consent, protection from harm, and debriefing belong to one ethical Core Concept.",
          solution: [
            "Protecting vulnerable minors and upholding informed consent and debriefing are core duties of **Responsibility**.",
          ],
        };
    }
  }

  if (tier === 2) {
    const kind = rng.int(0, 5);
    switch (kind) {
      case 0:
        return {
          prompt: `During a study of ${behaviour} with ${n} ${group}, the researcher knows who is in the active condition and subtly smiles when those participants respond faster. State which single FA2027 Core Concept best diagnoses this experimenter expectancy distortion.`,
          answer: { type: "text", accept: ["Bias", "bias"], display: "Bias" },
          hint: "Unconscious researcher cueing systematically skews participant responses.",
          solution: [
            "Experimenter expectancy effects introduce systematic distortion in data collection — a classic **Bias** threat.",
          ],
        };
      case 1:
        return {
          prompt: `A school compares ${behaviour} between ${n} students who voluntarily joined an after-school sports club and ${n} non-members, concluding the club directly caused higher wellbeing. State which single FA2027 Core Concept is primarily undermined.`,
          answer: { type: "text", accept: ["Causality", "causality"], display: "Causality" },
          hint: "Participants self-selected into the club rather than being randomly allocated.",
          solution: [
            "Without random allocation, pre-existing motivation or health differences confound the comparison, weakening **Causality**.",
          ],
        };
      case 2:
        return {
          prompt: `Clinicians evaluate whether a ${weeks}-week cognitive-behavioural programme produces lasting therapeutic shifts in ${behaviour} at 1-month and 12-month follow-ups. State which single FA2027 Core Concept is directly tested by these follow-ups.`,
          answer: { type: "text", accept: ["Change", "change"], display: "Change" },
          hint: "Therapeutic recovery and persistence across follow-up points map directly to one concept.",
          solution: [
            "Assessing whether therapeutic intervention yields durable behavioural transformation examines **Change**.",
          ],
        };
      case 3:
        return {
          prompt: `Two observers independently code ${n} intervals of ${behaviour} at ${setting} and reach only 54% inter-observer agreement because behavioural categories overlap ambiguously. State which single FA2027 Core Concept is directly threatened.`,
          answer: { type: "text", accept: ["Measurement", "measurement"], display: "Measurement" },
          hint: "Inter-observer reliability below 80% exposes unclear operationalisation.",
          solution: [
            "Low inter-observer reliability (54% < 80%) and ambiguous coding categories directly threaten **Measurement**.",
          ],
        };
      case 4:
        return {
          prompt: `A researcher exports a Western-normed questionnaire on ${behaviour} unchanged to an East Asian village and assumes identical construct meanings across cultures. State which single FA2027 Core Concept highlights this imposed-etic limitation.`,
          answer: { type: "text", accept: ["Perspective", "perspective"], display: "Perspective" },
          hint: "Emic (insider) vs etic (assumed universal) cultural lenses belong to this Core Concept.",
          solution: [
            "Unquestioned universalist (imposed-etic) assumptions ignore cultural **Perspective**.",
          ],
        };
      default:
        return {
          prompt: `After an uncontrolled pilot on ${behaviour} with ${n} teenagers, a tech firm markets its app as a 'clinically proven cure,' discouraging families from seeking therapy. State which single FA2027 Core Concept addresses this societal harm.`,
          answer: { type: "text", accept: ["Responsibility", "responsibility"], display: "Responsibility" },
          hint: "This Core Concept covers both research ethics AND socially responsible communication of findings.",
          solution: [
            "Misleading public claims that risk harming vulnerable consumers breach ethical and societal **Responsibility**.",
          ],
        };
    }
  }

  // Tier 3: Subtle contrastive conceptual diagnostics
  const kind = rng.int(0, 5);
  switch (kind) {
    case 0:
      return {
        prompt: `A questionnaire on ${behaviour} given to ${n} ${group} yields 94% test–retest consistency over two weeks, yet its items actually assess reading speed rather than the intended psychological trait. State which single FA2027 Core Concept exposes why high reliability does not rescue this study.`,
        answer: { type: "text", accept: ["Measurement", "measurement"], display: "Measurement" },
        hint: "A tool can be consistently wrong — reliability without construct validity is still a flaw in one concept.",
        solution: [
          "High reliability without construct validity means the operationalised score fails to measure the intended trait — a **Measurement** failure.",
        ],
      };
    case 1:
      return {
        prompt: `In a ${weeks}-week randomised trial on ${behaviour}, 38% of participants drop out of the demanding experimental arm compared with 4% of controls, breaking the initial group equivalence. State which single FA2027 Core Concept is broken when selective attrition destroys randomised equivalence.`,
        answer: { type: "text", accept: ["Causality", "causality"], display: "Causality" },
        hint: "Random allocation originally established internal validity for cause-and-effect; uneven dropout breaks that equivalence.",
        solution: [
          "Differential attrition destroys randomised baseline equivalence, preventing valid inferences of **Causality**.",
        ],
      };
    case 2:
      return {
        prompt: `During interviews about ${behaviour} at ${setting}, a researcher fails to notice that participants give polite, admirable answers to impress an authority figure, skewing every transcript. State which single FA2027 Core Concept best captures this social desirability distortion.`,
        answer: { type: "text", accept: ["Bias", "bias"], display: "Bias" },
        hint: "Social desirability and demand characteristics introduce systematic distortion.",
        solution: [
          "Systematic impression management (social desirability) distorts self-report data under **Bias**.",
        ],
      };
    case 3:
      return {
        prompt: `A researcher uses a single cross-sectional snapshot comparing 12-year-olds and 18-year-olds on ${behaviour} and mistakes generational smartphone differences (cohort effects) for genuine developmental maturation. State which single FA2027 Core Concept is confounded by cohort effects here.`,
        answer: { type: "text", accept: ["Change", "change"], display: "Change" },
        hint: "Cross-sectional designs confound true intra-individual lifespan shifts with generational cohort differences.",
        solution: [
          "Confusing cohort differences with genuine developmental progression limits conclusions about **Change**.",
        ],
      };
    case 4:
      return {
        prompt: `A neuroscientist argues that ${behaviour} is 'nothing more than dopamine receptor density,' dismissing cognitive appraisal and cultural upbringing as irrelevant. State which single FA2027 Core Concept directly challenges this biological reductionism.`,
        answer: { type: "text", accept: ["Perspective", "perspective"], display: "Perspective" },
        hint: "Which Core Concept demands weighing reductionist versus holistic multi-approach explanations?",
        solution: [
          "Challenging biological reductionism by integrating Cognitive and Sociocultural levels is central to **Perspective**.",
        ],
      };
    default:
      return {
        prompt: `An animal lab testing neural pathways of ${behaviour} replaces invasive primate lesions with non-invasive human fMRI and computer modelling (Replacement). State which single FA2027 Core Concept directly governs this ethical reform.`,
        answer: { type: "text", accept: ["Responsibility", "responsibility"], display: "Responsibility" },
        hint: "Both human ethical safeguards and the 3Rs of animal ethics belong under one Core Concept.",
        solution: [
          "Applying the 3Rs (Replacement, Reduction, Refinement) upholds ethical **Responsibility**.",
        ],
      };
  }
}

// =============================================================================
// DRILL 2: Experimental Design & Sampling Diagnostic (SL, Level 2, experiments-surveys)
// =============================================================================
function genDesignSampling(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const behaviour = rng.pick(BEHAVIOURS);
  const setting = rng.pick(SETTINGS);
  const group = rng.pick(GROUPS);
  const n = rng.pick([24, 30, 36, 40, 48, 60, 80, 100]);

  if (tier === 1) {
    const kind = rng.int(0, 6);
    switch (kind) {
      case 0:
        return {
          prompt: `In a Class Practical on ${behaviour} with ${n} ${group}, every participant completes both Condition A and Condition B. State the experimental design used.`,
          answer: {
            type: "text",
            accept: ["repeated measures", "repeated-measures", "repeated measures design", "repeated-measures design", "within-subjects", "within subjects"],
            display: "Repeated-measures design",
          },
          hint: "Each participant is tested under every level of the IV.",
          solution: ["Testing the same participants in all conditions is a **repeated-measures design**."],
        };
      case 1:
        return {
          prompt: `In an experiment on ${behaviour}, ${n} ${group} are randomly split into two separate groups so each student experiences only one condition. State the experimental design used.`,
          answer: {
            type: "text",
            accept: ["independent measures", "independent-measures", "independent measures design", "independent-measures design", "between-subjects", "between subjects", "independent groups"],
            display: "Independent-measures design",
          },
          hint: "Separate, independent groups experience only one IV condition each.",
          solution: ["Using distinct participant groups for each condition is an **independent-measures design**."],
        };
      case 2:
        return {
          prompt: `To control practice and fatigue effects in a repeated-measures study of ${behaviour}, half of the ${n} participants complete Condition A then B while the other half complete B then A. State the name of this control procedure.`,
          answer: {
            type: "text",
            accept: ["counterbalancing", "Counterbalancing", "AB/BA counterbalancing", "ABBA counterbalancing"],
            display: "Counterbalancing",
          },
          hint: "Reversing condition sequences across halves balances order effects.",
          solution: ["Splitting trial orders (AB / BA) to balance order effects is **counterbalancing**."],
        };
      case 3:
        return {
          prompt: `A researcher divides a school population into Year 12 and Year 13 subgroups and draws participants proportionally from each subgroup for a survey on ${behaviour}. State the sampling technique used.`,
          answer: {
            type: "text",
            accept: ["stratified", "stratified sampling", "proportional stratified", "proportional stratified sampling"],
            display: "Stratified sampling",
          },
          hint: "The population is divided into layers ('strata') and sampled proportionally.",
          solution: ["Sampling proportionally from defined population subgroups is **stratified sampling**."],
        };
      case 4:
        return {
          prompt: `A student surveying ${behaviour} at ${setting} recruits the first ${n} classmates who happen to walk past the canteen at lunchtime. State the sampling technique used.`,
          answer: {
            type: "text",
            accept: ["convenience", "convenience sampling", "opportunity", "opportunity sampling"],
            display: "Convenience (opportunity) sampling",
          },
          hint: "Recruiting whoever is immediately accessible is quick but risks sampling Bias.",
          solution: ["Selecting readily available passers-by is **convenience (opportunity) sampling**."],
        };
      case 5:
        return {
          prompt: `To survey ${behaviour} among a hard-to-reach group of freelance night-shift workers, three initial interviewees each recruit two colleagues from their personal networks. State the sampling technique used.`,
          answer: {
            type: "text",
            accept: ["snowball", "snowball sampling"],
            display: "Snowball sampling",
          },
          hint: "The sample grows as existing participants refer peers.",
          solution: ["Using initial participants to recruit further contacts is **snowball sampling**."],
        };
      default:
        return {
          prompt: `After recruiting ${n} ${group} for a study on ${behaviour}, the researcher uses a computer random-number generator to assign each student to either the treatment or control condition. State whether this is random sampling or random allocation.`,
          answer: {
            type: "text",
            accept: ["random allocation", "random assignment"],
            display: "Random allocation",
          },
          hint: "The participants are already recruited — they are now being placed into IV conditions.",
          traps: [
            { spec: { type: "text", accept: ["random sampling"] }, feedback: "Random sampling picks participants from the population; placing recruited people into conditions is random allocation." },
          ],
          solution: ["Placing already-recruited participants by chance into conditions is **random allocation**."],
        };
    }
  }

  if (tier === 2) {
    const kind = rng.int(0, 6);
    switch (kind) {
      case 0:
        return {
          prompt: `A researcher compares ${behaviour} between ${n} clinically diagnosed dyslexic students and ${n} non-dyslexic peers under lab conditions. Because diagnosis is a pre-existing trait that cannot be randomly assigned, state the type of experiment.`,
          answer: {
            type: "text",
            accept: ["quasi-experiment", "quasi experiment", "quasi", "quasi-experimental"],
            display: "Quasi-experiment",
          },
          hint: "The IV is a pre-existing participant characteristic rather than researcher-manipulated.",
          solution: ["Comparing pre-existing participant traits without random allocation is a **quasi-experiment**."],
        };
      case 1:
        return {
          prompt: `Psychologists measure ${behaviour} at ${setting} before and after a city council unexpectedly bans morning traffic outside the school gates. State the type of experiment (natural, field, or laboratory).`,
          answer: {
            type: "text",
            accept: ["natural", "natural experiment"],
            display: "Natural experiment",
          },
          hint: "An external authority — not the researcher — triggered the IV change.",
          solution: ["When an external real-world event changes the IV outside researcher control, it is a **natural experiment**."],
        };
      case 2:
        return {
          prompt: `In a placebo-controlled supplement trial on ${behaviour} with ${n} ${group}, coded capsules ensure neither participants nor the researcher administering the test know who received the active dose. State the blinding procedure used.`,
          answer: {
            type: "text",
            accept: ["double-blind", "double blind", "double-blind procedure", "double blind procedure"],
            display: "Double-blind procedure",
          },
          hint: "Both participants AND the testing researcher are kept unaware of condition allocation.",
          solution: ["Keeping both participants and experimenters unaware of condition is a **double-blind procedure**."],
        };
      case 3:
        return {
          prompt: `A survey on ${behaviour} asks: 'Are your revision guides clearly written and affordable?' State the exact two-word term for this flawed questionnaire item that combines two separate questions.`,
          answer: {
            type: "text",
            accept: ["double-barrelled", "double barrelled", "double-barreled", "double barreled", "double-barrelled question", "double barrelled question"],
            display: "Double-barrelled",
          },
          hint: "Think of a shotgun with two barrels firing two different questions at once.",
          solution: ["Merging two distinct judgements inside one item makes it **double-barrelled**."],
        };
      case 4:
        return {
          prompt: `A Likert questionnaire on ${behaviour} includes both positively framed statements and reverse-scored statements to catch respondents who mechanically tick 'Agree' down the entire page. State the name of this 'yea-saying' response bias.`,
          answer: {
            type: "text",
            accept: ["acquiescence", "acquiescence bias", "yea-saying", "yea saying", "agreement bias"],
            display: "Acquiescence bias",
          },
          hint: "Starts with 'A' — the tendency to agree with statements regardless of content.",
          solution: ["Mechanically agreeing with survey items regardless of meaning is **acquiescence bias**."],
        };
      case 5:
        return {
          prompt: `In a study of ${behaviour}, researchers pre-test ${n} ${group} on baseline working memory, pair students with identical baseline scores, and randomly split each pair into treatment vs control. State the experimental design.`,
          answer: {
            type: "text",
            accept: ["matched pairs", "matched-pairs", "matched pairs design", "matched-pairs design"],
            display: "Matched-pairs design",
          },
          hint: "Participants are paired on a key confounding trait before being split across conditions.",
          solution: ["Pairing participants on a baseline confound and splitting each pair across conditions is a **matched-pairs design**."],
        };
      default:
        return {
          prompt: `When answering a non-anonymous questionnaire on ${behaviour} at ${setting}, students exaggerate healthy habits and under-report distractions to appear admirable. State the specific response bias occurring.`,
          answer: {
            type: "text",
            accept: ["social desirability", "social desirability bias"],
            display: "Social desirability bias",
          },
          hint: "Participants tailor answers to look socially acceptable or admirable.",
          solution: ["Editing self-reports to appear admirable or avoid embarrassment is **social desirability bias**."],
        };
    }
  }

  // Tier 3: Deeper diagnostic controls & methodological threats
  const kind = rng.int(0, 5);
  switch (kind) {
    case 0:
      return {
        prompt: `In a study of ${behaviour}, Condition A teaches ${group} a permanent cognitive strategy they cannot 'unlearn' on trial 2 (asymmetric carryover). State whether an independent-measures or repeated-measures design is scientifically required.`,
        answer: {
          type: "text",
          accept: ["independent measures", "independent-measures", "independent measures design", "independent-measures design"],
          display: "Independent-measures",
        },
        hint: "If a strategy learned in trial 1 contaminates trial 2 even with counterbalancing, participants cannot do both conditions.",
        traps: [
          { spec: { type: "text", accept: ["repeated measures", "repeated-measures"] }, feedback: "Counterbalancing cannot undo an unlearnable skill — separate groups are needed." },
        ],
        solution: ["Asymmetric carryover makes repeated-measures invalid; an **independent-measures** (or matched-pairs) design is required."],
      };
    case 1:
      return {
        prompt: `In an experiment on ${behaviour}, ${group} guess the researcher's hypothesis from subtle room cues and intentionally try to confirm it. State the two-word term for this participant-driven Bias threat.`,
        answer: {
          type: "text",
          accept: ["demand characteristics", "demand characteristic"],
          display: "Demand characteristics",
        },
        hint: "Cues in the experimental setting 'demand' or signal the expected behaviour to participants.",
        solution: ["When participants infer the study's aim from cues and alter their behaviour accordingly, **demand characteristics** threaten internal validity."],
      };
    case 2:
      return {
        prompt: `To interview experts on ${behaviour} at ${setting}, a researcher deliberately selects only teachers with at least five years of IB pastoral experience. State this targeted non-random sampling method.`,
        answer: {
          type: "text",
          accept: ["purposive", "purposive sampling", "purposeful", "purposeful sampling"],
          display: "Purposive sampling",
        },
        hint: "Participants are chosen deliberately for a specific *purpose* or lived criterion.",
        solution: ["Deliberately selecting participants who meet specific experiential criteria is **purposive sampling**."],
      };
    case 3:
      return {
        prompt: `In an independent-measures trial of ${behaviour} with only ${n} volunteers, Group 1 happens by chance to contain more sleep-deprived students than Group 2. State the two-word term for pre-existing individual differences confounding independent-measures groups.`,
        answer: {
          type: "text",
          accept: ["participant variables", "participant variable", "individual differences"],
          display: "Participant variables",
        },
        hint: "Differences in traits that participants bring with them into the separate groups.",
        solution: ["Pre-existing trait differences unevenly distributed across separate groups are **participant variables**."],
      };
    case 4:
      return {
        prompt: `A researcher directly manipulates signage height inside a real commuter train station to observe its effect on ${behaviour} without alerting travellers. State whether this is a laboratory, field, or natural experiment.`,
        answer: {
          type: "text",
          accept: ["field", "field experiment"],
          display: "Field experiment",
        },
        hint: "Notice the researcher actively manipulates the IV, but inside an everyday real-world setting.",
        traps: [
          { spec: { type: "text", accept: ["natural", "natural experiment"] }, feedback: "In a natural experiment the IV changes externally; here the researcher actively manipulated the signage." },
        ],
        solution: ["Actively manipulating an IV inside a natural everyday setting defines a **field experiment**."],
      };
    default:
      return {
        prompt: `A school sends out 400 optional questionnaires on ${behaviour}, but only 64 highly motivated students reply (16% response rate). State the specific sampling Bias caused when non-responders differ systematically from volunteers.`,
        answer: {
          type: "text",
          accept: ["non-response bias", "nonresponse bias", "non response bias", "volunteer bias", "self-selection bias"],
          display: "Non-response bias",
        },
        hint: "Think of the bias named after the large percentage of invited people who did *not* respond.",
        solution: ["When low return rates leave out reluctant or stressed students systematically, **non-response bias** (volunteer/self-selection bias) distorts findings."],
      };
  }
}

// =============================================================================
// DRILL 3: Inter-Observer Agreement & Practical Metrics (SL, Level 2, interviews-observations)
// =============================================================================
function genPracticalMetrics(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const behaviour = rng.pick(BEHAVIOURS);
  const setting = rng.pick(SETTINGS);

  if (tier === 1) {
    if (rng.bool(0.55)) {
      // Exact integer Inter-Observer Agreement (%)
      const total = rng.pick([20, 25, 40, 50, 100]);
      const step = total === 20 ? 5 : total === 25 ? 4 : total === 40 ? 5 : total === 50 ? 2 : 1;
      const minK = Math.ceil(60 / step);
      const maxK = Math.floor(96 / step);
      const pct = rng.int(minK, maxK) * step;
      const agreed = Math.round((total * pct) / 100);
      const disagreed = total - agreed;
      return {
        prompt: `Two independent observers code ${total} behavioural intervals of ${behaviour} at ${setting} and agree on ${agreed} intervals. Calculate their inter-observer agreement (IOA) as a whole-number percentage.`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        hint: `Apply {{IOA (%) = (${agreed} / ${total}) * 100}}.`,
        traps: [
          {
            spec: { type: "number", value: 100 - pct },
            feedback: `${100 - pct}% is the disagreement percentage (${disagreed} ÷ ${total}) — compute percentage agreement.`,
          },
        ],
        solution: [
          `Divide agreements by total intervals: {{${agreed} / ${total} = ${clean(agreed / total)}}}.`,
          `Multiply by 100: {{${clean(agreed / total)} * 100 = ${pct}%}}${pct >= 80 ? " (meets the ≥ 80% benchmark)." : " (below the 80% benchmark — refine coding categories)."}`,
        ],
      };
    } else {
      // Exact integer Survey Response Rate (%)
      const dist = rng.pick([40, 50, 80, 100, 120, 150, 200]);
      const step = dist === 40 ? 5 : dist === 50 ? 2 : dist === 80 ? 5 : dist === 120 ? 5 : dist === 150 ? 2 : 1;
      // Ensure dist * pct / 100 is an exact integer
      const validPcts: number[] = [];
      for (let p = 40; p <= 95; p += step) {
        if ((dist * p) % 100 === 0 && p !== 50) validPcts.push(p);
      }
      const pct = rng.pick(validPcts);
      const completed = (dist * pct) / 100;
      return {
        prompt: `A Class Practical team distributes ${dist} questionnaires on ${behaviour} at ${setting} and receives ${completed} completed forms. Calculate the survey response rate as a whole-number percentage.`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        hint: `Apply {{Response Rate (%) = (${completed} / ${dist}) * 100}}.`,
        traps: [
          {
            spec: { type: "number", value: 100 - pct },
            feedback: `${100 - pct}% is the non-response rate — calculate the completed response percentage.`,
          },
        ],
        solution: [
          `Divide completed forms by distributed forms: {{${completed} / ${dist} = ${clean(pct / 100)}}}.`,
          `Multiply by 100: {{${clean(pct / 100)} * 100 = ${pct}%}}.`,
        ],
      };
    }
  }

  if (tier === 2) {
    const kind = rng.int(0, 2);
    if (kind === 0) {
      // Two-step IOA given DISAGREEMENTS (exact to 1 d.p. or integer)
      const total = rng.pick([40, 80, 160, 200]);
      // Choose even disagreements for 80/160 so pct is clean .5 or .0
      const minD = Math.max(2, Math.floor(total * 0.05));
      const maxD = Math.floor(total * 0.35);
      let disagreed = rng.int(minD, maxD);
      if (total === 80 && disagreed % 2 !== 0) disagreed += 1;
      if (total === 160 && disagreed % 4 !== 0) disagreed += 4 - (disagreed % 4);
      const agreed = total - disagreed;
      const pct = roundTo((agreed / total) * 100, 1);
      const disPct = roundTo((disagreed / total) * 100, 1);
      return {
        prompt: `Two observers independently score ${total} video segments of ${behaviour} and **disagree** on ${disagreed} segments. Calculate their percentage inter-observer agreement (give your answer to 1 decimal place if needed).`,
        answer: { type: "number", value: pct, tolerance: 0.05, display: `${pct}%` },
        hint: `First find agreements: ${total} − ${disagreed} = ${agreed}. Then divide by ${total} and multiply by 100.`,
        traps: [
          {
            spec: { type: "number", value: disPct, tolerance: 0.05 },
            feedback: `${disPct}% is the disagreement percentage — subtract ${disagreed} from ${total} first to get agreements.`,
          },
        ],
        solution: [
          `Agreements = {{${total} - ${disagreed} = ${agreed}}}.`,
          `{{IOA (%) = (${agreed} / ${total}) * 100 = ${pct}%}}.`,
        ],
      };
    } else if (kind === 1) {
      // Exact integer Proportional Stratified Subsample
      const nSample = rng.pick([40, 50, 60, 80, 100, 120]);
      const mult = rng.pick([4, 5, 6, 8, 10]);
      const nTotal = nSample * mult;
      const ans = rng.int(Math.ceil(nSample * 0.15), Math.floor(nSample * 0.45));
      const nStratum = ans * mult;
      const stratumName = rng.pick(["Year 13 students", "boarding students", "bilingual students", "HL Psychology students"]);
      return {
        prompt: `A school of ${nTotal} students includes ${nStratum} ${stratumName}. For a proportional stratified study on ${behaviour} with total sample size {{n = ${nSample}}}, how many ${stratumName} must be selected?`,
        answer: { type: "number", value: ans, display: `${ans}` },
        hint: `Find the subgroup fraction {{${nStratum} / ${nTotal}}}, then multiply by ${nSample}.`,
        solution: [
          `Subgroup proportion = {{${nStratum} / ${nTotal}}} = ${frac(nStratum, nTotal)}.`,
          `Multiply by sample size: {{(${nStratum} / ${nTotal}) * ${nSample} = ${ans}}} ${stratumName}.`,
        ],
      };
    } else {
      // Exact integer Percentage Attrition Rate
      const nStart = rng.pick([40, 50, 80, 100, 125, 160, 200]);
      const validDrops: number[] = [];
      for (let p = 8; p <= 40; p += 2) {
        if ((nStart * p) % 100 === 0) validDrops.push(p);
      }
      const dropPct = rng.pick(validDrops);
      const dropped = (nStart * dropPct) / 100;
      const nEnd = nStart - dropped;
      return {
        prompt: `A 6-week study on ${behaviour} begins with ${nStart} volunteers at ${setting}, and ${nEnd} complete the final session. Calculate the percentage attrition (dropout) rate as a whole number.`,
        answer: { type: "number", value: dropPct, display: `${dropPct}%` },
        hint: `First find dropouts (${nStart} − ${nEnd}), then divide by starting sample ${nStart} and multiply by 100.`,
        traps: [
          {
            spec: { type: "number", value: 100 - dropPct },
            feedback: `${100 - dropPct}% is the retention rate — the question asks for the attrition (dropout) percentage.`,
          },
          ...(dropped !== dropPct
            ? [{ spec: { type: "number" as const, value: dropped }, feedback: `${dropped} is the raw dropout count — divide by ${nStart} and multiply by 100.` }]
            : []),
        ],
        solution: [
          `Dropouts = {{${nStart} - ${nEnd} = ${dropped}}}.`,
          `{{Attrition (%) = (${dropped} / ${nStart}) * 100 = ${dropPct}%}}.`,
        ],
      };
    }
  }

  // Tier 3: Multi-step IB practical metrics
  const kind = rng.int(0, 2);
  if (kind === 0) {
    // Reverse IOA threshold: minimum whole agreements to reach 80% / 85% / 90%
    const total = rng.int(35, 145);
    const thresh = rng.pick([80, 85, 90]);
    const minAgree = Math.ceil((total * thresh) / 100 - 1e-9);
    const maxDisagree = total - minAgree;
    return {
      prompt: `Two observers pilot an observational schedule for ${behaviour} across ${total} time intervals. What is the **minimum whole number** of intervals on which they must agree to achieve at least ${thresh}% inter-observer reliability?`,
      answer: { type: "number", value: minAgree, display: `${minAgree}` },
      hint: `Compute {{${thresh / 100} * ${total}}} and round UP to the next whole integer if it is a decimal.`,
      traps: [
        ...(maxDisagree !== minAgree
          ? [{ spec: { type: "number" as const, value: maxDisagree }, feedback: `${maxDisagree} is the maximum number of disagreements allowed — the question asks for agreements.` }]
          : []),
      ],
      solution: [
        `Exact threshold count = {{${thresh / 100} * ${total} = ${clean((total * thresh) / 100)}}}.`,
        `Rounding up to the nearest whole interval gives **${minAgree}** agreements (check: {{(${minAgree} / ${total}) * 100 = ${roundTo((minAgree / total) * 100, 1)}% >= ${thresh}%}}).`,
      ],
    };
  } else if (kind === 1) {
    // Two-stage Response Rate + Attrition Net Completers
    const invited = rng.pick([200, 250, 300, 400, 500]);
    const r1 = rng.pick([60, 70, 80]);
    const wave1 = (invited * r1) / 100;
    const validA2 = [10, 15, 20, 25].filter((a) => (wave1 * a) % 100 === 0);
    const a2 = rng.pick(validA2);
    const dropped = (wave1 * a2) / 100;
    const wave2 = wave1 - dropped;
    const naiveWrong = clean((invited * (100 - (100 - r1) - a2)) / 100);
    return {
      prompt: `A longitudinal survey on ${behaviour} invites ${invited} students at ${setting}. Exactly ${r1}% complete Wave 1, and ${a2}% of Wave 1 respondents drop out before Wave 2. How many participants complete Wave 2?`,
      answer: { type: "number", value: wave2, display: `${wave2}` },
      hint: `Step 1: Find ${r1}% of ${invited}. Step 2: Subtract ${a2}% of the Wave 1 count (not of ${invited}!).`,
      traps: [
        ...(naiveWrong !== wave2
          ? [{ spec: { type: "number" as const, value: naiveWrong }, feedback: `Careful: the ${a2}% attrition applies to the ${wave1} Wave 1 respondents, not the original ${invited} invitations.` }]
          : []),
        { spec: { type: "number", value: wave1 }, feedback: `${wave1} is the Wave 1 total — now subtract the ${a2}% who dropped out before Wave 2.` },
      ],
      solution: [
        `Wave 1 completers = {{${r1 / 100} * ${invited} = ${wave1}}}.`,
        `Wave 2 dropouts = {{${a2 / 100} * ${wave1} = ${dropped}}}.`,
        `Wave 2 completers = {{${wave1} - ${dropped} = ${wave2}}} participants.`,
      ],
    };
  } else {
    // Differential Attrition Gap (percentage points)
    const nArm = rng.pick([40, 50, 80, 100]);
    const step = nArm === 40 ? 5 : nArm === 50 ? 2 : nArm === 80 ? 5 : 1;
    const pCtrl = rng.int(1, Math.floor(12 / step)) * step;
    const gapSteps = rng.int(Math.ceil(12 / step), Math.floor(32 / step));
    const pExp = pCtrl + gapSteps * step;
    const dExp = (nArm * pExp) / 100;
    const dCtrl = (nArm * pCtrl) / 100;
    const gap = pExp - pCtrl;
    return {
      prompt: `In an 8-week trial on ${behaviour}, both arms start with ${nArm} participants. By Week 8, ${dExp} participants drop out of the intensive experimental arm compared with ${dCtrl} in the control arm. Calculate the differential attrition gap between arms in percentage points (give a whole number).`,
      answer: { type: "number", value: gap, display: `${gap}` },
      hint: `Convert both dropout counts to percentages of ${nArm}, then subtract control % from experimental %.`,
      solution: [
        `Experimental attrition = {{(${dExp} / ${nArm}) * 100 = ${pExp}%}}; control attrition = {{(${dCtrl} / ${nArm}) * 100 = ${pCtrl}%}}.`,
        `Differential attrition gap = {{${pExp} - ${pCtrl} = ${gap}}} percentage points.`,
      ],
    };
  }
}

// =============================================================================
// DRILL 4: Ethical Safeguards & 3Rs Classifier (SL, Level 3, ethics-unseen-study-paper2)
// =============================================================================
function genEthics3Rs(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const behaviour = rng.pick(BEHAVIOURS);
  const setting = rng.pick(SETTINGS);
  const group = rng.pick(GROUPS);
  const n = rng.pick([20, 32, 44, 56, 68, 84]);
  const animal = rng.pick(["mice", "rats", "macaques", "zebrafish"]);

  if (tier === 1) {
    const kind = rng.int(0, 6);
    switch (kind) {
      case 0:
        return {
          prompt: `Before starting an experiment on ${behaviour} with ${n} ${group}, the researcher explains the aims, duration, and potential risks so participants can freely agree in writing. State this ethical safeguard.`,
          answer: { type: "text", accept: ["informed consent", "Informed consent", "consent"], display: "Informed consent" },
          hint: "Participants must be *informed* before freely agreeing.",
          solution: ["Giving full study information so volunteers freely agree beforehand is **informed consent**."],
        };
      case 1:
        return {
          prompt: `Immediately after a mildly deceptive study on ${behaviour}, the researcher explains the true hypothesis, checks wellbeing, and offers participants the option to delete their scores. State this ethical procedure.`,
          answer: { type: "text", accept: ["debriefing", "Debriefing", "debrief"], display: "Debriefing" },
          hint: "Occurs right *after* data collection to restore understanding and mood.",
          solution: ["Revealing the true aim, checking wellbeing, and offering data withdrawal post-study is **debriefing**."],
        };
      case 2:
        return {
          prompt: `A researcher reminds ${n} ${group} at ${setting} that they may stop participating at any point during the ${behaviour} task — or ask to delete their data later — with zero penalty. State this ethical right.`,
          answer: { type: "text", accept: ["right to withdraw", "Right to withdraw", "withdrawal", "right of withdrawal"], display: "Right to withdraw" },
          hint: "Three-word ethical principle guaranteeing freedom to leave without penalty.",
          solution: ["Allowing participants to stop or remove their data freely without penalty is the **right to withdraw**."],
        };
      case 3:
        return {
          prompt: `An anonymous online survey on ${behaviour} collects zero names, emails, or IP addresses so not even the researcher can trace a single answer back to any individual. State whether this achieves anonymity or confidentiality.`,
          answer: { type: "text", accept: ["anonymity", "Anonymity"], display: "Anonymity" },
          hint: "Not even the investigator knows who submitted each response.",
          traps: [
            { spec: { type: "text", accept: ["confidentiality"] }, feedback: "Confidentiality applies when the researcher knows identities but keeps them private; when even the researcher cannot link data to a person, it is anonymity." },
          ],
          solution: ["When not even the researcher can identify who gave a response, **anonymity** is achieved."],
        };
      case 4:
        return {
          prompt: `A neuroscience lab discontinues invasive ${animal} trials on ${behaviour} and switches entirely to non-invasive human fMRI and computer neural simulations. State which of Russell and Burch's 3Rs this exemplifies.`,
          answer: { type: "text", accept: ["Replacement", "replacement"], display: "Replacement" },
          hint: "Non-animal methods substitute completely for living animals.",
          solution: ["Substituting non-animal tools for living animal testing is **Replacement**."],
        };
      case 5:
        return {
          prompt: `Using statistical power analysis and shared baseline scans, researchers trim their required sample of ${animal} from ${n + 30} down to ${n} without sacrificing validity. State which of Russell and Burch's 3Rs this exemplifies.`,
          answer: { type: "text", accept: ["Reduction", "reduction"], display: "Reduction" },
          hint: "Minimising the number of animals needed while keeping statistical rigour.",
          solution: ["Minimising animal cohort size rigorously exemplifies **Reduction**."],
        };
      default:
        return {
          prompt: `A lab studying ${behaviour} upgrades housing for ${animal} with nesting enrichment, social companions, and targeted analgesia to minimise stress and pain. State which of Russell and Burch's 3Rs this exemplifies.`,
          answer: { type: "text", accept: ["Refinement", "refinement"], display: "Refinement" },
          hint: "Improving housing, handling, and pain control to enhance animal welfare.",
          solution: ["Minimising pain and enhancing welfare and enrichment exemplifies **Refinement**."],
        };
    }
  }

  if (tier === 2) {
    const kind = rng.int(0, 5);
    switch (kind) {
      case 0:
        return {
          prompt: `During face-to-face interviews about ${behaviour} with ${n} ${group} at ${setting}, the investigator replaces real names with pseudonyms in the final report. State whether this protects anonymity or confidentiality.`,
          answer: { type: "text", accept: ["confidentiality", "Confidentiality"], display: "Confidentiality" },
          hint: "Remember: the face-to-face interviewer still knows who said what.",
          traps: [
            { spec: { type: "text", accept: ["anonymity"] }, feedback: "Face-to-face interviews cannot be truly anonymous because the interviewer knows the speaker's identity." },
          ],
          solution: ["Protecting known identities via pseudonyms and secure storage achieves **confidentiality**, not anonymity."],
        };
      case 1:
        return {
          prompt: `A researcher plans a low-risk study of ${behaviour} with 13-year-old pupils at ${setting}. Alongside written parental/guardian consent, what specific term names the minor's own age-appropriate agreement to take part?`,
          answer: { type: "text", accept: ["assent", "Assent", "child assent", "minor assent", "participant assent"], display: "Assent" },
          hint: "Legal guardians give *consent*; minors under 16 give their own willing ________.",
          solution: ["With minors, parental informed consent must be paired with the young person's own **assent**."],
        };
      case 2:
        return {
          prompt: `A school principal directly asks ${n} teachers to fill out an optional survey on ${behaviour} and return signed sheets to her office. State the ethical term for the subtle pressure created by this authority power imbalance.`,
          answer: { type: "text", accept: ["coercion", "Coercion", "undue pressure", "power imbalance"], display: "Coercion" },
          hint: "Subordinates may feel unable to refuse their boss freely — starts with 'C'.",
          solution: ["Recruiting subordinates through an authority figure creates **coercion** (undue pressure), undermining voluntary informed consent."],
        };
      case 3:
        return {
          prompt: `An experiment on ${behaviour} intentionally tells ${group} they failed an intelligence test to provoke severe embarrassment and anxiety. State the primary ethical principle breached during this procedure.`,
          answer: { type: "text", accept: ["protection from harm", "Protection from harm", "protection from psychological harm", "avoidance of harm", "non-maleficence"], display: "Protection from harm" },
          hint: "Risk of physical or psychological distress must not exceed everyday life.",
          solution: ["Inducing foreseeable acute humiliation or anxiety violates **protection from harm** (psychological harm)."],
        };
      case 4:
        return {
          prompt: `To reduce Hawthorne reactivity while observing ${behaviour} in a public park, a student watches quietly without telling passers-by. State whether this observation is overt or covert.`,
          answer: { type: "text", accept: ["covert", "Covert", "covert observation"], display: "Covert" },
          hint: "Participants are unaware that a researcher is recording their behaviour.",
          traps: [
            { spec: { type: "text", accept: ["overt", "overt observation"] }, feedback: "Overt observation tells participants they are being watched; hidden observation is covert." },
          ],
          solution: ["Observing without participants' awareness is **covert** observation (ethically restricted to genuinely public behaviour)."],
        };
      default:
        return {
          prompt: `A lab studying ${behaviour} switches from using ${n + 24} ${animal} in separate independent cages to repeated non-invasive brain scans on just ${Math.max(12, Math.floor(n / 2))} ${animal}, cutting animal numbers in half. State which of the 3Rs is primarily applied.`,
          answer: { type: "text", accept: ["Reduction", "reduction"], display: "Reduction" },
          hint: "Focus on cutting the number of animals needed through a more efficient design.",
          solution: ["Halving the required cohort size while maintaining validity applies **Reduction**."],
        };
    }
  }

  // Tier 3: Applied Paper 2 & FA2027 IA ethical judgements
  const kind = rng.int(0, 5);
  switch (kind) {
    case 0:
      return {
        prompt: `For an IB Psychology FA2027 Internal Assessment on ${behaviour}, a student plans to recruit ${n} classmates and run a live Stroop trial to calculate p-values. State the two-word name of what the FA2027 IA must actually be (with no data collection).`,
        answer: { type: "text", accept: ["research proposal", "Research proposal", "Research Proposal"], display: "Research Proposal" },
        hint: "Under the NEW FA2027 guide, you design a hypothetical study — you do NOT collect data.",
        solution: ["The FA2027 IB Psychology IA is strictly a **Research Proposal** (hypothetical design, max 2,200 words, ≥ 5-item tool, no data collection)."],
      };
    case 1:
      return {
        prompt: `A qualitative researcher emails draft themes from interviews on ${behaviour} back to ${n} participants so they can verify that their lived meanings were interpreted accurately. State whether this procedure is debriefing or member checking.`,
        answer: { type: "text", accept: ["member checking", "Member checking", "participant validation"], display: "Member checking" },
        hint: "Participants are validating interpretive credibility, not being informed of experimental deception.",
        traps: [
          { spec: { type: "text", accept: ["debriefing"] }, feedback: "Debriefing explains experimental aims/deception post-study; returning draft themes to verify accuracy is member checking." },
        ],
        solution: ["Returning draft themes or transcripts to verify accurate interpretation is **member checking** (participant validation)."],
      };
    case 2:
      return {
        prompt: `A student runs a focus group of 10 classmates at ${setting} discussing personal mental-health struggles linked to ${behaviour}. Even if the researcher uses pseudonyms, which specific ethical safeguard cannot be guaranteed among peer group members afterward?`,
        answer: { type: "text", accept: ["confidentiality", "Confidentiality", "privacy"], display: "Confidentiality" },
        hint: "Fellow classmates hear everything said in the room and might repeat it outside.",
        solution: ["Because peers hear one another's disclosures, focus groups cannot fully guarantee **confidentiality**."],
      };
    case 3:
      return {
        prompt: `An investigator secretly places a microphone inside a private student dormitory kitchen to record authentic conversations about ${behaviour} with zero reactivity. State whether this covert recording is ethically permissible or impermissible under IB guidelines.`,
        answer: { type: "text", accept: ["impermissible", "Impermissible", "unethical", "not permissible", "prohibited"], display: "Impermissible" },
        hint: "Covert observation is only considered where people have no reasonable expectation of privacy (genuinely public spaces).",
        solution: ["Secretly recording private residential spaces violates privacy and informed consent, making it ethically **impermissible**."],
      };
    case 4:
      return {
        prompt: `A neuroscience consortium shifts from live ${animal} stress experiments on ${behaviour} to lab-grown human brain organoids and computational simulations. State which of Russell and Burch's 3Rs this represents.`,
        answer: { type: "text", accept: ["Replacement", "replacement"], display: "Replacement" },
        hint: "Organoids and computer models completely eliminate the use of living animals.",
        solution: ["Adopting human organoids and computational models in place of living animals is **Replacement**."],
      };
    default:
      return {
        prompt: `A researcher uses mild cover-story wording in a memory experiment on ${behaviour} so ${group} will not guess the hypothesis, then reveals the true aim immediately afterward with zero harm. State the ethical term for intentionally withholding or misstating the true aim.`,
        answer: { type: "text", accept: ["deception", "Deception"], display: "Deception" },
        hint: "Permitted only when scientifically necessary, minimal risk, and followed by thorough debriefing.",
        solution: ["Intentionally withholding or misstating a study's true aim is **deception** (permissible only under strict minimal-risk and debriefing rules)."],
      };
  }
}

export const drills: Drill[] = [
  {
    id: "1-concepts-methodology.core-concept-lens",
    topicId: "1-concepts-methodology",
    title: "6 Core Concepts Scenario Matcher",
    level: 1,
    ibLevel: "SL",
    guideRef: "six-core-concepts",
    generate: genCoreConceptLens,
  },
  {
    id: "1-concepts-methodology.design-sampling-id",
    topicId: "1-concepts-methodology",
    title: "Experimental Design & Sampling Identifier",
    level: 2,
    ibLevel: "SL",
    guideRef: "experiments-surveys",
    generate: genDesignSampling,
  },
  {
    id: "1-concepts-methodology.practical-metrics-calc",
    topicId: "1-concepts-methodology",
    title: "IOA %, Stratified Sampling & Attrition Metrics",
    level: 2,
    ibLevel: "SL",
    guideRef: "interviews-observations",
    generate: genPracticalMetrics,
  },
  {
    id: "1-concepts-methodology.ethics-3rs-classifier",
    topicId: "1-concepts-methodology",
    title: "Ethical Safeguards & 3Rs Classifier",
    level: 3,
    ibLevel: "SL",
    guideRef: "ethics-unseen-study-paper2",
    generate: genEthics3Rs,
  },
];
