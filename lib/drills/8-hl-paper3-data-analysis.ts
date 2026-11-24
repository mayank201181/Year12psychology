// ---------------------------------------------------------------------------
// Topic 8 (HL Only): Procedural skill drills for HL Paper 3 Data Analysis (FA2027).
// 4 HL drills covering all 4 guide sections · tiers 1–3 · Sprint-ready (levels 1–2).
// ---------------------------------------------------------------------------
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const QUANT_CONTEXTS = [
  { topic: "AI study-tutor usage", unit: "minutes", groupA: "Autonomy-Choice", groupB: "Directive-Prompt" },
  { topic: "daily smartphone-free revision", unit: "minutes", groupA: "Phone-Away", groupB: "Phone-on-Desk" },
  { topic: "intrinsic motivation", unit: "points", groupA: "Personal-Goal", groupB: "Leaderboard" },
  { topic: "collaborative problem-solving", unit: "points", groupA: "Group-Chat AI", groupB: "Solo AI" },
  { topic: "vocabulary retention", unit: "words", groupA: "Spaced App", groupB: "Cramming App" },
  { topic: "evening notification checking", unit: "alerts", groupA: "Muted-Mode", groupB: "Standard-Mode" },
  { topic: "cross-cultural empathy", unit: "points", groupA: "Singapore Cohort", groupB: "Finland Cohort" },
  { topic: "digital-wellbeing", unit: "points", groupA: "Detox Group", groupB: "Control Group" },
  { topic: "sustained focus-span", unit: "minutes", groupA: "Single-Task", groupB: "Multitasking" },
  { topic: "bicultural self-efficacy", unit: "points", groupA: "Emic-Adapted", groupB: "Standard-Scale" },
] as const;

const CORR_PAIRS = [
  { x: "late-night short-video scrolling", y: "morning working-memory span" },
  { x: "perceived classroom autonomy", y: "intrinsic study engagement" },
  { x: "media-multitasking frequency", y: "reading comprehension score" },
  { x: "daily gamified streak pressure", y: "self-reported study anxiety" },
  { x: "cultural uncertainty avoidance", y: "AI health-chatbot trust" },
  { x: "peer-group collaboration frequency", y: "long-term revision persistence" },
  { x: "smartphone notification interruptions", y: "sustained attention score" },
  { x: "teacher autonomy support", y: "voluntary practice hours" },
  { x: "passive social-comparison scrolling", y: "adolescent mood score" },
  { x: "cognitive offloading reliance", y: "unaided factual recall" },
] as const;

const QUAL_SETTINGS = [
  "Singapore IB students using an AI essay-feedback bot",
  "Tokyo teenagers navigating gamified vocabulary streaks",
  "bilingual gamers in Seoul discussing guild rank pressure",
  "London Year 12 students trialling a weekend digital detox",
  "rural Indonesian adolescents using an English-language study app",
  "Finnish secondary students reflecting on autonomy-supportive software",
  "remote-work engineers in Berlin using algorithmic productivity trackers",
  "international boarding students managing cross-border social media",
  "Korean high-schoolers describing late-night AI study companions",
  "Brazilian teenagers sharing experiences of social-media beauty filters",
  "bicultural university freshmen navigating online seminar participation",
  "multilingual learners evaluating voice-assisted AI translation tools",
] as const;

