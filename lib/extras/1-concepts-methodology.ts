import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Every week, viral posts promise that a single habit — cold plunges, espresso shots, or 60-second brain hacks — will 'rewire your brain.' The six FA2027 Core Concepts and four Class Practicals are your **scientific lie-detector kit**: once you know how to audit Bias, Causality, Change, Measurement, Perspective, and Responsibility, no sloppy headline can fool you again.",
  didYouKnow: [
    "**The WEIRD 96% Shock:** Anthropologist Joseph Henrich and colleagues (2010) audited six top psychology journals and discovered that **96% of participants** came from Western, Educated, Industrialised, Rich, Democratic societies representing just **12% of the world's population** — and 68% were from the United States alone!",
    "**Clever Hans the 'Maths Horse' (1904):** A horse in Berlin seemed able to tap out square roots with his hoof until psychologist Oskar Pfungst ran a **single-blind** test: whenever the questioner did not know the answer, Hans failed! Hans had been reading microscopic eyebrow twitches — giving psychology its earliest demonstration of **experimenter expectancy bias**.",
    "**Where the 'Hawthorne Effect' Got Its Name:** In the 1920s–30s at Western Electric's Hawthorne Works near Chicago, workers' productivity jumped whether engineers made factory lights *brighter* or *dimmer* — revealing how powerfully knowing you are observed (**reactivity**) alters human behaviour.",
    "**The 2015 Open Science Wake-Up Call:** When 270 psychologists attempted to replicate 100 landmark psychology studies (Open Science Collaboration, 2015), only about **36–39%** reproduced statistically significant results — accelerating pre-registration, open datasets, and the modern focus on **Measurement** and **Bias**.",
    "**Why Russell & Burch's 3Rs Still Govern Labs 65+ Years Later:** In 1959, zoologist William Russell and microbiologist Rex Burch published *The Principles of Humane Experimental Technique*, introducing **Replacement, Reduction, and Refinement** — now legally embedded in animal research ethics worldwide.",
  ],
  activities: [
    {
      title: "The 60-Second Headline Autopsy",
      emoji: "🗞️",
      materials: [
        "3 real psychology or wellness news headlines from the past month",
        "A sheet divided into six boxes: Bias, Causality, Change, Measurement, Perspective, Responsibility",
      ],
      steps: [
        "Read only the headline first and write down what causal claim it implies.",
        "Open the linked original study abstract: note the method (Experiment, Survey, Interview, or Observation), sample size, and participant demographics.",
        "Fill at least three of the six Core Concept boxes with concrete evidence from the abstract — e.g. 'self-reported online poll of 80 US undergraduates' under Bias and Causality.",
        "Rewrite the headline so it stays 100% faithful to the actual evidence without overclaiming.",
      ],
      maths:
        "Practices the exact **Paper 2 Section B C–E–I–M** reflex (Concept → Evidence → Impact → Redesign) and trains you to spot when correlational `r` values are misreported as causal proof.",
    },
    {
      title: "Inter-Observer Agreement Calibration Lab",
      emoji: "⏱️",
      materials: [
        "A 3-minute muted public video clip of a classroom debate or team sport huddle",
        "One study partner and two identical coding sheets",
      ],
      steps: [
        "Round 1 (Vague): Independently tally how many times you see 'leadership' during the 3-minute clip without talking, then compare totals.",
        "Now write 4 sharp, mutually exclusive **operationalised behavioural categories** (e.g. 'points toward board', 'asks an open question', 'nods while peer speaks', 'summarises group decision').",
        "Round 2 (Operationalised): Code the same 3 minutes split into 18 ten-second time-sampling intervals independently.",
        "Count intervals where both coders chose the exact same category and compute {{IOA (%) = (Agreements / 18) * 100}}. Compare Round 1 chaos with Round 2 reliability!",
      ],
      maths:
        "Directly demonstrates why operationalised coding schedules push {{IOA (%) = (Agreements / Total) * 100}} toward the **≥ 80%** reliability standard — ideal prep for Paper 2 Class Practical reflections.",
    },
    {
      title: "Spot the Sabotaged Survey (IA Tool Stress-Test)",
      emoji: "📋",
      materials: [
        "Your draft ≥ 5-item questionnaire or interview guide for a Class Practical or FA2027 IA Research Proposal",
        "Three highlighters (red = leading/loaded, yellow = double-barrelled, blue = reverse-scored)",
      ],
      steps: [
        "Read each item aloud as if you were a tired, sceptical Year 12 respondent who disagrees with half the sentence.",
        "Highlight any emotional or nudging phrase ('clearly', 'obviously', 'harmful') in red and neutralise it.",
        "Highlight any 'and' connecting two separate ideas in yellow and split it into two clean items.",
        "Ensure at least 2 of your Likert statements are **reverse-scored** (blue) so mechanical 'yea-saying' (acquiescence bias) is caught immediately.",
      ],
      maths:
        "Strengthens **construct validity** (Measurement) and **Bias** control for the mandatory ≥ 5-item appendix instrument in your **FA2027 Research Proposal IA** (without collecting data!).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Reliability vs Validity: The Psychology Dartboard",
      svg: `<svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three dartboards contrasting low reliability and low validity, high reliability but low validity, and high reliability with high validity">
  <rect x="0" y="0" width="540" height="210" rx="14" fill="#ffffff"/>
  <text x="270" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Measurement: Reliability vs Construct Validity</text>
  <!-- Board 1: Scattered -->
  <g transform="translate(95, 108)">
    <circle r="54" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <circle r="35" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle r="15" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
    <circle cx="-30" cy="-22" r="4.5" fill="#ea580c"/>
    <circle cx="28" cy="-18" r="4.5" fill="#ea580c"/>
    <circle cx="-18" cy="31" r="4.5" fill="#ea580c"/>
    <circle cx="34" cy="24" r="4.5" fill="#ea580c"/>
    <circle cx="4" cy="-40" r="4.5" fill="#ea580c"/>
    <text x="0" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#c2410c">Unreliable &amp; Invalid</text>
    <text x="0" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Random noise (no consistency)</text>
  </g>
  <!-- Board 2: Tight off-centre -->
  <g transform="translate(270, 108)">
    <circle r="54" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <circle r="35" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle r="15" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
    <circle cx="25" cy="-24" r="4.5" fill="#d97706"/>
    <circle cx="32" cy="-19" r="4.5" fill="#d97706"/>
    <circle cx="22" cy="-15" r="4.5" fill="#d97706"/>
    <circle cx="30" cy="-28" r="4.5" fill="#d97706"/>
    <circle cx="27" cy="-21" r="4.5" fill="#d97706"/>
    <text x="0" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#a16207">Reliable, NOT Valid</text>
    <text x="0" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Consistently misses construct</text>
  </g>
  <!-- Board 3: Tight bullseye -->
  <g transform="translate(445, 108)">
    <circle r="54" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <circle r="35" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle r="15" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
    <circle cx="-4" cy="-3" r="4.5" fill="#15803d"/>
    <circle cx="5" cy="2" r="4.5" fill="#15803d"/>
    <circle cx="0" cy="-6" r="4.5" fill="#15803d"/>
    <circle cx="-3" cy="5" r="4.5" fill="#15803d"/>
    <circle cx="4" cy="-4" r="4.5" fill="#15803d"/>
    <text x="0" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#15803d">Reliable &amp; Valid</text>
    <text x="0" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Consistent AND on-target</text>
  </g>
</svg>`,
      caption:
        "High reliability is necessary for validity, but never sufficient — a poorly operationalised metric can be consistently wrong.",
    },
    {
      title: "The Sampling Funnel: From Target Population to Generalisation",
      svg: `<svg viewBox="0 0 540 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Funnel diagram contrasting biased WEIRD convenience recruitment against representative stratified or random sampling">
  <rect x="0" y="0" width="540" height="205" rx="14" fill="#ffffff"/>
  <text x="270" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Sampling Strategy &amp; Population Validity</text>
  <!-- Target Population Box -->
  <rect x="20" y="42" width="142" height="140" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="91" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b21b6">Target Population</text>
  <text x="91" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Diverse ages, cultures,</text>
  <text x="91" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">SES &amp; language groups</text>
  <circle cx="52" cy="128" r="7" fill="#7c3aed"/>
  <circle cx="78" cy="128" r="7" fill="#0d9488"/>
  <circle cx="104" cy="128" r="7" fill="#db2777"/>
  <circle cx="130" cy="128" r="7" fill="#ea580c"/>
  <circle cx="65" cy="154" r="7" fill="#2563eb"/>
  <circle cx="91" cy="154" r="7" fill="#15803d"/>
  <circle cx="117" cy="154" r="7" fill="#d97706"/>
  <!-- Upper Path: Stratified / Random -->
  <path d="M164 82 L212 68" stroke="#15803d" stroke-width="2" fill="none"/>
  <polygon points="210,63 219,66 212,73" fill="#15803d"/>
  <rect x="220" y="42" width="300" height="62" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="370" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">Random / Proportional Stratified Sample</text>
  <text x="370" y="79" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d">Preserves subgroup proportions → Lower Bias</text>
  <text x="370" y="94" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d">Stronger Population Validity</text>
  <!-- Lower Path: Convenience / WEIRD -->
  <path d="M164 142 L212 152" stroke="#c2410c" stroke-width="2" fill="none"/>
  <polygon points="212,147 219,154 210,157" fill="#c2410c"/>
  <rect x="220" y="120" width="300" height="62" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6"/>
  <text x="370" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9a3412">Convenience / WEIRD Volunteer Sample</text>
  <text x="370" y="157" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7c2d12">Over-represents accessible subgroup → Sampling Bias</text>
  <text x="370" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">Narrow Generalisability (Limit Claims!)</text>
</svg>`,
      caption:
        "Before generalising any Paper 2 study finding, check which path produced the sample.",
    },
  ],
  history: {
    title: "From Leipzig 1879 to Belmont 1979 to Open Science & FA2027",
    story:
      "When Wilhelm Wundt opened the world's first dedicated psychology laboratory in Leipzig in 1879, he insisted that mental processes must be operationalised and timed under standardised conditions — launching **Measurement** and **Causality** as scientific pillars. Yet for nearly a century, ethics lagged behind ambition: shocking mid-20th-century obedience and prison-role studies provoked international outrage and led to the landmark **Belmont Report (1979)**, enshrining Respect for Persons (informed consent), Beneficence (protection from harm), and Justice into modern institutional review boards. Two more 21st-century revolutions completed today's syllabus: Henrich's 2010 critique of **WEIRD** sampling **Bias** and the 2015 **Open Science Replication Crisis**. That is exactly why the NEW **IB Psychology FA2027** curriculum centres on six Core Concepts, hands-on Class Practicals, and a rigorous **Research Proposal IA** — training young psychologists to design ethical, culturally aware, replicable science *before* a single participant is ever recruited.",
  },
};
