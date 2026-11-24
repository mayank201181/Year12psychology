import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: 6 Core Concepts & Experimental Foundations
  // answerIndex sequence: [2, 0, 3, 1, 0, 3, 2, 1, 3, 0, 2, 1, 0, 2, 3]
  // ===========================================================================
  {
    id: "1-concepts-methodology-m1",
    title: "MCQ Paper 1 — The 6 Core Concepts & Experimental Foundations",
    level: "SL",
    questions: [
      {
        id: "1-concepts-methodology-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "six-core-concepts",
        strategy: "FA2027 IA Research Proposal scope",
        question:
          "Under the NEW IB Diploma Psychology First Assessment 2027 syllabus, what is required for the Internal Assessment (IA)?",
        options: [
          "Running a live laboratory experiment on classmates and computing inferential p-values from collected data",
          "Writing a 4,000-word archival literature review comparing two historical clinical case studies with no plan",
          "Designing a 2,200-word hypothetical Research Proposal with a ≥ 5-item tool and no participant data collection",
          "Conducting a covert field observation in a local public shopping centre and transcribing field interviews",
        ],
        answerIndex: 2,
        hints: [
          "Check the key structural rule of the FA2027 Psychology IA compared with live empirical reports.",
          "Remember whether students actually recruit participants and gather data for the FA2027 IA.",
        ],
        explanation:
          "The FA2027 IB Psychology IA is strictly a **Research Proposal** (maximum 2,200 words, 24 marks) designing a rigorous hypothetical investigation using one of the four approved methods plus a ≥ 5-item data collection tool in the appendix — students do **not** collect participant data. Hands-on data gathering takes place instead during your four unassessed Class Practicals.",
      },
      {
        id: "1-concepts-methodology-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "six-core-concepts",
        strategy: "Match sampling flaw to Core Concept",
        question:
          "A cognitive study claims to establish a universal decision-making rule using only 60 psychology undergraduates at one American university. Which Core Concept and specific issue best diagnose this weakness?",
        options: [
          "Bias — WEIRD sampling bias limits generalisation across cultures and demographics",
          "Change — lack of longitudinal follow-up prevents measuring lifespan skill growth",
          "Responsibility — failing to debrief participants breaches protection from harm",
          "Causality — uncontrolled order effects confound within-subject trial sequences",
        ],
        answerIndex: 0,
        hints: [
          "Recall Henrich et al.'s acronym describing over-sampled Western university students.",
          "Ask whether the flaw concerns systematic sample distortion, longitudinal tracking, ethics, or trial order.",
        ],
        explanation:
          "Relying solely on American undergraduates exemplifies **WEIRD** (Western, Educated, Industrialised, Rich, Democratic) sampling **Bias**, restricting population validity when claiming universality. Change, Responsibility, and order-effect Causality do not target demographic over-representation.",
      },
      {
        id: "1-concepts-methodology-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "six-core-concepts",
        strategy: "Correlation vs Causality diagnostic",
        question:
          "A survey finds a strong positive correlation ({{r = +0.64}}) between daily energy-drink consumption and self-reported exam stress among adolescents. Why does this finding fail to establish Causality?",
        options: [
          "Because a correlation coefficient below +0.80 is always too weak for causal inference",
          "Because self-report questionnaires automatically produce zero test–retest reliability",
          "Because adolescents represent a vulnerable group requiring parental consent forms",
          "Because reverse causation and third variables like poor sleep were not controlled",
        ],
        answerIndex: 3,
        hints: [
          "Does any correlation — even r = +0.90 — establish cause and effect?",
          "Consider whether stressed students might drink more caffeine, or whether heavy workload drives both.",
        ],
        explanation:
          "Correlational data cannot establish **Causality** because there is no manipulated IV or random allocation: high stress might cause energy-drink intake (**bidirectional ambiguity**), or an unmeasured **third variable** (such as chronic sleep loss or exam pressure) could drive both. Even a very strong correlation (+0.85 or higher) still fails to prove causation.",
      },
      {
        id: "1-concepts-methodology-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "six-core-concepts",
        strategy: "Separate Measurement validity from other concepts",
        question:
          "An investigator operationalises 'creative problem-solving' solely by counting the total number of words a participant writes in three minutes, regardless of originality or accuracy. Which Core Concept is most directly undermined?",
        options: [
          "Responsibility — because timing participants for three minutes causes acute distress",
          "Measurement — because word count lacks construct validity for assessing creativity",
          "Perspective — because writing tasks ignore biological neuroimaging measurements",
          "Change — because three minutes is too brief to detect synaptic neuroplasticity",
        ],
        answerIndex: 1,
        hints: [
          "Ask whether the scoring rule actually captures the intended psychological construct.",
          "Construct validity sits directly under one specific Core Concept.",
        ],
        explanation:
          "Counting raw words measures typing or writing speed rather than original thinking, directly undermining **construct validity** under the Core Concept of **Measurement**. Although a broader theoretical Perspective might add depth, the immediate flaw is an invalid operationalisation.",
      },
      {
        id: "1-concepts-methodology-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "six-core-concepts",
        strategy: "Triangulating Biological, Cognitive & Sociocultural lenses",
        question:
          "A research team examines exam anxiety by combining salivary cortisol assays, cognitive threat-appraisal ratings, and interviews about family academic expectations. Which Core Concept is most clearly strengthened by this integration?",
        options: [
          "Perspective — integrating biological, cognitive, and sociocultural lenses avoids reductionism",
          "Bias — combining three measurements automatically removes all participant demand effects",
          "Causality — adding interviews turns a correlational survey into a randomised controlled trial",
          "Responsibility — collecting saliva samples eliminates the need for written informed consent",
        ],
        answerIndex: 0,
        hints: [
          "Notice the three distinct approaches combined here: hormones, appraisal, and family norms.",
          "Which Core Concept evaluates reductionism versus holistic multi-approach explanations?",
        ],
        explanation:
          "Combining physiological cortisol (Biological), threat appraisal (Cognitive), and family norms (Sociocultural) strengthens **Perspective** by countering biological or cognitive reductionism. Adding qualitative interviews enriches meaning but does not convert observational data into a causal RCT or erase demand characteristics.",
      },
      {
        id: "1-concepts-methodology-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "six-core-concepts",
        strategy: "Linking developmental tracking to Change",
        question:
          "A longitudinal study follows the same 180 bilingual children at ages 6, 10, and 14 to chart shifts in executive attention and gray-matter density. Which Core Concept is the central focus of this design?",
        options: [
          "Bias — tracking one cohort removes researcher confirmation bias completely",
          "Responsibility — repeated testing guarantees higher anonymity for young minors",
          "Causality — observing children over eight years manipulates bilingual exposure",
          "Change — measuring intra-individual cognitive and neural trajectories over time",
        ],
        answerIndex: 3,
        hints: [
          "Look at the repeated time points across ages 6, 10, and 14 in the same individuals.",
          "Which Core Concept examines neuroplasticity, lifespan growth, and behavioural transformation?",
        ],
        explanation:
          "Tracking the same cohort across ages 6, 10, and 14 directly investigates intra-individual cognitive and neuroplastic **Change** over time. Because bilingualism is not randomly assigned, this longitudinal design does not establish experimental Causality, nor does repeated contact guarantee anonymity.",
      },
      {
        id: "1-concepts-methodology-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "experiments-surveys",
        strategy: "True experiment vs quasi-experiment",
        question:
          "A psychologist compares reaction-time accuracy between 30 adults diagnosed with insomnia and 30 healthy sleepers on an identical computerised vigilance task. Why is this a quasi-experiment rather than a true experiment?",
        options: [
          "Because reaction time is measured in milliseconds instead of qualitative interviews",
          "Because a computerised laboratory task always lacks sufficient ecological validity",
          "Because insomnia status is a pre-existing trait that cannot be randomly allocated",
          "Because sample sizes below 100 participants cannot use statistical control groups",
        ],
        answerIndex: 2,
        hints: [
          "Check whether the researcher manipulated the independent variable or selected existing groups.",
          "Could the researcher ethically flip a coin to give healthy volunteers clinical insomnia?",
        ],
        explanation:
          "In a **quasi-experiment**, the independent variable (insomnia diagnosis vs healthy sleep) is a pre-existing participant characteristic that cannot be manipulated or **randomly allocated**. Consequently, confounding lifestyle or health differences cannot be ruled out as cleanly as in a true experiment.",
      },
      {
        id: "1-concepts-methodology-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "experiments-surveys",
        strategy: "Operationalisation check (observable + units)",
        question:
          "A student designs a Class Practical investigating whether short mindfulness breathing improves concentration. Which of the following is the best operationalised dependent variable (DV)?",
        options: [
          "Participants' overall level of mental sharpness and calm during afternoon lessons",
          "Number of target letters accurately circled in 90 seconds on a cancellation sheet",
          "Assigning half of the students to five minutes of guided breathing before testing",
          "Ensuring every participant sits at an identical quiet desk with standardised lighting",
        ],
        answerIndex: 1,
        hints: [
          "First distinguish the DV (what is measured) from the IV (what is manipulated) and extraneous controls.",
          "A valid operationalisation must specify a concrete, countable, replicable measurement.",
        ],
        explanation:
          "Counting target letters accurately circled in 90 seconds gives an objective, replicable, measurable **operationalised DV**. Mental sharpness is too vague, guided breathing describes the **IV**, and quiet desks describe **standardisation** of extraneous variables.",
      },
      {
        id: "1-concepts-methodology-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "experiments-surveys",
        strategy: "Match experimental control to specific threat",
        question:
          "In a repeated-measures memory experiment comparing quiet vs café background noise, half of the participants complete Quiet → Noise while the other half complete Noise → Quiet. What specific threat does this counterbalancing control?",
        options: [
          "Sampling bias caused by recruiting students from only one international school",
          "Participant variables such as baseline differences in verbal intelligence scores",
          "Experimenter expectancy effects arising from knowing the study's main prediction",
          "Order effects such as practice gains or mental fatigue across consecutive trials",
        ],
        answerIndex: 3,
        hints: [
          "Notice that every participant experiences both conditions, so baseline differences are already balanced.",
          "What changes simply because a condition comes second rather than first?",
        ],
        explanation:
          "AB / BA **counterbalancing** spreads **order effects** (practice, familiarity, or fatigue) evenly across both conditions so that trial position does not systematically favour one level of the IV. Participant variables are already removed by using the same individuals in both conditions.",
      },
      {
        id: "1-concepts-methodology-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "experiments-surveys",
        strategy: "Random sampling vs random allocation",
        question:
          "How does random allocation differ from random sampling in experimental psychology?",
        options: [
          "Random allocation assigns recruited participants to conditions; random sampling selects from a population",
          "Random allocation selects participants from a population; random sampling assigns them to IV levels",
          "Random allocation removes all ecological validity issues; random sampling removes all order effects",
          "Random allocation is restricted to qualitative interviews; random sampling applies only to lab trials",
        ],
        answerIndex: 0,
        hints: [
          "Think chronologically: first you recruit a *sample* from the population, then you *allocate* them into groups.",
          "Link sampling to population validity (Bias) and allocation to internal validity (Causality).",
        ],
        explanation:
          "**Random sampling** determines *who enters the study* from the target population (reducing sampling Bias and boosting population validity), whereas **random allocation** assigns already-recruited participants to experimental or control conditions (balancing participant variables to strengthen internal validity and Causality).",
      },
      {
        id: "1-concepts-methodology-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "experiments-surveys",
        strategy: "Single-blind vs double-blind control",
        question:
          "In a placebo-controlled caffeine trial, capsules are coded by an external pharmacist so neither the student participants nor the researcher administering the recall test know who received caffeine. Which dual threat is minimised?",
        options: [
          "Order effects from repeated trials and cultural bias in word-list translation",
          "Sampling bias from convenience recruitment and low survey response rates",
          "Participant demand characteristics and researcher expectancy bias during testing",
          "Hawthorne reactivity in public venues and breaches of participant anonymity",
        ],
        answerIndex: 2,
        hints: [
          "Two groups are kept 'blind': the participants and the testing researcher.",
          "Match each blind group to the psychological bias it could introduce.",
        ],
        explanation:
          "A **double-blind** protocol prevents participants from altering behaviour due to placebo expectations or **demand characteristics**, while simultaneously preventing the researcher from subtly cueing participants or biasing scoring via **researcher expectancy bias**.",
      },
      {
        id: "1-concepts-methodology-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "experiments-surveys",
        strategy: "Spotting asymmetric carryover in experimental designs",
        question:
          "A teacher wants to test whether teaching the 'method of loci' mnemonic improves recall compared with uninstructed rehearsal. Why would a repeated-measures design fail even with AB / BA counterbalancing?",
        options: [
          "Because repeated-measures designs always require double the total number of volunteers",
          "Because once participants learn the mnemonic strategy they cannot unlearn it in the control trial",
          "Because counterbalancing can only be applied when researchers use quasi-experimental groups",
          "Because memory tasks cannot be operationalised quantitatively in within-subject experiments",
        ],
        answerIndex: 1,
        hints: [
          "Imagine being in the BA group: you are taught the memory palace technique first, then told 'ignore it' on trial 2.",
          "Can counterbalancing erase a permanent skill learned in one condition?",
        ],
        explanation:
          "Teaching a durable cognitive strategy creates an **asymmetric carryover effect**: participants assigned to Mnemonic → Control cannot 'unlearn' the technique during the control trial. Therefore, an **independent-measures** or **matched-pairs** design is essential.",
      },
      {
        id: "1-concepts-methodology-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "experiments-surveys",
        strategy: "Natural experiment vs field & lab experiments",
        question:
          "Researchers measure adolescent classroom attention before and after a national ministry unexpectedly bans smartphones in all secondary schools. Which experimental type best describes this investigation?",
        options: [
          "Natural experiment — the IV shift occurs externally without researcher manipulation",
          "True laboratory experiment — the researchers randomly allocated schools to phone bans",
          "Controlled field experiment — researchers directly manipulated phone rules on campus",
          "Matched-pairs experiment — students were pre-tested and split into equal attention pairs",
        ],
        answerIndex: 0,
        hints: [
          "Check *who* triggered the change in the independent variable: the researcher or an external authority.",
          "In a field experiment, the researcher still actively manipulates the IV themselves.",
        ],
        explanation:
          "Because the smartphone ban was enacted by an external ministry rather than manipulated by the researchers, this is a **natural experiment**. It offers high ecological validity, but lacks random allocation and tight control over concurrent school changes.",
      },
      {
        id: "1-concepts-methodology-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "experiments-surveys",
        strategy: "Weighing matched-pairs strengths & limits",
        question:
          "Why might a psychologist choose a matched-pairs design rather than an independent-measures design for a small Class Practical (N = 20) testing spaced vs massed revision?",
        options: [
          "It completely eliminates every possible individual difference between both experimental groups",
          "It allows researchers to skip random allocation when splitting each matched pair into groups",
          "It reduces key baseline ability confounds in small samples while avoiding trial order effects",
          "It halves the total number of participants required compared with an independent-measures trial",
        ],
        answerIndex: 2,
        hints: [
          "In a small sample (N = 20), random allocation alone can still leave one group with higher baseline scores by chance.",
          "Remember that matched-pairs still uses two separate people per pair, and cannot match *every* trait.",
        ],
        explanation:
          "In small samples, simple random allocation can leave uneven baseline memory across groups; **matched-pairs** pre-tests participants on a critical confound (e.g. baseline recall), pairs similar scorers, and randomly assigns each member of the pair to opposite conditions — reducing participant variables without introducing repeated-measures order effects. However, it still requires 20 distinct people and cannot match every trait.",
      },
      {
        id: "1-concepts-methodology-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "six-core-concepts",
        strategy: "HL Measurement: statistical vs practical significance",
        question:
          "A digital-learning experiment with N = 4,800 students reports that a paid app improved quiz scores by 0.4 points out of 100, with {{p = 0.018}} and Cohen's {{d = 0.06}}. Which evaluation best applies the Core Concept of Measurement?",
        options: [
          "Because p < 0.05, the app is proven to deliver a large, clinically decisive learning boost",
          "Because N = 4,800 is very large, the p-value proves the measurement has zero reliability",
          "Because Cohen's d = 0.06 exceeds 0.05, the finding demonstrates a strong practical effect",
          "Although statistically significant, the tiny effect size shows negligible practical importance",
        ],
        answerIndex: 3,
        hints: [
          "What happens to p-values when sample size N becomes very large?",
          "Recall Cohen's d benchmarks: 0.2 = small, 0.5 = medium, 0.8 = large — how big is 0.06?",
        ],
        explanation:
          "With a huge sample (N = 4,800), even a trivial 0.4-point gain can achieve statistical significance ({{p < 0.05}}). Checking **effect size** (Cohen's {{d = 0.06}}, far below the 0.20 small threshold) reveals minimal **practical significance** — a crucial HL **Measurement** distinction.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Class Practicals — Surveys, Interviews & Observations
  // answerIndex sequence: [1, 3, 0, 2, 1, 0, 3, 2, 0, 1, 3, 2, 1, 3, 0]
  // ===========================================================================
  {
    id: "1-concepts-methodology-m2",
    title: "MCQ Paper 2 — Class Practicals: Surveys, Interviews & Observations",
    level: "SL",
    questions: [
      {
        id: "1-concepts-methodology-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "experiments-surveys",
        strategy: "Diagnosing questionnaire wording errors",
        question:
          "A student questionnaire includes the 5-point Likert statement: 'School revision workshops are well organised and reduce my pre-exam anxiety.' What specific design flaw undermines this item's Measurement validity?",
        options: [
          "It uses an open-ended qualitative format that prevents quantitative tallying",
          "It is double-barrelled because it combines two distinct constructs in one rating",
          "It guarantees social desirability bias by forcing participants to write their name",
          "It creates order effects because respondents must complete two separate surveys",
        ],
        answerIndex: 1,
        hints: [
          "Count how many separate judgements a respondent is asked to make in one single sentence.",
          "What if a workshop is very well organised yet still leaves a student feeling anxious?",
        ],
        explanation:
          "Asking about *organisation* AND *anxiety reduction* in a single Likert item makes it **double-barrelled**. A respondent who agrees with one half and disagrees with the other cannot record an accurate answer, compromising construct validity (**Measurement**).",
      },
      {
        id: "1-concepts-methodology-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "experiments-surveys",
        strategy: "Countering response-set bias on Likert scales",
        question:
          "Why do psychologists include both positively worded and reverse-scored statements within the same Likert-scale questionnaire?",
        options: [
          "To shorten completion time so non-response rates drop to zero automatically",
          "To convert quantitative attitude ratings into deductive qualitative themes",
          "To eliminate the need for stratified or random sampling of the population",
          "To detect and reduce acquiescence bias where respondents mechanically agree",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens if a tired participant ticks '4 — Agree' straight down the page.",
          "Which survey bias is nicknamed 'yea-saying'?",
        ],
        explanation:
          "Mixing positively framed and **reverse-scored** items disrupts **acquiescence bias** ('yea-saying'), where respondents habitually select Agree regardless of content, thereby protecting **Measurement** validity and **Bias** control.",
      },
      {
        id: "1-concepts-methodology-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "experiments-surveys",
        strategy: "Proportional stratified subsample formula",
        question:
          "A sixth-form college has 500 students in total, of whom 125 are in Year 13. A researcher draws a proportional stratified sample of 80 students for a sleep survey. How many Year 13 students should be selected?",
        options: [
          "20 Year 13 students",
          "25 Year 13 students",
          "32 Year 13 students",
          "40 Year 13 students",
        ],
        answerIndex: 0,
        hints: [
          "First find the proportion of Year 13 students in the whole college: 125 ÷ 500.",
          "Multiply that fraction by the target sample size of 80.",
        ],
        explanation:
          "Year 13 makes up {{125 / 500 = 0.25}} (25%) of the population. Multiplying by the sample size gives {{0.25 * 80 = 20}} Year 13 students. Choosing 25 confuses the percentage (25%) with the count of students.",
      },
      {
        id: "1-concepts-methodology-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "experiments-surveys",
        strategy: "Matching sampling methods to research contexts",
        question:
          "To study burnout among freelance night-shift paramedics — a group with no public directory — a researcher interviews three initial volunteers who then refer colleagues from their networks. Which sampling technique is used?",
        options: [
          "Simple random sampling from a complete national register",
          "Proportional stratified sampling across hospital departments",
          "Snowball sampling relying on participant peer referrals",
          "Systematic interval sampling selecting every tenth shift",
        ],
        answerIndex: 2,
        hints: [
          "Notice there is no complete sampling frame, so early participants recruit the next wave.",
          "Think of the metaphor of a sample growing as it rolls through a social network.",
        ],
        explanation:
          "**Snowball sampling** uses initial participants to recruit further contacts from hard-to-reach populations lacking a sampling frame. While practical, it introduces network-clustering **Bias** because referred peers often share similar attitudes.",
      },
      {
        id: "1-concepts-methodology-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "experiments-surveys",
        strategy: "Survey response rate formula",
        question:
          "A Class Practical team distributes 120 anonymous wellbeing questionnaires across Year 12 tutor groups and receives 90 completed forms back. What is the survey's percentage response rate?",
        options: [
          "67%",
          "75%",
          "80%",
          "90%",
        ],
        answerIndex: 1,
        hints: [
          "Use Response Rate (%) = (Completed ÷ Distributed) × 100.",
          "Simplify 90 ÷ 120 as a fraction before multiplying by 100.",
        ],
        explanation:
          "{{(90 / 120) * 100 = (3 / 4) * 100 = 75%}}. Reporting 90% confuses the raw number of completed returns with a percentage, while 25% would represent the non-response rate.",
      },
      {
        id: "1-concepts-methodology-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "interviews-observations",
        strategy: "Semi-structured vs structured interviews",
        question:
          "Why is a semi-structured interview generally preferred over a strictly structured interview when exploring students' lived experiences of cultural transition?",
        options: [
          "It keeps consistent core topics while permitting flexible probes into unexpected meanings",
          "It guarantees complete anonymity because the researcher never meets the interviewee",
          "It eliminates interviewer effects by banning any verbal interaction during data collection",
          "It generates exact causal p-values without requiring verbatim transcription or coding",
        ],
        answerIndex: 0,
        hints: [
          "Contrast a rigid fixed script with a core guide plus follow-up questions.",
          "Think about how a researcher follows up an insightful personal comment.",
        ],
        explanation:
          "**Semi-structured interviews** combine a core schedule (ensuring comparability across participants) with flexible follow-up probes that capture rich, unexpected personal meanings (**Perspective**). Face-to-face interviews cannot be anonymous and do not yield causal p-values.",
      },
      {
        id: "1-concepts-methodology-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "interviews-observations",
        strategy: "Focus group Bias & Responsibility limits",
        question:
          "A researcher uses a 10-student focus group to investigate personal experiences of cyberbullying within the same year group. What combined Bias and Responsibility limitation is most acute?",
        options: [
          "Focus groups cannot produce verbal transcripts suitable for inductive thematic analysis",
          "Focus groups always take longer to collect initial responses than ten solo interviews",
          "Focus groups force participants onto closed Likert scales with low ecological validity",
          "Peer conformity and dominant voices distort disclosure while compromising confidentiality",
        ],
        answerIndex: 3,
        hints: [
          "Imagine speaking candidly about cyberbullying in front of nine classmates.",
          "Consider both who dominates the conversation and whether the researcher can enforce classmate secrecy.",
        ],
        explanation:
          "In a **focus group** on a sensitive topic, vocal peers and social desirability pressure can silence minority experiences (**Bias**), and the researcher cannot guarantee that fellow students will keep disclosures private afterward (**Responsibility / confidentiality**).",
      },
      {
        id: "1-concepts-methodology-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "interviews-observations",
        strategy: "Inductive vs deductive thematic analysis",
        question:
          "How does inductive thematic analysis differ from deductive thematic analysis when coding interview transcripts?",
        options: [
          "Inductive analysis counts word frequencies statistically; deductive analysis uses audio recordings",
          "Inductive analysis tests an existing model top-down; deductive analysis lets themes emerge freely",
          "Inductive analysis builds themes bottom-up from raw data; deductive applies pre-existing theory",
          "Inductive analysis requires covert observation; deductive analysis applies only to focus groups",
        ],
        answerIndex: 2,
        hints: [
          "Pair 'inductive' with *data-driven / bottom-up* and 'deductive' with *theory-driven / top-down*.",
          "Watch out for the reversed definition distractor!",
        ],
        explanation:
          "**Inductive thematic analysis** develops codes and themes bottom-up directly from participants' own transcripts without imposing a prior checklist, whereas **deductive thematic analysis** codes transcripts top-down using categories drawn from an established theory.",
      },
      {
        id: "1-concepts-methodology-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "interviews-observations",
        strategy: "Qualitative credibility checks",
        question:
          "After drafting five themes from semi-structured interviews with novice teachers, a researcher emails each interviewee a summary of their interpreted themes to check whether the summary accurately reflects their meaning. What procedure is this?",
        options: [
          "Member checking to strengthen qualitative credibility and limit researcher bias",
          "Counterbalancing to neutralise fatigue effects across sequential interview items",
          "Debriefing to repair severe psychological harm caused by covert deception",
          "Random allocation to equate teacher stress levels across experimental groups",
        ],
        answerIndex: 0,
        hints: [
          "The participants ('members' of the study) are *checking* the researcher's interpretation.",
          "Link this procedure to qualitative **credibility**.",
        ],
        explanation:
          "**Member checking** (participant validation) invites interviewees to review transcripts or draft themes so they can confirm or challenge the researcher's interpretation, directly enhancing qualitative **credibility** and curbing confirmation **Bias**.",
      },
      {
        id: "1-concepts-methodology-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "interviews-observations",
        strategy: "Classify observations across all 3 axes",
        question:
          "With prior school permission and visible researcher badges, two students sit quietly at the corner of the school library — without joining any study group — recording phone-checking habits on a tally sheet. How should this observation be classified?",
        options: [
          "Controlled, covert, participant observation",
          "Naturalistic, overt, non-participant observation",
          "Naturalistic, covert, non-participant observation",
          "Controlled, overt, participant observation",
        ],
        answerIndex: 1,
        hints: [
          "Check each axis independently: everyday library (setting), visible badges & permission (awareness), sitting quietly outside groups (role).",
          "Combine the three labels cleanly.",
        ],
        explanation:
          "The real school library makes it **naturalistic**, visible badges and prior permission make it **overt**, and sitting apart without joining study tables makes it **non-participant**.",
      },
      {
        id: "1-concepts-methodology-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "interviews-observations",
        strategy: "Inter-observer agreement (%) calculation",
        question:
          "Two independent coders score 60 thirty-second video intervals of preschool sharing behaviour using the same coding schedule and agree on 51 intervals. What is their percentage inter-observer agreement (IOA)?",
        options: [
          "75%",
          "80%",
          "82%",
          "85%",
        ],
        answerIndex: 3,
        hints: [
          "Divide agreements by total intervals and multiply by 100: (51 ÷ 60) × 100.",
          "Notice 51 ÷ 60 simplifies by dividing top and bottom by 3 to 17 ÷ 20.",
        ],
        explanation:
          "{{IOA (%) = (51 / 60) * 100 = (17 / 20) * 100 = 85%}}, exceeding the conventional 80% benchmark for strong inter-observer reliability (**Measurement**). A common error is subtracting 9 from 100 to guess 91% instead of dividing by 60.",
      },
      {
        id: "1-concepts-methodology-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "interviews-observations",
        strategy: "Event sampling vs time sampling",
        question:
          "During a 20-minute playground observation, an observer records a checkmark every single time any child offers to share a toy, regardless of when it occurs. Which observational sampling rule is being used?",
        options: [
          "Time sampling — because the overall observation lasts 20 minutes",
          "Stratified sampling — because every child has an equal chance of selection",
          "Event sampling — because every discrete instance of the target act is tallied",
          "Snowball sampling — because one sharing child triggers another child to share",
        ],
        answerIndex: 2,
        hints: [
          "Does the observer look up only at fixed intervals (e.g. every 30 seconds), or tally every occurrence continuously?",
          "Discrete, infrequent behaviours are best captured by counting each *event*.",
        ],
        explanation:
          "**Event sampling** records every occurrence of a defined discrete behaviour throughout the observation window, making it ideal for infrequent acts like spontaneous sharing that **time sampling** might miss between checkpoints.",
      },
      {
        id: "1-concepts-methodology-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "interviews-observations",
        strategy: "Diagnosing reactivity in overt observations",
        question:
          "In an overt classroom observation of mobile-phone distraction, students keep their phones locked in their bags for the entire hour even though teachers normally report frequent checking. Which phenomenon best explains this discrepancy?",
        options: [
          "Experimenter counterbalancing — trial sequence improved student self-discipline",
          "Hawthorne reactivity — knowing they are watched altered natural student behaviour",
          "Acquiescence bias — students agreed uniformly with closed Likert survey items",
          "Selective attrition — distracted students dropped out before the observation began",
        ],
        answerIndex: 1,
        hints: [
          "Compare how people behave when unobserved versus when an observer sits visibly in the room.",
          "Recall the classic workplace-study name for observer reactivity.",
        ],
        explanation:
          "The **Hawthorne (reactivity) effect** occurs when participants modify their behaviour simply because they know they are being observed, lowering ecological validity (**Measurement** & **Bias**) in overt observations.",
      },
      {
        id: "1-concepts-methodology-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "interviews-observations",
        strategy: "Methodological triangulation logic",
        question:
          "To study study-group collaboration, a team pairs a structured non-participant observation with follow-up semi-structured interviews and an anonymous Likert survey. What is the main scientific value of this methodological triangulation?",
        options: [
          "It guarantees causal proof by converting observational notes into a true lab experiment",
          "It removes the ethical requirement to obtain informed consent from student volunteers",
          "It allows researchers to discard any interview quotes that contradict the survey mean",
          "It cross-checks enacted behaviour against lived explanations to strengthen credibility",
        ],
        answerIndex: 3,
        hints: [
          "Ask what each method reveals that the others cannot capture alone.",
          "Triangulation does not magically create Causality or let researchers delete inconvenient data.",
        ],
        explanation:
          "**Methodological triangulation** combines complementary lenses — observable action (observation), subjective reasoning (interviews), and scalable patterns (survey) — so each method offsets the others' biases, boosting overall **credibility** and **Measurement** validity.",
      },
      {
        id: "1-concepts-methodology-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "interviews-observations",
        strategy: "HL Qualitative Rigour: reflexivity",
        question:
          "While analysing interviews on exam stress, a researcher keeps a personal research journal documenting how their own background as a former top-achieving IB student might steer them toward noticing perfectionism over financial stress. Which qualitative rigour standard does this directly uphold?",
        options: [
          "Reflexivity and confirmability — exposing how researcher assumptions shape interpretation",
          "Test–retest reliability — verifying that numeric anxiety scores stay constant over weeks",
          "Internal causal validity — isolating perfectionism as the manipulated independent variable",
          "Population generalisability — ensuring findings statistically represent every IB school globally",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the researcher scrutinising their *own* personal lens and interpretive assumptions.",
          "Which qualitative trustworthiness criterion pairs directly with a reflexive journal?",
        ],
        explanation:
          "Personal and epistemological **reflexivity** makes the researcher's assumptions transparent so readers can audit how interpretations arose from the data rather than unexamined confirmation **Bias**, directly supporting qualitative **confirmability**.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Ethics, Paper 2 Unseen-Study Evaluation & HL Synthesis
  // answerIndex sequence: [3, 1, 2, 0, 2, 3, 1, 0, 1, 2, 0, 3, 2, 0, 1]
  // ===========================================================================
  {
    id: "1-concepts-methodology-m3",
    title: "MCQ Paper 3 — Ethics, Paper 2 Evaluation & HL Methodological Synthesis",
    level: "SL",
    questions: [
      {
        id: "1-concepts-methodology-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Anonymity vs confidentiality distinction",
        question:
          "A student conducts face-to-face interviews with six classmates and replaces their real names with 'Participant A–F' in the report. Which ethical safeguard has the student actually achieved?",
        options: [
          "Complete anonymity — because no human being can ever connect quotes to a student",
          "Informed assent — because pseudonyms replace the need for written permission slips",
          "Debriefing — because anonymised transcripts automatically restore participants' mood",
          "Confidentiality — because the interviewer knows identities but protects them from others",
        ],
        answerIndex: 3,
        hints: [
          "Does the interviewer themselves still know who said what during the face-to-face conversation?",
          "Recall the exact boundary between anonymity and confidentiality.",
        ],
        explanation:
          "Because the researcher saw and spoke with the interviewees, the data are **confidential** (identities are protected from outside readers via pseudonyms and secure storage), **not anonymous** (where not even the researcher can link data to an individual).",
      },
      {
        id: "1-concepts-methodology-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Vulnerable population consent protocol",
        question:
          "A researcher plans an overt memory game with 13-year-old middle-school pupils. Which consent procedure satisfies IB ethical Responsibility?",
        options: [
          "Collecting verbal approval solely from the school principal without informing families",
          "Obtaining written parental/guardian informed consent alongside the child's own assent",
          "Running the task covertly first and emailing parents a debriefing letter afterward",
          "Having the 13-year-olds sign an adult legal waiver promising not to withdraw early",
        ],
        answerIndex: 1,
        hints: [
          "Children under 16 are classed as a vulnerable population with two consent requirements.",
          "Both legal guardians AND the young person themselves must agree willingly.",
        ],
        explanation:
          "Ethical **Responsibility** with minors requires written **parental/guardian informed consent** combined with age-appropriate **assent** from the child, preserving the child's right to decline or withdraw at any moment.",
      },
      {
        id: "1-concepts-methodology-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Justified deception criteria",
        question:
          "Under IB, APA, and BPS ethical guidelines, when is mild deception in a psychological experiment considered ethically justifiable?",
        options: [
          "Whenever revealing the true aim would require extra time to explain during recruitment",
          "Whenever the study involves a famous classic paradigm previously run before 1975",
          "Only when scientifically essential, minimal risk, and followed by thorough debriefing",
          "Only when participants are university psychology students earning compulsory credits",
        ],
        answerIndex: 2,
        hints: [
          "Three safeguards must hold simultaneously: scientific necessity, harm threshold, and post-study action.",
          "Does prestige of a classic study or convenience ever excuse deception?",
        ],
        explanation:
          "Deception is acceptable **only** when non-deceptive alternatives would invalidate the scientific aim (e.g. preventing severe demand characteristics), predicted distress does not exceed everyday life, and participants receive an immediate, thorough **debriefing** with the right to withdraw their data.",
      },
      {
        id: "1-concepts-methodology-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Limits of post-study debriefing",
        question:
          "An unseen experiment tells anxious undergraduates they scored in the bottom 2% of an intelligence test to induce acute shame, then reassures them 15 minutes later during debriefing. Why does this still breach ethical Responsibility?",
        options: [
          "Debriefing cannot retroactively justify inflicting foreseeable acute psychological harm",
          "Debriefing is only valid when delivered via email at least one week after testing",
          "Undergraduates cannot legally give informed consent to cognitive testing procedures",
          "Intelligence tasks cannot be scored quantitatively in experimental psychology trials",
        ],
        answerIndex: 0,
        hints: [
          "Ask whether apologising afterward erases intentional acute distress caused during the study.",
          "Check the principle of protection from psychological harm.",
        ],
        explanation:
          "**Protection from psychological harm** prohibits exposing participants — especially already anxious individuals — to foreseeable acute humiliation or distress. While **debriefing** is mandatory after mild deception, it never grants a licence to inflict harm.",
      },
      {
        id: "1-concepts-methodology-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Russell & Burch's 3Rs — Replacement",
        question:
          "Instead of conducting invasive brain-lesion surgery on lab rats to map memory consolidation, a university lab uses non-invasive fMRI imaging with consenting human volunteers and computational neural models. Which of the 3Rs is demonstrated?",
        options: [
          "Reduction — cutting the statistical sample size of an animal cohort",
          "Refinement — upgrading cage enrichment and post-surgical pain relief",
          "Replacement — substituting non-animal methodologies for animal testing",
          "Replication — repeating an earlier animal protocol with new observers",
        ],
        answerIndex: 2,
        hints: [
          "Notice that zero animals are used in the redesigned investigation.",
          "Match the three Rs: Replacement (no animals), Reduction (fewer animals), Refinement (better welfare).",
        ],
        explanation:
          "Moving away from animal testing altogether by adopting human fMRI and computer simulations exemplifies **Replacement** in Russell & Burch's 3Rs framework of animal ethical **Responsibility**.",
      },
      {
        id: "1-concepts-methodology-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Russell & Burch's 3Rs — Refinement",
        question:
          "A behavioural neuroscience facility upgrades rodent housing to social groups with nesting materials, introduces gentle tunnel-handling, and uses targeted analgesia to minimise discomfort. Which of the 3Rs do these measures illustrate?",
        options: [
          "Replacement — eliminating all biological animal subjects from laboratory study",
          "Reduction — lowering the total number of rodents recruited via power analysis",
          "Reflexivity — documenting researchers' personal assumptions in an audit journal",
          "Refinement — modifying husbandry and procedures to minimise suffering and stress",
        ],
        answerIndex: 3,
        hints: [
          "Animals are still studied, and sample size wasn't mentioned — what *did* improve?",
          "Which 'R' focuses on reducing pain, distress, and improving animal welfare?",
        ],
        explanation:
          "Enriched social housing, low-stress handling, and analgesia directly improve animal welfare and minimise suffering — the exact definition of **Refinement**.",
      },
      {
        id: "1-concepts-methodology-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Russell & Burch's 3Rs — Reduction",
        question:
          "By running a statistical power analysis and reusing baseline neuroimaging data from an open repository, researchers lower their required macaque sample from 40 to 16 without weakening statistical validity. Which of the 3Rs is achieved?",
        options: [
          "Replacement — using synthetic cell cultures instead of living primates",
          "Reduction — minimising animal numbers while preserving scientific rigour",
          "Refinement — administering soothing music during scanner acclimatisation",
          "Randomisation — allocating primates evenly into treatment and control cages",
        ],
        answerIndex: 1,
        hints: [
          "Track the exact change: 40 animals down to 16 animals through power calculation and shared data.",
          "Which of the 3Rs minimises cohort size without sacrificing valid conclusions?",
        ],
        explanation:
          "**Reduction** minimises the number of animals used in research through statistical power planning, shared open datasets, or efficient repeated-measures protocols without compromising valid conclusions.",
      },
      {
        id: "1-concepts-methodology-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Power dynamics & coercion in informed consent",
        question:
          "A corporate manager distributes a workplace-burnout survey during a mandatory staff meeting and asks employees to hand completed forms directly back to her desk. Which ethical Responsibility issue is most severely compromised?",
        options: [
          "Voluntary informed consent and confidentiality due to workplace power imbalance",
          "Animal welfare refinement because employees were tested in an artificial lab room",
          "Inter-observer reliability because only one manager collected the survey sheets",
          "Asymmetric carryover because staff completed two experimental conditions in sequence",
        ],
        answerIndex: 0,
        hints: [
          "Think about whether an employee feels genuinely free to say 'no' to their direct boss.",
          "Handing forms straight to the manager's desk also compromises privacy.",
        ],
        explanation:
          "When an authority figure (manager, teacher, clinician) directly recruits subordinates and collects responses personally, **power imbalance** creates subtle **coercion** — undermining voluntary **informed consent**, **right to withdraw**, and **confidentiality**.",
      },
      {
        id: "1-concepts-methodology-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Weighing ecological validity against privacy rights",
        question:
          "To eliminate Hawthorne reactivity, a student proposes hiding an audio recorder inside a private university dormitory lounge to capture authentic peer gossip without informing residents. Why must an ethics panel reject this design?",
        options: [
          "Because audio recordings cannot be analysed using inductive thematic coding",
          "Because covert recording in a private space violates consent and privacy rights",
          "Because peer gossip lacks sufficient construct validity for sociocultural study",
          "Because university lounges always introduce severe order effects across trials",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish public behaviour where people expect to be observed from private residential spaces.",
          "Does lowering reactivity justify secret recording in someone's home/dorm?",
        ],
        explanation:
          "Covert observation may only be considered in genuinely public settings where people expect to be seen; secretly recording private conversations in a residential lounge severely breaches **informed consent**, **privacy/confidentiality**, and ethical **Responsibility**.",
      },
      {
        id: "1-concepts-methodology-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Top-band Paper 2 Section B evaluation structure",
        question:
          "Which paragraph structure best meets top-band criteria in an FA2027 Paper 2 Section B unseen-study evaluation?",
        options: [
          "Memorising a fixed list of five textbook criticisms regardless of the stimulus study",
          "Summarising every sentence of the stimulus without naming any Core Concepts or flaws",
          "Naming a Core Concept, quoting stimulus specifics, tracing impact, and weighing a fix",
          "Arguing that the unseen study is completely worthless because sample size is below 500",
        ],
        answerIndex: 2,
        hints: [
          "Recall the C–E–I–M blueprint for Paper 2 Section B.",
          "Examiners reward grounded, concept-driven analysis rather than generic memorised filler.",
        ],
        explanation:
          "Top-band Paper 2 evaluations use the **C–E–I–M** pattern: explicitly naming a **Core Concept**, anchoring to **Evidence** from the unseen stimulus, tracing its **Impact** on validity/ethics, and weighing a realistic **Modification** along with its methodological trade-off.",
      },
      {
        id: "1-concepts-methodology-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "six-core-concepts",
        strategy: "HL Perspective: emic vs imposed etic",
        question:
          "A research group administers an unchanged Western individualism-based coping checklist to an Indigenous Amazonian community and labels low scores as 'poor coping skills'. Which HL conceptual flaw is illustrated?",
        options: [
          "Imposed etic Perspective — assuming Western constructs apply universally across cultures",
          "Emic insider reflexivity — tailoring local constructs too narrowly to a single village",
          "Differential attrition — losing more participants from the control arm than treatment arm",
          "Acquiescence bias — respondents agreeing with every positively phrased Likert item",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish studying a culture from within (*emic*) versus exporting an outside standard as universal (*imposed etic*).",
          "Notice the ethnocentric labelling of unfamiliar coping styles as 'poor'.",
        ],
        explanation:
          "Exporting a Western-normed checklist as though it were culture-free commits an **imposed etic** fallacy under **Perspective** and **Bias**, distorting **Measurement** validity by misreading culturally adaptive communal coping as deficiency.",
      },
      {
        id: "1-concepts-methodology-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "interviews-observations",
        strategy: "HL Qualitative Trustworthiness criteria",
        question:
          "In a qualitative interview study of teenage esports athletes, the author provides rich contextual detail about the academy schedule, coaching hierarchy, and cultural norms so readers can judge whether findings apply to other youth clubs. Which trustworthiness criterion is supported?",
        options: [
          "Internal causal validity via random allocation",
          "Inter-observer agreement above the 80% threshold",
          "Statistical generalisability via random population sampling",
          "Transferability achieved through detailed thick description",
        ],
        answerIndex: 3,
        hints: [
          "Qualitative research does not seek statistical population generalisation — what is its qualitative equivalent?",
          "Pair the phrase 'thick description' with its matching trustworthiness criterion.",
        ],
        explanation:
          "**Thick description** — documenting rich contextual details of setting, culture, and participants — allows readers to decide whether qualitative insights apply to comparable contexts, establishing **transferability**.",
      },
      {
        id: "1-concepts-methodology-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "experiments-surveys",
        strategy: "Cross-cultural survey equivalence (Measurement)",
        question:
          "Before running a cross-cultural anxiety survey in Singapore, Madrid, and Seoul, a team translates the English items into Mandarin, Spanish, and Korean, then hires independent bilinguals to translate each version back into English. What is the main purpose of this back-translation?",
        options: [
          "To eliminate social desirability bias across all three participating nations",
          "To satisfy informed consent requirements without translating consent forms",
          "To verify semantic equivalence and protect construct validity across languages",
          "To turn a cross-sectional survey into a causal double-blind laboratory trial",
        ],
        answerIndex: 2,
        hints: [
          "Think about idioms like 'feeling blue' or 'on edge' — what happens if translated literally?",
          "Back-translation protects **Measurement** equivalence across cultural versions.",
        ],
        explanation:
          "**Back-translation** exposes subtle shifts in emotional nuance or idiomatic meaning across languages, protecting cross-cultural **construct validity** (**Measurement**) and reducing linguistic **Bias**.",
      },
      {
        id: "1-concepts-methodology-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "ethics-unseen-study-paper2",
        strategy: "Differential attrition & internal validity",
        question:
          "In an 8-week mindfulness intervention trial, the mindfulness group starts with 40 volunteers and finishes with 28 (30% attrition), while the control group starts with 40 and finishes with 38 (5% attrition). Why does this differential attrition threaten Causality?",
        options: [
          "If stressed or sceptical volunteers selectively quit the mindfulness arm, remaining groups are no longer equivalent",
          "Because ethical guidelines forbid participants from exercising their right to withdraw during 8-week trials",
          "Because losing 12 participants automatically guarantees that inter-observer reliability falls below 50%",
          "Because any study lasting eight weeks must use covert naturalistic observation instead of an experiment",
        ],
        answerIndex: 0,
        hints: [
          "Random allocation equated the two groups at Week 1 — are the two *finishing* groups still equivalent at Week 8?",
          "Ask *who* is most likely to quit a demanding daily mindfulness routine.",
        ],
        explanation:
          "**Differential attrition** (30% vs 5% dropout) breaks the baseline equivalence created by random allocation: if the most stressed or unmotivated participants quit the intervention arm, higher finishing scores could reflect survivor **Bias** rather than true treatment **Causality**.",
      },
      {
        id: "1-concepts-methodology-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "six-core-concepts",
        strategy: "HL Culture & Measurement: ecological fallacy",
        question:
          "A national survey scores Country X high on collectivism. A student then concludes that any individual teenager born in Country X must automatically prefer group study over solo revision. Which reasoning error has the student committed?",
        options: [
          "Confirmation bias — ignoring positive correlations in a scatterplot",
          "Ecological fallacy — inferring an individual's traits directly from a group average",
          "Hawthorne reactivity — assuming teenagers perform differently when observed",
          "Acquiescence bias — assuming respondents agree with negatively worded statements",
        ],
        answerIndex: 1,
        hints: [
          "Notice the jump from a *country-level* aggregate score to a *single individual*.",
          "Recall the methodological fallacy warning against stereotyping individuals from cultural averages.",
        ],
        explanation:
          "The **ecological fallacy** occurs when group-level cultural averages (e.g. national collectivism scores) are erroneously applied to predict a specific individual's traits or behaviour — ignoring wide within-culture variation (**Bias** & **Perspective**).",
      },
    ],
  },
];
