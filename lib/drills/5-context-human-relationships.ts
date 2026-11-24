import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, gcd, num, roundTo } from "./helpers.ts";

const NAMES = [
  "Amina", "Callum", "Priya", "Mateo", "Hannah", "Kenji",
  "Zara", "Liam", "Nadia", "Rohan", "Mei", "Daniel",
  "Sofia", "Tarek",
];

const COUPLE_PAIRS: ReadonlyArray<[string, string]> = [
  ["Maya", "Liam"],
  ["Priya", "Noah"],
  ["Elena", "Samir"],
  ["Chloe", "Kenji"],
  ["Zara", "Daniel"],
  ["Nadia", "Marcus"],
  ["Sofia", "Rohan"],
  ["Hannah", "Tarek"],
  ["Amina", "Callum"],
  ["Mei", "Mateo"],
];

const GROUP_PAIRS: ReadonlyArray<[string, string]> = [
  ["Eagles", "Rattlers"],
  ["Falcons", "Wolves"],
  ["North Campus", "South Campus"],
  ["Amber House", "Cobalt House"],
  ["Design Team", "Operations Team"],
  ["River Ward", "Hillside Ward"],
  ["Orchestra", "Athletics Club"],
  ["Alpha Cohort", "Beta Cohort"],
];

const SETTINGS = [
  "a university residential hall",
  "a multicultural secondary school",
  "a regional community sports league",
  "a merged technology company",
  "a city hospital volunteer programme",
  "an international summer camp",
];

