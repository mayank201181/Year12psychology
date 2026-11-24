import type { TopicExtras } from "../types";

const SVG_IWM_LOOP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260" role="img" aria-label="Flow loop diagram showing how early caregiver responsiveness shapes Bowlby Internal Working Model of self and others, influencing later social expectations and open to revision through supportive relationships">
  <rect x="0" y="0" width="600" height="260" fill="#ffffff"/>
  <text x="300" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Bowlby's Internal Working Model (IWM): Dynamic Feedback Loop</text>
  <rect x="28" y="64" width="150" height="72" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="103" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#5b21b6">Early Caregiving</text>
  <text x="103" y="109" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">Consistent, warm vs</text>
  <text x="103" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">distant / unpredictable</text>

  <rect x="225" y="54" width="150" height="92" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="300" y="79" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#14532d">Cognitive IWM</text>
  <text x="300" y="97" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">1. Self-Worth Schema</text>
  <text x="300" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">2. Trust-in-Others</text>
  <text x="300" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d">Relational Template</text>

  <rect x="422" y="64" width="150" height="72" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
  <text x="497" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#075985">Later Relationships</text>
  <text x="497" y="109" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">Peer trust, identity</text>
  <text x="497" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1c1630">base &amp; romantic bonds</text>

  <line x1="178" y1="100" x2="219" y2="100" stroke="#7c3aed" stroke-width="2.2"/>
  <polygon points="223,100 215,95 215,105" fill="#7c3aed"/>
  <line x1="375" y1="100" x2="416" y2="100" stroke="#15803d" stroke-width="2.2"/>
  <polygon points="420,100 412,95 412,105" fill="#15803d"/>

  <path d="M 497 136 L 497 204 L 300 204 L 300 152" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-dasharray="6,4"/>
  <polygon points="300,148 295,156 305,156" fill="#ea580c"/>
  <rect x="148" y="188" width="304" height="44" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.6"/>
  <text x="300" y="206" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#92400e">Core Concept: Change (Earned Security)</text>
  <text x="300" y="222" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Supportive mentors, adoptive homes &amp; therapy can revise the IWM</text>
