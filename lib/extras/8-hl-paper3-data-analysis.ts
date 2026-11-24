// ---------------------------------------------------------------------------
// Topic 8 (HL Only): Engagement extras for HL Paper 3 Data Analysis (FA2027).
// Pure data — strictly matches TopicExtras in lib/types.ts.
// ---------------------------------------------------------------------------
import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "In 2019, headlines warned that smartphone use was *“statistically proven (`p < 0.001`) to crush adolescent wellbeing.”* Then Oxford psychologists Amy Orben and Andrew Przybylski checked the actual effect size across 355,000 teenagers: digital technology explained just **0.4% of variance** (`r² = 0.004`) — roughly the same tiny share as wearing glasses or eating potatoes! In **FA2027 HL Paper 3**, catching the gap between scary headlines and real evidence is your superpower.",
  didYouKnow: [
    "**Anscombe's Quartet (1973):** Four completely different scatterplots — a clean straight line, a smooth curve, a line hijacked by one outlier, and a vertical stack with one extreme point — can share the **exact same mean, variance, and Pearson `r = +0.82`**! That is why HL Paper 3 analysts always inspect the visual plot alongside summary tables.",
    "**Jacob Cohen warned against blind benchmarks:** Although every IB textbook teaches Cohen's `d` rules of thumb (`0.2` small, `0.5` medium, `0.8` large), Cohen himself wrote that these labels were a reluctant last resort — a `d = 0.15` effect on a life-saving intervention can matter enormously, whereas `d = 0.20` on an expensive EdTech subscription may be practically negligible.",
    "**The 2015 Replication Shockwave:** When the Open Science Collaboration attempted to replicate 100 psychology papers from top journals, average effect sizes shrank by roughly half — exposing how **p-hacking** (running dozens of tests and publishing only `p < 0.05`) inflated Type I false positives across the discipline.",
    "**Why Qualitative Studies Reject 'Small N' Shame:** In 1985, Yvonna Lincoln and Egon Guba transformed qualitative methodology by proving that deep interview research shouldn't be graded on quantitative statistical power; instead, it achieves rigour through **Credibility, Transferability, Dependability, and Confirmability**.",
    "**Simpson's Paradox in Cross-Cultural Data:** An educational app can appear to *lower* average scores when two cultural cohorts are pooled together, yet *raise* scores inside every individual school cohort — a classic example of why inspecting group SDs and subgroup confounds saves Paper 3 marks!",
  ],
  activities: [
    {
      title: "The Truncated-Axis & Outlier Illusion Challenge",
      emoji: "📊",
      materials: [
        "A sheet of squared paper or spreadsheet app",
        "One calculator",
        "A 9-number dataset of daily study-app minutes (`22, 24, 25, 27, 28, 30, 31, 33, 140`)",
      ],
      steps: [
        "Calculate the mean (`40` min) and range (`118` min) for the dataset, then calculate the median (`28` min) and IQR (`31.5 − 24.5 = 7` min).",
        "Delete the single outlier (`140` min) and re-compute the mean (`27.5` min) — notice how one extreme participant shifted the mean by `12.5` minutes while the median barely budged (`27.5` vs `28`)!",
        "Now sketch two side-by-side bar charts of Group A (`M = 64`) vs Group B (`M = 61`, both `SD = 15`): draw Chart 1 starting the y-axis at `60` with no error bars, and Chart 2 starting at `0` with `±1 SD` bars.",
        "Show Chart 1 to a classmate for 3 seconds and ask 'How big is the difference?' — then flip to Chart 2 and compare their reaction!",
      ],
      maths:
        "Demonstrates outlier sensitivity ({{M = (sum x)/N}} vs median/IQR), Cohen's {{d = (64 - 61)/15 = 0.20}}, and how a truncated vertical axis multiplies perceived visual bar-height ratios by {{(64 - 60)/(61 - 60) = 4}} times!",
    },
    {
      title: "10-Minute Blind Dual-Coding Reflexivity Duel",
      emoji: "🎙️",
      materials: [
        "A partner (acting as second independent coder)",
        "Two contrasting highlighters (semantic vs latent)",
        "One 6-sentence transcript about AI homework tools or social-media streaks",
      ],
      steps: [
        "Before reading the transcript, write down two sentences in a **reflexive memo** stating your personal opinion about AI study apps or gamification (bracketing your bias).",
        "Independently highlight surface (**semantic**) statements in colour 1 and underlying cultural/motivational (**latent**) assumptions in colour 2 — without talking to your partner.",
        "Compare your two codebooks side by side: where did you agree (inter-coder dependability), and where did personal assumptions lead to different latent labels?",
        "Draft one 3-line Paper 3 Q2 evaluation paragraph describing how **researcher triangulation** and a **reflexive journal** caught a blind spot you would have missed alone.",
      ],
      maths:
        "Calculate simple inter-coder agreement percentage {{(\"Agreed codes\" / \"Total codes\") * 100%}} and reflect on why qualitative rigour values rich interpretive dialogue (confirmability & dependability) alongside numerical agreement.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Anscombe's Quartet: Identical Mean & Pearson r = +0.82, Four Different Stories",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" role="img" aria-label="Four mini scatterplots illustrating Anscombe Quartet: clean linear trend, curved inverted U parabola, straight line pulled by one vertical outlier, and vertical cluster with one extreme leverage point, all sharing r equals 0.82">
  <rect x="0" y="0" width="600" height="230" rx="12" fill="#ffffff"/>
  <text x="300" y="22" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">Why Paper 3 Analysts ALWAYS Inspect Scatterplots (All 4 Panels Share r = +0.82!)</text>

  <!-- Panel I: Linear -->
  <rect x="14" y="34" width="134" height="178" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="81" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">I. Genuine Linear</text>
  <line x1="28" y1="168" x2="136" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="28" y1="64" x2="28" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="34" y1="154" x2="132" y2="82" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="42" cy="148" r="3" fill="#15803d"/>
  <circle cx="56" cy="134" r="3" fill="#15803d"/>
  <circle cx="70" cy="128" r="3" fill="#15803d"/>
  <circle cx="84" cy="112" r="3" fill="#15803d"/>
  <circle cx="98" cy="108" r="3" fill="#15803d"/>
  <circle cx="112" cy="95" r="3" fill="#15803d"/>
  <circle cx="126" cy="86" r="3" fill="#15803d"/>
  <text x="81" y="188" font-size="8.5" text-anchor="middle" fill="#5b5375">Pearson r valid</text>
  <text x="81" y="201" font-size="8.5" font-weight="700" text-anchor="middle" fill="#15803d">(r² = 67%)</text>

  <!-- Panel II: Curvilinear -->
  <rect x="160" y="34" width="134" height="178" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="227" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#a16207">II. Curvilinear</text>
  <line x1="174" y1="168" x2="282" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="174" y1="64" x2="174" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="180" y1="154" x2="278" y2="82" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="186" cy="156" r="3" fill="#d97706"/>
  <circle cx="198" cy="130" r="3" fill="#d97706"/>
  <circle cx="212" cy="108" r="3" fill="#d97706"/>
  <circle cx="226" cy="94" r="3" fill="#d97706"/>
  <circle cx="242" cy="88" r="3" fill="#d97706"/>
  <circle cx="258" cy="94" r="3" fill="#d97706"/>
  <circle cx="272" cy="112" r="3" fill="#d97706"/>
  <text x="227" y="188" font-size="8.5" text-anchor="middle" fill="#5b5375">Non-linear curve</text>
  <text x="227" y="201" font-size="8.5" font-weight="700" text-anchor="middle" fill="#a16207">Straight line misfits</text>

  <!-- Panel III: Vertical Outlier -->
  <rect x="306" y="34" width="134" height="178" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="373" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#c2410c">III. One Y-Outlier</text>
  <line x1="320" y1="168" x2="428" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="320" y1="64" x2="320" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="326" y1="154" x2="424" y2="82" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="332" cy="150" r="3" fill="#2563eb"/>
  <circle cx="348" cy="142" r="3" fill="#2563eb"/>
  <circle cx="364" cy="134" r="3" fill="#2563eb"/>
  <circle cx="380" cy="126" r="3" fill="#2563eb"/>
  <circle cx="396" cy="118" r="3" fill="#2563eb"/>
  <circle cx="414" cy="110" r="3" fill="#2563eb"/>
  <circle cx="408" cy="70" r="4" fill="#c2410c"/>
  <text x="373" y="188" font-size="8.5" text-anchor="middle" fill="#5b5375">Single anomaly tilts</text>
  <text x="373" y="201" font-size="8.5" font-weight="700" text-anchor="middle" fill="#c2410c">slope &amp; lowers r</text>

  <!-- Panel IV: Leverage Outlier -->
  <rect x="452" y="34" width="134" height="178" rx="8" fill="#fff7ed" stroke="#fed7aa"/>
  <text x="519" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#9a3412">IV. Fake Leverage</text>
  <line x1="466" y1="168" x2="574" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="466" y1="64" x2="466" y2="168" stroke="#5b5375" stroke-width="1.2"/>
  <line x1="472" y1="154" x2="570" y2="82" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="496" cy="156" r="3" fill="#5b5375"/>
  <circle cx="496" cy="144" r="3" fill="#5b5375"/>
  <circle cx="496" cy="132" r="3" fill="#5b5375"/>
  <circle cx="496" cy="120" r="3" fill="#5b5375"/>
  <circle cx="496" cy="108" r="3" fill="#5b5375"/>
  <circle cx="496" cy="96" r="3" fill="#5b5375"/>
  <circle cx="566" cy="76" r="4.5" fill="#c2410c"/>
  <text x="519" y="188" font-size="8.5" text-anchor="middle" fill="#7c2d12">Zero trend without</text>
  <text x="519" y="201" font-size="8.5" font-weight="700" text-anchor="middle" fill="#9a3412">1 extreme outlier!</text>
</svg>`,
      caption:
        "All four panels produce nearly identical means, standard deviations, and r = +0.82 — proving why inspecting visual plots catches Measurement & Bias traps invisible in tables.",
    },
    {
      title: "Mixed-Method Source Triangulation: Convergent vs Divergent Evidence",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 215" role="img" aria-label="Flowchart comparing convergent mixed-method triangulation strengthening credibility against divergent mixed-method findings exposing hidden Measurement or reflexivity bias">
  <rect x="0" y="0" width="600" height="215" rx="12" fill="#ffffff"/>
  <text x="300" y="24" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">Reading Mixed-Method Paper 3 Packets: Convergence vs Divergence</text>

  <!-- Source A & Source B inputs -->
  <rect x="20" y="44" width="166" height="62" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="103" y="66" font-size="10.5" font-weight="800" text-anchor="middle" fill="#4c1d95">Source A · Quantitative</text>
  <text x="103" y="83" font-size="9" text-anchor="middle" fill="#1c1630">Means, SDs, p-values, d, r²</text>
  <text x="103" y="96" font-size="8.5" text-anchor="middle" fill="#5b5375">Tracks scale &amp; consistency</text>

  <rect x="20" y="128" width="166" height="62" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/>
  <text x="103" y="150" font-size="10.5" font-weight="800" text-anchor="middle" fill="#115e59">Source B · Qualitative</text>
  <text x="103" y="167" font-size="9" text-anchor="middle" fill="#1c1630">Verbatim quotes &amp; themes</text>
  <text x="103" y="180" font-size="8.5" text-anchor="middle" fill="#134e4a">Tracks cultural meaning &amp; why</text>

  <!-- Arrows -->
  <line x1="186" y1="75" x2="236" y2="75" stroke="#15803d" stroke-width="1.8"/>
  <line x1="186" y1="159" x2="236" y2="159" stroke="#c2410c" stroke-width="1.8"/>
  <line x1="212" y1="75" x2="212" y2="159" stroke="#5b5375" stroke-width="1.5" stroke-dasharray="3,2"/>

  <!-- Convergent outcome -->
  <rect x="238" y="42" width="342" height="68" rx="8" fill="#dcfce7" stroke="#4ade80" stroke-width="1.5"/>
  <text x="252" y="62" font-size="10.5" font-weight="800" fill="#15803d">Case 1: Convergent Triangulation (Sources Agree)</text>
  <text x="252" y="80" font-size="9.2" fill="#166534">• Quantitative gain (d = 0.72) aligns with lived autonomy quotes</text>
  <text x="252" y="96" font-size="9.2" fill="#166534">• Paper 3 link: Strengthens credibility &amp; construct validity (Measurement)</text>

  <!-- Divergent outcome -->
  <rect x="238" y="126" width="342" height="68" rx="8" fill="#ffedd5" stroke="#fb923c" stroke-width="1.5"/>
  <text x="252" y="146" font-size="10.5" font-weight="800" fill="#c2410c">Case 2: Divergent Triangulation (Sources Clash — GOLDMINE!)</text>
  <text x="252" y="164" font-size="9.2" fill="#9a3412">• Logged minutes rise (d = 1.4), yet P4 admits leaving tabs muted</text>
  <text x="252" y="180" font-size="9.2" fill="#9a3412">• Paper 3 link: Exposes Measurement flaw, social desirability, or subgroup split</text>
</svg>`,
      caption:
        "Never treat a clash between quantitative and qualitative sources as a mistake — divergence is often the exact top-band insight examiners planted in the packet!",
    },
  ],
  history: {
    title: "From a Cup of Tea (p < 0.05) to Effect Sizes & Trustworthiness: How Two Traditions Built FA2027 HL Paper 3",
    story:
      "In 1920s Cambridge, statistician **Ronald Fisher** designed the modern hypothesis test around a colleague, Muriel Bristol, who claimed she could taste whether milk or tea had been poured first into a cup. Fisher calculated the probability of guessing all cups right by pure luck — birthing the **`p`-value** and the familiar `α = 0.05` rule of thumb.\n\nDecades later, psychologist **Jacob Cohen** sounded the alarm: journals had turned `p < 0.05` into a mechanical gatekeeper, ignoring statistical power (missing real effects in small studies) and celebrating microscopic effects in huge datasets. Cohen's insistence on **effect sizes (`d`, `r²`)** gave researchers a ruler for *practical* human importance.\n\nMeanwhile, qualitative pioneers **Yvonna Lincoln and Egon Guba (1985)** demonstrated that human culture, identity, and lived motivation cannot be reduced to numbers alone — establishing the four **trustworthiness criteria** (Credibility, Transferability, Dependability, Confirmability) and **reflexivity**.\n\nThe **NEW FA2027 IB Psychology HL Paper 3** intentionally unites all three traditions inside one mixed-method exam: you use Fisher's probability logic, Cohen's magnitude lens, and Lincoln & Guba's qualitative audit simultaneously to evaluate real evidence on **Culture, Motivation, and Technology**.",
  },
};
