import type { Drill, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const CHILD_NAMES = [
  "Aarav", "Mei", "Liam", "Zara", "Kenji", "Priya", "Noah", "Hana",
  "Sora", "Maya", "Ethan", "Nadia", "Toby", "Ananya", "Lucas", "Chloe",
] as const;

const TEEN_NAMES = [
  "Devon", "Aisha", "Daniel", "Rina", "Mateo", "Siti", "Freya", "Kieran",
  "Wei Ling", "Omar", "Elena", "Rohan", "Yuki", "Tariq", "Grace", "Arjun",
] as const;

const STUDY_THEMES = [
  "executive function",
  "childhood emotional regulation",
  "adolescent identity formation",
  "bilingual literacy growth",
  "socio-emotional resilience",
  "peer empathy development",
  "working-memory maturation",
] as const;

const CULTURES = [
  "USA", "West Germany", "Japan", "Great Britain", "Sweden",
  "Singapore", "Netherlands", "South Korea",
] as const;

const piagetVygotskyClassifier: Drill = {
  id: "4-context-human-development.piaget-vygotsky-classifier",
  topicId: "4-context-human-development",
  title: "Piaget Stages, Schemas & Vygotsky ZPD Classifier",
  level: 1,
  ibLevel: "SL",
  guideRef: "brain-maturation-cognitive-dev",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(CHILD_NAMES);

    if (tier === 1) {
      const kind = rng.int(0, 4);
      if (kind === 0) {
        const pairs: Array<[string, string, string]> = [
          ["dogs", "a goat at a farm", "fluffy dog"],
          ["cats", "a ferret at a pet shop", "long cat"],
          ["birds", "a bat flying at dusk", "night bird"],
          ["cars", "a tram on rails", "long car"],
          ["fish", "a dolphin leaping", "smiling fish"],
          ["balls", "a ripe melon", "green ball"],
        ];
        const [known, seen, label] = rng.pick(pairs);
        const age = rng.int(2, 4);
        return {
          prompt: `${name} (age ${age}) already has a mental schema for ${known}. Upon seeing ${seen} for the first time, ${name} points and calls it a "${label}". Name the Piagetian process of fitting a new stimulus into an existing schema.`,
          answer: { type: "text", accept: ["assimilation", "schema assimilation"], display: "assimilation" },
          traps: [
            {
              spec: { type: "text", accept: ["accommodation", "schema accommodation"] },
              feedback: "Accommodation changes or creates a schema after disequilibrium; fitting the stimulus into an existing schema is assimilation.",
            },
          ],
          hint: "Did the child change their schema, or squeeze the new example into an existing one?",
          solution: [
            `${name} applies an already-formed schema (${known}) to a new object without altering categories.`,
            "Fitting new information into an existing schema is **assimilation**.",
          ],
        };
      }
      if (kind === 1) {
        const pairs: Array<[string, string, string]> = [
          ["fish", "whales breathe air through lungs", "marine mammals"],
          ["four-legged dogs", "horses are ridden and neigh", "horses"],
          ["birds", "bats have fur and nurse pups", "flying mammals"],
          ["round balls", "apples are eaten rather than bounced", "fruits"],
          ["spiders", "insects have six legs rather than eight", "insects"],
        ];
        const [oldCat, fact, newCat] = rng.pick(pairs);
        const age = rng.int(3, 6);
        return {
          prompt: `${name} (age ${age}) initially grouped everything swimming or flying into "${oldCat}". After an adult explains that ${fact}, ${name} creates a distinct category for "${newCat}". Name this Piagetian schema-revision process.`,
          answer: { type: "text", accept: ["accommodation", "schema accommodation"], display: "accommodation" },
          traps: [
            {
              spec: { type: "text", accept: ["assimilation", "schema assimilation"] },
              feedback: "Assimilation keeps the existing schema unchanged; building a new category after disequilibrium is accommodation.",
            },
          ],
          hint: "Disequilibrium pushes the child to modify or construct a new mental category.",
          solution: [
            "New contradictory evidence created cognitive disequilibrium.",
            `Revising mental frameworks to build a distinct "${newCat}" category is **accommodation**.`,
          ],
        };
      }
      if (kind === 2) {
        const tasks = [
          "identical juice poured from a wide beaker into a tall narrow glass still holds the same volume",
          "a ball of clay flattened into a pancake still contains the same amount of clay",
          "six coins spread further apart in a row still equal six coins",
          "two equal ribbons remain the same length even after one is curled into a curve",
        ];
        const task = rng.pick(tasks);
        const age = rng.int(7, 10);
        return {
          prompt: `${name} (age ${age}) correctly explains that ${task}. Name the key concrete-operational cognitive principle ${name} has mastered.`,
          answer: { type: "text", accept: ["conservation", "principle of conservation"], display: "conservation" },
          hint: "Quantity stays the same despite changes in outward appearance.",
          solution: [
            "Recognizing that mass, volume, number, or length remains constant despite visual transformation is **conservation**.",
          ],
        };
      }
      if (kind === 3) {
        const toys = ["a plush bear", "a yellow rattle", "a wooden train", "a ringing music box", "a red rubber ball"];
        const covers = ["under a cloth napkin", "behind a cardboard screen", "beneath a wool blanket"];
        const toy = rng.pick(toys);
        const cover = rng.pick(covers);
        const months = rng.int(9, 13);
        return {
          prompt: `When a researcher hides ${toy} ${cover}, ${months}-month-old ${name} immediately pulls the cover aside to retrieve it rather than acting as though it vanished. Which sensorimotor milestone does ${name} demonstrate?`,
          answer: { type: "text", accept: ["object permanence"], display: "object permanence" },
          hint: "Knowing an item continues to exist even when out of sight.",
          solution: [
            "Actively searching for a hidden object demonstrates **object permanence**.",
          ],
        };
      }
      const scenes = [
        "holds a picture book facing themselves while asking Grandma across the room, 'Look at this dragon!'",
        "nods silently on a voice-only phone call expecting the caller to see their answer",
        "picks their own favourite action figure as a birthday present for their adult uncle",
        "assumes a doll seated opposite a model mountain sees the exact same view they see",
      ];
      const scene = rng.pick(scenes);
      const age = rng.int(3, 5);
      return {
        prompt: `${name} (age ${age}) ${scene}. Name the preoperational limitation Piaget used to describe difficulty adopting another person's perspective.`,
        answer: { type: "text", accept: ["egocentrism", "egocentric", "visual egocentrism"], display: "egocentrism" },
        hint: "In Piaget's framework, this limitation was tested with the Three Mountains task.",
        solution: [
          "Assuming others share one's own visual or mental viewpoint is **egocentrism**.",
        ],
      };
    }

    if (tier === 2) {
      const kind = rng.int(0, 5);
      if (kind === 0) {
        const cues = [
          "explores toys purely by grasping, shaking, and mouthing while beginning to search for hidden rattles",
          "coordinates sensory input with motor reaching and has just started tracking hidden objects behind screens",
        ];
        const months = rng.int(8, 18);
        return {
          prompt: `${name} (${months} months old) ${rng.pick(cues)}. State the exact **Piagetian stage** ${name} is in.`,
          answer: { type: "text", accept: ["sensorimotor", "sensorimotor stage"], display: "sensorimotor" },
          hint: "Piaget's first stage (0–2 years): senses + motor actions.",
          solution: [
            "Learning through sensory perception and motor action from birth to ~2 years defines the **sensorimotor** stage.",
          ],
        };
      }
      if (kind === 1) {
        const cues = [
          "engages in vivid pretend play using a broom as a spaceship yet insists a tall narrow glass holds more water than an identical wide cup",
          "uses rich symbolic language but focuses solely on row length when judging two equal rows of counters",
        ];
        const age = rng.int(3, 6);
        return {
          prompt: `${name} (age ${age}) ${rng.pick(cues)}. State the exact **Piagetian stage** ${name} is in.`,
          answer: { type: "text", accept: ["preoperational", "preoperational stage", "pre-operational", "pre-operational stage"], display: "preoperational" },
          hint: "Piaget's second stage (2–7 years): symbolic thought before logical conservation.",
          solution: [
            "Symbolic play paired with centration and conservation errors characterizes the **preoperational** stage.",
          ],
        };
      }
      if (kind === 2) {
        const cues = [
          "passes conservation of mass and liquid tasks easily and orders sticks by length, yet struggles to debate purely hypothetical legal systems",
          "uses reversible logic with tangible maths blocks accurately but finds abstract algebraic variables difficult without physical examples",
        ];
        const age = rng.int(8, 10);
        return {
          prompt: `${name} (age ${age}) ${rng.pick(cues)}. State the exact **Piagetian stage** ${name} is in.`,
          answer: { type: "text", accept: ["concrete operational", "concrete operational stage"], display: "concrete operational" },
          hint: "Piaget's third stage (7–11 years): logical operations on tangible objects.",
          solution: [
            "Mastering conservation and reversibility for tangible objects while struggling with abstract hypotheses defines the **concrete operational** stage.",
          ],
        };
      }
      if (kind === 3) {
        const cues = [
          "systematically isolates one variable at a time to test what determines a pendulum's swing period",
          "evaluates abstract philosophical hypotheses and constructs logical 'if–then' counterexamples without physical props",
        ];
        const age = rng.int(13, 16);
        return {
          prompt: `${name} (age ${age}) ${rng.pick(cues)}. State the exact **Piagetian stage** ${name} is in.`,
          answer: { type: "text", accept: ["formal operational", "formal operational stage"], display: "formal operational" },
          hint: "Piaget's fourth stage (12+ years): hypothetical-deductive abstract logic.",
          solution: [
            "Systematic variable testing and hypothetical-deductive reasoning define the **formal operational** stage.",
          ],
        };
      }
      if (kind === 4) {
        const skills = [
          "solving two-digit subtraction",
          "tying shoelaces",
          "structuring a persuasive paragraph",
          "reading musical notation",
          "balancing simple chemical equations",
        ];
        const helpers = ["an older sister", "a classroom teacher", "a skilled peer tutor", "a parent"];
        const age = rng.int(6, 13);
        return {
          prompt: `${name} (age ${age}) cannot yet manage ${rng.pick(skills)} alone, but completes the task accurately when guided by ${rng.pick(helpers)}. State the three-letter Vygotskian acronym for this optimal learning gap.`,
          answer: { type: "text", accept: ["zpd", "zone of proximal development"], display: "ZPD" },
          traps: [
            {
              spec: { type: "text", accept: ["scaffolding"] },
              feedback: "Scaffolding is the temporary support provided; the learning gap itself is the Zone of Proximal Development (ZPD).",
            },
          ],
          hint: "Stands for Zone of Proximal Development.",
          solution: [
            "The gap between independent mastery and assisted capability with a More Knowledgeable Other is the **ZPD** (Zone of Proximal Development).",
          ],
        };
      }
      const actions = [
        "breaks a jigsaw puzzle into edge-first steps, gives brief hints, and gradually stops prompting as competence rises",
        "models a geometry diagram step by step and fades verbal prompts over three lessons until independent mastery emerges",
        "offers sentence starters for an essay outline and slowly removes them across the term",
      ];
      const age = rng.int(6, 14);
      return {
        prompt: `Working with ${name} (age ${age}), an instructor ${rng.pick(actions)}. Name this gradually faded Vygotskian support process (Wood, Bruner & Ross, 1976).`,
        answer: { type: "text", accept: ["scaffolding", "cognitive scaffolding"], display: "scaffolding" },
        traps: [
          {
            spec: { type: "text", accept: ["zpd", "zone of proximal development"] },
            feedback: "The ZPD is the learning gap; the temporary, gradually withdrawn instructional support is scaffolding.",
          },
        ],
        hint: "Think of temporary construction framing removed once a building stands independently.",
        solution: [
          "Tailored guidance inside the ZPD that is gradually faded as autonomy grows is **scaffolding**.",
        ],
      };
    }

    // Tier 3: Neurodevelopment, language tools & Piaget critiques
    const kind = rng.int(0, 4);
    if (kind === 0) {
      const contexts = [
        "eliminating unused prefrontal synapses from early childhood through the mid-20s to sharpen processing speed",
        "trimming redundant neural connections after early cortical 'blooming' following a 'use it or lose it' rule",
        "refining overproduced toddler synaptic networks into faster, specialized adult circuits",
      ];
      const ageRange = rng.pick(["ages 3 to 24", "early childhood to age 25", "toddlers through young adulthood"]);
      return {
        prompt: `Structural MRI studies across ${ageRange} show that the brain sharpens efficiency by ${rng.pick(contexts)}. Name this two-word neurodevelopmental sculpting process.`,
        answer: { type: "text", accept: ["synaptic pruning", "pruning"], display: "synaptic pruning" },
        hint: "Follows synaptic 'blooming' (synaptogenesis) and pairs with myelination.",
        solution: [
          "Experience-dependent removal of under-used neural connections is **synaptic pruning**.",
        ],
      };
    }
    if (kind === 1) {
      const settings = [
        "in Chein et al.'s (2011) fMRI driving game when two friends watched",
        "during a peer-observed gambling choice compared with solitary play",
        "when 16-year-olds made risky cycling decisions in front of teammates",
      ];
      return {
        prompt: `Under Casey and Steinberg's dual-systems model, adolescent risk-taking rises ${rng.pick(settings)} because a rapidly maturing subcortical reward structure outpaces prefrontal inhibitory control. Name this two-word limbic reward region.`,
        answer: { type: "text", accept: ["ventral striatum", "striatum", "nucleus accumbens"], display: "ventral striatum" },
        traps: [
          {
            spec: { type: "text", accept: ["prefrontal cortex", "pfc"] },
            feedback: "The prefrontal cortex is the slower-maturing *control* network; the faster-maturing reward hub highlighted by Chein et al. (2011) is the ventral striatum.",
          },
        ],
        hint: "A reward-processing hub in the subcortical limbic/striatal system highlighted in Chein et al. (2011).",
        solution: [
          "Heightened pubertal activation of the **ventral striatum** amplifies immediate peer-reward value faster than prefrontal braking can regulate it.",
        ],
      };
    }
    if (kind === 2) {
      const activities = [
        "assembling a model bridge",
        "solving a multi-step maze",
        "sorting coloured tiles by pattern",
        "tying a tricky knot",
      ];
      const age = rng.int(4, 6);
      return {
        prompt: `While ${rng.pick(activities)}, ${age}-year-old ${name} talks aloud to guide themselves: "Turn the blue corner first, now check the gap." Name the two-word **Vygotskian** term for this self-regulating speech before it becomes silent inner speech.`,
        answer: { type: "text", accept: ["private speech"], display: "private speech" },
        traps: [
          {
            spec: { type: "text", accept: ["egocentric speech"] },
            feedback: "Piaget called self-talk 'egocentric speech'; Vygotsky reframed it positively as self-regulating private speech.",
          },
        ],
        hint: "Vygotsky's progression runs: social speech → ____ speech → inner speech.",
        solution: [
          "Vygotsky called audible self-guiding talk **private speech**, arguing it is an active cultural tool that later internalizes into inner speech.",
        ],
      };
    }
    if (kind === 3) {
      const paradigms = [
        "a tall carrot disappearing behind a windowed screen without showing through the cutout",
        "a rotating drawbridge appearing to pass straight through a hidden wooden block",
        "a toy train reappearing despite a solid barrier placed directly on its track",
      ];
      const months = rng.pick(["3.5", "4", "4.5"]);
      return {
        prompt: `To bypass motor-reaching limits in Piaget's sensorimotor tests, Baillargeon & DeVos (1991) measured ${months}-month-olds' longer gaze at impossible events such as ${rng.pick(paradigms)}. Name this looking-time method (three words, hyphenated or spaced).`,
        answer: { type: "text", accept: ["violation-of-expectation", "violation of expectation", "voe"], display: "violation-of-expectation" },
        hint: "Infants stare longer when an event violates what they expect hidden objects to do.",
        solution: [
          "Measuring longer looking duration at physically impossible events is the **violation-of-expectation** paradigm.",
        ],
      };
    }
    const variants = [
      "replaced Piaget's abstract Three Mountains display with a relatable 'policeman doll' hiding task where 90% of preschoolers succeeded",
      "demonstrated in 1975 that 3.5- to 5-year-olds could coordinate two viewpoints simultaneously when hiding a boy doll from policemen",
    ];
    return {
      prompt: `Name the researcher who ${rng.pick(variants)}, showing Piaget's egocentrism task lacked 'human sense' (**Measurement** validity).`,
      answer: { type: "text", accept: ["hughes", "martin hughes"], display: "Hughes" },
      traps: [
        {
          spec: { type: "text", accept: ["baillargeon", "renee baillargeon"] },
          feedback: "Baillargeon tested infant object permanence via violation-of-expectation; the 1975 policeman-doll study was run by Martin Hughes.",
        },
      ],
      hint: "1975 study popularized by Margaret Donaldson; surname begins with H.",
      solution: [
        "**Martin Hughes (1975)** ran the policeman-doll task, demonstrating far earlier perspective-taking than Piaget's Three Mountains task measured.",
      ],
    };
  },
};

