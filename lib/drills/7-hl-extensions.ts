import type { Drill } from "./types.ts";
import { big, clean, num, roundTo } from "./helpers.ts";

const RESEARCHERS = [
  "Dr. Tan",
  "Dr. Mensah",
  "Dr. Sato",
  "Dr. Patel",
  "Dr. Lindholm",
  "Dr. Alvarez",
  "Dr. Okafor",
  "Dr. Chen",
  "Dr. Kowalski",
  "Dr. Haddad",
] as const;

const COUNTRIES_NON_WEIRD = [
  "rural Ghana",
  "northern Thailand",
  "Andean Peru",
  "eastern Indonesia",
  "southern Kenya",
  "rural Vietnam",
  "central Morocco",
  "suburban Malaysia",
] as const;

const CITIES_GLOBAL = [
  "Singapore",
  "Tokyo",
  "Nairobi",
  "São Paulo",
  "Seoul",
  "Jakarta",
  "Mumbai",
  "Lagos",
] as const;

const STUDENTS = [
  "Maya",
  "Kenji",
  "Amina",
  "Lucas",
  "Priya",
  "Hana",
  "Tariq",
  "Chloe",
  "Rohan",
  "Sofia",
] as const;

const CONSTRUCTS_CULTURE = [
  "emotional distress",
  "parental warmth",
  "classroom assertiveness",
  "adolescent resilience",
  "workplace leadership",
  "grief expression",
] as const;

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  // 1. Cultural Research Lenses & WEIRD Metrics (Level 1 — HL Sprint ready)
  // -------------------------------------------------------------------------
  {
    id: "7-hl-extensions.culture-research-lens",
    topicId: "7-hl-extensions",
    title: "Culture: Emic/Etic, Ecological Fallacy & WEIRD Bias [HL]",
    level: 1,
    ibLevel: "HL",
    guideRef: "hl-culture-emic-etic",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const region = rng.pick(COUNTRIES_NON_WEIRD);
      const city = rng.pick(CITIES_GLOBAL);
      const construct = rng.pick(CONSTRUCTS_CULTURE);
      const student = rng.pick(STUDENTS);

      if (tier === 1) {
        const mode = rng.int(0, 4);
        const n = rng.pick([40, 60, 80, 120, 150, 200]);
        if (mode === 0) {
          const months = rng.pick([10, 14, 18, 24]);
          const isEmic = rng.bool(0.6);
          if (isEmic) {
            return {
              prompt: `${researcher} spends ${months} months living in ${region} interviewing ${n} residents in their local language to build a culturally grounded model of **${construct}** without importing outside checklists. Is this an **emic** or **etic** research approach?`,
              answer: { type: "text", accept: ["emic", "emic approach"], display: "Emic" },
              traps: [
                {
                  spec: { type: "text", accept: ["etic", "etic approach", "imposed etic"] },
                  feedback: "Etic research searches for cross-cultural universals from an outsider stance; building local insider concepts is emic.",
                },
              ],
              hint: "Think insider (local language & meanings) vs outsider (standardized universal checklist).",
              solution: [
                "Studying a phenomenon from *within* one culture using local concepts and language defines an **emic** approach.",
              ],
            };
          }
          return {
            prompt: `${researcher} administers a standardized cognitive test battery across ${n} participants in five countries (including ${city} and London) to search for universal cross-cultural laws of **${construct}** from an outsider perspective. Is this an **emic** or **etic** research approach?`,
            answer: { type: "text", accept: ["etic", "etic approach"], display: "Etic" },
            traps: [
              {
                spec: { type: "text", accept: ["emic", "emic approach"] },
                feedback: "Emic inquiry explores local meanings inside a single culture; searching for universal cross-cultural laws with standardized tools is etic.",
              },
            ],
            hint: "Think insider (single culture's local meanings) vs outsider (standardized universal comparisons across cultures).",
            solution: [
              "Seeking universal psychological laws across multiple cultures using standardized outsider instruments defines an **etic** approach.",
            ],
          };
        }
        if (mode === 1) {
          const origin = rng.pick(["North American", "British", "US undergraduate", "Western European"]);
          return {
            prompt: `${researcher} exports an unmodified ${origin} checklist of **${construct}** directly to ${n} participants in ${region} and labels local norms as 'deficient'. Name Berry's two-word term for exporting one culture's tool unchanged as universal.`,
            answer: { type: "text", accept: ["imposed etic", "an imposed etic", "imposed-etic"], display: "Imposed etic" },
            traps: [
              {
                spec: { type: "text", accept: ["derived etic", "emic"] },
                feedback: "A derived etic synthesizes validated local emic studies; forcing an unadapted foreign tool onto another group is an imposed etic.",
              },
            ],
            hint: "Two words: a verb meaning 'forced onto' followed by 'etic'.",
            solution: [
              "Exporting one culture's operationalization unchanged as a false universal is Berry's **imposed etic**.",
            ],
          };
        }
        if (mode === 2) {
          const sites = rng.pick([3, 4, 5]);
          return {
            prompt: `After conducting separate insider qualitative studies of **${construct}** across ${sites} cultures (including ${region} and ${city}), ${researcher} identifies overlapping core patterns while preserving local idioms. Name Berry's two-word term for this validated cross-cultural comparison.`,
            answer: { type: "text", accept: ["derived etic", "a derived etic", "derived-etic"], display: "Derived etic" },
            traps: [
              {
                spec: { type: "text", accept: ["imposed etic"] },
                feedback: "Imposed etic exports one tool without local study; synthesizing multiple emic studies produces a derived etic.",
              },
            ],
            hint: "Two words: built ('derived') from multiple emic investigations.",
            solution: [
              "Combining multiple local emic inquiries to verify genuinely shared patterns creates a **derived etic**.",
            ],
          };
        }
        if (mode === 3) {
          const score = rng.pick([18, 22, 26, 74, 82]);
          const dim = rng.pick(["Individualism", "Power Distance", "Uncertainty Avoidance"]);
          return {
            prompt: `A manager reads that a nation scores ${score}/100 on Hofstede's **${dim}** index and assumes ${student}, a new hire from ${city}, must personally match that exact national profile. Name this two-word logical error.`,
            answer: { type: "text", accept: ["ecological fallacy", "the ecological fallacy"], display: "Ecological fallacy" },
            hint: "Projecting a group-level ('ecological') national mean onto one individual.",
            solution: [
              "Assuming a nation-level cultural dimension score describes an individual commits the **ecological fallacy**.",
            ],
          };
        }
        const iconA = rng.pick(["a dragon and Great Wall", "calligraphy and lanterns", "local heritage landmarks"]);
        const iconB = rng.pick(["the US Capitol and Superman", "Western pop icons", "American sports imagery"]);
        return {
          prompt: `Modelled on Hong et al. (2000), ${n} bilingual students in ${city} shift from situational to dispositional attributions immediately after viewing ${iconB} instead of ${iconA}. Name this dynamic process (three words or hyphenated two-word phrase).`,
          answer: {
            type: "text",
            accept: ["bicultural frame-switching", "bicultural frame switching", "frame-switching", "frame switching", "cultural frame-switching", "cultural frame switching"],
            display: "Bicultural frame-switching",
          },
          hint: "Hong et al. (2000) showed biculturals switch dynamically between two internalized cultural 'frames'.",
          solution: [
            "Rapidly shifting between dual internalized cultural schemas in response to environmental primes is **bicultural frame-switching**.",
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 3);
        const n = rng.pick([48, 72, 110, 160, 240]);
        if (mode === 0) {
          const scalePts = rng.pick([5, 7, 9]);
          return {
            prompt: `In a ${scalePts}-point self-report survey of **${construct}** (N = ${n}), participants in ${city} and London rate themselves similarly even though behavioural observations differ sharply, because respondents evaluate themselves against local peers rather than a global standard. Name this **Measurement** artefact (Heine et al., 2002).`,
            answer: {
              type: "text",
              accept: ["reference-group effect", "reference group effect", "the reference-group effect", "the reference group effect"],
              display: "Reference-group effect",
            },
            hint: "Respondents anchor self-ratings relative to their own local 'reference group'.",
            solution: [
              "Judging traits relative to local peer norms on Likert scales creates the **reference-group effect** (Heine et al., 2002).",
            ],
          };
        }
        if (mode === 1) {
          const relation = rng.pick(["mother", "closest family member"]);
          return {
            prompt: `In a cultural neuroscience fMRI replication of Zhu et al. (2007) with N = ${n} adults in ${city}, interdependent participants show overlapping activation for *self* and *${relation}* in which specific prefrontal brain region? (Full name or 4-letter abbreviation.)`,
            answer: {
              type: "text",
              accept: ["mPFC", "medial prefrontal cortex", "ventral medial prefrontal cortex", "vmPFC"],
              display: "medial prefrontal cortex (mPFC)",
            },
            hint: "Midline frontal region processing self-referential trait judgements (4-letter abbreviation starting with 'm').",
            solution: [
              "Zhu et al. (2007) and Chiao et al. (2009) linked self- and mother-referential cultural overlap to the **medial prefrontal cortex (mPFC)**.",
            ],
          };
        }
        if (mode === 2) {
          const total = rng.pick([200, 300, 400, 500, 600, 800]);
          const pct = rng.pick([75, 80, 85, 90, 95]);
          const nWeird = clean((total * pct) / 100);
          const nNon = total - nWeird;
          return {
            prompt: `${researcher} audits a journal special issue on **${construct}** totalling ${total} participants: ${nWeird} come from WEIRD nations and ${nNon} come from ${region} and ${city}. What **percentage** of participants are from **WEIRD** nations?`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            traps: [
              {
                spec: { type: "number", value: 100 - pct },
                feedback: `${100 - pct}% is the non-WEIRD percentage. Divide ${nWeird} by ${total} and multiply by 100.`,
              },
            ],
            hint: `Compute (${nWeird} ÷ ${total}) × 100.`,
            solution: [
              `WEIRD percentage = {{(${nWeird} / ${total}) * 100 = ${pct}%}}.`,
            ],
          };
        }
        const score = rng.pick([15, 25, 78, 86]);
        return {
          prompt: `A multinational HR team assumes every applicant educated in ${city} rejects personal autonomy because the country's 1970s Hofstede score was ${score}/100, overlooking urban globalization and individual diversity. Name the two-word logical error committed.`,
          answer: { type: "text", accept: ["ecological fallacy", "the ecological fallacy"], display: "Ecological fallacy" },
          hint: "Treating an aggregate national average as an individual trait.",
          solution: [
            "Applying a country-level average score to individual applicants commits the **ecological fallacy**.",
          ],
        };
      }

      // Tier 3: Quantitative WEIRD over-representation factor & pool rebalancing
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const total = rng.pick([200, 250, 400, 500, 600, 1000]);
        const pct = rng.pick([60, 72, 78, 84, 90, 96]);
        const nWeird = clean((total * pct) / 100);
        const factor = roundTo(pct / 12, 1);
        return {
          prompt: `${researcher} reviews ${big(total)} participants across studies of **${construct}** and finds ${big(nWeird)} are from WEIRD nations. Relative to the **12%** global WEIRD population share, calculate the **WEIRD over-representation factor** (to 1 d.p. if needed).`,
          answer: { type: "number", value: factor, tolerance: 0.05, display: `${num(factor)}` },
          traps: [
            {
              spec: { type: "number", value: pct },
              feedback: `${pct}% is the WEIRD share of the sample — now divide ${pct}% by the 12% global WEIRD population share.`,
            },
          ],
          hint: `First find the WEIRD percentage (${nWeird} ÷ ${total} × 100), then divide by 12%.`,
          solution: [
            `WEIRD sample share = {{(${nWeird} / ${total}) * 100 = ${pct}%}}.`,
            `Over-representation factor = {{${pct} / 12 = ${num(factor)}}}×.`,
          ],
        };
      }
      // Rebalancing a WEIRD pool by adding a non-WEIRD cohort
      const baseTotal = rng.pick([200, 300, 400, 500]);
      const basePct = rng.pick([84, 90, 96]);
      const nWeird = clean((baseTotal * basePct) / 100);
      const addNonWeird = clean(baseTotal * 0.25); // newTotal = 1.25 * baseTotal -> newPct = basePct / 1.25 -> clean!
      const newTotal = baseTotal + addNonWeird;
      const newPct = roundTo((nWeird / newTotal) * 100, 1);
      const newFactor = roundTo(newPct / 12, 2);
      return {
        prompt: `A meta-analysis on **${construct}** initially pools ${baseTotal} participants (${basePct}% WEIRD). ${researcher} adds ${addNonWeird} non-WEIRD participants from ${region}. Calculate the **new WEIRD sample percentage** (to 1 d.p. if needed).`,
        answer: { type: "number", value: newPct, tolerance: 0.05, display: `${num(newPct)}%` },
        traps: [
          {
            spec: { type: "number", value: basePct },
            feedback: `${basePct}% was the original percentage before adding ${addNonWeird} non-WEIRD participants to the denominator.`,
          },
          {
            spec: { type: "number", value: newFactor },
            feedback: `${num(newFactor)} is the over-representation factor — this item asks for the new WEIRD percentage.`,
          },
        ],
        hint: `Find the fixed WEIRD count (${basePct}% of ${baseTotal}), then divide by the new total (${baseTotal} + ${addNonWeird}).`,
        solution: [
          `WEIRD count = {{${basePct / 100} * ${baseTotal} = ${nWeird}}}.`,
          `New total = {{${baseTotal} + ${addNonWeird} = ${newTotal}}}.`,
          `New WEIRD percentage = {{(${nWeird} / ${newTotal}) * 100 = ${num(newPct)}%}} (over-representation drops to ${num(newFactor)}×).`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // 2. Self-Determination Theory, Overjustification & RPE (Level 1 — Sprint ready)
  // -------------------------------------------------------------------------
  {
    id: "7-hl-extensions.sdt-motivation-classifier",
    topicId: "7-hl-extensions",
    title: "Motivation: SDT Needs, Continuum, Overjustification & RPE [HL]",
    level: 1,
    ibLevel: "HL",
    guideRef: "hl-motivation-reward-sdt",
    generate(rng, tier) {
      const student = rng.pick(STUDENTS);
      const activity = rng.pick([
        "sketching architectural designs",
        "solving logic puzzles",
        "writing short stories",
        "coding indie games",
        "practising cello pieces",
        "designing robotics builds",
      ]);
      const mentor = rng.pick(["teacher", "coach", "lab supervisor", "club mentor"]);

      if (tier === 1) {
        const mode = rng.int(0, 3);
        if (mode === 0) {
          const cue = rng.pick([
            "lets students design their own project pathway and select topics freely",
            "replaces rigid step-by-step commands with meaningful choice over study methods",
            "invites learners to co-author classroom guidelines with genuine ownership",
          ]);
          return {
            prompt: `${student}'s ${mentor} ${cue} during **${activity}**. Which single **SDT basic psychological need** (Autonomy, Competence, or Relatedness) is most directly supported?`,
            answer: { type: "text", accept: ["autonomy", "need for autonomy"], display: "Autonomy" },
            traps: [
              {
                spec: { type: "text", accept: ["competence", "relatedness"] },
                feedback: "Volition, meaningful choice, and personal ownership satisfy Autonomy.",
              },
            ],
            hint: "Recall CAR: Competence (mastery), Autonomy (volition/choice), Relatedness (belonging).",
            solution: [
              "Providing volitional choice and ownership directly supports the SDT need for **Autonomy**.",
            ],
          };
        }
        if (mode === 1) {
          const cue = rng.pick([
            "gives specific, step-by-step mastery feedback that helps them overcome tricky obstacles",
            "sets optimally challenging milestones so learners see clear growth in skill",
            "praises concrete problem-solving strategies that build confidence in handling complex tasks",
          ]);
          return {
            prompt: `While ${student} works on **${activity}**, the ${mentor} ${cue}. Which single **SDT basic psychological need** (Autonomy, Competence, or Relatedness) is most directly supported?`,
            answer: { type: "text", accept: ["competence", "need for competence"], display: "Competence" },
            traps: [
              {
                spec: { type: "text", accept: ["autonomy", "relatedness"] },
                feedback: "Feeling effective and capable through optimal challenge and mastery feedback satisfies Competence.",
              },
            ],
            hint: "Focus on feeling effective, capable, and mastering optimal challenge.",
            solution: [
              "Optimal challenge and informational mastery feedback nurture the SDT need for **Competence**.",
            ],
          };
        }
        if (mode === 2) {
          const cue = rng.pick([
            "builds warm peer-mentoring circles where every member feels valued and respected",
            "encourages supportive collaborative teams rooted in mutual trust and belonging",
            "checks in empathetically so students feel genuinely cared for inside the group",
          ]);
          return {
            prompt: `In a club focused on **${activity}**, the ${mentor} ${cue}. Which single **SDT basic psychological need** (Autonomy, Competence, or Relatedness) is most directly supported?`,
            answer: { type: "text", accept: ["relatedness", "need for relatedness"], display: "Relatedness" },
            traps: [
              {
                spec: { type: "text", accept: ["autonomy", "competence"] },
                feedback: "Warm social connection, respect, and belonging satisfy Relatedness.",
              },
            ],
            hint: "Which of the three CAR needs captures meaningful human belonging and connection?",
            solution: [
              "Feeling genuinely respected, connected, and cared for satisfies the SDT need for **Relatedness**.",
            ],
          };
        }
        const reward = rng.pick(["expected cash vouchers", "pre-announced gold-star certificates", "mandatory gift-card points"]);
        return {
          prompt: `${student} already loved **${activity}** for fun. After a ${mentor} introduced ${reward} for every hour completed and then later removed them, ${student}'s voluntary time dropped by nearly half. Name this motivational phenomenon (Lepper et al., 1973).`,
          answer: {
            type: "text",
            accept: ["overjustification effect", "overjustification", "the overjustification effect", "crowding out"],
            display: "Overjustification effect",
          },
          hint: "Expected, tangible, controlling rewards crowd out pre-existing intrinsic enjoyment.",
          solution: [
            "Expected controlling external rewards undermining existing intrinsic drive is the **overjustification effect** (Lepper, Greene & Nisbett, 1973).",
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 4);
        if (mode === 0) {
          const reason = rng.pick([
            "would feel intense guilt and shame for letting their ego down",
            "cannot bear the internal self-criticism of skipping a session",
            "feels anxious about protecting fragile pride even when nobody is watching",
          ]);
          return {
            prompt: `${student} keeps **${activity}** today not out of enjoyment or for cash prizes, but purely because they ${reason}. Name the specific **SDT regulation stage** on the continuum.`,
            answer: {
              type: "text",
              accept: ["introjected regulation", "introjected", "introjection"],
              display: "Introjected regulation",
            },
            traps: [
              {
                spec: { type: "text", accept: ["external regulation", "external"] },
                feedback: "External regulation relies on outside rewards/penalties; internal guilt and ego pressure define introjected regulation.",
              },
            ],
            hint: "Between External and Identified regulation — controlled internally via guilt, shame, or ego pride.",
            solution: [
              "Internalized pressure policed by guilt, shame, or fragile ego pride defines **introjected regulation**.",
            ],
          };
        }
        if (mode === 1) {
          const goal = rng.pick(["becoming a biomedical engineer", "entering clinical psychology", "earning an architecture scholarship"]);
          return {
            prompt: `${student} finds routine drills in **${activity}** dry, yet puts in sustained effort because they consciously endorse the skill as vital to their chosen goal of ${goal}. Name the specific **SDT regulation stage**.`,
            answer: {
              type: "text",
              accept: ["identified regulation", "identified", "identification"],
              display: "Identified regulation",
            },
            traps: [
              {
                spec: { type: "text", accept: ["intrinsic motivation", "intrinsic"] },
                feedback: "The student finds the drills dry rather than inherently fun — personally valuing the outcome is identified regulation.",
              },
            ],
            hint: "An autonomous extrinsic stage where the person consciously values and endorses the goal.",
            solution: [
              "Endorsing an activity because its outcome aligns with personally valued goals is **identified regulation**.",
            ],
          };
        }
        if (mode === 2) {
          const incentive = rng.pick(["strict detention avoidance", "a $20 cash bonus per task", "mandatory parental fine avoidance"]);
          return {
            prompt: `${student} only engages in **${activity}** because of ${incentive}, stopping the moment surveillance ends. Name the specific **SDT regulation stage**.`,
            answer: {
              type: "text",
              accept: ["external regulation", "external"],
              display: "External regulation",
            },
            hint: "The most controlled extrinsic stage driven purely by outside rewards or punishments.",
            solution: [
              "Performing a behaviour solely to gain outside rewards or avoid punishment is **external regulation**.",
            ],
          };
        }
        if (mode === 3) {
          const isSoam = rng.bool(0.5);
          if (isSoam) {
            const context = rng.pick(["honouring family expectations", "fulfilling a respected mother's choice", "upholding the pride of their study group"]);
            return {
              prompt: `Drawing on Yu & Yang (1994) and Iyengar & Lepper (1999), ${student} shows peak persistence in **${activity}** when working toward standards anchored in ${context}. Does this illustrate **IOAM** or **SOAM**? (Write the 4-letter acronym or full name.)`,
              answer: {
                type: "text",
                accept: ["SOAM", "socially oriented achievement motivation", "socially-oriented achievement motivation"],
                display: "SOAM",
              },
              traps: [
                {
                  spec: { type: "text", accept: ["IOAM", "individual-oriented achievement motivation"] },
                  feedback: "IOAM focuses on self-selected personal standards; striving to honour valued in-groups is SOAM.",
                },
              ],
              hint: "Socially Oriented vs Individual-Oriented Achievement Motivation.",
              solution: [
                "Pursuing achievement standards valued by trusted in-groups such as family or peers defines **Socially Oriented Achievement Motivation (SOAM)**.",
              ],
            };
          }
          const context = rng.pick(["self-chosen personal benchmarks", "beating their own solo personal best", "independently selected mastery criteria"]);
          return {
            prompt: `Drawing on Yu & Yang (1994) and Iyengar & Lepper (1999), ${student} shows peak persistence in **${activity}** exclusively when pursuing ${context} independently of group expectations. Does this illustrate **IOAM** or **SOAM**? (Write the 4-letter acronym or full name.)`,
            answer: {
              type: "text",
              accept: ["IOAM", "individual oriented achievement motivation", "individual-oriented achievement motivation"],
              display: "IOAM",
            },
            traps: [
              {
                spec: { type: "text", accept: ["SOAM", "socially oriented achievement motivation"] },
                feedback: "SOAM anchors achievement in fulfilling valued in-group expectations; pursuing self-selected solo standards is IOAM.",
              },
            ],
            hint: "Individual-Oriented vs Socially Oriented Achievement Motivation.",
            solution: [
              "Pursuing self-defined personal mastery standards independently of group expectations defines **Individual-Oriented Achievement Motivation (IOAM)**.",
            ],
          };
        }
        const isWanting = rng.bool(0.55);
        if (isWanting) {
          const cue = rng.pick([
            "compulsively pulls down to refresh a feed even while rating the content as boring and unenjoyable",
            "feels an intense urge to open a loot-box app despite admitting it brings almost zero pleasure anymore",
          ]);
          return {
            prompt: `In Berridge & Robinson's (1998) incentive-salience model, ${student} ${cue}. Which single component (**wanting** or **liking**) remains hypersensitized by mesolimbic dopamine here?`,
            answer: { type: "text", accept: ["wanting", "incentive salience"], display: "Wanting" },
            traps: [
              {
                spec: { type: "text", accept: ["liking"] },
                feedback: "Hedonic 'liking' (opioid-mediated pleasure) has dropped here; cue-driven mesolimbic dopamine powers 'wanting'.",
              },
            ],
            hint: "Dopamine powers motivational craving / incentive salience, whereas opioid hotspots mediate hedonic pleasure.",
            solution: [
              "Mesolimbic dopamine drives cue-triggered **wanting** (incentive salience) even after hedonic **liking** habituates.",
            ],
          };
        }
        const pleasureCue = rng.pick([
          "shows intact facial pleasure reactions when sweet sucrose is placed on the tongue despite zero effort to seek it after dopamine depletion",
          "experiences genuine sensory enjoyment via opioid hedonic hotspots once a reward is consumed, independent of cue-triggered craving",
        ]);
        return {
          prompt: `In Berridge & Robinson's (1998) incentive-salience model, an organism ${pleasureCue}. Which single hedonic component (**wanting** or **liking**) is being demonstrated?`,
          answer: { type: "text", accept: ["liking", "hedonic liking"], display: "Liking" },
          traps: [
            {
              spec: { type: "text", accept: ["wanting", "incentive salience"] },
              feedback: "Dopamine-driven 'wanting' powers effortful pursuit; opioid-mediated sensory pleasure during consumption is 'liking'.",
            },
          ],
          hint: "Separate opioid-mediated sensory pleasure from dopamine-mediated cue craving.",
          solution: [
            "Opioid and endocannabinoid hedonic hotspots mediate sensory pleasure, termed **liking**.",
          ],
        };
      }

      // Tier 3: Quantitative RPE & Overjustification percentage decrease
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const expected = rng.pick([6, 8, 10, 12, 15, 20]);
        const delta = rng.nonZero(-5, 6);
        const actual = Math.max(0, expected + delta);
        const rpe = actual - expected;
        const unit = rng.pick(["juice drops", "bonus XP coins", "reward tokens"]);
        const direction = rpe > 0 ? "positive (+RPE, phasic burst)" : rpe < 0 ? "negative (−RPE, firing dip below baseline)" : "zero (0 RPE, baseline firing)";
        return {
          prompt: `Using Schultz et al.'s (1997) model \`RPE = R_actual − R_expected\`, a cue reliably predicts **${expected}** ${unit}, but on a probe trial **${actual}** ${unit} are delivered. Calculate the exact **Reward Prediction Error** (include a minus sign if negative).`,
          answer: { type: "number", value: rpe, display: num(rpe) },
          traps: rpe !== 0
            ? [
                {
                  spec: { type: "number", value: -rpe },
                  feedback: "Check the subtraction order: RPE = R_actual − R_expected (not expected − actual).",
                },
              ]
            : undefined,
          hint: `Subtract expected (${expected}) from actual (${actual}).`,
          solution: [
            `{{RPE = ${actual} - ${expected} = ${rpe}}} (${direction}).`,
          ],
        };
      }
      const baseline = rng.pick([40, 50, 60, 80, 120, 160]);
      const dropPct = rng.pick([15, 20, 25, 30, 35, 40, 45]);
      const dropMin = clean((baseline * dropPct) / 100);
      const post = clean(baseline - dropMin);
      const overTraps = [];
      if (dropMin !== dropPct) {
        overTraps.push({
          spec: { type: "number" as const, value: dropMin },
          feedback: `${num(dropMin)} minutes is the raw drop. Divide by the baseline (${baseline}) and multiply by 100.`,
        });
      }
      if (100 - dropPct !== dropPct) {
        overTraps.push({
          spec: { type: "number" as const, value: 100 - dropPct },
          feedback: `${100 - dropPct}% is the remaining share of engagement — the question asks for the percentage decrease.`,
        });
      }
      return {
        prompt: `In a Lepper-style replication on **${activity}**, baseline voluntary engagement averaged **${baseline} minutes/week**. After controlling expected prizes were withdrawn, voluntary time fell to **${num(post)} minutes/week**. Calculate the **percentage decrease** in voluntary engagement.`,
        answer: { type: "number", value: dropPct, display: `${dropPct}%` },
        traps: overTraps,
        hint: `Compute ((${baseline} − ${num(post)}) ÷ ${baseline}) × 100.`,
        solution: [
          `Drop = {{${baseline} - ${num(post)} = ${num(dropMin)}}} minutes.`,
          `Percentage decrease = {{(${num(dropMin)} / ${baseline}) * 100 = ${dropPct}%}}.`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // 3. Digital Cognition & Effect-Size Quantitative Metrics (Level 2 — Sprint ready)
  // -------------------------------------------------------------------------
  {
    id: "7-hl-extensions.digital-attention-metrics",
    topicId: "7-hl-extensions",
    title: "Technology: Switching Costs, Brain Drain & Effect Size R² [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "hl-technology-cognition-social",
    generate(rng, tier) {
      const student = rng.pick(STUDENTS);
      const distractor = rng.pick([
        "instant-messaging pop-ups",
        "short-form video tabs",
        "live group-chat alerts",
        "social-feed notifications",
        "split-screen video streams",
      ]);

      if (tier === 1) {
        const baseRt = rng.pick([200, 250, 400, 500, 600, 800, 1000]);
        const costPct = rng.pick([10, 15, 20, 25, 30, 35, 40]);
        const extra = clean((baseRt * costPct) / 100);
        const switchRt = baseRt + extra;
        return {
          prompt: `Modelled on Ophir et al. (2009), ${student} averages **${baseRt} ms** per trial on focused single-task items and **${switchRt} ms** when toggling with ${distractor}. Calculate the **percentage reaction-time switching cost**.`,
          answer: { type: "number", value: costPct, display: `${costPct}%` },
          traps: [
            {
              spec: { type: "number", value: extra },
              feedback: `${extra} ms is the raw delay. Divide by the single-task baseline (${baseRt} ms) and multiply by 100.`,
            },
            {
              spec: { type: "number", value: roundTo((extra / switchRt) * 100, 1), tolerance: 0.15 },
              feedback: `Divide by the focused single-task baseline (${baseRt} ms), not the multitasking RT (${switchRt} ms).`,
            },
          ],
          hint: `Find the delay (${switchRt} − ${baseRt}), divide by baseline (${baseRt}), and multiply by 100.`,
          solution: [
            `RT increase = {{${switchRt} - ${baseRt} = ${extra}}} ms.`,
            `Switching cost = {{(${extra} / ${baseRt}) * 100 = ${costPct}%}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const task = rng.pick(["OSpan working memory", "Raven's Progressive Matrices", "reverse digit-span", "dual n-back"]);
          const baseScore = rng.pick([40, 50, 60, 80, 120]);
          const lossPct = rng.pick([10, 15, 20, 25, 30]);
          const drop = clean((baseScore * lossPct) / 100);
          const deskScore = clean(baseScore - drop);
          return {
            prompt: `In a Ward et al. (2017) replication on **${task}**, students averaged **${baseScore} points** with their silenced phone in another room vs **${num(deskScore)} points** with it face-down on the desk. Calculate the **percentage working-memory drop**.`,
            answer: { type: "number", value: lossPct, display: `${lossPct}%` },
            traps: [
              {
                spec: { type: "number", value: drop },
                feedback: `${num(drop)} points is the raw reduction. Divide by the other-room baseline (${baseScore}) and multiply by 100.`,
              },
            ],
            hint: `Compute ((${baseScore} − ${num(deskScore)}) ÷ ${baseScore}) × 100.`,
            solution: [
              `Drop = {{${baseScore} - ${num(deskScore)} = ${num(drop)}}} points.`,
              `Percentage decline = {{(${num(drop)} / ${baseScore}) * 100 = ${lossPct}%}}.`,
            ],
          };
        }
        const rAbs = rng.pick([0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.12, 0.15, 0.2]);
        const sign = rng.bool(0.8) ? -1 : 1;
        const r = clean(sign * rAbs);
        const r2Pct = roundTo(rAbs * rAbs * 100, 2);
        const nSurvey = rng.pick([120000, 180000, 250000, 310000, 355000]);
        const metric = rng.pick(["daily social-media hours", "total screen time", "late-night gaming hours", "passive feed minutes"]);
        return {
          prompt: `A specification-curve study (N = ${big(nSurvey)}) finds a correlation of **r = ${num(r)}** (p < 0.001) between ${metric} and adolescent well-being. Calculate the **percentage of variance explained** (\`R² × 100%\`, exact to 2 d.p. if needed).`,
          answer: { type: "number", value: r2Pct, tolerance: 0.005, display: `${num(r2Pct)}%` },
          traps: [
            {
              spec: { type: "number", value: roundTo(rAbs * 100, 1) },
              feedback: `Square r first before multiplying by 100! (${num(r)})² × 100 = ${num(r2Pct)}%.`,
            },
            {
              spec: { type: "number", value: roundTo(rAbs * rAbs, 4) },
              feedback: `${num(roundTo(rAbs * rAbs, 4))} is the decimal R² — multiply by 100 to convert to a percentage.`,
            },
          ],
          hint: `Square ${num(r)} to find R², then multiply by 100.`,
          solution: [
            `{{R^2 = (${num(r)})^2 = ${num(roundTo(rAbs * rAbs, 4))}}}.`,
            `Variance explained = {{${num(roundTo(rAbs * rAbs, 4))} * 100 = ${num(r2Pct)}%}}.`,
          ],
        };
      }

      // Tier 3: Multi-step (forward switching RT, R² ratio, compounded attentional drop)
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const baseRt = rng.pick([300, 400, 450, 500, 600, 750, 800]);
        const costPct = rng.pick([12, 16, 20, 24, 28, 30, 36]);
        const switchRt = clean(baseRt * (1 + costPct / 100));
        return {
          prompt: `${student} responds in **${baseRt} ms** per trial under single-task focus. Switching with ${distractor} adds a **${costPct}%** latency cost. Calculate ${student}'s multitasking reaction time in **milliseconds**.`,
          answer: { type: "number", value: switchRt, display: `${num(switchRt)} ms` },
          traps: [
            {
              spec: { type: "number", value: clean((baseRt * costPct) / 100) },
              feedback: `${num(clean((baseRt * costPct) / 100))} ms is the extra delay — add it onto the ${baseRt} ms baseline.`,
            },
          ],
          hint: `Compute ${baseRt} × (1 + ${costPct / 100}).`,
          solution: [
            `Penalty = {{${costPct / 100} * ${baseRt} = ${num(clean((baseRt * costPct) / 100))}}} ms.`,
            `Multitasking RT = {{${baseRt} + ${num(clean((baseRt * costPct) / 100))} = ${num(switchRt)}}} ms.`,
          ],
        };
      }
      if (mode === 1) {
        const rSmall = rng.pick([0.04, 0.05, 0.06, 0.07, 0.08]);
        const mult = rng.pick([2, 3, 4, 5]);
        const rLarge = roundTo(rSmall * mult, 2);
        const ratio = mult * mult;
        const factorB = rng.pick(["peer bullying", "chronic sleep deprivation", "family conflict", "skipping breakfast"]);
        return {
          prompt: `In an Orben-style dataset, total screen time correlates with teen well-being at **|r| = ${num(rSmall)}**, while **${factorB}** correlates at **|r| = ${num(rLarge)}**. How many **times larger** is the variance explained (\`R²\`) by ${factorB} than by screen time?`,
          answer: { type: "number", value: ratio, display: `${ratio}` },
          traps: [
            {
              spec: { type: "number", value: mult },
              feedback: `${mult} is the ratio of raw |r| values. Because variance explained equals r², square both values first!`,
            },
          ],
          hint: `Square both correlations to find R² (or square their ratio ${num(rLarge)} ÷ ${num(rSmall)}).`,
          solution: [
            `Screen time R² = {{${num(rSmall)}^2 = ${num(roundTo(rSmall * rSmall, 4))}}}; ${factorB} R² = {{${num(rLarge)}^2 = ${num(roundTo(rLarge * rLarge, 4))}}}.`,
            `Ratio = {{(${num(rLarge)} / ${num(rSmall)})^2 = ${mult}^2 = ${ratio}}} times larger.`,
          ],
        };
      }
      const pairs: ReadonlyArray<[number, number, number]> = [
        [10, 20, 28],
        [12, 25, 34],
        [15, 20, 32],
        [20, 15, 32],
        [20, 25, 40],
        [25, 20, 40],
        [10, 30, 37],
        [20, 30, 44],
      ];
      const [p1, p2, totalDrop] = rng.pick(pairs);
      const startScore = rng.pick([50, 60, 75, 80, 100]);
      const mid = roundTo(startScore * (1 - p1 / 100), 2);
      const fin = roundTo(mid * (1 - p2 / 100), 2);
      return {
        prompt: `${student} scores **${startScore} points** on OSpan with their phone in another room. Placing the silent phone on the desk cuts the score by **${p1}%**, and enabling ${distractor} cuts that desk score by a **further ${p2}%**. Calculate the **overall percentage drop** from ${startScore}.`,
        answer: { type: "number", value: totalDrop, display: `${totalDrop}%` },
        traps: [
          {
            spec: { type: "number", value: p1 + p2 },
            feedback: `Successive percentage reductions multiply rather than add (${p1}% + ${p2}% = ${p1 + p2}% ignores that the ${p2}% cut applies to the already-lowered desk score).`,
          },
        ],
        hint: `Apply the two multipliers sequentially: remaining fraction = (1 − ${p1 / 100}) × (1 − ${p2 / 100}).`,
        solution: [
          `Desk score = {{${startScore} * ${num(roundTo(1 - p1 / 100, 2))} = ${num(mid)}}}; with alerts = {{${num(mid)} * ${num(roundTo(1 - p2 / 100, 2))} = ${num(fin)}}}.`,
          `Overall percentage drop = {{(1 - ${num(roundTo((1 - p1 / 100) * (1 - p2 / 100), 2))}) * 100 = ${totalDrop}%}}.`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // 4. HL Cross-Extension Core Concept Synthesis Matcher (Level 3 — HL Stretch)
  // -------------------------------------------------------------------------
  {
    id: "7-hl-extensions.hl-concept-synthesis",
    topicId: "7-hl-extensions",
    title: "Synthesis: Diagnosing FA2027 Core Concepts Across HL Extensions [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "hl-synthesizing-extensions",
    generate(rng, tier) {
      const city = rng.pick(CITIES_GLOBAL);
      const region = rng.pick(COUNTRIES_NON_WEIRD);
      const researcher = rng.pick(RESEARCHERS);
      const n = rng.pick([120, 240, 480, 950, 2400]);

      type ConceptCase = {
        concept: "Bias" | "Causality" | "Change" | "Measurement" | "Perspective" | "Responsibility";
        prompt: string;
        hint: string;
        why: string;
      };

      const tier1Cases: ConceptCase[] = [
        {
          concept: "Bias",
          prompt: `${researcher} trains an emotion-recognition AI exclusively on ${n} North American college students and deploys it unchanged in ${city} and ${region}. Which single **FA2027 Core Concept** is most directly exposed by this skewed WEIRD dataset?`,
          hint: "Skewed WEIRD sampling and imposed-etic training data systematically distort conclusions.",
          why: "Training exclusively on WEIRD students embeds sampling and cultural **Bias** directly into the model.",
        },
        {
          concept: "Causality",
          prompt: `A cross-sectional survey of ${n} teenagers in ${city} finds heavy gaming correlates negatively with sleep duration (r = −0.28), and reporters declare gaming directly *causes* insomnia without checking pre-existing anxiety. Which single **FA2027 Core Concept** is violated?`,
          hint: "Correlational snapshots cannot rule out reverse directionality or third variables.",
          why: "Inferring cause-and-effect from correlational survey data violates **Causality**.",
        },
        {
          concept: "Change",
          prompt: `A school board relies on a 2010 desktop-computer study of ${n} undergraduates to regulate 2027 mobile generative-AI tutors, ignoring how rapidly digital affordances evolve. Which single **FA2027 Core Concept** highlights this temporal-validity gap?`,
          hint: "Tracks transformation over time, neuroplasticity, scientific self-correction, and technological evolution.",
          why: "Rapid technological evolution reducing temporal validity directly engages **Change**.",
        },
        {
          concept: "Measurement",
          prompt: `${researcher} operationalizes adolescent social-media exposure (N = ${n}) purely as 'total daily hours', lumping supportive family video calls together with envy-inducing passive scrolling. Which single **FA2027 Core Concept** is most directly weakened?`,
          hint: "Concerns operationalization, construct validity, reliability, and practical vs statistical significance.",
          why: "Conflating active and passive usage inside one crude screen-time total undermines construct validity (**Measurement**).",
        },
        {
          concept: "Perspective",
          prompt: `A textbook chapter insists compulsive smartphone checking among ${n} teens in ${city} is 'nothing more than VTA–NAc dopamine spikes', dismissing SDT psychological needs and local cultural norms. Which single **FA2027 Core Concept** is narrowed by this biological reductionism?`,
          hint: "Calls for triangulating Biological, Cognitive, and Sociocultural explanations alongside emic and etic lenses.",
          why: "Reducing a biopsychosocial phenomenon to neurotransmitters alone narrows **Perspective**.",
        },
        {
          concept: "Responsibility",
          prompt: `A gamified teen revision app in ${city} uses undisclosed variable-ratio mystery chests and midnight streak-loss guilt notifications while selling minors' behavioural logs to advertisers. Which single **FA2027 Core Concept** is most acutely breached?`,
          hint: "Covers research ethics, youth protection, informed consent, privacy, and societal impact of applied psychology.",
          why: "Manipulative dark-pattern design and unconsented exploitation of minors' data breach ethical **Responsibility**.",
        },
      ];

      const tier2Cases: ConceptCase[] = [
        {
          concept: "Bias",
          prompt: `An international EdTech firm validates its growth-mindset chatbot on ${n} English-speaking US pupils, then labels ${region} students 'fixed-mindset' when they prioritize family-endorsed SOAM goals. Identify the primary **FA2027 Core Concept** challenged.`,
          hint: "Notice the imposed-etic WEIRD norm treating non-Western motivation styles as inferior.",
          why: "Applying a WEIRD benchmark as universal exposes cultural and sampling **Bias**.",
        },
        {
          concept: "Causality",
          prompt: `In a ${city} study (N = ${n}) modelled on Ophir et al. (2009), Heavy Media Multitaskers score lower on working-memory filtering than Light Media Multitaskers, yet participants were grouped by existing habits rather than randomly allocated. Which **FA2027 Core Concept** limits the conclusion?`,
          hint: "Pre-existing quasi-experimental groups allow self-selection / reverse directionality.",
          why: "Without random allocation, self-selection and bidirectional links restrict **Causality** claims.",
        },
        {
          concept: "Change",
          prompt: `After Camerer et al. (2018) failed to replicate Sparrow et al.'s (2011) Study 1 priming effect across ${n} multi-lab trials, researchers updated textbook claims about the 'Google effect'. Which **FA2027 Core Concept** does this scientific self-correction exemplify?`,
          hint: "Psychology itself evolves as replication evidence refines earlier models.",
          why: "Revising theories in light of multi-lab replications illustrates scientific **Change**.",
        },
        {
          concept: "Measurement",
          prompt: `In a survey of ${big(n * 100)} adolescents across ${city} and London, screen time correlates with mood at r = −0.05 (p < 0.001, explaining only 0.25% variance). Distinguishing statistical significance from tiny practical effect size primarily tests which **FA2027 Core Concept**?`,
          hint: "Focuses on how constructs are quantified, scaled, and interpreted via effect size.",
          why: "Evaluating variance explained (R² = 0.25%) vs p-values in huge datasets centres on **Measurement**.",
        },
        {
          concept: "Perspective",
          prompt: `To understand why ${n} bilingual students in ${city} persist on collaborative app quests, ${researcher} combines VTA–NAc dopamine theory, Deci & Ryan's SDT, and Hong et al.'s bicultural frame-switching. Which **FA2027 Core Concept** does this multi-approach triangulation exemplify?`,
          hint: "Integrating Biological, Cognitive, and Sociocultural viewpoints avoids single-level reductionism.",
          why: "Synthesizing Biological, Cognitive, and Sociocultural lenses exemplifies **Perspective**.",
        },
        {
          concept: "Responsibility",
          prompt: `An underfunded district cuts tutoring for ${n} lower-SES pupils and runs one 'growth mindset' pep talk instead, implying poor grades reflect insufficient effort despite Sisk et al. (2018). Which **FA2027 Core Concept** critiques individualizing structural barriers?`,
          hint: "Addresses the societal and ethical consequences of misapplying psychological findings.",
          why: "Blaming disadvantaged students while cutting material support raises an acute ethical **Responsibility** critique.",
        },
      ];

      const tier3Cases: ConceptCase[] = [
        {
          concept: "Measurement",
          prompt: `Paper 3 extract: ${researcher} compares Likert collectivism ratings (1–7) across ${n} youths in ${city} and Zurich; both score 5.1/7 despite divergent observed choices because each group benchmarks against local peers (Heine et al., 2002). Name the primary **FA2027 Core Concept** threatened by this reference-group artefact.`,
          hint: "Self-report scales lose cross-cultural equivalence when respondents use different mental anchors.",
          why: "Reference-group anchoring directly compromises cross-cultural construct validity (**Measurement**).",
        },
        {
          concept: "Bias",
          prompt: `Paper 3 extract: An archival dataset of ${big(n * 10)} teen surveys allows 40,000 analytical combinations, yet the authors publish only the single pairing showing r = −0.18 while ignoring Orben-style specification curves. Which **FA2027 Core Concept** is violated by this selective cherry-picking?`,
          hint: "Selecting only hypothesis-confirming statistical specifications distorts objective inquiry.",
          why: "Cherry-picking analytical specifications from huge datasets exemplifies researcher confirmation **Bias**.",
        },
        {
          concept: "Causality",
          prompt: `Paper 3 extract: Across 3 waves in ${city} (N = ${n}), baseline loneliness predicts greater passive scrolling at Month 6, AND passive scrolling at Month 6 predicts higher loneliness at Month 12. Diagnosing this reciprocal loop primarily engages which **FA2027 Core Concept**?`,
          hint: "Identifying unidirectional vs bidirectional pathways over longitudinal waves.",
          why: "Untangling reciprocal longitudinal pathways directly engages **Causality**.",
        },
        {
          concept: "Change",
          prompt: `Paper 3 extract: Longitudinal fMRI in ${city} (N = ${n}) tracks bilingual migrants over 36 months as mPFC self–mother overlap shifts alongside bicultural integration and daily digital immersion. Which **FA2027 Core Concept** captures this neuroplastic and acculturative plasticity?`,
          hint: "Encompasses neuroplasticity, developmental trajectories, and cultural adaptation over time.",
          why: "Tracking neural and cultural plasticity over 36 months exemplifies **Change**.",
        },
        {
          concept: "Perspective",
          prompt: `Paper 3 extract: A clinical report in ${region} (N = ${n}) pairs indigenous emic healer interviews with standardized derived-etic symptom inventories so Western diagnostic labels do not silence local meaning. Which **FA2027 Core Concept** guides this insider–outsider balance?`,
          hint: "Balancing emic insider viewpoints with etic scientific frameworks.",
          why: "Integrating emic insider voices alongside derived-etic science exemplifies **Perspective**.",
        },
        {
          concept: "Responsibility",
          prompt: `Paper 3 extract: A startup pilots an unvalidated AI crisis-counselling bot on ${n} vulnerable teens in ${city} without parental assent, human escalation protocols, or non-WEIRD safety audits. Which **FA2027 Core Concept** is most critically breached?`,
          hint: "Protecting vulnerable minors from foreseeable clinical and privacy harm.",
          why: "Deploying unvalidated AI to vulnerable minors without safeguards breaches ethical **Responsibility**.",
        },
      ];

      const pool = tier === 1 ? tier1Cases : tier === 2 ? tier2Cases : tier3Cases;
      const chosen = rng.pick(pool);
      return {
        prompt: chosen.prompt,
        answer: {
          type: "text",
          accept: [chosen.concept, chosen.concept.toLowerCase()],
          display: chosen.concept,
        },
        hint: chosen.hint,
        solution: [chosen.why],
      };
    },
  },
];
