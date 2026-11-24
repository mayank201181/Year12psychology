import type { MarkBand, TopicPractice } from "../../types";

// Reusable IB-aligned analytical markband templates for FA 2027 Paper 1 responses.
const BANDS_4: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Partial knowledge of the psychological theory or mechanism; empirical link is vague, absent, or weakly connected to the prompt.",
    indicators: ["Identifies the relevant approach/term", "Limited mechanism detail or missing study link"],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Accurate, clear explanation of the psychological mechanism explicitly supported by appropriate empirical evidence and precise terminology.",
    indicators: ["Explains *how* the mechanism operates", "Links a named study's findings directly to the prompt"],
  },
];

const BANDS_6: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Descriptive outline with superficial terminology; little connection between theory, empirical study, and the command term.",
    indicators: ["Basic definitions only", "Study described without linking to the psychological principle"],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Clear knowledge and understanding with accurate empirical support; some analysis or evaluation, though underdeveloped or uneven.",
    indicators: ["Accurate mechanism + named study findings", "Begins to apply a Core Concept or methodological critique"],
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Focused, well-structured, and critical response integrating precise mechanisms, relevant research, and explicit conceptual evaluation.",
    indicators: ["Explicitly addresses the command term throughout", "Weaves Core Concept evaluation into findings cleanly"],
  },
];