const attachmentProportions: Drill = {
  id: "4-context-human-development.attachment-proportions",
  topicId: "4-context-human-development",
  title: "Strange Situation Attachment & Cross-Cultural Proportions",
  level: 2,
  ibLevel: "SL",
  guideRef: "attachment-caregiving-culture",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const culture = rng.pick(CULTURES);

    if (tier === 1) {
      // Exact clean percentage calculation from infant counts
      const bases = [40, 50, 80, 100, 120, 160, 200];
      const N = rng.pick(bases);
      const cats = [
        { label: "Secure (Type B)", pcts: [55, 60, 62.5, 65, 67.5, 70, 72.5, 75] },
        { label: "Insecure-Avoidant (Type A)", pcts: [10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35] },
        { label: "Insecure-Resistant (Type C)", pcts: [5, 7.5, 10, 12.5, 15, 20, 25, 27.5, 30] },
      ];
      const chosen = rng.pick(cats);
      const validPcts = chosen.pcts.filter((p) => Number.isInteger(clean((N * p) / 100)) && p !== 50);
      const pct = rng.pick(validPcts);
      const count = clean((N * pct) / 100);
      const compPct = clean(100 - pct);
      const ageMo = rng.int(12, 18);

      return {
        prompt: `In a ${culture} Strange Situation study of **${N}** infants (age ${ageMo} months), **${count}** are classified as **${chosen.label}**. Calculate the percentage of the sample classified as ${chosen.label}.`,
        answer: {
          type: "number",
          value: pct,
          tolerance: 0.05,
          display: `${num(pct)}%`,
        },
        traps: [
          {
            spec: { type: "number", value: compPct, tolerance: 0.05 },
            feedback: `${num(compPct)}% is the complement (all other classifications). Divide ${count} directly by ${N} and multiply by 100.`,
          },
        ],
        hint: `Compute {{${count} / ${N} * 100%}}.`,
        solution: [
          `Divide the ${chosen.label} count by total sample size: {{${count} / ${N} = ${clean(count / N)}}}.`,
          `Multiply by 100 to convert to a percentage: **${num(pct)}%**.`,
        ],
      };
    }

    if (tier === 2) {
      // Exact count calculation given sample N and percentage
      const bases = [40, 60, 80, 100, 120, 160, 200, 240];
      const N = rng.pick(bases);
      const profiles = [
        { label: "Secure (Type B)", pcts: [55, 60, 65, 70, 75] },
        { label: "Insecure-Avoidant (Type A)", pcts: [10, 15, 20, 25, 30, 35] },
        { label: "Insecure-Resistant (Type C)", pcts: [5, 10, 15, 20, 25, 27.5] },
      ];
      const prof = rng.pick(profiles);
      const validPcts = prof.pcts.filter((p) => Number.isInteger(clean((N * p) / 100)) && p !== 50);
      const pct = rng.pick(validPcts);
      const count = clean((N * pct) / 100);
      const rest = N - count;
      const year = rng.int(2016, 2025);

      return {
        prompt: `A ${year} ${culture} replication of Ainsworth's Strange Situation observes **${N}** toddlers and reports **${num(pct)}%** as **${prof.label}**. How many participants in this sample were classified as ${prof.label}?`,
        answer: {
          type: "number",
          value: count,
          display: `${count} participants`,
        },
        traps: [
          {
            spec: { type: "number", value: rest },
            feedback: `${rest} is the number of infants in the *other* categories (${N} − ${count}). Calculate ${num(pct)}% of ${N} directly.`,
          },
        ],
        hint: `Convert ${num(pct)}% to a decimal (${clean(pct / 100)}) and multiply by ${N}.`,
        solution: [
          `Convert percentage to decimal: {{${num(pct)}% = ${clean(pct / 100)}}}.`,
          `Multiply by total sample: {{${clean(pct / 100)} * ${N} = ${count}}} participants.`,
        ],
      };
    }

    // Tier 3: Cross-cultural % point comparison OR weighted intra-cultural meta-analytic %
    if (rng.bool(0.5)) {
      const c1 = rng.pick(CULTURES);
      const others = CULTURES.filter((c) => c !== c1);
      const c2 = rng.pick(others);
      const n1 = rng.pick([40, 50, 80, 100, 120, 160, 200]);
      const n2 = rng.pick([40, 50, 80, 100, 120, 160, 200]);
      const valid1 = [55, 60, 65, 70, 75].filter((p) => Number.isInteger(clean((n1 * p) / 100)));
      const p1 = rng.pick(valid1);
      const valid2 = [55, 60, 65, 70, 75].filter((p) => p !== p1 && Number.isInteger(clean((n2 * p) / 100)));
      const p2 = rng.pick(valid2);
      const k1 = clean((n1 * p1) / 100);
      const k2 = clean((n2 * p2) / 100);
      const highName = p1 > p2 ? c1 : c2;
      const lowName = p1 > p2 ? c2 : c1;
      const diff = Math.abs(p1 - p2);
      const rawDiff = Math.abs(k1 - k2);

      return {
        prompt: `In a cross-cultural comparison, a **${c1}** sample classifies **${k1} of ${n1}** infants as Secure (Type B), while a **${c2}** sample classifies **${k2} of ${n2}** infants as Secure. By how many **percentage points** is the Secure share higher in ${highName} than in ${lowName}?`,
        answer: {
          type: "number",
          value: diff,
          display: `${diff}%`,
        },
        traps: rawDiff !== diff && rawDiff > 0
          ? [
              {
                spec: { type: "number", value: rawDiff },
                feedback: `Subtracting raw counts (${k1} vs ${k2}) ignores different sample sizes (${n1} vs ${n2}). Convert both samples to percentages first.`,
              },
            ]
          : undefined,
        hint: `Compute both percentages first: {{${k1} / ${n1} * 100}} and {{${k2} / ${n2} * 100}}, then find their difference.`,
        solution: [
          `${c1} Secure share: {{${k1} / ${n1} * 100 = ${p1}%}}.`,
          `${c2} Secure share: {{${k2} / ${n2} * 100 = ${p2}%}}.`,
          `Difference: {{${Math.max(p1, p2)} - ${Math.min(p1, p2)} = ${diff}}} percentage points.`,
        ],
      };
    }

    // Weighted meta-analytic Secure % across two intra-cultural samples of unequal size
    const pairs: Array<[number, number]> = [
      [40, 160], [60, 140], [50, 150], [80, 120], [100, 300], [60, 240],
    ];
    const [nA, nB] = rng.pick(pairs);
    const total = nA + nB;
    const pA = rng.pick([50, 60, 70, 80]);
    const pB = rng.pick([50, 60, 70, 80].filter((x) => x !== pA));
    const sA = clean((nA * pA) / 100);
    const sB = clean((nB * pB) / 100);
    const weighted = roundTo(((sA + sB) / total) * 100, 1);
    const unweighted = clean((pA + pB) / 2);

    return {
      prompt: `Two intra-cultural ${culture} Strange Situation studies report: Sample 1 (**${nA}** infants) has **${pA}%** Secure; Sample 2 (**${nB}** infants) has **${pB}%** Secure. Calculate the combined **weighted percentage** of Secure infants across all **${total}** infants (to 1 d.p. if needed).`,
      answer: {
        type: "number",
        value: weighted,
        tolerance: 0.05,
        display: `${num(weighted)}%`,
      },
      traps: unweighted !== weighted
        ? [
            {
              spec: { type: "number", value: unweighted, tolerance: 0.05 },
              feedback: `${num(unweighted)}% is the unweighted midpoint of ${pA}% and ${pB}%, ignoring that Sample 2 (${nB}) is larger than Sample 1 (${nA}).`,
            },
          ]
        : undefined,
      hint: `Convert both percentages into infant counts ({{${pA}%}} of ${nA}, {{${pB}%}} of ${nB}), add them, and divide by ${total}.`,
      solution: [
        `Sample 1 Secure count: {{${clean(pA / 100)} * ${nA} = ${sA}}}; Sample 2 Secure count: {{${clean(pB / 100)} * ${nB} = ${sB}}}.`,
        `Combined Secure share: {{(${sA} + ${sB}) / ${total} * 100 = ${num(weighted)}%}}.`,
      ],
    };
  },
};

