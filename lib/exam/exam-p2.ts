import type { ExamPaper } from "../types.ts";

const SVG_STUDY_S_SAT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 265" role="img" aria-label="Grouped bar chart comparing pre-intervention and post-intervention Sustained Attention Task mean scores with plus or minus one standard deviation error bars for School A and School B">
  <rect x="0" y="0" width="560" height="265" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Study S: Sustained Attention Task (SAT) Mean Scores (±1 SD)</text>
  <line x1="70" y1="205" x2="525" y2="205" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="55" x2="70" y2="205" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="175" x2="525" y2="175" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="145" x2="525" y2="145" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="115" x2="525" y2="115" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="85" x2="525" y2="85" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="55" x2="525" y2="55" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <text x="62" y="209" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">0</text>
  <text x="62" y="179" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">10</text>
  <text x="62" y="149" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">20</text>
  <text x="62" y="119" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">30</text>
  <text x="62" y="89" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">40</text>
  <text x="62" y="59" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">50</text>
  <text x="24" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 24 130)">SAT Score (out of 50)</text>
  <!-- School A: Pre 31.0 (SD 4.2) -> top 112.0; Post 39.4 (SD 4.5) -> top 86.8 -->
  <rect x="115" y="112" width="66" height="93" rx="3" fill="#a78bfa"/>
  <line x1="148" y1="99.4" x2="148" y2="124.6" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="140" y1="99.4" x2="156" y2="99.4" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="140" y1="124.6" x2="156" y2="124.6" stroke="#0f172a" stroke-width="1.8"/>
  <text x="148" y="93" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#4c1d95">31.0</text>
  <rect x="193" y="86.8" width="66" height="118.2" rx="3" fill="#6d28d9"/>
  <line x1="226" y1="73.3" x2="226" y2="100.3" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="218" y1="73.3" x2="234" y2="73.3" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="218" y1="100.3" x2="234" y2="100.3" stroke="#0f172a" stroke-width="1.8"/>
  <text x="226" y="67" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#4c1d95">39.4</text>
  <!-- School B: Pre 28.5 (SD 4.8) -> top 119.5; Post 30.2 (SD 4.9) -> top 114.4 -->
  <rect x="335" y="119.5" width="66" height="85.5" rx="3" fill="#5eead4"/>
  <line x1="368" y1="105.1" x2="368" y2="133.9" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="360" y1="105.1" x2="376" y2="105.1" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="360" y1="133.9" x2="376" y2="133.9" stroke="#0f172a" stroke-width="1.8"/>
  <text x="368" y="99" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#115e59">28.5</text>
  <rect x="413" y="114.4" width="66" height="90.6" rx="3" fill="#0f766e"/>
  <line x1="446" y1="99.7" x2="446" y2="129.1" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="438" y1="99.7" x2="454" y2="99.7" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="438" y1="129.1" x2="454" y2="129.1" stroke="#0f172a" stroke-width="1.8"/>
  <text x="446" y="93" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#115e59">30.2</text>
  <text x="187" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">School A: Mindfulness (n = 42)</text>
  <text x="407" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">School B: Control (n = 42)</text>
  <!-- Legend -->
  <rect x="172" y="238" width="12" height="12" rx="2" fill="#a78bfa"/>
  <text x="189" y="248" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">Pre-test (light)</text>
  <rect x="296" y="238" width="12" height="12" rx="2" fill="#6d28d9"/>
  <text x="313" y="248" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">Post-test (dark)</text>
</svg>`;

const STUDY_S_SUMMARY = `**Unseen Study S — Chen & Okafor (2026): "Mindful Pauses and Adolescent Attentional Control"**

Two urban secondary schools participated in a 6-week field intervention with students aged 15–16. In **School A (Mindfulness)**, 50 students volunteered after reading an optional *Mindfulness Club* newsletter; 42 completed daily 10-minute guided breathing sessions before Period 1. In **School B (Passive Control)**, 44 students from two compulsory homeroom classes were recruited; 42 completed pre- and post-testing with no alternative activity. Before and after the 6 weeks, the Mindfulness Club teacher—who knew each group's assignment—administered a 50-point computerized **Sustained Attention Task (SAT)** and a self-report 20-point **Academic Calmness Questionnaire (ACQ)**.

