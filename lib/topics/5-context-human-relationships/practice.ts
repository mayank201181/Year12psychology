import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 Qs: 4 balanced MCQs [0, 1, 2, 3] + 6 crisp short Qs)
  // =========================================================================
  quiz: [
    {
      id: "5-context-human-relationships-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "attraction-biological-cognitive-social",
      strategy: "Sociocultural proximity & mere exposure",
      question:
        "Which factor best explains why MIT residents in Festinger, Schachter & Back's (1950) study were four times as likely to befriend a next-door neighbour as someone four doors away?",
      options: [
        "Functional proximity increasing unplanned encounters and familiarity via mere exposure",
        "Genetic MHC dissimilarity detected automatically through shared corridor ventilation",
        "Strict university rules assigning next-door neighbours to identical academic seminars",
        "Financial investments shared exclusively between residents of adjacent dormitory rooms",
      ],
      answerIndex: 0,
      hints: [
        "Think about how physical layout creates repeated casual meetings.",
        "Pair Festinger's finding with Zajonc's (1968) mere exposure effect.",
      ],
      explanation:
        "Next-door proximity increased everyday chance encounters, building comfort and liking via **mere exposure**. Neighbours were not matched genetically or forced into shared seminars.",
    },
    {
      id: "5-context-human-relationships-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Rusbult's Investment Model components",
      question:
        "In Rusbult's Investment Model, which combination of variables produces the **highest** relationship commitment?",
      options: [
        "Low satisfaction, high quality of alternatives, and low investment size",
        "High satisfaction, low quality of alternatives, and high investment size",
        "High satisfaction, high quality of alternatives, and low investment size",
        "Low satisfaction, low quality of alternatives, and zero investment size",
      ],
      answerIndex: 1,
      hints: [
        "Recall the structure {{C = S - A + I}}.",
        "Attractive alternatives pull a person *away* from commitment, so they subtract.",
      ],
      explanation:
        "Commitment peaks when **Satisfaction (S)** is high, **Quality of Alternatives (A)** is low, and **Investment Size (I)** is high ({{C = S - A + I}}).",
    },
    {
      id: "5-context-human-relationships-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Piliavin's subway study findings",
      question:
        "In Piliavin, Rodin & Piliavin's (1969) NYC subway field experiment, why did passengers help a collapsing passenger with a cane (95%) far more often than one smelling of alcohol (50%)?",
      options: [
        "Subway carriages with cane victims always contained only a single lone witness.",
        "Passengers were genetically related to the ill confederate in most morning trials.",
        "Perceived costs of helping a drunk stranger were higher and costs of not helping were lower.",
        "The drunk confederate explicitly told bystanders not to approach or offer assistance.",
      ],
      answerIndex: 2,
      hints: [
        "Apply Piliavin's Arousal–Cost–Reward Model to the two victims.",
        "Compare perceived danger/disgust (cost of helping) and guilt/blame (cost of not helping).",
      ],
      explanation:
        "Under the **Arousal–Cost–Reward Model**, helping an intoxicated stranger carried higher perceived costs (embarrassment, unpredictability, disgust) while stigma lowered the psychological cost (guilt) of ignoring them.",
    },
    {
      id: "5-context-human-relationships-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "prejudice-stereotyping-conflict",
      strategy: "Sherif's Robbers Cave conflict resolution",
      question:
        "In Sherif et al.'s (1961) Robbers Cave experiment, which intervention finally reduced hostility between the Eagles and Rattlers?",
      options: [
        "Giving both cabins separate trophies so neither team lost the final tournament",
        "Inviting both cabins to eat dinner and watch films together in the main hall",
        "Lecturing the boys daily about the psychological dangers of out-group stereotyping",
        "Introducing urgent superordinate goals that neither cabin could achieve alone",
      ],
      answerIndex: 3,
      hints: [
        "Remember that shared dinners and films actually provoked food fights!",
        "Think about the clogged water tank and the stalled supply truck.",
      ],
      explanation:
        "Only **superordinate goals** — shared emergencies requiring genuine interdependence (unclogging the water supply, pulling the stalled truck) — dissolved intergroup hostility at Robbers Cave.",
    },
    {
      id: "5-context-human-relationships-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Hamilton's Rule rB > C",
      question:
        "Using Hamilton's rule ({{rB > C}}), calculate the indirect fitness gain {{rB}} when helping one **full sibling** ({{r = 0.5}}) who receives a reproductive benefit of {{B = 8}} units.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "Multiply {{r}} by {{B}} ({{0.5 * 8}}), rather than dividing {{B}} by {{r}}.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "Full siblings share {{r = 0.5}} of genes by descent; {{0.25}} is for a half-sibling or grandparent.",
        },
      ],
      hints: [
        "Substitute {{r = 0.5}} and {{B = 8}} into {{rB}}.",
      ],
      solution: [
        "Full sibling genetic relatedness is {{r = 0.5}}.",
        "Multiply relatedness by recipient benefit: {{rB = 0.5 * 8 = 4}} units.",
      ],
    },
    {
      id: "5-context-human-relationships-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Gottman's positive-to-negative ratio",
      question:
        "During a coded conflict conversation, a couple displays 15 positive interactions and 3 negative interactions. Write their positive-to-negative interaction ratio in simplest form (e.g. a : b).",
      answer: { type: "ratio", parts: [5, 1], simplest: true },
      traps: [
        {
          spec: { type: "ratio", parts: [1, 5], simplest: true },
          feedback: "Check the order: write **positive : negative**, not negative : positive.",
        },
      ],
      hints: [
        "Write positive first and negative second: {{15 : 3}}.",
        "Divide both parts by their highest common factor (3).",
      ],
      solution: [
        "Start with the raw count ratio positive : negative = {{15 : 3}}.",
        "Divide both sides by 3 to simplify: **5 : 1**, exactly meeting Gottman's conflict stability threshold.",
      ],
    },
    {
      id: "5-context-human-relationships-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Bystander helping-rate difference",
      question:
        "In Latané & Darley's (1968) smoke-filled room study, 75% of lone participants reported smoke compared with 10% sitting with two passive confederates. Calculate the drop in **percentage points**.",
      answer: { type: "number", value: 65 },
      traps: [
        {
          spec: { type: "number", value: 86.7, tolerance: 0.2 },
          feedback: "That is the *relative* percentage decrease; the question asks for the simple drop in **percentage points** ({{75 - 10}}).",
        },
      ],
      hints: [
        "Percentage-point change is simply the larger percentage minus the smaller percentage.",
      ],
      solution: [
        "Subtract the passive-confederate rate from the lone rate: {{75 - 10 = 65}} percentage points.",
      ],
    },
    {
      id: "5-context-human-relationships-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Gottman's Four Horsemen",
      question:
        "Name the single **strongest predictor of divorce** among Gottman's Four Horsemen, characterised by mockery, sarcasm, superiority, and eye-rolling.",
      answer: { type: "text", accept: ["contempt"], display: "Contempt" },
      traps: [
        {
          spec: { type: "text", accept: ["criticism"] },
          feedback: "Criticism attacks character, whereas mockery, sarcasm, and superiority specifically define **contempt**.",
        },
      ],
      hints: [
        "Use the CCDS mnemonic: Criticism, Contempt, Defensiveness, Stonewalling.",
        "Which one conveys moral superiority and disgust toward a partner?",
      ],
      solution: [
        "Mockery, sarcasm, and eye-rolling operationalise **contempt**, the single strongest behavioural predictor of marital dissolution in Gottman & Levenson's longitudinal studies.",
      ],
    },
    {
      id: "5-context-human-relationships-quiz-q09",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Duck's Phase Model of Dissolution",
      question:
        "In Duck's Phase Model of relationship dissolution, what is the **first phase**, in which a partner privately broods over dissatisfaction and weighs costs before confronting their partner?",
      answer: {
        type: "text",
        accept: ["intrapsychic", "intrapsychic phase", "intra-psychic", "intra-psychic phase"],
        display: "Intrapsychic phase",
      },
      hints: [
        "Recall I-D-S-G: the prefix means 'inside the mind'.",
      ],
      solution: [
        "Private internal rumination and cost–benefit evaluation occur during Duck's **intrapsychic phase** (ending at the threshold 'I can't stand this anymore').",
      ],
    },
    {
      id: "5-context-human-relationships-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "prejudice-stereotyping-conflict",
      strategy: "Hamilton & Gifford proportion parity",
      question:
        "In an illusory-correlation experiment, majority Group A has 20 positive and 10 negative statements. Minority Group B has 10 positive statements and the **exact same percentage** of negative statements as Group A. How many negative statements does Group B have?",
      answer: { type: "number", value: 5 },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "Group B is half the size of Group A, so 10 negative statements would double its negative rate to 50%.",
        },
      ],
      hints: [
        "Find Group A's positive-to-negative ratio ({{20 : 10 = 2 : 1}}, meaning {{1/3}} negative).",
        "Scale down to Group B's 10 positive statements while preserving the same 2 : 1 ratio.",
      ],
      solution: [
        "Group A has {{20}} positive and {{10}} negative statements ({{10 / 30 = 33.3%}} negative, a {{2 : 1}} ratio).",
        "Since Group B has {{10}} positive statements, maintaining the exact same {{2 : 1}} ratio requires {{10 / 2 = 5}} negative statements ({{5 / 15 = 33.3%}} negative).",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1: 15 Qs, p2: 15 Qs)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1 (p1): Core Calculations, Classifications & Paper 1 Essays
    // -----------------------------------------------------------------------
    {
      id: "5-context-human-relationships-p1",
      title: "Practice Paper 1: Core Mechanisms, Vignettes & Causality/Perspective ERQs",
      level: "SL",
      questions: [
        {
          id: "5-context-human-relationships-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Diploid genetic relatedness coefficients",
          question:
            "In Hamilton's rule ({{rB > C}}), state the exact coefficient of genetic relatedness {{r}} between **first cousins** (as a decimal or fraction).",
          answer: { type: "number", value: 0.125, allowFraction: true },
          traps: [
            {
              spec: { type: "number", value: 0.25, allowFraction: true },
              feedback: "0.25 (1/4) is for a half-sibling, grandparent, aunt, or uncle; first cousins are one step further (0.125).",
            },
          ],
          hints: [
            "Full sibling = {{0.5}}, aunt/uncle = {{0.25}}, and a first cousin is the child of an aunt/uncle (halve again).",
          ],
          solution: [
            "Relatedness halves with each generational link: parent/full sibling = {{0.5}}, aunt/uncle = {{0.25}}, first cousin = {{0.5 * 0.25 = 0.125}} (or {{1/8}}).",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Hamilton's Rule rB evaluation",
          question:
            "Helping a **grandparent** ({{r = 0.25}}) provides them with a benefit of {{B = 10}} fitness units. Calculate the actor's indirect fitness gain {{rB}}.",
          answer: { type: "number", value: 2.5 },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "Check {{r}}: a grandparent shares {{r = 0.25}}, not {{0.5}}.",
            },
          ],
          hints: [
            "Multiply relatedness {{r = 0.25}} by benefit {{B = 10}}.",
            "Compare with a quarter of 10.",
          ],
          solution: [
            "Substitute {{r = 0.25}} and {{B = 10}} into {{rB}}.",
            "{{rB = 0.25 * 10 = 2.5}} fitness units.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Gottman 5:1 conflict benchmark",
          question:
            "In a Gottman Love Lab observation, a couple exhibits **6 negative interactions** during a 15-minute conflict task. Calculate the **minimum number of positive interactions** needed to achieve Gottman's 5 : 1 stability ratio.",
          answer: { type: "number", value: 30 },
          traps: [
            {
              spec: { type: "number", value: 11 },
              feedback: "5 : 1 is a multiplicative ratio ({{5 * 6}}), not adding 5 to 6.",
            },
          ],
          hints: [
            "Gottman's stability ratio requires {{P / N >= 5}}.",
            "Solve {{P / 6 = 5}} for {{P}}.",
          ],
          solution: [
            "To satisfy {{P : N = 5 : 1}} when {{N = 6}}, multiply {{6}} by {{5}}.",
            "Minimum positive interactions = {{5 * 6 = 30}}.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Rusbult Commitment Index",
          question:
            "Using the simplified Rusbult Commitment index {{C = S - A + I}}, calculate a partner's commitment score {{C}} when Satisfaction {{S = 4}}, Quality of Alternatives {{A = 2}}, and Investment Size {{I = 9}}.",
          answer: { type: "number", value: 11 },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "Quality of Alternatives ({{A}}) pulls a partner *away* from the relationship, so subtract {{A}} rather than adding it.",
            },
          ],
          hints: [
            "Substitute {{S = 4}}, {{A = 2}}, and {{I = 9}} into {{C = S - A + I}}.",
            "Remember to subtract Alternatives ({{A}}) and add Investment ({{I}}).",
          ],
          solution: [
            "Substitute into {{C = S - A + I}}: {{C = 4 - 2 + 9}}.",
            "{{C = 2 + 9 = 11}} (demonstrating high commitment despite modest satisfaction when investment is large and alternatives are poor).",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Darley & Latané (1968) intercom data",
          question:
            "In Darley & Latané's (1968) intercom seizure study, 85% of participants helped when believing they were alone, compared with 62% in a 3-person group. Calculate the drop in **percentage points**.",
          answer: { type: "number", value: 23 },
          traps: [
            {
              spec: { type: "number", value: 54 },
              feedback: "54 percentage points is the drop from alone (85%) to a **6-person** group (31%); check the 3-person figure (62%).",
            },
          ],
          hints: [
            "Subtract the 3-person group helping rate (62%) from the lone helping rate (85%).",
            "Give the simple percentage-point difference.",
          ],
          solution: [
            "Subtract the two percentages: {{85 - 62 = 23}} percentage points.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Gottman's Four Horsemen",
          question:
            "During a tense discussion, David's heart rate climbs above 105 bpm; he crosses his arms, stares at the floor, and stops answering his partner entirely. Which of Gottman's Four Horsemen is David displaying?",
          answer: { type: "text", accept: ["stonewalling", "stone-walling", "stone walling"], display: "Stonewalling" },
          traps: [
            {
              spec: { type: "text", accept: ["defensiveness"] },
              feedback: "Defensiveness involves verbally deflecting blame or counter-attacking, whereas shutting down silently during physiological flooding is **stonewalling**.",
            },
          ],
          hints: [
            "Notice the physiological arousal ('flooding') paired with complete emotional and verbal withdrawal.",
            "Which Horseman describes putting up a silent wall?",
          ],
          solution: [
            "Withdrawing completely, avoiding eye contact, and refusing to respond during physiological flooding operationalises **stonewalling**.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Duck's Phase Model of Dissolution",
          question:
            "After confronting her partner and deciding the breakup is final, Amina calls her sister and close friends to announce the separation and ask for emotional support. Identify which phase of Duck's dissolution model she has entered.",
          answer: { type: "text", accept: ["social", "social phase"], display: "Social phase" },
          traps: [
            {
              spec: { type: "text", accept: ["dyadic", "dyadic phase"] },
              feedback: "The dyadic phase is direct confrontation *between the two partners*; involving wider friends and family marks the **social phase**.",
            },
          ],
          hints: [
            "Check who is being brought into the breakup now: wider friends and relatives.",
            "Recall Duck's 4-step sequence: Intrapsychic → Dyadic → Social → Grave-dressing.",
          ],
          solution: [
            "Going public with the breakup and mobilising friends and family occurs in Duck's **social phase**.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Cognitive origin of stereotypes",
          question:
            "Name the cognitive bias demonstrated by Hamilton & Gifford (1976) in which people overestimate the link between a minority group and negative behaviours because both are statistically infrequent and therefore salient.",
          answer: {
            type: "text",
            accept: ["illusory correlation", "illusory correlations", "illusory correlation effect"],
            display: "Illusory correlation",
          },
          hints: [
            "The name combines a word meaning 'perceived falsely' with a statistical word for association.",
            "Think of Hamilton & Gifford's Group A (26 statements) vs Group B (13 statements).",
          ],
          solution: [
            "Over-recalling paired infrequent categories (minority group + undesirable act) creates an **illusory correlation**, forming stereotypes without factual group differences.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Allport's 4 optimal contact conditions",
          question:
            "Two workplace teams from rival departments collaborate as equals on a shared non-competitive project, yet senior directors publicly joke about favouring one department over the other. Name the specific Allport Contact Hypothesis condition that is **missing**.",
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
          hints: [
            "Check Allport's four conditions: equal status, common goals, intergroup cooperation, and the fourth condition involving leadership/norms.",
            "Which condition fails when senior directors endorse bias?",
          ],
          solution: [
            "Equal status, common goals, and cooperation are present, but biased senior leadership violates Allport's fourth condition: **institutional / authority support**.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "attraction-biological-cognitive-social",
          strategy: "Paper 1 Sec A — Multi-approach integration",
          marks: 4,
          question:
            "Explain how **one biological** factor and **one cognitive** factor interact to influence interpersonal attraction, supporting your answer with psychological research. [4 marks]",
          modelAnswer:
            "Biologically, immune-system genetics shape sensory preferences: Wedekind et al. (1995) demonstrated that women not using oral contraceptives preferred body odours of men carrying dissimilar MHC alleles, promoting offspring immune diversity (while hormonal contraception reversed this preference). Cognitively, people filter potential partners through perceived value alignment: Byrne (1971) and Montoya et al. (2008) showed that perceived similarity supplies consensual validation and cognitive consistency. Rather than operating in isolation, biological cues create initial sensory pull that is then moderated or overridden by cognitive appraisals of shared beliefs and realistic matching once conversation begins.",
          markScheme: [
            {
              point: "Explains a valid biological mechanism of attraction (e.g., MHC genetic diversity or oxytocin/dopamine neurochemistry).",
              keywords: ["mhc", "immune", "oxytocin", "dopamine", "hormonal"],
            },
            {
              point: "Supports the biological factor accurately with empirical research (e.g., Wedekind, Fisher, or Scheele).",
              keywords: ["wedekind", "fisher", "scheele", "contraceptives", "odours"],
            },
            {
              point: "Explains a valid cognitive mechanism (e.g., similarity–attraction, cognitive consistency, or matching hypothesis) with research.",
              keywords: ["similarity", "byrne", "montoya", "validation", "matching"],
            },
            {
              point: "Explicitly links how biological and cognitive processes interact or moderate one another.",
              keywords: ["moderated", "overridden", "appraisals", "isolation", "initial"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies biological or cognitive attraction factors descriptively with weak or missing research support." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains both a biological and cognitive factor with accurate study evidence and explicitly shows how they interact." },
          ],
          hints: [
            "Choose one crisp biological study (e.g. Wedekind 1995 MHC or Fisher 2005 dopamine/oxytocin) and one cognitive study (Byrne/Montoya similarity or Walster/Murstein matching).",
            "Do not merely list two separate paragraphs — add a concluding link explaining how they interact in real partner choice.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Paper 1 Sec A — Precise conceptual contrast",
          marks: 4,
          question:
            "Distinguish between **pluralistic ignorance** and **diffusion of responsibility** in Latané & Darley's bystander model, using empirical evidence to illustrate each. [4 marks]",
          modelAnswer:
            "Pluralistic ignorance occurs during Step 2 (interpreting an ambiguous event): witnesses glance at calm bystanders and mistakenly conclude no real danger exists. In Latané & Darley's (1968) smoke-filled room experiment, 75% of lone subjects reported smoke pouring in, compared with just 10% seated alongside two passive confederates. By contrast, diffusion of responsibility operates at Step 3 even after an emergency is clearly recognised: personal obligation divides across all witnesses (roughly 1/N), encouraging everyone to assume someone else will act. In Darley & Latané's (1968) intercom seizure study, helping fell from 85% alone to 31% when participants believed five others were also listening.",
          markScheme: [
            {
              point: "Defines pluralistic ignorance accurately as misinterpreting an ambiguous event by relying on calm peers (Step 2).",
              keywords: ["ambiguous", "step 2", "calm", "danger", "interpreting"],
            },
            {
              point: "Supports pluralistic ignorance with accurate evidence (Smoke-Filled Room: 75% vs 10%).",
              keywords: ["smoke", "confederates", "75%", "10%"],
            },
            {
              point: "Defines diffusion of responsibility as splitting personal obligation across multiple witnesses after recognising an emergency (Step 3).",
              keywords: ["step 3", "obligation", "divides", "1/n", "someone else"],
            },
            {
              point: "Supports diffusion of responsibility with accurate evidence (Intercom Seizure: 85% vs 31%).",
              keywords: ["seizure", "intercom", "85%", "31%"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes bystander apathy generally or partially defines one mechanism with limited study detail." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts Step 2 (ambiguity/interpretation) vs Step 3 (divided obligation) with accurate empirical findings for both." },
          ],
          hints: [
            "Anchor each concept to its exact step in Latané & Darley's 5-step cascade (Step 2 vs Step 3).",
            "Pair Smoke-Filled Room (75% vs 10%) with Step 2, and Intercom Seizure (85% vs 31%) with Step 3.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Paper 1 Sec B — Unseen relationship vignette",
          marks: 6,
          question:
            "**Unseen Vignette (Paper 1 Section B):** Samir and Elena have been married for eight years, co-own a mortgaged flat, and share care of their four-year-old son. Over the past year, their disagreements have turned hostile: during a 15-minute mediation session, Samir mocks Elena with eye-rolls ('You never think logically') while Elena counter-attacks ('You're the one who broke our budget!'). Only two affectionate remarks occur alongside eight hostile exchanges. Although both report low emotional happiness, neither believes they could afford separate housing or rebuild their family routine alone.\n\nApply **Gottman's communication research** and **Rusbult's Investment Model** to explain both the couple's communication risk and why they remain together. [6 marks]",
          modelAnswer:
            "First, Gottman & Levenson's observational framework indicates acute breakdown risk. The couple produced two positive versus eight negative remarks — a 0.25 : 1 positivity ratio far beneath Gottman's 5 : 1 stability threshold (even worse than the 0.8 : 1 divorcing average). Moreover, two of the Four Horsemen are evident: Samir's eye-rolling mockery exhibits contempt, the strongest single predictor of divorce, while Elena's blame-shifting counter-attack demonstrates defensiveness rather than constructive accommodation. Second, Rusbult's Investment Model (Commitment = Satisfaction − Alternatives + Investment) resolves the paradox of staying despite misery. Although Satisfaction is clearly low, their extrinsic investments are massive — a shared flat mortgage, eight years of joint history, and parenting a young child — and their perceived Quality of Alternatives is poor because neither expects to afford separate living arrangements. High investments combined with unattractive alternatives therefore maintain structural commitment despite toxic communication, highlighting why therapeutic intervention is vital before they cross into Duck's dyadic dissolution threshold.",
          markScheme: [
            {
              point: "Computes or interprets the couple's positivity ratio (2 : 8 = 0.25 : 1) as far below Gottman's 5 : 1 stability threshold.",
              keywords: ["0.25", "5 : 1", "threshold", "0.8"],
            },
            {
              point: "Correctly diagnoses Samir's eye-rolling mockery as contempt and notes it is the strongest divorce predictor.",
              keywords: ["contempt", "strongest", "divorce"],
            },
            {
              point: "Correctly diagnoses Elena's counter-attack as defensiveness (second Horseman).",
              keywords: ["defensiveness", "blame-shifting", "horsemen"],
            },
            {
              point: "Applies Rusbult's low Satisfaction component accurately to the vignette.",
              keywords: ["satisfaction", "misery", "paradox"],
            },
            {
              point: "Identifies concrete extrinsic/intrinsic investments from the scenario (mortgage, eight years, young child).",
              keywords: ["extrinsic", "investments", "mortgage", "child"],
            },
            {
              point: "Explains how poor perceived Quality of Alternatives combines with high investment to sustain commitment.",
              keywords: ["alternatives", "commitment", "structural"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions Gottman or Rusbult superficially with minimal connection to details in the vignette." },
            { band: "3–4", marks: [3, 4], descriptor: "Applies both models accurately to several vignette cues but misses ratio analysis or one key Horseman/Rusbult variable." },
            { band: "5–6", marks: [5, 6], descriptor: "Thoroughly integrates Gottman's 5:1 ratio, specific Horsemen (contempt + defensiveness), and all three Rusbult predictors directly to the vignette." },
          ],
          hints: [
            "Check the numbers in the vignette: 2 positive vs 8 negative -> compare against Gottman's 5 : 1 benchmark.",
            "Diagnose BOTH Samir's behaviour (eye-rolling mockery) and Elena's behaviour (counter-attacking) using Gottman's Four Horsemen.",
            "Map Satisfaction, Alternatives, and Investments explicitly onto the flat, child, and financial worry.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Paper 1 Sec B — Unseen conflict-reduction vignette",
          marks: 6,
          question:
            "**Unseen Vignette (Paper 1 Section B):** After two neighbouring secondary schools merge onto one campus, students from the former North and South schools compete intensely for limited places on the single varsity sports team and student council. Weekly whole-school assemblies and shared cafeteria seating fail to stop insults and tribal seating zones. The principal asks a school psychologist to design an evidence-based integration plan.\n\nApply **Sherif's Realistic Conflict Theory**, **Allport's Contact Hypothesis**, and **Aronson's Jigsaw Classroom** to explain why conflict escalated, why shared assemblies failed, and how the principal should intervene. [6 marks]",
          modelAnswer:
            "Conflict escalated through Realistic Conflict Theory (Sherif et al., 1961): merging created zero-sum competition over scarce resources — limited varsity team and council slots — paralleling the Eagles–Rattlers tournament that bred hostility and out-group derogation. Weekly assemblies and shared lunches failed for the exact reason Robbers Cave Stage 3a failed: unstructured mere contact without interdependence leaves group boundaries intact and can heighten friction. To achieve durable change, the principal must introduce superordinate goals operationalised via Aronson's (1978) Jigsaw Classroom across academic subjects and mixed-school community projects. Specifically, mixed 5–6 student teams must satisfy all four of Allport's (1954) optimal conditions: equal status (no legacy school given leadership priority), common goals (shared project grades or campus festival targets), intergroup cooperation (each student holds an indispensable puzzle piece so teammates must rely on one another), and visible institutional support (the principal and coaches explicitly endorsing cross-campus norms). As Pettigrew & Tropp's (2006) meta-analysis shows, structured interdependent contact lowers intergroup anxiety and fosters empathy.",
          markScheme: [
            {
              point: "Explains conflict escalation via Realistic Conflict Theory (zero-sum competition for scarce varsity/council places, citing Sherif).",
              keywords: ["zero-sum", "scarce", "eagles", "sherif", "out-group"],
            },
            {
              point: "Explains why assemblies/cafeteria failed: mere contact without interdependence (Robbers Cave Stage 3a).",
              keywords: ["mere contact", "stage 3a", "interdependence", "friction"],
            },
            {
              point: "Proposes superordinate goals requiring both former schools to cooperate on tasks neither can complete alone.",
              keywords: ["superordinate", "indispensable", "rely"],
            },
            {
              point: "Operationalises Aronson's Jigsaw Classroom with mixed teams holding unique essential segments.",
              keywords: ["jigsaw", "puzzle piece", "mixed"],
            },
            {
              point: "Maps Allport's four optimal conditions explicitly (equal status, common goals, cooperation, institutional support).",
              keywords: ["equal status", "common goals", "institutional support"],
            },
            {
              point: "Evaluates the mechanism of change (e.g., Pettigrew & Tropp: reduced intergroup anxiety and increased empathy).",
              keywords: ["pettigrew", "anxiety", "empathy"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Offers generic advice about teamwork with minimal grounding in Sherif, Allport, or Aronson." },
            { band: "3–4", marks: [3, 4], descriptor: "Links competition to Sherif and proposes cooperative projects, but omits why mere contact failed or misses key Allport conditions." },
            { band: "5–6", marks: [5, 6], descriptor: "Precisely diagnoses competition and mere-contact failure, then constructs a Jigsaw intervention satisfying all four Allport conditions with empirical backing." },
          ],
          hints: [
            "Diagnose the root cause first: limited varsity and council seats = zero-sum competition (Sherif Stage 2).",
            "Explain why assemblies failed by referencing Robbers Cave Stage 3a (mere contact).",
            "Map all four Allport conditions directly onto how mixed Jigsaw teams should be run by the principal.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "attraction-biological-cognitive-social",
          strategy: "Paper 1 Sec C — Core Concept: Causality",
          marks: 9,
          question:
            "**Paper 1 Section C (Core Concept: Causality):** Discuss how the concept of **Causality** shapes our evaluation of psychological research on **interpersonal attraction**. [9 marks]",
          modelAnswer:
            "Evaluating Causality in interpersonal attraction requires distinguishing correlational links from experimentally manipulated cause-and-effect relationships, while recognising bidirectional and third-variable confounds. In biological research, Fisher et al. (2005) used fMRI to show ventral tegmental area dopamine activation when participants viewed romantic partners. Although valuable, brain imaging is correlational: it cannot determine whether dopamine surges cause romantic attachment or whether emotional commitment triggers reward activation. By contrast, Scheele et al. (2012) achieved stronger causal inference by randomly administering intranasal oxytocin versus placebo in a double-blind experiment, showing oxytocin causally increased partnered men's preferred distance from attractive strangers — yet artificial intranasal doses sacrifice ecological validity. Similarly, Wedekind et al. (1995) experimentally manipulated MHC odour cues and isolated hormonal contraception as a moderating third variable, though controlled T-shirt sniffing omits real-world interaction. Socioculturally, Festinger et al. (1950) demonstrated strong correlational evidence linking functional proximity to MIT friendships; because apartment allocation was quasi-random, selection bias was reduced, yet reciprocal liking still operates bidirectionally. Most strikingly, Gupta & Singh's (1982) comparison of arranged and love marriages cannot establish that arranged marriage causes love to increase over time: its cross-sectional design confounds marital type with generational cohort effects and survivorship bias. Likewise, Eagly & Wood's (1999) reanalysis of Buss's (1989) 37-culture survey revealed national gender equality as a macro-level confounding variable explaining mate-preference sex gaps. Overall, causal claims about attraction are strongest when true experiments (Scheele, Wedekind) are triangulated with naturalistic longitudinal designs, because human bonding is inherently multicausal rather than driven by one isolated biological or social trigger.",
          markScheme: [
            {
              point: "Defines Causality rigorously (experimental control vs correlation, bidirectional or third-variable confounds).",
              keywords: ["correlational", "bidirectional", "third-variable", "confounds"],
            },
            {
              point: "Evaluates limited causality in Fisher et al. (2005) fMRI neuroimaging (correlation cannot establish direction).",
              keywords: ["fisher", "fmri", "dopamine", "direction"],
            },
            {
              point: "Contrasts with experimental manipulation in Scheele et al. (2012) placebo-controlled oxytocin trial plus ecological trade-off.",
              keywords: ["scheele", "placebo", "oxytocin", "ecological"],
            },
            {
              point: "Analyses Wedekind et al. (1995) showing hormonal contraception as a moderating variable in MHC attraction.",
              keywords: ["wedekind", "mhc", "moderating", "contraception"],
            },
            {
              point: "Evaluates quasi-random proximity evidence in Festinger et al. (1950) while noting selection/bidirectional limits.",
              keywords: ["festinger", "proximity", "quasi-random"],
            },
            {
              point: "Critiques Gupta & Singh (1982) cross-sectional design for cohort and survivorship confounds.",
              keywords: ["gupta", "cross-sectional", "cohort", "survivorship"],
            },
            {
              point: "Integrates Buss (1989) vs Eagly & Wood (1999) showing structural gender equality as an alternative causal explanation.",
              keywords: ["eagly", "buss", "gender equality"],
            },
            {
              point: "Synthesises a balanced conclusion arguing for methodological triangulation and multicausality.",
              keywords: ["triangulated", "multicausal", "longitudinal"],
            },
            {
              point: "Demonstrates sustained, coherent focus on the Core Concept of Causality across approaches.",
              keywords: ["experimental", "manipulated", "inference"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–3", marks: [1, 3], descriptor: "Describes attraction studies with little explicit analysis of correlation versus causation." },
            { band: "4–6", marks: [4, 6], descriptor: "Evaluates causality in at least two attraction studies accurately, identifying correlational or confounding limits." },
            { band: "7–9", marks: [7, 9], descriptor: "Sustained, nuanced discussion of Causality across biological, cognitive, and sociocultural attraction research, balancing experimental control against ecological validity and multicausality." },
          ],
          hints: [
            "Open by defining Causality (randomised manipulation vs correlation, third variables, reverse causality).",
            "Contrast a correlational study (Fisher fMRI or Gupta & Singh cross-sectional) directly against a true experiment (Scheele placebo oxytocin or Wedekind).",
            "Close by arguing that attraction is multicausal and needs triangulation across methods.",
          ],
        },
        {
          id: "5-context-human-relationships-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "To what extent",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Paper 1 Sec C — 15-mark Extended Response (Perspective)",
          marks: 15,
          question:
            "**Paper 1 Section C Extended Response (Core Concept: Perspective):** To what extent does integrating **Biological**, **Cognitive**, and **Sociocultural** perspectives provide a more complete explanation of **prosocial behaviour and bystanderism** than any single approach alone? [15 marks]",
          modelAnswer:
            "Prosocial behaviour and bystanderism cannot be reduced to one level of analysis; triangulating Biological, Cognitive, and Sociocultural perspectives reveals how evolutionary predispositions, situational appraisals, and cultural norms interact dynamically. From a Biological perspective, Hamilton's (1964) kin-selection rule (rB > C) proposes that costly altruism evolves when shared genetic relatedness multiplied by recipient benefit outweighs actor cost. Madsen et al. (2007) provided strong cross-cultural support: both British and South African (Zulu) participants endured painful wall-sits longer as relatedness rose (0.5 > 0.25 > 0.125). Trivers's (1971) reciprocal altruism extends evolutionary logic to repeated non-kin exchanges. However, evolutionary accounts alone struggle to explain instant heroic aid to complete strangers in one-shot urban encounters and risk post-hoc determinism; notably, Madsen's female participants also showed high persistence for unrelated close friends, pointing to non-genetic bonds. The Cognitive perspective fills this gap by mapping rapid situational decision-making. Latané & Darley's (1970) 5-step model explains how ambiguity triggers pluralistic ignorance (Smoke-Filled Room, 1968: 75% alone vs 10% with passive confederates) and crowd size induces diffusion of responsibility (Intercom Seizure, 1968: 85% alone vs 31% in 6-person groups). Piliavin, Rodin & Piliavin (1969) extended this through the Arousal–Cost–Reward model: on NYC subways, unmistakable collapses prompted 95% helping for cane victims versus 50% for drunk victims with no diffusion effect, proving cognitive cost–benefit appraisal depends heavily on visibility and stigma. Meanwhile, Batson et al. (1981) demonstrated in the Elaine shock experiment that high empathy maintains helping even when escape is effortless, although Cialdini et al.'s (1987) negative-state relief model highlights how hard it is to isolate purely altruistic motives experimentally. Crucially, methodological perspective also matters: Philpot et al.'s (2020) CCTV study of 219 real conflicts across three countries found 90.9% intervention rates, showing controlled lab cubicles overstate bystander passivity. Finally, the Sociocultural perspective explains wide cross-national differences invisible to laboratory cognition alone. Levine et al.'s (2001) 23-city field study documented stranger helping ranging from 93% in Rio de Janeiro to 40% in Kuala Lumpur, driven by cultural norms of simpatía and slower economic pace rather than fixed biology. Overall, to a very large extent, integrating all three perspectives is essential: biology explains deep capacities for kin favouritism and empathic arousal, cognition explains step-by-step situational filtering and cost appraisal, and sociocultural norms govern who counts as worthy of aid and whether public intervention is expected.",
          markScheme: [
            {
              point: "Frames the essay clearly around the FA2027 Core Concept of Perspective and biopsychosocial triangulation.",
              keywords: ["triangulating", "predispositions", "dynamically"],
            },
            {
              point: "Explains Biological kin selection via Hamilton's rule (rB > C) and inclusive fitness.",
              keywords: ["hamilton", "kin-selection", "relatedness"],
            },
            {
              point: "Supports biological perspective with Madsen et al. (2007) cross-cultural wall-sit findings.",
              keywords: ["madsen", "zulu", "wall-sits"],
            },
            {
              point: "Includes reciprocal altruism (Trivers) to address non-kin cooperation.",
              keywords: ["trivers", "reciprocal", "exchanges"],
            },
            {
              point: "Critiques limits of biological reductionism (one-shot stranger helping, close friends in Madsen, post-hoc risk).",
              keywords: ["strangers", "post-hoc", "determinism"],
            },
            {
              point: "Explains Latané & Darley's cognitive 5-step model including pluralistic ignorance (75% vs 10%).",
              keywords: ["pluralistic ignorance", "smoke-filled", "75%", "10%"],
            },
            {
              point: "Explains diffusion of responsibility with Intercom Seizure evidence (85% vs 31%).",
              keywords: ["diffusion", "intercom", "85%", "31%"],
            },
            {
              point: "Contrasts Piliavin's Arousal–Cost–Reward subway experiment (95% cane vs 50% drunk; no diffusion).",
              keywords: ["piliavin", "arousal", "95%", "50%"],
            },
            {
              point: "Evaluates Batson's empathy–altruism hypothesis (Elaine easy escape) against Cialdini's negative-state relief.",
              keywords: ["batson", "elaine", "cialdini", "negative-state"],
            },
            {
              point: "Integrates modern ecological evidence (Philpot et al., 2020 CCTV 90.9% intervention) to critique lab measurement.",
              keywords: ["philpot", "cctv", "90.9%"],
            },
            {
              point: "Explains Sociocultural variation using Levine et al.'s (2001) 23-city field study.",
              keywords: ["levine", "23-city", "rio"],
            },
            {
              point: "Identifies simpatía and economic pace as key cultural moderators beyond simple individualism–collectivism.",
              keywords: ["simpatía", "economic pace", "norms"],
            },
            {
              point: "Addresses methodological/measurement trade-offs across lab vs field studies.",
              keywords: ["cubicles", "overstate", "passivity"],
            },
            {
              point: "Explicitly answers the 'To what extent' command term with a weighted evaluative judgement.",
              keywords: ["very large extent", "essential"],
            },
            {
              point: "Synthesises how all three levels complement each other into a cohesive overall conclusion.",
              keywords: ["filtering", "worthy", "expected"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–3", marks: [1, 3], descriptor: "Descriptive outline of one or two prosocial studies with minimal link to Perspective or the command term." },
            { band: "4–6", marks: [4, 6], descriptor: "Covers two approaches with some accurate studies, but evaluation is generic and cross-approach synthesis is weak." },
            { band: "7–9", marks: [7, 9], descriptor: "Covers all three approaches with relevant research and begins evaluating strengths/limitations of each perspective." },
            { band: "10–12", marks: [10, 12], descriptor: "Strong critical discussion comparing Biological, Cognitive, and Sociocultural evidence with explicit links to Perspective and methodological critiques." },
            { band: "13–15", marks: [13, 15], descriptor: "Authoritative, balanced synthesis integrating classic and contemporary evidence (Madsen, Latané & Darley, Piliavin, Batson, Philpot, Levine) into a nuanced 'to what extent' judgement." },
          ],
          hints: [
            "Plan three clear approach sections (Biological: Hamilton/Madsen/Trivers; Cognitive: Latané & Darley/Piliavin/Batson; Sociocultural: Levine + Philpot ecological context).",
            "In every section, explicitly show what that approach explains AND what it *cannot* explain alone.",
            "Finish with a direct 'To what extent' synthesis demonstrating how the three approaches interlock.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2 (p2): Quantitative Analysis, HL Vignettes & Change/Responsibility
    // -----------------------------------------------------------------------
    {
      id: "5-context-human-relationships-p2",
      title: "Practice Paper 2: Data Skills, HL Extensions & Change/Responsibility ERQs",
      level: "HL",
      questions: [
        {
          id: "5-context-human-relationships-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Solving Hamilton's Rule for threshold B",
          question:
            "A risky altruistic act toward one **aunt** ({{r = 0.25}}) imposes a personal cost of {{C = 1.5}} fitness units. Calculate the break-even benefit {{B}} at which {{rB = C}}.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 0.375 },
              feedback: "You multiplied {{0.25 * 1.5}} instead of dividing {{C}} by {{r}} ({{1.5 / 0.25}}).",
            },
          ],
          hints: [
            "Set {{rB = C}} and substitute {{r = 0.25}} and {{C = 1.5}}.",
            "Solve {{0.25 * B = 1.5}} by dividing {{1.5}} by {{0.25}} (same as multiplying by 4).",
          ],
          solution: [
            "Set {{rB = C}}: {{0.25 * B = 1.5}}.",
            "Divide both sides by {{0.25}}: {{B = 1.5 / 0.25 = 6}} units. Any benefit strictly above 6 satisfies Hamilton's rule.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Simplifying Gottman interaction ratios",
          question:
            "During a coded conflict conversation, researchers record 12 positive interactions and 8 negative interactions. Express the couple's positive-to-negative ratio in simplest form (e.g. a : b).",
          answer: { type: "ratio", parts: [3, 2], simplest: true },
          traps: [
            {
              spec: { type: "ratio", parts: [2, 3], simplest: true },
              feedback: "Keep the asked order: positive : negative ({{12 : 8}} simplifies to {{3 : 2}}).",
            },
          ],
          hints: [
            "Start with {{12 : 8}} and divide both sides by their highest common factor (4).",
            "Check whether {{3 : 2}} (equivalent to 1.5 : 1) is above or below Gottman's 5 : 1 threshold.",
          ],
          solution: [
            "Write positive : negative = {{12 : 8}}.",
            "Divide both terms by 4 to obtain **3 : 2** (or 1.5 : 1, well below Gottman's 5 : 1 stability threshold).",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Relative percentage decrease in Piliavin (1969)",
          question:
            "In Piliavin, Rodin & Piliavin's (1969) NYC subway study, cane victims received help in 95% of trials compared with 50% for drunk victims. Calculate the **relative percentage decrease** in helping from the cane condition to the drunk condition, rounded to **1 decimal place** (enter number or %).",
          answer: { type: "number", value: 47.4, tolerance: 0.15, display: "47.4%" },
          traps: [
            {
              spec: { type: "number", value: 45 },
              feedback: "45 is the drop in **percentage points** ({{95 - 50}}); divide 45 by the original baseline (95) and multiply by 100 for the relative percentage decrease.",
            },
          ],
          hints: [
            "First find the absolute drop: {{95 - 50 = 45}}.",
            "Divide the drop by the cane baseline (95), multiply by 100, and round to 1 decimal place.",
          ],
          solution: [
            "Absolute drop = {{95 - 50 = 45}} percentage points.",
            "Relative percentage decrease = {{(45 / 95) * 100 = 47.368...% ≈ 47.4%}}.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q04",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Diffusion of responsibility share 1/N",
          question:
            "In an equal-share diffusion of responsibility model ({{R = 1 / N}}), what **percentage** of personal responsibility is assigned to each individual when **8 passive witnesses** observe an emergency?",
          answer: { type: "number", value: 12.5, tolerance: 0.05, display: "12.5%" },
          traps: [
            {
              spec: { type: "number", value: 0.125 },
              feedback: "0.125 is the decimal proportion; multiply by 100 to convert to a **percentage** (12.5%).",
            },
          ],
          hints: [
            "Divide 100% evenly across all 8 witnesses.",
          ],
          solution: [
            "Divide 100% by {{N = 8}}: {{100 / 8 = 12.5%}} per witness.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Gottman's Four Horsemen",
          question:
            "When told 'I felt stressed when the bills weren't paid on time', Marcus immediately snaps back, 'It's not my fault — you never remind me and you forget chores too!' Identify which of Gottman's Four Horsemen Marcus is displaying.",
          answer: { type: "text", accept: ["defensiveness", "defensive"], display: "Defensiveness" },
          traps: [
            {
              spec: { type: "text", accept: ["contempt"] },
              feedback: "Contempt expresses mockery/superiority; playing the innocent victim and counter-blaming to dodge responsibility is **defensiveness**.",
            },
          ],
          hints: [
            "Notice Marcus dodges accountability by claiming innocence and firing back a counter-complaint.",
            "Match this pattern against CCDS: Criticism, Contempt, Defensiveness, Stonewalling.",
          ],
          solution: [
            "Warding off perceived blame via excuses and counter-attack defines **defensiveness** in Gottman's Four Horsemen.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Duck's Phase Model",
          question:
            "After months of silent doubts, Clara sits down with her partner to confront them directly about feeling unappreciated and to discuss whether their relationship can be repaired. Identify which phase of Duck's dissolution model Clara has entered.",
          answer: { type: "text", accept: ["dyadic", "dyadic phase"], display: "Dyadic phase" },
          traps: [
            {
              spec: { type: "text", accept: ["intrapsychic", "intrapsychic phase"] },
              feedback: "Her silent doubts were the intrapsychic phase; voicing dissatisfaction directly to her partner moves into the **dyadic phase**.",
            },
          ],
          hints: [
            "A 'dyad' means a pair of two people.",
            "Which phase sits between private brooding (Intrapsychic) and telling friends (Social)?",
          ],
          solution: [
            "Direct confrontation, negotiation, or breakdown talk between the two partners defines Duck's **dyadic phase**.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Steele & Aronson (1995)",
          question:
            "Name the psychological phenomenon studied by Steele & Aronson (1995) in which fear of confirming a negative stereotype about one's social group disrupts working memory and depresses test performance.",
          answer: { type: "text", accept: ["stereotype threat", "stereotyping threat"], display: "Stereotype threat" },
          hints: [
            "The two-word term names the anxiety triggered when a group stereotype becomes salient on a diagnostic test.",
            "Think of Steele & Aronson's Stanford GRE verbal experiment.",
          ],
          solution: [
            "Performance disruption caused by anxiety over confirming a negative group stereotype is **stereotype threat** (Steele & Aronson, 1995).",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q08",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "attraction-biological-cognitive-social",
          strategy: "Wedekind et al. (1995) genetics",
          question:
            "State the three-letter abbreviation (or full name) of the immune-system gene complex linked to scent preference in Wedekind et al.'s (1995) sweaty T-shirt study.",
          answer: {
            type: "text",
            accept: ["mhc", "major histocompatibility complex", "mhc genes", "mhc complex"],
            display: "MHC (Major Histocompatibility Complex)",
          },
          hints: [
            "These genes govern immune recognition and influence individual body odour.",
          ],
          solution: [
            "Wedekind et al. (1995) investigated the **Major Histocompatibility Complex (MHC)**.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Paper 1 Sec A — Batson vs Cialdini",
          marks: 4,
          question:
            "Explain how Batson et al.'s (1981) Elaine study supports the **empathy–altruism hypothesis**, and outline **one** egoistic counter-explanation. [4 marks]",
          modelAnswer:
            "Batson et al. (1981) manipulated empathy (high vs low perceived similarity to 'Elaine', who appeared to receive electric shocks) and ease of escape (leaving after two trials versus watching all ten). When escape was easy, low-empathy participants walked away, consistent with egoistic distress reduction; crucially, high-empathy participants still volunteered to take Elaine's shocks despite effortless exit, supporting genuine selfless concern. However, Cialdini et al. (1987) proposed the negative-state relief counter-explanation: feeling empathic triggers personal sadness, meaning helpers may still act egoistically to lift their own mood rather than purely for Elaine's welfare.",
          markScheme: [
            {
              point: "Accurately outlines the 2×2 manipulation in Batson et al. (1981) (high/low empathy × easy/difficult escape).",
              keywords: ["similarity", "escape", "shocks", "two trials"],
            },
            {
              point: "Explains the decisive high-empathy + easy-escape result supporting genuine altruistic motivation.",
              keywords: ["high-empathy", "volunteered", "effortless", "selfless"],
            },
            {
              point: "Names Cialdini's negative-state relief (or empathic joy) counter-explanation.",
              keywords: ["cialdini", "negative-state", "empathic joy"],
            },
            {
              point: "Explains how the egoistic account reinterprets helping as relieving one's own vicarious sadness/mood.",
              keywords: ["sadness", "mood", "egoistically"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Briefly summarises Batson's study without highlighting the easy-escape logic or egoistic critique." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains why high empathy under easy escape supports altruism and accurately explains Cialdini's egoistic alternative." },
          ],
          hints: [
            "Focus on the decisive cell: *high empathy + easy escape* — why can't simple physical arousal avoidance explain helping there?",
            "Contrast Batson directly with Cialdini's (1987) negative-state relief model.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "attraction-biological-cognitive-social",
          strategy: "Paper 1 Sec A — Methodological evaluation",
          marks: 4,
          question:
            "Outline **two** methodological limitations of Gupta & Singh's (1982) study of arranged and love marriages, linking each to an FA2027 Core Concept (**Change**, **Causality**, **Measurement**, or **Bias**). [4 marks]",
          modelAnswer:
            "First, Gupta & Singh used a cross-sectional snapshot comparing separate couples married for 1, 5, and 10+ years rather than following identical couples longitudinally. This weakens inferences about Change and Causality because older cohorts grew up under stricter divorce stigma and dissatisfied couples may have separated earlier (survivorship bias). Second, the researchers administered Rubin's Loving and Liking Scales developed in the United States, introducing imposed etic Measurement bias: Western romantic-passion items may fail to capture Indian marital ideals centred on family duty, mutual respect, and interdependence, alongside social desirability distortion in self-reports.",
          markScheme: [
            {
              point: "Identifies the cross-sectional design limitation (comparing separate cohorts rather than tracking the same couples).",
              keywords: ["cross-sectional", "cohorts", "longitudinally"],
            },
            {
              point: "Links the design flaw explicitly to Change/Causality via cohort effects or survivorship bias.",
              keywords: ["survivorship", "stigma", "causality", "change"],
            },
            {
              point: "Identifies the measurement limitation (US-developed Rubin scales / imposed etic or self-report bias).",
              keywords: ["rubin", "etic", "desirability", "scales"],
            },
            {
              point: "Links the measurement flaw explicitly to Measurement/Bias (cultural validity of love constructs in India).",
              keywords: ["duty", "interdependence", "measurement", "bias"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "States generic sample-size critiques without addressing cross-sectional design or etic scale validity." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains both cross-sectional (Change/Causality) and imposed-etic/self-report (Measurement/Bias) limitations." },
          ],
          hints: [
            "Limitation 1: Look at the *time* design (cross-sectional vs longitudinal) -> link to Change & Causality.",
            "Limitation 2: Look at the *instrument* (Rubin's US scales used in Jaipur, India) -> link to Measurement & Bias.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "prosocial-bystander-altruism",
          strategy: "Paper 1 Sec B — Unseen bystander vignette",
          marks: 6,
          diagram: `<svg viewBox="0 0 480 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing helping percentages across three transit scenarios: ambiguous groan at 22 percent, clear collapse with silent crowd at 74 percent, and clear collapse with one named caller at 96 percent">
  <rect x="0" y="0" width="480" height="185" fill="#ffffff" rx="10"/>
  <text x="240" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1c1630">Simulated Transit Observational Data: Helping Rate (%)</text>
  <line x1="60" y1="145" x2="450" y2="145" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="35" x2="60" y2="145" stroke="#64748b" stroke-width="1.5"/>
  <text x="52" y="148" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">0%</text>
  <text x="52" y="92" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">50%</text>
  <text x="52" y="42" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">100%</text>
  <rect x="92" y="121" width="76" height="24" rx="4" fill="#ea580c"/>
  <text x="130" y="116" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9a3412">22%</text>
  <text x="130" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Ambiguous</text>
  <text x="130" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">groan (N=12)</text>
  <rect x="215" y="64" width="76" height="81" rx="4" fill="#7c3aed"/>
  <text x="253" y="59" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">74%</text>
  <text x="253" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Clear collapse</text>
  <text x="253" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">silent crowd</text>
  <rect x="338" y="39" width="76" height="106" rx="4" fill="#15803d"/>
  <text x="376" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">96%</text>
  <text x="376" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Clear collapse</text>
  <text x="376" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">+ direct callout</text>
</svg>`,
          question:
            "**Unseen Data Vignette (Paper 1 Section B):** Transport safety researchers coded helping rates across three commuter-train conditions (shown in the bar chart above). Using **Latané & Darley's 5-step model**, **Piliavin's Arousal–Cost–Reward Model**, and **Philpot et al.'s (2020) CCTV findings**, explain the dramatic jump from 22% to 74% to 96%. [6 marks]",
          modelAnswer:
            "In the ambiguous groan condition (22%), commuters suffer from Latané & Darley's Step 2 bottleneck — pluralistic ignorance: seeing 11 other riders remain motionless leads passengers to interpret the noise as harmless rather than an emergency (mirroring the 10% rate in the Smoke-Filled Room). Jumping to an unmistakable collapse lifts helping to 74%, aligning with Piliavin, Rodin & Piliavin's (1969) subway findings and Philpot et al.'s (2020) 90.9% real-world CCTV intervention rate: unambiguous distress heightens physiological arousal and makes the psychological guilt of doing nothing (cost of not helping) far exceed the low cost of stepping forward. Finally, pointing directly at a specific rider raises intervention to 96% by eliminating Step 3 diffusion of responsibility (shifting individual obligation from 1/12 to 100%) and clarifying Step 4 competence ('call emergency services'), showing how active-bystander cues convert passive crowds into immediate helpers.",
          markScheme: [
            {
              point: "Explains the low 22% ambiguous rate via pluralistic ignorance (Step 2 misinterpretation from calm peers).",
              keywords: ["pluralistic ignorance", "step 2", "smoke-filled", "harmless"],
            },
            {
              point: "Explains the rise to 74% under clear collapse using Piliavin's Arousal–Cost–Reward model (high arousal + high cost of not helping).",
              keywords: ["piliavin", "arousal", "guilt", "not helping"],
            },
            {
              point: "Connects the high real-world intervention rate to Philpot et al.'s (2020) CCTV findings (90.9%).",
              keywords: ["philpot", "cctv", "90.9%"],
            },
            {
              point: "Explains why direct callout boosts helping to 96% by eliminating diffusion of responsibility (Step 3, 1/12 → 100%).",
              keywords: ["diffusion", "step 3", "1/12", "obligation"],
            },
            {
              point: "Notes how direct instructions also lower Step 4/5 barriers (competence / audience inhibition).",
              keywords: ["step 4", "competence", "active-bystander"],
            },
            {
              point: "References the specific numerical shifts (22% → 74% → 96%) accurately throughout.",
              keywords: ["22%", "74%", "96%"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes the graph bars with vague references to 'the bystander effect'." },
            { band: "3–4", marks: [3, 4], descriptor: "Links two of the three conditions to specific mechanisms (e.g. pluralistic ignorance and diffusion) with partial theory support." },
            { band: "5–6", marks: [5, 6], descriptor: "Systematically accounts for all three bars using Latané & Darley, Piliavin, and Philpot with quantitative precision." },
          ],
          hints: [
            "Explain each bar transition separately: why is Bar 1 (22%) so low? Why does Bar 2 (74%) leap upward? Why does Bar 3 (96%) nearly hit ceiling?",
            "Connect Bar 1 to Step 2, Bar 2 to Piliavin & Philpot, and Bar 3 to Step 3 (`1/12` → `1/1`).",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "attraction-biological-cognitive-social",
          strategy: "Paper 1 Sec B — HL Technology Extension Vignette",
          marks: 6,
          question:
            "**Unseen HL Vignette (Technology Extension):** A popular dating platform uses photo-first swiping and an AI engagement engine that continually shows users dozens of highly attractive local profiles every evening, even after they match with someone compatible. Several long-term users report feeling dissatisfied with dates who seemed promising initially and abandoning relationships after minor disagreements.\n\nAnalyse how this platform design interacts with **Walster's attractiveness research**, **Rusbult's Investment Model**, and **Festinger's proximity/mere exposure findings**. [6 marks]",
          modelAnswer:
            "Photo-first swiping hyper-activates the visual appearance heuristic identified in Walster et al.'s (1966) computer dance study while stripping out gradual personality disclosure and biological odour/non-verbal cues (Wedekind, 1995), encouraging superficial initial screening rather than realistic matching. Crucially, the AI engine's endless stream of attractive profiles artificially inflates perceived Quality of Alternatives (A) inside Rusbult's Investment Model (C = S − A + I). Because early digital interactions involve minimal intrinsic or extrinsic investments (low I), inflated alternatives sharply depress Commitment (C), motivating users to exit after trivial disagreements rather than investing in constructive accommodation (Voice). Finally, the app replaces Festinger et al.'s (1950) organic functional proximity — where repeated low-stakes real-world exposure builds warmth and trust over time (Zajonc, 1968) — with high-churn transactional comparisons, showing how HL Technology architectures reshape cognitive and sociocultural bonding processes.",
          markScheme: [
            {
              point: "Links photo-first swiping to Walster et al.'s (1966) physical-attractiveness effect while noting stripped-out deeper/biological cues.",
              keywords: ["walster", "superficial", "wedekind", "appearance"],
            },
            {
              point: "Analyses how continuous attractive profiles inflate Rusbult's Quality of Alternatives (A).",
              keywords: ["alternatives", "inflates", "endless"],
            },
            {
              point: "Connects low early Investment (I) + high A to weakened Commitment (C) and rapid exit instead of accommodation.",
              keywords: ["commitment", "exit", "accommodation", "investments"],
            },
            {
              point: "Contrasts algorithmic browsing with Festinger's (1950) functional proximity and Zajonc's mere exposure effect.",
              keywords: ["festinger", "proximity", "zajonc", "exposure"],
            },
            {
              point: "Synthesises the HL Technology insight that digital architecture actively alters human relationship cognition.",
              keywords: ["architecture", "transactional", "algorithmic"],
            },
            {
              point: "Explicitly grounds all points in details of the vignette (abandonment after minor disagreements, evening AI stream).",
              keywords: ["trivial", "disagreements", "swiping"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Offers everyday opinions on dating apps with minimal link to Walster, Rusbult, or Festinger." },
            { band: "3–4", marks: [3, 4], descriptor: "Applies two psychological frameworks accurately to the vignette, with partial integration of technology design." },
            { band: "5–6", marks: [5, 6], descriptor: "Crisply analyses all three frameworks, demonstrating how algorithmic choice architecture alters attractiveness screening, commitment, and proximity." },
          ],
          hints: [
            "Map photo-first swiping to Walster (1966) and missing real-world cues.",
            "Show how an endless evening stream directly spikes variable `A` (Alternatives) in Rusbult's `C = S − A + I`.",
            "Contrast digital choice overload with Festinger's everyday corridor familiarity.",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Paper 1 Sec B — HL Measurement & Responsibility Vignette",
          marks: 6,
          question:
            "**Unseen HL Vignette (Measurement & Responsibility):** A multinational bank requires every hiring manager to complete a single 10-minute Implicit Association Test (IAT) once per year. Anyone whose reaction-time score exceeds a fixed cutoff is formally reprimanded and barred from serving on interview panels.\n\nEvaluate this policy using the FA2027 Core Concepts of **Measurement** and **Responsibility**, referring to empirical critiques of the IAT. [6 marks]",
          modelAnswer:
            "From a Measurement standpoint, the IAT was designed by Greenwald et al. (1998) to bypass social desirability bias in explicit questionnaires by measuring millisecond sorting latencies, making it useful for studying group-level population trends. However, deploying one score to punish individual managers lacks psychometric justification: Oswald et al.'s (2013) meta-analysis demonstrated only modest test–retest reliability (r ≈ 0.4–0.5), meaning a manager's classification can flip randomly across weeks, and weak predictive validity for actual discriminatory hiring behaviour. Furthermore, construct validity is contested because slower incompatible latencies may reflect mere cultural familiarity with societal stereotypes rather than personal animus. From an ethical Responsibility standpoint, penalising employees using an unstable diagnostic cutoff risks unfair reputational harm, workplace resentment, and backfire effects without fixing biased hiring systems. A more responsible, evidence-based institutional approach would redesign decision structures — such as anonymised CV screening, structured rubric interviews, and Allport-consistent diverse panels — rather than policing unreliable individual latency cutoffs.",
          markScheme: [
            {
              point: "Acknowledges the Measurement rationale of the IAT (Greenwald et al., 1998: bypassing social desirability at group level).",
              keywords: ["greenwald", "desirability", "latencies", "group-level"],
            },
            {
              point: "Critiques poor individual test–retest reliability (Oswald et al., 2013; r ≈ 0.4–0.5).",
              keywords: ["oswald", "test-retest", "reliability", "0.4"],
            },
            {
              point: "Critiques weak predictive validity for real-world individual discrimination.",
              keywords: ["predictive validity", "discriminatory", "weak"],
            },
            {
              point: "Questions construct validity (cultural familiarity with stereotypes vs personal endorsement).",
              keywords: ["construct validity", "familiarity", "animus"],
            },
            {
              point: "Evaluates ethical Responsibility (unfair sanctions, reputational harm, resentment/backfire from invalid cutoffs).",
              keywords: ["reputational", "harm", "backfire", "sanctions", "penalising"],
            },
            {
              point: "Proposes structurally responsible alternatives (anonymised screening, structured rubrics, institutional design).",
              keywords: ["anonymised", "structured", "rubric", "structures"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Argues the policy seems unfair or helpful without citing psychometric reliability/validity evidence." },
            { band: "3–4", marks: [3, 4], descriptor: "Evaluates Measurement (reliability or validity) and mentions ethical fairness, but lacks Oswald et al. detail or structural alternatives." },
            { band: "5–6", marks: [5, 6], descriptor: "Balanced, rigorous evaluation integrating Greenwald, Oswald et al. (reliability, predictive & construct validity), ethical harm, and institutional reforms." },
          ],
          hints: [
            "Acknowledge why the bank chose the IAT first (social desirability limits on explicit surveys).",
            "Bring in Oswald et al. (2013): modest test–retest reliability + weak individual behavioural prediction + cultural familiarity confound.",
            "Close under Responsibility by proposing structural hiring fixes (anonymised CVs, structured rubrics).",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "maintenance-communication-breakdown",
          strategy: "Paper 1 Sec C — Core Concept: Change",
          marks: 9,
          question:
            "**Paper 1 Section C (Core Concept: Change):** Examine how psychological theories and research explain **Change** over time in romantic relationships (from formation through maintenance or dissolution). [9 marks]",
          modelAnswer:
            "Romantic relationships are never static; psychological research models Change as an interplay of neurobiological shifts, evolving cognitive appraisals, communication trajectories, and cultural timelines. Neurobiologically, Fisher et al. (2005) proposed that passionate dopamine-driven infatuation naturally transitions into calmer oxytocin- and vasopressin-mediated attachment as bonds mature. Culturally, however, the direction of emotional change varies: Gupta & Singh (1982) observed passionate love declining over time in Indian autonomous marriages while companionship love rose across 5–10+ years in arranged marriages — though its cross-sectional design cannot separate true longitudinal growth from cohort and survivorship confounds. During ongoing maintenance, cognitive framing buffers against decline: Murray, Holmes & Griffin's (1996) longitudinal study demonstrated that positive illusions predicted rising satisfaction and lower conflict over twelve months, whereas distress-maintaining attributions accelerate erosion. Observationally, Gottman & Levenson (1992, 2000) tracked how falling below a 5 : 1 positive-to-negative conflict ratio and escalating into the Four Horsemen — particularly contempt — forecast marital dissolution years ahead, while clinical Gottman interventions show communication patterns can also be retrained constructively. When decline continues, Rusbult's Investment Model explains uneven change: declining satisfaction may not trigger separation until investments feel bearable or alternatives improve. Finally, Duck's (1982, 2007) Phase Model maps breakup as a four-stage communicative transformation — Intrapsychic, Dyadic, Social, and Grave-Dressing — though critics note real couples often loop back toward repair and collectivistic families frequently intervene before private dyadic rupture. Ultimately, studying relationship Change requires genuine longitudinal designs rather than single-time snapshots.",
          markScheme: [
            {
              point: "Explains biological transition across relationship stages (Fisher: dopamine attraction → oxytocin/vasopressin attachment).",
              keywords: ["fisher", "dopamine", "oxytocin", "vasopressin"],
            },
            {
              point: "Examines cross-cultural trajectories of change via Gupta & Singh (1982) with cross-sectional critique.",
              keywords: ["gupta", "arranged", "cross-sectional", "survivorship"],
            },
            {
              point: "Analyses longitudinal cognitive protection via Murray, Holmes & Griffin's (1996) positive illusions.",
              keywords: ["murray", "positive illusions", "twelve months"],
            },
            {
              point: "Explains behavioural escalation toward breakdown via Gottman's 5:1 ratio and contempt, plus potential for therapeutic repair.",
              keywords: ["gottman", "5 : 1", "contempt", "retrained"],
            },
            {
              point: "Applies Rusbult's Investment Model to explain delayed separation when satisfaction drops.",
              keywords: ["rusbult", "investments", "alternatives"],
            },
            {
              point: "Maps staged breakdown via Duck's four phases (Intrapsychic, Dyadic, Social, Grave-Dressing).",
              keywords: ["duck", "intrapsychic", "dyadic", "grave-dressing"],
            },
            {
              point: "Evaluates non-linearity and cultural variation in Duck's phase progression.",
              keywords: ["loop", "collectivistic", "rupture"],
            },
            {
              point: "Highlights the methodological necessity of longitudinal measurement to track genuine intra-couple Change.",
              keywords: ["longitudinal", "snapshots", "trajectories"],
            },
            {
              point: "Maintains explicit analytical focus on the Core Concept of Change across formation, maintenance, and dissolution.",
              keywords: ["static", "interplay", "transformation"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–3", marks: [1, 3], descriptor: "Lists theories of attraction or breakup descriptively without analysing how relationships evolve over time." },
            { band: "4–6", marks: [4, 6], descriptor: "Explains change across at least two stages (e.g., maintenance and dissolution) using Gottman, Rusbult, or Duck accurately." },
            { band: "7–9", marks: [7, 9], descriptor: "Comprehensive, well-evaluated examination of Change spanning biological, cognitive, behavioural, and cultural trajectories plus longitudinal methodology." },
          ],
          hints: [
            "Trace Change chronologically: neurochemical transition (Fisher) & cultural arcs (Gupta & Singh) → longitudinal maintenance (Murray, Gottman) → commitment thresholds (Rusbult) → staged dissolution (Duck).",
            "Include methodological evaluation of *how* psychologists measure Change (longitudinal vs cross-sectional).",
          ],
        },
        {
          id: "5-context-human-relationships-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "prejudice-stereotyping-conflict",
          strategy: "Paper 1 Sec C — 15-mark Extended Response (Responsibility)",
          marks: 15,
          question:
            "**Paper 1 Section C Extended Response (Core Concept: Responsibility):** Discuss the role of **ethical and societal Responsibility** in both investigating and reducing **prejudice and intergroup conflict**. [15 marks]",
          modelAnswer:
            "In FA2027 Human Relationships, the Core Concept of Responsibility operates on two complementary levels: protecting vulnerable participants during research and applying psychological evidence ethically to reduce real-world harm from prejudice. Historically, landmark field research exposed severe ethical tensions. In Sherif et al.'s (1954, 1961) Robbers Cave experiment, researchers covertly deceived twenty-two 11-year-old boys into believing they were attending an ordinary summer camp, deliberately engineered zero-sum tournaments that provoked raids, fistfights, and emotional distress, and obtained neither informed child assent nor a meaningful right to withdraw. While Sherif's team acted responsibly during Stage 3 by repairing hostility through superordinate goals before sending the boys home, modern institutional review boards would reject manipulating minors into active aggression. Even cognitive laboratory experiments demand ethical vigilance: Steele & Aronson's (1995) stereotype threat protocol temporarily activated distressing racial-ability doubts among undergraduates, making careful debriefing and restoration of self-esteem essential. Furthermore, researchers carry epistemic responsibility regarding Measurement and public claims: Oswald et al. (2013) warned that overselling individual IAT scores as definitive prejudice diagnoses can lead institutions to enact unfair sanctions, while Flore & Wicherts (2015) stressed pre-registration to curb publication bias in stereotype threat research. Beyond research ethics, psychologists bear societal responsibility to translate theory into effective, equitable interventions. Sherif's finding that mere pleasant contact failed — whereas superordinate goals succeeded — directly informed Allport's (1954) Contact Hypothesis (equal status, common goals, intergroup cooperation, institutional support). Pettigrew & Tropp's (2006) meta-analysis of 515 studies (>250,000 participants) confirmed contact reliably reduces prejudice (r = −0.21) by decreasing intergroup anxiety and building empathy. Aronson et al.'s (1978) Jigsaw Classroom exemplifies socially responsible applied psychology: deployed in newly desegregated Austin schools, interdependent 5–6 student teams reduced ethnic stereotyping and boosted minority achievement without harming majority students. Yet societal responsibility also requires humility about structural limits: classroom jigsaw groups or brief diversity workshops cannot by themselves dismantle residential segregation, unequal school funding, or engagement-driven algorithmic echo chambers online. Consequently, fulfilling Responsibility in intergroup psychology means upholding strict participant welfare, reporting effect sizes transparently without hype, and pairing evidence-based interpersonal contact interventions with honest advocacy for institutional and structural fairness.",
          markScheme: [
            {
              point: "Frames Responsibility dualistically: ethical protection of participants AND societal application to reduce harm.",
              keywords: ["complementary", "vulnerable", "real-world harm"],
            },
            {
              point: "Critiques ethical breaches in Sherif's Robbers Cave (covert deception of 11-year-old boys, engineered aggression/distress, no child assent/withdrawal).",
              keywords: ["sherif", "deceived", "assent", "withdraw"],
            },
            {
              point: "Balances Sherif evaluation by noting Stage 3 repair of hostility before camp ended.",
              keywords: ["stage 3", "repairing", "superordinate"],
            },
            {
              point: "Addresses ethical responsibility in laboratory stereotype threat studies (temporary distress, need for thorough debriefing).",
              keywords: ["steele", "debriefing", "self-esteem"],
            },
            {
              point: "Links epistemic Responsibility to IAT critiques (Oswald et al., 2013: avoiding unfair institutional misuse of noisy scores).",
              keywords: ["oswald", "iat", "overselling", "sanctions"],
            },
            {
              point: "Links scientific integrity to pre-registration and publication bias (Flore & Wicherts, 2015).",
              keywords: ["flore", "pre-registration", "publication bias"],
            },
            {
              point: "Explains how failure of mere contact shaped Allport's four optimal conditions.",
              keywords: ["allport", "equal status", "institutional support"],
            },
            {
              point: "Supports applied interventions with Pettigrew & Tropp's (2006) 515-study meta-analysis (r = −0.21; reduced anxiety & empathy).",
              keywords: ["pettigrew", "515", "anxiety", "empathy"],
            },
            {
              point: "Evaluates Aronson's (1978) Jigsaw Classroom as exemplary applied societal responsibility in desegregated schools.",
              keywords: ["aronson", "jigsaw", "desegregated", "minority"],
            },
            {
              point: "Evaluates structural limitations: classroom interventions alone cannot erase economic/residential inequality.",
              keywords: ["structural", "segregation", "funding"],
            },
            {
              point: "Connects contemporary societal responsibility to online algorithmic echo chambers / digital polarisation.",
              keywords: ["algorithmic", "echo chambers", "online"],
            },
            {
              point: "Demonstrates accurate knowledge of modern ethical governance (IRBs, vulnerable minors).",
              keywords: ["review boards", "minors", "welfare"],
            },
            {
              point: "Weighs ecological realism against participant harm systematically.",
              keywords: ["tensions", "aggression", "vigilance"],
            },
            {
              point: "Integrates Measurement/Bias concepts smoothly in service of Responsibility.",
              keywords: ["epistemic", "transparently", "effect sizes"],
            },
            {
              point: "Delivers a cohesive, balanced concluding judgement on ethical and societal Responsibility.",
              keywords: ["fairness", "dismantle", "advocacy"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–3", marks: [1, 3], descriptor: "Lists basic ethical rules (consent, debriefing) with minimal tie to specific prejudice studies or interventions." },
            { band: "4–6", marks: [4, 6], descriptor: "Evaluates ethics in Sherif or Steele & Aronson and mentions Jigsaw/Allport, but lacks deeper societal or measurement-responsibility links." },
            { band: "7–9", marks: [7, 9], descriptor: "Discusses both research ethics and applied interventions accurately using relevant studies (Sherif, Allport, Aronson)." },
            { band: "10–12", marks: [10, 12], descriptor: "Strong critical discussion uniting research ethics, psychometric responsibility (IAT/publication bias), and applied prejudice reduction." },
            { band: "13–15", marks: [13, 15], descriptor: "Comprehensive, mature FA2027 evaluation weaving research ethics, epistemic integrity, Jigsaw/Contact efficacy, and structural limits into an authoritative judgement." },
          ],
          hints: [
            "Divide Responsibility cleanly into two halves: (1) Research & Epistemic Responsibility (Sherif child ethics, Steele & Aronson debriefing, IAT/publication bias honesty) and (2) Societal Responsibility (Allport, Pettigrew & Tropp, Aronson's Jigsaw Classroom + structural limits).",
            "Do not just praise the Jigsaw Classroom — evaluate what interpersonal contact can *and cannot* solve alone.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "5-context-human-relationships-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Multi-relative Hamilton's Rule summation",
      question:
        "During an emergency, an individual rescues **one full sibling** ({{r = 0.5}}, {{B = 3}}), **one half-sibling** ({{r = 0.25}}, {{B = 4}}), and **two first cousins** ({{r = 0.125}}, {{B = 2}} each). Calculate the **total indirect fitness gain** ({{r_1 B_1 + r_2 B_2 + ...}}) across all four relatives.",
      answer: { type: "number", value: 3 },
      traps: [
        {
          spec: { type: "number", value: 2.75 },
          feedback: "Remember there are **two** first cousins, each contributing {{0.125 * 2 = 0.25}}, so together they add {{0.5}}, not {{0.25}}.",
        },
        {
          spec: { type: "number", value: 11 },
          feedback: "Multiply each relative's benefit {{B}} by their genetic relatedness {{r}} before summing.",
        },
      ],
      hints: [
        "Compute {{r * B}} separately for each relative category: full sibling, half-sibling, and two cousins.",
        "Full sibling: {{0.5 * 3 = 1.5}}; half-sibling: {{0.25 * 4 = 1.0}}; two cousins: {{2 * 0.125 * 2 = 0.5}}.",
        "Add the three subtotals together.",
      ],
      solution: [
        "Full sibling: {{0.5 * 3 = 1.5}}.",
        "Half-sibling: {{0.25 * 4 = 1.0}}.",
        "Two first cousins: {{2 * (0.125 * 2) = 0.5}}.",
        "Total indirect fitness gain = {{1.5 + 1.0 + 0.5 = 3}} units.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Gottman 5:1 conflict rebalancing",
      question:
        "Midway through a relationship-coaching session, a couple has accumulated **14 positive** and **6 negative** interactions. Assuming they add zero further negative interactions, how many **additional positive interactions** must they generate to reach Gottman's 5 : 1 stability threshold?",
      answer: { type: "number", value: 16 },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30 is the *total* positive interactions required; subtract the 14 positive interactions they already have ({{30 - 14 = 16}}).",
        },
      ],
      hints: [
        "First calculate the *total* positive interactions required for 6 negative interactions to meet 5 : 1.",
        "Total needed = {{5 * 6 = 30}}.",
        "Subtract the 14 positive interactions already recorded.",
      ],
      solution: [
        "To achieve a {{5 : 1}} ratio with {{6}} negative interactions, the couple needs {{5 * 6 = 30}} total positive interactions.",
        "They already have {{14}}, so they need {{30 - 14 = 16}} additional positive interactions.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Relative percentage drop (Smoke-Filled Room)",
      question:
        "In Latané & Darley's (1968) smoke-filled room study, reporting fell from 75% (alone) to 10% (with two passive confederates). Calculate the **relative percentage decrease** from the alone baseline, rounded to **1 decimal place** (enter number or %).",
      answer: { type: "number", value: 86.7, tolerance: 0.15, display: "86.7%" },
      traps: [
        {
          spec: { type: "number", value: 65 },
          feedback: "65 is the percentage-point difference; divide 65 by the original baseline (75) and multiply by 100.",
        },
        {
          spec: { type: "number", value: 13.3, tolerance: 0.15 },
          feedback: "13.3% is the fraction still helping ({{10 / 75}}), not the percentage *decrease* ({{65 / 75}}).",
        },
      ],
      hints: [
        "Find the absolute drop: {{75 - 10 = 65}}.",
        "Divide 65 by the baseline 75, then multiply by 100.",
        "Round {{86.666...%}} to 1 decimal place.",
      ],
      solution: [
        "Absolute decrease = {{75 - 10 = 65}} percentage points.",
        "Relative percentage decrease = {{(65 / 75) * 100 = 86.666...% ≈ 86.7%}}.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "prosocial-bystander-altruism",
      strategy: "Measurement vs Responsibility trade-off in bystander research",
      marks: 6,
      question:
        "Evaluate the methodological tension between **ecological validity (Measurement)** and **ethical protection (Responsibility)** across bystander research, comparing **Darley & Latané (1968)**, **Piliavin et al. (1969)**, and **Philpot et al. (2020)**. [6 marks]",
      modelAnswer:
        "Bystander research illustrates a sharp trade-off between Measurement realism and ethical Responsibility. Darley & Latané's (1968) laboratory intercom seizure study achieved tight control over witness count (isolating diffusion of responsibility cleanly) and allowed immediate debriefing, yet artificial isolated booths lowered ecological validity and temporary deception still caused acute stress for students who thought a peer was dying. Piliavin, Rodin & Piliavin (1969) maximised ecological realism by staging realistic collapses on NYC subways, showing high intervention (95% cane) without crowd diffusion; however, this came at heavy ethical cost because unsuspecting commuters gave no informed consent, risked lasting distress or guilt, and left the train un-debriefed. Contemporary research partially resolves this dilemma: Philpot et al. (2020) analysed existing public CCTV footage of 219 real conflicts across three nations, capturing genuine naturalistic behaviour (90.9% intervention) without artificially provoking harm or deceiving bystanders — although archival CCTV sacrifices experimental control over confounding variables and still demands strict privacy anonymisation.",
      markScheme: [
        {
          point: "Evaluates Darley & Latané (1968): high experimental control + debriefing, vs low ecological validity and acute stress from deception.",
          keywords: ["intercom", "control", "debriefing", "stress"],
        },
        {
          point: "Evaluates Piliavin et al. (1969): high naturalistic realism (95% cane) vs severe ethical breaches (no consent, distress/guilt, un-debriefed).",
          keywords: ["piliavin", "95%", "consent", "un-debriefed"],
        },
        {
          point: "Evaluates Philpot et al. (2020) CCTV method: naturalistic realism (90.9%) without staging harm or deceiving witnesses.",
          keywords: ["philpot", "cctv", "90.9%", "harm"],
        },
        {
          point: "Notes residual limits of archival CCTV (loss of experimental causality/control + privacy anonymisation).",
          keywords: ["archival", "confounding", "anonymisation", "privacy"],
        },
        {
          point: "Explicitly frames the analysis around Measurement vs Responsibility trade-offs.",
          keywords: ["trade-off", "realism", "dilemma"],
        },
        {
          point: "Synthesises how combining methods mitigates any single design's weakness.",
          keywords: ["resolves", "naturalistic", "booths"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions basic ethics or lab artificiality in one study without comparing across paradigms." },
        { band: "3–4", marks: [3, 4], descriptor: "Compares Darley & Latané with Piliavin effectively, with limited discussion of modern archival CCTV." },
        { band: "5–6", marks: [5, 6], descriptor: "Sophisticated three-way methodological and ethical comparison uniting Measurement realism, causal control, and Responsibility." },
      ],
      hints: [
        "Build a three-step progression: Lab experiment (Darley & Latané) → Covert field experiment (Piliavin) → Archival CCTV observation (Philpot 2020).",
        "Identify BOTH a Measurement strength/limit AND a Responsibility strength/limit for each of the three paradigms.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "prejudice-stereotyping-conflict",
      strategy: "HL Core Concept: Bias (WEIRD, Etic & Publication Bias)",
      marks: 9,
      question:
        "**HL Synthesis (Core Concept: Bias):** Evaluate how **WEIRD sampling bias**, **imposed etic measurement bias**, and **publication bias** threaten the validity of psychological conclusions in Human Relationships. [9 marks]",
      modelAnswer:
        "Psychological knowledge in Human Relationships is vulnerable to three compounding layers of Bias that distort claims of universality and effect magnitude. First, WEIRD sampling bias (Western, Educated, Industrialised, Rich, Democratic) skews foundational theories: Wedekind et al.'s (1995) MHC scent study tested Swiss university students, Gottman's early Love Lab cohorts sampled mainly white US heterosexual couples, and Sherif's Robbers Cave tested 22 white middle-class American boys. Generalising these patterns globally risks mistaking local cultural scripts for human universals — as exposed when Eagly & Wood (1999) showed Buss's (1989) mate-preference sex differences shrink in gender-equal nations and Levine et al. (2001) revealed massive cross-city helping gaps (93% Rio vs 40% Kuala Lumpur). Second, imposed etic measurement bias occurs when researchers export Western instruments unchanged into diverse settings: applying Rubin's US Loving Scale in Gupta & Singh (1982) or imposing Duck's individualistic Dyadic-before-Social breakup sequence onto collectivistic families obscures emic relational meanings centred on kinship duty and community harmony. Third, publication bias distorts the scientific literature itself: Flore & Wicherts's (2015) meta-analysis of stereotype threat detected asymmetrical funnel plots favouring small significant lab demonstrations while null replications stayed unpublished, inflating perceived real-world effect sizes; similarly, Oswald et al. (2013) challenged overconfident claims about individual IAT prediction. Mitigating these three biases requires cross-cultural collaboration using emic-informed measures, transparent pre-registration of null findings, and integrating HL Culture lenses across all three approaches.",
      markScheme: [
        {
          point: "Defines WEIRD sampling bias accurately and cites concrete Human Relationships examples (Wedekind, Gottman, Sherif).",
          keywords: ["weird", "wedekind", "gottman", "sherif"],
        },
        {
          point: "Uses cross-cultural counter-evidence (Eagly & Wood 1999 or Levine 2001) to expose limits of Western universalism.",
          keywords: ["eagly", "levine", "universals", "93%"],
        },
        {
          point: "Explains imposed etic vs emic measurement bias accurately.",
          keywords: ["etic", "emic", "instruments", "kinship"],
        },
        {
          point: "Applies etic bias concretely to Gupta & Singh's Rubin scales or Duck's individualistic dissolution model.",
          keywords: ["rubin", "gupta", "duck", "collectivistic"],
        },
        {
          point: "Explains publication bias using funnel-plot asymmetry / file-drawer effect in Flore & Wicherts (2015).",
          keywords: ["flore", "funnel", "null", "unpublished"],
        },
        {
          point: "Integrates measurement/overstatement critique from Oswald et al. (2013) on IAT validity.",
          keywords: ["oswald", "iat", "prediction"],
        },
        {
          point: "Evaluates how the three bias layers compound to distort psychological conclusions.",
          keywords: ["compounding", "magnitude", "distort"],
        },
        {
          point: "Proposes rigorous corrective reforms (pre-registration, emic collaboration, HL Culture integration).",
          keywords: ["pre-registration", "collaboration", "reforms", "mitigating"],
        },
        {
          point: "Sustains high-level HL conceptual depth across multiple sections of Context 3.",
          keywords: ["scripts", "replications", "meanings"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–3", marks: [1, 3], descriptor: "Mentions small Western samples generally without distinguishing etic or publication bias." },
        { band: "4–6", marks: [4, 6], descriptor: "Explains two of the three bias types with relevant Human Relationships studies." },
        { band: "7–9", marks: [7, 9], descriptor: "Masterful HL evaluation systematically analysing WEIRD, imposed-etic, and publication bias with cross-cultural and meta-analytic evidence plus methodological remedies." },
      ],
      hints: [
        "Structure cleanly in three analytical pillars: (1) WEIRD samples (Wedekind/Gottman/Sherif vs Levine/Eagly), (2) Imposed etic vs emic (Rubin/Gupta & Singh, Duck), (3) Publication/measurement bias (Flore & Wicherts funnel plots, Oswald IAT).",
        "Conclude with concrete scientific reforms (pre-registration, emic adaptation).",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "prosocial-bystander-altruism",
      strategy: "HL Extensions: Technology + Motivation in Online Relationships",
      marks: 9,
      question:
        "**HL Synthesis (Technology & Motivation Extensions):** Analyse how **digital platforms** and **motivational processes** transform (a) **bystander intervention** during cyberbullying and (b) **intergroup polarisation** compared with face-to-face settings. [9 marks]",
      modelAnswer:
        "Digital architectures fundamentally alter the cognitive, social, and motivational levers governing both bystanderism and intergroup conflict. In cyberbullying, face-to-face cues that drove high intervention in Piliavin et al. (1969) and Philpot et al. (2020) — visible distress, immediate physiological arousal, and public accountability — are sharply attenuated behind screens. Massive view counts intensify Latané & Darley's diffusion of responsibility (shrinking individual share 1/N toward zero), while online disinhibition and low perceived cost of scrolling past eliminate Piliavin's guilt penalty for non-intervention. Motivationally, Self-Determination Theory (Deci & Ryan) highlights why superficial extrinsic nudges (such as virtue-signalling badges) rarely sustain genuine helping compared with autonomous empathy and relatedness toward peers; conversely, fear of out-group retaliation suppresses speaking up. Simultaneously, engagement-optimising social-media algorithms reshape intergroup polarisation. Rather than fostering Allport's (1954) optimal contact conditions — equal status, common goals, cooperation, and supportive moderation — feeds monetise outrage by amplifying extreme minority out-group statements. Cognitively, this supercharges Hamilton & Gifford's (1976) illusory correlation and Tajfel & Turner's out-group homogeneity effect inside ideological echo chambers, rewarding in-group validation with variable-ratio dopamine feedback (likes and reposts). Yet technology is not purely deterministic: structured online communities with explicit anti-harassment authority norms, private direct-callout reporting tools (countering 1/N diffusion), and cross-group cooperative projects can restore autonomous prosocial motivation and constructive contact.",
      markScheme: [
        {
          point: "Contrasts online screen distance with face-to-face arousal/visibility in Piliavin (1969) and Philpot (2020).",
          keywords: ["piliavin", "philpot", "arousal", "screens"],
        },
        {
          point: "Applies Latané & Darley's diffusion of responsibility (1/N) and lowered cost of not helping to cyberbullying.",
          keywords: ["diffusion", "1/n", "guilt", "scrolling"],
        },
        {
          point: "Integrates HL Motivation (Self-Determination Theory: autonomous empathy/relatedness vs extrinsic virtue signalling).",
          keywords: ["self-determination", "autonomous", "relatedness", "extrinsic"],
        },
        {
          point: "Analyses algorithmic outrage amplification against Allport's missing optimal contact conditions.",
          keywords: ["allport", "outrage", "algorithms", "moderation"],
        },
        {
          point: "Connects extreme out-group posts to illusory correlation (Hamilton & Gifford) and out-group homogeneity (SIT).",
          keywords: ["illusory correlation", "out-group homogeneity", "echo chambers"],
        },
        {
          point: "Links platform engagement loops to biological/motivational reward reinforcement (dopamine / variable-ratio likes).",
          keywords: ["dopamine", "variable-ratio", "likes"],
        },
        {
          point: "Balances critique by avoiding technological determinism — identifying constructive platform redesigns.",
          keywords: ["deterministic", "direct-callout", "cooperative"],
        },
        {
          point: "Shows explicit cross-extension integration between Technology and Motivation.",
          keywords: ["disinhibition", "retaliation", "levers"],
        },
        {
          point: "Maintains analytical precision comparing digital vs face-to-face contexts throughout.",
          keywords: ["attenuated", "accountability", "validation"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–3", marks: [1, 3], descriptor: "Describes cyberbullying or social media polarisation informally without applying psychological models." },
        { band: "4–6", marks: [4, 6], descriptor: "Applies bystander and prejudice theories to online contexts accurately, with limited integration of motivational mechanisms." },
        { band: "7–9", marks: [7, 9], descriptor: "Incisive HL analysis uniting bystander models, SDT/reward motivation, Allport/illusory correlation, and balanced platform-design solutions." },
      ],
      hints: [
        "Half 1 (Cyberbullying): contrast Piliavin/Philpot face-to-face cues with online `1/N` diffusion, low guilt cost, and SDT autonomous vs extrinsic motivation.",
        "Half 2 (Polarisation): connect engagement algorithms + variable-ratio dopamine likes to illusory correlation, out-group homogeneity, and missing Allport conditions.",
        "Finish with balanced nuance — avoid pure technological determinism by noting prosocial design fixes.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "prejudice-stereotyping-conflict",
      strategy: "Paper 1 Sec C — 15-mark Extended Response (Formation & Reduction of Prejudice)",
      marks: 15,
      question:
        "**Paper 1 Section C Extended Response:** To what extent can **cognitive** and **sociocultural** theories explain both the **origins** and the **reduction** of prejudice and intergroup conflict? [15 marks]",
      modelAnswer:
        "Cognitive and sociocultural theories explain a substantial share of how prejudice originates and how it can be reduced, yet each level exposes gaps that require integrating both lenses alongside structural and methodological critiques. On the cognitive side, stereotyping can emerge even without hostility or competition: Hamilton & Gifford (1976) showed that pairing two statistically rare categories — minority Group B and negative acts — produces an illusory correlation even when Group A and Group B share an identical 30.8% negative rate. Once stereotypes exist, they impair targets cognitively: Steele & Aronson (1995) demonstrated that framing a difficult verbal test as diagnostic of ability triggered stereotype threat among African American students, consuming working memory capacity and depressing scores (though Flore & Wicherts's 2015 meta-analysis cautions that publication bias inflates lab effect sizes). Implicit measurement via the IAT (Greenwald et al., 1998) reveals automatic associations outside conscious report, yet Oswald et al. (2013) demonstrated modest reliability and weak prediction of individual discrimination, proving cognitive scores alone do not determine real-world behaviour. Sociocultural theories add the motivational and structural drivers missing from pure information-processing accounts. Tajfel & Turner's (1979) Social Identity Theory explains how mere social categorisation triggers in-group favouritism, positive distinctiveness, and out-group homogeneity — explaining why Sherif's Eagles insulted the Rattlers immediately on learning another cabin existed. Sherif et al.'s (1961) Realistic Conflict Theory demonstrated that zero-sum competition for scarce resources (camp trophies and pocket knives) dramatically escalates hostility into raids and aggression, despite ethical Responsibility concerns and an all-white middle-class boy sample (Bias). Crucially, combining cognitive and sociocultural insights unlocks effective conflict reduction. Sherif's Stage 3 proved mere pleasant contact failed, whereas superordinate goals dissolved hostility. Allport's (1954) Contact Hypothesis formalised four optimal conditions — equal status, common goals, intergroup cooperation, and institutional support — which Pettigrew & Tropp's (2006) 515-study meta-analysis confirmed reliably reduce prejudice (r = −0.21), chiefly by lowering intergroup anxiety and boosting cognitive empathy/perspective-taking. Applied directly in desegregated Texas schools, Aronson's (1978) Jigsaw Classroom converted peer rivalry into equal-status interdependence, improving both cross-ethnic attitudes and minority achievement. Nevertheless, psychological theories face limits: interpersonal contact programmes struggle where deep economic inequality, segregated neighbourhoods, or political incentives actively sustain competition. Therefore, to a large but bounded extent, integrating cognitive heuristics with sociocultural identity and goal-structure models offers a rigorous, evidence-based explanation of prejudice and its reduction — provided interventions also address institutional structures rather than individual bias alone.",
      markScheme: [
        {
          point: "Explains cognitive origins via Hamilton & Gifford (1976) illusory correlation (30.8% equal negative rates + distinctiveness).",
          keywords: ["hamilton", "illusory correlation", "30.8%", "distinctiveness"],
        },
        {
          point: "Explains cognitive impact on targets via Steele & Aronson (1995) stereotype threat and working memory depletion.",
          keywords: ["steele", "stereotype threat", "working memory"],
        },
        {
          point: "Critiques stereotype threat generalizability via publication bias (Flore & Wicherts, 2015).",
          keywords: ["flore", "publication bias", "effect sizes"],
        },
        {
          point: "Evaluates implicit cognitive bias measurement (Greenwald IAT vs Oswald et al., 2013 reliability/validity limits).",
          keywords: ["greenwald", "iat", "oswald", "reliability"],
        },
        {
          point: "Explains sociocultural identity roots via Tajfel & Turner SIT (categorisation, positive distinctiveness, out-group homogeneity).",
          keywords: ["tajfel", "positive distinctiveness", "out-group homogeneity"],
        },
        {
          point: "Explains sociocultural competition via Sherif's (1961) Robbers Cave zero-sum rivalry.",
          keywords: ["sherif", "zero-sum", "rattlers", "raids"],
        },
        {
          point: "Integrates SIT + RCT nuance (hostility sparked before tournament began) plus Bias/Responsibility critiques of Robbers Cave.",
          keywords: ["cabin", "middle-class", "responsibility"],
        },
        {
          point: "Contrasts failed mere contact (Stage 3a) with effective superordinate goals (Stage 3b).",
          keywords: ["mere contact", "superordinate", "stage 3"],
        },
        {
          point: "States Allport's (1954) four optimal conditions accurately.",
          keywords: ["allport", "equal status", "common goals", "institutional support"],
        },
        {
          point: "Supports contact reduction with Pettigrew & Tropp's (2006) 515-study meta-analysis (r = −0.21).",
          keywords: ["pettigrew", "515", "0.21"],
        },
        {
          point: "Explains emotional/cognitive mediators of contact (reduced anxiety + increased empathy/perspective-taking).",
          keywords: ["anxiety", "empathy", "perspective-taking"],
        },
        {
          point: "Evaluates applied reduction via Aronson's (1978) Jigsaw Classroom in desegregated schools.",
          keywords: ["aronson", "jigsaw", "interdependence", "desegregated"],
        },
        {
          point: "Evaluates real-world structural boundaries (economic inequality, residential segregation, political incentives).",
          keywords: ["inequality", "segregated", "incentives"],
        },
        {
          point: "Explicitly answers the 'To what extent' command term with a calibrated judgement.",
          keywords: ["large but bounded extent", "substantial"],
        },
        {
          point: "Weaves cognitive and sociocultural explanations together rather than treating them as unrelated lists.",
          keywords: ["heuristics", "goal-structure", "institutional structures"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–3", marks: [1, 3], descriptor: "Describes prejudice or Robbers Cave briefly without connecting cognitive origins to evidence-based reduction." },
        { band: "4–6", marks: [4, 6], descriptor: "Covers origins and reduction with accurate study names, but evaluation and synthesis remain superficial." },
        { band: "7–9", marks: [7, 9], descriptor: "Solid explanation of both cognitive (illusory correlation/threat) and sociocultural (SIT/RCT/Allport) theories with some evaluation." },
        { band: "10–12", marks: [10, 12], descriptor: "Well-evaluated synthesis linking origins directly to reduction mechanisms (Pettigrew & Tropp, Jigsaw) with methodological critiques." },
        { band: "13–15", marks: [13, 15], descriptor: "Authoritative FA2027 essay integrating cognitive and sociocultural evidence, meta-analytic critiques, Core Concepts, and structural limits into a nuanced judgement." },
      ],
      hints: [
        "Cover BOTH halves requested by the prompt: Origins (Illusory Correlation + SIT + RCT + Threat/IAT) AND Reduction (Superordinate Goals + Allport + Pettigrew & Tropp + Jigsaw).",
        "Make the 'To what extent' judgement real by evaluating both methodological limits (Flore, Oswald, Sherif ethics/sample) and structural limits outside the lab/classroom.",
      ],
    },
    {
      id: "5-context-human-relationships-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "maintenance-communication-breakdown",
      strategy: "Paper 1 Sec C — Multi-Concept Synthesis across Formation, Maintenance & Dissolution",
      marks: 15,
      question:
        "**Paper 1 Section C Extended Response (Multi-Concept Synthesis):** Discuss how the FA2027 Core Concepts of **Perspective**, **Measurement**, and **Change** deepen our critical understanding of research on **relationship formation, maintenance, and dissolution**. [15 marks]",
      modelAnswer:
        "In IB Psychology FA2027 Compulsory Context 3, evaluating romantic relationships through Perspective, Measurement, and Change transforms isolated study summaries into rigorous scientific critique. First, **Perspective** prevents biological or cultural reductionism during relationship formation. Biological research — such as Wedekind et al.'s (1995) MHC scent-preference experiment and Fisher et al.'s (2005) dopamine/oxytocin neuroimaging — illuminates evolved sensory and neurochemical predispositions, yet hormonal contraception reversed Wedekind's effect and fMRI scans remain correlational. Integrating Cognitive perspectives (Byrne & Montoya's perceived similarity–attraction effect; Walster/Murstein's matching hypothesis) and Sociocultural perspectives (Festinger et al.'s 1950 functional proximity and Eagly & Wood's 1999 gender-equality reanalysis of Buss's 37-culture survey) proves attraction emerges from biopsychosocial interaction rather than fixed instinct. Second, **Measurement** exposes crucial trade-offs in how closeness and conflict are operationalised. In maintenance research, Gottman & Levenson (1992, 2000) achieved high inter-rater reliability and physiological triangulation by coding structured 15-minute lab discussions (identifying the 5 : 1 positivity ratio and Four Horsemen, especially contempt), yet filming inside an artificial apartment risked participant reactivity and early cohorts suffered WEIRD bias. Conversely, self-report instruments used in Gupta & Singh (1982) (Rubin's US Loving Scale) and Rusbult's Investment Model (meta-analysed across 52 studies by Le & Agnew, 2003, explaining ~61% of commitment variance) capture internal subjective states like perceived alternatives and satisfaction, but risk social desirability and imposed-etic cultural distortion when Western romantic norms are exported to collectivistic settings. Third, **Change** highlights why research design determines whether psychology truly captures relationship trajectories over time. Murray, Holmes & Griffin's (1996) longitudinal tracking demonstrated that mild positive illusions buffer couples and sustain rising satisfaction over twelve months, whereas Gupta & Singh's cross-sectional snapshot of Indian arranged versus love marriages confounded marital type with generational cohort and survivorship bias. In dissolution, Rusbult's model explains delayed change — why low satisfaction can coexist with high commitment when investments are heavy and alternatives scarce — while Duck's (1982, 2007) four-phase model (Intrapsychic, Dyadic, Social, Grave-Dressing) conceptualises breakup as evolving communication rather than a single event, yet carries an individualistic cultural bias because collectivistic families often intervene before private dyadic rupture and real couples may loop back toward repair. Together, applying Perspective, Measurement, and Change demonstrates that durable insights into human bonding require culturally sensitive longitudinal designs triangulating biological, cognitive, and sociocultural evidence.",
      markScheme: [
        {
          point: "Applies Perspective to formation: balances biological (Wedekind/Fisher) against cognitive (Byrne/Montoya/Walster) and sociocultural (Festinger) cues.",
          keywords: ["wedekind", "fisher", "montoya", "festinger"],
        },
        {
          point: "Includes cross-cultural Perspective critique via Eagly & Wood's (1999) reanalysis of Buss (1989).",
          keywords: ["eagly", "buss", "gender-equality", "reductionism"],
        },
        {
          point: "Applies Measurement to Gottman's Love Lab (structured coding reliability & physiology vs reactivity/WEIRD bias).",
          keywords: ["gottman", "inter-rater", "reactivity", "5 : 1"],
        },
        {
          point: "Highlights contempt as Gottman's strongest predictor within observational Measurement.",
          keywords: ["contempt", "horsemen", "triangulation"],
        },
        {
          point: "Evaluates self-report Measurement in Rusbult's Investment Model (Le & Agnew, 2003: 52 studies, 61% variance) vs social desirability.",
          keywords: ["le & agnew", "61%", "desirability"],
        },
        {
          point: "Evaluates imposed-etic Measurement distortion in Gupta & Singh's use of Rubin's US scales.",
          keywords: ["rubin", "imposed-etic", "distortion"],
        },
        {
          point: "Applies Change to longitudinal maintenance via Murray, Holmes & Griffin's (1996) positive illusions.",
          keywords: ["murray", "positive illusions", "twelve months"],
        },
        {
          point: "Contrasts longitudinal tracking with Gupta & Singh's cross-sectional cohort/survivorship confound.",
          keywords: ["cross-sectional", "cohort", "survivorship"],
        },
        {
          point: "Applies Rusbult's commitment formula to explain why Change (leaving) stalls under high investment and poor alternatives.",
          keywords: ["investments", "alternatives", "commitment"],
        },
        {
          point: "Maps staged breakdown Change via Duck's four phases (Intrapsychic, Dyadic, Social, Grave-Dressing).",
          keywords: ["duck", "intrapsychic", "dyadic", "grave-dressing"],
        },
        {
          point: "Evaluates cultural and non-linear critiques of Duck's dissolution phases (collectivistic family intervention, looping/repair).",
          keywords: ["collectivistic", "loop", "repair"],
        },
        {
          point: "Notes correlational vs experimental nuance in biological attraction studies (hormonal reversal / fMRI).",
          keywords: ["contraception", "correlational", "predispositions"],
        },
        {
          point: "Explicitly structures sustained analysis around all three named Core Concepts (Perspective, Measurement, Change).",
          keywords: ["perspective", "measurement", "trajectories"],
        },
        {
          point: "Integrates formation, maintenance, AND dissolution smoothly across the response.",
          keywords: ["biopsychosocial", "coexist", "evolving"],
        },
        {
          point: "Concludes with a coherent methodological synthesis advocating culturally sensitive longitudinal triangulation.",
          keywords: ["culturally sensitive", "longitudinal", "durable"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–3", marks: [1, 3], descriptor: "Summarises relationship studies descriptively with minimal explicit reference to the three Core Concepts." },
        { band: "4–6", marks: [4, 6], descriptor: "Addresses one or two Core Concepts accurately across part of the relationship lifecycle." },
        { band: "7–9", marks: [7, 9], descriptor: "Applies Perspective, Measurement, and Change across formation, maintenance, and dissolution with accurate research." },
        { band: "10–12", marks: [10, 12], descriptor: "Strong analytical integration of all three Core Concepts with specific methodological and cross-cultural evaluation." },
        { band: "13–15", marks: [13, 15], descriptor: "Exceptional FA2027 synthesis demonstrating how Perspective, Measurement, and Change deepen critique across the full relationship arc." },
      ],
      hints: [
        "Organise your essay directly around the three Core Concepts: **Perspective** (Formation triangulation), **Measurement** (Gottman lab coding vs Rubin/Rusbult self-report), and **Change** (Murray longitudinal vs Gupta cross-sectional, Rusbult inertia, Duck's 4 phases).",
        "Make sure every paragraph evaluates research *through* the concept rather than merely retelling study procedures.",
      ],
    },
  ],
};
