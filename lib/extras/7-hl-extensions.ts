import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "An identical 11:45 PM smartphone notification buzzes on three Year 12 desks in Singapore, London, and Tokyo. Inside each brain, VTA–NAc dopamine neurons fire to the cue, central-executive working memory takes a 'Brain Drain' hit, and yet each student interprets the pressure of that gamified study streak through completely different cultural norms and motivational needs. Welcome to the **FA2027 HL Extensions** — where Culture, Motivation, and Technology collide.",
  didYouKnow: [
    "In **Henrich et al.'s (2010)** audit, a randomly selected American undergraduate was over **4,000 times** more likely to participate in a behavioural-science study than a randomly selected person from outside the West — yet on visual illusions like the Müller-Lyer, US undergraduates sit at the extreme outer tail of human diversity.",
    "In **Berridge and Robinson's (1998)** neuroscience experiments, rats whose mesolimbic dopamine was almost completely depleted still displayed unmistakable facial pleasure reactions ('liking') when drops of sugar water were placed on their tongues — they simply lost all motivational drive ('wanting') to walk over and seek it.",
    "In **Zhu et al.'s (2007)** fMRI scans, Chinese university students showed nearly overlapping **medial prefrontal cortex (mPFC)** activation when judging adjectives about *themselves* and about their *mothers*, whereas Western participants recruited the mPFC uniquely for *self*.",
    "When **Orben and Przybylski (2019)** ran over 600,000 analytical specifications across **355,358** UK and US adolescents, total digital screen time explained just **~0.4%** of well-being variance — almost identical to the statistical link between **eating potatoes** and teen well-being!",
    "In **Lepper, Greene, and Nisbett's (1973)** classic nursery study, children who received the exact same 'Good Player' certificate **by surprise afterwards** kept drawing eagerly weeks later — only children **promised** the certificate beforehand showed the 50% overjustification drop.",
    "In **Camerer et al.'s (2018)** multi-lab replication project published in *Nature Human Behaviour*, Experiment 1 of Sparrow et al.'s (2011) 'Google effect' did not cleanly replicate — a reminder that HL psychologists track **scientific Change** rather than treating any single study as final dogma.",
  ],
  activities: [
    {
      title: "The WEIRD Audit of Your Own Psychology Textbook",
      emoji: "🌍",
      materials: [
        "Your IB Psychology textbook or class study list",
        "A tally sheet or spreadsheet",
        "Calculator",
      ],
      steps: [
        "Select **15 classic studies** from Topics 2–6 (e.g. Loftus & Palmer, Asch, Milgram, Maguire, Bartlett, Lepper, Ward, Ophir).",
        "Record the **country** and **participant type** (e.g. university undergrads vs community adults) for each study.",
        "Classify each sample as **WEIRD** (Western, Educated, Industrialized, Rich, Democratic) or **Non-WEIRD**.",
        "Compute your textbook's WEIRD percentage and compare it against Henrich et al.'s (2010) 96% journal benchmark and humanity's 12% WEIRD share.",
        "Pick two WEIRD-sampled findings and brainstorm how an **emic** replication in Singapore, Kenya, or Japan might modify construct validity.",
      ],
      maths:
        "Calculate {{WEIRD% = (n_WEIRD / 15) * 100%}} and the over-representation factor {{WEIRD% / 12%}}. Even if 12 of 15 studies are WEIRD (80%), that is still a **6.7×** over-representation relative to global population!",
    },
    {
      title: "Mini-Replication: Ward's Smartphone 'Brain Drain' Digit Span",
      emoji: "📵",
      materials: [
        "Two comparable lists of 12 eight-digit number strings",
        "Partner's silenced smartphone (airplane mode, screen off)",
        "Timer and score sheet",
      ],
      steps: [
        "With informed consent from classmates (small classroom demo, non-identifying scores), randomly split pairs into two order-counterbalanced trials to prevent order effects.",
        "Trial A (**Desk condition**): Place the participant's silenced personal phone face-down right beside their writing hand while reading aloud 6 digit strings to recall in reverse order.",
        "Trial B (**Other-Room / Bag Out-of-Sight condition**): Place the phone outside the room or locked across the classroom and complete 6 matched reverse-digit strings.",
        "Ask participants to rate their daily smartphone dependence (1–10) and debrief everyone immediately about Ward et al. (2017).",
      ],
      maths:
        "Compute the mean reverse-digit score in both conditions and the percentage working-memory change: {{((M_away - M_desk) / M_away) * 100%}}. Check whether participants with higher self-rated phone dependence (7–10) show a steeper percentage decline, mirroring Ward et al.'s moderation effect.",
    },
    {
      title: "Auditing Your Favourite App with the SDT × Dopamine Scorecard",
      emoji: "🦉",
      materials: [
        "Three everyday apps on your phone (e.g. a language app, a social feed, a revision platform)",
        "Paper or tablet grid",
      ],
      steps: [
        "For each app, list every motivational trigger you see in five minutes (streaks, random mystery rewards, peer leaderboards, custom learning paths, informative progress feedback).",
        "Score each app from 1 to 5 on **Autonomy support** (meaningful choice), **Competence support** (clear mastery feedback), and **Relatedness** (genuine human connection) — compute an average SDT score.",
        "Score each app from 1 to 5 on **Variable-Ratio / Controlling Pressure** (unpredictable likes/chests, streak-loss guilt alerts).",
        "Discuss one concrete redesign that preserves engagement while upholding **ethical Responsibility** and preventing **overjustification**.",
      ],
      maths:
        "Calculate the **Autonomy-to-Control Ratio** = {{SDT_mean / Control_score}} for each app. Ratios above 1.0 signal autonomy-supportive scaffolding; ratios below 1.0 flag 'wanting-without-liking' dark-pattern risk.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Dual-Pathway Motivation: Dopamine 'Wanting' vs Opioid 'Liking' & SDT Crowding-Out",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual-pathway motivation model comparing mesolimbic dopamine incentive salience wanting against opioid hedonic liking and showing how controlling external rewards shift behaviour toward overjustification"><rect x="0" y="0" width="640" height="260" rx="12" fill="#ffffff"/><text x="320" y="24" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">Why We Keep Scrolling After Enjoyment Fades (Berridge &amp; Robinson + Deci &amp; Ryan)</text><rect x="24" y="42" width="280" height="94" rx="10" fill="#ede9fe" stroke="#c4b5fd"/><text x="164" y="63" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#5b21b6">Mesolimbic Dopamine: "WANTING"</text><text x="164" y="83" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#1c1630">VTA → Nucleus Accumbens (Incentive Salience)</text><text x="164" y="101" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#1c1630">Sensitized by unpredictable cues &amp; +RPE bursts</text><text x="164" y="121" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#7c3aed">Drives compulsive approach &amp; checking</text><rect x="336" y="42" width="280" height="94" rx="10" fill="#dcfce7" stroke="#86efac"/><text x="476" y="63" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#166534">Opioid / Endocannabinoid: "LIKING"</text><text x="476" y="83" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#1c1630">Localized hedonic hotspots (sensory pleasure)</text><text x="476" y="101" font-family="system-ui,sans-serif" font-size="10.5" text-anchor="middle" fill="#1c1630">Habituates rapidly during passive scrolling</text><text x="476" y="121" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#15803d">Can drop low while "wanting" stays high!</text><rect x="24" y="156" width="592" height="86" rx="10" fill="#ffedd5" stroke="#fdba74"/><text x="320" y="177" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#9a3412">Cognitive Parallel: SDT Overjustification / Crowding-Out (Lepper et al., 1973)</text><text x="120" y="204" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">High Intrinsic Enjoyment</text><text x="120" y="220" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">(Autonomy intact)</text><line x1="205" y1="206" x2="255" y2="206" stroke="#c2410c" stroke-width="2"/><polygon points="255,201 265,206 255,211" fill="#c2410c"/><text x="342" y="204" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#9a3412">+ Expected Controlling Reward</text><text x="342" y="220" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">(Gold stars / streak pressure)</text><line x1="428" y1="206" x2="472" y2="206" stroke="#c2410c" stroke-width="2"/><polygon points="472,201 482,206 472,211" fill="#c2410c"/><text x="546" y="204" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Lower Free-Choice Drive</text><text x="546" y="220" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">(External attribution)</text></svg>`,
      caption:
        "Combining Berridge & Robinson's wanting/liking split with Deci & Ryan's SDT overjustification explains both compulsive app use and why controlling rewards erode genuine enjoyment.",
    },
    {
      title: "The Algorithmic Engagement & Echo-Chamber Feedback Loop",
      svg: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cycle diagram showing how variable-ratio notifications, confirmation bias, online disinhibition, and algorithmic ranking form a reinforcing social-media echo chamber"><rect x="0" y="0" width="640" height="245" rx="12" fill="#ffffff"/><text x="320" y="24" font-family="system-ui,sans-serif" font-size="13.5" font-weight="700" text-anchor="middle" fill="#1c1630">Technology × Cognition × Society: The Algorithmic Feedback Loop</text><rect x="28" y="48" width="174" height="68" rx="10" fill="#e0f2fe" stroke="#7dd3fc"/><text x="115" y="72" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0369a1">1. Algorithmic Ranking</text><text x="115" y="90" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Optimizes clicks &amp; watch time</text><text x="115" y="104" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">via high-arousal posts</text><line x1="202" y1="82" x2="228" y2="82" stroke="#5b5375" stroke-width="2"/><polygon points="228,77 238,82 228,87" fill="#5b5375"/><rect x="238" y="48" width="174" height="68" rx="10" fill="#ede9fe" stroke="#c4b5fd"/><text x="325" y="72" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#5b21b6">2. Cognitive Amplification</text><text x="325" y="90" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Confirmation bias + upward</text><text x="325" y="104" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">social comparison (passive)</text><line x1="412" y1="82" x2="438" y2="82" stroke="#5b5375" stroke-width="2"/><polygon points="438,77 448,82 438,87" fill="#5b5375"/><rect x="448" y="48" width="164" height="68" rx="10" fill="#ffedd5" stroke="#fdba74"/><text x="530" y="72" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#9a3412">3. Disinhibited Signal</text><text x="530" y="90" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Anonymity lowers restraint</text><text x="530" y="104" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#5b5375">(Suler, 2004) → outrage shares</text><path d="M 530 116 L 530 154 L 115 154 L 115 126" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5 3"/><polygon points="110,126 115,116 120,126" fill="#7c3aed"/><text x="322" y="147" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">Bidirectional Causality: User engagement trains next-day feed personalization</text><rect x="28" y="176" width="584" height="50" rx="8" fill="#dcfce7" stroke="#86efac"/><text x="320" y="197" font-family="system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#166534">Ethical Responsibility &amp; Perspective Check</text><text x="320" y="214" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle" fill="#1c1630">Active messaging can foster benign support, while transparent ranking audits curb toxic echo chambers</text></svg>`,
      caption:
        "Engagement-optimizing algorithms interact bidirectionally with confirmation bias and Suler's online disinhibition, placing Responsibility on both platform architecture and digital literacy.",
    },
  ],
  history: {
    title: "How One Rainforest Experiment Exposed Psychology's WEIRD Blind Spot",
    story:
      "In 1996, a young graduate anthropologist named **Joseph Henrich** travelled deep into the Peruvian Amazon to run the classic **Ultimatum Game** — an economics experiment where Player 1 splits a cash pot and Player 2 can accept or reject both shares. Decades of lab experiments in North America and Europe had declared it a 'universal law of human fairness' that people routinely offer ~45–50% and angrily reject offers below 20%. Yet among the **Machiguenga** horticulturalists, players routinely offered just **15–25%** — and almost *everyone* happily accepted! Stunned, Henrich organized a fifteen-society global collaboration across foragers, herders, and farmers, eventually co-authoring the famous 2010 paper **'The Weirdest People in the World?'** with Steven Heine and Ara Norenzayan. Their discovery — that 96% of behavioural science rested on just 12% of humanity — triggered a methodological revolution across neuroscience, motivation theory, and AI ethics, and directly shaped why the **IB Diploma FA2027 HL syllabus** places Culture, Motivation, and Technology at the heart of critical psychological inquiry.",
  },
};
