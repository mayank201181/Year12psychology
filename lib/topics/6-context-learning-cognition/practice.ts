import type { MarkBand, TopicPractice } from "../../types.ts";

const BANDS_4: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The response does not reach a standard described by the descriptors below.",
    indicators: ["No relevant psychological knowledge or application to the scenario."],
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Limited knowledge and superficial application to the unseen scenario.",
    indicators: [
      "Identifies a relevant concept or study with partial accuracy.",
      "Links to the stimulus are descriptive or underdeveloped.",
    ],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Clear, accurate psychological explanation explicitly applied to the scenario.",
    indicators: [
      "Accurately deploys relevant FA2027 terminology and empirical evidence.",
      "Explicitly connects mechanism and Core Concept to concrete details in the vignette.",
    ],
  },
];

const BANDS_6: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The response does not reach a standard described by the descriptors below.",
    indicators: ["No relevant psychological knowledge, evidence, or analysis."],
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Basic, mostly descriptive response with limited connection to the scenario or Core Concept.",
    indicators: [
      "Names one relevant theory/study with minor inaccuracies or missing detail.",
      "Minimal explicit application or critical evaluation.",
    ],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Sound explanation with relevant evidence and partial critical evaluation.",
    indicators: [
      "Accurately explains mechanisms using appropriate studies.",
      "Engages with the scenario and begins evaluating via an FA2027 Core Concept.",
    ],
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Focused, well-structured analysis integrating empirical evidence, scenario details, and Core Concept evaluation.",
    indicators: [
      "Seamlessly integrates Biological/Cognitive/Sociocultural mechanisms with stimulus details.",
      "Delivers explicit, balanced critical evaluation grounded in FA2027 Core Concepts.",
    ],
  },
];

const BANDS_9: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The response does not reach a standard described by the descriptors below.",
    indicators: ["No relevant psychological knowledge or engagement with the prompt."],
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited, largely descriptive knowledge of Learning and Cognition with minimal conceptual focus.",
    indicators: [
      "Describes studies or theories in isolation without sustaining the named Core Concept.",
      "Weak or generic evaluation (e.g., unsupported 'low ecological validity' statements).",
    ],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Clear knowledge and understanding with relevant research and developing conceptual evaluation.",
    indicators: [
      "Uses at least two accurate studies relevant to Learning and Cognition.",
      "Addresses the named FA2027 Core Concept explicitly, though synthesis across approaches is uneven.",
    ],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Comprehensive, critically balanced argument sustaining the FA2027 Core Concept across multiple perspectives.",
    indicators: [
      "Synthesizes Biological, Cognitive, and/or Sociocultural evidence seamlessly with precise empirical detail.",
      "Sustains nuanced conceptual evaluation (counter-evidence, methodological trade-offs, ethical implications) leading to a reasoned conclusion.",
    ],
  },
];