// ---------------------------------------------------------------------------
// DRILL 1: Descriptive Statistics, IQR & Outlier Sensitivity [HL]
// ---------------------------------------------------------------------------
function genDescriptive(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const ctx = rng.pick(QUANT_CONTEXTS);

  if (tier === 1) {
    const mode = rng.pick(["mean", "median", "range", "skew-choice"] as const);
    if (mode === "mean") {
      const m = rng.int(14, 48);
      const d1 = rng.int(1, 6);
      const d2 = rng.int(2, 8);
      const vals = [m - d2, m - d1, m, m + d1, m + d2];
      const shown = rng.shuffle(vals);
      const sum = vals.reduce((a, b) => a + b, 0);
      return {
        prompt: `Five participants in a **${ctx.topic}** study record these scores (${ctx.unit}): \`${shown.join(", ")}\`. Calculate the **arithmetic mean**.`,
        answer: { type: "number", value: m, display: num(m) },
        solution: [
          `Sum all 5 scores: \`${shown.join(" + ")} = ${sum}\`.`,
          `Divide by {{N = 5}}: {{M = ${sum} / 5 = ${m}}} ${ctx.unit}.`,
        ],
        hint: "Add all five scores together and divide by 5.",
      };
    }
    if (mode === "median") {
      const base = rng.int(10, 35);
      const s1 = base;
      const s2 = base + rng.int(2, 5);
      const s3 = s2 + rng.int(1, 5);
      const s4 = s3 + rng.int(2, 5);
      const s5 = s4 + rng.int(2, 5);
      const s6 = s5 + rng.int(2, 5);
      const outlier = s6 + rng.int(40, 95);
      const vals = [s1, s2, s3, s4, s5, s6, outlier];
      const meanVal = roundTo(vals.reduce((a, b) => a + b, 0) / 7, 1);
      return {
        prompt: `Seven ordered **${ctx.topic}** scores (${ctx.unit}) contain an extreme high outlier: \`${vals.join(", ")}\`. Calculate the **median**.`,
        answer: { type: "number", value: s4, display: num(s4) },
        traps: [
          {
            spec: { type: "number", value: meanVal, tolerance: 0.2 },
            feedback: "That is the mean (dragged up by the extreme outlier) — find the middle ordered value instead.",
          },
        ],
        solution: [
          "The 7 values are already sorted in ascending order.",
          `The middle position is {{(7 + 1)/2 = 4}}th score, which is **${s4}** ${ctx.unit}.`,
        ],
        hint: "For 7 ordered scores, select the 4th value.",
      };
    }
    if (mode === "range") {
      const lo = rng.int(12, 42);
      const span = rng.int(15, 78);
      const hi = lo + span;
      const mid1 = lo + rng.int(3, Math.max(4, Math.floor(span * 0.35)));
      const mid2 = lo + rng.int(Math.floor(span * 0.4), Math.max(Math.floor(span * 0.4) + 1, Math.floor(span * 0.65)));
      const mid3 = lo + rng.int(Math.floor(span * 0.68), Math.max(Math.floor(span * 0.68) + 1, span - 2));
      const shown = rng.shuffle([lo, mid1, mid2, mid3, hi]);
      return {
        prompt: `A Paper 3 pilot records these **${ctx.topic}** values (${ctx.unit}): \`${shown.join(", ")}\`. Calculate the **range**.`,
        answer: { type: "number", value: span, display: num(span) },
        solution: [
          `Identify maximum (\`${hi}\`) and minimum (\`${lo}\`).`,
          `{{Range = ${hi} - ${lo} = ${span}}} ${ctx.unit}.`,
        ],
        hint: "Subtract the smallest value from the largest value.",
      };
    }
    // skew-choice
    const posSkew = rng.bool();
    const med = rng.int(18, 52);
    const gap = rng.int(8, 26);
    const mean = posSkew ? med + gap : med - gap;
    const n = rng.pick([45, 60, 75, 90, 120]);
    return {
      prompt: `A **${ctx.topic}** source table (\`N = ${n}\`) reports \`Mean = ${mean}\` and \`Median = ${med}\` ${ctx.unit}. Is the distribution **positive** or **negative** skew? (Type one word.)`,
      answer: {
        type: "text",
        accept: posSkew ? ["positive", "positive skew", "positively skewed", "right"] : ["negative", "negative skew", "negatively skewed", "left"],
        display: posSkew ? "Positive" : "Negative",
      },
      solution: [
        `Compare Mean (\`${mean}\`) with Median (\`${med}\`).`,
        posSkew
          ? `Because \`Mean > Median\`, high outliers pull the right tail outward → **positive** skew.`
          : `Because \`Mean < Median\`, low scores pull the left tail downward → **negative** skew.`,
      ],
      hint: "Compare whether the mean is pulled above the median (right tail) or below the median (left tail).",
    };
  }

  if (tier === 2) {
    const mode = rng.pick(["iqr7", "unsorted-med8", "pct-change"] as const);
    if (mode === "iqr7") {
      const a = rng.int(10, 30);
      const q1 = a + rng.int(2, 6);
      const b = q1 + rng.int(2, 5);
      const med = b + rng.int(2, 6);
      const c = med + rng.int(2, 5);
      const q3 = c + rng.int(2, 6);
      const out = q3 + rng.int(25, 70);
      const vals = [a, q1, b, med, c, q3, out];
      const iqr = q3 - q1;
      return {
        prompt: `Seven ordered **${ctx.topic}** scores (${ctx.unit}) are \`${vals.join(", ")}\`. Calculate the **interquartile range (IQR)**.`,
        answer: { type: "number", value: iqr, display: num(iqr) },
        traps: [
          {
            spec: { type: "number", value: out - a },
            feedback: `That is the full range (${out} − ${a}) — IQR uses Q₃ − Q₁ to resist the outlier ${out}.`,
          },
        ],
        solution: [
          `Exclude the median (\`${med}\`) to get lower half \`${a}, ${q1}, ${b}\` ({{Q_1 = ${q1}}}) and upper half \`${c}, ${q3}, ${out}\` ({{Q_3 = ${q3}}}).`,
          `{{IQR = Q_3 - Q_1 = ${q3} - ${q1} = ${iqr}}} ${ctx.unit}.`,
        ],
        hint: "Find the median of the lower three scores (`Q₁`) and upper three scores (`Q₃`), then compute `Q₃ − Q₁`.",
      };
    }
    if (mode === "unsorted-med8") {
      const base = rng.int(12, 34);
      const v1 = base;
      const v2 = v1 + rng.int(2, 5);
      const v3 = v2 + rng.int(1, 4);
      const v4 = v3 + rng.int(2, 5);
      const v5 = v4 + rng.pick([2, 4, 6]);
      const v6 = v5 + rng.int(2, 5);
      const v7 = v6 + rng.int(2, 6);
      const v8 = v7 + rng.int(20, 60);
      const sorted = [v1, v2, v3, v4, v5, v6, v7, v8];
      const shown = rng.shuffle(sorted);
      const med = clean((v4 + v5) / 2);
      return {
        prompt: `Eight unsorted **${ctx.topic}** scores (${ctx.unit}) are \`${shown.join(", ")}\`. Calculate the **median**.`,
        answer: { type: "number", value: med, display: num(med) },
        solution: [
          `Sort all 8 scores: \`${sorted.join(", ")}\`.`,
          `Average the 4th (\`${v4}\`) and 5th (\`${v5}\`) values: {{(${v4} + ${v5})/2 = ${med}}} ${ctx.unit}.`,
        ],
        hint: "Sort all 8 numbers from smallest to largest, then average the 4th and 5th scores.",
      };
    }
    // pct-change: use clean non-100 baselines with exact integer delta
    const pctPairs: ReadonlyArray<readonly [number, number]> = [
      [20, 15], [20, 25], [20, 35], [20, 45],
      [25, 12], [25, 20], [25, 28], [25, 36], [25, 40],
      [40, 15], [40, 25], [40, 30], [40, 35], [40, 45],
      [50, 12], [50, 16], [50, 24], [50, 28], [50, 34], [50, 42],
      [80, 15], [80, 20], [80, 25], [80, 35],
      [120, 15], [120, 25], [120, 30], [120, 40],
      [200, 12], [200, 18], [200, 22], [200, 28], [200, 35],
    ];
    const [base, pct] = rng.pick(pctPairs);
    const dir = rng.bool() ? 1 : -1;
    const delta = clean((base * pct) / 100);
    const neu = base + dir * delta;
    const word = dir > 0 ? "increase" : "decrease";
    const verb = dir > 0 ? "rises" : "falls";
    return {
      prompt: `Following a **${ctx.topic}** intervention, the cohort mean ${verb} from \`${base}\` to \`${neu}\` ${ctx.unit}. Calculate the **percentage ${word}** (give a positive percentage).`,
      answer: { type: "number", value: pct, display: `${pct}%` },
      traps: delta !== pct
        ? [
            {
              spec: { type: "number", value: delta },
              feedback: `${delta} is the raw change — divide by the starting baseline (${base}) and multiply by 100.`,
            },
          ]
        : undefined,
      solution: [
        `Raw change = \`|${neu} − ${base}| = ${delta}\` ${ctx.unit}.`,
        `Percentage ${word} = {{(${delta} / ${base}) * 100 = ${pct}%}}.`,
      ],
      hint: `Divide the raw change by the original baseline (\`${base}\`), then multiply by 100.`,
    };
  }

  // Tier 3: Outlier removal impact on mean OR unsorted 8-score IQR
  if (rng.bool(0.6)) {
    const remN = rng.pick([6, 8, 9, 10, 12]);
    const totalN = remN + 1;
    const newMean = rng.int(22, 54);
    const shift = rng.int(4, 12);
    const origMean = newMean + shift;
    const outlier = totalN * origMean - remN * newMean;
    return {
      prompt: `In a **${ctx.topic}** dataset, \`${totalN}\` participants have a mean of \`${origMean}\` ${ctx.unit}. One verified glitch outlier of \`${outlier}\` ${ctx.unit} is removed. Calculate the **new mean** of the remaining \`${remN}\` scores.`,
      answer: { type: "number", value: newMean, display: num(newMean) },
      traps: [
        {
          spec: { type: "number", value: roundTo((totalN * origMean - outlier) / totalN, 2), tolerance: 0.05 },
          feedback: `After removing one participant, divide by the remaining ${remN} scores — not by ${totalN}!`,
        },
      ],
      solution: [
        `Original total sum: \`${totalN} × ${origMean} = ${totalN * origMean}\`.`,
        `Subtract the outlier: \`${totalN * origMean} − ${outlier} = ${remN * newMean}\`.`,
        `Divide by the remaining \`${remN}\` participants: {{${remN * newMean} / ${remN} = ${newMean}}} ${ctx.unit}.`,
      ],
      hint: `Recover the original sum (\`${totalN} × ${origMean}\`), subtract \`${outlier}\`, then divide by \`${remN}\`.`,
    };
  }
  // Unsorted 8-score IQR
  const b = rng.int(10, 26);
  const v1 = b;
  const v2 = v1 + rng.int(2, 5);
  const v3 = v2 + rng.pick([2, 4, 6]);
  const v4 = v3 + rng.int(2, 5);
  const v5 = v4 + rng.int(2, 5);
  const v6 = v5 + rng.int(2, 5);
  const v7 = v6 + rng.pick([2, 4, 6]);
  const v8 = v7 + rng.int(30, 80);
  const sorted = [v1, v2, v3, v4, v5, v6, v7, v8];
  const shown = rng.shuffle(sorted);
  const q1 = clean((v2 + v3) / 2);
  const q3 = clean((v6 + v7) / 2);
  const iqr = clean(q3 - q1);
  return {
    prompt: `Eight unsorted **${ctx.topic}** scores (${ctx.unit}) are \`${shown.join(", ")}\`. Calculate the **interquartile range (IQR)**.`,
    answer: { type: "number", value: iqr, display: num(iqr) },
    solution: [
      `Sort all 8 scores: \`${sorted.join(", ")}\`.`,
      `Lower half \`${v1}, ${v2}, ${v3}, ${v4}\` → {{Q_1 = (${v2} + ${v3})/2 = ${q1}}}; upper half \`${v5}, ${v6}, ${v7}, ${v8}\` → {{Q_3 = (${v6} + ${v7})/2 = ${q3}}}.`,
      `{{IQR = ${q3} - ${q1} = ${iqr}}} ${ctx.unit}.`,
    ],
    hint: "Sort the 8 scores into two halves of 4, find the median of each half (`Q₁`, `Q₃`), and subtract.",
  };
}

