import type { ExamPaper } from "../types.ts";

const SVG_PACK1_BARS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 272" role="img" aria-label="Grouped bar chart comparing mean Academic Intrinsic Motivation Scale scores with plus or minus one standard deviation error bars across phone conditions in Melbourne and Busan">
  <rect x="0" y="0" width="560" height="272" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Source 1A: Mean Intrinsic Study Motivation (AIMS, ±1 SD; n = 40 per cell)</text>
  <line x1="70" y1="205" x2="528" y2="205" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="65" x2="70" y2="205" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="185" x2="528" y2="185" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="165" x2="528" y2="165" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="145" x2="528" y2="145" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="125" x2="528" y2="125" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="105" x2="528" y2="105" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="85" x2="528" y2="85" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="70" y1="65" x2="528" y2="65" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <text x="62" y="209" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">0</text>
  <text x="62" y="189" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">10</text>
  <text x="62" y="169" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">20</text>
  <text x="62" y="149" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">30</text>
  <text x="62" y="129" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">40</text>
  <text x="62" y="109" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">50</text>
  <text x="62" y="89" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">60</text>
  <text x="62" y="69" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">70</text>
  <text x="24" y="135" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 24 135)">AIMS Score (0–70)</text>
  <!-- Melbourne Away: M=52.4, SD=6.0 -->
  <rect x="112" y="100.2" width="68" height="104.8" rx="3" fill="#6d28d9"/>
  <line x1="146" y1="88.2" x2="146" y2="112.2" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="138" y1="88.2" x2="154" y2="88.2" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="138" y1="112.2" x2="154" y2="112.2" stroke="#0f172a" stroke-width="1.8"/>
  <text x="146" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#4c1d95">52.4 (SD 6.0)</text>
  <!-- Melbourne Face-Up: M=44.6, SD=6.0 -->
  <rect x="192" y="115.8" width="68" height="89.2" rx="3" fill="#c4b5fd"/>
  <line x1="226" y1="103.8" x2="226" y2="127.8" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="218" y1="103.8" x2="234" y2="103.8" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="218" y1="127.8" x2="234" y2="127.8" stroke="#0f172a" stroke-width="1.8"/>
  <text x="226" y="97" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#4c1d95">44.6 (SD 6.0)</text>
  <!-- Busan Away: M=48.2, SD=7.0 -->
  <rect x="336" y="108.6" width="68" height="96.4" rx="3" fill="#0f766e"/>
  <line x1="370" y1="94.6" x2="370" y2="122.6" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="362" y1="94.6" x2="378" y2="94.6" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="362" y1="122.6" x2="378" y2="122.6" stroke="#0f172a" stroke-width="1.8"/>
  <text x="370" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#115e59">48.2 (SD 7.0)</text>
  <!-- Busan Face-Up: M=44.7, SD=11.0 -->
  <rect x="416" y="115.6" width="68" height="89.4" rx="3" fill="#5eead4"/>
  <line x1="450" y1="93.6" x2="450" y2="137.6" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="442" y1="93.6" x2="458" y2="93.6" stroke="#0f172a" stroke-width="1.8"/>
  <line x1="442" y1="137.6" x2="458" y2="137.6" stroke="#0f172a" stroke-width="1.8"/>
  <text x="450" y="86" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#115e59">44.7 (SD 11.0)</text>
  <text x="186" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">Melbourne (p &lt; 0.001)</text>
  <text x="410" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">Busan (p = 0.094)</text>
  <rect x="138" y="240" width="12" height="12" rx="2" fill="#6d28d9"/>
  <text x="155" y="250" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">Phone Away (dark)</text>
  <rect x="296" y="240" width="12" height="12" rx="2" fill="#c4b5fd"/>
  <text x="313" y="250" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">Phone Face-Up (light)</text>
  <text x="280" y="266" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b">Two-tailed independent-samples t-tests (α = 0.05); y-axis starts at 0.</text>
</svg>`;

const SVG_PACK1_QUAL_TABLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 250" role="img" aria-label="Qualitative interview coding table presenting three participant excerpts from Melbourne and Busan alongside initial open codes and candidate themes">
  <rect x="0" y="0" width="620" height="250" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="310" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Source 1B: Post-Session Interview Excerpt Coding Matrix</text>
  <!-- Header row -->
  <rect x="14" y="36" width="592" height="26" rx="4" fill="#312e81"/>
  <text x="24" y="53" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#ffffff">Participant</text>
  <text x="132" y="53" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#ffffff">Verbatim Excerpt (Translated from Korean for Busan)</text>
  <text x="414" y="53" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#ffffff">Open Code</text>
  <text x="518" y="53" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#ffffff">Theme</text>
  <!-- Row 1 -->
  <rect x="14" y="64" width="592" height="58" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="22" y="84" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">P14 · Melbourne</text>
  <text x="22" y="99" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phone Face-Up</text>
  <text x="132" y="82" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">"Every buzz broke my train of thought; I felt</text>
  <text x="132" y="96" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">my autonomy slipping because the screen kept</text>
  <text x="132" y="110" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">pulling me out of the problem."</text>
  <text x="414" y="88" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Attentional pull &amp;</text>
  <text x="414" y="102" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">lost autonomy</text>
  <text x="518" y="88" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#5b21b6">Cognitive</text>
  <text x="518" y="102" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#5b21b6">switching cost</text>
  <!-- Row 2 -->
  <rect x="14" y="122" width="592" height="58" fill="#ffffff" stroke="#e2e8f0"/>
  <text x="22" y="142" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">P07 · Busan</text>
  <text x="22" y="157" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phone Away</text>
  <text x="132" y="140" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">"Leaving my phone outside made me anxious—</text>
  <text x="132" y="154" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">study-group seniors share notes, so checking</text>
  <text x="132" y="168" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">feels like a duty to peers, not distraction."</text>
  <text x="414" y="146" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Anxiety over</text>
  <text x="414" y="160" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">peer obligations</text>
  <text x="518" y="146" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">Socially rooted</text>
  <text x="518" y="160" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">connectivity</text>
  <!-- Row 3 -->
  <rect x="14" y="180" width="592" height="58" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="22" y="200" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">P22 · Busan</text>
  <text x="22" y="215" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Phone Face-Up</text>
  <text x="132" y="198" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">"Seeing my study chat stay active reminded me</text>
  <text x="132" y="212" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">everyone else was working late too, which</text>
  <text x="132" y="226" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e293b">motivated me to keep persisting."</text>
  <text x="414" y="204" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Co-working peer</text>
  <text x="414" y="218" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">relatedness</text>
  <text x="518" y="204" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">Socially rooted</text>
  <text x="518" y="218" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">connectivity</text>
</svg>`;