export const practice: TopicPractice = {
  // =========================================================================
  // DIAGNOSTIC QUIZ — 10 crisp SL items spanning all 4 sections
  // =========================================================================
  quiz: [
    {
      id: "6-context-learning-cognition-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "conditioning-social-learning",
      question:
        "A child eats spoiled oysters (causing vomiting) at a seafood restaurant playing soft jazz. Thereafter, the mere smell of oysters triggers nausea. In classical conditioning, what label (`UCS`, `UCR`, `NS`, `CS`, or `CR`) describes the **smell of oysters** after the illness?",
      answer: { type: "text", accept: ["CS", "conditioned stimulus"], display: "CS (conditioned stimulus)" },
      traps: [
        {
          spec: { type: "text", accept: ["UCS", "unconditioned stimulus"] },
          feedback: "The spoiled toxin itself was the UCS; the smell of oysters became a learned signal (CS) through pairing.",
        },
        {
          spec: { type: "text", accept: ["CR", "conditioned response"] },
          feedback: "Nausea is the response (CR); the smell is the learned *stimulus*.",
        },
      ],
      hints: [
        "Decide first whether the smell is a stimulus or a bodily reaction.",
        "Did the smell naturally trigger nausea before the food poisoning, or only after pairing?",
      ],
      solution: [
        "Before food poisoning, oyster aroma did not induce vomiting (NS).",
        "After pairing with bacterial toxins (UCS → UCR vomiting), the smell alone elicits learned nausea (CR), making the smell the **CS (conditioned stimulus)**.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "conditioning-social-learning",
      question:
        "A parent confiscates a teenager's video-game console for a week after the teenager misses curfew, reducing future late arrivals. Name the exact operant conditioning quadrant.",
      answer: {
        type: "text",
        accept: ["negative punishment", "negative-punishment"],
        display: "Negative punishment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["negative reinforcement"] },
          feedback: "Reinforcement *increases* a behaviour; here late arrivals *decreased*.",
        },
        {
          spec: { type: "text", accept: ["positive punishment"] },
          feedback: "Nothing aversive was added; a valued privilege (the console) was *removed*.",
        },
      ],
      hints: [
        "Step 1: Missing curfew *decreased* → punishment.",
        "Step 2: A desirable object was *taken away* → negative.",
      ],
      solution: [
        "Target behaviour (missing curfew) decreases → **punishment**.",
        "A pleasant stimulus (console) is removed → **negative**.",
        "Combined quadrant: **negative punishment**.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "conditioning-social-learning",
      question:
        "A coffee chain stamps a loyalty card and gives a free latte strictly after every **8th** coffee purchased. Enter the two-letter Skinnerian reinforcement schedule abbreviation (`FR`, `VR`, `FI`, or `VI`).",
      answer: { type: "text", accept: ["FR", "fixed ratio", "fixed-ratio"], display: "FR (fixed-ratio)" },
      traps: [
        {
          spec: { type: "text", accept: ["FI", "fixed interval"] },
          feedback: "The reward depends on a *count of purchases* (ratio), not elapsed calendar time (interval).",
        },
      ],
      hints: [
        "Does the reward depend on the *number of responses* or *elapsed time*?",
        "Is the requirement constant (8th purchase) or unpredictable?",
      ],
      solution: [
        "Contingent on number of coffees bought → **Ratio**.",
        "Exact number is fixed at 8 → **Fixed Ratio (FR)**.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "neurobiology-memory-cognitive-load",
      question:
        "During Long-Term Potentiation (LTP), which specific ion enters through unblocked postsynaptic NMDA receptors to trigger intracellular cascades that insert extra AMPA receptors? (Give the name or chemical symbol.)",
      answer: { type: "text", accept: ["calcium", "Ca2+", "Ca²+", "Ca²⁺", "calcium ions", "calcium ion"], display: "Calcium (Ca²⁺)" },
      traps: [
        {
          spec: { type: "text", accept: ["magnesium", "Mg2+", "Mg²⁺"] },
          feedback: "Magnesium (Mg²⁺) is the *plug expelled* from NMDA receptors; another divalent ion flows *inward*.",
        },
        {
          spec: { type: "text", accept: ["sodium", "Na+", "Na⁺"] },
          feedback: "Sodium (Na⁺) enters primarily via AMPA channels to depolarize the membrane; NMDA channels specifically permit a key second-messenger ion.",
        },
      ],
      hints: [
        "AMPA depolarization expels Mg²⁺ from the NMDA pore.",
        "The incoming ion acts as an intracellular trigger for CaMKII kinase.",
      ],
      solution: [
        "Once postsynaptic depolarization clears the Mg²⁺ plug from NMDA receptors, **calcium ions (Ca²⁺)** flow into the dendritic spine, activating kinases that upregulate postsynaptic AMPA receptors.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "neurobiology-memory-cognitive-load",
      question:
        "In a testing-effect study, students who reread notes recalled **40%** after one week while students who practised retrieval recalled **56%**. Calculate the **relative percentage improvement** from retrieval practice (enter a whole number).",
      answer: { type: "number", value: 40, display: "40%" },
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "16 is the *percentage-point* gain (56 − 40). Divide 16 by the 40% baseline and multiply by 100 for the *relative* percentage improvement.",
        },
      ],
      hints: [
        "First find the absolute gain: 56 − 40 = 16 percentage points.",
        "Divide that gain by the rereading baseline (40) and multiply by 100.",
      ],
      solution: [
        "Gain = {{56 - 40 = 16}} percentage points.",
        "Relative improvement = {{16/40 * 100 = 40%}}.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "eyewitness-memory-reliability",
      question:
        "In Loftus & Palmer (1974) Experiment 2, **32%** of witnesses asked the *'smashed'* question falsely recalled broken glass versus **12%** of control witnesses. Give the **percentage-point difference** between these two rates (enter a whole number).",
      answer: { type: "number", value: 20, display: "20" },
      hints: [
        "Subtract the control false-memory rate from the 'smashed' false-memory rate.",
      ],
      solution: [
        "{{32 - 12 = 20}} percentage points higher in the leading-verb condition.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "eyewitness-memory-reliability",
      question:
        "Name the forensic interviewing protocol developed by Fisher & Geiselman (1992) that uses context reinstatement, reporting everything, reverse order, and changing perspective.",
      answer: {
        type: "text",
        accept: ["cognitive interview", "the cognitive interview", "CI", "enhanced cognitive interview"],
        display: "Cognitive Interview",
      },
      hints: [
        "It applies cognitive memory principles like encoding specificity to police questioning.",
        "Two words, commonly abbreviated CI.",
      ],
      solution: [
        "Fisher & Geiselman (1992) created the **Cognitive Interview (CI)** to increase accurate witness detail recall without leading contamination.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "problem-solving-environmental-cognition",
      question:
        "A student's mean Stroop reaction time is **540 ms** on congruent trials and **702 ms** on incongruent trials. Calculate the **percentage slowdown** relative to congruent speed (enter a whole number).",
      answer: { type: "number", value: 30, display: "30%" },
      traps: [
        {
          spec: { type: "number", value: 162 },
          feedback: "162 ms is the raw interference latency; divide 162 by the 540 ms baseline and multiply by 100.",
        },
      ],
      hints: [
        "Compute the interference latency: 702 − 540 = 162 ms.",
        "Compute (162 ÷ 540) × 100.",
      ],
      solution: [
        "Interference = {{702 - 540 = 162}} ms.",
        "Percentage slowdown = {{162/540 * 100 = 30%}}.",
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "problem-solving-environmental-cognition",
      marks: 3,
      question:
        "Distinguish between **functional fixedness** and **mental set (Einstellung)**, referring to one classic psychological study for each.",
      hints: [
        "Focus on *what* the solver is fixated on: an object's usual function vs a previously successful procedure/formula.",
        "Anchor your contrast with Duncker (1945) and Luchins (1942).",
      ],
      modelAnswer:
        "Functional fixedness is a cognitive barrier where prior schemas lock a person into viewing a physical object solely in its customary role, blocking creative alternative uses — demonstrated in Duncker's (1945) candle problem, where seeing thumbtacks inside a box hid its potential as a wall-mounted shelf. By contrast, mental set (Einstellung) is rigid persistence in reusing a previously successful problem-solving strategy even when a simpler shortcut exists — demonstrated in Luchins's (1942) water-jar task, where solvers mechanically applied a complex three-step formula instead of an obvious two-jar subtraction.",
      markScheme: [
        {
          point: "Defines functional fixedness accurately as restricting a physical object to its customary role/use.",
          keywords: ["object", "customary", "alternative use", "novel use"],
        },
        {
          point: "Defines mental set (Einstellung) accurately as mechanically reusing a familiar strategy/formula despite simpler options.",
          keywords: ["strategy", "formula", "shortcut", "persistence"],
        },
        {
          point: "Accurately pairs both classic studies: Duncker (candle/box) and Luchins (water-jar).",
          keywords: ["duncker", "luchins"],
        },
      ],
    },
    {
      id: "6-context-learning-cognition-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "neurobiology-memory-cognitive-load",
      marks: 3,
      question:
        "Explain how reducing **extraneous cognitive load** improves student schema acquisition according to Sweller's Cognitive Load Theory.",
      hints: [
        "Start with working memory's strict capacity limit compared with long-term memory.",
        "Explain what freed working-memory capacity can be reallocated toward (germane load).",
      ],
      modelAnswer:
        "Working memory possesses a severely limited capacity of roughly four novel chunks at once, meaning total cognitive demand cannot exceed that ceiling without causing overload. Extraneous burden arises from poor instructional formatting such as separated diagrams, decorative clutter, or distracting notifications that waste bandwidth without aiding comprehension. Stripping away split-attention clutter frees finite working-memory slots so learners can devote germane effort to integrating new ideas into durable long-term schemas.",
      markScheme: [
        {
          point: "Identifies working memory's limited capacity ceiling.",
          keywords: ["limited capacity", "four", "ceiling", "finite"],
        },
        {
          point: "Characterizes extraneous load as wasted effort from poor instructional design/distraction.",
          keywords: ["poor instructional", "split-attention", "clutter", "distracting"],
        },
        {
          point: "Explains that cutting extraneous load frees capacity for germane schema integration into LTM.",
          keywords: ["germane", "frees", "long-term schemas", "integrating"],
        },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS — 2 Papers × 15 Questions each (30 Qs total)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Conditioning, Neurobiology & Cognitive Load (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "6-context-learning-cognition-p1",
      title: "Practice Paper 1 — Conditioning, Neurobiology & Cognitive Load",
      level: "SL",
      questions: [
        {
          id: "6-context-learning-cognition-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conditioning-social-learning",
          question:
            "Every time a cat hears the electric can opener whirr, its owner feeds it tuna, causing the cat to run into the kitchen and salivate. Before any pairings occurred, what classical conditioning label applied to the **tuna**?",
          answer: { type: "text", accept: ["UCS", "unconditioned stimulus", "US"], display: "UCS (unconditioned stimulus)" },
          traps: [
            {
              spec: { type: "text", accept: ["CS", "conditioned stimulus"] },
              feedback: "The can opener became the CS; tuna naturally triggered salivation with zero prior training.",
            },
          ],
          hints: [
            "Did the cat need training to salivate for tuna?",
            "Stimulus vs response: tuna is the environmental trigger.",
          ],
          solution: [
            "Tuna naturally elicits salivation without learning → **UCS (unconditioned stimulus)**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conditioning-social-learning",
          question:
            "A student who developed anxiety toward a strict maths teacher's brass whistle begins feeling anxious whenever a sports referee blows *any* metal whistle on the playing field. Name this classical conditioning phenomenon.",
          answer: {
            type: "text",
            accept: ["stimulus generalization", "generalization", "stimulus generalisation", "generalisation"],
            display: "Stimulus generalization",
          },
          traps: [
            {
              spec: { type: "text", accept: ["stimulus discrimination", "discrimination"] },
              feedback: "Discrimination means responding *only* to the original CS and ignoring similar cues; here the response spread to similar whistles.",
            },
          ],
          hints: [
            "The conditioned response transferred to stimuli similar to the original CS.",
          ],
          solution: [
            "Responding to stimuli resembling the original CS (any metal whistle) is **stimulus generalization**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conditioning-social-learning",
          question:
            "To stop a toddler's tantrums at the supermarket, a parent hands over a sweet treat; the toddler immediately stops screaming, making the parent *much more likely* to buy sweets during future trips. Which operant quadrant reinforced the **parent's** treat-buying behaviour?",
          answer: {
            type: "text",
            accept: ["negative reinforcement", "negative-reinforcement"],
            display: "Negative reinforcement",
          },
          traps: [
            {
              spec: { type: "text", accept: ["positive reinforcement"] },
              feedback: "Look from the *parent's* perspective: the parent's buying increased because an aversive stimulus (screaming) was *removed*!",
            },
          ],
          hints: [
            "Focus strictly on the *parent's* behaviour: did buying sweets increase or decrease?",
            "What happened immediately after the parent handed over the sweet? An aversive noise vanished.",
          ],
          solution: [
            "The parent's treat-buying *increases* → reinforcement.",
            "The consequence for the parent is the *removal* of aversive screaming → **negative reinforcement**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conditioning-social-learning",
          question:
            "A mobile role-playing game awards a rare legendary sword on average once every 20 dungeon runs (sometimes after 3 runs, sometimes after 47), producing rapid nonstop tapping. Enter the reinforcement schedule abbreviation (`FR`, `VR`, `FI`, or `VI`).",
          answer: { type: "text", accept: ["VR", "variable ratio", "variable-ratio"], display: "VR (variable-ratio)" },
          traps: [
            {
              spec: { type: "text", accept: ["VI", "variable interval"] },
              feedback: "Rewards depend on the *number of dungeon runs* (actions/ratio), not waiting for a clock timer (interval).",
            },
          ],
          hints: [
            "Count of actions (ratio) or elapsed clock time (interval)?",
            "Constant count or unpredictable around an average?",
          ],
          solution: [
            "Depends on number of runs (ratio) + unpredictable average of 20 (variable) → **VR (variable-ratio)**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "neurobiology-memory-cognitive-load",
          question:
            "A student learns multi-step organic synthesis reactions — a genuinely complex topic with many interacting rules — using a clean, clutter-free textbook diagram. According to Sweller, which type of cognitive load remains naturally high due to the topic's inherent element interactivity?",
          answer: {
            type: "text",
            accept: ["intrinsic", "intrinsic load", "intrinsic cognitive load"],
            display: "Intrinsic load",
          },
          traps: [
            {
              spec: { type: "text", accept: ["extraneous", "extraneous load"] },
              feedback: "The textbook is clean and clutter-free, so extraneous load is low; the complexity belongs to the material itself.",
            },
          ],
          hints: [
            "Which of Sweller's three loads reflects inherent conceptual complexity rather than slide layout?",
            "Remember the textbook is clutter-free, ruling out extraneous load.",
          ],
          solution: [
            "High element interactivity inherent to the subject matter itself produces **intrinsic load**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "neurobiology-memory-cognitive-load",
          question:
            "In a 1-week delayed memory test, Group A (massed rereading) recalled a mean of **15 out of 40** terms, whereas Group B (spaced retrieval practice) recalled **24 out of 40** terms. Calculate Group B's **relative percentage improvement** over Group A (enter a whole number).",
          answer: { type: "number", value: 60, display: "60%" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "9 is the raw difference in terms recalled; divide 9 by Group A's baseline (15) and multiply by 100.",
            },
            {
              spec: { type: "number", value: 22.5 },
              feedback: "22.5 is the *percentage-point* difference (60% − 37.5%). Divide 22.5 by the 37.5% baseline for the *relative* percentage improvement!",
            },
          ],
          hints: [
            "You can compute directly from raw counts: gain = 24 − 15 = 9 terms.",
            "Relative percentage improvement = (9 ÷ 15) × 100.",
          ],
          solution: [
            "Group A = {{15/40 = 37.5%}}; Group B = {{24/40 = 60%}}.",
            "Relative gain = {{(24 - 15)/15 * 100 = 9/15 * 100 = 60%}}.",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "neurobiology-memory-cognitive-load",
          question:
            "Name the specific sleep stage most closely linked to hippocampal-to-neocortical replay during active systems consolidation of declarative LTP memories.",
          answer: {
            type: "text",
            accept: ["slow-wave sleep", "slow wave sleep", "SWS", "deep sleep", "NREM stage 3", "N3"],
            display: "Slow-wave sleep (SWS)",
          },
          hints: [
            "Declarative memory replay peaks during deep non-REM sleep.",
            "Commonly abbreviated SWS.",
          ],
          solution: [
            "**Slow-wave sleep (SWS)** orchestrates synchronized hippocampal–neocortical replay that stabilizes declarative memories (Diekelmann & Born, 2010).",
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "conditioning-social-learning",
          marks: 3,
          question:
            "Outline how **Garcia & Koelling (1966)** demonstrated evolutionary constraints on classical conditioning, and explain its relevance to the FA2027 Core Concept of **Perspective**.",
          hints: [
            "Describe the two paired stimulus sets (sweet taste vs bright light/noise) and two outcomes (nausea vs electric shock).",
            "Explain why integrating Biological evolution corrects a purely environmental behaviourist view.",
          ],
          modelAnswer:
            "Garcia & Koelling exposed laboratory rats to sweetened water accompanied by flashing lights and clicking noises, pairing ingestion either with radiation-induced illness or electric foot-shock. Rats rapidly avoided sweet flavour after nausea even across hours-long delays, whereas they associated audiovisual cues strictly with shock. This conditioned taste aversion supports biological preparedness, illustrating Perspective by showing that evolutionary survival predispositions constrain associative conditioning rather than treating organisms as blank slates.",
          markScheme: [
            {
              point: "Describes the Garcia & Koelling procedure pairing sweet water + lights/noise with nausea vs shock.",
              keywords: ["sweetened water", "sweet", "radiation", "foot-shock", "shock"],
            },
            {
              point: "States the selective finding: taste linked rapidly to delayed nausea while lights/noise linked to shock.",
              keywords: ["taste aversion", "delays", "audiovisual", "flavour"],
            },
            {
              point: "Links explicitly to biological preparedness and triangulating the Biological Perspective alongside behaviourism.",
              keywords: ["biological preparedness", "evolutionary", "blank slates", "constrain"],
            },
          ],
        },
        {
          id: "6-context-learning-cognition-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "neurobiology-memory-cognitive-load",
          marks: 4,
          question:
            "Explain the synaptic mechanism of **Long-Term Potentiation (LTP)** and link it to the FA2027 Core Concept of **Change**.",
          hints: [
            "Trace the sequence: glutamate → AMPA depolarization → Mg²⁺ exit from NMDA → Ca²⁺ influx → extra AMPA receptors.",
            "Tie structural synaptic strengthening explicitly to durable biological **Change** underlying learning.",
          ],
          modelAnswer:
            "Long-Term Potentiation embodies biological Change at the cellular level, first observed in rabbit hippocampal slices by Bliss & Lømo (1973). When presynaptic neurons fire at high frequency, abundant glutamate binds postsynaptic AMPA receptors, admitting sodium and strongly depolarizing the spine. That depolarization expels magnesium plugs blocking NMDA channels, permitting calcium influx that activates intracellular kinases. Consequently, neurons insert additional AMPA receptors into the membrane and enlarge dendritic spines, making future postsynaptic responses stronger and more sensitive.",
          markScheme: [
            {
              point: "Cites Hebbian/hippocampal context (Bliss & Lømo) and high-frequency presynaptic glutamate release.",
              keywords: ["glutamate", "bliss", "hippocampal"],
            },
            {
              point: "Explains AMPA depolarization expelling the Mg²⁺ plug from postsynaptic NMDA receptors.",
              keywords: ["ampa", "magnesium", "nmda", "depolariz"],
            },
            {
              point: "Explains Ca²⁺ influx triggering insertion of extra postsynaptic AMPA receptors / dendritic spine growth.",
              keywords: ["calcium", "additional ampa", "dendritic spines"],
            },
            {
              point: "Links explicitly to durable synaptic Change (enhanced future EPSP efficacy).",
              keywords: ["future postsynaptic", "stronger", "biological change", "cellular level"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "conditioning-social-learning",
          marks: 4,
          question:
            "**[Paper 1 Section B Vignette]** A secondary school launches a punctuality scheme: every student who arrives on time for 10 consecutive mornings earns a homework pass, while late students lose 15 minutes of lunchtime break. Meanwhile, Year 7 newcomers quickly imitate older student prefects whom they see receiving praise at assembly. Apply **two** distinct learning mechanisms to explain the students' behaviour.",
          hints: [
            "Identify the specific operant contingencies for on-time and late students (check reinforcement/punishment + schedule!).",
            "Identify Bandura's observational learning + vicarious reinforcement for the Year 7 newcomers.",
          ],
          modelAnswer:
            "First, the punctuality scheme deploys operant contingencies: awarding a homework pass strictly after 10 consecutive mornings acts as positive reinforcement (or removal of aversive homework via negative reinforcement) on a fixed-ratio (FR-10) schedule, whereas revoking 15 minutes of valued break applies negative punishment to suppress tardiness. Second, Year 7 newcomers display Bandura's observational learning: watching high-status prefects receive assembly praise supplies vicarious reinforcement, boosting attention, retention, and motivation to imitate punctual habits without experiencing direct rewards first.",
          markScheme: [
            {
              point: "Identifies operant reinforcement and fixed-ratio (FR-10) schedule for the 10-morning homework pass.",
              keywords: ["fixed-ratio", "fr-10", "reinforcement"],
            },
            {
              point: "Accurately classifies revoking 15 minutes of break as negative punishment reducing lateness.",
              keywords: ["negative punishment", "tardiness", "revoking"],
            },
            {
              point: "Identifies Bandura's observational learning and vicarious reinforcement for Year 7 newcomers watching prefects.",
              keywords: ["bandura", "vicarious reinforcement", "observational"],
            },
            {
              point: "Incorporates cognitive mediational steps (attention, retention, motivation) applied directly to the school scenario.",
              keywords: ["attention", "retention", "motivation", "high-status"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "neurobiology-memory-cognitive-load",
          marks: 6,
          question:
            "**[Paper 1 Section B Vignette]** Ahead of mock exams, Priya studies biology by highlighting a 15-page textbook chapter three times in one Sunday afternoon with group-chat alerts popping up on her laptop. Her classmate Amir turns off his phone, draws labelled dual-coded flowcharts, and completes three short closed-book self-quizzes spaced across Monday, Wednesday, and Saturday. Priya feels far more confident on Sunday evening than Amir, yet Amir outscores her by 24 percentage points the following Friday. Using **Cognitive Load Theory**, **retrieval practice**, and **two FA2027 Core Concepts**, explain this outcome.",
          hints: [
            "Map Priya's laptop notifications and dense highlighting to Sweller's extraneous load and passive fluency illusion.",
            "Map Amir's diagrams + spaced closed-book quizzes to Paivio's dual coding, Roediger & Karpicke (2006), Cepeda et al. (2006), and sleep-mediated LTP.",
            "Explicitly weave in two Core Concepts such as **Bias** (metacognitive illusion) and **Change** (durable LTM consolidation) or **Perspective**.",
          ],
          modelAnswer:
            "Sweller's Cognitive Load Theory explains why Priya's study session stalls despite long hours: laptop group-chat pop-ups continuously drain working-memory capacity through extraneous load, leaving little headroom for germane schema integration. Amir strips away notifications and uses labelled flowcharts combining visual and verbal channels (Paivio's Dual Coding), cutting extraneous friction so working memory focuses on germane processing.\n\nSecond, Amir harnesses retrieval practice (Roediger & Karpicke, 2006) and spaced repetition (Cepeda et al., 2006). Actively reconstructing knowledge across Monday, Wednesday, and Saturday triggers repeated NMDA-dependent hippocampal LTP and slow-wave sleep consolidation, producing durable neurocognitive Change. By contrast, Priya's massed rereading and highlighting generate surface fluency that triggers a metacognitive Bias — an illusion of competence inflating Sunday confidence despite shallow retention.\n\nIntegrating Biological sleep consolidation with Cognitive load and retrieval principles exemplifies the Core Concept of Perspective, demonstrating why feeling fluent during study is a poor Measurement proxy for one-week mastery.",
          markScheme: [
            {
              point: "Applies extraneous cognitive load (laptop notifications draining finite WM) to Priya.",
              keywords: ["extraneous", "pop-ups", "working-memory", "headroom"],
            },
            {
              point: "Applies Dual Coding and germane schema construction to Amir's phone-free flowcharts.",
              keywords: ["dual coding", "germane", "visual and verbal"],
            },
            {
              point: "Applies retrieval practice (Roediger & Karpicke) and spaced repetition (Cepeda) to Amir's delayed advantage.",
              keywords: ["roediger", "cepeda", "spaced repetition", "reconstructing"],
            },
            {
              point: "Integrates Biological LTP / slow-wave sleep consolidation explaining durable Change.",
              keywords: ["ltp", "slow-wave sleep", "consolidation", "neurocognitive change"],
            },
            {
              point: "Explains Priya's inflated confidence via metacognitive Bias (illusion of competence/fluency).",
              keywords: ["illusion of competence", "fluency", "metacognitive bias"],
            },
            {
              point: "Synthesizes a second Core Concept (Perspective or Measurement) explicitly tied to the vignette.",
              keywords: ["perspective", "measurement proxy", "shallow retention"],
            },
          ],
          markbands: BANDS_6,
        },
        {
          id: "6-context-learning-cognition-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "conditioning-social-learning",
          marks: 4,
          question:
            "Evaluate Watson & Rayner's (1920) 'Little Albert' study using the FA2027 Core Concepts of **Responsibility** and **Measurement**.",
          hints: [
            "For Responsibility: discuss deliberate distress/fear induction, lack of right to withdraw, and failure to decondition a vulnerable infant.",
            "For Measurement: note the N = 1 case-study limit (low generalizability) and subjective, unblinded observational recording (experimenter bias).",
          ],
          modelAnswer:
            "From an ethical Responsibility standpoint, Watson & Rayner gravely violated modern standards protecting vulnerable child participants: they deliberately conditioned lasting distress in a nine-month-old infant by clanging a steel bar behind his head, continued testing despite crying, and failed to extinguish or decondition his generalized fear before he left the hospital. From a Measurement perspective, although the study demonstrated stimulus generalization to furry objects, relying on a single infant (N = 1) prevents population generalizability, and qualitative filming without blinded raters introduced severe experimenter expectancy bias.",
          markScheme: [
            {
              point: "Identifies deliberate psychological harm/distress inflicted on a vulnerable nine-month-old infant (Responsibility).",
              keywords: ["vulnerable", "deliberately", "steel bar", "distress"],
            },
            {
              point: "Identifies failure to withdraw despite crying and lack of debriefing/deconditioning.",
              keywords: ["decondition", "extinguish", "crying"],
            },
            {
              point: "Evaluates Measurement via single-case (N = 1) low generalizability.",
              keywords: ["n = 1", "single infant", "generalizability"],
            },
            {
              point: "Evaluates Measurement via subjective unblinded observation / experimenter bias.",
              keywords: ["unblinded", "blinded", "expectancy bias", "qualitative"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "conditioning-social-learning",
          marks: 6,
          question:
            "**[HL Extension Integration — Motivation & Technology]** Discuss how operant reinforcement schedules interact with **intrinsic motivation** in gamified educational apps, referring to **Responsibility**.",
          hints: [
            "Explain how gamified apps use VR mystery rewards, badges, and streaks to sustain high responding.",
            "Contrast this with Deci & Ryan's Self-Determination Theory and Lepper et al.'s (1973) overjustification effect.",
            "Evaluate ethical Responsibility for teenage users (compulsive checking vs autonomy-supportive design).",
          ],
          modelAnswer:
            "Gamified learning apps frequently borrow Skinnerian partial reinforcement — especially variable-ratio mystery chests, point badges, and loss-aversion streak warnings — because unpredictable ratios generate steep engagement rates and strong resistance to extinction. In early acquisition, timely positive reinforcement can scaffold competence and build daily study routines.\n\nHowever, Deci & Ryan's Self-Determination Theory highlights a crucial motivational trade-off: when expected tangible rewards are layered onto tasks learners already find meaningful, the overjustification effect (Lepper et al., 1973) can shift perceived locus of causality outward, undermining autonomy and depressing voluntary engagement once rewards vanish. Furthermore, aggressive streak-loss notifications operate as negative reinforcement that fosters compulsive checking rather than deep germane comprehension.\n\nFrom an FA2027 Responsibility lens, educational technologists should deploy informational feedback that supports competence and autonomy rather than manipulative slot-machine contingencies that exploit adolescent dopamine reward circuits.",
          markScheme: [
            {
              point: "Explains Skinnerian VR / partial reinforcement schedules driving rapid engagement and extinction resistance.",
              keywords: ["variable-ratio", "extinction", "partial reinforcement"],
            },
            {
              point: "Notes a genuine benefit of early reinforcement scaffolding routine or competence.",
              keywords: ["scaffold", "routines", "timely positive"],
            },
            {
              point: "Integrates Self-Determination Theory (autonomy/competence) to qualify behaviourism.",
              keywords: ["self-determination", "autonomy", "locus of causality"],
            },
            {
              point: "Applies Lepper et al. (1973) overjustification effect reducing post-reward voluntary engagement.",
              keywords: ["overjustification", "lepper", "voluntary engagement"],
            },
            {
              point: "Evaluates negative-reinforcement streak anxiety vs deep germane learning.",
              keywords: ["streak-loss", "compulsive", "germane"],
            },
            {
              point: "Concludes with ethical Responsibility in digital design for adolescents.",
              keywords: ["informational feedback", "manipulative", "adolescent", "ethical"],
            },
          ],
          markbands: BANDS_6,
        },
        {
          id: "6-context-learning-cognition-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "neurobiology-memory-cognitive-load",
          marks: 4,
          question:
            "Using **Chase & Simon (1973)**, explain how domain-specific long-term memory schemas enable expert performance without expanding raw working-memory capacity.",
          hints: [
            "Describe both conditions of Chase & Simon's chess recall experiment (real game boards vs random boards).",
            "Explain chunking and how LTM schemas compress element interactivity to reduce intrinsic cognitive load.",
          ],
          modelAnswer:
            "Chase & Simon briefly showed chess masters and novices either meaningful mid-game board configurations or randomly scrambled piece layouts before asking them to reconstruct each board. Masters dramatically outperformed novices on authentic game positions, yet their advantage evaporated almost completely on scrambled boards. This dissociation proves experts do not possess a larger raw working-memory hard drive; instead, thousands of hours of practice build organized long-term schemas that group multi-piece patterns into single chunks, slashing intrinsic element interactivity and freeing working memory for strategic planning.",
          markScheme: [
            {
              point: "Describes the two conditions: meaningful mid-game chess layouts vs randomly scrambled boards.",
              keywords: ["mid-game", "randomly scrambled", "reconstruct"],
            },
            {
              point: "States the key dissociation: masters excelled on real positions but dropped near novices on scrambled layouts.",
              keywords: ["evaporated", "dissociation", "novices"],
            },
            {
              point: "Explains chunking via organized LTM schemas rather than enlarged raw working-memory slots.",
              keywords: ["chunks", "organized long-term", "hard drive"],
            },
            {
              point: "Connects chunking to reduced intrinsic load / strategic working-memory headroom.",
              keywords: ["intrinsic", "strategic planning", "freeing"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "conditioning-social-learning",
          marks: 9,
          question:
            "**[Paper 1 Section C — Core Concept ERQ]** Discuss how the Core Concept of **Perspective** enriches our understanding of **how humans acquire and retain new behaviour and knowledge**.",
          hints: [
            "Frame Perspective explicitly: no single level (Biological, Cognitive, or Sociocultural) captures human learning completely.",
            "Contrast behavioural/observational acquisition (Pavlov/Skinner/Bandura), biological plasticity & constraints (Garcia & Koelling; Bliss & Lømo LTP; sleep consolidation), and cognitive architecture (Sweller CLT; Roediger & Karpicke testing effect).",
            "Evaluate methodological/theoretical trade-offs (reductionism vs holistic complexity, animal generalization, lab vs classroom ecological validity) to reach a reasoned conclusion.",
          ],
          modelAnswer:
            "Evaluating learning through the Core Concept of Perspective demonstrates that behavioural, biological, cognitive, and sociocultural lenses are mutually corrective rather than rivals; relying on a single level risks reductionism.\n\nFrom a behavioural and sociocultural Perspective, Pavlovian classical pairing and Skinnerian operant schedules map observable environmental contingencies, while Bandura's Bobo doll studies (1961, 1963) added vicarious reinforcement and cognitive ARRM mediation showing children learn complex social scripts without direct trial-and-error. Yet pure behaviourism treats the learner as an infinitely malleable blank slate — a view overturned by the Biological Perspective. Garcia & Koelling (1966) proved biological preparedness constrains conditioning (rats rapidly linked sweet taste to delayed nausea but not lights to nausea), while Bliss & Lømo (1973) identified hippocampal Long-Term Potentiation (NMDA Ca²⁺ influx and postsynaptic AMPA insertion) alongside Diekelmann & Born's slow-wave sleep replay as the cellular engine of retention. However, invasive rodent electrophysiology raises cross-species Causality limits and 3Rs ethical Responsibility concerns, showing biological data alone cannot prescribe classroom pedagogy.\n\nThe Cognitive Perspective bridges that gap by revealing how working-memory architecture filters incoming instruction. Sweller's Cognitive Load Theory shows split-attention extraneous clutter overwhelms limited working memory, whereas Paivio's dual coding and Roediger & Karpicke's (2006) retrieval practice (boosting one-week recall from 40% to 61%) guide germane schema building — an effect supported by Chase & Simon's (1973) chess chunking evidence. Still, controlled lab memory tasks can overlook social context, motivation, and socioeconomic stress.\n\nIn conclusion, triangulating Biological synaptic plasticity, Cognitive load and retrieval architecture, and Sociocultural observational contingencies yields a far fuller, ethically responsible account of human learning than any isolated paradigm.",
          markScheme: [
            {
              point: "Establishes a clear thesis anchoring Perspective against single-level reductionism.",
              keywords: ["reductionism", "mutually corrective", "isolated paradigm"],
            },
            {
              point: "Explains behavioural acquisition (Pavlov/Skinner) accurately.",
              keywords: ["pavlovian", "skinnerian", "contingencies"],
            },
            {
              point: "Integrates Sociocultural observational learning (Bandura Bobo doll, vicarious reinforcement, ARRM).",
              keywords: ["bandura", "vicarious reinforcement", "arrm"],
            },
            {
              point: "Integrates Biological preparedness (Garcia & Koelling) challenging blank-slate assumptions.",
              keywords: ["garcia", "biological preparedness", "blank slate"],
            },
            {
              point: "Integrates Biological LTP (Bliss & Lømo, NMDA/AMPA) and slow-wave sleep consolidation.",
              keywords: ["bliss", "nmda", "slow-wave sleep"],
            },
            {
              point: "Critically evaluates biological animal-model limits (cross-species Causality & 3Rs Responsibility).",
              keywords: ["cross-species", "3rs", "rodent"],
            },
            {
              point: "Integrates Cognitive Load Theory (Sweller, extraneous vs germane) and Dual Coding.",
              keywords: ["sweller", "extraneous", "dual coding", "germane"],
            },
            {
              point: "Integrates Retrieval Practice (Roediger & Karpicke 40% vs 61%) and/or Chase & Simon schema expertise.",
              keywords: ["roediger", "61%", "chase"],
            },
            {
              point: "Sustains balanced synthesis concluding why multi-perspective triangulation beats single-level explanations.",
              keywords: ["triangulating", "fuller", "in conclusion"],
            },
          ],
          markbands: BANDS_9,
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Memory Reliability, Executive Function & Contexts (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "6-context-learning-cognition-p2",
      title: "Practice Paper 2 — Eyewitness Reliability, Executive Function & Contexts",
      level: "SL",
      questions: [
        {
          id: "6-context-learning-cognition-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "eyewitness-memory-reliability",
          question:
            "In Loftus & Palmer (1974) Experiment 1, mean speed estimates were **40.8 mph** for *'smashed'* and **31.8 mph** for *'contacted'*. Calculate the difference in mph between these two verb conditions (enter a whole number).",
          answer: { type: "number", value: 9, display: "9 mph" },
          hints: [
            "Subtract 31.8 from 40.8.",
          ],
          solution: [
            "{{40.8 - 31.8 = 9}} mph shift caused by a single leading verb.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "eyewitness-memory-reliability",
          question:
            "In a replication of Loftus & Pickrell (1995), **11 out of 44** adults falsely recalled being lost in a shopping mall as children. Express this false-memory endorsement rate as a percentage (enter a whole number).",
          answer: { type: "number", value: 25, display: "25%" },
          hints: [
            "Simplify the fraction 11/44 first.",
            "Divide 11 by 44 (= 1/4) and multiply by 100.",
          ],
          solution: [
            "{{11/44 * 100 = 25%}}.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "eyewitness-memory-reliability",
          question:
            "A bank teller stares intently at a robber's shiny revolver throughout a 40-second hold-up and later struggles to pick the robber's face from a photo lineup. Name this encoding phenomenon.",
          answer: {
            type: "text",
            accept: ["weapon focus", "weapon focus effect", "the weapon focus effect"],
            display: "Weapon focus effect",
          },
          hints: [
            "Notice *where* the teller's visual attention narrowed during the robbery.",
            "Loftus, Loftus & Messo (1987) verified this using eye-tracking.",
          ],
          solution: [
            "Attentional narrowing onto an unexpected threat object at the expense of peripheral facial features is the **weapon focus effect**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "eyewitness-memory-reliability",
          question:
            "In a Cognitive Interview, an officer asks a witness to describe a street altercation from the viewpoint of the café owner standing across the street. Which of the four Cognitive Interview pillars is this?",
          answer: {
            type: "text",
            accept: ["change perspective", "changing perspective", "changed perspective", "perspective change"],
            display: "Change perspective",
          },
          hints: [
            "Recall C-R-R-C: Context, Report, Reverse, Change.",
            "The witness is shifting spatial viewpoint to another observer.",
          ],
          solution: [
            "Adopting another bystander's spatial angle applies the **change perspective** pillar.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "eyewitness-memory-reliability",
          question:
            "Meissner & Brigham's (2001) meta-analysis found witnesses are ~1.56× more likely to falsely identify suspects from a different racial group than their own. Name this sociocultural–cognitive bias.",
          answer: {
            type: "text",
            accept: ["own-race bias", "own race bias", "cross-race effect", "cross race effect", "other-race effect", "other race effect"],
            display: "Own-race bias (cross-race effect)",
          },
          hints: [
            "Witnesses recognize faces from their own racial group more accurately than faces from other racial groups.",
            "Commonly called either own-race bias or the cross-race effect.",
          ],
          solution: [
            "Elevated false-alarm misidentifications for other-race faces illustrate **own-race bias (cross-race effect)**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q06",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "problem-solving-environmental-cognition",
          question:
            "In Miyake et al.'s (2000) executive-function triad, which specific component is primarily operationalized by the **Stroop Colour–Word task**?",
          answer: {
            type: "text",
            accept: ["inhibitory control", "inhibition", "response inhibition"],
            display: "Inhibitory control",
          },
          traps: [
            {
              spec: { type: "text", accept: ["cognitive flexibility", "set-shifting", "set shifting"] },
              feedback: "Cognitive flexibility is primarily measured via rule-switching tasks like the Wisconsin Card Sorting Test; Stroop requires suppressing an automatic reading impulse.",
            },
          ],
          hints: [
            "The participant must *suppress* the automatic urge to read the printed word.",
          ],
          solution: [
            "Suppressing prepotent word reading to name incongruent ink colour measures **inhibitory control**.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "problem-solving-environmental-cognition",
          question:
            "In a Stroop executive-function study, adolescents under high acute noise stress average **810 ms** on incongruent Stroop trials vs **600 ms** on congruent trials. Calculate their **percentage slowdown** relative to congruent latency (enter a whole number).",
          answer: { type: "number", value: 35, display: "35%" },
          traps: [
            {
              spec: { type: "number", value: 210 },
              feedback: "210 ms is the absolute interference latency; divide 210 by 600 and multiply by 100 for percentage slowdown.",
            },
          ],
          hints: [
            "Interference = 810 − 600 = 210 ms.",
            "Divide 210 by the 600 ms baseline and multiply by 100.",
          ],
          solution: [
            "Interference = {{810 - 600 = 210}} ms.",
            "Percentage slowdown = {{210/600 * 100 = 35%}}.",
          ],
        },
        {
          id: "6-context-learning-cognition-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "eyewitness-memory-reliability",
          marks: 4,
          question:
            "Explain how **high-arousal stress** affects eyewitness encoding accuracy, integrating **Biological** and **Cognitive** mechanisms with one relevant study.",
          hints: [
            "Contrast moderate alerting arousal with extreme threat on the Yerkes–Dodson inverted-U.",
            "Link Biological amygdala/cortisol responses with Cognitive attentional narrowing (Easterbrook / weapon focus) and Deffenbacher et al. (2004).",
          ],
          modelAnswer:
            "While moderate arousal sharpens vigilance along the Yerkes–Dodson curve, extreme threat impairs eyewitness encoding across both biological and cognitive levels. Biologically, acute stress activates the amygdala and triggers cortisol surges that disrupt prefrontal working-memory control and hippocampal consolidation. Cognitively, Easterbrook's cue-utilization hypothesis explains how intense threat narrows attentional bandwidth onto central danger cues (such as a weapon in Loftus, Loftus & Messo, 1987) at the expense of peripheral facial traits. Confirming this pattern, Deffenbacher et al.'s (2004) meta-analysis of 27 studies found high stress significantly reduced accurate perpetrator identification and crime-detail recall.",
          markScheme: [
            {
              point: "Distinguishes moderate arousal from extreme threat (Yerkes–Dodson inverted-U).",
              keywords: ["yerkes", "moderate arousal", "extreme threat"],
            },
            {
              point: "Explains Biological stress pathway (amygdala/cortisol impairing prefrontal/hippocampal encoding).",
              keywords: ["cortisol", "amygdala", "hippocampal", "prefrontal"],
            },
            {
              point: "Explains Cognitive attentional narrowing (Easterbrook / central vs peripheral detail loss).",
              keywords: ["easterbrook", "attentional bandwidth", "peripheral", "narrows"],
            },
            {
              point: "Cites accurate empirical support (Deffenbacher et al., 2004 meta-analysis or Loftus et al., 1987).",
              keywords: ["deffenbacher", "loftus", "meta-analysis"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "eyewitness-memory-reliability",
          marks: 6,
          question:
            "**[Paper 1 Section B Vignette]** Outside a subway station at dusk, a commuter briefly sees an armed mugger snatch a tourist's bag and flee. At the police station, a detective who knows the prime suspect shows six photos simultaneously while asking: *'Which of these men was the one who **violently smashed** the tourist's phone?'* The commuter hesitates, picks a photo of a man from a different racial group, and the detective smiles and says, *'Good eye — we caught him earlier.'* Analyse **three** threats to eyewitness reliability in this scenario and recommend **two** Responsibility-driven forensic reforms.",
          hints: [
            "Spot four clear hazards in the vignette: weapon focus/stress, leading verb ('violently smashed'), own-race bias, and non-blind officer post-identification feedback.",
            "Pair diagnoses with concrete reforms: Fisher & Geiselman's Cognitive Interview + double-blind sequential lineup.",
          ],
          modelAnswer:
            "Three interlocking psychological threats compromise the commuter's testimony. First, the armed mugging induces weapon focus (Loftus, Loftus & Messo, 1987) and acute stress (Deffenbacher et al., 2004), narrowing visual fixations onto the weapon and starving facial encoding. Second, the detective's phrasing ('violently smashed') introduces post-event misinformation mirroring Loftus & Palmer (1974), risking reconstructive memory distortion. Third, cross-race identification elevates false-alarm risk through own-race bias (Meissner & Brigham, 2001, ~1.56× higher false alarms), compounded by the detective's confirming smile ('Good eye'), which artificially inflates witness confidence.\n\nTo honour legal Responsibility and prevent wrongful conviction, police should first replace leading closed questions with Fisher & Geiselman's (1992) Cognitive Interview — reinstating context, encouraging full unfiltered reporting, and using reverse-order recall to boost accurate detail retrieval (~35–41%, Köhnken et al., 1999). Second, officers must adopt double-blind sequential lineups with neutral pre-lineup instructions ('the culprit may or may not be present') so administrator expectancy cues and post-choice feedback cannot contaminate witness certainty.",
          markScheme: [
            {
              point: "Diagnoses weapon focus / high-arousal encoding impairment applied to the armed mugging.",
              keywords: ["weapon focus", "deffenbacher", "encoding"],
            },
            {
              point: "Diagnoses post-event misinformation via the leading verb ('violently smashed', Loftus & Palmer).",
              keywords: ["misinformation", "loftus", "reconstructive"],
            },
            {
              point: "Diagnoses own-race bias (Meissner & Brigham) and/or officer expectancy/confidence inflation.",
              keywords: ["own-race bias", "meissner", "inflates witness confidence"],
            },
            {
              point: "Recommends Fisher & Geiselman's Cognitive Interview with specific pillars (context/report/reverse).",
              keywords: ["cognitive interview", "reinstating context", "reverse-order"],
            },
            {
              point: "Recommends double-blind sequential lineups with neutral instructions to remove officer cueing.",
              keywords: ["double-blind", "sequential", "may or may not"],
            },
            {
              point: "Anchors reforms explicitly in FA2027 Responsibility / wrongful-conviction prevention.",
              keywords: ["wrongful conviction", "kohnken", "köhnken", "legal responsibility"],
            },
          ],
          markbands: BANDS_6,
        },
        {
          id: "6-context-learning-cognition-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "problem-solving-environmental-cognition",
          marks: 4,
          question:
            "Explain how **stereotype threat** links sociocultural identity to cognitive performance on demanding problem-solving tasks, referring to relevant empirical evidence.",
          hints: [
            "Start with Steele & Aronson (1995) showing diagnostic framing depressed performance among stereotyped test-takers.",
            "Explain Schmader & Johns's (2003) cognitive mediator: anxious monitoring depletes finite working-memory capacity.",
            "Include a brief Measurement/ecological nuance (effect sizes vary across real-world high-stakes settings).",
          ],
          modelAnswer:
            "Stereotype threat occurs when individuals worry their performance will confirm a negative societal stereotype about their social group. In Steele & Aronson's (1995) landmark experiment, Black college students performed worse on challenging verbal items when the task was framed as diagnostic of intellectual ability compared with an identical non-diagnostic framing. Schmader & Johns (2003) uncovered the cognitive bridge: threat triggers physiological stress and effortful self-monitoring to suppress anxious thoughts, siphoning away finite working-memory capacity needed for complex reasoning. However, contemporary meta-analyses note that real-world classroom effect sizes are smaller and context-dependent, underscoring Measurement nuance.",
          markScheme: [
            {
              point: "Defines stereotype threat as apprehension about confirming a negative group stereotype.",
              keywords: ["negative societal", "confirm a negative", "social group"],
            },
            {
              point: "Cites Steele & Aronson (1995) diagnostic vs non-diagnostic framing study accurately.",
              keywords: ["steele", "aronson", "diagnostic"],
            },
            {
              point: "Explains Schmader & Johns's (2003) working-memory depletion mechanism via stress/self-monitoring.",
              keywords: ["schmader", "working-memory capacity", "self-monitoring"],
            },
            {
              point: "Includes balanced evaluation (real-world effect sizes / Measurement nuance).",
              keywords: ["meta-analyses", "context-dependent", "smaller"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "problem-solving-environmental-cognition",
          marks: 6,
          question:
            "**[Paper 1 Section B Vignette]** A municipal report compares 200 bilingual children attending a well-funded private international school with 200 monolingual children from an under-resourced neighbourhood school. Because the bilingual group scores higher on a computerized Flanker inhibitory task, a local councillor announces: *'Speaking two languages is proven to boost children's brainpower — let's fund bilingual apps instead of school breakfast programmes.'* Critique the councillor's conclusion using **Causality**, **Bias**, and **Responsibility**.",
          hints: [
            "Causality: identify the glaring socioeconomic (SES) confound between private international vs under-resourced schools (Noble et al., 2015; Farah et al., 2006).",
            "Bias & Measurement: link to Paap & Greenberg (2013) single-task impurity and Lehtonen et al. (2018) publication bias in bilingual executive claims.",
            "Responsibility: critique cutting nutrition/breakfast support when iron/iodine nutrition and chronic stress directly shape prefrontal executive function.",
          ],
          modelAnswer:
            "The councillor's claim commits a serious Causality error by treating a confounded quasi-experimental comparison as proof of bilingual causation. Comparing affluent international-school pupils with under-resourced neighbourhood pupils systematically confounds language status with socioeconomic status (SES). Neurodevelopmental research (Farah et al., 2006; Noble et al., 2015) shows that chronic poverty stressors, crowded noise, and resource gaps independently correlate with lower prefrontal executive scores — meaning SES, not bilingualism, likely drives the Flanker gap.\n\nSecond, invoking the Core Concept of Bias and Measurement, relying on a single computerized Flanker task suffers from task impurity (Paap & Greenberg, 2013). Moreover, Lehtonen et al.'s (2018) meta-analysis of 152 studies found that once publication bias (unpublished null studies) and SES confounds are controlled, domain-general bilingual executive advantages drop essentially to zero.\n\nFinally, from a Responsibility standpoint, diverting funding away from school breakfast programmes to buy apps risks deepening inequity: adequate micronutrient nutrition (iron, iodine) and reduced food-insecurity cortisol directly protect vulnerable children's developing executive function.",
          markScheme: [
            {
              point: "Identifies quasi-experimental SES confound breaking Causality (affluent vs under-resourced schools).",
              keywords: ["quasi-experimental", "confounds", "socioeconomic"],
            },
            {
              point: "Applies SES–cognition evidence (Farah / Noble) explaining environmental stress/resource pathways.",
              keywords: ["noble", "farah", "prefrontal"],
            },
            {
              point: "Applies Measurement critique of single-task impurity (Paap & Greenberg, 2013).",
              keywords: ["paap", "task impurity", "single computerized"],
            },
            {
              point: "Applies Bias critique via Lehtonen et al. (2018) publication bias reducing bilingual EF gains near zero.",
              keywords: ["lehtonen", "publication bias", "near zero", "essentially to zero"],
            },
            {
              point: "Evaluates societal Responsibility: cutting breakfast programmes harms nutrition-dependent cognitive growth.",
              keywords: ["micronutrient", "iron", "inequity", "food-insecurity"],
            },
            {
              point: "Synthesizes an evidence-based policy recommendation protecting vulnerable learners.",
              keywords: ["vulnerable children", "protect", "diverting funding"],
            },
          ],
          markbands: BANDS_6,
        },
        {
          id: "6-context-learning-cognition-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "eyewitness-memory-reliability",
          marks: 4,
          question:
            "Evaluate **Loftus & Pickrell's (1995) 'Lost in the Mall'** study with reference to **Measurement** and ethical **Responsibility**.",
          hints: [
            "Measurement: small sample (N = 24), mild plausible event (getting lost is common — may not generalize to traumatic events), yet strong longitudinal multi-interview design showing 25% endorsement.",
            "Responsibility: deceiving participants using trusted relatives and implanting distressing childhood memories raises psychological harm concerns requiring sensitive debriefing.",
          ],
          modelAnswer:
            "Regarding Measurement, Loftus & Pickrell's multi-interview protocol cleverly embedded one fabricated narrative among three real family anecdotes, showing 25% (6 of 24) partially or fully endorsed the false event — proving misinformation can implant entire episodes, not just tweak crash speeds. However, the tiny convenience sample (N = 24) limits generalizability, and getting briefly lost in a mall is a plausible, mundane childhood script that may not generalize to severe traumatic memories. Regarding ethical Responsibility, using trusted relatives to deceive participants risked lasting emotional distress and undermined family trust, making thorough debriefing and right to withdraw essential.",
          markScheme: [
            {
              point: "States key finding (25% / 6 of 24) and methodological strength (embedded among real family anecdotes).",
              keywords: ["25%", "6 of 24", "anecdotes", "implant"],
            },
            {
              point: "Critiques Measurement via small sample (N = 24) and mundane plausibility vs severe trauma.",
              keywords: ["n = 24", "plausible", "traumatic", "generaliz"],
            },
            {
              point: "Evaluates Responsibility via deception using relatives and risk of psychological distress.",
              keywords: ["deceive", "relatives", "emotional distress", "trust"],
            },
            {
              point: "Notes required ethical safeguards (debriefing, right to withdraw).",
              keywords: ["debriefing", "withdraw"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "eyewitness-memory-reliability",
          marks: 6,
          question:
            "**[HL Extension Integration — Culture]** Analyse how **cultural norms and WEIRD sampling bias** complicate universal generalizations in eyewitness memory and problem-solving research.",
          hints: [
            "Define WEIRD sampling bias (Henrich et al.) and imposed etic generalizations.",
            "Connect to eyewitness testimony (own-race bias, cultural power distance/deference to police authority, analytic vs holistic visual attention).",
            "Connect to problem solving / executive function (cultural tools, unfamiliar Western lab puzzles like Duncker/WCST vs everyday ecological reasoning).",
          ],
          modelAnswer:
            "Much classic cognition research — including Loftus & Palmer's US college samples and Duncker's Western university solvers — relies heavily on WEIRD (Western, Educated, Industrialized, Rich, Democratic) cohorts, creating an imposed etic risk when researchers assume findings generalize identically worldwide.\n\nIn eyewitness testimony, sociocultural norms shape both encoding and interview dynamics. Meissner & Brigham's (2001) own-race bias reflects differential cross-group contact, while Nisbett's cultural-cognition work shows holistic East Asian visual attention distributes gaze more broadly across background context than analytic Western object focus — potentially altering weapon-focus patterns. Furthermore, in higher power-distance cultures, witnesses may defer more strongly to leading police phrasing, magnifying conformity Bias unless interviewers deploy supportive Cognitive Interview rapport.\n\nSimilarly, standardized executive and problem-solving tasks (such as Duncker's candle-and-tack box or timed computerized WCST trials) embed Western schooling conventions; cross-cultural emic adaptations are vital to separate genuine cognitive ability from unfamiliar Measurement formats.",
          markScheme: [
            {
              point: "Explains WEIRD sampling bias and imposed etic overgeneralization.",
              keywords: ["weird", "imposed etic", "college samples"],
            },
            {
              point: "Applies cultural differences in visual attention (holistic vs analytic) to eyewitness encoding.",
              keywords: ["holistic", "analytic", "background context"],
            },
            {
              point: "Applies power distance / authority deference to suggestibility under police questioning.",
              keywords: ["power-distance", "defer", "conformity"],
            },
            {
              point: "Integrates own-race bias (Meissner & Brigham) as contact-dependent sociocultural experience.",
              keywords: ["own-race bias", "meissner", "contact"],
            },
            {
              point: "Evaluates Western schooling assumptions embedded in lab problem-solving/EF tasks.",
              keywords: ["duncker", "wcst", "schooling conventions"],
            },
            {
              point: "Recommends emic cultural adaptations to strengthen Measurement validity.",
              keywords: ["emic", "measurement formats", "unfamiliar"],
            },
          ],
          markbands: BANDS_6,
        },
        {
          id: "6-context-learning-cognition-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "problem-solving-environmental-cognition",
          marks: 4,
          question:
            "Explain how **Miyake et al.'s (2000) three core executive functions** help a learner overcome cognitive rigidity during unfamiliar academic problems.",
          hints: [
            "Name all three components of Miyake's triad: inhibitory control, cognitive flexibility, and working-memory updating.",
            "Connect them explicitly to breaking mental set (Einstellung), suppressing distractors, and tracking sub-goals.",
          ],
          modelAnswer:
            "Miyake et al.'s (2000) prefrontal executive-function triad counteracts rigid automatic habits through three coordinated operations. First, inhibitory control suppresses prepotent impulsive rules and irrelevant distractors (analogous to blocking automatic word reading in the Stroop task), preventing solvers from jumping straight into an outdated Einstellung formula. Second, cognitive flexibility (set-shifting, measured via WCST) enables the learner to abandon a failing approach and reframe an object's function to break Duncker's functional fixedness. Third, working-memory updating (measured via n-back tasks) actively replaces obsolete intermediate steps with new sub-goals while monitoring progress toward insight.",
          markScheme: [
            {
              point: "Explains inhibitory control suppressing prepotent impulses/Einstellung habits (with Stroop link).",
              keywords: ["inhibitory control", "prepotent", "stroop", "einstellung"],
            },
            {
              point: "Explains cognitive flexibility / set-shifting enabling reframing (with WCST or functional fixedness link).",
              keywords: ["cognitive flexibility", "set-shifting", "wcst", "functional fixedness"],
            },
            {
              point: "Explains working-memory updating refreshing active sub-goals (with n-back link).",
              keywords: ["working-memory updating", "n-back", "obsolete", "sub-goals"],
            },
            {
              point: "Anchors the triad in prefrontal cortex top-down coordination against cognitive rigidity.",
              keywords: ["prefrontal", "coordinated", "automatic habits"],
            },
          ],
          markbands: BANDS_4,
        },
        {
          id: "6-context-learning-cognition-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "To what extent",
          guideRef: "eyewitness-memory-reliability",
          marks: 9,
          question:
            "**[Paper 1 Section C — Core Concept ERQ]** *To what extent* do cognitive and sociocultural **Biases** undermine the reliability of human memory and reasoning in Learning and Cognition?",
          hints: [
            "Take a nuanced 'to a substantial extent, yet bounded by context and mitigable through structured reforms' stance.",
            "Cover eyewitness biases (Loftus & Palmer post-event misinformation; Loftus & Pickrell; Meissner & Brigham own-race bias) AND reasoning/metacognitive biases (Duncker functional fixedness; Luchins Einstellung; Roediger & Karpicke fluency illusion; Lehtonen publication bias).",
            "Include strong counter-evidence & mitigations: Yuille & Cutshall (1986) real-world accuracy, Fisher & Geiselman's Cognitive Interview (~35–41% accurate gain), incubation/executive flexibility, and pre-registered replication.",
          ],
          modelAnswer:
            "Cognitive and sociocultural Biases exert a substantial distorting influence across both memory retrieval and reasoning, yet empirical field studies and evidence-based reforms show that human cognition is fallible rather than hopelessly broken.\n\nIn eyewitness memory, reconstructive schemas render recollections highly vulnerable to post-event Bias. Loftus & Palmer (1974) demonstrated that changing a single verb shifted crash speed estimates from 31.8 mph ('contacted') to 40.8 mph ('smashed') and caused 32% of 'smashed' witnesses (vs 12% controls) to falsely remember nonexistent broken glass one week later. Extending this, Loftus & Pickrell (1995) implanted whole fabricated childhood memories in 25% of adults, while Meissner & Brigham's (2001) meta-analysis revealed sociocultural own-race bias raises cross-race false-alarm misidentifications by 1.56×. Yet lab simulations overstate fragility: Yuille & Cutshall's (1986) field study of a real Canadian gun-shop shooting found witnesses remained roughly 80% accurate months later despite misleading questions, showing high personal salience can partially buffer misinformation. Moreover, Fisher & Geiselman's (1992) Cognitive Interview (context reinstatement, reporting everything, reverse order) increases accurate recall by ~35–41% (Köhnken et al., 1999), demonstrating that structured Responsibility protocols mitigate bias.\n\nIn reasoning and metacognition, prior learning itself introduces systematic Bias. Duncker's (1945) candle problem (41% vs 86% solution rate in Adamson's replication) exposed functional fixedness, while Luchins (1942) showed Einstellung mental set blinded practiced solvers to trivial shortcuts. Similarly, Roediger & Karpicke (2006) revealed a metacognitive fluency bias where students predicted higher retention from passive rereading despite retrieval practice delivering far stronger one-week recall (61% vs 40%). At the scientific meta-level, Lehtonen et al. (2018) proved publication bias inflated early claims of a bilingual executive advantage. Nevertheless, prefrontal executive functions (Miyake et al., 2000), incubation breaks, spaced retrieval, and transparent replication reliably counter these errors.\n\nTherefore, cognitive and sociocultural Biases significantly compromise unguarded memory and judgment — especially under leading questions, stress, or unexamined intuition — but their impact is bounded by real-world salience and substantially reducible through scientifically designed forensic, educational, and research safeguards.",
          markScheme: [
            {
              point: "Establishes a balanced 'to what extent' thesis acknowledging substantial vulnerability alongside boundaries/mitigations.",
              keywords: ["substantial", "fallible", "mitigable", "safeguards"],
            },
            {
              point: "Analyses Loftus & Palmer (1974) Exp 1 & Exp 2 demonstrating reconstructive post-event bias.",
              keywords: ["loftus", "40.8", "32%", "broken glass"],
            },
            {
              point: "Integrates false-memory implantation (Loftus & Pickrell 25%) and/or sociocultural own-race bias (Meissner & Brigham 1.56×).",
              keywords: ["pickrell", "25%", "own-race bias", "meissner"],
            },
            {
              point: "Provides crucial counter-evidence via Yuille & Cutshall (1986) real-world shooting witness accuracy.",
              keywords: ["yuille", "cutshall", "80%", "field study"],
            },
            {
              point: "Evaluates mitigation via Fisher & Geiselman's Cognitive Interview and Köhnken meta-analysis.",
              keywords: ["cognitive interview", "kohnken", "köhnken", "reverse order"],
            },
            {
              point: "Analyses reasoning bias via Duncker's functional fixedness and/or Luchins's Einstellung mental set.",
              keywords: ["duncker", "functional fixedness", "luchins", "einstellung"],
            },
            {
              point: "Analyses metacognitive fluency bias (Roediger & Karpicke) or scientific publication bias (Lehtonen).",
              keywords: ["roediger", "fluency bias", "lehtonen", "publication bias"],
            },
            {
              point: "Explains cognitive mitigations (Miyake executive flexibility, incubation, spaced retrieval).",
              keywords: ["miyake", "incubation", "spaced retrieval"],
            },
            {
              point: "Delivers a coherent, nuanced final judgment directly answering 'to what extent'.",
              keywords: ["therefore", "bounded", "reducible"],
            },
          ],
          markbands: BANDS_9,
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET — 8 High-Rigor SL & HL Synthesis Questions (all "challenge")
  // =========================================================================
  challenge: [
    {
      id: "6-context-learning-cognition-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "eyewitness-memory-reliability",
      question:
        "In Loftus & Palmer (1974) Experiment 2, **16 out of 50** witnesses in the *'smashed'* group falsely reported broken glass, compared with **6 out of 50** in the control group. Calculate the **relative risk ratio** (smashed rate ÷ control rate), rounded to **2 decimal places**.",
      answer: { type: "number", value: 2.67, tolerance: 0.02, display: "2.67" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20 is the percentage-point difference (32% − 12%). Divide 32% by 12% (or 16 by 6) for the relative risk ratio.",
        },
      ],
      hints: [
        "Convert both counts to rates (32% and 12%), or directly divide 16 by 6 since group sizes are equal (N = 50).",
        "16 ÷ 6 = 8/3 = 2.666… — round to 2 decimal places.",
      ],
      solution: [
        "Smashed rate = {{16/50 = 32%}}; Control rate = {{6/50 = 12%}}.",
        "Relative risk ratio = {{32/12 = 16/6 = 2.67}} (to 2 d.p.).",
      ],
    },
    {
      id: "6-context-learning-cognition-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "neurobiology-memory-cognitive-load",
      question:
        "A researcher tests Sweller's split-attention hypothesis. Under an integrated dual-coded layout, 25 students average **18.0 / 20** (SD = 2.0) in **10 minutes**. Under a separated text-plus-diagram layout, 25 students average **14.4 / 20** in **15 minutes**. Compute the percentage **increase in test score** achieved by the integrated layout relative to the separated baseline (enter a whole number).",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "You divided 3.6 by 18.0 (the integrated score) instead of the separated baseline (14.4)!",
        },
      ],
      hints: [
        "Difference in mean score = 18.0 − 14.4 = 3.6 points.",
        "Divide 3.6 by the separated baseline (14.4) and multiply by 100.",
      ],
      solution: [
        "Score improvement = {{18.0 - 14.4 = 3.6}} points.",
        "Relative percentage increase = {{3.6/14.4 * 100 = 25%}} (achieved in one-third less study time!).",
      ],
    },
    {
      id: "6-context-learning-cognition-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "problem-solving-environmental-cognition",
      question:
        "[HL] In a Stroop executive-control replication comparing a quiet classroom (Mean interference = **140 ms**) against a chronic-noise classroom (Mean interference = **182 ms**), the pooled standard deviation is **70 ms**. Calculate **Cohen's d** effect size (positive magnitude, to **2 decimal places**).",
      answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60" },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30% is the percentage increase in interference; Cohen's d divides the mean difference (42 ms) by the pooled SD (70 ms).",
        },
      ],
      hints: [
        "Use Cohen's d = |M₁ − M₂| ÷ SD_pooled.",
        "Compute (182 − 140) ÷ 70 = 42 ÷ 70.",
      ],
      solution: [
        "Mean difference = {{182 - 140 = 42}} ms.",
        "Cohen's {{d = 42 / 70 = 0.60}} — a medium-to-large practical effect of environmental noise on inhibitory control.",
      ],
    },
    {
      id: "6-context-learning-cognition-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "conditioning-social-learning",
      question:
        "In a Skinner-box extinction trial, a pigeon previously trained on **Continuous Reinforcement (CRF)** stops pecking after **18** unrewarded responses, whereas a pigeon trained on **Variable Ratio (VR-5)** continues for **117** unrewarded responses before extinction. How many **times greater** is the VR pigeon's extinction persistence than the CRF pigeon's? (Give an exact decimal.)",
      answer: { type: "number", value: 6.5, tolerance: 0.01, display: "6.5" },
      hints: [
        "Divide the VR extinction count (117) by the CRF extinction count (18).",
        "Notice both 117 and 18 are divisible by 9: 13 ÷ 2.",
      ],
      solution: [
        "Persistence ratio = {{117 / 18 = 13 / 2 = 6.5}} times greater — illustrating the **partial reinforcement extinction effect (PREE)**.",
      ],
    },
    {
      id: "6-context-learning-cognition-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "neurobiology-memory-cognitive-load",
      marks: 6,
      question:
        "Evaluate the extent to which **biological research on Long-Term Potentiation (LTP)** can explain complex human classroom learning, referencing **Causality** and **Responsibility**.",
      hints: [
        "Strength: experimental manipulation (high-frequency stimulation, NMDA receptor blockers like AP5 impairing spatial water-maze learning in rodents — Morris et al., 1986) establishes strong cellular Causality.",
        "Limits: rodent hippocampal slices vs human semantic schemas, cognitive load, metacognition, and cultural language scaffolding; 3Rs ethical Responsibility in invasive animal experiments.",
      ],
      modelAnswer:
        "Research on Long-Term Potentiation provides powerful causal insight into the cellular substrate of memory Change. Beyond Bliss & Lømo's (1973) discovery of persistent hippocampal potentiation, pharmacological blockade of NMDA receptors (e.g., AP5 in rodent spatial-learning mazes) selectively impairs new spatial retention, establishing strong experimental Causality between NMDA-driven synaptic strengthening and memory storage. Paired with human slow-wave sleep consolidation evidence (Diekelmann & Born, 2010), LTP anchors learning firmly in neurobiology.\n\nNevertheless, cellular LTP offers an incomplete account of complex human classroom learning. First, generalizing from anesthetized rodent slices or spatial mazes to abstract human schemas (such as IB essay evaluation or Chase & Simon's chess chunking) risks biological reductionism: LTP cannot by itself explain why extraneous slide clutter disrupts Sweller's working memory or why metacognitive fluency biases students toward rereading. Second, invasive electrophysiological animal research triggers FA2027 Responsibility scrutiny under the 3Rs (Replacement, Reduction, Refinement), demanding converging non-invasive human neuroimaging and behavioural testing.\n\nThus, LTP explains the indispensable neural foundation of memory storage, but must be integrated with cognitive and sociocultural mechanisms to explain real-world education.",
      markScheme: [
        {
          point: "Explains strong experimental Causality of LTP (Bliss & Lømo / NMDA receptor blockade impairing learning).",
          keywords: ["bliss", "nmda", "blockade", "experimental causality"],
        },
        {
          point: "Integrates human slow-wave sleep consolidation bridging biology to declarative retention.",
          keywords: ["slow-wave sleep", "diekelmann", "declarative"],
        },
        {
          point: "Critiques cross-species generalization from rodent slices/mazes to complex abstract human schemas.",
          keywords: ["rodent", "generalizing", "reductionism", "chase"],
        },
        {
          point: "Demonstrates cognitive phenomena LTP alone cannot explain (Sweller extraneous load / fluency bias).",
          keywords: ["sweller", "extraneous", "metacognitive"],
        },
        {
          point: "Evaluates invasive animal-research ethics via the 3Rs (Replacement, Reduction, Refinement).",
          keywords: ["3rs", "replacement", "refinement", "invasive"],
        },
        {
          point: "Synthesizes a balanced judgment integrating neural foundation with cognitive/sociocultural levels.",
          keywords: ["indispensable", "integrated", "real-world education"],
        },
      ],
      markbands: BANDS_6,
    },
    {
      id: "6-context-learning-cognition-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "problem-solving-environmental-cognition",
      marks: 9,
      question:
        "**[Paper 1 Section C — Core Concept ERQ]** Discuss how the Core Concept of **Causality** shapes our evaluation of research into **environmental and sociocultural influences on cognition**.",
      hints: [
        "Contrast true experimental manipulation (Steele & Aronson stereotype threat framing; Loftus & Palmer leading verbs) with quasi-experimental / correlational studies (SES–prefrontal brain volume; bilingual executive control).",
        "Identify specific third-variable confounds (SES, parental education, nutrition, immigration status, chronic cortisol stress) and bidirectional loops.",
        "Show how intervention/longitudinal RCTs (early enrichment, income support, pre-registered replications) strengthen causal inference and guide ethical **Responsibility**.",
      ],
      modelAnswer:
        "Because researchers rarely can — or ethically should — randomly assign humans to poverty, bilingual upbringing, or cultural environments, the Core Concept of Causality is central to separating genuine environmental mechanisms from confounded correlations.\n\nIn socioeconomic cognition research, correlational neuroimaging studies such as Farah et al. (2006) and Noble et al. (2015) report robust associations between lower household income and reduced prefrontal surface area and executive-function scores. Strictly speaking, cross-sectional correlations cannot establish direct Causality because poverty bundles dozens of interacting variables — chronic HPA-axis cortisol stress, iron/iodine micronutrient deficits, noise pollution, crowded housing, and schooling disparities — alongside potential reverse or bidirectional family pathways. However, converging quasi-experimental and randomized early-enrichment trials (such as the Abecedarian intervention and unconditional cash-transfer studies) demonstrate measurable cognitive Change when material stressors are alleviated, substantially strengthening causal confidence and highlighting public-policy Responsibility.\n\nConversely, the bilingual executive-advantage debate illustrates how weak causal control can mislead psychological consensus. Early quasi-experimental comparisons by Bialystok et al. (2004, 2009) linked lifelong bilingualism to faster inhibitory control, yet bilingual samples frequently differed from monolinguals in SES, immigration selection, and education. Once Paap & Greenberg (2013) scrutinized task impurity and Lehtonen et al.'s (2018) meta-analysis corrected for publication bias and confounds across 152 studies, the domain-general causal claim collapsed toward zero.\n\nWhere experimental random allocation *is* ethical — as in Steele & Aronson's (1995) and Schmader & Johns's (2003) stereotype-threat framing manipulations — researchers establish crisp internal Causality showing social threat depletes working memory in the lab, though at the cost of reduced real-world ecological validity.\n\nIn sum, evaluating environmental cognition through Causality demands combining randomized lab experiments, longitudinal interventions, and bias-corrected meta-analyses rather than jumping from correlation to simplistic policy slogans.",
      markScheme: [
        {
          point: "Establishes why random assignment is rarely ethical/feasible for major environmental contexts (Causality thesis).",
          keywords: ["randomly assign", "confounded correlations", "genuine environmental"],
        },
        {
          point: "Analyses SES–cognition neuroimaging correlations (Farah / Noble) and identifies bundled third-variable mediators.",
          keywords: ["farah", "noble", "cortisol", "micronutrient"],
        },
        {
          point: "Strengthens causal evaluation using longitudinal/randomized intervention evidence (e.g., Abecedarian / cash transfers) & Responsibility.",
          keywords: ["abecedarian", "cash-transfer", "policy responsibility", "measurable cognitive change"],
        },
        {
          point: "Contrasts Bialystok's bilingual claims with quasi-experimental SES/immigration confounds.",
          keywords: ["bialystok", "immigration", "quasi-experimental"],
        },
        {
          point: "Integrates Paap & Greenberg (task impurity) and Lehtonen et al. (2018) publication bias collapse.",
          keywords: ["paap", "lehtonen", "publication bias", "toward zero"],
        },
        {
          point: "Contrasts ethical experimental Causality in stereotype threat (Steele & Aronson; Schmader & Johns WM depletion).",
          keywords: ["steele", "schmader", "working memory", "internal causality"],
        },
        {
          point: "Notes the internal-validity vs ecological-validity trade-off of lab experimental manipulations.",
          keywords: ["ecological validity", "lab"],
        },
        {
          point: "Demonstrates sustained biological, cognitive, and sociocultural triangulation across the essay.",
          keywords: ["prefrontal", "hpa-axis", "sociocultural", "executive"],
        },
        {
          point: "Reaches a nuanced synthesis prioritizing methodological convergence across designs.",
          keywords: ["in sum", "meta-analyses", "convergence"],
        },
      ],
      markbands: BANDS_9,
    },
    {
      id: "6-context-learning-cognition-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "neurobiology-memory-cognitive-load",
      marks: 9,
      question:
        "**[HL Synthesis ERQ — Technology & Learning]** Discuss how digital technologies reshape **working-memory load, retrieval encoding, and behavioural conditioning** in adolescent learners, referring to **Change** and **Responsibility**.",
      hints: [
        "Synthesize HL Technology studies (Ward et al. 2017 'brain drain', Sparrow et al. 2011 'Google effect', Ophir et al. media multitasking) with Context 4 core models (Sweller CLT, Roediger & Karpicke retrieval practice, LTP, Skinner VR schedules).",
        "Weigh negatives (extraneous load, cognitive offloading bypassing LTP, VR compulsive gamification) against genuine positives (spaced-repetition flashcard engines, interactive dual-coded simulations).",
        "Conclude with balanced ethical Responsibility for educators, developers, and learners.",
      ],
      modelAnswer:
        "Digital technologies drive profound Change in adolescent learning — neither uniformly destructive nor automatically beneficial — depending on whether tools amplify extraneous load and passive offloading or scaffold evidence-based retrieval and dual coding.\n\nOn the risk side, ubiquitous smartphones reshape working-memory dynamics. Ward et al. (2017) demonstrated the 'brain drain' effect: merely placing a silent smartphone on a desk reduces available working-memory capacity because suppressing the impulse to check imposes continuous extraneous cognitive load (Sweller, 1988). Similarly, Ophir et al. (2009) showed heavy media multitaskers struggle with task-switching interference, undermining prefrontal inhibitory control. At the encoding level, Sparrow et al.'s (2011) 'Google effect' revealed cognitive offloading into digital transactive memory: expecting instant online retrieval reduces effortful factual recall, bypassing the NMDA-dependent hippocampal LTP and schema consolidation normally triggered by Roediger & Karpicke's (2006) testing effect. Compounding this, social-media feeds and gamified apps exploit Skinnerian variable-ratio (VR) schedules that maximize compulsive checking while risking Lepper's overjustification effect on intrinsic autonomy.\n\nYet digital tools can equally accelerate durable cognitive Change when grounded in learning science. Spaced-repetition flashcard algorithms (automating Cepeda et al.'s spacing intervals) and uncluttered dual-coded simulations actively lower extraneous split-attention while prompting effortful retrieval practice — delivering measurable classroom gains when paired with strong meta-analytic effect sizes rather than hype.\n\nFrom an FA2027 Responsibility perspective, schools and developers should replace manipulative VR notifications with distraction-free study environments and autonomy-supportive spaced-retrieval platforms, empowering adolescents to manage digital cognitive offloading deliberately.",
      markScheme: [
        {
          point: "Frames balanced thesis connecting digital Change to both cognitive risks and evidence-based benefits.",
          keywords: ["neither uniformly", "offloading", "evidence-based"],
        },
        {
          point: "Applies Ward et al. (2017) smartphone salience to Sweller's extraneous cognitive load.",
          keywords: ["ward", "brain drain", "extraneous cognitive load"],
        },
        {
          point: "Applies Ophir et al. (2009) media multitasking to executive switching / inhibitory control.",
          keywords: ["ophir", "multitaskers", "inhibitory control"],
        },
        {
          point: "Applies Sparrow et al. (2011) transactive memory / cognitive offloading bypassing retrieval-practice LTP.",
          keywords: ["sparrow", "transactive memory", "bypassing", "ltp"],
        },
        {
          point: "Integrates Skinnerian VR gamification and Lepper's overjustification risk to autonomy.",
          keywords: ["variable-ratio", "overjustification", "autonomy"],
        },
        {
          point: "Evaluates counterbalancing digital benefits (automated Cepeda spaced-repetition algorithms & dual-coded simulations).",
          keywords: ["spaced-repetition", "cepeda", "dual-coded simulations"],
        },
        {
          point: "Applies HL methodological rigor (distinguishing practical effect sizes from tech hype).",
          keywords: ["effect sizes", "measurable classroom"],
        },
        {
          point: "Applies FA2027 ethical Responsibility to school policies and app developers.",
          keywords: ["distraction-free", "developers", "manipulative"],
        },
        {
          point: "Sustains multi-approach synthesis (Biological LTP, Cognitive WM/retrieval, Sociocultural/Tech environment).",
          keywords: ["empowering", "adolescents", "deliberately"],
        },
      ],
      markbands: BANDS_9,
    },
    {
      id: "6-context-learning-cognition-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Examine",
      guideRef: "eyewitness-memory-reliability",
      marks: 6,
      question:
        "**[Paper 1 Section B — Unseen Study Critique]** A forensic psychology lab recruits 60 psychology undergraduates to watch a 90-second colour film of a bicycle theft. Half are interviewed immediately using the Cognitive Interview; half receive standard closed questions. One day later, the Cognitive Interview group recalls a mean of **34.2 correct details** (and **4.8 minor errors**) vs **24.0 correct details** (and **2.6 minor errors**) in the standard group. Examine these findings using **Measurement** and **Responsibility**.",
      hints: [
        "Quantify both sides of the data: +10.2 correct details (+42.5% relative gain, matching Köhnken et al., 1999!) alongside +2.2 minor errors.",
        "Evaluate Measurement: strong internal validity (random split, standardized 90-second video) vs low ecological validity (undergraduates, low emotional stress, 24-hour retention vs real months-long legal delays; contrast Yuille & Cutshall 1986).",
        "Evaluate Responsibility: weighing greater investigative leads against the slight uptick in minor inaccuracies when instructing courts/juries.",
      ],
      modelAnswer:
        "Quantitatively, the Cognitive Interview increased accurate recall by 10.2 details — a substantial 42.5% relative gain over standard questioning (closely mirroring Köhnken et al.'s 1999 meta-analysis of 35–41% gains) — while also producing 2.2 additional minor errors (nearly doubling error count from 2.6 to 4.8). This reveals a classic recall-precision trade-off: lowering a witness's reporting threshold ('report everything') unlocks valuable true fragments alongside occasional guesses.\n\nThrough a Measurement lens, the standardized 90-second video and equal group allocation provide high internal validity to isolate interview Causality. However, ecological and population validity remain restricted: 60 psychology undergraduates watching a calm screen clip experience neither weapon focus nor high-arousal cortisol stress (Deffenbacher et al., 2004), and a 24-hour delay ignores the months-long waits documented in Yuille & Cutshall's (1986) real-world shooting study.\n\nThrough a Responsibility lens, police adoption of the Cognitive Interview is justified because extra accurate leads aid investigations, provided officers avoid speculative 'change perspective' guessing and corroborate details independently so minor inaccuracies never trigger wrongful convictions.",
      markScheme: [
        {
          point: "Quantifies the accurate recall gain (+10.2 details / 42.5% relative gain) linked to Köhnken et al. (1999).",
          keywords: ["42.5%", "10.2", "kohnken", "köhnken"],
        },
        {
          point: "Quantifies the minor-error trade-off (+2.2 errors / lowering censoring threshold under 'report everything').",
          keywords: ["2.2", "trade-off", "report everything", "threshold"],
        },
        {
          point: "Evaluates Measurement strength: standardized clip and equal allocation yielding high internal validity.",
          keywords: ["internal validity", "standardized", "causality"],
        },
        {
          point: "Evaluates Measurement limits: undergraduate WEIRD sample, lack of real stress/weapon focus (Deffenbacher), and short 24-hour delay (Yuille & Cutshall).",
          keywords: ["deffenbacher", "yuille", "ecological", "24-hour"],
        },
        {
          point: "Evaluates forensic Responsibility: balancing extra investigative leads against corroboration to prevent wrongful convictions.",
          keywords: ["corroborate", "wrongful convictions", "leads"],
        },
        {
          point: "Includes practical safeguard (avoiding speculative guessing / careful 'change perspective' deployment).",
          keywords: ["speculative", "change perspective"],
        },
      ],
      markbands: BANDS_6,
    },
  ],
};
