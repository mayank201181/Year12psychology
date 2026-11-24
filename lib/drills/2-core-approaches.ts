import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num } from "./helpers.ts";

const NAMES = [
  "Aisha", "Ben", "Chloe", "Dev", "Elena", "Farid", "Grace", "Hana",
  "Ivan", "Jiya", "Kenji", "Liam", "Mei", "Noah", "Priya", "Rafi",
  "Sora", "Tessa", "Uma", "Vikram", "Wei", "Yara", "Zain", "Nadia",
];

// ============================================================================
// DRILL 1: Biological Approach — Synapse, Brain Regions & Twin Genetics
// ============================================================================
const bioSynapseGenetics: Drill = {
  id: "2-core-approaches.bio-synapse-genetics",
  topicId: "2-core-approaches",
  title: "Synapse, Brain Hubs & Twin Heritability",
  level: 1,
  ibLevel: "SL",
  guideRef: "biological-approach",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        // Exact integer twin concordance %
        const traits = [
          "sleep chronotype", "verbal memory span", "spatial rotation speed",
          "stress reactivity", "musical pitch accuracy", "morning alertness",
          "risk tolerance", "novelty seeking", "startle sensitivity",
        ];
        const twinType = rng.pick(["monozygotic (MZ)", "dizygotic (DZ)"] as const);
        const total = rng.pick([20, 25, 40, 50, 60, 80, 100]);
        const pctStep = total === 60 ? 5 : total === 80 ? 5 : total === 40 ? 5 : total === 20 ? 5 : total === 25 ? 4 : 2;
        const pct = rng.int(4, 17) * pctStep;
        const concordant = Math.round((pct * total) / 100);
        const exactPct = clean((concordant / total) * 100);
        const trait = rng.pick(traits);
        const traps = concordant !== exactPct
          ? [{ spec: { type: "number" as const, value: concordant }, feedback: `${concordant} is the raw pair count — divide by ${total} and multiply by 100.` }]
          : undefined;
        return {
          prompt: `In a twin study investigating **${trait}**, **${concordant}** out of **${total}** ${twinType} twin pairs are concordant. Calculate the concordance rate as a whole-number percentage.`,
          answer: { type: "number", value: exactPct, display: `${exactPct}%` },
          traps,
          solution: [
            `Concordance % = {{(${concordant} / ${total}) * 100}}.`,
            `{{${concordant} / ${total} = ${clean(concordant / total)}}}, giving **${exactPct}%**.`,
          ],
          hint: `Divide concordant pairs (${concordant}) by total twin pairs (${total}), then multiply by 100.`,
        };
      }
      // Fast synaptic / brain / hormone identification with varied vignettes
      const researcher = rng.pick(NAMES);
      const sampleN = rng.int(18, 64);
      const scenarios = [
        {
          prompt: `Researcher ${researcher} administers a compound to ${sampleN} volunteers that binds tightly to postsynaptic receptors **without activating them**, blocking the endogenous neurotransmitter from triggering ion flow. What pharmacological term describes this substance?`,
          accept: ["antagonist", "competitive antagonist", "receptor antagonist"],
          display: "antagonist",
          trap: ["agonist"],
          trapMsg: "An agonist mimics or amplifies neurotransmitter signalling; blocking receptors without activating them defines an antagonist.",
          sol: "A molecule that occupies postsynaptic receptors and prevents native neurotransmitter activation is an **antagonist** (e.g. scopolamine on ACh receptors).",
          hint: "Remember: ANT-agonist = ANTI-signal (blocks receptor activation).",
        },
        {
          prompt: `In ${researcher}'s neuropharmacology study (n = ${sampleN}), a drug binds to postsynaptic receptors and **mimics** the native neurotransmitter to boost postsynaptic firing. What pharmacological term describes this substance?`,
          accept: ["agonist", "direct agonist", "receptor agonist"],
          display: "agonist",
          trap: ["antagonist"],
          trapMsg: "An antagonist blocks receptor signalling; mimicking a neurotransmitter to boost firing defines an agonist.",
          sol: "A substance that mimics a neurotransmitter or amplifies its synaptic signalling is an **agonist**.",
          hint: "Remember: A-GO-nist makes the postsynaptic signal GO.",
        },
        {
          prompt: `During ${researcher}'s neuroimaging project (n = ${sampleN}), MRI scans focus on the medial temporal lobe hub essential for consolidating new declarative memories and spatial maps (expanded in London taxi drivers). Name this brain structure.`,
          accept: ["hippocampus", "the hippocampus", "posterior hippocampus"],
          display: "hippocampus",
          trap: ["amygdala", "prefrontal cortex"],
          trapMsg: "The amygdala handles emotional threat salience and the PFC handles executive control; spatial/declarative consolidation relies on the medial temporal lobe memory hub.",
          sol: "The **hippocampus** consolidates new explicit memories and builds cognitive spatial maps (Milner & Scoville, 1957; Maguire et al., 2000).",
          hint: "This medial temporal lobe structure was removed in patient H.M.",
        },
        {
          prompt: `In ${researcher}'s fear-conditioning fMRI experiment (n = ${sampleN}), rapid blood-oxygen spikes appear in the limbic structure specialized for threat detection and emotional salience. Name this brain structure.`,
          accept: ["amygdala", "the amygdala"],
          display: "amygdala",
          trap: ["hippocampus", "prefrontal cortex"],
          trapMsg: "The hippocampus consolidates spatial/declarative facts; rapid threat and emotional salience detection is centred in its almond-shaped limbic neighbour.",
          sol: "The **amygdala** detects threat and tags emotionally arousing stimuli (also dampened by oxytocin in Baumgartner et al., 2008).",
          hint: "An almond-shaped limbic structure seated right next to the hippocampus.",
        },
        {
          prompt: `In ${researcher}'s clinical trial (n = ${sampleN}), volunteers receive an **SSRI** that blocks presynaptic reuptake transporters for a mood-regulating neurotransmitter so more stays active in the synaptic cleft. Name that neurotransmitter.`,
          accept: ["serotonin", "5-ht", "5ht"],
          display: "serotonin",
          trap: ["dopamine", "acetylcholine", "cortisol"],
          trapMsg: "SSRIs specifically target the serotonin (5-HT) reuptake transporter — recall what the second 'S' in SSRI stands for!",
          sol: "Selective **Serotonin** Reuptake Inhibitors (SSRIs) increase **serotonin (5-HT)** availability in the synaptic cleft, acting as functional agonists.",
          hint: "Expand the acronym S-S-R-I.",
        },
        {
          prompt: `In ${researcher}'s virtual-reality navigation experiment (n = ${sampleN}), blocking muscarinic receptors with **scopolamine** impairs hippocampal spatial encoding (replicating Antonova et al., 2011). Name the neurotransmitter being blocked.`,
          accept: ["acetylcholine", "ach"],
          display: "acetylcholine",
          trap: ["serotonin", "dopamine", "cortisol"],
          trapMsg: "Scopolamine is a muscarinic antagonist specifically targeting acetylcholine (ACh) in memory pathways.",
          sol: "Scopolamine antagonizes **acetylcholine (ACh)** receptors, reducing hippocampal activation during spatial memory encoding (Antonova et al., 2011).",
          hint: "Abbreviated ACh; crucial for hippocampal attention and memory encoding.",
        },
      ];
      const sc = rng.pick(scenarios);
      return {
        prompt: sc.prompt,
        answer: { type: "text", accept: sc.accept, display: sc.display },
        traps: [{ spec: { type: "text", accept: sc.trap }, feedback: sc.trapMsg }],
        solution: [sc.sol],
        hint: sc.hint,
      };
    }

    if (tier === 2) {
      if (rng.bool(0.65)) {
        // Falconer's heritability h^2 = 2(r_MZ - r_DZ)
        const traits = [
          "working-memory accuracy", "anxiety vulnerability", "extraversion",
          "circadian preference", "reading fluency", "stress resilience",
          "novelty sensitivity", "attention switching",
        ];
        const total = rng.pick([50, 80, 100, 120, 200]);
        const dzPct = rng.pick([15, 20, 25, 30, 35, 40]);
        const diffPct = rng.pick([15, 20, 25, 30, 35, 40]);
        const mzPct = dzPct + diffPct;
        const mzCount = Math.round((mzPct * total) / 100);
        const dzCount = Math.round((dzPct * total) / 100);
        // Ensure exact divisibility by recalculating exact %
        const rMz = clean((mzCount / total) * 100);
        const rDz = clean((dzCount / total) * 100);
        const h2Pct = clean(2 * (rMz - rDz));
        const trait = rng.pick(traits);
        return {
          prompt: `A twin study of **${trait}** examines **${total}** MZ pairs (**${mzCount}** concordant) and **${total}** DZ pairs (**${dzCount}** concordant). Calculate Falconer's heritability estimate {{h^2 = 2(r_{MZ} - r_{DZ})}} as a whole-number percentage.`,
          answer: { type: "number", value: h2Pct, display: `${h2Pct}%` },
          traps: [
            {
              spec: { type: "number", value: clean(rMz - rDz) },
              feedback: `That's only {{r_{MZ} - r_{DZ} = ${clean(rMz - rDz)}%}} — remember to multiply by 2 in Falconer's formula!`,
            },
          ],
          solution: [
            `{{r_{MZ} = ${mzCount}/${total} = ${rMz}%}} and {{r_{DZ} = ${dzCount}/${total} = ${rDz}%}}.`,
            `{{h^2 = 2(${rMz}% - ${rDz}%) = 2(${clean(rMz - rDz)}%) = ${h2Pct}%}}.`,
          ],
          hint: `First find MZ% (${rMz}%) and DZ% (${rDz}%), subtract them, then double the difference.`,
        };
      }
      // Applied hormone / neuroplasticity / GxE diagnostic
      const researcher = rng.pick(NAMES);
      const n = rng.int(24, 90);
      const days = rng.int(3, 6);
      const items = [
        {
          prompt: `In ${researcher}'s placebo-controlled trial (n = ${n}), participants receive a high dose of a synthetic adrenal-cortex stress hormone for ${days} days and show impaired declarative paragraph recall (replicating Newcomer et al., 1999). Name this hormone.`,
          accept: ["cortisol"],
          display: "cortisol",
          trap: ["adrenaline", "oxytocin"],
          trapMsg: "Adrenaline drives acute fight-or-flight arousal; prolonged declarative memory impairment via hippocampal glucocorticoid receptors is caused by cortisol.",
          sol: "Prolonged high **cortisol** binds to hippocampal receptors and disrupts declarative verbal recall (Newcomer et al., 1999).",
          hint: "Secreted by the adrenal cortex along the HPA axis during chronic stress.",
        },
        {
          prompt: `In ${researcher}'s economic trust game (n = ${n}), participants receiving an intranasal hypothalamic hormone transfer more money to human partners and show dampened amygdala reactivity after betrayal (Kosfeld et al., 2005; Baumgartner et al., 2008). Name this hormone.`,
          accept: ["oxytocin"],
          display: "oxytocin",
          trap: ["cortisol", "serotonin", "dopamine"],
          trapMsg: "Check the study: Kosfeld et al. (2005) and Baumgartner et al. (2008) tested intranasal oxytocin (a hormone, not a synaptic neurotransmitter).",
          sol: "**Oxytocin** modulated interpersonal trust and dampened amygdala betrayal activation in Kosfeld et al. (2005) and Baumgartner et al. (2008).",
          hint: "A hypothalamic hormone associated with social affiliation and in-group trust.",
        },
        {
          prompt: `In ${researcher}'s longitudinal MRI study (n = ${n}), adults trained in juggling for 3 months show grey-matter growth in area V5/hMT, which partially shrinks after 3 months without practice (Draganski et al., 2004). What two-word process eliminates under-used synapses during rest?`,
          accept: ["synaptic pruning", "neural pruning"],
          display: "synaptic pruning",
          trap: ["neuroplasticity", "long-term potentiation"],
          trapMsg: "Neuroplasticity is the umbrella term; the specific elimination of unused synaptic connections is called synaptic pruning.",
          sol: "When a neural circuit goes unused, **synaptic pruning** trims redundant connections to optimize brain efficiency.",
          hint: "Think of a gardener trimming unused branches: 'synaptic _______'.",
        },
        {
          prompt: `In ${researcher}'s replication of Caspi et al. (2003) with ${n} young adults, short-allele carriers of a serotonin transporter gene develop higher depression rates ONLY after multiple severe life stressors. Type the standard abbreviated name of this gene.`,
          accept: ["5-htt", "5htt", "5-httlpr"],
          display: "5-HTT",
          trap: ["ssri", "ach"],
          trapMsg: "SSRI is a drug class; the serotonin transporter gene studied by Caspi et al. (2003) is written 5-HTT (or 5-HTTLPR).",
          sol: "Caspi et al. (2003) demonstrated a Gene × Environment interaction involving the **5-HTT** serotonin transporter gene.",
          hint: "Starts with 5-HT (serotonin) plus T for transporter.",
        },
      ];
      const sc = rng.pick(items);
      return {
        prompt: sc.prompt,
        answer: { type: "text", accept: sc.accept, display: sc.display },
        traps: [{ spec: { type: "text", accept: sc.trap }, feedback: sc.trapMsg }],
        solution: [sc.sol],
        hint: sc.hint,
      };
    }

    // Tier 3: Back-solve r_DZ from h^2 and r_MZ, OR neuroplasticity grey-matter % change
    if (rng.bool(0.55)) {
      const traits = [
        "episodic recall", "executive inhibition", "spatial navigation",
        "risk perception", "sleep duration", "musical memory",
        "fear conditioning", "verbal fluency",
      ];
      const trait = rng.pick(traits);
      const rMz = rng.int(54, 88);
      const halfH2 = rng.int(12, 32);
      const h2 = 2 * halfH2;
      const rDz = rMz - halfH2;
      return {
        prompt: `A behavioural genetics report on **${trait}** states Falconer's heritability as **${h2}%** ({{h^2 = ${clean(h2 / 100)}}}) and an MZ concordance rate of **${rMz}%**. Using {{h^2 = 2(r_{MZ} - r_{DZ})}}, calculate the **DZ concordance rate** as a whole-number percentage.`,
        answer: { type: "number", value: rDz, display: `${rDz}%` },
        traps: [
          {
            spec: { type: "number", value: rMz - h2 },
            feedback: `Remember to divide {{h^2}} (${h2}%) by 2 before subtracting from {{r_{MZ}}} (${rMz}%).`,
          },
        ],
        solution: [
          `Divide both sides of {{${h2}% = 2(${rMz}% - r_{DZ})}} by 2: {{${halfH2}% = ${rMz}% - r_{DZ}}}.`,
          `Rearrange: {{r_{DZ} = ${rMz}% - ${halfH2}% = ${rDz}%}}.`,
        ],
        hint: `Halve {{h^2}} (${h2}% ÷ 2 = ${halfH2}%), then subtract from {{r_{MZ}}} (${rMz}%).`,
      };
    }

    // Neuroplasticity V5 / hippocampal grey-matter relative % change
    const region = rng.pick(["posterior hippocampus", "visual-motion cortex V5/hMT", "motor-strip grey matter"]);
    const task = rng.pick(["spatial route training", "three months of juggling", "intensive violin practice", "bilingual vocabulary immersion"]);
    const base = rng.pick([200, 250, 400, 500]);
    const pctInc = rng.pick([2, 3, 4, 5, 6, 8, 10, 12]);
    const gain = clean((base * pctInc) / 100);
    const post = clean(base + gain);
    return {
      prompt: `In a longitudinal structural MRI study of **${task}**, mean volume in the **${region}** increases from **${num(base)} mm³** at baseline to **${num(post)} mm³** post-training. Calculate the **percentage increase** in grey-matter volume.`,
      answer: { type: "number", value: pctInc, display: `${pctInc}%` },
      traps: [
        {
          spec: { type: "number", value: gain },
          feedback: `${num(gain)} mm³ is the raw volume gain — divide by the baseline (${base} mm³) and multiply by 100.`,
        },
      ],
      solution: [
        `Raw volume increase = {{${num(post)} - ${num(base)} = ${num(gain)}}} mm³.`,
        `Percentage increase = {{(${num(gain)} / ${num(base)}) * 100 = ${pctInc}%}}.`,
      ],
      hint: `Compute {{((V_2 - V_1) / V_1) * 100}} using baseline {{V_1 = ${base}}}.`,
    };
  },
};