| Group | Initially Enrolled | Completed (n) | Pre SAT Mean (SD) | Post SAT Mean (SD) | Pre ACQ Mean | Post ACQ Mean |
|---|---|---|---|---|---|---|
| School A (Mindfulness) | 50 | 42 | 31.0 (4.2) | 39.4 (4.5) | 10.5 | 15.2 |
| School B (Control) | 44 | 42 | 28.5 (4.8) | 30.2 (4.9) | 10.8 | 11.1 |`;

export const paper: ExamPaper = {
  id: "exam-p2",
  title: "Paper 2 · Class Practicals & Unseen Study Critique",
  level: "SL",
  paperType: "Paper 2 · Class Practicals & Unseen Study Critique",
  calculator: true,
  minutes: 90,
  questions: [
    // ============== SECTION A: THE 4 CLASS PRACTICALS (q01–q08) ==============
    {
      id: "exam-p2-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Identify",
      question: "**Section A · Class Practical 1 (Experiment)** — In a repeated-measures class experiment, every student completes a word-recall test under Condition A (silent room) and Condition B (periodic phone alerts). Identify the standard experimental control procedure in which half the participants complete A then B and the other half complete B then A to neutralize order effects.",
      answer: {
        type: "text",
        accept: ["counterbalancing", "counter-balancing", "ab/ba counterbalancing", "abba counterbalancing"],
        display: "Counterbalancing",
      },
      hints: [
        "Practice or fatigue can systematically alter scores on whichever condition comes second.",
        "This single word describes reversing condition order symmetrically across two halves of the sample.",
      ],
      solution: [
        "**Counterbalancing** (AB/BA) ensures that practice, boredom, and fatigue effects are spread equally across both levels of the independent variable.",
        "This strengthens internal validity (**Causality**) in repeated-measures designs.",
      ],
      commonError: "Do not confuse counterbalancing (reversing condition sequence in repeated measures) with random allocation (assigning different people to separate groups in independent measures).",
    },
    {
      id: "exam-p2-q02",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "2-core-approaches",
      guideRef: "cognitive-memory-schemas",
      commandTerm: "Explain",
      marks: 4,
      question: "**Section A · Class Practical 1 (Experiment) [4 marks]** — A Psychology class designs a laboratory experiment to test whether **retrieval practice** improves delayed memory recall more than **repeated rereading**. Explain how to operationalize both the independent variable (IV) and dependent variable (DV), and explain one control procedure to protect **Causality**.",
      hints: [
        "Operationalization means defining variables as concrete, measurable procedures (exact study time, exact format of retrieval vs rereading, exact recall score out of a stated number of items).",
        "Specify a concrete extraneous variable (e.g., prior topic familiarity, time on task, or baseline memory ability) and a matching control (random allocation, standardized 10-minute exposure, or novel nonsense/unfamiliar passage).",
        "Tie your operationalization explicitly to **Measurement** and your control to **Causality**.",
      ],
      modelAnswer: "To achieve rigorous Measurement, the independent variable (study strategy) can be operationalized into two standardized 10-minute conditions after reading a novel 300-word prose passage: the retrieval-practice group closes the text and writes down everything recalled on blank sheets for 10 minutes, whereas the rereading control group silently rereads the intact text for 10 minutes. The dependent variable (delayed recall) can be operationalized as the number of pre-specified factual idea units (out of 20) accurately reproduced on a standardized free-recall test administered 48 hours later and scored blind against a fixed rubric. To protect Causality, participants should be randomly allocated to conditions so individual differences in baseline working memory or motivation are distributed probabilistically across groups, preventing participant variables from confounding the comparison.",
      markScheme: [
        { point: "Operationally defines both levels of the IV with concrete, equivalent time/tasks (retrieval vs rereading)", keywords: ["10-minute", "blank", "rereads", "standardized", "conditions"] },
        { point: "Operationally defines the DV as a specific quantifiable recall score/metric (e.g., idea units out of 20 after a delay)", keywords: ["idea units", "out of", "rubric", "free-recall", "quantif"] },
        { point: "Specifies a valid control procedure (e.g., random allocation, novel text, blind scoring, identical study duration)", keywords: ["randomly allocated", "random allocation", "novel", "blind"] },
        { point: "Explains how the control removes an extraneous confound to strengthen Causality", keywords: ["baseline", "confounding", "participant variables", "probabilistically"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Names IV/DV vaguely (e.g., 'study method' and 'memory') without concrete operationalization or causal justification." },
        { band: "3–4", marks: [3, 4], descriptor: "Precise, measurable operationalization of IV and DV paired with a clear, justified control strengthening Causality." },
      ],
      commonError: "Writing 'IV = retrieval practice, DV = memory' without specifying exact timing, task instructions, and scoring units—unoperationalized variables lose Measurement marks.",
    },
    {
      id: "exam-p2-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "interviews-observations",
      commandTerm: "Identify",
      question: "**Section A · Class Practical 2 (Interview)** — After transcribing and thematically coding semi-structured interviews on exam anxiety, a student researcher shares the transcripts and emerging themes back with interviewees so they can confirm whether the analysis faithfully captures their intended meanings. Identify this qualitative trustworthiness technique.",
      answer: {
        type: "text",
        accept: ["member checking", "member-checking", "respondent validation", "participant validation"],
        display: "Member checking (respondent validation)",
      },
      hints: [
        "This technique checks the researcher's interpretations directly with the 'members' (participants) who provided the data.",
        "It is one of the primary ways to strengthen qualitative credibility.",
      ],
      solution: [
        "**Member checking** (or **respondent validation**) returns transcripts or provisional themes to participants so they can correct misinterpretations, strengthening **credibility** and reducing researcher confirmation **Bias**.",
      ],
      commonError: "Do not confuse member checking (verifying interpretations with interviewees) with inter-rater reliability (comparing coding consistency between two independent researchers).",
    },
    {
      id: "exam-p2-q04",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "3-context-health-wellbeing",
      guideRef: "stress-addiction-health-promotion",
      commandTerm: "Evaluate",
      marks: 4,
      question: "**Section A · Class Practical 2 (Interview) [4 marks]** — Evaluate a class practical team's decision to use a **semi-structured interview** rather than a fully **structured interview** to investigate how Year 12 students cope with chronic academic stress, referring explicitly to **Bias** and **Measurement**.",
      hints: [
        "Strength (Measurement / Construct validity): open-ended prompts and responsive follow-up probes uncover rich, nuanced coping appraisals (e.g., Lazarus & Folkman emotion- vs problem-focused coping) that fixed questions miss.",
        "Limitation (Bias & Reliability): flexible probing increases risk of leading follow-up questions, interviewer bias, social desirability with peer interviewers, and lower standardization across interviewees.",
        "Offer a balanced concluding judgment weighing depth against comparability.",
      ],
      modelAnswer: "Choosing a semi-structured interview strengthens Measurement construct validity because an interview guide of core open-ended questions combined with flexible follow-up probes allows Year 12 interviewees to articulate subtle stress appraisals and personal coping routines in their own vocabulary—depth that rigid structured scripts often miss. However, this flexibility creates heightened Bias and reliability challenges compared with structured interviews: student interviewers may inadvertently ask leading follow-up probes or convey subtle approval cues (interviewer bias), while peers discussing sensitive exam distress face social desirability bias. Because follow-up wording varies across sessions, semi-structured data are also less standardized and harder to compare directly across respondents, requiring thematic coding, reflexive notes, and interviewer training to protect credibility.",
      markScheme: [
        { point: "Explains a clear Measurement strength (flexible probes capturing rich, participant-voiced depth/construct validity)", keywords: ["construct validity", "probes", "vocabulary", "depth", "appraisals"] },
        { point: "Contrasts explicitly with the rigidity/superficiality of a fully structured interview", keywords: ["rigid", "structured", "standardized", "compare"] },
        { point: "Identifies specific Bias threats (interviewer bias / leading follow-ups and/or social desirability among peers)", keywords: ["leading", "interviewer bias", "social desirability", "approval"] },
        { point: "Evaluates trade-off with reliability/standardization and notes a mitigation (reflexivity, thematic coding, or training)", keywords: ["reliability", "reflexive", "training", "credibility", "thematic"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Lists a generic strength or weakness of interviews without contrasting semi-structured vs structured or linking to Bias and Measurement." },
        { band: "3–4", marks: [3, 4], descriptor: "Balanced evaluation directly contrasting semi-structured and structured interviews in the stress context via both Measurement and Bias." },
      ],
      commonError: "Describing interviews generally without explicitly comparing semi-structured vs structured formats or anchoring in academic stress.",
    },
    {
      id: "exam-p2-q05",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "interviews-observations",
      commandTerm: "Calculate",
      question: "**Section A · Class Practical 3 (Observation)** — Two student observers independently code 40 one-minute time-sampling intervals of collaborative classroom discussion using the same behavioural checklist. They record identical codes on 34 of the 40 intervals. Calculate their **percentage inter-observer agreement** (give your answer as a percentage).",
      answer: {
        type: "number",
        value: 85,
        tolerance: 0.01,
        display: "85%",
      },
      traps: [
        {
          spec: { type: "number", value: 0.85, tolerance: 0.005 },
          feedback: "That is the proportion (0.85) — multiply by 100 to express it as a percentage (85%).",
        },
        {
          spec: { type: "number", value: 15, tolerance: 0.01 },
          feedback: "15% is the disagreement rate (6/40 × 100). The question asks for percentage agreement (34/40 × 100).",
        },
      ],
      hints: [
        "Percentage inter-observer agreement = (Number of agreed intervals ÷ Total intervals observed) × 100.",
        "Divide 34 by 40, then multiply by 100.",
      ],
      solution: [
        "Use the inter-observer agreement formula: {{(34 / 40) * 100}}.",
        "{{34 / 40 = 0.85}}, and {{0.85 * 100 = 85%}}.",
        "Because 85% exceeds the conventional 80% benchmark, the behavioural coding schedule demonstrates strong **inter-observer reliability** (**Measurement**).",
      ],
      commonError: "Forgetting to multiply the decimal proportion (0.85) by 100, or calculating the percentage of disagreements (15%) instead of agreements.",
    },
    {
      id: "exam-p2-q06",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "5-context-human-relationships",
      guideRef: "prosocial-bystander-altruism",
      commandTerm: "Compare and contrast",
      marks: 4,
      question: "**Section A · Class Practical 3 (Observation) [4 marks]** — Compare and contrast **covert naturalistic observation** and **overt naturalistic observation** for studying spontaneous peer helping in a busy school canteen, anchoring your response in **Bias** and **Responsibility**.",
      hints: [
        "Similarity: both take place in an authentic natural canteen environment, yielding high ecological validity compared with lab tasks.",
        "Difference via **Bias**: covert observation prevents the Hawthorne/reactivity effect (students act naturally), whereas overt observation risks students performing extra prosocial acts because they know they are watched.",
        "Difference via **Responsibility**: overt observation upholds informed consent and right to withdraw, whereas covert observation bypasses prior consent and requires strict anonymity, public-space justification, and school safeguarding approval.",
      ],
      modelAnswer: "Both covert and overt naturalistic observations record peer helping inside an authentic school canteen, preserving high ecological validity compared with artificial laboratory studies. However, they diverge sharply across Bias and Responsibility. In terms of Bias, covert observation minimizes participant reactivity (the Hawthorne effect) because students do not know their helping behaviour is being coded, whereas overt observation alerts students to the researchers' presence and can elicit socially desirable, artificially frequent helping. Conversely, in terms of Responsibility, overt observation directly honours informed consent, transparency, and the right to withdraw, whereas covert observation withholds prior knowledge from minors and therefore demands strict safeguards—recording only anonymous tally codes in a genuinely public canteen zone with prior institutional permission and zero identifiable details.",
      markScheme: [
        { point: "States a clear similarity (both occur in the natural canteen setting, offering high ecological validity)", keywords: ["ecological validity", "both", "authentic", "natural"] },
        { point: "Contrasts Bias: covert reduces Hawthorne / reactivity / social desirability compared with overt", keywords: ["hawthorne", "reactivity", "socially desirable", "natural"] },
        { point: "Contrasts Responsibility: overt secures prior informed consent and right to withdraw unlike covert", keywords: ["informed consent", "right to withdraw", "transparency", "withholds"] },
        { point: "Notes ethical safeguards required if covert observation is used with students (anonymity, public space, institutional approval)", keywords: ["anonymous", "public", "institutional", "minors", "safeguards"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Defines covert and overt separately with no explicit comparison or missing either Bias or Responsibility." },
        { band: "3–4", marks: [3, 4], descriptor: "Clear similarity plus balanced contrast anchored explicitly in Hawthorne reactivity (Bias) and informed consent/safeguards (Responsibility)." },
      ],
      commonError: "Only contrasting differences and forgetting to include a similarity—the command term 'Compare and contrast' requires BOTH.",
    },
    {
      id: "exam-p2-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Calculate",
      question: "**Section A · Class Practical 4 (Survey / Questionnaire)** — A sixth-form college has 600 students distributed across four year groups: 150 in Year 10, 180 in Year 11, 150 in Year 12, and 120 in Year 13. A Psychology class constructs a **proportional stratified sample** of 100 students for a sleep-hygiene questionnaire. Calculate how many **Year 11** students should be sampled.",
      answer: {
        type: "number",
        value: 30,
        tolerance: 0.01,
        display: "30 students",
      },
      traps: [
        {
          spec: { type: "number", value: 25, tolerance: 0.01 },
          feedback: "25 assumes equal quotas (100 ÷ 4) across year groups rather than proportional representation of Year 11's larger size (180/600).",
        },
      ],
      hints: [
        "First find Year 11's proportion of the whole school: 180 ÷ 600.",
        "Multiply that proportion by the target sample size of 100 students.",
      ],
      solution: [
        "Year 11 represents {{180 / 600 = 0.30}} (30%) of the college population.",
        "For a proportional stratified sample of 100 students: {{0.30 * 100 = 30}} Year 11 students.",
        "Proportional stratified sampling reduces sampling **Bias** by ensuring each year-group stratum matches its true population share.",
      ],
      commonError: "Dividing 100 equally by 4 year groups (25 each) instead of weighting each stratum proportionally by population size.",
    },
    {
      id: "exam-p2-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Explain",
      marks: 4,
      question: "**Section A · Class Practical 4 (Survey / Questionnaire) [4 marks]** — Explain **two** distinct sources of response **Bias** that threaten self-report Likert-scale questionnaires on adolescent sleep habits, and explain **one** concrete design modification to reduce each.",
      hints: [
        "Source 1: Social desirability bias (students under-report late-night scrolling or over-report healthy sleep to appear responsible) → Modification: anonymous self-administered submission without names or teacher inspection.",
        "Source 2: Acquiescence bias (tendency to tick 'Agree' mechanically down a list) OR leading/loaded wording → Modification: include reverse-scored items balanced between positive and negative phrasing, or rewrite neutral non-leading stems.",
        "Make sure each modification directly targets the exact Bias explained!",
      ],
      modelAnswer: "First, self-report sleep questionnaires are vulnerable to social desirability bias: adolescents may over-report hours slept or under-report midnight phone use to present themselves favourably to teachers or peers. Researchers can reduce this Bias by collecting questionnaires anonymously via sealed envelopes or unlinked digital forms and explicitly assuring respondents that answers cannot be traced to individuals. Second, Likert scales suffer from acquiescence bias—a response set where fatigued respondents agree automatically with positively phrased statements regardless of content (or leading wording nudging agreement). Including balanced reverse-scored items (mixing positively and negatively keyed neutral statements) disrupts automatic 'agree' patterns and allows researchers to spot inconsistent responding, strengthening Measurement validity.",
      markScheme: [
        { point: "Accurately explains first distinct response Bias in context (e.g., social desirability bias on sleep habits)", keywords: ["social desirability", "favourably", "under-report", "over-report"] },
        { point: "Explains a targeted modification reducing the first Bias (e.g., anonymous collection / sealed unlinked submission)", keywords: ["anonym", "sealed", "unlinked", "traced"] },
        { point: "Accurately explains second distinct response Bias (e.g., acquiescence bias or leading/loaded wording)", keywords: ["acquiescence", "leading", "response set", "agree automatically"] },
        { point: "Explains a targeted modification reducing the second Bias (e.g., reverse-scored items or neutral pilot-tested phrasing)", keywords: ["reverse-scored", "reverse scored", "negatively keyed", "neutral"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Names biases vaguely or provides generic fixes ('use a larger sample') that do not mitigate self-report response bias." },
        { band: "3–4", marks: [3, 4], descriptor: "Clearly explains two distinct questionnaire biases in context paired with two concrete, directly matched design modifications." },
      ],
      commonError: "Suggesting 'increase the sample size' to fix social desirability or leading questions—larger samples reduce random error, NOT systematic wording or self-presentation Bias.",
    },

    // ============== SECTION B: UNSEEN STUDY CRITIQUE (q09–q15) ===============
    {
      id: "exam-p2-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Calculate",
      diagram: SVG_STUDY_S_SAT,
      question: `**Section B · Unseen Study Critique**

