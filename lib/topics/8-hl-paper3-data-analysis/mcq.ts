// ---------------------------------------------------------------------------
// Topic 8 (HL Only): HL Paper 3 — Research Data Analysis & Source Evaluation
// 3 MCQ Papers × 15 MCQs = 45 audited HL MCQs (FA2027).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Descriptive Statistics, Visual Traps & Inferential Logic [HL]
  // answerIndex target: [2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 1, 3, 0, 2, 1]
  // =========================================================================
  {
    id: "8-hl-paper3-data-analysis-m1",
    title: "Paper M1: Descriptive Statistics, Visual Traps & Inferential Logic [HL]",
    level: "HL",
    questions: [
      {
        id: "8-hl-paper3-data-analysis-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "quantitative-descriptive-visual",
        question:
          "A **Technology & Motivation** source table reports daily gaming duration for `N = 60` students as `Mean = 3.9 hours` and `Median = 1.8 hours`. What distribution shape does this divergence indicate, and which summary pair best describes the typical student?",
        options: [
          "Negatively skewed distribution; report the mean and standard deviation.",
          "Symmetrical normal distribution; report the mean and total range.",
          "Positively skewed distribution; report the median and interquartile range.",
          "Bimodal categorical distribution; report the mode and total range.",
        ],
        answerIndex: 2,
        explanation:
          "Because the mean (`3.9 h`) sits far above the median (`1.8 h`), a right tail of extreme high-hour gamers is pulling the mean upward — classic **positive skew**. For skewed distributions, the **median and IQR** resist outliers and represent the typical participant accurately; negative skew would show `Mean < Median`.",
        hints: [
          "Compare the relative size of the mean (`3.9`) and the median (`1.8`).",
          "Extreme high values drag the mean into the right tail, creating positive skew where outlier-resistant statistics are needed.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Explain",
        guideRef: "quantitative-descriptive-visual",
        question:
          "In a cross-cultural survey of intrinsic study motivation (scale `0–100`), Cohort X scores `M = 72, SD = 4.1` and Cohort Y scores `M = 72, SD = 19.6`. What is the most accurate statistical interpretation of the standard deviation difference?",
        options: [
          "Cohort X's scores cluster tightly around 72, whereas Cohort Y shows much wider individual variability.",
          "Cohort Y achieved significantly higher overall motivation because its standard deviation is nearly five times larger.",
          "Cohort X suffered from more extreme outliers because smaller standard deviations indicate skewed tails.",
          "Both cohorts display identical score consistency because their arithmetic means are both equal to 72.",
        ],
        answerIndex: 0,
        explanation:
          "Standard deviation quantifies the typical distance of individual scores from the mean. With identical means (`72`), Cohort X's small `SD = 4.1` indicates tight consistency, whereas Cohort Y's large `SD = 19.6` signals broad individual dispersion (possibly reflecting unmeasured subgroups). A larger SD never implies higher average motivation.",
        hints: [
          "Standard deviation measures spread around the mean, not the average level itself.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "quantitative-descriptive-visual",
        question:
          "Seven Year 12 participants log how many smartphone notifications they checked during a 60-minute revision session: `14, 16, 18, 19, 21, 22, 90`. What is the **interquartile range (IQR)** of this dataset?",
        options: [
          "19 notifications",
          "76 notifications",
          "10 notifications",
          "6 notifications",
        ],
        answerIndex: 3,
        explanation:
          "For `N = 7` ordered values, the median is the 4th score (`19`). Excluding the median leaves lower half `14, 16, 18` (`Q₁ = 16`) and upper half `21, 22, 90` (`Q₃ = 22`). Therefore {{IQR = Q_3 - Q_1 = 22 - 16 = 6}} notifications. `76` is the full range (`90 − 14`), which is distorted by the outlier `90`.",
        hints: [
          "First find the median (4th value of the 7 ordered scores) to split the data into lower and upper halves.",
          "Find `Q₁` (median of `14, 16, 18`) and `Q₃` (median of `21, 22, 90`), then subtract `Q₃ − Q₁`.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "quantitative-descriptive-visual",
        question:
          "A researcher records each participant's primary social-media platform (`Instagram`, `TikTok`, `WeChat`, `YouTube`) in a Culture & Technology survey. Which measure of central tendency is mathematically valid for this variable?",
        options: [
          "Arithmetic mean, because it incorporates every categorical response.",
          "Mode, because nominal categories can only be summarised by frequency.",
          "Median, because platform names can be ordered alphabetically to find a midpoint.",
          "Interquartile range, because categorical counts require quartile boundaries.",
        ],
        answerIndex: 1,
        explanation:
          "Platform choice is **nominal (categorical)** data with no numerical magnitude or intrinsic rank order, so neither a mean nor a median can be meaningfully calculated. The **mode** (most frequent category) is the only valid measure of central tendency for nominal variables.",
        hints: [
          "Identify the level of measurement (nominal, ordinal, interval, or ratio) for platform names.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "quantitative-descriptive-visual",
        question:
          "After replacing competitive class rankings with autonomy-supportive feedback, a cohort's mean intrinsic motivation score rises from `40` to `52`. What is the **percentage increase** in mean motivation?",
        options: [
          "30.0% increase",
          "23.1% increase",
          "12.0% increase",
          "46.0% increase",
        ],
        answerIndex: 0,
        explanation:
          "Percentage change divides the difference by the **original baseline (`40`)**: {{((52 - 40)/40) * 100 = (12/40) * 100 = 30.0%}}. Dividing by the new score (`12/52 ≈ 23.1%`) is a frequent calculation trap, and `12.0` is only the raw point gain.",
        hints: [
          "Use percentage change = `((New − Old) / Old) × 100`.",
          "Divide the `12`-point gain by the baseline `40`, not by the final score `52`.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "quantitative-descriptive-visual",
        question:
          "A Paper 3 bar chart displays two group means with vertical error bars. Why must an HL analyst verify in the caption whether the error bars represent **±1 SD** rather than **95% confidence intervals (95% CI)**?",
        options: [
          "±1 SD bars always prove statistical significance, whereas 95% CI bars apply only to qualitative themes.",
          "95% CI bars measure the spread of raw scores, whereas ±1 SD bars shrink automatically as sample size grows.",
          "±1 SD shows raw individual score dispersion, whereas 95% CI reflects precision of the estimated population mean.",
          "±1 SD bars remove extreme outliers automatically, whereas 95% CI bars include every bivariate anomaly.",
        ],
        answerIndex: 2,
        explanation:
          "**±1 SD** describes how widely individual participants' scores scatter around the sample mean (roughly unchanging as `n` grows), whereas a **95% CI** gauges the uncertainty of the sample mean as an estimate of the population mean and narrows as `n` increases. Confusing the two leads to false visual inferences about significance and consistency.",
        hints: [
          "Ask which statistic describes raw participant spread versus precision of the sample mean.",
          "Remember that standard error (`SD / sqrt(n)`) shrinks when sample size `n` increases, narrowing a 95% CI.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "quantitative-descriptive-visual",
        question:
          "On an easy 20-item digital-literacy motivation quiz, `85%` of participants score `19` or `20`, while a few score between `9` and `14`. What statistical distortion has occurred, and how does it affect the distribution?",
        options: [
          "Floor effect producing positive skew and artificially inflating the standard deviation.",
          "Ceiling effect producing negative skew and compressing variability near the top score.",
          "Normal distribution producing symmetrical tails and maximising statistical power.",
          "Truncated baseline producing an identical mean, median, and mode across groups.",
        ],
        answerIndex: 1,
        explanation:
          "When an instrument is too easy, scores pile up against the maximum (`20`) — a **ceiling effect**. The low tail of `9–14` creates **negative skew** (`Mean < Median`) and artificially compresses spread at the upper bound, masking real differences among high-performing participants (**Measurement** flaw).",
        hints: [
          "When scores bunch against the top limit of a test, is that a floor or ceiling effect?",
          "A few much lower scores pull the tail to the left (`Mean < Median`), creating negative skew.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "quantitative-descriptive-visual",
        diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" role="img" aria-label="Bar chart of two group means labelled Group A at 75.5 and Group B at 73.5 with vertical axis running from 70 to 80">
  <rect x="0" y="0" width="360" height="190" rx="10" fill="#ffffff"/>
  <text x="180" y="22" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1c1630">Self-Reported Study Focus (0–100 Scale)</text>
  <line x1="65" y1="36" x2="65" y2="152" stroke="#1c1630" stroke-width="1.5"/>
  <line x1="65" y1="152" x2="320" y2="152" stroke="#1c1630" stroke-width="1.5"/>
  <text x="58" y="42" font-size="9.5" text-anchor="end" fill="#5b5375">80</text>
  <text x="58" y="98" font-size="9.5" text-anchor="end" fill="#5b5375">75</text>
  <text x="58" y="154" font-size="9.5" text-anchor="end" fill="#5b5375">70</text>
  <line x1="65" y1="94" x2="320" y2="94" stroke="#e2dcf0" stroke-dasharray="3,3"/>
  <rect x="108" y="88" width="60" height="64" rx="4" fill="#7c3aed"/>
  <text x="138" y="82" font-size="10" font-weight="800" text-anchor="middle" fill="#4c1d95">75.5</text>
  <rect x="218" y="111" width="60" height="41" rx="4" fill="#0d9488"/>
  <text x="248" y="105" font-size="10" font-weight="800" text-anchor="middle" fill="#115e59">73.5</text>
  <text x="138" y="169" font-size="10" font-weight="700" text-anchor="middle" fill="#1c1630">Group A (SD=12)</text>
  <text x="248" y="169" font-size="10" font-weight="700" text-anchor="middle" fill="#1c1630">Group B (SD=12)</text>
</svg>`,
        question:
          "Inspect the Source A bar chart above from a Technology attention study (0–100 focus scale). What is the most serious **visual and statistical** flaw in presenting these findings this way?",
        options: [
          "The bars should be plotted as a scatterplot because Group A and Group B are continuous ratio variables.",
          "Group B has a smaller standard deviation than Group A, making parametric comparisons impossible.",
          "The vertical axis extends too high to 80, compressing a massive difference between the two conditions.",
          "The vertical axis is truncated at 70 and omits error bars, visually exaggerating a tiny 2-point gap.",
        ],
        answerIndex: 3,
        explanation:
          "Because the y-axis starts at `70` instead of `0`, a `2`-point gap (`75.5 vs 73.5` on a 100-point scale) makes Group A's bar appear over `50%` taller than Group B's! Omitting error bars also hides the huge `SD = 12` (`d = 2/12 = 0.17`, negligible practical effect).",
        hints: [
          "Look closely at the bottom number on the vertical axis and compare the raw gap (`75.5 − 73.5`) with the `0–100` scale.",
          "Also notice what is missing from the tops of the bars given `SD = 12` in each group.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Define",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "An HL Paper 3 experiment testing culturally adapted motivation prompts reports `p = 0.032` (two-tailed, `α = 0.05`). Which statement gives the **mathematically exact** meaning of `p = 0.032`?",
        options: [
          "There is a 3.2% probability that the null hypothesis is true for this population.",
          "There is a 96.8% probability that the cultural prompts causally improved student motivation.",
          "If the null hypothesis were true, data at least this extreme would occur 3.2% of the time by chance.",
          "Only 3.2% of participants in the experimental group failed to respond to the motivational prompts.",
        ],
        answerIndex: 2,
        explanation:
          "A `p`-value is strictly conditional on `H₀` being true: `P(data at least this extreme | H₀ is true) = 0.032`. Treating `p` as `P(H₀ is true)` or `1 − p` as '96.8% proof of causality' is the classic prosecutor's fallacy penalised in IB HL Paper 3.",
        hints: [
          "A `p`-value always assumes one specific hypothesis is true first — which one?",
          "It gives the probability of the *observed data* under `H₀`, never the probability of `H₀` itself.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Determine",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A research team sets a strict significance threshold of `α = 0.01` before analysing an AI-tutoring trial, and obtains `p = 0.024`. What is the correct statistical decision?",
        options: [
          "Fail to reject H₀ because p = 0.024 exceeds the pre-set α = 0.01 threshold.",
          "Reject H₀ because any p-value below 0.05 automatically demonstrates significance.",
          "Accept H₀ as conclusively proven because p = 0.024 shows zero group difference.",
          "Switch to a one-tailed α = 0.05 threshold post hoc so the finding becomes publishable.",
        ],
        answerIndex: 0,
        explanation:
          "Statistical decisions must follow the **pre-set** `α`: since `0.024 ≥ 0.01`, the team must **fail to reject `H₀`** (not 'prove `H₀`'). Shifting `α` or switching to a one-tailed test after seeing `p = 0.024` is **p-hacking**, which inflates Type I error.",
        hints: [
          "Compare `p = 0.024` strictly against the pre-set `α = 0.01`, not the default `0.05`.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A commercial cognitive-training app has **zero real effect** on working memory in the population, yet an experimental study accidentally reports `p = 0.038` and rejects `H₀`. What statistical error has occurred?",
        options: [
          "Type II error (false negative), caused by excessive sample size.",
          "Type I error (false positive), rejecting a true null hypothesis.",
          "Quantification bias, converting qualitative codes into percentages.",
          "Construct drift, failing to operationalize working-memory span.",
        ],
        answerIndex: 1,
        explanation:
          "When `H₀` is actually true (zero real effect) yet the test rejects `H₀`, the researchers have committed a **Type I error (false positive)**, whose single-test probability equals `α` (`0.05`). A Type II error would mean failing to detect a genuinely effective app.",
        hints: [
          "In reality, is `H₀` true or false in this scenario?",
          "Rejecting a true `H₀` = false alarm = Type I error (`α`).",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A pilot study of a culturally responsive mentoring programme uses only `n = 10` students per group, finds a promising mean gain (`d = 0.65`), yet reports `p = 0.16` (non-significant at `α = 0.05`). Which statistical risk best explains this outcome?",
        options: [
          "Elevated Type I error caused by testing too many participants simultaneously.",
          "Inflated Bonferroni correction reducing the effect size below practical relevance.",
          "Ceiling effect preventing any participant from scoring above the group median.",
          "Elevated Type II error (low statistical power) caused by the very small sample size.",
        ],
        answerIndex: 3,
        explanation:
          "With only `n = 10` per group, statistical **power (`1 − β`)** is very low, so even a genuine medium-to-large effect (`d = 0.65`) easily produces `p > 0.05`. Dismissing the programme as ineffective would risk a **Type II error (false negative)**.",
        hints: [
          "If a real medium-to-large effect (`d = 0.65`) fails to reach `p < 0.05`, is that a false positive or a false negative?",
          "Small sample sizes reduce statistical power (`1 − β`) and raise the risk of missing real effects.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A Technology survey runs `5` separate significance tests comparing screen habits across motivational subscales at a family-wise error rate of `α = 0.05`. One subscale yields `p = 0.022`. Applying a **Bonferroni correction**, what is the adjusted threshold and verdict?",
        options: [
          "Adjusted α = 0.010; p = 0.022 is no longer statistically significant.",
          "Adjusted α = 0.250; p = 0.022 remains strongly statistically significant.",
          "Adjusted α = 0.025; p = 0.022 remains statistically significant at p < 0.025.",
          "Adjusted α = 0.005; p = 0.022 proves a Type II error has occurred.",
        ],
        answerIndex: 0,
        explanation:
          "Bonferroni adjustment divides the family-wise `α` by the number of tests `k`: {{α_\"adj\" = 0.05 / 5 = 0.010}}. Because `0.022 > 0.010`, the result is **no longer statistically significant**, guarding against multiple-comparison Type I error inflation.",
        hints: [
          "Compute the Bonferroni-adjusted alpha using `α_adj = α / k` with `α = 0.05` and `k = 5`.",
          "Compare `p = 0.022` with `0.010`: is `p` smaller than `α_adj`?",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "Why is tightening the significance level from `α = 0.05` to `α = 0.01` without increasing sample size described as a **statistical trade-off**?",
        options: [
          "It reduces both Type I and Type II errors simultaneously while doubling Cohen's d.",
          "It eliminates researcher confirmation bias while guaranteeing high ecological validity.",
          "It lowers the probability of a Type I false positive but raises the risk of a Type II false negative.",
          "It converts a non-parametric correlation directly into a causal experimental finding.",
        ],
        answerIndex: 2,
        explanation:
          "Lowering `α` from `0.05` to `0.01` requires stronger evidence before rejecting `H₀`, cutting false-positive (**Type I**) risk — but at fixed `N`, demanding a stricter cutoff makes real effects harder to detect, increasing false-negative (**Type II, `β`**) risk.",
        hints: [
          "Think of a stricter courtroom standard of proof: fewer innocent people are wrongly convicted, but what happens to guilty defendants?",
          "Stricter `α` cuts Type I error while reducing power (`1 − β`), raising Type II error.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A national digital-wellbeing study (`N = 12,000` adolescents) compares heavy vs light social-media users and reports `M₁ = 68.4` vs `M₂ = 69.1` (100-point scale), `p = 0.002`, and `d = 0.06`. Which Paper 3 conclusion is most defensible?",
        options: [
          "The low p-value proves social-media use causes severe emotional harm across adolescents.",
          "The gap is statistically significant due to huge N, yet practically negligible (d = 0.06) and non-causal.",
          "Because d = 0.06 is below 0.20, the researchers must have miscalculated p = 0.002.",
          "The study suffers from a Type II error because the mean difference is less than one point.",
        ],
        answerIndex: 1,
        explanation:
          "With `N = 12,000`, standard errors become tiny, so a `0.7`-point gap easily reaches `p = 0.002` (**statistically significant**). Yet `d = 0.06` (`< 0.20`) shows **negligible practical significance**, and comparing natural heavy vs light users is observational rather than experimental (**Causality**).",
        hints: [
          "Separate what `p = 0.002` says (unlikely due to sampling noise at `N = 12,000`) from what `d = 0.06` says (magnitude).",
          "Check whether participants were randomly assigned to heavy vs light social-media use.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Effect Sizes, Correlations & Qualitative Rigour [HL]
  // answerIndex target: [1, 3, 0, 2, 3, 1, 2, 0, 3, 1, 2, 3, 0, 1, 2]
  // =========================================================================
  {
    id: "8-hl-paper3-data-analysis-m2",
    title: "Paper M2: Effect Sizes, Correlations & Qualitative Rigour [HL]",
    level: "HL",
    questions: [
      {
        id: "8-hl-paper3-data-analysis-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "In a randomized Motivation experiment (`n₁ = 35, n₂ = 35`), the autonomy-choice group scores `M₁ = 68 (SD = 8)` and the no-choice control scores `M₂ = 60 (SD = 8)`. What is **Cohen's `d`**, and how is its magnitude classified?",
        options: [
          "d = 0.50 (medium practical effect)",
          "d = 1.00 (large practical effect)",
          "d = 0.13 (negligible practical effect)",
          "d = 8.00 (unstandardized raw difference)",
        ],
        answerIndex: 1,
        explanation:
          "Since both groups share `SD = 8`, {{SD_\"pooled\" = 8}}. Thus {{d = (68 - 60)/8 = 8/8 = 1.00}}. Because `|d| ≥ 0.80`, this represents a **large** practical effect size (one full standard deviation apart).",
        hints: [
          "Use Cohen's `d = (M₁ − M₂) / SD_pooled`; when `SD₁ = SD₂ = 8`, `SD_pooled = 8`.",
          "Recall Cohen's benchmarks: `0.2` small, `0.5` medium, `0.8` large.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "Two studies test identical AI revision flashcards. Study 1 (`N = 40`) reports `d = 0.55, p = 0.09`; Study 2 (`N = 400`) reports `d = 0.55, p < 0.001`. Why does Cohen's `d` remain identical while `p` drops sharply?",
        options: [
          "Cohen's d automatically adjusts for researcher bias, whereas p-values ignore mean differences.",
          "Study 2 must have reduced standard deviation by ten times to achieve p < 0.001.",
          "Study 1 committed a Type I error because p = 0.09 exceeds the 0.05 significance cutoff.",
          "Cohen's d is scale-free and independent of sample size, whereas p shrinks as N grows.",
        ],
        answerIndex: 3,
        explanation:
          "**Cohen's `d`** depends only on group means and standard deviations — it is unaffected by sample size `N`. In contrast, the **`p`-value** depends heavily on `N` (via standard error `SD / sqrt(n)`), so scaling up from `N = 40` to `N = 400` raises statistical power and drives `p` below `0.001`.",
        hints: [
          "Inspect the formula for Cohen's `d`: does sample size `N` appear anywhere inside `(M₁ − M₂) / SD_pooled`?",
          "Then consider why a tenfold jump in `N` makes the same `0.55 SD` difference far less likely to be sampling noise.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A researcher correlates students' **ordinal** rank on a single 5-point Likert item ('I trust AI grading') with heavily positively skewed daily chatbot minutes. Which correlation coefficient is most appropriate?",
        options: [
          "Spearman's rho (ρ), because it is non-parametric and evaluates monotonic rank order.",
          "Pearson's r, because it requires only nominal categories and tolerates extreme skew.",
          "Cohen's d, because it calculates shared variance between two ordinal scales.",
          "Chi-square (χ²), because it quantifies the slope of continuous skewed variables.",
        ],
        answerIndex: 0,
        explanation:
          "**Spearman's `ρ` (rho)** converts scores into ranks, making it the appropriate non-parametric choice for **ordinal** variables and **heavily skewed** distributions with outliers. Pearson `r` assumes interval/ratio data, approximate normality, and linearity.",
        hints: [
          "Distinguish parametric (`Pearson r`) from non-parametric rank-order (`Spearman ρ`) correlations.",
          "Single Likert items are ordinal and extreme outliers violate Pearson `r` assumptions.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "In a cross-cultural teamwork study (`n₁ = 25, n₂ = 25`), Group 1 scores `M₁ = 45 (SD₁ = 6)` and Group 2 scores `M₂ = 39 (SD₂ = 8)`. Using equal-`n` pooled SD, what is **Cohen's `d`** (to 2 decimal places)?",
        options: [
          "d = 0.43",
          "d = 0.60",
          "d = 0.85",
          "d = 1.00",
        ],
        answerIndex: 2,
        explanation:
          "First compute equal-`n` pooled SD: {{SD_\"pooled\" = sqrt((6^2 + 8^2)/2) = sqrt((36 + 64)/2) = sqrt(50) ≈ 7.071}}. Then {{d = (45 - 39)/7.071 = 6 / 7.071 ≈ 0.85}} (large effect). Notice `6 / 7 = 0.857` (simple average of SDs) is close, while `6/14 = 0.43` mistakenly adds the SDs.",
        hints: [
          "For equal sample sizes, compute `SD_pooled = sqrt((SD₁² + SD₂²) / 2)`.",
          "`6² + 8² = 36 + 64 = 100`; divide by `2` to get `50`, take `sqrt(50) ≈ 7.07`, then divide `45 − 39 = 6` by `7.07`.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A longitudinal survey finds `r = +0.52, p < 0.001` between adolescents' evening notification count and next-day daytime fatigue. Why does **Causality** remain unestablished?",
        options: [
          "Because `r = +0.52` is too weak to be statistically significant even when `p < 0.001`.",
          "Because positive correlations can never show real relationships unless Cohen's d exceeds 0.80.",
          "Because notification count is a ratio variable that cannot be correlated with self-reported fatigue.",
          "Because reverse causality and third variables such as exam anxiety or late bedtime are uncontrolled.",
        ],
        answerIndex: 3,
        explanation:
          "Even a highly significant correlation (`p < 0.001`) cannot rule out **reverse directionality** (already exhausted or anxious teens checking phones later at night) or **third variables** (academic stress, caffeine, irregular sleep schedules) because neither variable was randomly manipulated.",
        hints: [
          "Recall the two classic alternative explanations that prevent causal inference in correlational research.",
          "Could fatigue/stress drive phone checking, or could a third factor drive both?",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Distinguish",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "A researcher analyses interview transcripts about online study groups by applying Deci & Ryan's Self-Determination Theory (`Autonomy`, `Competence`, `Relatedness`) as pre-defined coding categories. Which coding approach is this, and what is its main **Bias** risk?",
        options: [
          "Inductive coding; risks ignoring all existing psychological theories during analysis.",
          "Deductive coding; risks confirmation bias by overlooking culture-specific themes outside the theory.",
          "Latent coding; risks quantification bias by counting exact word frequencies across transcripts.",
          "Negative-case coding; risks lowering dependability by preserving contradictory quotes.",
        ],
        answerIndex: 1,
        explanation:
          "Starting with a pre-existing theoretical framework (`SDT`) to sort transcript excerpts is **deductive (top-down) coding**. While efficient for testing theory, it risks **confirmation bias** (and imposed-etic framing) if participants express motives—such as filial duty or face-saving—that do not fit neatly into the pre-set categories.",
        hints: [
          "Is moving from a pre-existing theory down to data **inductive** or **deductive**?",
          "Think about what a coder might miss when actively hunting only for SDT's three needs.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A Technology study reports Pearson `r = −0.40` between frequency of media multitasking during lectures and reading-comprehension test scores. What percentage of variance in comprehension is **shared** with multitasking, and what percentage remains **unexplained**?",
        options: [
          "40% shared variance and 60% unexplained variance.",
          "−16% shared variance and 116% unexplained variance.",
          "16% shared variance and 84% unexplained variance.",
          "80% shared variance and 20% unexplained variance.",
        ],
        answerIndex: 2,
        explanation:
          "The coefficient of determination is {{r^2 = (-0.40)^2 = +0.16}}, meaning **16%** of variance is shared and {{100% - 16% = 84%}} is due to other variables (prior knowledge, sleep, note-taking skill). Squaring a negative `r` always yields a positive percentage!",
        hints: [
          "Square `r = −0.40` and multiply by `100` to obtain percentage shared variance (`r²`).",
          "Remember that `(−0.40) × (−0.40)` is positive, and unexplained variance is `100% − r²%`.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "In a Culture & Motivation transcript, a student says: *“My parents never force me to revise — I just know how much they sacrificed for my tuition, so I can't let my grades dip.”* Coding this as **internalised filial obligation** rather than **absence of parental rules** illustrates which level of thematic analysis?",
        options: [
          "Latent thematic coding, interpreting underlying cultural norms beneath explicit wording.",
          "Semantic thematic coding, repeating only the participant's literal surface vocabulary.",
          "Statistical generalization, projecting one student's motive onto the whole nationality.",
          "Quantification coding, measuring the exact number of revision hours per week.",
        ],
        answerIndex: 0,
        explanation:
          "**Semantic** coding stays at the surface ('parents never force me'), whereas **latent** coding looks beneath explicit statements to uncover implicit cultural meanings, relational obligations, and values ('internalised filial obligation').",
        hints: [
          "Contrast literal surface meaning (**semantic**) with underlying cultural/psychological assumptions (**latent**).",
          "Notice that 'filial obligation' is implied rather than spoken word for word in the quote.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "A qualitative study of remote-work motivation provides detailed demographic profiles, workplace cultural norms, organisational policies, and rich verbatim excerpts from its Tokyo tech-startup site. Which trustworthiness criterion does this **thick description** primarily enhance?",
        options: [
          "Dependability, by calculating exact inter-rater correlation coefficients.",
          "Confirmability, by removing the researcher's identity from the interview guide.",
          "Statistical power, by increasing sample size above 100 employees.",
          "Transferability, enabling readers to judge contextual fit to other settings.",
        ],
        answerIndex: 3,
        explanation:
          "In Lincoln & Guba's framework, **thick description** gives rich contextual detail so outside readers can responsibly judge whether insights **transfer** to another cultural or organisational setting (**transferability**, the qualitative parallel to external validity).",
        hints: [
          "Which of the four trustworthiness pillars (`Credibility`, `Transferability`, `Dependability`, `Confirmability`) relies on **thick description**?",
          "Think about how detailed cultural and workplace context lets readers evaluate fit to another site.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "inferential-pvalues-effect-size",
        diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" role="img" aria-label="Scatterplot showing data points rising smoothly from bottom left to a high peak in the centre and then falling down toward the bottom right">
  <rect x="0" y="0" width="360" height="190" rx="10" fill="#ffffff"/>
  <text x="180" y="20" font-size="11" font-weight="800" text-anchor="middle" fill="#1c1630">Gamified Task Difficulty vs Flow Score (r = +0.03)</text>
  <line x1="48" y1="32" x2="48" y2="154" stroke="#1c1630" stroke-width="1.5"/>
  <line x1="48" y1="154" x2="332" y2="154" stroke="#1c1630" stroke-width="1.5"/>
  <text x="190" y="176" font-size="9.5" font-weight="700" text-anchor="middle" fill="#5b5375">Challenge Level (1–10)</text>
  <text x="18" y="96" font-size="9.5" font-weight="700" text-anchor="middle" fill="#5b5375" transform="rotate(-90 18 96)">Flow Score</text>
  <circle cx="72" cy="140" r="4" fill="#7c3aed"/>
  <circle cx="96" cy="116" r="4" fill="#7c3aed"/>
  <circle cx="122" cy="86" r="4" fill="#7c3aed"/>
  <circle cx="148" cy="62" r="4" fill="#7c3aed"/>
  <circle cx="176" cy="48" r="4" fill="#7c3aed"/>
  <circle cx="204" cy="50" r="4" fill="#7c3aed"/>
  <circle cx="232" cy="68" r="4" fill="#7c3aed"/>
  <circle cx="260" cy="92" r="4" fill="#7c3aed"/>
  <circle cx="288" cy="122" r="4" fill="#7c3aed"/>
  <circle cx="312" cy="142" r="4" fill="#7c3aed"/>
</svg>`,
        question:
          "Examine the scatterplot above from a Motivation & Technology study reporting Pearson `r = +0.03, p = 0.89`. Why would concluding *“task difficulty has no relationship with flow”* be a severe analytical error?",
        options: [
          "Because `r = +0.03` is positive, proving higher difficulty always increases flow.",
          "Because Pearson r detects only linear trends and misses the strong inverted-U curvilinear pattern.",
          "Because the sample contains a single extreme bivariate outlier dragging r toward zero.",
          "Because non-significant correlations automatically indicate a ceiling effect in flow scores.",
        ],
        answerIndex: 1,
        explanation:
          "Pearson `r` measures **strictly linear** association! Here the scatterplot reveals a tight **curvilinear (inverted-U)** relationship (boredom at low difficulty, peak flow at moderate difficulty, anxiety at extreme difficulty): the rising and falling halves cancel out in a straight-line fit (`r ≈ 0`). Always inspect scatterplots visually!",
        hints: [
          "Look at the shape traced by the dots across Challenge Levels 1 to 10 — is it a random cloud or a clear curve?",
          "Recall what kind of relationship (linear vs curved) Pearson `r` is mathematically designed to capture.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "Two independent analysts keep a time-stamped codebook documenting every merged code, rejected sub-theme, and decision memo while analysing 18 interviews on adolescent AI companions. Which trustworthiness criterion does this **audit trail** primarily strengthen?",
        options: [
          "Transferability, by expanding the sample to additional cultural regions.",
          "Construct validity, by converting transcripts into standardized Likert scores.",
          "Dependability, by making the analytical process transparent and traceable.",
          "Ecological validity, by conducting interviews covertly in public cafés.",
        ],
        answerIndex: 2,
        explanation:
          "An **audit trail** (transparent codebook, coding memos, and decision logs) allows external reviewers to trace how themes were constructed step by step, directly strengthening **dependability** (the qualitative counterpart to reliability).",
        hints: [
          "Which of Lincoln & Guba's 4 pillars parallels quantitative reliability and relies on an audit trail?",
          "Traceability of every coding decision over time strengthens **dependability**.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "A school principal conducts face-to-face focus groups asking 16-year-old students whether they feel addicted to smartphones or secretly use AI to write homework. Which combination of reflexivity concerns is **most** directly raised?",
        options: [
          "Personal reflexivity (only sampling teenagers) and quantification bias (using Likert scales).",
          "Epistemological reflexivity (using longitudinal tracking) and Type II error (small focus groups).",
          "Negative-case bias (recording dissenting voices) and thick description (excessive detail).",
          "Personal reflexivity (authority power gap) and epistemological reflexivity (public peer conformity in focus groups).",
        ],
        answerIndex: 3,
        explanation:
          "**Personal reflexivity** interrogates how the principal's institutional power triggers social desirability and fear of discipline; **epistemological reflexivity** interrogates how the **focus-group format itself** (speaking publicly in front of peers) discourages candid admission of sensitive behaviours compared with anonymous diaries.",
        hints: [
          "Separate who is asking the questions (**personal reflexivity**) from how the group method itself shapes responses (**epistemological reflexivity**).",
          "Think about how teenagers respond to their school principal inside a public peer group.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "While coding 12 interviews about digital detox weekends, `10` students praise feeling calmer, whereas `2` international boarding students report severe distress from losing contact with family abroad. Including and analysing those `2` accounts is known as:",
        options: [
          "Negative-case analysis, strengthening credibility by countering confirmation bias.",
          "Outlier deletion, improving dependability by producing a uniform consensus theme.",
          "Quantification bias, showing that 17% of global teenagers reject digital detoxes.",
          "Imposed-etic framing, forcing all participants into a single Western framework.",
        ],
        answerIndex: 0,
        explanation:
          "Actively seeking and integrating disconfirming voices (**negative-case / deviant-case analysis**) deepens **credibility** and **confirmability** by preventing researchers from cherry-picking quotes that merely confirm a tidy 'detox is always good' narrative.",
        hints: [
          "What qualitative technique deliberately examines participants who contradict the dominant pattern?",
          "Keeping disconfirming accounts rather than discarding them directly counters confirmation bias.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "A student evaluating a qualitative Paper 3 source writes: *“Five of the eight interviewed gamers felt frustrated by loot boxes, proving 62.5% of teenagers oppose microtransactions.”* What methodological error has the student committed?",
        options: [
          "Epistemological reflexivity, by questioning how interviews frame gamer identity.",
          "Quantification bias, treating a tiny purposive sample as a representative population percentage.",
          "Member checking, by allowing participants to verify the final theme labels.",
          "Triangulation error, by combining interview transcripts with game-telemetry logs.",
        ],
        answerIndex: 1,
        explanation:
          "Converting `5/8` purposively recruited interviewees into a sweeping '62.5% of teenagers' claim commits **quantification bias**: qualitative samples are selected for rich lived insight rather than statistical representativeness.",
        hints: [
          "Can a purposive qualitative sample of `n = 8` establish a precise population percentage?",
          "Identify the bias that turns tiny qualitative headcounts into broad quantitative proportions.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "qualitative-coding-trustworthiness",
        question:
          "A researcher uses **both** researcher triangulation (two coders from different cultural backgrounds) and **methodological triangulation** (pairing app-usage logs with semi-structured interviews). What is the primary value of this strategy in HL Paper 3?",
        options: [
          "It guarantees zero Type I error and eliminates the need for informed consent.",
          "It transforms qualitative interview themes into parametric ratio-level measurements.",
          "It strengthens credibility and confirmability by cross-checking convergence and exposing blind spots.",
          "It guarantees statistical generalizability across all collectivist and individualist societies.",
        ],
        answerIndex: 2,
        explanation:
          "**Researcher triangulation** reduces single-analyst cultural bias (confirmability), while **methodological triangulation** cross-checks behavioural logs against subjective meaning (credibility), revealing both convergence and illuminating contradictions between what people *do* and *say*.",
        hints: [
          "Consider how multiple coders and multiple methods act as cross-checks against single-lens bias.",
          "Remember that triangulation never 'guarantees zero error' or universal statistical generalization.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Unseen Source Packets, Triangulation & Follow-Up Design [HL]
  // answerIndex target: [3, 2, 0, 3, 1, 0, 2, 3, 1, 0, 2, 0, 3, 2, 1]
  // =========================================================================
  {
    id: "8-hl-paper3-data-analysis-m3",
    title: "Paper M3: Unseen Source Packets, Triangulation & Follow-Up Design [HL]",
    level: "HL",
    questions: [
      {
        id: "8-hl-paper3-data-analysis-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "paper3-exam-strategy",
        question:
          "Which option accurately describes the **NEW FA2027 IB Psychology HL Paper 3** exam structure and focus?",
        options: [
          "1 hour, 24 marks, 20% of HL; three generic qualitative research questions with no quantitative data.",
          "2 hours, 44 marks, 40% of HL; essays on two retired optional topics such as Abnormal Psychology.",
          "1 hour 30 minutes, 24 marks, 25% of HL; a hypothetical research proposal written in exam conditions.",
          "1 hour 45 minutes, 30 marks, 30% of HL; quantitative & qualitative source evaluation linked to Culture, Motivation & Technology.",
        ],
        answerIndex: 3,
        explanation:
          "Under the NEW FA2027 IB Psychology guide, **HL Paper 3** runs **1h 45m**, carries **30 marks (`30%` of HL)**, and requires analysing an unseen **quantitative + qualitative** source packet contextualised in the HL Extensions (**Culture, Motivation, and Technology**).",
        hints: [
          "Recall the FA2027 HL Paper 3 duration (`1h 45m`), mark total (`30`), weighting (`30%`), and mixed-method focus.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "paper3-exam-strategy",
        question:
          "In an unseen Paper 3 packet, **Source A** shows students using an AI writing coach submit essays `22%` faster (`p = 0.01, d = 0.58`), while **Source B** reveals `P5` saying *“I stopped planning my own arguments because the bot drafts paragraphs immediately.”* What mixed-method insight does triangulating A and B unlock?",
        options: [
          "Source B proves Source A's p-value was fabricated by the researchers.",
          "Source A and Source B are completely unrelated and must be evaluated in separate paragraphs.",
          "Faster completion time (Source A) may index cognitive offloading rather than deeper learning (Measurement).",
          "Source B eliminates the need to examine standard deviations or sample size in Source A.",
        ],
        answerIndex: 2,
        explanation:
          "Triangulating **Source A** with **Source B** exposes a classic **Measurement (construct validity)** flaw: 'submission speed' looked positive quantitatively (`d = 0.58`), yet `P5`'s qualitative account shows speed reflected **cognitive offloading** rather than genuine argument mastery!",
        hints: [
          "Ask whether 'essay speed' in Source A validly measures deep writing skill once you read P5's quote.",
          "Link the divergence between Sources A and B to the Core Concept of **Measurement**.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "A Paper 3 study compares **Japanese high-schoolers** using a collaborative app (`M = 79`) against **Canadian university students** using a solo app (`M = 71`, `p = 0.02`). Why is **Causality** fatally compromised?",
        options: [
          "Culture, educational age/stage, and app format are completely confounded across the two intact groups.",
          "An independent-samples t-test cannot legally compare two groups whose means differ by 8 points.",
          "Cross-cultural studies can never collect quantitative scores without violating participant anonymity.",
          "A p-value of 0.02 is too large to reject the null hypothesis at the standard α = 0.05 threshold.",
        ],
        answerIndex: 0,
        explanation:
          "Three variables change simultaneously between groups (**culture**, **age/education level**, and **collaborative vs solo app**). Because participants were not randomly assigned to app format within matched cultural/age cohorts, **Causality** cannot isolate whether the `8`-point difference reflects app design, culture, or schooling level.",
        hints: [
          "List every difference between the two groups besides the app format.",
          "When multiple variables vary together across non-randomized groups, they are confounded.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "quantitative-descriptive-visual",
        diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 195" role="img" aria-label="Bar chart showing two group bars at 64 and 61 with vertical error bars spanning 50 to 78 and 46 to 76">
  <rect x="0" y="0" width="360" height="195" rx="10" fill="#ffffff"/>
  <text x="180" y="20" font-size="11" font-weight="800" text-anchor="middle" fill="#1c1630">Recall Score (0–100) · ±1 SD Bars · n = 25/group</text>
  <line x1="58" y1="32" x2="58" y2="158" stroke="#1c1630" stroke-width="1.5"/>
  <line x1="58" y1="158" x2="322" y2="158" stroke="#1c1630" stroke-width="1.5"/>
  <text x="51" y="38" font-size="9" text-anchor="end" fill="#5b5375">100</text>
  <text x="51" y="98" font-size="9" text-anchor="end" fill="#5b5375">50</text>
  <text x="51" y="160" font-size="9" text-anchor="end" fill="#5b5375">0</text>
  <!-- Bar 1: M=64, SD=14 -> top 78, bot 50. y(v) = 158 - v*1.22 -->
  <rect x="104" y="80" width="56" height="78" rx="3" fill="#a78bfa"/>
  <line x1="132" y1="63" x2="132" y2="97" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="124" y1="63" x2="140" y2="63" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="124" y1="97" x2="140" y2="97" stroke="#1c1630" stroke-width="1.8"/>
  <text x="132" y="55" font-size="9.5" font-weight="800" text-anchor="middle" fill="#4c1d95">M=64 (SD=14)</text>
  <!-- Bar 2: M=61, SD=15 -> top 76, bot 46 -->
  <rect x="214" y="84" width="56" height="74" rx="3" fill="#2dd4bf"/>
  <line x1="242" y1="65" x2="242" y2="102" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="234" y1="65" x2="250" y2="65" stroke="#1c1630" stroke-width="1.8"/>
  <line x1="234" y1="102" x2="250" y2="102" stroke="#1c1630" stroke-width="1.8"/>
  <text x="242" y="55" font-size="9.5" font-weight="800" text-anchor="middle" fill="#115e59">M=61 (SD=15)</text>
  <text x="132" y="174" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1c1630">Phone Away</text>
  <text x="242" y="174" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1c1630">Phone on Desk</text>
  <text x="180" y="189" font-size="9" text-anchor="middle" fill="#5b5375">Two-tailed t-test: p = 0.46, d = 0.21</text>
</svg>`,
        question:
          "Interpret the Source A chart above (`Phone Away` vs `Phone on Desk`, `n = 25` per group, `p = 0.46, d = 0.21`). Which synthesis is **most accurate** for Paper 3 Q1/Q2?",
        options: [
          "The truncated y-axis exaggerates a huge effect that clearly meets significance at α = 0.05.",
          "The non-significant p-value proves smartphone presence has zero effect on adolescent memory.",
          "Phone Away displays dramatically tighter consistency because its sample mean is three points higher.",
          "The 3-point gap sits inside heavily overlapping ±1 SD bars (p = 0.46, d = 0.21), with low power at n = 25.",
        ],
        answerIndex: 3,
        explanation:
          "First check the y-axis: it honestly starts at `0` (not truncated!). The `±1 SD` bars (`14` and `15`) overlap almost completely, matching `p = 0.46` (fail to reject `H₀`) and small `d = 0.21`. Yet with `n = 25/group`, statistical power is too low to 'prove zero effect' (Type II risk).",
        hints: [
          "Check the y-axis origin first (`0` to `100` — honest!), then compare the `3`-point mean gap to `SD = 14–15`.",
          "Combine `p = 0.46`, `d = 0.21`, and `n = 25` without claiming `H₀` is 'proven'.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "A Western motivation questionnaire developed for US undergraduates (`“I achieve best when I stand out individually”`) is translated literally and given to rural Indonesian adolescents without piloting. Which **Perspective & Measurement** flaw is most directly illustrated?",
        options: [
          "Emic over-adaptation reducing inter-coder dependability across translators.",
          "Imposed-etic bias threatening construct validity and cross-cultural measurement invariance.",
          "Quantification bias converting interview transcripts into parametric test statistics.",
          "Demand-characteristic elimination improving internal validity across cohorts.",
        ],
        answerIndex: 1,
        explanation:
          "Exporting an individualist Western instrument verbatim assumes the construct operates identically everywhere (**imposed-etic bias**). Without back-translation, local piloting, and emic adaptation, lower scores may reflect collectivist humility norms rather than lower motivation (**Measurement** validity failure).",
        hints: [
          "What term describes exporting a construct built in one culture directly onto another as if universal?",
          "Link that cultural lens to whether the scale validly measures motivation in Indonesia.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Examine",
        guideRef: "paper3-exam-strategy",
        question:
          "In a Technology Paper 3 source, researchers passively scrape 15-year-olds' school-tablet keystroke logs and private chat timestamps for three weeks without informing students until afterwards. Which **Responsibility** principles are most severely breached?",
        options: [
          "Informed consent (plus parental consent/minor assent), right to withdraw, and digital privacy.",
          "Protection from physical harm and the 3Rs animal-welfare refinement guidelines.",
          "Statistical power guidelines and Bonferroni multiple-comparison transparency.",
          "Epistemological reflexivity and thick-description transferability standards.",
        ],
        answerIndex: 0,
        explanation:
          "Covertly harvesting digital behavioural traces from minors (`15`-year-olds) violates **informed consent** (requiring both parental consent and adolescent assent), **right to withdraw** during collection, and **confidentiality/digital privacy** (sensitive metadata can re-identify students even after names are stripped).",
        hints: [
          "Note the participants' age (`15`, minors) and the covert collection of private digital logs.",
          "Match those facts to core human research ethics under **Responsibility**.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "inferential-pvalues-effect-size",
        question:
          "A Paper 3 footnote states that cultural uncertainty avoidance explains **`49%` of the variance** in willingness to adopt AI health chatbots, and the scatterplot slopes downward from left to right. What is the **Pearson `r`** value?",
        options: [
          "r = +0.70",
          "r = −0.49",
          "r = −0.70",
          "r = −0.24",
        ],
        answerIndex: 2,
        explanation:
          "Variance explained is {{r^2 = 0.49}}, so {{|r| = sqrt(0.49) = 0.70}}. Because the scatterplot slopes **downward** (higher uncertainty avoidance → lower adoption), the direction is negative: **`r = −0.70`**.",
        hints: [
          "Convert `49%` variance explained into decimal `r² = 0.49` and take its square root.",
          "Check the slope direction ('downward from left to right') to assign the `+` or `−` sign.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Justify",
        guideRef: "paper3-exam-strategy",
        question:
          "Source A shows a short 7-day spike in study minutes after introducing virtual XP badges (`d = 0.72`), which examiners suspect reflects a **novelty effect**. Which Q4 follow-up design best tests whether genuine motivational **Change** persists?",
        options: [
          "A single-day cross-sectional survey comparing Year 10 and Year 12 badge preferences.",
          "Increasing the 7-day sample from N = 40 to N = 400 using the exact same leaderboard.",
          "Running a covert focus group on Day 3 asking students why they enjoy XP points.",
          "A 12-week longitudinal randomized trial tracking both badge retention and unrewarded post-removal persistence.",
        ],
        answerIndex: 3,
        explanation:
          "Testing whether motivation survives past novelty — and checking for **overjustification crowding-out** once rewards stop — requires a **longitudinal randomized design** measuring **Change** over multiple weeks plus an unrewarded post-intervention follow-up. Scaling up a 7-day study (`N = 400`) still captures only novelty!",
        hints: [
          "Which Core Concept tracks stability or decay over time (`Change`)?",
          "To test whether extrinsic badges crowd out intrinsic drive, what must happen over weeks and after badges end?",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "In a Paper 3 Technology experiment, participants know they were assigned to the 'AI-Enhanced Memory Boost' group while controls receive a plain worksheet. Which **Bias** threatens internal validity, and what follow-up control best mitigates it?",
        options: [
          "Attrition bias; mitigate by deleting the bottom 10% of control scores.",
          "Demand characteristics / expectancy (placebo) bias; mitigate via single-blind active control interface.",
          "Ecological fallacy; mitigate by replacing all test scores with qualitative narratives.",
          "Quantification bias; mitigate by reporting median scores instead of group means.",
        ],
        answerIndex: 1,
        explanation:
          "Knowing one received a flashy 'AI Boost' triggers **expectancy / demand characteristics**, inflating effort independent of the algorithm itself. Using a **single-blind active control** (an identically styled interface providing standard non-adaptive prompts) isolates the true AI mechanism.",
        hints: [
          "When participants know they are in the 'special tech' condition, how can expectations alter effort?",
          "Consider how an active placebo/blinded control neutralises expectancy.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Justify",
        guideRef: "paper3-exam-strategy",
        question:
          "Source A in a Paper 3 packet compared Singapore students (App X) with Swedish students (App Y), confounding culture and technology. What is the strongest **Q4 follow-up design** to disentangle Culture from Technology?",
        options: [
          "Randomly allocate participants within both Singapore and Sweden to either App X or App Y (2 × 2 design).",
          "Test App X only in Singapore with triple the sample size and compute Spearman's rho.",
          "Allow students in both countries to choose whichever app they prefer before measuring scores.",
          "Replace both quantitative apps with an unstructured observation of classroom seating.",
        ],
        answerIndex: 0,
        explanation:
          "Randomizing **both apps inside both cultural sites** (a `2 × 2` factorial design: Culture × App) breaks the confound cleanly: you can test the main effect of App X vs Y, cultural differences, and any **Culture × Technology interaction**. Letting students self-select creates selection bias!",
        hints: [
          "To separate two confounded variables (`Culture` and `App`), both apps must appear inside each country.",
          "Remember that random allocation — not self-selection — protects **Causality**.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "A Paper 3 study recruits `N = 180` participants via paid university psychology pools in Boston and London to draw conclusions about 'universal human motivation in remote AI work'. Which **Bias** and **Perspective** critique is sharpest?",
        options: [
          "Attrition bias caused by longitudinal follow-ups lasting longer than six months.",
          "Type II error caused by setting α = 0.05 on an overly large university sample.",
          "WEIRD convenience sampling limiting cultural transferability beyond Western student norms.",
          "Inter-observer unreliability caused by covert naturalistic coding in factories.",
        ],
        answerIndex: 2,
        explanation:
          "Recruiting exclusively Western, Educated, Industrialized, Rich, Democratic (**WEIRD**) undergraduates via convenience pools introduces severe **sampling Bias** and an **etic** illusion of universality — student lab motivation rarely mirrors adult workplace norms across diverse global cultures.",
        hints: [
          "Check who the participants are (`Boston and London university pools`) vs the claim (`universal human motivation in remote work`).",
          "Connect WEIRD convenience samples to cultural transferability limits.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "A quantitative source reports `SD = 18.5` (huge dispersion) for a self-directed online course in a culturally diverse international school, while interviews reveal half the students thrived on autonomy and half felt lost without teacher structure. What does this **mixed-method synthesis** show?",
        options: [
          "The mean alone hides a bimodal cultural/motivational split; qualitative voices explain the wide quantitative SD.",
          "The huge SD proves the quantitative test had zero reliability and must be discarded completely.",
          "The interviews commit a Type I error by contradicting the overall quantitative mean.",
          "The study needs a truncated y-axis so the two hidden subgroups appear clearly.",
        ],
        answerIndex: 0,
        explanation:
          "This is textbook **explanatory mixed-method triangulation**: the quantitative **large SD (`18.5`)** flagged heterogeneity, and the qualitative transcripts uncovered *why* — opposing reactions to unstructured autonomy across learners! Reporting only the grand mean would erase both lived experiences.",
        hints: [
          "Ask how the qualitative story (`half thrived, half felt lost`) explains the quantitative symptom (`SD = 18.5`).",
          "Consider what a single arithmetic mean hides when a sample splits into two contrasting subgroups.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "Which excerpt represents **top-band IB HL Paper 3 evaluation** rather than generic textbook boilerplate?",
        options: [
          "A weakness of this study is that it used a small convenience sample, so it lacks ecological validity and cannot be generalized.",
          "Quantitative data are always more objective than qualitative interviews, which suffer from researcher bias.",
          "Because p < 0.05, the study proves technology harms motivation, though ethical issues like consent should always be considered.",
          "While Source A shows a significant drop (p = 0.03), the small effect (d = 0.19) and P3's quote about rushing before lunch expose Measurement bias from poorly timed testing.",
        ],
        answerIndex: 3,
        explanation:
          "Top-band Paper 3 answers **anchor every critique directly to the sources** (`p = 0.03`, `d = 0.19`, `P3's quote`), weave in an explicit **FA2027 Core Concept (`Measurement`)**, and explain *how* the specific detail qualifies the conclusion rather than reciting memorised phrases.",
        hints: [
          "Look for concrete source citations (exact stats + participant reference) linked directly to a Core Concept.",
          "Eliminate statements containing absolute 'proves' claims or generic phrases that could fit any study.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Justify",
        guideRef: "paper3-exam-strategy",
        question:
          "When writing a **Paper 3 Q4 follow-up design** proposing a tightly controlled laboratory experiment to fix a correlational field survey's confounds, why should a top-band candidate include an explicit **trade-off**?",
        options: [
          "Because IB rubrics forbid proposing experimental designs in response to survey source packets.",
          "Because acknowledging a trade-off proves the original study had zero methodological limitations.",
          "Because demonstrating how higher internal validity (Causality) can lower ecological validity shows critical methodological judgement.",
          "Because noting a trade-off replaces the need to operationalize the independent and dependent variables.",
        ],
        answerIndex: 2,
        explanation:
          "No psychological method is flaw-free. Explicitly evaluating a realistic **trade-off** of your own Q4 design — e.g., gaining **Causality** via lab randomization at the cost of reduced **ecological validity** or higher longitudinal attrition — demonstrates sophisticated Level 3 IB evaluation.",
        hints: [
          "In methodology, fixing one weakness (like confounds) often introduces another tension — why does recognizing it earn top marks?",
          "Contrast internal validity (**Causality**) with ecological realism when moving from field surveys to controlled labs.",
        ],
      },
      {
        id: "8-hl-paper3-data-analysis-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "paper3-exam-strategy",
        question:
          "A school district uses a single observational study (`r = −0.22, p < 0.001, N = 1,800`, Western sample) to ban all classroom tablets for neurodivergent and multilingual learners. Which **combined Core Concept critique** best captures why this policy overreaches?",
        options: [
          "High Cohen's d and excessive statistical power prevent any policy use of observational data.",
          "Tiny variance (r² = 4.8%), non-causal design, WEIRD sampling Bias, and accessibility Responsibility.",
          "Type II error (p < 0.001) combined with negative-case bias invalidates the entire dataset.",
          "Truncated error bars combined with inductive coding prove tablets aid neurodivergent literacy.",
        ],
        answerIndex: 1,
        explanation:
          "Squaring `r = −0.22` shows only **4.8%** shared variance (`95.2%` unexplained!), the observational design cannot establish **Causality**, generalizing a Western neurotypical sample ignores **Bias/Perspective**, and banning assistive tech for multilingual/neurodivergent students breaches ethical **Responsibility**.",
        hints: [
          "Compute `r² = (−0.22)² × 100% ≈ 4.8%` first.",
          "Combine that tiny shared variance with **Causality**, **Bias**, and **Responsibility** toward vulnerable/diverse learners.",
        ],
      },
    ],
  },
];