const BANDS_9: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the approaches/theories; predominantly descriptive with weak empirical linkage and minimal critical thinking.",
    indicators: ["Narrative description of studies", "No explicit synthesis with FA 2027 Core Concepts"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Competent understanding supported by relevant studies; clear analytical points and developing evaluation, though synthesis or nuance is incomplete.",
    indicators: ["Accurate explanation of two or more mechanisms/studies", "Identifies methodological strengths/limitations and at least one Core Concept"],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Thorough, sustained, and balanced evaluation demonstrating nuanced conceptual insight, explicit empirical integration, and a reasoned conclusion.",
    indicators: ["Integrates multiple studies/perspectives critically", "Sustained engagement with Core Concepts (e.g. Causality, Bias, Measurement, Perspective, Change, Responsibility)", "Well-justified evaluative judgement directly answering the command term"],
  },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 Qs — fast check across all 4 sections)
  // ===========================================================================
  quiz: [
    {
      id: "2-core-approaches-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "biological-approach",
      strategy: "Recall synaptic drug classifications",
      question:
        "In **Antonova et al. (2011)**, scopolamine bound to muscarinic acetylcholine receptors without activating them, blocking endogenous signalling. What single pharmacological term describes a substance that blocks postsynaptic receptors in this way?",
      answer: { type: "text", accept: ["antagonist", "acetylcholine antagonist", "competitive antagonist"], display: "antagonist" },
      traps: [
        {
          spec: { type: "text", accept: ["agonist", "acetylcholine agonist"] },
          feedback: "Careful — an agonist *mimics* or *enhances* neurotransmitter signalling; scopolamine *blocks* receptors.",
        },
      ],
      solution: [
        "Substances that bind to postsynaptic receptors without triggering ion flow — thereby preventing the native neurotransmitter from binding — are called **antagonists**.",
        "Mnemonic: **ANT**-agonist = **ANTI**-signal.",
      ],
      commonError: "Swapping agonist (enhances/mimics) with antagonist (blocks).",
      hints: ["Think of the opposite of an agonist (which activates or amplifies signalling)."],
    },
    {
      id: "2-core-approaches-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "biological-approach",
      strategy: "Compute twin concordance percentage",
      question:
        "In a behavioural genetics sample, 39 out of 60 monozygotic (MZ) twin pairs are concordant for a sleep rhythm trait. Calculate the MZ concordance rate as a whole-number percentage.",
      answer: { type: "number", value: 65, display: "65%" },
      traps: [
        {
          spec: { type: "number", value: 39 },
          feedback: "39 is the raw count of concordant pairs — divide by 60 and multiply by 100 to obtain the percentage.",
        },
      ],
      solution: [
        "Concordance % = {{(39 / 60) * 100}}.",
        "{{39 / 60 = 0.65}}, so the concordance rate is **65%**.",
      ],
      hints: ["Divide concordant pairs (39) by total twin pairs (60), then multiply by 100."],
    },
    {
      id: "2-core-approaches-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "cognitive-memory-schemas",
      strategy: "Match task modality to Working Memory component",
      question:
        "Which component of **Baddeley & Hitch's Working Memory Model** handles spoken words, acoustic rehearsal, and subvocal repetition (the 'inner ear' and 'inner voice')?",
      answer: { type: "text", accept: ["phonological loop", "the phonological loop"], display: "phonological loop" },
      traps: [
        {
          spec: { type: "text", accept: ["visuospatial sketchpad", "visuo-spatial sketchpad"] },
          feedback: "The visuospatial sketchpad handles images and spatial layouts ('inner eye'), not speech/auditory streams.",
        },
        {
          spec: { type: "text", accept: ["central executive"] },
          feedback: "The central executive directs attention across subsystems; the verbal/auditory slave system has its own name.",
        },
      ],
      solution: [
        "Verbal and auditory material is held briefly in the **phonological store** ('inner ear') and refreshed by the **articulatory control process** ('inner voice').",
        "Together, these form the **phonological loop**.",
      ],
      hints: ["Look for the verbal/speech slave subsystem in Baddeley & Hitch's model (related to 'phone' = sound)."],
    },
    {
      id: "2-core-approaches-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cognitive-memory-schemas",
      strategy: "Calculate serial-position recall percentage",
      question:
        "In a Glanzer & Cunitz replication, 25 students attempt immediate free recall of a 15-word list. Across the first 4 words (100 word-trials total), 78 words are recalled correctly. What is the **primacy recall percentage**? Give a whole number.",
      answer: { type: "number", value: 78, display: "78%" },
      solution: [
        "Primacy recall % = {{(78 / 100) * 100 = 78%}}.",
      ],
      hints: [
        "Total primacy word-trials = 25 students × 4 words = 100.",
        "Divide words recalled (78) by total trials (100) and express as a percentage.",
      ],
    },
    {
      id: "2-core-approaches-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "cognitive-thinking-biases",
      strategy: "Diagnose System 1 heuristics from everyday cues",
      question:
        "After reading headlines about two rare train derailments this week, a commuter concludes train travel is far riskier than driving on highways despite lower rail fatality statistics. Name the specific **heuristic** driving this judgement.",
      answer: {
        type: "text",
        accept: ["availability heuristic", "availability", "the availability heuristic"],
        display: "availability heuristic",
      },
      traps: [
        {
          spec: { type: "text", accept: ["representativeness heuristic", "representativeness"] },
          feedback: "Representativeness judges probability by matching traits to a stereotype; here risk is inflated by *how easily vivid examples come to mind*.",
        },
        {
          spec: { type: "text", accept: ["anchoring", "anchoring bias"] },
          feedback: "Anchoring requires starting from a specific numerical reference figure; here vivid media recall drives the distortion.",
        },
      ],
      solution: [
        "Estimating event probability by how easily vivid, emotionally salient examples are retrieved from memory is the **availability heuristic** (Tversky & Kahneman, 1973).",
      ],
      hints: ["Focus on *ease of recalling vivid recent examples* from memory."],
    },
    {
      id: "2-core-approaches-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "cognitive-thinking-biases",
      strategy: "Apply Wason's falsification logic",
      question:
        "In **Wason's (1966)** card task, four cards show **U, M, 6, 9**, and the rule is: *'If a card has a vowel on one side, it has an even number on the other.'* Turning **U** is one necessary check. Which **single other card** (type the character only) MUST be turned to test whether the rule is false?",
      answer: { type: "text", accept: ["9", "card 9"], display: "9" },
      traps: [
        {
          spec: { type: "text", accept: ["6", "card 6"] },
          feedback: "Turning 6 is the classic confirmation-bias trap! Even if a consonant sits behind 6, the rule ('if vowel → even') is not broken.",
        },
        {
          spec: { type: "text", accept: ["m", "card m"] },
          feedback: "The rule makes no claim about what must appear behind a consonant (M).",
        },
      ],
      solution: [
        "The rule 'If vowel (P) → even (Q)' is falsified ONLY by a card combining a **vowel** with an **odd number**.",
        "Therefore you must turn **U** (to ensure it does not have an odd number behind it) and **9** (to ensure it does not have a vowel behind it).",
      ],
      commonError: "Turning the even number (6) to look for confirming evidence instead of the odd number (9) to test for falsification.",
      hints: [
        "Ask which visible number could hide a vowel on its reverse side and thereby *break* the rule.",
        "A consonant behind 6 does NOT break the rule, whereas a vowel behind an odd number DOES.",
      ],
    },
    {
      id: "2-core-approaches-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "sociocultural-approach",
      strategy: "Locate quadrant in Berry's 2×2 acculturation matrix",
      question:
        "After moving abroad, a family preserves its heritage language, food, and religious holidays at home while actively refusing friendships, clubs, or civic interaction with the host society. Name this strategy from **Berry's (1997)** acculturation model.",
      answer: { type: "text", accept: ["separation", "separation strategy"], display: "Separation" },
      traps: [
        {
          spec: { type: "text", accept: ["marginalization", "marginalisation"] },
          feedback: "Marginalization loses *both* heritage culture and host contact; here heritage culture is strongly maintained (Yes / No).",
        },
        {
          spec: { type: "text", accept: ["assimilation"] },
          feedback: "Assimilation drops heritage culture to adopt host society (No / Yes) — the exact reverse of this family's profile.",
        },
      ],
      solution: [
        "Heritage maintenance = **Yes**; Host society participation = **No** → **Separation**.",
      ],
      hints: ["Check Berry's two axes: Heritage maintained (Yes) + Host participation (No)."],
    },
    {
      id: "2-core-approaches-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "sociocultural-approach",
      strategy: "Calculate Asch conformity rate",
      question:
        "In a university Asch replication, 10 naïve participants each complete 12 critical trials (120 critical trials total) and match the wrong majority on 42 trials. Calculate the conformity rate as a whole-number percentage.",
      answer: { type: "number", value: 35, display: "35%" },
      solution: [
        "Conformity % = {{(42 / 120) * 100 = 35%}}.",
      ],
      hints: [
        "Divide conforming trials (42) by total critical trials (120).",
        "{{42 / 120 = 7 / 20 = 0.35}}, then multiply by 100.",
      ],
    },
    {
      id: "2-core-approaches-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "biological-approach",
      marks: 3,
      strategy: "Define mechanism → link Draganski longitudinal MRI → tie to Change",
      question:
        "Explain how **Draganski et al. (2004)** demonstrated experience-driven **neuroplasticity** (**Change**).",
      modelAnswer:
        "Draganski et al. (2004) randomly assigned non-jugglers to three months of juggling training or a non-juggling control group and took longitudinal structural MRI scans before training, after mastery, and after three months of rest. Jugglers developed significantly expanded grey-matter volume in the mid-temporal visual-motion cortex (V5/hMT) compared to controls, confirming neural branching from practice. When jugglers stopped practising for three months, that grey-matter expansion partially shrank back toward baseline via synaptic pruning, demonstrating that adult brain structure undergoes dynamic, reversible change in response to environmental demands.",
      markScheme: [
        {
          point: "Identifies experimental longitudinal MRI design comparing trained jugglers against a control group.",
          keywords: ["control", "mri", "three months", "longitudinal", "randomly"],
        },
        {
          point: "States increased grey-matter volume in visual-motion cortex (V5/hMT / mid-temporal area) after training.",
          keywords: ["grey-matter", "grey matter", "gray matter", "v5", "mid-temporal", "visual"],
        },
        {
          point: "Links partial reversal after stopping practice to synaptic pruning and reversible adult plasticity.",
          keywords: ["pruning", "reversible", "shrank", "stopped", "baseline", "declined"],
        },
      ],
      hints: [
        "State what the experimental group trained on for 3 months and how brain structure was measured.",
        "Include *both* the post-training grey-matter increase (area V5/hMT) and what happened 3 months *after* training stopped.",
      ],
    },
    {
      id: "2-core-approaches-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "sociocultural-approach",
      marks: 3,
      strategy: "Contrast heritage acquisition vs host-contact adaptation with examples",
      question:
        "Distinguish between **enculturation** and **acculturation** using relevant psychological concepts or research.",
      modelAnswer:
        "Enculturation is the process by which individuals learn and internalize the norms, values, and skills of their own heritage culture from childhood through observation and participation — for instance, Samoan children acquiring fishing and rank etiquette through everyday community immersion (Odden & Rochat, 2004). By contrast, acculturation occurs when individuals or groups undergo psychological and behavioural adaptation following sustained contact with a second, host culture, such as migrants navigating Berry's (1997) strategies of integration, assimilation, separation, or marginalization. Thus enculturation builds primary cultural identity, whereas acculturation manages cross-cultural transition and acculturative stress.",
      markScheme: [
        {
          point: "Defines enculturation as acquiring the norms/practices of one's own first/heritage culture.",
          keywords: ["heritage", "first culture", "own culture", "childhood", "internalize"],
        },
        {
          point: "Defines acculturation as adapting following sustained contact with a second/host culture.",
          keywords: ["host", "second", "sustained contact", "migrants", "transition"],
        },
        {
          point: "Supports the distinction with accurate empirical/theoretical examples (e.g. Odden & Rochat 2004 and Berry 1997 strategies).",
          keywords: ["odden", "samoan", "berry", "integration", "assimilation", "stress"],
        },
      ],
      hints: [
        "Clarify *which* culture is being learned in each process (first/heritage vs second/host).",
        "Pair enculturation with Odden & Rochat (2004) and acculturation with Berry (1997).",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (p1: 15 Qs, p2: 15 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1 — PAPER 1 SECTION A SAQs & APPLIED CORE (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "2-core-approaches-p1",
      title: "Practice Paper 1 — Core Mechanisms & Paper 1 Section A SAQs",
      level: "SL",
      questions: [
        {
          id: "2-core-approaches-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "biological-approach",
          strategy: "Match brain hub to memory consolidation deficit",
          question:
            "Following bilateral surgical removal of a medial temporal lobe structure to treat severe epilepsy, patient **H.M.** (Scoville & Milner, 1957) could no longer consolidate new explicit long-term memories while retaining intact short-term digit span. Name that medial temporal lobe structure.",
          answer: { type: "text", accept: ["hippocampus", "the hippocampus", "hippocampi"], display: "hippocampus" },
          traps: [
            {
              spec: { type: "text", accept: ["amygdala"] },
              feedback: "The amygdala processes emotional salience and fear conditioning; explicit memory consolidation depends primarily on the neighbouring structure.",
            },
            {
              spec: { type: "text", accept: ["prefrontal cortex", "pfc"] },
              feedback: "The prefrontal cortex drives executive control and working memory, not medial temporal explicit consolidation.",
            },
          ],
          solution: [
            "H.M. underwent bilateral removal of the **hippocampus** (and adjacent medial temporal tissue), causing severe anterograde amnesia for new declarative memories.",
          ],
          hints: ["It sits in the medial temporal lobe and also expanded posteriorly in Maguire's taxi drivers."],
        },
        {
          id: "2-core-approaches-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "biological-approach",
          strategy: "Calculate Falconer heritability from twin counts",
          question:
            "In a twin study of musical pitch perception, 68 out of 80 MZ twin pairs are concordant, while 40 out of 80 DZ twin pairs are concordant. Compute Falconer's rough heritability estimate {{h^2 = 2(r_{MZ} - r_{DZ})}} as a whole-number percentage.",
          answer: { type: "number", value: 70, display: "70%" },
          traps: [
            {
              spec: { type: "number", value: 35 },
              feedback: "35% is only the raw difference (85% − 50%) — remember to multiply by 2 in Falconer's formula.",
            },
          ],
          solution: [
            "{{r_{MZ} = 68 / 80 = 0.85}} (85%) and {{r_{DZ} = 40 / 80 = 0.50}} (50%).",
            "{{h^2 = 2(0.85 - 0.50) = 2(0.35) = 0.70}}, or **70%**.",
          ],
          hints: [
            "First convert 68/80 and 40/80 into decimals or percentages.",
            "Subtract DZ from MZ, then multiply the difference by 2.",
          ],
        },
        {
          id: "2-core-approaches-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "biological-approach",
          strategy: "Match endocrine hormone to empirical study",
          question:
            "In **Kosfeld et al. (2005)** and **Baumgartner et al. (2008)**, intranasal administration of which neuropeptide hormone increased trusting monetary transfers to human partners and dampened amygdala reactivity after betrayal?",
          answer: { type: "text", accept: ["oxytocin"], display: "oxytocin" },
          traps: [
            {
              spec: { type: "text", accept: ["cortisol"] },
              feedback: "Cortisol is the HPA-axis stress hormone studied by Newcomer et al. (1999) for impairing declarative memory.",
            },
            {
              spec: { type: "text", accept: ["adrenaline", "epinephrine"] },
              feedback: "Adrenaline drives acute fight-or-flight arousal and emotional memory consolidation (Cahill & McGaugh).",
            },
          ],
          solution: [
            "**Oxytocin** (synthesized in the hypothalamus and released via the posterior pituitary) modulated social trust and reduced amygdala betrayal activation in Kosfeld et al. (2005) and Baumgartner et al. (2008).",
          ],
          hints: [
            "It is a hormone (not a synaptic neurotransmitter) frequently associated with social bonding and in-group trust.",
            "Starts with 'O' and was delivered as a nasal spray in Swiss economic trust-game experiments.",
          ],
        },
        {
          id: "2-core-approaches-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cognitive-memory-schemas",
          strategy: "Read values from a serial-position recall graph",
          diagram: `<svg viewBox="0 0 540 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph plotting percentage recall against serial word position from 1 to 15 for immediate recall and 30-second delayed recall conditions">
  <rect x="0" y="0" width="540" height="270" fill="#ffffff" rx="10"/>
  <text x="270" y="22" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Free Recall Across 15 Word Positions</text>
  <!-- Grid & Axes -->
  <line x1="65" y1="45" x2="65" y2="215" stroke="#1c1630" stroke-width="1.6"/>
  <line x1="65" y1="215" x2="495" y2="215" stroke="#1c1630" stroke-width="1.6"/>
  <!-- Horizontal gridlines: 0, 20, 40, 60, 80, 100 -->
  <line x1="65" y1="181" x2="495" y2="181" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="65" y1="147" x2="495" y2="147" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="65" y1="113" x2="495" y2="113" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="65" y1="79" x2="495" y2="79" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="65" y1="45" x2="495" y2="45" stroke="#e2dcf0" stroke-width="1"/>
  <text x="56" y="219" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">0%</text>
  <text x="56" y="185" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">20%</text>
  <text x="56" y="151" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">40%</text>
  <text x="56" y="117" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">60%</text>
  <text x="56" y="83" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">80%</text>
  <text x="56" y="49" text-anchor="end" font-family="sans-serif" font-size="9.5" fill="#5b5375">100%</text>
  <text x="20" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#1c1630" transform="rotate(-90 20 132)">Recall (%)</text>
  <!-- X ticks: 1, 3, 5, 8, 11, 13, 15 -->
  <text x="80" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">1</text>
  <text x="137" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">3</text>
  <text x="195" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">5</text>
  <text x="280" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">8</text>
  <text x="366" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">11</text>
  <text x="423" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">13</text>
  <text x="480" y="232" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#5b5375">15</text>
  <text x="280" y="252" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#1c1630">Serial Word Position in List</text>

  <!-- Immediate Recall curve (purple solid): pos1=84%, pos3=72%, pos5=42%, pos8=32%, pos11=38%, pos13=64%, pos15=88% -->
  <polyline fill="none" stroke="#7c3aed" stroke-width="2.6" points="80,72.2 137,92.6 195,143.6 280,160.6 366,150.4 423,106.2 480,65.4"/>
  <circle cx="80" cy="72.2" r="4" fill="#7c3aed"/><circle cx="137" cy="92.6" r="3.5" fill="#7c3aed"/>
  <circle cx="195" cy="143.6" r="3.5" fill="#7c3aed"/><circle cx="280" cy="160.6" r="4" fill="#7c3aed"/>
  <circle cx="366" cy="150.4" r="3.5" fill="#7c3aed"/><circle cx="423" cy="106.2" r="3.5" fill="#7c3aed"/>
  <circle cx="480" cy="65.4" r="4" fill="#7c3aed"/>
  <text x="480" y="55" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#4c1d95">88%</text>
  <text x="80" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#4c1d95">84%</text>

  <!-- 30s Delayed Recall curve (orange dashed): pos1=80%, pos3=68%, pos5=40%, pos8=30%, pos11=32%, pos13=28%, pos15=26% -->
  <polyline fill="none" stroke="#c2410c" stroke-width="2.4" stroke-dasharray="6 4" points="80,79 137,99.4 195,147 280,164 366,160.6 423,167.4 480,170.8"/>
  <circle cx="80" cy="79" r="3.5" fill="#c2410c"/><circle cx="480" cy="170.8" r="4" fill="#c2410c"/>
  <text x="480" y="186" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#9a3412">26%</text>

  <!-- Legend -->
  <rect x="200" y="42" width="215" height="44" rx="6" fill="#f8fafc" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="210" y1="56" x2="236" y2="56" stroke="#7c3aed" stroke-width="2.6"/>
  <text x="242" y="60" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#4c1d95">Immediate free recall</text>
  <line x1="210" y1="74" x2="236" y2="74" stroke="#c2410c" stroke-width="2.4" stroke-dasharray="5 3"/>
  <text x="242" y="78" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#9a3412">30 s counting delay</text>
</svg>`,
          question:
            "Using the plotted free-recall graph above, calculate the **percentage-point decrease** at **Word Position 15** caused by the 30-second counting delay.",
          answer: { type: "number", value: 62, display: "62" },
          traps: [
            {
              spec: { type: "number", value: 26 },
              feedback: "26% is the delayed recall value itself — subtract it from immediate recall (88%) to get the decrease.",
            },
          ],
          solution: [
            "Read Position 15 on the graph: Immediate recall = **88%**, 30-second delayed recall = **26%**.",
            "Percentage-point decrease = {{88 - 26 = 62}} percentage points.",
            "This collapse reflects STM displacement/decay during the distractor task, eliminating the recency effect while Position 1 (primacy, LTM) remains ~80–84%.",
          ],
          hints: [
            "Locate Position 15 at the far right of the horizontal axis and read both labelled percentages.",
            "Subtract the 30-second delayed percentage (26%) from the immediate recall percentage (88%).",
          ],
        },
        {
          id: "2-core-approaches-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cognitive-memory-schemas",
          strategy: "Identify Baddeley (2000) fourth component",
          question:
            "Which Working Memory component was added by **Baddeley (2000)** to bind verbal, visual, and chronological information into unified episodes and link working memory directly with Long-Term Memory?",
          answer: { type: "text", accept: ["episodic buffer", "the episodic buffer"], display: "episodic buffer" },
          traps: [
            {
              spec: { type: "text", accept: ["central executive"] },
              feedback: "The central executive was part of the original 1974 model and controls attention rather than acting as a multimodal storage buffer.",
            },
          ],
          solution: [
            "Baddeley (2000) added the **episodic buffer** as a limited-capacity multimodal integrator connecting the slave systems with Long-Term Memory.",
          ],
          hints: [
            "The name refers to holding coherent *episodes* in a temporary *buffer*.",
            "It was the fourth box added twenty-six years after the original 1974 Working Memory Model.",
          ],
        },
        {
          id: "2-core-approaches-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cognitive-memory-schemas",
          strategy: "Distinguish Bartlett's reconstructive distortions",
          question:
            "In **Bartlett's (1932)** serial reproduction of *The War of the Ghosts*, participants omitted unfamiliar supernatural plot threads so that the story shrank dramatically from ~330 words to under 150 words. What term describes this shortening and omission of unfamiliar details?",
          answer: { type: "text", accept: ["levelling", "leveling"], display: "levelling" },
          traps: [
            {
              spec: { type: "text", accept: ["sharpening"] },
              feedback: "Sharpening is the opposite — highlighting or exaggerating specific memorable details.",
            },
            {
              spec: { type: "text", accept: ["assimilation"] },
              feedback: "Assimilation replaces unfamiliar terms with culturally familiar equivalents ('canoes' → 'boats'); shortening/omission has its own term.",
            },
          ],
          solution: [
            "Simplifying and shortening a story by dropping unfamiliar or peripheral details is termed **levelling** (or leveling).",
          ],
          hints: [
            "Think of flattening a bumpy profile down — shortening and stripping away unfamiliar details.",
            "Bartlett paired it with 'sharpening' and 'assimilation'.",
          ],
        },
        {
          id: "2-core-approaches-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cognitive-thinking-biases",
          strategy: "Compute expected value in a framing problem",
          question:
            "In an emergency framing scenario involving 480 islanders, Plan A saves 160 people for certain. Plan B gives a probability {{p}} that all 480 are saved and {{1 - p}} that nobody is saved. What exact probability {{p}} (as a simplified fraction) makes Plan B mathematically equal in expected lives saved to Plan A?",
          answer: { type: "fraction", n: 1, d: 3, simplest: true, allowDecimal: false, display: "{{1/3}}" },
          solution: [
            "Set expected value equal to 160: {{480 * p = 160}}.",
            "Solve for {{p}}: {{p = 160 / 480 = 1/3}}.",
          ],
          hints: [
            "Expected lives saved under Plan B is {{480 * p}}.",
            "Divide 160 by 480 and simplify the fraction completely.",
          ],
        },
        {
          id: "2-core-approaches-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cognitive-thinking-biases",
          strategy: "Identify bias in stereotype/base-rate neglect scenarios",
          question:
            "Knowing that a conference contains 95 software engineers and 5 museum curators, a guest chats with a quiet attendee who enjoys Renaissance art and immediately concludes he is more likely a museum curator. Name the **heuristic** causing this base-rate neglect.",
          answer: {
            type: "text",
            accept: ["representativeness heuristic", "representativeness", "the representativeness heuristic"],
            display: "representativeness heuristic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["availability heuristic", "availability"] },
              feedback: "Availability relies on ease of recalling vivid instances; here the guest matches personality cues to an occupational prototype while ignoring the 95:5 base rate.",
            },
          ],
          solution: [
            "Judging probability by how closely an individual fits a mental prototype while ignoring objective base rates (95 vs 5) is the **representativeness heuristic** (Tversky & Kahneman, 1983).",
          ],
          hints: [
            "The guest is asking: 'How closely does this person *represent* my stereotype of a curator?'",
            "It is the same heuristic responsible for the Linda conjunction fallacy.",
          ],
        },
        {
          id: "2-core-approaches-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "sociocultural-approach",
          strategy: "Name Milgram's psychological state explaining obedience",
          question:
            "In **Milgram's (1963)** agency theory of obedience, what term describes the psychological shift in which an individual stops feeling personally responsible for their actions and views themselves as merely carrying out an authority figure's wishes?",
          answer: { type: "text", accept: ["agentic state", "the agentic state", "agentic shift"], display: "agentic state" },
          traps: [
            {
              spec: { type: "text", accept: ["autonomous state"] },
              feedback: "The autonomous state is the opposite — feeling freely responsible for one's own moral choices.",
            },
          ],
          solution: [
            "Milgram termed this the **agentic state** (entered via an **agentic shift**), contrasting it with the self-directed **autonomous state**.",
          ],
          hints: [
            "Think of becoming an *agent* (instrument) for an authority figure.",
            "It contrasts directly with the 'autonomous state'.",
          ],
        },
        {
          id: "2-core-approaches-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "biological-approach",
          marks: 4,
          markbands: BANDS_4,
          strategy: "Define synaptic mechanism → explain agonist/antagonist → apply Antonova et al. (2011)",
          question:
            "Explain the role of **one neurotransmitter** in human behaviour, referring to **one relevant study**. *(4 marks — IB Paper 1 Section A SAQ)*",
          modelAnswer:
            "Acetylcholine (ACh) is a neurotransmitter concentrated in cholinergic pathways projecting to the hippocampus, where it facilitates attention and the encoding of new spatial and declarative memories by binding to postsynaptic muscarinic receptors to trigger postsynaptic firing. Blocking these receptors with an antagonist disrupts synaptic transmission and impairs memory formation. In Antonova et al. (2011), 20 healthy male volunteers completed a double-blind, placebo-controlled, repeated-measures fMRI experiment receiving either scopolamine (an ACh muscarinic antagonist) or a placebo before navigating a virtual-reality Arena task to locate a hidden pole. Participants under scopolamine exhibited significantly reduced hippocampal BOLD activation and made significantly more spatial navigation errors than under placebo, providing experimental causal evidence that ACh signalling supports hippocampal spatial memory encoding.",
          markScheme: [
            {
              point: "Names acetylcholine (or serotonin/dopamine) and outlines its synaptic receptor binding role in behaviour.",
              keywords: ["acetylcholine", "ach", "muscarinic", "serotonin", "dopamine"],
            },
            {
              point: "Explains the agonistic or antagonistic mechanism (e.g. scopolamine blocking postsynaptic ACh receptors).",
              keywords: ["antagonist", "scopolamine", "blocks", "receptors", "reuptake"],
            },
            {
              point: "Accurately outlines procedure of Antonova et al. (2011) (double-blind placebo fMRI VR Arena task) or equivalent study.",
              keywords: ["antonova", "placebo", "fmri", "virtual", "arena", "double-blind"],
            },
            {
              point: "Links empirical findings (reduced hippocampal activation and spatial navigation errors) to the neurotransmitter's causal role.",
              keywords: ["hippocampal", "spatial", "errors", "encoding", "causal"],
            },
          ],
          hints: [
            "Choose acetylcholine (ACh) paired with Antonova et al. (2011), or serotonin paired with Crockett et al. (2010).",
            "Make sure you explain *how* the drug acts at the synapse (antagonist blocking postsynaptic receptors), not just the study's outcome.",
          ],
        },
        {
          id: "2-core-approaches-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "cognitive-memory-schemas",
          marks: 4,
          markbands: BANDS_4,
          strategy: "Define WMM slave subsystems → explain dual-task logic → link Baddeley et al. (1975) or K.F.",
          question:
            "Explain how **Working Memory Model** research challenges the unitary Short-Term Memory store proposed by the **Multi-Store Model**. *(4 marks — IB Paper 1 Section A SAQ)*",
          modelAnswer:
            "Atkinson and Shiffrin's Multi-Store Model depicted Short-Term Memory as a single passive unitary box, which implies that any two simultaneous tasks should compete equally for capacity. Baddeley and Hitch's Working Memory Model challenged this by splitting active short-term processing into a modality-free Central Executive supervising specialized slave subsystems — the Phonological Loop for auditory-verbal information and the Visuospatial Sketchpad for visual-spatial imagery (plus the later Episodic Buffer). In Baddeley et al.'s (1975) dual-task experiments, participants tracked a moving visual target while simultaneously completing a verbal reasoning task with minimal drop in accuracy, whereas performing two simultaneous visuospatial tasks caused severe interference. Similarly, neuropsychological patient K.F. (Shallice & Warrington, 1970) showed impaired auditory digit span alongside intact visual short-term memory, confirming separate domain-specific subsystems rather than one unitary store.",
          markScheme: [
            {
              point: "Identifies MSM's limitation of portraying STM as a single passive unitary store.",
              keywords: ["single", "passive", "atkinson", "box", "competing"],
            },
            {
              point: "Outlines WMM's specialized subsystems (central executive, phonological loop, visuospatial sketchpad).",
              keywords: ["central executive", "phonological loop", "visuospatial sketchpad", "slave"],
            },
            {
              point: "Cites supporting empirical evidence (Baddeley et al. 1975 dual-task interference or Shallice & Warrington 1970 patient K.F.).",
              keywords: ["dual-task", "dual task", "shallice", "k.f.", "tracking", "digit span"],
            },
            {
              point: "Explains explicitly why modality-specific interference or dissociation falsifies a single unitary STM.",
              keywords: ["interference", "separate", "dissociation", "domain-specific", "subsystems"],
            },
          ],
          hints: [
            "Contrast MSM's *one box* prediction with what actually happens when two tasks use *different* modalities vs the *same* modality.",
            "Support with Baddeley et al. (1975) dual-task findings and/or patient K.F. (Shallice & Warrington, 1970).",
          ],
        },
        {
          id: "2-core-approaches-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "cognitive-memory-schemas",
          marks: 4,
          markbands: BANDS_4,
          strategy: "Define schema → outline Loftus & Palmer Exp 1 & 2 → link reconstructive Bias",
          question:
            "Explain how **schemas** can produce reconstructive distortion in memory, referring to **one empirical study**. *(4 marks — IB Paper 1 Section A SAQ)*",
          modelAnswer:
            "Schemas are organized cognitive frameworks of prior knowledge and expectations stored in long-term memory that actively fill gaps during encoding and retrieval, making recall reconstructive rather than a literal recording. When post-event cues activate a particular schema, new schema-consistent details can blend with the original memory trace and introduce systematic bias. In Loftus and Palmer (1974), participants watched traffic-accident films and estimated car speed after hearing different critical verbs; the violent verb 'smashed' triggered a severe-collision schema yielding a mean estimate of 40.5 mph versus 31.8 mph for 'contacted'. Crucially, one week later in Experiment 2, 32% of participants in the 'smashed' condition falsely recalled seeing non-existent broken glass compared with 14% for 'hit', demonstrating that schema activation actively reconstructs memory.",
          markScheme: [
            {
              point: "Defines schemas as organized prior knowledge frameworks that actively guide encoding/retrieval.",
              keywords: ["frameworks", "prior knowledge", "expectations", "long-term memory"],
            },
            {
              point: "Explains the reconstructive mechanism (filling gaps / merging post-event or cultural expectations with traces).",
              keywords: ["blend", "fill gaps", "merge", "literal", "bias", "trace"],
            },
            {
              point: "Accurately describes a relevant study (Loftus & Palmer 1974, Bartlett 1932, or Brewer & Treyens 1981).",
              keywords: ["loftus", "smashed", "bartlett", "ghosts", "brewer", "office"],
            },
            {
              point: "Provides specific empirical results demonstrating false/altered recall (e.g. 40.5 mph & 32% broken glass, or 30% books, or assimilation).",
              keywords: ["40.5", "broken glass", "32%", "boats", "books", "assimilation"],
            },
          ],
          hints: [
            "Define what a schema is before introducing your study (Loftus & Palmer 1974, Bartlett 1932, or Brewer & Treyens 1981).",
            "Include specific empirical numbers or concrete recall distortions to earn full marks.",
          ],
        },
        {
          id: "2-core-approaches-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "cognitive-thinking-biases",
          marks: 4,
          markbands: BANDS_4,
          strategy: "Define Dual-Process framing & loss aversion → cite Asian Disease data",
          question:
            "Explain how **Dual-Process Theory** and **Prospect Theory** account for **framing effects** in decision-making, using **one relevant study**. *(4 marks — IB Paper 1 Section A SAQ)*",
          modelAnswer:
            "In Kahneman and Tversky's Dual-Process Model, automatic System 1 responds intuitively to the emotional wording of a choice while effortful System 2 often fails to compute objective expected values across equivalent descriptions. Prospect Theory explains the directional reversal through loss aversion: subjective pain from a loss looms roughly twice as large as subjective pleasure from an equivalent gain, making people risk-averse for gains yet risk-seeking to avoid sure losses. In Tversky and Kahneman's (1981) Asian Disease study (600 lives at risk), all options had an identical expected value of 200 lives saved. Under the gain frame ('200 saved'), 72% chose the certain risk-averse option, whereas under the mathematically identical loss frame ('400 will die'), 78% switched to the risk-seeking gamble.",
          markScheme: [
            {
              point: "Links framing to rapid intuitive System 1 processing vs unengaged analytical System 2 verification.",
              keywords: ["system 1", "system 2", "intuitive", "expected value", "automatic"],
            },
            {
              point: "Explains Prospect Theory's loss aversion (losses weigh ~2× heavier than equivalent gains → risk-averse gains, risk-seeking losses).",
              keywords: ["loss aversion", "risk-averse", "risk-seeking", "twice", "pain"],
            },
            {
              point: "Accurately outlines Tversky & Kahneman (1981) Asian Disease procedure (600 people; equivalent gain vs loss frames).",
              keywords: ["tversky", "asian disease", "600", "200", "400"],
            },
            {
              point: "Reports the preference reversal statistics (72% sure option in gain frame vs 78% gamble in loss frame).",
              keywords: ["72%", "78%", "gamble", "reversal", "switched"],
            },
          ],
          hints: [
            "Explain *both* why System 1 reacts to wording AND why Prospect Theory predicts opposite risk preferences in gains vs losses.",
            "Include the Asian Disease proportions (72% vs 78%) and confirm equal expected value (200 saved).",
          ],
        },
        {
          id: "2-core-approaches-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "sociocultural-approach",
          marks: 4,
          markbands: BANDS_4,
          strategy: "Trace C-I-C → positive distinctiveness → apply Tajfel et al. (1971)",
          question:
            "Explain how **Social Identity Theory** accounts for **in-group favouritism**, referring to **one empirical study**. *(4 marks — IB Paper 1 Section A SAQ)*",
          modelAnswer:
            "Tajfel and Turner's (1979) Social Identity Theory proposes that self-esteem depends partly on group memberships via three cognitive-motivational processes: social categorization divides people into in-groups and out-groups, social identification ties personal self-concept to in-group norms, and social comparison drives individuals to seek positive distinctiveness by elevating their in-group over out-groups. This pursuit of relative superiority generates in-group favouritism even without realistic conflict over resources. In Tajfel et al.'s (1971) minimal group paradigm, 14–15-year-old British schoolboys were sorted into arbitrary groups based on Klee versus Kandinsky painting preferences and allocated points to anonymous peers via matrices. Boys systematically chose maximum difference in favour of their own group — even sacrificing higher absolute points for their in-group — proving mere categorization triggers in-group bias.",
          markScheme: [
            {
              point: "Names and explains the three SIT processes: categorization, identification, and social comparison.",
              keywords: ["categorization", "identification", "social comparison"],
            },
            {
              point: "Explains the motivational link to self-esteem and positive distinctiveness.",
              keywords: ["self-esteem", "positive distinctiveness", "superiority", "relative"],
            },
            {
              point: "Outlines Tajfel et al.'s (1971) minimal group paradigm (trivial Klee/Kandinsky sorting + anonymous matrices).",
              keywords: ["tajfel", "minimal group", "klee", "kandinsky", "matrices", "arbitrary"],
            },
            {
              point: "Reports key finding (preferring maximum difference over maximum absolute/joint profit).",
              keywords: ["maximum difference", "sacrificing", "absolute", "joint profit", "mere categorization"],
            },
          ],
          hints: [
            "Walk cleanly through C–I–C (Categorization → Identification → Comparison → Positive Distinctiveness).",
            "In Tajfel et al. (1971), highlight that boys sacrificed *maximum absolute gain* just to maximize the *gap* over the out-group.",
          ],
        },
        {
          id: "2-core-approaches-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "sociocultural-approach",
          marks: 6,
          markbands: BANDS_6,
          strategy: "Define ARRM + vicarious reinforcement → cite Bandura (1961/1965) → evaluate ethics/validity",
          question:
            "Explain **Social Cognitive Theory** using **one or more empirical studies**, and evaluate **one methodological or ethical limitation**. *(6 marks)*",
          modelAnswer:
            "Bandura's Social Cognitive Theory proposes that humans acquire behaviours indirectly by observing models rather than solely through direct conditioning. Observational learning is governed by four cognitive mediational processes: attention to a salient or similar model, retention as a symbolic memory representation, motor reproduction capability, and motivation driven by vicarious reinforcement and self-efficacy. In Bandura, Ross and Ross (1961), 72 preschoolers observed either an aggressive adult hitting a Bobo doll, a non-aggressive adult, or no model; children exposed to the aggressive model imitated novel aggressive acts significantly more often, particularly for same-sex models. Furthermore, Bandura (1965) showed children who saw the model punished imitated less spontaneously yet reproduced the aggression once offered incentives, separating mental acquisition from performance. Methodologically, however, hitting an inflatable toy designed to bounce back lacks ecological validity for real interpersonal violence, and ethically exposing young children to adult aggression raises protection-from-harm Responsibility concerns.",
          markScheme: [
            {
              point: "Defines observational/vicarious learning as indirect acquisition through observing models.",
              keywords: ["observational", "vicarious", "models", "indirect"],
            },
            {
              point: "Correctly outlines all four ARRM mediational processes (attention, retention, reproduction, motivation) and self-efficacy.",
              keywords: ["attention", "retention", "reproduction", "motivation", "self-efficacy"],
            },
            {
              point: "Accurately presents Bandura, Ross & Ross (1961) Bobo doll procedure and findings (imitation + same-sex effect).",
              keywords: ["bobo", "72", "preschoolers", "same-sex", "imitated"],
            },
            {
              point: "Integrates Bandura (1965) vicarious punishment/incentive finding separating acquisition from performance (or deeper SCT detail).",
              keywords: ["punished", "incentives", "acquisition", "performance", "1965"],
            },
            {
              point: "Evaluates a concrete methodological limitation (artificial inflatable doll / low ecological validity / short-term measurement).",
              keywords: ["ecological validity", "inflatable", "toy", "artificial", "short-term"],
            },
            {
              point: "Evaluates an ethical Responsibility concern (exposing children to aggressive adult modelling / harm / consent).",
              keywords: ["ethical", "harm", "responsibility", "children", "consent"],
            },
          ],
          hints: [
            "Include all four ARRM mediators (Attention, Retention, Reproduction, Motivation) plus vicarious reinforcement.",
            "Combine Bandura (1961) with Bandura (1965) if you want top-band depth separating learning from performance.",
            "Finish with a sharp evaluation of ecological validity (toy doll ≠ real human) and ethical Responsibility.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2 — CONCEPT-LINKED ANALYSIS & EXTENDED RESPONSES (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "2-core-approaches-p2",
      title: "Practice Paper 2 — Concept-Linked Evaluation & Extended Responses",
      level: "SL",
      questions: [
        {
          id: "2-core-approaches-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "cognitive-memory-schemas",
          strategy: "Compute relative percentage increase between Loftus & Palmer verb conditions",
          question:
            "In **Loftus & Palmer (1974)**, participants asked how fast the cars were going when they **'contacted'** estimated a mean speed of **31.8 mph**, while participants hearing **'smashed'** estimated **40.5 mph**. Calculate the percentage increase from 'contacted' to 'smashed', rounded to **1 decimal place**.",
          answer: { type: "number", value: 27.4, tolerance: 0.1, display: "27.4%" },
          traps: [
            {
              spec: { type: "number", value: 8.7, tolerance: 0.05 },
              feedback: "8.7 mph is the raw speed difference — divide by the baseline (31.8) and multiply by 100 for the percentage increase.",
            },
            {
              spec: { type: "number", value: 21.5, tolerance: 0.1 },
              feedback: "You divided by 40.5 instead of the baseline 31.8 ('from contacted to smashed').",
            },
          ],
          solution: [
            "Difference = {{40.5 - 31.8 = 8.7}} mph.",
            "Percentage increase = {{(8.7 / 31.8) * 100 ≈ 27.358%}}, which rounds to **27.4%**.",
          ],
          hints: [
            "Use {{((V_2 - V_1) / V_1) * 100}} with {{V_1 = 31.8}} and {{V_2 = 40.5}}.",
            "Compute {{8.7 / 31.8 * 100}} and round to 1 decimal place.",
          ],
        },
        {
          id: "2-core-approaches-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "biological-approach",
          strategy: "Identify serotonin transporter gene from Caspi et al. (2003)",
          question:
            "In **Caspi et al.'s (2003)** longitudinal Gene × Environment study of 847 New Zealanders, which serotonin transporter gene (commonly written in abbreviated form) showed short-allele vulnerability to depression under high life stress?",
          answer: { type: "text", accept: ["5-htt", "5htt", "5-httlpr", "serotonin transporter gene"], display: "5-HTT" },
          solution: [
            "Caspi et al. (2003) examined short vs long alleles of the **5-HTT** (or **5-HTTLPR**) serotonin transporter gene.",
          ],
          hints: [
            "Its shorthand begins with the chemical shorthand for serotonin (5-HT) plus a letter for 'transporter'.",
            "Format: digit-hyphen-three letters.",
          ],
        },
        {
          id: "2-core-approaches-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "sociocultural-approach",
          strategy: "Calculate obedience percentage-point reduction across Milgram variations",
          question:
            "In **Milgram (1963)**, 26 out of 40 participants obeyed up to 450 V in the Yale baseline condition, compared with 4 out of 40 in the two-rebel-peers variation. By how many **percentage points** did full obedience drop?",
          answer: { type: "number", value: 55, display: "55" },
          traps: [
            {
              spec: { type: "number", value: 22 },
              feedback: "22 is the drop in raw participant count (26 − 4); convert both counts out of 40 into percentages first.",
            },
          ],
          solution: [
            "Baseline obedience = {{(26 / 40) * 100 = 65%}}.",
            "Two-rebel-peers obedience = {{(4 / 40) * 100 = 10%}}.",
            "Percentage-point drop = {{65 - 10 = 55}} percentage points.",
          ],
          hints: [
            "Convert 26/40 and 4/40 into percentages first.",
            "Subtract 10% from 65%.",
          ],
        },
        {
          id: "2-core-approaches-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "sociocultural-approach",
          strategy: "Read unlabelled quadrant on Berry's 2×2 acculturation matrix",
          diagram: `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unlabelled two-by-two acculturation grid showing Heritage Maintenance Yes or No across the top and Host Participation Yes or No along the left side with quadrants marked P, Q, R, and S">
  <rect x="0" y="0" width="460" height="250" fill="#ffffff" rx="10"/>
  <text x="260" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#1c1630">Maintain Heritage Culture?</text>
  <text x="180" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d">YES</text>
  <text x="340" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#c2410c">NO</text>

  <text x="26" y="142" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#1c1630" transform="rotate(-90 26 142)">Host Society Contact?</text>
  <text x="68" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d">YES</text>
  <text x="68" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#c2410c">NO</text>

  <rect x="102" y="58" width="152" height="80" rx="8" fill="#f1eef9" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="178" y="104" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#4c1d95">Quadrant P</text>

  <rect x="264" y="58" width="152" height="80" rx="8" fill="#f1eef9" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="340" y="104" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#4c1d95">Quadrant Q</text>

  <rect x="102" y="148" width="152" height="80" rx="8" fill="#f1eef9" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="178" y="194" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#4c1d95">Quadrant R</text>

  <rect x="264" y="148" width="152" height="80" rx="8" fill="#f1eef9" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="340" y="194" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#4c1d95">Quadrant S</text>
</svg>`,
          question:
            "Inspect the acculturation matrix above. Name the specific strategy from **Berry (1997)** that belongs in **Quadrant S** (typically associated with the highest acculturative stress).",
          answer: { type: "text", accept: ["marginalization", "marginalisation"], display: "Marginalization" },
          traps: [
            {
              spec: { type: "text", accept: ["separation"] },
              feedback: "Separation sits in Quadrant R (Heritage = Yes, Host = No); Quadrant S is No on both axes.",
            },
            {
              spec: { type: "text", accept: ["assimilation"] },
              feedback: "Assimilation sits in Quadrant Q (Heritage = No, Host = Yes); Quadrant S is No on both axes.",
            },
          ],
          solution: [
            "Quadrant S lies at **Maintain Heritage Culture = No** and **Host Society Contact = No**.",
            "That cell defines **Marginalization** (P = Integration, Q = Assimilation, R = Separation, S = Marginalization).",
          ],
          hints: [
            "Read the column header above Quadrant S and the row header to the left of Quadrant S.",
            "Which strategy represents disconnection from *both* heritage culture and host society?",
          ],
        },
        {
          id: "2-core-approaches-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cognitive-thinking-biases",
          strategy: "Identify anchoring bias from numerical shift scenario",
          question:
            "Before bidding on a vintage camera online, Group 1 is shown a random serial number ending in **92** and bids an average of **$145**, while Group 2 sees a serial number ending in **14** and bids **$88**. Name the specific cognitive bias illustrated.",
          answer: {
            type: "text",
            accept: ["anchoring", "anchoring bias", "anchoring and adjustment", "anchoring effect"],
            display: "anchoring bias",
          },
          traps: [
            {
              spec: { type: "text", accept: ["framing", "framing effect"] },
              feedback: "Framing compares gain vs loss wording of identical outcomes; here an irrelevant starting *number* pulls numerical estimates.",
            },
          ],
          solution: [
            "Allowing an arbitrary initial number (92 vs 14) to pull subsequent numerical judgements due to insufficient adjustment is **anchoring bias** (Tversky & Kahneman, 1974).",
          ],
          hints: [
            "Notice that the serial number has zero logical link to the camera's value, yet acts like a heavy weight holding estimates near it.",
            "Recall Tversky & Kahneman's rigged wheel-of-fortune experiment.",
          ],
        },
        {
          id: "2-core-approaches-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cognitive-thinking-biases",
          strategy: "Identify the error in the Linda problem",
          question:
            "In **Tversky & Kahneman (1983)**, rating *'Linda is a bank teller and is active in the feminist movement'* as more probable than *'Linda is a bank teller'* violates {{P(X ∩ Y) <= P(X)}}. What specific logical **fallacy** is this error called?",
          answer: { type: "text", accept: ["conjunction fallacy", "the conjunction fallacy"], display: "conjunction fallacy" },
          traps: [
            {
              spec: { type: "text", accept: ["ecological fallacy"] },
              feedback: "The ecological fallacy applies group cultural averages to individuals; this probability violation concerns the *conjunction* ('AND') of two events.",
            },
          ],
          solution: [
            "Judging the joint probability of two combined events ('bank teller AND feminist') as higher than one constituent event alone ('bank teller') is the **conjunction fallacy**.",
          ],
          hints: [
            "In logic, combining two statements with 'AND' is called a *conjunction*.",
            "Two-word term ending in 'fallacy'.",
          ],
        },
        {
          id: "2-core-approaches-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "sociocultural-approach",
          strategy: "Recall Bandura's four ARRM mediational processes",
          question:
            "A young gymnast watches an Olympic floor routine carefully (**Attention**), remembers the sequence vividly (**Retention**), and wants desperately to win a medal (**Motivation**), yet still cannot execute a double backflip because she lacks the core strength and coordination. Which of Bandura's four mediational processes is the missing bottleneck?",
          answer: {
            type: "text",
            accept: ["reproduction", "motor reproduction", "behavioural reproduction", "behavioral reproduction"],
            display: "motor reproduction",
          },
          solution: [
            "In Bandura's ARRM model (Attention, Retention, **Motor Reproduction**, Motivation), lacking the physical or cognitive capability to enact a stored representation reflects the **motor reproduction** stage.",
          ],
          hints: [
            "Three of the four ARRM letters are already named in the question stem — which 'R' is missing?",
            "It refers to the physical/motor capability to *reproduce* the modelled action.",
          ],
        },
        {
          id: "2-core-approaches-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "sociocultural-approach",
          strategy: "Identify cognitive perception bias in Social Identity Theory",
          question:
            "During inter-house sports day, students view members of their own house as diverse unique individuals, yet assume everyone in the rival house 'thinks and behaves exactly the same way'. What Social Identity Theory term describes perceiving out-group members as far more similar to one another than they really are?",
          answer: {
            type: "text",
            accept: ["out-group homogeneity", "outgroup homogeneity", "out-group homogeneity effect", "outgroup homogeneity effect"],
            display: "out-group homogeneity",
          },
          traps: [
            {
              spec: { type: "text", accept: ["in-group favouritism", "ingroup favoritism", "in-group bias"] },
              feedback: "In-group favouritism refers to preferring/rewarding one's own group; viewing rivals as 'all alike' has a specific term meaning sameness.",
            },
          ],
          solution: [
            "Seeing out-group members as interchangeable ('all alike') while appreciating in-group individuality is the **out-group homogeneity** effect.",
          ],
          hints: [
            "The second word comes from the root *homo-* meaning 'same/uniform'.",
            "Two-word SIT term: out-group _________.",
          ],
        },
        {
          id: "2-core-approaches-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "biological-approach",
          marks: 6,
          markbands: BANDS_6,
          strategy: "Explain twin concordance logic → apply Gottesman/Bouchard & Caspi → evaluate Causality & equal-environments assumption",
          question:
            "Evaluate the use of **twin studies** in investigating genetic influences on human behaviour, referencing the Core Concept of **Causality**. *(6 marks)*",
          modelAnswer:
            "Twin studies compare concordance rates between monozygotic (MZ) twins sharing nearly 100% of segregating DNA and dizygotic (DZ) twins sharing approximately 50% to estimate genetic predisposition. Consistently higher MZ than DZ concordance — such as Bouchard et al.'s (1990) Minnesota Study of Twins Reared Apart finding roughly 70% of IQ variance associated with genetics, or Gottesman's (1991) ~48% MZ versus ~17% DZ concordance for schizophrenia — supports biological heritability while concordance below 100% proves environmental mediation. However, from a Causality perspective, twin studies are quasi-experimental and correlational rather than true experiments because genes cannot be randomly assigned. Critics highlight the flawed equal-environments assumption: MZ twins are often dressed alike and treated more identically than DZ twins, confounding genetic similarity with shared social environment, and twin designs alone miss dynamic Gene × Environment interactions such as Caspi et al.'s (2003) 5-HTT stress finding.",
          markScheme: [
            {
              point: "Explains MZ (~100% DNA) vs DZ (~50% DNA) concordance comparison logic.",
              keywords: ["monozygotic", "dizygotic", "100%", "50%", "concordance"],
            },
            {
              point: "Cites relevant empirical twin evidence (e.g. Bouchard et al. 1990 or Gottesman 1991) accurately.",
              keywords: ["bouchard", "minnesota", "gottesman", "70%", "48%"],
            },
            {
              point: "Notes strength: MZ concordance below 100% demonstrates non-determinism / environmental role.",
              keywords: ["below 100", "environmental", "discordant", "predisposition"],
            },
            {
              point: "Applies Causality critique: correlational / quasi-experimental design cannot randomly manipulate genes.",
              keywords: ["correlational", "quasi-experimental", "manipulate", "randomly"],
            },
            {
              point: "Evaluates the equal-environments assumption (MZ twins experience more similar treatment, confounding nature and nurture).",
              keywords: ["equal-environments", "equal environments", "treated", "confounding"],
            },
            {
              point: "Integrates Gene × Environment interaction nuance (e.g. Caspi et al. 2003 5-HTT) or small/biased sample limits.",
              keywords: ["caspi", "5-htt", "interaction", "epigenetics", "sample"],
            },
          ],
          hints: [
            "Balance *strengths* (natural genetic control of 100% vs 50% DNA; reared-apart designs) against *limitations*.",
            "Directly address **Causality**: why can't twin concordance alone cleanly separate nature from nurture (equal-environments assumption)?",
          ],
        },
        {
          id: "2-core-approaches-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "cognitive-memory-schemas",
          marks: 6,
          markbands: BANDS_6,
          strategy: "Structure explicit similarities and differences between MSM and WMM with empirical evidence",
          question:
            "Compare and contrast the **Multi-Store Model (Atkinson & Shiffrin, 1968)** and the **Working Memory Model (Baddeley & Hitch, 1974; 2000)** of memory. *(6 marks)*",
          modelAnswer:
            "Both the Multi-Store Model (MSM) and Working Memory Model (WMM) conceptualize memory as a structural information-processing system composed of distinct limited-capacity short-term storage separate from Long-Term Memory, and both are supported by neuropsychological dissociations such as patient H.M. (for MSM's STM–LTM split) and patient K.F. (for WMM's verbal–visual split). However, they contrast sharply in architecture and function. First, MSM models Short-Term Memory as a single passive unitary buffer transferring items mainly via rote maintenance rehearsal, supported by Glanzer and Cunitz's (1966) serial-position delay curve. By contrast, WMM replaces unitary STM with an active multi-component workspace — a Central Executive coordinating the Phonological Loop, Visuospatial Sketchpad, and Episodic Buffer — explaining dual-task performance when verbal and visual tasks run concurrently (Baddeley et al., 1975). Finally, while MSM offers a broader macro-map including the Sensory Register, WMM gives richer insight into everyday active processing yet struggles with Measurement precision around its vaguely specified Central Executive.",
          markScheme: [
            {
              point: "Identifies a clear similarity (both structural cognitive models distinguishing limited-capacity short-term processing from LTM).",
              keywords: ["both", "information-processing", "limited-capacity", "distinct"],
            },
            {
              point: "Identifies a second similarity (both supported by brain-damaged neuropsychological case studies: H.M. and K.F.).",
              keywords: ["neuropsychological", "dissociations", "h.m.", "k.f."],
            },
            {
              point: "Contrasts unitary passive STM (MSM) with active multi-component workspace (WMM: CE, PL, VSS, EB).",
              keywords: ["unitary", "passive", "active", "central executive", "phonological loop", "visuospatial"],
            },
            {
              point: "Links specific empirical evidence to MSM (Glanzer & Cunitz 1966 serial position / H.M.) and WMM (Baddeley et al. 1975 dual-task).",
              keywords: ["glanzer", "serial-position", "dual-task", "concurrently"],
            },
            {
              point: "Contrasts scope: MSM explicitly models the Sensory Register and LTM transfer, whereas WMM focuses mainly on active STM.",
              keywords: ["sensory register", "scope", "macro", "transfer", "rehearsal"],
            },
            {
              point: "Evaluates theoretical/Measurement trade-offs (e.g. MSM oversimplifies rehearsal vs WMM's under-specified Central Executive).",
              keywords: ["measurement", "vaguely", "homunculus", "oversimplifies", "operationalize"],
            },
          ],
          hints: [
            "For 'Compare and contrast', you MUST cover *both* similarities and differences — never just write two separate summaries!",
            "Pair every contrast point with evidence (Glanzer & Cunitz / H.M. vs Baddeley dual-task / K.F.).",
          ],
        },
        {
          id: "2-core-approaches-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "cognitive-thinking-biases",
          marks: 6,
          markbands: BANDS_6,
          strategy: "Outline Brown & Kulik → contrast Talarico & Rubin longitudinal findings → evaluate Measurement & Bias",
          question:
            "Evaluate the theory of **flashbulb memory** as an explanation of emotion–cognition interaction, referencing the Core Concept of **Measurement**. *(6 marks)*",
          modelAnswer:
            "Brown and Kulik (1977) hypothesized that shocking, consequential public events activate a specialized 'Now Print!' neural mechanism creating unusually vivid, permanent, and accurate flashbulb memories. Their early retrospective survey on JFK's assassination seemed to show widespread vivid recall of personal reception contexts. However, retrospective self-reports suffer severe Measurement flaws because researchers lack an objective baseline recorded immediately after the event. Talarico and Rubin (2003) solved this longitudinal Measurement problem by questioning 54 Duke students on 12 September 2001 about both 9/11 and an ordinary recent event, then retesting them up to 32 weeks later. Crucially, factual consistency decayed at the exact same rate for 9/11 and everyday memories, refuting the claim of photographic accuracy — yet subjective confidence and vividness stayed uniquely high for 9/11. Thus emotion reliably distorts metamemory certainty rather than shielding traces from reconstructive decay, though even Day-1 reports cannot fully rule out immediate post-event media contamination.",
          markScheme: [
            {
              point: "Outlines Brown & Kulik's (1977) flashbulb memory / 'Now Print!' mechanism linking intense emotion to vivid permanent recall.",
              keywords: ["brown", "now print", "shocking", "vivid", "permanent"],
            },
            {
              point: "Critiques early retrospective Measurement limitations (no immediate Day-1 baseline to verify factual accuracy).",
              keywords: ["retrospective", "baseline", "verify", "self-reports"],
            },
            {
              point: "Accurately details Talarico & Rubin's (2003) longitudinal repeated-measures comparison (9/11 vs everyday event from 12 Sept 2001).",
              keywords: ["talarico", "9/11", "everyday", "longitudinal", "32 weeks"],
            },
            {
              point: "Clearly distinguishes equal factual consistency decay from sustained high subjective confidence.",
              keywords: ["consistency", "decayed", "same rate", "confidence"],
            },
            {
              point: "Draws evaluative conclusion about emotion–cognition interaction (emotion inflates metamemory certainty, not photographic accuracy).",
              keywords: ["metamemory", "certainty", "photographic", "reconstructive"],
            },
            {
              point: "Adds nuanced Measurement limitation (e.g. media rehearsal / overnight contamination before Day 1 or coding subjectivity).",
              keywords: ["media", "contamination", "rehearsal", "coding", "student sample"],
            },
          ],
          hints: [
            "Start with Brown & Kulik (1977), then show *why* their retrospective design created a **Measurement** problem.",
            "Show how Talarico & Rubin (2003) fixed that Measurement flaw and separated *accuracy* from *confidence*.",
          ],
        },
        {
          id: "2-core-approaches-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "sociocultural-approach",
          marks: 6,
          markbands: BANDS_6,
          strategy: "Explain individualism–collectivism & Asch → cite Bond & Smith / Berry → critique ecological fallacy & Change",
          question:
            "Discuss how **cultural dimensions** influence **conformity**, referring to relevant empirical research. *(6 marks)*",
          modelAnswer:
            "Cultural dimensions such as individualism versus collectivism shape whether individuals prioritize personal autonomy or group harmony, directly altering how people respond to majority pressure. In individualist cultures valuing an independent self-construal, conformity is often viewed negatively as weakness, whereas in collectivist cultures emphasizing an interdependent self-construal, aligning with group consensus signals social maturity and cohesion. Supporting this, Bond and Smith's (1996) meta-analysis of 133 Asch line-judgement replications across 17 countries found significantly higher conformity rates in collectivist samples (e.g. Fiji, Zimbabwe) than individualist Western samples. Similarly, Berry (1967) found substantially greater conformity among agricultural Temne communities (requiring cooperative food storage) than among autonomous Inuit hunters. Nevertheless, cultural explanations must avoid the ecological fallacy — national averages mask vast within-culture individual variation — and Bond and Smith also revealed historical Change as US conformity declined after the 1950s, showing cultural norms evolve dynamically alongside economic shifts.",
          markScheme: [
            {
              point: "Defines individualism vs collectivism (and independent vs interdependent self-construal) in relation to group norms.",
              keywords: ["individualism", "collectivism", "harmony", "autonomy", "interdependent"],
            },
            {
              point: "Accurately integrates Bond & Smith's (1996) meta-analysis (133 Asch studies, 17 countries: higher collectivist conformity).",
              keywords: ["bond", "smith", "133", "17", "meta-analysis"],
            },
            {
              point: "Integrates Berry (1967) Temne vs Inuit ecological-economic conformity contrast (or equivalent cross-cultural study).",
              keywords: ["berry", "temne", "inuit", "agricultural", "hunters"],
            },
            {
              point: "Evaluates the ecological fallacy (national dimension scores do not predict every individual's behaviour).",
              keywords: ["ecological fallacy", "within-culture", "averages", "stereotyping"],
            },
            {
              point: "Evaluates historical Change (US conformity fell since Asch 1951; cultures are not static).",
              keywords: ["change", "declined", "1950s", "historical", "static"],
            },
            {
              point: "Notes methodological/etic Measurement caution (imposing Western Asch lab tasks across diverse cultural settings).",
              keywords: ["etic", "western", "lab", "measurement", "validity", "globalization"],
            },
          ],
          hints: [
            "Link Hofstede / Markus & Kitayama directly to Bond & Smith (1996) and Berry (1967).",
            "In your evaluation, explicitly mention the **ecological fallacy** and cultural **Change** over time.",
          ],
        },
        {
          id: "2-core-approaches-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "biological-approach",
          marks: 9,
          markbands: BANDS_9,
          strategy: "ERQ: Localization vs distributed networks + neuroplasticity (H.M., Maguire, Draganski) + Causality & Perspective",
          question:
            "Discuss **localization of brain function** and **neuroplasticity** in explaining human behaviour, with reference to the Core Concepts of **Causality** and **Change**. *(9 marks — Paper 1 Extended Response)*",
          modelAnswer:
            "Early neuropsychology championed strict localization — assigning each psychological function to one isolated cortical area — yet modern neuroimaging and lesion research favour relative localization within distributed, plastic neural networks. Classic lesion evidence from patient H.M. (Scoville & Milner, 1957) revealed that bilateral removal of the hippocampus caused profound anterograde amnesia for new declarative memories while sparing short-term digit span and procedural mirror-drawing, demonstrating functional specialization of the hippocampus alongside distributed memory circuits. Similarly, fMRI evidence shows the amygdala tags emotional salience while the prefrontal cortex executes cognitive control, operating in dynamic interaction rather than isolation.\n\nCrucially, localization is never fixed; adult neural architecture exhibits lifelong neuroplasticity (Change). Maguire et al. (2000) used structural MRI to show that London taxi drivers possessed larger posterior hippocampi than non-drivers, correlated with years navigating streets. However, from a Causality standpoint, a cross-sectional correlation could reflect pre-existing anatomical advantage rather than training-induced growth. Woollett and Maguire (2011) resolved this Causality limitation longitudinally by scanning trainees before and after 'The Knowledge', proving posterior hippocampal grey matter expanded only in trainees who passed. Likewise, Draganski et al.'s (2004) randomized juggling experiment showed grey-matter expansion in area V5/hMT after three months of practice that partially reversed via synaptic pruning after three months of rest.\n\nOverall, neuroimaging strengthens biological understanding yet faces Measurement and Perspective limits: fMRI BOLD signals are indirect, correlational, and conducted in artificial scanners, and biological plasticity always responds to cognitive effort and sociocultural environments (such as urban taxi demands). Therefore, human behaviour is best explained by relative localization within adaptable neural networks continually reshaped by experience.",
          markScheme: [
            {
              point: "Distinguishes strict localization from modern relative localization within distributed interacting networks.",
              keywords: ["strict localization", "relative localization", "distributed", "networks"],
            },
            {
              point: "Uses lesion evidence (e.g. H.M. / Scoville & Milner 1957) accurately to support specialized hippocampal consolidation vs intact procedural/STM circuits.",
              keywords: ["h.m.", "milner", "hippocampus", "anterograde", "procedural"],
            },
            {
              point: "Integrates additional interacting brain hubs (amygdala emotional salience / PFC executive control).",
              keywords: ["amygdala", "prefrontal", "salience", "executive"],
            },
            {
              point: "Explains neuroplasticity (dendritic branching / LTP & synaptic pruning) as experience-driven structural Change.",
              keywords: ["pruning", "grey matter", "grey-matter", "branching", "adaptable"],
            },
            {
              point: "Evaluates Maguire et al. (2000) through Causality (cross-sectional correlation cannot rule out selection bias).",
              keywords: ["maguire", "taxi", "cross-sectional", "correlation", "pre-existing"],
            },
            {
              point: "Integrates longitudinal causal resolution via Woollett & Maguire (2011) showing growth only in qualifying trainees.",
              keywords: ["woollett", "2011", "longitudinal", "passed", "before and after"],
            },
            {
              point: "Integrates Draganski et al. (2004) showing randomized causal V5/hMT expansion and reversible pruning after rest.",
              keywords: ["draganski", "juggling", "v5", "reversed", "randomized"],
            },
            {
              point: "Critiques neuroimaging Measurement constraints (correlational BOLD lag, artificial scanner setting, small samples).",
              keywords: ["measurement", "bold", "indirect", "artificial", "scanner"],
            },
            {
              point: "Concludes with balanced Perspective synthesis: plastic brain circuits dynamically reflect cognitive training and sociocultural environments.",
              keywords: ["perspective", "sociocultural", "cognitive", "reshaped", "experience"],
            },
          ],
          hints: [
            "Open by contrasting *strict localization* with *relative localization + distributed networks* (H.M., amygdala, PFC).",
            "Use **Causality** to critique Maguire (2000) and show how Woollett & Maguire (2011) and Draganski (2004) proved causal **Change**.",
            "Conclude with neuroimaging **Measurement** limits and a biopsychosocial **Perspective** judgement.",
          ],
        },
        {
          id: "2-core-approaches-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "To what extent",
          guideRef: "cognitive-thinking-biases",
          marks: 9,
          markbands: BANDS_9,
          strategy: "ERQ: Dual-Process heuristics (availability, representativeness, anchoring, framing) vs ecological rationality & Method Bias",
          question:
            "To what extent does **Dual-Process Theory** demonstrate that human decision-making is systematically irrational? Refer to empirical research and the Core Concept of **Bias**. *(9 marks — Paper 1 Extended Response)*",
          modelAnswer:
            "Kahneman and Tversky's Dual-Process Model distinguishes fast, automatic, heuristic-driven System 1 thinking from slow, effortful, rule-governed System 2 monitoring. Extensive experimental evidence shows that when System 2 fails to override System 1 shortcuts, human judgements exhibit predictable cognitive Bias. In Tversky and Kahneman's (1983) Linda problem, 85% committed the conjunction fallacy via the representativeness heuristic, ignoring basic probability rules. Likewise, the Asian Disease problem (1981) revealed dramatic framing reversals: 72% chose the risk-averse sure option in a gain frame while 78% switched to the risk-seeking gamble in an identical loss frame due to Prospect Theory loss aversion. Crucially, Englich et al. (2006) proved anchoring Bias extends beyond student lab vignettes, as experienced German trial judges assigned longer prison sentences after rolling a rigged die showing 9 rather than 3.\n\nNevertheless, portraying human reasoning as fundamentally irrational goes too far. First, many classic Dual-Process demonstrations rely on artificial paper-and-pencil word problems designed specifically to trick participants, raising ecological validity and Measurement concerns. Second, Gerd Gigerenzer's ecological rationality critique demonstrates that heuristics are fast, frugal, and adaptive in natural environments; when identical medical base-rate problems are presented as natural frequencies ('10 out of 1,000') rather than abstract single-event percentages, System 1–2 accuracy improves sharply. Third, Dual-Process labels are functional metaphors rather than two discrete anatomical structures, and individual working-memory capacity, expertise, and debiasing checklists allow System 2 to override errors.\n\nIn conclusion, Dual-Process Theory convincingly proves human judgement is vulnerable to predictable heuristic Bias under time pressure, framing, or arbitrary anchors — even among experts — yet these shortcuts reflect bounded adaptive efficiency rather than wholesale irrationality.",
          markScheme: [
            {
              point: "Accurately distinguishes System 1 (fast, automatic, heuristic) and System 2 (slow, effortful, deliberative override).",
              keywords: ["system 1", "system 2", "automatic", "effortful", "override"],
            },
            {
              point: "Explains representativeness/conjunction fallacy with Tversky & Kahneman (1983) Linda problem (85%).",
              keywords: ["linda", "conjunction fallacy", "representativeness", "85%"],
            },
            {
              point: "Explains framing & Prospect Theory loss aversion via Asian Disease (1981: 72% gain vs 78% loss).",
              keywords: ["asian disease", "loss aversion", "72%", "78%", "framing"],
            },
            {
              point: "Integrates real-world expert evidence countering lab-only critiques (Englich et al. 2006 judges & dice anchoring).",
              keywords: ["englich", "judges", "dice", "anchoring", "experts"],
            },
            {
              point: "Evaluates methodological/ecological validity limits of artificial hypothetical vignettes.",
              keywords: ["ecological validity", "artificial", "vignettes", "trick", "measurement"],
            },
            {
              point: "Introduces Gigerenzer's ecological rationality / natural-frequency counterargument.",
              keywords: ["gigerenzer", "ecological rationality", "natural frequencies", "adaptive", "frugal"],
            },
            {
              point: "Notes theoretical nuance that System 1/2 are functional metaphors rather than literal isolated brain lobes.",
              keywords: ["metaphors", "anatomical", "functional", "discrete"],
            },
            {
              point: "Addresses debiasing / System 2 activation conditions (checklists, expertise, reduced cognitive load).",
              keywords: ["debiasing", "working-memory", "time pressure", "checklists"],
            },
            {
              point: "Reaches a clear, balanced 'To what extent' judgement (bounded rationality / predictable vulnerability rather than total irrationality).",
              keywords: ["bounded", "conclusion", "vulnerable", "efficiency", "wholesale"],
            },
          ],
          hints: [
            "Present strong evidence *for* systematic Bias (Linda, Asian Disease, Englich judges).",
            "Then challenge the 'irrationality' claim using ecological validity, Gigerenzer's natural frequencies, and functional-metaphor critiques.",
            "Conclude with a direct 'To what extent' judgement: *bounded, adaptive rationality* rather than pure irrationality.",
          ],
        },
        {
          id: "2-core-approaches-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "sociocultural-approach",
          marks: 9,
          markbands: BANDS_9,
          strategy: "ERQ: Evaluate Social Identity Theory (Tajfel 1971) & Acculturation (Berry 1997) with Perspective & Responsibility",
          question:
            "Evaluate **Social Identity Theory** as an explanation of intergroup behaviour, making explicit links to the Core Concepts of **Perspective** and **Responsibility**. *(9 marks — Paper 1 Extended Response)*",
          modelAnswer:
            "Tajfel and Turner's (1979) Social Identity Theory (SIT) argues that group memberships form a vital part of self-concept: individuals categorize the social world into in-groups and out-groups, identify with in-group norms, and engage in social comparison to achieve positive distinctiveness and boost self-esteem. Its major empirical strength comes from Tajfel et al.'s (1971) minimal group paradigm, where British schoolboys sorted solely by Klee versus Kandinsky preferences consistently chose maximum difference favouring their in-group over maximum joint profit. This demonstrated that realistic resource competition is not strictly necessary to trigger in-group favouritism and out-group homogeneity, offering powerful insight into everyday stereotyping, sports tribalism, and online polarization.\n\nHowever, SIT faces important methodological and theoretical limitations. Tajfel et al.'s (1971) laboratory allocation matrices had low ecological validity, suffered demand characteristics, and sampled only British adolescent boys (WEIRD sampling Bias). Theoretically, SIT emphasizes in-group love more reliably than out-group hatred and struggles to explain why disadvantaged minority groups occasionally display out-group favouritism or why individuals resist group norms. From a Perspective standpoint, SIT's purely sociocultural-cognitive focus omits biological mechanisms — such as oxytocin heightening in-group protection and amygdala threat reactivity — as well as realistic economic competition (Sherif's Realistic Conflict Theory) and historical power inequalities.\n\nApplying Responsibility, understanding SIT equips schools and policymakers to reduce prejudice ethically by creating superordinate shared identities and equitable intergroup contact rather than rigid us-versus-them sorting. In sum, SIT provides a foundational, empirically backed lens on how minimal categorization sparks in-group bias, yet requires biopsychosocial Perspective and structural context to explain real-world intergroup conflict fully.",
          markScheme: [
            {
              point: "Accurately explains SIT mechanisms (categorization, identification, social comparison, positive distinctiveness, self-esteem).",
              keywords: ["categorization", "identification", "social comparison", "positive distinctiveness", "self-esteem"],
            },
            {
              point: "Integrates Tajfel et al. (1971) minimal group paradigm findings (maximum difference over joint profit).",
              keywords: ["tajfel", "minimal group", "klee", "maximum difference", "joint profit"],
            },
            {
              point: "Identifies strength: explains bias arising without realistic conflict and predicts out-group homogeneity / real-world tribalism.",
              keywords: ["without realistic", "out-group homogeneity", "tribalism", "polarization"],
            },
            {
              point: "Evaluates methodological Bias of Tajfel et al. (1971) (artificial matrices, demand characteristics, British boys / WEIRD sample).",
              keywords: ["ecological validity", "demand characteristics", "weird", "matrices", "british"],
            },
            {
              point: "Evaluates theoretical limits (in-group favouritism ≠ inevitable hostility; struggles with out-group favouritism / individual dissent).",
              keywords: ["out-group favouritism", "hostility", "resist", "hatred"],
            },
            {
              point: "Integrates Perspective via biological factors (e.g. oxytocin in-group defence / amygdala threat processing).",
              keywords: ["oxytocin", "amygdala", "biological", "biopsychosocial"],
            },
            {
              point: "Integrates Perspective via complementary sociocultural/structural theories (e.g. realistic resource competition / historical power).",
              keywords: ["sherif", "realistic", "economic", "inequalities", "structural"],
            },
            {
              point: "Applies Responsibility: ethical translation of SIT into inclusive superordinate identities / reducing polarization.",
              keywords: ["superordinate", "policymakers", "prejudice", "inclusive", "contact"],
            },
            {
              point: "Synthesizes a balanced overall evaluation weighing SIT's explanatory power against its boundaries.",
              keywords: ["foundational", "boundaries", "requires", "conflict fully"],
            },
          ],
          hints: [
            "Present SIT's core pathway + Tajfel et al. (1971) strengths before critiquing lab artificiality and theoretical gaps.",
            "Bring in **Perspective** (what biological and economic factors SIT omits) and **Responsibility** (how SIT guides anti-prejudice design).",
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
      id: "2-core-approaches-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "biological-approach",
      strategy: "Back-solve DZ concordance from Falconer heritability and MZ concordance",
      question:
        "A behavioural genetics team reports Falconer's heritability estimate as **44%** ({{h^2 = 0.44}}) for spatial reasoning, with an observed MZ concordance rate of **68%** ({{r_{MZ} = 0.68}}). Using {{h^2 = 2(r_{MZ} - r_{DZ})}}, calculate the observed **DZ concordance rate** as a whole-number percentage.",
      answer: { type: "number", value: 46, display: "46%" },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "You subtracted 44% directly from 68% without dividing {{h^2}} by 2 first!",
        },
        {
          spec: { type: "number", value: 90 },
          feedback: "DZ concordance should be *lower* than MZ concordance here — check your algebraic rearrangement.",
        },
      ],
      solution: [
        "Start from {{h^2 = 2(r_{MZ} - r_{DZ})}} → {{0.44 = 2(0.68 - r_{DZ})}}.",
        "Divide both sides by 2: {{0.22 = 0.68 - r_{DZ}}}.",
        "Solve for {{r_{DZ}}}: {{r_{DZ} = 0.68 - 0.22 = 0.46}}, which is **46%**.",
      ],
      commonError: "Forgetting to halve h² before subtracting from r_MZ.",
      hints: [
        "Substitute {{h^2 = 0.44}} and {{r_{MZ} = 0.68}} into {{h^2 = 2(r_{MZ} - r_{DZ})}}.",
        "Divide both sides by 2 first to isolate {{0.68 - r_{DZ} = 0.22}}.",
      ],
    },
    {
      id: "2-core-approaches-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "cognitive-thinking-biases",
      strategy: "Compare objective base-rate probability against representativeness intuition",
      question:
        "A festival hosts **900 engineers** and **100 poets** (1,000 guests total). Suppose **20%** of engineers and **80%** of poets enjoy reading classical mythology. A randomly selected guest enjoys classical mythology. Out of ALL guests at the festival who enjoy classical mythology, what percentage are actually **engineers**? Round to the **nearest whole percentage**.",
      answer: { type: "number", value: 69, tolerance: 0.5, display: "69%" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20% is the proportion of engineers who read mythology — you must compare 180 mythology-reading engineers against ALL mythology readers (180 + 80 = 260)!",
        },
        {
          spec: { type: "number", value: 31 },
          feedback: "31% is the percentage who are *poets* (80/260) — the question asked for the percentage who are **engineers**!",
        },
      ],
      solution: [
        "Engineers who enjoy mythology = {{0.20 * 900 = 180}}.",
        "Poets who enjoy mythology = {{0.80 * 100 = 80}}.",
        "Total mythology readers = {{180 + 80 = 260}}.",
        "Percentage who are engineers = {{(180 / 260) * 100 ≈ 69.23%}} → **69%**! Even though poets are four times more likely individually to love mythology, the 9:1 base rate means the guest is still much more likely an engineer — illustrating base-rate neglect!",
      ],
      commonError: "Ignoring the 900:100 base rate and concluding the guest is probably a poet (representativeness heuristic).",
      hints: [
        "Use Gigerenzer's natural-frequency method: count how many of the 900 engineers enjoy mythology (180) and how many of the 100 poets do (80).",
        "Divide mythology-reading engineers (180) by ALL mythology readers (180 + 80 = 260), then convert to a percentage.",
      ],
    },
    {
      id: "2-core-approaches-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "sociocultural-approach",
      strategy: "Compute weighted cross-cultural conformity rate from two sample groups",
      question:
        "In a cross-cultural Asch meta-analysis subset, **20 participants** from an individualist sample average **28%** conformity, while **30 participants** from a collectivist sample average **48%** conformity (each completing the same number of critical trials). Calculate the **combined weighted mean conformity percentage** across all 50 participants.",
      answer: { type: "number", value: 40, display: "40%" },
      traps: [
        {
          spec: { type: "number", value: 38 },
          feedback: "38% is the unweighted midpoint of 28% and 48% — remember the collectivist group has more participants (30 vs 20)!",
        },
      ],
      solution: [
        "Weighted sum = {{20 * 28 + 30 * 48 = 560 + 1440 = 2000}}.",
        "Divide by total participants (50): {{2000 / 50 = 40%}}.",
      ],
      commonError: "Taking the simple average (28 + 48)/2 = 38% while ignoring unequal sample sizes.",
      hints: [
        "Because the sample sizes differ (20 vs 30), multiply each group's mean by its participant count.",
        "Compute {{(20 * 28 + 30 * 48) / 50}}.",
      ],
    },
    {
      id: "2-core-approaches-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "cognitive-memory-schemas",
      marks: 9,
      markbands: BANDS_9,
      strategy: "Triangulate Biological (hippocampus/cortisol/ACh) + Cognitive (schemas/Loftus) + Sociocultural (cultural scripts) on memory reliability",
      question:
        "Discuss the reliability of human memory by integrating evidence from **at least two core approaches** and the Core Concepts of **Bias** and **Responsibility**. *(9 marks — Cross-Approach Synthesis ERQ)*",
      modelAnswer:
        "Human memory is not a verbatim recording device; integrating Cognitive and Biological (alongside Sociocultural) research reveals that memory is dynamically consolidated yet systematically vulnerable to Bias. Cognitively, Bartlett's (1932) War of the Ghosts study showed participants reconstructing an unfamiliar folk tale through levelling and cultural assimilation into British schemas, while Brewer and Treyens (1981) demonstrated false schema-consistent intrusions (30% falsely recalling absent office books). Crucially, Loftus and Palmer (1974) proved that a single leading post-event verb ('smashed' vs 'hit') raised crash speed estimates and induced 32% of participants to falsely recall broken glass a week later, establishing post-event misinformation Bias.\n\nBiologically, memory reliability depends on fragile neural consolidation pathways: Antonova et al. (2011) showed blocking hippocampal acetylcholine with scopolamine impairs spatial encoding, while Newcomer et al. (1999) found prolonged elevated cortisol disrupts hippocampal declarative retrieval. Furthermore, Talarico and Rubin's (2003) longitudinal 9/11 study showed that intense emotional arousal sustains high subjective confidence even as factual accuracy decays identically to ordinary memories — creating dangerous overconfidence in witnesses. Yet memory is not uniformly unreliable: real-world witnesses to an armed robbery in Yuille and Cutshall (1986) remained remarkably accurate four months later and resisted leading prompts, highlighting ecological validity limits of brief lab videos.\n\nFrom a Responsibility standpoint, this cross-approach evidence places an ethical obligation on legal systems to reform interrogation practices — adopting open-ended Cognitive Interviews, avoiding leading questions, and educating juries that witness confidence does not guarantee accuracy.",
      markScheme: [
        {
          point: "Explains cognitive schema reconstruction with Bartlett (1932) and/or Brewer & Treyens (1981).",
          keywords: ["bartlett", "levelling", "assimilation", "brewer", "books"],
        },
        {
          point: "Integrates Loftus & Palmer (1974) post-event misinformation Bias (leading verbs & 32% broken glass).",
          keywords: ["loftus", "smashed", "broken glass", "32%", "misinformation"],
        },
        {
          point: "Integrates Biological approach mechanisms affecting encoding/retrieval (ACh/Antonova 2011 or cortisol/Newcomer 1999).",
          keywords: ["antonova", "scopolamine", "cortisol", "newcomer", "hippocampal"],
        },
        {
          point: "Integrates emotion–cognition metamemory disconnect (Talarico & Rubin 2003: equal decay vs high confidence).",
          keywords: ["talarico", "9/11", "confidence", "decays", "overconfidence"],
        },
        {
          point: "Provides critical counterbalance via real-world accuracy (Yuille & Cutshall 1986) and ecological validity evaluation.",
          keywords: ["yuille", "cutshall", "robbery", "ecological validity", "resisted"],
        },
        {
          point: "Connects Sociocultural context (cultural scripts shaping recall / social conformity in co-witnesses).",
          keywords: ["british", "cultural", "co-witnesses", "sociocultural"],
        },
        {
          point: "Applies Core Concept of Bias explicitly across schema distortion and emotional overconfidence.",
          keywords: ["schema", "systematic", "distortion", "leading", "post-event"],
        },
        {
          point: "Applies Core Concept of Responsibility to real-world forensic/legal reforms (Cognitive Interview, jury guidance).",
          keywords: ["legal", "cognitive interview", "juries", "ethical", "reform"],
        },
        {
          point: "Delivers a cohesive cross-approach conclusion balancing adaptive reconstructive efficiency against legal fallibility.",
          keywords: ["obligation", "guarantee", "verbatim", "cross-approach"],
        },
      ],
      hints: [
        "Weave **Cognitive** (Bartlett, Loftus & Palmer, Talarico & Rubin) together with **Biological** (Newcomer cortisol or Antonova ACh).",
        "Counterbalance lab suggestibility with Yuille & Cutshall (1986), then close with forensic **Responsibility** (Cognitive Interview).",
      ],
    },
    {
      id: "2-core-approaches-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      guideRef: "biological-approach",
      marks: 9,
      markbands: BANDS_9,
      strategy: "HL Biopsychosocial synthesis: Critique biological reductionism using Caspi G×E, Zhu cultural neuroscience & oxytocin context",
      question:
        "To what extent can human social and emotional behaviour be explained solely through **biological mechanisms**? Integrate the Core Concept of **Perspective** and **HL Culture** insights. *(9 marks — HL Extended Response)*",
      modelAnswer:
        "Biological explanations identify indispensable physiological foundations for social and emotional behaviour. Neuroimaging links amygdala circuits to threat detection and prefrontal networks to impulse regulation, while neurochemistry demonstrates causal modulation: Antonova et al. (2011) proved scopolamine antagonism of acetylcholine impairs hippocampal spatial encoding, and Kosfeld et al. (2005) plus Baumgartner et al. (2008) showed intranasal oxytocin elevates interpersonal trust and dampens amygdala betrayal responses. Behavioural genetics further shows substantial heritability across traits (Bouchard et al., 1990).\n\nHowever, explaining complex human behaviour solely through biology commits biological reductionism and collapses under empirical scrutiny. First, Caspi et al.'s (2003) longitudinal study demonstrated that short 5-HTT alleles increased depression vulnerability only when paired with severe environmental stressors — proving Gene × Environment interaction rather than genetic determinism. Second, oxytocin's effects are deeply moderated by sociocultural categorization: subsequent research showed oxytocin increases cooperation toward in-groups while sometimes elevating defensive suspicion toward out-groups, meaning social identity (Tajfel & Turner) shapes what a hormone actually produces. Third, from an HL Culture perspective, cultural neuroscience demonstrates bidirectional causation: Zhu et al. (2007) found medial prefrontal cortex representations of self and mother overlapped in Chinese participants with interdependent self-construals but remained distinct in Western participants, proving enculturation physically sculpts neural networks via neuroplasticity.\n\nIn conclusion, biological mechanisms provide necessary hardware and probabilistic predispositions, but they can never offer a complete standalone account. Only a biopsychosocial Perspective integrating neural chemistry with cognitive appraisal and cultural meaning accurately explains human social and emotional behaviour.",
      markScheme: [
        {
          point: "Presents strong biological foundations (neurotransmitters/hormones/genetics) with accurate named studies.",
          keywords: ["antonova", "kosfeld", "baumgartner", "bouchard", "amygdala"],
        },
        {
          point: "Identifies and explains the risk of biological reductionism / genetic determinism.",
          keywords: ["reductionism", "determinism", "probabilistic", "standalone"],
        },
        {
          point: "Refutes determinism via Caspi et al. (2003) 5-HTT Gene × Environment interaction.",
          keywords: ["caspi", "5-htt", "stressors", "gene", "interaction"],
        },
        {
          point: "Shows sociocultural moderation of biology via oxytocin in-group vs out-group context (linking SIT).",
          keywords: ["oxytocin", "in-groups", "out-groups", "tajfel", "moderated"],
        },
        {
          point: "Integrates HL Culture via cultural neuroscience (Zhu et al. 2007 mPFC self vs mother overlap).",
          keywords: ["zhu", "mpfc", "medial prefrontal", "mother", "interdependent"],
        },
        {
          point: "Explains bidirectional neuroplasticity (how cultural immersion/experience physically sculpts neural architecture).",
          keywords: ["bidirectional", "neuroplasticity", "enculturation", "sculpts"],
        },
        {
          point: "Weaves cognitive appraisal / meaning-making into the critique (e.g. perception of betrayal or threat).",
          keywords: ["cognitive appraisal", "meaning", "threat", "prefrontal"],
        },
        {
          point: "Evaluates methodological boundaries (correlational fMRI / WEIRD samples in neuroscience).",
          keywords: ["western", "longitudinal", "neuroimaging", "hardware"],
        },
        {
          point: "Reaches a nuanced 'To what extent' biopsychosocial conclusion explicitly answering the prompt.",
          keywords: ["biopsychosocial", "necessary", "complete", "conclusion"],
        },
      ],
      hints: [
        "Give the Biological Approach its strongest case first (Antonova, Kosfeld/Baumgartner, Bouchard).",
        "Then dismantle pure biological reductionism with Caspi (G×E), oxytocin's in-group/out-group social dependence, and Zhu et al. (2007) cultural neuroscience.",
      ],
    },
    {
      id: "2-core-approaches-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "cognitive-thinking-biases",
      marks: 6,
      markbands: BANDS_6,
      strategy: "HL Technology + Core Cognitive/Sociocultural synthesis: Connect confirmation bias, System 1, and SIT to social media echo chambers",
      question:
        "Analyse how **cognitive biases** and **Social Identity Theory** interact with digital algorithms (**HL Technology**) to amplify polarization, referencing the Core Concept of **Responsibility**. *(6 marks — HL Synthesis)*",
      modelAnswer:
        "Digital recommendation algorithms optimize engagement by prioritizing emotionally arousing, identity-confirming content that exploits fast System 1 processing while bypassing effortful System 2 verification. Cognitively, this interacts directly with confirmation bias (illustrated experimentally in Wason's 1966 selection task) and the availability heuristic (Tversky & Kahneman, 1973): repeated exposure to vivid outrage posts makes extreme threats seem far more frequent while shielding users from disconfirming evidence. Simultaneously, Social Identity Theory (Tajfel & Turner, 1979) explains why users share polarizing posts — digital metrics such as likes and tribal hashtags strengthen social categorization and in-group identification while intensifying out-group homogeneity and derogation for positive distinctiveness. From a Responsibility perspective, because platform designers knowingly leverage heuristic vulnerabilities and dopamine-linked variable feedback loops, ethical accountability requires transparent algorithmic audits, friction prompts that trigger System 2 fact-checking, and digital-literacy education rather than placing blame solely on individual users.",
      markScheme: [
        {
          point: "Connects algorithmic feeds to fast, emotional System 1 capture vs bypassed System 2 verification.",
          keywords: ["system 1", "system 2", "engagement", "bypassing"],
        },
        {
          point: "Analyses confirmation bias (Wason 1966) and/or availability heuristic (Tversky & Kahneman 1973) in echo chambers.",
          keywords: ["confirmation bias", "wason", "availability", "vivid", "disconfirming"],
        },
        {
          point: "Integrates Social Identity Theory (categorization, in-group identification, out-group homogeneity/derogation).",
          keywords: ["tajfel", "categorization", "out-group homogeneity", "positive distinctiveness"],
        },
        {
          point: "Explains the interaction between technological design (metrics/algorithms) and psychological mechanisms.",
          keywords: ["recommendation", "hashtags", "likes", "dopamine", "feedback"],
        },
        {
          point: "Applies ethical Responsibility to platform architects/regulators (audits, friction prompts, transparency).",
          keywords: ["audits", "transparent", "friction", "accountability", "designers"],
        },
        {
          point: "Connects Responsibility to educational/user-level debiasing (System 2 fact-checking / digital literacy).",
          keywords: ["fact-checking", "digital-literacy", "literacy", "vulnerabilities"],
        },
      ],
      hints: [
        "Show the *interaction*: algorithmic feeds exploit System 1 (confirmation bias + availability) AND SIT (in-group praise + out-group stereotyping).",
        "Close with concrete **Responsibility** safeguards (design friction, algorithmic transparency, digital literacy).",
      ],
    },
    {
      id: "2-core-approaches-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "sociocultural-approach",
      marks: 6,
      markbands: BANDS_6,
      strategy: "Contrast Asch & Milgram findings/mechanisms → evaluate Responsibility & ecological validity",
      question:
        "Evaluate classic social-influence research (**Asch, 1951** and **Milgram, 1963**) with reference to the Core Concepts of **Responsibility** and **Measurement**. *(6 marks)*",
      modelAnswer:
        "Asch's (1951) line-judgement paradigm (~32–37% conformity on critical trials) and Milgram's (1963) Yale shock experiment (65% obeying to 450 V) revealed how powerfully situational forces — normative social influence and the agentic state — override private judgement and moral conscience. Both used tightly standardized laboratory procedures enabling systematic manipulation of single variables (such as dissenting allies cutting Asch conformity to ~5.5% and rebel peers slashing Milgram obedience to 10%), giving strong internal validity. However, both face serious Measurement critiques: Asch's trivial line task lacks mundane realism for high-stakes social conformity, while critics (e.g. Orne & Holland) questioned whether some Milgram participants suspected the shocks were fake, introducing demand characteristics, alongside WEIRD all-male US samples from the 1950s–60s. Ethically, both studies violated modern Responsibility principles — particularly Milgram's deception, severe observable psychological distress (sweating, trembling), and verbal prods obstructing the right to withdraw — prompting strict institutional review boards and informed-consent codes today.",
      markScheme: [
        {
          point: "Correctly contrasts core findings and mechanisms (Asch ~32–37% normative influence vs Milgram 65% agentic state).",
          keywords: ["32", "65%", "normative", "agentic state"],
        },
        {
          point: "Identifies experimental Measurement strength (standardized control + situational variations like dissenting allies / rebel peers).",
          keywords: ["standardized", "internal validity", "allies", "10%", "variations"],
        },
        {
          point: "Critiques Measurement validity (trivial lab task / low mundane realism in Asch; suspected deception / demand characteristics in Milgram).",
          keywords: ["mundane realism", "demand characteristics", "fake", "artificial"],
        },
        {
          point: "Notes population/historical Bias limiting generalizability (1950s–60s US all-male samples).",
          keywords: ["weird", "all-male", "1950s", "generalizability"],
        },
        {
          point: "Applies ethical Responsibility explicitly (deception, psychological distress, compromised right to withdraw).",
          keywords: ["deception", "distress", "withdraw", "prods"],
        },
        {
          point: "Notes positive ethical legacy (institutional review boards / modern informed-consent and harm protections).",
          keywords: ["review boards", "informed-consent", "codes", "protections"],
        },
      ],
      hints: [
        "Balance experimental control (**Measurement** strength) against mundane realism, demand characteristics, and historical WEIRD bias.",
        "Be concrete on **Responsibility**: cite deception, observable stress, and verbal prods hindering withdrawal.",
      ],
    },
    {
      id: "2-core-approaches-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "sociocultural-approach",
      marks: 9,
      markbands: BANDS_9,
      strategy: "HL Culture ERQ: Evaluate Berry's acculturation model (Integration vs Marginalization) with Change, Measurement & Responsibility",
      question:
        "Evaluate **Berry's (1997) model of acculturation** as an explanation of psychological adaptation during cross-cultural transition, integrating **Change**, **Measurement**, and **Responsibility**. *(9 marks — HL Extended Response)*",
      modelAnswer:
        "Berry's (1997) bidimensional model revolutionized acculturation psychology by rejecting earlier unidimensional assumptions that migrants must abandon heritage roots to belong in a host nation. By crossing heritage-culture maintenance (Yes/No) with host-society participation (Yes/No), Berry defined four strategies — Integration, Assimilation, Separation, and Marginalization — predicting lowest acculturative stress under Integration and highest distress under Marginalization. Large-scale international evidence supports this gradient: Berry et al.'s (2006) ICSEY study of over 5,000 immigrant youth across 13 countries found biculturally integrated adolescents consistently achieved the strongest psychological and sociocultural adaptation, demonstrating constructive identity Change.\n\nNonetheless, Berry's model carries substantial theoretical and Measurement limitations. Operationalizing complex, fluid bicultural identities into four static self-report quadrants oversimplifies reality: migrants routinely engage in dynamic bicultural frame-switching — speaking heritage languages at home (Separation) while thriving in host schools (Integration) — showing Change varies across life domains rather than fitting one fixed box. Self-report acculturation scales also face translation equivalence and social desirability Measurement bias across diverse cultural groups. Most critically, through the lens of Responsibility, labelling outcomes as individual 'strategies' risks blaming marginalized migrants while obscuring structural host-society constraints: Integration is attainable only when host institutions practice multicultural inclusion rather than systemic discrimination or forced assimilation.\n\nIn conclusion, Berry's framework remains an invaluable conceptual foundation demonstrating that heritage retention and host engagement are complementary rather than mutually exclusive, yet modern HL cultural psychology must pair it with domain-specific dynamic Measurement and societal Responsibility for equitable inclusion.",
      markScheme: [
        {
          point: "Explains Berry's bidimensional advance (heritage maintenance × host participation) and names all four strategies.",
          keywords: ["bidimensional", "integration", "assimilation", "separation", "marginalization"],
        },
        {
          point: "Links strategies accurately to acculturative stress outcomes (Integration lowest, Marginalization highest).",
          keywords: ["acculturative stress", "lowest", "highest", "bicultural"],
        },
        {
          point: "Cites supporting empirical evidence (e.g. Berry et al. 2006 ICSEY study across 13 countries / 5,000+ youth).",
          keywords: ["icsey", "2006", "5,000", "13 countries", "youth"],
        },
        {
          point: "Critiques static quadrant oversimplification via dynamic Change / domain-specific bicultural frame-switching.",
          keywords: ["frame-switching", "static", "domains", "fluid", "home"],
        },
        {
          point: "Critiques Measurement issues in self-report acculturation scales (translation equivalence, social desirability).",
          keywords: ["self-report", "translation", "desirability", "scales", "operationalizing"],
        },
        {
          point: "Applies ethical/structural Responsibility: warns against victim-blaming by treating strategy as purely free individual choice.",
          keywords: ["structural", "discrimination", "blaming", "choice", "constraints"],
        },
        {
          point: "Emphasizes mutual accommodation: Integration depends on multicultural host-society policies.",
          keywords: ["multicultural", "inclusion", "institutions", "forced"],
        },
        {
          point: "Contrasts bidimensional framework with earlier flawed unidimensional assimilation models.",
          keywords: ["unidimensional", "mutually exclusive", "complementary"],
        },
        {
          point: "Delivers a cohesive evaluative judgement balancing Berry's enduring utility with HL dynamic and structural refinements.",
          keywords: ["invaluable", "foundation", "equitable", "conclusion"],
        },
      ],
      hints: [
        "Highlight Berry's key advance (bidimensional, not zero-sum) and empirical support (ICSEY 2006) before critiquing it.",
        "Weave in **Change** (bicultural frame-switching across home vs school), **Measurement** (self-report scale limits), and **Responsibility** (host-society discrimination constrains choice).",
      ],
    },
  ],
};
