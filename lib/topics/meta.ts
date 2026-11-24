// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Psychology (SL & HL, NEW FA 2027).
// Pure data — safe to import from Node scripts.
//
// Follows the NEW First Assessment May 2027 architecture exclusively:
// 6 Core Concepts × 3 Approaches × 4 Compulsory Contexts + 4 Class Practicals
// + HL Extensions (Culture, Motivation, Technology) + HL Paper 3 Data Analysis.
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Concepts & Core Foundations",
  "Contexts I: Health & Development",
  "Contexts II: Relationships & Learning",
  "HL Extensions & Paper 3",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== CONCEPTS & CORE FOUNDATIONS =======================
  {
    id: "1-concepts-methodology",
    title: "Topic 1: The 6 Core Concepts, Research Methods & Class Practicals",
    strand: "Concepts & Core Foundations",
    icon: "🧭",
    level: "SL",
    curriculum: "IB Psychology FA2027: 6 Core Concepts (Bias, Causality, Change, Measurement, Perspective, Responsibility) & 4 Class Practicals (Paper 2)",
    sections: [
      {
        id: "six-core-concepts",
        heading: "The 6 FA2027 Core Concepts in Psychological Inquiry",
        level: "SL",
        covers: "Bias (sampling, confirmation, demand, cultural/WEIRD), Causality (correlation vs experimental control, bidirectional/third variables), Change (neuroplasticity, lifespan & therapeutic change), Measurement (operationalization, construct/ecological/internal validity, test–retest & inter-rater reliability), Perspective (Biological/Cognitive/Sociocultural triangulation), and Responsibility (ethics & societal impact).",
      },
      {
        id: "experiments-surveys",
        heading: "Class Practicals I: Experiments & Surveys / Questionnaires",
        level: "SL",
        covers: "True, quasi & natural experiments; IV/DV operationalization; independent-measures vs repeated-measures designs (order effects, counterbalancing, random allocation, single/double blind); questionnaires & Likert scales (sampling methods: random, stratified, convenience, snowball; wording bias, social desirability, quantitative descriptive stats).",
      },
      {
        id: "interviews-observations",
        heading: "Class Practicals II: Interviews & Observations",
        level: "SL",
        covers: "Structured, semi-structured & focus-group interviews (rapport, leading questions, social desirability, inductive/deductive thematic analysis, member checking); naturalistic vs controlled, covert vs overt, participant vs non-participant observations (coding schedules, inter-observer reliability, Hawthorne/reactivity effects, methodological triangulation).",
      },
      {
        id: "ethics-unseen-study-paper2",
        heading: "Ethical Responsibility & Paper 2 Unseen-Study Evaluation",
        level: "SL",
        covers: "Human research ethics (informed consent, deception & justified debriefing, right to withdraw, protection from physical/psychological harm, anonymity/confidentiality, vulnerable populations) and animal research ethics (3Rs: Replacement, Reduction, Refinement); structuring Paper 2 Section B critiques around ≥ 2 Core Concepts.",
      },
    ],
  },
  {
    id: "2-core-approaches",
    title: "Topic 2: Core Content Foundations — Biological, Cognitive & Sociocultural",
    strand: "Concepts & Core Foundations",
    icon: "🧠",
    level: "SL",
    curriculum: "IB Psychology FA2027 Core Content: Biological, Cognitive & Sociocultural Approaches (Paper 1 Sec A Foundations)",
    sections: [
      {
        id: "biological-approach",
        heading: "Biological Approach: Brain, Neuroplasticity, Neurotransmitters & Genetics",
        level: "SL",
        covers: "Brain localization vs distributed networks (hippocampus, amygdala, prefrontal cortex, fMRI/MRI imaging), neuroplasticity & synaptic pruning (Maguire taxi drivers, Draganski juggling), neurotransmission & agonists/antagonists (serotonin, dopamine, acetylcholine — Antonova/scopolamine), hormones (cortisol, oxytocin, adrenaline), twin/adoption genetics & evolutionary explanations.",
      },
      {
        id: "cognitive-memory-schemas",
        heading: "Cognitive Approach I: Attention, Memory Models & Schema Theory",
        level: "SL",
        covers: "Selective attention, Multi-Store Model (Atkinson & Shiffrin: sensory, STM capacity/duration, LTM — HM/Milner, Glanzer & Cunitz primacy/recency), Working Memory Model (Baddeley & Hitch: central executive, phonological loop, visuospatial sketchpad, episodic buffer — dual-task studies), Schema Theory (Bartlett 'War of the Ghosts', Brewer & Treyens), and reconstructive memory (Loftus & Palmer).",
      },
      {
        id: "cognitive-thinking-biases",
        heading: "Cognitive Approach II: Dual-Process Thinking, Heuristics & Biases",
        level: "SL",
        covers: "Kahneman & Tversky's Dual-Process Model (System 1 fast/automatic/heuristic vs System 2 slow/deliberative/effortful), availability heuristic, representativeness heuristic, anchoring & framing effects (Tversky & Kahneman Asian Disease problem), confirmation bias (Wason selection task), and emotion–cognition interaction (flashbulb memory: Brown & Kulik, Talarico & Rubin).",
      },
      {
        id: "sociocultural-approach",
        heading: "Sociocultural Approach: Identity, Social Learning, Conformity & Culture",
        level: "SL",
        covers: "Social Identity Theory (Tajfel & Turner: categorization, identification, comparison, minimal group paradigm, in-group favouritism), Social Cognitive Theory (Bandura Bobo doll: attention, retention, reproduction, motivation, self-efficacy), conformity & normative/informational influence (Asch), obedience (Milgram), cultural norms & dimensions (individualism–collectivism), enculturation & acculturation (Berry's 4 strategies).",
      },
    ],
  },

  // ===================== CONTEXTS I: HEALTH & DEVELOPMENT ==================
  {
    id: "3-context-health-wellbeing",
    title: "Topic 3: Context 1 — Health and Well-being",
    strand: "Contexts I: Health & Development",
    icon: "💚",
    level: "SL",
    curriculum: "IB Psychology FA2027 Compulsory Context 1: Mental Health, Physical Health, Stress, Addiction & Interventions",
    sections: [
      {
        id: "diagnosis-classification-bias",
        heading: "Mental Health Diagnosis, Validity, Reliability & Concept of Bias",
        level: "SL",
        covers: "Biopsychosocial model of mental health, diagnostic systems (DSM-5-TR / ICD-11), inter-rater reliability & diagnostic validity, confirmation bias & labelling/stigma (Rosenhan 'On being sane in insane places' & contemporary replications), comorbidity, symptom overlap, and cultural bias / cultural concepts of distress (Perspective & Measurement).",
      },
      {
        id: "aetiology-mental-health",
        heading: "Biopsychosocial Aetiology of Disorders (Depression & Anxiety)",
        level: "SL",
        covers: "Biological factors (genetic vulnerability — Caspi 5-HTT gene × environment interaction, neurotransmitter hypotheses, HPA-axis cortisol dysregulation), Cognitive factors (Beck's negative cognitive triad, cognitive distortions, learned helplessness/attributional style), and Sociocultural factors (Brown & Harris vulnerability/protective model, chronic poverty, social isolation, cultural expression of symptoms).",
      },
      {
        id: "treatments-interventions",
        heading: "Evaluating Treatments: Biomedical, Cognitive (CBT) & Community Care",
        level: "SL",
        covers: "Biomedical interventions (SSRIs blocking serotonin reuptake — Kirsch placebo meta-analysis, side effects & biological reductionism), Cognitive Behavioural Therapy (CBT — cognitive restructuring + behavioural activation, Elkin/DeRubeis efficacy), eclectic/combined approaches, and culturally adapted/community mental-health interventions (Responsibility & Change).",
      },
      {
        id: "stress-addiction-health-promotion",
        heading: "Physical Health, Chronic Stress, Addiction & Health Promotion",
        level: "SL",
        covers: "Physiological stress pathways (SAM adrenaline vs HPA-axis cortisol, Kiecolt-Glaser psychoneuroimmunology & immune suppression), transactional stress appraisal (Lazarus & Folkman) & coping, biopsychosocial mechanisms of substance/behavioural addiction (dopamine reward, cue reactivity, peer/cultural norms), and health promotion models (Health Belief Model, Theory of Planned Behaviour, nudges & structural interventions).",
      },
    ],
  },
  {
    id: "4-context-human-development",
    title: "Topic 4: Context 2 — Human Development",
    strand: "Contexts I: Health & Development",
    icon: "🌱",
    level: "SL",
    curriculum: "IB Psychology FA2027 Compulsory Context 2: Lifespan Brain/Cognitive Development, Attachment, Identity & Resilience",
    sections: [
      {
        id: "brain-maturation-cognitive-dev",
        heading: "Brain Maturation, Synaptic Pruning & Cognitive Development",
        level: "SL",
        covers: "Prenatal & early-life neuroplasticity, synaptic blooming & pruning, adolescent prefrontal cortex vs limbic reward mismatch (Casey/Steinberg risk-taking), Piaget's constructivist stages (schemas, assimilation, accommodation, conservation, egocentrism — critiques via Baillargeon/Hughes), and Vygotsky's sociocultural theory (Zone of Proximal Development, scaffolding, cultural tools & language).",
      },
      {
        id: "attachment-caregiving-culture",
        heading: "Attachment Theory, Internal Working Models & Cultural Variation",
        level: "SL",
        covers: "Bowlby's evolutionary attachment theory & Internal Working Model (monotropy, critical vs sensitive period), Ainsworth's Strange Situation (secure, insecure-avoidant, insecure-resistant, plus Main & Solomon disorganized), cross-cultural meta-analysis (van IJzendoorn & Kroonenberg — Perspective & Measurement bias of Western protocols), and early deprivation/recovery (Rutter Romanian adoptees — Change).",
      },
      {
        id: "identity-moral-socioemotional",
        heading: "Identity Formation, Gender/Social Roles & Socio-Emotional Growth",
        level: "SL",
        covers: "Erikson's psychosocial stages (identity vs role confusion) & Marcia's identity statuses, gender identity & social-cognitive/schema theories (Bandura, Martin & Halverson), peer influence & theory of mind (Baron-Cohen false-belief tasks), resilience & protective factors against childhood adversity (Werner Kauai longitudinal study — Change & Responsibility).",
      },
      {
        id: "developmental-methods-ethics",
        heading: "Developmental Research Designs: Longitudinal, Cross-Sectional & Ethics",
        level: "SL",
        covers: "Comparing longitudinal designs (tracks intra-individual Change, avoids cohort effects, but suffers attrition, practice effects & high cost) vs cross-sectional designs (fast, no attrition, but confounds age with cohort effects) and cross-sequential designs; ethical Responsibility with children & adolescents (parental consent + child assent, right to withdraw, minimizing distress).",
      },
    ],
  },

  // ===================== CONTEXTS II: RELATIONSHIPS & LEARNING =============
  {
    id: "5-context-human-relationships",
    title: "Topic 5: Context 3 — Human Relationships",
    strand: "Contexts II: Relationships & Learning",
    icon: "🤝",
    level: "SL",
    curriculum: "IB Psychology FA2027 Compulsory Context 3: Interpersonal Attraction, Maintenance/Breakdown, Prosociality & Prejudice",
    sections: [
      {
        id: "attraction-biological-cognitive-social",
        heading: "Formation of Relationships: Biological, Cognitive & Cultural Factors",
        level: "SL",
        covers: "Biological/evolutionary explanations (MHC genetic diversity — Wedekind sweaty T-shirt study, oxytocin/vasopressin bonding, Fisher's lust/attraction/attachment neurochemistry), Cognitive factors (similarity–attraction, matching hypothesis, cognitive consistency), and Sociocultural factors (proximity/mere exposure — Festinger, cultural scripts, arranged vs autonomous marriage — Gupta & Singh).",
      },
      {
        id: "maintenance-communication-breakdown",
        heading: "Relationship Maintenance, Attribution, Communication & Dissolution",
        level: "SL",
        covers: "Accommodation & positive illusions (Murray), Gottman's observational research on communication patterns ('Four Horsemen': criticism, contempt, defensiveness, stonewalling & 5:1 positive-to-negative ratio), Rusbult's Investment Model (satisfaction, alternatives, investment), Duck's Phase Model of relationship dissolution, and cultural norms shaping conflict resolution.",
      },
      {
        id: "prosocial-bystander-altruism",
        heading: "Prosocial Behaviour, Bystanderism & Kin/Empathy Explanations",
        level: "SL",
        covers: "Biological/evolutionary kin selection (Hamilton's rule rB > C, Madsen cross-cultural helping) & reciprocal altruism, Cognitive decision-making (Latané & Darley 5-step Bystander Intervention Model: pluralistic ignorance & diffusion of responsibility; Piliavin arousal–cost–reward model), empathy–altruism hypothesis (Batson), and Sociocultural norms (social responsibility, Levine cross-cultural helping).",
      },
      {
        id: "prejudice-stereotyping-conflict",
        heading: "Stereotyping, Prejudice, Intergroup Conflict & Reduction Strategies",
        level: "SL",
        covers: "Origins of stereotyping & prejudice (illusory correlation — Hamilton & Gifford, Social Identity Theory out-group homogeneity, Realistic Conflict Theory — Sherif Robbers Cave), implicit vs explicit bias (IAT measurement critiques), stereotype threat (Steele & Aronson), and evidence-based conflict reduction (Allport's Contact Hypothesis, superordinate goals, Aronson's Jigsaw Classroom).",
      },
    ],
  },
  {
    id: "6-context-learning-cognition",
    title: "Topic 6: Context 4 — Learning and Cognition",
    strand: "Contexts II: Relationships & Learning",
    icon: "📚",
    level: "SL",
    curriculum: "IB Psychology FA2027 Compulsory Context 4: Conditioning, Synaptic Plasticity, Cognitive Load, Reasoning & Memory Reliability",
    sections: [
      {
        id: "conditioning-social-learning",
        heading: "Acquisition of Behaviour: Classical, Operant & Observational Learning",
        level: "SL",
        covers: "Classical conditioning (Pavlov: UCS, UCR, NS, CS, CR; acquisition, extinction, spontaneous recovery, generalization, discrimination; Watson & Rayner Little Albert ethics; biological preparedness/Garcia taste aversion), Operant conditioning (Skinner: positive/negative reinforcement vs punishment, reinforcement schedules — FR/VR/FI/VI, shaping), and observational learning (Bandura, mirror neurons).",
      },
      {
        id: "neurobiology-memory-cognitive-load",
        heading: "Biological & Cognitive Learning: LTP, Cognitive Load & Metacognition",
        level: "SL",
        covers: "Long-Term Potentiation (LTP) & Hebbian synaptic strengthening ('neurons that fire together wire together'), sleep consolidation, Cognitive Load Theory (Sweller: intrinsic, extraneous & germane load within limited working memory), dual coding & retrieval practice (testing effect — Roediger & Karpicke), spaced repetition, and schema-based expertise.",
      },
      {
        id: "eyewitness-memory-reliability",
        heading: "Reliability of Memory, Eyewitness Testimony & Reconstructive Distortion",
        level: "SL",
        covers: "Post-event misinformation effect (Loftus & Palmer car-crash verb manipulation, Loftus & Pickrell 'lost in the mall' false memories), weapon focus & high-arousal stress effects on encoding, own-race bias in facial recognition, Cognitive Interview technique (Fisher & Geiselman) as a Responsibility-driven legal reform.",
      },
      {
        id: "problem-solving-environmental-cognition",
        heading: "Higher-Order Thinking, Executive Function & Environmental Contexts",
        level: "SL",
        covers: "Problem-solving strategies (algorithms vs heuristics, functional fixedness — Duncker candle problem, mental set/Einstellung, insight), executive function (inhibitory control, cognitive flexibility, working-memory updating), socioeconomic & environmental impacts on cognitive development (chronic stress, nutrition, stereotype threat, bilingual executive control).",
      },
    ],
  },

  // ===================== HL EXTENSIONS & PAPER 3 ===========================
  {
    id: "7-hl-extensions",
    title: "Topic 7: HL Extensions — Culture, Motivation & Technology",
    strand: "HL Extensions & Paper 3",
    icon: "🌐",
    level: "HL",
    curriculum: "IB Psychology FA2027 HL Extensions (Culture, Motivation, Technology) integrated across Biological, Cognitive & Sociocultural approaches",
    sections: [
      {
        id: "hl-culture-emic-etic",
        heading: "HL Extension 1: Culture, Emic vs Etic Lenses & Globalization",
        level: "HL",
        covers: "Emic (culture-specific insider) vs etic (assumed universal outsider) research traditions, WEIRD sampling bias (Henrich et al.), cultural neuroscience (chiao/cultural shaping of neural processing), cultural dimensions (individualism–collectivism, power distance, uncertainty avoidance — critiques of ecological fallacy), enculturation, globalization & bicultural frame-switching.",
      },
      {
        id: "hl-motivation-reward-sdt",
        heading: "HL Extension 2: Motivation — Biological, Cognitive & Sociocultural Drivers",
        level: "HL",
        covers: "Neurobiology of motivation (mesolimbic dopamine reward prediction error vs 'wanting/liking'), Deci & Ryan's Self-Determination Theory (autonomy, competence, relatedness; overjustification / intrinsic motivation crowding-out — Lepper et al.), Dweck's achievement goal theory & mindset critiques, and cultural variations in personal vs socially oriented achievement motivation.",
      },
      {
        id: "hl-technology-cognition-social",
        heading: "HL Extension 3: Technology — Digital Cognition, Social Media & AI",
        level: "HL",
        covers: "Cognitive offloading & transactive memory (Sparrow 'Google effect', Ward 'brain drain' smartphone salience), media multitasking & working-memory switching costs (Ophir et al.), social media effects on adolescent well-being & social comparison (Orben & Przybylski small-effect-size nuance vs displacement hypothesis), online disinhibition, algorithmic echo chambers & AI ethical Responsibility.",
      },
      {
        id: "hl-synthesizing-extensions",
        heading: "Synthesizing HL Extensions with the 6 Core Concepts",
        level: "HL",
        covers: "Cross-cutting HL analysis linking Culture, Motivation & Technology simultaneously to Biological, Cognitive & Sociocultural mechanisms (e.g. gamified tech exploiting dopamine + variable-ratio schedules across cultures) and unpacking how Bias, Causality, Change, Measurement, Perspective & Responsibility elevate HL responses.",
      },
    ],
  },
  {
    id: "8-hl-paper3-data-analysis",
    title: "Topic 8: HL Paper 3 — Research Data Analysis & Source Evaluation",
    strand: "HL Extensions & Paper 3",
    icon: "📈",
    level: "HL",
    curriculum: "IB Psychology FA2027 HL Paper 3 (1h 45m, 30 marks, 30%): Quantitative & Qualitative Source Analysis linked to Culture, Motivation & Technology",
    sections: [
      {
        id: "quantitative-descriptive-visual",
        heading: "Quantitative Data: Central Tendency, Dispersion, Graphs & Outliers",
        level: "HL",
        covers: "Choosing mean vs median vs mode (normal vs skewed distributions and outlier sensitivity), interpreting range, IQR & standard deviation (SD as consistency/spread around the mean), reading bar charts with ±1 SD/95% CI error bars, scatterplots (direction, strength, linearity, outliers), and spotting truncated axes or misleading scales.",
      },
      {
        id: "inferential-pvalues-effect-size",
        heading: "Inferential Statistics: Null Hypotheses, p-Values, Correlations & Effect Size",
        level: "HL",
        covers: "Null (H₀) vs alternative (H₁) hypotheses, interpreting p-values (p < 0.05 rejects H₀ — probability of observing data at least as extreme if H₀ is true, NOT probability H₀ is true!), Type I (false positive) vs Type II (false negative) errors, statistical significance vs practical significance (Cohen's d effect size & large-N triviality), Pearson r / Spearman ρ correlation vs causation.",
      },
      {
        id: "qualitative-coding-trustworthiness",
        heading: "Qualitative Source Analysis: Thematic Coding, Credibility & Reflexivity",
        level: "HL",
        covers: "Analysing interview transcripts and open-ended responses (inductive vs deductive coding, latent vs semantic themes), qualitative trustworthiness criteria (credibility via member checking & triangulation, transferability via thick description, dependability via audit trail, confirmability via personal/epistemological reflexivity), and avoiding quantification bias.",
      },
      {
        id: "paper3-exam-strategy",
        heading: "Mastering the 4-Question HL Paper 3 Source Packet",
        level: "HL",
        covers: "Deconstructing unseen mixed-method Paper 3 source packs grounded in Culture, Motivation & Technology: Q1 identifying/interpreting findings directly from quantitative/qualitative sources, Q2 evaluating methodological Bias/Measurement/Causality, Q3 ethical Responsibility & cultural Perspective, and Q4 proposing justified follow-up designs/extensions.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
