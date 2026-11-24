// ---------------------------------------------------------------------------
// Topic 8 (HL Only): HL Paper 3 — Research Data Analysis & Source Evaluation
// quiz (10) · papers p1 (15) & p2 (15) · challenge (8) — ALL HL Only (FA2027).
// ---------------------------------------------------------------------------
import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // =========================================================================
  // TOPIC QUIZ (10 Qs: crisp warmup & core calculations + mini written)
  // =========================================================================
  quiz: [
    {
      id: "8-hl-paper3-data-analysis-quiz-q01",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Sum and divide by N",
      question:
        "Five students in a Motivation & Technology pilot study complete the following numbers of voluntary AI-tutor revision prompts in one week: `18, 22, 24, 26, 30`. Calculate the **arithmetic mean** number of prompts completed.",
      answer: { type: "number", value: 24, display: "24" },
      solution: [
        "Add all five scores: `18 + 22 + 24 + 26 + 30 = 120`.",
        "Divide by {{N = 5}}: {{M = 120 / 5 = 24}} prompts.",
      ],
      hints: [
        "Sum all five values first, then divide by the number of participants (`5`).",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q02",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Even-N median midpoint",
      question:
        "Six adolescents record how many times they unlocked their smartphones after midnight during a sleep-hygiene study: `11, 13, 15, 19, 21, 55`. Calculate the **median** number of unlocks.",
      answer: { type: "number", value: 17, display: "17" },
      traps: [
        {
          spec: { type: "number", value: 22.33, tolerance: 0.1 },
          feedback: "That is the mean (pulled up by the outlier 55) — find the middle of the two central values instead.",
        },
      ],
      solution: [
        "The six values are already ordered: `11, 13, 15, 19, 21, 55`.",
        "With even {{N = 6}}, average the 3rd (`15`) and 4th (`19`) scores: {{(15 + 19)/2 = 17}} unlocks.",
      ],
      hints: [
        "Because `N = 6` is even, average the 3rd and 4th ordered values.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q03",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Max minus Min",
      question:
        "A small cultural cohort scores the following engagement ratings (0–100 scale) on a collaborative online module: `28, 34, 39, 41, 45, 76`. Calculate the **range**.",
      answer: { type: "number", value: 48, display: "48" },
      solution: [
        "Identify the highest (`76`) and lowest (`28`) scores.",
        "{{Range = 76 - 28 = 48}} points.",
      ],
      hints: [
        "Subtract the smallest value from the largest value.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Split halves for Q1 and Q3",
      question:
        "Eight Year 12 participants log daily gaming minutes during exam week: `10, 12, 14, 15, 17, 20, 22, 64`. Calculate the **interquartile range (IQR)**.",
      answer: { type: "number", value: 8, display: "8" },
      traps: [
        {
          spec: { type: "number", value: 54 },
          feedback: "54 is the full range (64 − 10) — IQR uses Q₃ − Q₁ to resist the outlier 64.",
        },
      ],
      solution: [
        "Split the 8 ordered scores into lower half (`10, 12, 14, 15`) and upper half (`17, 20, 22, 64`).",
        "Lower quartile {{Q_1 = (12 + 14)/2 = 13}}; upper quartile {{Q_3 = (20 + 22)/2 = 21}}.",
        "{{IQR = Q_3 - Q_1 = 21 - 13 = 8}} minutes.",
      ],
      hints: [
        "Divide the 8 ordered scores into a lower group of 4 and an upper group of 4.",
        "Find the median of the lower 4 scores (`Q₁`) and the upper 4 scores (`Q₃`), then calculate `Q₃ − Q₁`.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q05",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Baseline percentage change",
      question:
        "After introducing culturally relevant peer mentoring, a group's mean academic self-efficacy score rises from `50` to `64`. Calculate the **percentage increase** in mean self-efficacy.",
      answer: { type: "number", value: 28, display: "28%" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "14 is the raw point difference — divide by the baseline (50) and multiply by 100.",
        },
      ],
      solution: [
        "Raw increase = `64 − 50 = 14` points.",
        "Divide by the original baseline (`50`): {{(14/50) * 100 = 28%}}.",
      ],
      hints: [
        "Find the raw gain (`64 − 50`) first.",
        "Divide the gain by the starting score (`50`) and multiply by `100`.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Cohen's d with equal SD",
      question:
        "In a Motivation experiment (`n₁ = 30, n₂ = 30`), Group 1 scores `M₁ = 81 (SD = 12)` and Group 2 scores `M₂ = 72 (SD = 12)`. Calculate **Cohen's `d`** (give your answer to 2 decimal places).",
      answer: { type: "number", value: 0.75, tolerance: 0.01, display: "0.75" },
      solution: [
        "Both groups share `SD = 12`, so {{SD_\"pooled\" = 12}}.",
        "{{d = (81 - 72) / 12 = 9 / 12 = 0.75}} (medium-to-large practical effect).",
      ],
      hints: [
        "Use `d = (M₁ − M₂) / SD_pooled`.",
        "When both groups have `SD = 12`, divide `81 − 72 = 9` directly by `12`.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q07",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Shared variance r² × 100",
      question:
        "A Technology survey finds Pearson `r = −0.80` between smartphone-interruption frequency and sustained reading comprehension. What **percentage of variance** (`r² × 100`) is shared between the two variables?",
      answer: { type: "number", value: 64, display: "64%" },
      traps: [
        {
          spec: { type: "number", value: -64 },
          feedback: "Squaring a negative correlation always produces a positive percentage of shared variance.",
        },
      ],
      solution: [
        "Square the correlation coefficient: {{r^2 = (-0.80)^2 = +0.64}}.",
        "Convert to a percentage: `0.64 × 100 = 64%` shared variance (`36%` unexplained).",
      ],
      hints: [
        "Square `−0.80` and multiply by `100`.",
        "Remember that `(−0.80) × (−0.80)` is positive.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Determine",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Compare p strictly against pre-set α",
      question:
        "A research team sets a strict significance threshold of `α = 0.01` for a digital-wellbeing intervention and observes `p = 0.018`. State whether the team should **reject** or **retain** the null hypothesis (`H₀`).",
      answer: {
        type: "text",
        accept: ["retain", "retain h0", "fail to reject", "fail to reject h0", "retain the null hypothesis", "fail to reject the null hypothesis"],
        display: "Retain",
      },
      solution: [
        "Compare `p = 0.018` to the pre-set threshold `α = 0.01`.",
        "Because `0.018 ≥ 0.01`, the result is not statistically significant at the 1% level → **retain (fail to reject) `H₀`**.",
      ],
      hints: [
        "We only reject `H₀` when `p` is strictly smaller than the pre-set `α`.",
        "Compare `0.018` against `0.01` (not against `0.05`).",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q09",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "qualitative-coding-trustworthiness",
      strategy: "Lincoln & Guba trustworthiness matcher",
      question:
        "Two qualitative analysts maintain a transparent, time-stamped codebook and decision log showing how raw interview transcripts were grouped into themes. State the **single trustworthiness criterion** this audit trail primarily strengthens.",
      answer: { type: "text", accept: ["dependability"], display: "Dependability" },
      solution: [
        "An **audit trail** documenting step-by-step analytical decisions makes the qualitative process transparent and traceable, primarily strengthening **dependability**.",
      ],
      hints: [
        "Think of the qualitative counterpart to quantitative reliability within Lincoln & Guba's 4 pillars.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-quiz-q10",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Diagnose skew from Mean vs Median",
      marks: 3,
      question:
        "A Technology source table reports daily short-video viewing for `N = 85` teenagers as `Mean = 4.6 hours (Range = 11.5 hours)` and `Median = 2.1 hours (IQR = 1.4 hours)`. Explain what this discrepancy reveals about the distribution and which pair of statistics should be prioritised in an HL Paper 3 analysis. [3 marks]",
      modelAnswer:
        "Because the average of 4.6 hours exceeds the central midpoint of 2.1 hours by more than double, the dataset is positively skewed, pulled rightward by extreme high-hour outliers. Those anomalous heavy viewers inflate both the arithmetic average and the 11.5-hour spread, misrepresenting typical screen habits. An analyst should therefore prioritise the median and interquartile range because both resist extreme scores and reflect the middle half of participants accurately.",
      markScheme: [
        {
          point: "Identifies positive (right) skew from Mean (4.6) > Median (2.1).",
          keywords: ["positively skewed", "positive skew", "right-skewed", "rightward"],
        },
        {
          point: "Explains that extreme high outliers inflate both the arithmetic mean and total range.",
          keywords: ["outliers", "extreme", "inflate", "pull"],
        },
        {
          point: "Recommends prioritising the outlier-resistant median and IQR (middle 50%) to represent typical viewing.",
          keywords: ["resist", "middle half", "middle 50", "typical"],
        },
      ],
      hints: [
        "Compare `4.6` vs `2.1`: which direction is the tail pulled when the mean exceeds the median?",
        "Explain why extreme values distort both the mean and the `11.5`-hour range, then justify the outlier-resistant alternative.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (p1: 15 Qs · p2: 15 Qs — ALL HL Only)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Quantitative Data, Effect Sizes & Inferential Critique
    // -----------------------------------------------------------------------
    {
      id: "8-hl-paper3-data-analysis-p1",
      title: "Practice Paper 1: Quantitative Data, Effect Sizes & Inferential Critique [HL]",
      level: "HL",
      questions: [
        {
          id: "8-hl-paper3-data-analysis-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "quantitative-descriptive-visual",
          strategy: "Sort before finding the median",
          question:
            "Seven participants in a digital-mindfulness trial log the following session durations (minutes): `24, 12, 18, 52, 15, 20, 16`. Calculate the **median** duration.",
          answer: { type: "number", value: 18, display: "18" },
          traps: [
            {
              spec: { type: "number", value: 52 },
              feedback: "52 is in the middle of the UNSORTED list — always sort the scores from lowest to highest first!",
            },
          ],
          solution: [
            "Sort in ascending order: `12, 15, 16, 18, 20, 24, 52`.",
            "For {{N = 7}}, the 4th ordered score is **18** minutes.",
          ],
          hints: [
            "Sort the seven numbers from smallest to largest before selecting the middle score.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "quantitative-descriptive-visual",
          strategy: "IQR = Q3 − Q1",
          question:
            "A cross-cultural motivation sample (`N = 7`) yields ordered scores: `31, 35, 38, 42, 46, 51, 88`. Calculate the **interquartile range (IQR)**.",
          answer: { type: "number", value: 16, display: "16" },
          traps: [
            {
              spec: { type: "number", value: 57 },
              feedback: "57 is the total range (88 − 31); compute Q₃ − Q₁ for the interquartile range.",
            },
          ],
          solution: [
            "The median is the 4th score (`42`), leaving lower half `31, 35, 38` ({{Q_1 = 35}}) and upper half `46, 51, 88` ({{Q_3 = 51}}).",
            "{{IQR = 51 - 35 = 16}}.",
          ],
          hints: [
            "Exclude the median (`42`), find the midpoint of the lower 3 scores and upper 3 scores, and subtract.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "quantitative-descriptive-visual",
          strategy: "Percentage decrease from baseline",
          question:
            "After disabling social-media 'like' counts for two weeks, adolescents' mean social-comparison stress score drops from `60` to `45`. Calculate the **percentage decrease** in mean stress.",
          answer: { type: "number", value: 25, display: "25%" },
          traps: [
            {
              spec: { type: "number", value: 33.3, tolerance: 0.2 },
              feedback: "Divide the 15-point drop by the ORIGINAL baseline (60), not by the final score (45).",
            },
          ],
          solution: [
            "Decrease = `60 − 45 = 15` points.",
            "{{(15 / 60) * 100 = 25%}} decrease.",
          ],
          hints: [
            "Find the drop (`60 − 45`) and divide by the starting baseline (`60`).",
            "Multiply the decimal result by `100` to express as a percentage.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Equal-n pooled SD",
          question:
            "Two equal-sized groups (`n = 40` per group) in an AI-feedback study have standard deviations `SD₁ = 7` and `SD₂ = 17`. Calculate the **pooled standard deviation (`SD_pooled`)**.",
          answer: { type: "number", value: 13, display: "13" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "12 is the simple average (7 + 17)/2 — pooled SD averages the VARIANCES first, then takes the square root!",
            },
          ],
          solution: [
            "Square both standard deviations: {{7^2 = 49}} and {{17^2 = 289}}.",
            "Average the variances: {{(49 + 289)/2 = 338/2 = 169}}.",
            "Take the square root: {{sqrt(169) = 13}}.",
          ],
          hints: [
            "For equal `n`, use `SD_pooled = sqrt((SD₁² + SD₂²) / 2)`.",
            "Square `7` and `17`, average the squared values (`169`), then take the square root.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Pooled SD then Cohen's d",
          question:
            "In a Motivation experiment (`n₁ = 35, n₂ = 35`), the autonomy-supportive group scores `M₁ = 74.0 (SD₁ = 12)` and the controlling-prompt group scores `M₂ = 65.5 (SD₂ = 16)`. Calculate **Cohen's `d`** (give your answer to 2 decimal places).",
          answer: { type: "number", value: 0.6, tolerance: 0.02, display: "0.60" },
          solution: [
            "Compute equal-`n` pooled SD: {{SD_\"pooled\" = sqrt((12^2 + 16^2)/2) = sqrt((144 + 256)/2) = sqrt(200) ≈ 14.14}}.",
            "Compute Cohen's {{d}}: {{d = (74.0 - 65.5) / 14.14 = 8.5 / 14.14 ≈ 0.60}} (medium practical effect).",
          ],
          hints: [
            "First find `SD_pooled = sqrt((12² + 16²) / 2) = sqrt(200) ≈ 14.14`.",
            "Then divide the mean difference (`74.0 − 65.5 = 8.5`) by `14.14` and round to 2 dp.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Square r for shared variance %",
          question:
            "A Culture & Technology survey reports Pearson `r = −0.65` between collective-norm adherence and willingness to share personal data with commercial apps. Calculate the **percentage of shared variance** (`r² × 100`, give your answer to 2 decimal places).",
          answer: { type: "number", value: 42.25, tolerance: 0.1, display: "42.25%" },
          traps: [
            {
              spec: { type: "number", value: -42.25, tolerance: 0.1 },
              feedback: "Variance explained (r²) cannot be negative — squaring −0.65 gives +0.4225.",
            },
          ],
          solution: [
            "Square `r`: {{(-0.65)^2 = 0.4225}}.",
            "Multiply by `100` → **42.25%** shared variance.",
          ],
          hints: [
            "Square `−0.65` (remember negative × negative = positive).",
            "Multiply `0.4225` by `100` to express as a percentage.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Unexplained variance = 100% − r²%",
          question:
            "In a Motivation study, Pearson `r = +0.30` links leaderboard points with delayed exam performance. What **percentage of variance** in exam performance remains **unexplained** by leaderboard points?",
          answer: { type: "number", value: 91, display: "91%" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "9% is the EXPLAINED variance (r²) — read carefully: the question asks for UNEXPLAINED variance (100% − 9%).",
            },
            {
              spec: { type: "number", value: 70 },
              feedback: "You subtracted r (30%) instead of squaring r first (r² = 9%)!",
            },
          ],
          solution: [
            "Explained variance: {{r^2 = 0.30^2 = 0.09 = 9%}}.",
            "Unexplained variance: {{100% - 9% = 91%}}.",
          ],
          hints: [
            "First square `0.30` to find the percentage of variance explained (`r²`).",
            "Subtract that shared-variance percentage from `100%`.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Bonferroni α_adj = α / k",
          question:
            "A research team runs `4` separate t-tests on the same adolescent screen-time dataset while maintaining a family-wise error rate of `α = 0.05`. Calculate the **Bonferroni-adjusted significance threshold** (as an exact decimal).",
          answer: { type: "number", value: 0.0125, tolerance: 0.0001, display: "0.0125" },
          solution: [
            "Apply Bonferroni formula: {{α_\"adj\" = 0.05 / 4 = 0.0125}}.",
            "Each individual test now requires `p < 0.0125` to be judged statistically significant.",
          ],
          hints: [
            "Divide the family-wise `α = 0.05` by the number of statistical comparisons (`k = 4`).",
            "Check `0.05 ÷ 4` carefully to four decimal places.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Map reality vs decision in 2×2 error matrix",
          question:
            "A culturally tailored study-motivation workshop genuinely improves persistence in the population, yet an underpowered pilot trial (`n = 12/group`) yields `p = 0.14` and retains `H₀`. Name the **statistical error** committed (Type I or Type II).",
          answer: {
            type: "text",
            accept: ["type ii", "type 2", "type ii error", "type 2 error", "false negative"],
            display: "Type II",
          },
          solution: [
            "Because `H₁` is actually true (genuine effect exists) yet the test failed to reject `H₀`, the study committed a **Type II error (false negative, `β`)** driven by low statistical power.",
          ],
          hints: [
            "In reality, is there a true effect (`H₀` false) or zero effect (`H₀` true)?",
            "Missing a real effect (false negative) corresponds to which error type?",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "quantitative-descriptive-visual",
          strategy: "Compare mean equivalence vs SD divergence",
          marks: 3,
          question:
            "Source A compares AI-tutor comprehension scores (`0–100`) across two cultural cohorts (`n = 45` each): Cohort 1 records `M = 68.2 (SD = 5.4)` and Cohort 2 records `M = 67.8 (SD = 18.6)`, two-tailed `p = 0.84`. Analyse what these statistics reveal beyond the near-identical means. [3 marks]",
          modelAnswer:
            "Although the two averages are virtually identical and the high probability value fails to reject the null hypothesis, inspecting dispersion exposes a major behavioural contrast. Cohort 1 shows tight clustering around its average, reflecting consistent mastery across students, whereas Cohort 2's spread is over three times wider, indicating marked heterogeneity or polarised subgroups (some excelling while others struggle). Reporting only the non-significant average difference would obscure important within-group variation that warrants subgroup or qualitative follow-up.",
          markScheme: [
            {
              point: "Notes non-significant mean difference (p = 0.84 fails to reject H₀).",
              keywords: ["fail", "null", "non-significant", "nearly identical"],
            },
            {
              point: "Contrasts Cohort 1's tight consistency (SD = 5.4) with Cohort 2's wide dispersion (SD = 18.6).",
              keywords: ["tight", "consistent", "wide", "heterogeneity", "dispersion"],
            },
            {
              point: "Interprets Cohort 2's large spread as signalling polarised subgroups or uneven measurement fit needing follow-up.",
              keywords: ["subgroup", "polaris", "polariz", "obscure", "follow-up"],
            },
          ],
          hints: [
            "State the inferential verdict for `p = 0.84`, then contrast `SD = 5.4` against `SD = 18.6`.",
            "Consider what a massive SD inside one cohort implies about hidden subgroups or uneven cultural access to the AI tool.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "quantitative-descriptive-visual",
          strategy: "Audit y-axis origin + p vs Cohen's d",
          marks: 4,
          diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" role="img" aria-label="Bar chart comparing Gamified App at 46.2 and Standard App at 44.8 with vertical axis starting at 40 and ending at 50">
  <rect x="0" y="0" width="360" height="190" rx="10" fill="#ffffff"/>
  <text x="180" y="20" font-size="11" font-weight="800" text-anchor="middle" fill="#1c1630">Quiz Score (0–100) · N = 2,200 · p = 0.009, d = 0.15</text>
  <line x1="58" y1="34" x2="58" y2="152" stroke="#1c1630" stroke-width="1.5"/>
  <line x1="58" y1="152" x2="320" y2="152" stroke="#1c1630" stroke-width="1.5"/>
  <text x="52" y="40" font-size="9" text-anchor="end" fill="#5b5375">50</text>
  <text x="52" y="96" font-size="9" text-anchor="end" fill="#5b5375">45</text>
  <text x="52" y="154" font-size="9" text-anchor="end" fill="#5b5375">40</text>
  <rect x="106" y="79" width="58" height="73" rx="4" fill="#ea580c"/>
  <text x="135" y="72" font-size="10" font-weight="800" text-anchor="middle" fill="#9a3412">46.2</text>
  <rect x="216" y="95" width="58" height="57" rx="4" fill="#0d9488"/>
  <text x="245" y="88" font-size="10" font-weight="800" text-anchor="middle" fill="#115e59">44.8</text>
  <text x="135" y="169" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1c1630">Gamified App</text>
  <text x="245" y="169" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1c1630">Standard App</text>
</svg>`,
          question:
            "An EdTech company publishes the Source A chart above (`SD = 9.5` in both groups) to market its paid gamified app to schools. Evaluate the graphic and statistical claims using **Bias** and **Measurement**. [4 marks]",
          modelAnswer:
            "Visually, the vertical axis is truncated at 40 rather than starting at zero, distorting a tiny 1.4-point gain on a 100-point test so the gamified bar looks substantially taller — a clear presentation bias. In addition, omitting error bars conceals the large 9.5-point standard deviation, meaning participant distributions overlap almost completely. Statistically, although p = 0.009 rejects the null hypothesis, significance is driven purely by the huge sample of 2,200 learners rather than meaningful improvement. With Cohen's d = 0.15 falling below even the 0.20 small benchmark, practical measurement value is negligible and does not justify expensive school adoption.",
          markScheme: [
            {
              point: "Identifies the truncated y-axis (starting at 40 instead of 0) visually exaggerating a 1.4-point gap (Bias).",
              keywords: ["truncated", "zero", "exaggerat", "distort"],
            },
            {
              point: "Notes missing error bars concealing wide overlapping spread (SD = 9.5).",
              keywords: ["error bar", "overlap", "conceal", "spread"],
            },
            {
              point: "Explains p = 0.009 reflects huge sample size (N = 2,200) rather than big learning gains.",
              keywords: ["huge sample", "large sample", "sample size", "2,200"],
            },
            {
              point: "Evaluates d = 0.15 (< 0.20) as negligible practical significance (Measurement) undermining the marketing claim.",
              keywords: ["negligible", "practical", "0.20", "trivial"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies one surface visual or statistical flaw with limited link to the exact figures or Core Concepts." },
            { band: "3–4", marks: [3, 4], descriptor: "Evaluates both the visual distortion (truncated axis + omitted error bars) and statistical vs practical significance (N, p, d) explicitly grounded in Bias and Measurement." },
          ],
          hints: [
            "Inspect the vertical axis origin (`40` instead of `0`) and check whether error bars appear.",
            "Contrast `p = 0.009` at `N = 2,200` with `d = 0.15` (`< 0.20`) to separate statistical from practical significance.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "r² + directionality + third variable",
          marks: 4,
          question:
            "A cross-sectional Technology survey (`N = 310` Year 12 students) reports `r = −0.55, p < 0.001` between late-night short-video scrolling and morning academic motivation. Evaluate the authors' headline conclusion that *“short videos directly erode adolescent academic motivation.”* [4 marks]",
          modelAnswer:
            "Although the negative correlation is highly statistically significant, squaring −0.55 yields r² = 0.3025, meaning 30.25% of variance is shared while nearly 70% of motivation differences stem from other factors. Crucially, the cross-sectional correlational design involves no independent-variable manipulation or random allocation, so causal claims are unwarranted. Reverse directionality is equally plausible: students already experiencing low academic motivation or dread about school may stay awake scrolling to avoid sleep and study. Furthermore, third variables such as chronic sleep deprivation, exam anxiety, or household stress could independently drive both heavy scrolling and depleted morning drive.",
          markScheme: [
            {
              point: "Computes and interprets r² = 30.25% shared variance (leaving ~70% unexplained).",
              keywords: ["30.25", "30.3", "30%", "unexplained", "70%"],
            },
            {
              point: "Critiques Causality: non-experimental correlational design lacks IV manipulation / random allocation.",
              keywords: ["correlational", "random", "manipulation", "caus"],
            },
            {
              point: "Explains plausible reverse directionality (low-motivation students scroll more to procrastinate/cope).",
              keywords: ["reverse", "bidirectional", "directionality", "procrastinat"],
            },
            {
              point: "Identifies concrete third variables (e.g., sleep deprivation, exam anxiety, family stress) confounding both measures.",
              keywords: ["third variable", "sleep", "anxiety", "confound"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "States 'correlation does not equal causation' generically without calculating r² or developing concrete rival explanations." },
            { band: "3–4", marks: [3, 4], descriptor: "Integrates r² (30.25% vs ~70% unexplained) with explicit Causality analysis covering both reverse directionality and context-specific third variables." },
          ],
          hints: [
            "Square `−0.55` to quantify how much variance is explained versus unexplained.",
            "Give one specific **reverse-causality** story and at least one plausible **third variable** for teenagers.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q13",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Link α shift to Type I, Type II & ethical Responsibility",
          marks: 4,
          question:
            "Psychologists evaluating an AI wellbeing chatbot for distressed teenagers (`N = 40`) tighten their significance level from `α = 0.05` to `α = 0.01` without increasing sample size. Explain the statistical trade-off between Type I and Type II errors and link this decision to ethical **Responsibility**. [4 marks]",
          modelAnswer:
            "Lowering the cutoff from 5% to 1% demands stronger evidence against the null hypothesis, directly reducing the probability of a Type I false positive — wrongly endorsing an ineffective chatbot. However, keeping the small sample fixed at 40 decreases statistical power (1 − β), making genuine therapeutic gains harder to detect and raising the risk of a Type II false negative. Under ethical Responsibility, avoiding false positives protects vulnerable teenagers from relying on an unproven digital tool instead of human care. Yet an inflated false-negative risk could also prematurely discard a genuinely helpful support aid; increasing sample size through an a priori power calculation is the responsible solution.",
          markScheme: [
            {
              point: "Explains tightening α to 0.01 reduces Type I (false-positive) error probability.",
              keywords: ["false positive", "reduces", "lower", "wrongly endorsing"],
            },
            {
              point: "Explains fixed small N (40) reduces statistical power and raises Type II (false-negative) risk.",
              keywords: ["power", "false negative", "raises", "harder to detect"],
            },
            {
              point: "Links Type I protection to Responsibility (avoiding harm to distressed youth from unproven tech).",
              keywords: ["vulnerable", "unproven", "harm", "protect"],
            },
            {
              point: "Weighs the ethical cost of a Type II miss or recommends increasing N / power analysis responsibly.",
              keywords: ["discard", "power calculation", "power analysis", "increasing sample"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Defines Type I or Type II error accurately but offers minimal link to fixed N = 40 or ethical consequences." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains the α–power trade-off at fixed N = 40 and connects both error risks directly to ethical Responsibility with distressed adolescents." },
          ],
          hints: [
            "Show what happens to false positives (`α`) AND statistical power (`1 − β`) when `α` tightens at fixed `N = 40`.",
            "Explain the real-world ethical harm to distressed teenagers of *both* a false positive and a false negative.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Separate p from d, Causality & Policy Responsibility",
          marks: 5,
          question:
            "A government report cites an observational dataset (`N = 9,500` students) showing lower wellbeing among daily smartphone users (`p = 0.003, d = 0.07`) to justify an immediate nationwide ban on personal phones in all secondary schools. Evaluate this policy recommendation using **Measurement**, **Causality**, and **Responsibility**. [5 marks]",
          modelAnswer:
            "First, under Measurement, statistical significance (p = 0.003) is an artefact of the massive 9,500-student sample rather than substantial real-world harm; Cohen's d = 0.07 sits far below the 0.20 small benchmark, meaning user and non-user distributions overlap almost completely. Moreover, crude 'daily use' lumps passive social-comparison scrolling together with educational and accessibility tools, reducing construct validity. Second, under Causality, observational comparison cannot isolate phone use from confounders like socioeconomic stress, poor sleep, or pre-existing distress driving heavier phone reliance. Third, under Responsibility, enforcing a blanket ban on negligible correlational evidence risks harming multilingual, neurodivergent, or commuter students who depend on phones for translation, assistive apps, or family safety. Policymakers should demand randomized longitudinal trials and subgroup analyses before imposing sweeping restrictions.",
          markScheme: [
            {
              point: "Diagnoses large-N triviality: p = 0.003 driven by N = 9,500 while d = 0.07 (< 0.20) is practically negligible.",
              keywords: ["negligible", "artefact", "massive", "0.20", "overlap"],
            },
            {
              point: "Critiques Measurement construct validity ('daily use' conflates harmful vs helpful phone activities).",
              keywords: ["construct validity", "lumps", "conflates", "passive"],
            },
            {
              point: "Critiques Causality: observational data cannot exclude confounders or reverse directionality.",
              keywords: ["confounder", "reverse", "pre-existing", "observational"],
            },
            {
              point: "Applies ethical Responsibility to unintended harm for neurodivergent/multilingual/commuter subgroups.",
              keywords: ["neurodivergent", "accessibility", "assistive", "unintended harm", "commuter"],
            },
            {
              point: "Reaches a nuanced policy judgement recommending randomized longitudinal or subgroup evidence first.",
              keywords: ["randomized", "longitudinal", "subgroup", "sweeping"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Raises basic doubts about correlation or sample size without engaging with d = 0.07 or specific Core Concepts." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately distinguishes p = 0.003 from d = 0.07 and links Measurement and Causality, though Responsibility or policy nuance is brief." },
            { band: "5", marks: [5, 5], descriptor: "Delivers sharp, integrated evaluation across Measurement, Causality, and Responsibility grounded in N = 9,500, p = 0.003, and d = 0.07." },
          ],
          hints: [
            "Start with the huge gap between `p = 0.003` (`N = 9,500`) and `d = 0.07`.",
            "Question what 'daily smartphone use' actually measures (**Measurement**), why observational data lack **Causality**, and which students a blanket ban might harm (**Responsibility**).",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Analyse",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Multi-metric quantitative audit (Skew + d + Bonferroni)",
          marks: 6,
          question:
            "A **Motivation & Technology** Source A table compares `5` experimental app features against a control (`n = 30` per group) at uncorrected `α = 0.05`:\n\n| Feature vs Control | Mean | Median | SD | p-value | Cohen's d |\n|---|---|---|---|---|---|\n| Autonomy Choice | 76.4 | 75.8 | 7.2 | 0.004 | 0.82 |\n| Streak Badges | 74.1 | 63.0 | 18.9 | 0.038 | 0.44 |\n| Peer Leaderboard | 69.0 | 68.5 | 14.5 | 0.210 | 0.24 |\n\nAnalyse these findings fully, evaluating distribution shape, practical effect size, and multiple-comparison Type I error risk across all `5` tests. [6 marks]",
          modelAnswer:
            "First, Autonomy Choice shows the strongest, cleanest evidence: its average (76.4) closely matches its midpoint (75.8), signalling an approximately symmetric distribution with high consistency (small SD = 7.2), a large practical effect (d = 0.82 ≥ 0.80), and strong statistical significance. Even after applying a Bonferroni correction across the 5 comparisons (α_adj = 0.05 / 5 = 0.010), p = 0.004 remains statistically significant, resisting Type I false-positive inflation. Second, Streak Badges displays severe positive skew because the mean (74.1) sits 11.1 points above the median (63.0) alongside a wide SD (18.9), indicating extreme high-scoring outliers inflate its average; median and IQR should replace mean and SD here. Crucially, its uncorrected p = 0.038 fails the Bonferroni threshold (0.038 > 0.010), flagging elevated Type I error risk. Third, Peer Leaderboard fails to reject H₀ (p = 0.210) with a small effect (d = 0.24) and wide spread (SD = 14.5), though modest sample size (n = 30) means low statistical power cannot completely rule out a Type II error for a small subgroup effect.",
          markScheme: [
            {
              point: "Evaluates Autonomy Choice as symmetric (76.4 ≈ 75.8), consistent (SD = 7.2), and large practical effect (d = 0.82).",
              keywords: ["symmetric", "consistent", "large", "0.82"],
            },
            {
              point: "Calculates Bonferroni α_adj = 0.05 / 5 = 0.010 across the 5 tests.",
              keywords: ["bonferroni", "0.010", "0.01"],
            },
            {
              point: "Confirms Autonomy Choice (p = 0.004 < 0.010) survives Bonferroni, whereas Streak Badges (p = 0.038 > 0.010) does not (Type I risk).",
              keywords: ["survives", "fails", "false-positive", "type i"],
            },
            {
              point: "Diagnoses positive skew & outlier distortion in Streak Badges (Mean 74.1 vs Median 63.0, large SD 18.9).",
              keywords: ["positive skew", "11.1", "outlier", "18.9"],
            },
            {
              point: "Recommends Median + IQR for skewed Streak Badges rather than parametric mean/SD.",
              keywords: ["iqr", "replace", "skewed"],
            },
            {
              point: "Interprets Peer Leaderboard (p = 0.210 fails to reject H₀, small d = 0.24) without claiming H₀ is proven (notes low power / Type II caution at n = 30).",
              keywords: ["0.210", "low statistical power", "power", "type ii"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Reads off raw numbers from the table without diagnosing skew, effect-size benchmarks, or Bonferroni adjustment." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately analyses skew and Cohen's d across conditions but misses Bonferroni adjustment or nuances of non-significant results." },
            { band: "5–6", marks: [5, 6], descriptor: "Synthesises symmetry/skew, dispersion, Cohen's d, exact Bonferroni correction (α = 0.010), and Type I/II nuances across all rows." },
          ],
          hints: [
            "Compare Mean vs Median in every row (`74.1` vs `63.0` jumps out!).",
            "Compute the Bonferroni cutoff `0.05 / 5 = 0.010` and re-evaluate `p = 0.004` vs `p = 0.038`.",
            "Remember not to claim `p = 0.210` proves zero effect — consider power at `n = 30`.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Qualitative Trustworthiness & Mixed-Method Packets
    // -----------------------------------------------------------------------
    {
      id: "8-hl-paper3-data-analysis-p2",
      title: "Practice Paper 2: Qualitative Trustworthiness & Mixed-Method Packets [HL]",
      level: "HL",
      questions: [
        {
          id: "8-hl-paper3-data-analysis-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Match verification method to Lincoln & Guba pillar",
          question:
            "After drafting themes from 14 interviews about AI study stress, the researcher shares the draft themes with participants to check whether the interpretations faithfully represent their lived experience (**member checking**). State the **single trustworthiness criterion** primarily strengthened.",
          answer: { type: "text", accept: ["credibility"], display: "Credibility" },
          solution: [
            "Member checking (respondent validation) verifies truth value from participants' own perspectives, primarily strengthening **credibility**.",
          ],
          hints: [
            "Which trustworthiness pillar is the qualitative parallel to internal validity?",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Match thick description to trustworthiness pillar",
          question:
            "A qualitative study of bilingual gaming communities includes **thick description** detailing local internet-café norms, socioeconomic background, school schedules, and rich verbatim quotes. State the **single trustworthiness criterion** primarily strengthened.",
          answer: { type: "text", accept: ["transferability"], display: "Transferability" },
          solution: [
            "Thick description enables outside readers to judge whether findings fit another cultural or social setting, strengthening **transferability**.",
          ],
          hints: [
            "Which pillar replaces statistical generalization by letting readers judge contextual fit?",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Match reflexivity journal to trustworthiness pillar",
          question:
            "A Western researcher studying East Asian classroom motivation maintains a **reflexive journal** documenting her own cultural assumptions and bracketing biases during coding. State the **single trustworthiness criterion** primarily strengthened.",
          answer: { type: "text", accept: ["confirmability"], display: "Confirmability" },
          solution: [
            "Reflexive journaling and bracketing ensure themes remain grounded in participant data rather than analyst preconceptions, strengthening **confirmability**.",
          ],
          hints: [
            "Which of the four trustworthiness pillars parallels quantitative objectivity?",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Bottom-up vs top-down coding",
          question:
            "An analyst reads interview transcripts about online study habits and sorts every sentence strictly into three pre-existing Self-Determination Theory labels (`Autonomy`, `Competence`, `Relatedness`). State whether this coding approach is **inductive** or **deductive**.",
          answer: { type: "text", accept: ["deductive", "deductive coding"], display: "Deductive" },
          solution: [
            "Applying pre-existing theoretical categories top-down onto qualitative text is **deductive** coding.",
          ],
          hints: [
            "Did the themes emerge bottom-up from the raw words, or were they applied top-down from an existing theory?",
            "Think of the direction of reasoning: moving from a general theory down to specific data extracts.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Surface vs underlying theme level",
          question:
            "A student says: *“I keep my camera off in online seminars so I never look like I'm showing off.”* Interpreting this quote as **collectivist modesty norms constraining digital visibility** identifies a **semantic** or **latent** theme?",
          answer: { type: "text", accept: ["latent", "latent theme"], display: "Latent" },
          solution: [
            "Uncovering implicit cultural modesty norms beneath the explicit words ('keep my camera off') is **latent** thematic coding.",
          ],
          hints: [
            "Did the student literally mention 'collectivist modesty norms', or is the analyst interpreting an underlying cultural meaning?",
            "Contrast explicit surface statements with hidden underlying assumptions.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Spot illicit percentage extrapolation from tiny N",
          question:
            "A journalist reads a qualitative source with `6` purposively sampled interviewees and reports: *“Three of six interviewees felt anxious about AI proctoring, proving 50% of all IB students fear AI exams.”* Name the **two-word bias** committed.",
          answer: { type: "text", accept: ["quantification bias"], display: "Quantification bias" },
          solution: [
            "Treating a small purposive qualitative count (`3/6`) as a statistically representative population percentage commits **quantification bias**.",
          ],
          hints: [
            "What error occurs when tiny qualitative counts are turned into population percentages?",
            "The first word relates to turning words/counts into statistical quantities.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "quantitative-descriptive-visual",
          strategy: "Combine subtotal plus outlier and divide by total N",
          question:
            "In a small motivation dataset of `8` participants, seven typical scores sum to `412` points and an 8th extreme participant scores `100` points. Calculate the overall **mean** of all `8` scores.",
          answer: { type: "number", value: 64, display: "64" },
          solution: [
            "Total sum of all 8 scores = `412 + 100 = 512`.",
            "Divide by {{N = 8}}: {{M = 512 / 8 = 64}} points.",
          ],
          hints: [
            "Add the 8th score (`100`) to the sum of the first seven (`412`).",
            "Divide the grand total (`512`) by `8`.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Deduce",
          guideRef: "inferential-pvalues-effect-size",
          strategy: "Square root of r² plus direction sign",
          question:
            "A Paper 3 footnote reports that cultural individualism accounts for `36%` of the variance in willingness to challenge an AI recommendation, with a **negative** linear slope on the scatterplot. Deduce the **Pearson `r`** value (including sign).",
          answer: { type: "number", value: -0.6, tolerance: 0.01, display: "−0.6" },
          traps: [
            {
              spec: { type: "number", value: 0.6, tolerance: 0.01 },
              feedback: "Check the slope direction — the question specifies a NEGATIVE linear slope, so include the minus sign!",
            },
          ],
          solution: [
            "Convert `36%` shared variance to decimal: {{r^2 = 0.36}}.",
            "Take the square root: {{|r| = sqrt(0.36) = 0.60}}.",
            "Apply the negative slope sign → **`r = −0.6`**.",
          ],
          hints: [
            "Convert `36%` to a decimal (`0.36`) and take its square root to find the magnitude `|r|`.",
            "Check the stated slope direction to decide whether Pearson `r` carries a positive or negative sign.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Distinguish",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Who asks vs how the method frames answers",
          marks: 3,
          question:
            "A tech-company vice-president conducts workplace focus groups asking junior engineers whether algorithmic productivity trackers harm their intrinsic motivation. Distinguish **personal reflexivity** from **epistemological reflexivity** in evaluating this Paper 3 source. [3 marks]",
          modelAnswer:
            "Personal reflexivity examines how the researcher's own identity, values, and institutional power shape participant disclosures: here, the vice-president's authority over promotions creates acute social desirability pressure, inhibiting engineers from criticising tracking software. By contrast, epistemological reflexivity questions how the chosen research method and underlying framing construct knowledge: using public peer focus groups forces employees to speak in front of colleagues, amplifying conformity and censoring private anxiety compared with anonymous diaries. Evaluating both layers exposes how interviewer status and group methodology jointly distort confirmability and credibility.",
          markScheme: [
            {
              point: "Explains personal reflexivity via the vice-president's authority/power driving social desirability.",
              keywords: ["authority", "power", "social desirability", "promotion"],
            },
            {
              point: "Explains epistemological reflexivity via the focus-group format itself shaping public peer conformity vs anonymous methods.",
              keywords: ["focus group", "public", "conformity", "anonymous", "method"],
            },
            {
              point: "Links both explicitly to qualitative trustworthiness (confirmability / credibility).",
              keywords: ["confirmability", "credibility", "trustworthiness"],
            },
          ],
          hints: [
            "Tie **personal** reflexivity to *who* is running the session (the VP's workplace authority).",
            "Tie **epistemological** reflexivity to *how* the focus-group format itself constrains candour compared with anonymous methods.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Semantic code + Latent cultural theme + Negative-case analysis",
          marks: 4,
          question:
            "Read Source B from a **Culture & Motivation** interview with a bicultural Singapore–UK teenager (P6): *“On the revision app I stay up past 1 a.m. to keep our class badge gold — if my score drops, my friends drop too, so I don't really care about the quiz itself anymore.”*\n\nIdentify one **semantic code**, one **latent theme**, and explain why applying **negative-case analysis** across the remaining transcripts strengthens credibility. [4 marks]",
          modelAnswer:
            "A semantic (surface) code capturing P6's literal statement is 'late-night app use to maintain group badge status'. At a deeper latent level, the excerpt reveals 'collectivist peer obligation crowding out intrinsic learning motivation': social accountability to friends converts study into extrinsic guilt rather than genuine mastery (echoing overjustification under Self-Determination Theory). Applying negative-case analysis requires actively searching the remaining transcripts for disconfirming voices — such as students who felt genuinely supported or energised by shared team streaks. Incorporating those contrasting cases counters researcher confirmation bias and strengthens credibility by presenting a balanced, authentic account.",
          markScheme: [
            {
              point: "Identifies an accurate literal semantic code (e.g., late-night app use / maintaining gold badge).",
              keywords: ["late-night", "1 a.m", "gold", "literal", "surface"],
            },
            {
              point: "Interprets a deeper latent cultural/motivational theme (peer obligation / extrinsic crowding-out / SDT).",
              keywords: ["obligation", "extrinsic", "crowding", "overjustification", "collectivist"],
            },
            {
              point: "Explains negative-case analysis as actively examining disconfirming/contrasting participant experiences.",
              keywords: ["disconfirming", "contrasting", "energised", "supported", "opposing"],
            },
            {
              point: "Links negative-case analysis to curbing confirmation bias and enhancing credibility.",
              keywords: ["confirmation bias", "balanced", "authentic", "credibility"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies a surface code or defines negative-case analysis generically without integrating P6's quote." },
            { band: "3–4", marks: [3, 4], descriptor: "Cleanly separates semantic from latent cultural/motivational meaning in P6's quote and justifies negative-case analysis for credibility." },
          ],
          hints: [
            "Keep the **semantic** code close to the explicit surface wording; push the **latent** theme into cultural peer obligation and intrinsic vs extrinsic motivation.",
            "Show what a contrasting ('negative') interviewee might report, and why including them protects against confirmation bias.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "paper3-exam-strategy",
          strategy: "Mixed-method divergence exposes Measurement flaw",
          marks: 4,
          question:
            "In a Paper 3 Technology packet, **Source A** reports that XP-rewarded students logged significantly more video-lecture minutes (`M = 34.2, SD = 6.1`) than controls (`M = 21.0, SD = 5.8, p < 0.001, d = 2.22`). However, **Source B** interviews reveal P2 admitting: *“I let the lectures play muted in a background tab while gaming just to collect the daily XP streak.”* Evaluate what **methodological triangulation** reveals using **Measurement**. [4 marks]",
          modelAnswer:
            "Methodological triangulation juxtaposes quantitative telemetry logs (Source A) against qualitative interview testimony (Source B), revealing sharp divergence rather than convergence. Taken alone, Source A's massive effect size (d = 2.22, p < 0.001) appears to demonstrate dramatic engagement gains. Yet P2's qualitative disclosure exposes a critical Measurement failure: operationalizing learning engagement solely as 'logged video minutes' lacks construct validity because passive muted playback inflates time-on-platform without cognitive encoding. This divergence illustrates why qualitative data add indispensable explanatory credibility and why follow-up designs must operationalize genuine comprehension via delayed recall tests or active eye/attention checks rather than raw screen minutes.",
          markScheme: [
            {
              point: "Identifies methodological triangulation comparing Source A logs with Source B interviews, noting divergence.",
              keywords: ["divergen", "contradict", "juxtapos", "telemetry"],
            },
            {
              point: "Quotes exact Source A strength (d = 2.22 / M = 34.2 vs 21.0) that appears persuasive in isolation.",
              keywords: ["2.22", "34.2", "isolation", "dramatic"],
            },
            {
              point: "Diagnoses a Measurement / construct validity failure: 'logged minutes' captured muted gaming/extrinsic compliance rather than encoding.",
              keywords: ["construct validity", "muted", "encoding", "operationaliz"],
            },
            {
              point: "Draws a concrete implication: measure comprehension/delayed recall rather than raw platform minutes.",
              keywords: ["delayed", "comprehension", "recall", "follow-up"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes Source A and Source B separately with little link to triangulation or construct validity." },
            { band: "3–4", marks: [3, 4], descriptor: "Synthesises the divergence between d = 2.22 and P2's muted-tab quote to diagnose a construct-validity (Measurement) flaw and concrete remedy." },
          ],
          hints: [
            "Show how persuasive Source A (`d = 2.22`) looks *before* reading Source B.",
            "Explain the exact **construct validity** failure in operationalizing learning as 'logged minutes', and suggest a better DV.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Examine",
          guideRef: "paper3-exam-strategy",
          strategy: "Minor ethics + digital privacy + imposed-etic lens",
          marks: 4,
          question:
            "A cross-cultural Paper 3 study covertly records 14-year-olds' private AI-chatbot conversations across Singapore, Brazil, and Kenya for one month, then administers an untranslated American self-esteem questionnaire. Examine this study through **Responsibility** and **Perspective**. [4 marks]",
          modelAnswer:
            "Under ethical Responsibility, covertly harvesting private chatbot logs from 14-year-old minors without prior parental consent and adolescent assent breaches informed consent and strips away the right to withdraw during data collection. Because chatbot prompts often disclose personal mental-health struggles, storing conversational metadata creates severe confidentiality and psychological-harm risks if records are re-identified or leaked; robust anonymisation, opt-in consent, and thorough debriefing are mandatory. Under cultural Perspective, deploying an untranslated American questionnaire imposes an etic framework assuming US self-esteem norms operate identically in Singapore, Brazil, and Kenya. Language barriers and differing cultural conceptions of self-worth undermine construct validity and cultural measurement invariance; back-translation and emic co-design with local psychologists are required.",
          markScheme: [
            {
              point: "Identifies breach of informed consent (parental consent + minor assent) and right to withdraw for 14-year-olds.",
              keywords: ["parental consent", "assent", "withdraw", "informed consent"],
            },
            {
              point: "Examines digital privacy/confidentiality and psychological-harm risks in private mental-health chatbot prompts.",
              keywords: ["confidentiality", "privacy", "re-identif", "psychological"],
            },
            {
              point: "Diagnoses imposed-etic bias from exporting an untranslated US scale across three distinct cultures.",
              keywords: ["imposed-etic", "etic", "cultural", "conceptions"],
            },
            {
              point: "Explains threat to construct validity / measurement invariance and proposes back-translation or emic adaptation.",
              keywords: ["back-translation", "emic", "invariance", "construct validity"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Lists generic ethics ('no consent') or notes language issues without linking minor assent, digital privacy, or imposed-etic bias." },
            { band: "3–4", marks: [3, 4], descriptor: "Examines both Responsibility (minor consent/assent, digital confidentiality/harm) and Perspective (imposed-etic scale, back-translation/emic validity) thoroughly." },
          ],
          hints: [
            "Address **Responsibility** specifically for *14-year-olds* (parental consent + assent + sensitive private chat logs).",
            "Address **Perspective** by diagnosing **imposed-etic** scale transfer and recommending back-translation + emic piloting.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q13",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "qualitative-coding-trustworthiness",
          strategy: "Audit all 4 Lincoln & Guba pillars — avoid 'small N' trap",
          marks: 5,
          question:
            "A qualitative study investigates how social-media filters affect body image using two `5`-person focus groups (`N = 10` urban teenagers). The lone researcher — who previously published articles opposing social media — coded transcripts deductively without member checking, provided brief one-line demographic notes, and kept no coding log. Evaluate the **trustworthiness** of this study. [5 marks]",
          modelAnswer:
            "Crucially, this study should not be dismissed merely because N = 10 lacks statistical generalizability; qualitative inquiry is evaluated on trustworthiness rather than population statistics. First, credibility is weakened because the researcher omitted member checking and relied on public focus groups, where peer scrutiny triggers social desirability on sensitive body-image topics. Second, confirmability is severely compromised: the lone analyst's anti-social-media stance combined with top-down deductive coding invites confirmation bias without a reflexive journal or second coder (researcher triangulation). Third, dependability is undermined by the absence of an audit trail documenting coding shifts, making the interpretive pathway untraceable. Finally, transferability is restricted because sparse one-line demographics lack the thick description needed for readers to judge contextual fit to rural or culturally diverse youth.",
          markScheme: [
            {
              point: "Avoids the quantitative 'small N' fallacy, framing evaluation around qualitative trustworthiness rather than statistical generalization.",
              keywords: ["generalizability", "merely", "trustworthiness", "population"],
            },
            {
              point: "Evaluates credibility: missing member checking + public focus-group social desirability on body image.",
              keywords: ["credibility", "social desirability", "peer scrutiny", "sensitive"],
            },
            {
              point: "Evaluates confirmability: lone researcher's prior bias + deductive coding without reflexivity or second coder.",
              keywords: ["confirmability", "confirmation bias", "reflexive", "triangulation"],
            },
            {
              point: "Evaluates dependability: no audit trail makes analytical decisions untraceable.",
              keywords: ["dependability", "audit trail", "untraceable"],
            },
            {
              point: "Evaluates transferability: brief demographics lack thick description for judging contextual fit.",
              keywords: ["transferability", "thick description", "contextual fit", "rural"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Criticises the study mainly for 'small sample size' or mentions 1–2 qualitative concepts superficially." },
            { band: "3–4", marks: [3, 4], descriptor: "Applies at least three Lincoln & Guba trustworthiness criteria accurately to specific details from the stimulus." },
            { band: "5", marks: [5, 5], descriptor: "Systematically evaluates Credibility, Confirmability, Dependability, and Transferability anchored to stimulus details while explicitly rejecting quantitative 'small N' reductionism." },
          ],
          hints: [
            "Open by noting that `N = 10` is NOT automatically a flaw in qualitative work — audit the **4 trustworthiness pillars** instead.",
            "Map each missing safeguard in the prompt (member checking, prior bias/deductive lone coder, no coding log, one-line demographics) to its exact pillar.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "paper3-exam-strategy",
          strategy: "Source-anchored Paper 3 Q2+Q3 evaluation across 3 Core Concepts",
          marks: 6,
          question:
            "**Mini Paper 3 Packet:**\n- **Source A (Quant, quasi-experiment):** Tokyo high-schoolers (`n = 40`) used a group-chat AI tutor for 10 days (`M = 78.4, SD = 6.2`); London undergraduates (`n = 40`) used a solo AI tutor (`M = 71.2, SD = 15.8`), `p = 0.008, d = 0.60`.\n- **Source B (Qual, 4 Tokyo interviewees):** P4 noted: *“We checked the AI together every evening so nobody fell behind before mock exams.”*\n- **Source C (Method):** Self-selected volunteers; identical English-language comprehension test.\n\nEvaluate this research packet using **Causality**, **Measurement**, and **Perspective**. [6 marks]",
          modelAnswer:
            "First, regarding Causality, although Source A reports a statistically significant medium-to-large difference (p = 0.008, d = 0.60), three variables are completely confounded across the two intact groups: cultural context (Tokyo vs London), developmental/educational stage (high-schoolers vs undergraduates), and tutor format (group-chat vs solo). Self-selected volunteers further introduce motivation bias, and P4's mention of imminent mock exams adds an uncontrolled situational confound, preventing any causal claim that group-chat AI outperforms solo AI. Second, regarding Measurement, using an identical English-language test disadvantages non-native English readers in Tokyo (lowering construct validity unless proficiency is controlled), while London's wide dispersion (SD = 15.8 vs 6.2) reveals stark individual variability masked by the 71.2 average. Third, regarding Perspective, P4's quote illuminates an emic collectivist dynamic — mutual obligation not to let peers fall behind — explaining why group-chat prompts aligned with Tokyo's tightly clustered scores (SD = 6.2). Treating group AI as universally superior across cultures would commit an imposed-etic error without testing both formats within each culture.",
          markScheme: [
            {
              point: "Cites exact Source A stats (M = 78.4 vs 71.2, p = 0.008, d = 0.60) as the baseline finding being qualified.",
              keywords: ["78.4", "0.60", "medium-to-large", "0.008"],
            },
            {
              point: "Evaluates Causality: exposes complete confounding of culture, educational stage (high school vs undergrad), and AI format.",
              keywords: ["confound", "intact", "educational", "stage"],
            },
            {
              point: "Notes self-selection bias and/or Tokyo's imminent mock exams (Source B, P4) as rival explanations.",
              keywords: ["self-select", "mock exam", "situational", "rival"],
            },
            {
              point: "Evaluates Measurement: untranslated English test threatens construct validity / proficiency bias.",
              keywords: ["non-native", "proficiency", "construct validity", "disadvantage"],
            },
            {
              point: "Interprets the SD contrast (15.8 vs 6.2) showing wide heterogeneity in London vs tight clustering in Tokyo.",
              keywords: ["15.8", "clustering", "heterogeneity", "variability"],
            },
            {
              point: "Applies cultural Perspective (emic collectivist peer obligation in P4's quote vs avoiding imposed-etic universality).",
              keywords: ["emic", "collectivist", "imposed-etic", "mutual"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Makes general methodological criticisms with minimal integration of Sources A, B, and C." },
            { band: "3–4", marks: [3, 4], descriptor: "Evaluates two Core Concepts accurately using source details, though cross-source triangulation or the third concept is underdeveloped." },
            { band: "5–6", marks: [5, 6], descriptor: "Provides sustained, triangulated evaluation across Causality, Measurement, and Perspective, weaving exact Source A figures, Source B P4's quote, and Source C flaws seamlessly." },
          ],
          hints: [
            "List EVERY variable that differs between the Tokyo and London groups — there are at least three plus mock exams!",
            "Compare `SD = 6.2` vs `SD = 15.8` and notice the English-language test in Source C (**Measurement**).",
            "Use P4's quote to show an **emic** cultural perspective explaining why Tokyo scores clustered so tightly.",
          ],
        },
        {
          id: "8-hl-paper3-data-analysis-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Design",
          guideRef: "paper3-exam-strategy",
          strategy: "F-O-R-E-T: Fix · Operationalize · Rigour · Ethics · Trade-off",
          marks: 8,
          question:
            "**HL Paper 3 Q4 Task:** Propose and justify a follow-up investigation that directly resolves the methodological and cultural flaws of the Tokyo vs London AI-tutor packet in Q14 (confounded culture/age/app format, 10-day novelty window, English-only test, self-selection). Specify your **design, sampling, operationalized variables, qualitative triangulation, ethical safeguards, and one realistic trade-off**. [8 marks]",
          modelAnswer:
            "To disentangle Culture from Technology and establish Causality, I propose a 6-week longitudinal 2 × 2 randomized controlled experiment paired with explanatory semi-structured interviews (mixed-method sequential design). First, for sampling, recruit matched cohorts of Year 12 students aged 16–17 via stratified random sampling across public secondary schools in both Tokyo (n = 120) and London (n = 120), ensuring balanced prior achievement and eliminating the high-school vs undergraduate confound and volunteer bias. Second, within each city, randomly allocate participants to either the Group-Chat AI Tutor or the Solo AI Tutor (60 per cell), holding daily study prompts constant to isolate both main effects and any Culture × Technology interaction. Third, operationalize the dependent variable as delayed comprehension and transfer test scores measured at Baseline, Week 2, and Week 6 (tracking sustained Change beyond a 10-day novelty spike), using back-translated Japanese and English versions piloted for cross-cultural measurement invariance and marked blind to condition. Fourth, conduct purposive semi-structured interviews with 16 students (4 per cell, including negative cases) run by culturally matched independent interviewers using inductive thematic coding, member checking, a reflexive journal, and an audit trail to strengthen credibility, dependability, and confirmability. Fifth, embed ethical Responsibility by securing institutional approval, parental consent plus student assent, pseudonymized encrypted chat storage, right to withdraw without grade penalty, and equal post-trial access to the superior tutor for all students. Finally, acknowledge a key trade-off: extending to 6 weeks improves ecological validity and tests sustained Change, yet increases participant attrition — requiring intention-to-treat analysis and dropout checks across cells.",
          markScheme: [
            {
              point: "Explicitly links the design to fixing specific packet flaws (culture × app × age confound and 10-day novelty).",
              keywords: ["disentangle", "2 × 2", "2x2", "novelty"],
            },
            {
              point: "Specifies matched-age stratified sampling across both cultural sites (eliminating age & volunteer bias).",
              keywords: ["stratified", "aged 16", "matched", "120"],
            },
            {
              point: "Operationalizes random allocation of BOTH AI conditions within EACH culture (establishing Causality & interaction).",
              keywords: ["randomly allocate", "each city", "interaction", "main effect"],
            },
            {
              point: "Operationalizes longitudinal DV (baseline + delayed Week 6 retention/transfer) with back-translation & blind marking (Measurement & Change).",
              keywords: ["back-translated", "invariance", "blind", "week 6"],
            },
            {
              point: "Integrates qualitative triangulation (culturally matched independent interviewers + inductive coding + negative cases).",
              keywords: ["semi-structured", "inductive", "culturally matched", "negative case"],
            },
            {
              point: "Includes concrete trustworthiness safeguards (member checking, reflexive journal, audit trail).",
              keywords: ["member checking", "reflexive journal", "audit trail"],
            },
            {
              point: "Details ethical Responsibility for minors (parental consent + assent, encrypted privacy, withdrawal, equitable debrief/access).",
              keywords: ["parental consent", "assent", "encrypted", "withdraw"],
            },
            {
              point: "Evaluates a realistic trade-off of the proposed follow-up (e.g., 6-week attrition risk + mitigation).",
              keywords: ["trade-off", "attrition", "intention-to-treat", "dropout"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
            { band: "1–2", marks: [1, 2], descriptor: "Proposes a vague follow-up ('use a bigger experiment') lacking operationalization, cultural controls, or ethics." },
            { band: "3–5", marks: [3, 5], descriptor: "Designs a coherent randomized or mixed-method follow-up addressing the confound, with partial operationalization or ethics." },
            { band: "6–8", marks: [6, 8], descriptor: "Delivers a rigorous, justified 2 × 2 longitudinal mixed-method design with matched sampling, back-translated blind Measurement, qualitative trustworthiness, minor Responsibility, and an explicit trade-off." },
          ],
          hints: [
            "Use the **F-O-R-E-T** blueprint: **F**ix the exact confounds, **O**perationalize variables & matched sampling, build **R**igour (quant + qual trustworthiness), embed **E**thics, and state one honest **T**rade-off.",
            "Remember the golden cross-cultural fix: randomize **both** AI conditions *inside* **both** Tokyo and London (2 × 2 design) with matched-age learners!",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge", ALL level: "HL")
  // =========================================================================
  challenge: [
    {
      id: "8-hl-paper3-data-analysis-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "quantitative-descriptive-visual",
      strategy: "Recover total sum, remove outlier, re-divide by N − 1",
      question:
        "Ten students' daily screen-free focus scores have an arithmetic mean of `44` points. An audit verifies that one extreme score of `125` points was a software logging glitch and removes it. Calculate the **new mean** of the remaining `9` participants.",
      answer: { type: "number", value: 35, display: "35" },
      traps: [
        {
          spec: { type: "number", value: 31.5 },
          feedback: "After removing one participant, divide 315 by the remaining 9 students — not by 10!",
        },
      ],
      solution: [
        "Find the original total sum: `10 × 44 = 440` points.",
        "Subtract the verified glitch outlier: `440 − 125 = 315` points.",
        "Divide by the remaining `9` participants: {{315 / 9 = 35}} points — showing how one outlier inflated the mean by `9` points!",
      ],
      hints: [
        "Multiply the original mean (`44`) by `10` to recover the sum of all ten scores.",
        "Subtract `125` from that sum, then divide by the *remaining* sample size (`9`).",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Rearrange Cohen's d = (M₁ − M₂) / SD_pooled",
      question:
        "In a Motivation trial (`n₁ = 50, n₂ = 50`), Group 1 achieves `M₁ = 76.2`, the pooled standard deviation is `SD_pooled = 14`, and the study reports Cohen's `d = +0.65` (`M₁ > M₂`). Calculate **`M₂`** (give your answer to 1 decimal place).",
      answer: { type: "number", value: 67.1, tolerance: 0.05, display: "67.1" },
      traps: [
        {
          spec: { type: "number", value: 85.3, tolerance: 0.1 },
          feedback: "Check the direction: M₁ > M₂, so subtract 9.1 from 76.2 rather than adding it!",
        },
      ],
      solution: [
        "Rearrange {{d = (M_1 - M_2) / SD_\"pooled\"}} → {{M_1 - M_2 = d * SD_\"pooled\"}}.",
        "Calculate the raw mean gap: `0.65 × 14 = 9.1` points.",
        "Solve for {{M_2}}: {{M_2 = 76.2 - 9.1 = 67.1}}.",
      ],
      hints: [
        "Rearrange `d = (M₁ − M₂) / SD_pooled` to isolate the mean difference `M₁ − M₂`.",
        "Multiply `0.65 × 14 = 9.1`, then subtract `9.1` from `M₁ = 76.2`.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Degrees-of-freedom weighted pooled SD for unequal n",
      question:
        "A cross-cultural Technology study has **unequal** group sizes: Group 1 (`n₁ = 21, M₁ = 78.5, SD₁ = 14`) and Group 2 (`n₂ = 31, M₂ = 70.0, SD₂ = 6`). Using the unequal-`n` pooled SD formula {{SD_\"pooled\" = sqrt(((n_1 - 1)SD_1^2 + (n_2 - 1)SD_2^2)/(n_1 + n_2 - 2))}}, calculate **Cohen's `d`** (give your answer to 2 decimal places).",
      answer: { type: "number", value: 0.85, tolerance: 0.01, display: "0.85" },
      traps: [
        {
          spec: { type: "number", value: 0.79, tolerance: 0.01 },
          feedback: "0.79 uses the unweighted equal-n pooled SD (10.77) — weight each variance by its degrees of freedom (n − 1)!",
        },
      ],
      solution: [
        "Degrees of freedom: `df₁ = 21 − 1 = 20` and `df₂ = 31 − 1 = 30` (total `df = 50`).",
        "Weighted sum of squares: `20 × 14² + 30 × 6² = 20 × 196 + 30 × 36 = 3,920 + 1,080 = 5,000`.",
        "Pooled variance = `5,000 / 50 = 100`, so {{SD_\"pooled\" = sqrt(100) = 10}}.",
        "{{d = (78.5 - 70.0) / 10 = 8.5 / 10 = 0.85}} (large practical effect).",
      ],
      hints: [
        "Compute `df₁ = 20` and `df₂ = 30`, then weight `14² = 196` by `20` and `6² = 36` by `30`.",
        "Divide `3,920 + 1,080 = 5,000` by `50` to obtain pooled variance `100`, giving exact `SD_pooled = 10`.",
        "Divide `78.5 − 70.0 = 8.5` by `10`.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Dismantle triple illusion: tiny r², truncated graph & etic bias",
      marks: 6,
      question:
        "An advocacy report cites an observational dataset (`N = 8,000` adolescents in three Western countries) finding `r = −0.18, p < 0.001` between daily gaming hours and self-reported empathy on a translated English scale, accompanied by a bar chart whose y-axis spans `72–76` out of `100`. Critically evaluate how **statistical, visual, and cultural distortions** combine to overstate harm. [6 marks]",
      modelAnswer:
        "Three compounding distortions inflate a minimal association into apparent crisis. First, statistically, although p < 0.001 looks decisive because of the massive 8,000-person sample, squaring r = −0.18 yields r² = 0.0324 — only 3.24% shared variance, leaving 96.76% of empathy differences driven by other variables. Second, visually, truncating the vertical axis to 72–76 out of 100 magnifies a tiny raw difference into visually towering bars, introducing presentation bias while concealing overlapping individual spread. Third, methodologically and culturally, the observational design cannot prove Causality because reverse directionality (socially isolated teens gaming more) and third variables (family conflict, sleep loss) remain uncontrolled. Moreover, sampling exclusively three Western nations (WEIRD bias) and relying on self-report scales risks social desirability and poor cross-cultural measurement invariance if applied globally. Responsible public communication requires reporting r² = 3.24% alongside zero-baseline charts with dispersion bars rather than alarmist causal rhetoric.",
      markScheme: [
        {
          point: "Calculates exact shared variance r² = 3.24% (leaving 96.76% unexplained) despite p < 0.001 at N = 8,000.",
          keywords: ["3.24", "96.76", "massive", "unexplained"],
        },
        {
          point: "Critiques the truncated y-axis (72–76/100) magnifying a tiny gap as visual presentation Bias.",
          keywords: ["truncated", "magnif", "presentation bias", "zero-baseline"],
        },
        {
          point: "Evaluates Causality: observational design fails to rule out reverse directionality or third variables.",
          keywords: ["reverse", "third variable", "isolated", "uncontrolled"],
        },
        {
          point: "Critiques WEIRD Western sampling bias limiting global transferability/Perspective.",
          keywords: ["weird", "western", "globally", "transferability"],
        },
        {
          point: "Notes Measurement limits of self-report empathy scales (social desirability / invariance).",
          keywords: ["self-report", "social desirability", "invariance"],
        },
        {
          point: "Applies ethical Responsibility to transparent science communication (reporting effect sizes & honest axes).",
          keywords: ["responsible", "transparent", "alarmist", "communication"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies one distortion generically without computing r² or linking multiple Core Concepts." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately critiques the statistical (r²) and visual (truncated axis) flaws with partial causal or cultural analysis." },
        { band: "5–6", marks: [5, 6], descriptor: "Synthesises r² = 3.24%, truncated-axis Bias, Causality limits, WEIRD/Measurement critique, and Responsible communication cohesively." },
      ],
      hints: [
        "Square `−0.18` (`0.0324 = 3.24%`) and contrast it against `p < 0.001` at `N = 8,000`.",
        "Diagnose the `72–76/100` y-axis trap, observational **Causality** limits, **WEIRD** sampling, and **Responsibility** in reporting.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q05",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "qualitative-coding-trustworthiness",
      strategy: "Reconcile quant drop vs biased qual focus group via reflexivity & SDT",
      marks: 6,
      question:
        "**Divergent Mixed-Method Packet:** After a school introduces public AI-graded leaderboards, anonymous quantitative intrinsic-motivation scores drop significantly (`M_pre = 38.0` to `M_post = 32.6, SD = 10.0, p = 0.008, d = −0.54`). Yet in focus groups moderated by the head of year, students state *“We really enjoy the competitive rankings!”* Analyse this contradiction using **reflexivity**, **social desirability**, and **Self-Determination Theory**. [6 marks]",
      modelAnswer:
        "The mixed-method packet reveals a striking divergence: anonymous quantitative tracking captures a statistically significant, medium-sized decline in intrinsic motivation (d = −0.54, p = 0.008, a 5.4-point drop), whereas public verbal reports claim enthusiasm. From a Motivation lens, Self-Determination Theory explains the quantitative drop cleanly: public algorithmic rankings shift perceived locus of causality from internal curiosity to external evaluation, thwarting autonomy and triggering the overjustification crowding-out effect. Why then did the focus groups contradict this decline? Applying personal reflexivity exposes severe power asymmetry: because the head of year moderated the discussions, students experienced acute social desirability pressure to praise a school-endorsed initiative and protect their standing. Applying epistemological reflexivity further reveals that the public group format suppressed candid dissent via peer conformity, whereas the anonymous questionnaire lowered impression management. Consequently, the qualitative source lacks credibility and confirmability; reconciling the contradiction requires independent, non-grading interviewers conducting private one-to-one interviews or anonymous diary entries with member checking.",
      markScheme: [
        {
          point: "Quantifies the Source A drop accurately (5.4-point decline, medium practical effect d = −0.54, p = 0.008).",
          keywords: ["medium", "5.4", "0.54", "decline"],
        },
        {
          point: "Applies Self-Determination Theory / overjustification (extrinsic leaderboards undermining autonomy & intrinsic drive).",
          keywords: ["autonomy", "overjustification", "crowding", "extrinsic"],
        },
        {
          point: "Applies personal reflexivity to the head-of-year authority gap driving social desirability.",
          keywords: ["personal reflexivity", "power asymmetry", "authority", "praise"],
        },
        {
          point: "Applies epistemological reflexivity to how public focus groups vs anonymous questionnaires shape candour/conformity.",
          keywords: ["epistemological reflexivity", "conformity", "anonymous", "impression"],
        },
        {
          point: "Evaluates qualitative trustworthiness impact (compromised credibility and confirmability).",
          keywords: ["credibility", "confirmability", "compromised"],
        },
        {
          point: "Proposes a concrete methodological fix (independent interviewer / private diaries + member checking).",
          keywords: ["independent", "private", "diaries", "member checking"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Notes students may have lied to the teacher without engaging with d = −0.54, SDT, or epistemological reflexivity." },
        { band: "3–4", marks: [3, 4], descriptor: "Connects social desirability and SDT accurately to the contradiction, though one reflexivity layer or trustworthiness link is thin." },
        { band: "5–6", marks: [5, 6], descriptor: "Integrates d = −0.54, SDT autonomy crowding-out, both personal and epistemological reflexivity, trustworthiness criteria, and an independent remedy." },
      ],
      hints: [
        "Explain *psychologically* why leaderboards cut intrinsic motivation (**SDT autonomy / overjustification**, `d = −0.54`).",
        "Explain *methodologically* why the head-of-year focus group produced opposite answers using **both** personal and epistemological reflexivity.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "inferential-pvalues-effect-size",
      strategy: "Expose p-hacking, Bonferroni α = 0.0042 & selective outlier deletion",
      marks: 6,
      question:
        "A commercial brain-training company tests its app across `12` separate cognitive outcomes at `α = 0.05` (`n = 28/group`). Eleven outcomes are non-significant (`p = 0.14` to `0.81`). After excluding `3` low-scoring experimental participants post hoc as 'unfocused', Outcome 12 reaches `p = 0.038` and is published alone as proof of efficacy. Evaluate these practices using **Bias**, **Measurement**, and **Responsibility**. [6 marks]",
      modelAnswer:
        "This commercial white paper exhibits classic p-hacking and researcher degrees of freedom that severely inflate Type I false-positive risk. Running 12 independent tests at an uncorrected 5% threshold creates a high probability of observing at least one spurious p < 0.05 by chance alone; applying a Bonferroni correction demands α_adj = 0.05 / 12 ≈ 0.0042, meaning p = 0.038 is nearly ten times too large to remain statistically significant. Second, selectively publishing only Outcome 12 while hiding eleven null results introduces severe publication and confirmation Bias (cherry-picking). Third, deleting three low-scoring participants post hoc without pre-registered exclusion rules artificially inflates the experimental mean and shrinks SD, distorting Measurement validity and Cohen's d. Fourth, under ethical Responsibility and financial conflict of interest, marketing an unproven cognitive product to families wastes resources and misleads vulnerable learners. Credible evaluation requires preregistered hypotheses, transparent reporting of all 12 outcomes with effect sizes, and independent replication.",
      markScheme: [
        {
          point: "Computes exact Bonferroni threshold α_adj = 0.05 / 12 ≈ 0.0042 and shows p = 0.038 fails significance.",
          keywords: ["bonferroni", "0.0042", "0.004", "chance alone"],
        },
        {
          point: "Diagnoses p-hacking / multiple-comparison inflation of Type I false-positive error.",
          keywords: ["p-hacking", "type i", "false-positive", "spurious"],
        },
        {
          point: "Evaluates Bias: selective reporting / cherry-picking Outcome 12 while hiding 11 null tests.",
          keywords: ["cherry-picking", "selective", "confirmation", "hiding"],
        },
        {
          point: "Evaluates Measurement distortion: post-hoc deletion of 3 low scorers artificially inflates M and shrinks SD without preregistered rules.",
          keywords: ["post hoc", "inflates", "shrinks", "preregistered"],
        },
        {
          point: "Applies ethical Responsibility and conflict of interest (misleading families/learners with unproven commercial claims).",
          keywords: ["conflict of interest", "misleads", "unproven", "commercial"],
        },
        {
          point: "Recommends open-science remedies (preregistration, reporting all 12 outcomes + effect sizes, independent replication).",
          keywords: ["preregistration", "transparent", "replication", "effect sizes"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Notes that hiding results or removing participants is unfair without statistical precision or Bonferroni calculation." },
        { band: "3–4", marks: [3, 4], descriptor: "Identifies p-hacking and selective outlier removal accurately, though misses exact Bonferroni adjustment or Responsibility." },
        { band: "5–6", marks: [5, 6], descriptor: "Integrates exact Bonferroni calculation (0.0042), Type I inflation, cherry-picking Bias, Measurement manipulation, ethical Responsibility, and preregistration remedies." },
      ],
      hints: [
        "Calculate the Bonferroni cutoff `0.05 / 12 ≈ 0.0042` and compare it with `p = 0.038`.",
        "Explain how removing 3 low-scoring experimental participants post hoc alters both `M` and `SD`, then apply **Bias**, **Measurement**, and **Responsibility**.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "paper3-exam-strategy",
      strategy: "Full 3-source HL Paper 3 synthesis across 4 Core Concepts",
      marks: 8,
      question:
        "**Capstone Source Packet — AI Study Companions Across Cultures:**\n- **Source A (Quant, `N = 90` Seoul, `N = 90` Berlin):** Perceived AI emotional warmth (`1–50` scale): Seoul `M = 34.0, Median = 34.5, SD = 12.8`; Berlin `M = 28.0, Median = 27.5, SD = 5.6`, `p < 0.001, d = 0.61`. Passive app logs also scraped students' private nocturnal messages without explicit opt-in.\n- **Source B (Qual, 10 Seoul interviewees):** Eight praised 24/7 academic reassurance (`P1: “It never judges my late-night exam panic”`), whereas two (`P7, P9`) described growing reluctance to speak with real friends (`P9: “I feel guilty telling people my stress when the bot replies faster”`). The analyst excluded `P7` and `P9` from the final report as 'atypical'.\n- **Source C (Method):** English questionnaire translated once without back-translation; recruited via a single elite academy in Seoul and a vocational college in Berlin.\n\nEvaluate this source packet across **Bias**, **Measurement**, **Perspective**, and **Responsibility**. [8 marks]",
      modelAnswer:
        "Source A reports a statistically significant, medium-to-large cultural difference in perceived AI warmth (Seoul M = 34.0 vs Berlin M = 28.0, p < 0.001, d = 0.61), with roughly symmetric distributions in both sites (means closely matching medians). However, evaluating across four Core Concepts exposes major threats to validity and ethics. First, under Bias, Source C's non-equivalent sampling confounds nationality with educational track and socioeconomic status (elite academic academy in Seoul vs vocational college in Berlin), while excluding P7 and P9 from Source B commits confirmation bias by discarding crucial negative-case accounts of social displacement — undermining qualitative credibility and confirmability. Second, under Measurement, Seoul's dispersion (SD = 12.8) is over twice Berlin's (SD = 5.6), showing wide internal heterogeneity likely mirroring the split between reassured learners (P1) and socially withdrawing learners (P9); furthermore, single forward translation without back-translation or piloting risks semantic drift and weak cross-cultural construct validity. Third, under Perspective, P1's quote reflects high-stakes academic pressure and face-saving norms (emic insight), whereas imposing an untranslated Western warmth construct risks etic distortion; triangulating both P1 and P9 shows AI can simultaneously buffer exam anxiety and displace human relatedness (SDT). Fourth, under ethical Responsibility, passively scraping private nocturnal messages from minors/students without explicit opt-in breaches informed consent, right to withdraw, and digital confidentiality — especially ethically hazardous given vulnerable exam-panic disclosures (P1) and emotional dependency risks (P9). Responsible follow-up requires matched school tracks, back-translated scales, transparent negative-case reporting, and strict opt-in privacy safeguards.",
      markScheme: [
        {
          point: "Quotes exact Source A metrics (34.0 vs 28.0, p < 0.001, d = 0.61) and checks symmetry (Mean ≈ Median).",
          keywords: ["0.61", "symmetric", "34.0", "28.0"],
        },
        {
          point: "Evaluates Bias in sampling: elite Seoul academy vs Berlin vocational college confounds culture with SES/track.",
          keywords: ["vocational", "confound", "socioeconomic", "non-equivalent"],
        },
        {
          point: "Evaluates Bias in qualitative coding: deleting P7 & P9 discards negative-case analysis, weakening credibility/confirmability.",
          keywords: ["negative-case", "confirmation bias", "credibility", "displacement"],
        },
        {
          point: "Evaluates Measurement via SD contrast (12.8 vs 5.6) triangulated with P1 vs P9 divergence.",
          keywords: ["12.8", "heterogeneity", "split", "twice"],
        },
        {
          point: "Evaluates Measurement translation flaw: single translation lacking back-translation threatens construct validity.",
          keywords: ["back-translation", "semantic", "construct validity"],
        },
        {
          point: "Applies cultural/theoretical Perspective (emic face-saving/exam pressure in P1 + SDT relatedness/dependency in P9).",
          keywords: ["emic", "face-saving", "relatedness", "etic"],
        },
        {
          point: "Evaluates ethical Responsibility: passive covert message scraping breaches opt-in informed consent, withdrawal, and confidentiality.",
          keywords: ["informed consent", "withdraw", "confidentiality", "scraping"],
        },
        {
          point: "Highlights psychological-harm/dependency Responsibility toward anxious youth (P1/P9) and concrete remedies.",
          keywords: ["dependency", "vulnerable", "matched", "opt-in"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–2", marks: [1, 2], descriptor: "Summarises parts of the packet with generic critiques and minimal concept integration." },
        { band: "3–5", marks: [3, 5], descriptor: "Evaluates two or three Core Concepts using concrete figures/quotes, though triangulation or one concept remains brief." },
        { band: "6–8", marks: [6, 8], descriptor: "Delivers incisive, triangulated evaluation across Bias, Measurement, Perspective, and Responsibility, integrating M/Median/SD/d, P1 & P9 negative-case deletion, translation validity, and digital ethics." },
      ],
      hints: [
        "Triangulate Seoul's large `SD = 12.8` with the qualitative split between `P1` and the deleted negative cases (`P7, P9`).",
        "Check Source C carefully: compare the two school types AND notice the lack of back-translation.",
        "Dedicate crisp, source-cited analysis to ALL four named Core Concepts: **Bias, Measurement, Perspective, Responsibility**.",
      ],
    },
    {
      id: "8-hl-paper3-data-analysis-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      guideRef: "paper3-exam-strategy",
      strategy: "Full Q4 Capstone: Longitudinal RCT + Explanatory Qual + Ethics + Trade-off",
      marks: 9,
      question:
        "**Capstone HL Paper 3 Q4 Proposal:** Design and justify an **explanatory sequential mixed-method follow-up study** testing whether **autonomy-supportive** vs **gamified-streak** AI study coaches sustain long-term intrinsic motivation (**Change**) across two contrasting cultural contexts (e.g., Singapore and Finland). Address: (1) sampling & power, (2) randomized experimental operationalization & controls, (3) statistical analysis plan (`d`, skew, multiple testing), (4) qualitative reflexivity & trustworthiness, (5) ethical **Responsibility**, and (6) realistic methodological **trade-offs**. [9 marks]",
      modelAnswer:
        "To resolve cross-cultural confounding and short-term novelty bias, I propose a 10-week explanatory sequential mixed-method study combining a 2 × 2 longitudinal randomized controlled trial (Phase 1) with purposive reflexive interviews (Phase 2). First, for sampling and power, conduct an a priori power analysis (targeting 80% power to detect a medium effect d = 0.50 at α = 0.05) and recruit N = 160 matched Year 12 students aged 16–17 via stratified random sampling across public secondary schools in Singapore (n = 80) and Finland (n = 80), balancing gender and baseline GPA to eliminate WEIRD and school-track confounds. Second, within each country randomly allocate students (40 per cell) to either an Autonomy-Supportive AI Coach (goal choice + mastery feedback) or a Gamified-Streak AI Coach (public leaderboards + daily XP flames) using identical visual interfaces (single-blind active control reducing expectancy bias). Operationalize intrinsic motivation via a back-translated, culturally validated Intrinsic Motivation Inventory and unrewarded voluntary practice persistence measured at Baseline, Week 4, and Week 10 (two weeks after rewards end to test overjustification crowding-out and genuine Change). Third, pre-register the statistical plan: inspect skewness and ±1 SD overlap first (using median/IQR or non-parametric tests if outliers appear), compute Cohen's d alongside p-values to distinguish practical from statistical significance, and apply Bonferroni adjustment across multiple time-point contrasts to curb Type I error. Fourth, in Phase 2, purposively sample 20 students (including high, low, and negative-case responders explaining any large SD) for one-to-one semi-structured interviews led by culturally matched independent researchers (personal reflexivity) in private rooms rather than public peer focus groups (epistemological reflexivity). Analyse transcripts inductively to capture emic cultural meanings, verifying credibility via member checking, dependability via a time-stamped audit trail, transferability via thick description, and confirmability via reflexive journals and dual coding. Fifth, uphold ethical Responsibility via institutional review, parental consent plus student assent, opt-in encrypted anonymized telemetry (zero covert chat scraping), right to withdraw without academic penalty, and post-study access to the optimal AI version for all participants. Finally, evaluate two realistic trade-offs: a 10-week longitudinal RCT improves Causality and captures true Change, yet faces participant attrition (mitigated via intention-to-treat analysis), while standardized coach scripts enhance internal validity at some cost to naturalistic classroom spontaneity.",
      markScheme: [
        {
          point: "Frames an explanatory sequential 2 × 2 longitudinal mixed-method design linking Phase 1 quant and Phase 2 qual.",
          keywords: ["sequential", "2 × 2", "2x2", "phase 1", "phase 2"],
        },
        {
          point: "Specifies a priori power analysis & matched stratified sampling across both cultural sites (eliminating track/age bias).",
          keywords: ["power analysis", "stratified", "matched", "160"],
        },
        {
          point: "Operationalizes within-culture random allocation + single-blind active control interface (protecting Causality).",
          keywords: ["randomly allocate", "single-blind", "active control", "expectancy"],
        },
        {
          point: "Operationalizes back-translated DV + unrewarded post-removal Week 10 follow-up (Measurement & Change / overjustification).",
          keywords: ["back-translated", "unrewarded", "overjustification", "week 10"],
        },
        {
          point: "Specifies preregistered statistical safeguards: skew/IQR check, Cohen's d vs p, and Bonferroni Type I control.",
          keywords: ["preregister", "pre-register", "bonferroni", "cohen's d", "skew"],
        },
        {
          point: "Integrates Phase 2 purposive sampling (including negative cases) with personal & epistemological reflexivity.",
          keywords: ["negative-case", "personal reflexivity", "epistemological reflexivity", "independent"],
        },
        {
          point: "Embeds all 4 qualitative trustworthiness pillars (inductive emic coding, member checking, audit trail, thick description, reflexive journal).",
          keywords: ["member checking", "audit trail", "thick description", "inductive"],
        },
        {
          point: "Details concrete minor ethical Responsibility (parental consent + assent, encrypted opt-in data, withdrawal, post-trial equity).",
          keywords: ["parental consent", "assent", "encrypted", "withdraw"],
        },
        {
          point: "Evaluates realistic methodological trade-offs (10-week attrition + intention-to-treat; internal vs ecological validity).",
          keywords: ["attrition", "intention-to-treat", "spontaneity", "trade-off"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described below." },
        { band: "1–3", marks: [1, 3], descriptor: "Outlines a basic follow-up study with limited operationalization, weak cross-cultural control, or minimal statistical/qualitative rigour." },
        { band: "4–6", marks: [4, 6], descriptor: "Designs a clear mixed-method cross-cultural study with randomization and ethics, though lacks preregistered statistical controls, full reflexivity/trustworthiness, or trade-offs." },
        { band: "7–9", marks: [7, 9], descriptor: "Delivers an exemplary, exam-ready Paper 3 Q4 proposal integrating a priori power, 2 × 2 longitudinal randomization, back-translated blind Measurement, Bonferroni/d stats, full Lincoln & Guba trustworthiness + reflexivity, minor Responsibility, and explicit trade-offs." },
      ],
      hints: [
        "Walk systematically through all 6 prompt pillars — treat it like a mini-blueprint with exact numbers (`N`, weeks, random allocation per site).",
        "Include an **unrewarded post-removal** check (testing overjustification **Change**), **preregistration + Bonferroni + Cohen's `d`**, and **both** personal and epistemological reflexivity in Phase 2.",
        "End with an honest **trade-off** (e.g., longitudinal attrition + intention-to-treat analysis).",
      ],
    },
  ],
};