// ---------------------------------------------------------------------------
// DRILL 2: p-Value Decisions, Type I/II Errors & r² Variance Explained [HL]
// ---------------------------------------------------------------------------
function genPValueErrorsR2(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const ctx = rng.pick(QUANT_CONTEXTS);
  const pair = rng.pick(CORR_PAIRS);

  if (tier === 1) {
    const mode = rng.pick(["p-decision", "r2-pct", "error-type"] as const);
    if (mode === "p-decision") {
      const alpha = rng.pick([0.05, 0.01]);
      const sig = rng.bool();
      const pVal = alpha === 0.05
        ? sig
          ? roundTo(rng.int(1, 48) / 1000, 3)
          : roundTo(rng.int(52, 240) / 1000, 3)
        : sig
          ? roundTo(rng.int(1, 9) / 1000, 3)
          : roundTo(rng.int(12, 85) / 1000, 3);
      return {
        prompt: `In a **${ctx.topic}** experiment with pre-set \`α = ${alpha.toFixed(2)}\`, an independent t-test yields two-tailed \`p = ${pVal.toFixed(3)}\`. Should the researchers **reject** or **retain** \`H₀\`?`,
        answer: {
          type: "text",
          accept: sig
            ? ["reject", "reject h0", "reject the null hypothesis", "reject null", "significant"]
            : ["retain", "retain h0", "fail to reject", "fail to reject h0", "retain the null hypothesis", "not significant"],
          display: sig ? "Reject" : "Retain",
        },
        solution: [
          `Compare \`p = ${pVal.toFixed(3)}\` with pre-set \`α = ${alpha.toFixed(2)}\`.`,
          sig
            ? `Since {{${pVal.toFixed(3)} < ${alpha.toFixed(2)}}}, the result is statistically significant → **reject {{H_0}}**.`
            : `Since {{${pVal.toFixed(3)} >= ${alpha.toFixed(2)}}}, the result is not significant → **retain (fail to reject) {{H_0}}**.`,
        ],
        hint: `Reject H₀ only when p is strictly smaller than α = ${alpha.toFixed(2)}.`,
      };
    }
    if (mode === "r2-pct") {
      const mag = rng.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const sign = rng.bool() ? 1 : -1;
      const r = roundTo((sign * mag) / 10, 2);
      const rStr = `${sign < 0 ? "−" : "+"}${(mag / 10).toFixed(2)}`;
      const r2Pct = mag * mag;
      return {
        prompt: `A Paper 3 study reports Pearson \`r = ${rStr}\` between **${pair.x}** and **${pair.y}**. What **percentage of variance** (\`r² × 100\`) is shared between the two variables?`,
        answer: { type: "number", value: r2Pct, display: `${r2Pct}%` },
        traps: sign < 0
          ? [{ spec: { type: "number", value: -r2Pct }, feedback: "Squaring a negative r always yields a positive percentage of variance!" }]
          : undefined,
        solution: [
          `Square the correlation: {{(${r})^2 = ${roundTo(r * r, 4)}}}.`,
          `Multiply by 100 → **${r2Pct}%** shared variance.`,
        ],
        hint: "Square the correlation value (making it positive) and multiply by 100.",
      };
    }
    // error-type
    const isType1 = rng.bool();
    const nVal = isType1 ? rng.pick([40, 60, 80, 120]) : rng.pick([10, 12, 14, 16]);
    const pSample = isType1 ? roundTo(rng.int(12, 46) / 1000, 3) : roundTo(rng.int(75, 240) / 1000, 3);
    return {
      prompt: isType1
        ? `In reality, the **${ctx.groupA}** ${ctx.topic} programme has **zero true effect** in the population (\`H₀\` is true), yet a study (\`N = ${nVal}\`) obtains \`p = ${pSample.toFixed(3)}\` and rejects \`H₀\`. Name this error (**Type I** or **Type II**).`
        : `In reality, the **${ctx.groupA}** ${ctx.topic} programme **genuinely works** in the population (\`H₁\` is true), yet a small study (\`n = ${nVal}/group\`) obtains \`p = ${pSample.toFixed(3)}\` and retains \`H₀\`. Name this error (**Type I** or **Type II**).`,
      answer: {
        type: "text",
        accept: isType1 ? ["type i", "type 1", "type i error", "type 1 error", "false positive"] : ["type ii", "type 2", "type ii error", "type 2 error", "false negative"],
        display: isType1 ? "Type I" : "Type II",
      },
      solution: [
        isType1
          ? "Rejecting `H₀` when `H₀` is actually true is a false positive → **Type I error (`α`)**."
          : "Failing to reject `H₀` when a real effect exists (`H₁` is true) is a false negative → **Type II error (`β`)**.",
      ],
      hint: isType1
        ? "A false alarm (claiming a non-existent effect) is which error type?"
        : "Missing a genuine real-world effect (false negative) is which error type?",
    };
  }

  if (tier === 2) {
    const mode = rng.pick(["unexplained-r2", "strict-alpha", "r2-decimal"] as const);
    if (mode === "unexplained-r2") {
      const mag = rng.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const sign = rng.bool() ? 1 : -1;
      const rStr = `${sign < 0 ? "−" : "+"}${(mag / 10).toFixed(2)}`;
      const exp = mag * mag;
      const unexp = 100 - exp;
      return {
        prompt: `A survey links **${pair.x}** and **${pair.y}** at Pearson \`r = ${rStr}\`. What **percentage of variance remains unexplained** by this relationship?`,
        answer: { type: "number", value: unexp, display: `${unexp}%` },
        traps: [
          { spec: { type: "number", value: exp }, feedback: `${exp}% is the EXPLAINED variance (r²) — subtract from 100% for the UNEXPLAINED share!` },
        ],
        solution: [
          `Shared variance: {{r^2 = (${sign < 0 ? "-" : ""}${(mag / 10).toFixed(1)})^2 = ${exp}%}}.`,
          `Unexplained variance: {{100% - ${exp}% = ${unexp}%}}.`,
        ],
        hint: "Compute `r² × 100%` first, then subtract that from `100%`.",
      };
    }
    if (mode === "strict-alpha") {
      // Tricky alpha = 0.01 where p is between 0.011 and 0.048 (looks < 0.05!) OR < 0.01
      const sig = rng.bool(0.4);
      const pVal = sig ? roundTo(rng.int(1, 9) / 1000, 3) : roundTo(rng.int(12, 47) / 1000, 3);
      return {
        prompt: `To guard against false positives in a high-stakes **${ctx.topic}** study, researchers pre-set \`α = 0.01\` and observe \`p = ${pVal.toFixed(3)}\`. Should they **reject** or **retain** \`H₀\`?`,
        answer: {
          type: "text",
          accept: sig
            ? ["reject", "reject h0", "reject the null hypothesis"]
            : ["retain", "retain h0", "fail to reject", "fail to reject h0", "retain the null hypothesis"],
          display: sig ? "Reject" : "Retain",
        },
        solution: [
          `Compare \`p = ${pVal.toFixed(3)}\` strictly against pre-set \`α = 0.01\` (not 0.05!).`,
          sig
            ? `Since {{${pVal.toFixed(3)} < 0.01}}, **reject {{H_0}}**.`
            : `Even though \`${pVal.toFixed(3)} < 0.05\`, it exceeds \`α = 0.01\` → **retain (fail to reject) {{H_0}}**.`,
        ],
        hint: "Use the pre-set `α = 0.01` cutoff, not the default `0.05`.",
      };
    }
    // r2-decimal for .05 steps (0.15..0.95)
    const hundredths = rng.pick([15, 25, 35, 45, 55, 65, 75, 85, 95]);
    const sign = rng.bool() ? 1 : -1;
    const rVal = roundTo((sign * hundredths) / 100, 2);
    const rStr = `${sign < 0 ? "−" : "+"}${(hundredths / 100).toFixed(2)}`;
    const r2Pct = roundTo(rVal * rVal * 100, 2);
    return {
      prompt: `A correlational study finds \`r = ${rStr}\` between **${pair.x}** and **${pair.y}**. Calculate the **percentage of shared variance** (\`r² × 100\`, to 2 decimal places).`,
      answer: { type: "number", value: r2Pct, tolerance: 0.05, display: `${r2Pct}%` },
      solution: [
        `Square \`r\`: {{(${rVal})^2 = ${roundTo(rVal * rVal, 4)}}}.`,
        `Multiply by 100 → **${r2Pct}%**.`,
      ],
      hint: "Square the correlation (always positive) and multiply by 100.",
    };
  }

  // Tier 3: Bonferroni alpha / verdict OR reverse-solve r from r²%
  const mode = rng.pick(["bonf-calc", "bonf-verdict", "reverse-r"] as const);
  if (mode === "bonf-calc") {
    const k = rng.pick([2, 4, 5, 8, 10, 20, 25]);
    const fam = rng.pick([0.05, 0.10]);
    const adj = roundTo(fam / k, 5);
    return {
      prompt: `A **${ctx.topic}** paper runs \`${k}\` separate t-tests on one dataset at a family-wise error rate of \`α = ${fam.toFixed(2)}\`. Calculate the **Bonferroni-adjusted \`α\`** (exact decimal).`,
      answer: { type: "number", value: adj, tolerance: 0.0001, display: num(adj) },
      solution: [
        `Apply Bonferroni correction: {{α_"adj" = ${fam.toFixed(2)} / ${k} = ${adj}}}.`,
      ],
      hint: `Divide family-wise α (${fam.toFixed(2)}) by the number of comparisons (${k}).`,
    };
  }
  if (mode === "bonf-verdict") {
    const k = rng.pick([4, 5, 10]);
    const adj = roundTo(0.05 / k, 4);
    const sig = rng.bool();
    const pVal = sig
      ? roundTo(rng.int(1, Math.max(2, Math.floor(adj * 1000) - 1)) / 1000, 3)
      : roundTo(rng.int(Math.ceil(adj * 1000) + 2, 46) / 1000, 3);
    return {
      prompt: `A **${ctx.topic}** study runs \`${k}\` comparisons (family-wise \`α = 0.05\`) and highlights one test with \`p = ${pVal.toFixed(3)}\`. After **Bonferroni adjustment**, should researchers **reject** or **retain** \`H₀\`?`,
      answer: {
        type: "text",
        accept: sig
          ? ["reject", "reject h0", "reject the null hypothesis"]
          : ["retain", "retain h0", "fail to reject", "fail to reject h0", "retain the null hypothesis"],
        display: sig ? "Reject" : "Retain",
      },
      solution: [
        `Bonferroni cutoff: {{α_"adj" = 0.05 / ${k} = ${adj}}}.`,
        sig
          ? `Because \`p = ${pVal.toFixed(3)} < ${adj}\`, it survives Bonferroni → **reject {{H_0}}**.`
          : `Because \`p = ${pVal.toFixed(3)} >= ${adj}\`, it fails Bonferroni → **retain {{H_0}}** (guards against Type I error).`,
      ],
      hint: `First calculate α_adj = 0.05 / ${k}, then compare p = ${pVal.toFixed(3)} against that stricter cutoff.`,
    };
  }
  // reverse-r
  const mag = rng.pick([2, 3, 4, 5, 6, 7, 8, 9]);
  const pct = mag * mag;
  const neg = rng.bool();
  const ans = roundTo((neg ? -1 : 1) * (mag / 10), 1);
  return {
    prompt: `A Paper 3 footnote notes that **${pair.x}** explains **${pct}%** of the variance in **${pair.y}**, and the scatterplot slopes **${neg ? "downward" : "upward"}** from left to right. Deduce **Pearson \`r\`** (including sign).`,
    answer: { type: "number", value: ans, tolerance: 0.01, display: num(ans) },
    traps: neg
      ? [{ spec: { type: "number", value: -ans, tolerance: 0.01 }, feedback: "The scatterplot slopes DOWNWARD, so Pearson r must be negative!" }]
      : undefined,
    solution: [
      `Convert ${pct}% to decimal: {{r^2 = ${roundTo(pct / 100, 2)}}}, so {{|r| = sqrt(${roundTo(pct / 100, 2)}) = ${(mag / 10).toFixed(1)}}}.`,
      `Because the scatterplot slopes ${neg ? "downward (negative)" : "upward (positive)"}, **r = ${num(ans)}**.`,
    ],
    hint: `Convert ${pct}% to a decimal, take its square root, and match the sign to the stated slope direction.`,
  };
}

