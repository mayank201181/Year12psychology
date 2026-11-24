import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "7-hl-extensions",
  title: "Topic 7: HL Extensions — Culture, Motivation & Technology",
  strand: "HL Extensions & Paper 3",
  icon: "🌐",
  level: "HL",
  summary:
    "HL-only FA2027 extensions examining how Culture, Motivation, and Technology reshape biological, cognitive, and sociocultural psychology through the six Core Concepts.",
  intro:
    "Higher Level IB Psychology (First Assessment May 2027) extends the core curriculum through three contemporary lenses: **Culture**, **Motivation**, and **Technology**. Rather than isolated option chapters, these extensions ask you to trace how cultural worlds sculpt neural processing and cognition, how mesolimbic reward circuitry interacts with basic psychological needs and social goals, and how smartphones, social media, and AI reorganize memory, attention, and ethical **Responsibility**. Mastering all three — and weaving them together through **Bias**, **Causality**, **Change**, **Measurement**, **Perspective**, and **Responsibility** — is the key to top-band HL Paper 1 and Paper 3 performance.",
  guide: [
    {
      id: "hl-culture-emic-etic",
      heading: "HL Extension 1: Culture, Emic vs Etic Lenses & Globalization",
      level: "HL",
      discovery: {
        problem:
          "In a landmark audit of six leading psychology journals, Henrich, Heine, and Norenzayan (2010) found that **96%** of research participants came from Western, Educated, Industrialized, Rich, and Democratic (WEIRD) societies — even though those societies make up only **12%** of the global population. When researchers tested the classic Müller-Lyer optical illusion (two equal lines with inward or outward arrowheads), US undergraduates showed a strong visual illusion, whereas San foragers in the Kalahari showed almost **zero** distortion. What does this gap reveal about assuming Western lab results represent universal human psychology?",
        idea:
          "Even basic perceptual processing is shaped by cultural ecology — growing up inside rectangular, 'carpentered' urban buildings trains visual heuristics that do not appear in circular, natural landscapes. Treating findings from a WEIRD sample as universal creates an **imposed etic**, blinding psychologists to cultural variation and inflating **Bias** in **Measurement**.",
      },
      body: `### Emic vs Etic Research Traditions

Cross-cultural psychology distinguishes two complementary ways of studying human behaviour:

- **Etic approach (outsider / universalist):** Searches for universal psychological laws across cultures using standardized instruments (e.g. applying the same questionnaire or neuroimaging protocol in multiple nations).
- **Emic approach (insider / culture-specific):** Studies behaviour from *within* a single cultural system using local concepts, language, and idioms (e.g. investigating indigenous concepts of distress such as *shenjing shuairuo* in China or *hikikomori* in Japan).

Berry (1969, 1989) sharpened this distinction to expose cultural **Bias**:
1. **Imposed etic:** Taking a theory or measurement tool created in one culture (typically WEIRD) and applying it directly elsewhere as if it were universal (e.g. scoring Japanese toddlers' clinginess in Ainsworth's Strange Situation as "insecure-resistant" without accounting for rare maternal separation).
2. **Derived etic:** Combining multiple **emic** studies from diverse cultures to identify genuinely shared patterns *only after* verifying cultural equivalence.

### WEIRD Sampling Bias & Cultural Neuroscience

Henrich et al. (2010) demonstrated that WEIRD participants are not merely unrepresentative — on tasks ranging from visual perception and spatial reasoning to fairness in the Ultimatum Game and analytic vs holistic categorization, they are often **statistical outliers** at the extreme edge of human diversity. Roughly **68%** of participants in top journals came from the United States alone, and a randomly chosen American undergraduate is over **4,000 times** more likely to be a psychology participant than a randomly chosen person from outside the West.

Crucially, culture is not just an external social backdrop — it physically reshapes the brain (**Change** via neuroplasticity):
- **Zhu et al. (2007)** used fMRI while Western and Chinese participants judged trait adjectives referring to *self*, *mother*, or a *public figure*. In Western participants, the **medial prefrontal cortex (mPFC)** activated strongly only for *self*; in Chinese participants, the mPFC activated comparably for **both self and mother**, reflecting an interdependent self-construal encoded at the neural level.
- **Chiao et al. (2009)** showed that cultural priming and endorsement of individualistic vs collectivistic values predicted mPFC responses to general vs contextual self-descriptions, anchoring **cultural neuroscience** across both the Biological and Sociocultural approaches.

### Cultural Dimensions & Avoiding the Ecological Fallacy

Hofstede's cultural dimensions — including **Individualism–Collectivism**, **Power Distance**, and **Uncertainty Avoidance** — offer useful macrosocial hypotheses, yet HL candidates must critique them rigorously:

- **Ecological fallacy:** Assuming that a nation-level average score applies to every individual citizen (e.g. assuming every student from Singapore is strictly collectivistic or high power-distance). Within-culture variance often exceeds between-culture variance!
- **Static essentialism:** Treating culture as a fixed label tied to nationality, ignoring socioeconomic status, urban–rural divides, migration, and generational **Change**.
- **Measurement validity:** Self-report Likert scales suffer from **reference-group effects** (Heine et al., 2002) — respondents evaluate themselves relative to peers in their own culture rather than an absolute standard.

### Globalization, Enculturation & Bicultural Frame-Switching

**Enculturation** is the lifelong process of acquiring one's heritage cultural norms, values, and schemas; **globalization** accelerates cross-border flows of media, education, and migration, producing **bicultural** and multicultural identities (Arnett, 2002). Rather than blending into a single static average, bicultural individuals possess dual cultural knowledge networks activated dynamically by situational cues — **bicultural frame-switching**:

- **Hong et al. (2000)** exposed Chinese-American biculturals in Hong Kong and California to either Chinese cultural icons (Great Wall, dragon) or American icons (Capitol, Superman), then showed an ambiguous animation of one fish swimming ahead of a school. Participants primed with **American icons** made more **internal/dispositional** attributions ("the fish is leading"), whereas those primed with **Chinese icons** made more **external/situational** attributions ("the fish is being chased"). This experimental design provides strong evidence of **Causality** showing culture operates as a dynamic cognitive schema rather than a rigid trait.`,
      diagram: `<svg viewBox="0 0 640 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WEIRD sampling skew comparing global population share to psychology participant share, alongside Berry's progression from Emic and Imposed Etic to Derived Etic"><rect x="0" y="0" width="640" height="285" rx="12" fill="#ffffff"/><text x="165" y="26" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">WEIRD Sampling Skew (Henrich et al., 2010)</text><text x="24" y="56" font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#5b5375">World Population</text><rect x="24" y="64" width="34" height="34" rx="4" fill="#7c3aed"/><rect x="60" y="64" width="246" height="34" rx="4" fill="#0d9488"/><text x="41" y="85" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">12%</text><text x="183" y="85" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#ffffff">88% Non-WEIRD Global Majority</text><text x="24" y="124" font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#5b5375">Top Psychology Journal Samples</text><rect x="24" y="132" width="270" height="34" rx="4" fill="#7c3aed"/><rect x="296" y="132" width="10" height="34" rx="3" fill="#0d9488"/><text x="159" y="153" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#ffffff">96% WEIRD (68% USA alone)</text><text x="298" y="182" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="end" fill="#0d9488">4% Non-WEIRD</text><rect x="24" y="198" width="282" height="68" rx="8" fill="#ede9fe" stroke="#c4b5fd"/><text x="165" y="218" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#5b21b6">Over-Representation Factor: 8.0×</text><text x="165" y="236" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#1c1630">96% ÷ 12% = 8× global population share</text><text x="165" y="254" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#5b5375">Threatens population &amp; construct validity</text><line x1="326" y1="20" x2="326" y2="268" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="4 4"/><text x="482" y="26" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">Emic vs Etic Research Lenses</text><rect x="346" y="46" width="272" height="60" rx="8" fill="#ffedd5" stroke="#fdba74"/><text x="358" y="65" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#9a3412">Imposed Etic (High Cultural Bias)</text><text x="358" y="82" font-family="system-ui,sans-serif" font-size="10.5" fill="#1c1630">Exports one culture's tool/theory directly</text><text x="358" y="96" font-family="system-ui,sans-serif" font-size="10.5" fill="#5b5375">as a false universal without local adaptation.</text><rect x="346" y="122" width="272" height="60" rx="8" fill="#e0f2fe" stroke="#7dd3fc"/><text x="358" y="141" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0369a1">Emic Inquiry (Insider Depth)</text><text x="358" y="158" font-family="system-ui,sans-serif" font-size="10.5" fill="#1c1630">Builds concepts from local language, norms,</text><text x="358" y="172" font-family="system-ui,sans-serif" font-size="10.5" fill="#5b5375">and lived meaning inside one cultural group.</text><rect x="346" y="198" width="272" height="68" rx="8" fill="#dcfce7" stroke="#86efac"/><text x="358" y="217" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#166534">Derived Etic (Validated Comparison)</text><text x="358" y="234" font-family="system-ui,sans-serif" font-size="10.5" fill="#1c1630">Synthesizes multiple emic datasets to verify</text><text x="358" y="248" font-family="system-ui,sans-serif" font-size="10.5" fill="#5b5375">shared universals AND culture-specific nuances.</text></svg>`,
      diagramCaption:
        "WEIRD populations are over-represented eightfold in top behavioural journals; moving from imposed etic to derived etic reduces cultural bias in measurement.",
      workedExamples: [
        {
          title: "Quantifying WEIRD Skew & Diagnosing Imposed Etic Bias",
          problem:
            "A cross-cultural meta-analysis on parenting styles pools 500 participants: 420 from North America and Western Europe (WEIRD) and 80 from East Asia and West Africa. (a) Calculate the percentage of WEIRD participants and their over-representation factor relative to the 12% global WEIRD population share. (b) Identify why applying a US-developed 'authoritative parenting' checklist unchanged across all sites risks **Measurement** bias.",
          steps: [
            "Compute WEIRD sample share: {{(420 / 500) * 100 = 84%}}.",
            "Divide sample share by global population share (12%): {{84 / 12 = 7}} — WEIRD participants are over-represented by a factor of **7.0×**.",
            "Link to Berry's framework: Exporting a US parenting rubric unchanged is an **imposed etic** — behaviours labelled 'controlling' in a US rubric may represent culturally valued warmth and guidance (*guan* / training) in Chinese families (Chao, 1994), undermining **construct validity**.",
          ],
          answer:
            "84% WEIRD participants (7.0× over-representation); exporting an unadapted Western parenting scale creates imposed-etic construct bias.",
          yourTurn: {
            question:
              "A journal issue publishes 8 studies totalling 600 participants, of whom 540 come from WEIRD nations. What **percentage** of participants are from **non-WEIRD** nations? Give a whole number.",
            answer: { type: "number", value: 10, display: "10%" },
            solution:
              "Non-WEIRD participants = 600 − 540 = 60. Percentage = {{(60 / 600) * 100 = 10%}}.",
          },
        },
        {
          title: "Avoiding the Ecological Fallacy with Hong et al. (2000)",
          problem:
            "A school counsellor reads that Country X scores 20/100 on Hofstede's Individualism index and predicts that a newly enrolled bilingual student from Country X will always prioritize group harmony over personal preference. Critique this assumption using HL cultural theory.",
          steps: [
            "Name the error: Applying a national-level mean score directly to one individual commits the **ecological fallacy**.",
            "Contrast static dimensions with dynamic cognition: **Hong et al. (2000)** showed that bicultural individuals hold multiple cultural schemas and engage in **bicultural frame-switching** depending on immediate contextual cues (Chinese vs American primes shifting situational vs dispositional attributions).",
            "Add **Responsibility** and **Change**: Globalization and international schooling reshape identity fluidly; stereotyping a student via a country score harms individualized support.",
          ],
          answer:
            "The counsellor commits the ecological fallacy by treating a country average as an individual trait, overlooking within-culture diversity and bicultural frame-switching (Hong et al., 2000).",
        },
      ],
      keyPoints: [
        "**Emic** inquiry prioritizes insider cultural meaning; **etic** inquiry seeks cross-cultural universals. Watch for **imposed etic** bias vs genuinely **derived etic** comparisons.",
        "**Henrich et al. (2010):** 96% of top-journal samples are WEIRD (12% of world population), limiting population and construct validity.",
        "**Cultural neuroscience (Zhu et al., 2007; Chiao et al., 2009):** Interdependent vs independent cultural norms shape mPFC neural activation during self-referential thinking.",
        "**Ecological fallacy:** National Hofstede scores describe group aggregates, never individual personality.",
        "**Hong et al. (2000):** Cultural priming triggers **bicultural frame-switching**, proving culture operates as an accessible, context-sensitive cognitive network.",
      ],
      whyItWorks:
        "Treating culture purely as an external label splits psychology into artificial silos. Seeing culture as an active ecological and cognitive system explains why neural circuits (mPFC), perceptual illusions (Müller-Lyer), and causal attributions (fish task) vary systematically without abandoning scientific explanation.",
      strategies: [
        "Whenever evaluating *any* classic study on an HL exam, test whether it used a WEIRD sample and specify *which* mechanism (construct validity, reference-group effect, or imposed etic) might differ cross-culturally.",
        "Pair a **biological** cultural study (Zhu et al., 2007) with a **cognitive-sociocultural** study (Hong et al., 2000) to demonstrate multi-approach integration in essays.",
        "Never write 'Culture X is collectivistic, therefore person Y did Z' — explicitly flag the **ecological fallacy** and within-group variation.",
      ],
      thinkDeeper:
        "If globalization increases exposure to Western digital media worldwide, will non-WEIRD populations gradually become psychologically more WEIRD, or will local cultures hybridize global media into new emic forms (glocalization)? How could a longitudinal cross-cultural design test this?",
    },

    {
      id: "hl-motivation-reward-sdt",
      heading: "HL Extension 2: Motivation — Biological, Cognitive & Sociocultural Drivers",
      level: "HL",
      discovery: {
        problem:
          "Lepper, Greene, and Nisbett (1973) observed nursery children who already loved drawing with coloured markers. They divided them into three groups: (1) **Expected Award** — promised a 'Good Player' certificate before drawing; (2) **Unexpected Award** — given the exact same certificate by surprise afterwards; (3) **No Award**. Two weeks later, when markers were placed out during free play with no rewards offered, which group spent the *least* time drawing?",
        idea:
          "The **Expected Award** group spent roughly **half as much time** drawing as either the No Award or Unexpected Award groups! Promising a tangible external reward shifted children's cognitive attribution from *'I draw because I enjoy it'* to *'I draw to earn a certificate'* — the **overjustification effect**.",
      },
      body: `### Neurobiology of Motivation: Prediction Error & Incentive Salience

Motivation begins biologically in the **mesolimbic dopamine pathway**, projecting from the **ventral tegmental area (VTA)** to the **nucleus accumbens (NAc)** and **prefrontal cortex (PFC)**. A common textbook myth calls dopamine the "pleasure chemical." Modern neuroscience distinguishes two sharper mechanisms:

- **Reward Prediction Error (RPE) — Schultz et al. (1997):** Recording midbrain dopamine neurons in primates, Schultz showed that dopamine does *not* simply fire for pleasure. Instead, it encodes the difference between actual and expected reward:
  - **Positive RPE (unexpected reward or reward-predicting cue):** Sharp burst of dopamine firing → drives associative learning and approach.
  - **Zero RPE (fully expected reward delivered):** Firing stays at baseline → routine predictable rewards lose motivational spark.
  - **Negative RPE (expected reward omitted):** Firing dips *below* baseline → signals disappointment and updates expectations.
- **Incentive Salience ('Wanting' vs 'Liking') — Berridge & Robinson (1998):** Mesolimbic dopamine powers **'wanting'** (motivational craving, cue-triggered pursuit), whereas separate opioid and endocannabinoid 'hedonic hotspots' mediate **'liking'** (sensory pleasure). Dopamine-depleted animals still display facial pleasure reactions when sugar is placed on their tongues ('liking' intact) yet make zero effort to seek it ('wanting' abolished). This dissociation explains why compulsive gaming, gambling, or social-media checking persists long after enjoyment fades!

### Self-Determination Theory (SDT) & The Overjustification Effect

**Deci and Ryan's Self-Determination Theory (SDT)** provides the premier cognitive-organismic model of human motivation. SDT argues that thriving intrinsic motivation and well-being require satisfying **three universal basic psychological needs**:

1. **Autonomy:** Experiencing choice, volition, and ownership over one's actions (not simply 'working alone'!).
2. **Competence:** Feeling effective, capable, and able to grow through optimal challenge and constructive feedback.
3. **Relatedness:** Feeling meaningfully connected, respected, and cared for by others.

SDT maps motivation along an **internalization continuum** rather than a crude intrinsic-vs-extrinsic binary:
- **Amotivation** (no intention) → **External regulation** (chasing rewards / avoiding punishment) → **Introjected regulation** (internal guilt, shame, or ego pride) → **Identified regulation** (personally valuing the outcome, e.g. studying biology to become a doctor) → **Integrated regulation** (fully aligned with identity) → **Intrinsic motivation** (pure curiosity and enjoyment).

Under **Cognitive Evaluation Theory** (a mini-theory within SDT), external rewards only undermine intrinsic motivation (**overjustification / crowding-out effect** — Deci, 1971; Lepper et al., 1973) when they are **expected, tangible, and perceived as controlling** (thwarting Autonomy). By contrast, unexpected praise or **informational feedback** that affirms mastery supports Competence and can *enhance* intrinsic drive.

### Achievement Goals, Mindset & Replication Nuance

**Dweck's Achievement Goal Theory** distinguishes **mastery goals** (focused on learning and self-improvement, linked to a **growth mindset** — believing ability is malleable) from **performance goals** (focused on proving ability or avoiding looking incapable, linked to a **fixed mindset**).
- **HL Critical Evaluation (Measurement & Causality):** While early classroom interventions reported striking grade gains, **Sisk et al.'s (2018)** rigorous meta-analysis across 273 studies (N > 365,000) found a very small average correlation between growth mindset and academic achievement (r ≈ 0.10) and tiny overall intervention effect sizes (d ≈ 0.08), though **meaningfully larger benefits emerged for academically at-risk and lower-SES students**. Over-promising mindset training as a cure-all risks individualizing structural poverty (**Responsibility**).

### Cultural Variation in Motivation: Autonomy vs Social Relatedness

Is individual personal choice universally the strongest trigger of intrinsic motivation?
- **Iyengar & Lepper (1999)** tested 7-to-9-year-old Anglo-American and Asian-American children solving anagrams under three conditions: **Personal Choice**, **Experimenter Choice**, or **Mother/Peer Choice**. Anglo-American children showed the highest intrinsic motivation and performance in the **Personal Choice** condition. Remarkably, Asian-American children showed the **highest** motivation and performance when the task was chosen by their **trusted mother or in-group peers**!
- **Yu & Yang (1994)** distinguish **Individual-Oriented Achievement Motivation (IOAM)** (self-selected standards and personal mastery, emphasized in individualistic contexts) from **Socially Oriented Achievement Motivation (SOAM)** (striving to meet expectations and honour significant in-groups such as family, prominent in Confucian-heritage contexts). Crucially, SDT theorists reply that Asian-American children *voluntarily endorsed* their mothers' choices — meaning **Autonomy** (volitional endorsement) and **Relatedness** worked *together* rather than contradicting one another!`,
      diagram: `<svg viewBox="0 0 640 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top panel showing mesolimbic dopamine reward prediction error bursts and dips; bottom panel showing Self-Determination Theory continuum from amotivation to intrinsic motivation supported by autonomy, competence, and relatedness"><rect x="0" y="0" width="640" height="295" rx="12" fill="#ffffff"/><text x="320" y="24" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">Biological Driver: Mesolimbic Dopamine Reward Prediction Error (Schultz et al., 1997)</text><rect x="24" y="36" width="184" height="82" rx="8" fill="#dcfce7" stroke="#86efac"/><text x="116" y="54" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#166534">Unexpected Reward (+RPE)</text><polyline points="40,94 74,94 86,66 98,94 110,64 122,94 134,68 146,94 192,94" fill="none" stroke="#15803d" stroke-width="2.2"/><text x="116" y="110" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Phasic VTA → NAc burst</text><rect x="228" y="36" width="184" height="82" rx="8" fill="#ede9fe" stroke="#c4b5fd"/><text x="320" y="54" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Expected Reward (0 RPE)</text><polyline points="244,94 268,94 278,70 288,94 396,94" fill="none" stroke="#7c3aed" stroke-width="2.2"/><text x="320" y="110" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Burst shifts to CUE; outcome flat</text><rect x="432" y="36" width="184" height="82" rx="8" fill="#ffedd5" stroke="#fdba74"/><text x="524" y="54" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#9a3412">Omitted Reward (−RPE)</text><polyline points="448,86 500,86 516,104 544,104 558,86 600,86" fill="none" stroke="#c2410c" stroke-width="2.2"/><text x="524" y="110" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Dip below baseline firing</text><line x1="24" y1="134" x2="616" y2="134" stroke="#e2dcf0" stroke-width="1.5"/><text x="320" y="156" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">Cognitive-Organismic Driver: Self-Determination Theory Continuum (Deci &amp; Ryan)</text><rect x="24" y="168" width="90" height="54" rx="6" fill="#f1eef9" stroke="#cbd5e1"/><text x="69" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#475569">Amotivation</text><text x="69" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#64748b">No drive</text><rect x="122" y="168" width="90" height="54" rx="6" fill="#ffedd5" stroke="#fdba74"/><text x="167" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#9a3412">External</text><text x="167" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#7c2d12">Rewards/fines</text><rect x="220" y="168" width="90" height="54" rx="6" fill="#fef3c7" stroke="#fcd34d"/><text x="265" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#92400e">Introjected</text><text x="265" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#78350f">Guilt / ego</text><rect x="318" y="168" width="90" height="54" rx="6" fill="#e0f2fe" stroke="#7dd3fc"/><text x="363" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">Identified</text><text x="363" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#075985">Valued goal</text><rect x="416" y="168" width="90" height="54" rx="6" fill="#ede9fe" stroke="#c4b5fd"/><text x="461" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Integrated</text><text x="461" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#4c1d95">Self-aligned</text><rect x="514" y="168" width="102" height="54" rx="6" fill="#dcfce7" stroke="#86efac"/><text x="565" y="191" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#166534">Intrinsic</text><text x="565" y="207" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#14532d">Pure enjoyment</text><rect x="76" y="236" width="150" height="36" rx="18" fill="#7c3aed"/><text x="151" y="258" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#ffffff">Autonomy (Volition)</text><rect x="245" y="236" width="150" height="36" rx="18" fill="#0d9488"/><text x="320" y="258" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#ffffff">Competence (Mastery)</text><rect x="414" y="236" width="150" height="36" rx="18" fill="#2563eb"/><text x="489" y="258" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#ffffff">Relatedness (Belonging)</text></svg>`,
      diagramCaption:
        "Dopamine prediction error tracks surprise and drives 'wanting', while SDT explains how satisfying Autonomy, Competence, and Relatedness shifts behaviour toward internalized and intrinsic motivation.",
      workedExamples: [
        {
          title: "Quantifying Overjustification & Diagnosing SDT Regulation",
          problem:
            "In a classroom replication of Lepper et al. (1973), Year 7 pupils who enjoyed reading averaged 40 minutes per week of voluntary reading at baseline. After a month of mandatory 'cash-per-book' vouchers, voluntary reading (once vouchers stopped) dropped to 26 minutes per week. (a) Calculate the percentage drop in voluntary reading time. (b) Explain the drop using SDT.",
          steps: [
            "Calculate the decrease: {{40 - 26 = 14}} minutes.",
            "Divide by the baseline (40 min) and multiply by 100: {{(14 / 40) * 100 = 35%}} decline.",
            "Apply SDT: Expected, tangible vouchers operated as **controlling external regulation**, thwarting **Autonomy** and crowding out intrinsic enjoyment (**overjustification effect**).",
          ],
          answer:
            "35% decrease in voluntary reading, illustrating the overjustification effect when controlling external rewards undermine perceived Autonomy.",
          yourTurn: {
            question:
              "In a similar motivation study, free-choice puzzle time fell from 50 minutes to 35 minutes after expected cash rewards were removed. Calculate the **percentage decrease** in free-choice time.",
            answer: { type: "number", value: 30, display: "30%" },
            solution:
              "Decrease = 50 − 35 = 15 minutes. Percentage decrease = {{(15 / 50) * 100 = 30%}}.",
          },
        },
        {
          title: "Integrating Biological, Cognitive & Cultural Motivation",
          problem:
            "Explain why two IB students might work equally hard on their Extended Essay for very different motivational reasons, referencing one biological, one cognitive, and one cultural concept.",
          steps: [
            "**Biological:** Anticipating positive feedback or uncovering an unexpected insight triggers a **positive dopamine Reward Prediction Error (+RPE)** in the VTA–NAc circuit, sustaining incentive salience ('wanting') during research.",
            "**Cognitive (SDT):** Student A displays **identified/intrinsic regulation** because choosing her own research question satisfies **Autonomy** and builds **Competence**; Student B displays **introjected regulation** driven by avoiding guilt or protecting ego.",
            "**Sociocultural:** Drawing on **Iyengar & Lepper (1999)** and **Yu & Yang**, a student shaped by **Socially Oriented Achievement Motivation (SOAM)** may genuinely internalize a topic recommended by family or mentors, linking **Relatedness** to sustained effort rather than experiencing it as controlling.",
          ],
          answer:
            "Mesolimbic +RPE fuels pursuit, SDT distinguishes autonomous vs introjected regulation, and SOAM (Iyengar & Lepper, 1999) shows cultural norms shape whether trusted others' input boosts or lowers motivation.",
        },
      ],
      keyPoints: [
        "**Schultz et al. (1997):** Mesolimbic dopamine encodes **Reward Prediction Error** (+RPE unexpected, 0 expected, −RPE omitted), explaining why unpredictable variable-ratio rewards grip attention.",
        "**Berridge & Robinson (1998):** Dopamine drives **'wanting'** (incentive salience), dissociable from opioid-mediated **'liking'** (pleasure).",
        "**Deci & Ryan (SDT):** Intrinsic motivation thrives when **Autonomy**, **Competence**, and **Relatedness** are supported; controlling expected rewards trigger the **overjustification effect** (Lepper et al., 1973).",
        "**Dweck & Sisk et al. (2018):** Growth mindset correlates modestly with grades (`r ≈ 0.10`), with strongest benefits for at-risk/lower-SES learners — avoid overselling mindset without addressing structural resources.",
        "**Iyengar & Lepper (1999):** Cultural values mediate choice — Anglo-American children peaked with personal choice, while Asian-American children peaked when a trusted mother or peer chose (linking **SOAM** and Relatedness).",
      ],
      whyItWorks:
        "Bridging VTA–NAc dopamine firing with SDT's psychological needs and cultural achievement norms stops you from falling into biological reductionism (claiming 'dopamine explains everything') or cultural universalism (assuming Western personal-choice models fit every classroom).",
      strategies: [
        "Distinguish **Autonomy** (acting with volition and endorsement) from **Independence** (acting alone) — examiners love seeing this nuance when you evaluate Iyengar & Lepper (1999)!",
        "When discussing **overjustification**, specify all three conditions that maximize crowding-out: **expected**, **tangible**, and **controlling** rewards.",
        "Always note **Sisk et al. (2018)** alongside Dweck so your evaluation shows up-to-date empirical balance (**Measurement** & **Change**).",
      ],
      thinkDeeper:
        "Can an external reward ever *increase* intrinsic motivation? Compare an unexpected bonus praising specific strategy mastery (informational competence feedback) with a pre-announced cash-for-grades contract (controlling external regulation).",
    },

    {
      id: "hl-technology-cognition-social",
      heading: "HL Extension 3: Technology — Digital Cognition, Social Media & AI",
      level: "HL",
      discovery: {
        problem:
          "Ward et al. (2017) gave 548 undergraduates demanding working-memory and fluid-intelligence tests. Every phone was switched completely to silent (no buzz, no screen light). Participants were randomly assigned to leave their own phone either: (1) face-down on their **desk**, (2) in their **pocket/bag**, or (3) in **another room**. Nobody touched their phone. Did simply having the silent phone visible on the desk lower test scores?",
        idea:
          "Yes — participants with phones on their **desk** scored significantly lower than those whose phones were in **another room**, with the pocket group in between (**'Brain Drain' hypothesis**). Even when untouched, a high-salience smartphone consumes limited **central executive** working-memory resources simply to inhibit the urge to check it!",
      },
      body: `### Cognitive Offloading, Transactive Memory & Smartphone Salience

Digital devices act as external partners in human memory — a phenomenon known as **cognitive offloading** (using physical or digital tools to reduce internal cognitive demand):

- **Sparrow, Liu & Wegner (2011) — 'The Google Effect':** Across four experiments, participants who believed trivia statements they typed would be **saved** on a computer recalled *fewer* facts than those who believed the files would be **erased** — yet they remembered *which folder* stored the information better. Sparrow argued the internet functions as a **transactive memory system** (remembering *where* to retrieve facts rather than the facts themselves).
  - *HL Critical Evaluation (**Measurement** & **Change**):* In the **Camerer et al. (2018)** Social Sciences Replication Project, Experiment 1 (word-priming reaction times for computer terms after hard questions) did **not** cleanly replicate, reminding HL students that eye-catching early digital-cognition findings require multi-lab replication and careful construct validity.
- **Ward et al. (2017) — 'Brain Drain':** Merely placing one's silent smartphone on the desk reduced available working memory (OSpan) and fluid intelligence (Raven's Matrices) compared to keeping it in another room, with the steepest cost among participants reporting high smartphone dependence. Because participants were **randomly allocated**, Ward provides stronger causal evidence (**Causality**) than purely correlational phone surveys.

### Media Multitasking & Working-Memory Switching Costs

Heavy digital use frequently involves rapid switching between messages, videos, and homework.
- **Ophir, Nass & Wagner (2009)** compared **Heavy Media Multitaskers (HMMs)** and **Light Media Multitaskers (LMMs)** on cognitive-control tasks (filtering irrelevant red rectangles while tracking blue ones, and switching between letter and number rules). Contrary to the myth that 'digital natives' train superior multitasking brains, **HMMs performed significantly worse**: they were more distracted by irrelevant stimuli and suffered larger **task-switching reaction-time costs** (slower shifts between rules because old task sets lingered in working memory).
- *HL Causality Check:* Ophir et al. was **quasi-experimental / correlational** — did heavy multitasking *cause* weaker attentional filtering, or do people who already struggle with distractibility gravitate toward multiple media streams (**bidirectional causality / self-selection**)?

### Social Media, Adolescent Well-being & Effect-Size Nuance

Public headlines frequently claim smartphones caused an adolescent mental-health crisis (**Twenge et al., 2018**, pointing to post-2012 correlational rises in depressive symptoms and the **displacement hypothesis** — screen time crowding out sleep and in-person interaction). However, large-scale HL data demands examining **effect size**, not just statistical significance (p < 0.05 is trivial when N is huge!):

- **Orben & Przybylski (2019)** ran a **Specification Curve Analysis** across three huge datasets (N = 355,358 UK and US adolescents), testing hundreds of thousands of analytical models to curb researcher cherry-picking (**Bias**). Digital technology use explained only **~0.4%** of the variance in adolescent well-being — a negative association smaller than wearing glasses and roughly equal to **eating potatoes**, far dwarfed by bullying, sleep deprivation, or family conflict!
- **Active vs Passive Use (Verduyn et al., 2015):** Treating 'screen time' as a single undifferentiated number is a **Measurement** flaw. Experimental and experience-sampling studies show **passive scrolling** (consuming curated feeds without interacting) lowers affective well-being via **upward social comparison** and envy, whereas **active use** (direct messaging close friends) can sustain social connectedness.

### Online Disinhibition, Algorithmic Echo Chambers & AI Responsibility

Digital architectures also reshape social behaviour and raise urgent ethical **Responsibility** questions:
- **Online Disinhibition Effect (Suler, 2004):** Features such as **dissociative anonymity**, **invisibility** (missing facial/vocal cues), and **asynchronicity** lower social inhibitions online — fueling both **benign disinhibition** (empathic self-disclosure in peer support groups) and **toxic disinhibition** (cyberbullying, hostility).
- **Algorithmic Echo Chambers & Confirmation Bias:** Engagement-maximizing recommender algorithms learn which posts trigger high arousal (often moral outrage) and repeatedly serve identity-confirming content, amplifying **confirmation bias** and out-group polarization.
- **AI Ethical Responsibility:** Generative AI and algorithmic diagnostics trained predominantly on **WEIRD datasets** can reproduce demographic **Bias** (e.g. higher error rates on darker skin tones in facial analysis or culturally misaligned mental-health chatbots), threaten informed consent and data privacy, and encourage cognitive deskilling if users uncritically offload reasoning.`,
      diagram: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel comparing working memory scores across smartphone locations from Ward et al. 2017; right panel comparing variance explained in adolescent well-being from Orben and Przybylski 2019"><rect x="0" y="0" width="640" height="290" rx="12" fill="#ffffff"/><text x="160" y="25" font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1c1630">Ward et al. (2017): "Brain Drain" Effect</text><text x="160" y="42" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#5b5375">Available Working Memory by Silent Phone Location</text><line x1="48" y1="224" x2="288" y2="224" stroke="#5b5375" stroke-width="1.5"/><line x1="48" y1="62" x2="48" y2="224" stroke="#5b5375" stroke-width="1.5"/><rect x="70" y="138" width="54" height="86" rx="5" fill="#ea580c"/><text x="97" y="130" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Lowest</text><text x="97" y="242" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1c1630">On Desk</text><text x="97" y="256" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#5b5375">(High salience)</text><rect x="142" y="108" width="54" height="116" rx="5" fill="#f59e0b"/><text x="169" y="100" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#a16207">Mid</text><text x="169" y="242" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1c1630">Pocket/Bag</text><text x="169" y="256" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#5b5375">(Out of sight)</text><rect x="214" y="76" width="54" height="148" rx="5" fill="#15803d"/><text x="241" y="68" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">Highest</text><text x="241" y="242" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1c1630">Other Room</text><text x="241" y="256" font-family="system-ui,sans-serif" font-size="9.5" text-anchor="middle" fill="#5b5375">(No pull)</text><line x1="316" y1="20" x2="316" y2="270" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="4 4"/><text x="478" y="25" font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1c1630">Orben &amp; Przybylski (2019): Effect-Size Context</text><text x="478" y="42" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#5b5375">Approximate % Variance Explained in Teen Well-Being</text><text x="336" y="84" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#1c1630">Digital Tech Use</text><rect x="448" y="70" width="16" height="20" rx="4" fill="#7c3aed"/><text x="472" y="84" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#7c3aed">~0.4%</text><text x="336" y="124" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#1c1630">Eating Potatoes</text><rect x="448" y="110" width="16" height="20" rx="4" fill="#0d9488"/><text x="472" y="124" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0d9488">~0.4%</text><text x="336" y="164" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#1c1630">Bullying Exposure</text><rect x="448" y="150" width="112" height="20" rx="4" fill="#c2410c"/><text x="568" y="164" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#c2410c">~3.0%</text><text x="336" y="204" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#1c1630">Sleep &amp; Breakfast</text><rect x="448" y="190" width="150" height="20" rx="4" fill="#2563eb"/><text x="604" y="204" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#2563eb">~4.5%</text><rect x="336" y="228" width="280" height="44" rx="8" fill="#ede9fe" stroke="#c4b5fd"/><text x="476" y="246" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">HL Takeaway: Statistical vs Practical Significance</text><text x="476" y="262" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">How tech is used (active vs passive) &gt; raw screen hours</text></svg>`,
      diagramCaption:
        "Even silent smartphones on a desk drain working memory (Ward et al., 2017), yet raw screen-time hours explain tiny overall variance in adolescent well-being (Orben & Przybylski, 2019).",
      workedExamples: [
        {
          title: "Calculating Media-Multitasking Switching Cost & Evaluating Causality",
          problem:
            "In a cognitive-control lab modelled on Ophir et al. (2009), a student averages 500 ms per trial on single-task rule classification and 640 ms per trial when switching between two digital streams. (a) Calculate the percentage reaction-time switching cost. (b) State why comparing self-reported heavy vs light multitaskers cannot prove media multitasking *causes* attentional deficits.",
          steps: [
            "Find the latency increase: {{640 - 500 = 140}} ms.",
            "Divide by the single-task baseline (500 ms) and multiply by 100: {{(140 / 500) * 100 = 28%}} switching cost.",
            "Evaluate **Causality**: Heavy vs light media multitasking is a pre-existing participant variable (quasi-experiment / correlational), so **reverse causality** (more distractible people choose to multitask) or **third variables** (sleep loss, impulsivity) could explain the difference.",
          ],
          answer:
            "28% reaction-time switching cost; correlational grouping of HMMs vs LMMs cannot rule out reverse causality or third variables.",
          yourTurn: {
            question:
              "A participant responds in 400 ms during single-task trials and 496 ms during task-switching trials. Calculate the **percentage switching cost** in reaction time.",
            answer: { type: "number", value: 24, display: "24%" },
            solution:
              "Increase = 496 − 400 = 96 ms. Percentage cost = {{(96 / 400) * 100 = 24%}}.",
          },
        },
        {
          title: "Unpacking Effect Size vs Media Panic Headlines",
          problem:
            "A newspaper headline claims: 'Study of 300,000 teens proves smartphones ruin mental health (p < 0.001, r = −0.06)!' Evaluate this claim using **Measurement** and **Causality**.",
          steps: [
            "Square the correlation to calculate variance explained: {{R^2 = (-0.06)^2 = 0.0036}}, which equals **0.36%** of variance — mirroring **Orben & Przybylski (2019)** (~0.4%).",
            "Distinguish **statistical significance** (trivial to achieve `p < 0.001` at `N = 300,000`) from **practical significance** (99.64% of variance lies elsewhere!).",
            "Critique **Measurement** & **Causality**: Self-reported total hours conflate harmful **passive social comparison** with supportive **active messaging** (Verduyn et al., 2015), and cross-sectional correlation cannot establish direction of causality.",
          ],
          answer:
            "r = −0.06 explains only 0.36% of variance (tiny practical effect despite p < 0.001), conflates active vs passive use, and cannot prove causality.",
        },
      ],
      keyPoints: [
        "**Sparrow et al. (2011):** Cognitive offloading shifts encoding from facts to digital retrieval locations ('Google effect'), though **Camerer et al. (2018)** found mixed replication of Experiment 1.",
        "**Ward et al. (2017):** Silent smartphone presence on a desk reduces available working memory ('Brain Drain'), strongest in high-dependence users.",
        "**Ophir et al. (2009):** Heavy media multitaskers show *weaker* irrelevant-stimulus filtering and larger switching costs, though causal direction remains debated.",
        "**Orben & Przybylski (2019):** Specification Curve Analysis (`N > 355,000`) found digital tech explains only ~0.4% of teen well-being variance — active vs passive use (Verduyn et al., 2015) matters more than total hours.",
        "**Suler (2004) & AI Responsibility:** Anonymity/invisibility drive online disinhibition; engagement algorithms amplify confirmation bias, while WEIRD-trained AI poses bias and privacy risks.",
      ],
      whyItWorks:
        "Digital psychology is rife with moral panic on one side and tech-industry hype on the other. Anchoring your analysis in experimental mechanisms (Ward's working-memory drain), replication checks (Camerer), and effect-size quantification (Orben's 0.4%) transforms vague opinions into sharp scientific evaluation.",
      strategies: [
        "Always check whether a technology study measures **total hours** (weak construct validity) or **behavioural mode** (passive scrolling vs active messaging vs sleep displacement).",
        "Convert correlations `r` to percentage variance explained ({{R^2 * 100%}}) whenever evaluating large-N digital datasets in HL Paper 1 or Paper 3.",
        "Pair **Suler's online disinhibition** or **algorithmic bias** with the Core Concept of **Responsibility** when evaluating platform design and adolescent well-being.",
      ],
      thinkDeeper:
        "When a student uses an AI study tutor to summarize chapters instead of attempting recall themselves, is this adaptive cognitive offloading (freeing working memory for higher-order synthesis) or maladaptive bypassing of retrieval practice? Where does the boundary lie?",
    },

    {
      id: "hl-synthesizing-extensions",
      heading: "Synthesizing HL Extensions with the 6 Core Concepts",
      level: "HL",
      discovery: {
        problem:
          "A global language-learning app keeps teenagers returning daily using a 120-day 'streak flame', randomized bonus XP chests, urgent owl reminders at 11:30 PM, and class leaderboards. If you try to explain this behaviour using **only** biology, **only** cognition, or **only** culture, what crucial piece does each single approach miss?",
        idea:
          "Biology alone spots the **variable-ratio dopamine RPE** from mystery chests, yet misses *why* a public streak flame feels motivating; cognition spots **SDT controlling external regulation** and **attentional hijacking**, yet ignores cultural values; culture spots **social accountability** vs **individual leaderboard status**, yet omits neural craving. Only an **HL 3×3×6 synthesis** captures the whole system!",
      },
      body: `### The FA2027 HL 3 × 3 × 6 Architecture

Top-band HL essays and Paper 3 evaluations do not treat Culture, Motivation, and Technology as separate boxes. Instead, they show how the **3 HL Extensions** intersect across the **3 Core Approaches** (Biological, Cognitive, Sociocultural) and interrogate the evidence through the **6 Core Concepts**:

| HL Synthesis Case | Biological Mechanism | Cognitive Mechanism | Sociocultural Mechanism | Lead Core Concepts |
|---|---|---|---|---|
| **Gamified EdTech & Social Feeds** | VTA–NAc dopamine **+RPE** on variable-ratio chests/likes; 'wanting' > 'liking' | **SDT** external streak pressure risking **overjustification**; Ward attentional salience | Individualist leaderboard status (**IOAM**) vs peer-group streak duty (**SOAM**) | **Causality**, **Responsibility**, **Change** |
| **AI Mental-Health Chatbots Globally** | Stress-axis (HPA) symptom monitoring; neuroplastic habit loops | Cognitive offloading of reflection; trust calibration & heuristics | **WEIRD training-data bias** misreading emic idioms of distress | **Bias**, **Measurement**, **Responsibility** |
| **Remote / Hybrid Learning Across Cultures** | Circadian sleep displacement from late-night screens | Media multitasking switching costs (Ophir); mastery vs performance goals | High vs low **Power Distance** affecting online disinhibition & help-seeking | **Perspective**, **Measurement**, **Causality** |

### Deploying All 6 Core Concepts at Higher Level

Use this concept checklist to turn descriptive summaries into HL evaluative arguments:

1. **Bias:** Expose **WEIRD sampling bias** (Henrich et al.), **imposed-etic** tools, **researcher analytical flexibility** (addressed by Orben's Specification Curve Analysis), and **algorithmic training-data bias** in AI.
2. **Causality:** Distinguish **randomized experiments** (Ward et al., 2017; Hong et al., 2000; Lepper et al., 1973) from **correlational / quasi-experimental designs** (Ophir et al., 2009; Twenge et al., 2018), explicitly naming **bidirectional loops** (e.g. lonely teens scroll passively → upward social comparison worsens mood → more scrolling).
3. **Change:** Trace dynamic adaptation across scales — **neuroplasticity** (Zhu et al., 2007 cultural mPFC wiring), **developmental/lifespan shifts**, **scientific self-correction** (Camerer et al., 2018; Sisk et al., 2018), and rapid **technological obsolescence** (a 2011 Facebook study may not generalize to 2027 short-form AI feeds!).
4. **Measurement:** Interrogate operationalization — raw screen hours vs active/passive use, Likert **reference-group effects** across cultures, **statistical vs practical significance** (R² = 0.4%), and neural proxies (fMRI BOLD signal is an indirect correlate, not mind-reading).
5. **Perspective:** Triangulate **emic + etic** traditions AND **Biological + Cognitive + Sociocultural** explanations so reductionist claims (e.g. 'dopamine addiction' or 'Hofstede explains everyone') are balanced by competing levels of analysis.
6. **Responsibility:** Evaluate ethical duties of researchers, schools, and tech designers — protecting adolescent autonomy against manipulative **dark-pattern** variable-ratio feeds, guarding youth data privacy, avoiding **ecological-fallacy** stereotyping, and preventing mindset or AI interventions from masking systemic inequality.

### Exam Blueprint: From SL Description to HL Synthesis

In an HL Paper 1 extended response or Paper 3 source synthesis, build each analytical paragraph using the **M-E-C-S** cycle:
- **Mechanism:** State the precise biological, cognitive, or cultural process (e.g. controlling rewards thwarting Autonomy).
- **Evidence:** Anchor with named research, design, and key finding (e.g. Lepper et al., 1973 or Iyengar & Lepper, 1999).
- **Concept Critique:** Evaluate the evidence explicitly via 1–2 Core Concepts (e.g. **Causality** of random allocation vs **Bias** of US preschool sample).
- **Synthesis Link:** Bridge directly to a *second* HL Extension or Approach (e.g. showing how gamified apps automate Lepper's controlling rewards worldwide while encountering cultural variation in SOAM).`,
      diagram: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FA2027 HL Synthesis Matrix linking Culture, Motivation, and Technology through Biological, Cognitive, and Sociocultural approaches and the six Core Concepts"><rect x="0" y="0" width="640" height="300" rx="12" fill="#ffffff"/><text x="320" y="24" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">FA2027 HL Synthesis Architecture (3 Extensions × 3 Approaches × 6 Concepts)</text><rect x="28" y="40" width="180" height="54" rx="10" fill="#7c3aed"/><text x="118" y="63" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" text-anchor="middle" fill="#ffffff">Culture</text><text x="118" y="81" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#ede9fe">Emic/Etic · WEIRD · Frame-Switch</text><rect x="230" y="40" width="180" height="54" rx="10" fill="#0d9488"/><text x="320" y="63" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" text-anchor="middle" fill="#ffffff">Motivation</text><text x="320" y="81" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#ccfbf1">Dopamine RPE · SDT · SOAM</text><rect x="432" y="40" width="180" height="54" rx="10" fill="#2563eb"/><text x="522" y="63" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" text-anchor="middle" fill="#ffffff">Technology</text><text x="522" y="81" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#dbeafe">Offloading · Brain Drain · AI</text><line x1="118" y1="94" x2="118" y2="128" stroke="#94a3b8" stroke-width="1.8"/><line x1="118" y1="94" x2="320" y2="128" stroke="#cbd5e1" stroke-width="1.3"/><line x1="320" y1="94" x2="118" y2="128" stroke="#cbd5e1" stroke-width="1.3"/><line x1="320" y1="94" x2="320" y2="128" stroke="#94a3b8" stroke-width="1.8"/><line x1="320" y1="94" x2="522" y2="128" stroke="#cbd5e1" stroke-width="1.3"/><line x1="522" y1="94" x2="320" y2="128" stroke="#cbd5e1" stroke-width="1.3"/><line x1="522" y1="94" x2="522" y2="128" stroke="#94a3b8" stroke-width="1.8"/><rect x="28" y="130" width="180" height="54" rx="10" fill="#dcfce7" stroke="#86efac" stroke-width="1.5"/><text x="118" y="153" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#166534">Biological Approach</text><text x="118" y="171" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#14532d">mPFC · VTA–NAc · Sleep/HPA</text><rect x="230" y="130" width="180" height="54" rx="10" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.5"/><text x="320" y="153" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#92400e">Cognitive Approach</text><text x="320" y="171" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#78350f">Schemas · Working Memory · SDT</text><rect x="432" y="130" width="180" height="54" rx="10" fill="#ffedd5" stroke="#fdba74" stroke-width="1.5"/><text x="522" y="153" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#9a3412">Sociocultural Approach</text><text x="522" y="171" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#7c2d12">Norms · Disinhibition · Equity</text><rect x="28" y="206" width="584" height="74" rx="10" fill="#f1eef9" stroke="#c4b5fd" stroke-width="1.5"/><text x="320" y="226" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Evaluated Through the 6 FA2027 Core Concepts</text><rect x="42" y="238" width="84" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="84" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Bias</text><rect x="136" y="238" width="84" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="178" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Causality</text><rect x="230" y="238" width="84" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="272" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Change</text><rect x="324" y="238" width="90" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="369" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Measurement</text><rect x="424" y="238" width="84" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="466" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Perspective</text><rect x="518" y="238" width="82" height="28" rx="14" fill="#ffffff" stroke="#7c3aed"/><text x="559" y="256" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Responsibility</text></svg>`,
      diagramCaption:
        "Top-band HL synthesis connects Culture, Motivation, and Technology across all three approaches and anchors evaluation in the six FA2027 Core Concepts.",
      workedExamples: [
        {
          title: "Planning a Cross-Extension HL Synthesis Essay",
          problem:
            "Outline how you would plan an HL extended response to: *'Discuss how digital technology interacts with motivation across different cultural contexts.'*",
          steps: [
            "**Thesis (Perspective):** Digital platforms do not uniformly boost or harm motivation; their impact depends on how reward architecture engages dopamine/SDT mechanisms and interacts with local cultural values.",
            "**Body 1 — Tech × Biological/Cognitive Motivation:** Explain how gamified badges and variable-ratio notifications trigger **mesolimbic +RPE** (Schultz et al., 1997) and 'wanting' (Berridge & Robinson), yet risk **SDT overjustification** (Lepper et al., 1973) if experienced as controlling external regulation rather than informational Competence feedback.",
            "**Body 2 — Cultural Moderation:** Contrast **IOAM** (individual leaderboard competition) with **SOAM** (group streak goals / family-endorsed learning — **Iyengar & Lepper, 1999**), warning against the **ecological fallacy** and **WEIRD design bias** (Henrich et al., 2010).",
            "**Body 3 — Concept Evaluation (Causality, Measurement, Responsibility):** Note that longitudinal experimental data (Ward et al., 2017) beats raw screen-time correlations (**Orben & Przybylski, 2019** ~0.4% variance), and conclude with ethical **Responsibility** for humane, autonomy-supportive EdTech.",
          ],
          answer:
            "Synthesize dopamine RPE + SDT overjustification with cultural IOAM/SOAM moderation, evaluating evidence via WEIRD Bias, Causality, Measurement, and ethical Responsibility.",
          yourTurn: {
            question:
              "An AI mental-health chatbot trained solely on English-language therapy transcripts from US college students is deployed globally without local validation, misclassifying somatic expressions of distress in East Asian users. Name the single **FA2027 Core Concept** most directly illustrated by the skewed US training dataset.",
            answer: {
              type: "text",
              accept: ["Bias", "cultural bias", "WEIRD bias", "sampling bias"],
              display: "Bias",
            },
            solution:
              "Training an algorithm exclusively on WEIRD US college transcripts builds **Bias** (specifically WEIRD sampling / cultural training-data bias) directly into the system, which also triggers secondary **Measurement** and **Responsibility** concerns.",
          },
        },
        {
          title: "Applying Change & Responsibility to Rapidly Evolving Platforms",
          problem:
            "A school cites a 2011 study on desktop Facebook usage to justify banning collaborative classroom tablets in 2027. Critique this policy using **Change** and **Measurement**.",
          steps: [
            "**Change (Technological & Temporal Validity):** Platform affordances changed dramatically between 2011 desktop text feeds and 2027 algorithmic short-form video / collaborative learning tools, weakening temporal generalizability.",
            "**Measurement (Construct Validity):** Treating collaborative educational tablet use as equivalent to passive social-media scrolling conflates distinct behaviours (**Verduyn et al., 2015**).",
            "**Balanced Responsibility:** A nuanced policy targets high-distraction personal smartphones during focused study (**Ward et al., 2017**) rather than blanket bans on purposeful cognitive tools.",
          ],
          answer:
            "2011 desktop Facebook findings lack temporal validity (Change) and conflate passive social scrolling with active educational collaboration (Measurement).",
        },
      ],
      keyPoints: [
        "Every HL Extension (Culture, Motivation, Technology) can be examined through **Biological**, **Cognitive**, and **Sociocultural** mechanisms simultaneously.",
        "Explicitly naming and unpacking **2–3 Core Concepts** (Bias, Causality, Change, Measurement, Perspective, Responsibility) separates top-band HL synthesis from descriptive summaries.",
        "Cross-extension realism: Modern issues like gamified apps, AI chatbots, and remote work sit at the **intersection** of all three HL Extensions.",
        "Always check **temporal validity (Change)** in technology studies and **replication status** (Camerer et al., 2018; Sisk et al., 2018).",
        "Use the **M-E-C-S** paragraph structure: Mechanism → Evidence → Concept Critique → Synthesis Link.",
      ],
      whyItWorks:
        "IB FA2027 HL examiners reward conceptual transfer over rote memorization of isolated studies. Organizing your revision around the 3×3×6 matrix lets a lean toolkit of ~12 core HL studies flex seamlessly across unseen Paper 1 prompts and Paper 3 source packs.",
      strategies: [
        "Before writing any HL essay, spend 90 seconds sketching a mini 3-column grid: **Extension Link | Study & Design | 2 Core Concepts**.",
        "Avoid 'concept name-dropping': never just write 'this shows Bias' — state *which* bias (e.g. imposed-etic measurement bias) and *how* it alters conclusions.",
        "In Paper 3 source packs, listen for hidden links to Culture (sample location/norms), Motivation (incentives/engagement), and Technology (digital measurement/AI tools).",
      ],
      thinkDeeper:
        "Which of the six FA2027 Core Concepts is hardest to satisfy simultaneously with another? For instance, when does maximizing strict experimental **Causality** in a lab weaken cultural **Perspective** or ecological **Measurement**?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Emic vs Etic approach",
        back: "**Emic** studies behaviour from *inside* one culture using local concepts and meanings; **etic** seeks universal laws across cultures using standardized measures.",
        level: "HL",
      },
      {
        front: "Imposed etic vs Derived etic (Berry)",
        back: "**Imposed etic** exports one culture's tool/theory unchanged as a false universal; **derived etic** builds cross-cultural comparisons only *after* integrating multiple local emic studies.",
        level: "HL",
      },
      {
        front: "WEIRD sampling bias (Henrich et al., 2010)",
        back: "**Western, Educated, Industrialized, Rich, Democratic** nations represent ~12% of the world population yet ~96% of participants in top psychology journals (68% USA), threatening population and construct validity.",
        level: "HL",
      },
      {
        front: "Cultural neuroscience: Zhu et al. (2007)",
        back: "fMRI showed Western participants activated the **mPFC** uniquely for *self*, whereas Chinese participants activated the mPFC for **both self and mother**, showing culture shapes neural representation.",
        level: "HL",
      },
      {
        front: "Ecological fallacy",
        back: "The logical error of assuming a group- or nation-level average (e.g. a country's Hofstede score) describes every individual within that group, ignoring within-culture diversity.",
        level: "HL",
      },
      {
        front: "Bicultural frame-switching (Hong et al., 2000)",
        back: "Chinese-American biculturals primed with American icons made more **dispositional** attributions on the fish task, while Chinese icons triggered more **situational** attributions — proving culture works as a dynamic schema.",
        level: "HL",
      },
      {
        front: "Reward Prediction Error (Schultz et al., 1997)",
        back: "Mesolimbic dopamine neurons (VTA → NAc) burst for **unexpected** rewards (+RPE), stay flat for **expected** rewards (0 RPE, shifting to the cue), and dip below baseline when expected rewards are **omitted** (−RPE).",
        level: "HL",
      },
      {
        front: "'Wanting' vs 'Liking' (Berridge & Robinson, 1998)",
        back: "Dopamine mediates **incentive salience ('wanting' / craving)**, whereas opioid/endocannabinoid hotspots mediate hedonic **'liking' (pleasure)** — explaining compulsive scrolling or addiction without enjoyment.",
        level: "HL",
      },
      {
        front: "Self-Determination Theory's 3 Basic Psychological Needs (Deci & Ryan)",
        back: "**Autonomy** (volition/choice), **Competence** (mastery/effectiveness), and **Relatedness** (meaningful belonging) — supporting all three fosters internalized and intrinsic motivation.",
        level: "HL",
      },
      {
        front: "Overjustification effect (Lepper, Greene & Nisbett, 1973)",
        back: "Promising an **expected, tangible, controlling** reward (Good Player certificate) for an already enjoyable activity halved children's later free-choice drawing time by crowding out intrinsic motivation.",
        level: "HL",
      },
      {
        front: "Growth mindset evaluation (Sisk et al., 2018)",
        back: "Meta-analysis (`N > 365,000`) found a small average correlation (`r ≈ 0.10`) between growth mindset and grades, with meaningfully larger gains among **academically at-risk and lower-SES** students.",
        level: "HL",
      },
      {
        front: "Cultural moderation of choice: Iyengar & Lepper (1999)",
        back: "Anglo-American children showed highest intrinsic motivation with **personal choice**, whereas Asian-American children peaked when choices were made by a **trusted mother or in-group peers** (aligning with SOAM).",
        level: "HL",
      },
      {
        front: "Cognitive offloading & the Google effect (Sparrow et al., 2011)",
        back: "Expecting information to remain saved digitally leads people to encode **retrieval locations** rather than raw facts (transactive memory); **Camerer et al. (2018)** found mixed replication of Study 1.",
        level: "HL",
      },
      {
        front: "'Brain Drain' hypothesis (Ward et al., 2017)",
        back: "Simply placing one's silent smartphone face-down on the desk lowered working-memory and fluid-intelligence scores compared to leaving it in another room, due to ongoing inhibitory load.",
        level: "HL",
      },
      {
        front: "Media multitasking cost (Ophir, Nass & Wagner, 2009)",
        back: "Heavy Media Multitaskers performed **worse** than Light Media Multitaskers at filtering irrelevant distractors and switching between task rules (larger switching costs), though causal direction is correlational.",
        level: "HL",
      },
      {
        front: "Orben & Przybylski (2019) vs Verduyn et al. (2015)",
        back: "Specification Curve Analysis (`N > 355,000`) found total digital tech hours explain only **~0.4%** of teen well-being variance (~potatoes); **passive scrolling** harms mood via upward social comparison more than active messaging.",
        level: "HL",
      },
      {
        front: "Online Disinhibition Effect (Suler, 2004)",
        back: "Anonymity, invisibility, and asynchronicity lower social restraints online, producing either **benign disinhibition** (supportive openness) or **toxic disinhibition** (hostility/cyberbullying).",
        level: "HL",
      },
      {
        front: "IOAM vs SOAM (Yu & Yang)",
        back: "**Individual-Oriented Achievement Motivation** targets personal mastery and self-set goals; **Socially Oriented Achievement Motivation** strives to fulfil expectations and honour significant in-groups.",
        level: "HL",
      },
    ],
    mustKnow: [
      "WEIRD samples make up **96%** of top behavioural-science participants despite representing only **12%** of humanity (Henrich et al., 2010) — an **8×** over-representation.",
      "Always distinguish **imposed etic** (uncritically exporting a Western measure) from **derived etic** (building cross-cultural comparisons after emic validation).",
      "Culture shapes biology: **Zhu et al. (2007)** found mPFC neural overlap between self and mother in Chinese but not Western participants.",
      "Dopamine signals **Reward Prediction Error** (Schultz et al., 1997) and motivational **'wanting'** (Berridge & Robinson, 1998) — NOT simple hedonic pleasure.",
      "Self-Determination Theory requires **Autonomy**, **Competence**, and **Relatedness**; **expected, tangible, controlling** rewards trigger the **overjustification effect** (Lepper et al., 1973).",
      "Cultural norms moderate autonomy: **Iyengar & Lepper (1999)** showed Asian-American children thrived when a trusted mother/peer chose, reflecting **SOAM** and voluntary endorsement.",
      "Silent smartphones on a desk drain working memory (**Ward et al., 2017**), and heavy media multitaskers show poorer distractor filtering (**Ophir et al., 2009**).",
      "Never confuse statistical significance (`p < 0.001` at huge `N`) with practical importance: **Orben & Przybylski (2019)** found digital screen time explains only **~0.4%** of adolescent well-being variance.",
      "How tech is used (**passive upward social comparison** vs **active connection** — Verduyn et al., 2015) matters far more than undifferentiated screen-time totals.",
      "Top-band HL responses explicitly connect **Culture, Motivation, and Technology** across **Biological, Cognitive, and Sociocultural** mechanisms via the **6 Core Concepts**.",
    ],
    misconceptions: [
      {
        wrong: "Dopamine is the 'pleasure hormone' released whenever something feels nice.",
        right: "Dopamine is a **neurotransmitter** signalling **Reward Prediction Error** (Schultz et al., 1997) and incentive salience **'wanting'** (Berridge & Robinson, 1998); hedonic **'liking'** relies primarily on opioid/endocannabinoid systems.",
        level: "HL",
      },
      {
        wrong: "If a country scores low on Hofstede's Individualism index, every person from that country is collectivistic.",
        right: "Assuming a national average describes every individual commits the **ecological fallacy**; within-culture variation is large and biculturals dynamically switch frames (**Hong et al., 2000**).",
        level: "HL",
      },
      {
        wrong: "All extrinsic rewards destroy intrinsic motivation.",
        right: "Only **expected, tangible, controlling** rewards reliably cause the **overjustification effect** (Lepper et al., 1973). Unexpected bonuses or **informational feedback** affirming Competence can sustain or boost intrinsic drive.",
        level: "HL",
      },
      {
        wrong: "In Self-Determination Theory, Autonomy means working completely independently without others.",
        right: "**Autonomy** means acting with **volition and personal endorsement**, which can co-occur with deep **Relatedness** — as seen when Asian-American children endorsed choices made by a trusted mother (**Iyengar & Lepper, 1999**).",
        level: "HL",
      },
      {
        wrong: "Heavy media multitaskers ('digital natives') have trained their brains to switch tasks faster than light multitaskers.",
        right: "**Ophir et al. (2009)** found the opposite: Heavy Media Multitaskers performed *worse* at filtering irrelevant distractors and suffered *greater* task-switching costs.",
        level: "HL",
      },
      {
        wrong: "A correlation of r = −0.06 with p < 0.001 proves smartphones cause a massive drop in teenage mental health.",
        right: "`p < 0.001` reflects huge sample size, not large impact: `r² = 0.0036` means only **0.36%** variance explained (**Orben & Przybylski, 2019**), and cross-sectional correlation cannot prove **Causality**.",
        level: "HL",
      },
      {
        wrong: "Etic research is automatically biased, while emic research is always scientifically superior.",
        right: "Both have trade-offs: **imposed etic** introduces cultural bias, whereas pure **emic** work lacks cross-cultural comparability. Berry's **derived etic** integrates emic insights to achieve valid comparison.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing 'WEIRD means strange' instead of unpacking **Western, Educated, Industrialized, Rich, Democratic** and explaining *why* it harms population and construct validity.",
      "Describing **Culture, Motivation, or Technology** in isolation on an HL essay without linking across Biological, Cognitive, and Sociocultural mechanisms.",
      "Conflating **imposed etic** with **derived etic**, or failing to explain *how* an imported scale loses construct validity in another culture.",
      "Citing **Ophir et al. (2009)** or **Twenge et al. (2018)** as proof of *causation* instead of noting their correlational/quasi-experimental designs (**Causality**).",
      "Ignoring replication nuance when citing **Sparrow et al. (2011)** (mention **Camerer et al., 2018**) or **Dweck's mindset** (mention **Sisk et al., 2018**).",
      "Treating 'screen time' as a valid single construct rather than critiquing **Measurement** via **active vs passive use** (Verduyn et al., 2015).",
      "Forgetting to specify the **direction** of dopamine firing in **Reward Prediction Error** (burst on unexpected reward / cue; flat on fully predicted reward; dip on omitted reward).",
      "Dropping Core Concept buzzwords ('this relates to Bias and Responsibility') without explaining the exact mechanism or ethical consequence.",
    ],
    mnemonics: [
      {
        topic: "Self-Determination Theory's 3 Basic Needs",
        device: "CAR — Competence, Autonomy, Relatedness",
        explanation:
          "Intrinsic motivation drives smoothly like a **CAR** only when all three cylinders fire: **C**ompetence (mastery), **A**utonomy (volition), and **R**elatedness (belonging).",
        level: "HL",
      },
      {
        topic: "Henrich et al. (2010) Sampling Bias",
        device: "W-E-I-R-D — Western, Educated, Industrialized, Rich, Democratic",
        explanation:
          "Remember **12% vs 96% (8× skew)** — these five letters diagnose *who* is over-sampled in psychology's global database.",
        level: "HL",
      },
      {
        topic: "Berry's Cross-Cultural Research Progression",
        device: "I-E-D — Imposed Etic → Emic Depth → Derived Etic",
        explanation:
          "Spot an **I**mposed etic (unadapted export), build local **E**mic understanding, then synthesize a **D**erived etic comparison.",
        level: "HL",
      },
      {
        topic: "HL Paragraph Synthesis Cycle",
        device: "M-E-C-S — Mechanism, Evidence, Concept Critique, Synthesis",
        explanation:
          "Structure every HL extended-response paragraph around a **M**echanism, named **E**vidence, explicit **C**ore Concept critique, and cross-extension **S**ynthesis link.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Gamified Learning Streaks & Variable-Ratio Dopamine",
        emoji: "🦉",
        detail:
          "Language apps combine unpredictable XP chests (positive dopamine **RPE**), streak-loss warnings (**negative RPE / introjected guilt**), and friend quests (**Relatedness**). Designers face an ethical **Responsibility** balancing engagement against SDT **overjustification**.",
      },
      {
        title: "School Phone-Free Pouches & Ward's 'Brain Drain'",
        emoji: "📵",
        detail:
          "Schools in Singapore, the UK, and Australia placing student phones in lockers or lockable pouches during lessons directly apply **Ward et al. (2017)**: moving a silent phone from desk to another space frees working-memory capacity for deep learning.",
      },
      {
        title: "AI Mental-Health Chatbots Across Non-WEIRD Cultures",
        emoji: "🤖",
        detail:
          "Therapy chatbots trained mostly on Western English-speaking text risk **imposed-etic algorithmic bias**, overlooking somatic expressions of distress or family-centred coping norms common across East and South Asian communities.",
      },
      {
        title: "Bicultural Switching in International Schools",
        emoji: "🌏",
        detail:
          "Multilingual IB students in hubs like Singapore routinely engage in **bicultural frame-switching** (Hong et al., 2000), shifting smoothly between individualistic debate norms in class and interdependent family norms at home.",
      },
      {
        title: "Teen Social-Media Policy Beyond Moral Panic",
        emoji: "📊",
        detail:
          "Relying on **Orben & Przybylski (2019)** (~0.4% variance for raw hours) alongside **Verduyn et al. (2015)** pushes policymakers away from simplistic screen-time panic toward regulating **algorithmic feeds**, cyberbullying, and late-night sleep displacement.",
      },
    ],
    videos: [
      {
        title: "The WEIRDest People in the World — Joseph Henrich & Cross-Cultural Psychology",
        channel: "YouTube Search · IB HL Culture",
        url: "https://www.youtube.com/results?search_query=Joseph+Henrich+WEIRD+psychology+cross+cultural+emic+etic",
      },
      {
        title: "Self-Determination Theory (Deci & Ryan) & Intrinsic Motivation Explained",
        channel: "YouTube Search · IB HL Motivation",
        url: "https://www.youtube.com/results?search_query=Self+Determination+Theory+Deci+Ryan+overjustification+effect",
      },
      {
        title: "Dopamine Reward Prediction Error (Schultz) vs Wanting and Liking (Berridge)",
        channel: "YouTube Search · Behavioral Neuroscience",
        url: "https://www.youtube.com/results?search_query=dopamine+reward+prediction+error+Schultz+wanting+vs+liking+Berridge",
      },
      {
        title: "Amy Orben: Teens, Social Media & Specification Curve Analysis (Effect Size)",
        channel: "YouTube Search · Digital Cognition & Well-being",
        url: "https://www.youtube.com/results?search_query=Amy+Orben+social+media+adolescent+wellbeing+specification+curve",
      },
    ],
    formulas: [
      {
        name: "WEIRD Sample Share (%)",
        formula: "{{(n_WEIRD / N_total) * 100%}}",
        note: "Quantifies WEIRD sampling bias in a study or meta-analysis (Henrich et al. benchmark: 96% in top journals vs 12% of world population).",
        level: "HL",
      },
      {
        name: "WEIRD Over-Representation Factor",
        formula: "{{WEIRD% / 12%}}",
        note: "Compares a study's WEIRD participant percentage against WEIRD societies' ~12% share of humanity (96% / 12% = 8.0×).",
        level: "HL",
      },
      {
        name: "Reward Prediction Error (RPE)",
        formula: "{{RPE = R_actual - R_expected}}",
        note: "Positive RPE triggers a VTA → NAc dopamine burst; zero RPE stays flat; negative RPE (omitted reward) dips below baseline.",
        level: "HL",
      },
      {
        name: "Overjustification Engagement Drop (%)",
        formula: "{{((T_baseline - T_post) / T_baseline) * 100%}}",
        note: "Measures percentage drop in voluntary free-choice engagement after controlling expected external rewards are removed (Lepper et al., 1973).",
        level: "HL",
      },
      {
        name: "Task-Switching RT Cost (%)",
        formula: "{{((RT_switch - RT_single) / RT_single) * 100%}}",
        note: "Quantifies percentage latency penalty when switching rules or multitasking vs single-task baseline (Ophir et al., 2009).",
        level: "HL",
      },
      {
        name: "Brain-Drain Working-Memory Loss (%)",
        formula: "{{((WM_otherRoom - WM_desk) / WM_otherRoom) * 100%}}",
        note: "Percentage drop in available working-memory score when a silent smartphone sits on the desk vs another room (Ward et al., 2017).",
        level: "HL",
      },
      {
        name: "Variance Explained from Correlation (R²)",
        formula: "{{R^2 = r^2 * 100%}}",
        note: "Converts a correlation coefficient into practical % variance explained (e.g. r = −0.063 → ~0.4% in Orben & Przybylski, 2019).",
        level: "HL",
      },
      {
        name: "SDT Basic Psychological Needs Trio",
        formula: "Autonomy + Competence + Relatedness → Internalized Motivation",
        note: "Deci & Ryan's three universal psychological needs supporting movement along the continuum toward intrinsic motivation.",
        level: "HL",
      },
      {
        name: "Berry's Cross-Cultural Validity Sequence",
        formula: "Imposed Etic (Biased) → Emic (Local) → Derived Etic (Valid)",
        note: "Framework for diagnosing cultural bias and constructing culturally equivalent cross-cultural measurements.",
        level: "HL",
      },
      {
        name: "FA2027 HL Synthesis Grid",
        formula: "3 HL Extensions × 3 Core Approaches × 6 Core Concepts",
        note: "Integrate Culture, Motivation & Technology across Biological, Cognitive & Sociocultural mechanisms evaluated via Bias, Causality, Change, Measurement, Perspective & Responsibility.",
        level: "HL",
      },
    ],
  },
};
