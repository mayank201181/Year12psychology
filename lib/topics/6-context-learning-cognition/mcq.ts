import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 — Foundations of Conditioning, LTP, Load & Memory Reliability
  // =========================================================================
  {
    id: "6-context-learning-cognition-m1",
    title: "MCQ Paper 1 — Conditioning, Plasticity & Cognitive Architecture",
    level: "SL",
    questions: [
      {
        id: "6-context-learning-cognition-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "conditioning-social-learning",
        question:
          "After several painful dental procedures accompanied by the high-pitched whine of a drill, a patient begins sweating and tensing up the moment they hear the drill's whine alone. In classical conditioning, what is the drill's whine after learning?",
        options: [
          "The unconditioned stimulus (UCS) that triggers a reflex automatically",
          "The neutral stimulus (NS) that remains biologically meaningless",
          "The conditioned stimulus (CS) that elicits a learned anticipatory fear",
          "The conditioned response (CR) produced by the sympathetic nervous system",
        ],
        answerIndex: 2,
        hints: [
          "Distinguish between a stimulus (something perceived in the environment) and a response (the bodily reaction).",
          "Before dental pain, the whine triggered no anxiety; after pairing with pain, it triggers fear on its own.",
        ],
        explanation:
          "The drill's whine began as a neutral stimulus (NS) and, through pairing with painful drilling (UCS), became a **conditioned stimulus (CS)** capable of eliciting the conditioned fear response (CR) on its own. Sweating and tensing up are responses rather than stimuli.",
      },
      {
        id: "6-context-learning-cognition-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "conditioning-social-learning",
        question:
          "A driver fastens their seatbelt promptly every trip because doing so immediately silences an irritating dashboard chime. Which operant conditioning process maintains this seatbelt-fastening habit?",
        options: [
          "Negative reinforcement, because removing an aversive sound strengthens buckling",
          "Positive punishment, because the harsh chime discourages unsafe driving habits",
          "Negative punishment, because silencing the chime removes an expected reward",
          "Positive reinforcement, because fastening the belt adds a pleasant sensation",
        ],
        answerIndex: 0,
        hints: [
          "First ask: does fastening the seatbelt *increase* or *decrease* in frequency?",
          "Next ask: is a stimulus being *added* (+) or *removed* (−) when the belt clicks in?",
        ],
        explanation:
          "Buckling the seatbelt *increases* in frequency (reinforcement) because it *removes* an aversive buzzing chime (negative), making it **negative reinforcement**. Punishment always *decreases* behaviour frequency, so calling the chime removal punishment is a classic misconception.",
      },
      {
        id: "6-context-learning-cognition-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "conditioning-social-learning",
        question:
          "In Garcia & Koelling's (1966) taste-aversion experiment, rats rapidly learned to avoid sweetened water paired with radiation-induced nausea hours later, yet failed to avoid water paired with bright lights and noise before nausea. Which principle does this demonstrate?",
        options: [
          "Equipotentiality, showing any neutral cue pairs equally with any reflex",
          "Spontaneous recovery, showing extinguished aversions rebound after rest",
          "Stimulus generalization, showing nausea spreads across sensory channels",
          "Biological preparedness, showing evolutionary constraints bias associations",
        ],
        answerIndex: 3,
        hints: [
          "Traditional behaviourists assumed any stimulus could be conditioned equally easily to any outcome.",
          "Think about why linking taste (not lights) to internal stomach illness improves survival.",
        ],
        explanation:
          "Garcia & Koelling (1966) refuted strict equipotentiality by demonstrating **biological preparedness**: evolutionary selection wired organisms to rapidly associate ingested flavours with delayed internal illness (and audiovisual cues with external shock), illustrating the Biological **Perspective** in learning.",
      },
      {
        id: "6-context-learning-cognition-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "conditioning-social-learning",
        question:
          "Which Skinnerian reinforcement schedule typically produces a 'scalloped' cumulative response pattern — low activity immediately after reinforcement followed by an accelerating burst right before the next reward becomes available?",
        options: [
          "Variable-ratio (VR) schedule based on unpredictable response counts",
          "Fixed-interval (FI) schedule based on predictable elapsed clock time",
          "Variable-interval (VI) schedule based on unpredictable waiting periods",
          "Fixed-ratio (FR) schedule based on fixed counts of completed actions",
        ],
        answerIndex: 1,
        hints: [
          "Think of how students cram right before a weekly Friday quiz and relax on Saturday morning.",
          "Predictable clock deadlines create time-based pauses followed by last-minute surges.",
        ],
        explanation:
          "A **fixed-interval (FI)** schedule rewards the first response after a predictable period of time, producing characteristic scalloping (minimal effort right after reinforcement, then rapid acceleration approaching the deadline). Variable-ratio schedules instead yield steep, pause-free linear rates.",
      },
      {
        id: "6-context-learning-cognition-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "During hippocampal Long-Term Potentiation (LTP), what crucial molecular event occurs at postsynaptic NMDA receptors once repeated AMPA depolarization clears their Mg²⁺ block?",
        options: [
          "Calcium ions (Ca²⁺) enter and trigger insertion of extra AMPA receptors",
          "Serotonin molecules re-enter presynaptic vesicles to silence neural firing",
          "Cortisol binds postsynaptic DNA to prune active dendritic spine networks",
          "Potassium ions flood inward and permanently hyperpolarize the resting synapse",
        ],
        answerIndex: 0,
        hints: [
          "NMDA receptors act as coincidence detectors requiring both glutamate and strong depolarization.",
          "Which divalent ion enters through unblocked NMDA channels to activate intracellular plasticity cascades?",
        ],
        explanation:
          "When depolarization expels Mg²⁺ from NMDA channels, **Ca²⁺ influx** activates intracellular kinases that insert additional AMPA receptors into the postsynaptic membrane and promote dendritic spine growth, durably strengthening synaptic transmission. Cortisol-driven pruning and hyperpolarization instead weaken neural responsiveness.",
      },
      {
        id: "6-context-learning-cognition-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "An IB student struggles to understand a biology handout because the diagram sits on page 2 while its dense explanatory paragraphs sit on page 4, forcing constant page-flipping. According to Sweller's Cognitive Load Theory, what is unnecessarily elevated?",
        options: [
          "Intrinsic load, caused by the inherent difficulty of the topic itself",
          "Germane load, caused by productive integration into long-term schemas",
          "Extraneous load, caused by split-attention layout draining working memory",
          "Semantic load, caused by excessive storage inside long-term memory banks",
        ],
        answerIndex: 2,
        hints: [
          "Does the page-flipping stem from the biology concept itself or from how the handout was formatted?",
          "Recall Sweller's three loads: inherent complexity, poor instructional design, and schema construction.",
        ],
        explanation:
          "Forcing learners to hold text in working memory while flipping pages to match a separated figure exemplifies the split-attention effect, which inflates **extraneous load**. Intrinsic load depends on conceptual complexity, whereas germane load is desirable schema construction.",
      },
      {
        id: "6-context-learning-cognition-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "In a replication of Roediger & Karpicke (2006), students who reread a passage four times recalled 40% of idea units after one week, whereas students who practised free recall remembered 58%. What is the **relative percentage improvement** of retrieval practice over rereading?",
        options: [
          "18% relative improvement over the rereading baseline",
          "31% relative improvement over the rereading baseline",
          "40% relative improvement over the rereading baseline",
          "45% relative improvement over the rereading baseline",
        ],
        answerIndex: 3,
        hints: [
          "18 is the *percentage-point* difference (58 − 40), NOT the relative percentage improvement.",
          "Divide the gain (18) by the baseline rereading score (40) and multiply by 100.",
        ],
        explanation:
          "Relative improvement = {{(58 - 40)/40 * 100 = 18/40 * 100 = 45%}}. Selecting 18% confuses absolute percentage-point gain with relative percentage change, while 31% mistakenly divides by 58 instead of the 40% baseline.",
      },
      {
        id: "6-context-learning-cognition-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "In Chase & Simon's (1973) chess expertise study, masters recalled mid-game board positions far better than novices, yet performed almost no better than novices when chess pieces were scattered randomly. What does this prove about expertise?",
        options: [
          "Experts possess genetically larger raw working-memory slot capacities",
          "Experts rely on domain-specific LTM schemas to chunk meaningful patterns",
          "Random boards trigger acute stress hormones that block visual perception",
          "Novices outperform experts whenever retrieval tasks lack visual colour",
        ],
        answerIndex: 1,
        hints: [
          "If experts simply had a bigger raw working-memory capacity, how should they perform on random boards?",
          "Why does a meaningful mid-game board occupy fewer working-memory chunks for a master?",
        ],
        explanation:
          "Because masters' recall advantage disappeared on random placements, Chase & Simon demonstrated that expertise stems from organized **long-term memory schemas** that compress multi-piece patterns into single chunks — dramatically reducing intrinsic working-memory load rather than enlarging raw WM hardware.",
      },
      {
        id: "6-context-learning-cognition-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "eyewitness-memory-reliability",
        question:
          "Why was Experiment 2 of Loftus & Palmer (1974) — testing false recall of 'broken glass' one week later — theoretically more decisive than Experiment 1's speed estimates alone?",
        options: [
          "It used real highway crash witnesses instead of university student clips",
          "It eliminated every leading word by switching to neutral silent surveys",
          "It showed the verb altered memory traces rather than just demand guessing",
          "It demonstrated that high emotional arousal improves visual recall scores",
        ],
        answerIndex: 2,
        hints: [
          "A sceptic of Experiment 1 could say students simply guessed a bigger number because 'smashed' sounds faster.",
          "Does guessing a speed number explain why 32% vividly reported nonexistent broken glass a week later?",
        ],
        explanation:
          "Experiment 1 alone could reflect response bias (picking a higher speed to match the verb's phrasing). Experiment 2 showed **32%** of *smashed* witnesses (vs 14% *hit* and 12% control) falsely recalled nonexistent broken glass a week later, supporting genuine **reconstructive memory alteration**.",
      },
      {
        id: "6-context-learning-cognition-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "eyewitness-memory-reliability",
        question:
          "How does Yuille & Cutshall's (1986) Canadian gun-shop shooting field study challenge the conclusions drawn from Loftus & Palmer's (1974) laboratory experiments?",
        options: [
          "Real-crime witnesses remained highly accurate months later despite leading questions",
          "Real-crime witnesses forgot nearly all central details within forty-eight hours",
          "Real-crime witnesses showed double the false-memory rate seen in video labs",
          "Real-crime witnesses refused to answer any open-ended forensic interviews",
        ],
        answerIndex: 0,
        hints: [
          "Recall the contrast between laboratory film clips (high internal validity) and witnessing an actual violent robbery.",
          "Did the 13 gun-shop witnesses collapse under the two misleading questions inserted by researchers?",
        ],
        explanation:
          "Yuille & Cutshall (1986) interviewed 13 real shooting witnesses 4–5 months later and found ~79–84% accuracy despite inserted misleading questions, highlighting the **low ecological validity** limitation of low-stakes lab film studies (**Measurement**).",
      },
      {
        id: "6-context-learning-cognition-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "eyewitness-memory-reliability",
        question:
          "During a forensic interview, a detective asks an eyewitness to picture the rain, streetlamp glow, and exact emotions they felt while waiting at the bus stop before describing the suspect. Which Cognitive Interview component is being applied?",
        options: [
          "Change perspective, shifting to another bystander's viewpoint",
          "Mental reinstatement of context, reactivating encoding cues",
          "Reverse temporal order, blocking chronological schema scripts",
          "Weapon focus mitigation, narrowing attention onto facial traits",
        ],
        answerIndex: 1,
        hints: [
          "Notice the detective asks the witness to mentally rebuild environmental and internal conditions from encoding.",
          "This technique directly draws on Tulving's encoding specificity principle.",
        ],
        explanation:
          "Asking witnesses to recreate physical surroundings and emotional states applies **mental reinstatement of context** (Fisher & Geiselman, 1992), leveraging encoding specificity to unlock context-dependent retrieval pathways.",
      },
      {
        id: "6-context-learning-cognition-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "A carpenter struggles for ten minutes to tighten a loose screw because they have no screwdriver — overlooking a sturdy coin in their pocket that would turn the slot easily. Which specific problem-solving barrier does this illustrate?",
        options: [
          "Algorithmic overload, systematically testing every possible tool combination",
          "Working-memory updating failure, forgetting the goal mid-way through action",
          "Functional fixedness, restricting an object mentally to its customary role",
          "Own-race perceptual bias, mistaking familiar tools for unfamiliar objects",
        ],
        answerIndex: 2,
        hints: [
          "Does the barrier involve repeating an algebraic formula or seeing a physical object only for its usual job?",
          "Connect this to Duncker's (1945) candle-and-tack-box problem.",
        ],
        explanation:
          "**Functional fixedness** (Duncker, 1945) occurs when an object's typical schema (*coin = currency*) prevents recognizing an alternative physical affordance (*coin = makeshift screwdriver*). Algorithms guarantee solutions rather than blocking creative tool use.",
      },
      {
        id: "6-context-learning-cognition-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "conditioning-social-learning",
        question:
          "[HL] A school introduces cash vouchers for every book primary pupils read during summer holidays, but once vouchers end in autumn, pupils who previously loved reading voluntarily read *less* than before. Which HL Motivation mechanism best explains this operant limitation?",
        options: [
          "Spontaneous recovery, reviving previously extinguished avoidance habits",
          "Biological preparedness, preventing humans from learning verbal tasks",
          "Stimulus discrimination, limiting book reading strictly to school rooms",
          "Overjustification effect, where expected rewards undermine intrinsic autonomy",
        ],
        answerIndex: 3,
        hints: [
          "Think about Deci & Ryan's Self-Determination Theory and Lepper et al. (1973).",
          "What happens to internal enjoyment when an expected tangible reward reframes play as paid work?",
        ],
        explanation:
          "In the **overjustification effect** (Lepper et al., 1973; Self-Determination Theory), contingent extrinsic rewards for an intrinsically motivating activity shift perceived locus of causality outward, eroding autonomy and reducing post-reward voluntary behaviour — a vital HL qualification to pure Skinnerian reinforcement.",
      },
      {
        id: "6-context-learning-cognition-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "[HL] Why did Lehtonen et al.'s (2018) meta-analysis of 152 studies cast doubt on claims that bilingualism causes a large domain-general executive-function advantage?",
        options: [
          "Correcting for publication bias and SES confounds reduced effects to near zero",
          "Bilingual participants suffered severe working-memory damage on Stroop tasks",
          "Monolingual samples were never included as control groups in prior research",
          "Neuroimaging confirmed bilingual brains lack functional prefrontal pathways",
        ],
        answerIndex: 0,
        hints: [
          "Consider what happens when journals disproportionately accept significant positive results while null replications go unpublished.",
          "Link to the FA2027 Core Concepts of **Bias** and **Causality**.",
        ],
        explanation:
          "Lehtonen et al. (2018) demonstrated strong **publication bias** (the file-drawer effect) alongside quasi-experimental SES/immigrant confounds; after statistical bias adjustment, domain-general bilingual executive advantages shrank effectively to zero (Hedges' g ≈ 0).",
      },
      {
        id: "6-context-learning-cognition-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "[HL] A university study finds students who keep their silent smartphone face-down on their desk score significantly worse on working-memory span tests than students whose phones sit in another room (Ward et al., 2017). How does Cognitive Load Theory interpret this HL Technology finding?",
        options: [
          "The smartphone directly increases the intrinsic complexity of the exam items",
          "Suppressing the urge to check the salient phone consumes extraneous WM capacity",
          "Phone proximity accelerates hippocampal LTP and blocks episodic consolidation",
          "Keeping a phone visible expands germane load through multimodal dual coding",
        ],
        answerIndex: 1,
        hints: [
          "Ward's 'brain drain' hypothesis focuses on limited attentional/WM resources.",
          "Does resisting a high-salience distractor build schemas (germane) or drain cognitive bandwidth (extraneous)?",
        ],
        explanation:
          "Even when silent, a personally salient smartphone automatically attracts monitoring resources; actively inhibiting the urge to check it imposes **extraneous cognitive load**, shrinking available working-memory capacity for the primary cognitive task.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 — Eyewitness Science, Executive Function & Core Concepts
  // =========================================================================
  {
    id: "6-context-learning-cognition-m2",
    title: "MCQ Paper 2 — Eyewitness Reliability, Reasoning & Environmental Contexts",
    level: "SL",
    questions: [
      {
        id: "6-context-learning-cognition-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "eyewitness-memory-reliability",
        question:
          "In Loftus, Loftus & Messo's (1987) eye-tracking experiment, participants who viewed a customer holding a handgun instead of a cheque showed far poorer subsequent facial lineup accuracy (11.1% vs 38.9%). What cognitive mechanism best accounts for this drop?",
        options: [
          "Post-event verbal contamination introduced by leading courtroom lawyers",
          "Weapon focus attentional narrowing drawing fixations away from the face",
          "Proactive interference from familiar friends resembling the armed suspect",
          "Spontaneous recovery of childhood phobias triggered by seeing cash registers",
        ],
        answerIndex: 1,
        hints: [
          "Eye-tracking revealed where participants spent their visual fixations during encoding.",
          "Connect this to Easterbrook's cue-utilization hypothesis under perceived threat.",
        ],
        explanation:
          "The **weapon focus effect** occurs because an unexpected, threatening weapon captures disproportionate visual fixations and narrows attentional bandwidth (Easterbrook's hypothesis), starving facial encoding of processing resources.",
      },
      {
        id: "6-context-learning-cognition-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "eyewitness-memory-reliability",
        question:
          "In a replication of Loftus & Pickrell's (1995) 'Lost in the Mall' study, 14 out of 50 adult participants partially or fully endorsed a fabricated childhood memory supplied by a relative. What percentage of participants developed a false memory?",
        options: [
          "14% of participants endorsed the false episode",
          "20% of participants endorsed the false episode",
          "36% of participants endorsed the false episode",
          "28% of participants endorsed the false episode",
        ],
        answerIndex: 3,
        hints: [
          "Use the false-memory rate formula: (false endorsers ÷ total sample) × 100.",
          "Notice 14/50 doubles cleanly to a denominator of 100.",
        ],
        explanation:
          "False-memory rate = {{14/50 * 100 = 28%}}. Selecting 14% forgets to divide by sample size (50), and 36% counts the remaining non-endorsers (36 participants) rather than calculating the percentage.",
      },
      {
        id: "6-context-learning-cognition-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "eyewitness-memory-reliability",
        question:
          "Meissner & Brigham's (2001) meta-analysis found witnesses are approximately 1.56× more likely to falsely identify other-race suspects than own-race suspects. Which combined Sociocultural–Cognitive account best explains this own-race bias?",
        options: [
          "Lower perceptual expertise with out-group faces plus broad category encoding",
          "Permanent genetic differences in retinal cone density across human regions",
          "Higher working-memory capacity exclusively when viewing familiar clothing",
          "Complete absence of episodic encoding whenever witnesses view strangers",
        ],
        answerIndex: 0,
        hints: [
          "Think about both routine everyday visual contact (expertise) and Social Identity in-group/out-group categorization.",
          "Rule out biologically deterministic or absolute 'complete absence' claims.",
        ],
        explanation:
          "**Own-race bias** arises from unequal **perceptual expertise** (greater routine experience distinguishing diagnostic features among own-race faces) combined with social-cognitive categorization (processing in-group faces individually while encoding out-group faces via broader category features).",
      },
      {
        id: "6-context-learning-cognition-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "conditioning-social-learning",
        question:
          "Why does Watson & Rayner's (1920) 'Little Albert' study remain a foundational benchmark for the FA2027 Core Concept of **Responsibility**?",
        options: [
          "It tested too many infant participants without using random group allocation",
          "It relied on brain imaging technology that exposed infants to loud magnets",
          "It deliberately induced lasting fear without right to withdraw or deconditioning",
          "It paid parents excessive cash bonuses that biased observational checklists",
        ],
        answerIndex: 2,
        hints: [
          "Recall the core ethical safeguards required when studying vulnerable child participants.",
          "What happened (or failed to happen) after researchers conditioned Albert to cry at furry objects?",
        ],
        explanation:
          "Watson & Rayner deliberately induced distress in a 9-month-old infant, did not halt despite obvious crying, and never deconditioned his fear before Albert left the hospital — violating protection from psychological harm, informed withdrawal, and debriefing (**Responsibility**).",
      },
      {
        id: "6-context-learning-cognition-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "conditioning-social-learning",
        question:
          "In Bandura's Social Cognitive Theory, a student watches a peer successfully deliver an improvised speech and remembers every rhetorical move, yet still refuses to volunteer because they doubt their own speaking ability. Which mediational factor is missing?",
        options: [
          "Attention, because the student failed to watch the peer's presentation",
          "Retention, because the student forgot the peer's rhetorical structure",
          "Extinction, because the peer's speech was never paired with a reflex",
          "Motivation and self-efficacy, because low confidence inhibits performance",
        ],
        answerIndex: 3,
        hints: [
          "The stem explicitly states the student watched carefully (Attention) and remembered every move (Retention).",
          "Which of Bandura's ARRM components governs whether a retained behaviour is actually chosen?",
        ],
        explanation:
          "Bandura distinguished *acquisition* (Attention + Retention) from *performance* (Reproduction + **Motivation / self-efficacy**). Low self-efficacy reduces motivation to enact an already learned behaviour.",
      },
      {
        id: "6-context-learning-cognition-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "In Luchins's (1942) Water-Jar experiment, participants who solved five jars using the complex rule B − A − 2C blindly applied that same lengthy rule to a sixth jar easily solved in one step (A − C). What cognitive phenomenon is this?",
        options: [
          "Functional fixedness, restricting physical tools to one conventional use",
          "Mental set (Einstellung), mechanically reusing a familiar strategy over shortcuts",
          "Incubation insight, spontaneously solving puzzles after stepping away",
          "Dual coding interference, confusing verbal formulas with visual containers",
        ],
        answerIndex: 1,
        hints: [
          "Here participants fixated on a *formula/strategy* rather than an *object's* everyday function.",
          "What German-origin term names rigid persistence with a previously successful procedure?",
        ],
        explanation:
          "Luchins (1942) demonstrated **mental set (Einstellung)** — cognitive inertia where repeated success with one algorithm blinds solvers to a simpler shortcut. Functional fixedness specifically concerns rigid assumptions about an *object's* function (Duncker).",
      },
      {
        id: "6-context-learning-cognition-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "During the Wisconsin Card Sorting Test (WCST), the hidden sorting rule silently switches from 'colour' to 'shape', yet a patient with prefrontal damage keeps sorting by colour for 15 consecutive trials. Which executive function is primarily impaired?",
        options: [
          "Cognitive flexibility (set-shifting), updating strategies when rules change",
          "Sensory registration, perceiving basic geometric shapes on printed cards",
          "Procedural conditioning, acquiring involuntary reflexes through pairing",
          "Episodic flashbulb encoding, recalling vivid autobiographical trauma",
        ],
        answerIndex: 0,
        hints: [
          "Recall Miyake et al.'s (2000) three core executive functions: inhibitory control, cognitive flexibility, and WM updating.",
          "Continuing an outdated rule after feedback signals a change is called a *perseverative error*.",
        ],
        explanation:
          "Persisting with an outdated sorting criterion (perseveration) on the WCST directly operationalizes impaired **cognitive flexibility (set-shifting)** within Miyake's prefrontal executive-function triad.",
      },
      {
        id: "6-context-learning-cognition-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "A participant's mean reaction time on congruent Stroop trials is 500 ms and on incongruent trials is 650 ms. What are the Stroop interference effect and the percentage slowdown?",
        options: [
          "150 ms interference and 23.1% slowdown relative to incongruent speed",
          "150 ms interference and 15.0% slowdown relative to congruent speed",
          "150 ms interference and 30.0% slowdown relative to congruent speed",
          "250 ms interference and 50.0% slowdown relative to congruent speed",
        ],
        answerIndex: 2,
        hints: [
          "First subtract congruent RT from incongruent RT: 650 − 500.",
          "Then divide the interference latency by the *congruent* baseline (500 ms) × 100.",
        ],
        explanation:
          "Interference = {{650 - 500 = 150}} ms; percentage slowdown = {{150/500 * 100 = 30.0%}}. Dividing 150 by 650 gives 23.1%, which erroneously uses the incongruent latency as the denominator.",
      },
      {
        id: "6-context-learning-cognition-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "According to Schmader & Johns's (2003) integrated process model, through which immediate cognitive pathway does stereotype threat depress performance on challenging problem-solving tests?",
        options: [
          "It erases semantic facts permanently from cortical long-term memory stores",
          "It eliminates visual acuity so examinees misread printed exam equations",
          "It prevents hippocampal sleep replay during the night prior to testing",
          "Anxious self-monitoring and stress consume finite working-memory capacity",
        ],
        answerIndex: 3,
        hints: [
          "Remember how Sociocultural threat interacts with Cognitive architecture during the exam itself.",
          "What happens to working memory when part of it is occupied worrying about confirming a negative stereotype?",
        ],
        explanation:
          "Schmader & Johns (2003) showed that physiological stress, vigilance, and active suppression of anxious thoughts siphon off **working-memory capacity**, leaving insufficient executive bandwidth for complex reasoning.",
      },
      {
        id: "6-context-learning-cognition-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "Why does **spaced repetition** (Cepeda et al., 2006) consistently outperform massed cramming on delayed exams even when both strategies use identical total study minutes?",
        options: [
          "Massed practice triggers immediate NMDA receptor destruction across cortex",
          "Spacing allows partial forgetting, requiring effortful retrieval and sleep replay",
          "Spaced sessions eliminate intrinsic conceptual complexity from exam topics",
          "Cramming works exclusively for motor habits and never stores verbal facts",
        ],
        answerIndex: 1,
        hints: [
          "Think about both the cognitive benefit of effortful retrieval after a delay and the biological benefit of sleep between sessions.",
          "Does spacing remove intrinsic complexity, or does it strengthen consolidation?",
        ],
        explanation:
          "Spacing introduces slight forgetting between sessions, turning each review into effortful retrieval practice while allowing intervening **slow-wave sleep consolidation** to stabilize hippocampal LTP traces into neocortical schemas.",
      },
      {
        id: "6-context-learning-cognition-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "eyewitness-memory-reliability",
        question:
          "Köhnken et al.'s (1999) meta-analysis of 55 studies evaluating the Cognitive Interview found roughly 35–41% more correct witness details than standard police interviews. What practical limitation did the same meta-analysis highlight?",
        options: [
          "Witnesses completely refused to narrate events in reverse temporal order",
          "Accurate detail gains occurred only when witnesses were children under ten",
          "CI interviews take longer, require training, and slightly raise minor errors",
          "CI interviews eliminated own-race bias across every cross-cultural lineup",
        ],
        answerIndex: 2,
        hints: [
          "When witnesses are encouraged to 'report everything' and lower their censoring threshold, what small trade-off occurs?",
          "Consider real-world policing constraints as well as accuracy trade-offs.",
        ],
        explanation:
          "While the Cognitive Interview substantially boosts accurate recall, Köhnken et al. (1999) noted a modest increase in minor inaccurate details alongside greater officer training and interview-time demands — an important **Measurement** and **Responsibility** trade-off.",
      },
      {
        id: "6-context-learning-cognition-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "Noble et al. (2015) reported positive correlations between family socioeconomic status (SES) and children's prefrontal cortical surface area and executive-function scores. Which FA2027 **Causality** conclusion is scientifically valid?",
        options: [
          "Low income directly causes irreversible genetic damage to cortical neurons",
          "High SES automatically guarantees superior memory regardless of schooling",
          "SES disparities exist only in lab tests and never appear in classrooms",
          "Correlational data show an association mediated by modifiable stress and resources",
        ],
        answerIndex: 3,
        hints: [
          "Can researchers randomly assign infants to live in chronic poverty?",
          "Distinguish correlational environmental risk bundles from fixed biological determinism.",
        ],
        explanation:
          "Because SES cannot be randomly assigned, neuroimaging correlations cannot isolate a single cause or imply fixed genetic limits; rather, poverty bundles modifiable environmental stressors (chronic cortisol, nutrition, cognitive resources) amenable to policy **Change** and **Responsibility**.",
      },
      {
        id: "6-context-learning-cognition-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "[HL] A meta-analysis comparing Dual Coding slides against text-heavy slides reports Cohen's d = 0.72 (p < 0.001) across 40 classrooms, whereas a software plugin study reports d = 0.09 (p = 0.04, N = 6,000). How should an HL student interpret this?",
        options: [
          "Dual Coding yields a strong practical gain, whereas d = 0.09 is trivial despite p < 0.05",
          "Both interventions are equally impactful because both achieved p < 0.05",
          "The software plugin is more trustworthy solely because its sample is larger",
          "Cohen's d = 0.72 implies 72% of students scored perfectly on the post-test",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish statistical significance (p-value, sensitive to large N) from practical magnitude (Cohen's d).",
          "Recall benchmarks: d ≈ 0.2 small, 0.5 medium, 0.8 large.",
        ],
        explanation:
          "With N = 6,000, even a tiny, practically negligible difference (d = 0.09) reaches p < 0.05. By contrast, d = 0.72 represents a medium-to-large **practical effect size**, demonstrating why HL **Measurement** evaluation requires pairing p-values with effect sizes.",
      },
      {
        id: "6-context-learning-cognition-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "[HL] In Sparrow et al.'s (2011) 'Google Effect' experiments, participants who expected trivia facts to remain saved in a computer folder recalled *where* to find files better than the facts themselves. How does this HL Technology study connect to learning & cognition?",
        options: [
          "Search engines physically enlarge hippocampal volume within one afternoon",
          "Digital storage removes all extraneous cognitive load from academic writing",
          "Cognitive offloading shifts encoding from factual content to transactive retrieval paths",
          "Using computers prevents learners from forming any procedural motor habits",
        ],
        answerIndex: 2,
        hints: [
          "Think of Wegner's concept of *transactive memory* applied to digital devices.",
          "When learners assume an external tool will store facts, what do they encode instead?",
        ],
        explanation:
          "Sparrow et al. (2011) showed **cognitive offloading** into digital **transactive memory**: expecting future digital access lowers effortful factual encoding (bypassing retrieval-practice LTP) while prioritizing memory for *file locations*.",
      },
      {
        id: "6-context-learning-cognition-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "eyewitness-memory-reliability",
        question:
          "[HL] Why do cross-cultural forensic researchers warn against assuming Western lab eyewitness norms generalize universally (an **etic** overreach in HL Culture)?",
        options: [
          "Non-Western witnesses lack functional episodic retrieval networks for events",
          "Cultural norms of authority deference and holistic attention alter suggestibility",
          "Post-event misinformation operates exclusively in English-language verb tenses",
          "Double-blind lineups work only inside individualistic courtroom jurisdictions",
        ],
        answerIndex: 1,
        hints: [
          "Think about how cultural power distance (deference to police authority) and holistic vs analytic visual attention might shape eyewitness reporting.",
          "Avoid stereotyping or claiming cognitive distortion exists only in one language.",
        ],
        explanation:
          "Applying WEIRD laboratory norms as universal (**imposed etic**) ignores how cultural norms — such as deference to authority figures (power distance) or holistic attention to background context — modulate conformity to misleading questions and encoding focus (**Perspective & Bias**).",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 — Integrated FA2027 Synthesis & Applied Vignettes
  // =========================================================================
  {
    id: "6-context-learning-cognition-m3",
    title: "MCQ Paper 3 — FA2027 Multi-Perspective & Core Concepts Synthesis",
    level: "SL",
    questions: [
      {
        id: "6-context-learning-cognition-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "conditioning-social-learning",
        question:
          "A dog's conditioned salivation to a 500 Hz tone has been completely extinguished after 25 tone-only trials. Two days later, the researcher plays the 500 Hz tone once with no food, and the dog briefly salivates again. What does this demonstrate?",
        options: [
          "Stimulus generalization to an unrelated visual cue inside the laboratory",
          "Negative punishment suppressing salivation permanently during rest days",
          "Operant shaping building a brand-new motor sequence without reinforcement",
          "Spontaneous recovery, proving extinction suppressed rather than erased learning",
        ],
        answerIndex: 3,
        hints: [
          "Notice the dog received *no* new food pairings during the two-day break.",
          "What phenomenon revives a weakened CR after a rest interval following extinction?",
        ],
        explanation:
          "**Spontaneous recovery** is the temporary reappearance of an extinguished CR after a rest period, proving that extinction creates competing inhibitory learning rather than permanently deleting the original CS–UCS trace.",
      },
      {
        id: "6-context-learning-cognition-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "conditioning-social-learning",
        question:
          "A coach teaches a beginner gymnast to perform a handspring by praising a solid lunge first, then praising only a lunge-plus-handstand, and finally praising only the full rotation. Which operant technique is the coach using?",
        options: [
          "Extinction bursts, ignoring every successful practice attempt until fatigue",
          "Shaping, reinforcing successive approximations toward the target skill",
          "Classical forward pairing, linking an involuntary reflex to a whistle sound",
          "Negative punishment, revoking gym privileges whenever a lunge wobbles",
        ],
        answerIndex: 1,
        hints: [
          "A complete handspring rarely happens spontaneously on attempt one, so the coach rewards stepwise closer versions.",
          "What is Skinner's term for reinforcing gradual steps toward a complex behaviour?",
        ],
        explanation:
          "**Shaping** builds complex novel behaviours by selectively reinforcing *successive approximations* closer to the final target performance while progressively raising the reward criterion.",
      },
      {
        id: "6-context-learning-cognition-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "conditioning-social-learning",
        question:
          "Why must IB psychologists exercise caution when citing Rizzolatti's macaque mirror-neuron discoveries as the complete explanation for human observational learning?",
        options: [
          "Macaques cannot perform motor movements when food is placed nearby",
          "Bandura proved human children never learn behaviours by watching models",
          "Single-cell primate findings cannot establish causality for complex human culture",
          "Human brains possess zero premotor or parietal cortical activation zones",
        ],
        answerIndex: 2,
        hints: [
          "Compare single-neuron electrodes in macaques with indirect fMRI voxels in humans.",
          "Consider FA2027 **Causality**, **Measurement**, and avoiding biological reductionism.",
        ],
        explanation:
          "Direct single-cell recordings were conducted in macaques for simple grasping actions; human evidence relies largely on correlational fMRI voxels. Equating mirror-neuron firing with complex human social learning ignores Bandura's cognitive **ARRM** processes and cultural context (**Perspective**).",
      },
      {
        id: "6-context-learning-cognition-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "A medical student stays awake all night before an anatomy exam after learning 120 new muscle names. Based on Diekelmann & Born's (2010) consolidation model, why will their one-week retention suffer compared with sleeping 8 hours?",
        options: [
          "Slow-wave sleep deprivation blocks hippocampal replay into neocortical schemas",
          "Sleep deprivation prevents visual cones from detecting printed anatomy terms",
          "Staying awake causes immediate retrograde erasure of childhood memories",
          "Awake studying automatically converts all semantic facts into motor reflexes",
        ],
        answerIndex: 0,
        hints: [
          "What happens to freshly formed hippocampal LTP traces during deep slow-wave sleep?",
          "Recall active systems consolidation.",
        ],
        explanation:
          "During **slow-wave sleep (SWS)**, active systems consolidation replays fragile hippocampal LTP traces so they stabilize inside durable neocortical networks. Skipping sleep truncates this biological consolidation window (**Change**).",
      },
      {
        id: "6-context-learning-cognition-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "A physics teacher replaces a silent wall of 200 printed words with a clean force diagram paired with concise spoken narration explaining each arrow. Which pair of cognitive principles explains why students learn faster?",
        options: [
          "Classical extinction and spontaneous recovery reducing study fatigue",
          "Weapon focus narrowing and own-race bias filtering irrelevant arrows",
          "Functional fixedness and mental set locking students into one formula",
          "Dual Coding and Cognitive Load reduction utilizing verbal and visual channels",
        ],
        answerIndex: 3,
        hints: [
          "Notice the teacher uses *spoken* narration (phonological loop) + *visual* diagram (visuospatial sketchpad) while stripping clutter.",
          "Connect Paivio's theory with Sweller's working-memory model.",
        ],
        explanation:
          "Pairing clean visuals with brief spoken narration harnesses **Paivio's Dual Coding** across separate visual and auditory working-memory channels while slashing split-attention **extraneous cognitive load** (Sweller), freeing capacity for germane schema building.",
      },
      {
        id: "6-context-learning-cognition-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "eyewitness-memory-reliability",
        question:
          "In a courtroom study, witnesses who heard *'Did you see **the** broken headlight?'* falsely reported a broken headlight at **36%**, whereas witnesses asked *'Did you see **a** broken headlight?'* falsely reported it at **12%**. What is the relative risk ratio of the presuppositional wording?",
        options: [
          "3.0 times more likely to report the nonexistent headlight",
          "2.4 times more likely to report the nonexistent headlight",
          "24.0 times more likely to report the nonexistent headlight",
          "0.33 times more likely to report the nonexistent headlight",
        ],
        answerIndex: 0,
        hints: [
          "Relative risk ratio = (rate in leading group) ÷ (rate in neutral/control group).",
          "Compute 36% divided by 12%.",
        ],
        explanation:
          "Relative risk = {{36 / 12 = 3.0}}. The definite article *'the'* presupposes the headlight existed (mirroring Loftus & Zanni, 1975), tripling false reports; 24 is the percentage-point difference rather than the ratio.",
      },
      {
        id: "6-context-learning-cognition-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "eyewitness-memory-reliability",
        question:
          "Why does asking an eyewitness to narrate a robbery **in reverse chronological order** during a Cognitive Interview reduce schema-based distortion?",
        options: [
          "It increases adrenaline enough to replay memories like a video camera",
          "It completely prevents the witness from mentioning any true details",
          "It disrupts forward event scripts that otherwise auto-fill missing gaps",
          "It guarantees 100% facial recognition accuracy across different races",
        ],
        answerIndex: 2,
        hints: [
          "Our robbery schema runs forward chronologically (enter → demand money → flee).",
          "What happens to script-driven guessing when you break chronological forward flow?",
        ],
        explanation:
          "Event schemas are organized forward in time; **reverse-order recall** disrupts automatic script-filling so witnesses must retrieve genuine episodic traces rather than plausible expectations.",
      },
      {
        id: "6-context-learning-cognition-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "eyewitness-memory-reliability",
        question:
          "To eliminate inadvertent officer hints during a police photo lineup (where an officer who knows the suspect might subtly smile or pause), which procedural safeguard embodies FA2027 **Responsibility**?",
        options: [
          "Showing only a single photo of the prime suspect to save witness effort",
          "Telling the witness 'Great job, you picked our guy!' right after choice",
          "Asking witnesses to guess quickly before they forget peripheral clothing",
          "Using a double-blind sequential lineup with neutral unbiased instructions",
        ],
        answerIndex: 3,
        hints: [
          "Think of how researchers prevent experimenter expectancy effects in psychological experiments.",
          "Neither the witness nor the lineup administrator should know which photo is the police suspect.",
        ],
        explanation:
          "A **double-blind sequential lineup** ensures the administering officer does not know which photograph is the suspect, eliminating subtle expectancy cues and post-identification confidence inflation.",
      },
      {
        id: "6-context-learning-cognition-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "During a 2-back task, participants see a stream of letters and press a key whenever the current letter matches the letter shown two steps earlier, continuously dropping older letters and tracking new ones. Which Miyake executive function is primarily tested?",
        options: [
          "Cognitive flexibility, switching between alternating sorting rules",
          "Working-memory updating, monitoring and refreshing active online items",
          "Inhibitory control, suppressing an automatic word-reading colour habit",
          "Conditioned discrimination, separating two closely spaced audio tones",
        ],
        answerIndex: 1,
        hints: [
          "Notice the task requires continuously discarding outdated items and replacing them with incoming letters.",
          "Match the n-back paradigm to Miyake et al.'s (2000) three components.",
        ],
        explanation:
          "The **n-back task** is the classic operational **Measurement** of **working-memory updating** — dynamically replacing obsolete information with newly relevant items in active storage.",
      },
      {
        id: "6-context-learning-cognition-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "How does chronic childhood poverty physiologically threaten prefrontal executive function according to an integrated Biological–Sociocultural **Perspective**?",
        options: [
          "Prolonged HPA-axis cortisol stress and poor nutrition impair PFC plasticity",
          "Poverty eliminates sensory receptors inside the visual and auditory cortices",
          "Low-income households never expose children to observational learning models",
          "Chronic stress permanently doubles working-memory capacity across childhood",
        ],
        answerIndex: 0,
        hints: [
          "Connect chronic environmental adversity to stress hormones (HPA axis) and brain regions governing executive control.",
          "Avoid extreme claims like 'never expose' or 'eliminates sensory receptors'.",
        ],
        explanation:
          "Chronic economic insecurity elevates prolonged **HPA-axis cortisol** and often coincides with micronutrient deficits (iron/iodine) and noise stress, dampening **prefrontal cortex** dendritic plasticity and executive function — pathways reversible through supportive intervention (**Change**).",
      },
      {
        id: "6-context-learning-cognition-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "When repairing a router, Technician A systematically checks every possible setting in an exhaustive 20-step checklist, whereas Technician B immediately reboots the device first because that usually fixes 80% of faults. What strategies are they using?",
        options: [
          "Technician A uses insight restructuring; Technician B uses classical conditioning",
          "Technician A uses functional fixedness; Technician B uses an algorithm",
          "Technician A uses an algorithm; Technician B uses a fast heuristic",
          "Technician A uses a heuristic; Technician B uses perseverative mental set",
        ],
        answerIndex: 2,
        hints: [
          "Which strategy guarantees finding the answer via exhaustive steps, and which is an efficient shortcut?",
          "Match Technician A first, then Technician B.",
        ],
        explanation:
          "Technician A follows an **algorithm** (exhaustive, guaranteed but slow), whereas Technician B applies a **heuristic** (fast rule of thumb that saves time and WM load, though not guaranteed to work every time).",
      },
      {
        id: "6-context-learning-cognition-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "In Roediger & Karpicke's (2006) testing-effect experiments, why did students who reread passages four times predict higher one-week recall than students who completed retrieval practice?",
        options: [
          "Rereading actually produced stronger one-week retention than free recall",
          "Easy fluent rereading created a metacognitive illusion of durable mastery",
          "Students in the testing group were told their scores would be lowered",
          "Passive rereading stimulated significantly greater NMDA calcium influx",
        ],
        answerIndex: 1,
        hints: [
          "How does effortless familiarity during study trick our metacognitive judgments?",
          "Compare short-term ease of processing with long-term retention.",
        ],
        explanation:
          "Repeated reading feels smooth and familiar in the moment, triggering a **metacognitive illusion of competence (Bias)** — misleading learners to undervalue effortful retrieval practice despite its massive one-week retention superiority.",
      },
      {
        id: "6-context-learning-cognition-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "conditioning-social-learning",
        question:
          "[HL] A mobile study app combines unpredictable mystery chests (VR schedule), streak-loss warnings, and social leaderboards. Which HL synthesis best evaluates its dual **Motivation** and **Responsibility** trade-off?",
        options: [
          "VR rewards maximize engagement while eliminating all risk of extrinsic crowding-out",
          "Streak-loss alerts act as positive reinforcement that permanently builds autonomy",
          "Social leaderboards guarantee uniform intrinsic curiosity across every culture",
          "VR contingencies boost tapping frequency yet risk compulsive habits and autonomy loss",
        ],
        answerIndex: 3,
        hints: [
          "Combine Skinnerian VR persistence with Self-Determination Theory (autonomy/overjustification) and tech ethics.",
          "Watch out for absolute words like 'eliminating all risk' or 'guarantee uniform'.",
        ],
        explanation:
          "Variable-ratio gamification drives high engagement frequency, but **HL Motivation & Technology** analysis warns that manipulative loss-aversion streaks and contingent rewards can crowd out intrinsic autonomy and encourage compulsive checking — requiring ethical design **Responsibility**.",
      },
      {
        id: "6-context-learning-cognition-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "problem-solving-environmental-cognition",
        question:
          "[HL] Why did Paap & Greenberg (2013) criticize relying on a single lab task (such as the Simon task alone) to claim bilinguals possess superior 'inhibitory control'?",
        options: [
          "Different EF tasks showed weak inter-correlations, revealing low convergent validity",
          "The Simon task requires spoken vocabulary rather than button-press reaction times",
          "Bilingual participants refused to complete reaction-time tasks in quiet labs",
          "Inhibitory control cannot be measured quantitatively in adult populations",
        ],
        answerIndex: 0,
        hints: [
          "If two tests (e.g., Simon and Flanker) both claim to measure the same construct ('inhibitory control'), what should their scores correlate like?",
          "Connect to the FA2027 Core Concept of **Measurement**.",
        ],
        explanation:
          "Paap & Greenberg (2013) found strikingly low correlations between supposedly equivalent inhibitory tasks (Simon, Flanker, Stroop), exposing **task impurity** and poor **convergent construct validity (Measurement)**.",
      },
      {
        id: "6-context-learning-cognition-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "neurobiology-memory-cognitive-load",
        question:
          "[HL] When applying findings from Bliss & Lømo's (1973) rabbit hippocampal LTP recordings to teenage IB revision classrooms, which two FA2027 Core Concepts are MOST central to critical evaluation?",
        options: [
          "Own-race bias and stereotype threat invalidating mammalian neuron anatomy",
          "Extraneous visual clutter and reverse-order questioning during surgery",
          "Causality/generalization limits across species and 3Rs animal-research Responsibility",
          "Publication bias and file-drawer effects hiding negative rabbit cell studies",
        ],
        answerIndex: 2,
        hints: [
          "Think about generalizing invasive animal-slice electrophysiology to complex human semantic studying.",
          "Which ethical framework governs animal experimentation in IB Psychology?",
        ],
        explanation:
          "Moving from anesthetized rabbit hippocampal slices to human academic learning requires evaluating cross-species generalization/**Causality** alongside **Responsibility** under the **3Rs** (Replacement, Reduction, Refinement) of animal ethics.",
      },
    ],
  },
];