${STUDY_S_SUMMARY}

Using the table and graph above, calculate the **net difference-in-differences gain** in mean SAT score for School A relative to School B—that is, **(School A post − School A pre) − (School B post − School B pre)**. Give your answer in points to 1 decimal place.`,
      answer: {
        type: "number",
        value: 6.7,
        tolerance: 0.05,
        display: "6.7 points",
      },
      traps: [
        {
          spec: { type: "number", value: 8.4, tolerance: 0.05 },
          feedback: "8.4 points is School A's raw gain alone (39.4 − 31.0). Subtract School B's control gain (30.2 − 28.5 = 1.7) to get the net difference-in-differences.",
        },
        {
          spec: { type: "number", value: 9.2, tolerance: 0.05 },
          feedback: "9.2 points is the post-test gap only (39.4 − 30.2), which ignores School A's higher pre-test baseline (31.0 vs 28.5).",
        },
      ],
      hints: [
        "First compute School A's change: 39.4 − 31.0.",
        "Next compute School B's change: 30.2 − 28.5.",
        "Subtract School B's change from School A's change.",
      ],
      solution: [
        "School A gain: {{39.4 - 31.0 = 8.4}} points.",
        "School B gain: {{30.2 - 28.5 = 1.7}} points.",
        "Net difference-in-differences gain: {{8.4 - 1.7 = 6.7}} points.",
        "Notice why subtracting baseline differences matters: School A already started {{2.5}} points ahead of School B before any breathing sessions began!",
      ],
      commonError: "Comparing only post-test scores (39.4 − 30.2 = 9.2) ignores the non-equivalent starting baselines created by lack of random allocation.",
    },
    {
      id: "exam-p2-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Calculate",
      question: `**Section B · Unseen Study Critique (Study S)** — In Chen & Okafor's (2026) study, **50** students initially enrolled in School A's Mindfulness condition and **42** completed the 6-week post-test (while 44 enrolled and 42 completed in School B). Calculate the **percentage attrition (dropout) rate** in School A.`,
      answer: {
        type: "number",
        value: 16,
        tolerance: 0.05,
        display: "16%",
      },
      traps: [
        {
          spec: { type: "number", value: 84, tolerance: 0.05 },
          feedback: "84% is the completion (retention) rate (42/50 × 100). Attrition is the percentage who dropped out (8/50 × 100).",
        },
        {
          spec: { type: "number", value: 8, tolerance: 0.05 },
          feedback: "8 is the raw number of dropouts. Divide 8 by 50 and multiply by 100 to obtain the percentage attrition rate.",
        },
      ],
      hints: [
        "First find how many School A students dropped out: 50 − 42.",
        "Divide the number of dropouts by the initial enrolment (50) and multiply by 100.",
      ],
      solution: [
        "Dropouts in School A: {{50 - 42 = 8}} students.",
        "Percentage attrition rate: {{(8 / 50) * 100 = 16%}} (compared with {{(2 / 44) * 100 ≈ 4.5%}} in School B).",
        "This **differential attrition** (16% vs 4.5%) is a major source of selection **Bias** if less motivated or more stressed students withdrew from Mindfulness.",
      ],
      commonError: "Reporting the 84% retention rate or dividing 8 by 42 instead of the initial baseline cohort of 50.",
    },
    {
      id: "exam-p2-q11",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "ethics-unseen-study-paper2",
      commandTerm: "Explain",
      marks: 4,
      question: `**Section B · Unseen Study Critique [4 marks]** — Refer to Study S (Chen & Okafor, 2026), where School A's 42 *Mindfulness Club* volunteers (Pre SAT {{M = 31.0}}, Post {{M = 39.4}}) were compared with School B's 42 compulsory homeroom students (Pre SAT {{M = 28.5}}, Post {{M = 30.2}}) who received no alternative activity. Explain why Study S is classified as a **quasi-experiment** and how this design undermines the Core Concept of **Causality**.`,
      hints: [
        "Pinpoint the exact missing ingredient of a true experiment: lack of random allocation to conditions (pre-existing school groups and self-selected volunteers).",
        "Quote quantitative evidence of non-equivalence from the study: School A already scored higher at baseline (31.0 vs 28.5).",
        "Identify at least two confounding variables (school-level environment/teaching differences and passive control lacking an active placebo/attention task).",
      ],
      modelAnswer: "Study S is a quasi-experiment because although an intervention was introduced to School A and withheld from School B, participants were not randomly allocated to conditions; instead, researchers relied on pre-existing school groups and optional volunteers. This severely weakens Causality for three reasons. First, pre-existing baseline non-equivalence is visible in the data: School A volunteers already scored 2.5 points higher on the SAT before training began (31.0 vs 28.5), suggesting higher initial motivation or executive control. Second, whole-school confounds—such as timetable differences, teacher quality, socioeconomic intake, or exam schedules between School A and School B—could explain the 6-week divergence rather than breathing exercises. Third, using a passive control group with no alternative 10-minute morning activity means improvements could reflect structured morning calm or novelty effects rather than mindfulness specifically.",
      markScheme: [
        { point: "Correctly defines quasi-experiment via absence of random allocation (pre-existing schools / volunteers)", keywords: ["random", "pre-existing", "allocated", "not randomly"] },
        { point: "Cites quantitative evidence of baseline non-equivalence (School A 31.0 vs School B 28.5)", keywords: ["31.0", "28.5", "2.5", "baseline", "non-equivalence"] },
        { point: "Identifies school-level confounding variables (teaching, timetable, SES, exam schedules)", keywords: ["confound", "timetable", "socioeconomic", "school-level", "teacher"] },
        { point: "Critiques the passive control condition (novelty / morning break / attention placebo rather than mindfulness specifically)", keywords: ["passive control", "placebo", "novelty", "alternative"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "States 'no random allocation' briefly without linking to baseline data, school confounds, or passive-control threats to Causality." },
        { band: "3–4", marks: [3, 4], descriptor: "Clear, data-anchored explanation linking missing random allocation, baseline gap, school confounds, and passive control directly to Causality." },
      ],
      commonError: "Calling Study S a 'correlational survey'—an intervention was actively introduced across two groups, making it a non-equivalent groups **quasi-experiment**.",
    },
    {
      id: "exam-p2-q12",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "3-context-health-wellbeing",
      guideRef: "stress-addiction-health-promotion",
      commandTerm: "Evaluate",
      marks: 6,
      question: `**Section B · Unseen Study Critique [6 marks]** — Evaluate Study S (Chen & Okafor, 2026) explicitly through the Core Concept of **Bias**, citing concrete procedural details from recruitment, test administration, self-report ratings, and participant dropout (School A: 50 enrolled → 42 completed, ACQ 10.5 → 15.2; School B: 44 enrolled → 42 completed, ACQ 10.8 → 11.1).`,
      hints: [
        "Source 1 — Volunteer / self-selection Bias: School A students signed up via an optional Mindfulness Club newsletter (more health-conscious/receptive than compulsory School B homerooms).",
        "Source 2 — Researcher expectancy Bias: the Mindfulness Club teacher was unblinded and personally administered both tests—subtle encouragement or warmer tone could elevate School A scores.",
        "Source 3 — Demand characteristics & social desirability Bias: School A knew they joined a mindfulness trial and rated themselves on the transparent Academic Calmness Questionnaire (ACQ jumped +4.7 vs +0.3).",
        "Source 4 — Differential attrition / survivorship Bias: 8 of 50 dropped out of School A (16%) vs only 2 of 44 in School B (4.5%)—leaving only enthusiastic responders in the final analysis.",
      ],
      modelAnswer: "Four interlocking sources of systematic Bias inflate Study S's apparent benefits. First, recruitment introduced strong volunteer (self-selection) bias: School A participants proactively joined via an optional Mindfulness Club newsletter, meaning they likely possessed stronger belief in stress-management practices and higher conscientiousness than School B's compulsory homeroom cohort. Second, test administration suffered from researcher expectancy bias because the Mindfulness Club teacher knew condition membership and directly administered the SAT and ACQ; subtle vocal warmth, pacing cues, or unconscious encouragement could systematically boost School A performance. Third, participants in School A faced obvious demand characteristics and social desirability bias on the transparent 20-point Academic Calmness Questionnaire (ACQ), helping explain why self-reported calmness surged from 10.5 to 15.2 (+4.7) when students wanted to please their club teacher. Fourth, differential attrition created survivorship bias: 16% of School A enrollees (8 of 50) dropped out before post-testing compared with only 4.5% (2 of 44) in School B; if students who found breathing ineffective or frustrating withdrew early, final means over-represent positive responders. While having both schools complete standardized computerized testing modestly limits scoring subjectivity on the SAT, these pervasive biases mean Study S likely exaggerates the true efficacy of brief mindfulness pauses.",
      markScheme: [
        { point: "Identifies volunteer / self-selection bias contrasting optional Mindfulness Club sign-ups with compulsory homerooms", keywords: ["volunteer", "self-selection", "optional", "conscientious"] },
        { point: "Identifies researcher expectancy bias from the unblinded Mindfulness Club teacher administering tests", keywords: ["expectancy", "unblinded", "warmth", "encouragement"] },
        { point: "Identifies demand characteristics / social desirability bias on the self-report ACQ (citing +4.7 jump)", keywords: ["demand characteristics", "social desirability", "please", "15.2"] },
        { point: "Identifies differential attrition / survivorship bias comparing 16% (8/50) vs 4.5% (2/44) dropout", keywords: ["differential attrition", "survivorship", "16%", "4.5%", "withdrew"] },
        { point: "Explains the direction of distortion (exaggerating/inflating apparent mindfulness effectiveness)", keywords: ["exaggerat", "inflat", "over-represent", "positive responders"] },
        { point: "Offers balanced evaluation (e.g., noting computerized SAT reduces subjective grading bias relative to ACQ)", keywords: ["computerized", "scoring subjectivity", "balanced", "modestly"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions generic bias terms without citing Study S's club recruitment, teacher administration, ACQ jump, or dropout figures." },
        { band: "3–4", marks: [3, 4], descriptor: "Applies two or three specific biases cleanly to Study S details with clear explanation." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive, balanced, detail-rich Bias critique integrating volunteer bias, unblinded expectancy, ACQ demand characteristics, and differential attrition." },
      ],
      commonError: "Listing 'bias' without quoting concrete evidence from Study S (e.g., unblinded teacher, optional newsletter, 50→42 vs 44→42 dropout).",
    },
    {
      id: "exam-p2-q13",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "6-context-learning-cognition",
      guideRef: "neurobiology-memory-cognitive-load",
      commandTerm: "Evaluate",
      marks: 6,
      question: `**Section B · Unseen Study Critique [6 marks]** — Evaluate Study S (Chen & Okafor, 2026) explicitly through the Core Concept of **Measurement**, examining both the computerized **Sustained Attention Task (SAT)** (School A: Pre {{M = 31.0, SD = 4.2}}, Post {{M = 39.4, SD = 4.5}}; School B: Pre {{M = 28.5, SD = 4.8}}, Post {{M = 30.2, SD = 4.9}}) and the self-report **Academic Calmness Questionnaire (ACQ)**.`,
      hints: [
        "Strength of SAT: objective, quantifiable behavioural measure with low inter-rater scoring error and comparable standard deviations (~4.2–4.9) indicating fairly consistent group spread.",
        "Limitations of SAT: low ecological validity (a computerized attention task may not mirror real classroom listening/cognitive-load management) AND testing/practice effects (notice School B rose +1.7 points with zero intervention!).",
        "Evaluation of ACQ: captures subjective appraisal (construct relevance to felt calmness), yet lacks stated psychometric reliability/validity (e.g., test–retest or convergent physiological cortisol/HRV triangulation) and is vulnerable to self-report distortion.",
        "Synthesize: combining behavioural and self-report indicators is a partial triangulation strength, though missing ecological classroom outcomes and biological stress indices.",
      ],
      modelAnswer: "Study S displays both notable strengths and significant flaws in Measurement. A clear strength is combining an objective behavioural measure (the 50-point computerized SAT) with a subjective self-report scale (the 20-point ACQ), offering partial methodological triangulation across cognitive performance and perceived emotional calmness. Furthermore, the SAT yields standardized quantitative scores with consistent spread across both schools (SDs between 4.2 and 4.9), minimizing subjective grading error. Nevertheless, SAT construct and ecological validity remain limited: clicking targets on a quiet computer screen poorly reflects sustained attention amid real classroom peer noise, note-taking, and complex working-memory cognitive load. Moreover, administering the exact same SAT twice produced a clear practice (testing) effect, demonstrated by passive Control School B improving by 1.7 points (28.5 to 30.2) without any intervention. On the ACQ, no information is provided on psychometric test–retest reliability or construct validation against established anxiety inventories, nor did the researchers triangulate self-reported calmness with objective physiological markers such as salivary cortisol or heart-rate variability. Overall, while objective computer scoring strengthens reliability, unproven questionnaire psychometrics, practice effects, and narrow ecological transfer restrict Measurement validity.",
      markScheme: [
        { point: "Notes Measurement strength: partial triangulation combining objective behavioural SAT with subjective ACQ", keywords: ["triangulation", "behavioural", "subjective", "objective"] },
        { point: "Notes standardized scoring / comparable SD spread (4.2–4.9) supporting consistency/reliability", keywords: ["4.2", "4.9", "spread", "grading error", "standardized"] },
        { point: "Critiques SAT ecological validity (computer screen task vs real classroom attention / cognitive load)", keywords: ["ecological validity", "classroom", "cognitive load", "computer screen"] },
        { point: "Identifies repeated-testing / practice effect evidenced by Control School B's +1.7 gain", keywords: ["practice", "1.7", "testing", "twice"] },
        { point: "Critiques ACQ psychometric gaps (unverified test–retest reliability / construct validation)", keywords: ["psychometric", "test–retest", "test-retest", "validation", "inventories"] },
        { point: "Suggests stronger biological/ecological Measurement triangulation (e.g., salivary cortisol, HRV, or classroom grades)", keywords: ["cortisol", "heart-rate", "physiological", "transfer"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Gives vague comments on validity or reliability without analysing both the SAT and the ACQ using study data." },
        { band: "3–4", marks: [3, 4], descriptor: "Evaluates both SAT and ACQ accurately with reference to ecological validity, practice effects, or reliability." },
        { band: "5–6", marks: [5, 6], descriptor: "Balanced, sharp Measurement evaluation integrating strengths (triangulation, SD consistency) and limitations (practice effect +1.7, ecological gap, unverified ACQ psychometrics)." },
      ],
      commonError: "Evaluating ONLY the self-report questionnaire and ignoring the computerized SAT's SD consistency, ecological gap, and Control School B's +1.7 practice gain.",
    },
    {
      id: "exam-p2-q14",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "4-context-human-development",
      guideRef: "developmental-methods-ethics",
      commandTerm: "Discuss",
      marks: 6,
      question: `**Section B · Unseen Study Critique [6 marks]** — Discuss the Core Concept of **Responsibility** in Study S (Chen & Okafor, 2026), specifically addressing ethical obligations toward **15–16-year-old adolescent participants** across both School A (Mindfulness Club led by a teacher) and School B (compulsory homeroom control).`,
      hints: [
        "Vulnerable minors (ages 15–16): requires BOTH written parental/guardian informed consent AND voluntary adolescent assent in clear, accessible language.",
        "Dual-role coercion & right to withdraw: School B was recruited from 'compulsory homeroom classes', and School A's teacher administered the tests—power asymmetry can make teens feel pressured to participate or conceal discomfort.",
        "Protection from harm & confidentiality: breathing exercises can occasionally surface anxiety in distressed adolescents; SAT/ACQ scores must be anonymized and kept strictly separate from academic grades.",
        "Equitable benefit & debriefing: debrief all participants honestly and offer School B a waitlist mindfulness programme if the intervention proves helpful.",
      ],
      modelAnswer: "Applying the Core Concept of Responsibility to Study S highlights critical ethical duties when researching 15–16-year-old adolescents in school settings. First, because participants are minors, ethical guidelines require dual consent: written informed consent from parents or legal guardians alongside independent, freely given adolescent assent explaining aims, duration, and tasks clearly. Second, Study S creates a power-asymmetry risk that undermines voluntary participation and the right to withdraw: School B students were recruited inside compulsory homeroom classes—implying perceived obligation—while School A's Mindfulness Club teacher both led sessions and administered testing, making students hesitant to decline or report negative feelings. Although eight School A students did withdraw (showing withdrawal was partly exercised), an independent non-teaching researcher should handle recruitment and opt-out procedures so academic standing is never perceived at risk. Third, researchers must protect confidentiality and psychological welfare by replacing student names with anonymous ID codes, keeping SAT and ACQ data strictly off school records, and providing pastoral referral pathways because quiet introspective breathing can occasionally trigger distress in trauma-exposed teens. Finally, distributive Responsibility and full debriefing require sharing honest results with both schools and offering School B students optional waitlist access to the breathing programme if beneficial.",
      markScheme: [
        { point: "Specifies dual consent for minors aged 15–16 (written parental/guardian consent plus adolescent assent)", keywords: ["parental", "guardian", "assent", "minors"] },
        { point: "Identifies power-asymmetry / coercion risk from compulsory homeroom recruitment and teacher-researcher dual role", keywords: ["power", "coercion", "asymmetry", "obligation", "hesitant"] },
        { point: "Evaluates right to withdraw (noting 8 withdrawals yet recommending an independent non-teaching recruiter)", keywords: ["right to withdraw", "independent", "opt-out", "academic standing"] },
        { point: "Addresses confidentiality and anonymization (ID codes separate from school records)", keywords: ["confidentiality", "anonymous", "codes", "records"] },
        { point: "Addresses protection from psychological harm (pastoral support if introspective breathing triggers anxiety/distress)", keywords: ["distress", "pastoral", "trauma", "welfare", "harm"] },
        { point: "Addresses debriefing and equitable / distributive Responsibility (waitlist access for Control School B)", keywords: ["debriefing", "waitlist", "equitable", "distributive"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Lists generic ethical terms ('consent, debriefing') without applying them to 15–16-year-old school participants or Study S's design." },
        { band: "3–4", marks: [3, 4], descriptor: "Applies several relevant ethical issues (consent/assent, teacher power dynamic, confidentiality) clearly to Study S." },
        { band: "5–6", marks: [5, 6], descriptor: "Thorough, nuanced discussion of adolescent Responsibility covering dual consent, dual-role coercion, anonymity, welfare safeguards, debriefing, and waitlist equity." },
      ],
      commonError: "Forgetting that 15–16-year-olds require BOTH parental/guardian consent AND adolescent assent, or overlooking the compulsory homeroom coercion issue in School B.",
    },
    {
      id: "exam-p2-q15",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "ethics-unseen-study-paper2",
      commandTerm: "Design",
      marks: 9,
      question: `**Section B · Unseen Study Redesign [9 marks]** — Propose a redesigned 6-week follow-up investigation testing whether brief daily mindfulness pauses improve adolescent attentional control and stress regulation while explicitly strengthening **Causality**, **Measurement**, and **Responsibility** relative to Chen & Okafor (2026).`,
      hints: [
        "Strengthen **Causality**: recruit volunteers from the SAME multi-school pool and use stratified **random allocation** within each school into (1) 10-min guided mindfulness vs (2) an **active control** (e.g., 10-min quiet audiobook listening) to rule out novelty/morning-break effects and school confounds.",
        "Reduce **Bias**: use independent **blinded assessors** (not the Mindfulness teacher) and track/analyse dropouts via intention-to-treat / attrition checks.",
        "Strengthen **Measurement**: use **alternate parallel forms** of the SAT to prevent practice effects, add a validated psychometric scale (e.g., Perceived Stress Scale) plus an ecological classroom observation or biological indicator (salivary cortisol / HRV), and include a 3-month follow-up to assess sustained **Change**.",
        "Strengthen **Responsibility**: independent researcher recruitment, written parental consent + teen assent, anonymous ID coding, pastoral safeguarding, full debriefing, and a **waitlist control** offering mindfulness to the active-control group afterward.",
      ],
      modelAnswer: "To resolve Chen & Okafor's limitations, I propose a multi-school randomized controlled trial (RCT) with an active control group and blinded assessment across three socioeconomically diverse secondary schools (N = 180 students aged 15–16). To strengthen Causality, interested volunteers across all three schools will be randomly allocated within each school (stratified by gender and baseline SAT score) to either 6 weeks of daily 10-minute guided mindfulness breathing or an equivalent 10-minute active control condition listening to calm neutral audiobooks before Period 1. Random allocation inside each school eliminates pre-existing baseline imbalances, volunteer mismatch, and whole-school confounds, while the active audiobook control isolates mindfulness mechanisms from mere morning quiet or novelty effects. To curb expectancy and attrition Bias, trained external research assistants blind to condition assignment will administer all assessments, and researchers will record reasons for withdrawal and apply intention-to-treat analysis so differential dropout cannot inflate apparent gains. To strengthen Measurement, participants will complete alternate parallel versions of the computerized SAT at pre-test, post-test, and a 3-month follow-up—minimizing testing practice effects while evaluating lasting Change. Subjective calmness will be assessed using an established, psychometrically validated adolescent stress scale (such as the Perceived Stress Scale) alongside methodological triangulation via brief blinded classroom on-task observations (checking ≥80% inter-observer agreement) and non-invasive morning salivary cortisol or heart-rate variability to bolster construct and ecological validity. Finally, to uphold ethical Responsibility, independent researchers rather than classroom teachers will obtain written parental consent and voluntary adolescent assent, ensuring zero academic coercion and an unrestricted right to withdraw. All cognitive and stress data will be stored under anonymous participant codes separate from school records, pastoral counsellors will be available if introspective exercises evoke distress, and following full debriefing, active-control students will be offered optional waitlist mindfulness sessions.",
      markScheme: [
        { point: "Proposes a randomized controlled trial (RCT) with random allocation within schools to fix Causality", keywords: ["randomized", "random allocation", "rct", "within each school"] },
        { point: "Includes an active control condition (e.g., calm audiobook listening) to control novelty/quiet-break effects", keywords: ["active control", "audiobook", "novelty", "isolates"] },
        { point: "Controls baseline equivalence / school confounds (e.g., multi-school stratified randomization)", keywords: ["stratified", "baseline", "imbalances", "confounds"] },
        { point: "Uses independent blinded assessors to eliminate teacher expectancy Bias", keywords: ["blind", "external", "expectancy", "assistants"] },
        { point: "Addresses differential attrition (tracking withdrawal reasons / intention-to-treat analysis)", keywords: ["intention-to-treat", "withdrawal", "differential", "inflate"] },
        { point: "Strengthens SAT Measurement via alternate parallel forms and/or delayed follow-up for lasting Change", keywords: ["parallel", "3-month", "practice", "lasting"] },
        { point: "Replaces/supplements ACQ with a psychometrically validated stress scale (e.g., Perceived Stress Scale)", keywords: ["psychometrically", "validated", "perceived stress"] },
        { point: "Adds ecological or biological triangulation (blinded classroom observation with ≥80% IOA or cortisol/HRV)", keywords: ["triangulation", "inter-observer", "cortisol", "heart-rate", "classroom"] },
        { point: "Upholds ethical Responsibility (independent recruitment, parental consent + assent, anonymous codes, pastoral care, waitlist debriefing)", keywords: ["parental", "assent", "coercion", "anonymous", "waitlist", "pastoral"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–3", marks: [1, 3], descriptor: "Basic suggestions ('use random allocation and consent') lacking operational detail or clear justification against Study S." },
        { band: "4–6", marks: [4, 6], descriptor: "Workable redesign improving at least two of Causality, Measurement, and Responsibility with clear methodological reasoning." },
        { band: "7–9", marks: [7, 9], descriptor: "Rigorous, cohesive RCT redesign directly remedying Study S's confounds, expectancy/attrition biases, measurement gaps, and adolescent ethical duties." },
      ],
      commonError: "Proposing 'repeat the study with a larger sample' without fixing the core structural flaws (lack of random allocation, passive control, unblinded teacher, unvalidated ACQ, and coercion).",
    },
  ],
};