// ---------------------------------------------------------------------------
// DRILL 3: Paper 3 Source Tables — Cohen's d & Pooled SD [HL]
// Covers guideRef: "paper3-exam-strategy" (ensuring 0 sections without drill!)
// ---------------------------------------------------------------------------
const EQUAL_N_SD_PAIRS: ReadonlyArray<readonly [number, number]> = [
  [6, 8],
  [7, 17],
  [8, 12],
  [9, 12],
  [10, 14],
  [12, 16],
  [5, 13],
  [6, 10],
  [8, 14],
  [10, 16],
  [12, 18],
  [9, 15],
];

const UNEQUAL_N_EXACT: ReadonlyArray<{ n1: number; n2: number; s1: number; s2: number; sdp: number }> = [
  { n1: 16, n2: 41, s1: 6, s2: 16, sdp: 14 },
  { n1: 16, n2: 41, s1: 14, s2: 8, sdp: 10 },
  { n1: 21, n2: 31, s1: 7, s2: 13, sdp: 11 },
  { n1: 21, n2: 31, s1: 14, s2: 6, sdp: 10 },
  { n1: 21, n2: 56, s1: 13, s2: 7, sdp: 9 },
  { n1: 26, n2: 36, s1: 12, s2: 6, sdp: 9 },
  { n1: 26, n2: 41, s1: 10, s2: 16, sdp: 14 },
  { n1: 26, n2: 56, s1: 8, s2: 16, sdp: 14 },
  { n1: 26, n2: 61, s1: 10, s2: 7, sdp: 8 },
  { n1: 31, n2: 41, s1: 6, s2: 15, sdp: 12 },
  { n1: 31, n2: 46, s1: 7, s2: 13, sdp: 11 },
  { n1: 31, n2: 46, s1: 14, s2: 6, sdp: 10 },
];

