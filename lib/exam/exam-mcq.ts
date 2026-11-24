import type { ExamPaper } from "../types.ts";

const SVG_CONDITIONING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" role="img" aria-label="Line graph showing conditioned response strength across three sequential learning phases separated by a rest pause">
  <rect x="0" y="0" width="540" height="240" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="270" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Conditioned Response Strength Across Trials</text>
  <line x1="62" y1="196" x2="512" y2="196" stroke="#334155" stroke-width="1.6"/>
  <line x1="62" y1="42" x2="62" y2="196" stroke="#334155" stroke-width="1.6"/>
  <text x="22" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 22 122)">Response Strength</text>
  <text x="287" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Sequential Trials</text>
  <rect x="64" y="44" width="150" height="150" fill="#ede9fe" fill-opacity="0.45"/>
  <rect x="214" y="44" width="136" height="150" fill="#fef3c7" fill-opacity="0.45"/>
  <rect x="350" y="44" width="44" height="150" fill="#f1f5f9"/>
  <rect x="394" y="44" width="116" height="150" fill="#dcfce7" fill-opacity="0.45"/>
  <line x1="214" y1="44" x2="214" y2="196" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <line x1="350" y1="44" x2="350" y2="196" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <line x1="394" y1="44" x2="394" y2="196" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <text x="139" y="59" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6">Phase 1: CS + UCS</text>
  <text x="282" y="59" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e">Phase 2: CS Alone</text>
  <text x="372" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">24 h</text>
  <text x="372" y="133" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">Rest</text>
  <text x="452" y="59" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Phase 3: CS Alone</text>
  <path d="M 68 190 Q 115 95 210 74" fill="none" stroke="#6d28d9" stroke-width="3"/>
  <path d="M 218 76 Q 272 156 346 188" fill="none" stroke="#d97706" stroke-width="3"/>
  <path d="M 398 118 Q 438 164 502 188" fill="none" stroke="#15803d" stroke-width="3"/>
  <circle cx="398" cy="118" r="5" fill="#dc2626"/>
  <line x1="418" y1="96" x2="403" y2="112" stroke="#dc2626" stroke-width="1.6"/>
  <text x="422" y="93" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">Point X</text>
  <text x="54" y="192" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">0</text>
  <text x="54" y="80" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">High</text>
</svg>`;

const SVG_ERROR_BARS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" role="img" aria-label="Bar chart comparing mean recall scores with plus or minus one standard deviation error bars for two study conditions">
  <rect x="0" y="0" width="520" height="250" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="260" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Mean Recall Score (±1 SD) by Condition (n = 45 per group)</text>
  <line x1="76" y1="200" x2="478" y2="200" stroke="#334155" stroke-width="1.5"/>
  <line x1="76" y1="44" x2="76" y2="200" stroke="#334155" stroke-width="1.5"/>
  <line x1="76" y1="168" x2="478" y2="168" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="76" y1="136" x2="478" y2="136" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="76" y1="104" x2="478" y2="104" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="76" y1="72" x2="478" y2="72" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <text x="68" y="204" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">40</text>
  <text x="68" y="172" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">50</text>
  <text x="68" y="140" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">60</text>
  <text x="68" y="108" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">70</text>
  <text x="68" y="76" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">80</text>
  <text x="26" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 26 124)">Mean Score (out of 80)</text>
  <rect x="138" y="123.2" width="94" height="76.8" rx="4" fill="#7c3aed" fill-opacity="0.82"/>
  <line x1="185" y1="99.2" x2="185" y2="147.2" stroke="#0f172a" stroke-width="2"/>
  <line x1="175" y1="99.2" x2="195" y2="99.2" stroke="#0f172a" stroke-width="2"/>
  <line x1="175" y1="147.2" x2="195" y2="147.2" stroke="#0f172a" stroke-width="2"/>
  <text x="185" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">M = 64.0, SD = 7.5</text>
  <rect x="316" y="142.4" width="94" height="57.6" rx="4" fill="#0d9488" fill-opacity="0.82"/>
  <line x1="363" y1="118.4" x2="363" y2="166.4" stroke="#0f172a" stroke-width="2"/>
  <line x1="353" y1="118.4" x2="373" y2="118.4" stroke="#0f172a" stroke-width="2"/>
  <line x1="353" y1="166.4" x2="373" y2="166.4" stroke="#0f172a" stroke-width="2"/>
  <text x="363" y="109" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#115e59">M = 58.0, SD = 7.5</text>
  <text x="185" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">Paper Notes</text>
  <text x="363" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">Multitasking Laptop</text>
  <text x="260" y="238" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Note: Y-axis starts at 40; pooled SD = 7.5; two-tailed p = 0.0003</text>
</svg>`;

