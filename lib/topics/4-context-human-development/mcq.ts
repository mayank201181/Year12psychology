import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "4-context-human-development-m1",
    title: "MCQ Paper 1 — Brain Maturation, Cognition & Attachment",
    level: "SL",
    questions: [
      {
        id: "4-context-human-development-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Synaptic pruning and myelination",
        question:
          "Between ages 2 and 25, synaptic density in the human prefrontal cortex declines substantially while executive processing becomes faster and more accurate. Which biological mechanism best explains this pattern?",
        options: [
          "Progressive cortical cell loss caused by chronic childhood stress exposure",
          "Complete cessation of neurogenesis once sensory cortical areas finish blooming",
          "Experience-dependent synaptic pruning paired with myelination of active circuits",
          "Replacement of prefrontal synaptic networks by subcortical limbic pathways",
        ],
        answerIndex: 2,
        hints: [
          "Think about the 'use it or lose it' sculpting process after early synaptic blooming.",
          "Losing unused connections makes active pathways faster when combined with axonal insulation.",
        ],
        explanation:
          "After early synaptogenesis ('blooming'), experience-dependent **synaptic pruning** removes redundant synapses while **myelination** speeds conduction along active prefrontal circuits. It is an adaptive sculpting mechanism rather than stress-induced cell loss or replacement by limbic circuits.",
      },
      {
        id: "4-context-human-development-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Dual-systems / imbalance model",
        question:
          "In Chein et al.'s (2011) fMRI driving-simulation experiment, adolescents took significantly more risks when peers observed them than when driving alone, whereas adults showed no peer effect. Which neural pattern accompanied adolescent risk-taking with peers?",
        options: [
          "Heightened ventral striatum reward activation outpacing prefrontal control",
          "Sharp suppression of amygdala arousal paired with elevated hippocampal firing",
          "Complete shutdown of prefrontal cortex metabolism throughout peer observation",
          "Elevated occipital visual cortex activation suppressing motor brake reflexes",
        ],
        answerIndex: 0,
        hints: [
          "Recall Casey and Steinberg's dual-systems mismatch between reward and control circuits.",
          "Which subcortical structure tracks immediate social reward value during adolescence?",
        ],
        explanation:
          "Chein et al. (2011) found that peer presence amplified **ventral striatum** reward-circuit activation in adolescents, outweighing still-maturing **prefrontal cortex** regulatory control. Prefrontal cortex activity did not shut down completely—rather, social reward signals temporarily tipped decision balance.",
      },
      {
        id: "4-context-human-development-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Assimilation vs accommodation",
        question:
          "A 3-year-old who knows the word 'dog' visits an aquarium, points to a sea lion, and says 'wet dog'. After her mother explains that sea lions have flippers and live in oceans, the child builds a distinct mental category for 'sea lions'. Which pair of Piagetian processes occurred in sequence?",
        options: [
          "Conservation followed by reversible concrete operational logic",
          "Accommodation followed by disequilibrium and symbolic centration",
          "Scaffolding followed by internalization of private verbal speech",
          "Assimilation followed by disequilibrium-driven schema accommodation",
        ],
        answerIndex: 3,
        hints: [
          "First the child forced a new animal into an existing schema.",
          "Next the child modified her mental categories to resolve the mismatch.",
        ],
        explanation:
          "Calling a sea lion a 'wet dog' fits a novel animal into an existing schema (**assimilation**); revising mental categories to form a new 'sea lion' schema after mismatch is **accommodation**. Scaffolding and private speech belong to Vygotsky rather than Piaget.",
      },
      {
        id: "4-context-human-development-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Measurement critiques of Piaget",
        question:
          "How did Baillargeon & DeVos's (1991) tall/short carrot violation-of-expectation study challenge Piaget's account of the sensorimotor stage?",
        options: [
          "It demonstrated that 6-month-olds already pass verbal conservation problems",
          "It revealed object permanence at 3.5 months by removing manual search demands",
          "It showed that infant looking time depends purely on cultural language tools",
          "It confirmed that infants lack object permanence until roughly 12 months old",
        ],
        answerIndex: 1,
        hints: [
          "Why might a 4-month-old fail Piaget's blanket-hiding test even if they know the toy exists?",
          "Consider the FA2027 Core Concept of Measurement—looking time vs motor reaching.",
        ],
        explanation:
          "By measuring looking time at impossible events rather than requiring coordinated hand-reaching, **Baillargeon & DeVos (1991)** found evidence of **object permanence** as early as **3.5 months**, showing Piaget confounded cognitive competence with motor-task **Measurement** demands rather than confirming a 12-month onset.",
      },
      {
        id: "4-context-human-development-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Construct validity in child tasks",
        question:
          "In Hughes's (1975) 'policeman doll' study, 90% of children aged 3.5 to 5 years successfully hid a boy doll from two policemen. What does this finding demonstrate about Piaget's Three Mountains task?",
        options: [
          "Preschool children possess full formal operational deductive reasoning skills",
          "Visual egocentrism disappears only after children learn formal school geometry",
          "Unfamiliar abstract task demands caused Piaget to overestimate egocentrism",
          "Children rely solely on adult imitation rather than spatial perspective-taking",
        ],
        answerIndex: 2,
        hints: [
          "Compare the familiarity of hiding from a policeman versus judging mountain silhouettes.",
          "Think about Margaret Donaldson's phrase 'human sense' and construct validity.",
        ],
        explanation:
          "Hughes (1975) showed that when perspective-taking is embedded in a meaningful social scenario ('human sense'), most preschoolers overcome egocentrism—indicating Piaget's abstract Three Mountains task lacked **Measurement** validity and overestimated egocentrism, without implying formal operational logic.",
      },
      {
        id: "4-context-human-development-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Piaget vs Vygotsky on language",
        question:
          "A 5-year-old building a wooden tower mutters aloud, 'Put the wide block flat first, then the small red one.' How does Vygotsky's interpretation of this speech differ from Piaget's?",
        options: [
          "Vygotsky views it as immature egocentric chatter, while Piaget sees it as scaffolding",
          "Vygotsky views it as self-regulating private speech, while Piaget labels it egocentric",
          "Vygotsky argues it reflects innate maturation, while Piaget links it to cultural tools",
          "Vygotsky claims it interferes with problem-solving, while Piaget views it as adaptive",
        ],
        answerIndex: 1,
        hints: [
          "Which theorist saw talking aloud to oneself as an active cognitive planning tool?",
          "Recall Vygotsky's progression: social speech → private speech → inner speech.",
        ],
        explanation:
          "Vygotsky argued that **private speech** actively guides planning and self-regulation before becoming silent inner speech, whereas Piaget viewed early self-directed talk as a sign of preoperational **egocentrism** that fades as children decenter.",
      },
      {
        id: "4-context-human-development-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "ZPD and scaffolding",
        question:
          "An 8-year-old cannot solve two-step fraction word problems alone, succeeds when her teacher prompts her to draw bar models, and solves similar problems independently two weeks later after prompts are faded. Which combination of Vygotskian concepts is illustrated?",
        options: [
          "Working within the ZPD using temporary scaffolding from a More Knowledgeable Other",
          "Progressing through universal biological maturation without cultural mediation",
          "Resolving preoperational centration exclusively through solitary object play",
          "Experiencing operant extinction after external token reinforcement is removed",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the gap between solo inability and assisted success.",
          "Notice that the teacher's prompts are gradually withdrawn as independence grows.",
        ],
        explanation:
          "The teacher acts as a **More Knowledgeable Other (MKO)** providing temporary **scaffolding** (bar-model prompts) inside the learner's **Zone of Proximal Development (ZPD)** until the cognitive strategy is internalized—contrasting directly with solo play or operant extinction.",
      },
      {
        id: "4-context-human-development-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Define",
        guideRef: "attachment-caregiving-culture",
        strategy: "Bowlby's cognitive-biological bridge",
        question:
          "In Bowlby's attachment theory, how does the **Internal Working Model (IWM)** connect early caregiving to adolescent and adult relationships?",
        options: [
          "It encodes an unchangeable genetic reflex that prevents new bonds after infancy",
          "It suppresses oxytocin release whenever individuals encounter unfamiliar adults",
          "It replaces social identity processes with innate visual imprinting mechanisms",
          "It forms a cognitive schema of self-worth and others' reliability guiding expectations",
        ],
        answerIndex: 3,
        hints: [
          "Ask which approach—biological, cognitive, or sociocultural—the IWM represents inside Bowlby's model.",
          "What two core expectations does an infant internalize from caregiver responsiveness?",
        ],
        explanation:
          "Bowlby's **Internal Working Model** is a **cognitive schema** capturing whether the self is worthy of care and whether others are trustworthy, shaping later relationship expectations (Hazan & Shaver, 1987). Crucially, it is revisable through later relationships rather than a rigid genetic reflex.",
      },
      {
        id: "4-context-human-development-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "attachment-caregiving-culture",
        strategy: "Strange Situation behavioural cues",
        question:
          "During Ainsworth's Strange Situation, a 14-month-old clings tightly to her mother without exploring the toys, cries intensely when her mother leaves, and upon reunion reaches up to be held yet angrily pushes her mother away. How is this attachment classified?",
        options: [
          "Type B — Secure attachment",
          "Type A — Insecure-avoidant attachment",
          "Type C — Insecure-resistant (ambivalent) attachment",
          "Type D — Disorganized-disoriented attachment",
        ],
        answerIndex: 2,
        hints: [
          "Look closely at the contradictory reunion pattern: wanting contact while resisting comfort.",
          "Avoidant infants turn away calmly, whereas one insecure group combines clinginess with angry resistance.",
        ],
        explanation:
          "Clingy non-exploration, severe separation distress, and seeking yet resisting contact on reunion define **Type C (Insecure-Resistant / Ambivalent)** attachment. In contrast, Type A (Avoidant) minimizes visible distress and ignores the caregiver on reunion.",
      },
      {
        id: "4-context-human-development-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "attachment-caregiving-culture",
        strategy: "Attachment prevalence calculation",
        question:
          "A Strange Situation study observes **160 infants**: 104 are classified as Secure (Type B), 36 as Avoidant (Type A), and 20 as Resistant (Type C). What percentage of the sample is classified as Resistant (Type C)?",
        options: [
          "12.5%",
          "22.5%",
          "14.3%",
          "20.0%",
        ],
        answerIndex: 0,
        hints: [
          "Divide the Type C count by the total sample size (160), then multiply by 100.",
          "Check: {{20 / 160 = 1/8}}.",
        ],
        explanation:
          "Resistant proportion = {{20 / 160 * 100 = 12.5%}}. Selecting 22.5% mistakenly calculates Type A ({{36 / 160}}), 14.3% divides by the remaining 140 infants instead of the total 160, and 20.0% confuses the raw count with a percentage.",
      },
      {
        id: "4-context-human-development-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "attachment-caregiving-culture",
        strategy: "van IJzendoorn & Kroonenberg (1988)",
        question:
          "Which statement accurately summarizes a key finding of van IJzendoorn & Kroonenberg's (1988) cross-cultural meta-analysis of 32 Strange Situation studies across 8 countries?",
        options: [
          "Insecure-avoidant attachment was the modal classification in Northern Europe",
          "Secure attachment was modal everywhere, yet intra-cultural variation exceeded inter-cultural variation",
          "Differences between nations were three times larger than differences within nations",
          "Japanese infants displayed the highest rates of avoidant attachment across all countries",
        ],
        answerIndex: 1,
        hints: [
          "Recall which classification was the most common in every single country sampled.",
          "Compare within-country variation versus between-country variation (~1.5×).",
        ],
        explanation:
          "van IJzendoorn & Kroonenberg (1988) found **Type B (Secure)** was modal in every country tested, while **intra-cultural variation was roughly 1.5× larger than inter-cultural variation**. Japan showed elevated Resistant (27%) and very low Avoidant (5%) rates, not high avoidant rates.",
      },
      {
        id: "4-context-human-development-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "attachment-caregiving-culture",
        strategy: "HL Culture — Emic vs Imposed Etic",
        question:
          "Why do cross-cultural psychologists argue that applying Ainsworth's Strange Situation in Japan (Takahashi, 1986) or northern West Germany (Grossmann et al., 1985) illustrates an **imposed etic**?",
        options: [
          "It relies exclusively on qualitative interviews with mothers rather than observation",
          "It recruits only single-sex infant samples, eliminating biological variance",
          "It prevents coders from achieving acceptable inter-rater reliability scores",
          "It applies Western separation norms as universal, misreading local caregiving practices",
        ],
        answerIndex: 3,
        hints: [
          "Recall the HL distinction between emic (culture-specific) and imposed etic (assumed universal) tools.",
          "Does a Japanese infant's severe separation distress necessarily indicate insensitive parenting?",
        ],
        explanation:
          "An **imposed etic** exports a Western-derived protocol as a universal standard: Japanese infants rarely experience brief maternal separations (inflating Type C scores), while German norms encourage early independence (inflating Type A scores). Inter-rater reliability of coding is high, yet construct validity across cultures is compromised.",
      },
      {
        id: "4-context-human-development-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "attachment-caregiving-culture",
        strategy: "Rutter ERA study & sensitive period",
        question:
          "In Rutter et al.'s English and Romanian Adoptees (ERA) longitudinal study, children adopted before 6 months achieved near-complete catch-up by age 11, whereas those adopted later showed higher rates of disinhibited attachment. Which Core Concept conclusion is best supported?",
        options: [
          "Change occurs within a sensitive period where early enriched care enables recovery",
          "A rigid critical period makes emotional recovery biologically impossible after birth",
          "Institutional deprivation acts solely through genetic inheritance rather than environment",
          "Random assignment proved institutional neglect directly caused cognitive deficits",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish between a rigid critical period (irreversible) and a sensitive period (plasticity/Change).",
          "Was Rutter's ERA study a true randomized experiment or a natural experiment?",
        ],
        explanation:
          "Near-complete recovery before 6 months alongside elevated lasting risk after prolonged deprivation supports a **sensitive period** and developmental **Change**. Rutter's ERA design was a **natural experiment**, so random assignment was neither ethical nor possible.",
      },
      {
        id: "4-context-human-development-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "attachment-caregiving-culture",
        strategy: "Causality limits in natural experiments",
        question:
          "When evaluating **Causality** in Rutter's English and Romanian Adoptees (ERA) study, what is the strongest methodological limitation restricting strict cause-and-effect claims about institutional deprivation alone?",
        options: [
          "The researchers lacked a comparison group of non-institutionalized adoptees",
          "The follow-up ended at age 2, preventing assessment of adolescent outcomes",
          "Unmeasured prenatal malnutrition and genetic factors could confound institutional effects",
          "UK adoptive parents were prevented from bonding with infants during the first year",
        ],
        answerIndex: 2,
        hints: [
          "Think about what might already have differed before an infant entered the Romanian institution.",
          "Remember that Rutter DID include a 52-child UK domestic adoptee comparison group and followed them into adulthood.",
        ],
        explanation:
          "Because ERA is a **natural experiment**, researchers could not control or measure pre-institutional variables such as prenatal malnutrition, maternal stress, or genetic predispositions that might confound deprivation duration. Rutter did include 52 UK controls and tracked the sample through adolescence into young adulthood.",
      },
      {
        id: "4-context-human-development-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Cross-cultural cognitive Perspective",
        question:
          "Cross-cultural studies (e.g., Rogoff, 1990) find that unschooled adolescents in non-Western communities frequently fail Piagetian formal-operational physics tasks yet solve complex local weaving, trade, and navigation problems accurately. What does this imply for cognitive development?",
        options: [
          "Prefrontal synaptic pruning occurs only in societies with formal secondary schooling",
          "Abstract cognitive skills are domain-specific and shaped by cultural tools and practice",
          "Sensorimotor and preoperational milestones are absent outside Western classrooms",
          "Biological maturation alone determines universal attainment of every Piagetian stage",
        ],
        answerIndex: 1,
        hints: [
          "Compare Piaget's universal stage model with Vygotsky's cultural-tools Perspective.",
          "Why would adolescents excel at complex local reasoning yet miss Western school-style tests?",
        ],
        explanation:
          "Findings like Rogoff's (1990) demonstrate that higher-order reasoning is **culturally situated** and shaped by everyday **cultural tools** and guided participation (**Perspective**), challenging Piaget's assumption that Formal Operational reasoning unfolds identically through biological maturation alone.",
      },
    ],
  },
  {
    id: "4-context-human-development-m2",
    title: "MCQ Paper 2 — Identity, Resilience, Culture & Research Designs",
    level: "SL",
    questions: [
      {
        id: "4-context-human-development-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "identity-moral-socioemotional",
        strategy: "Marcia's 2×2 identity matrix",
        question:
          "After spending a year volunteering at a hospital, shadowing a graphic designer, and debating ethical values with mentors, 19-year-old Mei decides to train as a paediatric nurse. Which of Marcia's identity statuses best fits Mei?",
        options: [
          "Foreclosure",
          "Identity Achievement",
          "Moratorium",
          "Identity Diffusion",
        ],
        answerIndex: 1,
        hints: [
          "Ask two questions: Has Mei explored alternatives? Has she made a firm personal commitment?",
        ],
        explanation:
          "Mei actively explored multiple career alternatives (**High Exploration**) and then committed to a self-chosen path (**High Commitment**), defining **Identity Achievement**. Moratorium lacks commitment, whereas Foreclosure commits without exploration.",
      },
      {
        id: "4-context-human-development-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "identity-moral-socioemotional",
        strategy: "Marcia's 2×2 identity matrix",
        question:
          "When asked about future university courses or personal beliefs, 17-year-old Liam shrugs and replies, 'I haven't really looked into anything and I don't care what happens after school.' Which Marcia status does Liam demonstrate?",
        options: [
          "Identity Achievement",
          "Moratorium",
          "Foreclosure",
          "Identity Diffusion",
        ],
        answerIndex: 3,
        hints: [
          "Check both dimensions: Exploration = Low, Commitment = Low.",
        ],
        explanation:
          "**Identity Diffusion** combines **Low Exploration** (not investigating options) with **Low Commitment** (no clear direction). Unlike Foreclosure, there is no adopted plan; unlike Moratorium, there is no active search.",
      },
      {
        id: "4-context-human-development-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "identity-moral-socioemotional",
        strategy: "Cultural Perspective on Marcia",
        question:
          "Why do sociocultural psychologists criticize treating Marcia's **Foreclosure** status as universally less mature than Identity Achievement?",
        options: [
          "In collectivist cultures, honouring family-guided choices can promote strong belonging",
          "Marcia's interviews failed to include any questions about occupational choices",
          "Adolescents in collectivist societies lack prefrontal circuits needed for exploration",
          "Foreclosure is defined by high exploration paired with temporary role uncertainty",
        ],
        answerIndex: 0,
        hints: [
          "Consider the FA2027 Core Concept of Perspective and individualistic vs collectivist values.",
          "Does adopting a valued family vocation necessarily signal poor adjustment everywhere?",
        ],
        explanation:
          "Evaluating Foreclosure solely as 'immature' reflects individualistic Western **Bias**; in interdependent societies emphasizing filial harmony, family-guided commitment can correlate with high security and well-being (**Perspective**). High exploration with uncertainty defines Moratorium, not Foreclosure.",
      },
      {
        id: "4-context-human-development-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "identity-moral-socioemotional",
        strategy: "Gender Schema Theory (Martin & Halverson)",
        question:
          "In Martin & Halverson's (1983) memory study, children shown pictures of counter-stereotypical scenes (such as a boy holding a doll or a female firefighter) later frequently recalled the scenes with reversed genders. Which cognitive process explains this distortion?",
        options: [
          "Operant punishment suppressing recall of non-reinforced media images",
          "Prenatal androgen surges directly erasing episodic hippocampal traces",
          "In-group and out-group gender schemas reconstructing inconsistent memories",
          "Incomplete object permanence preventing accurate visual feature binding",
        ],
        answerIndex: 2,
        hints: [
          "Link Martin & Halverson's theory directly to reconstructive schema processing.",
          "What happens when incoming information conflicts with an active mental framework?",
        ],
        explanation:
          "According to **Martin & Halverson's Gender Schema Theory**, once children classify activities into in-group/out-group schemas, they actively filter attention and **reconstruct** counter-stereotypical memories to match schema expectations—echoing Bartlett's cognitive schema theory rather than operant punishment.",
      },
      {
        id: "4-context-human-development-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "identity-moral-socioemotional",
        strategy: "Cognitive vs Sociocultural gender models",
        question:
          "How does Bussey & Bandura's (1999) Social Cognitive Theory of gender development complement Martin & Halverson's Gender Schema Theory?",
        options: [
          "It replaces cognitive self-regulation entirely with innate chromosomal scripts",
          "It denies that children notice gender categories before reaching adolescence",
          "It focuses solely on evolutionary mate-selection hormones across puberty",
          "It emphasizes observational modelling, vicarious reinforcement, and social sanctioning",
        ],
        answerIndex: 3,
        hints: [
          "Recall Bandura's core mechanisms from the Sociocultural approach.",
          "How do parents, peers, and media actively shape gendered behaviour?",
        ],
        explanation:
          "**Bussey & Bandura (1999)** highlight how children observe gendered models, track **vicarious reinforcement** and peer/media sanctioning, and gradually internalize self-regulatory standards—complementing cognitive schema organization rather than denying cognitive processes.",
      },
      {
        id: "4-context-human-development-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "identity-moral-socioemotional",
        strategy: "Theory of Mind & Sally-Anne task",
        question:
          "In Baron-Cohen, Leslie & Frith's (1985) Sally-Anne task, Sally places a marble in her basket and leaves; Anne moves it to a box. Why does a child who answers 'in the box' fail to demonstrate explicit Theory of Mind?",
        options: [
          "The child reports actual marble location instead of attributing a false belief to Sally",
          "The child lacks sensory perception required to track where Anne placed the marble",
          "The child cannot distinguish baskets from boxes due to delayed colour vision",
          "The child has forgotten the first half of the story because of amnesia",
        ],
        answerIndex: 0,
        hints: [
          "Remember that Baron-Cohen included memory and reality control questions ('Where is the marble really?').",
          "What mental state must the child infer about Sally, who was out of the room?",
        ],
        explanation:
          "Passing the **false-belief task** requires recognizing that Sally holds a belief inconsistent with current reality and will search her basket. Answering 'in the box' reflects reporting one's own knowledge of reality rather than attributing a **false belief**; control questions ruled out simple memory failure.",
      },
      {
        id: "4-context-human-development-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "identity-moral-socioemotional",
        strategy: "Werner's Kauai resilience protective factors",
        question:
          "In Emmy Werner's 40-year Kauai longitudinal study, roughly one-third of high-risk infants developed into thriving, well-adjusted adults. Which combination represents **protective factors** across biological, cognitive, and sociocultural approaches?",
        options: [
          "Strict institutional placement, passive avoidance, and isolation from peers",
          "Easy temperament, internal locus of control, and at least one stable caring adult",
          "High prenatal cortisol, rigid foreclosure, and frequent school relocation",
          "Early synaptic loss, external locus of control, and competitive sibling rivalry",
        ],
        answerIndex: 1,
        hints: [
          "Match one protective factor to each approach: Biological, Cognitive, Sociocultural.",
          "What single sociocultural buffer stood out in virtually every resilient Kauai child?",
        ],
        explanation:
          "Werner & Smith identified multi-level protective factors: **easy temperament** (Biological), **internal locus of control** and problem-solving competence (Cognitive), and **at least one stable, supportive adult** such as a grandparent, teacher, or mentor (Sociocultural).",
      },
      {
        id: "4-context-human-development-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "developmental-methods-ethics",
        strategy: "Cross-sectional cohort confound",
        question:
          "A researcher administers a digital memory game on one afternoon to 50 ten-year-olds, 50 thirty-year-olds, and 50 seventy-year-olds, concluding that memory declines steeply after age 30. What is the main methodological flaw in this conclusion?",
        options: [
          "Selective attrition has removed the lowest-scoring participants across waves",
          "Practice effects from repeated exposure inflated the ten-year-olds' scores",
          "Age differences are confounded with generational cohort effects such as digital exposure",
          "Ethical debriefing after Wave 1 biased how older adults approached Wave 2",
        ],
        answerIndex: 2,
        hints: [
          "Was the same group tested repeatedly, or were three different generations tested once?",
          "Recall the mnemonic: Cross-Sectional → Cohort confound.",
        ],
        explanation:
          "Testing three age groups at one calendar point is a **cross-sectional design**, which confounds age with **cohort effects** (e.g., generational differences in digital literacy, schooling, and nutrition). Attrition and practice effects apply to repeated-testing longitudinal studies.",
      },
      {
        id: "4-context-human-development-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "developmental-methods-ethics",
        strategy: "Selective attrition bias",
        question:
          "Over an 8-year longitudinal study of childhood literacy, 34% of participants drop out—disproportionately from families experiencing housing instability and financial hardship. How does this **selective attrition** threaten internal and population validity?",
        options: [
          "The surviving sample becomes wealthier and higher-scoring, exaggerating literacy gains",
          "The surviving sample automatically eliminates all practice effects across testing waves",
          "The baseline sample size shrinks, which guarantees higher ecological validity at Wave 2",
          "Cohort effects increase sharply because participants were born in different decades",
        ],
        answerIndex: 0,
        hints: [
          "Think about *who* remains in the sample when disadvantaged families drop out.",
          "If lower-scoring cases disappear, what happens to the Wave 2 group average?",
        ],
        explanation:
          "**Selective attrition** creates sampling **Bias**: losing stressed or lower-scoring families leaves a disproportionately advantaged surviving cohort, artificially inflating later literacy averages and distorting real developmental **Change**. Longitudinal single-cohort studies do not introduce new birth cohorts.",
      },
      {
        id: "4-context-human-development-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "developmental-methods-ethics",
        strategy: "Cross-sequential design advantage",
        question:
          "How does a **cross-sequential (cohort-sequential) design** overcome the core limitation of a purely cross-sectional study?",
        options: [
          "It eliminates attrition entirely by measuring each birth cohort only once",
          "It randomly assigns infants to different historical eras before testing begins",
          "It uses anonymous surveys so parental consent is no longer ethically required",
          "It tracks multiple cohorts over time so different cohorts can be compared at the same age",
        ],
        answerIndex: 3,
        hints: [
          "Look back at the Birth Cohort × Testing Year matrix.",
          "What happens when Cohort 2010 reaches age 15 in 2025 and Cohort 2015 reaches age 15 in 2030?",
        ],
        explanation:
          "A **cross-sequential design** follows multiple birth cohorts longitudinally over overlapping intervals, allowing researchers to compare different cohorts at the *exact same age* (isolating cohort effects) while also tracking within-person **Change**—though some attrition can still occur.",
      },
      {
        id: "4-context-human-development-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "developmental-methods-ethics",
        strategy: "Longitudinal attrition formula",
        question:
          "A 10-year longitudinal study of socio-emotional resilience begins with **320** five-year-olds at Wave 1. By Wave 4 (age 15), **240** participants remain in the study. What is the **attrition rate**?",
        options: [
          "75.0%",
          "33.3%",
          "25.0%",
          "20.0%",
        ],
        answerIndex: 2,
        hints: [
          "First find the number of dropouts: {{320 - 240}}.",
          "Divide dropouts by the initial baseline sample (320), not the remaining sample (240).",
        ],
        explanation:
          "Dropouts = {{320 - 240 = 80}}. Attrition rate = {{80 / 320 * 100 = 25.0%}}. Choosing 75.0% gives the *retention* rate, while 33.3% mistakenly divides 80 by the final sample (240) instead of the baseline (320).",
      },
      {
        id: "4-context-human-development-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "developmental-methods-ethics",
        strategy: "Child assent vs parental consent",
        question:
          "Both parents of an 8-year-old sign written informed consent forms for a memory experiment. Upon entering the testing room, the child looks anxious and quietly says, 'I don't want to do this.' Under IB ethical **Responsibility** guidelines, what must the researcher do?",
        options: [
          "Continue briefly because legal parental consent legally binds minor participants",
          "Respect the child's dissent immediately and end participation without penalty",
          "Offer an extra sticker reward until the child agrees to complete one trial",
          "Ask the parents to step outside so the researcher can reassure the child privately",
        ],
        answerIndex: 1,
        hints: [
          "Recall the distinction between parental consent and ongoing child assent.",
          "Can offering a bribe or invoking adult authority override a child's refusal?",
        ],
        explanation:
          "Ethical **Responsibility** with vulnerable minors requires **both** parental consent and voluntary **child assent**. A child's verbal or non-verbal **dissent** immediately overrides parental consent; offering rewards to override refusal constitutes undue inducement.",
      },
      {
        id: "4-context-human-development-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "developmental-methods-ethics",
        strategy: "Safeguarding limits to confidentiality",
        question:
          "During a confidential longitudinal interview about family resilience, a 14-year-old participant discloses ongoing physical abuse at home. What is the researcher's primary ethical **Responsibility**?",
        options: [
          "Maintain absolute secrecy because anonymity pledges override all other obligations",
          "Delete the interview transcript immediately and exclude the teen from future waves",
          "Confront the parents directly without notifying any child-protection authorities",
          "Follow mandatory safeguarding procedures to protect the child, as pre-stated in consent",
        ],
        answerIndex: 3,
        hints: [
          "Balance confidentiality against the overriding duty to protect a minor from imminent harm.",
          "Good consent forms with minors explicitly note safeguarding limits upfront.",
        ],
        explanation:
          "While confidentiality is vital in longitudinal research, protection from serious harm takes precedence: researchers have a **mandatory safeguarding duty** (communicated transparently during informed consent/assent) to report disclosures of abuse through designated child-protection channels.",
      },
      {
        id: "4-context-human-development-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "identity-moral-socioemotional",
        strategy: "HL Measurement & Perspective in ToM",
        question:
          "How do implicit eye-gaze studies (Onishi & Baillargeon, 2005) and Milton's (2012) double empathy perspective revise earlier conclusions drawn from Baron-Cohen et al.'s (1985) Sally-Anne task?",
        options: [
          "They prove that false-belief reasoning never emerges before middle adolescence",
          "They show explicit tasks confound verbal demands and frame social differences too narrowly",
          "They confirm that neurotypical toddlers cannot track another person's gaze direction",
          "They demonstrate that genetic factors alone determine Theory of Mind test scores",
        ],
        answerIndex: 1,
        hints: [
          "Consider both Measurement (verbal/executive load of Sally-Anne) and Perspective (double empathy).",
          "What did Onishi & Baillargeon observe in 15-month-olds' spontaneous looking?",
        ],
        explanation:
          "Non-verbal looking studies show implicit belief tracking by 15 months—revealing heavy verbal/executive **Measurement** demands in Sally-Anne—while the **double empathy problem** reframes autistic–non-autistic misunderstandings as bidirectional rather than a one-sided deficit (**Perspective**).",
      },
      {
        id: "4-context-human-development-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "developmental-methods-ethics",
        strategy: "Practice effects in longitudinal designs",
        question:
          "A longitudinal team administers the identical 20-item spatial-rotation puzzle to the same children every six months from age 7 to age 10, observing steep score increases. Which methodological threat best explains why these gains may overstate true cognitive maturation?",
        options: [
          "Practice effects from repeated exposure to the same items inflate subsequent scores",
          "Generational cohort effects alter the children's birth year between testing waves",
          "Cross-sectional sampling variance prevents tracking the same child twice",
          "Random allocation to age groups eliminated baseline individual differences",
        ],
        answerIndex: 0,
        hints: [
          "Notice that the *identical* 20-item test is given every six months.",
          "Can a single cohort's birth year change over time?",
        ],
        explanation:
          "Repeatedly taking the exact same test produces **practice (testing) effects**—familiarity with items and test-taking strategies inflates later scores independently of genuine neurocognitive **Change**. Using parallel test forms helps reduce this **Measurement** confound.",
      },
    ],
  },
  {
    id: "4-context-human-development-m3",
    title: "MCQ Paper 3 — Integrated FA2027 Synthesis (SL & HL)",
    level: "HL",
    questions: [
      {
        id: "4-context-human-development-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Integrating Bio, Cog & Soc approaches",
        question:
          "Which explanation of adolescent risk-taking best demonstrates the FA2027 integrative approach across Biological, Cognitive, and Sociocultural perspectives?",
        options: [
          "Risk-taking is driven exclusively by puberty hormones regardless of social context",
          "Risk-taking occurs solely because adolescents copy television characters automatically",
          "Risk-taking happens because teenagers lack formal operational logic in solitary tasks",
          "Heightened limbic reward sensitivity interacts with peer-status appraisals and cultural norms",
        ],
        answerIndex: 3,
        hints: [
          "Look for the option that weaves together brain maturation, cognitive appraisal, and social/cultural context.",
          "Eliminate single-factor biological or sociocultural reductionism.",
        ],
        explanation:
          "FA2027 emphasizes **biopsychosocial integration**: pubertal limbic–PFC maturational asymmetry (Biological) interacts with subjective reward/status appraisal (Cognitive) and peer/cultural norms (Sociocultural). Single-cause biological or imitation claims are overly reductionist.",
      },
      {
        id: "4-context-human-development-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "HL Technology & Vygotsky's ZPD",
        question:
          "An HL essay examines how adaptive AI tutoring apps affect adolescent maths learning. When does an AI tutor function as authentic **Vygotskian scaffolding** rather than counterproductive cognitive offloading?",
        options: [
          "When it supplies complete final answers immediately so cognitive load stays at zero",
          "When it offers tailored prompts inside the learner's ZPD and gradually fades support",
          "When it forbids peer collaboration so learners rely strictly on solo assimilation",
          "When it keeps task difficulty permanently below the learner's independent mastery level",
        ],
        answerIndex: 1,
        hints: [
          "Recall the defining feature of scaffolding (Wood, Bruner & Ross, 1976): contingent support that fades.",
          "What happens to internalization if a tool does all the thinking for the student?",
        ],
        explanation:
          "Genuine **scaffolding** provides contingent hints within the **ZPD** and progressively fades support as the learner internalizes problem-solving strategies. Giving complete answers immediately encourages passive offloading, while staying below independent mastery produces no growth.",
      },
      {
        id: "4-context-human-development-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "attachment-caregiving-culture",
        strategy: "Linking attachment & resilience",
        question:
          "How do Rutter's English and Romanian Adoptees (ERA) study and Werner's Kauai longitudinal study converge on the FA2027 Core Concept of **Change**?",
        options: [
          "Both prove that prenatal genetics determine adult outcomes regardless of caregiving",
          "Both show that emotional recovery is impossible once a child passes 12 months of age",
          "Both show supportive relationships and enriched environments can redirect high-risk trajectories",
          "Both demonstrate that short cross-sectional surveys capture lifelong resilience accurately",
        ],
        answerIndex: 2,
        hints: [
          "Think about the optimism and plasticity evident in both longitudinal cohorts.",
          "What role did caring adoptive parents (ERA) and stable adult mentors (Kauai) play?",
        ],
        explanation:
          "Both **Rutter's ERA study** (catch-up after adoption into nurturing UK homes) and **Werner's Kauai study** (resilience and adult turnaround via supportive adult bonds) demonstrate developmental plasticity and **Change**—refuting genetic determinism and strict irreversibility.",
      },
      {
        id: "4-context-human-development-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "attachment-caregiving-culture",
        strategy: "HL Culture — Ecological fallacy in meta-analysis",
        question:
          "A student writes: *'Because van IJzendoorn & Kroonenberg (1988) reported 35% Avoidant attachment in West Germany, any randomly selected German infant is likely to show avoidant reunion behaviour.'* Which analytical error has the student committed?",
        options: [
          "Ecological fallacy and ignoring that Secure (57%) remained the modal German pattern",
          "Practice effect bias caused by testing the same German infants repeatedly over ten years",
          "Confirmation of monotropy by assuming fathers cannot serve as primary attachment figures",
          "Overestimating construct validity by citing an emic German observational protocol",
        ],
        answerIndex: 0,
        hints: [
          "Check two facts: first, 35% is NOT even a majority; second, group averages cannot predict an individual.",
          "Recall the HL Culture concept of applying country-level statistics stereotypicallly to individuals.",
        ],
        explanation:
          "Inferring an individual infant's attachment from a national percentage commits the **ecological fallacy** (a core HL Culture critique) AND misreads the data: **57%** of West German infants were **Secure (Type B)**, and intra-cultural variation was 1.5× inter-cultural variation.",
      },
      {
        id: "4-context-human-development-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "identity-moral-socioemotional",
        strategy: "Connecting IWM and identity exploration",
        question:
          "Longitudinal research finds that adolescents with secure early attachment histories are more likely to reach **Identity Achievement** or healthy **Moratorium** than Identity Diffusion. Which psychological link best explains this association?",
        options: [
          "Secure infants experience accelerated synaptic pruning that finishes by age ten",
          "A secure Internal Working Model provides a safe psychological base for exploring new roles",
          "Secure attachment forces adolescents to adopt parental careers without exploration",
          "Securely attached teenagers avoid peer groups entirely, eliminating social comparison",
        ],
        answerIndex: 1,
        hints: [
          "Apply Ainsworth's 'secure base' concept to adolescent exploration.",
          "How does trusting that caregivers remain supportive help a teenager test uncertain identity options?",
        ],
        explanation:
          "A secure **Internal Working Model** acts as an emotional **secure base**: adolescents confident in caregiver support feel safer taking the interpersonal and vocational risks needed for **Exploration** (Moratorium → Achievement), whereas rigid obedience without exploration reflects Foreclosure.",
      },
      {
        id: "4-context-human-development-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "identity-moral-socioemotional",
        strategy: "HL Technology & adolescent identity",
        question:
          "An HL study examines social media use among 15-year-olds. Curated influencer feeds narrow body-image ideals while online hobby communities help shy teens explore creative careers. Which conclusion aligns best with FA2027 Human Development & Technology evidence?",
        options: [
          "Digital media universally causes Identity Diffusion across every cultural context",
          "Online interaction completely replaces biological prefrontal maturation during puberty",
          "Technology eliminates gender schemas by removing all peer modelling cues online",
          "Digital environments have bidirectional effects, supporting exploration yet amplifying comparison",
        ],
        answerIndex: 3,
        hints: [
          "Avoid all-or-nothing technological determinism.",
          "Look at how the scenario describes *both* an opportunity (exploration) and a risk (narrowed comparison).",
        ],
        explanation:
          "Contemporary research (e.g., Orben & Przybylski; identity-development studies) reveals nuanced, **bidirectional** technology effects: supportive niche communities can scaffold healthy **Moratorium** exploration, whereas appearance-focused algorithms can intensify social comparison and rigid gender schemas.",
      },
      {
        id: "4-context-human-development-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "developmental-methods-ethics",
        strategy: "Paper 2 Concept-based critique",
        question:
          "In a Paper 2 unseen developmental study, researchers evaluate a new school empathy programme by interviewing 9-year-olds inside the headteacher's office while the headteacher sits silently nearby. Which pair of FA2027 Core Concepts is most directly threatened?",
        options: [
          "Causality via random allocation and Change via neuroplastic myelination",
          "Perspective via cross-sequential cohorts and Measurement via twin concordance",
          "Bias via social desirability demand characteristics and Responsibility via power pressure",
          "Change via sensitive periods and Bias via imposed etic translation error",
        ],
        answerIndex: 2,
        hints: [
          "Think about how a 9-year-old behaves when the school principal watches them answer questions about empathy.",
          "Does the child genuinely feel free to refuse or answer honestly?",
        ],
        explanation:
          "Having an authority figure present threatens **Bias** (heightened social desirability and 'please the adult' demand characteristics distorting answers) and **Responsibility** (power imbalance undermining voluntary child assent and right to withdraw).",
      },
      {
        id: "4-context-human-development-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "developmental-methods-ethics",
        strategy: "Multi-wave compound attrition",
        question:
          "A longitudinal adolescent well-being study starts with **500** participants at Wave 1 (age 12). Between Wave 1 and Wave 2, **20%** drop out. Between Wave 2 and Wave 3, **15%** of the *remaining* participants drop out. What is the **total attrition rate** from Wave 1 to Wave 3?",
        options: [
          "32.0%",
          "35.0%",
          "68.0%",
          "17.5%",
        ],
        answerIndex: 0,
        hints: [
          "Calculate how many remain after Wave 2 first: {{500 * 0.80 = 400}}.",
          "Next find how many remain after Wave 3: {{400 * 0.85 = 340}}, then compute total loss over 500.",
        ],
        explanation:
          "After Wave 2, {{500 * 0.80 = 400}} remain. After Wave 3, {{400 * 0.85 = 340}} remain. Total dropouts = {{500 - 340 = 160}}, so total attrition = {{160 / 500 * 100 = 32.0%}}. Simply adding 20% + 15% = 35% ignores that the second 15% applies to the smaller Wave 2 cohort (400), while 68.0% is overall retention.",
      },
      {
        id: "4-context-human-development-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "developmental-methods-ethics",
        strategy: "HL Paper 3 statistical vs internal validity",
        question:
          "An HL Paper 3 longitudinal study reports a statistically significant rise in teen resilience scores from age 13 to age 17 ({{p = 0.008}}, Cohen's {{d = 0.45}}), but 42% of baseline participants dropped out—mostly students with lower baseline resilience. What is the sharpest methodological critique?",
        options: [
          "A p-value of 0.008 proves there is a 99.2% probability the intervention caused the rise",
          "Because Cohen's d is 0.45, the attrition rate has zero effect on the observed mean",
          "Statistical significance is impossible whenever longitudinal attrition exceeds 25%",
          "Selective attrition of lower-scoring teens likely inflated the Wave 2 mean, confounding Change",
        ],
        answerIndex: 3,
        hints: [
          "Distinguish statistical significance (p < 0.05) from internal validity (did dropout bias the mean?).",
          "Also recall that p-values do NOT state the probability that a hypothesis is true.",
        ],
        explanation:
          "Even with {{p = 0.008}} and moderate effect size ({{d = 0.45}}), losing 42% of predominantly lower-resilience teens introduces severe **selective attrition bias**—artificially lifting the Wave 2 average and threatening **Measurement** validity. Moreover, a p-value is never the probability that a causal claim is true.",
      },
      {
        id: "4-context-human-development-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "brain-maturation-cognitive-dev",
        strategy: "Critical vs sensitive period",
        question:
          "Why do contemporary developmental psychologists favour the term **sensitive period** over **critical period** when describing early language acquisition and attachment?",
        options: [
          "Sensitive periods assume environmental experience has zero effect on synaptic plasticity",
          "Sensitive periods recognize heightened early plasticity while allowing later recovery and Change",
          "Sensitive periods claim that biological brain development stops entirely at age six months",
          "Sensitive periods apply only to non-human animal imprinting rather than human infants",
        ],
        answerIndex: 1,
        hints: [
          "Think about Rutter's ERA findings and neuroplasticity across the lifespan.",
          "Which term allows partial or substantial catch-up outside the optimal window?",
        ],
        explanation:
          "A **sensitive period** denotes an optimal window of heightened neuroplasticity during which input shapes circuits most efficiently, yet leaves capacity for later learning and recovery (**Change**)—unlike a strict **critical period** (e.g., avian imprinting) after which acquisition is impossible.",
      },
      {
        id: "4-context-human-development-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "identity-moral-socioemotional",
        strategy: "HL Motivation & adolescent identity",
        question:
          "Integrating Deci & Ryan's Self-Determination Theory (HL Motivation) with Marcia's identity model, why do autonomy-supportive parents predict **Identity Achievement** more strongly than controlling parents?",
        options: [
          "Autonomy support satisfies psychological needs, fostering intrinsic exploration and authentic commitment",
          "Controlling parenting accelerates prefrontal myelination so adolescents skip Moratorium altogether",
          "Autonomy-supportive parents impose fixed career choices, encouraging adaptive Foreclosure",
          "Extrinsic financial rewards from controlling parents eliminate disequilibrium during identity search",
        ],
        answerIndex: 0,
        hints: [
          "Link Self-Determination Theory's three needs (autonomy, competence, relatedness) to Marcia's Exploration axis.",
          "Does controlling pressure encourage open exploration or unexamined compliance?",
        ],
        explanation:
          "When parents support **autonomy**, competence, and relatedness, adolescents engage in intrinsically motivated **Exploration** and endorse personally meaningful **Commitments** (**Identity Achievement**). Controlling parenting pressures unexamined compliance (Foreclosure) or alienated disengagement (Diffusion).",
      },
      {
        id: "4-context-human-development-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "developmental-methods-ethics",
        strategy: "Cross-sequential cohort vs age separation",
        question:
          "In a cross-sequential study of abstract reasoning (0–100 scale): the **2010 birth cohort** averages **74** at age 12 (in 2022) and **82** at age 16 (in 2026); the **2014 birth cohort** averages **79** at age 12 (in 2026). How large is the **cohort effect** favouring the 2014 cohort at age 12?",
        options: [
          "+3 points",
          "+8 points",
          "+5 points",
          "−5 points",
        ],
        answerIndex: 2,
        hints: [
          "To isolate the cohort effect, compare the two *different birth cohorts* when both are measured at the *same age* (age 12).",
          "Subtract the 2010 cohort's age-12 score (74) from the 2014 cohort's age-12 score (79).",
        ],
        explanation:
          "Holding age constant at **12**, the 2014 cohort scored **79** vs **74** for the 2010 cohort—a **+5 point cohort effect** (younger cohort advantage). By contrast, +8 points ({{82 - 74}}) is the true longitudinal age gain, and +3 points ({{82 - 79}}) is the distorted 2026 cross-sectional gap.",
      },
      {
        id: "4-context-human-development-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "identity-moral-socioemotional",
        strategy: "Distinguishing cognitive & social gender theories",
        question:
          "A 5-year-old boy refuses to play with a toy kitchen despite his parents encouraging him to try it, insisting 'Kitchens are for girls.' Which pair of explanations best accounts for why gender-typed behaviour persists even without parental reinforcement?",
        options: [
          "Monotropic attachment imprinting and complete absence of Theory of Mind",
          "Self-constructed gender schemas (Martin & Halverson) plus peer/media modelling (Bandura)",
          "Preoperational conservation failure paired with synaptic blooming in visual cortex",
          "Longitudinal attrition bias combined with cross-sectional cohort confounds",
        ],
        answerIndex: 1,
        hints: [
          "Parents are only *one* source of social input, and children also actively categorize their own world.",
          "Combine Martin & Halverson's cognitive mechanism with Bandura's broader sociocultural models.",
        ],
        explanation:
          "Children actively self-socialize through internal **gender schemas** (Martin & Halverson, 1981) while absorbing **peer and media modelling/sanctioning** outside the home (Bussey & Bandura, 1999)—explaining why gender-typed preferences persist even with egalitarian parents.",
      },
      {
        id: "4-context-human-development-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "attachment-caregiving-culture",
        strategy: "Disorganized attachment & Responsibility",
        question:
          "Main & Solomon (1986) introduced **Type D (Disorganized-Disoriented)** attachment after noticing some Strange Situation infants froze, rocked, or approached caregivers with fearful expressions. Why is identifying Type D vital for applied **Responsibility**?",
        options: [
          "It signals elevated risk of frightening caregiving or trauma, guiding early family support",
          "It demonstrates that cross-cultural parenting in East Asia causes neurological injury",
          "It proves that laboratory observations require zero distress stopping rules for infants",
          "It replaces Type B secure attachment as the modal classification in Western samples",
        ],
        answerIndex: 0,
        hints: [
          "What caregiving environment is strongly linked with contradictory approach–fear responses?",
          "Think about how developmental findings inform child-protection and family-intervention Responsibility.",
        ],
        explanation:
          "**Type D (Disorganized)** attachment reflects a collapse of organized coping strategies when the caregiver is simultaneously a source of fear and comfort; recognizing it alerts clinicians and social workers to intervene early with trauma-informed family support (**Responsibility**).",
      },
      {
        id: "4-context-human-development-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "developmental-methods-ethics",
        strategy: "HL Qualitative trustworthiness in developmental interviews",
        question:
          "A qualitative longitudinal study interviews immigrant adolescents annually about bicultural identity formation. Which methodological practice most directly strengthens **credibility** and **ethical Responsibility** simultaneously?",
        options: [
          "Replacing all open-ended interviews with a single forced-choice Western IQ test",
          "Removing participants' quotes from the final report without informing families",
          "Concealing the research topic until age 21 so adolescents cannot withdraw early",
          "Conducting age-appropriate member checking and reconfirming ongoing assent at each wave",
        ],
        answerIndex: 3,
        hints: [
          "Recall HL Paper 3 qualitative trustworthiness criteria (credibility, transferability, dependability, confirmability).",
          "Which practice verifies participants' meanings while honouring their ongoing voice over multiple years?",
        ],
        explanation:
          "**Member checking** ensures researchers accurately represent adolescents' lived bicultural perspectives (**credibility**), while **reconfirming ongoing assent** at every longitudinal wave upholds youth autonomy as participants mature (**Responsibility**).",
      },
    ],
  },
];