const SVG_PACK2_SCATTER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 272" role="img" aria-label="Scatterplot displaying daily short-video minutes on the horizontal axis against adolescent academic intrinsic motivation scores on the vertical axis, distinguishing passive scrolling and active educational subgroups">
  <rect x="0" y="0" width="560" height="272" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="280" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Source 2A: Short-Video Minutes vs Academic Motivation (N = 1,200)</text>
  <line x1="68" y1="204" x2="518" y2="204" stroke="#334155" stroke-width="1.5"/>
  <line x1="68" y1="46" x2="68" y2="204" stroke="#334155" stroke-width="1.5"/>
  <line x1="68" y1="164.5" x2="518" y2="164.5" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="68" y1="125" x2="518" y2="125" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <line x1="68" y1="85.5" x2="518" y2="85.5" stroke="#e2e8f0" stroke-dasharray="3 3"/>
  <text x="60" y="208" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">0</text>
  <text x="60" y="168" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">25</text>
  <text x="60" y="129" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">50</text>
  <text x="60" y="89" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">75</text>
  <text x="60" y="50" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#475569">100</text>
  <text x="24" y="125" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 24 125)">Academic Motivation (0–100)</text>
  <text x="68" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">0</text>
  <text x="158" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">60</text>
  <text x="248" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">120</text>
  <text x="338" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">180</text>
  <text x="428" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">240</text>
  <text x="518" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">300</text>
  <text x="293" y="237" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Daily Algorithmic Short-Video Usage (minutes)</text>
  <!-- Representative cloud: Passive scrolling (purple circles, r = -0.30) -->
  <circle cx="105" cy="94" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="132" cy="112" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="148" cy="82" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="176" cy="126" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="204" cy="106" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="228" cy="138" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="255" cy="118" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="278" cy="148" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="305" cy="130" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="332" cy="156" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="358" cy="142" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="386" cy="166" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="418" cy="152" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="452" cy="176" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <circle cx="486" cy="164" r="4" fill="#7c3aed" fill-opacity="0.72"/>
  <!-- Representative cloud: Active creative/educational (teal triangles, r = +0.10) -->
  <polygon points="118,108 113,117 123,117" fill="#0d9488"/>
  <polygon points="164,96 159,105 169,105" fill="#0d9488"/>
  <polygon points="196,118 191,127 201,127" fill="#0d9488"/>
  <polygon points="242,88 237,97 247,97" fill="#0d9488"/>
  <polygon points="288,104 283,113 293,113" fill="#0d9488"/>
  <polygon points="326,84 321,93 331,93" fill="#0d9488"/>
  <polygon points="372,110 367,119 377,119" fill="#0d9488"/>
  <polygon points="412,92 407,101 417,101" fill="#0d9488"/>
  <polygon points="462,98 457,107 467,107" fill="#0d9488"/>
  <!-- Overall trend line r = -0.20 -->
  <line x1="92" y1="104" x2="496" y2="146" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="6 4"/>
  <!-- Stats legend box -->
  <rect x="330" y="48" width="184" height="62" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="340" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">Overall: r = −0.20 (p &lt; 0.001)</text>
  <text x="340" y="80" font-family="system-ui, sans-serif" font-size="9.5" fill="#5b21b6">● Passive (n = 720): r = −0.30, p &lt; 0.001</text>
  <text x="340" y="96" font-family="system-ui, sans-serif" font-size="9.5" fill="#0f766e">▲ Active (n = 480): r = +0.10, p = 0.028</text>
  <text x="280" y="260" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b">Illustrative sub-sampled points plotted from N = 1,200 adolescents (Singapore &amp; UK, ages 14–17).</text>
</svg>`;

const PACK1_HEADER = `**HL Paper 3 · Research Packet 1: Cross-Cultural Smartphone Notifications & Intrinsic Study Motivation**

A mixed-methods study examined how smartphone notification visibility relates to university students' intrinsic study motivation across **Melbourne, Australia** (higher-individualism sample) and **Busan, South Korea** (higher-collectivism sample). Within each city, students (` + "`n = 40`" + ` per condition, ` + "`N = 160`" + ` total) completed a 45-minute problem-solving task either with **Phone Away** (left in an outer locker) or **Phone Face-Up** (silenced notifications visible on the desk), followed by the English-origin 70-point *Academic Intrinsic Motivation Scale (AIMS)*.

| Cultural Site & Condition | n | AIMS Mean | AIMS Median | AIMS SD | Between-Condition p (two-tailed) |
|---|---|---|---|---|---|
| Melbourne — Phone Away | 40 | 52.4 | 53.0 | 6.0 | p < 0.001 |
| Melbourne — Phone Face-Up | 40 | 44.6 | 45.0 | 6.0 | p < 0.001 |
| Busan — Phone Away | 40 | 48.2 | 49.0 | 7.0 | p = 0.094 |
| Busan — Phone Face-Up | 40 | 44.7 | 46.5 | 11.0 | p = 0.094 |`;

const PACK2_HEADER = `**HL Paper 3 · Research Packet 2: Algorithmic Short-Video Feeds & Adolescent Motivation Across Cultures**

A cross-sectional survey (` + "`N = 1,200`" + ` adolescents aged 14–17 in Singapore and the UK) measured self-reported daily minutes spent on algorithmically curated short-video apps alongside a 0–100 *Academic Intrinsic Motivation* inventory. Researchers linked responses to students' school ID numbers prior to coding. Overall Pearson correlation across all 1,200 teens was **{{r = -0.20}} ({{p < 0.001}})**. Splitting by dominant usage style showed **Passive Scrolling** (` + "`n = 720`" + `, {{r = -0.30}}, {{p < 0.001}}) versus **Active Creative/Educational Use** (` + "`n = 480`" + `, {{r = +0.10}}, {{p = 0.028}}). In the UK subsample, mean usage was 168 min/day while the median was 132 min/day. Six qualitative focus groups (8 students per group), moderated by a school counsellor, explored teens' experiences of algorithmic feeds.`;

export const paper: ExamPaper = {
  id: "exam-p3-hl",
  title: "Paper 3 (HL Only) · Quantitative & Qualitative Source Analysis",
  level: "HL",
  paperType: "Paper 3 (HL Only) · Quantitative & Qualitative Source Analysis",
  calculator: true,
  minutes: 105,
  questions: [
    // ===================== SOURCE PACK 1 (q01–q08) ===========================
    {
      id: "exam-p3-hl-q01",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "quantitative-descriptive-visual",
      commandTerm: "Calculate",
      question: `**Source Pack 1 · Quantitative Pilot Check** — Before launching the full Busan sample, researchers collected 9 pilot AIMS motivation scores in the **Phone Face-Up** condition:

\`20, 40, 44, 46, 48, 50, 51, 52, 54\`

Calculate the **median** of these 9 pilot scores.`,
      answer: {
        type: "number",
        value: 48,
        tolerance: 0.01,
        display: "48",
      },
      traps: [
        {
          spec: { type: "number", value: 45, tolerance: 0.05 },
          feedback: "45 is the arithmetic mean (405 ÷ 9), which is pulled downward by the low outlier 20. The question asks for the median (middle ordered score).",
        },
        {
          spec: { type: "number", value: 34, tolerance: 0.05 },
          feedback: "34 is the range (54 − 20), a measure of dispersion rather than the median.",
        },
      ],
      hints: [
        "The 9 values are already sorted in ascending order.",
        "For an odd count n = 9, find the value at position (9 + 1) ÷ 2 = 5th score.",
      ],
      solution: [
        "Position of the median for {{n = 9}} ordered scores: {{(9 + 1) / 2 = 5}}th value.",
        "Counting in: 20 (1st), 40 (2nd), 44 (3rd), 46 (4th), **48** (5th).",
        "Notice that the arithmetic mean is {{405 / 9 = 45.0}}—pulled 3 points lower than the median (48) by the extreme low outlier 20, illustrating why Paper 3 analysts check medians alongside means in skewed samples.",
      ],
      commonError: "Computing the mean (45) when asked for the median, or miscounting the middle position.",
    },
    {
      id: "exam-p3-hl-q02",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "inferential-pvalues-effect-size",
      commandTerm: "Calculate",
      diagram: SVG_PACK1_BARS,
      question: `${PACK1_HEADER}

Using Source 1A above, calculate **Cohen's {{d}}** for the Melbourne comparison (**Phone Away** {{M_1 = 52.4, SD = 6.0}} vs **Phone Face-Up** {{M_2 = 44.6, SD = 6.0}}) using {{d = (M_1 - M_2) / SD}}, given equal group standard deviations ({{SD = 6.0}}). Give your answer to 2 decimal places.`,
      answer: {
        type: "number",
        value: 1.3,
        tolerance: 0.02,
        display: "1.30",
      },
      traps: [
        {
          spec: { type: "number", value: 7.8, tolerance: 0.05 },
          feedback: "7.8 is the unstandardized raw mean difference (52.4 − 44.6). Divide by the pooled standard deviation (6.0) to standardize into Cohen's d.",
        },
        {
          spec: { type: "number", value: 0.65, tolerance: 0.02 },
          feedback: "Do not add the two SDs together (12.0)—when both groups share SD = 6.0, the pooled SD is simply 6.0.",
        },
      ],
      hints: [
        "Subtract the two Melbourne means: 52.4 − 44.6.",
        "Divide the difference by the shared pooled standard deviation (6.0).",
      ],
      solution: [
        "Difference in Melbourne means: {{52.4 - 44.6 = 7.8}} AIMS points.",
        "Pooled standard deviation (since both groups have {{SD = 6.0}}): {{SD = 6.0}}.",
        "Cohen's {{d = 7.8 / 6.0 = 1.30}}—exceeding the {{0.80}} threshold for a **large** practical effect size.",
      ],
      commonError: "Forgetting to divide the raw mean difference (7.8) by the pooled SD, or mistakenly dividing by the sum of both SDs (12.0).",
    },
    {
      id: "exam-p3-hl-q03",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "inferential-pvalues-effect-size",
      commandTerm: "State",
      question: `**Source Pack 1 · Inferential Decision** — In Source 1A, the Busan comparison between Phone Away ({{M = 48.2, SD = 7.0}}) and Phone Face-Up ({{M = 44.7, SD = 11.0}}) yielded **{{p = 0.094}}** at the conventional significance threshold **{{α = 0.05}}**. State whether the researchers should **reject** or **retain** (fail to reject) the null hypothesis ({{H_0}}).`,
      answer: {
        type: "text",
        accept: ["retain", "fail to reject", "retain h0", "retain the null hypothesis", "fail to reject h0", "fail to reject the null hypothesis", "do not reject"],
        display: "Retain (fail to reject) H₀",
      },
      hints: [
        "Compare the observed p-value (0.094) against the alpha cut-off (0.05).",
        "We reject H₀ only when p < α; here 0.094 > 0.05.",
      ],
      solution: [
        "Because {{p = 0.094 > 0.05}}, the observed 3.5-point difference in Busan is **not statistically significant** at {{α = 0.05}}.",
        "Researchers must **retain (fail to reject) {{H_0}}**—noting carefully that failing to reject {{H_0}} does *not* prove the two conditions are identical (a Type II error remains possible given high variance and {{n = 40}}).",
      ],
      commonError: "Writing 'accept H₀ as proven true'—statistically we 'retain' or 'fail to reject' H₀ because non-significance can arise from small n or high SD.",
    },
    {
      id: "exam-p3-hl-q04",
      kind: "written",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "quantitative-descriptive-visual",
      commandTerm: "Describe",
      marks: 4,
      question: `**Source Pack 1 · Quantitative Source Description [4 marks]** — Describe the main quantitative findings in **Source 1A** (Melbourne Away: {{M = 52.4, SD = 6.0}} vs Face-Up: {{M = 44.6, SD = 6.0}}, {{p < 0.001}}; Busan Away: {{M = 48.2, SD = 7.0}} vs Face-Up: {{M = 44.7, SD = 11.0}}, {{p = 0.094}}), including what the wider standard deviation in Busan Face-Up indicates about participant responses.`,
      hints: [
        "Compare the direction and size of the phone-visibility drop in Melbourne (7.8 points, p < 0.001) versus Busan (3.5 points, p = 0.094).",
        "Quote exact means, SDs, and p-values directly from Source 1A rather than vague words like 'higher' or 'better'.",
        "Interpret SD = 11.0 (nearly double Melbourne's SD = 6.0) plus the gap between Busan Face-Up's mean (44.7) and median (46.5): wide heterogeneity / polarized reactions and slight negative skew.",
      ],
      modelAnswer: "In Source 1A, keeping a smartphone face-up on the desk was associated with substantially lower intrinsic study motivation in Melbourne: Phone Away averaged 52.4 (SD = 6.0) versus 44.6 (SD = 6.0) for Phone Face-Up—a 7.8-point reduction that was highly statistically significant (p < 0.001) with identical, relatively tight consistency across both groups. In Busan, the mean difference ran in the same direction but was less than half as large—48.2 (SD = 7.0) for Phone Away versus 44.7 (SD = 11.0) for Phone Face-Up (a 3.5-point difference)—and failed to reach statistical significance (p = 0.094). Crucially, Busan Phone Face-Up exhibited a markedly wider standard deviation (SD = 11.0, almost double Melbourne's 6.0) alongside overlapping ±1 SD error bars and a mean (44.7) slightly below its median (46.5). This wide dispersion shows heterogeneous, polarized individual reactions among Busan students—some felt markedly disrupted while others remained motivated—creating large within-group variance that also reduced statistical power.",
      markScheme: [
        { point: "Accurately reports Melbourne comparison with exact means, SDs, and significance (52.4 vs 44.6; 7.8-point drop; p < 0.001)", keywords: ["52.4", "44.6", "7.8", "0.001"] },
        { point: "Accurately reports Busan comparison with exact means, SDs, and non-significance (48.2 vs 44.7; 3.5-point gap; p = 0.094)", keywords: ["48.2", "44.7", "3.5", "0.094"] },
        { point: "Explicitly contrasts the cultural divergence across Melbourne and Busan (larger significant drop vs smaller non-significant gap)", keywords: ["half", "contrast", "failed to reach", "smaller", "divergence"] },
        { point: "Interprets Busan Face-Up's wide SD = 11.0 (and/or mean 44.7 < median 46.5) as high individual variability / polarized responses reducing power", keywords: ["heterogeneous", "polarized", "variability", "dispersion", "within-group", "skew"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "General summary of graph trends without quoting exact figures or interpreting the SD = 11.0 spread." },
        { band: "3–4", marks: [3, 4], descriptor: "Precise, data-anchored description quoting exact means, SDs, and p-values across both cities and clearly interpreting dispersion." },
      ],
      commonError: "Saying 'phones lowered motivation equally in both cities' or forgetting to explain what Busan Face-Up's huge SD (11.0) reveals about participant heterogeneity.",
    },
    {
      id: "exam-p3-hl-q05",
      kind: "written",
      difficulty: "core",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-motivation-reward-sdt",
      commandTerm: "Explain",
      marks: 6,
      diagram: SVG_PACK1_QUAL_TABLE,
      question: `**Source Pack 1 · Mixed-Methods HL Synthesis [6 marks]** — Integrating **Source 1A** and the interview excerpts in **Source 1B** above, explain how **Self-Determination Theory**, **attentional cognitive switching / 'brain drain'**, and cultural **Perspective** interact to explain why smartphone visibility produced sharply different outcomes in Melbourne and Busan.`,
      hints: [
        "Explain the Melbourne drop via Ward et al.'s 'brain drain' / attentional switching AND Self-Determination Theory (SDT): quote P14 ('autonomy slipping', 'broke my train of thought') showing external notification salience thwarted autonomy and task focus.",
        "Explain the Busan non-significant gap and wide SD (11.0) via SDT's **relatedness** need and collectivist social-obligation norms: quote P07 ('anxious... duty to peers') and P22 ('study chat... everyone else was working late... motivated me to keep persisting').",
        "Explicitly explain how the Core Concept of **Perspective** reveals that the SAME physical technology cue carries opposing psychological meanings across cultural norms.",
      ],
      modelAnswer: "Integrating Sources 1A and 1B demonstrates that the psychological effect of a visible smartphone depends on how cognitive load and Self-Determination Theory's basic needs (autonomy, competence, relatedness) are filtered through cultural Perspective. In Melbourne, where independent autonomous focus is prized, visible notifications triggered both attentional switching costs (Ward et al.'s 'brain drain' effect, consuming finite working-memory control) and autonomy frustration: P14 explicitly reported that 'every buzz broke my train of thought; I felt my autonomy slipping,' directly accounting for Melbourne's sharp 7.8-point decline in intrinsic motivation (p < 0.001). In Busan, however, cultural norms surrounding interdependent peer study altered how both conditions were experienced. Under Phone Away, removing the device thwarted relatedness and triggered relational anxiety—as P07 explained, 'leaving my phone outside made me anxious... checking feels like a duty to peers'—which pulled Busan's Phone Away mean (48.2) below Melbourne's (52.4). Conversely, under Phone Face-Up, while distracted Busan students still lost focus, others such as P22 gained socially rooted relatedness from active group chats ('reminded me everyone else was working late too, which motivated me to keep persisting'). These opposing forces—attentional distraction for some versus peer relatedness for others—explain both Busan's non-significant average gap (p = 0.094) and its unusually wide SD of 11.0. Thus, an interactionist HL Perspective shows that Technology does not impact Motivation identically across Cultures; the same notification cue can undermine autonomy in one cultural context while scaffolding social relatedness in another.",
      markScheme: [
        { point: "Applies Ward's 'brain drain' / attentional switching cost to explain cognitive disruption from visible phones", keywords: ["brain drain", "ward", "working-memory", "attentional switching", "distraction"] },
        { point: "Applies SDT autonomy frustration directly to Melbourne using P14's excerpt", keywords: ["autonomy", "p14", "train of thought", "7.8"] },
        { point: "Explains Busan Phone Away dip (48.2) via relatedness thwarting / peer-obligation anxiety using P07's excerpt", keywords: ["p07", "duty", "anxious", "48.2", "obligation"] },
        { point: "Explains Busan Phone Face-Up buffering via SDT relatedness / co-working motivation using P22's excerpt", keywords: ["p22", "relatedness", "persisting", "group chat", "working late"] },
        { point: "Connects opposing distraction vs relatedness mechanisms explicitly to Busan's wide SD (11.0) and non-significance", keywords: ["11.0", "opposing", "0.094", "heterogen", "buffering"] },
        { point: "Synthesizes cultural Perspective: identical Technology cue holds divergent motivational meanings across Cultures", keywords: ["interactionist", "meaning", "independent", "interdependent", "divergent"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Summarizes SDT or quotes generally without connecting Source 1B quotes to Source 1A's quantitative divergence." },
        { band: "3–4", marks: [3, 4], descriptor: "Integrates SDT/attentional theory with participant quotes cleanly for one city or partially across both." },
        { band: "5–6", marks: [5, 6], descriptor: "Cohesive, deeply grounded HL synthesis integrating Ward's cognitive load, SDT autonomy vs relatedness, P14/P07/P22 quotes, Busan's SD = 11.0, and cultural Perspective." },
      ],
      commonError: "Explaining SDT from memory without quoting P14, P07, and P22 or explaining *why* Busan Face-Up had SD = 11.0.",
    },
    {
      id: "exam-p3-hl-q06",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "qualitative-coding-trustworthiness",
      commandTerm: "Identify",
      question: `**Source Pack 1 · Qualitative Coding Strategy** — When analysing the post-session interview transcripts in Source 1B, the researchers generated open codes and themes bottom-up directly from participants' own wording rather than sorting quotes into a pre-established theoretical framework. Identify whether this approach to thematic analysis is **inductive** or **deductive**.`,
      answer: {
        type: "text",
        accept: ["inductive", "inductive coding", "inductive thematic analysis", "inductive approach"],
        display: "Inductive",
      },
      hints: [
        "Distinguish bottom-up (data-driven) coding from top-down (theory-driven) coding.",
        "Which term begins with 'in-' (emerging from *in*side the transcript data)?",
      ],
      solution: [
        "**Inductive** thematic analysis derives codes and candidate themes bottom-up directly from participants' data.",
        "By contrast, **deductive** analysis starts with a pre-existing theoretical codebook (such as SDT's three needs) and maps text onto those preset categories.",
      ],
      commonError: "Confusing inductive (data-driven, bottom-up) with deductive (theory-driven, top-down) coding.",
    },
    {
      id: "exam-p3-hl-q07",
      kind: "written",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "qualitative-coding-trustworthiness",
      commandTerm: "Evaluate",
      marks: 6,
      question: `**Source Pack 1 · Qualitative Trustworthiness Evaluation [6 marks]** — In Source 1B, Busan interviews were conducted in Korean and translated into English by a single bilingual assistant prior to coding by one lead analyst, with no participant transcript review or reflexive documentation reported. Evaluate the **trustworthiness** of Source 1B, referring explicitly to **Bias**, **Measurement / credibility**, and **confirmability**.`,
      hints: [
        "Translation / conceptual equivalence threat (Measurement & Bias): one bilingual translator without **back-translation** risks subtly distorting Korean relational nuances (e.g., *noonchi* / peer obligation) into English phrases like 'duty'.",
        "Credibility threats: absence of **member checking** (participants never verified whether 'socially rooted connectivity' matched their meaning) and no investigator triangulation (only one analyst coded transcripts).",
        "Confirmability & dependability threats: absence of **reflexivity** (how the lead analyst's own cultural background shaped themes) and lack of a transparent **audit trail**.",
        "Balanced strength: using semi-structured verbatim interviews alongside quantitative AIMS scores still adds valuable methodological triangulation and thick contextual depth.",
      ],
      modelAnswer: "Although Source 1B adds valuable methodological triangulation by illuminating *why* Busan and Melbourne quantitative scores diverged, four procedural omissions weaken its qualitative trustworthiness. First, translating Korean interviews via a single bilingual assistant without independent back-translation threatens conceptual equivalence and Measurement accuracy: subtle Korean relational nuances around peer solidarity or academic obligation can be flattened or distorted when converted into English labels such as 'duty', introducing translation Bias. Second, credibility is compromised by the absence of member checking (respondent validation)—neither Busan nor Melbourne interviewees verified whether candidate themes like 'socially rooted connectivity' accurately reflected their lived experience—and by relying on a single lead analyst without investigator triangulation (multiple independent coders resolving discrepancies). Third, confirmability is weakened because no personal or epistemological reflexivity was documented; without examining how the lead analyst's own cultural assumptions toward smartphone distraction influenced open coding, confirmation bias may have shaped theme labels. Fourth, omitting an explicit audit trail of coding revisions limits dependability, while face-to-face post-session interviews risk social desirability bias when students discuss study diligence. Incorporating independent back-translation, dual coders, member checking, and a reflexive journal would substantially strengthen Source 1B's trustworthiness.",
      markScheme: [
        { point: "Notes balanced strength: qualitative excerpts add methodological triangulation / contextual depth explaining Source 1A", keywords: ["triangulation", "depth", "illuminating", "diverged"] },
        { point: "Critiques single-translator procedure via missing back-translation and conceptual equivalence / translation Bias", keywords: ["back-translation", "conceptual equivalence", "translation", "nuances"] },
        { point: "Critiques credibility due to missing member checking (respondent validation)", keywords: ["credibility", "member checking", "respondent validation", "verified"] },
        { point: "Critiques single-coder subjectivity / missing investigator triangulation", keywords: ["investigator triangulation", "single", "independent coders", "discrepancies"] },
        { point: "Critiques confirmability via absent researcher reflexivity and confirmation bias", keywords: ["confirmability", "reflexivity", "confirmation bias", "assumptions"] },
        { point: "Critiques dependability (missing audit trail) and/or social desirability bias in student interviews", keywords: ["dependability", "audit trail", "social desirability", "diligence"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions generic qualitative weaknesses ('subjective, small sample') without engaging with Source 1B's translation, single coder, or missing trustworthiness checks." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately evaluates two or three trustworthiness dimensions linked to Source 1B details." },
        { band: "5–6", marks: [5, 6], descriptor: "Balanced, technically exact evaluation integrating back-translation/conceptual equivalence, credibility (member checking/triangulation), confirmability (reflexivity), and dependability." },
      ],
      commonError: "Evaluating a qualitative interview study using purely quantitative terms like 'small sample means no generalization' instead of qualitative trustworthiness criteria (credibility, confirmability, dependability, transferability).",
    },
    {
      id: "exam-p3-hl-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-culture-emic-etic",
      commandTerm: "Discuss",
      marks: 6,
      question: `**Source Pack 1 · Cultural Critique [6 marks]** — Discuss the methodological and conceptual limitations of treating Melbourne and Busan university samples as uniform proxies for **"individualism"** and **"collectivism"** in Research Packet 1, explicitly anchoring your discussion in **Bias** and **Perspective**.`,
      hints: [
        "Ecological fallacy (Bias): inferring individual psychological traits from national-level cultural dimensions (Hofstede) ignores huge within-city diversity—remember Busan Face-Up had SD = 11.0, proving Busan students were NOT uniform!",
        "Sampling Bias (WEIRD / urban university students): young, affluent, tech-savvy urban university undergraduates in globalized cities (Melbourne, Busan) do not represent rural, older, or working-class populations in Australia or South Korea; Melbourne also hosts large multicultural/international student populations.",
        "Imposed-etic Measurement & Perspective: administering an English-origin AIMS scale assumes 'intrinsic motivation' is conceptualized purely as solitary personal enjoyment (Western etic), whereas East Asian emic models include socially oriented achievement motivation (striving for family/group pride).",
      ],
      modelAnswer: "Equating Melbourne and Busan university students with uniform 'individualism' and 'collectivism' labels introduces serious conceptual Bias and a narrow Perspective. First, treating national-level Hofstede labels as properties of every participant commits the ecological fallacy: national averages mask substantial intra-cultural variability, directly evidenced in Source 1A by Busan Face-Up's huge standard deviation (SD = 11.0) showing sharply divergent individual responses within the same city. Second, sampling Bias restricts transferability: urban university undergraduates are younger, more affluent, and more globally connected than national populations—and Melbourne universities enroll large proportions of international and bicultural students who engage in bicultural frame-switching rather than embodying monolithic Western individualism. Because researchers never directly measured participants' personal endorsement of individualistic or collectivistic values, cultural group membership is confounded with campus, language, and socioeconomic factors. Third, through the lens of cultural Perspective, administering an English-origin Academic Intrinsic Motivation Scale (AIMS) exemplifies an imposed-etic design: Western motivation inventories operationalize intrinsic drive primarily as solitary personal autonomy, overlooking emic East Asian constructs such as socially oriented achievement motivation, where persisting for peer-group or family harmony feels deeply internalized rather than externally coercive. Future cross-cultural studies should measure individual-level cultural orientation directly and combine etic scales with emic locally validated motivation items.",
      markScheme: [
        { point: "Identifies the ecological fallacy (inferring individual traits from national Hofstede stereotypes)", keywords: ["ecological fallacy", "hofstede", "national averages", "intra-cultural"] },
        { point: "Connects ecological fallacy directly to Source 1A's quantitative evidence (Busan SD = 11.0 heterogeneity)", keywords: ["11.0", "divergent", "within the same city", "variability"] },
        { point: "Evaluates sampling Bias (urban university undergraduates / multicultural international cohorts / bicultural frame-switching)", keywords: ["undergraduates", "affluent", "international", "bicultural", "frame-switching"] },
        { point: "Notes missing direct measurement of individual cultural values (confounding city with language/SES/campus)", keywords: ["directly measured", "confounded", "orientation", "socioeconomic"] },
        { point: "Applies imposed-etic critique to the English-origin AIMS scale", keywords: ["imposed-etic", "english-origin", "solitary", "autonomy"] },
        { point: "Contrasts with emic culturally grounded constructs (e.g., socially oriented achievement motivation) and recommends derived-etic/emic pairing", keywords: ["emic", "socially oriented", "harmony", "locally validated"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Vague remark that 'not everyone in a country is the same' without HL cultural terminology or Packet 1 links." },
        { band: "3–4", marks: [3, 4], descriptor: "Applies ecological fallacy, sampling bias, or imposed-etic critique clearly to Melbourne and Busan." },
        { band: "5–6", marks: [5, 6], descriptor: "Sophisticated HL cultural analysis integrating ecological fallacy (linked to SD = 11.0), bicultural/urban sampling Bias, imposed-etic AIMS critique, and emic Perspective." },
      ],
      commonError: "Stereotyping Busan as 'collectivist' and Melbourne as 'individualist' uncritically instead of critiquing the ecological fallacy and imposed-etic measurement.",
    },

    // ===================== SOURCE PACK 2 (q09–q15) ===========================
    {
      id: "exam-p3-hl-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "inferential-pvalues-effect-size",
      commandTerm: "Calculate",
      diagram: SVG_PACK2_SCATTER,
      question: `${PACK2_HEADER}

Using Source 2A's overall Pearson correlation ({{r = -0.20}}), calculate the **coefficient of determination ({{r^2}})** expressed as a **percentage** of shared variance between daily short-video duration and academic intrinsic motivation.`,
      answer: {
        type: "number",
        value: 4,
        tolerance: 0.05,
        display: "4%",
      },
      traps: [
        {
          spec: { type: "number", value: 20, tolerance: 0.05 },
          feedback: "20% forgets to square r! Square −0.20 first ((−0.20)² = 0.04), then multiply by 100.",
        },
        {
          spec: { type: "number", value: 0.04, tolerance: 0.005 },
          feedback: "0.04 is the decimal proportion—multiply by 100 to express r² as a percentage (4%).",
        },
        {
          spec: { type: "number", value: -4, tolerance: 0.05 },
          feedback: "Squaring a negative correlation produces a positive value: (−0.20)² = +0.04 → 4%.",
        },
      ],
      hints: [
        "Square the Pearson correlation coefficient: (−0.20)².",
        "Multiply the resulting decimal by 100 to convert to a percentage.",
      ],
      solution: [
        "Square {{r = -0.20}}: {{(-0.20)^2 = 0.04}}.",
        "Convert to a percentage: {{0.04 * 100 = 4%}}.",
        "Only **4%** of the variance in adolescents' academic motivation is shared with total daily short-video minutes—leaving **96%** attributable to other individual, family, school, and usage-style factors!",
      ],
      commonError: "Reporting 20% (failing to square r) or −4% (forgetting that squaring a negative number is always positive).",
    },
    {
      id: "exam-p3-hl-q10",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "quantitative-descriptive-visual",
      commandTerm: "State",
      question: `**Source Pack 2 · Central Tendency in Skewed Data** — In Source 2A's UK adolescent subsample, mean daily short-video duration is **168 minutes** whereas the median is **132 minutes**, reflecting a positive (right) skew caused by extreme heavy users. State which measure of central tendency (**mean** or **median**) better represents the typical UK adolescent's daily usage.`,
      answer: {
        type: "text",
        accept: ["median", "the median"],
        display: "Median",
      },
      hints: [
        "Ask which measure gets pulled sharply upward toward extreme heavy-usage outliers in the right tail.",
        "Which measure represents the 50th-percentile middle score and resists distortion by outliers?",
      ],
      solution: [
        "The **median** (132 minutes) better represents typical daily usage because it is resistant to extreme right-tail outliers.",
        "The **mean** (168 minutes) is pulled 36 minutes higher by a minority of extreme heavy users, overstating typical adolescent screen time.",
      ],
      commonError: "Choosing the mean because 'it uses every score'—in strongly skewed distributions, using every extreme outlier is precisely why the mean distorts typical behaviour.",
    },
    {
      id: "exam-p3-hl-q11",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-technology-cognition-social",
      commandTerm: "Identify",
      question: `**Source Pack 2 · Technology & Reinforcement Mechanisms** — During Source 2B's focus groups, one adolescent described scrolling short-video feeds as follows: *"You keep swiping because maybe the next clip is hilarious or super useful—you never know after how many swipes the next great video hits."* Identify the specific **operant reinforcement schedule** illustrated by this algorithmic feed design.`,
      answer: {
        type: "text",
        accept: ["variable ratio", "variable-ratio", "variable ratio schedule", "variable-ratio schedule", "vr", "vr schedule"],
        display: "Variable-ratio (VR) schedule",
      },
      hints: [
        "Check two dimensions of Skinner's reinforcement schedules: (1) reward depends on number of *actions/swipes* (ratio) vs elapsed *time* (interval); (2) predictable (fixed) vs unpredictable (variable).",
        "Unpredictable number of responses (like a slot machine) = which two-word schedule?",
      ],
      solution: [
        "A **variable-ratio (VR) reinforcement schedule** delivers rewarding clips after an unpredictable number of swipes (responses).",
        "VR schedules generate the highest response rates and strongest resistance to extinction, closely engaging mesolimbic dopamine reward-prediction error circuits.",
      ],
      commonError: "Confusing variable-ratio (unpredictable number of swipes/actions) with variable-interval (unpredictable elapsed *time* before a reward becomes available).",
    },
    {
      id: "exam-p3-hl-q12",
      kind: "written",
      difficulty: "core",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "inferential-pvalues-effect-size",
      commandTerm: "Explain",
      marks: 6,
      question: `**Source Pack 2 · Statistical Significance, Effect Size & Causality [6 marks]** — Refer to Source 2A ({{N = 1,200}}, overall {{r = -0.20, p < 0.001}}; Passive Scrolling {{n = 720, r = -0.30, p < 0.001}}; Active Creative/Educational {{n = 480, r = +0.10, p = 0.028}}). Explain the distinction between **statistical significance** and **practical significance (effect size)** in this dataset, and explain why the cross-sectional survey cannot establish **Causality**.`,
      hints: [
        "Explain why p < 0.001 is easy to achieve with a huge sample (N = 1,200) even when the linear association is weak (r = −0.20, small shared variance r² = 4% — echoing Orben & Przybylski).",
        "Highlight subgroup heterogeneity: overall r = −0.20 hides opposite directions—Passive Scrolling (r = −0.30, 9% shared variance) vs Active Creative/Educational use (r = +0.10, tiny 1% positive link).",
        "Explain why cross-sectional surveys cannot prove Causality: bidirectional/reverse causality (already demotivated teens escape into passive scrolling) and third-variable confounds (sleep deprivation, exam stress, parental support, SES).",
      ],
      modelAnswer: "Source 2A vividly illustrates why HL psychologists must distinguish statistical significance from practical significance (effect size). Because the sample is very large (N = 1,200), statistical power is high enough that even a weak linear correlation (r = −0.20) yields p < 0.001—meaning such an association is extremely unlikely by random chance if the true correlation were zero. Practically, however, r = −0.20 corresponds to r² = 0.04 (only 4% shared variance), leaving 96% of variation in academic motivation unexplained by raw short-video minutes, echoing Orben and Przybylski's caution against overstating population-average screen-time effects. Moreover, the aggregate statistic conceals meaningful usage heterogeneity: Passive Scrolling shows a moderate negative association (r = −0.30, 9% shared variance), whereas Active Creative/Educational use shows a small positive association (r = +0.10, p = 0.028, 1% shared variance), demonstrating that *how* adolescents engage matters more than total duration alone. Finally, this cross-sectional correlational design cannot establish Causality because no independent variable was manipulated or randomly assigned. Bidirectional (reverse) causality is equally plausible—adolescents already feeling academically burnt out or unmotivated may retreat into passive scrolling to regulate mood—and unmeasured third variables such as chronic sleep debt, family stress, ADHD traits, or socioeconomic resources could drive both heavy passive viewing and lower study motivation.",
      markScheme: [
        { point: "Explains statistical significance (p < 0.001 indicates low chance probability under H₀, inflated by large N = 1,200)", keywords: ["1,200", "chance", "statistical power", "zero"] },
        { point: "Contrasts with practical significance / small effect size (r = −0.20 → r² = 4% shared variance; 96% unexplained; Orben & Przybylski)", keywords: ["4%", "96%", "unexplained", "orben", "practical"] },
        { point: "Analyses subgroup divergence (Passive r = −0.30 / 9% vs Active r = +0.10 / 1% showing usage type matters)", keywords: ["-0.30", "+0.10", "heterogeneity", "passive", "active"] },
        { point: "States why cross-sectional correlational design lacks experimental Causality (no IV manipulation / random allocation)", keywords: ["manipulated", "randomly assigned", "cross-sectional", "correlational"] },
        { point: "Explains reverse / bidirectional causality (demotivated or burnt-out teens retreating into scrolling)", keywords: ["reverse", "bidirectional", "burnt out", "retreat"] },
        { point: "Identifies plausible third-variable confounds (sleep debt, family stress, SES, attentional traits)", keywords: ["third variable", "sleep", "socioeconomic", "adhd", "family"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "States 'correlation is not causation' generically without explaining large-N p-values vs effect size or citing Source 2A subgroups." },
        { band: "3–4", marks: [3, 4], descriptor: "Clearly contrasts p < 0.001 with weak effect size or explains causality limits well using some Source 2A numbers." },
        { band: "5–6", marks: [5, 6], descriptor: "Sharp, quantitatively exact analysis integrating large-N statistical vs practical significance (4%/96%), passive vs active subgroup contrast, reverse causation, and third variables." },
      ],
      commonError: "Calling r = −0.20 'strong because p < 0.001'—p-values reflect evidence against zero given N, NOT the magnitude of practical impact.",
    },
    {
      id: "exam-p3-hl-q13",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "7-hl-extensions",
      guideRef: "hl-synthesizing-extensions",
      commandTerm: "Analyse",
      marks: 6,
      question: `**Source Pack 2 · Cross-Extension HL Analysis [6 marks]** — In Source 2B's focus groups, Singapore and UK teens reported both compulsive swiping (*"you never know when the next great clip hits"*) and demoralizing algorithmic comparison (*"the feed pushes 'study with me' prodigies right after exam results—it makes me feel incompetent"*). Analyse how **Technology**, **Motivation**, and **Culture** interact across Biological, Cognitive, and Sociocultural mechanisms in Research Packet 2.`,
      hints: [
        "Biological + Technology + Motivation: unpredictable algorithmic feeds exploit **variable-ratio reinforcement** and **mesolimbic dopamine** reward-prediction error ('wanting' over sustained 'liking'), driving compulsive passive scrolling.",
        "Cognitive + Motivation: curated 'study with me' prodigy reels trigger **upward social comparison**, undermining **Self-Determination Theory's competence** need (and self-efficacy)—accounting for Passive Scrolling's negative link (r = −0.30) vs Active creation's mastery boost (r = +0.10).",
        "Sociocultural + Culture: high-stakes academic achievement norms (especially intense exam-meritocracy pressures in Singapore alongside UK GCSE/A-Level peer comparison) amplify vulnerability to algorithmic status anxiety and shape how feeds personalize content.",
      ],
      modelAnswer: "Research Packet 2 reveals a multi-level interaction across Technology, Motivation, and Culture spanning biological, cognitive, and sociocultural mechanisms. Biologically, algorithmic short-video feeds harness variable-ratio reinforcement schedules that stimulate mesolimbic dopamine reward-prediction error circuits—maximizing compulsive 'wanting' and swipe persistence even when subjective enjoyment fades, which displaces sustained cognitive effort needed for deep study. Cognitively, personalized recommendation algorithms amplify upward social comparison: when feeds surface hyper-curated 'study with me' prodigies right after exam results, passive viewers experience threatened self-efficacy and frustrated competence—one of Deci and Ryan's core Self-Determination Theory needs—helping explain why passive scrolling correlated negatively with intrinsic motivation (r = −0.30). By contrast, teens engaging in active creative or educational posting (r = +0.10) exercise autonomy, mastery, and constructive peer feedback rather than passive comparison, illustrating that Technology's motivational impact depends on active agency. Socioculturally, Culture shapes both what algorithms amplify and how teens appraise it: within intense exam-meritocracy norms (particularly salient in Singapore's competitive academic culture alongside UK high-stakes GCSE/A-Level pressures), algorithmic feeds convert culturally valued academic diligence into perpetual social-comparison threat. Understanding adolescent digital motivation therefore requires integrating neurobiological reward design, cognitive need frustration, and culturally specific achievement norms simultaneously.",
      markScheme: [
        { point: "Analyses biological mechanism: mesolimbic dopamine / reward-prediction error driven by variable-ratio algorithmic design", keywords: ["dopamine", "mesolimbic", "reward-prediction", "variable-ratio", "wanting"] },
        { point: "Analyses cognitive comparison mechanism: algorithmic upward social comparison triggered by 'study with me' prodigy content", keywords: ["upward social comparison", "social comparison", "prodigies", "curated"] },
        { point: "Links directly to Motivation theory: SDT competence frustration / lowered self-efficacy explaining passive scrolling (r = −0.30)", keywords: ["competence", "self-efficacy", "self-determination", "-0.30"] },
        { point: "Contrasts active creative/educational agency (autonomy/mastery) explaining the positive subgroup (r = +0.10)", keywords: ["active", "autonomy", "mastery", "agency", "+0.10"] },
        { point: "Integrates Culture & sociocultural context (competitive exam/meritocracy norms in Singapore and UK peer expectations)", keywords: ["meritocracy", "exam", "singapore", "norms", "competitive"] },
        { point: "Synthesizes the three HL extensions explicitly as interacting rather than isolated factors", keywords: ["multi-level", "interact", "simultaneously", "displaces"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Describes social media harm generally with minimal link to biological/cognitive/cultural mechanisms or Packet 2 data." },
        { band: "3–4", marks: [3, 4], descriptor: "Analyses two extensions or mechanisms clearly using quotes and correlations from Research Packet 2." },
        { band: "5–6", marks: [5, 6], descriptor: "Integrated HL analysis weaving dopamine/VR neuroscience, upward comparison/SDT competence vs active autonomy, and Singapore/UK cultural exam norms." },
      ],
      commonError: "Treating Technology, Motivation, and Culture in isolated paragraphs without explaining how algorithmic feeds *interact* with biological dopamine and cultural achievement norms.",
    },
    {
      id: "exam-p3-hl-q14",
      kind: "written",
      difficulty: "core",
      level: "HL",
      topicId: "1-concepts-methodology",
      guideRef: "ethics-unseen-study-paper2",
      commandTerm: "Evaluate",
      marks: 6,
      question: `**Source Pack 2 · Ethics & Focus-Group Critique [6 marks]** — In Research Packet 2, researchers linked 14–17-year-old students' self-reported screen-time surveys directly to school ID numbers prior to coding, and employed a school counsellor to moderate six 8-student focus groups. Evaluate the ethical **Responsibility** and **Bias** issues raised by these procedures.`,
      hints: [
        "Confidentiality / anonymity breach (Responsibility): linking surveys to school ID numbers identifies minors' sensitive screen habits and academic motivation—risking stigma, disciplinary anxiety, or data leakage.",
        "Dual-role authority / coercion & Bias: having a school counsellor moderate focus groups creates a power hierarchy—adolescents aged 14–17 may feel pressured to participate (compromising voluntary assent / right to withdraw) and self-censor honest scrolling habits (social desirability Bias).",
        "Focus-group conformity Bias & confidentiality: 8-student peer groups cannot guarantee absolute peer-to-peer confidentiality and risk dominant voices / normative conformity suppressing vulnerable teens' disclosures.",
        "Vulnerable minors & societal Responsibility: requires parental consent + adolescent assent, independent anonymization, pastoral safeguarding, and responsible reporting that avoids blaming teens for persuasive platform algorithms.",
      ],
      modelAnswer: "Research Packet 2's procedures raise substantial ethical Responsibility and Bias flaws concerning 14–17-year-old minors. First, attaching school ID numbers to screen-time and motivation surveys breaches confidentiality and anonymity: because responses can be traced back to named pupils, students may fear academic scrutiny or parental disclosure—not only creating ethical risk of data exposure, but also inducing systematic under-reporting (social desirability Bias) on the survey itself. Researchers should replace school IDs immediately with unlinked anonymous participant tokens. Second, using a school counsellor to moderate 8-student focus groups introduces a dual-role power dynamic: minors may feel subtly obligated to participate (weakening voluntary adolescent assent alongside required parental informed consent and the right to withdraw) and may edit sensitive admissions of compulsive scrolling or feelings of incompetence to avoid clinical concern or judgment. Third, group dynamics inside focus groups compromise confidentiality—researchers cannot legally prevent peers from repeating disclosures outside the room—while dominant voices can trigger normative conformity bias and silence quieter teens. Finally, broader societal Responsibility requires full debriefing with optional digital-wellbeing support and framing public findings carefully around persuasive algorithmic platform design rather than pathologizing adolescents.",
      markScheme: [
        { point: "Identifies confidentiality / anonymity breach from linking school ID numbers to sensitive survey responses", keywords: ["confidentiality", "anonym", "traced", "tokens", "exposure"] },
        { point: "Connects identifiable IDs directly to self-report social desirability Bias (under-reporting scrolling)", keywords: ["under-reporting", "social desirability", "scrutiny", "systematic"] },
        { point: "Critiques school counsellor moderator via dual-role power dynamic / coercion threatening assent and right to withdraw", keywords: ["power", "dual-role", "obligated", "assent", "right to withdraw"] },
        { point: "Notes parental consent requirement for 14–17-year-old minors", keywords: ["parental", "minors", "informed consent"] },
        { point: "Evaluates focus-group peer confidentiality limits and normative conformity / dominant-voice Bias", keywords: ["conformity", "dominant", "peers", "repeating", "silence"] },
        { point: "Addresses debriefing, safeguarding support, and societal Responsibility regarding persuasive algorithms", keywords: ["debriefing", "persuasive", "pathologizing", "wellbeing", "support"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Lists generic ethical terms without connecting to school IDs, counsellor moderation, or 8-teen focus-group dynamics." },
        { band: "3–4", marks: [3, 4], descriptor: "Clearly evaluates confidentiality and counsellor power/bias issues in Packet 2 with partial remedies." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive, packet-grounded evaluation uniting anonymity, dual-role power/assent, peer focus-group bias, and broader algorithmic Responsibility." },
      ],
      commonError: "Overlooking how focus groups inherently limit peer-to-peer confidentiality and introduce normative group conformity compared with anonymous one-to-one interviews.",
    },
    {
      id: "exam-p3-hl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "8-hl-paper3-data-analysis",
      guideRef: "paper3-exam-strategy",
      commandTerm: "Design",
      marks: 9,
      question: `**Source Pack 2 · HL Paper 3 Follow-Up Proposal [9 marks]** — Propose a justified **mixed-methods follow-up investigation** extending Research Packet 2 to test whether modifying algorithmic short-video exposure causally changes adolescents' academic intrinsic motivation across two cultures. Your proposal must explicitly address **Causality**, **Measurement**, cultural **Perspective**, qualitative **reflexivity**, and ethical **Responsibility**.`,
      hints: [
        "Strengthen **Causality**: 4-week multi-site randomized controlled field experiment (Singapore & UK, stratified by gender, school, and baseline passive usage) randomly allocating adolescents to (1) **Chronological / Non-Algorithmic Feed + Study-Time Friction** vs (2) **Active-Goal Reflection / Usual Feed Control**, tracking weekly longitudinal trajectories (**Change**).",
        "Strengthen **Measurement**: replace error-prone self-report screen minutes with **objective OS digital-wellbeing / passive-vs-active usage logs** plus validated motivation scales AND behavioural task persistence / school assignment completion; compute effect sizes (Cohen's d / r²) alongside p-values.",
        "Strengthen cultural **Perspective**: use a derived-etic + emic measurement design (independent back-translation, local Singapore & UK adolescent co-design panels testing conceptual equivalence, direct measurement of individual cultural achievement orientation rather than country stereotypes).",
        "Strengthen qualitative trustworthiness & **reflexivity**: anonymous 1-to-1 semi-structured interviews led by neutral trained external interviewers (not school counsellors), dual independent coders, member checking, audit trail, and explicit **reflexive journals**.",
        "Strengthen **Responsibility**: dual consent (parental written consent + voluntary teen assent), unlinked anonymous ID tokens, unrestricted withdrawal without school penalty, full debriefing, and data-privacy protection on device logs.",
      ],
      modelAnswer: "To overcome Research Packet 2's correlational, self-report, and ethical limits, I propose a 4-week cross-cultural randomized controlled mixed-methods trial conducted concurrently in Singapore and the UK (N = 240 adolescents aged 15–16, 120 per site). First, to establish Causality, volunteers within each school will be stratified by baseline passive scrolling and randomly allocated either to an experimental Algorithmic-Friction condition (disabling auto-play and personalized 'For You' recommendations while using a chronological subscription-only feed during weekday evenings) or to an active control condition (maintaining regular feeds while logging a neutral 2-minute daily digital diary). Random allocation and longitudinal pre-, mid-, and post-intervention tracking isolate causal Change from reverse causality and third variables such as baseline stress or SES, and statistical reporting will pair p-values with standardized effect sizes (Cohen's d and variance explained) plus subgroup checks for passive versus active usage. Second, to elevate Measurement validity, error-prone retrospective screen-time estimates will be replaced by objective smartphone operating-system usage logs distinguishing passive scrolling from active posting, triangulated with an ecologically valid behavioural persistence task (voluntary minutes spent on challenging non-graded study puzzles) alongside a validated intrinsic motivation inventory. Third, to honour cultural Perspective and avoid imposed-etic bias, instruments will undergo independent back-translation and pilot co-design with Singaporean and UK teens to verify conceptual equivalence, incorporating both Western autonomy items and emic socially oriented achievement motivation items while directly measuring individual cultural values rather than relying on national stereotypes (avoiding the ecological fallacy). Fourth, an explanatory sequential qualitative phase will interview a purposive subsample (n = 32 across both sites) via private one-to-one semi-structured sessions led by neutral external researchers rather than school counsellors, eliminating peer conformity and school-authority bias. Two independent analysts will code transcripts using an audit trail, perform member checking with interviewees to establish credibility, and maintain personal and epistemological reflexivity journals documenting how their own generational views of social media might colour theme interpretation (confirmability). Finally, ethical Responsibility will be safeguarded through written parental informed consent plus voluntary adolescent assent, immediate replacement of names with unlinked anonymous ID tokens, privacy-preserving automated summaries of device logs (recording only duration categories, never personal messages or content), an explicit no-penalty right to withdraw, and full debriefing sharing evidence-based digital self-regulation strategies with all participants.",
      markScheme: [
        { point: "Strengthens Causality via randomized controlled field experiment with random allocation and active control", keywords: ["randomized", "randomly allocated", "active control", "chronological"] },
        { point: "Tracks longitudinal Change across multiple timepoints and reports effect sizes (Cohen's d / r²) alongside p-values", keywords: ["longitudinal", "cohen", "effect size", "timepoints", "pre-"] },
        { point: "Upgrades Measurement using objective OS usage logs (passive vs active) rather than self-report minutes alone", keywords: ["objective", "logs", "operating-system", "retrospective"] },
        { point: "Triangulates Measurement with an ecological behavioural persistence measure alongside validated motivation scales", keywords: ["behavioural", "persistence", "triangulated", "puzzles"] },
        { point: "Honours cultural Perspective via emic + etic items, back-translation/co-design, and measuring individual cultural values directly", keywords: ["back-translation", "conceptual equivalence", "emic", "ecological fallacy"] },
        { point: "Replaces counsellor focus groups with private 1-to-1 interviews by neutral external researchers to remove conformity/power Bias", keywords: ["one-to-one", "external", "conformity", "authority"] },
        { point: "Strengthens qualitative trustworthiness via dual coders, audit trail, and member checking (credibility/dependability)", keywords: ["member checking", "audit trail", "dual", "two independent", "credibility"] },
        { point: "Explicitly integrates personal/epistemological reflexivity journals for confirmability", keywords: ["reflexiv", "confirmability", "generational", "epistemological"] },
        { point: "Safeguards ethical Responsibility (parental consent + teen assent, unlinked anonymous tokens, log privacy, right to withdraw, debriefing)", keywords: ["parental", "assent", "tokens", "privacy", "debriefing", "withdraw"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–3", marks: [1, 3], descriptor: "Proposes a general experiment or interview with minimal operational detail or connection to Packet 2's limitations." },
        { band: "4–6", marks: [4, 6], descriptor: "Solid mixed-methods design improving Causality, Measurement, and ethics, though cultural Perspective or reflexivity is underdeveloped." },
        { band: "7–9", marks: [7, 9], descriptor: "Rigorous, coherent HL Paper 3 mixed-methods proposal seamlessly integrating RCT Causality, objective/behavioural Measurement, emic/etic Perspective, reflexivity, and adolescent Responsibility." },
      ],
      commonError: "Proposing 'ban all smartphones completely for a month' (unrealistic, low ecological validity, high attrition) or forgetting to incorporate qualitative reflexivity and emic cultural validation.",
    },
  ],
};
