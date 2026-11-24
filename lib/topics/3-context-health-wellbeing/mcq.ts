import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Diagnosis, Classification, Bias & Biopsychosocial Aetiology
  // answerIndex sequence: [2, 0, 3, 1, 2, 1, 3, 0, 1, 3, 0, 2, 0, 3, 1] -> [4,4,3,4]
  // ===========================================================================
  {
    id: "3-context-health-wellbeing-m1",
    title: "MCQ Paper 1: Diagnosis, Bias & Biopsychosocial Aetiology",
    level: "SL",
    questions: [
      {
        id: "3-context-health-wellbeing-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "diagnosis-classification-bias",
        question:
          "Three clinicians using the same manual consistently diagnose every stressed migrant worker with Major Depressive Disorder, even though the workers are experiencing culturally normative grief and exhaustion. Which measurement profile best describes this outcome?",
        options: [
          "Low inter-rater reliability combined with high predictive validity",
          "Low inter-rater reliability combined with low concurrent validity",
          "High inter-rater reliability combined with low diagnostic validity",
          "High test–retest reliability combined with high construct validity",
        ],
        answerIndex: 2,
        explanation:
          "Because the clinicians consistently reach the same label, **inter-rater reliability** is high. However, because the label misrepresents culturally normative grief, **diagnostic validity** is low — demonstrating that reliability is necessary but never sufficient for validity.",
        hints: [
          "Separate clinician consistency (agreement) from diagnostic accuracy (capturing true distress).",
          "Consistent agreement on a flawed or culturally biased label is a classic 'High Reliability, Low Validity' profile.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "diagnosis-classification-bias",
        question:
          "Which key distinction separates the **ICD-11** from the **DSM-5-TR** in global clinical practice?",
        options: [
          "ICD-11 covers both physical and mental health worldwide, whereas DSM-5-TR covers mental disorders only",
          "ICD-11 excludes all dimensional severity ratings, whereas DSM-5-TR removes categorical criteria entirely",
          "ICD-11 relies exclusively on blood biomarkers, whereas DSM-5-TR relies exclusively on brain imaging scans",
          "ICD-11 was authored by the American Psychiatric Association, whereas DSM-5-TR is published by the WHO",
        ],
        answerIndex: 0,
        explanation:
          "The World Health Organization publishes **ICD-11** to classify all physical and mental health conditions globally, whereas the American Psychiatric Association publishes **DSM-5-TR** specifically for mental disorders. Neither manual has single diagnostic blood or neuroimaging biomarkers for depression or anxiety.",
        hints: [
          "Check which global organization publishes ICD-11 versus DSM-5-TR.",
          "Remember that 'International Classification of Diseases' includes every branch of medicine, not only psychiatry.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "diagnosis-classification-bias",
        question:
          "Why do **symptom overlap** and high **comorbidity** between Major Depressive Disorder (MDD) and Generalized Anxiety Disorder (GAD) challenge categorical diagnostic manuals?",
        options: [
          "They show that psychiatric manuals rely too heavily on laboratory neuroimaging rather than clinical interviews",
          "They prove that antidepressant pharmacotherapy cannot reduce anxiety symptoms in comorbid adult patients",
          "They demonstrate that test–retest reliability always exceeds construct validity in hospital outpatient clinics",
          "They blur category boundaries when shared criteria like insomnia and fatigue reduce agreement and specificity",
        ],
        answerIndex: 3,
        explanation:
          "When overlapping symptoms such as sleep disruption, fatigue, irritability, and poor concentration appear in both MDD and GAD, two clinicians can assign different labels (lowering inter-rater reliability) and single-disorder categories lose construct and predictive validity.",
        hints: [
          "List symptoms that appear in both MDD and GAD criteria (such as insomnia, fatigue, and concentration difficulty).",
          "Think about how shared criteria affect whether two diagnostic categories truly represent distinct conditions.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "diagnosis-classification-bias",
        question:
          "Two psychiatrists independently assess 60 outpatients using structured DSM-5-TR interviews and assign the identical primary diagnosis to 45 patients. What is their raw percentage inter-rater concordance?",
        options: ["60%", "75%", "80%", "85%"],
        answerIndex: 1,
        explanation:
          "Percentage inter-rater concordance = {{(45 / 60) * 100}} = **75%**. Distractors like 60% confuse total sample size with percentage, while 80% and 85% miscalculate the ratio.",
        hints: [
          "Divide the number of agreed cases by the total number of patients assessed.",
          "Simplify {{45 / 60}} to {{3 / 4}}, then convert to a percentage.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "diagnosis-classification-bias",
        question:
          "In **Rosenhan's (1973)** pseudopatient study, hospital nurses documented a pseudopatient's normal field journaling as 'patient engages in writing behaviour'. Which cognitive bias does this best illustrate, and what is a key modern critique of applying the study today?",
        options: [
          "Availability heuristic; modern hospitals no longer allow patients to keep personal journals on wards",
          "Fundamental attribution error; Rosenhan used double-blind placebo pills that distorted nurse notes",
          "Confirmation bias from a sticky label; Rosenhan used DSM-II criteria and Cahalan noted archival issues",
          "Hindsight bias from discharge summaries; Rosenhan tested only adolescent patients in European clinics",
        ],
        answerIndex: 2,
        explanation:
          "Once the label 'schizophrenia' was applied, staff interpreted ordinary note-taking to fit that schema (**confirmation bias**). Modern evaluation notes low **temporal validity** (DSM-II lacked explicit structured criteria compared with DSM-5-TR/ICD-11) alongside **Cahalan's (2019)** archival investigation questioning consistency in Rosenhan's original records.",
        hints: [
          "Which bias causes observers to interpret ambiguous or ordinary behaviour as evidence supporting an existing label?",
          "Consider how diagnostic manuals changed since 1973 (DSM-II vs DSM-5-TR) and recent archival critiques.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "diagnosis-classification-bias",
        question:
          "In **Kleinman's (1982)** research in Hunan, China, 87% of outpatients diagnosed locally with *shenjing shuairuo* (neurasthenia) met DSM criteria for depression despite emphasizing physical pain and fatigue over sadness. What methodological pitfall did Kleinman warn against?",
        options: [
          "Sampling attrition caused by longitudinal follow-ups in rural Chinese primary care hospitals",
          "Category fallacy — imposing a Western etic diagnostic label onto a culture with distinct emic idioms",
          "Order effects created when patients complete somatic questionnaires before clinical interviews",
          "Biological reductionism caused by measuring peripheral cortisol levels in outpatient hospital wards",
        ],
        answerIndex: 1,
        explanation:
          "**Category fallacy** occurs when clinicians assume a Western (*etic*) category is universally valid across cultures, overlooking *emic* **cultural concepts of distress** in which emotional suffering is legitimately experienced and communicated somatically.",
        hints: [
          "Connect Kleinman's work to the HL Culture concepts of *etic* (imposed outsider) vs *emic* (insider cultural) frameworks.",
          "Which term specifically names the mistake of assuming a Western diagnostic category carries identical validity in another culture?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "aetiology-mental-health",
        question:
          "Which statement best reflects contemporary evidence regarding **Caspi et al.'s (2003)** finding on the **5-HTTLPR** serotonin-transporter gene and depression?",
        options: [
          "Carrying two short 5-HTTLPR alleles deterministically causes depression even without life stressors",
          "Large genome-wide studies confirmed 5-HTTLPR explains more than 70% of all genetic risk for MDD",
          "The 5-HTTLPR gene regulates adrenaline release in the adrenal medulla rather than synaptic serotonin",
          "Large meta-analyses failed to replicate a single candidate-gene interaction; MDD risk is polygenic",
        ],
        answerIndex: 3,
        explanation:
          "While **Caspi et al. (2003)** pioneered gene × environment research, massive replications (**Culverhouse et al., 2018**; **Border et al., 2019**, N > 62,000) found no robust single candidate-gene effect for 5-HTTLPR. Genetic vulnerability to MDD is **polygenic** — the cumulative effect of many tiny-impact variants interacting with environment.",
        hints: [
          "Recall how modern large-sample GWAS and meta-analyses (such as Border et al., 2019) tested single candidate genes.",
          "Think about the Core Concepts of Measurement (sample size / replication) and Causality (polygenic vs single-gene determinism).",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "aetiology-mental-health",
        question:
          "What did **Moncrieff et al.'s (2022)** umbrella review conclude about the traditional serotonin-deficiency hypothesis of depression?",
        options: [
          "There is no consistent evidence that depression is caused directly by lowered serotonin concentration",
          "Low baseline serotonin levels reliably diagnose Major Depressive Disorder on standard blood tests",
          "Elevated cortical serotonin is the sole biological cause of panic attacks and specific phobias",
          "Serotonin pathways play zero role in emotional processing, sleep regulation, or neural plasticity",
        ],
        answerIndex: 0,
        explanation:
          "**Moncrieff et al. (2022)** reviewed decades of serotonin biomarker, genetic, and depletion studies and found no consistent evidence that depression stems simply from a baseline chemical deficiency of serotonin — pushing modern neuroscience toward neuroplasticity (BDNF), HPA dysregulation, and emotional-processing models.",
        hints: [
          "Distinguish 'simple chemical deficiency causes MDD' from 'serotonin is completely unrelated to brain function'.",
          "Avoid extreme statements claiming blood tests can diagnose MDD or that serotonin has zero brain role.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "aetiology-mental-health",
        question:
          "After receiving a B on one essay, Liam concludes: *'I am completely incompetent, teachers are out to fail me, and I will never get into university.'* Which cognitive framework does this exemplify?",
        options: [
          "Lazarus and Folkman's problem-focused secondary coping appraisal",
          "Beck's negative cognitive triad combined with overgeneralization",
          "Berridge and Robinson's mesolimbic incentive sensitization model",
          "Rosenstock's Health Belief Model perceived susceptibility construct",
        ],
        answerIndex: 1,
        explanation:
          "Liam displays negative views of the **Self** (*'incompetent'*), the **World** (*'teachers are out to fail me'*), and the **Future** (*'never get into university'*) — the exact three corners of **Beck's negative cognitive triad**, triggered by overgeneralizing from a single B grade.",
        hints: [
          "Notice the three targets of Liam's negative beliefs: himself, others/his surroundings, and what lies ahead.",
          "Which cognitive theorist mapped depression onto negative schemas about Self, World, and Future?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "aetiology-mental-health",
        question:
          "How did **Alloy et al.'s (1999)** Temple–Wisconsin longitudinal project strengthen causal evidence for Beck's cognitive model of depression?",
        options: [
          "It randomly assigned healthy students to take high-dose cortisol tablets over a 12-week trial",
          "It used MRI scans to prove that depressogenic schemas are located exclusively in the cerebellum",
          "It interviewed already depressed hospital inpatients about childhood memories from twenty years earlier",
          "It tracked non-depressed students prospectively and found high cognitive risk predicted first MDD onset",
        ],
        answerIndex: 3,
        explanation:
          "Cross-sectional correlations suffer **bidirectional causality** (does negative thinking cause depression or vice versa?). By screening *currently non-depressed* students and following them for 2.5 years, **Alloy et al. (1999)** showed **17%** of the high-cognitive-risk group developed a first MDD episode vs **1%** of the low-risk group.",
        hints: [
          "What methodological problem prevents a simple correlation from proving that negative thoughts *precede* depression?",
          "A prospective longitudinal design measures cognitive risk *before* anyone becomes depressed.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "aetiology-mental-health",
        question:
          "In **Abramson et al.'s (1978)** reformulated learned-helplessness model, which attributional style for negative life events creates the greatest vulnerability to hopelessness depression?",
        options: [
          "Internal, stable, and global attributions for negative events",
          "External, unstable, and specific attributions for negative events",
          "External, stable, and specific attributions for positive events",
          "Internal, unstable, and specific attributions for negative events",
        ],
        answerIndex: 0,
        explanation:
          "Blaming oneself (**internal**), expecting the cause to persist permanently (**stable**), and assuming it ruins every life domain (**global**) generates severe helplessness and depression. By contrast, external–unstable–specific attributions buffer mood after setbacks.",
        hints: [
          "Compare 'I failed because I am permanently stupid at everything' with 'I failed because this one test had an unfair question today'.",
          "Match each of the three dimensions: self vs situation, lasting vs temporary, everything vs one area.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "aetiology-mental-health",
        question:
          "A twin study finds Major Depressive Disorder concordance is **42%** for monozygotic (MZ) twins and **19%** for dizygotic (DZ) twins. What is the **MZ discordance rate**, and what does it demonstrate about causality?",
        options: [
          "23%; proving that genetic risk fully accounts for half of all childhood stressors",
          "42%; proving that shared family environments are more powerful than unique stressors",
          "58%; proving that genetic vulnerability is non-deterministic and requires environmental interaction",
          "81%; proving that monozygotic twins inherit entirely different neurotransmitter receptor genes",
        ],
        answerIndex: 2,
        explanation:
          "MZ discordance = {{100 - 42}} = **58%**. Because MZ twins share ~100% of their segregating genes yet differ in MDD status more than half the time, genes confer **probabilistic vulnerability** rather than deterministic causality — supporting the diathesis–stress model.",
        hints: [
          "Concordance + discordance = 100% for the MZ twin pairs.",
          "If two genetically identical individuals often have opposite mental-health outcomes, can genes alone cause the disorder?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "aetiology-mental-health",
        question:
          "In **Brown & Harris's (1978)** Camberwell study of the social origins of depression, which factor acted as a key **protective factor** buffering women against a severe provoking life event?",
        options: [
          "Having a close, warm, confiding relationship with a partner or friend",
          "Having three or more young children under the age of fourteen at home",
          "Experiencing early maternal bereavement prior to the age of eleven years",
          "Living in a working-class household without paid employment outside home",
        ],
        answerIndex: 0,
        explanation:
          "**Brown & Harris (1978)** found that a close, confiding relationship dramatically lowered depression onset even after a severe provoking event, whereas having 3+ children under 14, early maternal loss before age 11, and lack of employment outside the home were **vulnerability factors**.",
        hints: [
          "Recall the C-M-3-U vulnerability factors — three options here are vulnerability factors, and one is the opposite.",
          "Which social resource buffers chronic adversity by providing emotional support?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "aetiology-mental-health",
        question:
          "In **Ryder et al.'s (2008)** cross-cultural study of depressed outpatients in Changsha (China) and Toronto (Canada), what pattern emerged regarding symptom reporting?",
        options: [
          "Euro-Canadian outpatients reported exclusively physical symptoms and denied experiencing any low mood",
          "Chinese outpatients showed zero depressive symptoms when evaluated with structured clinical interviews",
          "Both clinical groups reported identical proportions of guilt and chest pain across every assessment tool",
          "Chinese outpatients emphasized somatic symptoms spontaneously, whereas Euro-Canadians emphasized affective distress",
        ],
        answerIndex: 3,
        explanation:
          "**Ryder et al. (2008)** found that while both groups experienced psychological and somatic distress, Chinese outpatients spontaneously emphasized **somatic** complaints (sleep, appetite, fatigue), whereas Euro-Canadian outpatients emphasized **psychological/affective** complaints (sadness, guilt), mediated by cultural norms of emotional expression.",
        hints: [
          "Think about how cultural scripts shape *which* symptoms are most salient and socially acceptable to report first.",
          "Eliminate extreme options claiming one group experienced zero psychological or zero physical symptoms.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "aetiology-mental-health",
        question:
          "According to **Clark's cognitive model of panic** integrated with biological arousal, how is a panic attack maintained once a person notices a slight increase in heart rate?",
        options: [
          "Low amygdala activity suppresses sympathetic output until slow HPA cortisol clears the blood",
          "Catastrophic misinterpretation of benign bodily sensations triggers further adrenaline and escalates fear",
          "Increased presynaptic serotonin reuptake immediately shuts down threat vigilance in the prefrontal cortex",
          "Problem-focused coping eliminates conditioned avoidance by reinforcing safety behaviours during distress",
        ],
        answerIndex: 1,
        explanation:
          "In **Clark's panic loop**, interpreting normal physiological arousal (e.g. a faster pulse from caffeine or stairs) catastrophically (*'I am having a heart attack'*) amplifies perceived threat, triggering additional sympathetic adrenaline, faster heart rate, and escalating panic — illustrating biological × cognitive interaction.",
        hints: [
          "Trace the feedback loop between a benign physical cue, a catastrophic thought, and autonomic arousal.",
          "Note that safety behaviours and avoidance maintain anxiety via negative reinforcement rather than extinguishing it.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Treatments, Chronic Stress, Addiction & Health Promotion
  // answerIndex sequence: [1, 3, 0, 2, 0, 3, 2, 1, 3, 0, 2, 1, 2, 0, 3] -> [4,3,4,4]
  // ===========================================================================
  {
    id: "3-context-health-wellbeing-m2",
    title: "MCQ Paper 2: Interventions, Stress Pathways, Addiction & Health Promotion",
    level: "SL",
    questions: [
      {
        id: "3-context-health-wellbeing-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "treatments-interventions",
        question:
          "What is the immediate synaptic mechanism of a **Selective Serotonin Reuptake Inhibitor (SSRI)**, and why does clinical mood improvement usually take 2–6 weeks?",
        options: [
          "It destroys postsynaptic serotonin receptors; mood improves only once those neurons regenerate fully",
          "It blocks presynaptic SERT reuptake transporters; delayed relief reflects BDNF plasticity and receptor change",
          "It inhibits adrenal cortisol synthesis directly; delayed relief reflects gradual weight and sleep restoration",
          "It stimulates rapid dopamine synthesis in the cerebellum; delayed relief reflects motor-habit learning",
        ],
        answerIndex: 1,
        explanation:
          "SSRIs immediately block presynaptic **SERT** reuptake transporters, keeping serotonin in the synaptic cleft longer. Because therapeutic mood relief lags by 2–6 weeks, researchers attribute clinical **Change** to downstream receptor adaptation, **BDNF** neuroplasticity, and positive emotional-bias shifts.",
        hints: [
          "Look closely at the name 'Selective Serotonin Reuptake Inhibitor' — which protein does it block?",
          "Why would mood take weeks to shift if synaptic serotonin rises within hours of the first dose?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "treatments-interventions",
        question:
          "Why was **Kirsch et al.'s (2008)** meta-analysis of antidepressant trials methodologically influential regarding the Core Concept of **Bias**?",
        options: [
          "It relied solely on qualitative patient diaries rather than standardized depression rating scales",
          "It excluded severe depression trials so that SSRIs would appear equivalent to cognitive therapy",
          "It compared SSRIs exclusively against herbal supplements rather than inert placebo control pills",
          "It obtained unpublished FDA trial datasets to correct publication bias and test clinical significance",
        ],
        answerIndex: 3,
        explanation:
          "Pharmaceutical companies selectively published positive trials while leaving null trials in the 'file drawer' (**publication bias**). Using the Freedom of Information Act to include **unpublished FDA trials**, Kirsch et al. showed drug–placebo gains reached clinical significance mainly in **very severe** depression.",
        hints: [
          "What happens to a meta-analysis if only positive trials are printed in journals while null trials remain hidden?",
          "Recall how Kirsch accessed both published and unpublished antidepressant data from the FDA.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "treatments-interventions",
        question:
          "How did **Cipriani et al.'s (2018)** network meta-analysis of 522 double-blind RCTs add nuance to the antidepressant efficacy debate?",
        options: [
          "It showed all 21 antidepressants beat placebo overall in acute adult MDD, with modest effect sizes",
          "It showed placebo outperformed every SSRI across severe hospital inpatient samples worldwide",
          "It proved that antidepressants eliminate long-term relapse completely after discontinuation at 8 weeks",
          "It concluded that side-effect profiles and dropout rates were identical across all 21 tested drugs",
        ],
        answerIndex: 0,
        explanation:
          "**Cipriani et al. (2018)** analysed 522 RCTs (N = 116,477, including unpublished data) and found all 21 tested antidepressants were more effective than placebo for acute adult MDD (small-to-moderate effect sizes), while differing considerably in tolerability/acceptability.",
        hints: [
          "Balance Kirsch (2008) with the largest modern network meta-analysis (522 RCTs, >116,000 participants).",
          "Eliminate extreme claims that SSRIs prevent all relapse or that all 21 drugs have identical side effects.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "treatments-interventions",
        question:
          "In a randomized controlled trial of combined CBT + SSRI therapy versus usual care, **54%** of combined-care patients achieve remission compared with **34%** of usual-care patients. What is the **Number Needed to Treat (NNT)**?",
        options: ["2", "4", "5", "20"],
        answerIndex: 2,
        explanation:
          "Absolute benefit increase (ARR) = {{0.54 - 0.34}} = **0.20** (20 percentage points). Therefore NNT = {{1 / 0.20}} = **5** — treating 5 patients with combined care yields 1 extra remission beyond usual care. Answering 20 confuses the percentage-point difference with NNT.",
        hints: [
          "First convert the remission percentages to proportions and subtract to find ARR.",
          "Use NNT = {{1 / \"ARR\"}}.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "treatments-interventions",
        question:
          "In **DeRubeis et al. (2005)** and **Hollon et al. (2005)**, why did patients who completed **Cognitive Behavioural Therapy (CBT)** experience substantially lower 12-month relapse rates than patients who stopped SSRI medication?",
        options: [
          "CBT teaches enduring cognitive-restructuring and behavioural skills that persist after sessions end",
          "CBT permanently blocks presynaptic serotonin transporters for twelve months after final sessions",
          "Patients assigned to CBT trials had significantly milder baseline depression than medication patients",
          "SSRI patients were forbidden from seeking social support or exercising during the follow-up year",
        ],
        answerIndex: 0,
        explanation:
          "Hollon et al. (2005) found 12-month relapse was **31%** after prior CBT versus **76%** after withdrawing SSRIs, because CBT equips clients with transferable cognitive and behavioural coping tools (**enduring Change**), whereas discontinuing medication leaves underlying schemas unmodified.",
        hints: [
          "What remains with a patient *after* therapy ends versus *after* a prescription stops?",
          "Connect this to the FA2027 Core Concept of durable psychological Change.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "treatments-interventions",
        question:
          "What made Zimbabwe's **Friendship Bench** (**Chibanda et al., 2016**) a landmark demonstration of **Perspective** and **Responsibility** in mental-health intervention?",
        options: [
          "It shipped expensive fMRI scanners to rural primary clinics to replace structured verbal screening",
          "It delivered unadapted English-language CBT manuals strictly inside locked psychiatric hospitals",
          "It replaced all medical clinics with unmonitored smartphone apps requiring paid monthly subscriptions",
          "It trained lay community workers to deliver culturally adapted problem-solving therapy on park benches",
        ],
        answerIndex: 3,
        explanation:
          "By task-shifting structured problem-solving therapy to trained local lay health workers ('grandmothers') using Shona cultural idioms (*kufungisisa*) on community park benches, **Chibanda et al. (2016)** overcame specialist shortages and stigma, cutting 6-month clinical caseness to **14% vs 50%** in enhanced usual care.",
        hints: [
          "Consider how low-resource communities overcome both psychiatrist shortages and psychiatric stigma.",
          "Recall who delivered the sessions and where they took place in Harare.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "stress-addiction-health-promotion",
        question:
          "Which sequence accurately describes the **slow HPA axis** response to sustained psychosocial stress?",
        options: [
          "Hypothalamus → Sympathetic nerves → Adrenal medulla → Adrenaline release within two seconds",
          "Hippocampus → Parasympathetic nerves → Thyroid gland → Melatonin release during deep sleep",
          "Hypothalamus (CRH) → Anterior pituitary (ACTH) → Adrenal cortex → Cortisol secretion",
          "Amygdala (GABA) → Posterior pituitary (Oxytocin) → Adrenal medulla → Dopamine secretion",
        ],
        answerIndex: 2,
        explanation:
          "In the **HPA axis**, the hypothalamus releases **CRH**, prompting the **anterior pituitary** to secrete **ACTH** into the bloodstream, which stimulates the **adrenal cortex** to release **cortisol**. By contrast, the fast SAM pathway runs via sympathetic nerves to the adrenal medulla to release adrenaline.",
        hints: [
          "Match the three letters H–P–A to the three anatomical structures in order.",
          "Remember: adrenal **medulla** = adrenaline (SAM); adrenal **cortex** = cortisol (HPA).",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "stress-addiction-health-promotion",
        question:
          "In **Kiecolt-Glaser et al.'s (1984)** study of 75 medical students, natural killer (NK) cell activity dropped significantly during final exams — and dropped **most sharply** among students reporting high loneliness. Which FA2027 insight does this interaction highlight?",
        options: [
          "Acute examination stress enhances immune cell proliferation when students isolate themselves to study",
          "Sociocultural social isolation interacts with biological HPA stress to intensify immune suppression",
          "Correlational blood samples prove that low NK-cell counts cause medical students to withdraw socially",
          "Biological immunity operates completely independently of cognitive appraisal and social relationships",
        ],
        answerIndex: 1,
        explanation:
          "The sharpest NK-cell drop occurred when examination stress combined with **loneliness**, demonstrating a classic **biopsychosocial interaction** in psychoneuroimmunology — social support acts as a biological buffer against stress-induced immunosuppression.",
        hints: [
          "Notice that two factors were measured together: an academic stressor and a social variable (loneliness).",
          "How do social relationships moderate physiological HPA-axis impact on immune function?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "stress-addiction-health-promotion",
        question:
          "Why did **Taylor et al. (2000)** propose the **tend-and-befriend** model as a critique of traditional fight-or-flight stress theory?",
        options: [
          "Classic stress studies proved females lack functional sympathetic adrenal medulla pathways",
          "Classic stress studies used only longitudinal diaries and never measured blood hormone levels",
          "Classic stress studies underestimated how quickly adrenaline degrades during physical exercise",
          "Classic stress studies showed androcentric sampling bias and overlooked oxytocin-mediated affiliation",
        ],
        answerIndex: 3,
        explanation:
          "**Taylor et al. (2000)** documented that early physiological stress research disproportionately studied male animals and men (**androcentric sampling bias**), overlooking affiliative **tend-and-befriend** responses modulated by **oxytocin** and protective social networks.",
        hints: [
          "Connect Taylor et al. (2000) directly to the FA2027 Core Concept of **Bias** (gender / sampling bias).",
          "Which hormone is associated with caregiving, social bonding, and stress buffering?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "stress-addiction-health-promotion",
        question:
          "Following a permanent sports injury that ended her gymnastics career, Ananya practises mindful acceptance and talks through her grief with teammates. Under **Lazarus & Folkman's (1984)** model, why is this coping choice adaptive?",
        options: [
          "Emotion-focused coping is well suited to managing distress when a stressor is uncontrollable",
          "Problem-focused coping always worsens psychological health after physical or academic setbacks",
          "Primary appraisal eliminates physiological cortisol release without requiring secondary appraisal",
          "Avoidance coping removes negative emotions permanently by erasing traumatic episodic memories",
        ],
        answerIndex: 0,
        explanation:
          "Under **Lazarus & Folkman (1984)**, **problem-focused coping** excels for controllable stressors, whereas healthy **emotion-focused coping** (acceptance, reappraisal, seeking empathy) is adaptive when an event cannot be undone — such as a permanent injury or bereavement.",
        hints: [
          "Ask first: can Ananya directly reverse the permanent injury, or is the stressor uncontrollable?",
          "Distinguish healthy emotion-focused coping (acceptance, emotional support) from maladaptive avoidance.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stress-addiction-health-promotion",
        question:
          "In a psychoneuroimmunology study modelling **Kiecolt-Glaser et al. (1995)**, chronically stressed caregivers' skin wounds take a mean of **45 days** to heal compared with **36 days** for matched controls. By what percentage did caregivers' healing time increase?",
        options: ["9%", "20%", "25%", "80%"],
        answerIndex: 2,
        explanation:
          "Increase = {{45 - 36}} = 9 days. Percentage increase over control baseline = {{(9 / 36) * 100}} = **25%**. Dividing by 45 instead of the control baseline 36 gives the trap answer 20%.",
        hints: [
          "Subtract the control baseline from the stressed group mean to find the extra days.",
          "Always divide the difference by the **baseline (control)** value (36), not the larger stressed value (45).",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "stress-addiction-health-promotion",
        question:
          "According to **Berridge & Robinson's Incentive Sensitization Theory**, why does a long-term smoker or compulsive gambler keep craving the behaviour even after reporting that it no longer feels enjoyable?",
        options: [
          "Serotonin depletion permanently eliminates classical conditioning to environmental triggers",
          "Mesolimbic dopamine sensitization amplifies cue-driven 'wanting' even as hedonic 'liking' declines",
          "Prefrontal executive control strengthens with repeated exposure, overriding subcortical reward signals",
          "Adrenal medulla adrenaline replaces dopamine in the nucleus accumbens after tolerance develops",
        ],
        answerIndex: 1,
        explanation:
          "Repeated addictive reward surges hypersensitize the **mesolimbic dopamine pathway** (VTA → nucleus accumbens), driving intense cue-triggered **'wanting'** (motivational craving) even while tolerance reduces subjective **'liking'** (hedonic pleasure) — directly linking Context 1 to HL **Motivation**.",
        hints: [
          "Recall the distinction between motivational craving ('wanting') and hedonic pleasure ('liking').",
          "Which neural reward pathway becomes hypersensitized to addiction-related cues?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "stress-addiction-health-promotion",
        question:
          "A teenager knows skin cancer is deadly (high severity) and sunscreen works (high benefits), yet skips sunscreen because she believes *'only older adults get skin cancer'* and finds lotions greasy. Under the **Health Belief Model**, which two constructs are blocking action?",
        options: [
          "High self-efficacy and excessive external cues to action",
          "Low perceived severity and absent subjective peer norms",
          "Low perceived susceptibility and high perceived barriers",
          "High perceived behavioural control and strong attitudes",
        ],
        answerIndex: 2,
        explanation:
          "Thinking *'only older adults get it'* reflects **low perceived susceptibility** (personal vulnerability), and finding sunscreen greasy reflects **high perceived barriers** — two core HBM constructs that suppress preventive action even when severity and benefits are recognized.",
        hints: [
          "Match *'only older adults get it'* to personal vulnerability, and *'greasy lotion'* to practical obstacles.",
          "Remember that subjective norms and perceived behavioural control belong to TPB, not the core HBM.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "stress-addiction-health-promotion",
        question:
          "What major limitation affects both the **Health Belief Model (HBM)** and **Ajzen's Theory of Planned Behaviour (TPB)** when used to design public-health campaigns?",
        options: [
          "They assume rational individual decisions and struggle to close the intention–behaviour gap",
          "They focus exclusively on government taxation and ignore individuals' personal attitudes",
          "They apply strictly to genetic screening and cannot be tested on diet, smoking, or exercise",
          "They forbid combining cognitive education with community peer support or clinical coaching",
        ],
        answerIndex: 0,
        explanation:
          "Both HBM and TPB are rational-cognitive expectancy models: people frequently form strong intentions (*'I will eat healthier this week'*) yet fail to act due to habits, emotional stress, marketing cues, or poverty — the **intention–behaviour gap**.",
        hints: [
          "Think about New Year's resolutions: why do strong intentions often fail in everyday life?",
          "Compare individual cognitive models with structural environmental factors like pricing, habits, and stress.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "stress-addiction-health-promotion",
        question:
          "Why do public-health psychologists argue that combining **front-of-pack labels** (like Singapore's Nutri-Grade) with **upstream structural policies** (such as sugar reformulation rules and safe parks) better upholds **Responsibility** than education leaflets alone?",
        options: [
          "Structural policies remove all individual autonomy and eliminate the need for health literacy",
          "Education leaflets increase cortisol directly, whereas nutrition labels reduce adrenaline levels",
          "Upstream policies benefit only high-income households who already read detailed nutrition tables",
          "Reshaping the default choice environment reduces socioeconomic inequities and avoids victim-blaming",
        ],
        answerIndex: 3,
        explanation:
          "Information-only campaigns disproportionately benefit affluent, health-literate groups and risk **victim-blaming** people living in food deserts or chronic stress. Upstream structural policies and salient nudges reshape defaults across the entire population, advancing equitable health **Responsibility**.",
        hints: [
          "Consider who has the time, money, and cognitive bandwidth to act on an information leaflet alone.",
          "Link environmental/structural interventions to equity and avoiding victim-blaming.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Unseen Vignettes, Core Concepts & HL Extension Synthesis
  // answerIndex sequence: [3, 1, 2, 0, 3, 2, 0, 1, 2, 1, 3, 0, 1, 2, 0] -> [4,4,4,3]
  // ===========================================================================
  {
    id: "3-context-health-wellbeing-m3",
    title: "MCQ Paper 3: Unseen Vignettes, Core Concepts & HL Synthesis",
    level: "SL",
    questions: [
      {
        id: "3-context-health-wellbeing-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "diagnosis-classification-bias",
        question:
          "A patient with a documented diagnosis of bipolar disorder visits an emergency room complaining of persistent chest pain, and the triage nurse quickly attributes the pain to 'psychiatric anxiety' without ordering an ECG. Which specific clinical hazard is illustrated?",
        options: [
          "Comorbidity confounding across DSM-5-TR severity specifiers",
          "Low test–retest reliability of hospital emergency checklists",
          "Cultural category fallacy between somatic and affective idioms",
          "Diagnostic overshadowing driven by a prior psychiatric label",
        ],
        answerIndex: 3,
        explanation:
          "**Diagnostic overshadowing** occurs when clinicians misattribute genuine physical symptoms to a patient's pre-existing psychiatric diagnosis — a dangerous form of labelling **Bias** with serious ethical **Responsibility** consequences.",
        hints: [
          "Notice that a *physical* complaint is being eclipsed by an existing *mental-health* label.",
          "Which exact clinical bias term describes a psychiatric label obscuring physical health problems?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "aetiology-mental-health",
        question:
          "Two siblings share similar family genetic risk for anxiety. After both experience a stressful relocation, Sibling A develops panic disorder while Sibling B adapts smoothly with help from a supportive sports coach and balanced self-talk. Which model best explains this divergence?",
        options: [
          "Pure biomedical determinism predicting uniform outcomes from shared genes",
          "Biopsychosocial diathesis–stress moderated by cognitive and social buffers",
          "Classical monoamine hypothesis attributing panic solely to low serotonin",
          "Single-factor behavioural conditioning ignoring biological vulnerability",
        ],
        answerIndex: 1,
        explanation:
          "Both siblings share biological vulnerability and the same provoking stressor, yet protective cognitive reappraisal and a confiding social mentor buffer Sibling B below the clinical threshold — the essence of the **biopsychosocial diathesis–stress model**.",
        hints: [
          "Identify which factors are shared (genes + relocation) and which factors differ (coach support + self-talk).",
          "Look for the option that integrates vulnerability, stressor, and protective buffers.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "treatments-interventions",
        question:
          "In a double-blind SSRI trial, 70% of patients in the active-drug arm correctly guess they are taking the real SSRI because they notice dry mouth and mild nausea. Why does this threaten **internal validity**?",
        options: [
          "It reduces sample size so drastically that no statistical significance test can be computed",
          "It proves the drug failed to cross the blood–brain barrier to block SERT transporters",
          "Functional unblinding inflates expectancy/placebo gains in the active arm over inert placebo",
          "It prevents researchers from calculating percentage improvement between baseline and week 12",
        ],
        answerIndex: 2,
        explanation:
          "When recognizable side effects break blinding (**functional unblinding**), patients in the active-drug arm gain boosted positive **expectancy effects** compared with inert-placebo controls, artificially widening the apparent drug–placebo gap. Using an **active placebo** (producing mild benign side effects) helps counter this **Measurement** bias.",
        hints: [
          "What is the entire purpose of double-blinding in a clinical RCT?",
          "If active-arm patients realize they received the real drug, how does expectation affect their symptom reports?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "treatments-interventions",
        question:
          "A clinician working with a severely depressed client who cannot get out of bed begins with an SSRI and gradually introduces **behavioural activation** and **cognitive restructuring** once sleep and energy stabilize. Which evidence-based rationale supports this strategy?",
        options: [
          "Combined pharmacotherapy and CBT outperforms monotherapy in severe/chronic depression (Cuijpers, 2014)",
          "SSRIs require simultaneous CBT homework before SERT reuptake blockade can begin in the synapse",
          "Behavioural activation works only when serotonin receptors are first deactivated by medication",
          "Combined therapy eliminates all potential medication side effects and guarantees zero relapse",
        ],
        answerIndex: 0,
        explanation:
          "**Cuijpers et al. (2014)** demonstrated that **combined/eclectic treatment** yields superior outcomes for severe or chronic depression: pharmacotherapy alleviates acute biological inertia enough for clients to engage effectively in CBT's long-term cognitive and behavioural **Change**.",
        hints: [
          "Why is standard CBT hard to start when someone is severely immobilized by depression?",
          "Recall Cuijpers et al.'s (2014) meta-analysis comparing monotherapy against combined care.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "stress-addiction-health-promotion",
        question:
          "During a sudden fire alarm, Ravi's heart races within seconds; once the all-clear sounds five minutes later, his heart rate returns to normal. Which physiological systems operated in sequence?",
        options: [
          "HPA axis cortisol surge followed by sympathetic adrenal medulla shutoff",
          "Adrenal cortex ACTH surge followed by mesolimbic dopamine recovery",
          "Parasympathetic excitation followed by hypothalamic CRH secretion",
          "SAM sympathetic adrenaline surge followed by parasympathetic homeostasis",
        ],
        answerIndex: 3,
        explanation:
          "A sudden acute alarm activates the fast **SAM** sympathetic pathway (adrenal medulla → adrenaline) within seconds; once threat ends, the **parasympathetic nervous system** slows heart rate and restores baseline homeostasis.",
        hints: [
          "Check the timescale: seconds-to-minutes acute threat uses the fast neural pathway, not the slow hormonal axis.",
          "Which autonomic branch slows heart rate back down after danger passes?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "treatments-interventions",
        question:
          "A university rolls out an unguided commercial mental-health chatbot app for stressed students without human follow-up or independent clinical trials, and 82% of users stop opening the app within ten days. Which FA2027 HL **Technology** critique is most accurate?",
        options: [
          "Digital interventions are inherently less valid than antidepressants for every mild stress complaint",
          "High app dropout proves students lack sufficient perceived susceptibility to use smartphone tools",
          "Unguided apps suffer poor adherence and raise ethical Responsibility risks over clinical validation and privacy",
          "Guided internet-based CBT shows identical 82% dropout rates because screens block therapeutic alliance",
        ],
        answerIndex: 2,
        explanation:
          "Research distinguishes **guided iCBT** (human clinician check-ins → strong adherence and efficacy) from **unguided commercial apps** (steep dropout, limited RCT validation, and sensitive mental-health data privacy concerns — key **Responsibility** and **Measurement** issues in HL Technology).",
        hints: [
          "Contrast *guided* digital CBT (with human support) against *unguided* commercial apps.",
          "Think about both retention/efficacy (Measurement) and safeguarding/privacy (Responsibility).",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "treatments-interventions",
        question:
          "A group of adolescents completes 14 weeks of culturally adapted CBT. Their mean Beck Depression Inventory (BDI-II) score drops from **32** at baseline to **16** post-treatment. What is their percentage symptom improvement?",
        options: ["50%", "32%", "16%", "200%"],
        answerIndex: 0,
        explanation:
          "Percentage improvement = {{((32 - 16) / 32) * 100}} = {{(16 / 32) * 100}} = **50%**. Sixteen is the raw point reduction rather than the percentage reduction.",
        hints: [
          "Compute the point drop: baseline minus post-treatment.",
          "Divide the drop by the baseline score (32) and multiply by 100.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "stress-addiction-health-promotion",
        question:
          "A mobile sports-betting app uses unpredictable bonus notifications, near-miss animations, and instant one-tap wagers. Integrating Context 1 with **HL Motivation & Technology**, why does this design accelerate behavioural addiction?",
        options: [
          "Predictable fixed-interval rewards suppress VTA dopamine and strengthen prefrontal inhibitory control",
          "Variable-ratio schedules and salient digital cues sensitize mesolimbic dopamine 'wanting' and lower friction",
          "Near-miss graphics activate parasympathetic recovery and lower perceived susceptibility to financial loss",
          "Instant notifications increase intrinsic autonomy under Self-Determination Theory and prevent tolerance",
        ],
        answerIndex: 1,
        explanation:
          "Unpredictable **variable-ratio reinforcement** produces maximal mesolimbic dopamine prediction-error spikes, while push notifications act as conditioned cues driving **incentive sensitization ('wanting')** and one-tap design strips away friction that normally lets prefrontal inhibitory control intervene.",
        hints: [
          "Which reinforcement schedule (unpredictable payoffs) produces the highest resistance to extinction and strongest dopamine spikes?",
          "Connect salient digital triggers to cue reactivity and 'wanting' in the mesolimbic pathway.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "stress-addiction-health-promotion",
        question:
          "After six weeks smoke-free, Marcus smokes a single cigarette at a stressful wedding and immediately thinks: *'I've blown my whole quit attempt — I have zero willpower, so I might as well buy a pack.'* Which cognitive relapse mechanism is this?",
        options: [
          "Primary challenge appraisal under Lazarus and Folkman's transactional model",
          "Negative feedback shutoff along the hypothalamic–pituitary–adrenal axis",
          "The abstinence violation effect driven by all-or-nothing thinking and low self-efficacy",
          "Diagnostic overshadowing caused by labelling nicotine dependence in ICD-11",
        ],
        answerIndex: 2,
        explanation:
          "The **abstinence violation effect** (Marlatt) occurs when a minor lapse is interpreted through internal, stable, all-or-nothing beliefs (*'I have zero willpower'*), collapsing **self-efficacy** and turning a single slip into full relapse. Relapse-prevention CBT explicitly trains clients to reframe lapses as temporary learning cues.",
        hints: [
          "Notice how one minor lapse triggers global self-blame and immediate abandonment of recovery.",
          "Which cognitive addiction term specifically describes turning one slip into a full relapse?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "stress-addiction-health-promotion",
        question:
          "Why can **Kiecolt-Glaser et al.'s (1995)** caregiver wound-healing study not establish **pure experimental causality** with 100% certainty?",
        options: [
          "Skin biopsies were never standardized in diameter across caregivers and control volunteers",
          "Caregiving is a naturally occurring variable that cannot be randomly assigned, leaving lifestyle confounds",
          "The study used zero biological immune measures and relied solely on self-rated healing diaries",
          "Caregivers were on average thirty years younger than matched non-caregiving control volunteers",
        ],
        answerIndex: 1,
        explanation:
          "Because researchers obviously cannot ethically randomly assign volunteers to care for a relative with Alzheimer's (**Responsibility**), the study is a **quasi-experiment**: even with age/income matching, caregivers may sleep less, eat worse, or exercise less — lifestyle mediators that could partly account for slower healing alongside HPA cortisol.",
        hints: [
          "Can researchers randomly assign someone to have a spouse with dementia?",
          "Think about third variables (like sleep deprivation or nutrition) in quasi-experimental stress research.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "stress-addiction-health-promotion",
        question:
          "A national campaign aims to boost annual flu vaccination among young adults. Under **Ajzen's Theory of Planned Behaviour (TPB)**, which intervention directly targets **Subjective Norms** and **Perceived Behavioural Control (PBC)**?",
        options: [
          "Displaying medical textbooks explaining viral RNA replication inside university lecture halls",
          "Showing alarming statistics on hospitalization rates strictly to adults aged over seventy-five",
          "Offering free vitamins alongside posters warning that untreated influenza is very severe",
          "Sharing peer stories showing most classmates get vaccinated plus setting up 5-minute walk-in campus booths",
        ],
        answerIndex: 3,
        explanation:
          "Peer stories highlighting that classmates approve and get vaccinated boost **Subjective Norms**, while effortless 5-minute walk-in campus booths raise **Perceived Behavioural Control (PBC)** by removing logistical friction — directly bridging intention to action.",
        hints: [
          "Subjective norms = perceived social approval/behaviour of valued peers; PBC = how easy and feasible the action feels.",
          "Find the option containing *both* a peer-norm element and a practical convenience/access element.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "diagnosis-classification-bias",
        question:
          "In a diagnostic reliability trial, two clinicians show observed agreement {{P_o = 0.80}}, while agreement expected by chance alone is {{P_e = 0.50}}. Using Cohen's kappa {{kappa = (P_o - P_e) / (1 - P_e)}}, what is κ?",
        options: ["0.60", "0.30", "0.40", "0.80"],
        answerIndex: 0,
        explanation:
          "Substitute into Cohen's kappa: {{kappa = (0.80 - 0.50) / (1 - 0.50) = 0.30 / 0.50 = 0.60}} (substantial chance-corrected inter-rater reliability). Answering 0.30 forgets to divide by {{(1 - P_e)}}.",
        hints: [
          "First calculate the numerator: observed agreement minus chance agreement ({{0.80 - 0.50}}).",
          "Divide that difference by {{1 - 0.50 = 0.50}}.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "treatments-interventions",
        question:
          "In **Griner & Smith's (2006)** meta-analysis of 76 studies (N = 25,225), culturally adapted mental-health interventions achieved a mean effect size of *d* = 0.45 over unadapted care, with even larger gains when delivered in clients' native language. Which FA2027 concept pairing best frames this finding?",
        options: [
          "Causality and Biological Reductionism — showing language alters presynaptic SERT density directly",
          "Perspective and Responsibility — showing emic cultural fit improves therapeutic Change and equity",
          "Measurement and Placebo — showing native-language delivery invalidates double-blind random allocation",
          "Bias and Determinism — showing Western CBT can never produce measurable gains outside North America",
        ],
        answerIndex: 1,
        explanation:
          "Adapting therapy to clients' language, cultural idioms, and family systems honours cultural **Perspective** and ethical **Responsibility** (equitable, non-stigmatizing care), translating directly into stronger real-world clinical **Change**.",
        hints: [
          "Avoid extreme statements claiming Western CBT never works or that language alters SERT proteins directly.",
          "Which two Core Concepts cover honouring cultural viewpoints and delivering equitable care?",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "diagnosis-classification-bias",
        question:
          "Before assessing a recently arrived international student, a school psychologist administers the DSM-5-TR **Cultural Formulation Interview (CFI)**. What is the primary purpose of the CFI?",
        options: [
          "To replace all diagnostic validity criteria with informal unstructured group conversations",
          "To force non-Western students to translate somatic discomfort into Western guilt vocabulary",
          "To elicit the client's cultural understanding of distress, social context, and preferred supports",
          "To calculate exact Cohen's kappa values between school teachers and hospital psychiatrists",
        ],
        answerIndex: 2,
        explanation:
          "Introduced in DSM-5 and refined in DSM-5-TR, the **Cultural Formulation Interview (CFI)** is a 16-question semi-structured tool that explores how the individual defines their distress, cultural causes, coping resources, and barriers — actively reducing **Bias** and enriching **Perspective**.",
        hints: [
          "Think about how clinicians prevent cultural category fallacy during an initial clinical interview.",
          "The CFI centres the *client's own* cultural meanings and support networks.",
        ],
      },
      {
        id: "3-context-health-wellbeing-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "aetiology-mental-health",
        question:
          "Why does the FA2027 IB Psychology syllabus integrate **Biological**, **Cognitive**, and **Sociocultural** approaches within Compulsory Context 1 (Health and Well-being) rather than examining them in isolation?",
        options: [
          "Health outcomes emerge from dynamic interactions across neurobiology, appraisal, and social context",
          "Each approach studies an unrelated organ system so findings from one approach never affect another",
          "Sociocultural research has replaced genetic and neurochemical research in modern clinical guidelines",
          "Cognitive schemas operate identically across all cultures regardless of poverty, trauma, or stigma",
        ],
        answerIndex: 0,
        explanation:
          "Mental and physical well-being arise from **biopsychosocial interaction**: social stressors (Brown & Harris, poverty, loneliness) shape HPA-axis cortisol and immunity (Kiecolt-Glaser), while cognitive schemas (Beck, Lazarus & Folkman) moderate how biology and environment translate into resilience or illness.",
        hints: [
          "Think about the Core Concept of **Perspective** and why Engel's biopsychosocial model dominates modern health psychology.",
          "Look for the option emphasizing dynamic interaction across all three levels.",
        ],
      },
    ],
  },
];
