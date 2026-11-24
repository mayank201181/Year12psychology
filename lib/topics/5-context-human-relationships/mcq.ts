import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 (m1): Attraction, Maintenance & Dissolution
  // answerIndex sequence: [2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 3, 1, 0, 3, 2]
  // spread: 0→4, 1→3, 2→4, 3→4
  // =========================================================================
  {
    id: "5-context-human-relationships-m1",
    title: "MCQ Paper 1: Attraction, Maintenance & Dissolution",
    level: "SL",
    questions: [
      {
        id: "5-context-human-relationships-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "Biological cues in mate choice",
        question:
          "In Wedekind et al.'s (1995) sweaty T-shirt experiment, how did oral contraceptive use change female participants' odour preferences?",
        options: [
          "Women using oral contraceptives could no longer detect any male body odour differences.",
          "Women using oral contraceptives preferred scents of men who shared identical dietary habits.",
          "Women using oral contraceptives preferred MHC-similar scents rather than MHC-dissimilar scents.",
          "Women using oral contraceptives rated all unfamiliar male T-shirts as equally attractive.",
        ],
        answerIndex: 2,
        hints: [
          "Recall what women *not* on hormonal contraception preferred: dissimilar MHC genes for offspring immune diversity.",
          "Hormonal contraception mimics aspects of pregnancy hormones, which reverses the preference direction.",
        ],
        explanation:
          "Women not taking oral contraceptives preferred MHC-dissimilar male scents (supporting immune-diversity benefits), whereas women taking oral contraceptives showed the reversed preference for MHC-similar scents, illustrating hormonal moderation of biological attraction cues. Olfactory sensitivity itself was not eliminated.",
      },
      {
        id: "5-context-human-relationships-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "Fisher's neurochemical systems",
        question:
          "According to Helen Fisher's neurobiological model of romantic love, which pair of hormones primarily sustains long-term pair-bonding and attachment rather than early passionate infatuation?",
        options: [
          "Oxytocin and vasopressin released during bonding and calm physical closeness",
          "Dopamine and norepinephrine flooding reward pathways during early infatuation",
          "Cortisol and adrenaline secreted by the adrenal glands during acute stress",
          "Testosterone and oestrogen driving general sexual arousal and initial lust",
        ],
        answerIndex: 0,
        hints: [
          "Fisher divided romantic love into three systems: lust, romantic attraction, and long-term attachment.",
          "Dopamine drives early reward-seeking attraction, while two neuropeptides underpin long-term calm attachment.",
        ],
        explanation:
          "In Fisher's model, **oxytocin and vasopressin** underpin long-term attachment and partner bonding. Dopamine and norepinephrine characterise early romantic attraction (infatuation), while testosterone and oestrogen primarily drive lust.",
      },
      {
        id: "5-context-human-relationships-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "Cognitive mechanisms of attraction",
        question:
          "Why did Montoya, Horton & Kirchner's (2008) meta-analysis conclude that *perceived* similarity predicts relationship satisfaction more strongly than *actual* similarity in established couples?",
        options: [
          "Actual personality similarity cannot be measured reliably with quantitative psychometric scales.",
          "Biological MHC dissimilarity automatically cancels out actual attitude similarity after one year.",
          "Couples rarely discuss their attitudes openly until after they have decided to separate.",
          "Believing a partner shares your worldview creates cognitive consistency and emotional validation.",
        ],
        answerIndex: 3,
        hints: [
          "Focus on the cognitive mechanism linking similarity to liking: how you *interpret* your partner's outlook.",
          "Think about consensual validation and reducing cognitive dissonance inside an ongoing bond.",
        ],
        explanation:
          "Perceived similarity provides ongoing **cognitive consistency** and consensual validation of one's beliefs, sustaining warmth even when partners differ objectively on minor traits. Actual similarity can be measured reliably, and MHC dissimilarity concerns immune genetics rather than attitudes.",
      },
      {
        id: "5-context-human-relationships-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "Functional proximity vs mere distance",
        question:
          "In Festinger, Schachter & Back's (1950) Westgate West housing study, residents living near stairwells and shared mailboxes formed significantly more friendships than residents in corner apartments. Which concept best explains this finding?",
        options: [
          "The matching hypothesis lowering fear of social rejection among equally attractive neighbours",
          "Functional distance increasing unplanned encounters and activating the mere exposure effect",
          "Kin selection prompting students to prioritise neighbours who resembled their siblings",
          "Cultural marriage scripts requiring university residents to socialise within one corridor",
        ],
        answerIndex: 1,
        hints: [
          "Compare architectural layout (stairwells and mailboxes) with simple straight-line distance.",
          "What happens psychologically when people repeatedly pass each other in neutral daily routines?",
        ],
        explanation:
          "**Functional distance** — how architectural features funnel people along shared pathways — increases repeated unplanned contact, fostering familiarity and liking through Zajonc's **mere exposure effect**. The matching hypothesis deals with romantic attractiveness pairing rather than corridor layout.",
      },
      {
        id: "5-context-human-relationships-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "FA2027 Core Concept: Causality & Change",
        question:
          "What is the most important methodological limitation preventing Gupta & Singh's (1982) study from proving that arranged marriages cause love to grow over time?",
        options: [
          "It used a cross-sectional snapshot of different cohorts, risking cohort and survivorship confounds.",
          "It tested only single university students who had never experienced long-term romantic partnerships.",
          "It relied exclusively on brain-imaging scans without collecting any self-report relationship ratings.",
          "It assigned couples randomly to arranged or love marriages without obtaining ethical consent.",
        ],
        answerIndex: 0,
        hints: [
          "Did Gupta & Singh follow the *same* 50 couples over ten years, or compare separate groups married for different lengths of time?",
          "Connect the research design to the FA2027 Core Concepts of **Change** and **Causality**.",
        ],
        explanation:
          "Gupta & Singh compared *different* couples married for 1, 5, and 10+ years at one time point (**cross-sectional design**). Differences between cohorts and **survivorship bias** (dissatisfied couples leaving earlier) mean intra-couple growth cannot be established causally. They used Rubin's self-report scales, not fMRI or random assignment.",
      },
      {
        id: "5-context-human-relationships-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "Initial attraction vs realistic pairing",
        question:
          "In Walster et al.'s (1966) computer dance study, participants preferred the most physically attractive dates regardless of their own attractiveness, yet real-world couples tend to match in attractiveness. How does the matching hypothesis reconcile this difference?",
        options: [
          "Physical attractiveness stops influencing interpersonal judgments once two people converse.",
          "People consistently rate themselves as more physically attractive than external judges do.",
          "When rejection risk is real, people balance ideal desirability against likelihood of reciprocation.",
          "Computer algorithms forced participants into mismatched pairs during the university dance.",
        ],
        answerIndex: 2,
        hints: [
          "In the computer dance, dates were pre-assigned — did participants risk being turned down when asking someone out?",
          "Contrast zero-rejection lab pairing with real-life partner selection where rejection carries social cost.",
        ],
        explanation:
          "In Walster's dance, pairing was assigned by researchers so participants faced no initial rejection risk. In everyday courtship, people factor in the **probability of reciprocation** alongside desirability, leading couples to pair at broadly comparable levels of attractiveness (Murstein, 1972; Feingold, 1988).",
      },
      {
        id: "5-context-human-relationships-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Gottman's Four Horsemen",
        question:
          "During a disagreement over housework, Priya rolls her eyes and mocks her partner: 'Honestly, it's pathetic how you can't manage basic adult tasks.' Which of Gottman's Four Horsemen is illustrated, and why is it critical?",
        options: [
          "Stonewalling, because Priya has physiologically flooded and ceased verbal communication.",
          "Contempt, because mockery and superiority are the single strongest predictor of divorce.",
          "Defensiveness, because Priya is portraying herself as an innocent victim to deflect blame.",
          "Criticism, because Priya is calmly expressing a specific complaint about a single evening.",
        ],
        answerIndex: 1,
        hints: [
          "Look closely at the tone and non-verbal cue: eye-rolling and calling someone 'pathetic'.",
          "Which Horseman communicates moral superiority and disrespect?",
        ],
        explanation:
          "Mockery, sarcasm, insulting labels ('pathetic'), and eye-rolling operationalise **contempt** — communicating disgust and superiority, which Gottman & Levenson identified as the single strongest behavioural predictor of divorce. Calmly voicing a specific complaint is healthy rather than criticism.",
      },
      {
        id: "5-context-human-relationships-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Gottman's 5:1 positivity ratio",
        question:
          "Researchers code 22 positive interactions and 5 negative interactions during a couple's 15-minute conflict discussion. How does this couple compare with Gottman & Levenson's stability benchmark?",
        options: [
          "They exceed the benchmark because 22 positive behaviours always guarantee marital stability.",
          "They exactly meet the benchmark because their ratio simplifies neatly to 5 to 1.",
          "They fall below the benchmark and need 10 additional positive behaviours to reach stability.",
          "They fall slightly below the 5:1 ratio (4.4:1) and need 3 more positive behaviours to reach 5:1.",
        ],
        answerIndex: 3,
        hints: [
          "Divide positive interactions by negative interactions: {{22 / 5}}.",
          "For 5 negative interactions, how many positive interactions equal a {{5 : 1}} ratio?",
        ],
        explanation:
          "The couple's ratio is {{22 / 5 = 4.4 : 1}}, just below Gottman's **5 : 1** conflict benchmark. With 5 negative interactions, meeting 5 : 1 requires {{5 * 5 = 25}} positive interactions — i.e., **3 more** positive interactions.",
      },
      {
        id: "5-context-human-relationships-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Cognitive attributions in relationships",
        question:
          "When Noah forgets an anniversary dinner, his partner thinks, 'He has been exhausted from night shifts all week and normally remembers.' Which maintenance mechanism does this response illustrate?",
        options: [
          "Distress-maintaining attribution linking partner mistakes to permanent personality defects",
          "Emotional stonewalling designed to avoid confronting painful disagreements directly",
          "Relationship-enhancing attribution explaining a negative act through external, temporary causes",
          "Extrinsic investment calculation focusing on shared financial penalties of separation",
        ],
        answerIndex: 2,
        hints: [
          "Notice whether the partner blames Noah's stable character or a temporary external situation.",
          "Bradbury & Fincham contrasted two attribution styles in satisfied versus distressed couples.",
        ],
        explanation:
          "Attributing a partner's negative slip to **external, unstable/temporary causes** (exhausting night shifts) rather than internal character flaws is a **relationship-enhancing attribution** (Bradbury & Fincham, 1990), which cushions conflict and fosters constructive accommodation.",
      },
      {
        id: "5-context-human-relationships-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Rusbult's Investment Model (C = S − A + I)",
        question:
          "How does Rusbult's Investment Model explain why a partner in an emotionally unfulfilling or harmful relationship may nonetheless remain committed to staying?",
        options: [
          "Large intrinsic and extrinsic investments plus poor perceived alternatives sustain commitment.",
          "Positive illusions eliminate any conscious awareness that relationship satisfaction has dropped.",
          "High commitment can only occur when satisfaction scores exceed alternative scores by 5 to 1.",
          "Attachment hormones permanently prevent individuals from evaluating outside alternatives.",
        ],
        answerIndex: 0,
        hints: [
          "Recall the three predictors in Rusbult's model: Satisfaction (S), Alternatives (A), and Investment (I).",
          "Can commitment remain high when S is low if the other two terms pull strongly toward staying?",
        ],
        explanation:
          "In Rusbult's model ({{C = S - A + I}}), **high investments** (shared children, finances, years of emotional disclosure) paired with **poor perceived alternatives** (financial dependence, fear of isolation) can keep commitment high despite low satisfaction — a crucial clinical and ethical (**Responsibility**) insight.",
      },
      {
        id: "5-context-human-relationships-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Duck's 4-phase dissolution sequence",
        question:
          "After ending a four-year relationship, Daniel spends weeks explaining to friends that he and his ex simply 'grew in different career directions' so both can preserve dignity and move forward. Which phase of Duck's dissolution model is Daniel in?",
        options: [
          "The intrapsychic phase of private rumination before voicing complaints",
          "The dyadic phase of direct confrontation and renegotiation with the partner",
          "The social phase of publicly announcing the breakup to divide mutual friends",
          "The grave-dressing phase of crafting a coherent, face-saving closure narrative",
        ],
        answerIndex: 3,
        hints: [
          "Notice the breakup has *already occurred* and Daniel is constructing a clean post-breakup story.",
          "Recall the mnemonic I-D-S-G: Intrapsychic, Dyadic, Social, Grave-dressing.",
        ],
        explanation:
          "Constructing an acceptable, face-saving public account of why the relationship ended so both parties preserve self-esteem and achieve closure defines Duck's **grave-dressing phase**. The social phase occurs earlier during the active public dismantling of the partnership.",
      },
      {
        id: "5-context-human-relationships-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "maintenance-communication-breakdown",
        strategy: "FA2027 Core Concept: Perspective (Cultural Bias)",
        question:
          "Why do cross-cultural psychologists critique Duck's (1982) Phase Model of relationship dissolution as culturally biased?",
        options: [
          "It claims relationship breakdown occurs instantaneously without intermediate cognitive reflection.",
          "It assumes private dyadic confrontation occurs before extended family or community involvement.",
          "It focuses solely on physiological heart-rate measurements rather than verbal communication.",
          "It argues that arranged marriages cannot experience dissatisfaction or social-network repair.",
        ],
        answerIndex: 1,
        hints: [
          "Check the order of Duck's middle phases: Dyadic (Stage 2) comes *before* Social (Stage 3).",
          "How might conflict resolution unfold differently in collectivistic cultures with tight family networks?",
        ],
        explanation:
          "Duck's sequence places private **dyadic** confrontation before **social** involvement, reflecting **individualistic** norms of couple autonomy. In many **collectivistic** communities, elders or extended family mediate early in the breakdown process, illustrating the FA2027 concept of **Perspective**.",
      },
      {
        id: "5-context-human-relationships-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Murray, Holmes & Griffin (1996)",
        question:
          "What did Murray, Holmes & Griffin's (1996) longitudinal study reveal about couples who held mild 'positive illusions' about their partners?",
        options: [
          "Idealising partners slightly beyond their self-views predicted higher satisfaction and stability.",
          "Holding positive illusions caused sharp disillusionment and doubled breakup rates within a year.",
          "Only couples with perfectly accurate, objective partner ratings stayed together over twelve months.",
          "Positive illusions benefited newlyweds but had no measurable effect on dating university couples.",
        ],
        answerIndex: 0,
        hints: [
          "Does seeing your partner in a slightly rosy light backfire or act as a self-fulfilling buffer?",
          "Think about how warm expectations encourage partners to live up to the idealised image.",
        ],
        explanation:
          "Murray, Holmes & Griffin (1996) found that viewing a partner slightly more favourably than the partner's own self-concept predicted greater **satisfaction, lower conflict, and stronger stability** a year later, functioning as a constructive cognitive buffer rather than triggering rapid disillusionment.",
      },
      {
        id: "5-context-human-relationships-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "maintenance-communication-breakdown",
        strategy: "FA2027 Core Concept: Measurement in observational studies",
        question:
          "Which statement best evaluates the **Measurement** strengths and limitations of Gottman & Levenson's (1992) 'Love Lab' methodology?",
        options: [
          "Covert street observation ensured total ecological validity but prevented recording verbal exchanges.",
          "Self-report questionnaires eliminated observer bias but lacked any longitudinal follow-up outcomes.",
          "Randomly assigning couples to divorce established causality but violated informed consent ethics.",
          "Structured coding and physiology gave strong reliability, yet lab filming risked participant reactivity.",
        ],
        answerIndex: 3,
        hints: [
          "How did Gottman collect his data — covert street filming, pure questionnaires, or structured apartment-lab observation?",
          "Balance a genuine measurement strength (inter-rater reliability / physiological triangulation) with a realistic lab limitation.",
        ],
        explanation:
          "Gottman & Levenson combined structured behavioural coding (SPAFF, giving strong inter-rater reliability) with physiological sensors and longitudinal follow-up, yet filming couples discussing conflict inside a laboratory apartment introduced potential **reactivity (Hawthorne effect)** and limited early sample diversity.",
      },
      {
        id: "5-context-human-relationships-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "HL Culture Extension: Eagly & Wood (1999)",
        question:
          "How did Eagly & Wood's (1999) reanalysis of Buss's (1989) 37-culture mate-preference dataset challenge purely evolutionary interpretations?",
        options: [
          "They discovered Buss's original survey contained arithmetic coding errors in European samples.",
          "They showed sex differences in preferring status vs youth vanished across every single nation.",
          "They found traditional sex-typed preferences shrank steadily as national gender equality increased.",
          "They proved genetic MHC compatibility predicted mate ratings better than either status or youth.",
        ],
        answerIndex: 2,
        hints: [
          "Eagly & Wood tested the **social structural theory**: what happens to women's preference for earning power when women have equal economic access?",
          "Look for moderation by sociocultural equality rather than total disappearance or data-entry error.",
        ],
        explanation:
          "Eagly & Wood (1999) correlated Buss's country-level scores with UN gender-equality indices and found that sex differences in prioritising earning prospects vs domestic/youth cues **narrowed substantially in more gender-equal societies**, demonstrating powerful sociocultural moderation (HL Culture & **Perspective**).",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 (m2): Prosociality, Bystanderism & Prejudice
  // answerIndex sequence: [1, 3, 0, 2, 1, 0, 3, 2, 0, 1, 3, 2, 3, 1, 0]
  // spread: 0→4, 1→4, 2→3, 3→4
  // =========================================================================
  {
    id: "5-context-human-relationships-m2",
    title: "MCQ Paper 2: Prosociality, Bystanderism & Prejudice",
    level: "SL",
    questions: [
      {
        id: "5-context-human-relationships-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Hamilton's Rule rB > C",
        question:
          "A risky rescue carries a personal fitness cost of {{C = 1.4}} units. According to Hamilton's rule ({{rB > C}}), would kin selection favour performing the rescue to save **two half-siblings** who each gain {{B = 3}} fitness units?",
        options: [
          "No, because half-siblings share r = 0.125 so total indirect benefit is only 0.75 units.",
          "Yes, because each half-sibling has r = 0.25 so total indirect benefit is 1.5 > 1.4.",
          "No, because Hamilton's rule applies strictly to parents and full siblings, never half-siblings.",
          "Yes, because each half-sibling has r = 0.5 so total indirect benefit reaches 3.0 units.",
        ],
        answerIndex: 1,
        hints: [
          "Recall the exact coefficient of genetic relatedness `r` for a half-sibling (shares one parent, not two).",
          "Calculate {{2 * r * B}} and compare the product with {{C = 1.4}}.",
        ],
        explanation:
          "A half-sibling has relatedness {{r = 0.25}}. Saving two half-siblings who each gain {{B = 3}} yields total indirect fitness benefit {{2 * 0.25 * 3 = 1.5}}. Since {{1.5 > 1.4}}, Hamilton's rule ({{rB > C}}) is satisfied. Full siblings have {{r = 0.5}} and first cousins have {{r = 0.125}}.",
      },
      {
        id: "5-context-human-relationships-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Madsen et al. (2007) cross-cultural kin selection",
        question:
          "In Madsen et al.'s (2007) wall-sit endurance experiments in the UK and South Africa, what key pattern emerged across varying levels of relatedness?",
        options: [
          "Only British participants endured longer pain for closer relatives while Zulu participants helped everyone equally.",
          "Participants refused to hold the painful posture for anyone other than identical twins or parents.",
          "Persistence depended solely on monetary value and showed zero relationship to genetic relatedness.",
          "Endurance increased linearly with genetic relatedness in both cultures, with high empathy toward close friends.",
        ],
        answerIndex: 3,
        hints: [
          "Did Madsen et al. find cross-cultural support for Hamilton's kin-selection gradient?",
          "Remember also the sociocultural nuance observed for close non-kin friends.",
        ],
        explanation:
          "Across both UK and South African (Zulu) samples, participants held the painful ski-wall position longer as biological relatedness `r` increased (`0.5 > 0.25 > 0.125`), supporting kin selection cross-culturally while also revealing strong socially mediated willingness to help close unrelated friends.",
      },
      {
        id: "5-context-human-relationships-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Latané & Darley Step 2 vs Step 3",
        question:
          "In Latané & Darley's (1968) smoke-filled room study, only 10% of participants sitting with two calm confederates reported thick smoke pouring through a vent, compared with 75% when alone. Which cognitive mechanism primarily drove this drop?",
        options: [
          "Pluralistic ignorance — looking to calm peers and misinterpreting the ambiguous smoke as harmless",
          "Diffusion of responsibility — knowing it was a fire but expecting the confederates to extinguish it",
          "Kin-selection calculation — realising neither confederate shared genetic relatedness with the participant",
          "Negative-state relief — leaving the room rapidly to avoid experiencing empathic sadness",
        ],
        answerIndex: 0,
        hints: [
          "Was the smoke clearly labelled as an emergency, or was it ambiguous?",
          "Step 2 (Interpret as emergency) fails when everyone copies everyone else's calm face.",
        ],
        explanation:
          "Because the smoke was initially ambiguous (perhaps steam or air-conditioning vapour), participants checked the impassive confederates and collectively defined the event as a non-emergency — **pluralistic ignorance** (Step 2). By contrast, **diffusion of responsibility** (Step 3) dominated the intercom seizure study where the emergency was unambiguous.",
      },
      {
        id: "5-context-human-relationships-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Darley & Latané (1968) vs Piliavin et al. (1969)",
        question:
          "Which key empirical contrast emerged between Darley & Latané's (1968) intercom seizure study and Piliavin, Rodin & Piliavin's (1969) NYC subway field experiment?",
        options: [
          "Helping fell sharply with crowd size on the subway but stayed at 95% in the intercom cubicles.",
          "Subway riders helped drunk victims significantly more often than ill victims carrying a cane.",
          "Larger subway crowds showed no diffusion of responsibility, unlike anonymous intercom groups.",
          "Piliavin obtained full written informed consent whereas Darley & Latané conducted covert field observation.",
        ],
        answerIndex: 2,
        hints: [
          "Check the crowd-size effect in Piliavin's subway carriages (1–3 vs 7+ riders).",
          "Also check the cane (95%) vs drunk (50%) difference and ethics in both studies.",
        ],
        explanation:
          "Unlike Darley & Latané's isolated intercom groups (where helping dropped from 85% to 31%), Piliavin et al. found **no diffusion of responsibility** in larger subway carriages, with 95% of cane trials receiving help (vs 50% for drunk victims). Piliavin's field experiment had high ecological validity but did *not* obtain informed consent.",
      },
      {
        id: "5-context-human-relationships-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Batson's 2×2 Elaine experiment",
        question:
          "In Batson et al.'s (1981) Elaine shock experiment, which specific experimental cell provided the strongest evidence for the Empathy–Altruism Hypothesis over purely egoistic arousal relief?",
        options: [
          "Low-empathy participants helping frequently when escaping the experiment was difficult",
          "High-empathy participants volunteering to take shocks even when escaping was completely easy",
          "Low-empathy participants leaving immediately after two trials when escaping was completely easy",
          "High-empathy participants refusing to help when they were told the shocks were painless",
        ],
        answerIndex: 1,
        hints: [
          "If helping is purely egoistic (just to stop feeling uncomfortable), what should someone do when they can simply walk out effortlessly?",
          "Look for the condition where egoism predicts leaving, yet empathy still produces helping.",
        ],
        explanation:
          "When **escape is easy**, an egoistically motivated bystander can eliminate personal distress simply by leaving. Because **high-empathy** participants still volunteered to take Elaine's shocks despite easy escape, Batson argued their motive was genuinely altruistic rather than purely arousal-reducing.",
      },
      {
        id: "5-context-human-relationships-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Levine et al. (2001) cross-cultural helping",
        question:
          "Across 23 large cities worldwide, Levine et al. (2001) measured non-emergency helping (dropped pen, hurt leg, blind pedestrian). Which pair of sociocultural variables best predicted higher helping rates?",
        options: [
          "Lower national economic productivity (slower pace of life) and cultural norms of simpatía",
          "Higher national GDP per capita and strict individualistic cultural values across Europe",
          "Larger city population density combined with high scores on explicit empathy questionnaires",
          "Higher temperatures year-round combined with mandatory secondary-school volunteering laws",
        ],
        answerIndex: 0,
        hints: [
          "Recall which cities topped Levine's chart (Rio de Janeiro 93%, San José 91%) vs lower-scoring fast-paced hubs (New York 45%, Kuala Lumpur 40%).",
          "Surprisingly, individualism–collectivism alone was NOT the strongest predictor.",
        ],
        explanation:
          "Levine et al. (2001) found that countries with **lower economic productivity / slower pace of life** and cultural traditions emphasising **simpatía** (warm, friendly social harmony, e.g. Brazil, Costa Rica) showed much higher stranger helping than wealthier, faster-paced cities.",
      },
      {
        id: "5-context-human-relationships-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "prosocial-bystander-altruism",
        strategy: "FA2027 Measurement: Modern CCTV replication",
        question:
          "How did Philpot et al.'s (2020) cross-national CCTV study of 219 real public conflicts revise traditional textbook conclusions about bystander apathy?",
        options: [
          "It confirmed bystanders intervened in fewer than 15% of real-world urban street conflicts.",
          "It proved diffusion of responsibility occurred identically across the UK, Netherlands, and South Africa.",
          "It showed bystanders only intervened when police officers were already standing visibly nearby.",
          "It found bystanders intervened in 90.9% of real conflicts, with collective intervention rising with crowd size.",
        ],
        answerIndex: 3,
        hints: [
          "Consider the difference between one individual's probability and the probability that *at least one* person in a real crowd steps in.",
          "Philpot et al. used real public CCTV footage rather than contrived ambiguous lab cubicles.",
        ],
        explanation:
          "Philpot et al. (2020) observed intervention in **90.9%** of real public conflicts across three countries, and showed that larger crowds actually *increased* the likelihood that at least one person intervened — demonstrating how controlled lab ambiguity can underestimate real-world prosociality (**Measurement** & **Change**).",
      },
      {
        id: "5-context-human-relationships-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Hamilton & Gifford (1976) Illusory Correlation",
        question:
          "In Hamilton & Gifford's (1976) illusory correlation experiment, why did participants judge minority Group B more negatively than majority Group A even though both had an identical 30.8% negative-behaviour rate?",
        options: [
          "Participants had previously competed against Group B members for cash prizes in an earlier round.",
          "Group B's negative actions were written using far more violent and extreme language than Group A's.",
          "Co-occurring infrequent events (minority group + negative act) are doubly distinctive in memory.",
          "Participants suffered from stereotype threat that reduced their working memory during reading.",
        ],
        answerIndex: 2,
        hints: [
          "Remember both groups were completely fictional and had zero prior rivalry.",
          "What happens cognitively when two *statistically rare* features appear together?",
        ],
        explanation:
          "Because minority status (Group B, 13 statements vs 26) and negative behaviours (30.8% vs 69.2% positive) are both statistically infrequent, their pairing is cognitively **distinctive**, attracting disproportionate encoding and recall (**illusory correlation**).",
      },
      {
        id: "5-context-human-relationships-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Social Identity Theory & perception of out-groups",
        question:
          "A student says, 'Everyone in my music club has totally unique tastes, whereas all the rugby players think and act the exact same way.' Which cognitive–social bias does this statement illustrate?",
        options: [
          "Out-group homogeneity effect paired with perceived in-group variability",
          "Pluralistic ignorance caused by ambiguous social cues inside school hallways",
          "Superordinate goal formation uniting rival extracurricular school clubs",
          "Reciprocal altruism favouring members who exchange favours repeatedly",
        ],
        answerIndex: 0,
        hints: [
          "Compare how the speaker describes diversity inside their own group versus uniformity inside the other group.",
          "This bias links directly to Tajfel & Turner's Social Identity Theory.",
        ],
        explanation:
          "Perceiving members of an out-group as interchangeable ('all think and act the same') while recognising rich individuality within one's own in-group is the **out-group homogeneity effect**, which reinforces stereotyping.",
      },
      {
        id: "5-context-human-relationships-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Sherif Robbers Cave Stage 2 vs Stage 3",
        question:
          "In Sherif et al.'s (1961) Robbers Cave field experiment, why did simply inviting the Eagles and Rattlers to share meals and watch films together fail to reduce hostility?",
        options: [
          "The boys were never told the name of the rival cabin during the shared film screenings.",
          "Mere contact without interdependent superordinate goals failed to change their zero-sum rivalry.",
          "Camp counsellors accidentally awarded extra pocket knives to the Eagles during dinner.",
          "The Rattlers had already left the camp before the shared-contact stage began.",
        ],
        answerIndex: 1,
        hints: [
          "Recall what actually happened in the dining hall during Stage 3a (food fights and name-calling).",
          "What shifted the goal structure from competition to interdependence in Stage 3b?",
        ],
        explanation:
          "Unstructured **mere contact** (shared dining and movies) left group boundaries and resentment intact, actually triggering food fights. Hostility declined only when **superordinate goals** (repairing the camp water tank, pulling a stalled supply truck) made mutual cooperation indispensable.",
      },
      {
        id: "5-context-human-relationships-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Cognitive mechanism of Stereotype Threat",
        question:
          "In Steele & Aronson's (1995) stereotype threat study, African American undergraduates underperformed relative to White peers when a difficult verbal test was framed as diagnostic of ability, but matched peers when it was framed as non-diagnostic. What cognitive mechanism best accounts for this drop?",
        options: [
          "Lack of prior academic preparation in verbal vocabulary among diagnostic-condition participants",
          "Explicit agreement with negative racial stereotypes causing participants to leave questions blank",
          "Observer bias by experimenters who graded diagnostic-condition answer sheets more harshly",
          "Anxiety and self-monitoring about confirming a negative stereotype depleting working memory",
        ],
        answerIndex: 3,
        hints: [
          "Remember Steele & Aronson statistically controlled for prior SAT scores and used objective scoring.",
          "Which limited-capacity cognitive resource is hijacked by worry and intrusive vigilance during a difficult task?",
        ],
        explanation:
          "Fear of confirming a salient negative stereotype triggers physiological anxiety and distracting self-monitoring, which consumes limited **working memory** capacity needed for complex verbal reasoning — directly integrating the **Cognitive** and **Sociocultural** approaches.",
      },
      {
        id: "5-context-human-relationships-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Allport's 4 Optimal Contact Conditions",
        question:
          "Which set lists all four optimal conditions required by Allport's (1954) Contact Hypothesis for intergroup contact to reduce prejudice most effectively?",
        options: [
          "High anonymity, competitive tournaments, frequent social meals, and voluntary attendance",
          "Genetic similarity, shared language, identical socioeconomic income, and strict segregation",
          "Equal status, common goals, intergroup cooperation, and institutional or authority support",
          "Implicit bias testing, public shaming of prejudice, peer surveillance, and solo study tasks",
        ],
        answerIndex: 2,
        hints: [
          "Recall the mnemonic **E-C-I-S** ('Equals Cooperate In Support').",
          "Eliminate any option featuring competition, anonymity, or segregation.",
        ],
        explanation:
          "Allport's four optimal conditions are **equal status**, **common goals**, **intergroup cooperation** (non-competitive interdependence), and **institutional/authority support** — validated across 515 studies in Pettigrew & Tropp's (2006) meta-analysis.",
      },
      {
        id: "5-context-human-relationships-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Aronson's Jigsaw Classroom mechanism",
        question:
          "How does Aronson's (1978) Jigsaw Classroom specifically operationalise intergroup cooperation and equal status in a diverse school?",
        options: [
          "By rewarding the fastest individual student in each ethnic group with public bonus points",
          "By grouping students solely by shared cultural background to build in-group self-esteem first",
          "By replacing academic exams with informal lunchtime conversations supervised by principals",
          "By giving every student one unique, indispensable piece of the lesson needed for everyone's exam",
        ],
        answerIndex: 3,
        hints: [
          "Think about why the technique is named after a *jigsaw puzzle*.",
          "Can any student succeed without listening respectfully to every teammate?",
        ],
        explanation:
          "In a Jigsaw Classroom, each member of a diverse 5–6 student group holds one unique, essential segment of the material. Because everyone depends equally on every teammate's piece to succeed on the assessment, competition converts into **equal-status interdependence**.",
      },
      {
        id: "5-context-human-relationships-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Pettigrew & Tropp (2006) meta-analysis nuance",
        question:
          "What crucial refinement did Pettigrew & Tropp's (2006) meta-analysis of 515 studies add to Allport's original Contact Hypothesis?",
        options: [
          "Intergroup contact only reduces prejudice if all four optimal conditions are strictly satisfied simultaneously.",
          "Contact still modestly reduces prejudice without all four conditions, mainly by lowering anxiety and raising empathy.",
          "Intergroup contact increases prejudice in most workplace settings unless financial bonuses are offered.",
          "Allport's four conditions work for ethnic prejudice but fail completely for age, disability, or gender prejudice.",
        ],
        answerIndex: 1,
        hints: [
          "Did Pettigrew & Tropp treat Allport's 4 conditions as *strictly necessary* or as *facilitating* conditions?",
          "Recall the two emotional mediators they identified (`r = −0.21` overall).",
        ],
        explanation:
          "Pettigrew & Tropp (2006) found a robust overall negative correlation between contact and prejudice ({{r = -0.21}}) across many target groups. Allport's four conditions significantly *amplified* the benefit, yet contact still reduced prejudice even when not all four were met — mediated chiefly by **reduced intergroup anxiety** and **increased empathy**.",
      },
      {
        id: "5-context-human-relationships-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "FA2027 Responsibility & Bias in Sherif (1961)",
        question:
          "Why does evaluating Sherif's (1961) Robbers Cave study through **both** Bias and Responsibility strengthen an IB Paper 1 essay?",
        options: [
          "Its white middle-class boy sample limits generalisability (Bias) and deceiving children risked distress (Responsibility).",
          "Its double-blind procedure eliminated all demand characteristics (Bias) while written boy consent ensured safety (Responsibility).",
          "Its large cross-cultural sample avoided ethnocentrism (Bias) while paying participants removed ethical concerns (Responsibility).",
          "Its fMRI brain scans suffered from low resolution (Bias) while exposing children to loud noises caused harm (Responsibility).",
        ],
        answerIndex: 0,
        hints: [
          "Check who was in Sherif's sample: 22 eleven-year-old white, middle-class, Protestant American boys.",
          "Check the ethics: did the boys know they were in a psychology experiment designed to provoke raids and hostility?",
        ],
        explanation:
          "Robbers Cave used a narrow sample of 22 white, middle-class American boys (population/cultural **Bias**) and covertly deceived children into genuine distress and physical aggression without child assent or right to withdraw (**Responsibility**), even though its field realism was high.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 (m3): Integrated Core Concepts & HL Extensions
  // answerIndex sequence: [3, 1, 2, 0, 2, 3, 1, 0, 3, 2, 1, 0, 2, 1, 3]
  // spread: 0→3, 1→4, 2→4, 3→4
  // =========================================================================
  {
    id: "5-context-human-relationships-m3",
    title: "MCQ Paper 3: Core Concepts Synthesis & HL Extensions",
    level: "HL",
    questions: [
      {
        id: "5-context-human-relationships-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "FA2027 Causality: Experimental vs Correlational",
        question:
          "Why does Scheele et al.'s (2012) intranasal oxytocin experiment provide stronger evidence for **Causality** in pair-bond maintenance than Fisher et al.'s (2005) fMRI love study?",
        options: [
          "Scheele et al. studied couples across 37 nations whereas Fisher et al. tested only Swiss university students.",
          "Scheele et al. tracked couples longitudinally for ten years whereas Fisher et al. tested participants once.",
          "Scheele et al. avoided all laboratory artificiality by observing unmanipulated couples in public cafes.",
          "Scheele et al. randomly manipulated oxytocin vs placebo, whereas Fisher's fMRI data were correlational.",
        ],
        answerIndex: 3,
        hints: [
          "Compare the research methods: randomized placebo-controlled manipulation vs brain-imaging correlation.",
          "What is required to infer a cause-and-effect relationship cleanly?",
        ],
        explanation:
          "By randomly administering **intranasal oxytocin versus placebo** in a double-blind design, Scheele et al. manipulated the independent variable directly to show oxytocin causally increased partnered men's preferred distance from attractive strangers. Fisher's fMRI scans correlated neural activation with self-reported love without manipulating brain chemistry.",
      },
      {
        id: "5-context-human-relationships-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "HL Measurement: IAT Validity & Reliability",
        question:
          "Based on Oswald et al.'s (2013) meta-analysis, what is the primary **Measurement** criticism of using a single Implicit Association Test (IAT) score to diagnose an individual's real-world prejudice?",
        options: [
          "Participants can easily read the reaction-time algorithm and always score identically across sessions.",
          "Individual IAT scores show modest test–retest reliability and weak correlation with discriminatory behaviour.",
          "The IAT exclusively measures conscious, explicitly endorsed racist attitudes using Likert scales.",
          "Millisecond reaction times cannot be computed accurately on standard laboratory computer monitors.",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish what the IAT does well (resisting overt social desirability) from what Oswald et al. found about stability and real-world prediction.",
          "Does a single person's IAT score stay rock-solid over weeks and strongly predict their hiring or social choices?",
        ],
        explanation:
          "Oswald et al. (2013) found that individual IAT scores exhibit only **modest test–retest reliability** (`r ≈ 0.4–0.5`) and **weak predictive validity** for specific discriminatory acts, and may conflate personal bias with mere cultural awareness of stereotypes.",
      },
      {
        id: "5-context-human-relationships-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Quantitative bystander rate drop",
        question:
          "In Darley & Latané's (1968) intercom seizure study, 85% of participants helped when believing they were alone compared with 31% in a 6-person group. What was the **relative percentage decrease** in helping (to 1 d.p.)?",
        options: [
          "36.5% relative decrease from the lone-witness baseline",
          "54.0% relative decrease from the lone-witness baseline",
          "63.5% relative decrease from the lone-witness baseline",
          "74.2% relative decrease from the lone-witness baseline",
        ],
        answerIndex: 2,
        hints: [
          "Do NOT confuse percentage points ({{85 - 31 = 54}}) with relative percentage decrease!",
          "Divide the drop (54) by the original baseline (85), then multiply by 100.",
        ],
        explanation:
          "The absolute drop is {{85 - 31 = 54}} percentage points. Dividing by the lone baseline gives {{(54 / 85) * 100 = 63.529...%}}, or **63.5%** relative decrease. Choosing 54.0% confuses percentage-point difference with relative percentage change.",
      },
      {
        id: "5-context-human-relationships-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "HL Technology Extension: Online Dating & Rusbult",
        question:
          "How do swipe-based dating applications most directly interact with **Rusbult's Investment Model** and **Walster's attraction findings**?",
        options: [
          "They foreground appearance screening and inflate perceived Quality of Alternatives, potentially lowering commitment.",
          "They eliminate visual appearance cues entirely so users match solely through MHC genetic scent compatibility.",
          "They enforce strict geographic functional proximity identical to Festinger's single-corridor MIT dormitories.",
          "They automatically raise intrinsic relationship investments before partners ever exchange a single message.",
        ],
        answerIndex: 0,
        hints: [
          "Think about swiping through hundreds of photo profiles: which cue dominates first, and what happens to perceived Alternatives (A)?",
          "In Rusbult's formula {{C = S - A + I}}, how does raising A affect commitment C?",
        ],
        explanation:
          "Photo-first interfaces intensify appearance-based initial screening (echoing Walster, 1966), while endless scrollable pools inflate perceived **Quality of Alternatives (A)**, which under Rusbult's model ({{C = S - A + I}}) can erode relationship **commitment**.",
      },
      {
        id: "5-context-human-relationships-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "HL Paper 3 Stats: Publication Bias in Stereotype Threat",
        question:
          "When Flore & Wicherts (2015) meta-analysed stereotype threat in schoolgirls' mathematics performance, they detected funnel-plot asymmetry favouring small studies with large effects. What methodological issue does this reveal?",
        options: [
          "Participant demand characteristics forced every girl in large schools to exaggerate test anxiety.",
          "Random allocation failed exclusively in European studies published after 2005.",
          "Publication bias inflated estimated laboratory effect sizes relative to pre-registered field findings.",
          "Working memory measurements were statistically impossible to administer to adolescents.",
        ],
        answerIndex: 2,
        hints: [
          "What does an asymmetrical funnel plot (missing small null studies) indicate in meta-analytic statistics?",
          "Connect this directly to the FA2027 Core Concept of **Bias** and HL Paper 3 data evaluation.",
        ],
        explanation:
          "Funnel-plot asymmetry — where small studies with statistically significant results are published while small null replications remain in the 'file drawer' — signals **publication bias**, meaning real-world stereotype threat effects may be smaller and more context-dependent than early lab studies suggested.",
      },
      {
        id: "5-context-human-relationships-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Cialdini vs Batson debate",
        question:
          "How did Cialdini et al.'s (1987) **negative-state relief model** challenge Batson's Empathy–Altruism Hypothesis?",
        options: [
          "It argued humans can only help genetic kin who satisfy Hamilton's inequality rB > C.",
          "It claimed empathy decreases helping whenever witnesses are observed by a larger crowd.",
          "It proposed bystanders help solely to win public financial rewards from experimenters.",
          "It proposed high-empathy helpers still act egoistically to relieve their own vicarious sadness.",
        ],
        answerIndex: 3,
        hints: [
          "Does Cialdini deny that high-empathy people help, or reinterpret *why* they help?",
          "Look for the subtle internal egoistic motive ('feeling sad because Elaine is suffering').",
        ],
        explanation:
          "Cialdini argued that empathy induces personal **sadness**, so helping Elaine even under easy escape may still serve an **egoistic** goal — lifting one's own negative mood (or seeking empathic joy) — showing why internal motives are notoriously hard to separate causally (**Causality** & **Measurement**).",
      },
      {
        id: "5-context-human-relationships-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "prosocial-bystander-altruism",
        strategy: "HL Technology Extension: Digital Bystanderism",
        question:
          "A teenager sees cruel comments piling up under a classmate's public post viewed by 800 followers and scrolls past without reporting it. Which pair of mechanisms best explains this digital bystanderism?",
        options: [
          "Kin selection (r = 0.5) and heightened face-to-face physiological arousal",
          "Extreme diffusion of responsibility (1/800) and reduced perceived cost of not helping online",
          "Positive illusions and constructive relationship-enhancing attributions toward strangers",
          "Allport's equal-status cooperation and strong institutional moderation norms",
        ],
        answerIndex: 1,
        hints: [
          "Combine Latané & Darley's `1/N` share with Piliavin's Arousal–Cost–Reward calculus in an anonymous digital feed.",
          "When 800 people see a post and nobody knows whether you scrolled past, what happens to guilt and responsibility?",
        ],
        explanation:
          "Large visible view counts amplify **diffusion of responsibility** (`1/800`), while screen distance and anonymity blunt physiological arousal and lower Piliavin's **cost of not helping** (guilt/public blame), making passive scrolling far more likely than in face-to-face emergencies.",
      },
      {
        id: "5-context-human-relationships-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "maintenance-communication-breakdown",
        strategy: "HL Motivation Extension: Self-Determination Theory in Relationships",
        question:
          "From the perspective of Deci & Ryan's **Self-Determination Theory** (HL Motivation), why does autonomously motivated accommodation predict higher long-term relationship well-being than obligation-driven compliance?",
        options: [
          "Autonomous responsiveness satisfies core psychological needs for relatedness and autonomy rather than breeding resentment.",
          "Obligation-driven compliance always violates Gottman's 5:1 positivity ratio during the very first conversation.",
          "Autonomously motivated partners never experience conflict, physiological flooding, or differing values.",
          "Self-Determination Theory shows extrinsic monetary investments are the sole predictor of couple longevity.",
        ],
        answerIndex: 0,
        hints: [
          "Recall SDT's three basic psychological needs: autonomy, competence, and relatedness.",
          "Contrast freely chosen care with controlled/guilt-driven compliance.",
        ],
        explanation:
          "In Self-Determination Theory, supporting a partner out of autonomous care satisfies both **autonomy** and **relatedness**, fostering authentic trust and satisfaction, whereas controlled compliance driven by guilt or external pressure erodes intrinsic motivation and fosters resentment.",
      },
      {
        id: "5-context-human-relationships-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "Integrating SIT and RCT in Robbers Cave",
        question:
          "In Sherif's Robbers Cave study, the Eagles began calling the Rattlers derogatory names *as soon as they heard another group existed on the campgrounds*, before the competitive tournament even started. Which theory best explains this early hostility?",
        options: [
          "Realistic Conflict Theory, because scarce water resources had already run out in Stage 1",
          "Piliavin's Arousal–Cost–Reward Model, because the boys felt guilty about arriving first",
          "Hamilton's Kin Selection Rule, because the Eagles were biologically related brothers",
          "Social Identity Theory, because bare social categorisation alone can trigger in-group favouritism",
        ],
        answerIndex: 3,
        hints: [
          "If zero-sum competition had NOT yet begun, can Realistic Conflict Theory explain the initial insults?",
          "Which theory (Tajfel & Turner) predicts bias from mere division into 'us' vs 'them'?",
        ],
        explanation:
          "Because hostility sparked *before* zero-sum resource competition began, **Social Identity Theory** (Tajfel & Turner) complements Realistic Conflict Theory: mere social categorisation into 'Eagles' vs 'Rattlers' activated **positive distinctiveness**, which Stage 2 competition then dramatically escalated.",
      },
      {
        id: "5-context-human-relationships-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "HL Technology Extension: Echo Chambers & Polarization",
        question:
          "Why can algorithmic social-media feeds *intensify* intergroup prejudice even when users occasionally encounter posts from political or cultural out-groups?",
        options: [
          "Online platforms enforce Allport's equal-status institutional support too strictly for honest debate.",
          "Algorithmic exposure removes all group labels, causing users to treat every stranger as an in-group friend.",
          "Engagement algorithms amplify extreme out-group posts, fuelling illusory correlation and out-group homogeneity.",
          "Reading short text posts activates oxytocin release that increases conformity to rival viewpoints.",
        ],
        answerIndex: 2,
        hints: [
          "Which kinds of out-group posts go viral — moderate everyday views or outrage-inducing extremes?",
          "Connect viral extreme out-group posts to **illusory correlation**, **out-group homogeneity**, and missing **Allport conditions**.",
        ],
        explanation:
          "Engagement-maximising algorithms disproportionately surface sensational, extreme out-group content without equal-status cooperation or common goals (violating Allport's conditions). Paired rare/extreme cues reinforce **illusory correlation** and **out-group homogeneity**, deepening polarisation.",
      },
      {
        id: "5-context-human-relationships-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "prosocial-bystander-altruism",
        strategy: "FA2027 Core Concept: Responsibility in Field Experiments",
        question:
          "Which ethical **Responsibility** tension is sharpest in Piliavin, Rodin & Piliavin's (1969) NYC subway bystander experiment?",
        options: [
          "Participants were physically harmed by real electric shocks administered during the subway ride.",
          "High ecological validity was achieved only by covertly deceiving commuters without consent or debriefing.",
          "Subway commuters were paid disproportionately large bribes that coerced them into helping.",
          "Confidential medical records of commuters who ignored the drunk confederate were published online.",
        ],
        answerIndex: 1,
        hints: [
          "Did commuters know the collapsing passenger was an actor, or were they debriefed as they exited the train?",
          "Weigh ecological validity (Measurement) against ethical protection (Responsibility).",
        ],
        explanation:
          "To preserve naturalistic realism, Piliavin et al. staged realistic collapses on public trains with **no informed consent**, potential **psychological distress or guilt** for non-helpers, and **no debriefing** — a classic FA2027 tension between ecological validity (**Measurement**) and ethical **Responsibility**.",
      },
      {
        id: "5-context-human-relationships-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "attraction-biological-cognitive-social",
        strategy: "HL Culture Extension: Emic vs Etic Measurement",
        question:
          "A researcher administers Hatfield & Sprecher's (1986) US-developed 'Passionate Love Scale' unchanged to couples in rural Kenya and urban Tokyo to rank which society 'loves more deeply'. Which methodological flaw best critiques this study?",
        options: [
          "Imposed etic measurement bias assuming a Western romantic construct captures local cultural meanings of love",
          "Excessive emic immersion preventing the researcher from collecting any numerical questionnaire responses",
          "Longitudinal attrition bias caused by tracking the same couples over more than twenty years",
          "Biological reductionism caused by measuring salivary cortisol instead of self-reported love",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish **emic** (culture-specific insider) from **imposed etic** (exporting one culture's instrument as a universal yardstick).",
          "In many cultures, marital devotion centres on filial duty, harmony, and interdependence rather than Western passionate individualism.",
        ],
        explanation:
          "Exporting a US-constructed romantic-love scale directly across cultures as a universal yardstick commits **imposed etic measurement bias** (HL Culture & **Measurement**), overlooking culturally specific (**emic**) definitions of love grounded in interdependence, duty, and family harmony.",
      },
      {
        id: "5-context-human-relationships-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "maintenance-communication-breakdown",
        strategy: "Rusbult's EVLN accommodation typology",
        question:
          "When her partner snaps unfairly after work, Leila takes a breath and calmly asks, 'It sounds like today was rough — can we talk once we've both had dinner?' How would Rusbult et al. (1991) classify this response?",
        options: [
          "Exit (active, destructive) — threatening to leave the relationship during conflict",
          "Neglect (passive, destructive) — ignoring the partner and letting the problem fester",
          "Voice (active, constructive) — accommodating by addressing the issue calmly to repair",
          "Stonewalling (passive, defensive) — withdrawing completely due to physiological flooding",
        ],
        answerIndex: 2,
        hints: [
          "Is Leila's response *active* or *passive*? Is it *constructive* or *destructive* for the relationship?",
          "Match active + constructive to Rusbult's EVLN framework (Exit, Voice, Loyalty, Neglect).",
        ],
        explanation:
          "In Rusbult's EVLN accommodation typology, inhibiting retaliatory anger to calmly invite constructive problem-solving is **Voice** (active and constructive) — a hallmark of committed, well-maintained relationships.",
      },
      {
        id: "5-context-human-relationships-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "prosocial-bystander-altruism",
        strategy: "Multi-kin Hamilton's Rule threshold",
        question:
          "An evolutionary model assumes rescuing a group of relatives imposes a personal fitness cost of {{C = 2.0}} units, and each rescued relative gains {{B = 3.0}} units. Which group of relatives is the **only** combination where Hamilton's rule ({{r_1 B_1 + r_2 B_2 + ... > C}}) is satisfied?",
        options: [
          "One full sibling (r = 0.5) and one first cousin (r = 0.125)",
          "One full sibling (r = 0.5) and one half-sibling (r = 0.25)",
          "Two half-siblings (r = 0.25 each) and one first cousin (r = 0.125)",
          "Five first cousins (r = 0.125 each) with no closer kin present",
        ],
        answerIndex: 1,
        hints: [
          "Because every relative gains {{B = 3.0}}, find the sum of relatedness values `Σr` first, then multiply by 3.0.",
          "Check which combination gives {{3.0 * (sum of r) > 2.0}}, i.e., sum of `r` strictly greater than {{2/3 ≈ 0.667}}.",
        ],
        explanation:
          "Check each sum of relatedness multiplied by {{B = 3.0}}: full sibling + half-sibling gives {{(0.5 + 0.25) * 3.0 = 2.25 > 2.0}} (satisfied!). Full sibling + first cousin gives {{0.625 * 3.0 = 1.875 < 2.0}}; two half-siblings + one cousin gives {{0.625 * 3.0 = 1.875 < 2.0}}; five cousins give {{0.625 * 3.0 = 1.875 < 2.0}}.",
      },
      {
        id: "5-context-human-relationships-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "prejudice-stereotyping-conflict",
        strategy: "FA2027 Core Concept: Perspective (Biopsychosocial Integration)",
        question:
          "Which argument best exemplifies the FA2027 Core Concept of **Perspective** when explaining why intergroup conflict arises and how it can be reduced?",
        options: [
          "Intergroup conflict is caused strictly by genetic kin preferences, so social contact interventions cannot alter hostility.",
          "Only laboratory cognitive experiments yield valid knowledge about stereotyping, making field experiments unnecessary.",
          "Human Relationships is an isolated optional sub-field that requires no reference to biological or cognitive mechanisms.",
          "Integrating cognitive heuristics, social identity/resource rivalry, and contact conditions yields a fuller account than any single lens.",
        ],
        answerIndex: 3,
        hints: [
          "What does the FA2027 Core Concept of **Perspective** emphasize across Biological, Cognitive, and Sociocultural approaches?",
          "Avoid reductionist claims that dismiss whole approaches or mislabel Compulsory Context 3 as an option.",
        ],
        explanation:
          "**Perspective** requires triangulating multiple psychological approaches: cognitive shortcuts (illusory correlation, stereotype threat working-memory load), social-identity motivation (Tajfel & Turner), and structural competition/interdependence (Sherif, Allport, Aronson) together explain both why prejudice emerges and how real-world change occurs.",
      },
    ],
  },
];