function genCohensD(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const ctx = rng.pick(QUANT_CONTEXTS);

  if (tier === 1) {
    if (rng.bool(0.7)) {
      const sd = rng.pick([5, 8, 10, 12, 15, 20]);
      const dOptions = sd === 5
        ? [0.2, 0.4, 0.6, 0.8, 1.0, 1.2]
        : sd === 8
          ? [0.25, 0.5, 0.75, 1.0, 1.25]
          : sd === 10
            ? [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1]
            : sd === 12
              ? [0.25, 0.5, 0.75, 1.0]
              : sd === 15
                ? [0.2, 0.4, 0.6, 0.8, 1.0]
                : [0.15, 0.25, 0.35, 0.45, 0.5, 0.6, 0.75, 0.85, 1.0];
      const d = rng.pick(dOptions);
      const diff = clean(d * sd);
      const m2 = rng.int(35, 68);
      const m1 = clean(m2 + diff);
      const n = rng.pick([25, 30, 40, 50]);
      return {
        prompt: `Paper 3 Source A (**${ctx.topic}**, \`n = ${n}/group\`): **${ctx.groupA}** \`M₁ = ${num(m1)}\`, **${ctx.groupB}** \`M₂ = ${num(m2)}\`, with equal \`SD = ${sd}\` in both groups. Calculate **Cohen's \`d\`**.`,
        answer: { type: "number", value: d, tolerance: 0.01, display: num(d) },
        solution: [
          `Equal SDs give {{SD_"pooled" = ${sd}}}.`,
          `{{d = (${num(m1)} - ${num(m2)}) / ${sd} = ${num(diff)} / ${sd} = ${num(d)}}}.`,
        ],
        hint: `Compute (M₁ − M₂) / SD using SD = ${sd}.`,
      };
    }
    // Practical benchmark classifier in Paper 3 Source A
    const bucket = rng.pick([
      { label: "negligible", accept: ["negligible", "trivial"], min: 4, max: 16, n: rng.pick([2500, 4000, 6000, 8500]) },
      { label: "small", accept: ["small"], min: 20, max: 32, n: rng.pick([180, 240, 320]) },
      { label: "medium", accept: ["medium", "moderate"], min: 48, max: 62, n: rng.pick([60, 80, 100]) },
      { label: "large", accept: ["large", "big"], min: 82, max: 125, n: rng.pick([30, 40, 50]) },
    ] as const);
    const d = roundTo(rng.int(bucket.min, bucket.max) / 100, 2);
    return {
      prompt: `Paper 3 Source A (**${ctx.topic}**, \`N = ${bucket.n}\`) reports \`p = 0.004\` and Cohen's \`d = ${d.toFixed(2)}\`. Classify the practical effect size as **negligible**, **small**, **medium**, or **large**.`,
      answer: { type: "text", accept: [...bucket.accept], display: bucket.label[0].toUpperCase() + bucket.label.slice(1) },
      solution: [
        "Apply Cohen's practical benchmarks: `< 0.20` negligible, `≈ 0.2` small, `≈ 0.5` medium, `≥ 0.8` large.",
        `Here \`d = ${d.toFixed(2)}\` → **${bucket.label}** practical effect (independent of \`p = 0.004\`).`,
      ],
      hint: "Recall Cohen's benchmarks: `< 0.20` negligible, `~0.2` small, `~0.5` medium, `≥ 0.8` large.",
    };
  }

  if (tier === 2) {
    const [sd1, sd2] = rng.pick(EQUAL_N_SD_PAIRS);
    const sdpExact = Math.sqrt((sd1 * sd1 + sd2 * sd2) / 2);
    const sdp = roundTo(sdpExact, 2);
    const n = rng.pick([25, 30, 35, 40, 45, 50]);
    if (rng.bool(0.3)) {
      return {
        prompt: `Paper 3 Source A (**${ctx.topic}**, equal \`n = ${n}/group\`) reports \`SD₁ = ${sd1}\` for **${ctx.groupA}** and \`SD₂ = ${sd2}\` for **${ctx.groupB}**. Calculate **\`SD_pooled\`** (to 2 decimal places).`,
        answer: { type: "number", value: sdp, tolerance: 0.02, display: num(sdp) },
        solution: [
          `Use equal-n pooled SD: {{SD_"pooled" = sqrt((${sd1}^2 + ${sd2}^2) / 2) = sqrt(${(sd1 * sd1 + sd2 * sd2) / 2}) ≈ ${sdp}}}.`,
        ],
        hint: `Square ${sd1} and ${sd2}, average the two squares, then take the square root.`,
      };
    }
    const diff = rng.int(3, 14);
    const m2 = rng.int(36, 70);
    const m1 = m2 + diff;
    const d = roundTo(diff / sdpExact, 2);
    const sumTrap = roundTo(diff / (sd1 + sd2), 2);
    return {
      prompt: `Paper 3 Source A (**${ctx.topic}**, equal \`n = ${n}/group\`): **${ctx.groupA}** \`M₁ = ${m1} (SD₁ = ${sd1})\`, **${ctx.groupB}** \`M₂ = ${m2} (SD₂ = ${sd2})\`. Calculate **Cohen's \`d\`** (to 2 decimal places).`,
      answer: { type: "number", value: d, tolerance: 0.02, display: d.toFixed(2) },
      traps: Math.abs(sumTrap - d) > 0.05
        ? [{ spec: { type: "number", value: sumTrap, tolerance: 0.02 }, feedback: "Don't divide by SD₁ + SD₂ — calculate SD_pooled = √((SD₁² + SD₂²)/2) first!" }]
        : undefined,
      solution: [
        `Equal-n pooled SD: {{SD_"pooled" = sqrt((${sd1}^2 + ${sd2}^2)/2) = sqrt(${(sd1 * sd1 + sd2 * sd2) / 2}) ≈ ${sdp}}}.`,
        `Cohen's {{d = (${m1} - ${m2}) / ${sdp} = ${diff} / ${sdp} ≈ ${d.toFixed(2)}}}.`,
      ],
      hint: `First compute SD_pooled = √((${sd1}² + ${sd2}²)/2), then divide (${m1} − ${m2}) by SD_pooled.`,
    };
  }

  // Tier 3: Unequal-n pooled SD & Cohen's d OR reverse-solving M2 from d
  if (rng.bool(0.55)) {
    const combo = rng.pick(UNEQUAL_N_EXACT);
    const mult = rng.pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 1.0, 1.1]);
    const diff = clean(roundTo(mult * combo.sdp, 1));
    const dExact = roundTo(diff / combo.sdp, 2);
    const m2 = rng.int(38, 68);
    const m1 = clean(m2 + diff);
    const df1 = combo.n1 - 1;
    const df2 = combo.n2 - 1;
    return {
      prompt: `Paper 3 Source A (**${ctx.topic}**, unequal groups): **${ctx.groupA}** \`n₁ = ${combo.n1}, M₁ = ${num(m1)}, SD₁ = ${combo.s1}\`; **${ctx.groupB}** \`n₂ = ${combo.n2}, M₂ = ${num(m2)}, SD₂ = ${combo.s2}\`. Using df-weighted \`SD_pooled\`, calculate **Cohen's \`d\`** (to 2 dp).`,
      answer: { type: "number", value: dExact, tolerance: 0.02, display: dExact.toFixed(2) },
      solution: [
        `Degrees of freedom: \`df₁ = ${df1}\`, \`df₂ = ${df2}\` (total \`df = ${df1 + df2}\`).`,
        `Pooled SD: {{sqrt((${df1} * ${combo.s1}^2 + ${df2} * ${combo.s2}^2) / ${df1 + df2}) = sqrt(${combo.sdp * combo.sdp}) = ${combo.sdp}}}.`,
        `{{d = (${num(m1)} - ${num(m2)}) / ${combo.sdp} = ${num(diff)} / ${combo.sdp} = ${dExact.toFixed(2)}}}.`,
      ],
      hint: `Weight each variance by (n − 1): √((${df1}·${combo.s1}² + ${df2}·${combo.s2}²) / ${df1 + df2}), then divide the mean difference by SD_pooled.`,
    };
  }
  const sdp = rng.pick([8, 10, 12, 14, 15, 16]);
  const d = rng.pick([0.25, 0.4, 0.5, 0.6, 0.65, 0.75, 0.8, 0.9]);
  const gap = clean(roundTo(d * sdp, 2));
  const m2 = rng.int(40, 68);
  const m1 = clean(m2 + gap);
  return {
    prompt: `A Paper 3 **${ctx.topic}** table reports **${ctx.groupA}** \`M₁ = ${num(m1)}\`, \`SD_pooled = ${sdp}\`, and Cohen's \`d = +${num(d)}\` (\`M₁ > M₂\`), with \`M₂\` blurred out. Calculate **\`M₂\`** (exact or to 1 dp).`,
    answer: { type: "number", value: m2, tolerance: 0.05, display: num(m2) },
    traps: [
      { spec: { type: "number", value: clean(m1 + gap), tolerance: 0.1 }, feedback: "Check the sign: M₁ > M₂, so subtract d × SD_pooled from M₁!" },
    ],
    solution: [
      `Rearrange {{d = (M_1 - M_2) / SD_"pooled"}} → {{M_1 - M_2 = ${num(d)} * ${sdp} = ${num(gap)}}}.`,
      `{{M_2 = ${num(m1)} - ${num(gap)} = ${num(m2)}}}.`,
    ],
    hint: `Multiply d (${num(d)}) by SD_pooled (${sdp}) to find the gap, then subtract from M₁.`,
  };
}