// ============================================================================
// DRILL 2: Cognitive I — Memory Models, Serial Position & Schema Theory
// ============================================================================
const cogMemorySchema: Drill = {
  id: "2-core-approaches.cog-memory-schema",
  topicId: "2-core-approaches",
  title: "Memory Models, Serial Position & Schemas",
  level: 1,
  ibLevel: "SL",
  guideRef: "cognitive-memory-schemas",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        // Exact integer recall percentage in serial-position replication
        const participants = rng.pick([15, 20, 25, 30, 40, 50]);
        const targetWords = rng.pick([3, 4]);
        const trials = participants * targetWords;
        const zone = rng.pick(["primacy (first words)", "recency (final words)", "middle"] as const);
        const pct = zone === "middle"
          ? rng.pick([20, 25, 30, 35, 40])
          : rng.pick([60, 65, 70, 75, 80, 85, 90]);
        // Pick only combinations where pct * trials / 100 is an exact integer
        const raw = (pct * trials) / 100;
        const recalled = Number.isInteger(raw) ? raw : Math.round(raw);
        const exactPct = clean((recalled / trials) * 100);
        // Ensure whole number by snapping participants=25, targetWords=4 if needed
        if (!Number.isInteger(exactPct)) {
          const t2 = 100;
          return {
            prompt: `In a Glanzer & Cunitz memory replication, **25** students hear a 15-word list. Across the **4 ${zone}** positions (100 word-trials total), **${pct}** words are recalled correctly. Calculate the recall percentage.`,
            answer: { type: "number", value: pct, display: `${pct}%` },
            solution: [`Recall % = {{(${pct} / ${t2}) * 100 = ${pct}%}}.`],
            hint: `Divide recalled words (${pct}) by total word-trials (${t2}) and multiply by 100.`,
          };
        }
        const traps = recalled !== exactPct
          ? [{ spec: { type: "number" as const, value: recalled }, feedback: `${recalled} is the raw word count — divide by ${trials} total word-trials and multiply by 100.` }]
          : undefined;
        return {
          prompt: `In a Glanzer & Cunitz replication, **${participants}** participants hear a 15-word list. Across the **${targetWords} ${zone}** positions (${trials} word-trials total), **${recalled}** words are recalled accurately. Calculate the recall percentage.`,
          answer: { type: "number", value: exactPct, display: `${exactPct}%` },
          traps,
          solution: [
            `Total word-trials = {{${participants} * ${targetWords} = ${trials}}}.`,
            `Recall % = {{(${recalled} / ${trials}) * 100 = ${exactPct}%}}.`,
          ],
          hint: `Divide correct words recalled (${recalled}) by total trials (${trials}), then multiply by 100.`,
        };
      }
      // Working Memory Model component matching with varied protagonists & tasks
      const student = rng.pick(NAMES);
      const wmItems = [
        {
          desc: rng.pick([
            "silently rehearsing a 7-digit locker code using her 'inner voice'",
            "repeating unfamiliar Spanish vocabulary words aloud to memorize their sounds",
            "listening to a spoken voicemail message while transcribing a phone number",
            "subvocally reciting a chemistry definition while walking to class",
          ]),
          ans: "phonological loop",
          accept: ["phonological loop", "the phonological loop", "articulatory loop"],
          trap: ["visuospatial sketchpad", "central executive"],
          trapMsg: "Verbal/auditory rehearsal ('inner ear' + 'inner voice') belongs to the phonological loop.",
          sol: "Speech-based storage and subvocal rehearsal are handled by the **phonological loop**.",
          hint: "Which WMM slave system processes speech and auditory sounds?",
        },
        {
          desc: rng.pick([
            "mentally rotating a 3D molecular diagram to compare mirror shapes",
            "picturing the layout of her bedroom to count how many windows face east",
            "tracking a fast-moving dot across a computer screen while planning a route",
            "mentally folding a flat net into a cube during a geometry test",
          ]),
          ans: "visuospatial sketchpad",
          accept: ["visuospatial sketchpad", "visuo-spatial sketchpad", "the visuospatial sketchpad", "vssp"],
          trap: ["phonological loop", "episodic buffer"],
          trapMsg: "Mental imagery and spatial layouts ('inner eye') rely on the visuospatial sketchpad.",
          sol: "Holding and manipulating visual imagery and spatial maps relies on the **visuospatial sketchpad**.",
          hint: "Which WMM slave system acts as the 'inner eye' for shapes and spatial maps?",
        },
        {
          desc: rng.pick([
            "switching focus rapidly between reading exam instructions and ignoring corridor noise",
            "allocating limited attention across two competing tasks while inhibiting distractors",
            "deciding which revision strategy to deploy and coordinating slave subsystems",
            "filtering out incoming phone notifications to stay focused on a logic puzzle",
          ]),
          ans: "central executive",
          accept: ["central executive", "the central executive"],
          trap: ["phonological loop", "episodic buffer"],
          trapMsg: "Attentional control, task switching, and inhibiting distractors are executive functions of the central executive.",
          sol: "Directing attention, switching tasks, and inhibiting irrelevant distractions are managed by the **central executive**.",
          hint: "Which modality-free 'boss' component controls attention in Baddeley & Hitch's model?",
        },
        {
          desc: rng.pick([
            "combining a friend's spoken story, facial expressions, and chronological sequence into one unified scene linked to LTM",
            "integrating visual slides, spoken lecture explanations, and prior long-term schemas into one coherent episode",
            "binding multimodal sights, sounds, and time order together before long-term consolidation",
          ]),
          ans: "episodic buffer",
          accept: ["episodic buffer", "the episodic buffer"],
          trap: ["central executive", "visuospatial sketchpad"],
          trapMsg: "Binding verbal, visual, and chronological streams into unified episodes linked to LTM is the role of the episodic buffer (added in 2000).",
          sol: "Added by Baddeley (2000), the **episodic buffer** integrates multimodal inputs into chronological chunks linked with LTM.",
          hint: "The fourth component added by Baddeley in 2000 to bind multimodal episodes.",
        },
      ];
      const item = rng.pick(wmItems);
      return {
        prompt: `${student} is ${item.desc}. Which component of **Baddeley & Hitch's Working Memory Model** is primarily responsible?`,
        answer: { type: "text", accept: item.accept, display: item.ans },
        traps: [{ spec: { type: "text", accept: item.trap }, feedback: item.trapMsg }],
        solution: [item.sol],
        hint: item.hint,
      };
    }

    if (tier === 2) {
      if (rng.bool(0.6)) {
        // Delayed recency percentage-point collapse
        const n = rng.pick([20, 25, 30, 40, 50]);
        const w = rng.pick([3, 4]);
        const trials = n * w;
        const immPct = rng.pick([75, 80, 85, 90]);
        const delPct = rng.pick([20, 25, 30, 35, 40]);
        const immRaw = (immPct * trials) / 100;
        const delRaw = (delPct * trials) / 100;
        if (Number.isInteger(immRaw) && Number.isInteger(delRaw)) {
          const drop = immPct - delPct;
          const traps = immRaw - delRaw !== drop
            ? [{ spec: { type: "number" as const, value: immRaw - delRaw }, feedback: `${immRaw - delRaw} is the drop in raw word counts — convert both scores out of ${trials} into percentages first.` }]
            : undefined;
          return {
            prompt: `In a Glanzer & Cunitz (1966) replication with **${n}** participants recalling the final **${w}** words (${trials} word-trials), immediate recency recall is **${immRaw}/${trials}**, dropping to **${delRaw}/${trials}** after a 30-second counting delay. By how many **percentage points** did recency recall drop?`,
            answer: { type: "number", value: drop, display: `${drop}` },
            traps,
            solution: [
              `Immediate recency = {{(${immRaw} / ${trials}) * 100 = ${immPct}%}}.`,
              `Delayed recency = {{(${delRaw} / ${trials}) * 100 = ${delPct}%}}.`,
              `Percentage-point drop = {{${immPct} - ${delPct} = ${drop}}} percentage points (confirming STM clearance).`,
            ],
            hint: `Convert ${immRaw}/${trials} and ${delRaw}/${trials} into percentages, then subtract.`,
          };
        }
        // Fallback clean 100-trial case
        const drop = immPct - delPct;
        return {
          prompt: `In a serial-position experiment with **25** participants across the final **4** list positions (100 word-trials), immediate recall is **${immPct}** words and 30-second delayed recall is **${delPct}** words. Calculate the **percentage-point decrease** in recency recall.`,
          answer: { type: "number", value: drop, display: `${drop}` },
          solution: [`Immediate = ${immPct}%, delayed = ${delPct}%, so the drop is {{${immPct} - ${delPct} = ${drop}}} percentage points.`],
          hint: `Subtract the delayed percentage (${delPct}%) from the immediate percentage (${immPct}%).`,
        };
      }
      // Bartlett schema distortion diagnostics
      const student = rng.pick(NAMES);
      const storyWordCount = rng.int(260, 360);
      const shortCount = rng.int(110, 160);
      const distortions = [
        {
          prompt: `While retelling an unfamiliar folk tale in ${student}'s psychology class, a participant shortens the ${storyWordCount}-word story down to ${shortCount} words, dropping unfamiliar supernatural characters and peripheral episodes. Name Bartlett's (1932) reconstructive distortion.`,
          accept: ["levelling", "leveling"],
          display: "levelling",
          trap: ["sharpening", "assimilation"],
          trapMsg: "Omitting unfamiliar details so the story becomes shorter and simpler is levelling (not sharpening or assimilation).",
          sol: "Shortening and simplifying a recalled narrative by dropping unfamiliar details is **levelling**.",
          hint: "Think of flattening a story down by omitting details (starts with L).",
        },
        {
          prompt: `In ${student}'s replication of Bartlett (1932), British teenagers change 'hunting seals' to 'going fishing', 'canoes' to 'rowboats', and 'something black came out of his mouth' to 'he foamed at the mouth'. Name this cultural schema distortion.`,
          accept: ["assimilation", "rationalization", "rationalisation"],
          display: "assimilation",
          trap: ["levelling", "leveling", "sharpening"],
          trapMsg: "Replacing unfamiliar elements with culturally familiar equivalents is assimilation (or rationalization).",
          sol: "Altering unfamiliar cultural terms so they fit existing cultural schemas is **assimilation** (rationalization).",
          hint: "Unfamiliar cultural elements are *assimilated* into familiar schemas.",
        },
        {
          prompt: `During ${student}'s serial-reproduction lab, each participant exaggerates and emphasizes the central battle scene while embellishing the hero's bravery so it dominates the retelling. Name Bartlett's (1932) distortion describing selective emphasis of salient details.`,
          accept: ["sharpening"],
          display: "sharpening",
          trap: ["levelling", "leveling", "assimilation"],
          trapMsg: "Highlighting and exaggerating particular memorable details is sharpening (the counterpart to levelling).",
          sol: "Elaborating and magnifying specific salient details during reconstruction is **sharpening**.",
          hint: "The opposite of levelling — making select focal details stand out even *sharper*.",
        },
      ];
      const d = rng.pick(distortions);
      return {
        prompt: d.prompt,
        answer: { type: "text", accept: d.accept, display: d.display },
        traps: [{ spec: { type: "text", accept: d.trap }, feedback: d.trapMsg }],
        solution: [d.sol],
        hint: d.hint,
      };
    }

    // Tier 3: Loftus & Palmer relative % speed increase OR primacy-vs-middle gap
    if (rng.bool(0.55)) {
      const verbWeak = rng.pick(["contacted", "bumped", "tapped"]);
      const verbStrong = rng.pick(["smashed", "crashed", "rammed"]);
      const vWeak = rng.pick([20, 25, 40, 50]);
      const pctInc = rng.pick([10, 12, 16, 20, 24, 28, 30, 32, 36, 40]);
      const diff = clean((vWeak * pctInc) / 100);
      const vStrong = clean(vWeak + diff);
      return {
        prompt: `In a classroom replication of **Loftus & Palmer (1974)**, participants hearing the verb **'${verbWeak}'** estimate a mean car speed of **${num(vWeak)} km/h**, while participants hearing **'${verbStrong}'** estimate **${num(vStrong)} km/h**. Calculate the **percentage increase** from '${verbWeak}' to '${verbStrong}'.`,
        answer: { type: "number", value: pctInc, display: `${pctInc}%` },
        traps: [
          {
            spec: { type: "number", value: diff },
            feedback: `${num(diff)} km/h is the raw speed difference — divide by the baseline (${vWeak} km/h) and multiply by 100.`,
          },
        ],
        solution: [
          `Raw difference = {{${num(vStrong)} - ${num(vWeak)} = ${num(diff)}}} km/h.`,
          `Percentage increase = {{(${num(diff)} / ${num(vWeak)}) * 100 = ${pctInc}%}}.`,
        ],
        hint: `Use {{((V_2 - V_1) / V_1) * 100}} with baseline {{V_1 = ${vWeak}}}.`,
      };
    }

    // Multi-step Experiment 2 broken-glass false memory percentage-point gap
    const nGroup = rng.pick([25, 40, 50]);
    const pStrong = rng.pick([28, 32, 36, 40, 44]);
    const pControl = rng.pick([8, 12, 16, 20]);
    // Ensure integer counts
    const cStrong = Math.round((pStrong * nGroup) / 100);
    const cControl = Math.round((pControl * nGroup) / 100);
    const exactStrong = clean((cStrong / nGroup) * 100);
    const exactControl = clean((cControl / nGroup) * 100);
    const gap = clean(exactStrong - exactControl);
    return {
      prompt: `One week after viewing a crash film (Loftus & Palmer Exp. 2 replication), **${cStrong}** of **${nGroup}** participants in the 'smashed' group falsely report seeing broken glass, versus **${cControl}** of **${nGroup}** in the control group. By how many **percentage points** is false recall higher in the 'smashed' group?`,
      answer: { type: "number", value: gap, display: `${gap}` },
      traps: [
        {
          spec: { type: "number", value: cStrong - cControl },
          feedback: `${cStrong - cControl} is the difference in participant counts — convert both fractions out of ${nGroup} into percentages first.`,
        },
      ],
      solution: [
        `'Smashed' false recall = {{(${cStrong} / ${nGroup}) * 100 = ${exactStrong}%}}.`,
        `Control false recall = {{(${cControl} / ${nGroup}) * 100 = ${exactControl}%}}.`,
        `Difference = {{${exactStrong} - ${exactControl} = ${gap}}} percentage points.`,
      ],
      hint: `Convert ${cStrong}/${nGroup} and ${cControl}/${nGroup} to percentages, then subtract.`,
    };
  },
};

