// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Psychology (NEW FA 2027).
// Research Proposal (HYPOTHETICAL — NO DATA COLLECTION):
// SL 30% / HL 20%, max 2,200 words, 24 marks across 4 equal 6-mark criteria.
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Psychology Research Proposal (FA2027 IA)",
  subtitle: "NEW First Assessment May 2027 · SL 30% / HL 20% · 24 marks total · Max 2,200 words · NO data collection",
  hoursNote: "Students design a rigorous, original hypothetical investigation (no participants tested, no data collected) rooted in a real-world population of interest and one of the 4 approved Class Practical methods.",
  wordLimit: 2200,
  totalMarks: 24,
  weightSL: "30%",
  weightHL: "20%",
  keyChanges2025: [
    "MAJOR 2027 CHANGE: The legacy experimental replication IA with participant testing and statistical calculations is **RETIRED**. You now write a **Research Proposal** — you must **NOT** collect data from participants!",
    "Strict **2,200-word cap** (appendices — including your complete Data Collection Tool — references, tables, and headings are excluded; examiners stop reading at 2,200 words).",
    "Must select ONE of the 4 approved FA2027 methods (**Experiment, Interview, Observation, or Survey/Questionnaire**) justified explicitly for your target population and psychological context.",
    "You MUST create and attach a complete, ready-to-use **Data Collection Tool** in the appendix (Criterion C — e.g. ≥ 5 original survey/interview items, operationalized observation coding grid, or experimental stimulus/scoring protocol) AND justify its design choices in the main prose!",
  ],
  criteria: [
    {
      code: "A",
      name: "Introduction",
      maxMarks: 6,
      summary: "Identifies a real-world psychological problem & specific target population, reviews directly relevant psychological theory/research, and formulates a focused, researchable aim or research question.",
      topBandMustHave: [
        "Clearly defines a **specific target population of interest** (e.g. bilingual adolescents aged 15–17 in international schools, shift-working hospital nurses) and real-world psychological context.",
        "Reviews 2–4 credible, directly relevant peer-reviewed psychological studies/theories explaining *why* this investigation is needed (not a sprawling mini-essay!).",
        "Explicitly links the proposed study to relevant **FA2027 Core Concepts** (e.g. Bias, Causality, Change, Measurement, Perspective, Responsibility).",
        "States a razor-sharp, testable **Research Question / Aim** (and operationalized hypotheses if quantitative/experimental) directly emerging from the background review.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Real-world context and target population are clearly defined; relevant psychological theory/research is effectively integrated to justify a focused, researchable RQ." },
        { marks: "3–4", descriptor: "Context and background research are relevant, but links between literature, population, and RQ are partially developed or overly broad." },
        { marks: "1–2", descriptor: "Vague population or problem; background research is weakly connected or largely anecdotal." },
      ],
    },
    {
      code: "B",
      name: "Research Methodology",
      maxMarks: 6,
      summary: "Selects and thoroughly justifies one approved research method, sampling strategy, operationalized variables/procedure, data-analysis plan, and concrete ethical safeguards.",
      topBandMustHave: [
        "Explicitly selects and justifies ONE approved FA2027 method (**Experiment, Interview, Observation, or Survey/Questionnaire**) — explaining why it fits the RQ better than an alternative.",
        "Specifies **sampling technique** (e.g. stratified random, purposive, volunteer) and realistic sample size with explicit inclusion/exclusion criteria.",
        "Provides a clear, reproducible step-by-step **procedure** with operationalized IV/DV (if experimental) or structured data-gathering protocol, controlling key confounds/biases.",
        "Outlines an appropriate **planned data-analysis strategy** (e.g. descriptive stats + independent t-test / Spearman ρ for quantitative; inductive thematic analysis + inter-coder reliability for qualitative).",
        "Details specific, non-generic **ethical Responsibility safeguards** tailored to the target population (informed consent/assent, confidentiality, minimizing psychological distress, right to withdraw, debriefing).",
      ],
      bands: [
        { marks: "5–6", descriptor: "Chosen method, sampling, procedure, analysis plan, and ethical safeguards are fully appropriate, well-justified, and clearly aligned with the RQ." },
        { marks: "3–4", descriptor: "Methodology is broadly appropriate and replicable, but justifications for sampling, controls, analysis, or ethics are uneven or partly generic." },
        { marks: "1–2", descriptor: "Methodological choices are poorly justified, incomplete, or mismatched to the stated RQ." },
      ],
    },
    {
      code: "C",
      name: "Data Collection Tool",
      maxMarks: 6,
      summary: "Designs an original, well-constructed, ready-to-deploy data collection instrument (attached in appendix) and justifies how its items/structure maximize validity and minimize Measurement/Bias flaws.",
      topBandMustHave: [
        "Complete, usable **Data Collection Tool in the Appendix** (excluded from word count): e.g., ≥ 5–10 carefully crafted Likert/open survey items, a structured/semi-structured interview schedule with prompts, an operationalized behavioural coding sheet, or complete experimental stimuli + scoring rubric.",
        "Main text explicitly **justifies the construction of the tool** — why specific item formats, scales (e.g. 5-point Likert with reverse-scored items), neutral wording, or stimulus controls were chosen.",
        "Explains concrete steps to strengthen **Measurement validity & reliability** (e.g. avoiding double-barrelled/leading questions, piloting with 3–5 peers, standardizing instructions, ensuring construct alignment with theory from Criterion A).",
        "Zero copy-pasted commercial scales without adaptation/justification — demonstrates authentic student design thinking.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Data collection tool is complete, well-crafted, tightly aligned to the RQ, and accompanied by clear, insightful justification of item/protocol design for validity and reliability." },
        { marks: "3–4", descriptor: "Tool is functional and included in the appendix, but some items are ambiguous/leading or design justifications in the report are superficial." },
        { marks: "1–2", descriptor: "Tool is incomplete, poorly constructed, or disconnected from the stated RQ with minimal justification." },
      ],
    },
    {
      code: "D",
      name: "Discussion",
      maxMarks: 6,
      summary: "Critically evaluates anticipated strengths, methodological limitations, ethical/cultural Responsibility, and realistic refinements through the lens of the 6 Core Concepts.",
      topBandMustHave: [
        "Evaluates **specific methodological limitations** of YOUR proposed design (not generic textbook lists!) anchored explicitly in Core Concepts such as **Bias** (social desirability, sampling/WEIRD bias), **Causality** (confounds or non-experimental limits), and **Measurement** (ecological vs internal validity trade-offs).",
        "Discusses **ethical & societal Responsibility** (potential misuse of findings, cultural sensitivity, participant burden, or Perspective limitations).",
        "Proposes concrete, realistic **modifications or follow-up extensions** (e.g. triangulating self-report survey with behavioural observation or longitudinal follow-up) directly addressing each limitation.",
        "Concludes with the realistic potential contribution/application of the proposed study for the target population — without claiming unproven results!",
      ],
      bands: [
        { marks: "5–6", descriptor: "Thoughtful, balanced evaluation of specific design strengths, limitations, conceptual implications, and justified modifications tightly linked to the proposal." },
        { marks: "3–4", descriptor: "Relevant limitations and improvements are discussed, but conceptual depth or explicit links to the specific proposal are uneven." },
        { marks: "1–2", descriptor: "Superficial, generic evaluation ('small sample size', 'might be biased') with little engagement with the proposed design." },
      ],
    },
  ] as IaCriterion[],
  milestones: [
    {
      phase: "1. Class Practicals & Topic Selection",
      timing: "DP1 Terms 1–3 (Aug–May)",
      tasks: [
        "Complete all 4 compulsory Class Practicals (Experiment, Interview, Observation, Survey) — they build BOTH Paper 2 mastery and IA tool-design skills!",
        "Identify a focused real-world target population and psychological problem linked to your course Contexts.",
        "Confirm your RQ and chosen method with your Tanglin Psychology teacher — remember: NO participant data collection.",
      ],
    },
    {
      phase: "2. Literature Review & Tool Design",
      timing: "DP1 Term 3 → DP2 Term 1 (May–Sep)",
      tasks: [
        "Select 2–4 strong empirical studies/theories grounding your variables and conceptual framework.",
        "Draft your complete Data Collection Tool (≥ 5–10 well-crafted items/stimuli/coding grid) and check every item for leading wording or double-barrels.",
        "Write out your sampling, procedure, planned analysis, and population-specific ethics checklist.",
      ],
    },
    {
      phase: "3. Full First Draft (≤ 2,200 Words)",
      timing: "DP2 Term 1 Mid (Oct)",
      tasks: [
        "Write Criteria A, B, C justification, and D cleanly under 2,200 words (place the full tool & consent template in the Appendix).",
        "Submit your complete first draft for your single formal teacher feedback round.",
      ],
    },
    {
      phase: "4. Refinement & Final Submission",
      timing: "DP2 Term 2 (Jan–Feb)",
      tasks: [
        "Sharpen Criterion C justifications (linking tool items directly to Measurement validity/reliability) and Criterion D conceptual evaluation.",
        "Verify prose word count ≤ 2,200 words, APA referencing, and complete appendix before uploading.",
      ],
    },
  ] as IaMilestone[],
  exemplarStructure: [
    { heading: "1. Introduction & Research Question (Crit A)", targetWords: "450–550 words", whatToInclude: "Real-world psychological issue, specific target population, 2–4 concise empirical/theoretical foundations, Core Concept anchor, and sharp RQ/hypotheses." },
    { heading: "2. Research Methodology & Ethics (Crit B)", targetWords: "600–700 words", whatToInclude: "Justified choice of 1 of 4 methods, sampling strategy & inclusion criteria, operationalized procedure & controls, planned data analysis, and specific ethical safeguards." },
    { heading: "3. Data Collection Tool Justification (Crit C)", targetWords: "450–550 words", whatToInclude: "Justification of your original tool in the Appendix (item format, scale/coding rules, reverse scoring, bias-reduction choices, pilot-testing plan, construct alignment)." },
    { heading: "4. Critical Discussion & Implications (Crit D)", targetWords: "500–600 words", whatToInclude: "Balanced appraisal of strengths & specific limitations via Bias, Causality, Measurement, Perspective & Responsibility, realistic refinements/triangulation, and practical value." },
    { heading: "Appendix (Excluded from Word Count)", targetWords: "Not counted", whatToInclude: "Complete ready-to-use Data Collection Tool (≥ 5–10 items / coding schedule / experimental materials), informed consent & debriefing templates." },
  ] as IaSectionGuide[],
  moderatorTraps: [
    "Actually collecting data or running a legacy 2019 experiment replication — the FA2027 IA is strictly a **Research Proposal** (do NOT test participants!).",
    "Attaching a sloppy or copy-pasted 3-question survey in the appendix without justifying *why* each item format prevents Bias and captures the psychological construct (Criterion C).",
    "Writing vague, unoperationalized variables ('measure stress' or 'measure social media use' instead of specific validated dimensions, timeframes, and scoring rules).",
    "Exceeding **2,200 words** — examiners stop reading at word 2,200, slicing straight through Criterion D Discussion!",
    "Listing generic textbook ethics ('keep it confidential') instead of tailored safeguards for your actual target population (e.g. parental consent + youth assent, signposting school counsellor support if surveying anxiety).",
  ],
  checklist: [
    "Proposal is 100% hypothetical — NO participant data were collected.",
    "Criterion A defines a specific real-world target population and integrates 2–4 credible empirical studies.",
    "Research Question (and operationalized hypotheses, if quantitative) is focused, measurable, and realistic.",
    "Criterion B justifies ONE of the 4 approved FA2027 methods (Experiment, Interview, Observation, or Survey).",
    "Sampling method, step-by-step procedure, controls, and planned data analysis are clear and aligned to the RQ.",
    "Ethical Responsibility safeguards are tailored specifically to the target population and topic.",
    "Appendix includes a complete, original, ready-to-use Data Collection Tool (≥ 5 well-crafted items/materials).",
    "Criterion C prose explicitly justifies tool design choices for Measurement validity, reliability, and low Bias.",
    "Criterion D evaluates specific proposal limitations through the 6 Core Concepts with realistic refinements.",
    "Total main-body word count verified ≤ 2,200 words (appendices, tables, and bibliography excluded).",
  ],
};