// ---------------------------------------------------------------------------
// DRILL 4: Qualitative Trustworthiness, Coding & Reflexivity Matcher [HL]
// ---------------------------------------------------------------------------
function genQualTrustworthiness(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const setting = rng.pick(QUAL_SETTINGS);
  const n = rng.pick([8, 10, 12, 14, 16, 18]);

  if (tier === 1) {
    const items = [
      {
        action: `shares draft theme summaries back with all ${n} participants (**member checking**) to verify the themes reflect their lived experiences`,
        ans: "credibility",
        accept: ["credibility"],
        display: "Credibility",
        why: "Member checking (respondent validation) verifies truth value directly with participants → **Credibility**.",
        hint: "Which trustworthiness pillar parallels quantitative internal validity?",
      },
      {
        action: `publishes rich **thick description** of local cultural norms, school policies, participant demographics, and full verbatim quotes across the ${n} interviews`,
        ans: "transferability",
        accept: ["transferability"],
        display: "Transferability",
        why: "Thick description lets readers judge whether findings fit another cultural/social context → **Transferability**.",
        hint: "Which pillar replaces statistical generalization by letting readers assess contextual fit?",
      },
      {
        action: `maintains a transparent, time-stamped **audit trail** (codebook versions and decision memos) tracking how ${n} transcripts were merged into themes`,
        ans: "dependability",
        accept: ["dependability"],
        display: "Dependability",
        why: "An audit trail makes analytical procedures traceable and consistent over time → **Dependability**.",
        hint: "Which pillar parallels quantitative reliability?",
      },
      {
        action: `uses a **reflexive journal** and an independent second coder to check that themes from the ${n} interviews come from participant data rather than analyst bias`,
        ans: "confirmability",
        accept: ["confirmability"],
        display: "Confirmability",
        why: "Reflexive journaling and researcher triangulation ground findings in participant voice rather than researcher preconceptions → **Confirmability**.",
        hint: "Which pillar parallels quantitative objectivity?",
      },
      {
        action: `explicitly examines how their own cultural outsider status, age, and prior beliefs shaped rapport and coding across the ${n} interviews`,
        ans: "reflexivity",
        accept: ["reflexivity", "personal reflexivity"],
        display: "Reflexivity",
        why: "Critically examining how the researcher's own positionality and assumptions shaped the study is **Reflexivity** (specifically personal reflexivity).",
        hint: "Name the researcher self-examination practice that audits positionality and bias.",
      },
    ] as const;
    const item = rng.pick(items);
    return {
      prompt: `In a qualitative Paper 3 study of **${setting}**, the researcher ${item.action}. State the **single qualitative concept** (one word) primarily demonstrated.`,
      answer: { type: "text", accept: [...item.accept], display: item.display },
      solution: [item.why],
      hint: item.hint,
    };
  }

  if (tier === 2) {
    const items = [
      {
        prompt: `While analysing ${n} interviews with **${setting}**, the researcher derives themes strictly bottom-up from participants' own vocabulary without pre-set theoretical categories. Is this coding **inductive** or **deductive**?`,
        accept: ["inductive", "inductive coding"],
        display: "Inductive",
        why: "Data-driven, bottom-up theme generation from raw participant voice is **inductive** coding.",
        hint: "Contrast bottom-up data-driven coding with top-down theory-driven coding.",
      },
      {
        prompt: `While coding ${n} transcripts from **${setting}**, an analyst sorts every quote strictly into Self-Determination Theory's pre-set boxes (\`Autonomy\`, \`Competence\`, \`Relatedness\`). Is this coding **inductive** or **deductive**?`,
        accept: ["deductive", "deductive coding"],
        display: "Deductive",
        why: "Applying pre-existing theoretical categories top-down onto transcripts is **deductive** coding.",
        hint: "Theory-first, top-down coding has which name?",
      },
      {
        prompt: `In a study of **${setting}** (\`N = ${n}\`), coding a quote strictly at its literal surface words without interpreting hidden cultural norms produces a **semantic** or **latent** theme?`,
        accept: ["semantic", "semantic theme"],
        display: "Semantic",
        why: "Explicit, surface-level coding of what was literally said produces **semantic** themes.",
        hint: "Contrast surface explicit wording with hidden interpretive assumptions.",
      },
      {
        prompt: `In a study of **${setting}** (\`N = ${n}\`), interpreting participants' defensive jokes as unspoken collectivist face-saving pressure uncovers a **semantic** or **latent** theme?`,
        accept: ["latent", "latent theme"],
        display: "Latent",
        why: "Interpreting underlying cultural norms, power relations, or unspoken assumptions beneath literal words uncovers **latent** themes.",
        hint: "Which coding level looks beneath explicit surface statements?",
      },
      {
        prompt: `In a study of **${setting}** (\`N = ${n}\`), two dissenting interviewees contradict the main consensus, and the analyst deliberately incorporates their accounts to counter confirmation bias. Which trustworthiness pillar (**credibility**, **transferability**, or **dependability**) does this negative-case analysis primarily strengthen?`,
        accept: ["credibility"],
        display: "Credibility",
        why: "Negative-case analysis prevents cherry-picking and strengthens truth value (**credibility**, alongside confirmability).",
        hint: "Keeping disconfirming accounts makes the portrait of participants' lived reality more truthful.",
      },
      {
        prompt: `In a study of **${setting}**, pairing app-telemetry logs with ${n} semi-structured interviews to cross-check convergence and divergence is methodological triangulation. Which trustworthiness pillar (**credibility**, **transferability**, or **dependability**) does it primarily strengthen?`,
        accept: ["credibility"],
        display: "Credibility",
        why: "Methodological triangulation cross-checks data across methods to verify accuracy → **Credibility**.",
        hint: "Cross-checking findings via multiple methods strengthens truth value (the qualitative parallel to internal validity).",
      },
    ] as const;
    const item = rng.pick(items);
    return {
      prompt: item.prompt,
      answer: { type: "text", accept: [...item.accept], display: item.display },
      solution: [item.why],
      hint: item.hint,
    };
  }

  // Tier 3: Personal vs Epistemological reflexivity, Quantification bias, and trustworthiness flaw diagnosis
  const roles = ["a school principal", "a grading teacher", "a tech-company manager", "a cultural outsider psychologist"] as const;
  const role = rng.pick(roles);
  const kCount = rng.int(3, Math.min(7, n - 2));
  const pct = roundTo((kCount / n) * 100, 0);
  const items = [
    {
      prompt: `In a Paper 3 study of **${setting}** (\`N = ${n}\`), **${role}** conducts the interviews personally, raising power-asymmetry and social-desirability concerns. Does examining *who* conducted the interviews illustrate **personal** or **epistemological** reflexivity?`,
      accept: ["personal", "personal reflexivity"],
      display: "Personal",
      why: "Auditing how the researcher's own identity, authority, and values shaped disclosures is **personal** reflexivity.",
      hint: "Separate the researcher's own identity/status from the structural choice of method.",
    },
    {
      prompt: `In a Paper 3 study of **${setting}** (\`N = ${n}\`), researchers question whether using public peer focus groups (instead of anonymous diaries) itself silenced honest answers. Does questioning how the method constructed knowledge illustrate **personal** or **epistemological** reflexivity?`,
      accept: ["epistemological", "epistemological reflexivity"],
      display: "Epistemological",
      why: "Interrogating how the chosen research design, questions, and methodological assumptions shaped what could be found is **epistemological** reflexivity.",
      hint: "Which reflexivity type critiques how the research *method itself* frames knowledge?",
    },
    {
      prompt: `A commentator reads a purposive qualitative source on **${setting}** (\`N = ${n}\`) and writes: *"${kCount} of ${n} interviewees felt stressed, proving ${pct}% of all global users experience burnout."* Name the **two-word bias** committed.`,
      accept: ["quantification bias"],
      display: "Quantification bias",
      why: `Turning a tiny purposive count (${kCount}/${n}) into a population percentage (${pct}%) is **quantification bias**.`,
      hint: "What two-word bias turns small qualitative counts into representative quantitative percentages?",
    },
    {
      prompt: `A qualitative study of **${setting}** (\`N = ${n}\`) gives zero detail about school culture, participant ages, or local technology access, leaving readers unable to judge whether themes apply elsewhere. Which **single trustworthiness criterion** is most directly weakened?`,
      accept: ["transferability"],
      display: "Transferability",
      why: "Without thick contextual description, readers cannot evaluate fit to other contexts → weak **Transferability**.",
      hint: "Which pillar depends on thick description so readers can judge contextual fit?",
    },
    {
      prompt: `In a study of **${setting}** (\`N = ${n}\`), a lone analyst keeps no codebook, no decision log, and no record of how early codes were merged into final themes. Which **single trustworthiness criterion** is most directly weakened?`,
      accept: ["dependability"],
      display: "Dependability",
      why: "Omitting an audit trail makes analytical procedures untraceable → weak **Dependability**.",
      hint: "Which pillar requires an audit trail to make coding steps traceable?",
    },
    {
      prompt: `In a study of **${setting}** (\`N = ${n}\`), an analyst with strong prior opposition to AI deletes dissenting quotes and keeps no reflexive journal, letting personal preconceptions steer the themes. Which **single trustworthiness criterion** (paralleling objectivity) is most directly weakened?`,
      accept: ["confirmability"],
      display: "Confirmability",
      why: "Allowing researcher preconceptions to override participant data without reflexivity or bracketing directly compromises **Confirmability**.",
      hint: "Which of the four trustworthiness pillars parallels quantitative objectivity?",
    },
  ] as const;
  const item = rng.pick(items);
  return {
    prompt: item.prompt,
    answer: { type: "text", accept: [...item.accept], display: item.display },
    solution: [item.why],
    hint: item.hint,
  };
}

