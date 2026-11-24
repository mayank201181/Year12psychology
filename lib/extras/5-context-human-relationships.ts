import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why can a 15-minute coded conversation predict whether a marriage lasts a decade, why did 90.9% of real public-street conflicts attract bystander help on CCTV despite fifty years of 'bystander apathy' textbooks, and how can reading 39 sentences about fictional strangers create a stereotype from scratch? Welcome to FA2027 Compulsory Context 3: Human Relationships.",
  didYouKnow: [
    "In Festinger, Schachter & Back's (1950) MIT housing study, simply living beside a stairwell or shared mailbox doubled a student's likelihood of being named a close friend by neighbours on the floor.",
    "John Gottman's 'Love Lab' tracked physiological heart rate alongside verbal coding: when a partner's pulse spikes above ~100 bpm ('diffuse physiological arousal'), prefrontal problem-solving drops and stonewalling surges.",
    "Biologist J.B.S. Haldane famously joked about Hamilton's Rule in a pub: 'Would I lay down my life to save my brother? No, but I would to save two brothers or eight cousins' — because {{2 * 0.5 = 1}} and {{8 * 0.125 = 1}}!",
    "In Levine et al.'s (2001) 23-city stranger-helping study, Rio de Janeiro (93%) and San José (91%) led the world in everyday kindness, while faster-paced economic hubs like New York (45%) and Kuala Lumpur (40%) ranked near the bottom.",
    "During Sherif's Robbers Cave summer camp, researchers actually had to sabotage the camp water tank by stuffing a sack into the faucet valve to create a realistic superordinate crisis both cabins had to fix together.",
    "Pettigrew & Tropp's (2006) mega-analysis of 515 Contact Hypothesis studies found that intergroup friendship lowers prejudice not mainly by teaching factual knowledge, but by shrinking intergroup anxiety and growing emotional empathy.",
  ],
  activities: [
    {
      title: "Classroom Illusory Correlation Mini-Replication",
      emoji: "🃏",
      materials: [
        "39 index cards (26 labelled 'Group A' with 18 positive + 8 negative acts; 13 labelled 'Group B' with 9 positive + 4 negative acts)",
        "Stopwatch or timer",
        "Score sheet for class recall tally",
      ],
      steps: [
        "Shuffle all 39 cards and read them aloud at a brisk pace (5 seconds per card) without letting students take notes.",
        "Wait 2 minutes, then ask each student to estimate how many negative actions Group A and Group B committed and rate each group's trustworthiness from 1 to 7.",
        "Reveal the actual card counts and compute each group's true negative percentage together.",
        "Debrief through the FA2027 Core Concept of **Bias**: discuss why minority Group B felt 'worse' despite having identical proportions.",
      ],
      maths:
        "Verify exact proportion parity: Group A negative rate = {{8 / 26 = 30.8%}} and Group B negative rate = {{4 / 13 = 30.8%}}. Compare class perceived percentages against the true 30.8% baseline to quantify the illusory correlation error!",
    },
    {
      title: "Gottman 5 : 1 Script & Four Horsemen Antidote Audit",
      emoji: "💬",
      materials: [
        "A 2-minute fictional couple argument transcript (e.g. from a TV sitcom scene)",
        "Two coloured highlighters (green = positive bid/repair, orange = negative/Horseman)",
        "Calculator",
      ],
      steps: [
        "Independently tally every positive micro-behaviour (humour, validation, gentle tone, compromise) and every negative micro-behaviour (criticism, eye-roll contempt, defensive blame, silent stonewalling).",
        "Compute inter-rater agreement between two student coders to experience Gottman's **Measurement** reliability challenge firsthand.",
        "Calculate the scene's positive-to-negative ratio and classify whether it passes or fails the 5 : 1 stability benchmark.",
        "Rewrite every Horseman line using Gottman's clinical antidote (gentle start-up, appreciation, taking responsibility, or calm 20-minute break).",
      ],
      maths:
        "Compute {{P / N}} and solve {{5N - P}} to find the exact number of positive repair statements needed to restore the **5 : 1** threshold; also compute percentage inter-rater agreement {{(\"agreements\" / \"total codes\") * 100}}.",
    },
    {
      title: "Active Bystander 1/N Responsibility Design Challenge",
      emoji: "🚇",
      materials: [
        "3 realistic campus/transit emergency cards (e.g. fainted commuter, online group-chat bullying, ambiguous hallway shout)",
        "Whiteboard or notebook",
      ],
      steps: [
        "For each scenario, trace Latané & Darley's 5 steps (Notice → Interpret → Responsibility → Competence → Act) and pinpoint which exact gate is blocked.",
        "Compare the estimated responsibility share per bystander for a crowd of `N = 2`, `N = 10`, and `N = 100`.",
        "Draft a 10-second verbal or digital 'callout script' that removes ambiguity (breaking pluralistic ignorance) and assigns personal responsibility to one specific person.",
        "Evaluate ethical **Responsibility**: discuss how bystander training empowers helpers safely without putting witnesses in physical danger.",
      ],
      maths:
        "Calculate individual responsibility share {{R = 100 / N}}% across `N = 1, 2, 5, 10, 50` (100%, 50%, 20%, 10%, 2%) and observe the steep inverse decay curve — then contrast with collective probability {{1 - (1 - p)^N}} from Philpot et al. (2020).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Rusbult's Investment Model Commitment Balance",
      svg: `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Rusbult's Investment Model showing Satisfaction and Investment adding toward Commitment while Quality of Alternatives subtracts from Commitment">
  <rect x="0" y="0" width="520" height="250" fill="#ffffff" rx="12"/>
  <text x="260" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Rusbult's Investment Model (1980, 1983): C = S − A + I</text>
  <rect x="22" y="48" width="144" height="58" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="94" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#166534">+ Satisfaction (S)</text>
  <text x="94" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Rewards &gt; costs &amp; CL</text>
  <rect x="22" y="122" width="144" height="58" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="94" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9a3412">− Alternatives (A)</text>
  <text x="94" y="162" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Other partners / single life</text>
  <rect x="22" y="196" width="144" height="42" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="94" y="214" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b21b6">+ Investment (I)</text>
  <text x="94" y="229" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#1c1630">Time, kids, finances, friends</text>
  <line x1="166" y1="77" x2="232" y2="128" stroke="#15803d" stroke-width="2"/>
  <line x1="166" y1="151" x2="232" y2="142" stroke="#c2410c" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="166" y1="214" x2="232" y2="156" stroke="#7c3aed" stroke-width="2"/>
  <rect x="234" y="102" width="118" height="76" rx="12" fill="#f5f3ff" stroke="#6d28d9" stroke-width="2.2"/>
  <text x="293" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#4c1d95">COMMITMENT</text>
  <text x="293" y="149" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#5b5375">~61% variance</text>
  <text x="293" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#5b5375">(Le &amp; Agnew, 2003)</text>
  <line x1="352" y1="126" x2="390" y2="96" stroke="#15803d" stroke-width="2"/>
  <line x1="352" y1="154" x2="390" y2="184" stroke="#c2410c" stroke-width="2"/>
  <rect x="392" y="64" width="112" height="58" rx="9" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="448" y="86" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#166534">High C → Stay</text>
  <text x="448" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Accommodation,</text>
  <text x="448" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">even if S is low</text>
  <rect x="392" y="156" width="112" height="58" rx="9" fill="#fff7ed" stroke="#c2410c" stroke-width="1.5"/>
  <text x="448" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9a3412">Low C → Leave</text>
  <text x="448" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">Triggers Duck's</text>
  <text x="448" y="206" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#334155">dissolution phases</text>
</svg>`,
      caption:
        "High investment (I) and poor alternatives (A) keep Commitment high even when Satisfaction (S) falls — explaining why people sometimes remain in unhappy relationships.",
    },
    {
      title: "Aronson's Jigsaw Classroom Interdependence Map",
      svg: `<svg viewBox="0 0 520 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram contrasting a traditional competitive classroom with Aronson's Jigsaw Classroom showing diverse students sharing unique essential pieces">
  <rect x="0" y="0" width="520" height="245" fill="#ffffff" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Traditional Competition vs Aronson's Jigsaw Classroom (1978)</text>
  <rect x="16" y="38" width="228" height="186" rx="10" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
  <text x="130" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9a3412">Traditional Classroom</text>
  <rect x="85" y="72" width="90" height="28" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="1.3"/>
  <text x="130" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#7c2d12">Teacher (sole source)</text>
  <circle cx="58" cy="148" r="18" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
  <text x="58" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">S1</text>
  <circle cx="106" cy="148" r="18" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
  <text x="106" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">S2</text>
  <circle cx="154" cy="148" r="18" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
  <text x="154" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">S3</text>
  <circle cx="202" cy="148" r="18" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
  <text x="202" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">S4</text>
  <line x1="110" y1="100" x2="64" y2="130" stroke="#c2410c" stroke-width="1.4"/>
  <line x1="124" y1="100" x2="108" y2="130" stroke="#c2410c" stroke-width="1.4"/>
  <line x1="138" y1="100" x2="152" y2="130" stroke="#c2410c" stroke-width="1.4"/>
  <line x1="152" y1="100" x2="196" y2="130" stroke="#c2410c" stroke-width="1.4"/>
  <text x="130" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">Zero-sum peer rivalry for grades</text>
  <text x="130" y="205" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">Reinforces stereotypes &amp; cliques</text>
  <rect x="262" y="38" width="242" height="186" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="383" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#166534">Jigsaw Interdependent Group</text>
  <circle cx="383" cy="128" r="46" fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="383" cy="82" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="383" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#4c1d95">Piece A</text>
  <text x="383" y="91" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" fill="#334155">Student 1</text>
  <circle cx="429" cy="128" r="20" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.6"/>
  <text x="429" y="126" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#075985">Piece B</text>
  <text x="429" y="137" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" fill="#334155">Student 2</text>
  <circle cx="383" cy="174" r="20" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="383" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#166534">Piece C</text>
  <text x="383" y="183" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" fill="#334155">Student 3</text>
  <circle cx="337" cy="128" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="1.6"/>
  <text x="337" y="126" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#92400e">Piece D</text>
  <text x="337" y="137" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" fill="#334155">Student 4</text>
  <text x="383" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#166534">Shared Exam</text>
  <text x="383" y="212" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534">Equal status + interdependence → lower bias</text>
</svg>`,
      caption:
        "Aronson's Jigsaw Classroom transforms zero-sum classroom rivalry into equal-status interdependence where every teammate holds an indispensable puzzle piece.",
    },
  ],
  history: {
    title: "The Kitty Genovese Story: How a Misleading 1964 Headline Launched — and Then Revised — Bystander Science",
    story:
      "In March 1964, a front-page *New York Times* article claimed '38 Who Saw Murder Didn't Call the Police' when 28-year-old Kitty Genovese was fatally attacked outside her Queens apartment. Shocked by the apparent urban apathy, young social psychologists John Darley and Bibb Latané rejected simple explanations of 'cold-hearted city dwellers' and designed controlled laboratory experiments (the Smoke-Filled Room and Intercom Seizure studies, 1968), uncovering **pluralistic ignorance** and **diffusion of responsibility**. Yet forty-three years later, psychologists **Rachel Manning, Mark Levine & Alan Collins (2007)** audited the original 1964 court transcripts and discovered that the newspaper story itself was deeply flawed: far fewer than 38 residents saw the attack, the final assault happened out of sight inside a vestibule, several neighbours shouted out their windows, and at least one neighbour did call police and held Kitty as she died. Thirteen years after that, **Philpot et al. (2020)** analysed 219 real public-street conflicts on CCTV across three nations and found bystanders intervened **90.9%** of the time. The whole 60-year arc is a masterclass in FA2027 **Measurement**, **Bias**, and **Change**: lab experiments uncovered genuine cognitive bottlenecks under ambiguity, while archival and real-world CCTV evidence corrected the myth that crowds are inevitably indifferent.",
  },
};