// ============================================================================
// DRILL 1: Attraction Mechanisms & Biopsychosocial Cues (Section 1)
// ============================================================================
const attractionClassifier: Drill = {
  id: "5-context-human-relationships.attraction-classifier",
  topicId: "5-context-human-relationships",
  title: "Attraction Mechanisms & Proximity Math",
  level: 1,
  ibLevel: "SL",
  guideRef: "attraction-biological-cognitive-social",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const name1 = rng.pick(NAMES);
    const others = NAMES.filter((n) => n !== name1);
    const name2 = rng.pick(others);
    const setting = rng.pick(SETTINGS);

    if (tier === 1) {
      const kind = rng.int(0, 5);
      if (kind === 0) {
        const place = rng.pick(["mailbox alcove", "main stairwell", "corridor coffee station", "shared laundry room"]);
        return {
          prompt: `In ${setting}, ${name1} and ${name2} become close friends largely because their daily routines cross repeatedly at the ${place}. Name the sociocultural attraction factor demonstrated by Festinger, Schachter & Back (1950).`,
          answer: {
            type: "text",
            accept: ["proximity", "functional proximity", "functional distance", "propinquity"],
            display: "Functional proximity",
          },
          hint: "Think about physical/architectural closeness creating frequent unplanned encounters.",
          solution: [
            "Repeated unplanned meetings caused by shared pathways reflect **functional proximity** (Festinger, Schachter & Back, 1950).",
          ],
        };
      }
      if (kind === 1) {
        const weeks = rng.int(3, 12);
        return {
          prompt: `Over ${weeks} weeks in ${setting}, ${name1} repeatedly sees ${name2} at neutral weekly meetings without speaking much at first, yet gradually rates ${name2} as warmer and more likeable purely from familiarity. Name this psychological effect (Zajonc, 1968).`,
          answer: {
            type: "text",
            accept: ["mere exposure", "mere exposure effect", "familiarity principle"],
            display: "Mere exposure effect",
          },
          hint: "Zajonc showed repeated neutral familiarity alone increases liking.",
          solution: [
            "Liking increasing solely through repeated neutral familiarity is Zajonc's (1968) **mere exposure effect**.",
          ],
        };
      }
      if (kind === 2) {
        const topic = rng.pick(["environmental ethics", "music genres", "civic volunteering", "study habits", "family values"]);
        return {
          prompt: `At ${setting}, ${name1} feels an instant bond with ${name2} after discovering they share matching attitudes toward ${topic}, providing consensual validation and cognitive consistency. Name this cognitive attraction principle (Byrne, 1971; Montoya et al., 2008).`,
          answer: {
            type: "text",
            accept: [
              "similarity-attraction",
              "similarity attraction",
              "similarity-attraction effect",
              "similarity attraction effect",
              "similarity",
              "perceived similarity",
            ],
            display: "Similarity–attraction effect",
          },
          hint: "Shared attitudes and values reward cognitive consistency.",
          solution: [
            "Attraction driven by shared attitudes and consensual validation is the **similarity–attraction effect** (Byrne, 1971; Montoya et al., 2008).",
          ],
        };
      }
      if (kind === 3) {
        return {
          prompt: `Although ${name1} admires the most conventionally glamorous person at ${setting}, ${name1} ultimately asks out ${name2}, who appears comparable in social and physical desirability to minimise rejection risk. Name this cognitive attraction hypothesis (Murstein, 1972; Feingold, 1988).`,
          answer: {
            type: "text",
            accept: ["matching hypothesis", "the matching hypothesis", "matching"],
            display: "Matching hypothesis",
          },
          hint: "People pair at broadly comparable levels of desirability when rejection risk exists.",
          solution: [
            "Balancing ideal desirability against likelihood of reciprocation describes the **matching hypothesis** (Walster, Murstein, Feingold).",
          ],
        };
      }
      if (kind === 4) {
        const sampleN = rng.int(35, 80);
        return {
          prompt: `In a replication of Wedekind et al. (1995) with ${sampleN} volunteers, female participants not using hormonal contraception prefer the body odour of men carrying **dissimilar** immune-system genes. State the 3-letter name of this gene complex.`,
          answer: {
            type: "text",
            accept: ["mhc", "major histocompatibility complex"],
            display: "MHC",
          },
          hint: "Three letters standing for Major Histocompatibility Complex.",
          solution: [
            "Wedekind et al. (1995) investigated the **Major Histocompatibility Complex (MHC)**.",
          ],
        };
      }
      return {
        prompt: `According to Helen Fisher's neurobiological model and Scheele et al.'s (2012) placebo-controlled distance experiment in partnered men, name the primary bonding hormone that sustains calm long-term pair attachment.`,
        answer: {
          type: "text",
          accept: ["oxytocin", "oxytocin and vasopressin", "vasopressin"],
          display: "Oxytocin",
        },
        hint: "Administered intranasally in Scheele et al. (2012) to test partner faithfulness.",
        solution: [
          "**Oxytocin** (alongside vasopressin) underpins long-term pair-bond attachment in Fisher's model and Scheele et al.'s (2012) experiment.",
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.55)) {
        // Functional proximity multiplier calculation (Festinger-style data)
        const mult = rng.int(2, 6);
        const farPct = rng.int(6, 15);
        const nearPct = clean(farPct * mult);
        const doors = rng.int(3, 6);
        const hall = rng.pick(["Westgate Hall", "Cedar Residences", "Maple Apartments", "Harbour Dormitory", "Oak Block"]);
        return {
          prompt: `In a Festinger-style housing survey at ${hall}, **${nearPct}%** of residents named a next-door neighbour as a close friend compared with **${farPct}%** for residents living ${doors} doors away. How many times more likely was a next-door friendship?`,
          answer: { type: "number", value: mult },
          traps: [
            {
              spec: { type: "number", value: clean(nearPct - farPct) },
              feedback: "That is the percentage-point difference; divide the next-door rate by the far-corridor rate for 'how many times more likely'.",
            },
          ],
          hint: `Divide ${nearPct}% by ${farPct}%.`,
          solution: [
            `Compare the two probabilities by division: {{${nearPct} / ${farPct} = ${mult}}}.`,
            `Next-door neighbours were **${mult} times** as likely to become close friends, reflecting functional proximity.`,
          ],
        };
      }
      // Identify approach (biological / cognitive / sociocultural) across rich studies
      const cases: ReadonlyArray<{ cue: string; approach: "biological" | "cognitive" | "sociocultural"; study: string }> = [
        { cue: `fMRI scans showing ventral tegmental dopamine surges when ${name1} views photos of ${name2}`, approach: "biological", study: "Fisher et al. (2005)" },
        { cue: `double-blind intranasal oxytocin increasing ${name1}'s preferred distance from an attractive stranger`, approach: "biological", study: "Scheele et al. (2012)" },
        { cue: `scent ratings favouring MHC-dissimilar T-shirts among non-contraceptive women at ${setting}`, approach: "biological", study: "Wedekind et al. (1995)" },
        { cue: `comparing ${name1}'s perceived attitude overlap with ${name2} to predict consensual validation`, approach: "cognitive", study: "Montoya et al. (2008)" },
        { cue: `weighing expected rejection risk against ideal attractiveness before ${name1} asks out ${name2}`, approach: "cognitive", study: "Murstein (1972) / Matching Hypothesis" },
        { cue: `comparing arranged-marriage and love-marriage marital scripts across cohorts in Jaipur`, approach: "sociocultural", study: "Gupta & Singh (1982)" },
        { cue: `correlating national gender-equality indices with sex differences in mate-preference surveys across 37 nations`, approach: "sociocultural", study: "Eagly & Wood (1999)" },
        { cue: `mapping shared architectural stairwells and courtyard pathways in ${setting}`, approach: "sociocultural", study: "Festinger et al. (1950)" },
      ];
      const item = rng.pick(cases);
      return {
        prompt: `A researcher studying attraction investigates **${item.cue}**. Which of the three IB Psychology approaches (**Biological**, **Cognitive**, or **Sociocultural**) does this primarily represent?`,
        answer: { type: "text", accept: [item.approach, `${item.approach} approach`], display: item.approach[0].toUpperCase() + item.approach.slice(1) },
        hint: "Decide whether the focus is neurochemistry/genes (Biological), mental appraisal/beliefs (Cognitive), or environment/cultural norms (Sociocultural).",
        solution: [
          `This mechanism belongs primarily to the **${item.approach}** approach (linked to ${item.study}).`,
        ],
      };
    }

    // Tier 3: Analytical quantitative comparison or exact methodological critique
    if (rng.bool(0.6)) {
      // Percentage increase from far corridor to next-door (clean integer %)
      const farPct = rng.pick([10, 12, 15, 16, 20, 25]);
      const addMult = rng.pick([1.5, 2, 2.5, 3, 3.5, 4]);
      const nearPct = clean(farPct * addMult);
      const pctIncrease = clean(((nearPct - farPct) / farPct) * 100);
      const hall = rng.pick(["North Quad", "Bayview Flats", "Campus Wing B", "Stirling Hall", "Greenway House"]);
      return {
        prompt: `At ${hall}, friendship rates rose from **${farPct}%** (four doors away) to **${nearPct}%** (next door). Calculate the **percentage increase** in friendship likelihood from four doors away to next door.`,
        answer: { type: "number", value: pctIncrease, display: `${pctIncrease}%` },
        traps: [
          {
            spec: { type: "number", value: clean(nearPct - farPct) },
            feedback: "That is the percentage-point difference; divide the increase by the starting rate (four doors away) and multiply by 100.",
          },
        ],
        hint: `Compute {{((${nearPct} - ${farPct}) / ${farPct}) * 100}}.`,
        solution: [
          `Increase in percentage points: {{${nearPct} - ${farPct} = ${clean(nearPct - farPct)}}}.`,
          `Percentage increase relative to the ${farPct}% baseline: {{(${clean(nearPct - farPct)} / ${farPct}) * 100 = ${pctIncrease}%}}.`,
        ],
      };
    }

    const critiqueCases: ReadonlyArray<{ prompt: string; accept: string[]; display: string; sol: string; hint: string }> = [
      {
        prompt: `A team in ${setting} compares 1-year, 5-year, and 10-year couples on one afternoon (replicating Gupta & Singh, 1982) and claims love grows automatically with marriage duration. Name the **research design** they used that confounds age/duration with cohort effects.`,
        accept: ["cross-sectional", "cross sectional", "cross-sectional design", "cross sectional design"],
        display: "Cross-sectional design",
        hint: "The opposite of a longitudinal design tracking the same couples over time.",
        sol: "Comparing separate groups at a single time point is a **cross-sectional** design, which cannot separate true longitudinal Change from cohort and survivorship bias.",
      },
      {
        prompt: `A researcher administers an unmodified US romantic-passion questionnaire to couples in rural Kenya and rural Japan to rank which society 'loves more'. Name the two-word cultural measurement error (**imposed ____** or **____ bias**) committed by exporting one culture's construct as universal.`,
        accept: ["imposed etic", "etic", "etic bias", "imposed etic bias", "cultural bias"],
        display: "Imposed etic",
        hint: "Contrast insider (*emic*) with assumed-universal outsider (*etic*).",
        sol: "Exporting a culture-specific Western instrument as a universal yardstick is an **imposed etic** bias.",
      },
      {
        prompt: `In a replication of Wedekind et al. (1995) at ${setting}, researchers forget to ask female participants whether they use oral contraceptives. In experimental methodology, what specific type of uncontrolled variable does hormonal contraception represent when it reverses the DV?`,
        accept: ["confounding", "confounding variable", "extraneous", "extraneous variable", "moderator", "moderating variable"],
        display: "Confounding variable",
        hint: "An uncontrolled factor that systematically distorts the relationship between IV (MHC) and DV (scent rating).",
        sol: "Because oral contraceptive use systematically reverses MHC odour preference, leaving it uncontrolled creates a **confounding variable** (or unmeasured moderator).",
      },
    ];
    const c = rng.pick(critiqueCases);
    return {
      prompt: c.prompt,
      answer: { type: "text", accept: c.accept, display: c.display },
      hint: c.hint,
      solution: [c.sol],
    };
  },
};

