// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Psychology (FA2027) recall across
// Concepts & Core Approaches, Contexts I–II, and HL Extensions / Paper 3 stats.
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "core" | "contexts1" | "contexts2" | "hl" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["core", "contexts1", "contexts2", "hl", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  core: "Concepts & Core Foundations",
  contexts1: "Contexts I: Health & Development",
  contexts2: "Contexts II: Relationships & Learning",
  hl: "HL Extensions & Paper 3",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  core: {
    label: "Concepts & Approaches",
    icon: "🧭",
    description: "The 6 FA2027 Concepts, Class Practical designs, brain/neurotransmitters, memory & SIT.",
    example: "Which Concept covers WEIRD sampling? · Agonist vs antagonist at synapse",
  },
  contexts1: {
    label: "Health & Development",
    icon: "🌱",
    description: "Diagnostic validity/reliability, CBT vs SSRI, attachment styles & longitudinal vs cross-sectional.",
    example: "Cohort effect design flaw · Ainsworth attachment type from behaviour cue",
  },
  contexts2: {
    label: "Relationships & Learning",
    icon: "🤝",
    description: "Bystander mechanisms, Gottman patterns, classical/operant variables (UCS/CS/VR) & cognitive load.",
    example: "Identify the CS in Pavlovian conditioning · Reinforcement schedule type",
  },
  hl: {
    label: "HL Extensions & Paper 3",
    icon: "📈",
    description: "Emic vs etic, Self-Determination Theory, mean/median/SD, p-values, r & reflexivity [HL].",
    example: "Mean vs median with outliers · Does p = 0.03 reject H₀ at α = 0.05?",
  },
  mixed: {
    label: "Full IB Psychology Mixed",
    icon: "🎲",
    description: "All 4 FA2027 strands interleaved — rapid concept, method & data fluency in 60 seconds.",
    example: "6 Concepts, conditioning, approaches, designs & Paper 3 stats in 60s",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  return {
    core: sprintPool("core", drills, ibLevel).length,
    contexts1: sprintPool("contexts1", drills, ibLevel).length,
    contexts2: sprintPool("contexts2", drills, ibLevel).length,
    hl: sprintPool("hl", drills, ibLevel).length,
    mixed: sprintPool("mixed", drills, ibLevel).length,
  };
}

/**
 * Draw one quick-fire item from a pool (typically sprintPool(mode, ALL_DRILLS)).
 * Avoids repeating prompts already seen in `avoid` when the pool can offer something else.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng, avoid: ReadonlySet<string> = new Set()): SprintItem | null {
  if (!pool.length) return null;
  let fallback: SprintItem | null = null;
  const tries = Math.min(18, Math.max(8, pool.length * 3));
  for (let i = 0; i < tries; i++) {
    const drill = rng.pick(pool);
    try {
      const gen = drill.generate(rng, SPRINT_TIER);
      const key = `${drill.id}::${gen.prompt}`;
      const item: SprintItem = {
        key,
        prompt: gen.prompt,
        answer: gen.answer,
        answerText: displayAnswer(gen.answer),
        traps: gen.traps,
        diagram: gen.diagram,
        drillId: drill.id,
        topicId: drill.topicId,
      };
      if (!avoid.has(key)) return item;
      fallback ??= item;
    } catch {
      /* skip a broken generator rather than crashing the sprint */
    }
  }
  return fallback;
}
