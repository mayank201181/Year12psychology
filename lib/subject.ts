// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Psychology (SL & HL).
// Aligned strictly to the NEW IBO Psychology Guide (First Assessment May 2027).
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12psychology",
  cookieName: "y12psychology_session",
  shortName: "IB Psychology",
  fullName: "Year 12–13 IB Diploma Psychology (SL/HL)",
  shortTitle: "IB DP Psychology",
  badge: "IB DP Psychology · NEW First Assessment 2027",
  groupLabel: "Group 3 · Individuals & Societies",
  icon: "🧠",
  themeColorLight: "#7c3aed",
  themeColorDark: "#120a24",
  provisionalBanner: null as string | null,
  tutorName: "Dr Loftus",
  tutorEmoji: "🧠",
  tutorScope: "IB Diploma Psychology (SL & HL, First Assessment May 2027)",
  tutorSystemPrompt: `You are Dr Loftus, a warm, rigorous IB Diploma Psychology (SL & HL, NEW First Assessment May 2027) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned strictly to IBO FA2027 Psychology):
- If the learner asks about a question they are working on, do NOT give the full answer immediately. Ask one guiding question or give only the next small nudge (e.g. "Which of the 6 Core Concepts — Bias, Causality, Change, Measurement, Perspective, or Responsibility — best exposes the flaw in a correlational self-report study?", "How does your Biological explanation interact with Cognitive or Sociocultural factors in this Context?"), then stop and let them reason.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered (then highlight IB FA2027 markband phrasing, operationalization, ethical/methodological critique, and linking empirical research explicitly to the 6 Concepts).
- Follow the NEW IB Psychology First Assessment 2027 syllabus EXCLUSIVELY (NEVER cite the retired 2019 Abnormal/Developmental/Health Options or experimental IA!):
  - **6 Core Concepts:** Bias, Causality, Change, Measurement, Perspective, Responsibility.
  - **3 Content Approaches:** Biological, Cognitive, Sociocultural.
  - **4 Compulsory Contexts:** Health and Well-being, Human Development, Human Relationships, Learning and Cognition.
  - **4 Class Practical Research Methods (Paper 2):** Experiments, Interviews, Observations, Surveys/Questionnaires.
  - **HL Extensions:** Culture, Motivation, Technology + **HL Paper 3** (1h 45m, 30 marks, 30% — quantitative & qualitative source data analysis).
  - **IA: Research Proposal** (max 2,200 words, 24 marks, SL 30% / HL 20%, hypothetical design — NO data collection!).
- Double-check statistical logic (correlation ≠ causation, p < 0.05 vs effect size, mean/median/SD, sampling bias, reflexivity) and study details before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, encouraging, never patronising.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Psychology, research methodology/data analysis, and IA/exam technique. For anything else, kindly steer back to Psychology.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Psychology 6 Concepts, Methods & Studies Toolkit",
  vaultShort: "Psych Toolkit",
  vaultIcon: "🧠",
  vaultBlurb: "The 6 FA2027 Core Concepts, 4 Class Practical methods, key empirical studies matrix, quantitative/qualitative stats rules, and IB examiner mark-savers.",
  vaultSearchPlaceholder: "Filter e.g. Bias, Causality, schema, p-value, reflexivity, Culture…",
  examTitle: "IB Psychology Mock Papers (Paper 1, Paper 2 & HL Paper 3)",
  examShort: "Mock Papers",
  examBlurb: "FA2027 Paper 1 (SAQs, Unseen Contexts & Concept ERQs), Paper 2 (Class Practicals & Unseen Study Evaluation), HL Paper 3 (Quantitative/Qualitative Data Analysis), plus Diagnostic MCQs.",
  iaNavLabel: "IA Proposal",
  iaTitle: "IB Psychology Research Proposal (FA2027 IA)",
  cramBanner: "Stop losing easy FA2027 IB Psychology marks: anchor every ERQ and Paper 2 critique explicitly to the 6 Core Concepts (Bias, Causality, Change, Measurement, Perspective, Responsibility), never claim 'proves' from correlational data, and remember the 2027 IA is a Research Proposal (NO data collection!).",
  searchPlaceholder: "Search, e.g. “Bias”, “Causality”, “schema”, “attachment”, “p-value” or “Culture”",
  sitcomSeriesName: "IB Psychology Studio (Phase C)",
  sitcomBlurb: "Narrated IB Psychology episodes and vertical Concept Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-mcq", expectedCount: 25, level: "SL", paperType: "Diagnostic MCQ Bank · All 8 Topics (SL & HL)" },
  { id: "exam-p1", expectedCount: 15, level: "SL", paperType: "Paper 1 · Approaches, Unseen Contexts & Concept ERQ" },
  { id: "exam-p2", expectedCount: 15, level: "SL", paperType: "Paper 2 · Class Practicals & Unseen Study Critique" },
  { id: "exam-p3-hl", expectedCount: 15, level: "HL", paperType: "Paper 3 (HL Only) · Quantitative & Qualitative Source Analysis" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Concepts & Core Foundations": { slug: "concepts-core", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Contexts I: Health & Development": { slug: "contexts-1", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Contexts II: Relationships & Learning": { slug: "contexts-2", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "HL Extensions & Paper 3": { slug: "hl-extensions", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. The 6 FA2027 Core Concepts (Every Paper & IA!)",
    badge: "FA2027 Core",
    level: "SL",
    lines: [
      "**Bias:** Systematic error from sampling (WEIRD samples), researcher/confirmation bias, social desirability, or demand characteristics.",
      "**Causality:** Only true randomized controlled experiments with IV manipulation & control establish cause–effect; correlations show association, not causation.",
      "**Change:** Neuroplasticity, developmental transitions, therapeutic recovery, behavioural shifts, and longitudinal vs cross-sectional evidence.",
      "**Measurement · Perspective · Responsibility:** Operationalization, reliability & validity (Measurement); Biological/Cognitive/Sociocultural & emic/etic lenses (Perspective); informed consent, debriefing, protection from harm, confidentiality & social application (Responsibility).",
    ],
  },
  {
    title: "2. The 4 Compulsory Class Practicals (Paper 2 & IA)",
    badge: "Paper 2 & IA",
    level: "SL",
    lines: [
      "**Experiments:** Manipulate IV, measure DV, control extraneous variables (independent measures vs repeated measures; counterbalancing & random allocation).",
      "**Interviews:** Structured, semi-structured, or focus-group qualitative data; manage interviewer bias, rapport, member checking & thematic coding.",
      "**Observations:** Naturalistic vs controlled, covert vs overt, participant vs non-participant; inter-observer reliability & Hawthorne reactivity.",
      "**Surveys / Questionnaires:** Likert scales, closed & open items; fast large-N sampling, watch acquiescence, social desirability & wording bias.",
    ],
  },
  {
    title: "3. HL Extensions: Culture, Motivation & Technology",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Culture:** Emic (culture-specific insider) vs etic (assumed universal outsider) research, Hofstede/cultural dimensions, acculturation & avoiding ethnocentrism.",
      "**Motivation:** Mesolimbic dopamine reward pathways, Self-Determination Theory (autonomy, competence, relatedness), intrinsic vs extrinsic crowding-out & growth mindset.",
      "**Technology:** Cognitive offloading (transactive memory / 'Google effect'), attentional switching, social media social-comparison dynamics & AI algorithmic responsibility.",
    ],
  },
  {
    title: "4. HL Paper 3 Quantitative & Qualitative Data Rules",
    badge: "HL Paper 3",
    level: "HL",
    lines: [
      "**Quantitative:** Mean vs median (skew/outliers!), standard deviation (spread/consistency), correlation `r` (`−1` to `+1`), `p < 0.05` (statistically significant — reject `H₀`, NOT '100% proven'!), and effect size (Cohen's `d` — practical importance!).",
      "**Qualitative:** Inductive vs deductive thematic analysis, credibility (triangulation, member checking), transferability (thick description), dependability (audit trail), and researcher **reflexivity**.",
      "**Paper 3 Golden Rule:** Anchor EVERY claim directly to numbers, quotes, or design details in the unseen source packet — never give generic textbook definitions detached from the stimulus!",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🧭",
    title: "Built 100% for the NEW FA2027 IB Psychology Architecture",
    text: "Paper 1 integrates Approaches + 4 Compulsory Contexts + Concept ERQs; Paper 2 tests your 4 Class Practicals + unseen-study concept evaluation; HL Paper 3 tests unseen quantitative/qualitative data linked to Culture, Motivation & Technology.",
  },
  {
    icon: "🔗",
    title: "Concept-First Evaluation beats generic 'small sample' filler",
    text: "Top-band examiners reward explicit analytical links to **Bias, Causality, Change, Measurement, Perspective, and Responsibility** rather than memorised bullet lists of 'low ecological validity'.",
  },
  {
    icon: "🔬",
    title: "Paper 1 Sec B & Paper 2 Sec B test UNSEEN scenarios",
    text: "Quote specifics from the vignette or unseen study (participant group, variable operationalization, cultural setting) in every paragraph so your psychological theory directly solves the prompt.",
  },
  {
    icon: "📋",
    title: "Remember: the FA2027 IA is a Research Proposal (NO data collection)",
    text: "You design a rigorous, ethical hypothetical investigation (≤ 2,200 words) using one of the 4 approved methods plus a complete ≥ 5-item data collection tool in the appendix — do NOT run participants!",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "State", ao: "AO1", meaning: "Give a specific psychological term, value, variable, or brief fact without explanation.", examTip: "Be concise — one clear statement or operationalized variable." },
  { term: "Define", ao: "AO1", meaning: "Give the precise meaning of a psychological construct or methodological term.", examTip: "Include all essential defining features (e.g. operational definition or mechanism)." },
  { term: "Outline", ao: "AO2", meaning: "Give a brief account or summary of a theory, study, or method.", examTip: "Hit aim, key mechanism/procedure, and core finding crisply." },
  { term: "Describe", ao: "AO2", meaning: "Give a detailed account of a psychological phenomenon, data pattern, or study.", examTip: "For Paper 3 graphs/tables, quote exact means, SDs, p-values, or participant quotes!" },
  { term: "Explain", ao: "AO3", meaning: "Give a detailed account including psychological mechanisms, causes, or methodological reasons.", examTip: "Link theory/concept → empirical evidence → explicit relevance to the prompt or unseen scenario." },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two or more concepts, approaches, or methods.", examTip: "Contrast BOTH sides explicitly ('Emic research studies behaviour from within a culture, whereas etic research applies constructs across cultures')." },
  { term: "Compare and contrast", ao: "AO3", meaning: "Give an account of similarities AND differences between two theories, approaches, or designs throughout.", examTip: "Use explicit comparative connectives ('both…', 'whereas…') across clear criteria." },
  { term: "Analyse", ao: "AO3", meaning: "Break down a study, dataset, or behaviour to highlight essential elements and relationships.", examTip: "Dissect variables, confounds, trends, and underlying psychological mechanisms." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review including a range of arguments, perspectives, or limitations.", examTip: "Weigh supporting empirical evidence, methodological/conceptual critiques, and alternative perspectives." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths and limitations of a theory, treatment, or study.", examTip: "Apply the 6 Core Concepts (Bias, Causality, Measurement, Perspective, Responsibility) and reach a reasoned conclusion." },
  { term: "Examine", ao: "AO3", meaning: "Consider an argument or concept in a way that uncovers underlying assumptions and interrelationships.", examTip: "Interrogate hidden assumptions (e.g. cultural universality, reductionism, self-report honesty)." },
  { term: "To what extent", ao: "AO3", meaning: "Consider the merits or otherwise of a claim, supported by appropriate empirical evidence and balanced reasoning.", examTip: "Take a nuanced, evidence-based stance ('to a substantial extent for…, though limited by…') rather than binary yes/no." },
];