const SVG_SCATTER_OUTLIER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" role="img" aria-label="Scatterplot of daily social-media check-ins versus anxiety score with one extreme data point far from the main cluster">
  <rect x="0" y="0" width="520" height="250" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="260" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Pilot Sample (n = 7): Daily Social-Media Check-Ins vs Anxiety</text>
  <line x1="68" y1="202" x2="486" y2="202" stroke="#334155" stroke-width="1.5"/>
  <line x1="68" y1="42" x2="68" y2="202" stroke="#334155" stroke-width="1.5"/>
  <text x="277" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Daily Check-Ins: 12, 14, 15, 16, 18, 19, 46</text>
  <text x="24" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 24 122)">Anxiety Score (0–50)</text>
  <text x="96" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">10</text>
  <text x="190" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">20</text>
  <text x="284" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">30</text>
  <text x="378" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">40</text>
  <text x="472" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">50</text>
  <text x="60" y="182" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">10</text>
  <text x="60" y="142" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">20</text>
  <text x="60" y="102" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">30</text>
  <text x="60" y="62" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">40</text>
  <circle cx="115" cy="166" r="5" fill="#2563eb"/>
  <circle cx="134" cy="146" r="5" fill="#2563eb"/>
  <circle cx="143" cy="162" r="5" fill="#2563eb"/>
  <circle cx="152" cy="150" r="5" fill="#2563eb"/>
  <circle cx="171" cy="158" r="5" fill="#2563eb"/>
  <circle cx="181" cy="142" r="5" fill="#2563eb"/>
  <circle cx="434" cy="54" r="6" fill="#dc2626"/>
  <line x1="100" y1="170" x2="450" y2="54" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 4"/>
  <text x="424" y="76" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">Extreme point (46, 42)</text>
  <rect x="250" y="144" width="218" height="44" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="260" y="162" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">With extreme point: r = +0.94</text>
  <text x="260" y="179" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Without extreme point: r = +0.31</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-mcq",
  title: "Diagnostic MCQ Bank · All 8 Topics (SL & HL)",
  level: "SL",
  paperType: "Diagnostic MCQ Bank · All 8 Topics (SL & HL)",
  calculator: true,
  minutes: 35,
  questions: [
    // ======================== TOPIC 1 (SL: 3 Qs) ============================
    {
      id: "exam-mcq-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "six-core-concepts",
      commandTerm: "Identify",
      question: "A survey of 250 Year 12 students finds a strong positive correlation ({{r = +0.72}}) between nightly sleep duration and end-of-term exam average. Which evaluation best applies the Core Concept of **Causality**?",
      options: [
        "The large sample size confirms that extra sleep directly improves memory encoding across all subjects.",
        "The positive correlation demonstrates that self-report questionnaires lack inter-rater reliability.",
        "No independent variable was manipulated, so third variables or reverse directionality may explain the link.",
        "Converting sleep hours into categories would automatically establish a cause-and-effect relationship.",
      ],
      answerIndex: 2,
      hints: [
        "Ask whether the researchers actively manipulated sleep duration and randomly allocated students to conditions.",
        "Consider what other variables—such as lower anxiety, quieter homes, or better time management—could drive both sleep and grades.",
      ],
      explanation: "Correlational surveys measure naturally co-occurring variables without manipulating an IV or using random allocation, so **Causality** cannot be inferred: better time management (a third variable) or academic confidence reducing stress (bidirectional/reverse causality) could account for {{r = +0.72}}. Sample size increases precision but never turns correlation into causation.",
    },
    {
      id: "exam-mcq-q02",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "experiments-surveys",
      commandTerm: "Identify",
      question: "In a class practical experiment, every participant completes a memory recall task in a quiet room (Condition 1) and again with background speech (Condition 2). Why should the researcher apply **AB/BA counterbalancing**?",
      options: [
        "To balance practice, boredom, and fatigue order effects evenly across both experimental conditions.",
        "To eliminate participant variability by ensuring each condition contains different baseline memory abilities.",
        "To convert a quasi-experiment into a double-blind randomized controlled clinical trial.",
        "To guarantee that participants remain completely unaware of the study's true aim during testing.",
      ],
      answerIndex: 0,
      hints: [
        "In a repeated-measures design, every person does both conditions—so what happens simply because one condition comes second?",
        "Think about whether half doing 1→2 and half doing 2→1 removes individual differences or neutralises sequence effects.",
      ],
      explanation: "Because repeated-measures designs already hold individual differences constant, their primary internal-validity threat is **order effects** (practice improving or fatigue impairing the second trial). AB/BA counterbalancing distributes these sequence effects symmetrically across both conditions.",
    },
    {
      id: "exam-mcq-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "1-concepts-methodology",
      guideRef: "ethics-unseen-study-paper2",
      commandTerm: "Evaluate",
      question: "A student team plans a covert naturalistic observation of peer conflict inside a school's private counselling waiting area without telling students beforehand. Which evaluation best reflects the Core Concept of **Responsibility**?",
      options: [
        "Covert observation is always ethically permissible whenever participants are observed without physical intervention.",
        "Obtaining retroactive consent after recording removes all privacy and psychological-harm obligations.",
        "Using two trained observers for inter-observer agreement resolves all ethical concerns about secrecy.",
        "Observing covertly in a space where people reasonably expect privacy breaches informed consent and confidentiality.",
      ],
      answerIndex: 3,
      hints: [
        "Covert observation is only ethically acceptable in genuinely public spaces where people expect to be seen by strangers.",
        "Ask whether a counselling waiting area carries a reasonable expectation of privacy and vulnerability.",
      ],
      explanation: "Ethical **Responsibility** restricts covert observation to genuinely public settings where individuals expect to be visible. A counselling waiting room involves heightened vulnerability and a clear expectation of privacy, so covert recording violates informed consent, confidentiality, and protection from distress.",
    },

    // ======================== TOPIC 2 (SL: 3 Qs) ============================
    {
      id: "exam-mcq-q04",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "2-core-approaches",
      guideRef: "biological-approach",
      commandTerm: "Explain",
      question: "In Antonova et al.'s (2011) fMRI experiment, healthy males injected with **scopolamine** showed significantly lower hippocampal activation and worse spatial navigation in a virtual arena than placebo controls. What neurobiological mechanism does this demonstrate?",
      options: [
        "Scopolamine acted as a dopamine agonist that accelerated synaptic pruning in the motor cortex.",
        "Scopolamine acted as an acetylcholine receptor antagonist that disrupted hippocampal memory encoding.",
        "Scopolamine permanently destroyed hippocampal neurons through chronic cortisol elevation.",
        "Scopolamine selectively blocked serotonin reuptake to induce heightened emotional arousal.",
      ],
      answerIndex: 1,
      hints: [
        "Recall which neurotransmitter is central to memory encoding in the hippocampus and whether scopolamine mimics or blocks it.",
        "An antagonist binds to postsynaptic receptors and blocks the natural neurotransmitter from firing.",
      ],
      explanation: "Scopolamine is a temporary **acetylcholine (ACh) receptor antagonist**: by blocking ACh binding in the hippocampus, it reduced BOLD activation and impaired spatial-memory encoding relative to placebo, providing controlled experimental evidence for ACh's role in memory.",
    },
    {
      id: "exam-mcq-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "2-core-approaches",
      guideRef: "cognitive-memory-schemas",
      commandTerm: "Distinguish",
      question: "Participants can rehearse a 6-digit phone number aloud while simultaneously tracking a moving dot on a screen with little error, yet struggle severely when asked to track a dot while mentally rotating 3D shapes. How does this dual-task pattern support Baddeley and Hitch's **Working Memory Model** over the Multi-Store Model?",
      options: [
        "It shows that sensory memory decays slower for visual stimuli than for acoustic stimuli.",
        "It proves that long-term episodic schemas bypass short-term rehearsal during visual tasks.",
        "It indicates that all verbal and spatial tasks compete inside a single unitary short-term store.",
        "It reveals specialized, separable verbal and visuospatial subsystems with independent limited capacities.",
      ],
      answerIndex: 3,
      hints: [
        "Compare doing two tasks from DIFFERENT modalities versus two tasks from the SAME modality.",
        "If short-term memory were one single box, would pairing verbal + visual differ from pairing visual + visual?",
      ],
      explanation: "A single unitary STM store (Atkinson & Shiffrin) predicts equal interference whenever two tasks run concurrently. Minimal interference between verbal rehearsal (phonological loop) and dot tracking (visuospatial sketchpad), versus severe interference between two spatial tasks, demonstrates distinct limited-capacity slave systems.",
    },
    {
      id: "exam-mcq-q06",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      topicId: "2-core-approaches",
      guideRef: "sociocultural-approach",
      commandTerm: "Identify",
      question: "After relocating to Singapore for university, a student continues celebrating heritage family festivals at home while actively adopting local social customs and building friendships with host-culture peers. According to **Berry's acculturation framework**, which strategy is illustrated?",
      options: [
        "Assimilation, because heritage traditions are discarded in favour of host-culture norms.",
        "Separation, because heritage traditions are preserved while avoiding host-culture interaction.",
        "Integration, because both heritage cultural identity and host-culture participation are valued.",
        "Marginalization, because neither heritage customs nor host-culture relationships are maintained.",
      ],
      answerIndex: 2,
      hints: [
        "Check Berry's two independent dimensions: (1) retaining heritage culture = YES, (2) engaging with host culture = YES.",
        "Which of Berry's four cells combines YES on both dimensions?",
      ],
      explanation: "Berry defines **integration** as high heritage-culture maintenance combined with high participation in the host society—the strategy most consistently associated with lower acculturative stress and stronger psychological well-being.",
    },

    // ======================== TOPIC 3 (SL: 3 Qs) ============================
    {
      id: "exam-mcq-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "3-context-health-wellbeing",
      guideRef: "diagnosis-classification-bias",
      commandTerm: "Analyse",
      question: "In Rosenhan's (1973) hospital study, pseudopatients ceased reporting auditory hallucinations immediately after admission and behaved calmly, yet nurses recorded their everyday note-taking as 'engaging in writing behaviour' indicative of pathology. Which pair of concepts best accounts for this finding?",
      options: [
        "Genetic heritability and neurotransmitter receptor downregulation inside clinical settings.",
        "Confirmation bias and psychiatric labelling distorting clinicians' interpretation of normal behaviour.",
        "High inter-rater diagnostic validity paired with objective biomarker cross-checking.",
        "Participant demand characteristics caused by pseudopatients deliberately exaggerating distress.",
      ],
      answerIndex: 1,
      hints: [
        "Once a diagnostic label was attached, how did staff filter ambiguous or ordinary actions?",
        "Link the hospital staff's expectations to one of the FA2027 Core Concepts.",
      ],
      explanation: "Once pseudopatients received a schizophrenia label, staff displayed **confirmation bias**: ambiguous or completely ordinary actions (note-taking) were interpreted as evidence confirming the diagnostic label, exposing threats to diagnostic validity (**Measurement** and **Bias**).",
    },
    {
      id: "exam-mcq-q08",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "3-context-health-wellbeing",
      guideRef: "aetiology-mental-health",
      commandTerm: "Explain",
      question: "Caspi et al. (2003) followed 847 New Zealanders longitudinally and found that individuals carrying one or two short alleles of the serotonin transporter gene (`5-HTT`) had markedly higher depression rates **only** when they also experienced severe stressful life events. What does this illustrate about **Causality** in mental health?",
      options: [
        "A diathesis–stress gene-by-environment interaction rather than direct genetic determinism.",
        "Evidence that inheriting the short `5-HTT` allele inevitably causes clinical depression regardless of environment.",
        "Proof that cognitive distortions alone account for major depressive episodes without biological input.",
        "Experimental proof from random genetic assignment that cortisol directly alters serotonin genes.",
      ],
      answerIndex: 0,
      hints: [
        "Notice the word 'only'—did carrying the short allele raise depression rates in low-stress environments?",
        "Connect vulnerability (diathesis) plus environmental trigger (stress).",
      ],
      explanation: "Caspi et al. demonstrated a classic **diathesis–stress (G × E) interaction**: genetic vulnerability (`5-HTT` short allele) increased depressive risk specifically in combination with severe environmental stress, countering purely biological determinism while remaining correlational rather than experimentally manipulated.",
    },
    {
      id: "exam-mcq-q09",
      kind: "mcq",
      difficulty: "challenge",
      level: "SL",
      topicId: "3-context-health-wellbeing",
      guideRef: "treatments-interventions",
      commandTerm: "Evaluate",
      question: "Clinical trials comparing **Selective Serotonin Reuptake Inhibitors (SSRIs)** with **Cognitive Behavioural Therapy (CBT)** for moderate depression frequently find comparable short-term symptom relief, yet lower 12-month relapse rates after CBT ends. Which explanation best links this pattern to the Core Concept of **Change**?",
      options: [
        "SSRIs permanently rewire maladaptive cognitive schemas within two weeks of starting treatment.",
        "CBT operates solely through placebo expectancy because clients know which therapist they visit.",
        "SSRIs prevent relapse indefinitely even after discontinuation by eliminating environmental stressors.",
        "CBT equips clients with enduring cognitive-restructuring and coping skills that persist after sessions cease.",
      ],
      answerIndex: 3,
      hints: [
        "What happens when someone stops taking a medication versus when someone finishes a course of CBT?",
        "Think about active skill acquisition versus ongoing neurochemical modulation.",
      ],
      explanation: "While SSRIs modulate synaptic serotonin only while taken (and Kirsch's meta-analysis showed modest drug–placebo differences in mild-to-moderate cases), CBT targets enduring cognitive distortions and behavioural activation, promoting transferable self-regulation skills and longer-term **Change** after therapy concludes.",
    },

    // ======================== TOPIC 4 (SL: 3 Qs) ============================
    {
      id: "exam-mcq-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "4-context-human-development",
      guideRef: "brain-maturation-cognitive-dev",
      commandTerm: "Explain",
      question: "Neuroimaging research by Casey and Steinberg explains elevated adolescent risk-taking—especially in the presence of peers—primarily through which neurodevelopmental pattern?",
      options: [
        "A temporal mismatch between rapidly maturing limbic reward circuitry and slower-maturing prefrontal control.",
        "Complete synaptic pruning of the amygdala before age ten paired with overactive prefrontal inhibition.",
        "Absence of myelin around sensory neurons preventing teenagers from perceiving physical danger.",
        "Permanent loss of hippocampal neuroplasticity immediately following the onset of puberty.",
      ],
      answerIndex: 0,
      hints: [
        "Compare the maturation timeline of subcortical reward systems (ventral striatum/limbic) with the prefrontal cortex.",
        "Why do teens often know a risk logically in a quiet lab yet take it anyway with peers watching?",
      ],
      explanation: "The dual-systems neurodevelopmental model shows that subcortical reward/emotion regions (limbic/ventral striatum) sensitise rapidly in early adolescence, whereas prefrontal cortex networks governing impulse control mature into the mid-20s, creating heightened sensitivity to peer-amplified rewards.",
    },
    {
      id: "exam-mcq-q11",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "4-context-human-development",
      guideRef: "attachment-caregiving-culture",
      commandTerm: "Evaluate",
      question: "In van IJzendoorn and Kroonenberg's (1988) meta-analysis of 32 Strange Situation studies across 8 countries, **intra-cultural variation was 1.5 times greater than inter-cultural variation**, while German samples showed higher 'avoidant' rates and Japanese samples showed higher 'resistant' rates. Which critique best applies **Perspective** and **Measurement**?",
      options: [
        "Secure attachment appeared exclusively in Western countries, disproving Bowlby's universal hypothesis.",
        "Higher German 'avoidant' rates proved that German caregivers systematically neglected their infants.",
        "Applying a Western separation protocol across cultures risks mislabelling culturally valued caregiving norms.",
        "The meta-analysis demonstrated that Bowlby's Internal Working Model depends solely on infant temperament.",
      ],
      answerIndex: 2,
      hints: [
        "How did German norms encouraging early independence—or Japanese norms of rare maternal separation—interact with Ainsworth's Western scoring rubric?",
        "Recall that secure attachment was still the modal pattern across every country studied.",
      ],
      explanation: "Although secure attachment was the most common classification worldwide, imposing an American Strange Situation protocol across cultures creates **Measurement** bias: German infants encouraged toward independent play appeared 'avoidant', while Japanese infants rarely left alone were acutely distressed and scored 'resistant'.",
    },
    {
      id: "exam-mcq-q12",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      topicId: "4-context-human-development",
      guideRef: "developmental-methods-ethics",
      commandTerm: "Distinguish",
      question: "A developmental psychologist compares executive-function scores of a group of 10-year-olds and a separate group of 20-year-olds tested on the same day. Compared with a longitudinal study, what is the primary methodological limitation of this **cross-sectional** design?",
      options: [
        "Selective participant attrition across decades reduces the sample to unrepresentative survivors.",
        "Age differences are confounded with cohort effects arising from distinct generational environments.",
        "Repeated administration of identical cognitive tests produces practice effects over time.",
        "Tracking the same cohort requires excessive funding and delays publication for many years.",
      ],
      answerIndex: 1,
      hints: [
        "Did the 10-year-olds and 20-year-olds grow up with the exact same schooling, smartphones, and historical experiences?",
        "Eliminate limitations that actually belong to longitudinal designs (attrition, practice effects, high cost).",
      ],
      explanation: "Cross-sectional designs test different age groups at a single point in time, avoiding attrition and practice effects, but they cannot separate true developmental **Change** from **cohort effects** (generational differences in technology, curriculum, or nutrition).",
    },

    // ======================== TOPIC 5 (SL: 2 Qs) ============================
    {
      id: "exam-mcq-q13",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "5-context-human-relationships",
      guideRef: "maintenance-communication-breakdown",
      commandTerm: "Apply",
      question: "Maya reports low emotional satisfaction in her five-year relationship, yet decides not to leave because she and her partner share a mortgage, close family ties, and she perceives few appealing romantic alternatives. Which model specifically explains her continued commitment?",
      options: [
        "Wedekind's MHC genetic-compatibility model of olfactory attraction.",
        "Gottman's Four Horsemen observational model of hostile marital communication.",
        "Festinger's proximity and mere-exposure model of initial acquaintance formation.",
        "Rusbult's Investment Model linking commitment to satisfaction, alternatives, and sunk investments.",
      ],
      answerIndex: 3,
      hints: [
        "Notice the three exact predictors in the vignette: low satisfaction, poor perceived alternatives, and high shared investments.",
        "Which relationship-maintenance model explicitly predicts commitment even when satisfaction drops?",
      ],
      explanation: "Rusbult's **Investment Model** posits that commitment rises with satisfaction and **investment size** (shared finances, time, social networks) and falls with **quality of alternatives**, explaining why partners may stay committed despite declining satisfaction.",
    },
    {
      id: "exam-mcq-q14",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "5-context-human-relationships",
      guideRef: "prejudice-stereotyping-conflict",
      commandTerm: "Apply",
      question: "In Sherif's Robbers Cave field experiment, bringing the rival Rattlers and Eagles together for pleasant shared meals initially failed to reduce hostility—and even triggered food fights—until researchers engineered a broken camp water supply requiring both groups' combined effort. What principle did this illustrate?",
      options: [
        "Implicit stereotype threat automatically fades whenever rival groups occupy the same room.",
        "Illusory correlation disappears immediately once group members share positive leisure activities.",
        "Intergroup prejudice declines effectively when equal-status groups cooperate toward superordinate goals.",
        "Realistic conflict increases whenever out-group members receive shared institutional authority.",
      ],
      answerIndex: 2,
      hints: [
        "What changed between passive contact at meals and fixing the camp water tank together?",
        "Connect Sherif's intervention to Allport's Contact Hypothesis.",
      ],
      explanation: "Mere contact between rival groups often reinforces existing antagonism. Only interdependent cooperation toward **superordinate goals**—shared aims achievable only by working together, supported by equal status and institutional norms (Allport)—reliably reduced intergroup hostility.",
    },

    // ======================== TOPIC 6 (SL: 3 Qs) ============================
    {
      id: "exam-mcq-q15",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "6-context-learning-cognition",
      guideRef: "conditioning-social-learning",
      commandTerm: "Analyse",
      diagram: SVG_CONDITIONING,
      question: "The graph shows conditioned response strength during acquisition (CS + UCS), extinction (CS alone), a 24-hour rest pause, and renewed CS-alone trials. What phenomenon occurs at **Point X**, and what does it reveal about extinction?",
      options: [
        "Spontaneous recovery, showing that extinction inhibits rather than permanently erases the learned association.",
        "Stimulus generalization, showing that similar neutral cues trigger an unconditioned reflex automatically.",
        "Operant shaping, showing that variable-ratio reinforcement permanently prevents behavioural decline.",
        "Biological preparedness, showing that evolutionary taste aversions require only a single pairing.",
      ],
      answerIndex: 0,
      hints: [
        "Notice that no UCS was reintroduced during the 24-hour rest pause, yet the conditioned response suddenly re-emerged when the CS returned.",
        "If extinction had completely wiped out the CS–UCS memory trace, could the response return on its own?",
      ],
      explanation: "The sudden reappearance of a weakened conditioned response after a rest interval without any new CS–UCS pairings is **spontaneous recovery**. It proves extinction is new inhibitory learning rather than permanent erasure of the original association.",
    },
    {
      id: "exam-mcq-q16",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "6-context-learning-cognition",
      guideRef: "neurobiology-memory-cognitive-load",
      commandTerm: "Explain",
      question: "In Roediger and Karpicke's (2006) experiment, students who repeatedly reread a prose passage slightly outperformed a retrieval-practice group on a 5-minute immediate test, but forgot far more after a 1-week delay. What does this **testing effect** imply for learning?",
      options: [
        "Rereading maximizes long-term consolidation because fluency during study guarantees durable retention.",
        "Active retrieval strengthens memory traces and slows forgetting even though rereading feels easier initially.",
        "Working-memory extraneous load prevents spaced retrieval from forming long-term conceptual schemas.",
        "Passive exposure activates long-term potentiation more effectively than effortful recall over long intervals.",
      ],
      answerIndex: 1,
      hints: [
        "Compare the immediate test (5 minutes) with the delayed test (1 week)—which group retained more?",
        "Why does feeling fluent while rereading often mislead learners about durable retention?",
      ],
      explanation: "Roediger and Karpicke demonstrated that effortful **retrieval practice** produces markedly superior long-term retention (1-week delay) compared with repeated rereading, even though rereading creates a misleading short-term illusion of competence.",
    },
    {
      id: "exam-mcq-q17",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "6-context-learning-cognition",
      guideRef: "eyewitness-memory-reliability",
      commandTerm: "Evaluate",
      question: "In Loftus and Palmer's (1974) second experiment, participants asked how fast cars were travelling when they **'smashed'** into each other were far more likely one week later to falsely report seeing broken glass in the video than those asked with the verb **'hit'**. What cognitive explanation best accounts for this result?",
      options: [
        "Demand characteristics forced participants to lie deliberately despite remembering the video accurately.",
        "Weapon focus narrowed visual attention onto the car bumpers during initial sensory encoding.",
        "Decay of the phonological loop erased visual scenes within thirty seconds of watching the clip.",
        "Post-event verb schemas blended into the original memory trace, reconstructing a distorted recollection.",
      ],
      answerIndex: 3,
      hints: [
        "Why did the false glass report happen a full WEEK later, not just when estimating speed right after the film?",
        "Think about how the verb 'smashed' activates a severe-crash schema that integrates with memory.",
      ],
      explanation: "Experiment 2 ruled out simple response bias alone: the intense verb 'smashed' activated a severe-accident schema that merged with the original episodic trace during consolidation, causing genuine **reconstructive memory distortion** one week later.",
    },

    // ======================== TOPIC 7 (HL: 4 Qs) ============================
    {
      id: "exam-mcq-q18",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-culture-emic-etic",
      commandTerm: "Distinguish",
      question: "A cross-cultural team translates an American self-esteem questionnaire word-for-word into Mandarin and administers it in rural China without checking whether local participants conceptualize self-worth through relational harmony rather than personal uniqueness. Which methodological error is illustrated?",
      options: [
        "An imposed-etic approach that assumes Western construct equivalence across distinct cultural meanings.",
        "An emic ethnography that prioritizes local insider categories over cross-national statistical comparison.",
        "Qualitative member checking that verifies conceptual accuracy directly with bilingual participants.",
        "Bicultural frame-switching in which respondents alternate fluidly between two internalized value systems.",
      ],
      answerIndex: 0,
      hints: [
        "Distinguish insider-derived constructs (emic) from outsider constructs assumed to be universal (etic).",
        "When an outsider measure is exported without testing local construct validity, what is it called?",
      ],
      explanation: "Exporting a construct developed in one (WEIRD) culture and treating it as universal without checking local conceptual equivalence is an **imposed-etic** approach—threatening construct validity (**Measurement**) and cultural **Perspective**.",
    },
    {
      id: "exam-mcq-q19",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-motivation-reward-sdt",
      commandTerm: "Explain",
      question: "In Lepper et al.'s (1973) study, preschoolers who already loved drawing spent **less** free-play time drawing one week after being promised an expected 'Good Player' certificate than children who received no reward or an unexpected reward. How does **Self-Determination Theory** explain this overjustification effect?",
      options: [
        "Tangible rewards depleted mesolimbic dopamine stores permanently after a single drawing session.",
        "Unexpected rewards increased extrinsic competition and triggered severe performance anxiety.",
        "Expected controlling rewards shifted perceived causality externally, undermining feelings of autonomy.",
        "Unrewarded children displayed higher intrinsic motivation only because they misunderstood task instructions.",
      ],
      answerIndex: 2,
      hints: [
        "Recall the three basic psychological needs in Deci and Ryan's Self-Determination Theory: autonomy, competence, relatedness.",
        "Why did EXPECTED rewards crowd out intrinsic interest whereas UNEXPECTED rewards did not?",
      ],
      explanation: "Under Deci and Ryan's **Self-Determination Theory**, expected contingent rewards are experienced as externally controlling, shifting perceived locus of causality from internal enjoyment to earning the prize—which thwarts **autonomy** and crowds out intrinsic motivation.",
    },
    {
      id: "exam-mcq-q20",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-technology-cognition-social",
      commandTerm: "Explain",
      question: "Ward et al. (2017) found that university students whose silenced smartphones sat face-down on their desks performed significantly worse on working-memory capacity tasks than peers whose phones were left in another room—even though nobody checked their phone. What mechanism explains this **'brain drain'** effect?",
      options: [
        "Low-level electromagnetic fields from silenced devices directly inhibited hippocampal neurogenesis.",
        "Participants deliberately typed search queries during working-memory trials to offload answers.",
        "Silenced phones eliminated transactive memory schemas by blocking access to cloud storage.",
        "Actively suppressing the urge to check a salient personal device consumes finite attentional resources.",
      ],
      answerIndex: 3,
      hints: [
        "Notice that no notifications sounded and nobody touched the phone—yet the desk group performed worse than the other-room group.",
        "What does the brain's executive attention have to keep doing when a personally high-value cue sits right beside you?",
      ],
      explanation: "Because a personal smartphone is a highly salient cue for social reward, merely keeping it within reach forces the central executive to expend limited **attentional control** inhibiting automatic checking urges, reducing working-memory capacity available for the task.",
    },
    {
      id: "exam-mcq-q21",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-synthesizing-extensions",
      commandTerm: "Analyse",
      question: "Orben and Przybylski's (2019) large-scale specification-curve analysis of over 350,000 adolescents found that digital technology use accounted for roughly **0.4%** of variance in well-being—smaller than wearing glasses or eating potatoes. What nuanced conclusion should HL Psychology students draw?",
      options: [
        "Digital technology has zero psychological impact on any individual adolescent under any circumstance.",
        "Average population associations are tiny, so research must examine specific uses, vulnerabilities, and contexts.",
        "Small effect sizes in samples exceeding 100,000 automatically imply severe p-hacking and fabrication.",
        "Self-reported screen duration provides a causal gold standard superior to longitudinal experience sampling.",
      ],
      answerIndex: 1,
      hints: [
        "Avoid extreme all-or-nothing conclusions: why might an average across all teens hide meaningful differences between passive doomscrolling vs supportive messaging?",
        "Distinguish tiny population-average variance explained from subgroup/contextual mechanisms.",
      ],
      explanation: "Orben and Przybylski showed that broad 'screen time' has a very small average association with adolescent well-being, demonstrating why **Measurement** and **Perspective** matter: researchers must differentiate *how* tech is used (e.g., passive comparison vs active connection) and for *whom*, rather than asserting universal harm or zero effect.",
    },

    // ======================== TOPIC 8 (HL: 4 Qs) ============================
    {
      id: "exam-mcq-q22",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "quantitative-descriptive-visual",
      commandTerm: "Calculate",
      diagram: SVG_ERROR_BARS,
      question: "Using the bar chart comparing Paper Notes ({{M = 64.0}}, {{SD = 7.5}}) and Multitasking Laptop ({{M = 58.0}}, {{SD = 7.5}}), what is **Cohen's {{d}}** for the difference between conditions, and what caution applies when visually reading the graph?",
      options: [
        "Cohen's d = 0.80 (large effect); the truncated y-axis starting at 40 exaggerates the visual bar-height gap.",
        "Cohen's d = 0.40 (small effect); identical standard deviations indicate zero variability within either group.",
        "Cohen's d = 6.00 (large effect); overlapping ±1 SD error bars prove the difference is non-significant.",
        "Cohen's d = 0.80 (large effect); starting the y-axis at 40 artificially increases the calculated p-value.",
      ],
      answerIndex: 0,
      hints: [
        "Use Cohen's formula: d = (M₁ − M₂) / SD_pooled = (64.0 − 58.0) / 7.5.",
        "Look closely at the bottom of the vertical axis—does it begin at 0 or at 40?",
      ],
      explanation: "Calculating {{d = (64.0 - 58.0)/7.5 = 6.0/7.5 = 0.80}} yields a **large** standardized effect size (and {{p = 0.0003}} is highly significant). Visually, however, truncating the y-axis at 40 exaggerates the apparent proportional height difference between the bars—a classic HL Paper 3 graphical critique.",
    },
    {
      id: "exam-mcq-q23",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "quantitative-descriptive-visual",
      commandTerm: "Analyse",
      diagram: SVG_SCATTER_OUTLIER,
      question: "A pilot dataset of 7 students' daily social-media check-ins is `12, 14, 15, 16, 18, 19, 46` (plotted above against anxiety score). Which statistical interpretation is most accurate?",
      options: [
        "The mean (16) is lower than the median (20), showing that the extreme score pulled the median upward.",
        "Pearson's r (+0.94) is robust against outliers, so the linear trend reflects the typical cluster accurately.",
        "The extreme point inflates both the mean (20 vs median 16) and Pearson's r (+0.94 vs +0.31 without it).",
        "Removing the extreme point increases the range and raises the correlation strength across the remaining six scores.",
      ],
      answerIndex: 2,
      hints: [
        "Check the sum of the 7 check-in values: 12 + 14 + 15 + 16 + 18 + 19 + 46 = 140; divide by 7 for the mean, and find the 4th ordered value for the median.",
        "Compare the two r-values printed in the scatterplot box with and without the extreme point (46, 42).",
      ],
      explanation: "The sum is {{140}}, giving a **mean** of {{140/7 = 20}}, whereas the middle value (**median**) is {{16}}. Both the arithmetic mean and Pearson's {{r}} are highly sensitive to extreme outliers: one point (46, 42) inflated {{r}} from {{+0.31}} to {{+0.94}}, so the median and a rank-order correlation (Spearman's ρ) are far more appropriate.",
    },
    {
      id: "exam-mcq-q24",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "inferential-pvalues-effect-size",
      commandTerm: "Define",
      question: "An HL Paper 3 quantitative source reports that a cross-cultural difference in intrinsic motivation yielded **{{p = 0.02}}** (two-tailed, {{α = 0.05}}). Which statement gives the **statistically accurate** interpretation of {{p = 0.02}}?",
      options: [
        "There is a 98% probability that the researchers' alternative hypothesis is definitively proven true.",
        "Assuming the null hypothesis is true, there is a 2% probability of obtaining data at least this extreme.",
        "Exactly 2% of participants in the two cultural samples failed to respond to the experimental manipulation.",
        "The standardized practical effect size between the two cultural groups is guaranteed to be large.",
      ],
      answerIndex: 1,
      hints: [
        "A p-value is ALWAYS a conditional probability calculated assuming the null hypothesis (H₀: no real difference) holds.",
        "Eliminate misconceptions that equate p with the probability H₀ is true, the percent of participants, or effect size.",
      ],
      explanation: "A **p-value** is the probability of observing a test statistic at least as extreme as the sample result **if the null hypothesis ({{H_0}}) were true**. Because {{0.02 < 0.05}}, researchers reject {{H_0}}, but {{p}} neither gives the probability {{H_1}} is true nor measures practical effect size.",
    },
    {
      id: "exam-mcq-q25",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "qualitative-coding-trustworthiness",
      commandTerm: "Distinguish",
      question: "During thematic analysis of interviews on adolescent gaming motivation, an HL researcher maintains a **reflexive journal** documenting how their own age, cultural background, and prior scepticism toward gaming might shape follow-up probes and coding choices. Which qualitative trustworthiness criterion does this primarily strengthen?",
      options: [
        "Transferability, by ensuring statistical generalization from a random sample to every global population.",
        "Inter-observer agreement, by converting interview transcripts into closed-ended Likert scores.",
        "Ecological validity, by concealing the researcher's identity during covert online observation.",
        "Confirmability, by making researcher subjectivity transparent and reducing unexamined interpretive bias.",
      ],
      answerIndex: 3,
      hints: [
        "Match Lincoln & Guba's four trustworthiness criteria: credibility (member checking/triangulation), transferability (thick description), dependability (audit trail), confirmability (reflexivity).",
        "What does documenting personal and epistemological assumptions directly protect against?",
      ],
      explanation: "Personal and epistemological **reflexivity** directly supports **confirmability**—helping ensure findings are grounded in participants' voices rather than unexamined researcher assumptions (**Bias**). Member checking primarily serves credibility, while thick description supports transferability.",
    },
  ],
};