</svg>`;

const SVG_RESILIENCE_LAYERS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 270" role="img" aria-label="Three concentric protective shield layers illustrating Werner Kauai biological, cognitive, and sociocultural resilience factors buffering childhood adversity">
  <rect x="0" y="0" width="600" height="270" fill="#ffffff"/>
  <text x="300" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Werner's Kauai Model: Three Protective Layers of Resilience</text>
  <rect x="34" y="44" width="532" height="206" rx="18" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
  <text x="300" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#075985">Sociocultural Layer: Stable Adult Mentor, Extended Family &amp; Community</text>
  <rect x="86" y="84" width="428" height="146" rx="16" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="300" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#5b21b6">Cognitive Layer: Internal Locus of Control, Literacy &amp; Problem-Solving</text>
  <rect x="148" y="126" width="304" height="84" rx="14" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="300" y="154" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d">Biological Layer</text>
  <text x="300" y="174" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Easy affectionate temperament, robust</text>
  <text x="300" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">early health &amp; flexible stress reactivity</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "At age two, a toddler's prefrontal cortex holds roughly **twice as many synaptic connections** as an adult university professor's—yet losing half of those connections over the next twenty years is precisely what powers faster abstract reasoning! Meanwhile, across 40 years on the island of Kauai, Emmy Werner discovered that one-third of newborns facing severe poverty and family chaos grew into thriving, compassionate adults. Context 2: Human Development reveals how biology, active schemas, and cultural mentors constantly rewrite what we thought was 'fixed' from birth.",
  didYouKnow: [
    "Prefrontal cortex synaptic pruning and myelination do not finish at age 18—structural MRI studies (Petanjek et al., 2011) show fine-tuning continues well into the mid-20s.",
    "In **van IJzendoorn & Kroonenberg's (1988)** meta-analysis of 1,990 infants across 8 nations, variation *within* the same country was roughly **1.5× larger** than variation *between* countries—meaning two neighbourhoods in the same city can differ more in Strange Situation scores than two countries!",
    "**Renee Baillargeon (1991)** discovered that 3.5-month-olds stare noticeably longer when a tall carrot magically fails to appear in a cutout window—showing babies track hidden objects months before they have the motor coordination to lift a blanket.",
    "In **Chein et al.'s (2011)** simulated driving experiment, merely knowing two friends were watching in the next room doubled adolescent risk-taking and lit up the ventral striatum—without altering adult drivers at all.",
    "Before creating the Baltimore Strange Situation, **Mary Ainsworth** spent months doing naturalistic home observations in rural Uganda (1954–1955), watching how Ganda mothers responded to infants in everyday village life.",
    "In **Emmy Werner's 40-year Kauai study**, even high-risk teenagers who struggled at age 18 often achieved major recovery by age 32–40 through supportive partners, further education, or military/community mentorship—proof of lifelong **Change**.",
  ],
  activities: [
    {
      title: "Conservation & Perspective-Taking Mini-Audit (Piaget vs Hughes)",
      emoji: "🧪",
      materials: [
        "Two identical short clear glasses and one tall narrow glass",
        "Water with a drop of food colouring",
        "Two small toy figurines and a folded cardboard cross-wall (for Hughes's layout)",
      ],
      steps: [
        "With classmates acting as observers (or with younger siblings *only* after parental consent + child assent!), demonstrate the classic liquid conservation pour and note the exact wording used ('Are they the same, or does one have more?').",
        "Compare Piaget's standard wording (repeating the question twice after pouring—which Samuel & Bryant, 1984 showed nudges children to think their first answer was wrong!) against a single-question version.",
        "Sketch a tabletop map of Hughes's (1975) intersecting walls and test how quickly classmates can identify the 'blind spot' hidden from two observers, reflecting on why 'human sense' improves **Measurement** validity.",
      ],
      maths:
        "Calculate the percentage of correct responses under standard two-question wording versus single-question wording ({{n_\"correct\" / N * 100%}}) and compare the percentage-point shift to evaluate demand characteristics (**Bias**).",
    },
    {
      title: "Strange Situation Inter-Rater Reliability Coding Lab",
      emoji: "🎥",
      materials: [
        "Four short anonymized written reunion vignettes (Type B, Type A, Type C, Type D)",
        "A 4-row coding checklist (Exploration, Separation Distress, Stranger Response, Reunion Behaviour)",
      ],
      steps: [
        "Pair up with a classmate; each student independently classifies all 4 vignettes into Type B, Type A, Type C, or Type D without conferring.",
        "Compare your classifications side-by-side and compute your raw percentage agreement across the items.",
        "Re-read the Type A and Type C vignettes imagining first a North German setting (encouraging independence) and then a Japanese setting (rare maternal separation), discussing how cultural **Perspective** reshapes interpretation even when inter-rater reliability is 100%!",
      ],
      maths:
        "Compute Inter-Rater Percentage Agreement = {{(\"Agreements\" / \"Total Judgements\") * 100%}}. Notice how a test can achieve 100% reliability while still lacking cross-cultural construct validity (**Measurement**).",
    },
    {
      title: "Cohort-Effect Detective: Generational Timeline Comparison",
      emoji: "📊",
      materials: [
        "A sheet of paper or whiteboard",
        "Three birth cohorts: Born 1965, Born 1995, Born 2010",
      ],
      steps: [
        "Pick one cognitive or identity variable—such as smartphone navigation speed, mental-health vocabulary, or age of choosing a career.",
        "List three historical/cultural shifts (schooling, digital exposure, parenting norms) that each cohort experienced by age 16.",
        "Draw a quick 3 × 3 cross-sequential grid (Birth Cohort × Testing Year) and circle the two cells that let you hold chronological age constant at age 16 to separate genuine ageing from a **cohort effect**.",
      ],
      maths:
        "Use the identity {{\"Observed Cross-Sectional Gap\" = \"True Age Change\" + \"Cohort Effect\"}} to test how a +8 point younger-cohort digital advantage can disguise a real +5 point age gain as an apparent −3 point decline!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Bowlby's Internal Working Model & Earned Security Feedback Loop",
      svg: SVG_IWM_LOOP,
      caption:
        "Bowlby's Internal Working Model translates early caregiving into cognitive schemas of self-worth and trust—yet remains open to revision (**Change**) through later supportive bonds.",
    },
    {
      title: "Werner's Kauai Multi-Level Protective Shield",
      svg: SVG_RESILIENCE_LAYERS,
      caption:
        "Resilience is not a solitary biological superpower: Biological, Cognitive, and Sociocultural protective factors layer together to buffer cumulative childhood adversity.",
    },
  ],
  history: {
    title: "From Uganda to Baltimore: How Mary Ainsworth Built Attachment Research on Naturalistic Fieldwork",
    story:
      "Many students assume Ainsworth's Strange Situation started inside a sterile American laboratory. In reality, its roots lie in **rural Uganda (1954–1955)**, where Mary Ainsworth spent nine months observing 28 Ganda mothers and infants inside their everyday village homes—an immersive, **emic**-leaning field study! Watching babies crawl outward to explore and glance back at responsive mothers gave Ainsworth the concept of the **secure base** and showed that maternal *sensitivity*—not simply hours spent together—predicted calm confidence. Only a decade later, back in Baltimore, did she condense those naturalistic patterns into the 20-minute laboratory Strange Situation so researchers could score reunion responses systematically. Ironically, when later teams exported that Baltimore lab rubric back to other cultures without adapting it to local routines, they turned an observation born in East Africa into an **imposed etic**—a vivid historical reminder of why IB Psychology FA2027 pairs **Measurement** closely with cultural **Perspective**.",
  },
};
