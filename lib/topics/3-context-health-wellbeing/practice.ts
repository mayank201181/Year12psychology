import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 Qs)
  // ===========================================================================
  quiz: [
    {
      id: "3-context-health-wellbeing-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "diagnosis-classification-bias",
      question:
        "Two psychiatrists independently assess **80** clinic referrals using the DSM-5-TR and assign the same primary diagnosis to **62** patients. Calculate the percentage inter-rater concordance (give your answer to 1 decimal place).",
      answer: { type: "number", value: 77.5, tolerance: 0.1, display: "77.5%" },
      traps: [
        {
          spec: { type: "number", value: 22.5, tolerance: 0.1 },
          feedback: "22.5% is the disagreement rate (18 / 80) — the question asks for concordance (agreements).",
        },
      ],
      solution: [
        "Divide agreed cases by total cases: {{62 / 80}} = 0.775.",
        "Multiply by 100 to convert to a percentage: **77.5%**.",
      ],
      hints: [
        "Inter-rater concordance % = (Agreed cases ÷ Total cases) × 100.",
        "Calculate {{(62 / 80) * 100}}.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "diagnosis-classification-bias",
      question:
        "Name the clinical labelling bias that occurs when healthcare staff mistakenly attribute a patient's genuine physical illness symptoms to their pre-existing psychiatric diagnosis.",
      answer: {
        type: "text",
        accept: ["diagnostic overshadowing"],
        display: "Diagnostic overshadowing",
      },
      solution: [
        "**Diagnostic overshadowing** occurs when a psychiatric label eclipses legitimate medical symptoms, delaying physical diagnosis and treatment.",
      ],
      hints: [
        "Think of a psychiatric diagnosis casting a 'shadow' over real physical complaints.",
        "It is a two-word clinical term starting with 'diagnostic'.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "aetiology-mental-health",
      question:
        "A twin study reports that monozygotic (MZ) twin concordance for Major Depressive Disorder is **41%**. What percentage of MZ twin pairs are **discordant**?",
      answer: { type: "number", value: 59, display: "59%" },
      solution: [
        "Discordance = {{100 - 41}} = **59%**.",
        "Because MZ twins share ~100% of segregating genes, 59% discordance proves environmental and cognitive factors are crucial.",
      ],
      hints: [
        "Concordant pairs plus discordant pairs total 100%.",
        "Subtract 41 from 100.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "stress-addiction-health-promotion",
      question:
        "Which specific part of the adrenal gland secretes **cortisol** at the end of the HPA stress axis?",
      answer: {
        type: "text",
        accept: ["adrenal cortex", "the adrenal cortex"],
        display: "Adrenal cortex",
      },
      traps: [
        {
          spec: { type: "text", accept: ["adrenal medulla", "medulla"] },
          feedback: "Careful — the adrenal medulla releases adrenaline in the fast SAM pathway, whereas cortisol comes from the outer adrenal cortex.",
        },
      ],
      solution: [
        "ACTH from the anterior pituitary stimulates the **adrenal cortex** to secrete cortisol.",
      ],
      hints: [
        "Distinguish the inner layer (SAM → adrenaline) from the outer layer (HPA → cortisol).",
        "Both words start with A and C ('adrenal ...').",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "treatments-interventions",
      question:
        "What is the abbreviation or full name of the presynaptic reuptake transporter protein blocked by SSRIs to prolong serotonin signalling in the synaptic cleft?",
      answer: {
        type: "text",
        accept: [
          "SERT",
          "serotonin transporter",
          "serotonin reuptake transporter",
          "5-HTT",
          "5-HT transporter",
        ],
        display: "SERT (serotonin transporter)",
      },
      solution: [
        "SSRIs bind to and inhibit the presynaptic **serotonin transporter (SERT / 5-HTT)**, slowing reuptake so serotonin remains active in the synaptic cleft longer.",
      ],
      hints: [
        "Its four-letter abbreviation combines 'SERotonin' and 'Transporter'.",
        "You may write either the 4-letter abbreviation or the two-word full name.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "treatments-interventions",
      question:
        "In a randomized controlled trial, **65%** of patients receiving CBT achieve remission compared with **40%** in a control group. Calculate the **Number Needed to Treat (NNT)** as a whole number.",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25 is the percentage-point difference (ARR = 0.25). Now take the reciprocal: NNT = 1 ÷ 0.25.",
        },
      ],
      solution: [
        "Convert percentages to proportions and subtract: ARR = {{0.65 - 0.40}} = 0.25.",
        "Calculate NNT = {{1 / 0.25}} = **4** patients.",
      ],
      hints: [
        "First find the Absolute Benefit Increase (ARR) as a decimal: 0.65 − 0.40.",
        "Then compute NNT = {{1 / \"ARR\"}}.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "stress-addiction-health-promotion",
      question:
        "Name the primary fast-acting hormone released by the adrenal medulla during the sympathetic **SAM** fight-or-flight response.",
      answer: {
        type: "text",
        accept: ["adrenaline", "epinephrine", "adrenalin"],
        display: "Adrenaline (epinephrine)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["cortisol"] },
          feedback: "Cortisol belongs to the slower HPA axis (adrenal cortex), not the fast SAM adrenal medulla response.",
        },
      ],
      solution: [
        "The adrenal medulla rapidly secretes **adrenaline (epinephrine)** (alongside noradrenaline) to accelerate heart rate and mobilize glucose.",
      ],
      hints: [
        "Think of the rapid 'rush' hormone triggered within seconds of a sudden scare.",
        "Either the British name or American clinical name is accepted.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "treatments-interventions",
      question:
        "Following 12 weeks of combined treatment, a client group's mean Hamilton Depression Rating Scale (HAM-D) score drops from **25** to **15**. Calculate the **percentage symptom improvement**.",
      answer: { type: "number", value: 40, display: "40%" },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "10 is the raw point reduction — divide by the baseline score (25) and multiply by 100.",
        },
      ],
      solution: [
        "Point drop = {{25 - 15}} = 10 points.",
        "Percentage improvement = {{(10 / 25) * 100}} = **40%**.",
      ],
      hints: [
        "Find the difference between baseline (25) and post-treatment (15).",
        "Divide that drop by the starting baseline (25), then multiply by 100.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "stress-addiction-health-promotion",
      question:
        "In Rosenstock's **Health Belief Model**, which construct captures a person's subjective judgment of how personally vulnerable they are to developing a particular illness?",
      answer: {
        type: "text",
        accept: ["perceived susceptibility", "susceptibility"],
        display: "Perceived susceptibility",
      },
      traps: [
        {
          spec: { type: "text", accept: ["perceived severity", "severity"] },
          feedback: "Perceived severity refers to how serious the consequences would be — personal vulnerability is perceived susceptibility.",
        },
      ],
      solution: [
        "**Perceived susceptibility** measures how likely an individual believes they personally are to contract or develop the condition.",
      ],
      hints: [
        "Together with perceived severity, this construct builds overall perceived threat.",
        "The second word means 'personal vulnerability or likelihood of getting it'.",
      ],
    },
    {
      id: "3-context-health-wellbeing-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Apply",
      guideRef: "aetiology-mental-health",
      marks: 4,
      question:
        "After her father loses his job, 16-year-old Sofia fails one physics test and tells her older sister, *'I am useless, school is impossible, and my future is ruined.'* Her sister listens warmly every evening and helps Sofia plan revision steps. Using **Beck's cognitive model** and **Brown & Harris's (1978)** framework, analyse one cognitive risk factor and one sociocultural protective factor in this vignette.",
      modelAnswer:
        "Cognitively, Sofia displays Beck's negative triad across all three domains — negative views of self ('useless'), world ('school is impossible'), and future ('ruined') — fuelled by overgeneralization from a single setback. Socioculturally, although financial strain acts as a provoking stressor, having a warm confiding relationship with her older sister serves as a powerful buffer against onset, mirroring Brown and Harris's Camberwell findings.",
      markScheme: [
        {
          point: "Identifies Beck's negative cognitive triad (self, world, future) linked explicitly to Sofia's quotes.",
          keywords: ["triad", "self", "world", "future"],
        },
        {
          point: "Identifies a specific cognitive distortion (e.g. overgeneralization / catastrophizing) arising from one test.",
          keywords: ["overgeneralization", "catastrophizing", "distortion", "all-or-nothing"],
        },
        {
          point: "Identifies the family job loss as a sociocultural provoking agent / stressor.",
          keywords: ["provoking", "stressor", "financial"],
        },
        {
          point: "Explains the sister's warm, confiding relationship as a protective buffer (Brown & Harris, 1978).",
          keywords: ["confiding", "buffer", "camberwell", "support"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies either a cognitive or sociocultural feature superficially with minimal link to Sofia's vignette.",
          indicators: ["Names Beck or social support without mapping specific evidence from the scenario."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately applies both Beck's negative triad/distortion and Brown & Harris's confiding protective buffer directly to the vignette.",
          indicators: ["Maps self/world/future quotes accurately.", "Explicitly contrasts the provoking stressor with the confiding protective factor."],
        },
      ],
      hints: [
        "Break Sofia's quote into three parts: what does she say about herself, her environment, and what lies ahead?",
        "Connect her sister's daily listening to Brown & Harris's key protective factor against a provoking agent.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 & P2 (15 Qs EACH)
  // ===========================================================================
  papers: [
    {
      id: "3-context-health-wellbeing-p1",
      title: "Practice Paper 1: Diagnosis, Bias & Biopsychosocial Aetiology",
      level: "SL",
      questions: [
        {
          id: "3-context-health-wellbeing-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "diagnosis-classification-bias",
          question:
            "In an ICD-11 clinical audit, two independent diagnosticians agree on the primary diagnosis for **108** out of **150** outpatient assessments. Calculate the raw percentage inter-rater concordance.",
          answer: { type: "number", value: 72, display: "72%" },
          solution: [
            "Raw concordance = {{(108 / 150) * 100}} = **72%**.",
          ],
          hints: [
            "Divide 108 by 150.",
            "Multiply the decimal by 100.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "diagnosis-classification-bias",
          question:
            "Name the two-word concept coined by **Arthur Kleinman (1977)** describing the error of imposing a Western psychiatric category onto a culture where it lacks local validity.",
          answer: {
            type: "text",
            accept: ["category fallacy"],
            display: "Category fallacy",
          },
          solution: [
            "**Category fallacy** warns clinicians against assuming an *etic* Western label carries universal validity across distinct *emic* cultural idioms of distress.",
          ],
          hints: [
            "The first word refers to a diagnostic group; the second word means a mistaken assumption.",
            "Think of Kleinman's critique of applying DSM depression directly to Chinese *shenjing shuairuo*.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "diagnosis-classification-bias",
          question:
            "State the one-word clinical term for the simultaneous occurrence of two or more distinct diagnosed disorders in the same person.",
          answer: {
            type: "text",
            accept: ["comorbidity", "co-morbidity"],
            display: "Comorbidity",
          },
          solution: [
            "**Comorbidity** (e.g. co-occurring Major Depressive Disorder and Generalized Anxiety Disorder) complicates differential diagnosis and treatment planning.",
          ],
          hints: [
            "Starts with the prefix 'co-' meaning 'together'.",
            "Frequently paired with 'symptom overlap' when evaluating DSM-5-TR validity.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q04",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "diagnosis-classification-bias",
          question:
            "In a structured-interview trial, observed inter-rater agreement is {{P_o = 0.76}} and chance agreement is {{P_e = 0.40}}. Calculate **Cohen's kappa (κ)** to 2 decimal places using {{kappa = (P_o - P_e) / (1 - P_e)}}.",
          answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60" },
          traps: [
            {
              spec: { type: "number", value: 0.36, tolerance: 0.01 },
              feedback: "0.36 is just the numerator (P_o − P_e) — remember to divide by (1 − P_e) = 0.60.",
            },
          ],
          solution: [
            "Numerator: {{0.76 - 0.40}} = 0.36.",
            "Denominator: {{1 - 0.40}} = 0.60.",
            "Cohen's κ = {{0.36 / 0.60}} = **0.60** (substantial chance-corrected agreement).",
          ],
          hints: [
            "Subtract chance agreement (0.40) from observed agreement (0.76).",
            "Divide that result by {{1 - 0.40}}.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "diagnosis-classification-bias",
          marks: 3,
          question:
            "Distinguish between **inter-rater reliability** and **predictive validity** in psychiatric diagnosis, and state how the two measurement properties relate to one another.",
          modelAnswer:
            "Inter-rater reliability measures the degree of consistency or agreement when two or more independent clinicians assess the same individual using the same manual (often quantified via Cohen's kappa). Predictive validity measures whether an assigned diagnosis accurately forecasts the patient's future prognosis and likely response to specific treatments such as CBT or SSRIs. Crucially, reliability is necessary but not sufficient for validity: clinicians may reliably agree on a culturally flawed label that fails to forecast outcomes accurately.",
          markScheme: [
            {
              point: "Defines inter-rater reliability as consistency/agreement across independent clinicians assessing the same patient.",
              keywords: ["consistency", "agreement", "independent clinicians", "kappa"],
            },
            {
              point: "Defines predictive validity as accurately forecasting prognosis or treatment response.",
              keywords: ["prognosis", "treatment response", "forecast", "outcomes"],
            },
            {
              point: "States the asymmetrical relationship: reliability is necessary for validity, but high reliability does not guarantee validity.",
              keywords: ["necessary", "not sufficient", "does not guarantee"],
            },
          ],
          hints: [
            "Keep agreement (consistency across clinicians) strictly separate from clinical usefulness/forecasting.",
            "End with the core rule from the 2×2 target matrix: can a tool be reliable without being valid?",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "diagnosis-classification-bias",
          marks: 4,
          question:
            "After an adult patient is admitted to an inpatient ward with a provisional label of psychotic disorder, ward staff document his calm requests to check his medication chart as *'hostile suspiciousness'*. Applying **Rosenhan (1973)**, explain the cognitive mechanism at work and provide **two** modern methodological or temporal critiques of generalizing Rosenhan's original findings to contemporary clinics.",
          modelAnswer:
            "The staff's interpretation demonstrates confirmation bias triggered by a sticky diagnostic schema: once a label is attached, ambiguous or ordinary behaviour is reframed to fit the category, echoing Rosenhan's pseudopatients whose field notes were logged as pathological 'writing behaviour'. However, two critical caveats limit generalization today: first, Rosenhan's study suffered low temporal validity because clinicians in 1973 relied on vague DSM-II criteria rather than modern DSM-5-TR or ICD-11 structured diagnostic interviews. Second, archival investigation by Cahalan (2019) uncovered discrepancies in Rosenhan's hospital records, alongside the inherent deception and artificiality of fabricating hallucinations.",
          markScheme: [
            {
              point: "Identifies confirmation bias / sticky diagnostic schema framing ordinary behaviour as pathology.",
              keywords: ["confirmation bias", "sticky", "schema"],
            },
            {
              point: "Connects accurately to Rosenhan's (1973) pseudopatient evidence (e.g. note-taking recorded as writing behaviour / 'in remission').",
              keywords: ["pseudopatient", "writing behaviour", "in remission"],
            },
            {
              point: "Critique 1: Low temporal validity — DSM-II (1973) lacked operationalized criteria compared with DSM-5-TR / ICD-11 structured interviews.",
              keywords: ["dsm-ii", "temporal validity", "structured", "dsm-5-tr"],
            },
            {
              point: "Critique 2: Archival/methodological critique (Cahalan, 2019 record discrepancies, deception, or ecological artificiality of fabricated symptoms).",
              keywords: ["cahalan", "deception", "discrepancies", "archival"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Names confirmation bias or summarizes Rosenhan descriptively without well-developed modern critiques.",
              indicators: ["Mentions Rosenhan's pseudopatients but omits DSM-II temporal shift and archival/methodological limits."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Links confirmation bias cleanly to the vignette and evaluates Rosenhan with two accurate contemporary critiques.",
              indicators: ["Contrasts DSM-II against DSM-5-TR/ICD-11 structured criteria.", "Integrates Cahalan (2019) or ethical/ecological deception critique."],
            },
          ],
          hints: [
            "Name the specific bias whereby staff bend ordinary behaviour to match an existing label.",
            "Remember two distinct critiques: what changed in diagnostic manuals since 1973, and what did Cahalan (2019) uncover?",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q07",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "aetiology-mental-health",
          question:
            "In a twin study of Generalized Anxiety Disorder, monozygotic (MZ) concordance is **38%** and dizygotic (DZ) concordance is **16%**. By how many **percentage points** does MZ concordance exceed DZ concordance?",
          answer: { type: "number", value: 22, display: "22" },
          solution: [
            "Subtract DZ concordance from MZ concordance: {{38 - 16}} = **22 percentage points**.",
            "A substantial MZ > DZ gap supports heritable vulnerability, while MZ < 100% confirms environmental interaction.",
          ],
          hints: [
            "Find the difference between the MZ percentage and the DZ percentage.",
            "Compute {{38 - 16}}.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "aetiology-mental-health",
          question:
            "State the abbreviation or full name of the neurotrophic growth protein (stimulated downstream by SSRIs and aerobic exercise) that promotes hippocampal neuroplasticity and neuron survival.",
          answer: {
            type: "text",
            accept: ["BDNF", "brain-derived neurotrophic factor", "brain derived neurotrophic factor"],
            display: "BDNF (brain-derived neurotrophic factor)",
          },
          solution: [
            "**BDNF (brain-derived neurotrophic factor)** supports synaptic plasticity and hippocampal neurogenesis; chronic cortisol suppresses BDNF, whereas SSRIs and aerobic exercise upregulate it.",
          ],
          hints: [
            "Four-letter abbreviation starting with 'B' for 'brain-derived'.",
            "Often cited alongside Moncrieff (2022) to explain modern neuroplasticity models of depression.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "aetiology-mental-health",
          question:
            "Under Abramson et al.'s (1978) learned-helplessness model, a student who fails one maths quiz and concludes *'I fail at absolutely everything in school, sport, and friendship'* is displaying which specific attributional dimension (choose from internal, stable, or global)?",
          answer: {
            type: "text",
            accept: ["global", "global attribution"],
            display: "Global",
          },
          traps: [
            {
              spec: { type: "text", accept: ["stable", "stable attribution"] },
              feedback: "Stable refers to permanence across time ('forever'); spreading one setback across every life domain is global.",
            },
          ],
          solution: [
            "Extending a single narrow setback across every unrelated domain (school, sport, friendship) reflects a **global** attribution.",
          ],
          hints: [
            "Notice the scope: the student generalizes across multiple unrelated life domains rather than focusing on permanence over time.",
            "Internal = self-blame; Stable = lasting forever; Global = affecting everything.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "aetiology-mental-health",
          question:
            "In **Alloy et al.'s (1999)** 2.5-year prospective study, **17%** of initially non-depressed students with high cognitive vulnerability developed a first episode of MDD compared with **1%** of low-risk students. How many times greater was the first-onset MDD rate in the high-risk group?",
          answer: { type: "number", value: 17, display: "17 times" },
          solution: [
            "Risk ratio = {{17 / 1}} = **17** times greater.",
            "Measuring cognitive style *before* illness onset helps address bidirectional causality.",
          ],
          hints: [
            "Divide the high-risk percentage by the low-risk percentage.",
            "Calculate {{17 / 1}}.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "aetiology-mental-health",
          marks: 4,
          question:
            "Evaluate **Caspi et al.'s (2003)** serotonin-transporter gene–environment study in light of contemporary replication evidence, referring explicitly to the Core Concepts of **Causality** and **Measurement**.",
          modelAnswer:
            "Caspi et al. (2003) tracked 847 Dunedin cohort participants longitudinally and reported that carriers of the short 5-HTTLPR allele showed elevated depression risk only after experiencing four or more severe stressors, offering an influential diathesis-stress model of non-deterministic causality. However, massive modern meta-analyses and genome-wide replications (Culverhouse et al., 2018; Border et al., 2019, N > 62,000) found no reliable single candidate-gene interaction. From a Measurement perspective, early candidate-gene studies were statistically underpowered and vulnerable to false positives; from a Causality perspective, depression is now understood as polygenic — shaped by hundreds of small-effect variants interacting with environment rather than one 'depression gene'.",
          markScheme: [
            {
              point: "Accurately states Caspi et al.'s (2003) longitudinal Dunedin finding (short 5-HTTLPR allele × 4+ life stressors).",
              keywords: ["dunedin", "5-httlpr", "short", "diathesis"],
            },
            {
              point: "Cites large modern replication failure (Culverhouse et al., 2018 or Border et al., 2019).",
              keywords: ["border", "culverhouse", "failed to replicate", "no reliable"],
            },
            {
              point: "Applies Measurement: explains underpowered candidate-gene samples / false positives / GWAS standards.",
              keywords: ["underpowered", "false positives", "gwas", "genome-wide"],
            },
            {
              point: "Applies Causality: concludes genetic risk is polygenic rather than a single deterministic gene.",
              keywords: ["polygenic", "small-effect", "non-deterministic"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes Caspi et al. accurately but lacks replication nuance or clear links to Causality and Measurement.",
              indicators: ["Treats 5-HTTLPR uncritically as proven fact."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balances Caspi's diathesis–stress milestone with modern GWAS/meta-analytic null replications, explicitly applying Causality and Measurement.",
              indicators: ["Distinguishes single candidate-gene findings from polygenic risk.", "Cites Border (2019) or Culverhouse (2018)."],
            },
          ],
          hints: [
            "Start with what Caspi et al. (2003) actually found in the Dunedin cohort (gene × stressor threshold).",
            "Then bring in modern mega-replications (Border, 2019 / Culverhouse, 2018) and use the term **polygenic**.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "aetiology-mental-health",
          marks: 4,
          question:
            "A 29-year-old mother raising four young children alone without paid employment receives an unexpected rent-eviction notice and develops severe depressive symptoms. Apply **Brown & Harris's (1978)** sociocultural model to her case and identify **one** methodological limitation of that original research.",
          modelAnswer:
            "In Brown and Harris's (1978) Camberwell framework, the unexpected eviction notice functions as a severe acute provoking agent. Her risk of crossing into clinical depression is amplified by multiple background vulnerability factors: caring for more than three children under age 14, lacking paid employment outside the home, and lacking a close confiding partner who would otherwise provide a protective buffer. A key methodological limitation is restricted generalizability and recall risk: the original sample examined only women in 1970s South London (limiting cross-cultural and temporal transferability) and relied on retrospective life-event interviews where depressed mood can bias memory.",
          markScheme: [
            {
              point: "Classifies the eviction notice as an acute provoking agent.",
              keywords: ["provoking agent", "acute"],
            },
            {
              point: "Maps at least two specific Brown & Harris vulnerability factors directly from the vignette (3+ children, unemployed, no confiding partner).",
              keywords: ["vulnerability factors", "confiding", "children", "employment"],
            },
            {
              point: "Identifies a valid methodological limitation (1970s London female-only sample / low temporal or cultural generalizability, or retrospective recall bias).",
              keywords: ["1970s", "london", "generalizability", "retrospective"],
            },
            {
              point: "Explains clearly why that limitation affects conclusions (e.g. gender/cultural transferability or depressed mood distorting memory).",
              keywords: ["transferability", "recall", "distort", "memory"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists vulnerability factors generically without distinguishing provoking agent or evaluating the original study.",
              indicators: ["Mentions poverty or stress vaguely without Brown & Harris terminology."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Maps provoking agent and multiple vulnerability factors precisely to the case and explains a clear methodological limitation.",
              indicators: ["Uses 'provoking agent' and 'vulnerability factors' accurately.", "Evaluates temporal/cultural generalizability or retrospective recall."],
            },
          ],
          hints: [
            "Separate the sudden acute trigger (provoking agent) from the ongoing background vulnerability factors (C-M-3-U).",
            "For the limitation, think about *who* was sampled in Camberwell (1978) and *how* life events were recalled.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "diagnosis-classification-bias",
          marks: 6,
          question:
            "**Paper 1 Section B Vignette:** An international university health clinic serves students from 60 nationalities. Counsellors using a quick Western mood checklist flag European and North American students for depression at twice the rate of East Asian students, even though East Asian students visit the clinic frequently for chronic headaches, insomnia, and stomach fatigue. Analyse this disparity using **Bias** and **Perspective**, citing relevant research and proposing one practical reform.",
          modelAnswer:
            "This clinic disparity illustrates cultural Bias in Measurement: relying on a Western mood checklist imposes an etic assumption that depression always presents primarily through explicit verbal sadness and guilt (Kleinman's category fallacy). Research by Ryder et al. (2008) comparing Changsha and Toronto outpatients — alongside Kleinman's (1982) study of shenjing shuairuo — demonstrated that East Asian patients frequently emphasize somatic symptoms (insomnia, fatigue, headaches) spontaneously due to cultural norms favouring emotional restraint and externally oriented thinking, whereas Western patients foreground affective complaints. Consequently, the brief checklist systematically under-detects East Asian students' distress (low diagnostic validity). Adopting an emic Perspective resolves this blind spot: as a practical reform, clinicians should integrate the DSM-5-TR Cultural Formulation Interview (CFI) to explore local idioms of distress, social pressures, and preferred supports before assigning or ruling out a diagnosis.",
          markScheme: [
            {
              point: "Applies Bias: explains Western etic checklist bias / category fallacy causing systematic under-detection.",
              keywords: ["etic", "category fallacy", "under-detect"],
            },
            {
              point: "Cites Ryder et al. (2008) accurately (Changsha vs Toronto somatic vs affective emphasis).",
              keywords: ["ryder", "changsha", "toronto", "affective"],
            },
            {
              point: "Cites Kleinman (1982) / cultural concepts of distress (shenjing shuairuo) accurately.",
              keywords: ["kleinman", "shenjing shuairuo", "idioms"],
            },
            {
              point: "Explains the sociocultural mechanism (cultural display norms / emotional restraint shaping somatic reporting).",
              keywords: ["somatic", "emotional restraint", "norms"],
            },
            {
              point: "Connects to Measurement validity (the checklist shows poor construct/diagnostic validity across groups).",
              keywords: ["diagnostic validity", "construct", "valid"],
            },
            {
              point: "Proposes a concrete, justified reform grounded in Perspective (DSM-5-TR Cultural Formulation Interview / emic assessment).",
              keywords: ["cultural formulation interview", "cfi", "emic"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Notes cultural differences generally with minimal psychological terminology or evidence.",
              indicators: ["Mentions culture vaguely without somatic/affective distinction or empirical research."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains somatic vs affective reporting with relevant research (Kleinman or Ryder) and identifies cultural bias.",
              indicators: ["Links vignette symptoms to cultural norms.", "Partial integration of Core Concepts or reform."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Thoroughly integrates Bias, Perspective, and Measurement validity with accurate empirical evidence (Ryder/Kleinman) and a targeted reform (DSM-5-TR CFI).",
              indicators: ["Distinguishes etic imposition from emic understanding.", "Recommends the Cultural Formulation Interview explicitly."],
            },
          ],
          hints: [
            "Look at *which* symptoms East Asian students are reporting (physical/somatic) versus what the Western checklist screens for (affective mood).",
            "Bring in both Kleinman (1982) and Ryder et al. (2008).",
            "For the practical reform, name the 16-question tool built into DSM-5-TR specifically for cross-cultural assessment.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "aetiology-mental-health",
          marks: 6,
          question:
            "Explain how **biological** and **cognitive** factors interact in the development and maintenance of **either** depression **or** panic/anxiety disorders, explicitly addressing the Core Concept of **Causality**.",
          modelAnswer:
            "In Major Depressive Disorder, biological and cognitive factors operate through probabilistic, bidirectional causality rather than linear single-cause determinism. Biologically, polygenic vulnerability (Kendler et al., 2006, ~38% heritability) and chronic HPA-axis cortisol hypersecretion suppress hippocampal BDNF neuroplasticity and heighten amygdala threat reactivity. Cognitively, this neurobiological vulnerability lowers the threshold for activating latent depressogenic schemas (Beck's negative triad of self, world, and future) and internal-stable-global attributions. Crucially, causation runs in both directions: prospective longitudinal data (Alloy et al., 1999) showed negative cognitive style predicts first-onset depression (17% vs 1%), yet chronic cognitive rumination also sustains HPA cortisol output, creating a self-reinforcing biopsychosocial feedback loop. (Equivalently, in panic disorder, heightened sympathetic arousal and amygdala alarm interact with Clark's catastrophic misinterpretation of benign heart-rate surges to escalate panic and maintain avoidance via negative reinforcement.)",
          markScheme: [
            {
              point: "Explains a valid biological mechanism accurately (polygenic risk / Kendler, HPA cortisol / BDNF, or amygdala/sympathetic alarm).",
              keywords: ["polygenic", "cortisol", "bdnf", "amygdala", "sympathetic"],
            },
            {
              point: "Explains a valid cognitive mechanism accurately (Beck's triad / schemas / attributions, or Clark's catastrophic misinterpretation / threat bias).",
              keywords: ["triad", "schemas", "catastrophic", "attributions"],
            },
            {
              point: "Demonstrates explicit interaction between the two levels (e.g. biology lowers threshold for schemas, or rumination/catastrophizing fuels cortisol/adrenaline).",
              keywords: ["threshold", "feedback loop", "self-reinforcing", "escalate"],
            },
            {
              point: "Integrates empirical support (Kendler, Alloy et al., Moncrieff, or Clark).",
              keywords: ["kendler", "alloy", "moncrieff", "clark"],
            },
            {
              point: "Addresses Causality as probabilistic / non-deterministic (diathesis–stress).",
              keywords: ["probabilistic", "non-deterministic", "diathesis"],
            },
            {
              point: "Addresses bidirectional causality (distinguishing precursors from consequences / mutual maintenance).",
              keywords: ["bidirectional", "both directions", "prospective"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes biological and cognitive factors separately in silos with little interaction or causal analysis.",
              indicators: ["Mentions serotonin and negative thoughts without explaining how they interact."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains biological and cognitive factors with supporting evidence and makes clear links between them.",
              indicators: ["Uses accurate terminology (HPA/BDNF or Beck/Clark) and begins addressing interaction."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Integrates accurate contemporary biological and cognitive mechanisms into an explicit bidirectional, probabilistic Causality model with well-chosen empirical support.",
              indicators: ["Explicitly explains feedback loops.", "Addresses bidirectional and probabilistic causality clearly."],
            },
          ],
          hints: [
            "Avoid writing two disconnected paragraphs — show how brain/hormone reactivity and cognitive appraisal feed into each other.",
            "Include contemporary evidence (Kendler, Alloy, or Clark) and explicitly use the concepts of **probabilistic** and **bidirectional causality**.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "diagnosis-classification-bias",
          marks: 9,
          question:
            "**Paper 1 Section C Extended Response:** Evaluate the usefulness of psychiatric classification systems (**DSM-5-TR** and **ICD-11**) in Health and Well-being, with reference to **Bias** and **Measurement**.",
          modelAnswer:
            "Psychiatric classification systems such as DSM-5-TR and ICD-11 serve vital clinical functions: standardized operational criteria facilitate communication across professionals, unlock insurance-funded care, guide evidence-based treatment matching, and enable global epidemiological tracking (especially via WHO's ICD-11). However, evaluating their usefulness through Measurement and Bias exposes persistent structural limitations.\n\nFrom a Measurement perspective, psychiatric categories lack objective biomarkers, making inter-rater reliability and validity vulnerable to clinical noise. Although structured interviews improved agreement compared with DSM-II, DSM-5 field trials still recorded low chance-corrected reliability (kappa = 0.28) for Major Depressive Disorder, largely because symptom overlap (shared insomnia, fatigue, concentration loss) and high comorbidity (>50% overlap between MDD and anxiety disorders) blur construct boundaries and weaken predictive validity.\n\nFrom a Bias perspective, diagnostic labels act as powerful schemas. Rosenhan's (1973) pseudopatient study highlighted confirmation bias and enduring stigma ('in remission'), while contemporary evidence confirms diagnostic overshadowing in medical care. Yet evaluating Rosenhan requires balance: temporal validity is limited since DSM-5-TR uses stricter criteria, and Cahalan (2019) questioned archival consistency in Rosenhan's records. Equally critical is cultural bias: Kleinman (1982) and Ryder et al. (2008) showed that imposing Western etic mood categories creates category fallacy when East Asian clients present somatically (e.g. shenjing shuairuo). Encouragingly, ICD-11 dimensional severity ratings and the DSM-5-TR Cultural Formulation Interview (CFI) represent meaningful reforms.\n\nIn conclusion, DSM-5-TR and ICD-11 remain indispensable pragmatic tools for organizing health systems, but they work safely only when treated as provisional working hypotheses paired with cultural formulation and dimensional biopsychosocial assessment rather than rigid biological truths.",
          markScheme: [
            {
              point: "Explains genuine clinical utility/strengths of DSM-5-TR & ICD-11 (communication, treatment access, global public-health tracking).",
              keywords: ["communication", "treatment", "epidemiological", "standardized"],
            },
            {
              point: "Evaluates Measurement: highlights absence of objective biomarkers and uneven inter-rater reliability (e.g. DSM-5 MDD κ = 0.28).",
              keywords: ["biomarkers", "inter-rater", "kappa", "0.28"],
            },
            {
              point: "Explains symptom overlap and comorbidity as threats to construct and predictive validity.",
              keywords: ["symptom overlap", "comorbidity", "construct", "predictive validity"],
            },
            {
              point: "Applies Bias via labelling/confirmation bias (Rosenhan, 1973) and contemporary diagnostic overshadowing / stigma.",
              keywords: ["rosenhan", "confirmation bias", "overshadowing", "stigma"],
            },
            {
              point: "Provides nuanced counter-evaluation of Rosenhan (DSM-II temporal validity and/or Cahalan, 2019 archival critique).",
              keywords: ["dsm-ii", "temporal validity", "cahalan"],
            },
            {
              point: "Applies Cultural Bias / Perspective: category fallacy and somatic vs affective evidence (Kleinman, 1982; Ryder et al., 2008).",
              keywords: ["category fallacy", "kleinman", "ryder", "somatic"],
            },
            {
              point: "Evaluates contemporary reforms reducing Bias and improving Measurement (DSM-5-TR Cultural Formulation Interview, ICD-11 dimensional severity).",
              keywords: ["cultural formulation interview", "cfi", "dimensional"],
            },
            {
              point: "Weighs strengths against limitations systematically (balanced evaluative tone throughout).",
              keywords: ["however", "balance", "pragmatic"],
            },
            {
              point: "Reaches a clear, reasoned conclusion framing manuals as provisional biopsychosocial tools rather than absolute biological entities.",
              keywords: ["provisional", "biopsychosocial", "conclusion"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–3",
              marks: [1, 3],
              descriptor: "Descriptive overview of DSM/ICD or Rosenhan with limited evaluation and minimal explicit engagement with Measurement and Bias.",
              indicators: ["Lists features of manuals without evaluating reliability, validity, or cultural bias."],
            },
            {
              band: "4–6",
              marks: [4, 6],
              descriptor: "Relevant knowledge of diagnostic systems and supporting studies (e.g. Rosenhan, Kleinman) with clear strengths/limitations, though evaluation of contemporary critiques or reforms is uneven.",
              indicators: ["Covers reliability/validity and labelling bias, with partial synthesis."],
            },
            {
              band: "7–9",
              marks: [7, 9],
              descriptor: "Focused, balanced, critically nuanced evaluation weaving Measurement (reliability, validity, overlap, comorbidity) and Bias (labelling, Rosenhan critiques, cultural category fallacy, CFI/dimensional reforms) into a coherent conclusion.",
              indicators: ["Balances classic and contemporary evidence (DSM-5 field trials, Cahalan, Ryder, CFI).", "Maintains sustained evaluative focus rather than narrative summary."],
            },
          ],
          hints: [
            "Open with *why* manuals are useful before critiquing them — 'Evaluate' always weighs strengths AND limitations.",
            "Organize around **Measurement** (biomarkers, κ, overlap, comorbidity) and **Bias** (Rosenhan + Cahalan/DSM-II nuance, diagnostic overshadowing, cultural category fallacy).",
            "Conclude with modern reforms (DSM-5-TR CFI, ICD-11 dimensional ratings) and a nuanced final judgment.",
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2: Treatments, Chronic Stress, Addiction & Health Promotion
    // =========================================================================
    {
      id: "3-context-health-wellbeing-p2",
      title: "Practice Paper 2: Treatments, Stress Pathways, Addiction & Health Promotion",
      level: "SL",
      questions: [
        {
          id: "3-context-health-wellbeing-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "treatments-interventions",
          question:
            "In a 12-month follow-up modelled on **Hollon et al. (2005)**, **30%** of patients who completed CBT relapsed compared with **75%** of patients who discontinued SSRI medication. Calculate the absolute relapse reduction (in percentage points) achieved by prior CBT.",
          answer: { type: "number", value: 45, display: "45" },
          solution: [
            "Absolute reduction = {{75 - 30}} = **45 percentage points**.",
            "CBT's durable cognitive and behavioural skills keep protecting clients after active treatment ends.",
          ],
          hints: [
            "Subtract the CBT relapse rate from the SSRI-withdrawal relapse rate.",
            "Calculate {{75 - 30}}.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "treatments-interventions",
          question:
            "In a community mental-health trial modelled on the Friendship Bench, **65%** of participants receiving lay problem-solving therapy recover compared with **15%** in usual care. Calculate the **Number Needed to Treat (NNT)** as a whole number.",
          answer: { type: "number", value: 2, display: "2" },
          traps: [
            {
              spec: { type: "number", value: 50 },
              feedback: "50% (0.50) is the absolute benefit increase (ARR). Now compute NNT = 1 ÷ 0.50.",
            },
          ],
          solution: [
            "ARR = {{0.65 - 0.15}} = 0.50.",
            "NNT = {{1 / 0.50}} = **2** (treating just 2 patients yields 1 extra recovery over usual care).",
          ],
          hints: [
            "Convert 65% and 15% into decimals and find their difference (ARR).",
            "Divide 1 by ARR.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "treatments-interventions",
          question:
            "Name the two-word CBT component in which a withdrawn depressed client systematically schedules small, achievable mastery and pleasure activities to break behavioural inertia.",
          answer: {
            type: "text",
            accept: ["behavioural activation", "behavioral activation"],
            display: "Behavioural activation",
          },
          solution: [
            "**Behavioural activation** counters depressive withdrawal by rebuilding contact with natural positive reinforcement alongside cognitive restructuring.",
          ],
          hints: [
            "Notice it targets *action/activity scheduling* rather than verbal thought records.",
            "Two words: 'behavioural ...' (either UK or US spelling accepted).",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q04",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "treatments-interventions",
          question:
            "Name the two-word research bias exposed by **Kirsch et al. (2008)** when clinical trials showing positive antidepressant results are printed in journals while null trials remain hidden in the 'file drawer'.",
          answer: {
            type: "text",
            accept: ["publication bias"],
            display: "Publication bias",
          },
          solution: [
            "**Publication bias** (the file-drawer effect) inflates apparent drug efficacy in published meta-analyses unless unpublished trial registries are included.",
          ],
          hints: [
            "It describes selective reporting of which studies get *published*.",
            "Two words ending in 'bias'.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "treatments-interventions",
          marks: 4,
          question:
            "Compare and contrast the conclusions of **Kirsch et al. (2008)** and **Cipriani et al. (2018)** regarding antidepressant efficacy, linking your answer to **Measurement** and **Bias**.",
          modelAnswer:
            "Both meta-analyses integrated unpublished alongside published randomized controlled trials to counteract pharmaceutical publication bias (the file-drawer problem). However, they diverged in clinical emphasis: Kirsch et al. (2008) examined FDA trial datasets and concluded that drug-placebo differences fell below clinical significance thresholds for mild-to-moderate depression, reaching meaningful impact primarily in very severe cases. By contrast, Cipriani et al. (2018) analysed 522 double-blind RCTs (N = 116,477) and concluded that all 21 tested antidepressants outperformed placebo in acute adult MDD with small-to-moderate effect sizes, while varying widely in tolerability. Together they highlight why Measurement must evaluate severity, effect size, and clinical rather than purely statistical significance.",
          markScheme: [
            {
              point: "Identifies shared methodological strength: both included unpublished trial data to reduce publication bias.",
              keywords: ["unpublished", "publication bias", "file-drawer"],
            },
            {
              point: "Accurately summarizes Kirsch et al. (2008): below clinical significance in mild/moderate MDD, meaningful mainly in very severe cases.",
              keywords: ["fda", "clinical significance", "mild", "severe"],
            },
            {
              point: "Accurately summarizes Cipriani et al. (2018): 522 RCTs showing all 21 drugs beat placebo overall with modest effect sizes and differing tolerability.",
              keywords: ["522", "21", "tolerability", "effect sizes"],
            },
            {
              point: "Links explicitly to Measurement nuance (clinical vs statistical significance / matching severity).",
              keywords: ["statistical", "severity", "modest", "small-to-moderate"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Summarizes one study accurately or oversimplifies Kirsch as proving drugs are useless.",
              indicators: ["Omits shared control of publication bias or confuses the two findings."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly identifies both similarity (unpublished data / Bias) and contrast (severity threshold vs 522-RCT acute benefit) with accurate Measurement analysis.",
              indicators: ["Avoids binary oversimplification.", "Distinguishes statistical from clinical significance."],
            },
          ],
          hints: [
            "Start with a **similarity**: how did *both* teams guard against pharmaceutical publication bias?",
            "Then **contrast** Kirsch's severity threshold against Cipriani's 522-RCT network finding.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "treatments-interventions",
          marks: 4,
          question:
            "A 34-year-old teacher experiencing severe, chronic Major Depressive Disorder struggles with extreme exhaustion, insomnia, and rigid self-blaming thoughts that make completing therapy homework overwhelming. Justify an **eclectic/combined** treatment plan using empirical evidence and the Core Concept of **Change**.",
          modelAnswer:
            "An eclectic plan combining an SSRI with Cognitive Behavioural Therapy (CBT) is strongly justified by Cuijpers et al.'s (2014) meta-analysis showing that combined care outperforms either pharmacotherapy or psychotherapy alone in severe and chronic MDD. Biologically, initiating an SSRI stabilizes sleep, energy, and neurovegetative inertia via SERT inhibition and downstream BDNF plasticity — enabling short-term symptom Change so the client has enough cognitive stamina to engage in therapy. Once acute distress softens, CBT cognitive restructuring and behavioural activation target rigid self-blaming schemas directly, securing durable long-term Change and lowering post-discontinuation relapse (as demonstrated by Hollon et al., 2005 and DeRubeis et al., 2005).",
          markScheme: [
            {
              point: "Cites Cuijpers et al. (2014) showing combined pharmacotherapy + CBT outperforms monotherapy in severe/chronic depression.",
              keywords: ["cuijpers", "outperforms", "monotherapy"],
            },
            {
              point: "Explains the biological role of SSRIs in easing severe inertia/sleep so the client can access therapy.",
              keywords: ["ssri", "sert", "bdnf", "inertia", "stamina"],
            },
            {
              point: "Explains CBT's role (cognitive restructuring + behavioural activation) in addressing rigid self-blaming schemas.",
              keywords: ["cognitive restructuring", "behavioural activation", "schemas"],
            },
            {
              point: "Links explicitly to short-term vs enduring long-term Change / lower relapse (Hollon / DeRubeis).",
              keywords: ["durable", "relapse", "hollon", "derubeis"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that drugs plus therapy work better together without linking to severe inertia or supporting studies.",
              indicators: ["Generic description of SSRI and CBT without strategic sequencing."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Justifies sequenced SSRI + CBT directly for severe chronic depression with Cuijpers/Hollon evidence and short- vs long-term Change.",
              indicators: ["Explains *why* SSRIs unlock CBT engagement here.", "Connects CBT skills to relapse prevention."],
            },
          ],
          hints: [
            "Why would CBT alone struggle right now given her exhaustion and sleep deprivation?",
            "Cite **Cuijpers et al. (2014)** for combined superiority and **Hollon / DeRubeis** for CBT's relapse protection.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q07",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "stress-addiction-health-promotion",
          question:
            "State the abbreviation or full name of the hormone secreted by the **anterior pituitary gland** during the HPA stress cascade that stimulates the adrenal cortex.",
          answer: {
            type: "text",
            accept: ["ACTH", "adrenocorticotropic hormone", "adrenocorticotrophic hormone"],
            display: "ACTH (adrenocorticotropic hormone)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["CRH", "corticotropin-releasing hormone"] },
              feedback: "CRH is released earlier by the hypothalamus — the anterior pituitary releases ACTH.",
            },
          ],
          solution: [
            "Hypothalamus (CRH) → Anterior pituitary (**ACTH**) → Adrenal cortex (cortisol).",
          ],
          hints: [
            "Follow the HPA chain: Hypothalamus releases CRH → Pituitary releases ___ → Adrenal cortex releases cortisol.",
            "Four-letter abbreviation starting with 'A'.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stress-addiction-health-promotion",
          question:
            "In a chronic stress wound-healing study, stressed caregivers' wounds take a mean of **50 days** to heal compared with **40 days** in matched controls. Calculate the **percentage increase** in healing time for the stressed group.",
          answer: { type: "number", value: 25, display: "25%" },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "Careful — divide the 10-day increase by the control baseline (40 days), not by 50 days.",
            },
          ],
          solution: [
            "Extra healing days = {{50 - 40}} = 10 days.",
            "Percentage increase = {{(10 / 40) * 100}} = **25%**.",
          ],
          hints: [
            "Find the difference: 50 − 40.",
            "Divide by the baseline control mean (40) and multiply by 100.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q09",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "stress-addiction-health-promotion",
          question:
            "Name the stress-response model proposed by **Taylor et al. (2000)** that highlights oxytocin-modulated caregiving and social affiliation as a counterweight to androcentric fight-or-flight bias.",
          answer: {
            type: "text",
            accept: ["tend-and-befriend", "tend and befriend", "tend-and-befriend model", "tend and befriend response"],
            display: "Tend-and-befriend",
          },
          solution: [
            "**Tend-and-befriend** highlights protective nurturing ('tending') and social coalition-building ('befriending') under stress.",
          ],
          hints: [
            "Two verbs joined by 'and' — one means caring/nurturing, the other means forming social bonds.",
            "Directly corrects gender sampling bias in classic fight-or-flight studies.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q10",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "stress-addiction-health-promotion",
          question:
            "In **Lazarus & Folkman's (1984)** Transactional Model of Stress, what term refers to the stage where a person assesses whether their available coping skills and social resources can meet a perceived threat?",
          answer: {
            type: "text",
            accept: ["secondary appraisal"],
            display: "Secondary appraisal",
          },
          traps: [
            {
              spec: { type: "text", accept: ["primary appraisal"] },
              feedback: "Primary appraisal judges whether the event itself is a threat, harm, or challenge — judging coping resources is secondary appraisal.",
            },
          ],
          solution: [
            "**Secondary appraisal** evaluates *'What can I do about this? Do I have enough resources?'*; stress surges when primary threat exceeds secondary coping capacity.",
          ],
          hints: [
            "The first stage evaluates the event itself; this second stage evaluates your coping capacity.",
            "Two words ending in 'appraisal'.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "stress-addiction-health-promotion",
          question:
            "In the mesolimbic dopamine reward pathway central to substance and behavioural addiction, dopamine neurons project from the ventral tegmental area (VTA) primarily to which forebrain reward structure?",
          answer: {
            type: "text",
            accept: ["nucleus accumbens", "NAc", "ventral striatum"],
            display: "Nucleus accumbens",
          },
          solution: [
            "Dopamine projections from the **VTA** to the **nucleus accumbens** (part of the ventral striatum) drive incentive salience ('wanting') in addiction.",
          ],
          hints: [
            "Two-word Latin anatomical name in the ventral striatum (abbreviation NAc).",
            "Central to Berridge & Robinson's Incentive Sensitization Theory.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "stress-addiction-health-promotion",
          question:
            "Name the two-word construct in **Ajzen's Theory of Planned Behaviour (TPB)** that captures perceived social pressure from valued peers or family to perform (or avoid) a health behaviour.",
          answer: {
            type: "text",
            accept: ["subjective norms", "subjective norm"],
            display: "Subjective norms",
          },
          solution: [
            "**Subjective norms** reflect what an individual believes important others expect them to do — a major addition over the original Health Belief Model.",
          ],
          hints: [
            "The three predictors of intention in TPB are Attitudes, Perceived Behavioural Control, and ___ ___.",
            "First word is 'subjective'; second word means social expectations/rules.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "stress-addiction-health-promotion",
          marks: 6,
          question:
            "**Paper 1 Section B Vignette:** During the three months leading up to university entrance exams, Kenji isolates himself from friends, believes *'I cannot possibly cover the syllabus in time'*, sleeps five hours nightly, and develops repeated viral infections plus a slow-healing cut. Analyse Kenji's declining physical health by integrating **cognitive appraisal**, **HPA psychoneuroimmunology**, and **one evidence-based coping strategy**.",
          modelAnswer:
            "Under Lazarus and Folkman's (1984) transactional model, Kenji's primary appraisal frames exams as a severe threat while his secondary appraisal judges his coping resources as insufficient ('cannot possibly cover the syllabus'), generating intense chronic stress. Biologically, sustained distress activates the slow HPA axis (hypothalamus CRH to anterior pituitary ACTH to adrenal cortex cortisol), creating high allostatic load. Chronic cortisol suppresses white blood cell natural killer (NK) activity and pro-inflammatory cytokines (IL-1β) needed for tissue repair — directly mirroring Kiecolt-Glaser et al. (1984), where lonely medical students experienced the steepest exam-period NK-cell drop, and Kiecolt-Glaser et al. (1995), where chronic caregiver stress slowed wound healing by 24%. Socioculturally, self-isolation removes vital social buffering. To drive healthy Change, Kenji should combine problem-focused coping (breaking revision into manageable blocks to raise perceived control) with affiliative social support and sleep recovery to down-regulate HPA cortisol.",
          markScheme: [
            {
              point: "Applies Lazarus & Folkman primary (threat) and secondary (insufficient coping resources) appraisal to Kenji's thought.",
              keywords: ["lazarus", "primary appraisal", "secondary appraisal", "threat"],
            },
            {
              point: "Traces the biological HPA axis accurately (CRH → ACTH → adrenal cortex → cortisol).",
              keywords: ["crh", "acth", "adrenal cortex", "cortisol"],
            },
            {
              point: "Explains immune suppression mechanism (reduced NK-cell activity and/or IL-1β cytokines / allostatic load).",
              keywords: ["nk", "natural killer", "cytokines", "allostatic load"],
            },
            {
              point: "Cites Kiecolt-Glaser et al. (1984) linking exam stress + loneliness to dropped NK immunity.",
              keywords: ["1984", "lonely", "medical students"],
            },
            {
              point: "Cites Kiecolt-Glaser et al. (1995) linking chronic stress to ~24% slower wound healing.",
              keywords: ["1995", "24%", "caregiver"],
            },
            {
              point: "Recommends a justified coping intervention (problem-focused planning for controllable syllabus + social support / sleep buffering).",
              keywords: ["problem-focused", "social support", "buffering"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Notes that stress weakens the immune system without detailing HPA hormones, appraisal stages, or research evidence.",
              indicators: ["Uses generic stress language without CRH/ACTH/cortisol or Kiecolt-Glaser."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately explains HPA immune suppression and cognitive appraisal with at least one Kiecolt-Glaser study and a sensible coping step.",
              indicators: ["Correctly traces cortisol pathway and links to infections/healing."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Seamlessly integrates cognitive appraisal, HPA psychoneuroimmunology (both 1984 & 1995 Kiecolt-Glaser insights + loneliness interaction), and targeted problem-focused + social coping.",
              indicators: ["Explicitly links isolation to the 1984 loneliness moderation.", "Justifies problem-focused coping because syllabus planning is controllable."],
            },
          ],
          hints: [
            "Start with **Lazarus & Folkman**: map Kenji's thought onto primary threat and low secondary resources.",
            "Trace the full **HPA** hormone chain (CRH → ACTH → adrenal cortex → cortisol) and link to NK cells and cytokines via **Kiecolt-Glaser (1984, 1995)**.",
            "Match his coping recommendation to whether exam preparation is controllable (problem-focused) + rebuilding social support.",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "stress-addiction-health-promotion",
          marks: 6,
          question:
            "**Paper 1 Section B Vignette:** A city council places posters in subway stations warning that sugary drinks cause Type 2 diabetes, yet sugary-beverage sales drop by less than 1%. Using the **Health Belief Model** / **Theory of Planned Behaviour** and the Core Concept of **Responsibility**, explain why the poster campaign stalled and recommend a stronger multi-level public-health strategy.",
          modelAnswer:
            "Posters targeting perceived severity alone frequently stall because individual cognitive models expose multiple missing links: under the Health Belief Model, commuters may hold low perceived susceptibility ('diabetes happens to other people'), high perceived barriers (water costs more or vending machines stock mostly sweet drinks), and habitual triggers. Under Ajzen's Theory of Planned Behaviour, positive peer subjective norms around sweetened teas and low perceived behavioural control in sugary food environments preserve a wide intention-behaviour gap — even motivated commuters grab sweet defaults when tired or hurried. Relying exclusively on individual education also raises ethical Responsibility concerns by risking victim-blaming and widening socioeconomic health gaps. A stronger multi-level strategy pairs salient choice-architecture nudges (such as Singapore's colour-coded Nutri-Grade front-of-pack labels and prominent free water-refill defaults) with upstream structural policies (tiered sugar excise taxes encouraging manufacturer reformulation and banning high-sugar advertising), shifting population defaults equitably.",
          markScheme: [
            {
              point: "Explains HBM gaps beyond severity (low perceived susceptibility and/or high perceived barriers).",
              keywords: ["susceptibility", "barriers", "severity"],
            },
            {
              point: "Explains TPB factors (subjective norms, perceived behavioural control) and the intention–behaviour gap.",
              keywords: ["subjective norms", "perceived behavioural control", "intention-behaviour gap"],
            },
            {
              point: "Applies ethical Responsibility: critiques education-only campaigns for victim-blaming / widening socioeconomic inequities.",
              keywords: ["victim-blaming", "socioeconomic", "inequities", "equitably"],
            },
            {
              point: "Recommends a specific cognitive nudge / choice architecture (e.g. front-of-pack Nutri-Grade labels, default water placement).",
              keywords: ["nutri-grade", "choice-architecture", "nudges", "defaults"],
            },
            {
              point: "Recommends an upstream structural policy (sugar tax, reformulation incentives, advertising bans).",
              keywords: ["upstream", "structural", "tax", "reformulation"],
            },
            {
              point: "Justifies why combining individual and structural levels succeeds across whole populations.",
              keywords: ["multi-level", "population", "environment"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Offers common-sense reasons posters fail without accurately applying HBM/TPB constructs or structural policy.",
              indicators: ["Says 'people ignore posters' without psychological models."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Applies HBM/TPB constructs accurately to explain failure and suggests reasonable nudges or taxes, with partial link to Responsibility.",
              indicators: ["Mentions susceptibility/barriers or intention–behaviour gap and proposes a tax or label."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Critically integrates HBM/TPB limitations (intention–behaviour gap), ethical Responsibility (avoiding victim-blaming/inequity), and a cohesive nudge + upstream structural reform strategy.",
              indicators: ["Links Singapore Nutri-Grade or equivalent real-world labelling to upstream reformulation.", "Explicitly frames equity as Responsibility."],
            },
          ],
          hints: [
            "Ask which HBM and TPB variables a scary poster leaves untouched (susceptibility, barriers, norms, PBC, intention–behaviour gap).",
            "Link information-only campaigns to **Responsibility** (equity and avoiding victim-blaming).",
            "Combine a **nudge** (like Singapore's Nutri-Grade labels) with an **upstream structural policy** (taxation / reformulation).",
          ],
        },
        {
          id: "3-context-health-wellbeing-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "treatments-interventions",
          marks: 9,
          question:
            "**Paper 1 Section C Extended Response:** Discuss the effectiveness of **biomedical** and **cognitive** interventions in producing lasting **Change** in Health and Well-being, considering cultural **Perspective** and ethical **Responsibility**.",
          modelAnswer:
            "Evaluating mental-health interventions requires weighing not only acute symptom reduction, but whether therapeutic Change endures over time, respects diverse cultural Perspectives, and upholds ethical Responsibility for equitable, safe care.\n\nBiomedical interventions — notably SSRIs — block presynaptic SERT reuptake transporters and stimulate downstream BDNF neuroplasticity over 2–6 weeks. Cipriani et al.'s (2018) network meta-analysis of 522 double-blind RCTs confirmed that all 21 antidepressants outperform placebo in acute adult MDD, offering accessible relief when severe inertia blocks verbal engagement. Yet major limitations temper this biological approach: Kirsch et al. (2008) exposed pharmaceutical publication bias using unpublished FDA datasets, showing clinical significance primarily in very severe depression; side effects, withdrawal, and biological reductionism carry ethical Responsibility burdens; and relapse rates soar once medication stops (~76% in Hollon et al., 2005) because underlying schemas and stressors remain unaltered.\n\nCognitive Behavioural Therapy (CBT) targets depressogenic schemas and avoidance via cognitive restructuring and behavioural activation. DeRubeis et al. (2005) and Elkin et al. (1989) demonstrated acute efficacy comparable to pharmacotherapy, while Hollon et al. (2005) showed CBT roughly halved 12-month relapse (31% vs 76%) because clients retain enduring coping skills. For severe or chronic MDD, Cuijpers et al. (2014) confirmed combined SSRI + CBT outperforms either monotherapy. Nevertheless, standard Western CBT imposes high verbal demands, relies on scarce specialists, and carries an individualistic cultural Perspective that can overlook structural poverty or collectivist family norms.\n\nIntegrating cultural Perspective and Responsibility solves these gaps: Griner and Smith's (2006) meta-analysis (d = 0.45) showed culturally adapted therapies outperform unadapted care, while Chibanda et al.'s (2016) Friendship Bench RCT in Zimbabwe trained lay community workers to deliver Shona-adapted problem-solving therapy, slashing 6-month caseness (14% vs 50%). Overall, lasting Change is achieved best not through narrow biomedical or unadapted Western models alone, but through stepped, biopsychosocial, culturally responsive care matched to clinical severity and community context.",
          markScheme: [
            {
              point: "Explains SSRI biological mechanism accurately (SERT blockade → downstream BDNF plasticity).",
              keywords: ["sert", "bdnf", "neuroplasticity"],
            },
            {
              point: "Balances biomedical efficacy evidence: Cipriani et al. (2018) (522 RCTs) alongside Kirsch et al. (2008) (publication bias & severity threshold).",
              keywords: ["cipriani", "kirsch", "publication bias", "severe"],
            },
            {
              point: "Evaluates biomedical limits: side effects, biological reductionism, and high post-withdrawal relapse.",
              keywords: ["side effects", "reductionism", "withdrawal", "76%"],
            },
            {
              point: "Explains CBT mechanism (cognitive restructuring + behavioural activation) and acute evidence (Elkin / DeRubeis).",
              keywords: ["cognitive restructuring", "behavioural activation", "derubeis", "elkin"],
            },
            {
              point: "Evaluates enduring Change via Hollon et al. (2005) relapse comparison (31% vs 76%) and Cuijpers et al. (2014) combined care.",
              keywords: ["hollon", "31%", "cuijpers", "combined"],
            },
            {
              point: "Critiques CBT limitations (cognitive demand, specialist scarcity, Western individualistic Perspective).",
              keywords: ["individualistic", "demand", "specialists"],
            },
            {
              point: "Integrates cultural Perspective & Responsibility via Griner & Smith (2006) meta-analysis (d = 0.45).",
              keywords: ["griner", "0.45", "culturally adapted"],
            },
            {
              point: "Integrates community scalability via Chibanda et al. (2016) Friendship Bench (lay workers, 14% vs 50%).",
              keywords: ["chibanda", "friendship bench", "lay", "14%"],
            },
            {
              point: "Synthesizes a nuanced conclusion advocating stepped, severity-matched, culturally responsive biopsychosocial care.",
              keywords: ["stepped", "biopsychosocial", "severity", "overall"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–3",
              marks: [1, 3],
              descriptor: "Basic description of SSRIs and CBT with limited empirical support and minimal reference to Change, Perspective, or Responsibility.",
              indicators: ["Mentions serotonin and changing thoughts without comparative relapse or cultural evidence."],
            },
            {
              band: "4–6",
              marks: [4, 6],
              descriptor: "Solid comparison of SSRIs and CBT with relevant trials (Kirsch, DeRubeis, Hollon) and some attention to cultural adaptation or ethics.",
              indicators: ["Weighs strengths and limits of both treatments; partial integration of Core Concepts."],
            },
            {
              band: "7–9",
              marks: [7, 9],
              descriptor: "Comprehensive, nuanced synthesis balancing Cipriani vs Kirsch, CBT relapse durability, combined care (Cuijpers), and culturally adapted community models (Griner & Smith; Friendship Bench) framed coherently around Change, Perspective, and Responsibility.",
              indicators: ["Distinguishes acute relief from enduring relapse prevention.", "Integrates global access and cultural safety into final judgment."],
            },
          ],
          hints: [
            "Structure around three pillars: Biomedical (Cipriani vs Kirsch + relapse/ethics), Cognitive/Combined (DeRubeis, Hollon, Cuijpers + cognitive/cultural limits), and Culturally Adapted Community Care (Griner & Smith, Friendship Bench).",
            "Keep weaving **Change** (acute vs enduring relapse), **Perspective** (cultural fit), and **Responsibility** (side effects, publication transparency, equitable access) throughout.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "3-context-health-wellbeing-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "diagnosis-classification-bias",
      question:
        "Two psychiatrists independently diagnose **100** clinic patients for Major Depressive Disorder: both diagnose MDD for **46** patients, both diagnose No MDD for **40** patients, Clinician A alone diagnoses MDD for **4** patients, and Clinician B alone diagnoses MDD for **10** patients. Calculate **Cohen's kappa (κ)** to 2 decimal places.",
      answer: { type: "number", value: 0.72, tolerance: 0.01, display: "0.72" },
      traps: [
        {
          spec: { type: "number", value: 0.86, tolerance: 0.01 },
          feedback: "0.86 is the raw observed agreement (P_o) — you still need to adjust for chance agreement (P_e = 0.50).",
        },
      ],
      solution: [
        "Observed agreement: {{P_o = (46 + 40) / 100 = 0.86}}.",
        "Clinician A marginals: MDD = {{(46 + 4) / 100 = 0.50}}, No MDD = {{0.50}}.",
        "Clinician B marginals: MDD = {{(46 + 10) / 100 = 0.56}}, No MDD = {{0.44}}.",
        "Chance agreement: {{P_e = (0.50 * 0.56) + (0.50 * 0.44) = 0.28 + 0.22 = 0.50}}.",
        "Cohen's kappa: {{kappa = (0.86 - 0.50) / (1 - 0.50) = 0.36 / 0.50 = 0.72}}.",
      ],
      hints: [
        "First find observed agreement {{P_o}} from the two cells where both clinicians agreed (46 and 40).",
        "Next compute each clinician's marginal proportions for 'MDD' and 'No MDD' to find chance agreement {{P_e = P(A_\"yes\")*P(B_\"yes\") + P(A_\"no\")*P(B_\"no\")}}.",
        "Finally apply {{kappa = (P_o - P_e) / (1 - P_e)}}.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "treatments-interventions",
      question:
        "In a double-blind RCT of **160** adults split equally between an active SSRI arm (**80** patients) and a placebo arm (**80** patients), **46** SSRI patients and **36** placebo patients reach clinical remission. Calculate the **Number Needed to Treat (NNT)** as a whole number.",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "10 is the raw patient difference (46 − 36), not the NNT — convert both arms to proportions out of 80 first.",
        },
      ],
      solution: [
        "SSRI remission proportion: {{46 / 80}} = 0.575 (57.5%).",
        "Placebo remission proportion: {{36 / 80}} = 0.450 (45.0%).",
        "Absolute benefit increase (ARR) = {{0.575 - 0.450}} = 0.125.",
        "NNT = {{1 / 0.125}} = **8** patients.",
      ],
      hints: [
        "Convert each arm into a remission proportion out of 80 patients (not 160!).",
        "Subtract the placebo proportion from the SSRI proportion to get ARR.",
        "Take the reciprocal: NNT = {{1 / \"ARR\"}}.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "treatments-interventions",
      marks: 6,
      question:
        "Explain how **functional unblinding** occurs in standard double-blind antidepressant trials, why it threatens **internal validity**, and how using an **active placebo** addresses this methodological challenge (**Measurement** & **Bias**).",
      modelAnswer:
        "In a standard double-blind trial, inert sugar pills produce no physiological sensations, whereas real SSRIs frequently trigger noticeable side effects such as dry mouth, nausea, or mild insomnia. Consequently, many participants and raters accurately deduce treatment allocation — a breakdown known as functional unblinding. Once unblinded, patients in the active-drug arm experience heightened positive expectancy effects while control patients may feel discouraged (nocebo/disappointment bias), artificially inflating the apparent drug-placebo difference and threatening internal validity. Replacing inert pills with an active placebo — a benign compound (e.g. low-dose atropine) engineered to mimic harmless sensations like dry mouth without antidepressant neurochemistry — preserves genuine blinding, reduces expectancy Bias, and yields a purer Measurement of pharmacological efficacy, though it raises ethical Responsibility questions over giving healthy controls mild discomfort.",
      markScheme: [
        {
          point: "Explains the trigger of functional unblinding: recognizable drug side effects (dry mouth, nausea, insomnia) contrast with inert sugar pills.",
          keywords: ["side effects", "inert", "dry mouth", "nausea"],
        },
        {
          point: "Explains how patients/clinicians guess allocation, breaking double-blinding.",
          keywords: ["allocation", "deduce", "guess", "blinding"],
        },
        {
          point: "Explains the internal validity threat: boosted expectancy effects in the active arm (and/or nocebo disappointment in controls) artificially inflate drug–placebo gap.",
          keywords: ["expectancy", "artificially", "inflate", "nocebo"],
        },
        {
          point: "Defines an active placebo accurately (benign substance mimicking mild somatic sensations without therapeutic neurochemistry).",
          keywords: ["mimic", "atropine", "somatic", "benign"],
        },
        {
          point: "Explains how active placebos improve Measurement purity by equalizing expectancy Bias across arms.",
          keywords: ["equalizing", "purer", "pharmacological", "preserves"],
        },
        {
          point: "Notes a nuanced ethical or practical trade-off (ethical Responsibility of inducing mild discomfort in controls / recruiting difficulty).",
          keywords: ["ethical", "responsibility", "discomfort"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Notes that patients might guess their group without clearly linking side effects to expectancy bias or active placebos.",
              indicators: ["Confuses placebo effect with unblinding mechanism."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately explains side-effect unblinding, expectancy inflation, and the role of active placebos.",
          indicators: ["Links side effects to breaking blinding and defines active placebo accurately."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous methodological evaluation connecting side-effect unblinding, asymmetric expectancy/nocebo bias, active-placebo Measurement precision, and ethical trade-offs.",
          indicators: ["Distinguishes pharmacological effect from expectancy bias.", "Includes ethical Responsibility consideration of active placebos."],
        },
      ],
      hints: [
        "Think about what a patient taking an SSRI physically feels in week 1 compared with a patient taking a sugar pill.",
        "How does realizing 'I definitely got the real drug!' change symptom self-reports?",
        "What does an *active* placebo contain, and what ethical tension does it introduce?",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Compare and contrast",
      guideRef: "treatments-interventions",
      marks: 6,
      question:
        "**HL Culture Integration:** Compare and contrast standard Western clinic-based CBT with culturally adapted community interventions such as Zimbabwe's **Friendship Bench** (**Chibanda et al., 2016**), integrating **emic vs etic** lenses, **Perspective**, and **Responsibility**.",
      modelAnswer:
        "Both clinic-based CBT and Zimbabwe's Friendship Bench share structured, collaborative problem-solving principles aimed at building practical coping skills and durable psychological Change, and both enjoy rigorous randomized controlled trial support (DeRubeis et al., 2005; Chibanda et al., 2016). Yet they diverge sharply in cultural epistemology and accessibility. Standard clinic CBT typically exports an etic Western framework prioritizing individual cognitive restructuring, high literacy homework, and specialist therapists — creating financial, linguistic, and stigma barriers across low-resource and collectivist communities. By contrast, the Friendship Bench adopts an emic Perspective: trained local lay health workers ('grandmothers') hold six structured problem-solving sessions outdoors on community park benches using culturally resonant Shona concepts (kufungisisa — 'thinking too much'), achieving dramatic 6-month symptom drops (14% vs 50% caseness). Consistent with Griner and Smith's (2006) meta-analysis (d = 0.45), culturally adapted task-shifting upholds global ethical Responsibility by expanding equitable access without imposing Western category fallacy, though specialist clinic backup remains essential for severe psychotic or suicidal crises.",
      markScheme: [
        {
          point: "Identifies shared active ingredients / evidence base (structured skill-building, RCT support, enduring coping).",
          keywords: ["structured", "randomized", "skills", "derubeis"],
        },
        {
          point: "Contrasts etic Western clinic assumptions (individual focus, literacy homework, scarce specialists) against emic community grounding.",
          keywords: ["etic", "emic", "specialists", "stigma"],
        },
        {
          point: "Accurately details Chibanda et al. (2016) (lay community health workers / grandmothers, park benches, Shona idiom kufungisisa, 14% vs 50%).",
          keywords: ["grandmothers", "kufungisisa", "14%", "50%"],
        },
        {
          point: "Integrates Griner & Smith (2006) meta-analytic evidence (d = 0.45) supporting cultural adaptation.",
          keywords: ["griner", "0.45", "meta-analysis"],
        },
        {
          point: "Applies Responsibility: task-shifting closes the global treatment gap equitably and reduces stigma.",
          keywords: ["task-shifting", "equitable", "treatment gap"],
        },
        {
          point: "Provides balanced boundary condition: specialist clinic/medical escalation still needed for severe or acute high-risk cases.",
          keywords: ["severe", "escalation", "backup", "suicidal"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes CBT and community care separately without using emic/etic concepts or empirical data.",
          indicators: ["Omits Chibanda outcomes and Griner & Smith evidence."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Compares and contrasts both models using emic/etic terminology and accurate Friendship Bench details.",
          indicators: ["Clearly contrasts specialist barriers against lay task-shifting."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated HL Culture synthesis balancing shared mechanisms, emic vs etic contrast, Chibanda & Griner/Smith evidence, ethical Responsibility, and clinical escalation limits.",
          indicators: ["Includes Shona cultural framing (kufungisisa) and quantitative trial outcomes.", "Notes when specialist referral remains essential."],
        },
      ],
      hints: [
        "Include at least one genuine **similarity** (both teach structured coping skills and have RCT evidence) before contrasting.",
        "Use **emic** (*kufungisisa*, local grandmothers, park benches) vs **etic** (exported Western clinic CBT) explicitly.",
        "Add **Griner & Smith (2006)** and a balanced caveat about when specialist psychiatric care is still needed.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "stress-addiction-health-promotion",
      marks: 6,
      question:
        "**HL Motivation & Technology Integration:** Analyse how commercial mobile gaming and social-betting apps can foster behavioural addiction by integrating **mesolimbic neurobiology**, **learning/motivational mechanisms**, and **ethical Responsibility**.",
      modelAnswer:
        "Commercial gaming and betting platforms engineer behavioural addiction across biological, cognitive-motivational, and structural levels. Biologically, unpredictable loot-box payoffs and micro-wins deliver potent dopamine prediction-error bursts along the mesolimbic pathway (VTA to nucleus accumbens). Under Berridge and Robinson's Incentive Sensitization Theory, repeated exposure hypersensitizes cue-driven 'wanting' (compulsive urges triggered by app icons or push notifications) even as subjective hedonic 'liking' flattens. Cognitively and motivationally, designers exploit Skinner's variable-ratio reinforcement schedules — the schedule most resistant to extinction — while social leaderboards and FOMO streaks crowd out genuine intrinsic autonomy under Deci and Ryan's Self-Determination Theory, leaving users feeling externally compelled rather than volitionally satisfied. From an ethical Responsibility standpoint, deploying frictionless one-tap microtransactions and near-miss illusions toward adolescents whose prefrontal inhibitory control is still maturing shifts accountability beyond individual willpower, justifying regulatory age-gating, loot-box disclosures, and default spending caps.",
      markScheme: [
        {
          point: "Traces mesolimbic dopamine neurobiology (VTA → nucleus accumbens, reward prediction error).",
          keywords: ["vta", "nucleus accumbens", "prediction-error", "dopamine"],
        },
        {
          point: "Applies Berridge & Robinson's Incentive Sensitization Theory (hyper-sensitized 'wanting' vs declining 'liking').",
          keywords: ["incentive sensitization", "wanting", "liking"],
        },
        {
          point: "Explains variable-ratio reinforcement schedules / cue reactivity sustaining compulsive play.",
          keywords: ["variable-ratio", "extinction", "push notifications", "cue"],
        },
        {
          point: "Integrates HL Motivation (Deci & Ryan Self-Determination Theory / undermined autonomy or extrinsic streaks).",
          keywords: ["self-determination", "autonomy", "intrinsic", "deci"],
        },
        {
          point: "Connects to adolescent neurodevelopmental vulnerability (maturing prefrontal inhibitory control).",
          keywords: ["prefrontal", "inhibitory control", "adolescents"],
        },
        {
          point: "Applies ethical Responsibility via upstream regulatory/design safeguards (spending caps, age-gating, banning dark-pattern loot boxes).",
          keywords: ["regulatory", "spending caps", "age-gating", "accountability"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions dopamine and screen addiction generally without specifying reinforcement schedules, wanting/liking, or regulatory ethics.",
          indicators: ["Uses popular 'dopamine hit' language without VTA/NAc or SDT analysis."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains dopamine sensitization and variable-ratio reinforcement clearly with some ethical critique of commercial design.",
          indicators: ["Links unpredictable payoffs to craving and notes design responsibility."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Seamlessly integrates mesolimbic incentive sensitization ('wanting' vs 'liking'), variable-ratio conditioning, SDT autonomy erosion, adolescent prefrontal limits, and structural regulatory Responsibility.",
          indicators: ["Synthesizes Context 1 with HL Motivation & Technology rigorously."],
        },
      ],
      hints: [
        "Map the biological circuit (**VTA → nucleus accumbens**) and Berridge & Robinson's **'wanting' vs 'liking'**.",
        "Name the exact operant reinforcement schedule behind loot boxes and random rewards (**variable-ratio**) plus **Self-Determination Theory**.",
        "Finish with **Responsibility**: why individual willpower isn't enough when apps target developing adolescent prefrontal cortexes.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "stress-addiction-health-promotion",
      marks: 6,
      question:
        "Evaluate the methodological challenges of establishing **Causality** in real-world health research by comparing **Alloy et al.'s (1999)** prospective depression study with **Kiecolt-Glaser et al.'s (1995)** caregiver wound-healing quasi-experiment.",
      modelAnswer:
        "Because ethical Responsibility forbids randomly assigning human participants to endure chronic dementia caregiving or depressogenic childhood trauma, health psychologists rely on prospective longitudinal designs and natural quasi-experiments — each facing distinct Causality trade-offs. Alloy et al. (1999) solved temporal precedence (bidirectional causality) by measuring cognitive style in non-depressed students before tracking first MDD onset over 2.5 years (17% vs 1%); however, unmeasured third variables such as shared polygenic vulnerability or early family adversity could still drive both negative cognitive style and later depression, and longitudinal attrition can bias samples. Kiecolt-Glaser et al. (1995) achieved high ecological validity and objective physiological Measurement via standardized 3.5 mm skin biopsies matched for age and income (24% slower healing); yet without random allocation, lifestyle mediators — including caregivers' chronic sleep loss, poor nutrition, or reduced exercise — remain plausible alternative pathways alongside HPA cortisol. Consequently, robust causal inference in Health and Well-being requires methodological triangulation across longitudinal cohorts, controlled biomarker studies, and ethical intervention RCTs.",
      markScheme: [
        {
          point: "Explains the core ethical constraint preventing true experimental random assignment of severe chronic stressors.",
          keywords: ["ethical", "randomly assigning", "random allocation"],
        },
        {
          point: "Evaluates Alloy et al. (1999) strength: prospective timeline resolves reverse/bidirectional causality (17% vs 1%).",
          keywords: ["temporal precedence", "bidirectional", "17%", "prospective"],
        },
        {
          point: "Evaluates Alloy et al. (1999) limit: unmeasured third variables (genes/early adversity) and/or longitudinal attrition.",
          keywords: ["third variables", "attrition", "polygenic"],
        },
        {
          point: "Evaluates Kiecolt-Glaser (1995) strength: objective standardized biopsy Measurement + matched-pair controls + high ecological validity.",
          keywords: ["biopsies", "matched", "ecological validity", "24%"],
        },
        {
          point: "Evaluates Kiecolt-Glaser (1995) limit: lifestyle confounds/mediators (sleep loss, diet, exercise) alongside cortisol.",
          keywords: ["sleep", "nutrition", "mediators", "confounds"],
        },
        {
          point: "Concludes with methodological triangulation (combining longitudinal, biomarker, and intervention RCT evidence) to build causal confidence.",
          keywords: ["triangulation", "intervention", "rcts"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States 'correlation does not equal causation' generically without unpacking either study's specific design strengths or confounds.",
          indicators: ["Summarizes outcomes without methodological comparison."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Identifies clear strengths and causal confounds for both Alloy et al. and Kiecolt-Glaser et al., noting ethical limits on randomization.",
          indicators: ["Distinguishes temporal precedence from third-variable confounds."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sharp methodological evaluation comparing prospective temporal control against matched quasi-experimental measurement, unpacking specific confounds/mediators and recommending triangulation.",
          indicators: ["Explicitly names lifestyle mediators (sleep/diet) and genetic third variables.", "Proposes methodological triangulation as the rigorous solution."],
        },
      ],
      hints: [
        "Explain *why* neither team could run a true lab experiment (ethical **Responsibility**).",
        "Contrast what each design *solved* (Alloy: temporal order; Kiecolt-Glaser: objective biopsy measurement + matching) against what each design *left open* (third variables vs sleep/diet mediators).",
        "Conclude with **methodological triangulation**.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "aetiology-mental-health",
      marks: 9,
      question:
        "**Paper 1 Section C Extended Response:** To what extent do **biological factors** explain the aetiology of mental-health disorders? Refer explicitly to **Causality** and **Perspective** in your response.",
      modelAnswer:
        "Biological factors contribute a meaningful foundation to mental-health aetiology, yet contemporary evidence confirms they explain disorders only to a moderate, non-deterministic extent — making a pure biomedical Perspective reductionist unless integrated with cognitive and sociocultural pathways.\n\nSupporting biological Causality, large twin registries such as Kendler et al. (2006; N = 42,161) estimate Major Depressive Disorder heritability at roughly 38%, demonstrating substantial genetic predisposition. Neurobiologically, chronic HPA-axis cortisol dysregulation suppresses hippocampal BDNF neuroplasticity, while heightened amygdala threat reactivity coupled with weaker prefrontal inhibition underpins anxiety disorders. However, strong caveats challenge simplistic biological determinism: MZ discordance exceeds 55–60%, proving genes never act alone; large genome-wide replications (Border et al., 2019; Culverhouse et al., 2018) failed to replicate Caspi et al.'s (2003) single 5-HTTLPR gene-environment claim, revealing instead highly polygenic risk; and Moncrieff et al.'s (2022) umbrella review found no consistent evidence that depression results from a simple baseline serotonin deficit.\n\nBroadening Perspective exposes essential non-biological causal mechanisms. Cognitively, Beck's negative cognitive triad, cognitive distortions, and internal-stable-global attributions actively precipitate onset — supported prospectively by Alloy et al. (1999; 17% vs 1% first-onset MDD) — while Clark's panic loop shows catastrophic misinterpretation escalates normal autonomic arousal into panic attacks. Socioculturally, Brown and Harris (1978) proved that structural hardship, unemployment, and lacking a confiding relationship interact with acute provoking agents to multiply depression risk fourfold in working-class women, while Ryder et al. (2008) revealed how cultural norms shape somatic versus affective symptom manifestation.\n\nIn conclusion, biological vulnerabilities establish probabilistic susceptibility — lowering the threshold in a diathesis-stress model — but mental-health Causality is fundamentally biopsychosocial and bidirectional: social adversity elevates HPA cortisol, cortisol biases cognitive threat schemas, and maladaptive schemas intensify isolation.",
      markScheme: [
        {
          point: "Takes an explicit 'to what extent' judgment early: biological factors are meaningful but moderate and non-deterministic.",
          keywords: ["moderate", "non-deterministic", "reductionist"],
        },
        {
          point: "Presents biological evidence accurately: twin heritability (Kendler et al., 2006, ~38%) and HPA cortisol / BDNF / amygdala mechanisms.",
          keywords: ["kendler", "38%", "cortisol", "bdnf", "amygdala"],
        },
        {
          point: "Critiques biological reductionism with MZ discordance and contemporary replications (Border/Culverhouse refuting single 5-HTTLPR; polygenic risk).",
          keywords: ["discordance", "border", "5-httlpr", "polygenic"],
        },
        {
          point: "Integrates Moncrieff et al. (2022) challenging the simplistic serotonin-deficit hypothesis.",
          keywords: ["moncrieff", "serotonin", "umbrella"],
        },
        {
          point: "Expands Perspective via Cognitive aetiology (Beck's triad / attributions / Clark's panic loop) with prospective support (Alloy et al., 1999).",
          keywords: ["beck", "triad", "alloy", "clark"],
        },
        {
          point: "Expands Perspective via Sociocultural aetiology (Brown & Harris, 1978 vulnerability/protective model; poverty/isolation).",
          keywords: ["brown and harris", "provoking", "confiding", "working-class"],
        },
        {
          point: "Integrates cultural Perspective on symptom expression (Ryder et al., 2008 somatic vs affective).",
          keywords: ["ryder", "somatic", "affective"],
        },
        {
          point: "Explains explicit biopsychosocial diathesis–stress interaction rather than isolated silos.",
          keywords: ["diathesis-stress", "threshold", "biopsychosocial"],
        },
        {
          point: "Concludes by characterizing Causality as probabilistic and bidirectional across all three levels.",
          keywords: ["probabilistic", "bidirectional", "conclusion"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Describes biological causes (genes/serotonin) with minimal critique or alternative approaches.",
          indicators: ["Treats Caspi or low serotonin uncritically as proven single causes."],
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor: "Weighs biological evidence against cognitive and sociocultural explanations using relevant studies, though synthesis of contemporary replications or bidirectional causality is partial.",
          indicators: ["Addresses 'to what extent' reasonably across all three approaches."],
        },
        {
          band: "7–9",
          marks: [7, 9],
          descriptor: "Sustained, deeply informed 'to what extent' judgment integrating Kendler, Border/Caspi nuance, Moncrieff, Alloy/Beck, Brown & Harris, and Ryder into a coherent probabilistic, bidirectional Causality & Perspective synthesis.",
          indicators: ["Explicitly counters biological reductionism with contemporary replication science.", "Models dynamic cross-level interaction in conclusion."],
        },
      ],
      hints: [
        "Answer the command term **'To what extent'** explicitly right in your thesis (e.g. *'to a moderate, probabilistic extent within a diathesis–stress framework'*).",
        "Balance biological evidence (Kendler ~38%, HPA/BDNF) with modern critiques (MZ discordance, Border 2019 polygenic critique of Caspi, Moncrieff 2022).",
        "Bring in Cognitive (Beck, Alloy, Clark) and Sociocultural (Brown & Harris, Ryder) **Perspectives** to show *interaction*, not disconnected lists.",
      ],
    },
    {
      id: "3-context-health-wellbeing-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "stress-addiction-health-promotion",
      marks: 9,
      question:
        "**Paper 1 Section C Extended Response:** Evaluate the effectiveness of **individual cognitive health-promotion models** versus **structural public-health interventions** in driving lasting behavioural **Change** and preventing addiction, with reference to **Responsibility**.",
      modelAnswer:
        "Promoting physical health and preventing substance or behavioural addictions demands evaluating where individual cognitive persuasion succeeds — and where ethical Responsibility requires reshaping unhealthy structural environments.\n\nIndividual cognitive models such as Rosenstock's Health Belief Model (HBM: susceptibility, severity, benefits minus barriers, cues, self-efficacy) and Ajzen's Theory of Planned Behaviour (TPB: attitudes, subjective norms, perceived behavioural control predicting intention) provide valuable, testable frameworks for targeted one-off actions like screening or vaccination, and help clinicians design relapse-prevention CBT that prevents the abstinence violation effect. However, both models suffer major limitations in habitual and addictive contexts: they assume rational deliberation, struggle to close the wide intention-behaviour gap when tired or stressed, and are overpowered by neurobiological mesolimbic dopamine sensitization ('wanting' over 'liking') and ubiquitous commercial cues. Relying solely on individual education leaflets also raises Responsibility concerns by encouraging victim-blaming and disproportionately benefiting affluent, health-literate citizens.\n\nBy contrast, behavioural nudges (choice architecture such as Singapore's Nutri-Grade front-of-pack colour labels or opt-out healthy defaults) and upstream structural policies (tobacco/sugar excise taxes, smoke-free zones, flavour bans, safe cycling infrastructure, and digital gambling spending caps) produce rapid, equitable population-level Change without requiring constant willpower. Structural policies directly compress socioeconomic health inequities and counter commercial exploitation. Yet structural measures carry their own tensions: libertarian critics question paternalism when defaults or taxes restrict choice, regressive flat taxes can financially squeeze low-income smokers unless revenue funds free cessation clinics, and policies still require public trust and cultural buy-in to endure.\n\nIn conclusion, individual cognitive interventions and structural policies are complementary rather than rivalrous: upstream regulation and choice architecture build a supportive environment that lowers barriers and protects vulnerable youth, while TPB/HBM-informed coaching, peer norms, and self-efficacy training empower durable personal Change.",
      markScheme: [
        {
          point: "Explains HBM constructs accurately and notes strengths (testable predictors for discrete preventive actions / clinical self-efficacy).",
          keywords: ["susceptibility", "barriers", "self-efficacy", "screening"],
        },
        {
          point: "Explains TPB constructs accurately (attitudes, subjective norms, perceived behavioural control → intention).",
          keywords: ["subjective norms", "perceived behavioural control", "intention"],
        },
        {
          point: "Critiques individual cognitive models via the intention–behaviour gap and addiction mechanisms (mesolimbic dopamine 'wanting' / cue reactivity / abstinence violation).",
          keywords: ["intention-behaviour gap", "dopamine", "wanting", "abstinence violation"],
        },
        {
          point: "Applies ethical Responsibility to individual-only campaigns (victim-blaming and widening socioeconomic health gaps).",
          keywords: ["victim-blaming", "affluent", "inequities"],
        },
        {
          point: "Explains behavioural nudges / choice architecture with a real-world example (e.g. Nutri-Grade labels, healthy defaults).",
          keywords: ["choice architecture", "nutri-grade", "defaults", "nudges"],
        },
        {
          point: "Explains upstream structural policies (excise taxes, smoke-free laws, flavour/ad bans, gambling caps) and their population-level equity strength.",
          keywords: ["upstream", "taxes", "flavour bans", "population-level"],
        },
        {
          point: "Provides balanced critique of structural interventions (paternalism/autonomy tensions, regressive tax burden without funded cessation support).",
          keywords: ["paternalism", "regressive", "cessation", "trust"],
        },
        {
          point: "Explicitly frames Change as requiring both environmental defaults and individual skill/norm reinforcement.",
          keywords: ["complementary", "willpower", "empower"],
        },
        {
          point: "Delivers a cohesive, nuanced final judgment linking structural Responsibility with individual behavioural Change.",
          keywords: ["vulnerable", "regulation", "conclusion"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Describes health posters or taxes superficially without clear HBM/TPB constructs or addiction mechanisms.",
          indicators: ["Lists individual vs government tips without psychological models."],
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor: "Accurately evaluates HBM/TPB strengths and limits alongside nudges and structural taxes, with clear links to Change and Responsibility.",
          indicators: ["Identifies the intention–behaviour gap and victim-blaming critique."],
        },
        {
          band: "7–9",
          marks: [7, 9],
          descriptor: "Balanced, authoritative evaluation integrating HBM/TPB, addiction neurobiology/relapse cognition, real-world nudges/upstream policy (e.g. Nutri-Grade, taxes), counter-critiques (paternalism/regressive burden), and a cohesive Change + Responsibility synthesis.",
          indicators: ["Critiques *both* individual models AND structural interventions symmetrically before synthesizing.", "Integrates addiction mechanisms cleanly."],
        },
      ],
      hints: [
        "Evaluate *both* sides fairly — don't just praise structural policies and bash HBM/TPB; include strengths of HBM/TPB (screening, relapse CBT) AND limits of structural taxes (paternalism, regressive burden).",
        "Weave addiction mechanisms (mesolimbic dopamine 'wanting', cue reactivity, abstinence violation effect) into why rational information models stall.",
        "Anchor your final judgment in **Change** (multi-level synergy) and **Responsibility** (equity vs autonomy).",
      ],
    },
  ],
};
