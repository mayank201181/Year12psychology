// ---------------------------------------------------------------------------
// Topic 8 (HL Only): HL Paper 3 — Research Data Analysis & Source Evaluation
// Strictly aligned to NEW IB Diploma Psychology (First Assessment May 2027).
// HL Paper 3: 1h 45m · 30 marks · 30% of HL grade · Culture, Motivation & Technology.
// ---------------------------------------------------------------------------
import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "8-hl-paper3-data-analysis",
  title: "Topic 8: HL Paper 3 — Research Data Analysis & Source Evaluation",
  strand: "HL Extensions & Paper 3",
  icon: "📈",
  level: "HL",
  summary:
    "Master the NEW FA2027 HL Paper 3 (1h 45m, 30 marks, 30%): dissect quantitative tables, error bars, p-values and Cohen's d, audit qualitative coding and reflexivity, and evaluate mixed-method source packs grounded in Culture, Motivation & Technology.",
  intro:
    "HL Paper 3 is where you stop reciting textbook studies from memory and think like a working psychological scientist. You are handed an unseen mixed-method source packet — tables, graphs, statistical tests, methodological briefs, and interview transcripts — rooted in the three HL Extensions (**Culture, Motivation, and Technology**). Top-band Paper 3 candidates do two things relentlessly: they **read the numbers and quotes with surgical precision** (catching skewed means, truncated axes, tiny effect sizes hiding behind `p < 0.05`, and unreflexive coding), and they **anchor every evaluation directly to the 6 FA2027 Core Concepts** (Bias, Causality, Change, Measurement, Perspective, and Responsibility).",
  guide: [
    // =========================================================================
    // SECTION 1
    // =========================================================================
    {
      id: "quantitative-descriptive-visual",
      heading: "Quantitative Data: Central Tendency, Dispersion, Graphs & Outliers",
      level: "HL",
      discovery: {
        problem:
          "Nine Year 12 students in a **Technology & Motivation** study report their daily educational-app screen time (minutes): `20, 24, 25, 28, 30, 32, 34, 35, 132`. A news headline claims: *“Typical teenagers spend 40 minutes a day on study apps, with an enormous 112-minute spread!”* Before reading further: why is that headline mathematically accurate yet psychologically misleading — and what two numbers tell the truer story?",
        idea:
          "The headline used the **mean (`40` min)** and **range (`112` min)** — both of which are dragged upwards by a single extreme outlier (`132` min, perhaps a student who left the app running overnight). Eight of the nine students actually scored between `20` and `35` minutes! The **median (`30` min)** and **interquartile range (`IQR = 10` min)** resist extreme scores and honestly describe the typical participant. In HL Paper 3, spotting when a mean or range has been hijacked by skew is an instant Measurement & Bias insight.",
      },
      body: [
        "Quantitative Paper 3 sources rarely ask you to compute a 30-person standard deviation by hand; instead, they test whether you can **choose, calculate, and critique** summary statistics and visual displays to decide what the data genuinely show.",
        "",
        "### 1. Choosing the Right Measure of Central Tendency",
        "- **Mean ({{M}} or {{x̄}}):** Sum of all scores divided by sample size ({{N}}). Uses every data point and powers parametric inferential tests, **best for symmetric (normal) interval/ratio data**. **Vulnerability:** highly sensitive to extreme outliers and skewness.",
        "- **Median:** The middle value when scores are ordered (for even {{N}}, the midpoint of the two central values). **Best for ordinal data (e.g., single Likert items) or skewed distributions with outliers.**",
        "- **Mode:** Most frequent score. **Only valid measure for nominal (categorical) data** (e.g., preferred cultural coping strategy or most-used social-media platform) and useful for identifying bimodal distributions.",
        "",
        "**Skewness diagnostic rule for Paper 3 tables:** If a source reports both the mean and median:",
        "- **Mean ≈ Median** → roughly symmetrical distribution.",
        "- **Mean > Median** → **positively skewed** (right tail pulled out by unusually high outliers, e.g., extreme gaming hours or slow reaction times).",
        "- **Mean < Median** → **negatively skewed** (left tail pulled down by unusually low scores, e.g., a ceiling effect where most students score 90%+ on an easy motivation quiz).",
        "",
        "### 2. Dispersion: Why Averages Alone Hide the Story",
        "Two cultural cohorts can have the exact same mean score of `70/100` yet behave completely differently. Always inspect dispersion alongside central tendency:",
        "- **Range (`Max − Min`):** Easy to compute, but depends solely on the two most extreme values — one anomalous participant makes the whole group look wildly inconsistent.",
        "- **Interquartile Range ({{IQR = Q_3 - Q_1}}):** Spread of the middle 50% of scores. Pair **median + IQR** for skewed or ordinal data.",
        "- **Standard Deviation ({{SD}}):** Average distance of scores from the mean. Pair **mean + SD** for roughly normal data.",
        "  - **Small SD** → scores cluster tightly around the mean (high consistency / homogeneous group).",
        "  - **Large SD** → scores are widely scattered (low consistency / individual or cultural heterogeneity; may signal unreliable measurement or unmeasured subgroups).",
        "",
        "### 3. Reading Graphs, Error Bars, Scatterplots & Distortion Traps",
        "- **Bar Charts with Error Bars:** Always read the **caption/legend** to check whether error bars show **±1 SD** (spread of raw individual scores) or **95% Confidence Intervals (95% CI)** (precision of the estimated population mean). Huge, heavily overlapping `±1 SD` bars warn that individual variability swamps the average difference between conditions.",
        "- **Scatterplots (Correlations):** Describe four features systematically — **direction** (positive/negative), **strength** (tight vs diffuse cloud), **form** (linear vs curvilinear, e.g., Yerkes–Dodson inverted-U arousal–motivation curve), and **bivariate outliers** (one extreme point can artificially inflate Pearson {{r}}).",
        "- **Visual Distortion Traps (Bias & Measurement):**",
        "  1. **Truncated y-axis:** Starting a bar chart at `60` instead of `0` makes a tiny `2`-point gap (`63` vs `65`) look three times taller!",
        "  2. **Unequal axis intervals** or **cherry-picked time windows** hiding baseline trends.",
        "  3. **Missing error bars** concealing massive within-group noise.",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 265" role="img" aria-label="Three-panel quantitative data diagnostic: positively skewed distribution showing mode less than median less than mean, bar chart with plus or minus 1 SD overlapping error bars, and truncated y-axis visual distortion compared with zero baseline">
  <rect x="0" y="0" width="600" height="265" rx="12" fill="#ffffff"/>
  <!-- Panel 1: Positive Skew -->
  <rect x="10" y="12" width="186" height="240" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="103" y="32" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1c1630">1. Positive Skew Trap</text>
  <line x1="24" y1="182" x2="184" y2="182" stroke="#5b5375" stroke-width="1.5"/>
  <path d="M 28 182 C 42 180, 48 64, 64 64 C 82 64, 96 146, 128 168 C 150 179, 166 181, 180 182" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.2"/>
  <line x1="64" y1="64" x2="64" y2="182" stroke="#0d9488" stroke-width="1.6" stroke-dasharray="3,2"/>
  <line x1="82" y1="112" x2="82" y2="182" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="108" y1="154" x2="108" y2="182" stroke="#c2410c" stroke-width="1.8"/>
  <circle cx="170" cy="176" r="4" fill="#c2410c"/>
  <text x="168" y="166" font-size="9" font-weight="700" text-anchor="end" fill="#c2410c">Outlier</text>
  <text x="64" y="196" font-size="9" font-weight="700" text-anchor="middle" fill="#0d9488">Mode</text>
  <text x="84" y="210" font-size="9" font-weight="700" text-anchor="middle" fill="#2563eb">Median</text>
  <text x="115" y="196" font-size="9" font-weight="700" text-anchor="middle" fill="#c2410c">Mean</text>
  <text x="103" y="232" font-size="9" text-anchor="middle" fill="#5b5375">Mean pulled right → use</text>
  <text x="103" y="244" font-size="9" font-weight="700" text-anchor="middle" fill="#1c1630">Median + IQR</text>

  <!-- Panel 2: Error Bars -->
  <rect x="207" y="12" width="186" height="240" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="300" y="32" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1c1630">2. ±1 SD Error Bars</text>
  <line x1="234" y1="54" x2="234" y2="182" stroke="#5b5375" stroke-width="1.5"/>
  <line x1="234" y1="182" x2="380" y2="182" stroke="#5b5375" stroke-width="1.5"/>
  <text x="228" y="62" font-size="8.5" text-anchor="end" fill="#5b5375">100</text>
  <text x="228" y="122" font-size="8.5" text-anchor="end" fill="#5b5375">50</text>
  <text x="228" y="184" font-size="8.5" text-anchor="end" fill="#5b5375">0</text>
  <!-- Group A bar (M=62, SD=20) -->
  <rect x="255" y="106" width="40" height="76" rx="3" fill="#a78bfa"/>
  <line x1="275" y1="80" x2="275" y2="132" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="268" y1="80" x2="282" y2="80" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="268" y1="132" x2="282" y2="132" stroke="#1c1630" stroke-width="1.8"/>
  <!-- Group B bar (M=56, SD=22) -->
  <rect x="319" y="114" width="40" height="68" rx="3" fill="#2dd4bf"/>
  <line x1="339" y1="86" x2="339" y2="142" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="332" y1="86" x2="346" y2="86" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="332" y1="142" x2="346" y2="142" stroke="#1c1630" stroke-width="1.8"/>
  <text x="275" y="196" font-size="9" font-weight="700" text-anchor="middle" fill="#1c1630">App A</text>
  <text x="339" y="196" font-size="9" font-weight="700" text-anchor="middle" fill="#1c1630">App B</text>
  <text x="300" y="218" font-size="9" text-anchor="middle" fill="#5b5375">Wide overlap: within-group</text>
  <text x="300" y="231" font-size="9" text-anchor="middle" fill="#5b5375">spread dwarfs 6-pt gap</text>
  <text x="300" y="244" font-size="9" font-weight="700" text-anchor="middle" fill="#1c1630">Check SD &amp; overlap!</text>

  <!-- Panel 3: Truncated Axis -->
  <rect x="404" y="12" width="186" height="240" rx="8" fill="#fff7ed" stroke="#fed7aa"/>
  <text x="497" y="32" font-size="11.5" font-weight="800" text-anchor="middle" fill="#9a3412">3. Truncated Y-Axis Trap</text>
  <!-- Left mini chart: truncated 60-66 -->
  <line x1="428" y1="62" x2="428" y2="176" stroke="#c2410c" stroke-width="1.5"/>
  <line x1="428" y1="176" x2="496" y2="176" stroke="#c2410c" stroke-width="1.5"/>
  <text x="424" y="66" font-size="8" text-anchor="end" fill="#9a3412">66</text>
  <text x="424" y="176" font-size="8" text-anchor="end" fill="#9a3412">60</text>
  <rect x="436" y="122" width="22" height="54" rx="2" fill="#fb923c"/>
  <rect x="466" y="84" width="22" height="92" rx="2" fill="#ea580c"/>
  <text x="462" y="190" font-size="8.5" font-weight="700" text-anchor="middle" fill="#c2410c">Starts at 60</text>
  <!-- Right mini chart: honest 0-100 -->
  <line x1="518" y1="62" x2="518" y2="176" stroke="#15803d" stroke-width="1.5"/>
  <line x1="518" y1="176" x2="582" y2="176" stroke="#15803d" stroke-width="1.5"/>
  <text x="514" y="66" font-size="8" text-anchor="end" fill="#15803d">100</text>
  <text x="514" y="176" font-size="8" text-anchor="end" fill="#15803d">0</text>
  <rect x="526" y="104" width="20" height="72" rx="2" fill="#86efac"/>
  <rect x="554" y="102" width="20" height="74" rx="2" fill="#16a34a"/>
  <text x="550" y="190" font-size="8.5" font-weight="700" text-anchor="middle" fill="#15803d">Starts at 0</text>
  <text x="497" y="218" font-size="9" text-anchor="middle" fill="#7c2d12">Same data (63 vs 65)!</text>
  <text x="497" y="231" font-size="9" text-anchor="middle" fill="#7c2d12">Truncated axis exaggerates</text>
  <text x="497" y="244" font-size="9" font-weight="700" text-anchor="middle" fill="#9a3412">a 2-point difference</text>
</svg>`,
      diagramCaption:
        "Three quantitative traps examiners plant in HL Paper 3 sources: outlier-driven skew (left), wide overlapping ±1 SD error bars (centre), and a truncated y-axis exaggerating a 2-point gap (right).",
      workedExamples: [
        {
          title: "Computing Mean, Median, Range & IQR on a Skewed Motivation Dataset",
          problem:
            "Nine Year 12 students record their daily study-app usage (minutes): `20, 24, 25, 28, 30, 32, 34, 35, 132`. Calculate the mean, median, range, and interquartile range (IQR), and recommend the best pair of summary statistics for Paper 3.",
          steps: [
            "Check that the data are sorted in ascending order: `20, 24, 25, 28, 30, 32, 34, 35, 132` ({{N = 9}}).",
            "Mean: sum all values `20 + 24 + 25 + 28 + 30 + 32 + 34 + 35 + 132 = 360`, then divide by `9`: {{M = 360/9 = 40}} minutes.",
            "Median: for {{N = 9}}, the middle position is {{(9 + 1)/2 = 5}}th value = `30` minutes.",
            "Range: `132 − 20 = 112` minutes.",
            "IQR: split around the median into lower half (`20, 24, 25, 28`) and upper half (`32, 34, 35, 132`). {{Q_1 = (24 + 25)/2 = 24.5}}; {{Q_3 = (34 + 35)/2 = 34.5}}; {{IQR = 34.5 - 24.5 = 10}} minutes.",
            "Diagnose skew: `Mean (40) > Median (30)` because the single outlier (`132`) drags both the mean and range upward. Report **median (`30` min) + IQR (`10` min)**.",
          ],
          answer: "Mean = 40 min, Median = 30 min, Range = 112 min, IQR = 10 min; report Median + IQR.",
          yourTurn: {
            question:
              "Seven participants in a smartphone-free study group recall these word counts: `12, 14, 15, 16, 17, 18, 48`. Calculate the **median** recall score.",
            answer: { type: "number", value: 16, display: "16" },
            solution:
              "The 7 scores are already sorted. The middle position is {{(7 + 1)/2 = 4}}th score, which is **16** words (whereas the outlier `48` pulls the mean up to `20`).",
          },
        },
        {
          title: "Interpreting Percentage Change and Standard Deviation Shifts",
          problem:
            "In a Motivation & Technology trial, removing competitive public leaderboards changed students' intrinsic motivation scores (0–50 scale) from `M = 25.0 (SD = 8.4)` to `M = 31.0 (SD = 4.2)`. Calculate the percentage change in the mean and interpret what the change in SD reveals.",
          steps: [
            "Percentage change formula: {{((M_2 - M_1)/M_1) * 100}}.",
            "Substitute: {{((31.0 - 25.0)/25.0) * 100 = (6.0/25.0) * 100 = +24%}}.",
            "Compare dispersion: SD halved from `8.4` to `4.2`, showing scores clustered much more tightly around the higher mean after leaderboards were removed.",
            "Paper 3 interpretation: removing public social comparison both raised average intrinsic motivation by `24%` and increased consistency across students (reducing extreme low-motivation tails).",
          ],
          answer: "+24% increase in mean intrinsic motivation; halved SD indicates much greater consistency.",
          yourTurn: {
            question:
              "In a Technology attention study, mean reaction time falls from `400 ms` (notifications enabled) to `340 ms` (notifications muted). Calculate the **percentage decrease** in mean reaction time.",
            answer: { type: "number", value: 15, display: "15%" },
            solution:
              "Decrease = `400 − 340 = 60 ms`. Percentage decrease = {{(60/400) * 100 = 15%}}.",
          },
        },
      ],
      keyPoints: [
        "Always pair **mean + SD** for roughly normal interval/ratio data, and **median + IQR** for skewed distributions, ordinal scales, or outlier-contaminated datasets.",
        "When **Mean > Median**, suspect **positive skew** (high outliers); when **Mean < Median**, suspect **negative skew** (low outliers or ceiling effect).",
        "A **large SD** relative to the mean signals low participant consistency or unmeasured subgroups (e.g., cultural or age heterogeneity).",
        "Before interpreting any Paper 3 bar chart, inspect three things: **y-axis origin (zero or truncated?)**, **error-bar definition (±1 SD vs 95% CI)**, and **sample size {{n}}**.",
      ],
      whyItWorks:
        "Descriptive statistics compress dozens or thousands of individual minds into two dimensions: typical location (central tendency) and individual diversity (dispersion). Checking how sensitive those numbers are to extreme values or graphic scaling directly operationalizes the FA2027 Core Concepts of **Measurement** and **Bias**.",
      strategies: [
        "Scan every Paper 3 table for **Mean vs Median divergence** and **SD size** before reading the researchers' conclusions.",
        "When quoting graphs in Paper 3 Q1/Q2, cite **both** the exact central tendency and the dispersion (`M = 31.0, SD = 4.2`) rather than saying 'scores went up'.",
        "Check y-axis tick marks immediately — if the bars do not start at zero, compute the actual raw difference before judging its size.",
      ],
      thinkDeeper:
        "Could a study have a **smaller SD** that actually signals a *measurement flaw* rather than genuine consistency? Think about **ceiling effects** (an overly easy test where almost everyone scores `48–50/50`) and **floor effects**: both artificially compress SD and hide real differences between cultural or motivational groups!",
    },

    // =========================================================================
    // SECTION 2
    // =========================================================================
    {
      id: "inferential-pvalues-effect-size",
      heading: "Inferential Statistics: Null Hypotheses, p-Values, Correlations & Effect Size",
      level: "HL",
      discovery: {
        problem:
          "Compare two **Technology & Motivation** studies:\n- **Study A (`N = 4,000`):** Teens using a wellbeing app score `0.4` points higher on a 100-point scale (`p = 0.008`, Cohen's `d = 0.08`).\n- **Study B (`N = 36`):** Teens receiving autonomy-supportive mentoring score `12.0` points higher (`p = 0.071`, Cohen's `d = 0.62`).\n\nWhich study is **statistically significant** at `α = 0.05`? Which shows the **larger real-world effect**? And why is it a fatal IB Paper 3 error to say Study A proves `H₀` has only a `0.8%` chance of being true?",
        idea:
          "**Study A** is statistically significant (`p = 0.008 < 0.05`) purely because its massive sample (`N = 4,000`) detects even a microscopic `0.4`-point ripple (`d = 0.08`, negligible practical importance). **Study B** misses `p < 0.05` because `N = 36` has low statistical power (risking a **Type II error**), even though its medium-to-large effect (`d = 0.62`) could matter deeply in schools! And `p = 0.008` is NOT the probability that `H₀` is true — it is the probability of obtaining data *at least this extreme assuming `H₀` is true*.",
      },
      body: [
        "Inferential statistics test whether an observed difference or correlation in a sample is unlikely to be mere sampling luck — yet **statistical significance alone never tells you whether an effect is big, causal, or useful in real life**.",
        "",
        "### 1. Hypotheses and the Exact Meaning of a p-Value",
        "- **Null Hypothesis ({{H_0}}):** Predicts **no true difference** between conditions (or no relationship, {{r = 0}}) in the population; any observed gap is due to chance/sampling error.",
        "- **Alternative Hypothesis ({{H_1}}):** Predicts a real difference or correlation — either **non-directional (two-tailed)** ('scores will differ') or **directional (one-tailed)** ('autonomy-supportive prompts will *increase* motivation').",
        "- **Exact Definition of {{p}}:** The probability of observing a test result **at least as extreme as the one recorded, assuming {{H_0}} is true**.",
        "- **Decision Rule:** Compare {{p}} to the pre-set significance level ({{α}}, typically `0.05` in psychology, or `0.01` when false positives carry high ethical cost):",
        "  - If **{{p < α}}** → result is **statistically significant** → **reject {{H_0}}** (support {{H_1}}, NEVER write 'proves {{H_1}}').",
        "  - If **{{p >= α}}** → result is **not statistically significant** → **fail to reject {{H_0}}** (NEVER write 'proves {{H_0}} is true' — the study may simply be underpowered!).",
        "",
        "### 2. Type I vs Type II Errors & Multiple-Testing Traps",
        "- **Type I Error (False Positive, probability {{α}}):** Rejecting {{H_0}} when {{H_0}} is actually true (claiming a brain-training app boosts IQ when it does nothing).",
        "  - *Inflated by:* setting a lenient {{α}}, running dozens of unplanned tests (**p-hacking**), or failing to apply a **Bonferroni correction** ({{α_\"adj\" = 0.05 / k}} across {{k}} tests).",
        "- **Type II Error (False Negative, probability {{β}}):** Failing to reject {{H_0}} when {{H_1}} is actually true (missing a real cultural difference or genuine intervention benefit).",
        "  - *Driven by:* small sample size ({{N}}), noisy measurement (large SD), or setting an overly strict {{α = 0.001}} without increasing sample size (**low statistical power**, {{1 - β}}).",
        "",
        "### 3. Statistical Significance vs Practical Significance (Cohen's d)",
        "Because {{p}} shrinks automatically as {{N}} grows, huge digital datasets (e.g., `N = 50,000` social-media users) routinely yield `p < 0.001` for trivial differences. Always check **effect size**:",
        "- **Cohen's {{d}}** measures the standardized distance between two means in SD units:",
        "  {{d = (M_1 - M_2) / SD_\"pooled\"}} (for equal group sizes, {{SD_\"pooled\" = sqrt((SD_1^2 + SD_2^2) / 2)}}).",
        "- **Cohen's benchmarks:** `|d| ≈ 0.2` (**small**), `|d| ≈ 0.5` (**medium**), `|d| ≥ 0.8` (**large**); `|d| < 0.2` is generally **negligible/trivial** even when `p < 0.001`.",
        "",
        "### 4. Correlations ({{r}}, {{ρ}}) and Shared Variance ({{r^2}})",
        "- **Pearson {{r}}** (parametric, interval/ratio, linear) and **Spearman {{ρ}}** (non-parametric, ordinal/ranked or skewed monotonic) range from `−1.00` (perfect negative) through `0` (no monotonic/linear association) to `+1.00` (perfect positive).",
        "- **Coefficient of Determination ({{r^2}}):** Expresses the **percentage of variance** shared between the two variables: {{r^2 * 100%}}. For example, `r = −0.50` gives `r² = 0.25` (**25%** shared variance, **75%** due to other factors!). Notice {{r^2}} is **always non-negative**.",
        "- **Causality Warning:** Even `r = 0.82, p < 0.001` **never establishes causation** because of **directionality/reverse causality** (does social media cause low mood, or does low mood increase scrolling?) and **third variables** (sleep deprivation, socioeconomic stress).",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 275" role="img" aria-label="Left panel: 2 by 2 hypothesis testing decision matrix showing Type I false positive error and Type II false negative error. Right panel: normal distribution overlap comparing small Cohen d of 0.2 with large Cohen d of 0.8">
  <rect x="0" y="0" width="600" height="275" rx="12" fill="#ffffff"/>
  <!-- Left Panel: Type I / Type II Matrix -->
  <rect x="12" y="12" width="286" height="250" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="155" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">Hypothesis-Test Error Matrix</text>
  <text x="163" y="56" font-size="10" font-weight="700" text-anchor="middle" fill="#5b5375">H₀ is Actually TRUE</text>
  <text x="249" y="56" font-size="10" font-weight="700" text-anchor="middle" fill="#5b5375">H₀ is Actually FALSE</text>
  <text x="64" y="106" font-size="10" font-weight="700" text-anchor="middle" fill="#1c1630">Reject H₀</text>
  <text x="64" y="119" font-size="9" text-anchor="middle" fill="#5b5375">(p &lt; α)</text>
  <text x="64" y="188" font-size="10" font-weight="700" text-anchor="middle" fill="#1c1630">Retain H₀</text>
  <text x="64" y="201" font-size="9" text-anchor="middle" fill="#5b5375">(p ≥ α)</text>
  <!-- Cells -->
  <rect x="116" y="66" width="84" height="74" rx="6" fill="#ffedd5" stroke="#fb923c" stroke-width="1.5"/>
  <text x="158" y="92" font-size="10.5" font-weight="800" text-anchor="middle" fill="#c2410c">Type I Error</text>
  <text x="158" y="107" font-size="9" text-anchor="middle" fill="#9a3412">False Positive</text>
  <text x="158" y="123" font-size="9" font-weight="700" text-anchor="middle" fill="#c2410c">Prob = α</text>

  <rect x="206" y="66" width="82" height="74" rx="6" fill="#dcfce7" stroke="#4ade80" stroke-width="1.5"/>
  <text x="247" y="96" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">Correct Hit</text>
  <text x="247" y="112" font-size="9" text-anchor="middle" fill="#166534">Power = 1 − β</text>

  <rect x="116" y="148" width="84" height="74" rx="6" fill="#dcfce7" stroke="#4ade80" stroke-width="1.5"/>
  <text x="158" y="178" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">Correct</text>
  <text x="158" y="194" font-size="9" text-anchor="middle" fill="#166534">True Negative</text>

  <rect x="206" y="148" width="82" height="74" rx="6" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
  <text x="247" y="174" font-size="10.5" font-weight="800" text-anchor="middle" fill="#a16207">Type II Error</text>
  <text x="247" y="189" font-size="9" text-anchor="middle" fill="#854d0e">False Negative</text>
  <text x="247" y="205" font-size="9" font-weight="700" text-anchor="middle" fill="#a16207">Prob = β</text>

  <text x="155" y="246" font-size="9" text-anchor="middle" fill="#5b5375">Stricter α (0.01) cuts Type I but raises Type II risk</text>

  <!-- Right Panel: Cohen's d overlap -->
  <rect x="310" y="12" width="278" height="250" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="449" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">Effect Size: Cohen's d Separation</text>
  <!-- Top: Small d = 0.2 -->
  <text x="449" y="56" font-size="10" font-weight="700" text-anchor="middle" fill="#5b5375">Small Effect (d = 0.2) — 92% overlap</text>
  <line x1="330" y1="132" x2="568" y2="132" stroke="#5b5375" stroke-width="1.2"/>
  <path d="M 340 132 C 378 132, 396 72, 434 72 C 472 72, 490 132, 528 132" fill="#a78bfa" fill-opacity="0.32" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 358 132 C 396 132, 414 72, 452 72 C 490 132, 508 132, 546 132" fill="#2dd4bf" fill-opacity="0.32" stroke="#0d9488" stroke-width="2"/>
  <line x1="434" y1="72" x2="434" y2="132" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="452" y1="72" x2="452" y2="132" stroke="#0d9488" stroke-width="1.2" stroke-dasharray="3,2"/>

  <!-- Bottom: Large d = 0.8 -->
  <text x="449" y="158" font-size="10" font-weight="700" text-anchor="middle" fill="#5b5375">Large Effect (d = 0.8) — 69% overlap</text>
  <line x1="330" y1="234" x2="568" y2="234" stroke="#5b5375" stroke-width="1.2"/>
  <path d="M 332 234 C 368 234, 384 174, 416 174 C 448 174, 464 234, 500 234" fill="#a78bfa" fill-opacity="0.32" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 398 234 C 434 234, 450 174, 482 174 C 514 174, 530 234, 566 234" fill="#2dd4bf" fill-opacity="0.32" stroke="#0d9488" stroke-width="2"/>
  <line x1="416" y1="174" x2="416" y2="234" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="482" y1="174" x2="482" y2="234" stroke="#0d9488" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="416" y1="188" x2="482" y2="188" stroke="#1c1630" stroke-width="1.5"/>
  <text x="449" y="184" font-size="9" font-weight="800" text-anchor="middle" fill="#1c1630">0.8 SD</text>
  <text x="449" y="252" font-size="9" text-anchor="middle" fill="#5b5375">p-value shrinks with N; Cohen's d does NOT</text>
</svg>`,
      diagramCaption:
        "Balancing Type I (α) vs Type II (β) error (left) and separating statistical significance from real-world magnitude via Cohen's d (right).",
      workedExamples: [
        {
          title: "Calculating Pooled SD, Cohen's d & Evaluating α Thresholds",
          problem:
            "In a Motivation & Technology experiment (`n₁ = 30, n₂ = 30`), students using an autonomy-supportive AI coach score `M₁ = 78.0 (SD₁ = 8.0)` while directive-coach students score `M₂ = 70.0 (SD₂ = 6.0)`. An independent t-test reports two-tailed `p = 0.018`. Calculate Cohen's `d` and evaluate statistical vs practical significance at `α = 0.05` and `α = 0.01`.",
          steps: [
            "Compute pooled SD for equal group sizes: {{SD_\"pooled\" = sqrt((8^2 + 6^2)/2) = sqrt((64 + 36)/2) = sqrt(50) ≈ 7.07}}.",
            "Compute Cohen's {{d}}: {{d = (78.0 - 70.0)/7.07 ≈ 1.13}}.",
            "Classify practical magnitude: `d = 1.13 ≥ 0.80` → a **large** practical effect size (over one full standard deviation of separation).",
            "Evaluate significance: at `α = 0.05`, `p = 0.018 < 0.05` → **statistically significant** (reject `H₀`). At a stricter `α = 0.01`, `p = 0.018 > 0.01` → **not significant** (fail to reject `H₀`, showing how stricter `α` protects against Type I error but raises Type II risk).",
          ],
          answer: "d ≈ 1.13 (large effect); significant at α = 0.05 (reject H₀), not significant at α = 0.01.",
          yourTurn: {
            question:
              "Two equal-sized cultural groups complete a collaborative problem-solving task: Group A scores `M₁ = 56 (SD₁ = 10)` and Group B scores `M₂ = 50 (SD₂ = 10)`. Calculate **Cohen's `d`** (give your answer to 1 decimal place).",
            answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.6" },
            solution:
              "Since both groups have `SD = 10`, {{SD_\"pooled\" = 10}}. Then {{d = (56 - 50)/10 = 0.6}} (a medium practical effect).",
          },
        },
        {
          title: "Interpreting Correlation r, Variance Explained r² & Causality Limits",
          problem:
            "A survey of `N = 250` adolescents reports a Pearson correlation of `r = −0.60, p < 0.001` between late-night short-video scrolling and morning working-memory span. Calculate the percentage of shared variance (`r²`) and explain why the authors cannot claim scrolling *causes* memory decline.",
          steps: [
            "Direction & strength: `r = −0.60` indicates a moderate-to-strong **negative** linear association (higher late-night scrolling is associated with lower morning working-memory span).",
            "Shared variance: {{r^2 = (-0.60)^2 = 0.36}}, so **36%** of the variance in working-memory span is shared with scrolling time (leaving **64%** explained by other factors).",
            "Causality critique (Core Concept — **Causality**): because neither variable was experimentally manipulated with random allocation, **reverse causality** (fatigued or anxious students may scroll more at night) and **third variables** (total sleep duration, academic stress) cannot be ruled out.",
          ],
          answer: "r² = 36% shared variance (64% unexplained); correlational design prevents causal claims.",
          yourTurn: {
            question:
              "A Motivation survey finds `r = 0.50` between perceived classroom autonomy and intrinsic engagement. What **percentage of variance** is shared between the two variables?",
            answer: { type: "number", value: 25, display: "25%" },
            solution:
              "Square the correlation and multiply by 100: {{0.50^2 * 100 = 0.25 * 100 = 25%}}.",
          },
        },
      ],
      keyPoints: [
        "{{p < 0.05}} means there is less than a 5% probability of observing data at least this extreme **if {{H_0}} were true** — NEVER say it means a 5% chance {{H_0}} is true or 95% proof of {{H_1}}.",
        "Large samples (`N > 1,000`) make even trivial differences (`d < 0.2`) statistically significant; always weigh **{{p}} alongside Cohen's {{d}}**.",
        "**Type I error ({{α}})** = false positive (inflated by multiple comparisons / p-hacking); **Type II error ({{β}})** = false negative (inflated by small {{N}} or noisy measurement).",
        "Square {{r}} to find **{{r^2}}** (percentage shared variance), and remember even `r = 0.90, p < 0.001` never establishes **Causality** without experimental control.",
      ],
      whyItWorks:
        "Inferential tests quantify sampling uncertainty, while effect sizes (`d`, `r²`) quantify psychological magnitude. Separating the two protects HL Paper 3 analysts from both headline hype (celebrating a `p = 0.001, d = 0.07` finding) and premature dismissal (ignoring an underpowered pilot study with `d = 0.65`).",
      strategies: [
        "Apply the **3-Check Inferential Audit** to every quantitative source: (1) Is {{p < α}}? (2) Is Cohen's {{d}} or {{r^2}} practically meaningful? (3) Does the design allow **Causality**?",
        "Spot **multiple-comparison inflation**: if a source runs 10 separate t-tests at `α = 0.05` and highlights one `p = 0.04`, note that Bonferroni adjustment demands {{α = 0.05/10 = 0.005}}!",
        "When writing about non-significant results (`p = 0.09`), avoid 'there is no effect' — write 'the study **failed to reject {{H_0}}**, possibly due to low statistical power (`n = 15`).'",
      ],
      thinkDeeper:
        "In 2019, Orben & Przybylski analysed over 350,000 adolescents and found that digital-technology use explained only `r² ≈ 0.4%` of wellbeing variance (`p < 0.001`) — roughly the same tiny association as wearing glasses or eating potatoes! How should policy-makers weigh **Responsibility** when an effect is statistically significant at massive `N` yet tiny at the individual level?",
    },

    // =========================================================================
    // SECTION 3
    // =========================================================================
    {
      id: "qualitative-coding-trustworthiness",
      heading: "Qualitative Source Analysis: Thematic Coding, Credibility & Reflexivity",
      level: "HL",
      discovery: {
        problem:
          "Read this interview excerpt from a bicultural Year 12 student in a **Culture & Technology** study:\n*“I ask the AI chatbot my physics questions at midnight instead of raising my hand in class — I don't want to slow everyone down or look selfish.”*\n\nA Western researcher codes this purely as *“Midnight tech addiction / social anxiety.”* What deeper cultural meaning did that coding miss, and how could the researcher have caught their own blind spot?",
        idea:
          "The surface (**semantic**) words mention midnight chatbot use, but the **latent** meaning reflects collectivist group-harmony and **face-saving** norms rather than 'addiction' or individual anxiety! By imposing an outsider (**etic**) clinical label without **personal/epistemological reflexivity** or **member checking**, the researcher introduced cultural **Bias** and weakened **credibility**.",
      },
      body: [
        "HL Paper 3 frequently pairs quantitative tables with **qualitative sources** — semi-structured interview transcripts, focus-group quotes, open-ended survey responses, or observation field notes. You cannot evaluate qualitative evidence using quantitative checklists alone (e.g., complaining 'only 12 interviewees, so it's ungeneralizable' misses the entire epistemology of qualitative inquiry!). Instead, apply rigorous **thematic coding** and **Lincoln & Guba's four trustworthiness criteria**.",
        "",
        "### 1. Thematic Analysis: Inductive vs Deductive & Semantic vs Latent",
        "- **Inductive Coding (Bottom-Up / Data-Driven):** Themes emerge directly from participants' own words without forcing pre-existing theories onto the text. Ideal for **emic** (culture-specific insider) discovery.",
        "- **Deductive Coding (Top-Down / Theory-Driven):** The analyst applies an existing theoretical lens (e.g., coding motivation transcripts for Deci & Ryan's Self-Determination Theory needs: *Autonomy, Competence, Relatedness*). Faster to compare against theory, but risks **confirmation bias** if unexpected cultural meanings are overlooked.",
        "- **Semantic Themes (Surface / Explicit):** Capture what participants literally state (*'I check notifications every 10 minutes'*).",
        "- **Latent Themes (Underlying / Interpretive):** Uncover hidden cultural norms, power relations, or motivational assumptions beneath the words (*'Perpetual responsiveness as an unspoken peer obligation'*).",
        "",
        "### 2. Lincoln & Guba's Four Pillars of Qualitative Trustworthiness",
        "| Qualitative Criterion | Quantitative Parallel | Meaning in Paper 3 | Concrete Verification Techniques |",
        "|---|---|---|---|",
        "| **Credibility** | Internal validity | Do the themes faithfully capture participants' lived reality? | **Member checking** (respondent validation), **triangulation** (data, method, or researcher), prolonged engagement, negative-case analysis |",
        "| **Transferability** | External validity / generalizability | Can readers judge whether findings fit *another* cultural or tech setting? | **Thick description** (rich detail of setting, norms, participant background, exact quotes) — NOT statistical generalization! |",
        "| **Dependability** | Reliability | Are the analytical steps transparent, consistent, and traceable? | **Audit trail** (documented codebook, raw-to-theme log), peer debriefing, inter-coder consistency checks |",
        "| **Confirmability** | Objectivity | Are findings grounded in participant data rather than researcher bias? | **Personal reflexivity** (positionality/values), **epistemological reflexivity** (how method shaped answers), reflexive journal |",
        "",
        "### 3. Researcher Reflexivity & Avoiding Quantification Bias",
        "- **Personal Reflexivity:** Examining how the researcher's own cultural background, age, status (e.g., an adult teacher interviewing teens about AI cheating), or prior beliefs shaped rapport, question wording, and theme selection.",
        "- **Epistemological Reflexivity:** Questioning how the chosen data-collection method itself constructed the data (e.g., a focus group on social-media insecurity triggers **social desirability** and peer conformity compared with anonymous diaries).",
        "- **Quantification Bias Trap:** Never convert tiny purposive qualitative samples into population percentages (*'3 of 6 interviewees disliked AI badges, proving 50% of students hate gamification'*). Qualitative samples aim for **information richness and thematic saturation**, not statistical representativeness!",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 278" role="img" aria-label="Left panel: inductive qualitative coding funnel from verbatim quote to initial codes to latent theme. Right panel: Lincoln and Guba four trustworthiness pillars mapped to credibility, transferability, dependability, and confirmability techniques">
  <rect x="0" y="0" width="600" height="278" rx="12" fill="#ffffff"/>
  <!-- Left Panel: Coding Funnel -->
  <rect x="12" y="12" width="276" height="254" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="150" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">Inductive Thematic Coding Path</text>

  <rect x="26" y="48" width="248" height="58" rx="7" fill="#ffffff" stroke="#a78bfa" stroke-width="1.6"/>
  <text x="150" y="65" font-size="9.5" font-weight="800" text-anchor="middle" fill="#6d28d9">1. Verbatim Transcript Excerpt</text>
  <text x="150" y="81" font-size="9" text-anchor="middle" fill="#1c1630">“I keep my streak alive even at 1 a.m. so</text>
  <text x="150" y="95" font-size="9" text-anchor="middle" fill="#1c1630">my study group doesn't lose its rank.”</text>

  <line x1="150" y1="106" x2="150" y2="122" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="145,118 155,118 150,126" fill="#7c3aed"/>

  <rect x="38" y="126" width="224" height="52" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="143" font-size="9.5" font-weight="800" text-anchor="middle" fill="#5b21b6">2. Semantic Initial Codes</text>
  <text x="150" y="158" font-size="9" text-anchor="middle" fill="#1c1630">• Late-night streak maintenance</text>
  <text x="150" y="171" font-size="9" text-anchor="middle" fill="#1c1630">• Fear of lowering group ranking</text>

  <line x1="150" y1="178" x2="150" y2="194" stroke="#0d9488" stroke-width="2"/>
  <polygon points="145,190 155,190 150,198" fill="#0d9488"/>

  <rect x="50" y="198" width="200" height="54" rx="7" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.6"/>
  <text x="150" y="216" font-size="9.5" font-weight="800" text-anchor="middle" fill="#115e59">3. Latent Theme (SDT + Culture)</text>
  <text x="150" y="232" font-size="9" text-anchor="middle" fill="#134e4a">Gamified guilt &amp; socially oriented</text>
  <text x="150" y="245" font-size="9" text-anchor="middle" fill="#134e4a">extrinsic obligation overriding autonomy</text>

  <!-- Right Panel: 4 Pillars -->
  <rect x="300" y="12" width="288" height="254" rx="8" fill="#f8f7fc" stroke="#e2dcf0"/>
  <text x="444" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="#1c1630">4 Pillars of Trustworthiness</text>

  <rect x="314" y="48" width="260" height="46" rx="6" fill="#dcfce7" stroke="#4ade80"/>
  <text x="324" y="66" font-size="10.5" font-weight="800" fill="#15803d">Credibility (Truth value)</text>
  <text x="324" y="83" font-size="9" fill="#166534">Member checking · Triangulation · Negative cases</text>

  <rect x="314" y="102" width="260" height="46" rx="6" fill="#e0f2fe" stroke="#38bdf8"/>
  <text x="324" y="120" font-size="10.5" font-weight="800" fill="#0369a1">Transferability (Context fit)</text>
  <text x="324" y="137" font-size="9" fill="#0c4a6e">Thick description of setting, culture &amp; sample</text>

  <rect x="314" y="156" width="260" height="46" rx="6" fill="#fef9c3" stroke="#eab308"/>
  <text x="324" y="174" font-size="10.5" font-weight="800" fill="#a16207">Dependability (Traceable process)</text>
  <text x="324" y="191" font-size="9" fill="#854d0e">Audit trail · Codebook · Inter-coder checks</text>

  <rect x="314" y="210" width="260" height="46" rx="6" fill="#ede9fe" stroke="#a78bfa"/>
  <text x="324" y="228" font-size="10.5" font-weight="800" fill="#6d28d9">Confirmability (Grounded in data)</text>
  <text x="324" y="245" font-size="9" fill="#4c1d95">Personal &amp; epistemological reflexivity journal</text>
</svg>`,
      diagramCaption:
        "Moving from verbatim participant voice to latent cultural/motivational themes (left) while auditing rigour via Lincoln & Guba's four trustworthiness pillars (right).",
      workedExamples: [
        {
          title: "Distinguishing Semantic vs Latent Coding and Auditing Reflexivity",
          problem:
            "In a Paper 3 qualitative source, a teacher interviews 8 of her own students about an AI essay-feedback tool. Participant P3 says: *“It definitely helps me fix grammar fast — I wouldn't ever rely on it for real ideas, of course.”* Identify one semantic code, one latent interpretation, and one reflexivity concern.",
          steps: [
            "Semantic (surface) code: **Perceived efficiency for grammar editing** (directly stated in 'helps me fix grammar fast').",
            "Latent (underlying) theme: **Defensive boundary-setting / academic integrity anxiety** (the emphatic hedge *“wouldn't ever… of course”* signals awareness of institutional rules against AI over-reliance).",
            "Personal & epistemological reflexivity concern: Because the interviewer is **P3's own teacher**, power asymmetry creates severe **social desirability bias** — students may under-report deeper AI reliance to protect grades or teacher approval.",
            "Trustworthiness remedy: Employ an independent, non-grading interviewer, guarantee pseudonymized confidentiality, and keep a **reflexive journal** documenting power dynamics (confirmability + credibility).",
          ],
          answer:
            "Semantic: fast grammar aid; Latent: defensive boundary-setting around AI stigma; Reflexivity flaw: teacher–student power asymmetry driving social desirability.",
          yourTurn: {
            question:
              "A qualitative researcher sends her drafted theme summaries back to the 12 interviewed teenagers so they can confirm whether the interpretations faithfully represent their experiences. Which **single trustworthiness criterion** does this member checking primarily strengthen?",
            answer: { type: "text", accept: ["credibility"], display: "Credibility" },
            solution:
              "**Credibility** — member checking (respondent validation) verifies that the researcher's themes accurately reflect participants' lived realities rather than analyst misinterpretation.",
          },
        },
        {
          title: "Evaluating Qualitative Transferability vs Quantification Bias",
          problem:
            "A Paper 3 commentary claims: *“Because 4 of 6 interviewed gamers in Seoul reported burnout from daily login rewards, 67% of global teenagers experience gamification burnout — yet the small sample makes the study worthless.”* Critique both halves of this claim using qualitative trustworthiness principles.",
          steps: [
            "First half (**Quantification bias**): Converting 4 of 6 purposive interviewees into a '67% global rate' misuses qualitative data as a representative statistical survey.",
            "Second half (**False quantitative standard**): Dismissing `N = 6` as 'worthless' ignores that qualitative research aims for **transferability** via **thick description** (rich detail of Korean gaming-café norms, peer guilds, and reward mechanics), not statistical generalization.",
            "Balanced Paper 3 verdict: The study offers credible emic insight into how daily streaks operate in that specific cultural ecology, which readers can cautiously transfer to similar peer-driven contexts if thick description and an audit trail are provided.",
          ],
          answer:
            "Reject both the 67% global extrapolation (quantification bias) and the dismissal of N = 6; judge contextual fit via thick description (transferability).",
        },
      ],
      keyPoints: [
        "**Inductive coding** builds themes bottom-up from participant voice; **deductive coding** maps text onto pre-existing theory (e.g., SDT) and risks confirmation bias.",
        "**Semantic themes** capture literal surface meaning; **latent themes** uncover underlying cultural norms, identity pressures, or motivational tensions.",
        "Memorise Lincoln & Guba's 4 pillars: **Credibility** (member checking/triangulation), **Transferability** (thick description), **Dependability** (audit trail), **Confirmability** (reflexivity).",
        "Never dismiss qualitative studies merely for 'small N' — and never fall into **quantification bias** by turning small interview counts into population percentages.",
      ],
      whyItWorks:
        "Human culture and motivation are saturated with unspoken meanings that closed-ended Likert scales flatten. Separating semantic from latent layers — and auditing who held the microphone via reflexivity — brings the FA2027 Core Concepts of **Perspective**, **Bias**, and **Responsibility** into sharp analytical focus.",
      strategies: [
        "When reading a Paper 3 transcript, underline **hedges, emotional metaphors, and cultural references** — these almost always unlock latent themes.",
        "Always check **who interviewed whom** (teacher vs peer, cultural insider vs outsider) to spot personal reflexivity gaps immediately.",
        "Pair qualitative quotes with quantitative anomalies from the same packet (**methodological triangulation**): does the interview *explain* why the quantitative SD was huge?",
      ],
      thinkDeeper:
        "What happens when **member checking** reveals that participants *disagree* with a researcher's latent theme (for example, teens deny feeling peer pressure even though their transcripts repeatedly mention fear of losing Snapchat streaks)? Does participant disagreement automatically disprove a latent theme, or should both perspectives be reported transparently?",
    },

    // =========================================================================
    // SECTION 4
    // =========================================================================
    {
      id: "paper3-exam-strategy",
      heading: "Mastering the 4-Question HL Paper 3 Source Packet",
      level: "HL",
      discovery: {
        problem:
          "Two HL candidates answer a Paper 3 question evaluating a mixed-method study of gamified vocabulary apps:\n- **Candidate A:** *“A limitation is low ecological validity and a small sample, so results cannot be generalized to other cultures. Also participants might show demand characteristics.”*\n- **Candidate B:** *“Although Source A shows a statistically significant gain (`M = 74.2 vs 71.0, p = 0.041`), the small effect size (`d = 0.21`) and wide overlapping spread (`SD = 15.1`) suggest limited practical impact; moreover, Source B (P4: ‘I tapped random answers to keep my flame badge’) exposes a **Measurement** flaw where streak points indexed compliance rather than deep learning.”*\n\nWhy does Candidate B score top markband while Candidate A is capped in the lowest band?",
        idea:
          "Candidate A wrote generic textbook boilerplate that could be pasted onto any study without reading the packet. Candidate B **triangulated specific quantitative numbers (`M, SD, p, d`) with a verbatim qualitative quote (`P4`)** and linked them explicitly to an FA2027 Core Concept (**Measurement**). In HL Paper 3, **source specificity is oxygen**: every claim must cite concrete figures, design features, or participant words from the unseen packet!",
      },
      body: [
        "The **NEW FA2027 IB Psychology HL Paper 3** lasts **1 hour 45 minutes**, carries **30 marks**, and accounts for **30% of your final HL grade**. Every Paper 3 presents an unseen **mixed-method source packet** (typically combining a quantitative dataset/graph, qualitative transcript/open-ended excerpts, and a methodological summary) contextualised within **Culture, Motivation, and/or Technology**.",
        "",
        "### 1. The 15-Minute Active Source-Packet Audit (Before Writing a Word!)",
        "Spend the first **10–15 minutes** annotating all sources across four rapid passes:",
        "1. **Quant Pass:** Circle {{N}}, Mean vs Median (skew?), SD / error-bar overlap, {{p}} vs {{α}}, Cohen's {{d}} or {{r^2}}, and y-axis origin.",
        "2. **Qual Pass:** Highlight 2–3 high-value participant quotes, check who collected the data (reflexivity!), and spot whether qualitative stories **converge** with or **contradict** the quantitative table (**triangulation**).",
        "3. **Concept Pass:** Tag which **Core Concepts** jump off the page — e.g., **Bias** (WEIRD/convenience sampling, social desirability), **Causality** (correlational/quasi-experimental confounds), **Measurement** (operationalization, construct validity, cultural invariance), **Perspective** (emic vs etic), **Responsibility** (digital privacy, minor consent, algorithmic harm), **Change** (novelty effect vs sustained longitudinal shift).",
        "4. **HL Extension Pass:** Note how **Culture**, **Motivation** (e.g., SDT autonomy/competence/relatedness, overjustification), and **Technology** (cognitive offloading, algorithmic nudges, attentional switching) interact inside the scenario.",
        "",
        "### 2. Navigating the 4-Question Paper 3 Progression (~3 min per mark)",
        "- **Question 1 — Interpreting & Identifying Findings from Sources:** Directly extract and describe trends, descriptive/inferential stats, or qualitative themes. *Rule:* quote exact means, SDs, {{p}}-values, effect sizes, or participant identifiers (`P2`, `Source A`).",
        "- **Question 2 — Methodological Evaluation (Bias, Measurement, Causality):** Evaluate internal/construct/ecological validity, reliability, statistical vs practical significance, or qualitative trustworthiness. *Rule:* explain **how** each flaw specifically distorted *this* study's outcome (direction of bias or rival causal explanation).",
        "- **Question 3 — Ethical Responsibility & Cultural/Theoretical Perspective:** Examine ethical dilemmas (informed consent with minors, digital trace-data privacy, deception/debriefing, psychological harm from social-comparison rankings) and cultural/theoretical lenses (emic vs etic validity, imposed-etic scales, Biological/Cognitive/Sociocultural perspectives).",
        "- **Question 4 — Justified Follow-Up Design / Extension:** Propose a concrete, ethically sound follow-up study (using one or more of the 4 FA2027 methods — Experiment, Survey, Interview, Observation — or an explanatory mixed-method design) that **directly repairs a limitation diagnosed earlier**. Specify:",
        "  1. **Target population & sampling** (justifying cultural/demographic fit),",
        "  2. **Design & operationalized variables** (IV/DV, control condition, random allocation / counterbalancing, or semi-structured interview + coding protocol),",
        "  3. **Rigour checks** (blinding, validated culturally adapted scales, power/effect size, or member checking/reflexivity/audit trail),",
        "  4. **Ethics & realistic trade-off** (acknowledging one remaining limitation of your own design shows Level 3 examiner maturity!).",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 268" role="img" aria-label="Four-question HL Paper 3 source packet workflow showing 15 minute source audit feeding Q1 findings, Q2 methodological evaluation, Q3 ethics and perspective, and Q4 justified follow-up design within 1 hour 45 minutes">
  <rect x="0" y="0" width="600" height="268" rx="12" fill="#ffffff"/>
  <!-- Top banner: Source Packet -->
  <rect x="18" y="14" width="564" height="52" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="300" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="#4c1d95">FA2027 HL Paper 3 Source Packet (1h 45m · 30 Marks · 30% HL)</text>
  <text x="300" y="53" font-size="9.5" font-weight="600" text-anchor="middle" fill="#5b21b6">15-Min Audit: Source A (Quant Stats/Graphs) + Source B (Qual Transcripts) + Source C (Method) · Culture / Motivation / Tech</text>

  <!-- Connector lines -->
  <line x1="90" y1="66" x2="90" y2="86" stroke="#7c3aed" stroke-width="1.6"/>
  <line x1="230" y1="66" x2="230" y2="86" stroke="#7c3aed" stroke-width="1.6"/>
  <line x1="370" y1="66" x2="370" y2="86" stroke="#7c3aed" stroke-width="1.6"/>
  <line x1="510" y1="66" x2="510" y2="86" stroke="#7c3aed" stroke-width="1.6"/>

  <!-- Q1 -->
  <rect x="18" y="88" width="134" height="162" rx="8" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
  <text x="85" y="108" font-size="11" font-weight="800" text-anchor="middle" fill="#15803d">Q1 · Findings</text>
  <text x="85" y="124" font-size="8.5" font-weight="700" text-anchor="middle" fill="#166534">Describe / Identify</text>
  <line x1="30" y1="132" x2="140" y2="132" stroke="#bbf7d0"/>
  <text x="28" y="150" font-size="8.8" fill="#1c1630">• Quote exact M, SD,</text>
  <text x="34" y="163" font-size="8.8" fill="#1c1630">median, p, d, r²</text>
  <text x="28" y="182" font-size="8.8" fill="#1c1630">• Cite P-IDs &amp; themes</text>
  <text x="28" y="201" font-size="8.8" fill="#1c1630">• Spot convergence or</text>
  <text x="34" y="214" font-size="8.8" fill="#1c1630">divergence across</text>
  <text x="34" y="227" font-size="8.8" fill="#1c1630">mixed sources</text>

  <!-- Q2 -->
  <rect x="162" y="88" width="134" height="162" rx="8" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="229" y="108" font-size="11" font-weight="800" text-anchor="middle" fill="#1d4ed8">Q2 · Methods</text>
  <text x="229" y="124" font-size="8.5" font-weight="700" text-anchor="middle" fill="#1e40af">Bias · Measurement</text>
  <line x1="174" y1="132" x2="284" y2="132" stroke="#bfdbfe"/>
  <text x="172" y="150" font-size="8.8" fill="#1c1630">• Causality &amp; confounds</text>
  <text x="172" y="169" font-size="8.8" fill="#1c1630">• Skew, error bars,</text>
  <text x="178" y="182" font-size="8.8" fill="#1c1630">p vs Cohen's d</text>
  <text x="172" y="201" font-size="8.8" fill="#1c1630">• Credibility, audit trail</text>
  <text x="178" y="214" font-size="8.8" fill="#1c1630">&amp; reflexivity</text>
  <text x="172" y="233" font-size="8.8" fill="#1c1630">• Direction of bias</text>

  <!-- Q3 -->
  <rect x="306" y="88" width="134" height="162" rx="8" fill="#fefce8" stroke="#facc15" stroke-width="1.5"/>
  <text x="373" y="108" font-size="11" font-weight="800" text-anchor="middle" fill="#a16207">Q3 · Ethics/Lens</text>
  <text x="373" y="124" font-size="8.5" font-weight="700" text-anchor="middle" fill="#854d0e">Responsibility · Lens</text>
  <line x1="318" y1="132" x2="428" y2="132" stroke="#fef08a"/>
  <text x="316" y="150" font-size="8.8" fill="#1c1630">• Minor consent, assent</text>
  <text x="322" y="163" font-size="8.8" fill="#1c1630">&amp; digital privacy</text>
  <text x="316" y="182" font-size="8.8" fill="#1c1630">• Emic vs etic cultural</text>
  <text x="322" y="195" font-size="8.8" fill="#1c1630">measurement fit</text>
  <text x="316" y="214" font-size="8.8" fill="#1c1630">• Bio/Cog/Soc lens</text>
  <text x="316" y="233" font-size="8.8" fill="#1c1630">• Societal AI impact</text>

  <!-- Q4 -->
  <rect x="450" y="88" width="132" height="162" rx="8" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/>
  <text x="516" y="108" font-size="11" font-weight="800" text-anchor="middle" fill="#c2410c">Q4 · Follow-Up</text>
  <text x="516" y="124" font-size="8.5" font-weight="700" text-anchor="middle" fill="#9a3412">Design &amp; Justify</text>
  <line x1="462" y1="132" x2="570" y2="132" stroke="#fed7aa"/>
  <text x="460" y="150" font-size="8.8" fill="#1c1630">• Fix a specific flaw</text>
  <text x="466" y="163" font-size="8.8" fill="#1c1630">from Sources A–C</text>
  <text x="460" y="182" font-size="8.8" fill="#1c1630">• Operationalize IV/DV</text>
  <text x="466" y="195" font-size="8.8" fill="#1c1630">or coding protocol</text>
  <text x="460" y="214" font-size="8.8" fill="#1c1630">• Sampling + ethics</text>
  <text x="460" y="233" font-size="8.8" fill="#1c1630">• Honest trade-off</text>
</svg>`,
      diagramCaption:
        "From 15-minute mixed-method source annotation to high-band responses across the four FA2027 HL Paper 3 question demands.",
      workedExamples: [
        {
          title: "Mini Source-Packet Walkthrough: Gamified Vocabulary Apps Across Two Cultures",
          problem:
            "**Source A (Quant, `N = 120` per country, 2-week quasi-experiment):** Students in Singapore (competitive leaderboard app) logged higher daily minutes (`M = 28.5, SD = 11.4`) than students in Finland (non-competitive personal-goal app, `M = 22.1, SD = 4.8`), `p = 0.003, d = 0.73`. However, 4-week retention quiz scores showed no significant difference (`p = 0.41, d = 0.11`).\n**Source B (Qual, 6 Singapore interviewees):** P2 stated: *“I re-did Level 1 flashcards ten times just to stay Top 3 — I barely read the new words.”*\nDemonstrate how to synthesize Q1–Q4 at top-band HL standard.",
          steps: [
            "**Q1 (Triangulated Findings):** Source A shows a statistically significant, medium-to-large increase in daily app minutes in Singapore (`M = 28.5 vs 22.1, p = 0.003, d = 0.73`), yet a much larger spread (`SD = 11.4 vs 4.8`) and no significant 4-week retention advantage (`p = 0.41, d = 0.11`). Source B explains this divergence: P2's gaming of Level 1 badges suggests extrinsic leaderboard chasing rather than deep learning.",
            "**Q2 (Measurement & Causality):** Operationalizing learning effort solely as 'daily minutes' lacks **construct validity** (Measurement), as P2 inflated minutes without encoding new vocabulary. Because country and app type are completely confounded (quasi-experiment), **Causality** cannot separate cultural norms from leaderboard design.",
            "**Q3 (Perspective & Responsibility):** An **emic** cultural lens warns against assuming competitive rankings motivate identically across East Asian and Nordic classrooms; ethically (**Responsibility**), public rankings may trigger performance anxiety in lower-scoring minors (`SD = 11.4` hints at polarized engagement).",
            "**Q4 (Justified Follow-Up):** Run a **2 × 2 randomized controlled experiment** within *both* Singapore and Finland (randomly assigning students in each country to Leaderboard vs Personal-Goal app), operationalize retention via blind-graded delayed recall + transfer tests at Week 6 (**Change**), and add independent semi-structured interviews with member checking to triangulate intrinsic motivation (SDT). Acknowledge the trade-off of higher attrition across a 6-week longitudinal window.",
          ],
          answer:
            "Triangulate Source A (d = 0.73 minutes vs d = 0.11 retention) with Source B (P2 extrinsic gaming), expose the country × app confound, and propose a within-culture randomized 2 × 2 longitudinal follow-up.",
          yourTurn: {
            question:
              "In a Paper 3 source packet with `N = 6,400` adolescent app users, a between-group wellbeing difference reports `p = 0.004` and Cohen's `d = 0.09`. Classify the practical effect size as **negligible**, **medium**, or **large**.",
            answer: { type: "text", accept: ["negligible"], display: "Negligible" },
            solution:
              "**Negligible** — `|d| = 0.09` is well below Cohen's `0.20` threshold for even a small effect; `p = 0.004` is driven by the massive sample (`N = 6,400`), not real-world impact.",
          },
        },
      ],
      keyPoints: [
        "Budget **15 minutes** for active source-packet annotation before writing, leaving **~3 minutes per mark** across the 30-mark paper.",
        "Every evaluative paragraph must follow the **Source → Concept → Impact** chain: quote exact numbers/transcript lines → name the FA2027 Core Concept → explain how it alters the conclusion.",
        "Always check for **mixed-method divergence**: qualitative quotes often reveal *why* a quantitative metric had poor construct validity or huge SD!",
        "In Q4 follow-up designs, never just write 'use a bigger sample' — specify **design, operationalization, cultural/ethical safeguards, and one realistic trade-off**.",
      ],
      whyItWorks:
        "IB Paper 3 markbands separate mid-band responses ('general methodological points') from top-band responses ('sustained, critical engagement with the specific sources'). Anchoring every claim to numbers, quotes, and Core Concepts guarantees your writing is impossible to dismiss as generic.",
      strategies: [
        "When two variables are confounded across cultures (e.g., Country A gets Tech X, Country B gets Tech Y), your killer Q4 fix is **randomizing both Tech conditions inside each culture**.",
        "Use a **3-column scratchpad** during the 15-minute read: `Quant Numbers` | `Qual Quotes & Reflexivity` | `Core Concepts + Q4 Fixes`.",
        "Never skip the **trade-off sentence** in Q4: noting how higher experimental control reduces ecological validity (or longitudinal follow-up raises attrition) demonstrates Level 3 IB evaluation.",
      ],
      thinkDeeper:
        "Suppose a quantitative survey finds that 80% of students report 'high enjoyment' of an AI tutor (`M = 4.3/5`), while qualitative interviews reveal deep anxiety about surveillance and data privacy. Which source should a school policymaker trust more — or does the contradiction itself uncover a dual psychological reality?",
    },
  ],

  // ===========================================================================
  // LEARN-SMART REVISION PACK
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "When is the **median + IQR** preferred over the **mean + SD** in HL Paper 3?",
        back: "When data are **skewed**, contain **extreme outliers**, or are **ordinal** (e.g., single Likert items), because outliers drag both the mean and range/SD away from the typical participant.",
        level: "HL",
      },
      {
        front: "What distribution shape is signalled when `Mean > Median` vs `Mean < Median`?",
        back: "`Mean > Median` signals **positive skew** (right tail pulled by high outliers); `Mean < Median` signals **negative skew** (left tail pulled by low outliers or a ceiling effect).",
        level: "HL",
      },
      {
        front: "What does a **large standard deviation (SD)** tell you about a group's scores?",
        back: "Individual scores are widely dispersed around the mean (**low consistency**), warning of substantial individual/cultural heterogeneity or noisy measurement.",
        level: "HL",
      },
      {
        front: "Why must you check whether error bars show **±1 SD** or **95% CI**?",
        back: "**±1 SD** shows the spread of raw individual scores, whereas a **95% CI** shows the precision of the estimated population mean (and shrinks as sample size `n` increases).",
        level: "HL",
      },
      {
        front: "What is the **exact definition** of a `p`-value (e.g., `p = 0.03`)?",
        back: "The probability of obtaining data **at least as extreme as observed, assuming the null hypothesis (`H₀`) is true** — NOT the probability that `H₀` is true!",
        level: "HL",
      },
      {
        front: "Distinguish **Type I error (`α`)** from **Type II error (`β`)**.",
        back: "**Type I (false positive):** rejecting `H₀` when it is actually true (inflated by p-hacking / multiple testing). **Type II (false negative):** failing to reject `H₀` when `H₁` is true (driven by small `N` / low power).",
        level: "HL",
      },
      {
        front: "Why can a result have `p < 0.001` yet negligible practical importance?",
        back: "Very **large sample sizes (`N`)** make tiny, trivial mean differences statistically significant; always check **Cohen's `d`** (`0.2` small, `0.5` medium, `0.8` large) to judge real-world magnitude.",
        level: "HL",
      },
      {
        front: "What does the **coefficient of determination (`r²`)** tell you when `r = −0.60`?",
        back: "`r² = (−0.60)² = 0.36`, meaning **36% of variance** is shared between the two variables (and **64%** is unexplained by other factors). `r²` is always non-negative.",
        level: "HL",
      },
      {
        front: "Distinguish **Pearson `r`** from **Spearman `ρ`** (rho).",
        back: "**Pearson `r`** is parametric for linear interval/ratio data without severe outliers; **Spearman `ρ`** is non-parametric for ranked/ordinal or monotonic skewed data.",
        level: "HL",
      },
      {
        front: "Distinguish **inductive** vs **deductive** thematic coding.",
        back: "**Inductive** coding derives themes bottom-up directly from participant data (ideal for emic insight); **deductive** coding maps text top-down onto an existing theory (e.g., SDT).",
        level: "HL",
      },
      {
        front: "Distinguish **semantic** vs **latent** qualitative themes.",
        back: "**Semantic** themes describe explicit, surface-level statements; **latent** themes interpret underlying cultural norms, assumptions, or power dynamics beneath the literal words.",
        level: "HL",
      },
      {
        front: "Name Lincoln & Guba's **4 pillars of qualitative trustworthiness** and one technique for each.",
        back: "**Credibility** (member checking / triangulation), **Transferability** (thick description), **Dependability** (audit trail), **Confirmability** (personal & epistemological reflexivity).",
        level: "HL",
      },
      {
        front: "Distinguish **personal reflexivity** from **epistemological reflexivity**.",
        back: "**Personal:** how the researcher's identity, culture, power, and beliefs shaped data collection/coding. **Epistemological:** how the research design/method itself framed what could be discovered.",
        level: "HL",
      },
      {
        front: "What is **quantification bias** in qualitative Paper 3 analysis?",
        back: "Treating small, purposive interview counts as representative population percentages (e.g., claiming 3 of 5 interviewees proves '60% of all adolescents feel X').",
        level: "HL",
      },
      {
        front: "What is the **Bonferroni correction** and when do Paper 3 studies need it?",
        back: "Dividing `α` by the number of tests (`α_adj = 0.05 / k`) when running multiple comparisons on the same dataset, preventing inflated family-wise **Type I error**.",
        level: "HL",
      },
      {
        front: "What are the **4 core elements** of a top-band Paper 3 Q4 follow-up study?",
        back: "(1) Directly repairs a specific flaw from the sources, (2) specifies sampling & operationalized design/coding, (3) embeds validity/trustworthiness + ethical safeguards, and (4) evaluates a realistic trade-off.",
        level: "HL",
      },
    ],
    mustKnow: [
      "NEW FA2027 HL Paper 3 is **1h 45m, 30 marks (30% of HL)** — an unseen mixed-method source packet anchored to **Culture, Motivation & Technology**.",
      "Always match descriptive stats to distribution shape: **Mean + SD** for normal interval/ratio data; **Median + IQR** for skewed/outlier or ordinal data.",
      "`p < 0.05` rejects `H₀` at the 5% significance level, meaning the observed data would occur `< 5%` of the time **if `H₀` were true** — it NEVER means '95% proven'.",
      "**Statistical significance (`p`) ≠ practical significance (Cohen's `d`)**: huge `N` makes trivial gaps (`d = 0.08`) yield `p < 0.01`, while small `N` hides meaningful effects (`d = 0.65`) behind `p > 0.05`.",
      "**Correlation (`r`) ≠ Causality**: always identify both **reverse directionality** and a plausible **third variable**, and report shared variance as `r² × 100%`.",
      "Audit qualitative sources using **Credibility, Transferability, Dependability, and Confirmability** — NOT by complaining that a qualitative sample is 'too small to generalize'.",
      "Check **who interviewed whom** (power asymmetry, cultural insider/outsider status) to evaluate **personal & epistemological reflexivity**.",
      "Every Paper 3 paragraph must quote **specific figures, test results, or participant quotes** from the unseen sources and tie them explicitly to the **6 FA2027 Core Concepts**.",
      "Spot **confounded cross-cultural designs** (e.g., Country A uses App X while Country B uses App Y): fix them in Q4 by randomizing both conditions *within* each culture.",
      "Spot **visual distortion traps** immediately: truncated y-axes, missing error bars, and bivariate outliers inflating `r`.",
    ],
    misconceptions: [
      {
        wrong: "`p = 0.03` means there is a 3% chance that the null hypothesis is true (and a 97% chance the theory is proven).",
        right: "`p = 0.03` is the probability of observing data **at least this extreme assuming `H₀` is true**. It is a conditional probability about the data, never the probability of `H₀` or 'proof' of `H₁`.",
        level: "HL",
      },
      {
        wrong: "A statistically significant result (`p < 0.001`) proves the psychological effect is huge and practically important.",
        right: "With large samples (e.g., `N = 10,000` app logs), even a tiny `0.3`-point difference (`d = 0.05`) achieves `p < 0.001`. Always check **Cohen's `d`** or **`r²`** for practical magnitude.",
        level: "HL",
      },
      {
        wrong: "Because `p = 0.09` is not significant, the study proves the intervention has zero effect.",
        right: "`p ≥ 0.05` only means we **fail to reject `H₀`** — if sample size was small or SD was large, a genuine effect may have been missed (**Type II error / low power**).",
        level: "HL",
      },
      {
        wrong: "Qualitative interviews with `N = 10` participants are weak because they lack statistical generalizability.",
        right: "Qualitative research aims for **transferability** via **thick description** and deep emic understanding, not statistical generalization. Critique credibility, reflexivity, and audit trail instead!",
        level: "HL",
      },
      {
        wrong: "A correlation of `r = −0.70` gives `r² = −49%` shared variance and proves Variable X reduces Variable Y.",
        right: "Squaring a negative gives a **positive** share: `r² = (−0.70)² = +49%` shared variance — and correlation still cannot prove causation due to third variables and bidirectionality.",
        level: "HL",
      },
      {
        wrong: "When two bar charts have slightly different bar heights, the condition with the taller bar clearly outperformed the other.",
        right: "First check for a **truncated y-axis** and inspect the **±1 SD / 95% CI error bars**: wide overlapping spread can render a visually tall bar difference statistically and practically meaningless.",
        level: "HL",
      },
      {
        wrong: "Adding more follow-up participants (`N = 500`) automatically fixes a biased Paper 3 study.",
        right: "Scaling up a **biased sampling frame or flawed operationalization** simply produces a larger biased dataset! Fix the **Bias** or **Measurement** mechanism first (e.g., random allocation, cultural adaptation, blinding).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing generic textbook critiques ('low ecological validity', 'small sample') without quoting **exact means, SDs, p-values, d-values, or participant IDs** from the Paper 3 source packet.",
      "Writing 'proves the alternative hypothesis' instead of '**supports rejecting `H₀`**' — IB examiners penalise absolute causal/proof language immediately.",
      "Forgetting to check **practical significance (`d` or `r²`)** when a huge-`N` technology dataset reports `p < 0.01`.",
      "Applying quantitative criticisms ('no control group', 'cannot generalize from 8 interviewees') blindly to a qualitative source instead of auditing **credibility, transferability, dependability, and reflexivity**.",
      "Committing **quantification bias** by turning small interview counts (e.g., 4 of 6 participants) into sweeping percentage claims about whole cultures.",
      "Proposing a vague Q4 follow-up ('do an experiment with more diverse participants') without specifying operationalized IV/DV, controls, ethics, and a realistic trade-off.",
      "Confusing **Type I** (false positive, `α`) and **Type II** (false negative, `β`) errors, or forgetting that tightening `α` from `0.05` to `0.01` increases Type II risk.",
      "Missing **cross-source triangulation**: treating Source A (table) and Source B (quotes) in isolated silos rather than showing how the qualitative voice explains or challenges the quantitative numbers.",
    ],
    mnemonics: [
      {
        topic: "Lincoln & Guba's 4 Trustworthiness Pillars",
        device: "C-T-D-C → 'Can Teens Defend Claims?'",
        explanation:
          "**C**redibility (member checking/triangulation), **T**ransferability (thick description), **D**ependability (audit trail), **C**onfirmability (reflexivity).",
        level: "HL",
      },
      {
        topic: "Quantitative Source Audit",
        device: "S-D-P-E-C → 'Skew, Dispersion, P-value, Effect size, Causality'",
        explanation:
          "Scan every Paper 3 table in 60 seconds: **S**kew (Mean vs Median), **D**ispersion (SD/IQR/error bars), **P**-value vs `α`, **E**ffect size (`d` / `r²`), **C**ausality (design control vs confounds).",
        level: "HL",
      },
      {
        topic: "Paper 3 Q4 Follow-Up Blueprint",
        device: "F-O-R-E-T → 'Fix, Operationalize, Rigour, Ethics, Trade-off'",
        explanation:
          "Name the **F**law being repaired, **O**perationalize variables/sampling/protocol, build in **R**igour (blinding/reflexivity), add **E**thical Responsibility, and end with one honest **T**rade-off.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "The Digital Screen-Time Effect-Size Debate (Orben & Przybylski)",
        detail:
          "Using massive adolescent datasets (`N > 350,000`), researchers showed that while screen time correlated 'statistically significantly' (`p < 0.001`) with lower wellbeing, it explained only `r² ≈ 0.4%` of variance — teaching policymakers never to confuse `p < 0.001` with large real-world harm.",
        emoji: "📱",
      },
      {
        title: "Psychology's Replication Crisis & P-Hacking Reforms",
        detail:
          "The 2015 Open Science Collaboration replicated 100 classic psychology studies and found average effect sizes shrank by half; today journals demand preregistration, effect sizes (`d`), and Bonferroni adjustments to curb Type I false positives.",
        emoji: "🔬",
      },
      {
        title: "Cross-Cultural Measurement Invariance in PISA Motivation Surveys",
        detail:
          "International education studies discovered that identical Likert items about 'intrinsic enjoyment' can carry different meanings across collectivist vs individualist school systems — proving why Paper 3 audits imposed-etic Measurement bias.",
        emoji: "🌏",
      },
      {
        title: "EdTech A/B Testing & Gamification Retention",
        detail:
          "Learning apps routinely test streak badges and push notifications via randomized experiments; product psychologists track Cohen's `d` and 6-week delayed retention alongside qualitative user interviews so short-term clicking isn't mistaken for genuine learning.",
        emoji: "🎮",
      },
      {
        title: "Algorithmic Fairness & Qualitative Audits of Mental-Health Chatbots",
        detail:
          "Evaluating youth AI wellbeing tools requires mixed methods: quantitative accuracy metrics paired with reflexive qualitative interviews exposing cultural misunderstandings, privacy fears, and unintended emotional dependency.",
        emoji: "🤖",
      },
    ],
    videos: [
      {
        title: "p-Values, Statistical Significance & Effect Size (Cohen's d) Explained",
        channel: "StatQuest / Psychology Statistics",
        url: "https://www.youtube.com/results?search_query=StatQuest+p+values+effect+size+Cohens+d+explained",
      },
      {
        title: "Type I and Type II Errors & Statistical Power in Psychology",
        channel: "CrashCourse Statistics",
        url: "https://www.youtube.com/results?search_query=CrashCourse+Statistics+Type+I+Type+II+errors+power",
      },
      {
        title: "Qualitative Thematic Analysis, Credibility & Reflexivity (IB Psychology)",
        channel: "Themantic Education / IB Psychology",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+qualitative+research+credibility+reflexivity+thematic+analysis",
      },
      {
        title: "Spotting Misleading Graphs, Truncated Axes & Skewed Distributions",
        channel: "TED-Ed / Statistics Visuals",
        url: "https://www.youtube.com/results?search_query=TED+Ed+how+to+spot+a+misleading+graph+truncated+axis",
      },
    ],
    formulas: [
      {
        name: "Arithmetic Mean",
        formula: "{{M = (sum x) / N}}",
        note: "Sensitive to outliers; use with SD for symmetric interval/ratio data.",
        level: "HL",
      },
      {
        name: "Median Position (Ordered Data)",
        formula: "{{(N + 1) / 2}}",
        note: "Resistant to outliers; pair with IQR for skewed or ordinal datasets.",
        level: "HL",
      },
      {
        name: "Range & Interquartile Range",
        formula: "{{Range = Max - Min}} ; {{IQR = Q_3 - Q_1}}",
        note: "IQR captures the middle 50% and ignores extreme anomalies.",
        level: "HL",
      },
      {
        name: "Percentage Change",
        formula: "{{((New - Old) / Old) * 100%}}",
        note: "Always divide by the baseline (Old) value, not the new value.",
        level: "HL",
      },
      {
        name: "Pooled Standard Deviation (Equal n)",
        formula: "{{SD_\"pooled\" = sqrt((SD_1^2 + SD_2^2) / 2)}}",
        note: "Combines the spread of two equal-sized groups for Cohen's d.",
        level: "HL",
      },
      {
        name: "Cohen's d (Standardized Effect Size)",
        formula: "{{d = (M_1 - M_2) / SD_\"pooled\"}}",
        note: "Benchmarks: 0.2 small · 0.5 medium · 0.8 large · < 0.2 negligible.",
        level: "HL",
      },
      {
        name: "Coefficient of Determination (Shared Variance)",
        formula: "{{r^2 * 100%}}",
        note: "Always non-negative; remaining unexplained variance = (1 − r²) × 100%.",
        level: "HL",
      },
      {
        name: "Significance Decision Rule",
        formula: "{{p < α}} → Reject {{H_0}} ; {{p >= α}} → Fail to reject {{H_0}}",
        note: "Standard α = 0.05 (5%); stricter α = 0.01 (1%) lowers Type I but raises Type II risk.",
        level: "HL",
      },
      {
        name: "Bonferroni-Adjusted Alpha",
        formula: "{{α_\"adj\" = α / k}}",
        note: "Controls Type I error inflation across k multiple statistical comparisons.",
        level: "HL",
      },
      {
        name: "Statistical Power",
        formula: "{{Power = 1 - β}}",
        note: "Probability of detecting a true effect; increases with larger N, larger d, and lower SD.",
        level: "HL",
      },
    ],
  },
};