// ============================================================================
// DRILL 3: Cognitive II — Dual-Process Heuristics, Framing & Base Rates
// ============================================================================
const cogHeuristicsFraming: Drill = {
  id: "2-core-approaches.cog-heuristics-framing",
  topicId: "2-core-approaches",
  title: "Heuristics, Framing EV & Base-Rate Reasoning",
  level: 2,
  ibLevel: "SL",
  guideRef: "cognitive-thinking-biases",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const person = rng.pick(NAMES);
      const scenarios = [
        {
          prompt: `After seeing ${rng.int(2, 5)} viral social-media clips about lightning strikes on golf courses, ${person} insists lightning is a bigger risk than slippery stairs despite far higher stair injury statistics. Name the **heuristic** distorting ${person}'s risk judgement.`,
          accept: ["availability heuristic", "availability", "the availability heuristic"],
          display: "availability heuristic",
          trap: ["representativeness heuristic", "anchoring", "anchoring bias"],
          trapMsg: "Judging likelihood by how easily vivid recent examples come to mind is the availability heuristic.",
          sol: "Overestimating risk because vivid media examples spring effortlessly to mind is the **availability heuristic** (Tversky & Kahneman, 1973).",
          hint: "Focus on *ease of recalling vivid examples* from memory.",
        },
        {
          prompt: `${person} meets a soft-spoken stranger wearing round spectacles who reads Latin poetry and immediately judges him more likely to be a university classics professor than an office administrator, ignoring that administrators outnumber classics professors ${rng.int(20, 80)} to 1. Name the **heuristic** at work.`,
          accept: ["representativeness heuristic", "representativeness", "the representativeness heuristic"],
          display: "representativeness heuristic",
          trap: ["availability heuristic", "availability", "confirmation bias"],
          trapMsg: "Matching traits to an occupational prototype while ignoring statistical base rates is the representativeness heuristic.",
          sol: "Estimating probability by similarity to a stereotype while neglecting base rates is the **representativeness heuristic** (Tversky & Kahneman, 1983).",
          hint: "Ask how closely the stranger *represents* a mental stereotype.",
        },
        {
          prompt: `Seeing a laptop marked 'Originally $${rng.int(16, 24) * 100}, today $${rng.int(9, 13) * 100}', ${person} feels it is an incredible deal even though identical specs normally retail for $850. Name the specific **cognitive bias** exploited by the crossed-out price.`,
          accept: ["anchoring", "anchoring bias", "anchoring effect", "anchoring and adjustment"],
          display: "anchoring bias",
          trap: ["framing", "framing effect", "availability heuristic"],
          trapMsg: "An initial reference number pulling subsequent numerical judgements upward is anchoring bias.",
          sol: "Relying heavily on an initial reference figure and adjusting insufficiently away from it is **anchoring bias** (Tversky & Kahneman, 1974).",
          hint: "The crossed-out number acts like a heavy weight holding estimates near it.",
        },
        {
          prompt: `${person} buys yoghurt labelled **'${rng.pick([92, 95, 97])}% fat-free'** enthusiastically, yet rejects an identical tub labelled **'contains ${rng.pick([8, 5, 3])}% fat'**. Name the **cognitive effect** causing opposite choices for identical nutritional facts.`,
          accept: ["framing", "framing effect", "the framing effect"],
          display: "framing effect",
          trap: ["anchoring", "anchoring bias", "confirmation bias"],
          trapMsg: "Reacting differently to logically equivalent gain vs loss wording is the framing effect (Prospect Theory).",
          sol: "Reversing preferences depending on whether identical facts are worded as gains ('fat-free') or losses ('contains fat') is the **framing effect** (Tversky & Kahneman, 1981).",
          hint: "The *picture* (nutrition) is identical — only the wording around it changed.",
        },
        {
          prompt: `Convinced that herbal tea boosts exam focus, ${person} clicks only articles praising herbal tea and skips ${rng.int(3, 7)} peer-reviewed studies showing null effects. Name this **cognitive bias**.`,
          accept: ["confirmation bias"],
          display: "confirmation bias",
          trap: ["availability heuristic", "anchoring bias", "framing effect"],
          trapMsg: "Selectively seeking evidence that supports existing beliefs while ignoring disconfirming data is confirmation bias.",
          sol: "Seeking out verifying evidence while ignoring falsifying evidence is **confirmation bias** (demonstrated in Wason's 1966 selection task).",
          hint: "Tested experimentally in Wason's four-card task — looking to *confirm* rather than falsify.",
        },
        {
          prompt: `Under a ${rng.int(5, 10)}-second countdown, ${person} blurts out '$0.10' instantly on the bat-and-ball puzzle before stopping to check the algebra. In Kahneman's Dual-Process Model, which thinking mode (**System 1** or **System 2**) generated that instant gut response?`,
          accept: ["system 1", "system one", "1"],
          display: "System 1",
          trap: ["system 2", "system two", "2"],
          trapMsg: "System 2 is slow, deliberate verification; fast, effortless, intuitive gut answers come from System 1.",
          sol: "Fast, automatic, intuitive heuristics belong to **System 1**; checking {{x + (x + 1.00) = 1.10}} requires effortful **System 2**.",
          hint: "Fast & automatic = System 1; slow & analytical = System 2.",
        },
      ];
      const sc = rng.pick(scenarios);
      return {
        prompt: sc.prompt,
        answer: { type: "text", accept: sc.accept, display: sc.display },
        traps: [{ spec: { type: "text", accept: sc.trap }, feedback: sc.trapMsg }],
        solution: [sc.sol],
        hint: sc.hint,
      };
    }

    if (tier === 2) {
      if (rng.bool(0.6)) {
        // Asian Disease-style Expected Value equivalence check
        const cases = [
          { n: 300, num: 1, den: 3 },
          { n: 600, num: 1, den: 3 },
          { n: 900, num: 1, den: 3 },
          { n: 1200, num: 1, den: 3 },
          { n: 400, num: 1, den: 4 },
          { n: 800, num: 1, den: 4 },
          { n: 1200, num: 1, den: 4 },
          { n: 500, num: 2, den: 5 },
          { n: 1000, num: 2, den: 5 },
          { n: 600, num: 2, den: 5 },
          { n: 800, num: 3, den: 8 },
        ];
        const c = rng.pick(cases);
        const askLoss = rng.bool(0.5);
        const saved = (c.n * c.num) / c.den;
        const died = c.n - saved;
        const hazard = rng.pick(["rare flu outbreak", "coastal flood alert", "regional crop blight", "island dengue wave"]);
        if (!askLoss) {
          return {
            prompt: `In a **Gain-Frame** decision problem modeled on Tversky & Kahneman (1981), **${c.n}** residents face a ${hazard}. The risky gamble offers a {{${c.num}/${c.den}}} chance all ${c.n} are saved and a {{${c.den - c.num}/${c.den}}} chance nobody is saved. How many residents must the **certain Gain-Frame option** save to have the exact same Expected Value?`,
            answer: { type: "number", value: saved, display: `${saved}` },
            traps: [
              {
                spec: { type: "number", value: died },
                feedback: `${died} is the expected number *not* saved ({{${c.den - c.num}/${c.den} * ${c.n}}}) — the question asked for lives **saved**.`,
              },
            ],
            solution: [
              `Expected lives saved = {{(${c.num}/${c.den}) * ${c.n} = ${saved}}}.`,
              `Under Prospect Theory, most people lock in this certain gain of **${saved}** (risk-averse).`,
            ],
            hint: `Multiply total residents (${c.n}) by the survival probability {{${c.num}/${c.den}}}.`,
          };
        }
        return {
          prompt: `In a **Loss-Frame** decision problem modeled on Tversky & Kahneman (1981), **${c.n}** residents face a ${hazard}. The gamble gives a {{${c.num}/${c.den}}} probability nobody dies and a {{${c.den - c.num}/${c.den}}} probability all ${c.n} die. How many certain deaths in the sure **Loss-Frame option** give the exact same Expected Value?`,
          answer: { type: "number", value: died, display: `${died}` },
          traps: [
            {
              spec: { type: "number", value: saved },
              feedback: `${saved} is the expected number *saved* — in the Loss Frame, compute expected **deaths** ({{${c.den - c.num}/${c.den} * ${c.n}}}).`,
            },
          ],
          solution: [
            `Expected deaths = {{(${c.den - c.num}/${c.den}) * ${c.n} = ${died}}} (equivalently {{${c.n} - ${saved} = ${died}}}).`,
            `Under Prospect Theory loss aversion, most people reject **${died}** certain deaths and choose the risky gamble.`,
          ],
          hint: `Multiply ${c.n} by the probability of loss {{${c.den - c.num}/${c.den}}}.`,
        };
      }
      // Anchoring shift calculation
      const item = rng.pick(["African nations in the UN (%)", "average hotel night price ($)", "museum paintings in storage", "sentencing months (Englich replication)"]);
      const lowAnchor = rng.pick([10, 12, 15, 20]);
      const highAnchor = lowAnchor + rng.pick([40, 50, 55, 60]);
      const lowEst = lowAnchor + rng.int(6, 18);
      const shift = rng.int(12, 28);
      const highEst = lowEst + shift;
      return {
        prompt: `In an anchoring experiment estimating **${item}**, Group L spins a rigged wheel landing on **${lowAnchor}** and produces a median estimate of **${lowEst}**. Group H spins **${highAnchor}** and produces a median estimate of **${highEst}**. Calculate the anchoring shift (Group H median minus Group L median).`,
        answer: { type: "number", value: shift, display: `${shift}` },
        traps: [
          {
            spec: { type: "number", value: highAnchor - lowAnchor },
            feedback: `${highAnchor - lowAnchor} is the difference between the rigged *anchors*, not the shift in participants' median *estimates*!`,
          },
        ],
        solution: [
          `Anchoring shift = {{${highEst} - ${lowEst} = ${shift}}} units toward the arbitrary higher anchor.`,
        ],
        hint: `Subtract Group L's median estimate (${lowEst}) from Group H's median estimate (${highEst}).`,
      };
    }

    // Tier 3: Exact-integer Natural-Frequency Base-Rate Neglect OR Flashbulb Memory divergence
    if (rng.bool(0.6)) {
      // Curated exact-integer Bayesian natural-frequency configs:
      // (nMaj, rMaj%, nMin, rMin%) -> hitMaj = nMaj*rMaj/100, hitMin = nMin*rMin/100, hitMaj/(hitMaj+hitMin)*100 is EXACT integer!
      const configs = [
        { nMaj: 800, rMaj: 20, nMin: 200, rMin: 80 }, // 160 vs 160 -> 50%
        { nMaj: 900, rMaj: 20, nMin: 100, rMin: 60 }, // 180 vs 60 -> 75%
        { nMaj: 800, rMaj: 30, nMin: 200, rMin: 80 }, // 240 vs 160 -> 60%
        { nMaj: 900, rMaj: 40, nMin: 100, rMin: 90 }, // 360 vs 90 -> 80%
        { nMaj: 700, rMaj: 20, nMin: 300, rMin: 70 }, // 140 vs 210 -> 40%
        { nMaj: 800, rMaj: 15, nMin: 200, rMin: 90 }, // 120 vs 180 -> 40%
        { nMaj: 900, rMaj: 30, nMin: 100, rMin: 90 }, // 270 vs 90 -> 75%
        { nMaj: 600, rMaj: 25, nMin: 400, rMin: 75 }, // 150 vs 300 -> 33.3? skip -> use 600*30=180, 400*80=320 -> 36%!
        { nMaj: 600, rMaj: 30, nMin: 400, rMin: 80 }, // 180 vs 320 -> 500 total -> 36%!
        { nMaj: 800, rMaj: 25, nMin: 200, rMin: 50 }, // 200 vs 100 -> skip 66.7; use 800*45=360, 200*70=140 -> 500 total -> 72%!
        { nMaj: 800, rMaj: 45, nMin: 200, rMin: 70 }, // 360 vs 140 -> 500 total -> 72%!
        { nMaj: 750, rMaj: 20, nMin: 250, rMin: 60 }, // 150 vs 150 -> 50%
      ].filter((x) => {
        const h1 = (x.nMaj * x.rMaj) / 100;
        const h2 = (x.nMin * x.rMin) / 100;
        return Number.isInteger((h1 * 100) / (h1 + h2));
      });
      const cfg = rng.pick(configs);
      const scale = rng.pick([1, 2]);
      const nMaj = cfg.nMaj * scale;
      const nMin = cfg.nMin * scale;
      const hitMaj = (nMaj * cfg.rMaj) / 100;
      const hitMin = (nMin * cfg.rMin) / 100;
      const totalHits = hitMaj + hitMin;
      const majPct = clean((hitMaj * 100) / totalHits);
      const minPct = clean(100 - majPct);
      const pair = rng.pick([
        ["software engineers", "art historians", "collects rare vinyl records"],
        ["accountants", "opera singers", "writes haiku poetry"],
        ["civil engineers", "librarians", "reads medieval chronicles"],
        ["data analysts", "botanists", "presses dried wildflowers"],
        ["sales managers", "philosophers", "debates ancient Stoicism"],
      ]);
      const traps = [
        ...(minPct !== majPct
          ? [{ spec: { type: "number" as const, value: minPct }, feedback: `${minPct}% is the percentage who are ${pair[1]} — the question asked for **${pair[0]}**!` }]
          : []),
        ...(cfg.rMaj !== majPct
          ? [{ spec: { type: "number" as const, value: cfg.rMaj }, feedback: `${cfg.rMaj}% is the rate within ${pair[0]} alone — use natural frequencies (${hitMaj} out of ${totalHits} total matches).` }]
          : []),
      ];
      return {
        prompt: `A conference includes **${nMaj} ${pair[0]}** and **${nMin} ${pair[1]}**. Suppose **${cfg.rMaj}%** of ${pair[0]} and **${cfg.rMin}%** of ${pair[1]} fit the trait *"${pair[2]}"*. Out of ALL attendees who fit that trait, what percentage are actually **${pair[0]}**?`,
        answer: { type: "number", value: majPct, display: `${majPct}%` },
        traps: traps.length ? traps : undefined,
        solution: [
          `${pair[0]} with trait = {{${cfg.rMaj}% * ${nMaj} = ${hitMaj}}}.`,
          `${pair[1]} with trait = {{${cfg.rMin}% * ${nMin} = ${hitMin}}}.`,
          `Total matching attendees = {{${hitMaj} + ${hitMin} = ${totalHits}}}.`,
          `Percentage who are ${pair[0]} = {{(${hitMaj} / ${totalHits}) * 100 = ${majPct}%}} (showing how ignoring base rates fuels the representativeness heuristic!).`,
        ],
        hint: `Compute natural frequencies first: ${hitMaj} ${pair[0]} and ${hitMin} ${pair[1]} match, totalling ${totalHits}.`,
      };
    }

    // Flashbulb memory accuracy vs confidence divergence (Talarico & Rubin, 2003)
    const weeks = rng.pick([6, 12, 24, 32]);
    const confStart = rng.int(90, 98);
    const confEnd = confStart - rng.int(2, 6);
    const accEnd = rng.int(34, 54);
    const gap = confEnd - accEnd;
    const event = rng.pick(["a major national election shock", "a sudden regional earthquake", "a historic space-launch incident"]);
    return {
      prompt: `In a longitudinal flashbulb memory replication (Talarico & Rubin, 2003) tracking **${event}**, participants report **${confStart}%** confidence on Day 1 and still report **${confEnd}%** confidence after **${weeks} weeks**, even though objective factual consistency with Day-1 diaries drops to **${accEnd}%**. Calculate the **overconfidence gap** (Week-${weeks} confidence minus Week-${weeks} factual consistency) in percentage points.`,
      answer: { type: "number", value: gap, display: `${gap}` },
      traps: [
        {
          spec: { type: "number", value: confStart - confEnd },
          feedback: `${confStart - confEnd} is only the tiny change in confidence — compare Week-${weeks} confidence (${confEnd}%) against Week-${weeks} factual consistency (${accEnd}%).`,
        },
      ],
      solution: [
        `At Week ${weeks}, confidence = ${confEnd}% while objective consistency = ${accEnd}%.`,
        `Overconfidence gap = {{${confEnd} - ${accEnd} = ${gap}}} percentage points — demonstrating that intense emotion sustains subjective certainty without shielding factual accuracy from decay.`,
      ],
      hint: `Subtract Week-${weeks} factual consistency (${accEnd}%) from Week-${weeks} confidence (${confEnd}%).`,
    };
  },
};