// ============================================================================
// DRILL 2: Gottman 5:1 Ratio, Four Horsemen, Rusbult & Duck (Section 2)
// ============================================================================
const gottmanRusbultDuck: Drill = {
  id: "5-context-human-relationships.gottman-rusbult-duck",
  topicId: "5-context-human-relationships",
  title: "Gottman 5:1 Ratio, Rusbult & Dissolution Lab",
  level: 1,
  ibLevel: "SL",
  guideRef: "maintenance-communication-breakdown",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const [p1, p2] = rng.pick(COUPLE_PAIRS);
    const topic = rng.pick(["finances", "chores", "holiday plans", "work hours", "family visits", "parenting routines"]);

    if (tier === 1) {
      if (rng.bool(0.5)) {
        // Simplify Gottman P : N ratio
        const k = rng.int(2, 6);
        const [a, b] = rng.pick<[number, number]>([
          [5, 1], [6, 1], [4, 1], [3, 1], [2, 1], [3, 2], [5, 2], [4, 3], [7, 2], [1, 2],
        ]);
        const pos = a * k;
        const neg = b * k;
        const g = gcd(pos, neg);
        const sa = pos / g;
        const sb = neg / g;
        return {
          prompt: `During a 15-minute coded discussion about ${topic}, ${p1} and ${p2} display **${pos} positive** and **${neg} negative** interactions. Write their positive-to-negative ratio in simplest form (e.g. a : b).`,
          answer: { type: "ratio", parts: [sa, sb], simplest: true },
          traps: sa !== sb
            ? [
                {
                  spec: { type: "ratio", parts: [sb, sa], simplest: true },
                  feedback: "Keep the asked order: positive : negative.",
                },
              ]
            : undefined,
          hint: `Divide both ${pos} and ${neg} by their greatest common factor (${g}).`,
          solution: [
            `Raw ratio positive : negative = {{${pos} : ${neg}}}.`,
            `Divide both parts by ${g} to simplify: **${sa} : ${sb}** (${sa / sb >= 5 ? "meets" : "falls below"} Gottman's 5 : 1 conflict benchmark).`,
          ],
        };
      }
      // Classify Four Horsemen or Duck's 4 phases
      const items: ReadonlyArray<{ prompt: string; accept: string[]; display: string; hint: string; sol: string }> = [
        {
          prompt: `Arguing over ${topic}, ${p1} says to ${p2}, "You are fundamentally selfish and never care about anyone else." Identify which of Gottman's Four Horsemen this character attack illustrates.`,
          accept: ["criticism"],
          display: "Criticism",
          hint: "Attacking global personality/character rather than a specific behaviour (CCDS).",
          sol: "Attacking global character ('fundamentally selfish') rather than voicing a specific complaint is **criticism**.",
        },
        {
          prompt: `During a disagreement about ${topic}, ${p1} rolls their eyes, scoffs, and mocks ${p2}: "Honestly, it's embarrassing trying to explain simple logic to you." Identify this Horseman (Gottman's strongest divorce predictor).`,
          accept: ["contempt"],
          display: "Contempt",
          hint: "Mockery, sarcasm, eye-rolling, and moral superiority (CCDS).",
          sol: "Sarcasm, mockery, and eye-rolling convey superiority — **contempt**, the single strongest predictor of divorce.",
        },
        {
          prompt: `When ${p1} calmly raises a concern about ${topic}, ${p2} snaps back, "Don't blame me — you're the one who forgets everything and never helps!" Identify which of Gottman's Four Horsemen ${p2} shows.`,
          accept: ["defensiveness", "defensive"],
          display: "Defensiveness",
          hint: "Warding off perceived blame via counter-attack and playing the victim.",
          sol: "Deflecting accountability through excuses and counter-attack defines **defensiveness**.",
        },
        {
          prompt: `Midway through an argument over ${topic}, ${p2}'s heart rate spikes; ${p2} crosses their arms, looks away, and shuts down silently without responding. Identify this Horseman.`,
          accept: ["stonewalling", "stone-walling", "stone walling"],
          display: "Stonewalling",
          hint: "Emotional and verbal withdrawal during physiological flooding.",
          sol: "Shutting down emotionally and refusing to interact during arousal flooding is **stonewalling**.",
        },
        {
          prompt: `For months, ${p1} quietly broods about dissatisfaction over ${topic} and weighs leaving without telling ${p2} yet. Identify which phase of Duck's dissolution model ${p1} is in.`,
          accept: ["intrapsychic", "intrapsychic phase", "intra-psychic"],
          display: "Intrapsychic phase",
          hint: "First phase of I-D-S-G: completely private internal reflection.",
          sol: "Private rumination before confronting the partner is Duck's **intrapsychic phase**.",
        },
        {
          prompt: `${p1} sits down directly with ${p2} to confront ongoing resentment over ${topic} and debate whether they can repair their bond. Identify this phase in Duck's dissolution model.`,
          accept: ["dyadic", "dyadic phase"],
          display: "Dyadic phase",
          hint: "Second phase of I-D-S-G: direct talk between the two partners.",
          sol: "Direct partner confrontation and negotiation define Duck's **dyadic phase**.",
        },
        {
          prompt: `After deciding to split with ${p2}, ${p1} phones relatives and mutual friends to announce the breakup and seek allies. Identify this phase in Duck's dissolution model.`,
          accept: ["social", "social phase"],
          display: "Social phase",
          hint: "Third phase of I-D-S-G: going public to wider networks.",
          sol: "Making the breakup public and reorganising social networks defines Duck's **social phase**.",
        },
        {
          prompt: `Months after separating from ${p2}, ${p1} crafts a calm, face-saving story explaining to peers why they grew apart so both can move on cleanly. Identify this phase in Duck's dissolution model.`,
          accept: ["grave-dressing", "grave dressing", "grave-dressing phase", "grave dressing phase", "gravedressing"],
          display: "Grave-dressing phase",
          hint: "Fourth phase of I-D-S-G: creating a public closure narrative.",
          sol: "Constructing a coherent, face-saving post-breakup account is Duck's **grave-dressing phase**.",
        },
      ];
      const chosen = rng.pick(items);
      return {
        prompt: chosen.prompt,
        answer: { type: "text", accept: chosen.accept, display: chosen.display },
        hint: chosen.hint,
        solution: [chosen.sol],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        // Minimum positive interactions for Gottman 5:1
        const neg = rng.int(2, 16);
        const minPos = 5 * neg;
        return {
          prompt: `During a Love Lab discussion about ${topic}, ${p1} and ${p2} record **${neg} negative interactions**. What is the **minimum number of positive interactions** needed to satisfy Gottman's 5 : 1 stability threshold?`,
          answer: { type: "number", value: minPos },
          traps: [
            {
              spec: { type: "number", value: neg + 5 },
              feedback: "5 : 1 is a multiplicative ratio ({{5 * N}}), not adding 5.",
            },
          ],
          hint: `Multiply the negative count (${neg}) by 5.`,
          solution: [
            `Gottman's stability rule requires {{P / N >= 5}}.`,
            `With {{N = ${neg}}}, minimum positive interactions = {{5 * ${neg} = ${minPos}}}.`,
          ],
        };
      }
      // Rusbult Commitment index C = S - A + I
      const S = rng.int(2, 10);
      const A = rng.int(1, 9);
      const I = rng.int(Math.max(2, A - S + 2), 10);
      const C = S - A + I;
      return {
        prompt: `Using Rusbult's Investment Model index {{C = S - A + I}}, calculate ${p1}'s commitment score {{C}} when Satisfaction {{S = ${S}}}, Quality of Alternatives {{A = ${A}}}, and Investment Size {{I = ${I}}}.`,
        answer: { type: "number", value: C },
        traps: [
          {
            spec: { type: "number", value: S + A + I },
            feedback: "Subtract Alternatives ({{A}}), because attractive alternatives pull a partner away from commitment.",
          },
        ],
        hint: `Compute {{${S} - ${A} + ${I}}}.`,
        solution: [
          `Substitute into {{C = S - A + I}}: {{C = ${S} - ${A} + ${I}}}.`,
          `Commitment score {{C = ${C}}}.`,
        ],
      };
    }

    // Tier 3: Multi-step Gottman rebalance OR Rusbult inverse solve
    if (rng.bool(0.55)) {
      const neg = rng.int(4, 12);
      const target = 5 * neg;
      const currentPos = rng.int(Math.max(3, Math.floor(neg * 1.2)), target - 3);
      const addNeeded = target - currentPos;
      return {
        prompt: `Midway through conflict coaching on ${topic}, ${p1} and ${p2} have **${currentPos} positive** and **${neg} negative** interactions. If negative interactions stay at ${neg}, how many **additional positive interactions** must they add to reach Gottman's 5 : 1 benchmark?`,
        answer: { type: "number", value: addNeeded },
        traps: [
          {
            spec: { type: "number", value: target },
            feedback: `${target} is the *total* positive interactions required; subtract the ${currentPos} they already have.`,
          },
        ],
        hint: `First find total positives needed ({{5 * ${neg} = ${target}}}), then subtract ${currentPos}.`,
        solution: [
          `Total positive interactions required for 5 : 1 with ${neg} negatives = {{5 * ${neg} = ${target}}}.`,
          `Additional positives needed = {{${target} - ${currentPos} = ${addNeeded}}}.`,
        ],
      };
    }

    // Rusbult inverse solve for A or I
    const S = rng.int(3, 9);
    const A = rng.int(1, 8);
    const I = rng.int(3, 10);
    const C = S - A + I;
    if (rng.bool(0.5)) {
      return {
        prompt: `In Rusbult's model ({{C = S - A + I}}), ${p1} has Commitment {{C = ${C}}}, Satisfaction {{S = ${S}}}, and Quality of Alternatives {{A = ${A}}}. Solve for ${p1}'s Investment Size {{I}}.`,
        answer: { type: "number", value: I },
        hint: `Rearrange {{C = S - A + I}} to {{I = C - S + A}}.`,
        solution: [
          `Rearrange: {{I = C - S + A}}.`,
          `Substitute: {{I = ${C} - ${S} + ${A} = ${I}}}.`,
        ],
      };
    }
    return {
      prompt: `In Rusbult's model ({{C = S - A + I}}), ${p2} has Commitment {{C = ${C}}}, Satisfaction {{S = ${S}}}, and Investment Size {{I = ${I}}}. Solve for ${p2}'s perceived Quality of Alternatives {{A}}.`,
      answer: { type: "number", value: A },
      hint: `Rearrange {{C = S - A + I}} to {{A = S + I - C}}.`,
      solution: [
        `Rearrange: {{A = S + I - C}}.`,
        `Substitute: {{A = ${S} + ${I} - ${C} = ${A}}}.`,
      ],
    };
  },
};

