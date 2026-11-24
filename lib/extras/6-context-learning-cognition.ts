import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why can a single word spoken *after* a traffic crash make a third of sober eyewitnesses swear they saw broken glass that never existed — and why does the study technique that *feels* easiest actually lose half your revision in seven days? Welcome to Context 4: where synapses, working-memory bottlenecks, and social contexts collide.",

  didYouKnow: [
    "Ivan Pavlov rarely used an actual brass handbell in his most famous St. Petersburg conditioning experiments — he far more frequently used metronomes, buzzers, whistles, and flashing lights because their exact timing could be measured precisely.",
    "John Garcia's landmark 1966 taste-aversion paper was initially rejected by major psychology journals because editors refused to believe rats could associate a flavour with nausea across hours-long delays, violating the dominant behaviourist dogma of equipotentiality.",
    "In Roediger & Karpicke's (2006) testing-effect study, students who reread passages four times rated their predicted one-week recall dramatically *higher* than retrieval-practice students — getting the true direction of memory retention completely backward.",
    "According to the Innocence Project, mistaken eyewitness identifications contributed to roughly two-thirds of the first 375 DNA-exonerated wrongful convictions in the United States, propelling global adoption of double-blind lineups and the Cognitive Interview.",
    "Chess grandmasters can reconstruct a 25-piece mid-game board after a five-second glance — yet when Chase & Simon (1973) placed the exact same pieces randomly on the board, masters' recall collapsed to near-novice levels, proving expertise lives in long-term schemas rather than a superhuman working-memory slot count.",
    "In Lehtonen et al.'s (2018) meta-analysis of 152 studies on bilingual executive control, correcting statistically for unpublished null studies (publication bias) shrank the reported domain-general bilingual advantage all the way to near zero.",
  ],

  activities: [
    {
      title: "The 60-Second Stroop Interference Mini-Lab",
      emoji: "🎨",
      materials: [
        "Stopwatch or phone timer",
        "Card A (Congruent): 20 colour words printed in matching ink (e.g., RED in red ink)",
        "Card B (Incongruent): 20 colour words printed in mismatched ink (e.g., RED in blue ink)",
      ],
      steps: [
        "Time a partner naming the **ink colour** (not reading the word) down all 20 items on Card A; record `T_congruent` in seconds.",
        "Immediately repeat with Card B (incongruent ink colours); record `T_incongruent` in seconds and count any self-corrected slips.",
        "Divide each total time by 20 and multiply by 1,000 to estimate mean milliseconds per item (`RT_congruent` and `RT_incongruent`).",
        "Discuss how prefrontal **inhibitory control** had to suppress the deeply automated reading habit — and test whether playing a distraction audio track widens the interference gap!",
      ],
      maths:
        "Compute the **Stroop interference effect** (`RT_incongruent − RT_congruent`) in ms and the **percentage slowdown** `((RT_incongruent − RT_congruent) / RT_congruent) × 100`. Typical healthy adults slow down by 20–40% on incongruent cards.",
    },
    {
      title: "Experience Einstellung: The Luchins Water-Jar Challenge",
      emoji: "🧪",
      materials: [
        "Pen and paper",
        "A partner to act as participant (do NOT tell them the shortcut rule beforehand!)",
      ],
      steps: [
        "Give your partner 4 induction jars (A, B, C) and ask them to measure Target T: (1) A=21, B=127, C=3 → Target 100; (2) A=14, B=163, C=25 → Target 99; (3) A=18, B=43, C=10 → Target 5; (4) A=9, B=42, C=6 → Target 21. Every one yields to `B − A − 2C`.",
        "Now immediately present Critical Test Jar 5: **A=23, B=49, C=3 → Target 20**.",
        "Watch whether they mechanically write `49 − 23 − 6 = 20` instead of noticing the one-step shortcut `23 − 3 = 20`!",
        "Debrief using **Luchins (1942)** and Miyake's **cognitive flexibility**: how did mastering the complex rule blind them to a simpler solution?",
      ],
      maths:
        "Calculate the class **Einstellung fixation rate (%)** = `(participants using B − A − 2C on Test Jar 5 ÷ total participants) × 100`. In Luchins's original cohorts, over 80% of practiced solvers fell into the mental set trap versus < 5% of controls.",
    },
    {
      title: "48-Hour Retrieval Practice vs Rereading Duel",
      emoji: "🃏",
      materials: [
        "Two unfamiliar 12-item psychology term lists (List A and List B)",
        "Timer (4 minutes per list) and blank recall sheets",
      ],
      steps: [
        "Study List A for 4 straight minutes by quietly rereading and highlighting the definitions (massed passive study).",
        "Study List B for 1 minute, flip the sheet over, and spend 3 minutes writing every term and definition you can pull from memory, checking briefly only at the end (retrieval practice).",
        "Rate your confidence (0–100%) on both lists immediately after studying — notice which list *feels* stronger!",
        "Wait 48 hours, take a surprise closed-book free-recall test on both lists, and compare your true scores against your Day 1 confidence ratings.",
      ],
      maths:
        "Calculate your personal **relative testing-effect gain (%)** = `((Score_B − Score_A) / Score_A) × 100`. Compare your Day 1 confidence gap against your actual 48-hour recall gap to spot your own metacognitive **Bias**.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Roediger & Karpicke (2006): The Testing-Effect Crossover",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line chart comparing repeated study versus retrieval practice recall at five minutes and one week">
  <rect x="0" y="0" width="600" height="260" rx="12" fill="#ffffff"/>
  <text x="300" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1c1630">Roediger &amp; Karpicke (2006): Immediate vs 1-Week Delayed Recall</text>

  <!-- Axes -->
  <line x1="80" y1="210" x2="430" y2="210" stroke="#374151" stroke-width="1.6"/>
  <line x1="80" y1="210" x2="80" y2="48" stroke="#374151" stroke-width="1.6"/>

  <!-- Gridlines: 0% to 100% -> 150px height (y = 210 - 1.5*pct) -->
  <line x1="76" y1="180" x2="430" y2="180" stroke="#e5e7eb" stroke-width="1"/>
  <text x="70" y="184" text-anchor="end" font-size="10" fill="#6b7280">20%</text>
  <line x1="76" y1="150" x2="430" y2="150" stroke="#e5e7eb" stroke-width="1"/>
  <text x="70" y="154" text-anchor="end" font-size="10" fill="#6b7280">40%</text>
  <line x1="76" y1="120" x2="430" y2="120" stroke="#e5e7eb" stroke-width="1"/>
  <text x="70" y="124" text-anchor="end" font-size="10" fill="#6b7280">60%</text>
  <line x1="76" y1="90" x2="430" y2="90" stroke="#e5e7eb" stroke-width="1"/>
  <text x="70" y="94" text-anchor="end" font-size="10" fill="#6b7280">80%</text>
  <line x1="76" y1="60" x2="430" y2="60" stroke="#e5e7eb" stroke-width="1"/>
  <text x="70" y="64" text-anchor="end" font-size="10" fill="#6b7280">100%</text>
  <text x="28" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563" transform="rotate(-90 28 132)">Idea Units Recalled (%)</text>

  <!-- X labels -->
  <text x="150" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="#1c1630">After 5 Minutes</text>
  <text x="360" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="#1c1630">After 1 Week</text>

  <!-- Repeated Study (SSSS): 81% -> 40% (y=88.5 -> y=150) -->
  <line x1="150" y1="88.5" x2="360" y2="150" stroke="#ea580c" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="150" cy="88.5" r="5.5" fill="#ea580c"/>
  <circle cx="360" cy="150" r="5.5" fill="#ea580c"/>
  <text x="150" y="77" text-anchor="middle" font-size="10.5" font-weight="800" fill="#c2410c">81% (SSSS)</text>
  <text x="360" y="168" text-anchor="middle" font-size="10.5" font-weight="800" fill="#c2410c">40% (Steep Drop)</text>

  <!-- Retrieval Practice (STTT): 75% -> 61% (y=97.5 -> y=118.5) -->
  <line x1="150" y1="97.5" x2="360" y2="118.5" stroke="#16a34a" stroke-width="3.2"/>
  <circle cx="150" cy="97.5" r="5.5" fill="#16a34a"/>
  <circle cx="360" cy="118.5" r="5.5" fill="#16a34a"/>
  <text x="150" y="114" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">75% (STTT)</text>
  <text x="360" y="107" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">61% (+52.5% rel.)</text>

  <!-- Callout Box -->
  <rect x="446" y="64" width="140" height="142" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.3"/>
  <text x="516" y="86" text-anchor="middle" font-size="11" font-weight="800" fill="#4c1d95">Why the Crossover?</text>
  <text x="456" y="106" font-size="9.5" fill="#374151">• Rereading feels smooth</text>
  <text x="456" y="121" font-size="9.5" fill="#374151">  at 5 min (fluency bias),</text>
  <text x="456" y="136" font-size="9.5" fill="#374151">  but decays steeply.</text>
  <text x="456" y="158" font-size="9.5" font-weight="700" fill="#15803d">• Retrieval effort builds</text>
  <text x="456" y="173" font-size="9.5" font-weight="700" fill="#15803d">  LTP &amp; durable cues</text>
  <text x="456" y="188" font-size="9.5" font-weight="700" fill="#15803d">  across the 7-day gap.</text>
</svg>`,
      caption:
        "Repeated reading (SSSS) enjoys a tiny 5-minute fluency edge that tricks students' metacognition, yet collapses to 40% after one week while retrieval practice (STTT) retains 61%.",
    },
    {
      title: "Yerkes–Dodson Arousal Curve & Eyewitness Encoding",
      svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inverted U Yerkes Dodson curve linking physiological arousal to eyewitness memory encoding accuracy">
  <rect x="0" y="0" width="600" height="250" rx="12" fill="#ffffff"/>
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="#1c1630">Arousal, Cortisol &amp; Eyewitness Encoding (Yerkes–Dodson Curve)</text>

  <!-- Shaded zones -->
  <rect x="75" y="46" width="145" height="154" fill="#f3f4f6" opacity="0.6"/>
  <rect x="220" y="46" width="155" height="154" fill="#dcfce7" opacity="0.55"/>
  <rect x="375" y="46" width="185" height="154" fill="#fee2e2" opacity="0.55"/>

  <!-- Axes -->
  <line x1="75" y1="200" x2="565" y2="200" stroke="#374151" stroke-width="1.6"/>
  <line x1="75" y1="200" x2="75" y2="44" stroke="#374151" stroke-width="1.6"/>
  <text x="320" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563">Physiological Arousal / Threat Stress →</text>
  <text x="34" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563" transform="rotate(-90 34 124)">Facial &amp; Detail Encoding</text>

  <!-- Inverted U curve -->
  <path d="M 85 186 Q 297 -6 545 182" fill="none" stroke="#7c3aed" stroke-width="3.4"/>

  <!-- Zone labels -->
  <text x="147" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#4b5563">Low Arousal</text>
  <text x="147" y="81" text-anchor="middle" font-size="9" fill="#6b7280">Inattention / mind-wandering</text>

  <text x="297" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">Optimal Vigilance</text>
  <text x="297" y="81" text-anchor="middle" font-size="9" fill="#166534">Broad cues + crisp encoding</text>

  <text x="468" y="66" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b91c1c">Extreme Threat Stress</text>
  <text x="468" y="81" text-anchor="middle" font-size="9" fill="#991b1b">Weapon focus narrowing &amp;</text>
  <text x="468" y="94" text-anchor="middle" font-size="9" fill="#991b1b">cortisol impairs hippocampus</text>

  <circle cx="297" cy="91" r="5" fill="#15803d"/>
  <circle cx="482" cy="144" r="5" fill="#dc2626"/>
  <text x="482" y="164" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">Deffenbacher (2004)</text>
</svg>`,
      caption:
        "Moderate arousal sharpens eyewitness vigilance, whereas extreme threat triggers Easterbrook attentional narrowing (weapon focus) and cortisol disruption of hippocampal consolidation.",
    },
  ],

  history: {
    title: "Elizabeth Loftus and the Battle Over Human Memory",
    story:
      "In the early 1970s, most judges and jurors still treated eyewitness memory like a sealed video cassette waiting to be replayed in court. Cognitive psychologist **Elizabeth Loftus** — originally trained in mathematical learning theory — began filming mundane traffic accidents at the University of Washington to ask a deceptively simple question: could a single verb spoken *after* a crash rewrite what witnesses thought they saw?\n\nWhen Loftus & Palmer published their 1974 *smashed* vs *contacted* findings — especially Experiment 2's nonexistent broken glass — trial attorneys and police academies initially dismissed the findings as artificial student lab tricks. Over the next two decades, however, DNA exonerations began overturning hundreds of wrongful convictions anchored by confident but mistaken eyewitnesses, while the 1990s 'Memory Wars' erupted over suggestive therapeutic techniques that risked implanting false childhood trauma (leading directly to Loftus & Pickrell's 1995 'Lost in the Mall' demonstration).\n\nDespite fierce public controversy and even legal challenges, Loftus's work — joined by Fisher & Geiselman's **Cognitive Interview** and Gary Wells's **double-blind lineup** research — transformed forensic psychology worldwide. Today, jury instructions, police interviewing protocols, and eyewitness science stand as one of psychology's clearest triumphs of empirical **Measurement** driving real-world **Responsibility**.",
  },
};
