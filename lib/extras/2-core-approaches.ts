import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Why can a London taxi driver's hippocampus physically expand over four years, why does a single verb ('smashed' vs 'contacted') make nearly a third of witnesses remember glass that never shattered, and why will teenagers give away real money just to beat a coin-flip rival team? **Topic 2** gives you the Biological, Cognitive, and Sociocultural machinery behind every human action.",
  didYouKnow: [
    "In **Woollett & Maguire's (2011)** longitudinal follow-up, London taxi trainees who *failed* 'The Knowledge' showed zero posterior hippocampal growth — proving the brain change wasn't an innate gift, it was earned by 3–4 years of intense spatial practice.",
    "Your brain generates roughly **86 billion neurons** connected by over **100 trillion synapses** — yet during adolescence, **synaptic pruning** trims nearly 40–50% of excess prefrontal connections to make surviving circuits faster and sharper.",
    "In **Tversky & Kahneman's (1974)** classic wheel-of-fortune study, participants *watched* the wheel spin randomly to 10 or 65 right in front of them — yet the arbitrary number still shifted their median estimate of African UN nations by a massive **20 percentage points** (25% vs 45%)!",
    "In **Talarico & Rubin's (2003)** 9/11 flashbulb memory study, even students whose recalled story *contradicted their own written account from 12 September 2001* remained almost 100% confident their distorted memory was completely accurate.",
    "In **Tajfel et al. (1971)**, boys sorted purely by whether they preferred Paul Klee or Wassily Kandinsky paintings gave up higher cash payouts for their own group simply so they could widen the margin over the rival team.",
    "Singapore's multilingual student communities routinely practise **bicultural frame-switching** — shifting seamlessly between heritage cultural norms at family dinners and international school norms in class, exemplifying Berry's **Integration** strategy.",
  ],
  activities: [
    {
      title: "Classroom Dual-Task Working Memory Crash Test",
      emoji: "🧩",
      materials: [
        "Timer or stopwatch",
        "Sheet of paper and pen",
        "A partner to read out 8-digit strings and simple spatial mazes",
      ],
      steps: [
        "**Condition A (Cross-modality — Phonological + Visuospatial)**: Listen to a partner read a 6-word shopping list while tracing a simple printed maze with a pen, then recall the words.",
        "**Condition B (Same-modality — Dual Phonological)**: Listen to a new 6-word list while repeatedly saying *'the, the, the...'* aloud (articulatory suppression), then recall the words.",
        "**Condition C (Same-modality — Dual Visuospatial)**: Trace a maze while trying to mentally count the corners of a capital block letter **F** from memory.",
        "Record your recall percentage and maze errors across all three conditions and compare with your partner.",
      ],
      maths:
        "Calculate the percentage-point accuracy drop from Condition A (separate slave systems) to Conditions B & C (competing for the same slave system): {{Delta = P_A - P_B}}. Large drops in B and C directly replicate **Baddeley et al.'s (1975)** dual-task evidence against MSM's single unitary STM!",
    },
    {
      title: "The 60-Second Anchoring Classroom Mini-Lab",
      emoji: "⚓",
      materials: [
        "Two folded slips of paper per classmate (Half labelled '15', half labelled '90')",
        "Calculator or spreadsheet to find group medians",
      ],
      steps: [
        "Randomly hand half your study group the **Low Anchor** slip: *'Is the height of Singapore's Marina Bay Sands SkyPark higher or lower than **90 metres**? Now write your best estimate in metres.'*",
        "Hand the other half the **High Anchor** slip: *'Is the height of Marina Bay Sands SkyPark higher or lower than **450 metres**? Now write your best estimate in metres.'*",
        "Ensure neither group sees the other slip, collect all written estimates privately, and reveal the true height (**~200 metres**).",
        "Compute the **median** estimate for each group and compare the gap.",
      ],
      maths:
        "Compute the anchoring shift index: {{(\"Median\"_{high} - \"Median\"_{low}) / (450 - 90)}}. Even when peers know the prompt number is arbitrary, System 1 latches onto the anchor and System 2 adjusts insufficiently (**Tversky & Kahneman, 1974**).",
    },
    {
      title: "Reconstructive Serial-Story Telephone (Bartlett, 1932)",
      emoji: "📜",
      materials: [
        "A short 120-word folk story containing 4–5 unfamiliar cultural terms",
        "4 friends lined up sequentially, plus index cards",
      ],
      steps: [
        "Have Person 1 read the original 120-word passage silently for 60 seconds, put it away, wait 2 minutes, and write it from memory.",
        "Pass Person 1's written version to Person 2 (never showing the original), repeat through Person 4.",
        "Compare Person 4's version word-by-word against the original passage.",
        "Code every change into Bartlett's categories: **Levelling** (omissions/word count drop), **Sharpening** (exaggerated focal details), and **Assimilation** (cultural substitutions).",
      ],
      maths:
        "Calculate percentage word retention: {{(\"Words\"_4 / 120) * 100}}. Expect word length to fall by **40–60%** while unfamiliar cultural concepts morph into familiar everyday terms — a live demonstration of reconstructive **Bias**!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Biopsychosocial Triangulation (Core Concept: Perspective)",
      svg: `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn-style triangulation diagram showing Biological, Cognitive, and Sociocultural approaches overlapping around a shared human behaviour in the centre">
  <rect x="0" y="0" width="540" height="290" fill="#ffffff" rx="12"/>
  <text x="270" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1c1630">Biopsychosocial Triangulation (IB Core Concept: Perspective)</text>

  <!-- Three translucent overlapping circles -->
  <circle cx="270" cy="112" r="76" fill="#ede9fe" fill-opacity="0.72" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="206" cy="192" r="76" fill="#e0f2fe" fill-opacity="0.72" stroke="#0369a1" stroke-width="2"/>
  <circle cx="334" cy="192" r="76" fill="#fef3c7" fill-opacity="0.72" stroke="#d97706" stroke-width="2"/>

  <!-- Biological label -->
  <text x="270" y="72" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#4c1d95">BIOLOGICAL</text>
  <text x="270" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Neuroplasticity · ACh / 5-HT</text>
  <text x="270" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Cortisol / Oxytocin · G×E</text>

  <!-- Cognitive label -->
  <text x="176" y="200" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0c4a6e">COGNITIVE</text>
  <text x="176" y="216" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0369a1">MSM &amp; Working Memory</text>
  <text x="176" y="228" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0369a1">Schemas · System 1 / 2</text>

  <!-- Sociocultural label -->
  <text x="364" y="200" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#92400e">SOCIOCULTURAL</text>
  <text x="364" y="216" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#78350f">SIT · Bandura SCT</text>
  <text x="364" y="228" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#78350f">Conformity · Berry Culture</text>

  <!-- Centre hub -->
  <circle cx="270" cy="162" r="34" fill="#ffffff" stroke="#1c1630" stroke-width="2"/>
  <text x="270" y="159" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Human</text>
  <text x="270" y="172" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Behaviour</text>

  <!-- Footer -->
  <text x="270" y="280" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Top-band IB essays explain how approaches interact — avoiding biological, cognitive, or cultural reductionism.</text>
</svg>`,
      caption:
        "No single approach holds the entire truth: integrating neural hardware, mental representations, and cultural context embodies the IB Core Concept of Perspective.",
    },
    {
      title: "The 6 FA 2027 Core Concepts Applied to Topic 2",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six-card visual summary mapping Bias, Causality, Change, Measurement, Perspective, and Responsibility to Topic 2 studies">
  <rect x="0" y="0" width="560" height="220" fill="#ffffff" rx="12"/>
  <text x="280" y="22" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Weaving the 6 Core Concepts into Core Approaches Essays</text>

  <!-- Row 1 -->
  <rect x="16" y="36" width="168" height="76" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#9a3412">BIAS</text>
  <text x="100" y="73" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#431407">Heuristics (Linda / Framing)</text>
  <text x="100" y="87" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#431407">Schema distortion (Loftus)</text>
  <text x="100" y="101" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#431407">WEIRD lab samples (Asch)</text>

  <rect x="196" y="36" width="168" height="76" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#4c1d95">CAUSALITY</text>
  <text x="280" y="73" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#1c1630">Maguire (2000) correlation</text>
  <text x="280" y="87" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#1c1630">vs Antonova (2011) placebo</text>
  <text x="280" y="101" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#1c1630">&amp; Caspi (2003) G×E</text>

  <rect x="376" y="36" width="168" height="76" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="460" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d">CHANGE</text>
  <text x="460" y="73" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#166534">Draganski (2004) pruning</text>
  <text x="460" y="87" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#166534">Bond &amp; Smith US decline</text>
  <text x="460" y="101" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#166534">Berry acculturation shifts</text>

  <!-- Row 2 -->
  <rect x="16" y="126" width="168" height="76" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
  <text x="100" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0c4a6e">MEASUREMENT</text>
  <text x="100" y="163" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#082f49">fMRI BOLD indirect lag</text>
  <text x="100" y="177" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#082f49">Talarico Day-1 baseline</text>
  <text x="100" y="191" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#082f49">Unobservable schemas / CE</text>

  <rect x="196" y="126" width="168" height="76" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="280" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e">PERSPECTIVE</text>
  <text x="280" y="163" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Bio + Cog + Soc integration</text>
  <text x="280" y="177" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Zhu cultural neuroscience</text>
  <text x="280" y="191" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Gigerenzer vs Kahneman</text>

  <rect x="376" y="126" width="168" height="76" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="1.5"/>
  <text x="460" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">RESPONSIBILITY</text>
  <text x="460" y="163" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#500724">Milgram &amp; Bandura ethics</text>
  <text x="460" y="177" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#500724">Eyewitness court reforms</text>
  <text x="460" y="191" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#500724">Equitable host integration</text>
</svg>`,
      caption:
        "Quick cheat-sheet for turning descriptive study knowledge into high-scoring FA 2027 concept-linked evaluation.",
    },
  ],
  history: {
    title: "From One Patient's Surgery to the Biopsychosocial Revolution",
    story:
      "In 1953, a 27-year-old assembly-line worker known for decades only as **H.M.** (Henry Molaison) underwent experimental surgery to silence life-threatening seizures. Surgeon William Scoville removed both hippocampi. The seizures subsided, yet Brenda Milner soon discovered something extraordinary: Henry could hold a phone number for 20 seconds and even master a mirror-drawing motor task across days, yet could never form a single new conscious memory of meeting her! That single case cracked open the Biological and Cognitive approaches simultaneously — proving memory is not one monolithic faculty, and inspiring Atkinson & Shiffrin's Multi-Store Model and Baddeley's Working Memory Model.\n\nMeanwhile, two post-war revolutions reshaped human reasoning and social psychology. In the 1960s–70s, **Henri Tajfel** — a Polish-Jewish Holocaust survivor seeking to understand how ordinary people become capable of intergroup cruelty — expected his 'minimal group' baseline to show zero bias so he could gradually add conflict factors; instead, mere arbitrary labels sparked immediate in-group favouritism. Around the same time in Jerusalem, **Daniel Kahneman** and **Amos Tversky** discovered that even trained statisticians fall for intuitive System 1 shortcuts, earning Kahneman the 2002 Nobel Prize in Economics. Today, IB Psychology unites all three lineages into one coherent biopsychosocial science.",
  },
};
