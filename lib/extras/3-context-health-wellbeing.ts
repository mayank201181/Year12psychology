import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "What links a wooden park bench in Harare, a colour-coded **Nutri-Grade** sticker on a Singapore iced tea, a 3.5 mm skin biopsy on an Alzheimer's caregiver, and a 2019 genetic replication of 62,000 genomes? Every single one proves that **Health and Well-being** can never be understood from brain chemistry, private thoughts, or society alone — it lives where all three collide.",

  didYouKnow: [
    "In the official **DSM-5 field trials**, chance-corrected inter-rater reliability (**Cohen's κ**) for Major Depressive Disorder was just **0.28** — far below the 0.60 benchmark — because overlapping symptoms like insomnia and fatigue blur diagnostic borders.",
    "When **Irving Kirsch et al. (2008)** used the US Freedom of Information Act to unlock unpublished FDA antidepressant trials, nearly half of all negative trials had never appeared in medical journals — exposing the scale of **publication bias**.",
    "In **Kiecolt-Glaser et al. (1995)**, women caring for relatives with Alzheimer's took **9.4 days longer** (**24% slower**) to heal a tiny 3.5 mm punch biopsy than matched controls — proving psychosocial stress leaves measurable molecular footprints in skin tissue.",
    "Massive modern genome-wide analyses (**Border et al., 2019**, *N* > 62,000) failed to replicate **Caspi et al.'s (2003)** famous single 5-HTTLPR gene × stress claim, transforming psychiatric genetics into **polygenic risk** science.",
    "Zimbabwe's **Friendship Bench** (**Chibanda et al., 2016**) trained community elders to deliver structured problem-solving therapy outdoors using the Shona concept *kufungisisa* ('thinking too much') — cutting clinical distress caseness at 6 months from **50%** down to **14%**.",
    "In **Hollon et al.'s (2005)** 12-month follow-up, patients who finished **CBT** relapsed at less than half the rate of patients who stopped **SSRIs** (**31% vs 76%**), because cognitive-restructuring skills keep working long after sessions end.",
  ],

  activities: [
    {
      title: "Two-Rater Diagnostic Concordance Audit",
      emoji: "📋",
      materials: [
        "1 partner (classmate or study buddy)",
        "6 short mixed-symptom case cards (insomnia, fatigue, worry, low mood, chest tightness, concentration loss)",
        "Paper & calculator",
      ],
      steps: [
        "Without talking, independently assign each of the 6 vignette cards either **MDD**, **GAD**, or **Comorbid MDD + GAD**.",
        "Reveal your classifications side by side and count how many of the 6 cards received the exact same label.",
        "Calculate your raw inter-rater concordance: {{(\"Agreements\" / 6) * 100}}.",
        "Highlight which specific symptoms triggered disagreements — notice how insomnia, fatigue, and concentration loss sit inside both diagnostic lists.",
      ],
      maths:
        "Even small **symptom overlap** pulls raw concordance down rapidly, and chance-corrected **Cohen's κ** ({{kappa = (P_o - P_e) / (1 - P_e)}}) is lower still — illustrating why DSM-5-TR and ICD-11 require structured interviews and cultural context.",
    },
    {
      title: "3-Column Cognitive Restructuring & Behavioural Experiment",
      emoji: "🧩",
      materials: [
        "Notebook or whiteboard",
        "One real (low-stakes) academic stressor from this week",
      ],
      steps: [
        "Column 1 — **Automatic Negative Thought**: Write the unfiltered stress thought (e.g. *'If I miss two quiz questions, I'm failing Psychology'*).",
        "Column 2 — **Spot the Triad & Distortion**: Label whether it targets Self, World, or Future (Beck's triad) and identify the distortion (catastrophizing, all-or-nothing thinking, overgeneralization).",
        "Column 3 — **Evidence-Tested Reappraisal & Action**: Write one balanced alternative grounded in past evidence, plus one 15-minute **behavioural activation** step to test it.",
      ],
      maths:
        "CBT accelerates lasting **Change** by lowering threat intensity in **primary appraisal** and raising perceived coping capacity in **secondary appraisal** (Lazarus & Folkman), down-regulating chronic HPA cortisol reactivity.",
    },
    {
      title: "Canteen Choice-Architecture & Health Belief Audit",
      emoji: "🥤",
      materials: [
        "Walk-through of your school canteen or local convenience store",
        "Checklist of Health Belief Model (HBM) barriers & nudges",
      ],
      steps: [
        "Count how many sugary drinks vs plain water/low-sugar options sit at **eye level** in the main fridge.",
        "Check whether front-of-pack labels (such as Singapore's **Nutri-Grade A–D** badges) are visible before pickup.",
        "Score perceived barriers (price, effort to locate water, peer norms) on a 1–5 scale.",
        "Design one zero-cost **nudge** (moving water to eye level) and one **upstream structural change** (subsidizing low-sugar drinks or banning Grade D ads on campus).",
      ],
      maths:
        "Measuring eye-level shelf share reveals why the **intention–behaviour gap** defeats poster campaigns: default choice architecture acts automatically on System 1 habits and reduces socioeconomic **Responsibility** gaps.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Addiction Loop: Incentive Sensitization ('Wanting' vs 'Liking') & Cue-Driven Relapse",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 330" role="img" aria-label="Biopsychosocial addiction cycle showing mesolimbic dopamine sensitization, tolerance, and cue reactivity">
  <rect width="640" height="330" rx="14" fill="#ffffff"/>
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15.5" font-weight="800" fill="#1c1630">Biopsychosocial Addiction Cycle: Wanting vs Liking</text>

  <!-- Node 1: Environmental & Digital Cues -->
  <rect x="200" y="46" width="240" height="54" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="320" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#4c1d95">1. Sociocultural &amp; Digital Cues</text>
  <text x="320" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b21b6">Peer norms · Stress · Push alerts · Variable-ratio apps</text>

  <!-- Arrow 1->2 -->
  <path d="M 440 73 Q 515 73 515 130" fill="none" stroke="#7c3aed" stroke-width="2.2"/>
  <polygon points="510,126 520,126 515,135" fill="#7c3aed"/>

  <!-- Node 2: Mesolimbic Dopamine Sensitization -->
  <rect x="398" y="135" width="222" height="66" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="1.8"/>
  <text x="509" y="157" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9a3412">2. VTA → Nucleus Accumbens</text>
  <text x="509" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7c2d12">Sensitized dopamine spikes drive</text>
  <text x="509" y="189" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#c2410c">intense cue-triggered "WANTING"</text>

  <!-- Arrow 2->3 -->
  <path d="M 515 201 Q 515 268 442 268" fill="none" stroke="#ea580c" stroke-width="2.2"/>
  <polygon points="446,263 446,273 437,268" fill="#ea580c"/>

  <!-- Node 3: Tolerance & Negative Reinforcement -->
  <rect x="198" y="236" width="240" height="68" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="318" y="257" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#991b1b">3. Tolerance &amp; Withdrawal</text>
  <text x="318" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">Hedonic "LIKING" falls · Negative</text>
  <text x="318" y="289" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">reinforcement traps use to avoid distress</text>

  <!-- Arrow 3->4 -->
  <path d="M 198 268 Q 124 268 124 205" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <polygon points="119,209 129,209 124,200" fill="#dc2626"/>

  <!-- Node 4: Cognitive Expectancies & AVE -->
  <rect x="20" y="135" width="222" height="66" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="131" y="157" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#075985">4. Cognitive Relapse Loop</text>
  <text x="131" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#0c4a6e">Low self-efficacy · Prefrontal fatigue</text>
  <text x="131" y="189" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1">Abstinence Violation Effect (1 slip → relapse)</text>

  <!-- Arrow 4->1 -->
  <path d="M 124 135 Q 124 73 196 73" fill="none" stroke="#0284c7" stroke-width="2.2"/>
  <polygon points="192,68 192,78 201,73" fill="#0284c7"/>

  <!-- Center Intervention Box -->
  <rect x="256" y="138" width="128" height="60" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="1.8"/>
  <text x="320" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#14532d">Break the Loop:</text>
  <text x="320" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534">CBT cue-coping +</text>
  <text x="320" y="188" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534">structural limits</text>
</svg>`,
      caption:
        "Berridge & Robinson's Incentive Sensitization integrated with classical cue reactivity, negative reinforcement, and Marlatt's Abstinence Violation Effect.",
    },
    {
      title: "Health Promotion Impact Pyramid: Individual Persuasion vs Structural Responsibility",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="Health promotion pyramid comparing downstream individual counselling with midstream nudges and upstream structural policies">
  <rect width="640" height="310" rx="14" fill="#ffffff"/>
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15.5" font-weight="800" fill="#1c1630">Health Promotion Pyramid: Individual Effort vs Population Reach</text>

  <!-- Top tier -->
  <polygon points="320,48 220,122 420,122" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="320" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#4c1d95">Downstream Education</text>
  <text x="320" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#5b21b6">HBM/TPB leaflets &amp; coaching</text>

  <!-- Middle tier -->
  <polygon points="220,126 420,126 490,202 150,202" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.8"/>
  <text x="320" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#115e59">Midstream Choice Architecture (Nudges)</text>
  <text x="320" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#134e4a">Nutri-Grade labels · Opt-out defaults · Campus vaccine booths</text>
  <text x="320" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#0f766e">Lowers perceived barriers &amp; narrows intention–behaviour gap</text>

  <!-- Base tier -->
  <polygon points="150,206 490,206 565,288 75,288" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="320" y="236" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d">Upstream Structural Policy &amp; Social Equity</text>
  <text x="320" y="255" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#166534">Sugar/tobacco taxes · Flavour bans · Safe parks · Fair housing &amp; healthcare</text>
  <text x="320" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">Widest population Change · Lowest individual willpower burden · High Responsibility</text>

  <!-- Side arrows -->
  <line x1="48" y1="278" x2="48" y2="60" stroke="#c2410c" stroke-width="2"/>
  <polygon points="43,66 53,66 48,55" fill="#c2410c"/>
  <text x="40" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c" transform="rotate(-90 40 172)">Individual effort needed</text>

  <line x1="592" y1="60" x2="592" y2="278" stroke="#15803d" stroke-width="2"/>
  <polygon points="587,272 597,272 592,283" fill="#15803d"/>
  <text x="602" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" transform="rotate(90 602 172)">Population reach &amp; equity</text>
</svg>`,
      caption:
        "Why upstream policies and choice-architecture nudges complement individual HBM/TPB education to achieve equitable population health Change.",
    },
  ],

  history: {
    title: "From Asylum Labels to the Biopsychosocial Revolution",
    story:
      "In the late 19th century, German psychiatrist **Emil Kraepelin** tried to model psychiatry strictly on infectious-disease medicine — sorting asylum patients into rigid biological categories. For decades, that purely biomedical blueprint dominated hospitals, leaving little room for cognitive meaning, chronic poverty, or cultural idioms of distress. Two turning points transformed the field: first, **David Rosenhan's (1973)** provocative pseudopatient audit shocked clinicians into asking how diagnostic labels bend human perception; second, internist **George Engel (1977)** published a landmark *Science* paper challenging medicine to adopt the **Biopsychosocial Model**, arguing that biology, mind, and society act as an indivisible system. Over the next half-century, Aaron Beck's cognitive therapy, Janice Kiecolt-Glaser's psychoneuroimmunology lab, Arthur Kleinman's cross-cultural psychiatry, and Dixon Chibanda's **Friendship Bench** in Harare turned Engel's vision into rigorous empirical science — directly shaping the integrated **Health and Well-being** Compulsory Context you study in IB Psychology (FA2027) today.",
  },
};
