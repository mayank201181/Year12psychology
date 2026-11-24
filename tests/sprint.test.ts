import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["Which FA2027 Core Concept addresses WEIRD sampling error?", "bias"],
    ["Which FA2027 Core Concept examines informed consent and debriefing?", "responsibility"],
    ["Neurotransmitter system targeted by SSRIs?", "serotonin"],
    ["Research lens studying behaviour from inside a culture?", "emic"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Psychology drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.mean`,
    topicId,
    title: "Fake mean drill",
    level: 1,
    generate(rng) {
      const m = rng.int(10, 20);
      return {
        prompt: `Mean recall score of three participants scoring ${m - 2}, ${m}, and ${m + 2}?`,
        answer: { type: "number", value: m, tolerance: 0 },
        solution: [`Mean = (${m - 2} + ${m} + ${m + 2}) / 3 = ${m}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are FA2027 Psychology strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["core", "contexts1", "contexts2", "hl", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper1"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tCore = firstTopic("Concepts & Core Foundations");
  const tC1 = firstTopic("Contexts I: Health & Development");
  const drills = [
    bankDrill(tCore, 1, "sl", "SL"),
    bankDrill(tCore, 2, "hl", "HL"),
    bankDrill(tCore, 3, "hard", "SL"),
    bankDrill(tC1, 2, "b", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("core", drills, "HL").map((d) => d.id), [`${tCore}.sl`, `${tCore}.hl`]);
  assert.deepEqual(sprintPool("core", drills, "SL").map((d) => d.id), [`${tCore}.sl`]);
  assert.deepEqual(sprintPool("contexts1", drills, "HL").map((d) => d.id), [`${tC1}.b`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tCore}.sl`, `${tC1}.b`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tCore = firstTopic("Concepts & Core Foundations");
  const pool = [numberDrill(tCore), bankDrill(tCore, 2)];
  const rng = makeRng(42);
  const seen = new Set<string>();
  for (let i = 0; i < 20; i++) {
    const it = sprintItem(pool, rng, seen);
    assert.ok(it);
    seen.add(it.key);
    assert.ok(it.prompt.length > 0);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const tCore = firstTopic("Concepts & Core Foundations");
  const broken: Drill = {
    id: `${tCore}.broken`,
    topicId: tCore,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  const it = sprintItem([broken, numberDrill(tCore)], makeRng(7));
  assert.ok(it && it.drillId === `${tCore}.mean`);
  assert.equal(sprintItem([broken], makeRng(7)), null);
});
