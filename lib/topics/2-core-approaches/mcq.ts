import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — BIOLOGICAL & COGNITIVE FOUNDATIONS
  // answerIndex sequence: [2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 3, 1, 0, 2, 1] -> [4,4,4,3]
  // ===========================================================================
  {
    id: "2-core-approaches-m1",
    title: "MCQ Paper 1 — Biological & Cognitive Foundations",
    level: "SL",
    questions: [
      {
        id: "2-core-approaches-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "biological-approach",
        strategy: "Match drug class to synaptic receptor action",
        question:
          "In **Antonova et al. (2011)**, participants given **scopolamine** showed lower hippocampal activation and worse spatial navigation on a virtual-reality Arena task. How does scopolamine act at the synapse?",
        options: [
          "It blocks serotonin reuptake transporters to prolong synaptic firing",
          "It mimics dopamine molecules to stimulate postsynaptic reward receptors",
          "It blocks acetylcholine receptors to prevent native signalling",
          "It destroys adrenaline vesicles inside the presynaptic axon terminal",
        ],
        answerIndex: 2,
        explanation:
          "Scopolamine is a competitive muscarinic **acetylcholine (ACh) antagonist**: it binds to postsynaptic ACh receptors without activating them, blocking endogenous ACh and impairing hippocampal spatial memory encoding. Reuptake blockade describes SSRIs (functional serotonin agonists), not scopolamine.",
        hints: [
          "Recall whether scopolamine *enhanced* or *impaired* spatial memory in the Arena task.",
          "An antagonist blocks postsynaptic receptors so the native neurotransmitter (acetylcholine) cannot bind.",
        ],
      },
      {
        id: "2-core-approaches-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "biological-approach",
        strategy: "Apply Core Concept: Causality to neuroimaging designs",
        question:
          "Why did **Maguire et al. (2000)** alone provide incomplete evidence for the Core Concept of **Causality** regarding posterior hippocampal enlargement in London taxi drivers?",
        options: [
          "Its cross-sectional MRI comparison could not rule out pre-existing hippocampal differences",
          "Its longitudinal fMRI design exposed trainees to repeated radiation across four years",
          "Its double-blind placebo procedure masked whether participants passed the licensing test",
          "Its sample relied exclusively on post-mortem autopsy measurements after retirement",
        ],
        answerIndex: 0,
        explanation:
          "Maguire et al. (2000) used a quasi-experimental cross-sectional MRI design comparing already-licensed drivers with controls; although volume correlated with years driven, only the later longitudinal study (Woollett & Maguire, 2011) proved training *caused* structural growth rather than selection bias. Note also that MRI uses magnetic fields, not ionizing radiation.",
        hints: [
          "Were the taxi drivers scanned *before* they started training in the 2000 study?",
          "Consider reverse causality: could people born with a larger posterior hippocampus simply pass 'The Knowledge' more easily?",
        ],
      },
      {
        id: "2-core-approaches-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "biological-approach",
        strategy: "Reuptake inhibition increases cleft neurotransmitter availability",
        question:
          "Why is a selective serotonin reuptake inhibitor (**SSRI**) classified as a functional **agonist** rather than an antagonist?",
        options: [
          "It permanently binds to postsynaptic receptors and halts ion channel opening",
          "It converts circulating cortisol into serotonin inside the adrenal cortex",
          "It shrinks the synaptic cleft so action potentials leap electrically across",
          "It blocks presynaptic reuptake pumps so more serotonin activates receptors",
        ],
        answerIndex: 3,
        explanation:
          "Although an SSRI physically blocks the presynaptic reuptake transporter, its *functional effect* on postsynaptic signalling is to leave more serotonin in the synaptic cleft for longer, increasing receptor activation — making it a functional agonist. An antagonist reduces postsynaptic signalling.",
        hints: [
          "Focus on the *net outcome* at the postsynaptic membrane, not the word 'inhibitor'.",
          "If fewer serotonin molecules are pumped back into the presynaptic neuron, does postsynaptic stimulation rise or fall?",
        ],
      },
      {
        id: "2-core-approaches-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "biological-approach",
        strategy: "Apply Falconer's heritability formula h² = 2(r_MZ − r_DZ)",
        question:
          "In a twin study of a personality trait, 64 out of 100 monozygotic (MZ) twin pairs are concordant, while 38 out of 100 dizygotic (DZ) twin pairs are concordant. Using Falconer's estimate {{h^2 = 2(r_{MZ} - r_{DZ})}}, what is the estimated heritability?",
        options: [
          "26% of population variance",
          "52% of population variance",
          "64% of population variance",
          "76% of population variance",
        ],
        answerIndex: 1,
        explanation:
          "Here {{r_{MZ} = 0.64}} and {{r_{DZ} = 0.38}}. Subtracting gives {{0.64 - 0.38 = 0.26}}, and doubling gives {{h^2 = 2(0.26) = 0.52}} (52% of population variance). Stopping at 26% forgets the factor of 2, which accounts for DZ twins sharing half as much segregating DNA as MZ twins.",
        hints: [
          "First find the difference between MZ concordance (0.64) and DZ concordance (0.38).",
          "Multiply that difference by 2 because MZ twins share ~100% DNA while DZ twins share ~50%.",
        ],
      },
      {
        id: "2-core-approaches-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "biological-approach",
        strategy: "Link Caspi et al. (2003) to Gene × Environment interaction",
        question:
          "What core conclusion follows from **Caspi et al.'s (2003)** longitudinal finding that carriers of the short **5-HTT** serotonin transporter allele developed higher rates of depression mainly after experiencing multiple severe life stressors?",
        options: [
          "Genetic predispositions interact dynamically with environmental stress rather than determining outcomes alone",
          "Environmental stressors trigger depression exclusively in individuals carrying two long 5-HTT alleles",
          "Single-gene mutations directly cause major depressive disorder regardless of childhood or adult adversity",
          "Serotonin levels in the brain remain completely unaffected by stressful life events across adulthood",
        ],
        answerIndex: 0,
        explanation:
          "Caspi et al. (2003) demonstrated a **Gene × Environment (G×E) interaction** (diathesis–stress): having short 5-HTT alleles alone did not guarantee depression without severe stressors, refuting crude genetic determinism. Long-allele carriers showed lower vulnerability even under stress.",
        hints: [
          "Did short-allele carriers with *zero* severe life stressors show unusually high depression rates?",
          "Think of the contrast between genetic *determinism* and genetic *predisposition* interacting with environment.",
        ],
      },
      {
        id: "2-core-approaches-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "biological-approach",
        strategy: "Compare hormones and their empirical studies",
        question:
          "In **Newcomer et al. (1999)**, healthy adults administered high-dose synthetic **cortisol** for four days performed significantly worse on paragraph recall than placebo controls. Which mechanism best explains this finding?",
        options: [
          "Cortisol permanently severs synaptic connections in the primary visual cortex",
          "Cortisol boosts prefrontal working memory capacity beyond normal human limits",
          "Elevated cortisol binds to hippocampal receptors and disrupts declarative retrieval",
          "Cortisol converts short-term acoustic traces directly into unconscious motor habits",
        ],
        answerIndex: 2,
        explanation:
          "The hippocampus has a high density of glucocorticoid (cortisol) receptors; prolonged high cortisol impairs hippocampal consolidation and retrieval of declarative/verbal memory (Newcomer et al., 1999). The effect was reversible after cortisol returned to baseline, not permanent visual damage.",
        hints: [
          "Paragraph recall is a *declarative/explicit* memory task — which brain structure is central to declarative memory?",
          "Recall how chronic stress hormones affect hippocampal functioning.",
        ],
      },
      {
        id: "2-core-approaches-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cognitive-memory-schemas",
        strategy: "Link serial position delay to MSM separate stores",
        question:
          "In **Glanzer & Cunitz (1966)**, inserting a 30-second backwards-counting task immediately after reading a 15-word list eliminated the **recency effect** while leaving the **primacy effect** intact. How does this support the Multi-Store Model?",
        options: [
          "It shows that words near the beginning of a list remain stored permanently in the sensory register",
          "It shows that late words rely on limited-duration STM while early words have transferred to LTM",
          "It shows that acoustic rehearsal prevents any words from ever entering semantic long-term storage",
          "It shows that STM and LTM share an identical storage buffer with unlimited duration for middle items",
        ],
        answerIndex: 1,
        explanation:
          "A 30-second counting distractor prevents maintenance rehearsal and clears **STM** (~18–30 s duration), wiping out recall of the final words (recency). Earlier words had already received enough rehearsal to transfer into **LTM** (primacy), demonstrating two functionally distinct stores.",
        hints: [
          "Which store holds the *last* few words immediately after hearing a list, and how long does that store last without rehearsal?",
          "Why did the *first* few words survive the 30-second counting task?",
        ],
      },
      {
        id: "2-core-approaches-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-memory-schemas",
        strategy: "Match tasks to Working Memory slave subsystems",
        question:
          "A student mentally visualizes the route from her school gate to the MRT station while silently counting how many left turns she will make. Which two Working Memory components are primarily engaged in navigating that mental map and directing attention?",
        options: [
          "Phonological store and sensory register",
          "Articulatory loop and iconic memory",
          "Procedural memory and episodic LTM",
          "Visuospatial sketchpad and central executive",
        ],
        answerIndex: 3,
        explanation:
          "Generating and scanning a mental spatial route relies on the **visuospatial sketchpad** (specifically the inner scribe for spatial layout), while focusing attention and monitoring turn counts is coordinated by the **central executive**. The phonological loop handles speech/verbal streams.",
        hints: [
          "Which slave system acts as the 'inner eye' for spatial maps and visual imagery?",
          "Which component allocates attention and coordinates counting decisions?",
        ],
      },
      {
        id: "2-core-approaches-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "cognitive-memory-schemas",
        strategy: "Interpret neuropsychological dissociation in K.F.",
        question:
          "Patient **K.F.** (Shallice & Warrington, 1970) exhibited severely impaired verbal/auditory short-term digit span following brain damage, yet retained intact visual short-term memory. Why was this case a decisive challenge to the **Multi-Store Model**?",
        options: [
          "MSM predicted that all visual stimuli bypass short-term memory and enter LTM unconsciously",
          "MSM predicted that verbal rehearsal requires an intact hippocampus rather than cortical circuits",
          "MSM treated STM as a single unitary store that should fail equally across auditory and visual inputs",
          "MSM claimed that sensory memory lasts over thirty seconds for spoken digits but not written letters",
        ],
        answerIndex: 2,
        explanation:
          "Atkinson & Shiffrin's MSM conceptualized STM as one unitary box; therefore damage to STM should impair *all* short-term retention equally. K.F.'s selective deficit in verbal STM alongside intact visual STM supported Baddeley & Hitch's separate **phonological loop** and **visuospatial sketchpad**.",
        hints: [
          "How many short-term memory boxes exist in Atkinson & Shiffrin's Multi-Store Model?",
          "If STM were a single unitary store, could one sensory modality fail while another stayed intact?",
        ],
      },
      {
        id: "2-core-approaches-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-memory-schemas",
        strategy: "Identify Bartlett's schema distortion mechanisms",
        question:
          "When British university students in **Bartlett's (1932)** *War of the Ghosts* study repeatedly retold the Native American folk tale, 'canoes' became 'boats' and 'hunting seals' became 'going fishing'. Which reconstructive process does this illustrate?",
        options: [
          "Assimilation into familiar cultural schemas during retrieval",
          "Acoustic decay within the phonological store over 18 seconds",
          "Anterograde amnesia caused by bilateral hippocampal trauma",
          "Proactive interference from memorized lists of nonsense syllables",
        ],
        answerIndex: 0,
        explanation:
          "Replacing culturally unfamiliar elements with familiar British equivalents illustrates **assimilation** (and cultural rationalization) within Schema Theory: prior cultural schemas actively reshape memory into coherent, culturally expected forms.",
        hints: [
          "Notice that the unfamiliar Native American terms were swapped for familiar British cultural terms.",
          "Which schema-driven distortion alters unfamiliar details to fit existing knowledge frameworks?",
        ],
      },
      {
        id: "2-core-approaches-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "cognitive-memory-schemas",
        strategy: "Distinguish response bias vs reconstructive memory change in Loftus & Palmer",
        question:
          "In **Loftus & Palmer (1974)**, Experiment 1 showed higher speed estimates for 'smashed' (40.5 mph) than 'hit' (34.0 mph), and Experiment 2 showed 32% of the 'smashed' group falsely recalled broken glass a week later versus 14% for 'hit'. Why was Experiment 2 crucial?",
        options: [
          "It demonstrated that participants could calculate exact car velocities using physics equations",
          "It confirmed that participants forgot the film completely unless given a visual photograph",
          "It proved that real-world witnesses are always more accurate than university lab participants",
          "It showed the leading verb altered the memory representation rather than just nudging a guess",
        ],
        answerIndex: 3,
        explanation:
          "Experiment 1 alone could have reflected simple **response bias** (guessing a higher number to match a strong verb while keeping the actual memory intact). Falsely remembering *non-existent broken glass* one week later in Experiment 2 supported the **reconstructive memory** hypothesis — post-event schema information merged with the original trace.",
        hints: [
          "Could Experiment 1's speed difference simply be a polite guess without changing what the participant actually remembered seeing?",
          "What does falsely remembering broken glass one week later show about the stored memory itself?",
        ],
      },
      {
        id: "2-core-approaches-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cognitive-memory-schemas",
        strategy: "Interpret Brewer & Treyens (1981) office schema results",
        question:
          "In **Brewer & Treyens (1981)**, participants waited 35 seconds in a staged office before recalling its items. Nearly a third falsely recalled seeing books that were never there, yet most accurately recalled an unexpected human skull. What does this reveal about **Schema Theory**?",
        options: [
          "Schemas strictly block any memory of objects that contradict everyday room expectations",
          "Schemas drive false intrusion of expected items while highly salient anomalies still draw encoding",
          "Participants only remember objects they physically touch during the first ten seconds",
          "Office schemas operate purely inside the phonological loop rather than long-term memory",
        ],
        answerIndex: 1,
        explanation:
          "Consistent with Schema Theory, participants experienced schema-consistent false intrusions (books) and overlooked mildly inconsistent objects (picnic basket), yet bizarrely distinctive anomalies (the skull) triggered deeper attention and encoding — a nuance that also makes Schema Theory tricky to falsify.",
        hints: [
          "Think about *both* findings together: falsely recalling absent books AND remembering the unusual skull.",
          "Does Schema Theory forbid remembering highly unusual, attention-grabbing items?",
        ],
      },
      {
        id: "2-core-approaches-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "biological-approach",
        strategy: "HL Bridge: Neuroplasticity reversibility & Change in Draganski et al. (2004)",
        question:
          "In **Draganski et al. (2004)**, adults who learned to juggle for three months showed grey-matter expansion in visual-motion area V5/hMT, which partially shrank back after three months without practice. What does this longitudinal reversal best demonstrate for the Core Concept of **Change**?",
        options: [
          "Adult structural neuroplasticity is dynamically maintained by ongoing practice and reverses via pruning",
          "Motor skill acquisition triggers irreversible cortical expansion once a task is mastered in adulthood",
          "Structural MRI scans cannot detect grey-matter differences in healthy volunteers over short intervals",
          "Genetic differences between jugglers and non-jugglers explain why V5 volume stayed permanently elevated",
        ],
        answerIndex: 0,
        explanation:
          "Because participants were randomly assigned to juggling vs control groups and scanned longitudinally at three time points (baseline, post-training, post-rest), Draganski et al. (2004) demonstrated causal, bidirectional structural **Change**: training expanded V5 grey matter, and disuse triggered partial synaptic pruning back toward baseline.",
        hints: [
          "Notice the third MRI scan taken 3 months *after* participants stopped juggling.",
          "What does the drop in grey-matter volume during non-practice imply about the permanence of experience-driven plasticity?",
        ],
      },
      {
        id: "2-core-approaches-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "cognitive-memory-schemas",
        strategy: "HL Bridge: Technology cognitive offloading & Working Memory",
        question:
          "A study finds that university students who expect lecture notes to be saved in a cloud folder recall significantly fewer raw facts than students expecting notes to be erased, yet remember *which folder* stores each fact. Which cognitive synthesis best accounts for this pattern?",
        options: [
          "Cloud storage causes rapid anterograde amnesia by blocking acetylcholine synthesis",
          "Digital folders double the capacity of the phonological loop from seven to fourteen items",
          "Learners adaptively offload semantic details to external memory while encoding retrieval cues",
          "Working memory switches entirely from visuospatial processing to passive sensory registration",
        ],
        answerIndex: 2,
        explanation:
          "This reflects **cognitive offloading / transactive memory** (Sparrow et al., 2011 'Google effect'), integrating Core Cognitive memory models with the HL **Technology** extension: when external storage is trusted, cognitive resources shift from encoding raw semantic content toward encoding *where* to retrieve it.",
        hints: [
          "Notice students did not lose memory ability altogether — they remembered *where* the information was stored.",
          "Connect this adaptive allocation of encoding effort to transactive memory / cognitive offloading.",
        ],
      },
      {
        id: "2-core-approaches-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "biological-approach",
        strategy: "HL Bridge: Cultural neuroscience (Perspective integration)",
        question:
          "In **Zhu et al. (2007)**, fMRI scans showed that Chinese participants activated overlapping medial prefrontal cortex (mPFC) regions when judging traits of both *self* and *mother*, whereas Western participants activated mPFC mainly for *self*. How does this exemplify the Core Concept of **Perspective**?",
        options: [
          "It proves cultural differences are purely inherited DNA variants unrelated to socialization",
          "It illustrates how sociocultural self-construal physically shapes neural processing patterns",
          "It shows fMRI cannot detect any prefrontal cortex activation during social judgements",
          "It confirms strict brain localization where one isolated neuron represents family relationships",
        ],
        answerIndex: 1,
        explanation:
          "Zhu et al. (2007) bridges the **Sociocultural** concept of independent vs interdependent self-construal (Markus & Kitayama) with **Biological** neuroimaging: prolonged cultural immersion shapes how the brain represents self and close kin, demonstrating biopsychosocial **Perspective** rather than biological determinism.",
        hints: [
          "Compare interdependent self-construal (self linked to family) with independent self-construal (self distinct from others).",
          "Does this finding pit biology against culture, or show how they interact?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — THINKING, BIASES & SOCIOCULTURAL CORE
  // answerIndex sequence: [1, 3, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 3, 0, 1] -> [4,4,3,4]
  // ===========================================================================
  {
    id: "2-core-approaches-m2",
    title: "MCQ Paper 2 — Thinking, Biases & Sociocultural Core",
    level: "SL",
    questions: [
      {
        id: "2-core-approaches-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "cognitive-thinking-biases",
        strategy: "Contrast System 1 and System 2 characteristics",
        question:
          "Which pairing accurately distinguishes **System 1** from **System 2** in Kahneman & Tversky's Dual-Process Model?",
        options: [
          "System 1 is slow and rule-governed, whereas System 2 is automatic and emotional",
          "System 1 is fast and heuristic-driven, whereas System 2 is slow and deliberative",
          "System 1 resides exclusively in the left lobe, whereas System 2 resides in the cerebellum",
          "System 1 operates only during sleep, whereas System 2 guides every reflex reaction",
        ],
        answerIndex: 1,
        explanation:
          "System 1 operates quickly, effortlessly, and automatically using heuristics, whereas System 2 is slow, conscious, effortful, and analytical. Crucially, neither system corresponds to a single isolated brain lobe.",
        hints: [
          "Think of the bat-and-ball problem: which system blurred out $0.10 instantly, and which checked the algebra?",
        ],
      },
      {
        id: "2-core-approaches-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-thinking-biases",
        strategy: "Recognize availability heuristic via ease of vivid recall",
        question:
          "After watching several dramatic news clips about shark encounters, a swimmer insists that ocean swimming is far deadlier than driving to the beach, despite traffic fatalities being thousands of times higher. Which heuristic best explains her judgement?",
        options: [
          "Representativeness heuristic driven by matching personality stereotypes",
          "Anchoring bias driven by adjusting away from a random starting digit",
          "Confirmation bias driven by falsifying contradictory statistical tables",
          "Availability heuristic driven by the ease of recalling vivid media images",
        ],
        answerIndex: 3,
        explanation:
          "The **availability heuristic** estimates risk or frequency by how rapidly and vividly examples come to mind. Sensational media coverage makes shark incidents mentally accessible, inflating perceived probability far above objective base rates.",
        hints: [
          "Ask *why* shark attacks feel more frequent: is she matching a stereotype, starting from a number, or recalling vivid examples easily?",
          "Ease of mental retrieval = availability.",
        ],
      },
      {
        id: "2-core-approaches-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cognitive-thinking-biases",
        strategy: "Diagnose conjunction fallacy in the Linda problem",
        question:
          "In **Tversky & Kahneman (1983)**, 85% of participants judged it more probable that Linda is *'a bank teller and is active in the feminist movement'* than simply *'a bank teller'*. Why is this judgement logically impossible?",
        options: [
          "The overlap of two events can never exceed the probability of either single event alone",
          "Every bank teller in the population must automatically belong to a political organization",
          "Base-rate statistics only apply when System 1 processes visual rather than written profiles",
          "Probability values must sum to 100% across any two unrelated personality descriptions",
        ],
        answerIndex: 0,
        explanation:
          "By the conjunction rule {{P(X ∩ Y) <= P(X)}}, every feminist bank teller is *also* a bank teller, so the subset can never be more probable than the broader set. Relying on the **representativeness heuristic** (how well Linda's sketch fits a feminist stereotype) caused participants to commit the **conjunction fallacy**.",
        hints: [
          "Draw a Venn diagram: is 'feminist bank tellers' *inside* 'all bank tellers'?",
          "Can a smaller subset inside a circle ever be larger than the whole circle?",
        ],
      },
      {
        id: "2-core-approaches-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-thinking-biases",
        strategy: "Apply Prospect Theory gain vs loss framing predictions",
        question:
          "A hospital explains two mathematically identical surgeries to patients. Group 1 is told *'90% of patients survive this procedure'* and Group 2 is told *'10% of patients die during this procedure'*. Based on **Tversky & Kahneman (1981)**, what outcome is predicted?",
        options: [
          "Both groups choose identically because expected survival probability is unchanged",
          "Group 2 accepts the surgery far more readily because mortality rates reduce anxiety",
          "Group 1 views the surgery more favourably because losses feel heavier than equivalent gains",
          "Neither group makes a choice because System 2 rejects percentages below 95%",
        ],
        answerIndex: 2,
        explanation:
          "Even though 90% survival and 10% mortality are mathematically identical, **framing** the statistic as a **loss** ('10% die') triggers **loss aversion** under Prospect Theory, making the procedure feel noticeably riskier than the **gain** frame ('90% survive').",
        hints: [
          "Compare '90% survive' (gain frame) vs '10% die' (loss frame).",
          "In Prospect Theory, does a 10% loss feel emotionally weaker or stronger than the equivalent gain framing?",
        ],
      },
      {
        id: "2-core-approaches-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "cognitive-thinking-biases",
        strategy: "Apply falsification logic to Wason's four-card task",
        question:
          "In **Wason's (1966) selection task**, four cards show **A**, **D**, **4**, and **7**. The rule is: *'If a card has a vowel on one side, it has an even number on the other.'* Which two cards MUST be turned over to test the rule rigorously without falling prey to confirmation bias?",
        options: [
          "Cards A and 4, because both match features mentioned directly in the rule",
          "Cards D and 4, because consonants cannot pair with even numbers under the rule",
          "Cards D and 7, because both lie outside the categories named in the statement",
          "Cards A and 7, because only a vowel with an odd number can falsify the rule",
        ],
        answerIndex: 3,
        explanation:
          "To **falsify** 'If P (vowel) → Q (even)', you must check **P (card A)** to verify it is not odd, and **not-Q (card 7)** to verify it does not hide a vowel on the back! Turning card **4** is a classic confirmation-bias trap because a consonant on the back of 4 does *not* violate the rule.",
        hints: [
          "Ask: what exact card combination would prove the rule FALSE?",
          "A vowel paired with an odd number breaks the rule — which two visible cards could produce that combination?",
        ],
      },
      {
        id: "2-core-approaches-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "cognitive-thinking-biases",
        strategy: "Contrast Brown & Kulik (1977) with Talarico & Rubin (2003)",
        question:
          "What did **Talarico & Rubin's (2003)** longitudinal study of 9/11 memories reveal that directly challenged **Brown & Kulik's (1977)** 'Now Print!' flashbulb memory hypothesis?",
        options: [
          "Participants forgot where they were on 9/11 within twenty-four hours of the attacks",
          "Factual consistency decayed equally for 9/11 and ordinary events while confidence stayed high",
          "Emotional shock completely prevented participants from recalling ordinary everyday events",
          "Flashbulb memories became significantly more factually accurate after thirty-two weeks",
        ],
        answerIndex: 1,
        explanation:
          "By collecting baseline accounts on 12 September 2001 and retesting up to 32 weeks later, Talarico & Rubin (2003) proved that objective factual consistency declined at the *same rate* for 9/11 and ordinary memories — showing flashbulb memories are special in **metamemory confidence and vividness**, not photographic accuracy.",
        hints: [
          "Separate *factual accuracy/consistency* from *subjective confidence*.",
          "Did 9/11 memories resist decay better than everyday memories over 32 weeks?",
        ],
      },
      {
        id: "2-core-approaches-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "sociocultural-approach",
        strategy: "Trace Tajfel & Turner's SIT mechanism in minimal groups",
        question:
          "In **Tajfel et al.'s (1971) Minimal Group Paradigm**, British schoolboys allocated points to anonymous peers sorted solely by trivial painting preferences (Klee vs Kandinsky). Which allocation pattern best demonstrated **Social Identity Theory**?",
        options: [
          "Sacrificing maximum absolute profit for their own group to maximize the advantage over the out-group",
          "Splitting points evenly whenever the out-group received more total money than the in-group",
          "Awarding all points exclusively to the out-group to avoid looking selfish to the experimenter",
          "Refusing to allocate points until they met their teammates face-to-face for ten minutes",
        ],
        answerIndex: 0,
        explanation:
          "Boys consistently preferred **maximum difference (MD)** in favour of their in-group over maximum joint profit or even maximum absolute in-group profit — demonstrating that **social comparison** seeks **positive distinctiveness** relative to the out-group, even without realistic competition.",
        hints: [
          "Did the boys care most about getting the *highest possible absolute score*, or beating the other group by the *widest margin*?",
        ],
      },
      {
        id: "2-core-approaches-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "sociocultural-approach",
        strategy: "Distinguish learning (acquisition) from performance in Bandura (1965)",
        question:
          "In **Bandura's (1965)** follow-up Bobo doll experiment, children who saw an aggressive model **punished** initially showed very little imitation, yet immediately performed the aggressive acts when offered juice and stickers. What principle of **Social Cognitive Theory** did this establish?",
        options: [
          "Punishing a model permanently erases the behavioural trace from children's long-term memory",
          "Observational learning cannot occur unless the child receives immediate physical reinforcement",
          "Mental acquisition of a modelled behaviour can occur independently of motivation to perform it",
          "Children only imitate same-sex models when no adults remain inside the testing room",
        ],
        answerIndex: 2,
        explanation:
          "Bandura (1965) cleanly separated **acquisition (learning)** from **performance**: children had attended to and retained the aggressive behaviours regardless of consequence, and **vicarious punishment** suppressed only their *motivation* to enact them until direct incentives removed that inhibition.",
        hints: [
          "If they could reproduce the aggression immediately once rewarded, had they learned it earlier?",
          "Link this to the fourth mediational stage in ARRM: Motivation.",
        ],
      },
      {
        id: "2-core-approaches-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "sociocultural-approach",
        strategy: "Contrast Normative vs Informational Social Influence",
        question:
          "A newly enrolled exchange student arrives at a formal school assembly in an unfamiliar country. Unsure when to stand or applaud, she watches the senior students closely and copies their exact timing because she believes they know the proper protocol. Which influence is primarily operating?",
        options: [
          "Normative social influence driven solely by fear of public humiliation",
          "Informational social influence driven by ambiguity and desire to be correct",
          "Agentic-state obedience driven by direct orders from an authority figure",
          "Out-group homogeneity driven by minimal categorization into house teams",
        ],
        answerIndex: 1,
        explanation:
          "When a situation is **ambiguous** and an individual looks to others as a credible source of accurate knowledge to behave correctly, **informational social influence (ISI)** is operating (often producing private internalization). By contrast, Asch's unambiguous line task mainly triggered normative influence.",
        hints: [
          "Is the correct behaviour obvious (like Asch's lines) or genuinely ambiguous to the newcomer?",
          "Conforming to be *right* in uncertainty = informational; conforming to be *liked* despite knowing the group is wrong = normative.",
        ],
      },
      {
        id: "2-core-approaches-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "sociocultural-approach",
        strategy: "Map heritage maintenance × host contact on Berry's 2×2 matrix",
        question:
          "After immigrating to Canada, Tariq intentionally stops speaking his heritage language and avoids traditional community festivals so he can blend completely into mainstream Canadian workplaces and social circles. According to **Berry (1997)**, which acculturation strategy is this?",
        options: [
          "Integration, because he actively maintains both cultural identities equally",
          "Separation, because he withdraws from mainstream society to preserve traditions",
          "Marginalization, because he rejects both heritage traditions and host participation",
          "Assimilation, because he relinquishes heritage culture while engaging host society",
        ],
        answerIndex: 3,
        explanation:
          "In Berry's 2×2 framework, **Heritage Maintenance = No** paired with **Host Society Participation = Yes** defines **Assimilation**. Integration is Yes/Yes, Separation is Yes/No, and Marginalization is No/No.",
        hints: [
          "Check Berry's two questions: Does Tariq maintain his heritage culture? (No). Does he seek participation in the host society? (Yes).",
        ],
      },
      {
        id: "2-core-approaches-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "sociocultural-approach",
        strategy: "Interpret Bond & Smith (1996) cross-cultural conformity meta-analysis",
        question:
          "What major pattern did **Bond & Smith's (1996)** meta-analysis of 133 Asch replications across 17 countries uncover regarding cultural norms and **Change**?",
        options: [
          "Conformity was significantly higher in collectivist cultures and declined in the US over time",
          "Conformity stayed fixed at exactly 37% across all seventeen nations and five decades",
          "Individualist cultures showed twice the conformity rates of collectivist agricultural societies",
          "Cultural values had zero measurable effect once group size exceeded four confederates",
        ],
        answerIndex: 0,
        explanation:
          "Bond & Smith (1996) found higher Asch conformity in **collectivist** societies (where group harmony and smooth social relations are prized rather than viewed as weakness) and a historical decline in US conformity since the 1950s — demonstrating cultural **Perspective** and historical **Change**.",
        hints: [
          "How do collectivist societies view maintaining group consensus compared to individualist societies?",
          "Recall whether US conformity stayed constant from the 1950s to the 1990s.",
        ],
      },
      {
        id: "2-core-approaches-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "sociocultural-approach",
        strategy: "Identify ethical Responsibility & situational power in Milgram (1963)",
        question:
          "In **Milgram's (1963)** obedience study, 65% of participants administered the maximum 450 V shock, yet obedience fell to **10%** when two confederate peers refused to continue. What does this variation best illustrate alongside the study's ethical legacy?",
        options: [
          "Dispositional cruelty drove obedience regardless of social setting, making ethics reviews unnecessary",
          "Participants knew the shocks were fake, so no stress or psychological harm occurred during testing",
          "Situational social support breaks the agentic state, while severe distress spurred ethical safeguards",
          "Remote telephone instructions increased obedience above 85% by removing personal eye contact",
        ],
        answerIndex: 2,
        explanation:
          "Having disobedient peers provided social support that broke the **agentic state**, slashing obedience from 65% to 10% (proving situational power). Meanwhile, participants' sweating, trembling, and hindered right to withdraw catalyzed modern ethical **Responsibility** rules on deception and protection from psychological harm.",
        hints: [
          "Did disobedience by peers raise or lower obedience?",
          "Why is Milgram (1963) cited as a turning point for modern psychology ethics codes?",
        ],
      },
      {
        id: "2-core-approaches-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "sociocultural-approach",
        strategy: "HL Bridge: Ecological fallacy in cultural dimension research",
        question:
          "A researcher administers a survey in Japan and Australia, finds Japan scores higher on collectivism, and concludes that a randomly chosen Japanese student will definitely conform more than any Australian student. Which methodological error has the researcher committed?",
        options: [
          "Demand characteristic distortion caused by double-blind experimental allocation",
          "Conjunction fallacy caused by multiplying two independent national probabilities",
          "Proactive interference caused by recalling older cultural norms during testing",
          "Ecological fallacy caused by applying a group-level cultural average to individuals",
        ],
        answerIndex: 3,
        explanation:
          "The **ecological fallacy** occurs when aggregate group-level statistics (such as Hofstede's national individualism–collectivism scores) are erroneously assumed to describe every individual member of that nation, ignoring large within-culture variance (**Bias** & HL **Culture** extension).",
        hints: [
          "National cultural scores are *averages* across whole populations, not deterministic rules for every person.",
          "Which named fallacy confuses a group-level statistic with an individual-level trait?",
        ],
      },
      {
        id: "2-core-approaches-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "cognitive-thinking-biases",
        strategy: "HL Bridge: Anchoring in real-world judicial decisions (Englich et al., 2006)",
        question:
          "In **Englich et al. (2006)**, experienced German trial judges rolled loaded dice showing either 3 or 9 before setting a criminal sentence, and judges who rolled 9 assigned significantly longer prison terms. Why is this finding especially impactful for evaluating Dual-Process Theory?",
        options: [
          "It shows arbitrary anchors bias even trained experts in high-stakes domains beyond lab vignettes",
          "It proves professional judges rely solely on System 2 and remain immune to numerical framing",
          "It demonstrates that German sentencing statutes explicitly require consulting random dice rolls",
          "It confirms that anchoring only appears when participants lack any prior domain knowledge",
        ],
        answerIndex: 0,
        explanation:
          "A common critique of Kahneman & Tversky's wheel-of-fortune study is low **ecological validity** with university novices. Englich et al. (2006) addressed that critique by showing that even domain experts making realistic sentencing judgements suffered involuntary System 1 **anchoring**, underscoring **Bias** and legal **Responsibility**.",
        hints: [
          "Why might critics dismiss student lab experiments on UN African nations, and how did Englich et al. (2006) test whether that critique holds?",
          "Notice that German trial judges were trained experts, yet an explicitly random die roll still shifted their sentencing judgements.",
        ],
      },
      {
        id: "2-core-approaches-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "sociocultural-approach",
        strategy: "HL Bridge: Enculturation mechanisms in Odden & Rochat (2004)",
        question:
          "In **Odden & Rochat's (2004)** longitudinal observational study in Samoa, children mastered line-fishing and community rank etiquette largely by watching peers and elders rather than receiving formal adult lectures. How does this refine our understanding of **enculturation** and **Social Cognitive Theory**?",
        options: [
          "It proves Samoan children rely entirely on genetic instincts rather than observational retention",
          "It shows observational participation drives enculturation across cultures without Western schooling",
          "It demonstrates that acculturation into a foreign host society happens automatically by age five",
          "It confirms that explicit verbal punishment is mandatory for every stage of Bandura's ARRM model",
        ],
        answerIndex: 1,
        explanation:
          "Odden & Rochat (2004) provided rich naturalistic **emic** evidence that **enculturation** (acquiring one's heritage culture) relies heavily on participatory observational learning (Bandura's SCT) even in non-WEIRD contexts with minimal direct adult verbal instruction (**Perspective**).",
        hints: [
          "Remember: Odden & Rochat studied children growing up in their *own* heritage culture (enculturation, not acculturation).",
          "How did the Samoan children acquire fishing skill if adults rarely gave formal lessons?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — CROSS-APPROACH SYNTHESIS & CORE CONCEPTS
  // answerIndex sequence: [3, 1, 2, 0, 2, 3, 1, 0, 3, 2, 1, 0, 2, 1, 3] -> [3,4,4,4]
  // ===========================================================================
  {
    id: "2-core-approaches-m3",
    title: "MCQ Paper 3 — Cross-Approach Synthesis & Core Concepts",
    level: "SL",
    questions: [
      {
        id: "2-core-approaches-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cognitive-thinking-biases",
        strategy: "Verify framing expected values before predicting risk reversal",
        question:
          "In a framing experiment with 600 patients at risk, Program X guarantees 240 patients will be saved, while Program Y offers a 40% probability all 600 are saved and a 60% probability none are saved. What is the expected number of lives saved under Program Y, and which choice dominates in this **Gain Frame**?",
        options: [
          "180 lives; most participants pick Program Y to gamble for a higher payout",
          "240 lives; most participants pick Program Y because gain frames promote risk seeking",
          "360 lives; most participants pick Program X to avoid calculating probabilities",
          "240 lives; most participants pick Program X because gain frames promote risk aversion",
        ],
        answerIndex: 3,
        explanation:
          "Expected lives saved under Program Y = {{0.40 * 600 + 0.60 * 0 = 240}}, mathematically identical to Program X's certain 240 saved. Because this is a **Gain Frame**, Prospect Theory's concave gain curve predicts **risk aversion** — most participants lock in the sure gain (Program X).",
        hints: [
          "Compute {{0.40 * 600}} to compare Program Y's expected value with Program X (240).",
          "In Prospect Theory, are people risk-averse or risk-seeking when outcomes are framed as *gains*?",
        ],
      },
      {
        id: "2-core-approaches-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "biological-approach",
        strategy: "Compare structural MRI vs functional MRI (Measurement)",
        question:
          "A neuroscientist wants to measure *real-time blood-oxygen changes* in the amygdala while participants view fearful versus neutral faces. Which imaging technique fits best, and what is its key **Measurement** limitation?",
        options: [
          "Structural MRI; it cannot image subcortical limbic structures beneath the skull",
          "fMRI; BOLD blood-flow signals lag neural firing by 1–2 seconds and are correlational",
          "Twin concordance analysis; it measures brain activity only during waking physical exercise",
          "Single-case lesion mapping; it requires surgically removing the prefrontal cortex first",
        ],
        answerIndex: 1,
        explanation:
          "**fMRI** tracks haemodynamic BOLD responses during active cognitive/emotional tasks, offering strong spatial resolution — yet blood flow lags electrical firing by ~1–2 seconds (modest temporal resolution) and brain-behaviour activation maps remain **correlational** unless paired with causal manipulation.",
        hints: [
          "Structural MRI takes a *static* anatomical snapshot (e.g. Maguire's volume study); which scan tracks live activity?",
          "Remember that BOLD measures blood oxygenation, not direct electrical spikes.",
        ],
      },
      {
        id: "2-core-approaches-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-memory-schemas",
        strategy: "Predict dual-task interference using Working Memory subsystems",
        question:
          "According to **Baddeley & Hitch's Working Memory Model**, which pair of simultaneous tasks will produce the **greatest** performance interference?",
        options: [
          "Repeating a phone number aloud while tracing a moving dot on a screen with a stylus",
          "Listening to instrumental rhythm beats while navigating a familiar school corridor",
          "Rehearsing a shopping list subvocally while trying to read and comprehend a novel aloud",
          "Holding a mental image of a triangle while tapping one foot steadily on the floor",
        ],
        answerIndex: 2,
        explanation:
          "Rehearsing a shopping list subvocally and reading a novel aloud *both* compete for the limited capacity of the **phonological loop** (articulatory control process + phonological store), creating severe dual-task interference. Pairing a verbal task with a visuospatial tracking task splits the load across separate slave systems.",
        hints: [
          "Dual-task interference is *highest* when two tasks overload the **same** slave subsystem.",
          "Identify which pair asks the brain to do two verbal/speech tasks at the exact same moment.",
        ],
      },
      {
        id: "2-core-approaches-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "cognitive-memory-schemas",
        strategy: "Calculate serial-position recall percentage from word-trial data",
        question:
          "In a replication of **Glanzer & Cunitz (1966)**, 30 participants hear a 15-word list and recall immediately. Across the final 3 words (90 word-trials total), participants correctly recall 72 words. After a 30-second counting delay with another 30 participants, only 27 of 90 recency word-trials are recalled. What is the percentage-point decline in recency recall?",
        options: [
          "50 percentage points (from 80% down to 30%)",
          "45 percentage points (from 72% down to 27%)",
          "30 percentage points (from 80% down to 50%)",
          "62.5 percentage points (from 90% down to 27.5%)",
        ],
        answerIndex: 0,
        explanation:
          "Immediate recency % = {{(72/90) * 100 = 80%}}. Delayed recency % = {{(27/90) * 100 = 30%}}. The percentage-point drop is {{80 - 30 = 50}} percentage points! Subtracting raw counts (72 − 27 = 45) forgets to divide by the 90 total trials.",
        hints: [
          "Convert both raw counts (72/90 and 27/90) into percentages first.",
          "Then subtract the delayed percentage from the immediate percentage.",
        ],
      },
      {
        id: "2-core-approaches-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "biological-approach",
        strategy: "Evaluate oxytocin findings with contextual nuance",
        question:
          "In **Kosfeld et al. (2005)**, intranasal **oxytocin** increased trusting monetary transfers to anonymous human partners (but not to random computer lotteries), while **Baumgartner et al. (2008)** found oxytocin dampened amygdala reactivity after betrayal. What broader caution applies when evaluating oxytocin research?",
        options: [
          "Oxytocin acts exclusively as a fast synaptic neurotransmitter inside the visual cortex",
          "Oxytocin eliminates all distrust universally toward both in-group allies and hostile rivals",
          "Oxytocin's behavioural effects depend on social context and can heighten in-group favouritism",
          "Placebo controls cannot be administered nasally because hormones evaporate before absorption",
        ],
        answerIndex: 2,
        explanation:
          "Subsequent replications (e.g. De Dreu et al.) revealed that oxytocin is not a simple 'universal love hormone': it promotes **in-group trust and cooperation** while sometimes increasing **defensive aggression toward out-groups** — illustrating how biological hormones interact with sociocultural context (**Perspective**).",
        hints: [
          "Notice Kosfeld et al. found an effect only with *human* social partners, not computers.",
          "Does modern research show oxytocin makes people universally trusting, or contextually selective toward their in-group?",
        ],
      },
      {
        id: "2-core-approaches-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "sociocultural-approach",
        strategy: "Compute Asch conformity percentage and interpret variance",
        question:
          "In a replication of **Asch (1951)** using 15 naïve participants who each complete 12 critical trials (180 critical trials total), participants agree with the unanimous wrong confederate majority on 63 trials. When a single confederate ally breaks unanimity, conforming trials drop to 9 out of 180. What is the conformity rate in each condition?",
        options: [
          "63% unanimous versus 9% with a dissenting ally",
          "42% unanimous versus 15% with a dissenting ally",
          "28% unanimous versus 12% with a dissenting ally",
          "35% unanimous versus 5% with a dissenting ally",
        ],
        answerIndex: 3,
        explanation:
          "Unanimous conformity = {{(63/180) * 100 = 35%}}. With a dissenting ally = {{(9/180) * 100 = 5%}}. Breaking group unanimity dramatically relieves normative social pressure (confirming Asch's variation where a single ally slashed conformity to ~5.5%).",
        hints: [
          "Divide the conforming trials by the total critical trials (180) and multiply by 100.",
          "Notice 63/180 simplifies to 7/20 = 35%, and 9/180 = 1/20 = 5%.",
        ],
      },
      {
        id: "2-core-approaches-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "cognitive-thinking-biases",
        strategy: "Contrast anchoring vs representativeness vs availability",
        question:
          "A charity mailer asks donors: *'Would you like to donate $150, $100, or $50 today?'* rather than *'$20, $10, or $5?'*, and average donations rise sharply. Which cognitive mechanism is the charity leveraging?",
        options: [
          "Availability heuristic, because donors recall recent disasters more vividly",
          "Anchoring bias, because high initial numbers shift subsequent judgements upward",
          "Confirmation bias, because donors ignore financial receipts that contradict beliefs",
          "Flashbulb memory, because donating triggers a permanent Now-Print neural trace",
        ],
        answerIndex: 1,
        explanation:
          "Presenting a high starting suggested tier ($150) sets a numerical **anchor**; even when donors adjust downward, **insufficient adjustment** leaves their chosen donation higher than when anchored at $20 (Tversky & Kahneman, 1974).",
        hints: [
          "Look at what changed between the two mailers: the *starting reference numbers*.",
          "Which bias pulls numerical estimates toward an initial starting figure?",
        ],
      },
      {
        id: "2-core-approaches-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "sociocultural-approach",
        strategy: "Diagnose Berry's Marginalization vs Separation",
        question:
          "Which profile matches Berry's (1997) **Marginalization** acculturation strategy, and why is it linked to the poorest mental-health outcomes?",
        options: [
          "Loss of heritage ties combined with exclusion from host society, leaving minimal social support",
          "Strong retention of heritage traditions paired with active participation in host civic institutions",
          "Full adoption of host-country language and norms alongside voluntary abandonment of heritage roots",
          "Deliberate preservation of heritage enclaves while avoiding interaction with mainstream host peers",
        ],
        answerIndex: 0,
        explanation:
          "**Marginalization** occurs when both heritage maintenance (**No**) and host-society participation (**No**) are absent — often driven by host-society discrimination alongside cultural erosion — leaving individuals isolated from both supportive networks and elevating acculturative stress.",
        hints: [
          "On Berry's 2×2 grid, Marginalization sits at No heritage maintenance + No host participation.",
          "Why does lacking *both* cultural networks elevate psychological distress?",
        ],
      },
      {
        id: "2-core-approaches-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "biological-approach",
        strategy: "Apply Core Concept: Measurement & Causality to evolutionary claims",
        question:
          "In **Fessler et al. (2005)**, women in their first trimester of pregnancy scored higher on pathogen-disgust scales than women in later trimesters, interpreted as an evolved mechanism protecting the vulnerable embryo. What is the main scientific limitation of this evolutionary explanation?",
        options: [
          "Self-report disgust questionnaires cannot be converted into numerical scores for comparison",
          "Hormones such as progesterone have no known biological pathways connecting to nausea",
          "First-trimester participants refused to complete standardized scales due to ethical debriefing",
          "Ancestral selection pressures cannot be manipulated experimentally, making claims hard to falsify",
        ],
        answerIndex: 3,
        explanation:
          "Evolutionary explanations rely on post-hoc inference about ancestral environments that cannot be experimentally tested (**Causality / Measurement**): alternative proximal accounts (e.g. non-adaptive side effects of hormonal surges or cultural food taboos) can often explain the same correlational pattern.",
        hints: [
          "Can psychologists run a controlled experiment across 100,000 years of human ancestral evolution?",
          "Think about falsifiability and post-hoc storytelling in evolutionary psychology.",
        ],
      },
      {
        id: "2-core-approaches-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "cognitive-memory-schemas",
        strategy: "Apply Episodic Buffer role in Working Memory",
        question:
          "Why did **Baddeley (2000)** add the **episodic buffer** to the original 1974 Working Memory Model?",
        options: [
          "To replace the central executive after fMRI scans disproved attentional control in the PFC",
          "To explain why sensory iconic memory fades within 250 milliseconds after visual presentation",
          "To explain how verbal, visual, and chronological streams bind into unified chunks linked to LTM",
          "To account for unconscious motor habits like riding a bicycle without conscious awareness",
        ],
        answerIndex: 2,
        explanation:
          "The original 1974 WMM could not explain how information from the phonological loop and visuospatial sketchpad merged into coherent scenes — nor how densely amnesic patients retained short prose passages exceeding 2 seconds. Baddeley (2000) added the **episodic buffer** as a limited-capacity multimodal integrator interfacing with LTM.",
        hints: [
          "In the 1974 model, the phonological loop and visuospatial sketchpad had no direct bridge to combine sights, sounds, and LTM story structure.",
          "Think of a multimodal temporary workspace that binds visual, verbal, and chronological elements together.",
        ],
      },
      {
        id: "2-core-approaches-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "sociocultural-approach",
        strategy: "Apply Core Concept: Perspective (biopsychosocial synthesis)",
        question:
          "A teenager hesitates to speak up against cyberbullying in a group chat. A researcher notes her elevated amygdala threat activation, her cognitive belief that 'everyone else agrees with the joke', and her desire to protect her in-group status. Which IB Core Concept is best exemplified by combining all three explanations?",
        options: [
          "Measurement, because three explanations automatically double inter-rater reliability",
          "Perspective, because integrating biological, cognitive, and sociocultural lenses avoids reductionism",
          "Responsibility, because adolescents cannot provide informed consent in observational studies",
          "Causality, because combining three correlational observations establishes a true laboratory experiment",
        ],
        answerIndex: 1,
        explanation:
          "The Core Concept of **Perspective** examines how **Biological** (amygdala arousal), **Cognitive** (pluralistic ignorance / schema appraisal), and **Sociocultural** (SIT in-group belonging & normative influence) approaches offer distinct yet complementary explanations that together overcome single-level reductionism.",
        hints: [
          "Recall the 6 FA 2027 Core Concepts: Bias, Causality, Change, Measurement, Perspective, Responsibility.",
          "Which concept explicitly deals with triangulating Biological, Cognitive, and Sociocultural viewpoints?",
        ],
      },
      {
        id: "2-core-approaches-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "cognitive-memory-schemas",
        strategy: "Contrast Loftus & Palmer (1974) lab findings with Yuille & Cutshall (1986)",
        question:
          "In **Yuille & Cutshall (1986)**, witnesses to a real armed robbery remained highly accurate four months later and resisted leading questions inserted by researchers. How does this refine our evaluation of **Loftus & Palmer (1974)**?",
        options: [
          "It suggests lab film studies may overestimate eyewitness suggestibility compared to consequential real events",
          "It proves Loftus & Palmer fabricated their speed-estimate statistics during data analysis",
          "It demonstrates that leading verbs only distort memory when participants are under age twelve",
          "It confirms that Schema Theory applies exclusively to British folk-tale recall tasks",
        ],
        answerIndex: 0,
        explanation:
          "Real-world witnesses in Yuille & Cutshall (1986) experienced genuine emotional arousal and personal salience, making their central memories more resistant to misleading post-event cues than student volunteers watching brief traffic videos — highlighting **ecological validity** nuances without invalidating the misinformation effect in weaker encoding conditions.",
        hints: [
          "Compare watching a 10-second car-crash video in a university lab vs witnessing an actual robbery outside a shop.",
          "Which validity concern separates artificial lab footage from consequential real-life testimony?",
        ],
      },
      {
        id: "2-core-approaches-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "biological-approach",
        strategy: "HL Bridge: Dopamine reward prediction error in Motivation",
        question:
          "Modern neuroscience research linking the Biological Approach to the HL **Motivation** extension finds that mesolimbic **dopamine** bursts fire most strongly for *unexpected* rewards and drop when an expected reward fails to arrive. What role does dopamine primarily perform?",
        options: [
          "It passively records sensory pleasure after every predictable routine meal",
          "It shuts down hippocampal spatial encoding whenever a reward appears unexpectedly",
          "It signals reward prediction errors to drive motivational 'wanting' and reinforcement learning",
          "It replaces serotonin completely as the sole neurotransmitter regulating human mood",
        ],
        answerIndex: 2,
        explanation:
          "Rather than simply encoding hedonic 'liking', mesolimbic dopamine encodes **reward prediction error** (difference between expected and actual reward) and incentive salience ('wanting') — explaining why unpredictable variable-ratio notifications and rewards powerfully capture motivation.",
        hints: [
          "Notice dopamine spikes for *unexpected* rewards and dips when an *expected* reward is withheld.",
          "Think of prediction error and motivational 'wanting' vs passive pleasure.",
        ],
      },
      {
        id: "2-core-approaches-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "cognitive-thinking-biases",
        strategy: "HL Bridge: Ecological rationality critique of Dual-Process biases",
        question:
          "Psychologist **Gerd Gigerenzer** argued that presenting medical risks as **natural frequencies** ('10 out of 1,000 women') rather than single-event probabilities ('1%') slashes base-rate neglect dramatically. How does this challenge a purely pessimistic view of **System 1 heuristics**?",
        options: [
          "It proves human working memory can process infinite statistical decimals without effort",
          "It shows many reasoning errors reflect unnatural statistical formats rather than flawed minds",
          "It demonstrates that confirmation bias disappears completely when participants use calculators",
          "It refutes the existence of loss aversion in all financial and medical decision experiments",
        ],
        answerIndex: 1,
        explanation:
          "Gigerenzer's **ecological rationality** perspective argues that heuristics are fast, frugal, and adaptive in natural environments; apparent 'irrationality' in Kahneman & Tversky's tasks often stems from unfamiliar abstract probability syntax rather than inherent cognitive failure (**Perspective** & **Measurement**).",
        hints: [
          "Ask *what changed* when accuracy jumped: did humans suddenly grow a bigger brain, or did the *format* of the problem match how minds naturally count frequencies?",
          "Contrast abstract single-event percentages with concrete natural frequencies ('10 out of 1,000').",
        ],
      },
      {
        id: "2-core-approaches-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "sociocultural-approach",
        strategy: "HL Bridge: Critical evaluation of Berry's acculturation model",
        question:
          "When evaluating **Berry's (1997)** acculturation framework through the HL **Culture** extension and the Core Concept of **Responsibility**, which critique is most theoretically rigorous?",
        options: [
          "Berry's matrix ignores the possibility that migrants could ever keep their heritage language",
          "Berry proved that Assimilation always produces lower acculturative stress than Integration",
          "Berry's four categories can only be measured using structural MRI neuroimaging scanners",
          "The model risks framing strategy as free personal choice while downplaying host discrimination",
        ],
        answerIndex: 3,
        explanation:
          "A key HL critique of Berry's model is that **Integration** requires mutual accommodation: if a host society enforces discriminatory policies or social exclusion, immigrants cannot freely choose Integration and may be pushed toward Separation or Marginalization — highlighting structural power and **Responsibility**.",
        hints: [
          "Think about whether an immigrant *alone* controls whether the host society welcomes their participation.",
          "How do racism, legal barriers, or assimilationist policies constrain Berry's four quadrants?",
        ],
      },
    ],
  },
];