export const drills: Drill[] = [
  {
    id: "8-hl-paper3-data-analysis.descriptive-outlier",
    topicId: "8-hl-paper3-data-analysis",
    title: "Mean, Median, Range, IQR & Outlier Sensitivity [HL]",
    level: 1,
    ibLevel: "HL",
    guideRef: "quantitative-descriptive-visual",
    generate: genDescriptive,
  },
  {
    id: "8-hl-paper3-data-analysis.pvalue-errors-r2",
    topicId: "8-hl-paper3-data-analysis",
    title: "p-Value Decisions, Type I/II Errors & r² Variance [HL]",
    level: 1,
    ibLevel: "HL",
    guideRef: "inferential-pvalues-effect-size",
    generate: genPValueErrorsR2,
  },
  {
    id: "8-hl-paper3-data-analysis.cohens-d-effect-size",
    topicId: "8-hl-paper3-data-analysis",
    title: "Paper 3 Source Tables: Cohen's d & Pooled SD [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "paper3-exam-strategy",
    generate: genCohensD,
  },
  {
    id: "8-hl-paper3-data-analysis.qualitative-trustworthiness",
    topicId: "8-hl-paper3-data-analysis",
    title: "Qualitative Trustworthiness, Coding & Reflexivity [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "qualitative-coding-trustworthiness",
    generate: genQualTrustworthiness,
  },
];
