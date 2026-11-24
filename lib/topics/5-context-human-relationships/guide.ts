import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "5-context-human-relationships",
  title: "Topic 5: Context 3 — Human Relationships",
  strand: "Contexts II: Relationships & Learning",
  icon: "🤝",
  level: "SL",
  summary:
    "Explore FA2027 Compulsory Context 3: how biological, cognitive, and sociocultural mechanisms interact in interpersonal attraction, relationship maintenance and breakdown, prosocial behaviour, and intergroup conflict — evaluated through the 6 IB Core Concepts.",
  intro:
    "In the IB Psychology First Assessment May 2027 curriculum, **Human Relationships** is **Compulsory Context 3** (studied by all SL and HL students, never a standalone legacy option). Rather than memorising isolated studies, you will analyse why humans form bonds, sustain or dissolve partnerships, help strangers, and divide into hostile groups by triangulating the **Biological**, **Cognitive**, and **Sociocultural** approaches through the **6 Core Concepts** (**Bias**, **Causality**, **Change**, **Measurement**, **Perspective**, and **Responsibility**).",
  guide: [
    // =========================================================================
    // SECTION 1: attraction-biological-cognitive-social
    // =========================================================================
    {
      id: "attraction-biological-cognitive-social",
      heading: "Formation of Relationships: Biological, Cognitive & Cultural Factors",
      level: "SL",
      discovery: {
        problem:
          "At an MIT university housing complex with identical apartments, researchers mapped every student's closest friends without knowing anything about their personalities, genetics, or hobbies. Which single physical variable predicted over 40% of next-door friendships — and why might that clash with purely evolutionary accounts of mate selection?",
        idea:
          "**Functional proximity** (Festinger, Schachter & Back, 1950): living next door or near shared stairwells and mailboxes created repeated unplanned encounters. Through Zajonc's (1968) **mere exposure effect**, familiarity breeds liking. Attraction is never driven by biology alone — biological preferences operate inside cognitive filters and sociocultural opportunity structures.",
      },
      body: `Interpersonal attraction illustrates the FA2027 core concept of **Perspective**: no single approach explains who we choose as friends or romantic partners. Instead, biological predispositions, cognitive appraisals, and sociocultural scripts interact continuously.

### 1. Biological & Evolutionary Explanations
- **MHC Genetic Diversity (Wedekind et al., 1995):** Major Histocompatibility Complex (MHC) genes code for immune-system proteins. In the classic "sweaty T-shirt" study (49 female, 44 male Swiss students), women *not* using hormonal contraception preferred the scent of men with **dissimilar MHC genes**, which evolutionarily boosts offspring immune diversity and avoids inbreeding. Strikingly, women *taking* oral contraceptives preferred MHC-similar scents — showing how hormonal state modulates sensory preference.
- **Neurochemistry of Pair-Bonding:** **Fisher et al. (2005)** used fMRI to propose three interacting systems: *lust* (testosterone/oestrogen), *romantic attraction* (dopamine reward activation in the ventral tegmental area and caudate nucleus), and *long-term attachment* (**oxytocin** and **vasopressin**). Experimentally, **Scheele et al. (2012)** found that intranasal oxytocin caused partnered men (but not single men) to keep a larger physical distance from an attractive unfamiliar woman, suggesting a causal bonding-maintenance role.
- **Cross-Cultural Mate Preferences (Buss, 1989):** Surveying 10,047 participants across 37 cultures, Buss found universal high ratings for kindness, intelligence, and mutual love, alongside consistent average sex differences (men rated youth/physical cues higher; women rated earning potential/ambition higher). However, **Eagly & Wood (1999)** reanalysed the same dataset and showed those sex gaps narrowed sharply in countries with greater gender equality — highlighting **Causality** and **Perspective** (sociocultural power structures vs evolutionary determinism).

### 2. Cognitive Explanations
- **Similarity–Attraction Effect (Byrne, 1971; Montoya et al., 2008):** People are attracted to others who share similar attitudes, values, and backgrounds because similarity provides consensual validation and **cognitive consistency** (reducing cognitive dissonance). Montoya et al.'s meta-analysis showed that *perceived* similarity predicts liking even more strongly than actual objective similarity once a relationship develops.
- **Matching Hypothesis (Walster et al., 1966; Murstein, 1972; Feingold, 1988):** In Walster's "computer dance" study, physical attractiveness predicted initial desire regardless of a participant's own attractiveness. Yet in real-world partner formation where rejection carries emotional cost, people tend to pair with partners of broadly similar social and physical desirability, balancing ideal preferences against perceived likelihood of reciprocation.

### 3. Sociocultural Explanations
- **Proximity & Mere Exposure (Festinger, Schachter & Back, 1950; Zajonc, 1968):** Residents at MIT's Westgate West housing were 41% likely to name next-door neighbours as close friends versus only 10% for neighbours four doors away. Functional distance (shared pathways, mailboxes) creates repeated low-effort exposure that increases familiarity and warmth.
- **Cultural Scripts — Arranged vs Autonomous Marriage (Gupta & Singh, 1982):** Studying 50 couples in Jaipur, India using Rubin's Loving and Liking Scales, love-marriage couples began with higher passionate love in Year 1 that gradually declined, whereas arranged-marriage couples began lower and *increased* over 5–10+ years, surpassing autonomous couples after Year 5. While this challenges Western **Bias** (assuming romantic passion must precede marriage), the design was **cross-sectional**, introducing cohort and survivorship confounds (**Measurement** and **Change**).

### Core Concept & HL Bridge
- **Bias & Measurement:** Lab odour tasks (Wedekind) and fMRI scans (Fisher) rely on small, largely Western university (**WEIRD**) samples and artificial stimuli.
- **HL Extensions (Culture & Technology):** Online dating apps alter traditional proximity by expanding the pool of alternatives while amplifying appearance-first heuristics and algorithmic filtering — linking **Technology** directly to the matching hypothesis and cultural scripts.`,
      diagram: `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biopsychosocial attraction triangle showing Biological, Cognitive, and Sociocultural factors converging on relationship formation with the six IB Core Concepts at the centre">
  <rect x="0" y="0" width="520" height="330" fill="#ffffff" rx="12"/>
  <text x="260" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1c1630">Biopsychosocial Interaction in Relationship Formation</text>
  <polygon points="260,82 108,248 412,248" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="260" y1="82" x2="260" y2="188" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="108" y1="248" x2="260" y2="188" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="412" y1="248" x2="260" y2="188" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="165" y="42" width="190" height="62" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="260" y="61" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#5b21b6">BIOLOGICAL</text>
  <text x="260" y="77" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">MHC diversity (Wedekind)</text>
  <text x="260" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Dopamine • Oxytocin (Fisher)</text>
  <rect x="16" y="226" width="184" height="72" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <text x="108" y="245" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#075985">COGNITIVE</text>
  <text x="108" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Similarity–attraction (Byrne)</text>
  <text x="108" y="276" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Matching hypothesis (Walster)</text>
  <text x="108" y="290" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Perceived value consistency</text>
  <rect x="320" y="226" width="184" height="72" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="412" y="245" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#166534">SOCIOCULTURAL</text>
  <text x="412" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Proximity (Festinger, 1950)</text>
  <text x="412" y="276" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Mere exposure (Zajonc, 1968)</text>
  <text x="412" y="290" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Cultural scripts (Gupta &amp; Singh)</text>
  <ellipse cx="260" cy="186" rx="76" ry="34" fill="#ffffff" stroke="#6d28d9" stroke-width="2"/>
  <text x="260" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#4c1d95">ATTRACTION</text>
  <text x="260" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#5b5375">Bias • Causality • Perspective</text>
  <text x="260" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#5b5375">Measurement • Change</text>
  <text x="260" y="318" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">Triangulating all three approaches prevents biological or cultural reductionism.</text>
</svg>`,
      diagramCaption:
        "Figure 5.1 — Interpersonal attraction emerges from biological cues, cognitive appraisals, and sociocultural proximity/scripts.",
      workedExamples: [
        {
          title: "Evaluating Biological vs Sociocultural Perspectives on Attraction",
          problem:
            "A Paper 1 Section B unseen vignette reports that university students rated dates higher when they lived in the same residential hall and shared political beliefs, even though DNA swabs showed no difference in MHC compatibility. Explain how two approaches account for these findings and identify one methodological limitation.",
          steps: [
            "Identify the **Sociocultural** mechanism: living in the same hall increases **functional proximity** and repeated unplanned encounters (**mere exposure effect**, Zajonc; Festinger et al., 1950), boosting familiarity and warmth.",
            "Identify the **Cognitive** mechanism: shared political beliefs activate the **similarity–attraction effect** (Byrne, 1971; Montoya et al., 2008), giving consensual validation and cognitive consistency.",
            "Contrast with the **Biological** prediction: MHC-dissimilarity scent preferences (Wedekind et al., 1995) may be masked in real settings by perfumes, hormonal contraception, or stronger cognitive/social filters — illustrating **Perspective**.",
            "Pinpoint a methodological **Measurement / Bias** limit: university-hall students are a **WEIRD convenience sample**, and self-reported date ratings risk **social desirability bias**.",
          ],
          answer:
            "Functional proximity (sociocultural) and attitude similarity (cognitive) outweigh isolated genetic odour cues in real social settings; however, relying on self-report ratings from a university convenience sample limits population validity and construct validity.",
          yourTurn: {
            question:
              "In Festinger, Schachter & Back's (1950) Westgate West study, 41.2% of residents named a next-door neighbour as a close friend compared with 10.3% four doors away. How many times more likely was a next-door friendship than one four doors away? Give your answer as a whole number.",
            answer: { type: "number", value: 4 },
            solution:
              "Divide the two percentages: {{41.2 / 10.3 = 4}}. Next-door neighbours were 4 times as likely to become close friends, demonstrating the power of functional proximity.",
          },
        },
        {
          title: "Applying Core Concepts to Gupta & Singh (1982)",
          problem:
            "Why can Gupta & Singh's (1982) comparison of arranged and love marriages NOT prove that arranged marriages cause love to grow over time?",
          steps: [
            "Check the research design: Gupta & Singh compared *different* couples married for 1 year, 5 years, and 10+ years at a single point in time (**cross-sectional design**), rather than tracking the same couples over a decade (**longitudinal design**).",
            "Link to **Causality** and **Change**: older cohorts differed in social norms and divorce stigma; additionally, **survivorship bias** means unhappy couples in earlier cohorts may have separated or refused participation.",
            "Link to **Measurement**: Rubin's Loving and Liking Scales were developed in the United States, raising **etic measurement bias** when applied to Indian marital norms where duty and family harmony define closeness.",
          ],
          answer:
            "Because the study used a cross-sectional quasi-experimental design with Western self-report scales, cohort effects, survivorship bias, and etic measurement bias prevent causal conclusions about intra-couple change over time.",
        },
      ],
      keyPoints: [
        "**Biological factors** (MHC diversity in Wedekind, 1995; dopamine/oxytocin in Fisher, 2005 & Scheele, 2012) create predispositions, not rigid instincts.",
        "**Cognitive factors** (perceived similarity, matching hypothesis, cognitive consistency) filter who feels emotionally rewarding and realistically attainable.",
        "**Sociocultural factors** (functional proximity in Festinger, 1950; mere exposure in Zajonc, 1968; cultural marriage scripts in Gupta & Singh, 1982) shape who we meet and how love is valued.",
        "Always evaluate attraction studies using FA2027 Core Concepts: **WEIRD sampling bias**, **correlational causality**, **etic measurement**, and **multiple perspectives**.",
      ],
      whyItWorks:
        "Human pair-bonding evolved in small, interdependent social groups where immune health, cooperative temperament, and daily proximity all mattered for survival. Modern environments (cities, universities, dating apps) change the *sociocultural* inputs while our *biological* reward circuitry and *cognitive* heuristics remain active — which is why single-approach explanations fail.",
      strategies: [
        "In Paper 1 Section C essays on attraction, dedicate one clear body paragraph each to **Biological**, **Cognitive**, and **Sociocultural** evidence, then synthesise how they interact.",
        "Whenever citing **Wedekind (1995)**, mention the oral-contraceptive reversal — examiners reward showing that biological cues are moderated by physiology and context.",
        "Whenever citing **Buss (1989)**, immediately pair it with **Eagly & Wood's (1999)** structural-equality reanalysis to demonstrate high-level **Perspective** and **Causality**.",
      ],
      thinkDeeper:
        "If an online dating algorithm matches users solely by high attitude similarity and attractiveness tiers (HL Technology extension), which biological and sociocultural cues from Wedekind and Festinger are stripped away — and how might that affect long-term relationship satisfaction?",
    },

    // =========================================================================
    // SECTION 2: maintenance-communication-breakdown
    // =========================================================================
    {
      id: "maintenance-communication-breakdown",
      heading: "Relationship Maintenance, Attribution, Communication & Dissolution",
      level: "SL",
      discovery: {
        problem:
          "Psychologist John Gottman videotaped married couples arguing about a real disagreement for just 15 minutes and predicted with over 80–90% accuracy which couples would divorce years later. Surprisingly, *how often* couples argued did NOT predict divorce. What two communication signals separated thriving couples from dissolving ones?",
        idea:
          "First, thriving couples maintained a **5:1 positive-to-negative interaction ratio** even during conflict (humour, affection, active listening outweighing negativity). Second, dissolving couples escalated into **Gottman's Four Horsemen** — especially **contempt** (mockery, superiority, eye-rolling), the single strongest behavioural predictor of divorce.",
      },
      body: `Forming a relationship is only half the story; sustaining or ending one centres on the FA2027 core concepts of **Change**, **Measurement**, and **Causality**.

### 1. Cognitive Maintenance: Attribution, Positive Illusions & Accommodation
- **Relationship-Enhancing vs Distress-Maintaining Attributions (Bradbury & Fincham, 1990):** Satisfied partners attribute a partner's *positive* actions to internal, stable causes ("she's thoughtful") and *negative* slips to external, temporary causes ("he had a stressful day"). Distressed couples invert this pattern, blaming negative events on permanent character flaws.
- **Positive Illusions (Murray, Holmes & Griffin, 1996):** Viewing one's partner slightly more favourably than the partner views themselves longitudinally predicted higher satisfaction, lower conflict, and greater stability after one year — acting as a cognitive buffer that promotes **accommodation** (responding constructively rather than retaliating when a partner behaves badly; **Rusbult et al., 1991**).

### 2. Observational Communication Research: Gottman's "Love Lab"
- **5:1 Positivity Ratio (Gottman & Levenson, 1992, 2000):** Using structured observational coding (SPAFF) plus heart-rate/skin-conductance monitoring during 15-minute conflict discussions, stable couples averaged **≥ 5 positive interactions for every 1 negative interaction** ({{P : N >= 5 : 1}}), whereas couples heading toward dissolution fell near {{0.8 : 1}}.
- **The Four Horsemen of the Apocalypse:**
  1. **Criticism:** Attacking global character ("You are always selfish") instead of a specific behaviour.
  2. **Contempt:** Treating the partner as inferior via sarcasm, mockery, name-calling, or eye-rolling — the **strongest single predictor** of breakdown.
  3. **Defensiveness:** Playing the innocent victim or counter-attacking to deflect responsibility.
  4. **Stonewalling:** Emotionally shutting down and withdrawing during physiological arousal ("flooding").
- **Methodological Evaluation (**Measurement** & **Perspective**):** Structured coding gives high inter-rater reliability and physiological triangulation, yet filming couples in an artificial "apartment lab" risks **reactivity/Hawthorne effects**, early samples were predominantly US heterosexual couples (**WEIRD bias**), and observational correlations do not by themselves prove which variable initiated decline.

### 3. Why People Stay or Leave: Rusbult's Investment Model
- **Rusbult (1980, 1983)** proposed that **Commitment** (not satisfaction alone) predicts whether a relationship endures:
  - **Satisfaction ({{S}}):** Rewards exceed costs and expectations.
  - **Quality of Alternatives ({{A}}):** Perceived attractiveness of other partners or being happily single (subtracted).
  - **Investment Size ({{I}}):** Resources tied to the relationship that would be lost if it ended — *intrinsic* (time, emotional disclosure, memories) and *extrinsic* (shared home, children, mutual friends).
  - Structurally: {{C = S - A + I}}. **Le & Agnew's (2003)** meta-analysis (52 studies, 11,582 participants) found S, A, and I together accounted for ~61% of commitment variance. Crucially, high investment and poor alternatives explain why people sometimes remain in **unsatisfying or abusive** relationships (**Responsibility**).

### 4. Process of Breakdown: Duck's Phase Model of Dissolution
**Duck (1982, 2007)** modelled breakup as a dynamic communicative process (**Change**) across four phases separated by psychological thresholds:
1. **Intrapsychic Phase:** Private brooding, tallying partner faults, evaluating costs (*Threshold: "I can't stand this anymore"*).
2. **Dyadic Phase:** Direct confrontation, negotiation, or mutual withdrawal (*Threshold: "I would be justified in withdrawing"*).
3. **Social Phase:** Going public, consulting friends/family, reshaping social alliances (*Threshold: "I mean it"*).
4. **Grave-Dressing Phase:** Constructing a coherent, face-saving story of the relationship's rise and end (*Threshold: "It's now inevitable"*; Duck later added a 5th *Resurrection* phase of personal growth).
- **Cultural Critique (**Perspective**):** Duck's sequence assumes an **individualistic** script where couples confront privately before involving family. In many **collectivistic** communities, extended family or community mediators intervene *before* dyadic separation, and couples may loop backward toward repair rather than progressing linearly.`,
      diagram: `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram showing Gottman 5 to 1 positive-to-negative interaction ratio and Four Horsemen above Duck's four sequential phases of relationship dissolution">
  <rect x="0" y="0" width="520" height="340" fill="#ffffff" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Gottman's 5:1 Ratio &amp; Duck's 4 Dissolution Phases</text>
  <rect x="16" y="34" width="488" height="128" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="30" y="54" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#4c1d95">A. Gottman Conflict Ratio &amp; Four Horsemen</text>
  <text x="30" y="76" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Stable (≥ 5 : 1)</text>
  <rect x="122" y="64" width="210" height="18" rx="4" fill="#22c55e"/>
  <text x="227" y="77" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">5 Positive</text>
  <rect x="336" y="64" width="42" height="18" rx="4" fill="#ea580c"/>
  <text x="357" y="77" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">1 Neg</text>
  <text x="30" y="106" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#9a3412">Unstable (0.8 : 1)</text>
  <rect x="122" y="94" width="38" height="18" rx="4" fill="#86efac"/>
  <text x="141" y="107" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">0.8</text>
  <rect x="164" y="94" width="48" height="18" rx="4" fill="#dc2626"/>
  <text x="188" y="107" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#ffffff">1 Neg</text>
  <rect x="230" y="92" width="260" height="58" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.2"/>
  <text x="360" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9a3412">Four Horsemen (Dissolution Risk)</text>
  <text x="360" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">1. Criticism   2. Contempt (strongest!)</text>
  <text x="360" y="139" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">3. Defensiveness   4. Stonewalling</text>
  <rect x="16" y="174" width="488" height="150" rx="10" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="30" y="194" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#4c1d95">B. Duck's Phase Model of Relationship Dissolution (1982, 2007)</text>
  <rect x="26" y="208" width="106" height="68" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="79" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">1. Intrapsychic</text>
  <text x="79" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Private brooding,</text>
  <text x="79" y="255" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">cost–benefit tally</text>
  <line x1="132" y1="242" x2="146" y2="242" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="146,238 153,242 146,246" fill="#7c3aed"/>
  <rect x="154" y="208" width="102" height="68" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="205" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">2. Dyadic</text>
  <text x="205" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Confrontation,</text>
  <text x="205" y="255" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">talk or repair</text>
  <line x1="256" y1="242" x2="270" y2="242" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="270,238 277,242 270,246" fill="#7c3aed"/>
  <rect x="278" y="208" width="102" height="68" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="329" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">3. Social</text>
  <text x="329" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Public breakup,</text>
  <text x="329" y="255" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">allies &amp; support</text>
  <line x1="380" y1="242" x2="394" y2="242" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="394,238 401,242 394,246" fill="#7c3aed"/>
  <rect x="402" y="208" width="94" height="68" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="449" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">4. Grave-Dressing</text>
  <text x="449" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Face-saving story,</text>
  <text x="449" y="255" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">closure &amp; reset</text>
  <text x="260" y="302" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">Note: Each transition crosses a psychological threshold; repair can loop back at earlier phases.</text>
</svg>`,
      diagramCaption:
        "Figure 5.2 — Gottman's conflict positivity ratio and Four Horsemen (top) alongside Duck's four-phase dissolution process (bottom).",
      workedExamples: [
        {
          title: "Calculating Gottman's Positivity Ratio & Classifying a Horseman",
          problem:
            "During a 15-minute coded conflict conversation, researchers record 18 positive behaviours (warmth, laughter, validation) and 6 negative behaviours, including one partner rolling their eyes and saying, 'Honestly, you're too immature to understand basic finances.' (a) Express the positive-to-negative ratio in simplest form. (b) Identify which of Gottman's Four Horsemen is illustrated and explain its predictive significance.",
          steps: [
            "Compute the ratio of positive to negative interactions: {{18 : 6}}.",
            "Divide both sides by 6 to simplify: {{3 : 1}}.",
            "Compare against Gottman's stability threshold of **5 : 1**: {{3 : 1}} falls below 5 : 1, signalling elevated dissolution risk.",
            "Identify the Horseman: eye-rolling and belittling the partner's intelligence displays superiority and disrespect, which is **contempt** — the single strongest behavioural predictor of divorce in Gottman & Levenson's longitudinal studies.",
          ],
          answer:
            "(a) 3 : 1 (below Gottman's 5 : 1 stability threshold). (b) Contempt, which signals deep disrespect and is the strongest single predictor of relationship breakdown.",
          yourTurn: {
            question:
              "A couple records 4 negative interactions during a 15-minute conflict task. What is the minimum number of positive interactions needed to meet Gottman's 5 : 1 stability threshold?",
            answer: { type: "number", value: 20 },
            solution:
              "To reach at least {{5 : 1}}, multiply the 4 negative interactions by 5: {{5 * 4 = 20}} positive interactions.",
          },
        },
        {
          title: "Applying Rusbult's Investment Model to an Unseen Vignette",
          problem:
            "Mei has felt emotionally unfulfilled in her 7-year partnership for two years, yet decides not to leave because she and her partner co-own a small bakery, share the same close friend group, and Mei worries she could not afford rent alone. Explain her decision using Rusbult's Investment Model.",
          steps: [
            "Note **Low Satisfaction (`S`):** Mei experiences emotional unfulfilment, which lowers satisfaction.",
            "Note **High Investment Size (`I`):** Seven years of shared history (intrinsic) plus the co-owned bakery and mutual friend network (extrinsic) represent substantial resources that would be forfeited upon leaving.",
            "Note **Low Quality of Alternatives (`A`):** Financial insecurity and fear of being unable to afford rent alone make alternatives unattractive.",
            "Conclude using {{C = S - A + I}}: High investment and poor alternatives sustain high **commitment** despite low satisfaction — showing why stability does not always equal happiness.",
          ],
          answer:
            "Rusbult's model explains that high intrinsic and extrinsic investments combined with poor perceived alternatives maintain commitment even when relationship satisfaction is low.",
        },
      ],
      keyPoints: [
        "**Positive illusions** (Murray et al., 1996) and **relationship-enhancing attributions** cushion everyday conflict and encourage constructive **accommodation**.",
        "**Gottman & Levenson (1992, 2000)** linked stable marriages to a **≥ 5 : 1** positive-to-negative ratio during conflict and absence of the **Four Horsemen** (especially **contempt**).",
        "**Rusbult's Investment Model** ({{C = S - A + I}}; Le & Agnew, 2003) explains why commitment — not satisfaction alone — drives staying versus leaving.",
        "**Duck's Phase Model** (Intrapsychic → Dyadic → Social → Grave-Dressing) captures dissolution as a staged communicative process, but carries an individualistic cultural **Bias**.",
      ],
      whyItWorks:
        "Relationships are dynamic systems that accumulate both *cognitive trust* (attributions, positive illusions) and *structural interdependence* (shared investments). When negative communication crosses physiological flooding thresholds (stonewalling) or erodes basic respect (contempt), cognitive framing flips from charitable to defensive — turning repairable disagreements into cascading dissolution.",
      strategies: [
        "Distinguish **Criticism** (attacking character, e.g. 'you're careless') from **Contempt** (mockery/superiority/eye-rolling) — students frequently confuse them on IB Paper 1!",
        "When evaluating Gottman or Duck, explicitly name the Core Concept: e.g., **Measurement** (lab coding reactivity vs high inter-rater reliability) or **Perspective** (collectivistic family mediation before dyadic confrontation).",
        "In Paper 1 Sec B vignettes, check whether the couple's stay/leave dilemma hinges on **alternatives/investments** (Rusbult) or **communication style** (Gottman) before writing.",
      ],
      thinkDeeper:
        "How might social media (HL Technology extension) reshape **Duck's Social and Grave-Dressing phases** — for example, when a breakup plays out publicly through 'unfollowing', archived photos, and digital audiences?",
    },

    // =========================================================================
    // SECTION 3: prosocial-bystander-altruism
    // =========================================================================
    {
      id: "prosocial-bystander-altruism",
      heading: "Prosocial Behaviour, Bystanderism & Kin/Empathy Explanations",
      level: "SL",
      discovery: {
        problem:
          "If someone collapses on a city train, would they be safer in an almost empty carriage with 1 other passenger, or in a crowded carriage with 20 passengers? Surprisingly, two famous studies — Darley & Latané (1968) and Piliavin, Rodin & Piliavin (1969) — gave *opposite* answers. Why?",
        idea:
          "In **Darley & Latané's** intercom study, witnesses could not see each other, so **diffusion of responsibility** caused helping to plunge from 85% (alone) to 31% (in a 6-person group). In **Piliavin's** subway field study, the collapse was unambiguous and face-to-face, raising emotional **arousal** and the cost of not helping — so 95% helped a cane-carrying victim regardless of crowd size! Context determines which cognitive mechanism dominates.",
      },
      body: `**Prosocial behaviour** refers to voluntary actions intended to benefit another person; **altruism** is the narrower subset motivated by concern for another's welfare without expectation of external reward. Explaining why people help — or freeze — integrates all three IB approaches.

### 1. Biological / Evolutionary Explanations
- **Kin Selection & Hamilton's Rule (1964):** Natural selection favours costly helping toward genetic relatives whenever inclusive fitness gain exceeds cost:
  {{rB > C}}
  where {{r}} is the coefficient of genetic relatedness ({{0.5}} for full sibling or parent–offspring, {{0.25}} for half-sibling, grandparent, aunt/uncle, niece/nephew, {{0.125}} for first cousin), {{B}} is the reproductive benefit to the recipient, and {{C}} is the cost to the actor.
  - **Madsen et al. (2007):** Across UK and South African (Zulu) participants holding a painful wall-sit to earn rewards for relatives, persistence rose steadily with genetic relatedness {{r}} in both cultures — yet women also showed high willingness to help close unrelated friends, illustrating biological–sociocultural interaction.
- **Reciprocal Altruism (Trivers, 1971):** Helping unrelated individuals evolves when partners interact repeatedly, remember past favours, and detect cheaters so long-term gains exceed short-term costs.

### 2. Cognitive Decision-Making & Empathy Models
- **Latané & Darley's (1970) 5-Step Bystander Intervention Model:** A witness must pass five sequential cognitive gates to help: (1) **Notice** the event, (2) **Interpret** it as an emergency, (3) **Assume personal responsibility**, (4) **Know how** to help, and (5) **Implement** help. Two key cognitive barriers block Steps 2 and 3:
  - **Pluralistic Ignorance (Step 2):** In ambiguous emergencies, bystanders look to calm-looking others and mistakenly assume nothing is wrong. In the **Smoke-Filled Room** lab study (**Latané & Darley, 1968**), **75%** of lone participants reported smoke pouring into the room, versus **38%** with two naive strangers and only **10%** with two passive confederates.
  - **Diffusion of Responsibility (Step 3):** When {{N}} bystanders are present, perceived personal responsibility divides roughly as {{1/N}}. In the **Intercom Seizure** study (**Darley & Latané, 1968**), **85%** helped when believing they were alone, dropping to **62%** in a 3-person group and **31%** in a 6-person group.
- **Piliavin, Rodin & Piliavin's (1969) Arousal–Cost–Reward Model:** In 103 naturalistic NYC subway trials, a confederate collapsed either carrying a cane (ill) or smelling of alcohol (drunk). Cane victims received help in **95%** of trials versus **50%** for drunk victims, with *no* diffusion of responsibility in larger groups. Witnessing distress creates unpleasant **arousal**; bystanders weigh the **cost of helping** (danger, disgust, time) against the **cost of not helping** (guilt, blame). *Ethics (**Responsibility**):* high ecological validity, but participants gave no informed consent, experienced distress, and were not debriefed.
- **Empathy–Altruism Hypothesis (Batson et al., 1981):** In the Elaine shock study (high vs low empathy × easy vs difficult escape), low-empathy participants stopped helping when leaving was easy (egoistic arousal relief), whereas **high-empathy** participants still volunteered to take Elaine's shocks even when escape was effortless — supporting genuine altruistic motivation (though **Cialdini et al., 1987** proposed subtle egoistic negative-state relief as an alternative).

### 3. Sociocultural Norms & Real-World Reappraisals
- **Cross-Cultural Helping (Levine et al., 2001):** Field tests across 23 major cities (dropped pen, hurt leg, blind pedestrian) showed helping ranged from **93%** (Rio de Janeiro) to **40%** (Kuala Lumpur). Cultural norms of *simpatía* (warm social harmony) and slower economic pace predicted helping far better than simple individualism–collectivism labels.
- **Modern Ecological Reassessment (Philpot et al., 2020):** Analysing CCTV footage of 219 real public conflicts in the UK, Netherlands, and South Africa, bystanders intervened in **90.9%** of incidents — and the probability that *at least one* person intervened actually increased with crowd size! This highlights **Measurement** and **Perspective**: contrived lab ambiguity exaggerates bystander apathy compared with unambiguous real-life emergencies.`,
      diagram: `<svg viewBox="0 0 520 345" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of Latane and Darley five-step bystander decision model on the left paired with Hamilton's rule kin-selection relatedness chart on the right">
  <rect x="0" y="0" width="520" height="345" fill="#ffffff" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Bystander Decision Cascade &amp; Hamilton's Kin-Selection Rule</text>
  <rect x="14" y="34" width="302" height="298" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="165" y="53" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#4c1d95">Latané &amp; Darley 5-Step Model</text>
  <rect x="34" y="64" width="166" height="34" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="117" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">1. Notice the event</text>
  <text x="210" y="84" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">Blocked by rush</text>
  <line x1="117" y1="98" x2="117" y2="112" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="113,110 117,117 121,110" fill="#7c3aed"/>
  <rect x="34" y="118" width="166" height="36" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="117" y="139" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">2. Interpret as emergency</text>
  <text x="208" y="133" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">Pluralistic</text>
  <text x="208" y="146" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">ignorance</text>
  <line x1="117" y1="154" x2="117" y2="168" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="113,166 117,173 121,166" fill="#7c3aed"/>
  <rect x="34" y="174" width="166" height="36" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="117" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">3. Assume responsibility</text>
  <text x="208" y="189" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">Diffusion</text>
  <text x="208" y="202" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">(share = 1/N)</text>
  <line x1="117" y1="210" x2="117" y2="224" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="113,222 117,229 121,222" fill="#7c3aed"/>
  <rect x="34" y="230" width="166" height="34" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="117" y="251" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">4. Know how to help</text>
  <text x="210" y="250" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">Low competence</text>
  <line x1="117" y1="264" x2="117" y2="278" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="113,276 117,283 121,276" fill="#7c3aed"/>
  <rect x="34" y="284" width="166" height="36" rx="7" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="117" y="306" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">5. Decide &amp; Intervene</text>
  <text x="208" y="300" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">Audience</text>
  <text x="208" y="312" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">inhibition / cost</text>
  <rect x="328" y="34" width="178" height="298" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="417" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#166534">Hamilton's Rule</text>
  <rect x="352" y="66" width="130" height="34" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.8"/>
  <text x="417" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#15803d">r × B &gt; C</text>
  <text x="340" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Identical twin:</text>
  <text x="494" y="122" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">r = 1.0</text>
  <rect x="340" y="128" width="152" height="10" rx="4" fill="#15803d"/>
  <text x="340" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Full sibling / Parent:</text>
  <text x="494" y="158" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">r = 0.50</text>
  <rect x="340" y="164" width="76" height="10" rx="4" fill="#22c55e"/>
  <text x="340" y="194" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Half-sib / Aunt / GP:</text>
  <text x="494" y="194" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">r = 0.25</text>
  <rect x="340" y="200" width="38" height="10" rx="4" fill="#4ade80"/>
  <text x="340" y="230" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">First cousin:</text>
  <text x="494" y="230" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">r = 0.125</text>
  <rect x="340" y="236" width="19" height="10" rx="4" fill="#86efac"/>
  <rect x="340" y="262" width="154" height="58" rx="8" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.2"/>
  <text x="417" y="279" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534">Inclusive Fitness</text>
  <text x="417" y="294" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">B = recipient benefit</text>
  <text x="417" y="308" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">C = actor cost</text>
</svg>`,
      diagramCaption:
        "Figure 5.3 — Cognitive bottlenecks in Latané & Darley's 5-step bystander model (left) and evolutionary kin-selection relatedness values in Hamilton's rule (right).",
      workedExamples: [
        {
          title: "Applying Hamilton's Rule (rB > C) to Multi-Kin Scenarios",
          problem:
            "A risky rescue carries a personal fitness cost of {{C = 1.2}} units. Using Hamilton's rule ({{rB > C}}), determine whether kin selection predicts rescuing **three first cousins**, each gaining {{B = 3}} fitness units.",
          steps: [
            "Recall the coefficient of genetic relatedness for a first cousin: {{r = 0.125}} (one-eighth of genes shared by recent descent).",
            "Calculate the indirect fitness benefit for one cousin: {{0.125 * 3 = 0.375}}.",
            "Multiply by 3 cousins to get total indirect benefit: {{3 * 0.375 = 1.125}}.",
            "Compare against cost {{C = 1.2}}: since {{1.125 < 1.2}}, {{rB > C}} is **not** satisfied — kin selection does not favour the rescue (saving 4 cousins would give {{1.5 > 1.2}}).",
          ],
          answer:
            "No — total indirect fitness gain is 1.125 units, which is less than the personal cost C = 1.2.",
          yourTurn: {
            question:
              "An altruistic act has a cost of {{C = 2}} units and helps one full sibling ({{r = 0.5}}). If the sibling gains {{B = 6}} units, what is the value of {{rB}}?",
            answer: { type: "number", value: 3 },
            solution:
              "Substitute {{r = 0.5}} and {{B = 6}}: {{rB = 0.5 * 6 = 3}}. Since {{3 > 2}}, Hamilton's rule predicts kin altruism.",
          },
        },
        {
          title: "Contrasting Darley & Latané (1968) with Piliavin et al. (1969)",
          problem:
            "In Darley & Latané's (1968) intercom seizure study, helping dropped from 85% (alone) to 31% (6-person group). Why did Piliavin et al. (1969) NOT observe this diffusion effect in crowded NYC subway cars?",
          steps: [
            "Compute the drop in Darley & Latané: {{85 - 31 = 54}} percentage points (a {{54/85 * 100 ≈ 63.5%}} relative decline) under anonymous, non-visual intercom conditions.",
            "Contrast situational visibility: on the subway, the collapse was **unambiguous** and passengers could **see** whether anyone else was helping, reducing pluralistic ignorance and enabling rapid coordination.",
            "Apply Piliavin's **Arousal–Cost–Reward Model**: trapped in a moving carriage with a visibly ill (cane) victim, passengers experienced high empathic arousal and a high psychological cost of *not* helping, prompting direct intervention in 95% of cane trials.",
            "Conclude via **Measurement** (ecological validity): naturalistic public settings engage social norms and visible accountability differently from isolated laboratory cubicles.",
          ],
          answer:
            "Visible, unambiguous emergencies in confined public spaces elevate arousal and the cost of non-intervention, overcoming the anonymous diffusion of responsibility created in laboratory intercom cubicles.",
        },
      ],
      keyPoints: [
        "**Hamilton's Rule ({{rB > C}})** and **Madsen et al. (2007)** show helping rises with genetic relatedness, while **reciprocal altruism** explains repeated non-kin cooperation.",
        "**Latané & Darley's 5-step model** isolates **pluralistic ignorance** (interpreting ambiguous cues) and **diffusion of responsibility** (splitting obligation across `N` witnesses).",
        "**Piliavin's Arousal–Cost–Reward Model** explains selective helping (95% cane vs 50% drunk) via physiological arousal weighed against costs of helping vs not helping.",
        "**Batson's Empathy–Altruism Hypothesis** shows high empathy sustains helping even when escape is easy, while **Levine (2001)** and **Philpot (2020)** prove cultural norms and real-world visibility powerfully shape intervention.",
      ],
      whyItWorks:
        "Prosocial behaviour sits at the intersection of evolutionary fitness, rapid cognitive cost–benefit appraisal, and local social norms. A single person may walk past an ambiguous hallway noise (pluralistic ignorance), sprint to help an injured commuter (high arousal, low helping cost), and sacrifice deeply for a sibling (kin selection + empathy).",
      strategies: [
        "Never confuse **pluralistic ignorance** (Step 2: *Is this actually an emergency?*) with **diffusion of responsibility** (Step 3: *Is it MY job to act?*).",
        "When discussing **Piliavin et al. (1969)**, score easy **Responsibility** marks by weighing its high ecological validity against ethical breaches (no informed consent, potential psychological distress, no debriefing).",
        "Include **Philpot et al. (2020)** alongside **Darley & Latané (1968)** to show sophisticated FA2027 **Measurement** and **Change** in modern psychological science.",
      ],
      thinkDeeper:
        "How does **digital bystanderism** during cyberbullying (HL Technology & Motivation extensions) combine high anonymity, huge audience size `N`, and low perceived cost of scrolling past — and what platform design changes could restore personal responsibility?",
    },

    // =========================================================================
    // SECTION 4: prejudice-stereotyping-conflict
    // =========================================================================
    {
      id: "prejudice-stereotyping-conflict",
      heading: "Stereotyping, Prejudice, Intergroup Conflict & Reduction Strategies",
      level: "SL",
      discovery: {
        problem:
          "Participants read 39 brief sentences about two completely fictional groups, A and B. Both groups committed **identical** proportions of negative acts (30.8% each), yet Group B was half the size of Group A. Afterwards, participants judged Group B as significantly less trustworthy and overestimated how often Group B behaved badly. How could prejudice form with zero competition, zero history, and zero factual difference?",
        idea:
          "**Illusory correlation (Hamilton & Gifford, 1976)**: both *minority group membership* (Group B) and *negative behaviour* were statistically infrequent. Because paired rare events are cognitively **distinctive**, memory encodes them more vividly — creating a stereotype purely from human information-processing **Bias**!",
      },
      body: `To unpack intergroup conflict rigorously, keep three related terms distinct: a **stereotype** is a cognitive schema/belief about a group, **prejudice** is an affective attitude (usually negative), and **discrimination** is behavioural unfairness.

### 1. Cognitive & Sociocultural Origins of Stereotyping and Prejudice
- **Illusory Correlation (Hamilton & Gifford, 1976):** Participants read 26 statements about majority Group A (18 positive, 8 negative → 30.8% negative) and 13 about minority Group B (9 positive, 4 negative → 30.8% negative). Because rare-group + rare-negative combinations are doubly distinctive, participants systematically over-recalled Group B's negative actions — demonstrating how stereotyping arises from normal cognitive heuristics (**Bias**).
- **Social Identity Theory & Out-Group Homogeneity (Tajfel & Turner, 1979):** Categorising people into *in-groups* ("us") and *out-groups* ("them") motivates **positive distinctiveness** (in-group favouritism and out-group derogation), even in arbitrary minimal groups. People also perceive out-groups as all alike (**out-group homogeneity**) while recognising wide individuality within their own group.
- **Realistic Conflict Theory (Sherif et al., 1954 / 1961 — Robbers Cave):** Twenty-two 11-year-old boys at a summer camp were assigned to the *Eagles* and *Rattlers*. After bonding internally (Stage 1), **zero-sum competition** for a trophy and pocket knives (Stage 2) ignited severe hostility, name-calling, cabin raids, and flag burning — proving that competition for scarce resources drives intergroup conflict (**Causality**). Yet hostility began subtly *before* the tournament upon hearing another group existed (supporting SIT alongside RCT), and the all-white middle-class American boy sample plus lack of informed consent raise **Bias** and **Responsibility** concerns.

### 2. Measuring Bias & Impact on Targets
- **Implicit vs Explicit Bias — IAT Critiques (Greenwald et al., 1998):** Because explicit questionnaires suffer from **social desirability bias**, the **Implicit Association Test (IAT)** measures millisecond reaction-time differences when pairing social categories with positive or negative words. However, **Oswald et al. (2013)** meta-analysed IAT studies and found modest test–retest reliability and weak correlation with individual discriminatory acts — raising sharp **Measurement** questions over whether the IAT taps personal prejudice or mere cultural exposure to stereotypes.
- **Stereotype Threat (Steele & Aronson, 1995):** When a difficult verbal GRE test was framed as *diagnostic of intellectual ability*, African American Stanford students underperformed relative to equally qualified White peers; when framed as a *non-diagnostic problem-solving task*, the gap disappeared. Threat triggers intrusive worry that depletes **working memory** capacity (**Cognitive** mechanism). Later meta-analyses (e.g., **Flore & Wicherts, 2015**) warn of publication **Bias** and smaller effects in real-world classrooms than controlled labs.

### 3. Evidence-Based Conflict Reduction (**Change** & **Responsibility**)
- **Superordinate Goals (Sherif, 1961 — Stage 3):** Mere pleasant contact (shared meals and movies) *failed* to reduce hostility at Robbers Cave and even triggered food fights. Only **superordinate goals** — urgent tasks neither group could solve alone (unclogging the camp water tank, pooling money for a film, pulling a stalled supply truck) — dissolved hostility and built cross-group friendships.
- **Allport's Contact Hypothesis (1954) & Pettigrew & Tropp (2006):** Intergroup contact reduces prejudice most reliably when four **optimal conditions** hold:
  1. **Equal status** within the interaction.
  2. **Common goals** shared by both groups.
  3. **Intergroup cooperation** (non-competitive interdependence).
  4. **Institutional / authority support** (leaders, norms, policies backing equality).
  Pettigrew & Tropp's meta-analysis of 515 studies (>250,000 participants) confirmed contact significantly reduces prejudice ({{r = -0.21}}), primarily by lowering intergroup anxiety and boosting empathy — even partially when not all four conditions hold, though optimal conditions yield the strongest **Change**.
- **Aronson's Jigsaw Classroom (1978):** Implemented in newly desegregated Austin, Texas schools, diverse 5–6 student groups divide a lesson so each student holds one essential puzzle piece needed for everyone's exam. By operationalising Allport's four conditions and superordinate goals, Jigsaw classrooms reduced ethnic stereotyping, improved empathy, and raised minority students' academic scores without lowering majority students' performance.`,
      diagram: `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram showing Sherif Robbers Cave hostility across stages on top and Allport four optimal Contact Hypothesis conditions below">
  <rect x="0" y="0" width="520" height="340" fill="#ffffff" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Intergroup Conflict Trajectory &amp; Allport's Contact Conditions</text>
  <rect x="16" y="34" width="488" height="156" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="30" y="53" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#4c1d95">A. Sherif's Robbers Cave Field Experiment (1954/1961)</text>
  <line x1="58" y1="154" x2="482" y2="154" stroke="#64748b" stroke-width="1.5"/>
  <line x1="58" y1="68" x2="58" y2="154" stroke="#64748b" stroke-width="1.5"/>
  <text x="26" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#475569" transform="rotate(-90 26 114)">Hostility</text>
  <polyline points="88,142 195,78 308,82 442,140" fill="none" stroke="#c2410c" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="88" cy="142" r="5" fill="#7c3aed"/>
  <circle cx="195" cy="78" r="5" fill="#dc2626"/>
  <circle cx="308" cy="82" r="5" fill="#ea580c"/>
  <circle cx="442" cy="140" r="5" fill="#15803d"/>
  <text x="88" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#5b21b6">Low</text>
  <text x="195" y="69" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#b91c1c">Peak friction</text>
  <text x="308" y="73" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412">Still high!</text>
  <text x="442" y="129" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#166534">Sharp drop</text>
  <text x="88" y="169" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Stage 1</text>
  <text x="88" y="181" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Bonding</text>
  <text x="195" y="169" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Stage 2</text>
  <text x="195" y="181" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Zero-sum rivalry</text>
  <text x="308" y="169" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Stage 3a</text>
  <text x="308" y="181" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Mere contact</text>
  <text x="442" y="169" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Stage 3b</text>
  <text x="442" y="181" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#166534">Superordinate goals</text>
  <rect x="16" y="200" width="488" height="128" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="30" y="220" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#166534">B. Allport's 4 Optimal Conditions for Prejudice Reduction (1954)</text>
  <rect x="28" y="232" width="108" height="58" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
  <text x="82" y="252" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">1. Equal Status</text>
  <text x="82" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">No hierarchy in</text>
  <text x="82" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">the shared setting</text>
  <rect x="146" y="232" width="108" height="58" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
  <text x="200" y="252" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">2. Common Goals</text>
  <text x="200" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Shared outcome</text>
  <text x="200" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">valued by all</text>
  <rect x="264" y="232" width="110" height="58" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
  <text x="319" y="252" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">3. Cooperation</text>
  <text x="319" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Interdependence,</text>
  <text x="319" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">not competition</text>
  <rect x="384" y="232" width="108" height="58" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
  <text x="438" y="252" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">4. Authority</text>
  <text x="438" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Institutional norms</text>
  <text x="438" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">&amp; policy support</text>
  <text x="260" y="314" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534">Applied in Aronson's Jigsaw Classroom (1978) &amp; validated by Pettigrew &amp; Tropp (2006, 515 studies).</text>
</svg>`,
      diagramCaption:
        "Figure 5.4 — Why mere contact failed at Robbers Cave while superordinate goals succeeded (top), mapped to Allport's four optimal Contact Hypothesis conditions (bottom).",
      workedExamples: [
        {
          title: "Verifying Equal Proportions in Illusory Correlation (Hamilton & Gifford, 1976)",
          problem:
            "In a replication of Hamilton & Gifford (1976), majority Group A has 24 positive and 12 negative behaviours, while minority Group B has 12 positive and 6 negative behaviours. Show mathematically why judging Group B as 'more negative' is an illusory correlation.",
          steps: [
            "Compute Group A's proportion of negative behaviours: {{12 / (24 + 12) = 12 / 36 = 1/3}} (33.3%).",
            "Compute Group B's proportion of negative behaviours: {{6 / (12 + 6) = 6 / 18 = 1/3}} (33.3%).",
            "Both groups have the **exact same negative rate** (33.3%), so any perceived association between Group B and negativity is objectively false.",
            "Explain the cognitive mechanism: minority status (Group B) and undesirable acts are both statistically infrequent; their shared distinctiveness draws extra attention and stronger encoding in memory.",
          ],
          answer:
            "Both groups exhibit an identical 33.3% (1/3) rate of negative behaviours, proving that participants' harsher judgement of Group B stems from cognitive distinctiveness bias rather than objective evidence.",
          yourTurn: {
            question:
              "Majority Group X has 30 positive and 10 negative statements. Minority Group Y has 15 positive statements and the *exact same* percentage of negative statements as Group X. How many negative statements does Group Y have?",
            answer: { type: "number", value: 5 },
            solution:
              "Group X's ratio of positive to negative is {{30 : 10 = 3 : 1}} (25% negative). For Group Y to match, {{15 / 3 = 5}} negative statements ({{5 / 20 = 25%}}).",
          },
        },
        {
          title: "Designing a School Conflict-Reduction Programme via Allport & Aronson",
          problem:
            "Two rival secondary-school houses sit together during lunch, yet taunts and vandalism continue. Using Sherif (1961), Allport (1954), and Aronson (1978), explain why shared lunches failed and propose an evidence-based intervention.",
          steps: [
            "Diagnose the failure using **Sherif (1961) Stage 3a**: unstructured mere contact without interdependence reinforces existing boundaries and can spark friction (like the Robbers Cave mealtime food fights).",
            "Redesign around **superordinate goals** and **Aronson's Jigsaw Classroom**: form mixed-house project teams where every student holds a unique piece of research required to complete a shared community exhibition.",
            "Explicitly check all **4 Allport conditions**: equal roles within each team (equal status), shared exhibition prize (common goals), unique essential pieces (intergroup cooperation), and visible endorsement by school principals and teachers (institutional support).",
            "Add a **Responsibility / Measurement** evaluation: measure pre- and post-intervention cross-house friendships and explicit/behavioural inclusion rather than relying on one single IAT score.",
          ],
          answer:
            "Replace passive shared lunches with mixed-house Jigsaw teams working toward a superordinate goal endorsed by school leaders, fulfilling all four of Allport's optimal contact conditions.",
        },
      ],
      keyPoints: [
        "**Illusory correlation (Hamilton & Gifford, 1976)** proves stereotypes can form through cognitive distinctiveness alone, even without pre-existing hostility or competition.",
        "**Social Identity Theory (Tajfel & Turner)** explains in-group favouritism and **out-group homogeneity**, while **Realistic Conflict Theory (Sherif, 1961)** explains how scarce-resource competition escalates hostility.",
        "**IAT critiques (Oswald et al., 2013)** and **stereotype threat replication debates (Steele & Aronson, 1995; Flore & Wicherts, 2015)** are prime examples of FA2027 **Measurement** and **Bias**.",
        "Mere contact fails; reducing conflict requires **superordinate goals** and **Allport's 4 conditions** (equal status, common goals, cooperation, institutional support), operationalised in **Aronson's Jigsaw Classroom**.",
      ],
      whyItWorks:
        "Intergroup bias persists because cognitive shortcuts (categorisation, distinctiveness), motivational identity needs (self-esteem via positive distinctiveness), and structural competition mutually reinforce each other. Effective interventions succeed only when they change the *goal structure* from zero-sum competition to equal-status interdependence — lowering intergroup anxiety and building cross-cutting empathy.",
      strategies: [
        "Always pair **Sherif (1961)** (Realistic Conflict Theory) with **Tajfel & Turner (1979)** (Social Identity Theory) to show that competition *amplifies* bias, while bare categorisation can spark it even before competition starts.",
        "When evaluating **Allport's Contact Hypothesis**, cite **Pettigrew & Tropp's (2006)** 515-study meta-analysis (`r = −0.21`) and note *how* contact works (reduced anxiety + increased empathy), not just *whether* it works.",
        "In Paper 1 Sec C Concept essays on **Responsibility**, discuss how psychologists apply Aronson's Jigsaw Classroom ethically to desegregated schools while acknowledging systemic inequalities outside the classroom.",
      ],
      thinkDeeper:
        "Algorithmic social-media feeds often segregate users into ideological echo chambers while exposing them to extreme out-group posts (HL Technology extension). Using **illusory correlation**, **out-group homogeneity**, and **Allport's 4 conditions**, explain why online exposure frequently *increases* rather than decreases polarization.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What did Wedekind et al.'s (1995) sweaty T-shirt study find about MHC genes and contraception?",
        back: "Women not taking oral contraceptives preferred the scent of MHC-dissimilar men (supporting immune-diversity kin/mate fitness); women taking oral contraceptives preferred MHC-similar scents, showing hormonal moderation.",
        level: "SL",
      },
      {
        front: "Name Helen Fisher's three neurochemical systems of romantic love and their primary chemicals.",
        back: "1. Lust (testosterone/oestrogen), 2. Romantic attraction (dopamine, norepinephrine, low serotonin), 3. Long-term attachment (oxytocin & vasopressin).",
        level: "SL",
      },
      {
        front: "How did Festinger, Schachter & Back (1950) demonstrate the role of proximity in attraction?",
        back: "In MIT's Westgate West housing, 41% of residents named next-door neighbours as close friends versus 10% four doors away, showing functional distance drives repeated encounters (mere exposure).",
        level: "SL",
      },
      {
        front: "What did Gupta & Singh (1982) find comparing arranged and love marriages, and what is its key design flaw?",
        back: "Love-marriage couples reported higher love in Year 1 that declined, while arranged-marriage couples increased and scored higher after 5+ years. Key flaw: cross-sectional design (cohort and survivorship bias) plus etic Western scales.",
        level: "SL",
      },
      {
        front: "State Gottman's 'magic ratio' during conflict and list all Four Horsemen (flagging the strongest divorce predictor).",
        back: "Stable couples maintain ≥ 5 : 1 positive-to-negative interactions during conflict. Four Horsemen: Criticism, **Contempt** (strongest predictor of divorce), Defensiveness, and Stonewalling.",
        level: "SL",
      },
      {
        front: "What are the three predictors of commitment in Rusbult's Investment Model?",
        back: "High Satisfaction (S), low Quality of Alternatives (A), and high Investment Size (I — intrinsic time/emotion and extrinsic shared assets): Commitment = S − A + I.",
        level: "SL",
      },
      {
        front: "List Duck's (1982, 2007) four phases of relationship dissolution in order.",
        back: "1. Intrapsychic (private brooding), 2. Dyadic (confrontation/negotiation), 3. Social (public announcement & network restructuring), 4. Grave-dressing (crafting a face-saving narrative).",
        level: "SL",
      },
      {
        front: "State Hamilton's Rule for kin selection and give exact r values for full sibling, half-sibling, and first cousin.",
        back: "Kin altruism is favoured when rB > C. Relatedness: full sibling r = 0.5, half-sibling (or grandparent/aunt/uncle) r = 0.25, first cousin r = 0.125.",
        level: "SL",
      },
      {
        front: "Distinguish pluralistic ignorance from diffusion of responsibility in Latané & Darley's 5-step model.",
        back: "Pluralistic ignorance (Step 2) misinterprets an ambiguous event as a non-emergency by copying calm others (Smoke-Filled Room). Diffusion of responsibility (Step 3) splits obligation across N witnesses (Intercom Seizure).",
        level: "SL",
      },
      {
        front: "How did Piliavin, Rodin & Piliavin's (1969) subway results differ from Darley & Latané (1968)?",
        back: "Cane victims were helped 95% of the time vs 50% for drunk victims, with NO diffusion of responsibility in larger crowds — explained by high arousal and cost–reward appraisal in an unambiguous face-to-face setting.",
        level: "SL",
      },
      {
        front: "What did Batson et al. (1981) demonstrate in the Elaine shock experiment?",
        back: "High-empathy participants volunteered to take shocks for Elaine even when escape was easy, supporting the Empathy–Altruism Hypothesis over purely egoistic arousal reduction.",
        level: "SL",
      },
      {
        front: "What is illusory correlation (Hamilton & Gifford, 1976)?",
        back: "A cognitive bias where two statistically infrequent categories (minority group + negative behaviour) are paired more vividly in memory, causing overestimation of minority negativity despite identical rates.",
        level: "SL",
      },
      {
        front: "List Allport's (1954) four optimal conditions of the Contact Hypothesis.",
        back: "1. Equal status, 2. Common goals, 3. Intergroup cooperation (interdependence), 4. Institutional / authority support.",
        level: "SL",
      },
      {
        front: "How does Eagly & Wood's (1999) reanalysis of Buss (1989) illustrate the HL Culture extension and Perspective?",
        back: "Across Buss's 37 cultures, sex differences in mate preferences shrank as national gender equality rose, showing cultural power structures — not fixed evolutionary modules alone — shape mate criteria.",
        level: "HL",
      },
      {
        front: "What are the main HL Paper 3 Measurement critiques of the Implicit Association Test (IAT)?",
        back: "Modest test–retest reliability (r ≈ 0.4–0.5), weak predictive validity for individual discriminatory behaviour (Oswald et al., 2013), and ambiguity over personal bias vs cultural familiarity.",
        level: "HL",
      },
      {
        front: "How does Self-Determination Theory (HL Motivation extension) connect to prosociality and relationship maintenance?",
        back: "Autonomous (intrinsic) helping and mutual responsiveness satisfy relatedness and autonomy needs, sustaining higher long-term commitment and well-being than externally controlled or guilt-driven compliance.",
        level: "HL",
      },
    ],
    mustKnow: [
      "FA2027 frames Human Relationships as **Compulsory Context 3** — always integrate Biological, Cognitive, and Sociocultural approaches with the 6 Core Concepts.",
      "**Wedekind (1995)** (MHC scent), **Byrne/Montoya** (similarity–attraction), **Festinger (1950)** (proximity), and **Gupta & Singh (1982)** (arranged vs love marriage) form the core attraction evidence base.",
      "**Gottman's 5 : 1 ratio** and **Four Horsemen** (Criticism, Contempt, Defensiveness, Stonewalling) operationalise observational conflict patterns; **contempt** is the strongest single divorce predictor.",
      "**Rusbult's Investment Model** ({{C = S - A + I}}) explains why commitment persists even when satisfaction drops (high investment + poor alternatives).",
      "**Duck's 4 phases** (Intrapsychic → Dyadic → Social → Grave-Dressing) model dissolution dynamically, but reflect individualistic cultural norms.",
      "**Hamilton's Rule ({{rB > C}})** predicts kin altruism ({{r = 0.5, 0.25, 0.125}}), supported cross-culturally by **Madsen et al. (2007)**.",
      "**Latané & Darley** (pluralistic ignorance & diffusion of responsibility) contrasts with **Piliavin's** unambiguous subway Arousal–Cost–Reward results and **Philpot et al.'s (2020)** 90.9% real-world CCTV intervention rate.",
      "**Batson (1981)** supports empathic altruism (helping despite easy escape), while **Levine (2001)** demonstrates wide cross-cultural helping variation driven by *simpatía* and economic pace.",
      "**Hamilton & Gifford (1976)** (illusory correlation), **Tajfel & Turner** (SIT / out-group homogeneity), and **Sherif (1961)** (Realistic Conflict Theory) explain distinct cognitive and social roots of prejudice.",
      "Prejudice reduction requires **superordinate goals** and **Allport's 4 conditions** (equal status, common goals, cooperation, authority support), confirmed by **Pettigrew & Tropp (2006)** and applied in **Aronson's Jigsaw Classroom (1978)**.",
    ],
    misconceptions: [
      {
        wrong: "Human Relationships is an optional topic you only study for Paper 2.",
        right: "Under IB Psychology **First Assessment May 2027**, Human Relationships is **Compulsory Context 3** studied by every SL and HL student and assessed through Core Content + the 6 Core Concepts in Paper 1.",
        level: "SL",
      },
      {
        wrong: "High relationship satisfaction is the only thing that keeps a couple together.",
        right: "Rusbult's Investment Model shows **commitment** drives staying vs leaving; people with low satisfaction often stay when investments (children, finances, time) are high and alternatives seem poor.",
        level: "SL",
      },
      {
        wrong: "Pluralistic ignorance and diffusion of responsibility mean the same thing.",
        right: "Pluralistic ignorance occurs at Step 2 (*misinterpreting* an ambiguous situation as safe by watching calm others), whereas diffusion of responsibility occurs at Step 3 (*splitting personal obligation* across N witnesses even when the emergency is obvious).",
        level: "SL",
      },
      {
        wrong: "Bystanders almost never help in real-life public emergencies because of the bystander effect.",
        right: "Philpot et al. (2020) analysed 219 real CCTV public conflicts across three countries and found at least one bystander intervened in **90.9%** of cases — lab ambiguity exaggerates non-intervention.",
        level: "SL",
      },
      {
        wrong: "Simply bringing rival groups together for pleasant social contact eliminates prejudice.",
        right: "At Robbers Cave (Sherif, 1961), shared meals and movies failed and sparked food fights; prejudice fell only under **superordinate goals** and **Allport's 4 optimal contact conditions**.",
        level: "SL",
      },
      {
        wrong: "A high Implicit Association Test (IAT) score proves a person will consciously discriminate against out-group members.",
        right: "Meta-analyses (Oswald et al., 2013) show modest test–retest reliability and weak prediction of individual real-world behaviour; IAT latencies may partly capture cultural stereotype familiarity rather than personal endorsement.",
        level: "HL",
      },
      {
        wrong: "Buss's (1989) 37-culture mate preference sex differences prove mate choice is purely genetically hardwired.",
        right: "Eagly & Wood (1999) reanalysed Buss's data and showed sex differences in preferring status vs youth shrink significantly in more gender-equal societies, showing strong sociocultural moderation.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Referring to Human Relationships as 'the Option' or structuring essays around legacy pre-2027 Paper 2 rubrics instead of FA2027 **Core Concepts**.",
      "Writing descriptive study summaries (e.g., retelling Robbers Cave) without explicitly linking to **Causality**, **Bias**, **Measurement**, **Change**, **Perspective**, or **Responsibility**.",
      "Confusing **Criticism** (attacking character) with **Contempt** (mockery/superiority) when diagnosing Gottman's Four Horsemen in Paper 1 Sec B vignettes.",
      "Using the wrong genetic relatedness `r` in Hamilton's rule (e.g., assigning `0.5` to a half-sibling or grandparent instead of `0.25`, or `0.25` to a first cousin instead of `0.125`).",
      "Claiming Gupta & Singh (1982) proved arranged marriages cause love to grow, forgetting it was a **cross-sectional** study vulnerable to cohort and survivorship bias.",
      "Forgetting to separate **stereotype** (cognitive belief), **prejudice** (affective attitude), and **discrimination** (behavioural act) in intergroup conflict answers.",
      "Treating **Piliavin (1969)** as evidence *for* diffusion of responsibility — in fact, Piliavin found NO diffusion effect in larger subway groups!",
      "Listing Allport's Contact Hypothesis as just 'putting groups together' without naming its four optimal conditions (equal status, common goals, cooperation, institutional support).",
    ],
    mnemonics: [
      {
        topic: "Gottman's Four Horsemen of the Apocalypse",
        device: "CCDS — 'Critics Contemptuously Defend Stonewalls'",
        explanation:
          "**C**riticism, **C**ontempt (strongest divorce predictor), **D**efensiveness, **S**tonewalling.",
        level: "SL",
      },
      {
        topic: "Duck's 4 Phases of Relationship Dissolution",
        device: "I-D-S-G — 'Inside, Dialogue, Society, Grave'",
        explanation:
          "**I**ntrapsychic (private thoughts) → **D**yadic (couple confrontation) → **S**ocial (friends/family) → **G**rave-dressing (closure narrative).",
        level: "SL",
      },
      {
        topic: "Latané & Darley's 5-Step Bystander Model",
        device: "N-I-R-K-A — 'Notice It, Really Know Action'",
        explanation:
          "1. **N**otice → 2. **I**nterpret (pluralistic ignorance) → 3. **R**esponsibility (diffusion) → 4. **K**now how (competence) → 5. **A**ct (implement help).",
        level: "SL",
      },
      {
        topic: "Allport's 4 Optimal Contact Hypothesis Conditions",
        device: "E-C-I-S — 'Equals Cooperate In Support'",
        explanation:
          "**E**qual status, **C**ommon goals, **I**ntergroup cooperation, **S**upport from authorities/institutions.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        emoji: "📱",
        title: "Algorithmic Dating Apps & Paradox of Choice",
        detail:
          "Swipe-based apps remove Festinger's geographic proximity barrier and amplify initial physical-attractiveness screening (Walster), while inflating perceived Quality of Alternatives (Rusbult) — potentially lowering commitment.",
      },
      {
        emoji: "💬",
        title: "Couples Therapy Using Gottman's Antidotes",
        detail:
          "Evidence-based couples workshops teach 'gentle start-ups' (replacing criticism), building a culture of appreciation (countering contempt), taking responsibility (countering defensiveness), and 20-minute physiological self-soothing breaks (countering stonewalling).",
      },
      {
        emoji: "🚇",
        title: "Active Bystander Training in Universities & Public Transit",
        detail:
          "Pointing directly at one witness ('You in the blue jacket — please call 995!') breaks both pluralistic ignorance and diffusion of responsibility simultaneously by removing ambiguity and assigning `1/1` personal responsibility.",
      },
      {
        emoji: "🏫",
        title: "Jigsaw Classrooms in Multicultural Schools",
        detail:
          "Teachers worldwide use Aronson's Jigsaw design in diverse classrooms — assigning each student one indispensable subtopic — to transform peer competition into equal-status interdependence.",
      },
      {
        emoji: "⚖️",
        title: "Blind Orchestral Auditions & Reducing Implicit Bias",
        detail:
          "Because implicit bias training alone rarely produces lasting behavioural change (Oswald et al., 2013), institutions redesign measurement structures — such as behind-the-screen orchestral auditions and anonymized CV screening — to block stereotyping at the decision point.",
      },
    ],
    videos: [
      {
        title: "IB Psychology: Human Relationships — Attraction, Maintenance & Dissolution Overview",
        channel: "YouTube Search (IB Psychology)",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+Human+Relationships+attraction+Gottman+Rusbult",
      },
      {
        title: "Latané & Darley Bystander Effect, Piliavin Subway Study & Batson Empathy-Altruism",
        channel: "YouTube Search (Social Psychology)",
        url: "https://www.youtube.com/results?search_query=Latane+Darley+bystander+effect+Piliavin+Batson+empathy+altruism+psychology",
      },
      {
        title: "Sherif Robbers Cave, Illusory Correlation & Allport Contact Hypothesis",
        channel: "YouTube Search (Intergroup Conflict)",
        url: "https://www.youtube.com/results?search_query=Sherif+Robbers+Cave+Allport+Contact+Hypothesis+Jigsaw+Classroom+psychology",
      },
      {
        title: "Stereotype Threat (Steele & Aronson) & Implicit Bias IAT Critiques",
        channel: "YouTube Search (Cognitive & Social Bias)",
        url: "https://www.youtube.com/results?search_query=Steele+Aronson+stereotype+threat+Implicit+Association+Test+critique",
      },
    ],
    formulas: [
      {
        name: "Hamilton's Rule (Kin Selection)",
        formula: "{{rB > C}}",
        note: "Altruism is evolutionarily favoured when relatedness × recipient benefit exceeds actor cost.",
        level: "SL",
      },
      {
        name: "Multi-Relative Inclusive Fitness Sum",
        formula: "{{r_1 B_1 + r_2 B_2 + ... > C}}",
        note: "Sum indirect fitness gains across multiple helped kin before comparing against cost C.",
        level: "SL",
      },
      {
        name: "Coefficients of Genetic Relatedness (r)",
        formula: "{{r = 1}} (MZ twin), {{0.5}} (full sib/parent), {{0.25}} (half-sib/GP/aunt), {{0.125}} (1st cousin)",
        note: "Exact diploid relatedness by recent descent used in IB kin-selection questions.",
        level: "SL",
      },
      {
        name: "Gottman Conflict Stability Ratio",
        formula: "{{P / N >= 5}}",
        note: "Stable couples sustain at least 5 positive interactions per 1 negative interaction during conflict.",
        level: "SL",
      },
      {
        name: "Rusbult's Investment Model of Commitment",
        formula: "{{C = S - A + I}}",
        note: "Commitment increases with Satisfaction (S) and Investment (I), and decreases with Quality of Alternatives (A).",
        level: "SL",
      },
      {
        name: "Diffusion of Responsibility Share",
        formula: "{{R = 1 / N}}",
        note: "As the number of passive bystanders N grows, each individual's perceived share of responsibility shrinks.",
        level: "SL",
      },
      {
        name: "Relative Percentage Drop in Helping Rate",
        formula: "{{((H_1 - H_2) / H_1) * 100}}",
        note: "Quantifies bystander decline (e.g. Darley & Latané: 85% to 31% is a 54 percentage-point or 63.5% relative drop).",
        level: "SL",
      },
      {
        name: "Illusory Correlation Proportion Parity",
        formula: "{{n_A / N_A = n_B / N_B}}",
        note: "In Hamilton & Gifford (1976), majority Group A (8/26) and minority Group B (4/13) had identical 30.8% negative proportions.",
        level: "SL",
      },
      {
        name: "Pettigrew & Tropp (2006) Contact Meta-Analysis Effect",
        formula: "{{r = -0.21}}",
        note: "Across 515 studies (>250,000 participants), higher intergroup contact correlates reliably with lower prejudice.",
        level: "HL",
      },
      {
        name: "IAT Reaction-Time Latency Difference (D-Score Logic)",
        formula: "{{D = (M_(incomp) - M_(comp)) / SD_(pooled)}}",
        note: "Standardized latency gap between stereotype-incompatible and stereotype-compatible sorting blocks (HL Measurement).",
        level: "HL",
      },
    ],
  },
};