const marciaIdentityResilience: Drill = {
  id: "4-context-human-development.marcia-identity-resilience",
  topicId: "4-context-human-development",
  title: "Marcia Identity Statuses & Resilience Protective-Factor Matcher",
  level: 2,
  ibLevel: "SL",
  guideRef: "identity-moral-socioemotional",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(TEEN_NAMES);
    const age = rng.int(16, 19);

    if (tier === 1) {
      const domain = rng.pick([
        "career path", "university major", "personal ethical values",
        "community role", "political beliefs", "creative vocation",
      ]);
      const status = rng.int(0, 3);
      if (status === 0) {
        const cue = rng.pick([
          `spent over a year researching, shadowing mentors, and debating options for their ${domain}, and has now firmly chosen a direction they endorse`,
          `actively tested three contrasting paths for their ${domain} before making a confident, self-chosen commitment`,
        ]);
        return {
          prompt: `${name} (age ${age}) ${cue}. State ${name}'s identity status in **Marcia's (1966)** model.`,
          answer: { type: "text", accept: ["achievement", "identity achievement"], display: "identity achievement" },
          traps: [
            {
              spec: { type: "text", accept: ["foreclosure", "identity foreclosure"] },
              feedback: "Foreclosure involves commitment *without* exploration; here the teen actively explored before committing.",
            },
          ],
          hint: "Exploration = High, Commitment = High.",
          solution: [
            "Active exploration of alternatives (High Exploration) followed by a settled choice (High Commitment) defines **Identity Achievement**.",
          ],
        };
      }
      if (status === 1) {
        const cue = rng.pick([
          `is currently shadowing professionals, questioning inherited beliefs, and comparing options for their ${domain}, saying "I'm still exploring and not ready to decide yet"`,
          `actively debates alternatives for their ${domain} every week while deliberately keeping their options open before committing`,
        ]);
        return {
          prompt: `${name} (age ${age}) ${cue}. State ${name}'s identity status in **Marcia's (1966)** model.`,
          answer: { type: "text", accept: ["moratorium", "identity moratorium"], display: "moratorium" },
          traps: [
            {
              spec: { type: "text", accept: ["diffusion", "identity diffusion"] },
              feedback: "Diffusion has *low* exploration; this adolescent is actively investigating alternatives.",
            },
          ],
          hint: "Exploration = High, Commitment = Low.",
          solution: [
            "Active ongoing questioning (High Exploration) without a finalized choice (Low Commitment) defines **Moratorium**.",
          ],
        };
      }
      if (status === 2) {
        const cue = rng.pick([
          `firmly committed early to their parents' preferred ${domain} without ever researching or questioning alternative possibilities`,
          `feels completely settled about following their family's traditional ${domain}, explaining they never saw a reason to look into other options`,
        ]);
        return {
          prompt: `${name} (age ${age}) ${cue}. State ${name}'s identity status in **Marcia's (1966)** model.`,
          answer: { type: "text", accept: ["foreclosure", "identity foreclosure"], display: "foreclosure" },
          traps: [
            {
              spec: { type: "text", accept: ["achievement", "identity achievement"] },
              feedback: "Achievement requires active exploration prior to commitment; adopting an unexamined path is Foreclosure.",
            },
          ],
          hint: "Exploration = Low, Commitment = High.",
          solution: [
            "Firm commitment (High Commitment) adopted without weighing alternatives (Low Exploration) defines **Foreclosure**.",
          ],
        };
      }
      const cue = rng.pick([
        `shrugs whenever asked about their ${domain}, has never investigated any possibilities, and says "I honestly don't care what I end up doing"`,
        `avoids thinking about their ${domain}, has neither explored choices nor made any plans, and feels disengaged from the future`,
      ]);
      return {
        prompt: `${name} (age ${age}) ${cue}. State ${name}'s identity status in **Marcia's (1966)** model.`,
        answer: { type: "text", accept: ["diffusion", "identity diffusion"], display: "identity diffusion" },
        traps: [
          {
            spec: { type: "text", accept: ["moratorium", "identity moratorium"] },
            feedback: "Moratorium involves *active* exploration; neither exploring nor committing defines Identity Diffusion.",
          },
        ],
        hint: "Exploration = Low, Commitment = Low.",
        solution: [
          "Absence of both exploration (Low Exploration) and direction (Low Commitment) defines **Identity Diffusion**.",
        ],
      };
    }

    if (tier === 2) {
      // Werner's Kauai multi-approach resilience protective-factor classifier
      const level = rng.int(0, 2);
      const adversity = rng.pick([
        "chronic household poverty",
        "family conflict and housing instability",
        "early perinatal stress and economic hardship",
        "parental illness and financial strain",
      ]);
      if (level === 0) {
        const factor = rng.pick([
          "an easy, affectionate infant temperament that elicited calm care",
          "robust early physical health and low physiological stress reactivity",
          "calm autonomic recovery after acute stressors and steady sleep rhythms",
          "a naturally adaptable, cheerful temperament from infancy onward",
        ]);
        return {
          prompt: `In a resilience study modelled on Werner's Kauai cohort, ${name} faces ${adversity} yet is buffered by **${factor}**. Classify this protective factor by IB approach (**biological**, **cognitive**, or **sociocultural**).`,
          answer: { type: "text", accept: ["biological", "biological approach"], display: "biological" },
          hint: "Does this protective factor stem from inborn temperament/physiology, beliefs/skills, or social bonds?",
          solution: [
            "Inborn temperament, physical health, and physiological stress reactivity represent **biological** protective factors.",
          ],
        };
      }
      if (level === 1) {
        const factor = rng.pick([
          "a strong internal locus of control—believing personal effort can shape outcomes",
          "high reading comprehension and realistic problem-solving skills",
          "adaptive cognitive appraisal that views setbacks as temporary and solvable",
          "strong metacognitive planning and confidence in solving school problems",
        ]);
        return {
          prompt: `In a resilience study modelled on Werner's Kauai cohort, ${name} faces ${adversity} yet is buffered by **${factor}**. Classify this protective factor by IB approach (**biological**, **cognitive**, or **sociocultural**).`,
          answer: { type: "text", accept: ["cognitive", "cognitive approach"], display: "cognitive" },
          hint: "Focus on beliefs, appraisals, literacy, and problem-solving skills.",
          solution: [
            "Internal locus of control, problem-solving competence, and appraisal beliefs are **cognitive** protective factors.",
          ],
        };
      }
      const factor = rng.pick([
        "a consistent, trusting bond with a supportive grandparent and school teacher",
        "long-term encouragement from a community youth coach and neighbourhood club",
        "warm mentorship from an older sibling and an inclusive school network",
        "at least one reliable, caring adult outside the immediate household",
      ]);
      return {
        prompt: `In a resilience study modelled on Werner's Kauai cohort, ${name} faces ${adversity} yet is buffered by **${factor}**. Classify this protective factor by IB approach (**biological**, **cognitive**, or **sociocultural**).`,
        answer: { type: "text", accept: ["sociocultural", "sociocultural approach"], display: "sociocultural" },
        hint: "Focus on interpersonal mentors, family ties, and community support systems.",
        solution: [
          "Supportive adult bonds, mentors, and community/school networks represent **sociocultural** protective factors.",
        ],
      };
    }

    // Tier 3: Gender theories, Theory of Mind, and Erikson/Marcia synthesis
    const kind = rng.int(0, 3);
    if (kind === 0) {
      const child = rng.pick(CHILD_NAMES);
      const scene = rng.pick([
        "a female firefighter rescuing a cat, yet a week later remembers the firefighter as a man",
        "a boy sewing a quilt, yet days later recalls seeing a girl sewing instead",
        "a male nurse comforting a patient, yet later misremembers him as a male doctor",
        "a woman repairing a car engine, yet later recalls a mechanic who was a man",
      ]);
      const cAge = rng.int(4, 6);
      return {
        prompt: `${child} (age ${cAge}) views an illustration of ${scene}. Name the cognitive theory (Martin & Halverson, 1981) explaining this memory distortion.`,
        answer: { type: "text", accept: ["gender schema theory", "gender schema"], display: "gender schema theory" },
        traps: [
          {
            spec: { type: "text", accept: ["social cognitive theory", "social learning theory"] },
            feedback: "Social Cognitive Theory (Bandura) focuses on modelling and reinforcement; schema-driven memory distortion is predicted by Martin & Halverson's Gender Schema Theory.",
          },
        ],
        hint: "Three-word cognitive theory connecting in-group/out-group schemas to memory reconstruction.",
        solution: [
          "Distorting counter-stereotypical scenes to fit internal gender networks demonstrates **Gender Schema Theory** (Martin & Halverson, 1981).",
        ],
      };
    }
    if (kind === 1) {
      const child = rng.pick(CHILD_NAMES);
      const cue = rng.pick([
        "watches older same-gender peers get praised for playing rugby and teased for ballet, then selectively imitates rugby",
        "observes television heroes rewarded for assertive behaviour and gradually internalizes those gendered standards",
        "notices parents applauding cooperative play in one sibling and competitive sports in another, adjusting behaviour via vicarious reinforcement",
      ]);
      const cAge = rng.int(5, 8);
      return {
        prompt: `${child} (age ${cAge}) ${cue}. Name the three-word theory developed by **Bandura & Bussey (1999)** that explains gender development through observational modelling and social sanctioning.`,
        answer: { type: "text", accept: ["social cognitive theory", "social learning theory"], display: "social cognitive theory" },
        hint: "Bandura's contemporary sociocultural-cognitive model.",
        solution: [
          "Modelling, vicarious reinforcement, and social sanctioning define Bandura & Bussey's **Social Cognitive Theory** of gender development.",
        ],
      };
    }
    if (kind === 2) {
      const child = rng.pick(CHILD_NAMES);
      const task = rng.pick([
        "correctly predicts Sally will search her basket for a moved marble even though the child knows Anne placed it in a box",
        "predicts a classmate who missed the snack swap will expect crayons inside a crayon box now filled with buttons",
        "understands that a sibling who left the room still believes the keys are on the sofa after Mom moved them to a drawer",
      ]);
      const cAge = rng.int(4, 5);
      return {
        prompt: `${child} (age ${cAge}) ${task}. Name the three-word cognitive capacity demonstrated by passing this false-belief task.`,
        answer: { type: "text", accept: ["theory of mind", "tom"], display: "theory of mind" },
        hint: "Abbreviated ToM; tested classically by Baron-Cohen et al. (1985).",
        solution: [
          "Attributing a false belief distinct from reality demonstrates **Theory of Mind**.",
        ],
      };
    }
    const stageCue = rng.pick([
      "integrating personal values, friendships, and vocational goals into a coherent sense of self during adolescence",
      "resolving role uncertainty across beliefs, cultural heritage, and future career choices in Erikson's fifth psychosocial stage",
    ]);
    return {
      prompt: `In Erikson's psychosocial lifespan model, ${name} (age ${age}) is navigating the fifth stage: ${stageCue}. Name this Eriksonian psychosocial crisis (four words: ___ vs ___ ___).`,
      answer: {
        type: "text",
        accept: ["identity vs role confusion", "identity versus role confusion", "identity vs. role confusion"],
        display: "identity vs role confusion",
      },
      hint: "Erikson's adolescent stage operationalized later by Marcia (1966).",
      solution: [
        "Erikson's fifth psychosocial stage (adolescence) is **Identity vs Role Confusion**.",
      ],
    };
  },
};

