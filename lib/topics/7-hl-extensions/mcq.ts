import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "7-hl-extensions-m1",
    title: "MCQ Paper 1 · Culture, Emic–Etic Lenses & Globalization (HL)",
    level: "HL",
    questions: [
      {
        id: "7-hl-extensions-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Distinguish",
        guideRef: "hl-culture-emic-etic",
        strategy: "Emic vs Etic lens check",
        question:
          "A clinical psychologist lives in a rural highland community for two years to document how local residents conceptualize and name somatic grief reactions in their own language before creating any assessment guide. Which research tradition does this approach exemplify?",
        options: [
          "An imposed-etic approach exporting standardized Western diagnostic criteria",
          "A quasi-experimental approach testing universal neural correlates of mood",
          "An emic approach examining behaviour through local insider meanings",
          "A derived-etic approach averaging national scores across thirty countries",
        ],
        answerIndex: 2,
        hints: [
          "Notice the researcher starts from inside a single cultural system using local language rather than importing an external checklist.",
        ],
        explanation:
          "An **emic** approach investigates psychological phenomena from *within* one culture using indigenous concepts and terminology. An imposed etic would import a foreign diagnostic tool unchanged, while a derived etic only emerges after integrating multiple emic studies across cultures.",
      },
      {
        id: "7-hl-extensions-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "hl-culture-emic-etic",
        strategy: "WEIRD benchmark recall (Henrich et al., 2010)",
        question:
          "In Henrich, Heine, and Norenzayan's (2010) landmark audit of top behavioural science journals, approximately what proportion of world population vs research participants came from WEIRD societies?",
        options: [
          "About 12% of the world population, yet roughly 96% of study participants",
          "About 48% of the world population, yet roughly 62% of study participants",
          "About 25% of the world population, yet roughly 50% of study participants",
          "About 5% of the world population, yet roughly 38% of study participants",
        ],
        answerIndex: 0,
        hints: [
          "Henrich et al. (2010) showed an roughly eightfold over-representation of WEIRD samples.",
        ],
        explanation:
          "Henrich et al. (2010) reported that WEIRD (Western, Educated, Industrialized, Rich, Democratic) populations represent only about **12%** of humanity yet supply roughly **96%** of samples in top psychology journals (with ~68% from the United States alone), creating an **8×** over-representation.",
      },
      {
        id: "7-hl-extensions-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Apply",
        guideRef: "hl-culture-emic-etic",
        strategy: "Berry's Imposed Etic vs Derived Etic",
        question:
          "Psychologists translate a North American assertiveness scale directly into Japanese without modifying items that equate contradicting a supervisor aloud with high self-esteem, then conclude Japanese workers have 'low self-esteem'. Which methodological error best characterizes this design?",
        options: [
          "Demand-characteristic bias triggered by single-blind allocation",
          "Attrition bias caused by longitudinal participant drop-out",
          "Derived-etic synthesis grounded in culturally equivalent idioms",
          "Imposed-etic bias undermining cross-cultural construct validity",
        ],
        answerIndex: 3,
        hints: [
          "Ask whether the scale was built locally or exported unchanged from one culture to another.",
          "In Berry's framework, treating one culture's construct operationalization as universal without adaptation has a specific name.",
        ],
        explanation:
          "Exporting a North American scale unchanged into a higher power-distance or harmony-valuing cultural context is a textbook **imposed etic**. It threatens **construct validity** (**Measurement** & **Bias**) because silence toward a supervisor may signal respect rather than low self-esteem.",
      },
      {
        id: "7-hl-extensions-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-culture-emic-etic",
        strategy: "Cultural neuroscience (Zhu et al., 2007)",
        question:
          "In Zhu et al.'s (2007) fMRI study of self-referential trait judgements, what neural pattern differentiated Chinese participants from Western participants?",
        options: [
          "Western participants showed zero amygdala activation during self-judgements",
          "Chinese participants activated the mPFC comparably for both self and mother",
          "Chinese participants activated the occipital lobe instead of prefrontal areas",
          "Western participants activated the mPFC identically for self and public figures",
        ],
        answerIndex: 1,
        hints: [
          "Focus on the medial prefrontal cortex (mPFC), a hub for self-referential representation.",
          "Think about how interdependent vs independent self-construal maps close family members onto the neural self.",
        ],
        explanation:
          "Zhu et al. (2007) found that Western participants recruited the **medial prefrontal cortex (mPFC)** distinctively for *self* judgements, whereas Chinese participants showed overlapping mPFC activation for **both self and mother**, demonstrating that cultural norms shape neural representation through **Change** (neuroplasticity).",
      },
      {
        id: "7-hl-extensions-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "hl-culture-emic-etic",
        strategy: "Ecological fallacy check",
        question:
          "A corporate trainer reads that Nation Y has a Hofstede Power Distance score of 80/100 and therefore forbids a junior engineer from Nation Y from speaking openly during brainstorming, assuming she prefers strict hierarchy. Which logical error is the trainer committing?",
        options: [
          "Confirmation bias caused by selective memory of past meetings",
          "Illusory correlation linking two statistically rare workplace events",
          "The ecological fallacy of applying a national mean to an individual",
          "The overjustification effect of replacing praise with strict rules",
        ],
        answerIndex: 2,
        hints: [
          "Hofstede's cultural dimensions measure aggregate country-level averages.",
          "What is the error of projecting a group-level statistical average directly onto one specific member of that group?",
        ],
        explanation:
          "Assuming a country-level dimension score describes every individual citizen commits the **ecological fallacy**. Within-country variance often exceeds between-country variance, so national averages cannot predict a single person's preferences.",
      },
      {
        id: "7-hl-extensions-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "hl-culture-emic-etic",
        strategy: "Bicultural frame-switching (Hong et al., 2000)",
        question:
          "In Hong et al. (2000), Chinese-American bicultural participants viewed either Chinese cultural icons or American cultural icons before interpreting an animation of one fish swimming ahead of a group. What did this experiment demonstrate?",
        options: [
          "Cultural values become permanently fixed after early childhood enculturation",
          "Cultural priming shifts attributions dynamically between situational and dispositional frames",
          "Bicultural individuals always average Western and Eastern norms into a static midpoint",
          "Visual perception of fish motion depends solely on carpentered urban environments",
        ],
        answerIndex: 1,
        hints: [
          "Recall how American primes vs Chinese primes affected whether participants saw the lone fish as 'leading' or 'being chased'.",
          "Consider what experimental priming proves about whether culture is static or situationally activated.",
        ],
        explanation:
          "Hong et al. (2000) demonstrated **bicultural frame-switching**: American icons elicited more internal/dispositional attributions (the fish is leading), whereas Chinese icons elicited more external/situational attributions (the fish is being chased), showing culture operates as dynamic, accessible cognitive schemas.",
      },
      {
        id: "7-hl-extensions-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "hl-culture-emic-etic",
        strategy: "WEIRD percentage & over-representation math",
        question:
          "A psychology review synthesizes 200 participants across four trials: 180 are university students in the UK and USA, and 20 are adults in Kenya. Relative to the 12% global WEIRD population share, what is the WEIRD over-representation factor in this review?",
        options: [
          "7.5× over-represented (90% WEIRD sample divided by 12%)",
          "9.0× over-represented (180 participants divided by 20)",
          "1.5× over-represented (18% sample gap divided by 12%)",
          "15.0× over-represented (180 WEIRD students divided by 12)",
        ],
        answerIndex: 0,
        hints: [
          "First convert 180 out of 200 into a percentage of the sample.",
          "Next divide that WEIRD sample percentage by the 12% global WEIRD population share.",
        ],
        explanation:
          "WEIRD sample share = {{(180 / 200) * 100 = 90%}}. Dividing by the 12% global population share gives {{90 / 12 = 7.5}}, so WEIRD participants are over-represented by **7.5×**. Dividing 180 by 20 gives the ratio of WEIRD to non-WEIRD participants in the sample, not the over-representation relative to global population.",
      },
      {
        id: "7-hl-extensions-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "hl-culture-emic-etic",
        strategy: "Reference-group effect in Measurement",
        question:
          "Heine et al. (2002) observed that Japanese and North American students rated themselves unexpectedly similarly on self-report collectivism Likert scales, even though behavioural observations showed clear differences. Which **Measurement** artefact best explains this paradox?",
        options: [
          "Practice effects from completing the same behavioural test twice",
          "Observer expectancy bias contaminating qualitative field notes",
          "Floor effects caused by using a seven-point numerical rating scale",
          "The reference-group effect of judging oneself against local cultural peers",
        ],
        answerIndex: 3,
        hints: [
          "When someone answers 'I am very conscientious' on a 1–7 scale, who are they mentally comparing themselves to?",
          "Local peer standards shift the subjective anchor point of Likert ratings across cultures.",
        ],
        explanation:
          "Under the **reference-group effect** (Heine et al., 2002), respondents judge traits relative to norms within their *own* cultural group rather than a global benchmark, distorting direct cross-cultural comparisons of Likert means.",
      },
      {
        id: "7-hl-extensions-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Define",
        guideRef: "hl-culture-emic-etic",
        strategy: "Derived etic synthesis",
        question:
          "How does a researcher achieve a **derived etic** understanding of emotional resilience across four distinct cultures?",
        options: [
          "Conduct separate emic investigations locally first, then identify verified shared patterns",
          "Administer one English-language resilience scale globally after back-translation alone",
          "Exclude non-Western samples to hold cultural extraneous variables constant",
          "Assign each participant their country's published Hofstede Uncertainty Avoidance score",
        ],
        answerIndex: 0,
        hints: [
          "Think of Berry's progression: local insider depth comes *before* cross-cultural generalization.",
        ],
        explanation:
          "A **derived etic** synthesizes multiple independent **emic** inquiries to distinguish genuinely shared universal dimensions from culture-specific expressions. Back-translation alone still risks leaving an **imposed etic** if the underlying construct does not match local lived reality.",
      },
      {
        id: "7-hl-extensions-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-culture-emic-etic",
        strategy: "Ecological perception (Müller-Lyer illusion)",
        question:
          "Why did Henrich et al. (2010) highlight the stark contrast between US undergraduates and Kalahari San foragers on the Müller-Lyer optical illusion?",
        options: [
          "It showed genetic differences in retinal cone density determine visual illusions",
          "It confirmed visual perception is immune to environmental experience after infancy",
          "It showed even low-level visual perception varies with cultural ecology and built spaces",
          "It proved cross-cultural field studies cannot control visual stimulus brightness",
        ],
        answerIndex: 2,
        hints: [
          "Consider the 'carpentered world' hypothesis regarding rectangular corners vs circular landscapes.",
          "If basic visual perception varies across ecologies, what happens to the assumption that lab findings are automatic human universals?",
        ],
        explanation:
          "The **carpentered-world** explanation shows that lifelong visual experience with right-angled architecture tunes depth heuristics behind the Müller-Lyer illusion. Even supposedly 'hardwired' visual perception is modulated by cultural ecology, challenging uncritical WEIRD universalism.",
      },
      {
        id: "7-hl-extensions-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-culture-emic-etic",
        strategy: "Causality in Hong et al. vs correlational cultural studies",
        question:
          "Why does Hong et al.'s (2000) cultural priming paradigm strengthen **Causality** claims compared to cross-national surveys comparing China and the United States?",
        options: [
          "It eliminates the need for any operationalization of cognitive attributions",
          "Randomly assigning cultural primes within one bicultural sample isolates cognitive causation",
          "It uses fMRI neurofeedback to confirm permanent structural cortical differences",
          "It samples over ten thousand citizens from every rural province in both countries",
        ],
        answerIndex: 1,
        hints: [
          "When you compare two different countries directly, what confounding variables differ besides cultural schemas?",
          "What methodological feature of Hong et al.'s design controls GDP, language, and schooling differences?",
        ],
        explanation:
          "Cross-national comparisons confound culture with GDP, climate, schooling, and genetics. By **randomly assigning** Chinese vs American cultural primes to the *same* bicultural population, Hong et al. (2000) isolated accessible cultural knowledge as a causal trigger of attribution shifts.",
      },
      {
        id: "7-hl-extensions-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "hl-culture-emic-etic",
        strategy: "Enculturation vs Acculturation vs Globalization",
        question:
          "According to Arnett (2002), how does **globalization** uniquely complicate identity development for many contemporary adolescents compared to classic migration-based acculturation?",
        options: [
          "It erases all heritage cultural practices within a single developmental year",
          "It prevents adolescents from developing any bicultural frame-switching capacity",
          "It restricts cultural learning strictly to parents and immediate village elders",
          "It fosters a bicultural local-plus-global identity even without physically migrating",
        ],
        answerIndex: 3,
        hints: [
          "Think about how global digital media, English-language culture, and consumer norms reach youth who never leave their home country.",
          "Contrast physical immigration with mediated cultural contact via global connectivity.",
        ],
        explanation:
          "Arnett (2002) argued that globalization allows youth to develop a **bicultural identity** combining their local heritage culture with an emerging global culture via media and education — even without physically migrating to another country.",
      },
      {
        id: "7-hl-extensions-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "hl-culture-emic-etic",
        strategy: "Chiao et al. (2009) cultural neuroscience",
        question:
          "Chiao et al. (2009) scanned bicultural and monocultural adults while making general vs contextual self-judgements. What key **Perspective** insight did their findings add beyond simple East-vs-West country comparisons?",
        options: [
          "Neural self-representation depends exclusively on native spoken language grammar",
          "Endorsed individualistic vs collectivistic values predicted mPFC activity beyond nationality",
          "Brain imaging proved cultural identity cannot change once adolescence ends",
          "Only collectivistic participants recruited the prefrontal cortex during self-reflection",
        ],
        answerIndex: 1,
        hints: [
          "Recall how Chiao et al. avoided equating nationality directly with cultural orientation.",
          "Did participants' *individual endorsement* of cultural values predict their mPFC activation pattern?",
        ],
        explanation:
          "Chiao et al. (2009) showed that participants' personally endorsed **individualistic vs collectivistic values** predicted whether mPFC responded more to general or contextual self-descriptions — avoiding the **ecological fallacy** and uniting Biological and Sociocultural perspectives.",
      },
      {
        id: "7-hl-extensions-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-culture-emic-etic",
        strategy: "Core Concept Responsibility in cross-cultural research",
        question:
          "An international NGO uses an unadapted Western trauma questionnaire after a monsoon disaster in South Asia, labelling normal communal mourning rituals as 'pathological dependency'. Which pair of FA2027 Core Concepts is most acutely violated?",
        options: [
          "Measurement (construct validity) and Responsibility (preventing diagnostic stigma)",
          "Change (synaptic pruning) and Causality (single-blind placebo controls)",
          "Causality (reverse directionality) and Change (attrition across cohorts)",
          "Perspective (animal 3Rs ethics) and Measurement (inter-observer coding speed)",
        ],
        answerIndex: 0,
        hints: [
          "Ask first: Does the Western scale accurately measure trauma in this community?",
          "Ask second: What ethical harm occurs when healthy cultural rituals are mislabelled as pathology?",
        ],
        explanation:
          "Pathologizing healthy local mourning via an imposed-etic checklist violates **Measurement** (poor cross-cultural construct validity) and **Responsibility** (causing avoidable stigma and misdirected clinical interventions).",
      },
      {
        id: "7-hl-extensions-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Compare",
        guideRef: "hl-culture-emic-etic",
        strategy: "Evaluating Hofstede's methodology",
        question:
          "Which critique targets BOTH the **temporal validity (Change)** and **population validity (Bias)** of Hofstede's original cultural-dimensions dataset?",
        options: [
          "It used invasive EEG helmets that induced demand characteristics in schools",
          "It relied exclusively on qualitative ethnography from a single rural village",
          "It surveyed IBM employees in the 1960s–70s, limiting generalization across eras and classes",
          "It randomly allocated participants to national cultures, violating ecological realism",
        ],
        answerIndex: 2,
        hints: [
          "Remember who Hofstede originally surveyed and in which decade.",
          "Connect a single multinational corporation in the 1960s–70s to modern cross-class, globalized societies.",
        ],
        explanation:
          "Hofstede's original dataset sampled **IBM corporate employees in the late 1960s and 1970s** — mostly educated, male, corporate workers — limiting **population validity (Bias)** across socioeconomic groups and **temporal validity (Change)** in rapidly globalizing 21st-century societies.",
      },
    ],
  },
  {
    id: "7-hl-extensions-m2",
    title: "MCQ Paper 2 · Motivation, Dopamine & Self-Determination (HL)",
    level: "HL",
    questions: [
      {
        id: "7-hl-extensions-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Describe",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Reward Prediction Error (Schultz et al., 1997)",
        question:
          "In Schultz et al.'s (1997) electrophysiological recordings of midbrain dopamine neurons, how do VTA dopamine neurons respond when a **well-learned, fully expected** juice reward is **omitted** after its predictive cue?",
        options: [
          "They fire an intense phasic burst identical to an unexpected reward",
          "Their firing dips sharply below baseline, encoding a negative prediction error",
          "They permanently stop responding to all future cues through synaptic pruning",
          "They maintain steady baseline firing because the cue already delivered pleasure",
        ],
        answerIndex: 1,
        hints: [
          "Recall the equation RPE = R_actual − R_expected when actual reward is 0 and expected reward is positive.",
        ],
        explanation:
          "When an expected reward fails to arrive, `R_actual < R_expected`, creating a **negative Reward Prediction Error (−RPE)**: dopamine firing drops **below baseline**, signalling disappointment and driving updating of expectations.",
      },
      {
        id: "7-hl-extensions-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Wanting vs Liking (Berridge & Robinson, 1998)",
        question:
          "According to Berridge and Robinson's (1998) incentive-salience theory, why can a person feel a powerful urge to keep checking a gambling or social app even while reporting that they no longer enjoy using it?",
        options: [
          "Prefrontal serotonin depletion eliminates memory of recent boredom",
          "Hippocampal consolidation erases negative affective feedback during scrolling",
          "Cortisol surges directly convert unpleasant stimuli into sensory enjoyment",
          "Mesolimbic dopamine drives 'wanting' independently of opioid-mediated 'liking'",
        ],
        answerIndex: 3,
        hints: [
          "Separate motivational craving from hedonic sensory pleasure.",
          "Which neurochemical system powers cue-triggered pursuit vs pleasure?",
        ],
        explanation:
          "Berridge and Robinson (1998) showed that mesolimbic dopamine mediates **incentive salience ('wanting')**, whereas distinct opioid/endocannabinoid hotspots mediate hedonic **'liking'**. Cue-sensitized 'wanting' can therefore persist powerfully even after subjective 'liking' collapses.",
      },
      {
        id: "7-hl-extensions-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "SDT 3 Basic Psychological Needs (CAR)",
        question:
          "Which triad represents the three innate basic psychological needs proposed by Deci and Ryan's Self-Determination Theory (SDT)?",
        options: [
          "Autonomy, Competence, and Relatedness",
          "Self-actualization, Esteem, and Safety",
          "Mastery, Conformity, and Extrinsic Reward",
          "Independence, Dominance, and Arousal",
        ],
        answerIndex: 0,
        hints: [
          "Use the CAR mnemonic for Deci & Ryan's core SDT needs.",
        ],
        explanation:
          "Self-Determination Theory posits **Autonomy** (volition/ownership), **Competence** (feeling effective), and **Relatedness** (meaningful connection) as the three universal basic psychological needs fueling internalized and intrinsic motivation.",
      },
      {
        id: "7-hl-extensions-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Lepper, Greene & Nisbett (1973) conditions",
        question:
          "In Lepper, Greene, and Nisbett's (1973) classic drawing study, why did the **Unexpected Award** group NOT show the same drop in later free-choice drawing as the **Expected Award** group?",
        options: [
          "Unexpected awards triggered stronger mesolimbic cortisol suppression during play",
          "Unexpected awards carried larger monetary value than expected certificates",
          "Unexpected awards were not perceived as controlling the children's original decision to draw",
          "Children in the unexpected group were prevented from seeing the coloured markers later",
        ],
        answerIndex: 2,
        hints: [
          "Think about how the child attributes *why* they drew during the session.",
          "If a reward is a surprise *after* drawing, does it feel like an external bribe controlling their choice?",
        ],
        explanation:
          "Because the certificate arrived *afterwards* by surprise, children in the Unexpected Award group still attributed their drawing to intrinsic enjoyment rather than external control, preserving **Autonomy** and avoiding the **overjustification effect**.",
      },
      {
        id: "7-hl-extensions-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Apply",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "SDT Internalization Continuum",
        question:
          "A Year 12 student dislikes memorizing statistical formulas, yet practises them diligently because she deeply values becoming a clinical psychologist and views research literacy as essential to her chosen career. Where does her motivation sit on the SDT continuum?",
        options: [
          "Amotivation — lacking any intentional link between action and outcome",
          "External regulation — complying solely to avoid immediate detention",
          "Introjected regulation — acting primarily out of guilt and fragile ego pride",
          "Identified regulation — endorsing a behaviour because its goal is personally valued",
        ],
        answerIndex: 3,
        hints: [
          "She does not enjoy the drills intrinsically, so eliminate pure intrinsic motivation.",
          "Contrast acting out of guilt/shame (introjected) with consciously valuing the personal utility of the goal (identified).",
        ],
        explanation:
          "**Identified regulation** is an autonomous form of extrinsic motivation where a person consciously values the goal behind a task even if the task itself is not inherently fun. Introjected regulation would involve internal guilt or ego anxiety rather than endorsed personal value.",
      },
      {
        id: "7-hl-extensions-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Overjustification percentage drop calculation",
        question:
          "In a school intervention testing the overjustification effect, students initially spent an average of 60 minutes per week on voluntary coding challenges. After a controlling point-for-prizes scheme ended, voluntary coding dropped to 42 minutes per week. What was the percentage decrease?",
        options: [
          "18% decrease in voluntary coding engagement",
          "30% decrease in voluntary coding engagement",
          "43% decrease in voluntary coding engagement",
          "70% decrease in voluntary coding engagement",
        ],
        answerIndex: 1,
        hints: [
          "Find the raw reduction in minutes: 60 − 42.",
          "Divide the reduction by the original baseline (60), then multiply by 100.",
        ],
        explanation:
          "Reduction = {{60 - 42 = 18}} minutes. Percentage drop = {{(18 / 60) * 100 = 30%}}. Subtracting without dividing by the baseline gives the common trap of 18%, while 70% is the remaining share rather than the drop.",
      },
      {
        id: "7-hl-extensions-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Sisk et al. (2018) meta-analysis of Dweck's mindset",
        question:
          "What nuanced conclusion emerged from Sisk et al.'s (2018) large-scale meta-analysis (N > 365,000) of growth mindset and academic achievement?",
        options: [
          "Growth mindset explained over 40% of variance in standardized exam scores worldwide",
          "Growth mindset interventions harmed academic motivation in every secondary school sample",
          "Overall correlations and intervention effects were very small, with larger gains for at-risk students",
          "Fixed mindset consistently outperformed growth mindset in longitudinal university cohorts",
        ],
        answerIndex: 2,
        hints: [
          "Recall the distinction between an overall modest average effect (r ≈ 0.10, d ≈ 0.08) and specific subgroup benefits.",
          "Which learners benefited most meaningfully from mindset interventions in Sisk et al. (2018)?",
        ],
        explanation:
          "Sisk et al. (2018) found weak average associations (`r ≈ 0.10`) and small overall intervention effects (`d ≈ 0.08`), tempering early hype, while documenting **meaningfully larger gains for academically at-risk and lower-SES students**.",
      },
      {
        id: "7-hl-extensions-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Iyengar & Lepper (1999) cultural choice study",
        question:
          "In Iyengar and Lepper's (1999) anagram experiment comparing Anglo-American and Asian-American children, which pattern directly challenged the assumption that individual choice universally maximizes intrinsic motivation?",
        options: [
          "Asian-American children showed highest motivation when a trusted mother or peer chose the task",
          "Anglo-American children performed best when an unfamiliar experimenter assigned every anagram",
          "Both cultural groups lost all intrinsic motivation whenever any adult entered the classroom",
          "Asian-American children refused to complete puzzles unless promised tangible cash rewards",
        ],
        answerIndex: 0,
        hints: [
          "Compare the three conditions: Personal Choice, Experimenter Choice, and Mother/In-group Peer Choice.",
          "Think about how interdependent cultural norms link trusted in-group choices to belonging and motivation.",
        ],
        explanation:
          "While Anglo-American children thrived most under **Personal Choice**, Asian-American children displayed the **highest intrinsic motivation and performance** when a **trusted mother or in-group peer** made the choice, highlighting cultural variation in how Autonomy interacts with Relatedness.",
      },
      {
        id: "7-hl-extensions-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "IOAM vs SOAM (Yu & Yang)",
        question:
          "According to Yu and Yang (1994), how does **Socially Oriented Achievement Motivation (SOAM)** differ from **Individual-Oriented Achievement Motivation (IOAM)**?",
        options: [
          "SOAM relies purely on cash prizes, whereas IOAM relies purely on dopamine bursts",
          "SOAM eliminates competence needs, whereas IOAM eliminates all social relatedness",
          "SOAM occurs only in team sports, whereas IOAM occurs only in solo laboratory tests",
          "SOAM defines success through fulfilling expectations of significant in-groups rather than self-set standards",
        ],
        answerIndex: 3,
        hints: [
          "Compare who defines the standard of excellence and whose approval carries moral weight.",
          "Notice SOAM is prominent in interdependent/Confucian-heritage contexts where family honour is internalized.",
        ],
        explanation:
          "In **SOAM**, achievement goals, standards, and pride are anchored in fulfilling the expectations and honour of valued in-groups (such as family or community), whereas **IOAM** centres on self-selected standards and individual mastery.",
      },
      {
        id: "7-hl-extensions-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Informational vs Controlling feedback in Cognitive Evaluation Theory",
        question:
          "A debate coach gives students detailed, unexpected praise highlighting how their new counter-argument structure strengthened their rebuttal, without tying points to prizes. How does Cognitive Evaluation Theory predict this feedback affects intrinsic motivation?",
        options: [
          "It triggers overjustification because any verbal praise shifts locus of causality outward",
          "It supports Competence without thwarting Autonomy, sustaining or boosting intrinsic motivation",
          "It creates introjected regulation by making students fearful of disappointing the coach",
          "It induces a negative dopamine prediction error because no tangible certificate was given",
        ],
        answerIndex: 1,
        hints: [
          "Is specific strategy praise controlling or informational?",
          "Recall which of the three SDT needs is nurtured by constructive mastery feedback.",
        ],
        explanation:
          "Under Cognitive Evaluation Theory, **informational feedback** affirms **Competence** without feeling coercive, leaving **Autonomy** intact and sustaining or enhancing intrinsic motivation — unlike expected, controlling tangible rewards.",
      },
      {
        id: "7-hl-extensions-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Explain",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Why variable-ratio schedules exploit dopamine RPE",
        question:
          "Why do unpredictable **variable-ratio** loot boxes and social-media 'like' feeds sustain stronger compulsive engagement than predictable **fixed-ratio** rewards?",
        options: [
          "Uncertainty keeps Reward Prediction Error positive on wins, repeatedly firing VTA–NAc dopamine",
          "Predictable rewards activate opioid hotspots too intensely, causing immediate boredom",
          "Variable-ratio schedules satisfy SDT Autonomy by letting users code the payout algorithm",
          "Fixed-ratio schedules prevent associative learning by suppressing cue-triggered firing",
        ],
        answerIndex: 0,
        hints: [
          "Remember what Schultz et al. (1997) found happens to dopamine firing when a reward becomes 100% predictable.",
          "Connect uncertainty to repeated positive prediction errors (+RPE).",
        ],
        explanation:
          "Fully predictable rewards settle toward **zero RPE** at delivery, whereas **unpredictable variable-ratio** outcomes repeatedly generate **positive RPE (+RPE)** bursts in the VTA–NAc pathway whenever a surprise reward lands, supercharging incentive salience ('wanting').",
      },
      {
        id: "7-hl-extensions-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Apply",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Introjected vs External regulation",
        question:
          "A marathon runner drags herself out to train in pouring rain not because anyone is paying or watching her, nor because she enjoys running today, but solely because she would feel intense **guilt and self-disgust** if she skipped a workout. Which SDT regulation type is operating?",
        options: [
          "Intrinsic motivation fuelled by pure sensory flow",
          "External regulation driven by tangible coaches' rewards",
          "Introjected regulation driven by internal guilt and self-esteem pressure",
          "Amotivation reflecting learned helplessness toward training",
        ],
        answerIndex: 2,
        hints: [
          "Notice the pressure is *internal* (guilt/shame), not an external bribe, yet it still feels controlling rather than freely valued.",
          "Which stage on the SDT continuum captures internal guilt, shame, or ego-contingent pride?",
        ],
        explanation:
          "**Introjected regulation** occurs when external pressures have been partially swallowed so that behaviour is policed internally through **guilt, shame, or conditional self-worth** — making it a *controlled* form of extrinsic motivation.",
      },
      {
        id: "7-hl-extensions-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "SDT defense against cultural universalism critique",
        question:
          "How do Self-Determination Theory researchers reconcile Iyengar and Lepper's (1999) mother-choice findings with SDT's claim that **Autonomy** is a universal psychological need?",
        options: [
          "By arguing that Asian-American children did not actually feel motivated during the task",
          "By removing Autonomy from SDT and replacing it solely with Relatedness in Asia",
          "By claiming Iyengar and Lepper's laboratory task measured motor reflex rather than drive",
          "By clarifying Autonomy means volitional endorsement, not isolated individualism",
        ],
        answerIndex: 3,
        hints: [
          "Distinguish 'acting alone / independence' from 'acting with wholehearted volitional endorsement'.",
          "Can you freely and autonomously endorse a choice made by someone you deeply trust?",
        ],
        explanation:
          "SDT distinguishes **Autonomy** (acting with volition and genuine endorsement) from **Independence** (acting separately from others). When children willingly endorse a trusted mother's choice, **Autonomy** and **Relatedness** operate synergistically rather than in opposition.",
      },
      {
        id: "7-hl-extensions-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Core Concept Responsibility applied to mindset interventions",
        question:
          "An underfunded school district slashes tutoring budgets and replaces them with a single 45-minute 'growth mindset' assembly, telling struggling students their grades depend purely on effort. Which **Responsibility** concern does this policy raise?",
        options: [
          "It violates double-blind random allocation required in educational trials",
          "It infringes animal-welfare 3Rs guidelines for motivational neuroscience",
          "It individualizes structural inequities, blaming disadvantaged learners for systemic barriers",
          "It induces an imposed-etic reference-group effect across classroom seating",
        ],
        answerIndex: 2,
        hints: [
          "Think about Sisk et al. (2018) showing small overall mindset effects that cannot substitute for resources.",
          "What ethical harm happens when psychological mindset slogans replace material educational support?",
        ],
        explanation:
          "Treating growth mindset as a cheap substitute for funding and tutoring raises serious **Responsibility** concerns: it obscures structural poverty and implicitly blames under-resourced students when effort alone cannot overcome systemic barriers.",
      },
      {
        id: "7-hl-extensions-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "hl-motivation-reward-sdt",
        strategy: "Cue-transfer in Schultz et al. (1997)",
        question:
          "Once a monkey in Schultz et al. (1997) reliably learns that a tone predicts juice two seconds later, when does the phasic dopamine burst predominantly occur?",
        options: [
          "Only after the monkey finishes swallowing the entire juice reward",
          "At the onset of the predictive tone cue rather than at juice delivery",
          "Randomly throughout the inter-trial interval regardless of cues",
          "Exclusively when the experimenter enters the laboratory room",
        ],
        answerIndex: 1,
        hints: [
          "Once the cue predicts the reward reliably, which event is now the *unexpected* positive news?",
          "Trace how the +RPE shifts backward in time from the outcome to the earliest reliable predictor.",
        ],
        explanation:
          "After associative learning, the **predictive cue** becomes the unexpected good news (+RPE), so the phasic VTA–NAc dopamine burst **shifts backward to the cue**, while delivery of the fully expected juice elicits baseline (0 RPE) firing — explaining why phone notification chimes trigger instant checking urges!",
      },
    ],
  },
  {
    id: "7-hl-extensions-m3",
    title: "MCQ Paper 3 · Technology, AI & HL Concept Synthesis (HL)",
    level: "HL",
    questions: [
      {
        id: "7-hl-extensions-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Describe",
        guideRef: "hl-technology-cognition-social",
        strategy: "Sparrow, Liu & Wegner (2011) Google Effect",
        question:
          "In Sparrow, Liu, and Wegner's (2011) experiments on the 'Google effect', how did believing typed trivia facts would be **saved** on a computer change participants' memory performance?",
        options: [
          "They forgot both the trivia facts and the folder names due to cognitive overload",
          "They remembered every trivia fact verbatim because typing boosted dual coding",
          "They recalled fewer facts only when smartphone alerts interrupted typing",
          "They recalled fewer trivia facts themselves but remembered where the files were saved",
        ],
        answerIndex: 3,
        hints: [
          "Connect Sparrow et al. (2011) to Wegner's concept of a transactive memory system.",
        ],
        explanation:
          "Sparrow et al. (2011) found that expecting facts to remain digitally saved prompted **cognitive offloading**: participants encoded *where* to retrieve the information (folder locations) rather than memorizing the facts internally.",
      },
      {
        id: "7-hl-extensions-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-technology-cognition-social",
        strategy: "Ward et al. (2017) Brain Drain mechanism",
        question:
          "In Ward et al. (2017), why did leaving a **completely silenced** smartphone face-down on the desk reduce working-memory capacity compared to placing it in another room?",
        options: [
          "Radiofrequency signals directly slowed synaptic transmission in the hippocampus",
          "Inhibiting the habitual urge to check a high-salience phone consumed central-executive resources",
          "Participants secretly unlocked their phones whenever the experimenter looked away",
          "Phones placed on desks caused peripheral glare that reduced visual acuity on matrices",
        ],
        answerIndex: 1,
        hints: [
          "No notifications buzzed and nobody touched their phone — so the mechanism must be internal attentional control.",
          "Which limited-capacity cognitive system must work continuously to suppress checking habits?",
        ],
        explanation:
          "Ward et al.'s **'Brain Drain'** hypothesis proposes that a personally salient smartphone automatically attracts orientation; actively inhibiting the urge to check it continuously drains limited **central executive** working-memory capacity.",
      },
      {
        id: "7-hl-extensions-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "hl-technology-cognition-social",
        strategy: "Task-switching RT % cost calculation",
        question:
          "A student takes 480 ms per item on a focused single-task test and 600 ms per item when alternating between a chat window and the test. What is the **percentage task-switching reaction-time cost**?",
        options: [
          "20% reaction-time cost relative to focused performance",
          "120% reaction-time cost relative to focused performance",
          "25% reaction-time cost relative to focused performance",
          "80% reaction-time cost relative to focused performance",
        ],
        answerIndex: 2,
        hints: [
          "Find the extra time added by switching: 600 − 480 = 120 ms.",
          "Divide the increase by the single-task baseline (480 ms), NOT by 600 ms.",
        ],
        explanation:
          "Switching increase = {{600 - 480 = 120}} ms. Percentage cost = {{(120 / 480) * 100 = 25%}}. Dividing by 600 ms produces the classic 20% denominator trap.",
      },
      {
        id: "7-hl-extensions-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "hl-technology-cognition-social",
        strategy: "Ophir, Nass & Wagner (2009) findings & Causality",
        question:
          "Which statement accurately summarizes BOTH the main finding and a core methodological limitation of Ophir, Nass, and Wagner's (2009) study of Heavy vs Light Media Multitaskers?",
        options: [
          "Heavy multitaskers filtered distractors worse, but the quasi-experimental design cannot prove causation",
          "Heavy multitaskers switched rules faster, but the sample included only primary-school pupils",
          "Light multitaskers showed greater switching costs, proving media multitasking trains attention",
          "Randomly assigning multitasking for one hour permanently impaired working memory",
        ],
        answerIndex: 0,
        hints: [
          "Did Heavy Media Multitaskers perform better or worse on distractor filtering?",
          "Were participants randomly assigned to become heavy media multitaskers over years, or grouped by pre-existing habits?",
        ],
        explanation:
          "Ophir et al. (2009) found **Heavy Media Multitaskers (HMMs)** performed *worse* at ignoring irrelevant distractors and switching tasks. However, because multitasking habits were pre-existing (quasi-experimental / correlational), **Causality** remains uncertain — distractible individuals may self-select into heavy multitasking.",
      },
      {
        id: "7-hl-extensions-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "hl-technology-cognition-social",
        strategy: "Variance explained R² from correlation r (Orben nuance)",
        question:
          "A national survey of 250,000 teenagers reports a statistically significant correlation of r = −0.08 (p < 0.001) between daily screen hours and life satisfaction. What percentage of variance in life satisfaction is explained by screen hours?",
        options: [
          "8.00% of variance in adolescent life satisfaction",
          "0.64% of variance in adolescent life satisfaction",
          "6.40% of variance in adolescent life satisfaction",
          "0.08% of variance in adolescent life satisfaction",
        ],
        answerIndex: 1,
        hints: [
          "To convert Pearson r into variance explained, square r first: R² = r².",
          "Multiply R² by 100 to express the proportion as a percentage: (−0.08)² × 100.",
        ],
        explanation:
          "Variance explained = {{(-0.08)^2 * 100 = 0.0064 * 100 = 0.64%}}. Like **Orben & Przybylski (2019)** (~0.4%), this highlights the gap between **statistical significance** (driven by huge N) and **practical significance** (**Measurement**).",
      },
      {
        id: "7-hl-extensions-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-technology-cognition-social",
        strategy: "Specification Curve Analysis (Orben & Przybylski, 2019)",
        question:
          "Why did Orben and Przybylski (2019) use **Specification Curve Analysis** across 355,358 adolescents rather than running one single regression model?",
        options: [
          "To force the correlation between smartphones and depression to exceed r = −0.50",
          "To convert qualitative teen interview transcripts into fMRI activation maps",
          "To ensure participants were randomly allocated to screen-free homes for five years",
          "To test hundreds of thousands of valid analytical choices and prevent researcher cherry-picking",
        ],
        answerIndex: 3,
        hints: [
          "In huge survey datasets, researchers can choose dozens of different screen-time and well-being items.",
          "How does running *all* defensible model combinations reduce confirmation **Bias**?",
        ],
        explanation:
          "**Specification Curve Analysis** runs every theoretically defensible combination of variables and controls to counter **researcher degrees of freedom / analytical cherry-picking (Bias)**, revealing a median digital-tech effect of only ~0.4% variance explained.",
      },
      {
        id: "7-hl-extensions-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "hl-technology-cognition-social",
        strategy: "Active vs Passive social media use (Verduyn et al., 2015)",
        question:
          "How does Verduyn et al.'s (2015) distinction between **passive** and **active** social-media use improve the **Measurement** validity of teen mental-health research?",
        options: [
          "It separates envy-inducing passive browsing from supportive active social interaction",
          "It measures total daily screen minutes with exact millisecond GPS tracking",
          "It replaces psychological self-report scales entirely with salivary cortisol assays",
          "It proves that active posting always causes clinical depression within twenty minutes",
        ],
        answerIndex: 0,
        hints: [
          "Think about what psychological process happens during silent scrolling through idealized highlight reels vs chatting with a close friend.",
          "Why is raw 'total screen hours' a weak construct operationalization?",
        ],
        explanation:
          "Verduyn et al. (2015) demonstrated that **passive scrolling** lowers affective well-being via **upward social comparison** and envy, whereas **active interpersonal exchange** can strengthen social connectedness — exposing total 'screen hours' as a blunt construct.",
      },
      {
        id: "7-hl-extensions-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "hl-technology-cognition-social",
        strategy: "Suler's (2004) Online Disinhibition Effect",
        question:
          "A normally shy teenager posts cruel, aggressive comments under an anonymous forum username that she would never voice face-to-face. Which mechanism from Suler (2004) best explains this shift?",
        options: [
          "Cognitive offloading reducing retrieval of polite social scripts",
          "Derived-etic socialization removing cross-cultural empathy norms",
          "Toxic online disinhibition fuelled by anonymity, invisibility, and asynchronicity",
          "The overjustification effect replacing polite conduct with leaderboard rewards",
        ],
        answerIndex: 2,
        hints: [
          "Notice the absence of eye contact, real-name accountability, and immediate facial feedback.",
        ],
        explanation:
          "Suler (2004) identified **dissociative anonymity**, **invisibility** (lack of non-verbal emotional cues), and **asynchronicity** as key drivers of **toxic online disinhibition**, lowering everyday social restraints.",
      },
      {
        id: "7-hl-extensions-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-technology-cognition-social",
        strategy: "Replication nuance (Camerer et al., 2018)",
        question:
          "What does the mixed replication of Sparrow et al.'s (2011) Study 1 in the Camerer et al. (2018) Social Sciences Replication Project illustrate about the FA2027 Core Concept of **Change**?",
        options: [
          "Digital technology permanently erased human long-term semantic memory after 2011",
          "Replication failures prove cognitive offloading cannot exist in any real-world setting",
          "Psychological science is self-correcting, refining early claims as methods and tech contexts evolve",
          "Experimental psychology should abandon randomized lab tasks in favour of anecdotes",
        ],
        answerIndex: 2,
        hints: [
          "Think about how science updates confidence when multi-lab replications test original findings.",
          "Consider also how ubiquity of Google between 2011 and 2018 may alter priming tasks.",
        ],
        explanation:
          "**Change** applies not only to human development and tech platforms, but to **scientific self-correction**: Camerer et al. (2018) showed that subtle word-priming effects in Sparrow's Study 1 did not cleanly replicate, prompting stronger multi-lab designs and nuanced claims about offloading.",
      },
      {
        id: "7-hl-extensions-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "hl-synthesizing-extensions",
        strategy: "Cross-extension synthesis: Tech × Motivation × Biology",
        question:
          "A revision app replaces open-ended study goals with randomized mystery loot chests, public countdown clocks, and urgent late-night streak alerts. Which **multi-approach HL synthesis** best evaluates this design?",
        options: [
          "Variable-ratio chests trigger dopamine +RPE ('wanting'), while controlling streaks risk SDT overjustification and sleep loss",
          "Mystery chests eliminate mesolimbic dopamine firing while boosting unconditional Autonomy and sleep quality",
          "Countdown clocks strengthen long-term semantic offloading by preventing any emotional arousal during study",
          "Public streak alerts eliminate all cultural variation by enforcing universal individualist competition",
        ],
        answerIndex: 0,
        hints: [
          "Trace the biological effect of random chests (Schultz / Berridge) alongside the cognitive SDT effect of controlling streaks (Deci & Ryan).",
          "Add the health/displacement cost of urgent late-night alerts.",
        ],
        explanation:
          "Synthesizing across approaches shows that random mystery chests exploit **mesolimbic dopamine +RPE / 'wanting'** (Biological), controlling streak pressures risk **SDT overjustification** by thwarting Autonomy (Cognitive), and late-night alerts risk circadian **sleep displacement**.",
      },
      {
        id: "7-hl-extensions-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-synthesizing-extensions",
        strategy: "AI Responsibility × WEIRD Cultural Bias",
        question:
          "A multinational employer adopts an AI video-interview screener trained on facial-expression clips of American executives to score 'enthusiasm and leadership' for candidates across 20 nations. Which pair of HL concepts best exposes its primary flaw?",
        options: [
          "Cognitive offloading and benign online disinhibition in job applicants",
          "Bicultural frame-switching and positive dopamine prediction errors",
          "The displacement hypothesis and heavy media-multitasking switching costs",
          "WEIRD algorithmic training bias creating an imposed-etic violation of Responsibility",
        ],
        answerIndex: 3,
        hints: [
          "Look at *who* the AI training dataset represents and what happens when US emotional display rules are applied worldwide.",
          "Connect cultural **Bias** and **Measurement** invalidity to ethical **Responsibility** in hiring.",
        ],
        explanation:
          "Training an AI screener solely on US executives bakes **WEIRD sampling bias** into an automated **imposed etic**, unfairly penalizing candidates from cultures with calmer facial display rules — a direct failure of **Bias**, **Measurement**, and ethical **Responsibility**.",
      },
      {
        id: "7-hl-extensions-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "hl-technology-cognition-social",
        strategy: "Algorithmic echo chambers & confirmation bias",
        question:
          "How do engagement-maximizing social-media recommender algorithms interact with human cognitive biases to create **echo chambers**?",
        options: [
          "They randomly display opposing viewpoints equally to maximize working-memory load",
          "They amplify high-arousal, identity-confirming content that reinforces confirmation bias",
          "They hide all social feedback cues so users experience zero social comparison",
          "They require users to verify primary peer-reviewed citations before sharing posts",
        ],
        answerIndex: 1,
        hints: [
          "What kinds of content keep users clicking and commenting longest?",
          "Link algorithmic personalization to the cognitive tendency to seek belief-consistent information.",
        ],
        explanation:
          "Recommender algorithms optimize watch time and engagement by prioritizing high-arousal (often outrage-provoking) posts aligned with past clicks, interacting with human **confirmation bias** and in-group identity to deepen polarization.",
      },
      {
        id: "7-hl-extensions-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "hl-synthesizing-extensions",
        strategy: "Bidirectional Causality in Tech × Motivation × Well-being",
        question:
          "A longitudinal study finds that teenagers with higher baseline social anxiety scroll social media passively more often three months later, AND heavier passive scrolling predicts slightly higher anxiety six months later. Which **Causality** model best fits these data?",
        options: [
          "Bidirectional causality where pre-existing distress and passive scrolling reinforce one another",
          "Pure unidirectional biological causation from smartphone light to clinical anxiety",
          "Complete statistical independence showing zero longitudinal link in either direction",
          "Single-factor cultural causation driven entirely by Hofstede's Power Distance",
        ],
        answerIndex: 0,
        hints: [
          "Notice influence flows in *both* temporal directions across waves of the study.",
          "What term describes two variables mutually influencing each other over time?",
        ],
        explanation:
          "When Variable A predicts later Variable B *and* Variable B predicts later Variable A, the data indicate **bidirectional (reciprocal) causality** — demonstrating why cross-sectional snapshots cannot untangle digital well-being pathways.",
      },
      {
        id: "7-hl-extensions-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "hl-synthesizing-extensions",
        strategy: "Culture × Motivation × Technology synthesis",
        question:
          "An EdTech company launches an identical solo-competition XP leaderboard in both New York and Seoul secondary schools. Students in Seoul disengage until the company adds collaborative 'class study-group quests' endorsed by teachers and peers. Which HL synthesis best explains this turnaround?",
        options: [
          "Seoul students lacked mesolimbic dopamine receptors for individual XP points",
          "Group quests eliminated all working-memory switching costs during smartphone study",
          "Collaborative quests abolished the ecological fallacy across both metropolitan regions",
          "Group quests aligned digital incentives with Relatedness and Socially Oriented Achievement Motivation",
        ],
        answerIndex: 3,
        hints: [
          "Connect Deci & Ryan's SDT need of Relatedness with Yu & Yang's SOAM / Iyengar & Lepper (1999).",
          "Avoid claiming biological differences or falling into cultural stereotyping — focus on motivational alignment.",
        ],
        explanation:
          "Adding collaborative quests bridged **Technology**, **Motivation**, and **Culture**: it supported **Relatedness** (SDT) and resonated with **Socially Oriented Achievement Motivation (SOAM)** without claiming rigid biological differences.",
      },
      {
        id: "7-hl-extensions-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Justify",
        guideRef: "hl-synthesizing-extensions",
        strategy: "Evaluating trade-offs between Core Concepts",
        question:
          "A researcher leaves silent smartphones on desks inside a tightly controlled university lab (Ward et al., 2017) rather than observing teens using phones naturally in cafés. Which trade-off between FA2027 Core Concepts does this design illustrate?",
        options: [
          "Sacrificing statistical calculation accuracy in order to expand WEIRD sample variety",
          "Gaining strong ethical Responsibility at the expense of eliminating all debriefing",
          "Gaining strong internal Causality at the expense of real-world ecological Measurement validity",
          "Eliminating all researcher confirmation bias while guaranteeing cross-cultural derived-etic depth",
        ],
        answerIndex: 2,
        hints: [
          "What does random allocation inside a controlled lab maximize?",
          "What does a sterile lab setting sacrifice compared to everyday smartphone environments?",
        ],
        explanation:
          "Tightly controlled laboratory experiments maximize **Causality** (high internal validity via random allocation and standardized tasks) while trading off some ecological **Measurement** validity (cafés involve active notifications, social norms, and self-chosen tasks).",
      },
    ],
  },
];
