import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "1-concepts-methodology",
  title: "Topic 1: The 6 Core Concepts, Research Methods & Class Practicals",
  strand: "Concepts & Core Foundations",
  icon: "🧭",
  level: "SL",
  summary:
    "Master the six NEW FA2027 IB Psychology Core Concepts (Bias, Causality, Change, Measurement, Perspective, Responsibility), the four compulsory Class Practicals (Experiments, Surveys/Questionnaires, Interviews, Observations), ethical safeguards, and Paper 2 unseen-study critique.",
  intro:
    "Psychology is not a collection of trivia about the mind — it is an evidence-driven discipline where *how* we gather and interpret data determines what we can legitimately claim. Under the NEW First Assessment 2027 IB Diploma Psychology syllabus, every exam paper and your Research Proposal IA (a rigorous hypothetical design with **no data collection**) is organised around **six Core Concepts** and **four compulsory Class Practical methods**. Learn to think like a methodological detective: before accepting any headline or study finding, interrogate its Bias, Causality, Change, Measurement, Perspective, and Responsibility.",
  guide: [
    // =========================================================================
    // SECTION 1: SIX CORE CONCEPTS
    // =========================================================================
    {
      id: "six-core-concepts",
      heading: "The 6 FA2027 Core Concepts in Psychological Inquiry",
      level: "SL",
      discovery: {
        problem:
          "A viral news post declares: *\"Two espressos a day raise IB exam scores by 18%!\"* You click the link and discover the study was an anonymous online survey of 45 psychology undergraduates at one London university who self-reported both their daily coffee intake and last semester's grades. Before reading the syllabus definitions below, list **at least four distinct weaknesses** that stop you trusting this claim — and notice how each weakness asks a completely different type of question about the evidence.",
        idea:
          "Every flaw you spotted maps directly onto the **six FA2027 Core Concepts**!\n- Only 45 self-selected London undergraduates replied → **Bias** (WEIRD sampling & volunteer bias).\n- Coffee and grades were merely correlated (maybe diligent or wealthier students buy more coffee and study longer) → **Causality** (correlation ≠ causation; third variables).\n- Self-reported coffee cups and remembered grades are fuzzy proxies → **Measurement** (weak operationalisation and self-report validity).\n- Would coffee habits and exam norms mean the same in Singapore, Tokyo, or Nairobi? → **Perspective** (cultural & contextual lens).\n- Encouraging sleep-deprived teenagers to drink high doses of caffeine could cause anxiety or palpitations → **Responsibility** (ethical and societal impact).\n- And a one-off snapshot cannot show whether grades shifted *after* someone changed their caffeine habits → **Change** (lack of longitudinal or pre–post tracking).",
      },
      body: `In the NEW **First Assessment May 2027** IB Psychology guide, six overarching **Core Concepts** act as analytical lenses across all three Content Approaches (Biological, Cognitive, Sociocultural), all four Compulsory Contexts, your four Class Practicals, and your **Research Proposal IA** (maximum 2,200 words, hypothetical design — **no data collection**).

### The 6 FA2027 Core Concepts Matrix

| Core Concept | Core Diagnostic Question | Key Methodological Terms to Deploy |
|---|---|---|
| **Bias** | Whose voices, expectations, or assumptions systematically distort the data? | WEIRD sampling bias (Western, Educated, Industrialised, Rich, Democratic), volunteer/self-selection bias, researcher/confirmation bias, demand characteristics, social desirability bias, ethnocentrism |
| **Causality** | Can we legitimately claim X *caused* Y, or could another factor explain the link? | True experimental IV manipulation, random allocation, control of extraneous/confounding variables, correlation ≠ causation, bidirectional ambiguity, third-variable problem |
| **Change** | How, why, and over what timescale does brain, cognition, or behaviour transform? | Neuroplasticity, developmental transitions (longitudinal vs cross-sectional designs), therapeutic recovery, behavioural habituation, persistence vs temporary shift |
| **Measurement** | Did the study operationalise the construct accurately, and would it produce consistent results? | Operationalisation, construct validity, internal validity, ecological & population validity, test–retest reliability, inter-rater/inter-observer reliability, quantitative vs qualitative rigour |
| **Perspective** | Which theoretical, cultural, or methodological lens shapes the explanation — and what does it miss? | Biological, Cognitive & Sociocultural triangulation; reductionism vs holism; **emic** (insider, culture-specific) vs **etic** (outsider, assumed universal) lenses (HL); methodological pluralism |
| **Responsibility** | Were participants (human or animal) protected, and how might the findings affect society? | Informed consent, right to withdraw, justified deception & debriefing, protection from harm, anonymity vs confidentiality, vulnerable populations, the 3Rs of animal ethics, socially responsible reporting |

### Why Concepts Replace Generic Textbook Evaluation

Weak exam scripts repeat memorised filler such as *"the sample was small and lacked ecological validity."* Strong FA2027 IB scripts anchor every critique to a named **Core Concept** and explain the *mechanism* by which it alters confidence in the conclusion:

- Instead of *"only students took part"*, write: *"Through the concept of **Bias**, relying on a convenience sample of Western psychology undergraduates introduces WEIRD sampling bias, limiting population validity if the cognitive heuristic depends on culture-specific schooling."*
- Instead of *"it was a correlation"*, write: *"Through the concept of **Causality**, because the researchers did not manipulate sleep duration or randomly allocate participants, a third variable such as chronic academic stress could drive both short sleep and low mood."*
- Instead of *"it only used biology"*, write: *"Through the concept of **Perspective**, measuring cortisol alone risks biological reductionism; integrating cognitive appraisal and sociocultural support provides a richer biopsychosocial explanation."*

> **FA2027 Exam Rule:** In Paper 1 Concept ERQs and Paper 2 Section B unseen-study evaluations, name the Core Concept explicitly, quote concrete evidence from the study or prompt, and show how that concept limits or strengthens psychological knowledge.`,
      diagram: `<svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hexagonal diagram of the six IB Psychology FA2027 Core Concepts radiating around a central Psychological Inquiry hub: Bias, Causality, Change, Measurement, Perspective, and Responsibility">
  <rect x="0" y="0" width="540" height="330" rx="14" fill="#ffffff"/>
  <text x="270" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1c1630">The 6 FA2027 Core Concepts Web</text>
  <!-- Spokes -->
  <g stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 3">
    <line x1="270" y1="168" x2="270" y2="74"/>
    <line x1="270" y1="168" x2="430" y2="118"/>
    <line x1="270" y1="168" x2="430" y2="226"/>
    <line x1="270" y1="168" x2="270" y2="274"/>
    <line x1="270" y1="168" x2="110" y2="226"/>
    <line x1="270" y1="168" x2="110" y2="118"/>
  </g>
  <!-- Outer hexagon connectors -->
  <polygon points="270,74 430,118 430,226 270,274 110,226 110,118" fill="none" stroke="#e2dcf0" stroke-width="2"/>
  <!-- Centre Hub -->
  <circle cx="270" cy="168" r="46" fill="#7c3aed" stroke="#5b21b6" stroke-width="2.5"/>
  <text x="270" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#ffffff">Psychological</text>
  <text x="270" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#ffffff">Inquiry</text>
  <!-- Top: Bias -->
  <rect x="195" y="42" width="150" height="44" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="1.8"/>
  <text x="270" y="61" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">1. BIAS</text>
  <text x="270" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7c2d12">WEIRD, demand, confirmation</text>
  <!-- Top-Right: Causality -->
  <rect x="362" y="96" width="156" height="44" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="440" y="115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#5b21b6">2. CAUSALITY</text>
  <text x="440" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#4c1d95">IV control vs 3rd variables</text>
  <!-- Bottom-Right: Change -->
  <rect x="362" y="204" width="156" height="44" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="440" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#166534">3. CHANGE</text>
  <text x="440" y="238" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d">Plasticity, lifespan, therapy</text>
  <!-- Bottom: Measurement -->
  <rect x="188" y="264" width="164" height="44" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <text x="270" y="283" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#075985">4. MEASUREMENT</text>
  <text x="270" y="298" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#0c4a6e">Operationalisation, validity, reliability</text>
  <!-- Bottom-Left: Perspective -->
  <rect x="22" y="204" width="156" height="44" rx="10" fill="#fce7f3" stroke="#db2777" stroke-width="1.8"/>
  <text x="100" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9d174d">5. PERSPECTIVE</text>
  <text x="100" y="238" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#831843">Bio/Cog/Socio &amp; emic/etic</text>
  <!-- Top-Left: Responsibility -->
  <rect x="22" y="96" width="156" height="44" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="100" y="115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e">6. RESPONSIBILITY</text>
  <text x="100" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f">Ethics, 3Rs &amp; societal impact</text>
</svg>`,
      diagramCaption:
        "Every psychological investigation can be interrogated through any pair of the six FA2027 Core Concepts.",
      workedExamples: [
        {
          title: "Applying Two Core Concepts to a Teen Screen-Time Study",
          problem:
            "Researchers surveyed 120 teenagers from one private high school about nightly social-media hours and morning anxiety scores, finding a positive correlation ({{r = +0.48}}). They concluded that social media causes adolescent anxiety. Evaluate this claim using **two** Core Concepts.",
          steps: [
            "**Step 1 — Diagnose Causality:** Identify the method. A survey produces correlational data with no manipulated independent variable (IV) and no random allocation.",
            "**Step 2 — Explain Causality mechanism:** Bidirectional ambiguity applies (anxious teenagers may scroll social media at night to cope) alongside third variables (exam workload or insomnia could increase both scrolling and morning anxiety).",
            "**Step 3 — Diagnose Bias:** Inspect the sample. All 120 participants attend one private school, creating sampling bias (narrow socioeconomic and cultural profile) plus potential social desirability or recall bias on self-reported screen hours.",
            "**Step 4 — Synthesise:** State how an experimental or longitudinal design with objective screen-time logs would strengthen both Causality and Measurement.",
          ],
          answer:
            "The causal conclusion is unwarranted under **Causality** (correlational design cannot rule out reverse causation or third variables such as insomnia) and limited under **Bias** (single private-school convenience sample restricts generalisability and self-reports invite recall bias).",
        },
        {
          title: "Distinguishing Measurement from Perspective",
          problem:
            "A memory researcher tests 'universal human working memory' by giving bilingual teenagers in Singapore an English-only list of British idiomatic phrases and scoring how many they recall after 30 seconds. Identify which Core Concept is threatened by the test instrument itself and which is threatened by the universalist assumption.",
          steps: [
            "**Step 1 — Inspect the tool (Measurement):** Using culture-specific British idioms confounds working-memory capacity with prior cultural vocabulary knowledge, undermining **construct validity** (the score no longer measures pure working memory).",
            "**Step 2 — Inspect the interpretive lens (Perspective):** Assuming a British-normed task measures a culture-free universal reflects an imposed **etic** perspective that ignores sociocultural context.",
          ],
          answer:
            "**Measurement** is threatened via weak construct validity of the idiomatic recall test, while **Perspective** is threatened by an ethnocentric (imposed etic) assumption of cultural universality.",
          yourTurn: {
            question:
              "A researcher operationalises 'academic resilience' solely by counting how many days a student attends school in one term, ignoring students who attend passively while disengaged or high-achievers absent due to illness. State which single FA2027 Core Concept is primarily threatened by this flawed operationalisation.",
            answer: {
              type: "text",
              accept: ["Measurement", "measurement"],
              display: "Measurement",
            },
            solution:
              "**Measurement** — operationalising a complex psychological construct ('academic resilience') through a crude attendance count undermines construct validity.",
          },
        },
      ],
      keyPoints: [
        "The six FA2027 Core Concepts are **Bias, Causality, Change, Measurement, Perspective, and Responsibility**.",
        "Always link a named concept to a *specific detail* of a study (sample, variable operationalisation, method, or ethical safeguard) rather than offering generic evaluation.",
        "**Causality** requires experimental manipulation of an IV, control of confounds, and random allocation; correlations show association only.",
        "**Measurement** covers both **validity** (measuring the intended construct accurately) and **reliability** (consistency across time, items, or observers).",
        "**Perspective** encourages biopsychosocial integration (Biological, Cognitive, Sociocultural) and alerts researchers to cultural assumptions (emic vs etic).",
      ],
      whyItWorks:
        "Organising psychology around six cross-cutting concepts trains transfer across unfamiliar research. Whether you face an unseen fMRI study on sleep, a cross-cultural parenting interview, or an AI-tutor survey on Paper 2, the same six conceptual questions immediately reveal what the study proves, what it leaves uncertain, and how to improve it.",
      strategies: [
        "Use the mnemonic **BC-CM-PR** (*Bias, Causality, Change, Measurement, Perspective, Responsibility*) to scan any unseen Paper 2 study in 30 seconds.",
        "Never confuse **Bias** with **Measurement**: Bias asks *what systematic distortion* skewed participants or researchers (e.g. WEIRD sample, confirmation bias), while Measurement asks *how accurately and consistently* the construct was operationalised and scored.",
        "When evaluating biological studies, pair **Perspective** (reductionism vs holistic biopsychosocial view) with **Causality** or **Measurement** (e.g. brain-scan correlation vs causal manipulation).",
      ],
      thinkDeeper:
        "Can any psychological study ever be 100% free of Bias? Even in a double-blind randomised controlled trial, researchers choose which question to fund, which construct to prioritise, and which cultural population to recruit — which is why modern psychology treats **reflexivity**, replication, and multi-method triangulation as continuous disciplines rather than one-off checkboxes.",
    },

    // =========================================================================
    // SECTION 2: CLASS PRACTICALS I — EXPERIMENTS & SURVEYS
    // =========================================================================
    {
      id: "experiments-surveys",
      heading: "Class Practicals I: Experiments & Surveys / Questionnaires",
      level: "SL",
      discovery: {
        problem:
          "You are designing a Class Practical with 24 IB students to test whether listening to lo-fi instrumental music improves 20-word free recall compared with silence. You face two dilemmas:\n1. If all 24 students do *silence first* and *music second*, any higher score in music might simply be from learning how the memory task works! If you split them into 12 vs 12, what if the 12 music students happen to have better memories already?\n2. Your friend suggests skipping the experiment and handing out a questionnaire asking: *\"Don't you agree that relaxing music clearly helps students concentrate better?\"* Spot what is wrong with that item.",
        idea:
          "You just uncovered the core design trade-off of experimental psychology and survey construction!\n- **Repeated-measures** removes participant differences but introduces **order effects** (practice/fatigue), solved by **counterbalancing** (half do Silence→Music, half do Music→Silence, using two equivalent word lists).\n- **Independent-measures** avoids order effects but risks **participant variables**, minimised by **random allocation** (or **matched pairs**).\n- Your friend's survey item uses **leading wording** (*\"Don't you agree… clearly helps\"*), pushing respondents toward agreement (**acquiescence / wording bias**) and capturing self-reported *belief* rather than actual recall performance.",
      },
      body: `Under FA2027, students complete **four compulsory Class Practicals** (Experiments, Surveys/Questionnaires, Interviews, Observations) that directly prepare you for **Paper 2** and for selecting one method for your **Research Proposal IA** (hypothetical design — no data collection).

### Class Practical 1: Experiments

An experiment investigates **Causality** by testing whether manipulating an **independent variable (IV)** produces a measurable change in an operationalised **dependent variable (DV)** while controlling **extraneous variables**.

- **True (Laboratory) Experiment:** Researcher directly manipulates the IV, controls extraneous variables tightly, and uses **random allocation** to conditions. High **internal validity** and replicability, but often lower **ecological validity** (artificial setting/task) and risk of **demand characteristics**.
- **Field Experiment:** IV is manipulated in a natural everyday setting (e.g. a school canteen or train platform). Higher ecological validity, but harder to control extraneous variables and harder to obtain informed consent.
- **Quasi-Experiment:** The IV is a pre-existing participant trait that cannot be randomly assigned (e.g. age group, clinical diagnosis, bilingual vs monolingual). Useful when random allocation is impossible or unethical, but weaker **Causality** because pre-existing group differences may confound results.
- **Natural Experiment:** The IV changes naturally outside the researcher's control (e.g. a policy reform, natural disaster, or introduction of television to an island). High ecological validity, but zero control over allocation or timing.

#### Experimental Designs & Controls

| Design | How Participants Are Assigned | Primary Strength | Primary Threat | Standard Control |
|---|---|---|---|---|
| **Independent-Measures** | Separate groups experience only one IV level | Zero order effects; same task material usable in both conditions | **Participant variables** (pre-existing ability/mood differences); needs twice as many participants | **Random allocation** to conditions |
| **Repeated-Measures** | Every participant completes all IV levels | Eliminates participant variables; halves required sample size | **Order effects** (practice, fatigue, boredom) & higher demand characteristics | **Counterbalancing** (AB / BA split or ABBA) + equivalent parallel stimuli |
| **Matched-Pairs** | Participants paired on a key trait (e.g. baseline memory), then randomly split across conditions | Reduces participant variables without order effects | Time-consuming to match; impossible to match on *all* traits | Pre-testing on the most relevant confounding variable + random split |

Additional rigour controls:
- **Standardisation:** Identical instructions, timing, lighting, and scoring scripts for every participant.
- **Single-blind procedure:** Participants do not know whether they are in the experimental or placebo/control condition (reduces **demand characteristics** and placebo expectancy).
- **Double-blind procedure:** Neither participants *nor* the data-collecting researcher know condition assignment (reduces both demand characteristics and **researcher/experimenter expectancy bias**).

---

### Class Practical 2: Surveys & Questionnaires

Surveys gather standardised self-report data efficiently from large samples, making them valuable for studying attitudes, habits, and correlations across contexts.

- **Closed questions** (e.g. **5-point Likert scales** from *1 = Strongly Disagree* to *5 = Strongly Agree*, yes/no, multiple choice) yield **quantitative data** that are fast to code and compare statistically, but may force nuance into rigid boxes.
- **Open-ended questions** yield richer **qualitative data** explaining *why* respondents feel a certain way, but take longer to code and risk lower completion rates.
- **Key Survey Biases (Bias & Measurement):**
  - **Leading / loaded wording:** Nudging an answer (*"How harmful do you find excessive gaming?"*).
  - **Double-barrelled items:** Asking two things in one question (*"Do you enjoy psychology lectures and find the textbook easy?"*) — respondents cannot answer accurately if they agree with one half only.
  - **Social desirability bias:** Answering to look admirable or avoid embarrassment, especially on sensitive topics (stress, alcohol, prejudice).
  - **Acquiescence bias ("yea-saying"):** Tendency to agree with statements regardless of content; countered by mixing positively and **reverse-scored** items.

#### Sampling Techniques & Key Quantitative Formulas

- **Random sampling:** Every member of the target population has an equal, independent chance of selection (lowest selection bias, requires a complete sampling frame).
- **Stratified sampling:** Population is divided into key subgroups (strata, e.g. Year 12 vs Year 13) and participants are drawn proportionally from each stratum:
  {{n_stratum = (N_stratum / N_total) * n_sample}}
- **Convenience (opportunity) sampling:** Selecting whoever is readily available (fast and practical for Class Practicals, but high sampling/WEIRD bias).
- **Snowball sampling:** Initial participants recruit acquaintances (effective for hard-to-reach populations, but clusters similar networks).
- **Purposive sampling:** Deliberately recruiting participants who possess specific lived experience or criteria (common in qualitative interviews and targeted surveys).

Track survey quality using the **response rate**:
{{Response Rate (%) = (Completed Surveys / Surveys Distributed) * 100}}
Low response rates invite **non-response bias**, because non-responders often differ systematically from motivated volunteers.`,
      diagram: `<svg viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram of Independent-Measures design with random allocation versus Repeated-Measures design with AB and BA counterbalancing">
  <rect x="0" y="0" width="540" height="300" rx="14" fill="#ffffff"/>
  <text x="270" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1c1630">Experimental Designs &amp; Counterbalancing Controls</text>
  <!-- Left panel: Independent Measures -->
  <rect x="16" y="42" width="246" height="242" rx="12" fill="#f8f7fc" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="139" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#5b21b6">Independent-Measures</text>
  <rect x="74" y="76" width="130" height="30" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="139" y="95" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">Sample (N = 24)</text>
  <text x="139" y="121" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Random Allocation</text>
  <line x1="115" y1="106" x2="78" y2="142" stroke="#7c3aed" stroke-width="1.8"/>
  <line x1="163" y1="106" x2="200" y2="142" stroke="#7c3aed" stroke-width="1.8"/>
  <rect x="28" y="144" width="100" height="46" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="78" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">Group 1 (n=12)</text>
  <text x="78" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Condition A only</text>
  <rect x="150" y="144" width="100" height="46" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="200" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">Group 2 (n=12)</text>
  <text x="200" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Condition B only</text>
  <rect x="28" y="206" width="222" height="64" rx="8" fill="#ede9fe"/>
  <text x="139" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">+ Zero order effects</text>
  <text x="139" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c">− Risk of participant variables</text>
  <text x="139" y="258" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#4c1d95">Control: Random allocation</text>
  <!-- Right panel: Repeated Measures -->
  <rect x="278" y="42" width="246" height="242" rx="12" fill="#f0fdf4" stroke="#0d9488" stroke-width="1.8"/>
  <text x="401" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#0f766e">Repeated-Measures (Counterbalanced)</text>
  <rect x="336" y="76" width="130" height="30" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.4"/>
  <text x="401" y="95" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">All Participants (N = 24)</text>
  <text x="401" y="121" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">AB / BA Counterbalancing</text>
  <line x1="375" y1="106" x2="342" y2="142" stroke="#0d9488" stroke-width="1.8"/>
  <line x1="427" y1="106" x2="460" y2="142" stroke="#0d9488" stroke-width="1.8"/>
  <rect x="290" y="144" width="104" height="46" rx="8" fill="#ffffff" stroke="#0d9488" stroke-width="1.4"/>
  <text x="342" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f766e">Half 1 (n=12)</text>
  <text x="342" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">A  →  B</text>
  <rect x="408" y="144" width="104" height="46" rx="8" fill="#ffffff" stroke="#0d9488" stroke-width="1.4"/>
  <text x="460" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f766e">Half 2 (n=12)</text>
  <text x="460" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">B  →  A</text>
  <rect x="290" y="206" width="222" height="64" rx="8" fill="#ccfbf1"/>
  <text x="401" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">+ Zero participant variables</text>
  <text x="401" y="241" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c">− Risk of practice / fatigue</text>
  <text x="401" y="258" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#115e59">Control: AB/BA order + parallel tasks</text>
</svg>`,
      diagramCaption:
        "Match the control to the threat: random allocation counters participant variables; counterbalancing distributes order effects equally across conditions.",
      workedExamples: [
        {
          title: "Controlling Confounds in a Repeated-Measures Stroop Practical",
          problem:
            "A student runs a Class Practical where 20 classmates complete a congruent Stroop colour-naming list first, then immediately complete an incongruent list, and both lists are timed by the student who openly predicts the incongruent list will take longer. Identify **two** methodological flaws and prescribe concrete controls.",
          steps: [
            "**Flaw 1 — Order Effects (Causality / Measurement):** Everyone does congruent → incongruent in the same fixed order, so fatigue or practice confounds the reaction-time difference.",
            "**Control 1 — Counterbalancing:** Randomly split the 20 students so 10 complete Congruent → Incongruent (AB) and 10 complete Incongruent → Congruent (BA), balancing order effects across conditions.",
            "**Flaw 2 — Researcher Expectancy & Demand Characteristics (Bias):** Telling classmates the prediction and timing manually invites subtle timing bias and conscious slowing.",
            "**Control 2 — Standardisation & Automated/Blind Timing:** Use computerised millisecond timing and neutral standardised instructions that conceal the specific hypothesis until debriefing.",
          ],
          answer:
            "Counterbalance trial order (AB/BA) to neutralise order effects, and use standardised computerised timing with concealed hypotheses (single-blind) to reduce demand characteristics and experimenter bias.",
        },
        {
          title: "Calculating Proportional Stratified Subsamples",
          problem:
            "An international school has 400 sixth-form students: 140 are boarding students and 260 are day students. A researcher wants a proportional stratified survey sample of 80 students. How many boarding students must be randomly selected?",
          steps: [
            "**Step 1 — Find the stratum proportion:** {{140 / 400 = 0.35}} (35% of the population are boarding students).",
            "**Step 2 — Multiply by total sample size:** {{0.35 * 80 = 28}} boarding students (and {{80 - 28 = 52}} day students).",
            "**Step 3 — Check:** {{28 / 80 = 35%}}, matching the population proportion exactly.",
          ],
          answer: "28 boarding students (and 52 day students).",
          yourTurn: {
            question:
              "A college has 600 students, of whom 150 study Psychology. If you draw a proportional stratified sample of 60 students for a study-habits questionnaire, how many Psychology students should be included?",
            answer: {
              type: "number",
              value: 15,
              display: "15",
            },
            solution:
              "Psychology proportion = {{150 / 600 = 0.25}} (25%). Multiply by sample size 60: {{0.25 * 60 = 15}} Psychology students.",
          },
        },
      ],
      keyPoints: [
        "Only **true experiments** with IV manipulation, strict control, and random allocation establish strong **Causality**; quasi- and natural experiments cannot fully exclude pre-existing confounds.",
        "**Independent-measures** risks participant variables (controlled by random allocation); **repeated-measures** risks order effects (controlled by counterbalancing + equivalent parallel materials).",
        "In surveys, avoid **leading**, **loaded**, and **double-barrelled** items, and include **reverse-scored** Likert items to detect acquiescence bias.",
        "**Stratified sampling** preserves subgroup proportions (reducing sampling bias), whereas **convenience sampling** is fast for Class Practicals but limits population validity.",
        "Always distinguish **random sampling** (how you select people *from the population* → generalisability) from **random allocation** (how you assign selected participants *to experimental conditions* → internal validity).",
      ],
      whyItWorks:
        "Experiments and surveys sit at opposite ends of a classic research trade-off: experiments maximise **internal validity and Causality** through tight manipulation, whereas surveys maximise **breadth, speed, and quantitative reach** across natural populations. Mastering both lets you spot immediately why a survey cannot replace a controlled trial — and why a controlled lab task may not mirror everyday life.",
      strategies: [
        "When an exam question asks you to operationalise an IV or DV, make it *observable and measurable* with clear units (e.g. *\"number of correctly recalled words out of 20 after a 60-second delay\"*, never just *\"memory\"*).",
        "Check every experiment question for **random sampling vs random allocation** — mixing them up is one of the costliest Paper 2 slips!",
        "When evaluating a questionnaire, inspect three layers: **sampling method** (Bias), **question wording & Likert anchors** (Measurement), and **self-report honesty** (social desirability).",
      ],
      thinkDeeper:
        "Why does counterbalancing fail if a condition produces an *asymmetric carryover effect* — for example, teaching participants a mnemonic strategy in Condition A that they cannot 'unlearn' when they move to Condition B? In those cases, an independent-measures or matched-pairs design is scientifically mandatory even if it demands twice as many participants.",
    },

    // =========================================================================
    // SECTION 3: CLASS PRACTICALS II — INTERVIEWS & OBSERVATIONS
    // =========================================================================
    {
      id: "interviews-observations",
      heading: "Class Practicals II: Interviews & Observations",
      level: "SL",
      discovery: {
        problem:
          "A school wellbeing team discovers from a closed-item survey that 74% of Year 12 students procrastinate before mock exams — yet the numbers cannot explain *why* students procrastinate or *what* they actually do at their desks. The team considers two follow-up practicals: (a) interviewing students one-on-one about their study habits, and (b) sitting visibly inside the silent study room ticking off every time a student checks their phone. Predict one distortion that could undermine **each** practical, and invent a way to combine methods for a truer picture.",
        idea:
          "Both follow-ups expose classic qualitative and observational challenges:\n- In **interviews**, students may give polite, face-saving answers (**social desirability bias**) or react to the interviewer's tone (**interviewer effect**), requiring careful rapport, open non-leading prompts, and **member checking**.\n- In **overt observations**, knowing a researcher is watching makes students suddenly stay on task (**Hawthorne / reactivity effect**), and two observers might disagree on what counts as 'procrastination' unless they use an operationalised **coding schedule** and check **inter-observer reliability**.\n- Combining survey statistics + semi-structured interviews + structured observation creates **methodological triangulation** — each method compensates for the others' blind spots!",
      },
      body: `Quantitative experiments and surveys capture *how much* or *whether* a variable shifts, whereas **interviews** and **observations** capture *lived meaning*, *social context*, and *actual enacted behaviour* rather than only self-reports.

### Class Practical 3: Interviews

| Interview Format | Structure | Key Strengths | Key Limitations |
|---|---|---|---|
| **Structured** | Fixed wording & fixed order of questions | High comparability, fast training, stronger replicability | Rigid; cannot probe unexpected insights or personal nuance |
| **Semi-Structured** | Core open-ended interview schedule + flexible follow-up probes | Balances focus with rich, authentic detail; ideal for IB Class Practicals | Requires skilled interviewer to avoid leading follow-ups; slower to analyse |
| **Unstructured** | Broad topic opener; conversation led by participant | Deep exploratory insight into unfamiliar or sensitive lived experiences | Hard to replicate or compare across participants; vulnerable to drift |
| **Focus Group** | Moderated discussion with 5–10 participants simultaneously | Reveals group norms, shared language, and interactive meaning-making | Dominant voices or peer conformity suppress minority views; lower confidentiality |

#### Ensuring Rigour in Qualitative Interviews
- **Rapport & neutral probing:** Begin with non-threatening warm-up questions and use neutral probes (*"Could you tell me more about that?"*) rather than leading questions.
- **Thematic analysis:** Transcribe verbatim, familiarise with the text, generate initial codes, and group codes into overarching themes.
  - **Inductive coding** (bottom-up): themes emerge organically from the participants' own words without forcing a pre-existing theory.
  - **Deductive coding** (top-down): transcript passages are coded against an established theoretical framework (e.g. coding stress transcripts for Lazarus & Folkman's primary/secondary appraisal).
- **Credibility checks:**
  - **Member checking (participant validation):** Sharing transcripts or draft themes back with interviewees so they can verify whether the researcher accurately captured their meaning.
  - **Reflexivity (key at HL & strong SL):** The researcher explicitly documents how their own background, expectations, or role (e.g. being a fellow student or teacher) may have shaped data collection and interpretation.

---

### Class Practical 4: Observations

Every observational design is classified along **three independent dimensions**:

1. **Setting — Naturalistic vs Controlled:** Watching behaviour unfold spontaneously in an everyday environment (high ecological validity, low variable control) vs in a structured lab setting such as Ainsworth's Strange Situation (higher control and comparability, lower naturalism).
2. **Awareness — Overt vs Covert:** Participants know they are being observed (**overt** → ethical informed consent, but risks **Hawthorne / reactivity effect**) vs participants do not know (**covert** → natural behaviour with zero reactivity, but serious ethical **Responsibility** threats unless confined to public behaviour where people expect to be seen).
3. **Researcher Role — Participant vs Non-Participant:** The observer joins the group actively (rich insider **Perspective**, but risks losing objectivity — "going native" — and altering group dynamics) vs watching from outside (more detached systematic recording, less insider understanding).

#### Coding Schedules & Inter-Observer Reliability

To avoid subjective interpretation, structured observations define mutually exclusive, observable **behavioural categories** (e.g. *picks up smartphone for ≥ 3 seconds*, *initiates verbal question*, *maintains eye contact*) and choose a sampling rule:
- **Event sampling:** Tally every single occurrence of the target behaviour during the session (best for infrequent, discrete acts such as helping a stranger).
- **Time sampling:** Record what behaviour is occurring at fixed time intervals, e.g. every 30 seconds (best for continuous behaviours like classroom on-task attention, though brief acts between intervals may be missed).

To verify **Measurement** consistency, two or more independent observers code the same session (or video recording) blind to each other's scores, and compute **inter-observer agreement (IOA)**:
{{IOA (%) = (Number of Agreements / Total Observations) * 100}}
Psychology typically treats **≥ 80%** agreement as acceptable inter-observer reliability.

### Methodological & Researcher Triangulation

**Triangulation** cross-checks findings from multiple angles to boost **credibility** and **Measurement** validity:
- **Methodological triangulation:** Combining two or more methods (e.g. quantitative survey + semi-structured interviews + naturalistic observation) on the same phenomenon.
- **Researcher triangulation:** Having two or more analysts independently code transcripts or behavioural footage to expose confirmation bias.`,
      diagram: `<svg viewBox="0 0 540 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing the three axes of observation designs connected to methodological triangulation across observations, interviews, and surveys">
  <rect x="0" y="0" width="540" height="310" rx="14" fill="#ffffff"/>
  <text x="270" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1c1630">Observational Dimensions &amp; Methodological Triangulation</text>
  <!-- Left Panel: 3 Axes of Observation -->
  <rect x="16" y="42" width="248" height="252" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
  <text x="140" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af">3 Independent Observation Axes</text>
  <!-- Axis 1 -->
  <text x="140" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">1. Setting</text>
  <rect x="28" y="94" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="79" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Naturalistic</text>
  <rect x="150" y="94" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="201" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Controlled</text>
  <text x="140" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#64748b">vs</text>
  <!-- Axis 2 -->
  <text x="140" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">2. Awareness (Ethics vs Reactivity)</text>
  <rect x="28" y="154" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="79" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Overt</text>
  <rect x="150" y="154" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="201" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Covert</text>
  <text x="140" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#64748b">vs</text>
  <!-- Axis 3 -->
  <text x="140" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">3. Researcher Role</text>
  <rect x="28" y="214" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="79" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Participant</text>
  <rect x="150" y="214" width="102" height="32" rx="7" fill="#ffffff" stroke="#3b82f6" stroke-width="1.3"/>
  <text x="201" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Non-Participant</text>
  <text x="140" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#64748b">vs</text>
  <text x="140" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">Check Reliability: IOA ≥ 80% across ≥ 2 coders</text>
  <!-- Right Panel: Triangulation Triangle -->
  <rect x="278" y="42" width="246" height="252" rx="12" fill="#fdf2f8" stroke="#db2777" stroke-width="1.8"/>
  <text x="401" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9d174d">Methodological Triangulation</text>
  <polygon points="401,92 316,232 486,232" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
  <!-- Top Vertex -->
  <rect x="336" y="76" width="130" height="32" rx="8" fill="#ffffff" stroke="#db2777" stroke-width="1.5"/>
  <text x="401" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9d174d">Observations</text>
  <!-- Bottom-Left Vertex -->
  <rect x="286" y="218" width="106" height="34" rx="8" fill="#ffffff" stroke="#db2777" stroke-width="1.5"/>
  <text x="339" y="239" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9d174d">Interviews</text>
  <!-- Bottom-Right Vertex -->
  <rect x="410" y="218" width="106" height="34" rx="8" fill="#ffffff" stroke="#db2777" stroke-width="1.5"/>
  <text x="463" y="239" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9d174d">Surveys / Data</text>
  <!-- Centre Converged Construct -->
  <circle cx="401" cy="176" r="34" fill="#db2777"/>
  <text x="401" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#ffffff">Higher</text>
  <text x="401" y="185" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#ffffff">Credibility</text>
  <text x="401" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#831843">Enacted acts + Lived meaning + Scale</text>
</svg>`,
      diagramCaption:
        "Classify observations across all three axes and triangulate across methods to balance enacted behaviour with participants' own explanations.",
      workedExamples: [
        {
          title: "Operationalising a Coding Schedule & Calculating Inter-Observer Agreement",
          problem:
            "Two IB psychology students conduct a controlled non-participant observation of 45 one-minute intervals of group problem-solving. Rather than tallying vague 'teamwork', they define observable categories (*verbal suggestion*, *active nodding*, *writing shared notes*). The two coders independently agree on 36 of the 45 intervals. Calculate their percentage inter-observer agreement and judge whether it meets the typical 80% benchmark.",
          steps: [
            "**Step 1 — Write the formula:** {{IOA (%) = (Agreements / Total Observations) * 100}}.",
            "**Step 2 — Substitute values:** {{(36 / 45) * 100 = 0.8 * 100 = 80%}}.",
            "**Step 3 — Interpret:** 80% meets the conventional threshold for acceptable inter-observer reliability; reviewing the 9 discordant intervals lets the team refine category boundaries before further coding.",
          ],
          answer: "80% inter-observer agreement (meets the standard ≥ 80% reliability benchmark).",
        },
        {
          title: "Choosing Semi-Structured Interviews over Focus Groups",
          problem:
            "A researcher wants to explore how adolescent athletes experience performance anxiety after a public mistake. Justify why **semi-structured individual interviews** with **member checking** are preferable to a focus group.",
          steps: [
            "**Step 1 — Compare Confidentiality & Bias:** In a focus group, teammates hear one another's vulnerabilities, triggering social desirability bias and peer conformity; private individual interviews protect confidentiality and encourage candid disclosure.",
            "**Step 2 — Justify Semi-Structured Format:** Core open questions ensure all athletes address performance anxiety consistently, while flexible probes unpack individual triggers.",
            "**Step 3 — Justify Credibility Control:** Returning anonymised summaries for **member checking** confirms that the researcher's inductive themes authentically reflect the athletes' lived Perspective rather than researcher confirmation bias.",
          ],
          answer:
            "Individual semi-structured interviews protect confidentiality and limit peer conformity/social desirability while allowing flexible probing, and member checking verifies interpretive credibility.",
          yourTurn: {
            question:
              "Two independent observers code 50 behavioural intervals of student library focus using a standardised schedule and agree on 43 intervals. Calculate their inter-observer agreement as a percentage.",
            answer: {
              type: "number",
              value: 86,
              display: "86%",
            },
            solution:
              "{{IOA (%) = (43 / 50) * 100 = 86%}}, which exceeds the 80% benchmark for strong inter-observer reliability.",
          },
        },
      ],
      keyPoints: [
        "Semi-structured interviews combine standardised core questions with flexible follow-up probes, balancing focus with qualitative depth.",
        "**Inductive** thematic analysis builds themes bottom-up from transcript data; **deductive** analysis codes transcripts through an existing theory.",
        "Always classify an observation along **three** dimensions: naturalistic vs controlled, overt vs covert, and participant vs non-participant.",
        "**Inter-observer agreement** {{(Agreements / Total) * 100}} checks Measurement reliability; ≥ 80% is the standard target.",
        "**Methodological triangulation** combines complementary methods (e.g. observation + interview) to offset Hawthorne reactivity and self-report social desirability.",
      ],
      whyItWorks:
        "People do not always *do* what they *say* they do, and observers cannot always tell *why* people acted the way they did just by watching silently. Pairing observations (external behaviour) with interviews (internal meaning) bridges the gap between observable action and subjective Perspective.",
      strategies: [
        "In Paper 2 Class Practical reflections, never merely label an observation 'naturalistic' — specify **all three dimensions** (e.g. *overt, naturalistic, non-participant observation using 30-second time sampling*).",
        "When discussing qualitative trustworthiness, avoid claiming 'high objectivity' — instead use qualitative rigour terms: **credibility** (member checking, triangulation), **reflexivity**, and **thick description** (transferability).",
        "If an unseen study uses a **focus group** on a sensitive topic (mental health, bullying, body image), immediately link **Bias** (conformity/social desirability) and **Responsibility** (confidentiality limits among peers).",
      ],
      thinkDeeper:
        "If an interviewee disagrees with one of the researcher's themes during **member checking**, should the researcher automatically delete that theme? Not necessarily — participants may feel uncomfortable seeing a latent pattern (such as unconscious coping avoidance), so skilled qualitative psychologists document the disagreement transparently through **reflexivity** rather than hiding it.",
    },

    // =========================================================================
    // SECTION 4: ETHICAL RESPONSIBILITY & PAPER 2 UNSEEN-STUDY EVALUATION
    // =========================================================================
    {
      id: "ethics-unseen-study-paper2",
      heading: "Ethical Responsibility & Paper 2 Unseen-Study Evaluation",
      level: "SL",
      discovery: {
        problem:
          "A psychology student proposes this study for their FA2027 IA: secretly filming teenagers in a shopping mall while a confederate drops heavy groceries and clutches their chest, to see whether solo shoppers help faster than groups. The student argues: *\"If I ask for consent beforehand, participants will fake helping and ruin validity!\"* Identify **two major FA2027 rules/ethical standards** this proposal violates, and design an ethical alternative that still investigates bystander helping.",
        idea:
          "First, a crucial FA2027 IA rule: the IA is a **Research Proposal only (NO data collection!)**, and every proposed design must still meet full IB ethical guidelines! Second, simulating a medical emergency (chest clutching) in covert filming breaches **protection from psychological harm** (severe shock/distress), lacks **informed consent**, uses unjustified **deception** without guaranteed **debriefing** (shoppers who walk away are never debriefed), and involves minors (**vulnerable population**) without parental consent. An ethical alternative could use a **hypothetical written/video vignette experiment** or a **low-distress naturalistic scenario** (such as dropping harmless leaflets, or a consenting lab/virtual-reality simulation) with full debriefing and right to withdraw.",
      },
      body: `The Core Concept of **Responsibility** governs both how psychologists treat living participants during research and how psychological claims are communicated to society. It is also one of the highest-yield lenses in **Paper 2 Section B** unseen-study critiques and the **FA2027 Research Proposal IA**.

### Human Research Ethics (IB / APA / BPS Standards)

| Ethical Principle | Operational Standard | Common Unseen-Study Violation |
|---|---|---|
| **Informed Consent** | Participants receive clear information on aims, tasks, duration, risks, and rights *before* freely agreeing. Minors require **parental/guardian consent + participant assent**. | Recruiting students via mandatory course credit (coercion) or filming private settings without permission |
| **Deception & Debriefing** | Deception is permitted *only* when scientifically essential, causes no undue harm, and is followed immediately by a full **debriefing** (revealing true aim, checking wellbeing, offering data withdrawal). | Misleading participants about false failure feedback and letting them leave still feeling distressed or humiliated |
| **Right to Withdraw** | Participants may stop at any point without penalty *and* may withdraw their data afterward (prior to anonymisation). | Subtle pressure to "finish the trial" or withholding promised reimbursement if they quit |
| **Protection from Harm** | Physical and psychological risk must not exceed everyday life; distress must be monitored and support signposted. | Inducing acute stress, fear, social humiliation, or sleep deprivation in vulnerable participants |
| **Anonymity vs Confidentiality** | **Anonymity:** not even the researcher can link data to an individual. **Confidentiality:** identity is known to the researcher (e.g. interviews/longitudinal IDs) but stored securely under pseudonyms and never disclosed. | Naming a small school or unique demographic combination in quotes so readers can identify the interviewee |
| **Vulnerable Populations** | Extra safeguards for children, clinical patients, people with cognitive impairments, prisoners, or subordinated employees/students. | Testing clinical anxiety patients without clinical oversight or appropriate opt-out safeguards |

---

### Animal Research Ethics: Russell & Burch's 3Rs (1959)

When biological psychology investigates brain mechanisms or neurochemistry using non-human animals, ethical **Responsibility** is evaluated through the **3Rs**:

1. **Replacement:** Substitute non-animal methods wherever scientifically feasible — e.g. non-invasive human neuroimaging (fMRI/EEG), computational modelling, or cell cultures.
2. **Reduction:** Minimise the number of animals needed without compromising statistical validity — e.g. statistical power calculations, sharing open datasets, or repeated-measures imaging.
3. **Refinement:** Modify housing, handling, anaesthesia, analgesia, and experimental endpoints to minimise pain and distress and promote welfare (e.g. enriched cages, social housing, humane endpoints).

---

### Paper 2 Section B: Unseen-Study Evaluation Blueprint (C–E–I–M)

In FA2027 **Paper 2**, you demonstrate mastery of your **Class Practicals** (Section A) and evaluate an **unseen psychological study** through **≥ 2 Core Concepts** (Section B). Follow the **C–E–I–M** formula in every analytical paragraph:

1. **C — Concept:** Name the Core Concept explicitly (*Bias, Causality, Change, Measurement, Perspective,* or *Responsibility*) and the specific methodological issue.
2. **E — Evidence from stimulus:** Quote or cite a concrete detail from the unseen study (sample size/demographics, operationalisation, procedure, or quotation).
3. **I — Impact:** Explain *precisely how* that flaw distorts the findings, limits generalisability, weakens causal inference, or harms participants.
4. **M — Modification & Trade-off:** Propose a realistic methodological improvement *and* evaluate its trade-off (e.g. adding a control group strengthens **Causality** but increases cost; switching from covert to overt observation upholds **Responsibility** but risks Hawthorne reactivity).

> **IA Proposal Reminder (FA2027):** Your Internal Assessment is a **2,200-word Research Proposal** designing a rigorous hypothetical investigation using one of the four approved Class Practical methods (Experiment, Survey/Questionnaire, Interview, or Observation), complete with a **≥ 5-item data collection tool** in the appendix and full ethical justification — **you do NOT recruit participants or collect data**.`,
      diagram: `<svg viewBox="0 0 540 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step Paper 2 Section B unseen-study evaluation blueprint showing Dissect Stimulus, Choose Core Concepts, Write CEIM Analysis, and Weigh Modifications">
  <rect x="0" y="0" width="540" height="270" rx="14" fill="#ffffff"/>
  <text x="270" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1c1630">Paper 2 Section B: Unseen-Study Evaluation Blueprint</text>
  <!-- Step 1 -->
  <rect x="16" y="46" width="114" height="128" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <circle cx="73" cy="68" r="14" fill="#7c3aed"/>
  <text x="73" y="73" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">1</text>
  <text x="73" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b21b6">Dissect</text>
  <text x="73" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b21b6">Stimulus</text>
  <text x="73" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Method &amp; Sample</text>
  <text x="73" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">IV/DV or Coding</text>
  <text x="73" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Ethics &amp; Findings</text>
  <!-- Arrow 1-2 -->
  <path d="M133 110 L146 110" stroke="#64748b" stroke-width="2.2" fill="none"/>
  <polygon points="145,105 153,110 145,115" fill="#64748b"/>
  <!-- Step 2 -->
  <rect x="155" y="46" width="114" height="128" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <circle cx="212" cy="68" r="14" fill="#0369a1"/>
  <text x="212" y="73" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">2</text>
  <text x="212" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#075985">Select ≥ 2</text>
  <text x="212" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#075985">Concepts</text>
  <text x="212" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Bias · Causality</text>
  <text x="212" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Change · Measurement</text>
  <text x="212" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Perspective · Resp.</text>
  <!-- Arrow 2-3 -->
  <path d="M272 110 L285 110" stroke="#64748b" stroke-width="2.2" fill="none"/>
  <polygon points="284,105 292,110 284,115" fill="#64748b"/>
  <!-- Step 3 -->
  <rect x="294" y="46" width="114" height="128" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <circle cx="351" cy="68" r="14" fill="#15803d"/>
  <text x="351" y="73" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">3</text>
  <text x="351" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">Anchor</text>
  <text x="351" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">Evidence</text>
  <text x="351" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Quote study specifics</text>
  <text x="351" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Trace exact impact</text>
  <text x="351" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">on validity / ethics</text>
  <!-- Arrow 3-4 -->
  <path d="M411 110 L424 110" stroke="#64748b" stroke-width="2.2" fill="none"/>
  <polygon points="423,105 431,110 423,115" fill="#64748b"/>
  <!-- Step 4 -->
  <rect x="433" y="46" width="91" height="128" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <circle cx="478" cy="68" r="14" fill="#d97706"/>
  <text x="478" y="73" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">4</text>
  <text x="478" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e">Modify &amp;</text>
  <text x="478" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e">Trade-Off</text>
  <text x="478" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Redesign fix</text>
  <text x="478" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Weigh new</text>
  <text x="478" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">trade-off</text>
  <!-- Bottom summary banner -->
  <rect x="16" y="192" width="508" height="62" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>
  <text x="270" y="213" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">C–E–I–M Paragraph Formula (Top-Band Paper 2 Evaluation)</text>
  <text x="270" y="232" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Concept named → Evidence quoted from unseen study → Impact explained → Modification + trade-off weighed</text>
  <text x="270" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#7c3aed">Avoid generic boilerplate detached from the unseen stimulus!</text>
</svg>`,
      diagramCaption:
        "Use the four-step C–E–I–M routine to turn any unfamiliar Paper 2 study into a structured, concept-driven evaluation.",
      workedExamples: [
        {
          title: "Unseen-Study Critique Using Responsibility & Causality",
          problem:
            "To test whether public criticism impairs maths fluency, a teacher told 30 Year 10 students their timed quiz was a normal revision exercise, then publicly read out the lowest five scores to the class before giving a second quiz. Students' mean scores fell by 22% on Quiz 2. Evaluate this study using **Responsibility** and **Causality**.",
          steps: [
            "**Responsibility (Evidence + Impact):** Students were minors (vulnerable population) tested without informed consent or parental permission, misled about the procedure (deception), and subjected to public humiliation (breaching protection from psychological harm and confidentiality). Because their own teacher ran the study, power imbalance undermined their right to withdraw.",
            "**Causality (Evidence + Impact):** There was no control group who completed Quiz 1 and Quiz 2 without public criticism, so fatigue, a harder Quiz 2, or time-of-day effects (extraneous variables) could account for the 22% drop rather than criticism alone.",
            "**Modification & Trade-Off:** Redesign as a consenting, low-stakes adult lab experiment with random allocation to neutral vs private constructive-feedback conditions plus full debriefing — strengthening both Responsibility and Causality, though sacrificing some classroom ecological realism.",
          ],
          answer:
            "Severe **Responsibility** breaches (lack of parental consent/assent, psychological harm via public humiliation, teacher coercion) combine with weak **Causality** (no control group to isolate criticism from quiz difficulty or fatigue).",
        },
        {
          title: "Applying the 3Rs to Animal Neuroscience Ethics",
          problem:
            "A team studying spatial memory reduces its rodent cohort from 60 to 28 using a statistical power calculation and upgrades cages with running wheels and nesting material. Identify which **two** of the 3Rs are applied.",
          steps: [
            "**Step 1 — Cohort size 60 → 28 via power analysis:** Minimising animal numbers while preserving scientific validity = **Reduction**.",
            "**Step 2 — Enriched housing with running wheels and nesting material:** Lowering stress and improving welfare = **Refinement**.",
            "**Step 3 — Note what is NOT shown:** Animals are still used, so **Replacement** has not occurred.",
          ],
          answer: "**Reduction** (power-justified smaller cohort) and **Refinement** (environmental enrichment to improve welfare).",
          yourTurn: {
            question:
              "A neuroscience institute shifts from invasive brain-lesion studies in macaques to non-invasive fMRI brain scanning with consenting adult human volunteers and computerised neural simulations. State which one of Russell and Burch's 3Rs this exemplifies.",
            answer: {
              type: "text",
              accept: ["Replacement", "replacement"],
              display: "Replacement",
            },
            solution:
              "**Replacement** — substituting non-animal methodologies (human fMRI and computational modelling) for animal experimentation.",
          },
        },
      ],
      keyPoints: [
        "**Anonymity** means not even the researcher knows who produced a response; **confidentiality** means identities are known to the researcher but strictly protected via pseudonyms and secure storage.",
        "Deception is ethically acceptable only when scientifically unavoidable, involves minimal risk, and is followed by a thorough **debriefing** offering data withdrawal.",
        "Research involving minors requires **parental/guardian consent** plus the young person's own **assent**.",
        "Animal research ethics rest on Russell & Burch's **3Rs**: **Replacement**, **Reduction**, and **Refinement**.",
        "Top-band Paper 2 Section B evaluations apply **≥ 2 Core Concepts** via **C–E–I–M** (Concept, Evidence from stimulus, Impact, Modification + trade-off).",
      ],
      whyItWorks:
        "Ethics and methodology are not separate checklists: unethical studies frequently produce *bad science* too. Coerced or distressed participants exhibit defensive compliance, extreme attrition, or stress confounds — meaning strong **Responsibility** protects both human dignity and **Measurement** validity.",
      strategies: [
        "Always check **age and power dynamics** in an unseen study: schoolchildren, hospital patients, or employees recruited by their boss trigger **vulnerable population** and **coercion** points under Responsibility.",
        "When proposing an ethical fix on Paper 2, state the **methodological trade-off** explicitly (e.g. obtaining full informed consent protects autonomy but may increase demand characteristics).",
        "Distinguish **post-study debriefing** from **informed consent**: debriefing repairs necessary mild deception afterward, but it NEVER excuses exposing participants to severe predictable harm.",
      ],
      thinkDeeper:
        "Does **Responsibility** end once data collection finishes? Consider what happens when a poorly controlled study claiming genetic or cultural differences in intelligence is sensationalised in media headlines: ethical responsibility extends to transparent statistical reporting (reporting effect sizes alongside p-values), open data, and guarding against socially harmful misinterpretation.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Name all six FA2027 IB Psychology Core Concepts.",
        back: "**Bias**, **Causality**, **Change**, **Measurement**, **Perspective**, and **Responsibility**.",
        level: "SL",
      },
      {
        front: "Name the four compulsory FA2027 Class Practical research methods.",
        back: "**Experiments**, **Surveys / Questionnaires**, **Interviews**, and **Observations**.",
        level: "SL",
      },
      {
        front: "How does the NEW FA2027 Psychology IA differ from collecting participant data?",
        back: "The FA2027 IA is a **Research Proposal** (max 2,200 words, 24 marks) designing a hypothetical investigation with a ≥ 5-item data collection tool in the appendix — students do **NOT** collect data.",
        level: "SL",
      },
      {
        front: "What does WEIRD sampling bias mean (Henrich et al.)?",
        back: "Over-reliance on **W**estern, **E**ducated, **I**ndustrialised, **R**ich, **D**emocratic participants (often university undergraduates), limiting cross-cultural population validity.",
        level: "SL",
      },
      {
        front: "Distinguish random sampling from random allocation.",
        back: "**Random sampling** selects participants from a target population (strengthens generalisability / reduces sampling Bias); **random allocation** assigns already-recruited participants to experimental conditions (strengthens internal validity / Causality).",
        level: "SL",
      },
      {
        front: "What is the main threat of a repeated-measures design and how is it controlled?",
        back: "**Order effects** (practice, fatigue, or boredom across trials), controlled via **counterbalancing** (e.g. AB / BA split or ABBA) plus equivalent parallel stimuli.",
        level: "SL",
      },
      {
        front: "Distinguish a quasi-experiment from a true experiment.",
        back: "In a **true experiment**, the researcher manipulates the IV and uses **random allocation**; in a **quasi-experiment**, the IV is a pre-existing trait (e.g. age or clinical diagnosis) so random allocation is impossible, weakening Causality.",
        level: "SL",
      },
      {
        front: "Distinguish single-blind from double-blind experimental procedures.",
        back: "**Single-blind:** participants do not know their condition (reduces demand characteristics/placebo effects). **Double-blind:** neither participants nor the data-collecting researcher know condition allocation (also reduces experimenter expectancy bias).",
        level: "SL",
      },
      {
        front: "What is a double-barrelled survey question?",
        back: "A flawed questionnaire item that asks about **two separate issues in one question** (e.g. *'Is the canteen affordable and nutritious?'*), preventing accurate Measurement when respondents agree with only one part.",
        level: "SL",
      },
      {
        front: "Distinguish inductive from deductive thematic analysis.",
        back: "**Inductive** coding derives themes bottom-up directly from raw qualitative transcript data; **deductive** coding applies categories top-down from an existing psychological theory.",
        level: "SL",
      },
      {
        front: "What are the three independent dimensions used to classify an observation?",
        back: "1. **Naturalistic vs Controlled** (setting), 2. **Overt vs Covert** (participant awareness), and 3. **Participant vs Non-participant** (researcher role).",
        level: "SL",
      },
      {
        front: "What is the Hawthorne (reactivity) effect and how can triangulation address it?",
        back: "Participants alter their natural behaviour simply because they know they are being observed. **Methodological triangulation** cross-checks overt observation against anonymous surveys or interviews (or habituation periods).",
        level: "SL",
      },
      {
        front: "Distinguish anonymity from confidentiality.",
        back: "**Anonymity:** not even the researcher can link data to a specific person. **Confidentiality:** the researcher knows participant identities (e.g. during interviews) but protects them via pseudonyms and secure storage.",
        level: "SL",
      },
      {
        front: "Define Russell & Burch's 3Rs of animal research ethics.",
        back: "**Replacement** (use non-animal alternatives), **Reduction** (minimise animal numbers rigorously), and **Refinement** (minimise suffering and enhance welfare/housing).",
        level: "SL",
      },
      {
        front: "Distinguish emic from etic research perspectives (Perspective concept).",
        back: "**Emic** research studies behaviour from *inside* a single culture using local meanings; **etic** research seeks cross-cultural universals (risking imposed-etic Bias if Western tools are exported uncritically).",
        level: "HL",
      },
      {
        front: "Define researcher reflexivity and qualitative trustworthiness criteria.",
        back: "**Reflexivity** is transparent self-examination of how the researcher's identity/assumptions shape data. Trustworthiness rests on **credibility** (member checking, triangulation), **transferability** (thick description), **dependability** (audit trail), and **confirmability**.",
        level: "HL",
      },
    ],
    mustKnow: [
      "The 6 FA2027 Core Concepts are **Bias, Causality, Change, Measurement, Perspective, and Responsibility**.",
      "The 4 compulsory Class Practicals are **Experiments, Surveys/Questionnaires, Interviews, and Observations**.",
      "The FA2027 IA is a **Research Proposal** (max 2,200 words, ≥ 5-item appendix instrument, **NO data collection**).",
      "Correlation **never** establishes Causality on its own because of **bidirectional ambiguity** and **third (confounding) variables**.",
      "**Random allocation** builds internal validity (Causality); **random or stratified sampling** builds population validity (reduces sampling Bias).",
      "**Counterbalancing** (AB / BA) distributes order effects evenly across repeated-measures conditions.",
      "Observation reliability is verified by **inter-observer agreement**: {{(Agreements / Total) * 100}}, aiming for **≥ 80%**.",
      "**Member checking** (participant validation) and **triangulation** strengthen qualitative credibility without pretending qualitative data are purely objective.",
      "**Anonymity** ≠ **confidentiality**: interviews can be confidential, never truly anonymous to the interviewer.",
      "Minors require **parental/guardian consent** plus the minor's own **assent**, and debriefing never excuses severe preventable harm.",
    ],
    misconceptions: [
      {
        wrong: "A strong correlation like r = +0.85 proves that Variable X causes Variable Y.",
        right: "No correlation — however strong — proves Causality. X could cause Y, Y could cause X (reverse causation), or an unmeasured third variable Z could drive both.",
        level: "SL",
      },
      {
        wrong: "Random sampling and random allocation are interchangeable terms.",
        right: "**Random sampling** chooses *who enters the study* from the population (generalisation); **random allocation** assigns recruited participants *to IV conditions* (controlling participant variables).",
        level: "SL",
      },
      {
        wrong: "If a study is reliable (high inter-rater or test–retest consistency), it must also be valid.",
        right: "A flawed measure can be consistently wrong! For example, measuring intelligence by hat size has ~99% test–retest reliability yet zero construct validity.",
        level: "SL",
      },
      {
        wrong: "Interviews are anonymous as long as the researcher changes participants' names in the report.",
        right: "Changing names to pseudonyms ensures **confidentiality**, not **anonymity**, because the interviewer still knows who spoke during the session.",
        level: "SL",
      },
      {
        wrong: "Deception is always ethical so long as participants receive a debriefing afterward.",
        right: "Debriefing is mandatory after mild, scientifically justified deception, but it **never** justifies exposing participants to severe psychological or physical harm.",
        level: "SL",
      },
      {
        wrong: "For the FA2027 IB Psychology IA, students must run a live experiment and calculate p-values on collected data.",
        right: "Under the NEW FA2027 syllabus, the IA is strictly a **Research Proposal** (hypothetical design, max 2,200 words, ≥ 5-item tool in the appendix) — students do **NOT** collect data!",
        level: "SL",
      },
      {
        wrong: "A statistically significant result (p < 0.05) automatically proves the effect is large and practically important.",
        right: "With a very large sample size, tiny trivial differences can reach p < 0.05. Evaluating **Measurement** at HL requires checking **effect size** (e.g. Cohen's d) alongside statistical significance.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing generic one-line criticisms ('small sample', 'low ecological validity') instead of linking specific stimulus details to the **6 Core Concepts**.",
      "Forgetting to operationalise variables (writing 'IV: sleep; DV: memory' instead of 'IV: 4 hours vs 8 hours of monitored sleep; DV: words recalled out of 20 after 5 minutes').",
      "Calling a **quasi-experiment** (e.g. comparing teenagers vs adults) a 'true experiment' despite the absence of IV manipulation and random allocation.",
      "Describing an observation with only one word ('naturalistic') instead of specifying all three axes (setting, overt/covert, participant/non-participant) plus the sampling rule.",
      "Confusing **demand characteristics** (participants guessing the aim and altering behaviour) with **researcher/experimenter expectancy bias** (the researcher unconsciously cueing or mis-scoring results).",
      "Listing ethical guidelines mechanically without explaining *why* a specific breach matters in the unseen study (e.g. power imbalance when a teacher tests their own students).",
      "Suggesting a methodological improvement on Paper 2 without acknowledging the **trade-off** it introduces (e.g. moving from field to lab raises internal validity but lowers ecological realism).",
      "Using the word **'proves'** in psychology essays — empirical evidence *supports*, *suggests*, or *indicates*, because future replications or new perspectives can revise findings.",
    ],
    mnemonics: [
      {
        topic: "The 6 FA2027 Core Concepts",
        device: "BC–CM–PR — Bright Cognitive Clinicians Measure People Responsibly",
        explanation:
          "**B**ias · **C**ausality · **C**hange · **M**easurement · **P**erspective · **R**esponsibility — scan all six when reading any unseen Paper 2 study.",
        level: "SL",
      },
      {
        topic: "The 4 Compulsory Class Practicals",
        device: "E–S–I–O — Every Scientist Investigates Openly",
        explanation:
          "**E**xperiments · **S**urveys/Questionnaires · **I**nterviews · **O**bservations — the exact four methods assessed in Paper 2 and eligible for your IA Research Proposal.",
        level: "SL",
      },
      {
        topic: "Paper 2 Section B Paragraph Frame",
        device: "C–E–I–M",
        explanation:
          "**C**oncept named → **E**vidence quoted from unseen stimulus → **I**mpact on findings/ethics → **M**odification & trade-off weighed.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "The WEIRD Crisis in Behavioural Science",
        detail:
          "Henrich, Heine & Norenzayan (2010) showed that 96% of participants in top psychology journals came from Western industrialised nations representing roughly 12% of humanity — sparking a global shift toward cross-cultural **Perspective** and sampling **Bias** audits.",
        emoji: "🌍",
      },
      {
        title: "The Replication Crisis & Open Science",
        detail:
          "When the Open Science Collaboration (2015) attempted to replicate 100 landmark psychology studies, fewer than 40% reproduced the original statistically significant findings — driving pre-registration, open data, and sharper **Measurement** standards.",
        emoji: "🔬",
      },
      {
        title: "Double-Blind Randomised Clinical Trials",
        detail:
          "Before any antidepressant or digital therapy reaches patients, regulators require double-blind randomised placebo-controlled trials to separate true **Causality** from placebo expectancy and clinician confirmation **Bias**.",
        emoji: "💊",
      },
      {
        title: "UX Research & Ethical A/B Testing",
        detail:
          "Tech platforms run millions of online field experiments ('A/B tests') on feed layouts and notification timing — raising urgent **Responsibility** debates whenever users are manipulated emotionally without informed consent.",
        emoji: "📱",
      },
      {
        title: "Cross-Cultural Survey Translation (Back-Translation)",
        detail:
          "International wellbeing surveys run in Singapore, Japan, and Europe translate questionnaires into local languages and then independently *back-translate* them into English to protect **Measurement** construct validity across cultures.",
        emoji: "🗣️",
      },
    ],
    videos: [
      {
        title: "IB Psychology FA2027: The 6 Core Concepts Explained",
        channel: "YouTube Search · IB Psychology 2027",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+2027+six+concepts+bias+causality+measurement",
      },
      {
        title: "Experimental Designs, Counterbalancing & Controls in Psychology",
        channel: "YouTube Search · Research Methods",
        url: "https://www.youtube.com/results?search_query=psychology+independent+measures+repeated+measures+counterbalancing",
      },
      {
        title: "Qualitative Interviews, Thematic Analysis & Observational Triangulation",
        channel: "YouTube Search · Qualitative Psychology",
        url: "https://www.youtube.com/results?search_query=psychology+semi+structured+interview+thematic+analysis+observation+triangulation",
      },
      {
        title: "Research Ethics in Psychology: Informed Consent, Debriefing & the 3Rs",
        channel: "YouTube Search · Psychology Ethics",
        url: "https://www.youtube.com/results?search_query=psychology+research+ethics+informed+consent+debriefing+3Rs+animals",
      },
    ],
    formulas: [
      {
        name: "Inter-Observer Agreement (IOA %)",
        formula: "{{IOA (%) = (Agreements / Total) * 100}}",
        note: "Reliability benchmark in structured observations is typically ≥ 80% across ≥ 2 independent coders.",
        level: "SL",
      },
      {
        name: "Survey Response Rate (%)",
        formula: "{{Response Rate (%) = (Completed / Distributed) * 100}}",
        note: "Low response rates increase non-response sampling Bias.",
        level: "SL",
      },
      {
        name: "Proportional Stratified Subsample",
        formula: "{{n_stratum = (N_stratum / N_total) * n_sample}}",
        note: "Matches each subgroup's share in the sample to its exact share in the target population.",
        level: "SL",
      },
      {
        name: "Percentage Attrition (Dropout) Rate",
        formula: "{{Attrition (%) = ((N_start - N_end) / N_start) * 100}}",
        note: "High or uneven dropout in repeated-measures or longitudinal studies threatens internal validity and Bias.",
        level: "SL",
      },
      {
        name: "AB / BA Counterbalancing Split",
        formula: "Half 1: Condition A → Condition B  |  Half 2: Condition B → Condition A",
        note: "Distributes practice and fatigue order effects evenly across both IV levels in repeated-measures designs.",
        level: "SL",
      },
      {
        name: "Operationalisation Rule",
        formula: "Abstract Construct → Observable, Measurable Procedure + Units",
        note: "Essential for Measurement validity and replicability (e.g. 'memory' → 'words recalled out of 20 after 60 s').",
        level: "SL",
      },
      {
        name: "Causality Triad",
        formula: "IV Manipulation + Extraneous Control + Random Allocation ⇒ Causal Inference",
        note: "Missing any one link weakens Causality toward quasi-experimental or correlational evidence.",
        level: "SL",
      },
      {
        name: "The 6 FA2027 Core Concepts",
        formula: "Bias · Causality · Change · Measurement · Perspective · Responsibility",
        note: "Anchor Paper 1 ERQs, Paper 2 unseen-study evaluations, and IA justifications explicitly to ≥ 2 concepts.",
        level: "SL",
      },
      {
        name: "Russell & Burch's 3Rs (Animal Ethics)",
        formula: "Replacement · Reduction · Refinement",
        note: "Non-animal alternatives, minimum justified cohort size, and welfare-enhancing procedures.",
        level: "SL",
      },
      {
        name: "Qualitative Trustworthiness Quartet",
        formula: "Credibility · Transferability · Dependability · Confirmability",
        note: "Checked via member checking & triangulation, thick description, audit trails, and researcher reflexivity.",
        level: "HL",
      },
    ],
  },
};