// ============================================================================
// DRILL 4: Sociocultural Approach — SIT, Bandura, Conformity & Acculturation
// ============================================================================
const socIdentityCulture: Drill = {
  id: "2-core-approaches.soc-identity-culture",
  topicId: "2-core-approaches",
  title: "Identity, Conformity & Berry's Acculturation",
  level: 2,
  ibLevel: "SL",
  guideRef: "sociocultural-approach",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.6)) {
        // Berry's 4 Acculturation Strategies (hundreds of unique vignettes)
        const person = rng.pick(NAMES);
        const routes = [
          ["Seoul", "Toronto"], ["Mumbai", "London"], ["Manila", "Sydney"],
          ["Tokyo", "Singapore"], ["Lagos", "Melbourne"], ["Bangkok", "Auckland"],
          ["Bogotá", "Vancouver"], ["Jakarta", "Amsterdam"],
        ];
        const [home, host] = rng.pick(routes);
        const profiles = [
          {
            text: `maintains ${home} family festivals and heritage language at home while actively joining ${host} community sports clubs and local civic groups`,
            ans: "Integration",
            accept: ["integration", "integration strategy"],
            trap: ["assimilation", "separation"],
            trapMsg: "Keeping heritage culture (Yes) AND participating in host society (Yes) defines Integration.",
            sol: "Heritage maintenance = **Yes** + Host participation = **Yes** → **Integration** (lowest acculturative stress).",
            hint: "Check Berry's 2×2 grid: Heritage = Yes, Host = Yes.",
          },
          {
            text: `deliberately abandons ${home} language and cultural customs in order to adopt ${host} workplace habits, slang, and mainstream circles exclusively`,
            ans: "Assimilation",
            accept: ["assimilation", "assimilation strategy"],
            trap: ["integration", "marginalization", "marginalisation"],
            trapMsg: "Dropping heritage culture (No) while engaging fully with host society (Yes) defines Assimilation.",
            sol: "Heritage maintenance = **No** + Host participation = **Yes** → **Assimilation**.",
            hint: "Check Berry's 2×2 grid: Heritage = No, Host = Yes.",
          },
          {
            text: `preserves ${home} cuisine, language, and close heritage friendships while avoiding ${host} social clubs, peers, and mainstream institutions`,
            ans: "Separation",
            accept: ["separation", "separation strategy"],
            trap: ["marginalization", "marginalisation", "integration"],
            trapMsg: "Keeping heritage culture (Yes) while avoiding host-society participation (No) defines Separation.",
            sol: "Heritage maintenance = **Yes** + Host participation = **No** → **Separation**.",
            hint: "Check Berry's 2×2 grid: Heritage = Yes, Host = No.",
          },
          {
            text: `feels alienated from ${home} heritage traditions yet also faces exclusion from ${host} society, leaving almost no cultural belonging in either community`,
            ans: "Marginalization",
            accept: ["marginalization", "marginalisation", "marginalization strategy", "marginalisation strategy"],
            trap: ["separation", "assimilation"],
            trapMsg: "Losing heritage ties (No) AND being disconnected from host society (No) defines Marginalization.",
            sol: "Heritage maintenance = **No** + Host participation = **No** → **Marginalization** (highest acculturative stress).",
            hint: "Check Berry's 2×2 grid: Heritage = No, Host = No.",
          },
        ];
        const p = rng.pick(profiles);
        return {
          prompt: `After relocating from **${home}** to **${host}**, ${person} ${p.text}. Name the strategy from **Berry's (1997)** acculturation model.`,
          answer: { type: "text", accept: p.accept, display: p.ans },
          traps: [{ spec: { type: "text", accept: p.trap }, feedback: p.trapMsg }],
          solution: [p.sol],
          hint: p.hint,
        };
      }
      // SIT stages & Bandura ARRM diagnostic
      const person = rng.pick(NAMES);
      const sport = rng.pick(["debating", "swimming", "robotics", "basketball", "orchestra"]);
      const stages = [
        {
          prompt: `On the first day of Year 12, ${person} automatically sorts classmates into 'our ${sport} squad' versus 'other clubs'. Which first step of **Social Identity Theory** does this sorting illustrate?`,
          accept: ["social categorization", "categorization", "categorisation", "social categorisation"],
          display: "social categorization",
          trap: ["social identification", "social comparison"],
          trapMsg: "Dividing people into 'us' (in-group) and 'them' (out-group) is the initial stage: social categorization.",
          sol: "Sorting people into in-groups and out-groups is **social categorization** (step 1 of SIT: C–I–C).",
          hint: "Step 1 of C–I–C in Tajfel & Turner's Social Identity Theory.",
        },
        {
          prompt: `After joining the ${sport} team, ${person} adopts the team's hoodie, inside jokes, and norms so the squad's reputation directly shapes ${person}'s self-concept. Name this second step of **Social Identity Theory**.`,
          accept: ["social identification", "identification"],
          display: "social identification",
          trap: ["social categorization", "social comparison"],
          trapMsg: "Internalizing in-group norms and tying self-esteem to group membership is social identification.",
          sol: "Adopting group norms and integrating group membership into self-concept is **social identification** (step 2 of SIT).",
          hint: "Step 2 of C–I–C: *identifying* with the in-group.",
        },
        {
          prompt: `To boost self-esteem and achieve **positive distinctiveness**, ${person}'s ${sport} squad constantly evaluates its trophy count favourably against rival schools. Name this third step of **Social Identity Theory**.`,
          accept: ["social comparison", "comparison"],
          display: "social comparison",
          trap: ["social categorization", "social identification"],
          trapMsg: "Measuring the in-group favourably against out-groups to achieve positive distinctiveness is social comparison.",
          sol: "Comparing the in-group against out-groups to achieve positive distinctiveness is **social comparison** (step 3 of SIT).",
          hint: "Step 3 of C–I–C: *comparing* our group against rival groups.",
        },
        {
          prompt: `In Bandura's Social Cognitive Theory, ${person} watches a ${sport} captain receive praise and applause for a new technique, which raises ${person}'s desire to copy it. Which of the four **ARRM** mediational processes does seeing that reward boost?`,
          accept: ["motivation"],
          display: "motivation",
          trap: ["attention", "retention", "reproduction"],
          trapMsg: "Vicarious reinforcement (seeing a model rewarded) drives the final ARRM process: motivation.",
          sol: "Vicarious reinforcement increases **motivation** to enact an already observed and retained behaviour (Bandura, 1965).",
          hint: "The 'M' in A–R–R–M (Attention, Retention, Reproduction, _______).",
        },
      ];
      const st = rng.pick(stages);
      return {
        prompt: st.prompt,
        answer: { type: "text", accept: st.accept, display: st.display },
        traps: [{ spec: { type: "text", accept: st.trap }, feedback: st.trapMsg }],
        solution: [st.sol],
        hint: st.hint,
      };
    }

    if (tier === 2) {
      if (rng.bool(0.6)) {
        // Asch conformity % OR Milgram obedience % exact calculation
        if (rng.bool(0.55)) {
          const n = rng.pick([10, 15, 20, 25, 30]);
          const crit = 12;
          const total = n * crit; // 120, 180, 240, 300, 360
          const pct = rng.pick([15, 20, 25, 30, 35, 40, 45, 50]);
          const conf = (pct * total) / 100;
          if (Number.isInteger(conf)) {
            const setting = rng.pick(["university psychology lab", "cross-cultural classroom study", "online peer-judgement study"]);
            return {
              prompt: `In an Asch-style **${setting}**, **${n}** naïve participants each complete **${crit}** critical line-judgement trials (**${total}** critical trials total) and conform to the wrong majority on **${conf}** trials. Calculate the overall conformity rate as a whole-number percentage.`,
              answer: { type: "number", value: pct, display: `${pct}%` },
              traps: [
                {
                  spec: { type: "number", value: conf },
                  feedback: `${conf} is the raw number of conforming trials — divide by ${total} and multiply by 100.`,
                },
              ],
              solution: [
                `Conformity rate = {{(${conf} / ${total}) * 100 = ${pct}%}}.`,
              ],
              hint: `Divide conforming trials (${conf}) by total critical trials (${total}), then multiply by 100.`,
            };
          }
        }
        // Milgram obedience %
        const n = rng.pick([20, 40, 50, 80]);
        const pct = rng.pick([10, 15, 20, 25, 30, 45, 50, 60, 65, 70]);
        const obeyed = Math.round((pct * n) / 100);
        const exactPct = clean((obeyed / n) * 100);
        const variation = rng.pick([
          "rundown office-building variation", "remote telephone-orders variation",
          "two-rebel-peers variation", "standard prestigious-university baseline",
        ]);
        return {
          prompt: `In a **${variation}** of an obedience paradigm with **${n}** participants, **${obeyed}** continue to the maximum shock switch. Calculate the full obedience rate as a percentage.`,
          answer: { type: "number", value: exactPct, display: `${exactPct}%` },
          traps: [
            {
              spec: { type: "number", value: obeyed },
              feedback: `${obeyed} is the raw count — divide by ${n} and multiply by 100.`,
            },
          ],
          solution: [
            `Obedience rate = {{(${obeyed} / ${n}) * 100 = ${exactPct}%}}.`,
          ],
          hint: `Divide compliant participants (${obeyed}) by total participants (${n}) and multiply by 100.`,
        };
      }
      // Normative vs Informational Social Influence
      const person = rng.pick(NAMES);
      const isNormative = rng.bool(0.5);
      if (isNormative) {
        const cue = rng.pick([
          "knows the printed line is obviously longer than the group's choice yet agrees aloud anyway to avoid awkward looks",
          "privately dislikes a trendy sneaker brand yet pretends to love it in front of popular peers to fit in",
          "spots an obvious arithmetic error on a group whiteboard yet stays silent so teammates will not view them as difficult",
          "laughs loudly at a joke they do not find funny purely to maintain social approval in a new club",
        ]);
        return {
          prompt: `${person} ${cue}. According to **Deutsch & Gerard (1955)**, which type of social influence — **normative** or **informational** — is primarily operating?`,
          answer: {
            type: "text",
            accept: ["normative", "normative social influence", "nsi"],
            display: "normative social influence",
          },
          traps: [
            {
              spec: { type: "text", accept: ["informational", "informational social influence", "isi"] },
              feedback: "Informational influence occurs in ambiguity when we want to be *right*; publicly agreeing despite knowing better to gain social approval is normative.",
            },
          ],
          solution: [
            "Conforming publicly despite knowing the group is wrong — driven by fear of rejection and desire for belonging — is **normative social influence (NSI)**.",
          ],
          hint: "Is the person conforming to be *liked/accepted* (normative) or to be *correct in uncertainty* (informational)?",
        };
      }
      const cue = rng.pick([
        "cannot read the local kanji signs during a fire drill in Tokyo and closely follows calm local commuters assuming they know the safe exit",
        "is genuinely unsure how to solve a tricky physics estimate and revises their private answer to match three top-scoring classmates",
        "arrives at an unfamiliar formal tea ceremony and copies elders' exact gestures believing they know the proper etiquette",
        "hears a faint ambiguous tone in a dark room and sincerely adopts the group's consensus distance estimate",
      ]);
      return {
        prompt: `${person} ${cue}. According to **Deutsch & Gerard (1955)**, which type of social influence — **normative** or **informational** — is primarily operating?`,
        answer: {
          type: "text",
          accept: ["informational", "informational social influence", "isi"],
          display: "informational social influence",
        },
        traps: [
          {
            spec: { type: "text", accept: ["normative", "normative social influence", "nsi"] },
            feedback: "Normative influence is public compliance to fit in; looking to others as a credible source of truth during ambiguity is informational.",
          },
        ],
        solution: [
          "Relying on the group for accurate knowledge in an ambiguous situation (often producing genuine private internalization) is **informational social influence (ISI)**.",
        ],
        hint: "Is the situation ambiguous where the person trusts the group to know the right answer?",
      };
    }

    // Tier 3: Weighted cross-cultural conformity mean OR Minimal Group relative-advantage difference
    if (rng.bool(0.6)) {
      // Exact integer weighted mean across Individualist + Collectivist samples
      const pairs = [
        { n1: 20, n2: 30 }, // total 50 -> diff divisible by 5
        { n1: 15, n2: 35 }, // total 50
        { n1: 10, n2: 30 }, // total 40 -> diff divisible by 4
        { n1: 20, n2: 20 }, // total 40 -> diff even
        { n1: 30, n2: 20 }, // total 50
        { n1: 12, n2: 18 }, // total 30 -> diff divisible by 5
        { n1: 16, n2: 24 }, // total 40 -> diff divisible by 5
      ];
      const { n1, n2 } = rng.pick(pairs);
      const tot = n1 + n2;
      const p1 = rng.pick([18, 22, 24, 26, 28, 30]);
      // Choose step so n2*(p2-p1) is divisible by tot
      const step = tot === 40 ? 20 : 10;
      const p2 = p1 + rng.pick([step, step + 10]);
      // Re-verify exact integer
      const numSum = n1 * p1 + n2 * p2;
      if (numSum % tot === 0) {
        const wMean = numSum / tot;
        const simpleAvg = clean((p1 + p2) / 2);
        const traps = simpleAvg !== wMean
          ? [{ spec: { type: "number" as const, value: simpleAvg }, feedback: `${simpleAvg}% is the unweighted average of ${p1}% and ${p2}% — weight each mean by its sample size (${n1} vs ${n2})!` }]
          : undefined;
        return {
          prompt: `In a cross-cultural Asch meta-analysis subset (Bond & Smith, 1996), **${n1}** participants from an individualist sample average **${p1}%** conformity, while **${n2}** participants from a collectivist sample average **${p2}%** conformity. Calculate the **combined weighted mean conformity percentage** across all ${tot} participants.`,
          answer: { type: "number", value: wMean, display: `${wMean}%` },
          traps,
          solution: [
            `Weighted sum = {{${n1} * ${p1} + ${n2} * ${p2} = ${n1 * p1} + ${n2 * p2} = ${numSum}}}.`,
            `Weighted mean = {{${numSum} / ${tot} = ${wMean}%}}.`,
          ],
          hint: `Multiply each group's mean by its participant count, add them, and divide by ${tot}.`,
        };
      }
      // Clean fallback guaranteed exact
      const pA = rng.pick([20, 24, 28]);
      const pB = pA + 20;
      const wM = (20 * pA + 30 * pB) / 50;
      return {
        prompt: `In a cross-cultural Asch subset, **20** individualist participants average **${pA}%** conformity and **30** collectivist participants average **${pB}%** conformity. Calculate the **combined weighted mean conformity percentage** across all 50 participants.`,
        answer: { type: "number", value: wM, display: `${wM}%` },
        solution: [
          `Weighted mean = {{(20 * ${pA} + 30 * ${pB}) / 50 = ${(20 * pA + 30 * pB)} / 50 = ${wM}%}}.`,
        ],
        hint: `Compute {{(20 * ${pA} + 30 * ${pB}) / 50}}.`,
      };
    }

    // Minimal Group Paradigm allocation matrix advantage vs joint profit
    const inMD = rng.int(7, 13);
    const outMD = rng.int(1, inMD - 4);
    const gap = inMD - outMD;
    const inMJP = inMD + rng.int(6, 12);
    const outMJP = inMJP + rng.int(3, 8);
    const groupPair = rng.pick(["Team Klee vs Team Kandinsky", "Over-estimators vs Under-estimators", "Blue Group vs Green Group"]);
    const sacrificed = inMJP - inMD;
    const traps = gap !== sacrificed
      ? [{ spec: { type: "number" as const, value: gap }, feedback: `${gap} is the in-group advantage *within* Choice X (${inMD} − ${outMD}) — the question asked how many points the in-group *sacrificed* compared to Choice Y (${inMJP} − ${inMD}).` }]
      : undefined;
    return {
      prompt: `In a **Minimal Group Paradigm** matrix (${groupPair}), Choice X awards **${inMD}** points to an anonymous in-group peer and **${outMD}** to an out-group peer; Choice Y awards **${inMJP}** to the in-group peer and **${outMJP}** to the out-group peer. When a participant picks **Choice X** (Maximum Difference), how many **fewer** points does their *own* in-group member receive compared with Choice Y?`,
      answer: { type: "number", value: sacrificed, display: `${sacrificed}` },
      traps,
      solution: [
        `In-group payout under Choice Y = ${inMJP}; under Choice X = ${inMD}.`,
        `Sacrificed absolute in-group profit = {{${inMJP} - ${inMD} = ${inMJP - inMD}}} points — demonstrating Tajfel et al.'s (1971) finding that social comparison prioritizes **relative superiority** (+${gap} lead) over absolute gain!`,
      ],
      hint: `Compare the in-group payout in Choice Y (${inMJP}) with the in-group payout in Choice X (${inMD}).`,
    };
  },
};

export const drills: Drill[] = [
  bioSynapseGenetics,
  cogMemorySchema,
  cogHeuristicsFraming,
  socIdentityCulture,
];