const longitudinalAttritionDesigns: Drill = {
  id: "4-context-human-development.longitudinal-attrition-designs",
  topicId: "4-context-human-development",
  title: "Longitudinal Attrition, Multi-Wave Retention & Cohort Separation",
  level: 3,
  ibLevel: "SL",
  guideRef: "developmental-methods-ethics",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const theme = rng.pick(STUDY_THEMES);

    if (tier === 1) {
      const bases = [100, 120, 150, 160, 200, 240, 250, 300, 320, 400, 500];
      const N0 = rng.pick(bases);
      const pcts = [10, 12, 15, 16, 18, 20, 22, 24, 25, 28, 30, 32, 35, 36, 40];
      const valid = pcts.filter((p) => Number.isInteger(clean((N0 * p) / 100)));
      const attrPct = rng.pick(valid);
      const lost = clean((N0 * attrPct) / 100);
      const Nt = N0 - lost;
      const retPct = clean(100 - attrPct);
      const startAge = rng.int(4, 12);
      const endAge = startAge + rng.int(4, 10);
      const askAttrition = rng.bool(0.65);

      if (askAttrition) {
        const wrongDenom = roundTo((lost / Nt) * 100, 1);
        return {
          prompt: `A longitudinal study of ${theme} recruits **${N0}** participants at age ${startAge}. By age ${endAge}, **${Nt}** participants remain. Calculate the **attrition rate** as a percentage.`,
          answer: { type: "number", value: attrPct, display: `${attrPct}%` },
          traps: [
            {
              spec: { type: "number", value: retPct },
              feedback: `${retPct}% is the retention rate (${Nt} ÷ ${N0}). Attrition is the percentage lost: 100% − ${retPct}% = ${attrPct}%.`,
            },
            ...(wrongDenom !== attrPct
              ? [
                  {
                    spec: { type: "number" as const, value: wrongDenom, tolerance: 0.1 },
                    feedback: `Divide dropouts (${lost}) by the initial baseline sample (${N0}), not the final surviving sample (${Nt}).`,
                  },
                ]
              : []),
          ],
          hint: `Dropouts = {{${N0} - ${Nt} = ${lost}}}. Divide by initial baseline ${N0} and multiply by 100.`,
          solution: [
            `Dropouts: {{${N0} - ${Nt} = ${lost}}} participants.`,
            `Attrition rate: {{${lost} / ${N0} * 100 = ${attrPct}%}}.`,
          ],
        };
      }

      return {
        prompt: `A longitudinal study of ${theme} begins with **${N0}** participants at age ${startAge}. By age ${endAge}, **${lost}** participants have dropped out. Calculate the **retention rate** as a percentage.`,
        answer: { type: "number", value: retPct, display: `${retPct}%` },
        traps: [
          {
            spec: { type: "number", value: attrPct },
            feedback: `${attrPct}% is the attrition rate (${lost} ÷ ${N0}). Retention is the percentage remaining: 100% − ${attrPct}% = ${retPct}%.`,
          },
        ],
        hint: `Remaining participants = {{${N0} - ${lost} = ${Nt}}}. Divide by ${N0} and multiply by 100.`,
        solution: [
          `Retained participants: {{${N0} - ${lost} = ${Nt}}}.`,
          `Retention rate: {{${Nt} / ${N0} * 100 = ${retPct}%}}.`,
        ],
      };
    }

    if (tier === 2) {
      // Exact Wave 3 survivor count with two sequential attrition steps
      const bases = [200, 400, 500, 600, 800, 1000];
      const N0 = rng.pick(bases);
      const r1 = rng.pick([10, 15, 20, 25, 30]);
      const r2 = rng.pick([10, 15, 20, 25]);
      const n2 = clean((N0 * (100 - r1)) / 100);
      const n3 = clean((n2 * (100 - r2)) / 100);
      if (!Number.isInteger(n3)) {
        // Guaranteed fallback with clean factors
        const fN0 = 400;
        const fR1 = 20;
        const fR2 = 15;
        const fN3 = 272;
        return {
          prompt: `A three-wave longitudinal study of ${theme} starts with **${fN0}** participants at Wave 1. Attrition is **${fR1}%** from Wave 1 to Wave 2, and **${fR2}%** of Wave 2 survivors drop out by Wave 3. How many participants remain at Wave 3?`,
          answer: { type: "number", value: fN3, display: `${fN3} participants` },
          traps: [
            {
              spec: { type: "number", value: 260 },
              feedback: "260 subtracts 35% directly from 400. Apply the second 15% dropout to the 320 Wave 2 survivors.",
            },
          ],
          hint: "Find Wave 2 survivors first (80% of 400), then keep 85% of that count.",
          solution: [
            "Wave 2 survivors: {{400 * 0.80 = 320}}.",
            "Wave 3 survivors: {{320 * 0.85 = 272}} participants.",
          ],
        };
      }
      const naiveRem = clean((N0 * (100 - r1 - r2)) / 100);
      const totalLost = N0 - n3;

      return {
        prompt: `A three-wave longitudinal study of ${theme} starts with **${N0}** participants at Wave 1. Between Wave 1 and Wave 2, **${r1}%** drop out; between Wave 2 and Wave 3, **${r2}%** of the *remaining* Wave 2 participants drop out. Calculate how many participants remain at Wave 3.`,
        answer: { type: "number", value: n3, display: `${n3} participants` },
        traps: [
          ...(naiveRem !== n3
            ? [
                {
                  spec: { type: "number" as const, value: naiveRem },
                  feedback: `${naiveRem} adds ${r1}% + ${r2}% = ${r1 + r2}% directly off ${N0}. Apply ${r2}% attrition to the Wave 2 survivor pool (${n2}).`,
                },
              ]
            : []),
          ...(totalLost !== n3
            ? [
                {
                  spec: { type: "number" as const, value: totalLost },
                  feedback: `${totalLost} is total dropouts (${N0} − ${n3}). Re-read: the question asks how many *remain* at Wave 3.`,
                },
              ]
            : []),
        ],
        hint: `Step 1: Wave 2 count = {{${N0} * ${clean((100 - r1) / 100)}}}. Step 2: multiply by {{${clean((100 - r2) / 100)}}}.`,
        solution: [
          `Wave 2 survivors: {{${N0} * ${clean((100 - r1) / 100)} = ${n2}}}.`,
          `Wave 3 survivors: {{${n2} * ${clean((100 - r2) / 100)} = ${n3}}} participants.`,
        ],
      };
    }

    // Tier 3: Compound overall attrition % OR cross-sequential cohort effect separation
    if (rng.bool(0.5)) {
      const r1 = rng.pick([10, 12, 15, 20, 25, 30]);
      const r2 = rng.pick([10, 15, 20, 25]);
      const retFactor = clean(((100 - r1) / 100) * ((100 - r2) / 100));
      const totalAttr = roundTo((1 - retFactor) * 100, 1);
      const totalRet = roundTo(retFactor * 100, 1);
      const naiveSum = r1 + r2;
      const N0 = rng.pick([400, 500, 800, 1000]);

      return {
        prompt: `A longitudinal ${theme} cohort starts with **${N0}** youth at Wave 1. Attrition is **${r1}%** from Wave 1 to Wave 2, and **${r2}%** of remaining survivors drop out from Wave 2 to Wave 3. Calculate the **overall attrition rate** from Wave 1 to Wave 3 as a percentage (to 1 d.p. if needed).`,
        answer: {
          type: "number",
          value: totalAttr,
          tolerance: 0.05,
          display: `${num(totalAttr)}%`,
        },
        traps: [
          {
            spec: { type: "number", value: naiveSum },
            feedback: `Adding ${r1}% + ${r2}% = ${naiveSum}% overcounts loss because the second ${r2}% applies only to the surviving Wave 2 cohort.`,
          },
          ...(totalRet !== totalAttr
            ? [
                {
                  spec: { type: "number" as const, value: totalRet, tolerance: 0.05 },
                  feedback: `${num(totalRet)}% is the overall *retention* rate. Subtract from 100% to get overall attrition.`,
                },
              ]
            : []),
        ],
        hint: `Multiply retention proportions: {{${clean((100 - r1) / 100)} * ${clean((100 - r2) / 100)} = ${retFactor}}}, then subtract from 1.`,
        solution: [
          `Overall retention factor: {{${clean((100 - r1) / 100)} * ${clean((100 - r2) / 100)} = ${retFactor}}} (${num(totalRet)}% retained).`,
          `Overall attrition rate: {{100% - ${num(totalRet)}% = ${num(totalAttr)}%}}.`,
        ],
      };
    }

    // Cross-sequential cohort effect isolation
    const birth1 = rng.pick([2006, 2008, 2010, 2012]);
    const gap = rng.pick([4, 5, 6]);
    const birth2 = birth1 + gap;
    const age1 = rng.pick([10, 11, 12]);
    const age2 = age1 + gap;
    const y1 = birth1 + age1;
    const y2 = birth1 + age2;
    const s1 = rng.int(54, 68);
    const trueAgeGain = rng.int(11, 18);
    const cohortEff = rng.int(4, 9);
    // Guarantee all three differences (cohortEff, trueAgeGain, crossGap) are distinct!
    const safeCohort = cohortEff === trueAgeGain - cohortEff ? cohortEff + 1 : cohortEff;
    const s2 = s1 + trueAgeGain;
    const s3 = s1 + safeCohort;
    const crossGap = s2 - s3;

    return {
      prompt: `In a cross-sequential study of ${theme} (0–100 scale): the **${birth1} cohort** averages **${s1}** at age ${age1} (in ${y1}) and **${s2}** at age ${age2} (in ${y2}); the **${birth2} cohort** averages **${s3}** at age ${age1} (in ${y2}). Calculate the **cohort effect** (in points) favouring the ${birth2} cohort over the ${birth1} cohort at age ${age1}.`,
      answer: {
        type: "number",
        value: safeCohort,
        display: `${safeCohort} points`,
      },
      traps: [
        {
          spec: { type: "number", value: crossGap },
          feedback: `${crossGap} points (${s2} − ${s3}) is the ${y2} cross-sectional age difference, not the cohort effect.`,
        },
        {
          spec: { type: "number", value: trueAgeGain },
          feedback: `${trueAgeGain} points (${s2} − ${s1}) is the true longitudinal age gain within the ${birth1} cohort, not the cohort effect.`,
        },
      ],
      hint: `Hold chronological age constant at age ${age1}: compare the ${birth2} cohort (${s3}) against the ${birth1} cohort (${s1}).`,
      solution: [
        `Hold age constant at ${age1} years: ${birth2} cohort = ${s3}, ${birth1} cohort = ${s1}.`,
        `Cohort effect = {{${s3} - ${s1} = ${safeCohort}}} points (separating cohort shift from the ${trueAgeGain}-point true age gain and ${crossGap}-point cross-sectional gap).`,
      ],
    };
  },
};

export const drills: Drill[] = [
  piagetVygotskyClassifier,
  attachmentProportions,
  marciaIdentityResilience,
  longitudinalAttritionDesigns,
];