// ============================================================================
// DRILL 3: Hamilton's Rule (rB > C) & Bystander Mathematics (Section 3)
// ============================================================================
const hamiltonBystanderMath: Drill = {
  id: "5-context-human-relationships.hamilton-bystander-math",
  topicId: "5-context-human-relationships",
  title: "Hamilton's Rule (rB > C) & Bystander Math",
  level: 2,
  ibLevel: "SL",
  guideRef: "prosocial-bystander-altruism",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const actor = rng.pick(NAMES);

    if (tier === 1) {
      if (rng.bool(0.65)) {
        const kin = rng.pick([
          { label: "full sibling", r: 0.5, bPool: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12] },
          { label: "biological parent", r: 0.5, bPool: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
          { label: "half-sibling", r: 0.25, bPool: [2, 4, 6, 8, 10, 12, 14, 16] },
          { label: "grandparent", r: 0.25, bPool: [2, 4, 6, 8, 10, 12, 16] },
          { label: "biological aunt", r: 0.25, bPool: [4, 6, 8, 10, 12, 14] },
          { label: "first cousin", r: 0.125, bPool: [4, 8, 12, 16, 20, 24] },
        ]);
        const B = rng.pick(kin.bPool);
        const rB = clean(kin.r * B);
        return {
          prompt: `Using Hamilton's rule ({{rB > C}}), ${actor} helps one **${kin.label}** who gains {{B = ${B}}} fitness units. Calculate the indirect fitness gain {{rB}}.`,
          answer: { type: "number", value: rB },
          hint: `Recall relatedness for a ${kin.label}: {{r = ${kin.r}}}, then multiply {{${kin.r} * ${B}}}.`,
          solution: [
            `A ${kin.label} has genetic relatedness {{r = ${kin.r}}}.`,
            `Multiply relatedness by benefit: {{rB = ${kin.r} * ${B} = ${num(rB)}}} units.`,
          ],
        };
      }
      // Diffusion of responsibility equal share 100 / N
      const N = rng.pick([2, 4, 5, 8, 10, 16, 20, 25, 40, 50]);
      const share = clean(100 / N);
      const place = rng.pick(["a metro carriage", "a campus courtyard", "a lecture hall", "a busy library", "a shopping plaza"]);
      return {
        prompt: `In an equal-share diffusion of responsibility model ({{R = 1 / N}}), **${N} passive witnesses** observe an emergency in ${place}. What **percentage** of responsibility falls on each individual witness?`,
        answer: { type: "number", value: share, tolerance: 0.05, display: `${num(share)}%` },
        traps: [
          {
            spec: { type: "number", value: clean(1 / N) },
            feedback: "Convert the decimal proportion into a percentage by multiplying by 100.",
          },
        ],
        hint: `Divide 100% by ${N}.`,
        solution: [
          `Split 100% evenly across {{N = ${N}}} witnesses: {{100 / ${N} = ${num(share)}%}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        // Solve rB = C for break-even B
        const kin = rng.pick([
          { label: "full sibling", r: 0.5, cPool: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] },
          { label: "half-sibling", r: 0.25, cPool: [0.5, 1, 1.5, 2, 2.5, 3, 3.5] },
          { label: "grandparent", r: 0.25, cPool: [0.75, 1, 1.25, 1.5, 2, 2.5] },
          { label: "first cousin", r: 0.125, cPool: [0.5, 0.75, 1, 1.25, 1.5, 2] },
        ]);
        const C = rng.pick(kin.cPool);
        const B = clean(C / kin.r);
        return {
          prompt: `${actor} faces a personal cost of {{C = ${num(C)}}} fitness units to assist one **${kin.label}**. According to Hamilton's rule, calculate the break-even benefit {{B}} at which {{rB = C}}.`,
          answer: { type: "number", value: B },
          traps: [
            {
              spec: { type: "number", value: clean(C * kin.r) },
              feedback: "Divide cost {{C}} by relatedness {{r}}, rather than multiplying.",
            },
          ],
          hint: `A ${kin.label} has {{r = ${kin.r}}}. Solve {{${kin.r} * B = ${num(C)}}}.`,
          solution: [
            `A ${kin.label} has {{r = ${kin.r}}}. Set {{${kin.r} * B = ${num(C)}}}.`,
            `Divide by {{${kin.r}}}: {{B = ${num(C)} / ${kin.r} = ${num(B)}}} units.`,
          ],
        };
      }
      // Bystander relative percentage drop to 1 d.p.
      const h1 = rng.pick([70, 75, 80, 84, 85, 90, 92, 95]);
      const h2 = rng.int(12, h1 - 20);
      const dropPts = h1 - h2;
      const relDrop = roundTo((dropPts / h1) * 100, 1);
      const nGroup = rng.int(4, 9);
      const scenario = rng.pick(["intercom seizure replication", "smoke-room replication", "fallen-commuter simulation", "dropped-books trial"]);
      return {
        prompt: `In a ${scenario}, helping drops from **${h1}%** (lone witness) to **${h2}%** (group of ${nGroup} witnesses). Calculate the **relative percentage decrease** from the lone baseline, rounded to **1 decimal place**.`,
        answer: { type: "number", value: relDrop, tolerance: 0.15, display: `${num(relDrop)}%` },
        traps: Math.abs(dropPts - relDrop) > 0.5
          ? [
              {
                spec: { type: "number", value: dropPts },
                feedback: `${dropPts} is the percentage-point drop; divide ${dropPts} by the lone baseline (${h1}) and multiply by 100.`,
              },
            ]
          : undefined,
        hint: `Find {{(${h1} - ${h2}) / ${h1} * 100}} and round to 1 decimal place.`,
        solution: [
          `Absolute drop = {{${h1} - ${h2} = ${dropPts}}} percentage points.`,
          `Relative decrease = {{(${dropPts} / ${h1}) * 100 ≈ ${num(relDrop)}%}}.`,
        ],
      };
    }

    // Tier 3: Multi-relative Hamilton's Rule sum OR Piliavin comparative trials
    if (rng.bool(0.65)) {
      const nFull = rng.int(1, 2);
      const bFull = rng.pick([2, 3, 4, 5, 6]);
      const nHalf = rng.int(1, 3);
      const bHalf = rng.pick([2, 4, 6]);
      const nCousin = rng.pick([2, 4]);
      const bCousin = rng.pick([2, 4, 6]);
      const gFull = clean(nFull * 0.5 * bFull);
      const gHalf = clean(nHalf * 0.25 * bHalf);
      const gCousin = clean(nCousin * 0.125 * bCousin);
      const total = clean(gFull + gHalf + gCousin);
      const fullWord = nFull === 1 ? "1 full sibling" : `${nFull} full siblings`;
      const halfWord = nHalf === 1 ? "1 half-sibling" : `${nHalf} half-siblings`;
      return {
        prompt: `During a crisis, ${actor} rescues **${fullWord}** ({{B = ${bFull}}} each), **${halfWord}** ({{B = ${bHalf}}} each), and **${nCousin} first cousins** ({{B = ${bCousin}}} each). Calculate the **total indirect fitness gain** ({{r_1 B_1 + r_2 B_2 + r_3 B_3}}).`,
        answer: { type: "number", value: total },
        hint: "Use r = 0.5 (full sibling), r = 0.25 (half-sibling), and r = 0.125 (first cousin), multiply each group by count × B, and sum.",
        solution: [
          `Full sibling(s): {{${nFull} * 0.5 * ${bFull} = ${num(gFull)}}}.`,
          `Half-sibling(s): {{${nHalf} * 0.25 * ${bHalf} = ${num(gHalf)}}}.`,
          `First cousins: {{${nCousin} * 0.125 * ${bCousin} = ${num(gCousin)}}}.`,
          `Total indirect fitness gain = {{${num(gFull)} + ${num(gHalf)} + ${num(gCousin)} = ${num(total)}}} units.`,
        ],
      };
    }

    // Piliavin-style trial count -> percentage difference between cane and drunk conditions
    const trials = rng.pick([40, 50, 80, 100]);
    const helpA = rng.int(Math.floor(trials * 0.75), Math.floor(trials * 0.96));
    const helpB = rng.int(Math.floor(trials * 0.3), Math.floor(trials * 0.6));
    const pctA = clean((helpA / trials) * 100);
    const pctB = clean((helpB / trials) * 100);
    const diffPts = clean(pctA - pctB);
    const city = rng.pick(["London", "Singapore", "Toronto", "Sydney", "Berlin", "Tokyo"]);
    return {
      prompt: `In a ${city} subway replication of Piliavin et al. (1969) with **${trials} trials per condition**, an ill victim with a cane is helped in **${helpA}** trials while an intoxicated victim is helped in **${helpB}** trials. By how many **percentage points** is helping higher in the cane condition?`,
      answer: { type: "number", value: diffPts, tolerance: 0.05 },
      traps: trials !== 100
        ? [
            {
              spec: { type: "number", value: helpA - helpB },
              feedback: `Convert raw trial counts out of ${trials} into percentages first.`,
            },
          ]
        : undefined,
      hint: `Convert both counts out of ${trials} into percentages, then subtract.`,
      solution: [
        `Cane condition rate = {{(${helpA} / ${trials}) * 100 = ${num(pctA)}%}}.`,
        `Intoxicated condition rate = {{(${helpB} / ${trials}) * 100 = ${num(pctB)}%}}.`,
        `Difference = {{${num(pctA)} - ${num(pctB)} = ${num(diffPts)}}} percentage points.`,
      ],
    };
  },
};

