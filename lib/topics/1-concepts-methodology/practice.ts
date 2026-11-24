import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 Qs: 7 short + 3 written)
  // ===========================================================================
  quiz: [
    {
      id: "1-concepts-methodology-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "six-core-concepts",
      strategy: "Diagnose WEIRD sampling flaw via Core Concepts",
      question:
        "A cognitive study recruits 50 first-year undergraduates from a single British university and claims its reasoning pattern holds across all human cultures. State which single FA2027 Core Concept is primarily threatened by this WEIRD sample.",
      answer: {
        type: "text",
        accept: ["Bias", "bias", "sampling bias"],
        display: "Bias",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Responsibility", "responsibility"] },
          feedback: "No ethical harm was reported — the core distortion here is systematic demographic over-representation in the sample.",
        },
        {
          spec: { type: "text", accept: ["Change", "change"] },
          feedback: "Change tracks developmental, neural, or therapeutic shifts over time rather than unrepresentative sampling.",
        },
      ],
      hints: [
        "WEIRD stands for Western, Educated, Industrialised, Rich, Democratic.",
        "Which of the six Core Concepts addresses systematic distortion in who gets sampled?",
      ],
      solution: [
        "Recruiting exclusively Western university students introduces **WEIRD sampling bias**, restricting population validity.",
        "Therefore, the primary FA2027 Core Concept threatened is **Bias**.",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "experiments-surveys",
      strategy: "Identify experimental allocation design",
      question:
        "In a Class Practical on reading speed, every participant completes both the quiet room condition and the background-chatter condition. State the name of this experimental design.",
      answer: {
        type: "text",
        accept: [
          "repeated measures",
          "repeated-measures",
          "repeated measures design",
          "repeated-measures design",
          "within-subjects",
          "within subjects",
          "within-participants",
          "within participants",
        ],
        display: "Repeated-measures design",
      },
      traps: [
        {
          spec: { type: "text", accept: ["independent measures", "independent-measures", "between-subjects"] },
          feedback: "Independent-measures uses separate groups for each condition; here the same individuals complete both.",
        },
        {
          spec: { type: "text", accept: ["matched pairs", "matched-pairs"] },
          feedback: "Matched-pairs links two different people on a baseline trait and splits them across conditions.",
        },
      ],
      hints: [
        "Notice that each individual is measured more than once — under every level of the IV.",
        "Think of the two-word term for using the same participants in all conditions.",
      ],
      solution: [
        "When every participant takes part in every level of the independent variable, the study uses a **repeated-measures design** (also known as a within-subjects design).",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "interviews-observations",
      strategy: "Inter-observer agreement (%) formula",
      question:
        "Two independent observers code 40 behavioural intervals of student collaboration and agree on 34 intervals. Calculate their inter-observer agreement as a percentage (give a whole number).",
      answer: {
        type: "number",
        value: 85,
        display: "85%",
      },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15% is the percentage of disagreements (6 ÷ 40) — the question asks for percentage agreement.",
        },
        {
          spec: { type: "number", value: 0.85 },
          feedback: "Convert the decimal proportion 0.85 into a percentage by multiplying by 100.",
        },
      ],
      hints: [
        "Apply {{IOA (%) = (Agreements / Total) * 100}}.",
        "Compute {{(34 / 40) * 100}}.",
      ],
      solution: [
        "Divide agreed intervals by total intervals: {{34 / 40 = 0.85}}.",
        "Multiply by 100 to express as a percentage: {{0.85 * 100 = 85%}}.",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "Apply Russell & Burch's 3Rs",
      question:
        "A cognitive neuroscience unit stops using invasive rodent maze-lesion surgeries and adopts non-invasive human EEG scans alongside computerised neural models. State which one of Russell and Burch's 3Rs this exemplifies.",
      answer: {
        type: "text",
        accept: ["Replacement", "replacement"],
        display: "Replacement",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Reduction", "reduction"] },
          feedback: "Reduction still uses animals (just fewer of them); switching completely to non-animal methods is a different R.",
        },
        {
          spec: { type: "text", accept: ["Refinement", "refinement"] },
          feedback: "Refinement reduces pain or improves housing while still studying animals.",
        },
      ],
      hints: [
        "Check whether animals are still used at all in the redesigned research programme.",
        "The three Rs are Replacement, Reduction, and Refinement.",
      ],
      solution: [
        "Substituting non-animal methods (human EEG and computer simulation) for animal testing is **Replacement**.",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "experiments-surveys",
      strategy: "Proportional stratified subsample calculation",
      question:
        "A secondary school has 320 students in total, including 80 students in Year 13. If a researcher selects a proportional stratified sample of 40 students, how many Year 13 students must be chosen?",
      answer: {
        type: "number",
        value: 10,
        display: "10",
      },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25% is the proportion of Year 13 students in the school — now take 25% of the sample size 40.",
        },
        {
          spec: { type: "number", value: 8 },
          feedback: "Check your fraction: 80 out of 320 simplifies to 1/4, and one quarter of 40 is 10.",
        },
      ],
      hints: [
        "Find the fraction of the population in Year 13: {{80 / 320}}.",
        "Multiply that fraction by the target sample size of 40.",
      ],
      solution: [
        "Year 13 proportion = {{80 / 320 = 1/4 = 0.25}} (25%).",
        "Stratified subsample = {{0.25 * 40 = 10}} Year 13 students.",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "interviews-observations",
      strategy: "Inductive vs deductive thematic coding",
      question:
        "A qualitative psychologist reads interview transcripts without imposing an existing psychological model, letting themes emerge bottom-up directly from participants' own words. State whether this thematic analysis is inductive or deductive.",
      answer: {
        type: "text",
        accept: ["inductive", "inductive thematic analysis", "inductive coding"],
        display: "Inductive",
      },
      traps: [
        {
          spec: { type: "text", accept: ["deductive", "deductive thematic analysis", "deductive coding"] },
          feedback: "Deductive coding works top-down from an established theoretical framework; bottom-up data-driven coding is the opposite.",
        },
      ],
      hints: [
        "Data-driven / bottom-up coding starts *in* the raw data.",
        "Contrast top-down theory testing with bottom-up theme discovery.",
      ],
      solution: [
        "Allowing codes and themes to emerge bottom-up from raw transcripts is **inductive** thematic analysis.",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "Anonymity vs confidentiality boundary",
      question:
        "A psychologist conducts face-to-face interviews with 12 hospital nurses and replaces their real names with codes ('Nurse 1' to 'Nurse 12') in the published journal article. State whether this safeguard provides anonymity or confidentiality.",
      answer: {
        type: "text",
        accept: ["confidentiality", "Confidentiality"],
        display: "Confidentiality",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anonymity", "Anonymity"] },
          feedback: "Anonymity requires that not even the researcher knows who gave which response; face-to-face interviewers know participants' identities.",
        },
      ],
      hints: [
        "Ask yourself: does the interviewer still know which nurse spoke each quote?",
        "Pseudonyms protect identity from external readers, not from the interviewer.",
      ],
      solution: [
        "Because the interviewer knows participants' identities during face-to-face meetings and protects them with pseudonyms, this achieves **confidentiality** (not true anonymity).",
      ],
    },
    {
      id: "1-concepts-methodology-quiz-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "six-core-concepts",
      strategy: "Two-part critique of correlational claims",
      question:
        "A school survey finds a positive correlation ({{r = +0.58}}) between nightly video-gaming hours and daytime classroom tiredness. Explain two methodological reasons why this result cannot establish Causality.",
      marks: 2,
      hints: [
        "Think about the direction of the arrow between gaming and tiredness.",
        "Think about an unmeasured extra variable that could drive both behaviours simultaneously.",
      ],
      modelAnswer:
        "First, **bidirectional ambiguity (reverse causation)** remains unresolved because there was no manipulated independent variable: students who already feel too exhausted or stressed to do homework may turn to late-night gaming to unwind, rather than gaming causing tiredness. Second, an unmeasured **third variable (confounding factor)** such as high academic workload, anxiety, or lack of household sleep routines could independently increase both late-night gaming and daytime fatigue.",
      markScheme: [
        {
          point: "Explains bidirectional ambiguity / reverse causation (tiredness could lead to gaming rather than gaming causing tiredness, with no manipulated IV).",
          keywords: ["reverse causation", "bidirectional", "other direction", "manipulated"],
        },
        {
          point: "Explains the third-variable / confounding problem with a plausible factor (e.g. stress, workload, anxiety, poor routines) driving both variables.",
          keywords: ["third variable", "confounding", "extraneous", "workload", "stress", "anxiety"],
        },
      ],
      commonError: "Writing only 'correlation does not equal causation' without explaining *why* (reverse direction and confounding third variables).",
    },
    {
      id: "1-concepts-methodology-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "experiments-surveys",
      strategy: "Contrast sampling vs allocation and link to validity types",
      question:
        "Distinguish between random sampling and random allocation, and explain which type of validity each procedure primarily strengthens.",
      marks: 3,
      hints: [
        "Step 1: Define who gets picked from the population.",
        "Step 2: Define how recruited participants are placed into experimental vs control groups.",
        "Step 3: Link one to population/external validity (Bias) and the other to internal validity (Causality).",
      ],
      modelAnswer:
        "**Random sampling** selects participants from a broader target population so every member has an equal chance of inclusion, which reduces selection **Bias** and strengthens **population (external) validity** so findings generalise more safely. By contrast, **random allocation** assigns already-recruited participants by chance into experimental or control conditions, distributing individual participant variables evenly across groups to strengthen **internal validity** and **Causality**.",
      markScheme: [
        {
          point: "Clearly defines random sampling as selecting participants with equal chance from a target population.",
          keywords: ["target population", "equal chance", "selecting", "selects"],
        },
        {
          point: "Clearly contrasts random allocation as assigning recruited participants by chance into experimental/control conditions.",
          keywords: ["assigns", "assigning", "conditions", "control", "experimental"],
        },
        {
          point: "Links random sampling to population/external validity (generalisability) and random allocation to internal validity / controlling participant variables.",
          keywords: ["external", "population", "internal", "generalis", "participant variables"],
        },
      ],
      commonError: "Swapping the two definitions or claiming random allocation makes a convenience sample representative of the whole population.",
    },
    {
      id: "1-concepts-methodology-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "Checklist for vulnerable minor participants",
      question:
        "Outline three ethical safeguards a researcher must put in place when planning a study involving 14-year-old school students.",
      marks: 3,
      hints: [
        "Minors under 16 are classed as a vulnerable population — who must give formal consent?",
        "Besides parents, what permission must come from the 14-year-olds themselves, and what rights protect their autonomy and wellbeing?",
      ],
      modelAnswer:
        "First, because 14-year-olds are minors (a vulnerable population), the researcher must secure written **parental or guardian consent** before enrolment. Second, the students themselves must give age-appropriate **assent** after receiving plain-language information, alongside an unconditional **right to withdraw** at any time without academic penalty. Third, the researcher must guarantee **protection from harm** and **confidentiality** by keeping tasks low-distress, avoiding teacher coercion, and storing responses under pseudonyms.",
      markScheme: [
        {
          point: "Identifies written parental / guardian informed consent for minors.",
          keywords: ["parental", "guardian", "parents"],
        },
        {
          point: "Identifies student assent and/or voluntary right to withdraw without academic penalty or coercion.",
          keywords: ["assent", "withdraw", "coercion", "voluntary"],
        },
        {
          point: "Identifies protection from physical/psychological harm and/or strict confidentiality/anonymity of data.",
          keywords: ["harm", "confidential", "anonym", "pseudonym", "distress"],
        },
      ],
      commonError: "Mentioning only 'informed consent' without specifying *parental/guardian* consent plus minor *assent*.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (p1: 15 Qs, p2: 15 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1: 6 Core Concepts, Experiments & Surveys (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "1-concepts-methodology-p1",
      title: "Practice Paper 1 — 6 Core Concepts, Experiments & Surveys (Paper 2 Sec A/B)",
      level: "SL",
      questions: [
        {
          id: "1-concepts-methodology-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "six-core-concepts",
          strategy: "Match uncontrolled comparison to Core Concept",
          question:
            "A wellness app compares self-reported sleep quality between paying subscribers and non-subscribers who declined the app, then advertises that the app 'causes deeper sleep.' State which single FA2027 Core Concept is primarily threatened by the lack of random allocation.",
          answer: {
            type: "text",
            accept: ["Causality", "causality"],
            display: "Causality",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Change", "change"] },
              feedback: "The flaw is claiming 'causes deeper sleep' without experimental manipulation or random allocation.",
            },
          ],
          hints: [
            "Look at the verb in the startup's advertising claim ('causes') versus the non-randomised comparison.",
            "Which Core Concept evaluates whether X truly produced Y?",
          ],
          solution: [
            "Paying subscribers may already have healthier sleep motivation or higher income (confounds); without IV manipulation and random allocation, **Causality** cannot be established.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "experiments-surveys",
          strategy: "Recall order-effect control technique",
          question:
            "State the specific methodological technique used in a repeated-measures experiment (such as splitting participants into AB and BA sequences) to balance practice and fatigue effects across conditions.",
          answer: {
            type: "text",
            accept: [
              "counterbalancing",
              "Counterbalancing",
              "AB/BA counterbalancing",
              "ABBA counterbalancing",
            ],
            display: "Counterbalancing",
          },
          traps: [
            {
              spec: { type: "text", accept: ["random allocation", "randomisation", "randomization"] },
              feedback: "Random allocation balances participant variables across separate groups, whereas varying condition order across repeated trials has a specific name.",
            },
          ],
          hints: [
            "Think of the single word meaning to balance out order effects by reversing condition sequences.",
          ],
          solution: [
            "**Counterbalancing** distributes order effects (practice, boredom, fatigue) evenly across conditions.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "experiments-surveys",
          strategy: "Survey response rate calculation",
          question:
            "For a Class Practical survey on revision habits, a group distributes 160 questionnaires and collects 124 completed forms. Calculate the survey response rate as a percentage to 1 decimal place.",
          answer: {
            type: "number",
            value: 77.5,
            tolerance: 0.05,
            display: "77.5%",
          },
          traps: [
            {
              spec: { type: "number", value: 22.5, tolerance: 0.05 },
              feedback: "22.5% is the non-response rate (36 ÷ 160) — calculate the completed response rate.",
            },
            {
              spec: { type: "number", value: 78 },
              feedback: "Check the required accuracy: give your percentage to 1 decimal place (77.5%).",
            },
          ],
          hints: [
            "Use {{Response Rate (%) = (Completed / Distributed) * 100}}.",
            "Compute {{124 / 160 = 31 / 40 = 0.775}}, then multiply by 100.",
          ],
          solution: [
            "{{(124 / 160) * 100 = 0.775 * 100 = 77.5%}}.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "six-core-concepts",
          strategy: "Diagnose weak operationalisation",
          question:
            "A psychologist attempts to assess 'emotional intelligence' strictly by timing how quickly participants tap smiling versus frowning emojis on a phone screen. State which single FA2027 Core Concept is primarily undermined by this narrow operationalisation.",
          answer: {
            type: "text",
            accept: ["Measurement", "measurement"],
            display: "Measurement",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Perspective", "perspective"] },
              feedback: "While narrow, the direct failure of tapping speed to represent emotional intelligence is a construct-validity failure.",
            },
          ],
          hints: [
            "Does rapid emoji tapping genuinely capture the complex psychological construct of emotional intelligence?",
            "Which Core Concept encompasses operationalisation, construct validity, and reliability?",
          ],
          solution: [
            "Tapping speed reflects motor reaction rather than emotional understanding, directly undermining construct validity under **Measurement**.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "experiments-surveys",
          strategy: "Classify experiment by IV nature",
          question:
            "A study compares Stroop interference times between lifelong bilingual adults and monolingual adults under standardised lab lighting. Because language background is a pre-existing trait that cannot be randomly allocated, state the exact type of experiment this is.",
          answer: {
            type: "text",
            accept: ["quasi-experiment", "quasi experiment", "quasi", "quasi-experimental", "quasi experimental"],
            display: "Quasi-experiment",
          },
          traps: [
            {
              spec: { type: "text", accept: ["natural experiment", "natural"] },
              feedback: "In a natural experiment, an external event changes the environment (e.g. a policy reform); here the IV is a pre-existing participant trait.",
            },
            {
              spec: { type: "text", accept: ["true experiment", "laboratory experiment", "lab experiment"] },
              feedback: "True experiments require researcher manipulation of the IV and random allocation to conditions.",
            },
          ],
          hints: [
            "Distinguish an externally occurring environmental event from a pre-existing personal characteristic.",
            "Use the Latin prefix meaning 'almost' or 'resembling' an experiment.",
          ],
          solution: [
            "Comparing pre-existing participant groups without random allocation is a **quasi-experiment**.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "experiments-surveys",
          strategy: "Percentage attrition (dropout) formula",
          question:
            "A six-week study-skills intervention starts with 125 sixth-form students, and 95 students remain at the final Week 6 assessment. Calculate the percentage attrition (dropout) rate (give a whole number).",
          answer: {
            type: "number",
            value: 24,
            display: "24%",
          },
          traps: [
            {
              spec: { type: "number", value: 76 },
              feedback: "76% is the retention rate (95 ÷ 125) — subtract from 100% to find the attrition (dropout) rate.",
            },
            {
              spec: { type: "number", value: 30 },
              feedback: "30 is the raw number of students who dropped out — divide 30 by the starting sample of 125 and multiply by 100.",
            },
          ],
          hints: [
            "First find how many students dropped out: {{125 - 95 = 30}}.",
            "Apply {{Attrition (%) = (30 / 125) * 100}}.",
          ],
          solution: [
            "Number lost to attrition = {{125 - 95 = 30}}.",
            "Attrition rate = {{(30 / 125) * 100 = 24%}}.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "experiments-surveys",
          strategy: "Identify blinding control level",
          question:
            "State the specific experimental blinding procedure in which neither the participants nor the researcher administering the test know which condition each participant was assigned to.",
          answer: {
            type: "text",
            accept: ["double-blind", "double blind", "double-blind procedure", "double blind procedure", "double blinding", "double-blinding"],
            display: "Double-blind procedure",
          },
          traps: [
            {
              spec: { type: "text", accept: ["single-blind", "single blind"] },
              feedback: "In single-blind trials, only the participant is kept unaware; here BOTH participant and testing researcher are blind.",
            },
          ],
          hints: [
            "Count how many parties are kept unaware of condition assignment: both participants AND test administrators.",
            "This dual blinding counters both demand characteristics and researcher expectancy bias.",
          ],
          solution: [
            "Keeping both participants and data-collecting researchers unaware of condition allocation is a **double-blind procedure**.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "experiments-surveys",
          strategy: "Stratified sampling across three strata",
          question:
            "A sixth-form college of 450 students comprises 180 HL Psychology students, 135 SL Psychology students, and 135 non-Psychology students. In a proportional stratified survey of 50 students, how many HL Psychology students must be randomly selected?",
          answer: {
            type: "number",
            value: 20,
            display: "20",
          },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "40% is the percentage share of HL students in the college — now find 40% of the sample size 50.",
            },
            {
              spec: { type: "number", value: 15 },
              feedback: "15 is the count for SL Psychology or non-Psychology students (135 ÷ 450 × 50); check the HL count of 180.",
            },
          ],
          hints: [
            "Find the HL share in the whole college: {{180 / 450}}.",
            "Multiply {{0.4 * 50}} to get the HL subsample count.",
          ],
          solution: [
            "HL proportion = {{180 / 450 = 2/5 = 0.40}} (40%).",
            "HL subsample = {{0.40 * 50 = 20}} students.",
          ],
        },
        {
          id: "1-concepts-methodology-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "experiments-surveys",
          strategy: "Operationalise IV & DV with concrete units",
          question:
            "Operationalise both the independent variable (IV) and the dependent variable (DV) for a Class Practical testing whether handwriting notes improves lecture recall compared with typing notes on a laptop.",
          marks: 2,
          hints: [
            "Make the IV specify exact conditions (e.g. duration, medium, identical lecture video).",
            "Make the DV specify a countable, observable score with clear units and timing.",
          ],
          modelAnswer:
            "**Operationalised IV:** Note-taking medium during a standardised 10-minute recorded lecture — Condition A uses pen and lined paper only, whereas Condition B uses a plain-text laptop document with internet disabled.\n\n**Operationalised DV:** Total number of accurate conceptual facts recalled out of 20 on a written multiple-choice and short-answer quiz completed 15 minutes after the lecture ends.",
          markScheme: [
            {
              point: "Operationalises the IV clearly with two defined, standardised conditions (e.g. pen/paper vs laptop during a fixed-length lecture).",
              keywords: ["pen", "paper", "condition", "minute", "standardised", "standardized"],
            },
            {
              point: "Operationalises the DV as a specific, observable, countable metric with units/scale and timing (e.g. score out of 20 on a quiz after a set delay).",
              keywords: ["score", "out of", "quiz", "test", "number of", "points", "facts"],
            },
          ],
          commonError: "Restating vague concepts ('IV: note-taking; DV: memory') instead of giving replicable procedures and measurable units.",
        },
        {
          id: "1-concepts-methodology-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "experiments-surveys",
          strategy: "Diagnose survey wording flaws & redesign cleanly",
          question:
            "A student questionnaire contains the Likert item: 'Don't you agree that exhausting mock exams and unfair grading ruin learner morale?' Identify two distinct wording flaws and explain how to rewrite the item to strengthen Measurement validity.",
          marks: 3,
          hints: [
            "Look at the opening phrase ('Don't you agree…') and emotionally loaded words ('exhausting', 'unfair', 'ruin').",
            "Count how many separate issues are combined inside one single statement.",
            "Show how splitting and neutralising the wording fixes construct validity.",
          ],
          modelAnswer:
            "First, the item uses **leading and emotionally loaded language** ('Don't you agree', 'exhausting', 'ruin'), pushing respondents toward agreement (**acquiescence / wording bias**). Second, it is **double-barrelled**, merging two distinct constructs (exam workload and grading fairness) into one score so respondents who feel exams are tiring yet graded fairly cannot answer accurately. To strengthen validity, **split the item into two separate neutral statements** rated from 1 (Strongly Disagree) to 5 (Strongly Agree) — e.g. *'Mock examination timetables affect my motivation'* and *'Feedback on my mock examinations feels consistent'* — paired with reverse-scored items.",
          markScheme: [
            {
              point: "Identifies leading / loaded wording pushing participants toward a biased response.",
              keywords: ["leading", "loaded", "acquiescence", "biased", "bias"],
            },
            {
              point: "Identifies that the item is double-barrelled (combining two separate topics in one rating).",
              keywords: ["double-barrelled", "double barrelled", "double-barreled", "two separate", "two distinct"],
            },
            {
              point: "Proposes splitting into separate neutrally worded Likert items (and optionally balancing with reverse-scored items).",
              keywords: ["split", "neutral", "separate", "reverse"],
            },
          ],
          commonError: "Fixing only the leading phrasing while leaving both exams and grading jammed inside one single question.",
        },
        {
          id: "1-concepts-methodology-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "experiments-surveys",
          strategy: "Criterion-by-criterion comparative evaluation",
          question:
            "Compare and contrast independent-measures and repeated-measures experimental designs in the context of a memory Class Practical.",
          marks: 4,
          hints: [
            "Include at least one explicit similarity (both manipulate an IV to test Causality).",
            "Contrast participant variables (controlled by random allocation) versus order effects (controlled by counterbalancing).",
            "Mention sample-size efficiency and parallel stimulus needs (two equivalent word lists).",
          ],
          modelAnswer:
            "**Both** designs manipulate an independent variable under standardised conditions to investigate **Causality** in memory performance, and both require ethical informed consent and debriefing. **However**, in an **independent-measures** design, separate groups complete only one condition (e.g. quiet vs music), which eliminates **order effects** and allows the exact same 20-word list in both groups, **whereas** it risks confounding **participant variables** (differences in baseline memory), requires twice as many participants, and relies on **random allocation**.\n\n**Conversely**, a **repeated-measures** design tests every student in both conditions, completely eliminating participant variables and halving sample size, **whereas** it introduces **practice, fatigue, or boredom order effects** and heightened **demand characteristics** — requiring **AB / BA counterbalancing** and two difficulty-matched parallel word lists.",
          markScheme: [
            {
              point: "Identifies a valid similarity (both manipulate an IV under controlled/standardised conditions to test Causality).",
              keywords: ["both", "causality", "standardised", "standardized", "manipulate"],
            },
            {
              point: "Contrasts participant variables (independent-measures weakness controlled by random allocation vs eliminated in repeated-measures).",
              keywords: ["participant variables", "baseline", "random allocation", "individual differences"],
            },
            {
              point: "Contrasts order effects (practice/fatigue threat in repeated-measures controlled by counterbalancing vs absent in independent-measures).",
              keywords: ["order effects", "practice", "fatigue", "counterbalancing"],
            },
            {
              point: "Contrasts practical memory-task demands (sample size needed, demand characteristics, or parallel word lists).",
              keywords: ["parallel", "word list", "twice", "halv", "demand characteristics"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Basic description of one or both designs with limited comparison or missing controls.", indicators: ["Lists features separately rather than explicitly comparing."] },
            { band: "3–4", marks: [3, 4], descriptor: "Clear, balanced similarities and differences explicitly contrasting participant variables, order effects, controls, and memory-task trade-offs.", indicators: ["Uses comparative connectives ('both', 'whereas') and links directly to a memory practical."] },
          ],
          commonError: "Writing two isolated paragraphs without explicit similarities or forgetting that repeated-measures needs two equivalent word lists.",
        },
        {
          id: "1-concepts-methodology-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "six-core-concepts",
          strategy: "Link biopsychosocial triangulation to Perspective",
          question:
            "Explain how applying the Core Concept of Perspective strengthens psychological understanding of adolescent exam stress when Biological, Cognitive, and Sociocultural explanations are integrated.",
          marks: 4,
          hints: [
            "Contrast single-approach reductionism against holistic biopsychosocial integration.",
            "Give one concrete mechanism for each of the three approaches (e.g. HPA-axis/cortisol, threat appraisal, cultural/family expectations).",
            "Explain how combining them leads to better real-world interventions.",
          ],
          modelAnswer:
            "Relying on any single approach risks **reductionism**, capturing only one slice of adolescent exam stress. Integrating three lenses through **Perspective** creates a **biopsychosocial** account: the **Biological** lens explains physiological arousal such as **HPA-axis cortisol** release and disrupted sleep; the **Cognitive** lens explains how individual **appraisal** and catastrophic beliefs amplify or buffer perceived threat; and the **Sociocultural** lens explains how **family expectations**, school norms, and peer comparison shape why exams feel high-stakes in the first place. Combining all three avoids simplistic single-cause claims and supports **holistic** interventions (such as pairing sleep hygiene, cognitive reframing, and supportive school culture).",
          markScheme: [
            {
              point: "Explains the danger of single-approach reductionism vs holistic / biopsychosocial integration.",
              keywords: ["reductionism", "biopsychosocial", "holistic"],
            },
            {
              point: "Explains a concrete Biological stress mechanism (e.g. cortisol, HPA-axis, adrenaline, physiological arousal, sleep).",
              keywords: ["cortisol", "hpa", "adrenaline", "arousal", "physiological"],
            },
            {
              point: "Explains a concrete Cognitive mechanism (e.g. appraisal, schemas, catastrophic thinking, beliefs).",
              keywords: ["appraisal", "catastrophic", "belief", "reframing", "thinking"],
            },
            {
              point: "Explains a Sociocultural mechanism (e.g. family expectations, cultural norms, peer pressure) and/or practical intervention benefit.",
              keywords: ["family", "norms", "peer", "intervention", "culture"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies one or two approaches superficially without clearly explaining how Perspective reduces reductionism." },
            { band: "3–4", marks: [3, 4], descriptor: "Explicitly integrates Biological, Cognitive, and Sociocultural mechanisms to explain how Perspective counters reductionism and deepens understanding." },
          ],
          commonError: "Defining the three approaches abstractly without linking them specifically to adolescent exam stress or explaining reductionism.",
        },
        {
          id: "1-concepts-methodology-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "experiments-surveys",
          strategy: "Balanced strengths + concept-linked limitations + judgement",
          question:
            "Evaluate the use of closed-item Likert-scale surveys for investigating sleep routines across an international secondary school.",
          marks: 4,
          hints: [
            "Weigh clear strengths: rapid large-N quantitative reach, anonymity/ethics, easy comparison across year groups.",
            "Weigh Bias and Measurement limits: social desirability, recall error, acquiescence, lack of qualitative 'why', cultural interpretation differences.",
            "End with a balanced evaluative judgement (e.g. pairing with interviews or objective sleep diaries).",
          ],
          modelAnswer:
            "**Strengths:** Closed Likert-scale surveys efficiently collect standardised **quantitative** data from large, **stratified** samples across year groups, allowing quick comparison and high **anonymity** that protects ethical **Responsibility**.\n\n**Limitations:** Under **Bias** and **Measurement**, self-reports suffer from **recall inaccuracy** (students misestimate bedtime), **social desirability**, and **acquiescence bias** unless reverse-scored items are included; in a multicultural school, anchors like 'frequently' may also be interpreted differently across cultures (**Perspective**). Furthermore, fixed scales cannot explain *why* students stay awake. **Overall**, Likert surveys are strong for mapping school-wide patterns rapidly, but should be triangulated with objective sleep logs or brief semi-structured interviews for richer validity.",
          markScheme: [
            {
              point: "Identifies strengths of closed Likert surveys (large-N efficiency, standardised quantitative comparison, anonymity).",
              keywords: ["quantitative", "large", "standardised", "standardized", "anonym"],
            },
            {
              point: "Evaluates Bias/Measurement limitations (social desirability, recall inaccuracy, acquiescence, or reverse-scoring need).",
              keywords: ["social desirability", "recall", "acquiescence", "reverse"],
            },
            {
              point: "Evaluates depth/cultural Perspective limits (lacks qualitative 'why' or cross-cultural anchor interpretation differences).",
              keywords: ["why", "depth", "culture", "cultural", "perspective", "multicultural"],
            },
            {
              point: "Provides a balanced conclusion/judgement (e.g. valuable for breadth, improved via triangulation or objective logs).",
              keywords: ["overall", "triangulat", "interview", "diary", "diaries", "log"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "One-sided list of strengths or weaknesses without linking to Bias, Measurement, or the school context." },
            { band: "3–4", marks: [3, 4], descriptor: "Balanced, context-grounded evaluation weighing efficiency/anonymity against self-report biases and cultural/depth limits, concluding with a justified judgement." },
          ],
          commonError: "Giving only weaknesses ('people might lie') without acknowledging strengths or reaching a reasoned evaluative judgement.",
        },
        {
          id: "1-concepts-methodology-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Design",
          guideRef: "experiments-surveys",
          strategy: "FA2027 IA / Paper 2 Sec A hypothetical experiment design",
          question:
            "Design a hypothetical true experiment (no data collection) investigating whether a 10-minute outdoor park walk improves divergent creative thinking compared with scrolling a smartphone indoors. Include operationalised variables, experimental design, controls, and ethical safeguards.",
          marks: 6,
          hints: [
            "Operationalise BOTH conditions of the IV clearly and give a countable, replicable DV (e.g. Alternative Uses Task scored by two blind raters).",
            "Choose either independent-measures + random allocation OR repeated-measures + AB/BA counterbalancing + parallel items, and justify it!",
            "Include extraneous controls (same time of day, caffeine/noise control, blind scoring) AND ethics (informed consent, right to withdraw, debriefing, confidentiality).",
          ],
          modelAnswer:
            "**Operationalised IV:** Condition A completes a supervised 10-minute solo walk along a quiet campus garden path without devices; Condition B sits in a quiet indoor room scrolling their own social-media feed for 10 minutes.\n\n**Operationalised DV:** Divergent fluency and originality score on a 3-minute **Alternative Uses Task** (e.g. listing unusual uses for a brick), independently scored by **two blind raters** checking **inter-rater reliability** (target ≥ 80%).\n\n**Design & Allocation:** Use an **independent-measures** design with **random allocation** (60 consenting university volunteers, 30 per group) to eliminate practice or carryover effects on the creativity task while balancing baseline creative ability across groups.\n\n**Extraneous Controls:** Standardise time of day, test instructions, room lighting, and exclude caffeine within two hours; keep scoring **blind** to condition to prevent researcher expectancy **Bias**.\n\n**Ethical Responsibility:** Secure written **informed consent**, guarantee unconditional **right to withdraw**, protect **confidentiality** with numeric IDs, ensure safe pedestrian routes (protection from harm), and provide a full **debriefing**.",
          markScheme: [
            {
              point: "Operationalises the IV with clear, standardised 10-minute outdoor vs indoor procedures.",
              keywords: ["condition", "garden", "path", "room", "device", "feed"],
            },
            {
              point: "Operationalises the DV with a measurable creativity task and scoring metric (e.g. Alternative Uses Task, blind raters/rubric).",
              keywords: ["alternative uses", "score", "fluency", "originality", "rubric", "rater"],
            },
            {
              point: "Selects and justifies an experimental design (independent-measures with random allocation OR repeated-measures with counterbalancing + parallel tasks).",
              keywords: ["independent-measures", "independent measures", "repeated-measures", "repeated measures", "random allocation", "counterbalancing"],
            },
            {
              point: "Specifies extraneous variable controls (standardised instructions, time of day, noise/lighting, or blind scoring).",
              keywords: ["standardis", "blind", "lighting", "time of day", "caffeine", "instructions"],
            },
            {
              point: "Addresses Causality/Measurement rigour (e.g. preventing carryover/expectancy bias or verifying inter-rater reliability).",
              keywords: ["carryover", "expectancy", "reliability", "bias", "causality"],
            },
            {
              point: "Includes concrete ethical safeguards (informed consent, right to withdraw, confidentiality, debriefing, safety).",
              keywords: ["informed consent", "withdraw", "confidential", "debrief", "safety", "harm"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Vague outline lacking operationalised variables, coherent controls, or ethical detail." },
            { band: "3–4", marks: [3, 4], descriptor: "Workable experimental plan with operationalised IV/DV and basic design/ethics, though justification or controls remain partial." },
            { band: "5–6", marks: [5, 6], descriptor: "Rigorous, replicable hypothetical design integrating precise operationalisation, justified allocation/controls, blind scoring, and complete ethical Responsibility." },
          ],
          commonError: "Forgetting blind scoring for a subjective creativity DV or failing to justify *why* the chosen experimental design fits a creativity task.",
        },
        {
          id: "1-concepts-methodology-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Examine",
          guideRef: "six-core-concepts",
          strategy: "HL Measurement (p-value vs Cohen's d) + sampling/commercial Bias",
          question:
            "An educational-technology company runs an online trial (N = 6,000) and advertises that its paid gamified revision badge 'significantly boosts grades' after finding a 0.5-point increase out of 100 ({{p = 0.03}}, Cohen's {{d = 0.07}}). Examine this claim through the Core Concepts of Measurement and Bias.",
          marks: 6,
          hints: [
            "Under Measurement, separate statistical significance (p < 0.05) from practical significance (effect size Cohen's d).",
            "Explain *why* N = 6,000 easily produces p < 0.05 for a negligible 0.5% gain.",
            "Under Bias, interrogate commercial conflict of interest, self-selected online users, and publication/framing bias.",
          ],
          modelAnswer:
            "**Measurement (Statistical vs Practical Significance):** While {{p = 0.03}} rejects the null hypothesis at the 5% level, p-values depend heavily on sample size: with N = 6,000, even a tiny 0.5-mark gain out of 100 reaches **statistical significance** because standard error shrinks drastically. Inspecting **effect size** (Cohen's {{d = 0.07}}, well below the 0.20 benchmark for a small effect) reveals negligible **practical significance** — half a percentage point rarely changes a student's IB grade boundary. Furthermore, short quiz scores may not reflect durable long-term learning (**construct validity**).\n\n**Bias (Conflict of Interest & Sampling):** Because the commercial vendor funded and marketed the trial, **confirmation / researcher bias** and selective reporting ('cherry-picking' favourable metrics) threaten objectivity unless pre-registered and independently replicated. In addition, voluntary online users who install paid badges represent a motivated, digitally privileged **self-selected / WEIRD sample**, creating **sampling bias** and novelty/placebo effects that inflate short-term gains.",
          markScheme: [
            {
              point: "Correctly interprets p = 0.03 as statistically significant (rejects null) without claiming 'proof'.",
              keywords: ["null", "statistically significant", "statistical significance", "reject"],
            },
            {
              point: "Explains how large sample size (N = 6,000) inflates statistical power / shrinks standard error so tiny differences hit p < 0.05.",
              keywords: ["large sample", "standard error", "power", "tiny", "trivial"],
            },
            {
              point: "Interprets Cohen's d = 0.07 as negligible practical significance (below the 0.20 small threshold / unlikely to change real grades).",
              keywords: ["effect size", "practical", "0.20", "0.2", "negligible", "grade boundary"],
            },
            {
              point: "Questions construct validity / durability of short quiz gains as a proxy for deep learning.",
              keywords: ["construct validity", "long-term", "durable", "short-term", "novelty"],
            },
            {
              point: "Identifies commercial conflict of interest / funding bias / selective reporting and need for independent replication or pre-registration.",
              keywords: ["conflict of interest", "vendor", "funding", "pre-regist", "replicat", "selective"],
            },
            {
              point: "Identifies sampling / volunteer / WEIRD bias among self-selected paid online app users.",
              keywords: ["volunteer", "self-selected", "weird", "sampling bias", "motivated"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Superficial scepticism without unpacking p-values vs effect size or concrete sources of Bias." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear explanation of statistical vs practical significance OR commercial/sampling bias, with partial depth on the second concept." },
            { band: "5–6", marks: [5, 6], descriptor: "Rigorous HL examination seamlessly linking large-N p-value mechanics, Cohen's d practical triviality, construct validity, commercial conflict of interest, and volunteer sampling bias." },
          ],
          commonError: "Assuming p = 0.03 means 'only a 3% chance the badge fails' or ignoring the huge sample size N = 6,000.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2: Interviews, Observations, Ethics & Paper 2 Evaluation (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "1-concepts-methodology-p2",
      title: "Practice Paper 2 — Interviews, Observations, Ethics & Unseen-Study Evaluation",
      level: "SL",
      questions: [
        {
          id: "1-concepts-methodology-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "interviews-observations",
          strategy: "Identify interview structure type",
          question:
            "State the interview format that uses a fixed set of open-ended core prompts while allowing the interviewer to ask flexible follow-up questions based on what the participant says.",
          answer: {
            type: "text",
            accept: [
              "semi-structured",
              "semi structured",
              "semi-structured interview",
              "semi structured interview",
              "semistructured",
            ],
            display: "Semi-structured interview",
          },
          traps: [
            {
              spec: { type: "text", accept: ["structured", "structured interview"] },
              feedback: "Structured interviews stick rigidly to fixed wording with no flexible follow-up probes.",
            },
            {
              spec: { type: "text", accept: ["unstructured", "unstructured interview"] },
              feedback: "Unstructured interviews lack a fixed core schedule of questions.",
            },
          ],
          hints: [
            "It sits halfway between a rigid script and an open free-flowing conversation.",
          ],
          solution: [
            "Combining a core question schedule with flexible probing defines a **semi-structured interview**.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "interviews-observations",
          strategy: "Inter-observer agreement (%) calculation",
          question:
            "During a controlled parent–child play observation, two independent coders score 75 ten-second intervals and agree on 63 intervals. Calculate their percentage inter-observer agreement (give a whole number).",
          answer: {
            type: "number",
            value: 84,
            display: "84%",
          },
          traps: [
            {
              spec: { type: "number", value: 16 },
              feedback: "16% is the disagreement percentage (12 ÷ 75) — calculate percentage agreement.",
            },
          ],
          hints: [
            "Divide 63 by 75 and multiply by 100.",
            "Simplify {{63 / 75}} by dividing numerator and denominator by 3 to get {{21 / 25}}.",
          ],
          solution: [
            "{{IOA (%) = (63 / 75) * 100 = (21 / 25) * 100 = 84%}}.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "interviews-observations",
          strategy: "Identify observer reactivity phenomenon",
          question:
            "During an overt study-hall observation, students sit upright and avoid checking their smartphones solely because they know a researcher is watching them. State the named psychological effect describing this behavioural reactivity.",
          answer: {
            type: "text",
            accept: [
              "Hawthorne effect",
              "hawthorne effect",
              "Hawthorne",
              "hawthorne",
              "observer effect",
              "Hawthorne reactivity",
            ],
            display: "Hawthorne effect",
          },
          traps: [
            {
              spec: { type: "text", accept: ["acquiescence bias", "acquiescence"] },
              feedback: "Acquiescence bias refers to ticking 'Agree' on surveys, not modifying observed actions when watched.",
            },
          ],
          hints: [
            "Recall the famous factory lighting study that named participants changing behaviour simply from knowing they are observed.",
            "Starts with the letter 'H'.",
          ],
          solution: [
            "Altering behaviour simply because one knows an observer is watching is the **Hawthorne effect** (observer reactivity).",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "interviews-observations",
          strategy: "Distinguish observational sampling rules",
          question:
            "An observer sits in a public café for 30 minutes and records what behaviour is occurring only at the exact moment a silent timer vibrates every 60 seconds. State whether this coding procedure uses event sampling or time sampling.",
          answer: {
            type: "text",
            accept: ["time sampling", "Time sampling", "time"],
            display: "Time sampling",
          },
          traps: [
            {
              spec: { type: "text", accept: ["event sampling", "event"] },
              feedback: "Event sampling tallies every continuous occurrence of a target act; recording only at fixed timer intervals is the alternative.",
            },
          ],
          hints: [
            "Check whether behaviours are logged continuously whenever they happen, or only at fixed clock checkpoints.",
            "Sampling at fixed intervals (every 60 seconds) is named after the clock unit it relies on.",
          ],
          solution: [
            "Recording behaviour strictly at fixed 60-second timer intervals is **time sampling**.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ethics-unseen-study-paper2",
          strategy: "Apply 3Rs — cohort minimisation",
          question:
            "A behavioural lab lowers its mouse sample from 50 to 22 using statistical power analysis and shared open baseline datasets without compromising validity. State which one of Russell and Burch's 3Rs this exemplifies.",
          answer: {
            type: "text",
            accept: ["Reduction", "reduction"],
            display: "Reduction",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Replacement", "replacement"] },
              feedback: "Animals are still used (22 mice), so they have not been replaced — their numbers have been minimised.",
            },
            {
              spec: { type: "text", accept: ["Refinement", "refinement"] },
              feedback: "Refinement improves welfare/housing rather than lowering sample size.",
            },
          ],
          hints: [
            "Count the shift: 50 mice down to 22 mice while maintaining statistical rigour.",
            "Distinguish replacing animals completely from lowering the number used or refining their housing.",
          ],
          solution: [
            "Minimising the number of animals needed without sacrificing scientific validity exemplifies **Reduction**.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ethics-unseen-study-paper2",
          strategy: "Apply 3Rs — welfare & analgesia",
          question:
            "Upgrading animal laboratory cages with nesting enrichment, social housing, and gentler analgesia to minimise distress exemplifies which one of Russell and Burch's 3Rs?",
          answer: {
            type: "text",
            accept: ["Refinement", "refinement"],
            display: "Refinement",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Reduction", "reduction"] },
              feedback: "Reduction shrinks cohort size; improving husbandry and lowering pain is a different R.",
            },
          ],
          hints: [
            "Focus on improving welfare, housing, and pain relief during necessary animal studies.",
            "Animals are still studied and cohort size is unchanged — which R focuses on welfare quality?",
          ],
          solution: [
            "Modifying procedures and housing to minimise pain and enhance animal welfare is **Refinement**.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "interviews-observations",
          strategy: "Two-step IOA from disagreement count",
          question:
            "Two independent observers code 80 video clips of prosocial helping and **disagree** on 14 clips. Calculate their percentage inter-observer agreement to 1 decimal place.",
          answer: {
            type: "number",
            value: 82.5,
            tolerance: 0.05,
            display: "82.5%",
          },
          traps: [
            {
              spec: { type: "number", value: 17.5, tolerance: 0.05 },
              feedback: "17.5% is the disagreement rate (14 ÷ 80) — first subtract 14 from 80 to get the 66 agreed clips!",
            },
            {
              spec: { type: "number", value: 86 },
              feedback: "Do not subtract 14 from 100 — divide 66 agreed clips by 80 total clips, then multiply by 100.",
            },
          ],
          hints: [
            "Read carefully: 14 is the number of *disagreements*, so agreements = {{80 - 14 = 66}}.",
            "Compute {{(66 / 80) * 100}}.",
          ],
          solution: [
            "Number of agreements = {{80 - 14 = 66}}.",
            "{{IOA (%) = (66 / 80) * 100 = 0.825 * 100 = 82.5%}}.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "six-core-concepts",
          strategy: "Match longitudinal neuroplasticity tracking to Core Concept",
          question:
            "A clinical team charts verbal-memory recovery and cortical reorganisation in stroke patients at 1 month, 6 months, and 18 months post-rehabilitation. State which single FA2027 Core Concept is most directly explored by tracking recovery trajectories over time.",
          answer: {
            type: "text",
            accept: ["Change", "change"],
            display: "Change",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Measurement", "measurement"] },
              feedback: "While memory is measured, the central phenomenon of tracking neuroplastic recovery across 1, 6, and 18 months maps directly to another Core Concept.",
            },
          ],
          hints: [
            "Notice the focus on neuroplastic recovery and longitudinal progression across three time points.",
            "Which of the six FA2027 Core Concepts centres on neuroplasticity, lifespan transitions, and therapeutic shifts?",
          ],
          solution: [
            "Tracking neuroplastic cortical reorganisation and therapeutic recovery across time directly investigates **Change**.",
          ],
        },
        {
          id: "1-concepts-methodology-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "interviews-observations",
          strategy: "Explain qualitative credibility mechanism",
          question:
            "Explain how member checking strengthens the credibility of findings in a semi-structured interview study.",
          marks: 2,
          hints: [
            "First describe the concrete action taken with interviewees after transcription/coding.",
            "Then explain *how* this reduces confirmation bias and verifies authentic meaning.",
          ],
          modelAnswer:
            "In **participant validation**, the researcher returns interview transcripts or draft thematic summaries to the interviewees so they can verify, clarify, or challenge the interpretations. This directly reduces **researcher confirmation bias** and misinterpretation, confirming that the reported themes accurately represent participants' genuine lived meanings.",
          markScheme: [
            {
              point: "Explains the procedure of returning transcripts or draft themes/interpretations to participants for review/feedback.",
              keywords: ["return", "transcript", "draft", "summary", "summaries", "review", "verify"],
            },
            {
              point: "Explains the methodological benefit: reduces researcher confirmation bias / misinterpretation and confirms authentic participant meaning.",
              keywords: ["confirmation bias", "researcher bias", "misinterpret", "authentic", "lived", "accurate"],
            },
          ],
          commonError: "Confusing member checking with inter-rater reliability (two researchers checking each other rather than checking back with participants).",
        },
        {
          id: "1-concepts-methodology-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "interviews-observations",
          strategy: "Contrast validity vs ethics trade-off cleanly",
          question:
            "Distinguish between overt and covert observation in terms of both ecological validity and ethical Responsibility.",
          marks: 3,
          hints: [
            "Define awareness cleanly (participants know vs do not know they are watched).",
            "Contrast ecological validity: Hawthorne reactivity in overt vs natural spontaneous acts in covert.",
            "Contrast ethics: informed consent/right to withdraw in overt vs privacy/deception limits in covert.",
          ],
          modelAnswer:
            "In **overt** observation, participants know they are being watched, whereas in **covert** observation, the researcher conceals their role. Regarding **ecological validity**, overt observation risks the **Hawthorne (reactivity) effect** as people modify behaviour when watched, whereas covert observation captures spontaneous, natural behaviour. Regarding **ethical Responsibility**, overt observation upholds **informed consent** and the **right to withdraw**, whereas covert observation threatens **privacy** and lacks prior consent — making it justifiable only in genuinely public settings where people expect to be seen.",
          markScheme: [
            {
              point: "Clearly distinguishes participant awareness (aware vs unaware of being observed).",
              keywords: ["aware", "unaware", "know", "conceal", "secret"],
            },
            {
              point: "Contrasts ecological validity (Hawthorne/reactivity distortion in overt vs natural/spontaneous behaviour in covert).",
              keywords: ["hawthorne", "reactivity", "spontaneous", "natural", "modify"],
            },
            {
              point: "Contrasts ethical Responsibility (informed consent/withdrawal in overt vs privacy breach/public-setting restriction in covert).",
              keywords: ["informed consent", "privacy", "public", "withdraw", "deception"],
            },
          ],
          commonError: "Claiming covert observation is *always* completely illegal rather than noting it is restricted to public behaviour where privacy is not expected.",
        },
        {
          id: "1-concepts-methodology-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "interviews-observations",
          strategy: "Compare focus groups vs individual interviews on sensitive topics",
          question:
            "Evaluate the use of a focus group rather than individual semi-structured interviews for investigating teenage body-image pressures.",
          marks: 4,
          hints: [
            "Include a genuine strength of focus groups (group interaction uncovers shared peer norms, slang, and collective pressures quickly).",
            "Include Bias limits (dominant speakers, peer conformity, social desirability silencing personal insecurities).",
            "Include Responsibility limits (confidentiality cannot be guaranteed among teenage peers) and reach a balanced conclusion.",
          ],
          modelAnswer:
            "**Strengths:** A focus group is time-efficient and stimulates **interactive discussion**, allowing researchers to observe shared peer slang, collective beauty norms, and social-media pressures unfolding naturally.\n\n**Limitations (Bias & Responsibility):** Because teenage body image is deeply sensitive, vocal peers can dominate discussion while quieter adolescents conform or censor vulnerabilities due to **social desirability bias**. Ethically, although the moderator promises secrecy, the researcher cannot enforce **confidentiality** among classmates after the session ends, risking gossip or **psychological harm**. **Overall**, individual private interviews are safer and elicit deeper personal honesty for body-image research, whereas a focus group is best reserved for exploring general media norms rather than personal distress.",
          markScheme: [
            {
              point: "Identifies a valid strength of focus groups (interactive dynamics revealing shared peer norms/language, or efficiency).",
              keywords: ["interact", "peer norms", "shared", "efficient", "collective", "dynamic"],
            },
            {
              point: "Evaluates Bias limitations (dominant voices, peer conformity, social desirability suppressing candid disclosure).",
              keywords: ["dominant", "conformity", "social desirability", "censor", "bias"],
            },
            {
              point: "Evaluates ethical Responsibility limitation (cannot guarantee peer confidentiality / risk of gossip or distress).",
              keywords: ["confidential", "gossip", "harm", "distress", "privacy"],
            },
            {
              point: "Concludes with a reasoned comparative judgement favouring private individual interviews for sensitive personal experiences.",
              keywords: ["overall", "private", "individual", "honesty", "safer", "general"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Basic points about group discussions without clearly linking to body-image sensitivity, Bias, or confidentiality." },
            { band: "3–4", marks: [3, 4], descriptor: "Balanced evaluation weighing interactive norm discovery against conformity/social desirability and peer confidentiality risks, ending in a clear judgement." },
          ],
          commonError: "Listing only disadvantages of focus groups without acknowledging why researchers ever use them (shared social norms and interactive probing).",
        },
        {
          id: "1-concepts-methodology-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "interviews-observations",
          strategy: "Explain two distinct triangulation types + concept links",
          question:
            "Explain how methodological triangulation and researcher triangulation address Bias and Measurement limitations in qualitative research.",
          marks: 4,
          hints: [
            "Define methodological triangulation (combining ≥ 2 methods like observation + interview + survey) and explain how one offsets another's blind spot.",
            "Define researcher triangulation (≥ 2 independent analysts coding the same transcripts/footage) and link to confirmation Bias & inter-coder consistency.",
          ],
          modelAnswer:
            "**Methodological triangulation** combines two or more distinct research methods — for example, pairing naturalistic **observation** with **semi-structured interviews** and an anonymous **survey** — to investigate the same phenomenon. Because people's self-reports may suffer from **social desirability bias** while overt observation suffers from **Hawthorne reactivity**, converging evidence across methods strengthens **credibility** and **Measurement** validity.\n\n**Researcher triangulation** involves two or more investigators independently coding the same transcripts or behavioural footage before comparing categories. Checking inter-coder agreement exposes idiosyncratic interpretations, directly reducing individual **confirmation bias** and enhancing **dependability**.",
          markScheme: [
            {
              point: "Defines methodological triangulation as combining two or more different methods on the same phenomenon (with concrete examples).",
              keywords: ["two or more", "combin", "observation", "interview", "survey"],
            },
            {
              point: "Explains how methodological triangulation offsets single-method weaknesses (e.g. social desirability vs reactivity) to boost credibility/validity.",
              keywords: ["credibility", "social desirability", "reactivity", "converg", "validity"],
            },
            {
              point: "Defines researcher triangulation as multiple independent investigators coding/analysing the same dataset.",
              keywords: ["independent", "multiple", "investigator", "coder", "analys"],
            },
            {
              point: "Explains how researcher triangulation counters individual confirmation bias and strengthens consistency/dependability.",
              keywords: ["confirmation bias", "idiosyncratic", "agreement", "dependability", "consistency"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Briefly defines triangulation generally without clearly distinguishing methodological vs researcher forms." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains both triangulation types and traces exactly how each mitigates Bias and strengthens Measurement/credibility." },
          ],
          commonError: "Claiming triangulation 'proves objectivity' rather than explaining how it cross-checks blind spots and reduces confirmation bias.",
        },
        {
          id: "1-concepts-methodology-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "ethics-unseen-study-paper2",
          strategy: "Nuanced ethical Responsibility reasoning",
          question:
            "Explain why debriefing is ethically essential after mild experimental deception, yet insufficient to justify exposing participants to foreseeable severe psychological harm.",
          marks: 4,
          hints: [
            "Part 1: State what a thorough debriefing achieves (reveals true aim, restores dignity/mood, offers right to withdraw data, gives support contacts).",
            "Part 2: Explain why debriefing cannot undo severe predictable harm (emotional trauma or damaged self-esteem may linger, breaching protection from harm).",
          ],
          modelAnswer:
            "When mild, scientifically unavoidable deception is used (for example, concealing a memory test's true hypothesis to curb **demand characteristics**), immediate **debriefing** restores ethical **Responsibility** by explaining the true aim, clarifying why deception was needed, checking emotional wellbeing, and offering an unconditional **right to withdraw data** now that participants are fully informed.\n\nHowever, debriefing is strictly a **post-hoc** safeguard and never grants permission to inflict **foreseeable severe distress**. Experiencing acute humiliation, fear, or self-esteem damage during a trial can cause lingering anxiety or eroded trust in psychology that verbal reassurance afterward cannot erase; therefore, **protection from harm** must prohibit high-risk procedures *before* testing ever starts.",
          markScheme: [
            {
              point: "Explains why mild deception may be used (e.g. curbing demand characteristics) and how debriefing reveals the true aim/purpose.",
              keywords: ["true aim", "purpose", "demand characteristics", "reveal", "explain"],
            },
            {
              point: "Identifies key restorative features of debriefing (restoring emotional state/wellbeing and offering post-hoc right to withdraw data).",
              keywords: ["withdraw", "wellbeing", "restore", "support"],
            },
            {
              point: "Explains why debriefing cannot justify severe foreseeable harm (it happens afterward / lingering distress or trauma cannot simply be undone).",
              keywords: ["afterward", "post-hoc", "linger", "undo", "erase", "trauma", "humiliation"],
            },
            {
              point: "Links explicitly to the proactive priority of protection from harm / ethical review before testing begins.",
              keywords: ["protection from harm", "prohibit", "before", "everyday life", "trust"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes debriefing briefly without addressing both its restorative role and its ethical limits." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear two-sided ethical explanation detailing debriefing's restorative functions (true aim, data withdrawal) and why protection from harm overrides post-hoc reassurance." },
          ],
          commonError: "Forgetting to mention the right to withdraw *data* during debriefing once the true aim is revealed.",
        },
        {
          id: "1-concepts-methodology-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "ethics-unseen-study-paper2",
          strategy: "Paper 2 Section B C–E–I–M unseen-study evaluation",
          question:
            "**Unseen Study (Paper 2 Section B):** To test whether background pop music impairs reading comprehension, a university lecturer told 40 students in her own mandatory class to take an unannounced 10-minute reading quiz while loud pop music played, then gave them a different reading quiz in silence one week later. Mean comprehension scores were 19% lower during the loud music trial. No consent forms were used, and students were told scores counted toward course participation marks. Evaluate this study using the Core Concepts of **Responsibility** and **Causality**.",
          marks: 6,
          hints: [
            "Use C–E–I–M for Responsibility: quote *mandatory class*, *own lecturer*, *no consent forms*, *participation marks* → coercion/power imbalance, lack of informed consent, deception, no right to withdraw.",
            "Use C–E–I–M for Causality: quote *loud music first then silence next week* + *different quiz* → uncounterbalanced order effects (practice/fatigue), non-equivalent quiz difficulty, and test anxiety from graded threat.",
            "Propose realistic modifications AND note a methodological trade-off.",
          ],
          modelAnswer:
            "**Responsibility (Consent, Coercion & Deception):** Recruiting 40 students inside a **mandatory lecture** run by their own lecturer creates a clear **power imbalance** and coercion, violating voluntary **informed consent** and the **right to withdraw** (students feared losing participation marks). Misleading students that an experimental trial counted toward grades adds unjustified **deception** and avoidable exam stress (**psychological harm**), with no mention of **debriefing** or confidentiality.\n\n**Causality (Order Effects & Confounding Variables):** Although every student experienced both conditions, all 40 completed Music first and Silence one week later with **zero counterbalancing**, so **practice effects** or familiarity with the quiz style could explain the 19% higher silent score. Worse, using a **different quiz** in Week 2 without verified difficulty equivalence confounds music with passage difficulty, and the **anxiety** triggered by the surprise graded test acts as an extraneous variable.\n\n**Modification & Trade-Off:** Redesign with independent non-lecturer recruitment, written informed consent, zero grade pressure, **AB / BA counterbalancing**, and pilot-equated parallel texts. While removing surprise grading improves **Responsibility** and internal **Causality**, it may slightly lower real-world exam stress realism (ecological validity trade-off).",
          markScheme: [
            {
              point: "Responsibility — identifies breach of voluntary informed consent and power imbalance/coercion (own lecturer, mandatory class, participation marks).",
              keywords: ["coercion", "power imbalance", "informed consent", "voluntary", "withdraw"],
            },
            {
              point: "Responsibility — identifies unjustified deception, avoidable stress/psychological harm, and/or missing debriefing.",
              keywords: ["deception", "harm", "stress", "debrief"],
            },
            {
              point: "Causality — identifies lack of counterbalancing causing order/practice effects (everyone did music Week 1, silence Week 2).",
              keywords: ["counterbalanc", "order effect", "practice", "sequence"],
            },
            {
              point: "Causality — identifies confounding extraneous variables from the stimulus (unmatched difficulty of the second quiz and/or surprise-test anxiety).",
              keywords: ["difficulty", "confound", "extraneous", "equivalence", "parallel"],
            },
            {
              point: "Proposes concrete, relevant methodological and ethical redesign fixes (e.g. AB/BA counterbalancing, pilot-equated quizzes, independent consenting volunteers).",
              keywords: ["redesign", "pilot", "ab / ba", "ab/ba", "independent", "volunteer"],
            },
            {
              point: "Weighs a genuine methodological trade-off of the proposed modification (e.g. higher internal validity & ethics vs slightly reduced classroom realism).",
              keywords: ["trade-off", "trade off", "ecological", "realism", "artificial"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Generic methodological criticisms weakly linked to the stimulus or addressing only one concept." },
            { band: "3–4", marks: [3, 4], descriptor: "Sound stimulus-grounded evaluation across Responsibility and Causality, though modifications or trade-offs remain underdeveloped." },
            { band: "5–6", marks: [5, 6], descriptor: "Sustained C–E–I–M evaluation quoting exact unseen details across Responsibility and Causality, proposing coherent redesigns and explicitly weighing trade-offs." },
          ],
          commonError: "Calling the sample 'too small (only 40)' while missing the giant order-effect, quiz-difficulty, and lecturer-coercion flaws sitting directly in the stimulus!",
        },
        {
          id: "1-concepts-methodology-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "interviews-observations",
          strategy: "HL Qualitative Trustworthiness criteria in an emic study",
          question:
            "Discuss how reflexivity, thick description, and an audit trail support trustworthiness in an emic cross-cultural interview study.",
          marks: 6,
          hints: [
            "Anchor each of the three practices to its matching qualitative trustworthiness criterion: confirmability (reflexivity), transferability (thick description), dependability (audit trail).",
            "Explain *why* emic cross-cultural research especially needs these safeguards (insider meanings vs outsider researcher assumptions).",
            "Include balanced limitations/challenges (time cost, cannot turn qualitative insights into statistical population generalisation, researcher blind spots remain possible).",
          ],
          modelAnswer:
            "In an **emic** study aiming to understand behaviour through local cultural meanings rather than imposed Western frameworks, qualitative trustworthiness replaces quantitative objectivity:\n\n1. **Reflexivity → Confirmability:** Keeping a reflexive journal exposes how the interviewer's own cultural identity, language fluency, and theoretical assumptions shape probing and coding, helping readers judge whether findings emerge from participants' voices rather than **researcher bias**.\n2. **Thick Description → Transferability:** Providing detailed contextual accounts of local customs, institutional norms, and participant quotes allows other researchers to evaluate whether the themes transfer sensibly to comparable cultural settings.\n3. **Audit Trail → Dependability:** Preserving raw transcripts, coding memos, and theme-revision logs demonstrates a transparent, traceable analytic path.\n\n**Evaluation & Limits:** Together these tools strengthen credibility and ethical **Perspective**, yet they are time-intensive, cannot produce statistical population **generalisability**, and rely on researchers genuinely recognising their own subtle cultural blind spots (best paired with **member checking** and local co-researchers).",
          markScheme: [
            {
              point: "Links reflexivity to confirmability and curbing researcher cultural/theoretical bias.",
              keywords: ["confirmability", "journal", "assumptions", "researcher bias"],
            },
            {
              point: "Links thick description to transferability via rich contextual reporting of cultural setting/norms.",
              keywords: ["transferability", "contextual", "comparable", "customs", "setting"],
            },
            {
              point: "Links audit trail to dependability via transparent documentation of coding/analytic decisions.",
              keywords: ["dependability", "transparent", "traceable", "memo", "coding"],
            },
            {
              point: "Connects explicitly to the emic goal (preserving insider cultural meanings rather than imposed etic frameworks).",
              keywords: ["insider", "local", "imposed", "etic", "meanings"],
            },
            {
              point: "Discusses a balanced limitation (e.g. time-intensive, does not confer statistical population generalisation, or blind spots remain).",
              keywords: ["limitation", "time", "generalis", "blind spot", "statistical"],
            },
            {
              point: "Suggests a complementary credibility enhancement (e.g. member checking, local co-researchers, or triangulation).",
              keywords: ["member checking", "co-researcher", "triangulat", "credibility"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Defines one or two qualitative terms briefly with little connection to trustworthiness criteria or emic culture." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains all three practices and links them to trustworthiness, with limited critical discussion of boundaries." },
            { band: "5–6", marks: [5, 6], descriptor: "Nuanced HL discussion mapping reflexivity/confirmability, thick description/transferability, and audit trail/dependability onto emic cross-cultural research while weighing practical limits." },
          ],
          commonError: "Claiming thick description creates 'population validity' — qualitative studies aim for *transferability*, not statistical population generalisability.",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "1-concepts-methodology-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "experiments-surveys",
      strategy: "Two-stage response rate + longitudinal attrition calculation",
      question:
        "A longitudinal sleep survey invites 250 sixth-form students. Exactly 80% complete Wave 1, and 15% of those Wave 1 respondents drop out before Wave 2. How many participants complete Wave 2?",
      answer: {
        type: "number",
        value: 170,
        display: "170",
      },
      traps: [
        {
          spec: { type: "number", value: 162.5 },
          feedback: "Do not add 20% + 15% = 35% of 250! The 15% attrition applies to the 200 Wave 1 respondents, not the original 250 invitations.",
        },
        {
          spec: { type: "number", value: 200 },
          feedback: "200 is the number completing Wave 1 — now subtract the 15% who drop out before Wave 2.",
        },
        {
          spec: { type: "number", value: 30 },
          feedback: "30 is the number who dropped out between Wave 1 and Wave 2 — subtract 30 from 200.",
        },
      ],
      hints: [
        "Step 1: Find how many students complete Wave 1: {{0.80 * 250}}.",
        "Step 2: Calculate 15% of that Wave 1 group (not of 250!).",
        "Step 3: Subtract the Wave 2 dropouts from the Wave 1 count.",
      ],
      solution: [
        "Wave 1 respondents = {{0.80 * 250 = 200}} students.",
        "Wave 2 dropouts = {{0.15 * 200 = 30}} students.",
        "Wave 2 completers = {{200 - 30 = 170}} participants.",
      ],
    },
    {
      id: "1-concepts-methodology-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "interviews-observations",
      strategy: "Reverse IOA threshold calculation",
      question:
        "Two observers pilot a classroom behavioural coding schedule across 65 intervals. To meet the conventional 80% inter-observer agreement benchmark, what is the minimum whole number of intervals on which they must agree?",
      answer: {
        type: "number",
        value: 52,
        display: "52",
      },
      traps: [
        {
          spec: { type: "number", value: 13 },
          feedback: "13 is the maximum number of disagreements allowed (20% of 65) — the question asks for agreements.",
        },
      ],
      hints: [
        "Rearrange {{(Agreements / 65) * 100 >= 80}}.",
        "Compute {{0.80 * 65}}.",
      ],
      solution: [
        "Minimum agreements = {{0.80 * 65 = 52}} intervals.",
        "Check: {{(52 / 65) * 100 = 80%}}.",
      ],
    },
    {
      id: "1-concepts-methodology-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "six-core-concepts",
      strategy: "HL cultural Perspective fallacy identification",
      question:
        "Exporting a Western-normed parenting questionnaire unchanged into a rural collectivist society and labelling culturally typical interdependent practices as 'insecure deficits' commits what specific two-word cross-cultural Perspective fallacy?",
      answer: {
        type: "text",
        accept: ["imposed etic", "imposed-etic", "Imposed etic", "Imposed-etic"],
        display: "Imposed etic",
      },
      traps: [
        {
          spec: { type: "text", accept: ["emic", "emic approach"] },
          feedback: "Emic research studies meanings from *inside* a local culture; exporting an outside standard as universal is the opposite.",
        },
      ],
      hints: [
        "Recall the pair of terms contrasting insider (*emic*) vs outsider universal (*etic*) traditions.",
        "Add the adjective describing what happens when an outside etic construct is forced onto another culture.",
      ],
      solution: [
        "Assuming a culture-specific Western instrument measures a universal norm commits an **imposed etic** fallacy.",
      ],
    },
    {
      id: "1-concepts-methodology-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "six-core-concepts",
      strategy: "HL group-to-individual inference fallacy",
      question:
        "A researcher observes that Country Y has a high national collectivism average and automatically predicts that a randomly met teenager from Country Y must dislike solo revision. State the exact two-word name of this reasoning fallacy.",
      answer: {
        type: "text",
        accept: ["ecological fallacy", "Ecological fallacy", "the ecological fallacy"],
        display: "Ecological fallacy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["confirmation bias", "Confirmation bias"] },
          feedback: "Confirmation bias seeks supporting evidence selectively; inferring an individual trait from a group-level average has a specific statistical name.",
        },
      ],
      hints: [
        "It warns against stereotyping individuals from aggregate group or national statistics.",
        "Starts with the word 'ecological'.",
      ],
      solution: [
        "Applying group-level aggregate statistics directly to predict an individual's traits is the **ecological fallacy**.",
      ],
    },
    {
      id: "1-concepts-methodology-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "Three-concept Paper 2 Section B unseen-study critique",
      question:
        "**Unseen Study (Paper 2 Section B):** A commercial tech start-up investigates whether its AI coaching chatbot lowers adolescent exam anxiety. They post an Instagram advert recruiting 60 self-selected English-speaking teenagers (aged 15–17) without parental permission, give all 60 chatbot access for three weeks with no comparison group, and assess anxiety solely via a single 1–5 item ('How anxious are you right now?'). Mean ratings drop from 4.1 to 3.2, and the company advertises that the bot 'cures exam anxiety.' Evaluate this unseen study using **Causality**, **Measurement**, and **Responsibility**.",
      marks: 6,
      hints: [
        "Causality: quote *no comparison group* + *3 weeks* → maturation, passing exams, placebo/expectancy, or regression to the mean.",
        "Measurement: quote *single 1–5 item ('right now')* → captures fleeting state mood, not multidimensional trait/exam anxiety (weak construct & test–retest validity).",
        "Responsibility: quote *aged 15–17 without parental permission* + *commercial 'cures' claim* → vulnerable minors without guardian consent, data privacy, and irresponsible public overclaiming.",
      ],
      modelAnswer:
        "**Causality:** Because all 60 teenagers received the chatbot with **no randomised control or waitlist group**, the 0.9-point drop cannot be attributed causally to the AI coach: exams may simply have ended over the three weeks (**history/maturation confounds**), stressed volunteers may naturally return toward baseline (**regression to the mean**), or optimism may produce a **placebo effect**.\n\n**Measurement:** Operationalising exam anxiety through a **single momentary question** ('right now') has poor **construct validity** and low **reliability** — it reflects transient mood on test day rather than cognitive worry, physiological tension, or sustained performance anxiety. A validated multi-item anxiety scale paired with follow-up interviews would strengthen measurement.\n\n**Responsibility:** Enrolling minors (**aged 15–17**, a vulnerable group) via Instagram without **parental consent** breaches informed consent standards and raises AI data-privacy risks. Moreover, advertising that an uncontrolled 0.9-point shift **'cures'** clinical anxiety is socially irresponsible and could deter distressed youths from seeking evidence-based clinical support.",
      markScheme: [
        {
          point: "Causality — identifies absence of control/comparison group and random allocation.",
          keywords: ["control", "waitlist", "random", "comparison"],
        },
        {
          point: "Causality — explains plausible alternative causes (maturation/passing exams, placebo/expectancy, regression to the mean).",
          keywords: ["placebo", "maturation", "regression", "confound", "ended", "expectancy"],
        },
        {
          point: "Measurement — critiques the single momentary 1–5 item for weak construct validity / poor reliability (transient mood vs multidimensional anxiety).",
          keywords: ["construct validity", "reliability", "transient", "mood", "momentary", "multidimensional"],
        },
        {
          point: "Measurement — proposes a stronger operationalisation (e.g. validated multi-item scale, repeated baseline, or triangulation).",
          keywords: ["multi-item", "validated", "scale", "triangulat", "interview"],
        },
        {
          point: "Responsibility — critiques enrolling 15–17-year-old minors without parental/guardian consent and/or AI confidentiality/privacy concerns.",
          keywords: ["parental", "guardian", "minor", "vulnerable", "privacy", "confidential"],
        },
        {
          point: "Responsibility — critiques socially harmful commercial overclaiming ('cures') potentially deterring professional mental-health care.",
          keywords: ["overclaim", "irresponsible", "deter", "mislead", "clinical", "support"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Generalised comments covering only one or two concepts without anchoring to stimulus specifics." },
        { band: "3–4", marks: [3, 4], descriptor: "Clear stimulus-linked points across all three concepts, though mechanisms or improvements are brief." },
        { band: "5–6", marks: [5, 6], descriptor: "Sharp, comprehensive Paper 2 critique explicitly unpacking Causality confounds, Measurement construct validity, and both procedural and societal Responsibility." },
      ],
      commonError: "Focusing solely on the missing parental consent while neglecting societal Responsibility (the misleading 'cures' claim) and Measurement of the single item.",
    },
    {
      id: "1-concepts-methodology-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Design",
      guideRef: "experiments-surveys",
      strategy: "FA2027 IA Research Proposal design blueprint (no data collection)",
      question:
        "Outline a rigorous, ethical FA2027 **Research Proposal** (hypothetical design — no data collection) using either a **Survey/Questionnaire** or a **Structured Observation** to examine smartphone presence and study focus among sixth-form students. Justify your sampling strategy, a ≥ 5-item/category operationalised instrument, one Bias control, and two ethical safeguards.",
      marks: 6,
      hints: [
        "Pick ONE method cleanly (e.g. Survey with ≥ 5 Likert/open items OR Overt Naturalistic Non-Participant Observation with ≥ 5 operationalised behavioural categories).",
        "Justify a realistic sampling plan (e.g. proportional stratified sampling across Year 12 & Year 13).",
        "Include concrete Bias control (reverse-scored neutral items OR ≥ 2 coders checking IOA ≥ 80%) and two named ethical safeguards.",
      ],
      modelAnswer:
        "**Method & Aim:** A hypothetical **anonymous Survey/Questionnaire** investigating the relationship between smartphone desk-placement and perceived study focus across Year 12 and Year 13 students (no data collection carried out).\n\n**Sampling Strategy:** Use **proportional stratified sampling** (target n = 100, e.g. 50 Year 12 and 50 Year 13 drawn randomly from school tutor lists) to reduce convenience **sampling Bias** and improve school-wide population validity.\n\n**Operationalised Tool (≥ 5 Items for Measurement):** Design an 8-item appendix instrument combining 6 neutral 5-point Likert items (e.g. *'When my phone is face-up on my desk, I pause reading within 10 minutes'*), two **reverse-scored** items, one behavioural frequency item (average unlocked checks per 30-minute session), and one open-ended reflection item for qualitative depth.\n\n**Bias Control:** Eliminate double-barrelled/leading wording via pilot peer review, embed reverse-scored items to counter **acquiescence bias**, and ensure complete **anonymity** (no names or IP logging) to curb **social desirability bias**.\n\n**Ethical Responsibility:** Obtain **informed consent** via a digital cover sheet (plus parental consent if any respondents are under 16), state an unconditional **right to withdraw** prior to submission, and provide an end-of-survey **debriefing** with school study-support links.",
      markScheme: [
        {
          point: "Clearly specifies one approved FA2027 method (Survey/Questionnaire or Structured Observation) as a hypothetical proposal with clear aim.",
          keywords: ["hypothetical", "anonymous", "naturalistic", "overt", "aim", "relationship"],
        },
        {
          point: "Selects and justifies a sampling method (e.g. proportional stratified, random, or justified convenience/time/event sampling) linked to population validity.",
          keywords: ["stratified", "random", "population", "proportion", "time sampling", "event sampling"],
        },
        {
          point: "Specifies a ≥ 5-item/category operationalised measurement tool with concrete examples strengthening construct validity.",
          keywords: ["likert", "categories", "category", "behavioural", "behavioral", "appendix", "8-item", "5-point"],
        },
        {
          point: "Details a specific Bias/reliability safeguard (reverse-scored neutral items, pilot review, social-desirability anonymity, or two blind coders IOA ≥ 80%).",
          keywords: ["reverse", "acquiescence", "social desirability", "inter-observer", "ioa", "pilot", "double-barrelled"],
        },
        {
          point: "Includes first concrete ethical safeguard (informed consent + parental consent where minors under 16 are involved).",
          keywords: ["informed consent", "parental", "assent"],
        },
        {
          point: "Includes second concrete ethical safeguard (right to withdraw, anonymity/confidentiality, debriefing, or protection from harm).",
          keywords: ["withdraw", "anonym", "confidential", "debrief", "harm"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Brief idea lacking operationalised tool details, justified sampling, or explicit ethical safeguards." },
        { band: "3–4", marks: [3, 4], descriptor: "Clear hypothetical proposal covering method, sampling, tool, and ethics, though Bias controls or justifications are partial." },
        { band: "5–6", marks: [5, 6], descriptor: "Cohesive FA2027 IA-ready Research Proposal linking justified sampling, operationalised ≥ 5-item/category tool, explicit Bias/Measurement controls, and thorough ethical Responsibility." },
      ],
      commonError: "Proposing to 'run the survey and report p-values' (violating FA2027 IA proposal rules) or omitting concrete sample items/behavioural categories.",
    },
    {
      id: "1-concepts-methodology-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "HL three-concept synthesis on differential attrition",
      question:
        "In an 8-week exercise-and-mood RCT, 80 sedentary adults are randomly allocated to a vigorous running group (n = 40) or a gentle stretching control (n = 40). By Week 8, 16 runners have dropped out (40% attrition) compared with only 2 stretchers (5% attrition). The remaining 24 runners report significantly higher mood than the 38 stretchers ({{p = 0.02}}). Analyse how **Bias**, **Causality**, and **Change** complicate the claim that running caused lasting mood gains.",
      marks: 6,
      hints: [
        "Bias: Ask *who* quit the vigorous running arm vs who stayed (survivor / differential attrition bias).",
        "Causality: Explain how selective dropout breaks the baseline equivalence that random allocation originally created.",
        "Change: Question whether 8 weeks proves *lasting* change and note that mood change may reflect only resilient individuals rather than average sedentary adults.",
      ],
      modelAnswer:
        "**Bias (Differential Attrition / Survivor Bias):** Losing 40% of the running arm versus only 5% of controls is severely uneven (**differential attrition**). Participants who found vigorous running painful, demoralising, or mood-worsening were most likely to quit, leaving an unrepresentative subgroup of 24 unusually resilient or intrinsically motivated 'survivors' — systematically inflating the running group's mean mood.\n\n**Causality (Loss of Randomised Equivalence):** Although Week 1 **random allocation** initially balanced participant variables across groups, selective dropout destroys that equivalence by Week 8. Consequently, the statistically significant difference ({{p = 0.02}}) may reflect **pre-existing resilience or self-selection** rather than a pure causal effect of running; analysing only completers instead of an **intention-to-treat** baseline comparison overstates causal efficacy.\n\n**Change (Persistence & Generalisability of Change):** Measuring mood only at Week 8 cannot establish whether mood **Change** persists months later once supervised sessions stop, nor whether vigorous running produces positive change for typical sedentary adults (40% could not sustain it). Tracking 6-month follow-ups and reporting **effect size** alongside dropout reasons is essential.",
      markScheme: [
        {
          point: "Bias — identifies differential attrition / survivor bias (40% vs 5% unequal dropout skewing the finishing running sample).",
          keywords: ["differential attrition", "survivor", "uneven", "unequal", "selective"],
        },
        {
          point: "Bias — explains psychological mechanism of selective dropout (less motivated or demoralised/fatigued runners quit, leaving resilient finishers).",
          keywords: ["resilient", "motivated", "demoralis", "painful", "inflat"],
        },
        {
          point: "Causality — explains how differential attrition breaks the baseline group equivalence created by initial random allocation.",
          keywords: ["equivalence", "random allocation", "breaks", "destroy", "confound"],
        },
        {
          point: "Causality — notes analytic remedy or statistical nuance (e.g. intention-to-treat analysis or checking effect size alongside p = 0.02).",
          keywords: ["intention-to-treat", "intention to treat", "effect size", "overstat", "completer"],
        },
        {
          point: "Change — questions durability/persistence beyond 8 weeks (no long-term follow-up once supervision ends).",
          keywords: ["persist", "follow-up", "follow up", "long-term", "months", "sustain"],
        },
        {
          point: "Change — notes limited real-world feasibility of behavioural change for typical sedentary adults given 40% non-adherence.",
          keywords: ["adherence", "feasible", "feasibility", "typical", "general"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Notes that people dropped out without clearly connecting differential attrition to Bias, broken randomisation, and Change." },
        { band: "3–4", marks: [3, 4], descriptor: "Solid analysis of at least two concepts using the 40% vs 5% figures, with brief treatment of the third." },
        { band: "5–6", marks: [5, 6], descriptor: "Incisive HL synthesis connecting differential survivor Bias, broken randomised Causality (and intention-to-treat/effect size), and durability/feasibility of behavioural Change." },
      ],
      commonError: "Assuming that because the trial used random allocation at Week 1 and achieved p = 0.02, Causality automatically holds despite 40% vs 5% attrition.",
    },
    {
      id: "1-concepts-methodology-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "ethics-unseen-study-paper2",
      strategy: "Extended 8-mark Paper 2 synoptic argument across all 4 Class Practicals",
      question:
        "**Extended Evaluation (Paper 2 Synoptic):** To what extent can methodological triangulation resolve the tension between Causality and ecological validity (Measurement) in psychological research? Support your argument with reference to all four FA2027 Class Practical methods.",
      marks: 8,
      hints: [
        "Define the core trade-off first: laboratory Experiments maximise Causality (internal validity) at the cost of artificiality; naturalistic Observations, Interviews, and Surveys maximise ecological realism at the cost of extraneous confounds.",
        "Explain how combining methods (triangulation) bridges the gap — e.g. lab experiment isolates causal mechanism while field observation/interviews verify real-world manifestation and lived meaning.",
        "Evaluate the *limits* of triangulation: combining two biased methods does not create causal proof; time/cost/ethics constraints; contradictory findings require careful reflexivity rather than forcing consensus.",
        "Reach a nuanced 'to a substantial yet bounded extent' conclusion.",
      ],
      modelAnswer:
        "Psychological research faces an enduring methodological trade-off: **true laboratory experiments** manipulate an independent variable with tight control and **random allocation** to establish strong **Causality**, yet artificial lab settings and **demand characteristics** often weaken **ecological validity**. Conversely, **naturalistic observations**, **semi-structured interviews**, and large-scale **surveys** capture authentic everyday behaviour, subjective **Perspective**, and breadth across natural settings, yet suffer from confounding variables, **Hawthorne reactivity**, and **social desirability bias** that prevent firm causal inference.\n\n**To a substantial extent, methodological triangulation bridges this gap.** When researchers pair a controlled lab experiment (isolating a causal cognitive mechanism) with a naturalistic field observation (verifying whether the behaviour appears spontaneously in real life), anonymous surveys (mapping population prevalence), and semi-structured interviews (uncovering *why* participants responded as they did), converging findings strengthen **credibility** and **construct validity** simultaneously. Each practical offsets another's blind spots: observation checks enacted action against survey self-reports, while experiments test hypotheses generated inductively from interviews.\n\n**However, triangulation cannot fully dissolve the tension.** First, combining correlational surveys, observations, and interviews still yields zero causal proof without an experimental manipulation. Second, if two methods share an underlying **Bias** (such as a WEIRD student sample or cultural misunderstanding), convergence merely replicates the same distortion. Third, multi-method studies demand greater funding, time, and ethical **Responsibility** (protecting confidentiality across linked datasets), and divergent results between methods require transparent **reflexivity** rather than forced agreement.\n\n**Conclusion:** Methodological triangulation resolves the Causality–ecological validity trade-off **to a considerable but bounded extent** — it produces far stronger, more nuanced psychological knowledge than any single Class Practical alone, provided at least one controlled design addresses Causality and shared sampling biases are actively audited.",
      markScheme: [
        {
          point: "Clearly articulates the core tension between experimental Causality/internal validity and real-world ecological validity.",
          keywords: ["internal validity", "artificial", "demand characteristics", "trade-off", "trade off"],
        },
        {
          point: "Integrates Experiments accurately (IV manipulation, random allocation, control).",
          keywords: ["random allocation", "manipulat", "control", "laboratory"],
        },
        {
          point: "Integrates Observations accurately (naturalistic behaviour vs Hawthorne reactivity/confounds).",
          keywords: ["naturalistic", "hawthorne", "reactivity", "spontaneous"],
        },
        {
          point: "Integrates Interviews and Surveys accurately (lived meaning/Perspective & population breadth vs social desirability/correlational limits).",
          keywords: ["semi-structured", "social desirability", "prevalence", "perspective", "self-report"],
        },
        {
          point: "Explains how converging multi-method evidence strengthens credibility/construct validity by offsetting individual method blind spots.",
          keywords: ["converg", "credibility", "construct validity", "blind spot", "offset"],
        },
        {
          point: "Evaluates a core epistemic limit: non-experimental combinations still cannot establish Causality, or shared sampling/WEIRD bias persists across methods.",
          keywords: ["weird", "shared", "non-experimental", "correlational", "causal proof"],
        },
        {
          point: "Evaluates practical/ethical constraints (cost, time, linked confidentiality, or interpreting contradictory findings via reflexivity).",
          keywords: ["cost", "time", "confidential", "reflexivity", "divergent", "contradict"],
        },
        {
          point: "Reaches a balanced, nuanced 'to what extent' judgement rather than an all-or-nothing verdict.",
          keywords: ["conclusion", "considerable", "bounded", "substantial", "provided"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Descriptive overview of one or two research methods with little engagement with the 'to what extent' question." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains the Causality vs ecological validity trade-off and how triangulation helps, but omits some practicals or offers limited critique." },
        { band: "5–6", marks: [5, 6], descriptor: "Well-structured argument integrating all four Class Practicals, showing how triangulation helps and identifying concrete limitations." },
        { band: "7–8", marks: [7, 8], descriptor: "Sustained, nuanced synoptic evaluation integrating all four practicals and multiple Core Concepts, probing shared-bias and causal limits, and delivering a justified 'to what extent' judgement." },
      ],
      commonError: "Arguing unconditionally that triangulation 'solves everything' without noticing that shared WEIRD sampling bias or purely non-experimental combinations still fail to establish Causality.",
    },
  ],
};