// ============================================================================
// DRILL 4: Prejudice, Stereotyping & Conflict-Reduction Lab (Section 4)
// ============================================================================
const prejudiceReductionLab: Drill = {
  id: "5-context-human-relationships.prejudice-reduction-lab",
  topicId: "5-context-human-relationships",
  title: "Prejudice Origins, Allport & Illusory Correlation",
  level: 2,
  ibLevel: "SL",
  guideRef: "prejudice-stereotyping-conflict",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const [g1, g2] = rng.pick(GROUP_PAIRS);
    const setting = rng.pick(SETTINGS);
    const person = rng.pick(NAMES);

    if (tier === 1) {
      const items: ReadonlyArray<{ prompt: string; accept: string[]; display: string; hint: string; sol: string }> = [
        {
          prompt: `Participants read descriptions of large group ${g1} and smaller group ${g2}. Although both commit identical 30% rates of unhelpful acts, participants over-recall ${g2}'s negative acts due to shared statistical rarity. Name this cognitive bias (Hamilton & Gifford, 1976).`,
          accept: ["illusory correlation", "illusory correlations", "illusory correlation effect"],
          display: "Illusory correlation",
          hint: "Two rare categories paired together appear falsely associated in memory.",
          sol: "Over-recalling co-occurring rare minority membership and rare negative behaviour creates an **illusory correlation**.",
        },
        {
          prompt: `In ${setting}, ${person} belongs to ${g1} and insists, "Everyone in ${g1} is totally unique, whereas every single person in ${g2} thinks and acts the exact same way." Name this cognitive–social perception bias.`,
          accept: ["out-group homogeneity", "outgroup homogeneity", "out-group homogeneity effect", "outgroup homogeneity effect"],
          display: "Out-group homogeneity effect",
          hint: "Seeing out-group members as interchangeable while seeing rich diversity in one's in-group.",
          sol: "Perceiving all out-group members as alike is the **out-group homogeneity effect**.",
        },
        {
          prompt: `At ${setting}, ${g1} and ${g2} had no prior rivalry until administrators announced a single winner-takes-all cash trophy, sparking rapid hostility and raids. Name the theory (Sherif et al., 1961) explaining conflict from zero-sum resource competition.`,
          accept: ["realistic conflict theory", "realistic group conflict theory", "rct"],
          display: "Realistic Conflict Theory",
          hint: "Sherif's Robbers Cave theory linking scarce resources to intergroup hostility.",
          sol: "Hostility triggered by zero-sum competition for scarce resources is explained by **Realistic Conflict Theory** (Sherif, 1961).",
        },
        {
          prompt: `Before a difficult reasoning test at ${setting}, ${person} is reminded of a negative stereotype about ${g1}'s academic ability; intrusive anxiety consumes working memory and lowers ${person}'s score. Name this phenomenon (Steele & Aronson, 1995).`,
          accept: ["stereotype threat", "stereotyping threat"],
          display: "Stereotype threat",
          hint: "Fear of confirming a negative group stereotype disrupts performance.",
          sol: "Anxiety about confirming a negative in-group stereotype is **stereotype threat** (Steele & Aronson, 1995).",
        },
        {
          prompt: `After shared meals fail to stop hostility between ${g1} and ${g2} at ${setting}, leaders introduce an urgent flood-drainage repair that neither group can complete alone, uniting both groups. Name these shared interdependent objectives (Sherif, 1961).`,
          accept: ["superordinate goals", "superordinate goal"],
          display: "Superordinate goals",
          hint: "Goals valued by both groups that require mutual cooperation to achieve.",
          sol: "Urgent shared tasks requiring interdependence across rival groups are **superordinate goals**.",
        },
        {
          prompt: `In ${setting}, a teacher forms mixed teams from ${g1} and ${g2} where each student receives one unique, essential section of the study unit needed for every teammate's exam success. Name this applied intervention (Aronson, 1978).`,
          accept: ["jigsaw classroom", "jigsaw", "the jigsaw classroom", "jigsaw technique", "jigsaw method"],
          display: "Jigsaw Classroom",
          hint: "Named after a puzzle where every participant holds one indispensable piece.",
          sol: "Dividing essential learning material across diverse interdependent teammates defines **Aronson's Jigsaw Classroom** (1978).",
        },
      ];
      const chosen = rng.pick(items);
      return {
        prompt: chosen.prompt,
        answer: { type: "text", accept: chosen.accept, display: chosen.display },
        hint: chosen.hint,
        solution: [chosen.sol],
      };
    }

    if (tier === 2) {
      // Identify missing Allport Contact Hypothesis condition across rich scenarios
      const cond = rng.int(0, 3);
      if (cond === 0) {
        return {
          prompt: `At ${setting}, ${g1} and ${g2} collaborate toward a shared goal backed by management, but ${g1} members are always assigned executive leadership while ${g2} members are restricted to cleaning and errands. Name the **missing Allport Contact Hypothesis condition**.`,
          answer: { type: "text", accept: ["equal status", "equality of status"], display: "Equal status" },
          hint: "Check E-C-I-S: hierarchy inside the shared task breaks the first condition.",
          solution: [
            "Assigning one group permanently superior roles violates Allport's condition of **equal status**.",
          ],
        };
      }
      if (cond === 1) {
        return {
          prompt: `At ${setting}, ${g1} and ${g2} hold equal rank and work in the same room with leadership backing, yet each group is pursuing completely separate, unrelated targets with no shared objective. Name the **missing Allport Contact Hypothesis condition**.`,
          answer: { type: "text", accept: ["common goals", "common goal", "shared goals", "shared goal"], display: "Common goals" },
          hint: "Check E-C-I-S: both groups need a shared outcome they jointly want to reach.",
          solution: [
            "Working side-by-side without a shared objective violates Allport's condition of **common goals**.",
          ],
        };
      }
      if (cond === 2) {
        return {
          prompt: `At ${setting}, ${g1} and ${g2} have equal status, pursue the same trophy, and have institutional oversight, yet they are pitted against each other in head-to-head rivalry instead of working interdependently. Name the **missing Allport Contact Hypothesis condition**.`,
          answer: {
            type: "text",
            accept: ["intergroup cooperation", "cooperation", "co-operation", "intergroup co-operation"],
            display: "Intergroup cooperation",
          },
          hint: "Check E-C-I-S: rivalry replaces interdependent teamwork.",
          solution: [
            "Competing head-to-head rather than working interdependently violates Allport's condition of **intergroup cooperation**.",
          ],
        };
      }
      return {
        prompt: `At ${setting}, ${g1} and ${g2} work together cooperatively as equals toward a shared project target, yet senior leaders and official policies openly ignore or discourage mixing between them. Name the **missing Allport Contact Hypothesis condition**.`,
        answer: {
          type: "text",
          accept: [
            "institutional support",
            "authority support",
            "support of authorities",
            "support from authorities",
            "support of law or custom",
            "support of authority",
          ],
          display: "Institutional / authority support",
        },
        hint: "Check E-C-I-S: leadership, norms, and policy backing form the fourth condition.",
        solution: [
          "Lack of backing from leaders, norms, or policies violates Allport's fourth condition: **institutional / authority support**.",
        ],
      };
    }

    // Tier 3: Illusory correlation exact proportion parity math (Hamilton & Gifford style)
    const ratioPosToNeg = rng.pick([2, 3, 4, 5]); // e.g., 2:1 (33.3% neg), 3:1 (25% neg), 4:1 (20% neg), 5:1 (16.7% neg)
    const negB = rng.int(3, 10);
    const scaleA = rng.pick([2, 3]); // Group A is 2x or 3x larger than Group B
    const negA = negB * scaleA;
    const posA = negA * ratioPosToNeg;
    const posB = negB * ratioPosToNeg;

    if (rng.bool(0.65)) {
      return {
        prompt: `In a Hamilton & Gifford illusory-correlation study comparing majority **${g1}** and minority **${g2}**, ${g1} has **${posA} positive** and **${negA} negative** statements. ${g2} has **${posB} positive** statements and the **exact same percentage** of negative statements as ${g1}. How many negative statements does ${g2} have?`,
        answer: { type: "number", value: negB },
        traps: [
          {
            spec: { type: "number", value: negA },
            feedback: `${g2} is ${scaleA} times smaller than ${g1}, so giving it ${negA} negative acts would break equal proportions.`,
          },
        ],
        hint: `Find ${g1}'s positive-to-negative ratio ({{${posA} : ${negA} = ${ratioPosToNeg} : 1}}), then divide ${posB} by ${ratioPosToNeg}.`,
        solution: [
          `${g1}'s ratio of positive to negative statements is {{${posA} : ${negA} = ${ratioPosToNeg} : 1}}.`,
          `To preserve the identical negative percentage for ${g2} (${posB} positive), divide by ${ratioPosToNeg}: {{${posB} / ${ratioPosToNeg} = ${negB}}} negative statements.`,
        ],
      };
    }

    // Exact clean negative percentage when ratio is 3:1 (25%) or 4:1 (20%) or 1:1? Use 3:1 -> 25%, 4:1 -> 20%, 7:3 -> 30%, 3:2 -> 40%
    const pctCase = rng.pick([
      { posUnit: 3, negUnit: 1, pct: 25 },
      { posUnit: 4, negUnit: 1, pct: 20 },
      { posUnit: 7, negUnit: 3, pct: 30 },
      { posUnit: 3, negUnit: 2, pct: 40 },
    ]);
    const multB = rng.int(2, 6);
    const multA = multB * rng.pick([2, 3]);
    const pA = pctCase.posUnit * multA;
    const nA = pctCase.negUnit * multA;
    const pB = pctCase.posUnit * multB;
    const nB = pctCase.negUnit * multB;
    return {
      prompt: `In an illusory-correlation test at ${setting}, majority **${g1}** has ${pA} positive and ${nA} negative behaviours, while minority **${g2}** has ${pB} positive and ${nB} negative behaviours. What **exact percentage** of behaviours is negative in **both** groups?`,
      answer: { type: "number", value: pctCase.pct, display: `${pctCase.pct}%` },
      hint: `Divide negative statements by **total** statements (positive + negative) for either group, then multiply by 100.`,
      solution: [
        `${g1}: {{${nA} / (${pA} + ${nA}) * 100 = ${nA} / ${pA + nA} * 100 = ${pctCase.pct}%}}.`,
        `${g2}: {{${nB} / (${pB} + ${nB}) * 100 = ${nB} / ${pB + nB} * 100 = ${pctCase.pct}%}} — identical rates prove any harsher rating of ${g2} is an illusory correlation.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  attractionClassifier,
  gottmanRusbultDuck,
  hamiltonBystanderMath,
  prejudiceReductionLab,
];
