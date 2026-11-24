import type { Drill, Rng } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const NAMES = [
  "Aisha", "Ben", "Chloe", "Daniel", "Elena",
  "Farid", "Grace", "Hana", "Ivan", "Maya",
  "Noah", "Priya", "Rohan", "Sora", "Tariq", "Zoe",
] as const;

const COURSES = [
  "IB Psychology", "IB Biology", "IB History", "IB Economics",
  "IB Chemistry", "Cognitive Science", "IB Geography", "IB Philosophy",
] as const;

function withArticle(course: string): string {
  return /^[AEIOU]|^IB\b/.test(course) ? `an ${course}` : `a ${course}`;
}

// ---------------------------------------------------------------------------
// Drill 1: Conditioning & Operant Schedules (SL, level 1)
// ---------------------------------------------------------------------------
interface ClassicalCase {
  setup: string;
  ucs: string;
  ucr: string;
  cs: string;
  cr: string;
}

const CLASSICAL_CASES: ClassicalCase[] = [
  {
    setup: "receives painful orthodontic tightenings while the clinic plays soft harp music. After five visits, hearing harp music alone makes their palms sweat and heart race",
    ucs: "the painful orthodontic tightening",
    ucr: "pain-triggered sweating and racing heart during tightening",
    cs: "the soft harp music",
    cr: "sweating and racing heart triggered by harp music alone",
  },
  {
    setup: "eats contaminated prawns at a harbour café with red-checkered tablecloths and suffers acute vomiting. Weeks later, seeing red-checkered tablecloths triggers instant nausea",
    ucs: "the contaminated prawns",
    ucr: "vomiting caused by food poisoning",
    cs: "the red-checkered tablecloth",
    cr: "nausea triggered merely by seeing red-checkered tablecloths",
  },
  {
    setup: "gets caught in a thunderstorm where a bright camera-like lightning flash immediately precedes a deafening thunderclap that makes them flinch. Soon, seeing a camera flash alone makes them flinch",
    ucs: "the deafening thunderclap",
    ucr: "flinching at the loud thunderclap",
    cs: "the bright flash of light",
    cr: "flinching at a silent camera flash",
  },
  {
    setup: "undergoes hospital chemotherapy infusions that cause intense nausea while smelling peppermint hand sanitizer. After three cycles, smelling peppermint sanitizer in the lobby triggers immediate nausea",
    ucs: "the chemotherapy infusion",
    ucr: "infusion-induced nausea",
    cs: "the peppermint hand sanitizer smell",
    cr: "lobby nausea triggered by peppermint sanitizer alone",
  },
  {
    setup: "hears a sharp brass bell one second before a harsh jet of icy water sprays their face in a swim drill, making them blink tightly. After ten trials, the brass bell alone causes tight blinking",
    ucs: "the icy water spray",
    ucr: "blinking at the icy water spray",
    cs: "the sharp brass bell",
    cr: "blinking upon hearing the brass bell alone",
  },
  {
    setup: "smells freshly baked cinnamon rolls whenever their grandmother serves warm apple pie that makes them salivate. Eventually, smelling cinnamon alone makes their mouth water",
    ucs: "the warm apple pie",
    ucr: "salivating when tasting warm apple pie",
    cs: "the cinnamon aroma",
    cr: "salivating at the scent of cinnamon alone",
  },
  {
    setup: "hears a three-note intercom chime right before strict timed pop exams that cause stomach knots. By mid-term, hearing the three-note chime on a non-exam morning triggers stomach knots",
    ucs: "the strict timed pop exam",
    ucr: "stomach knots during the timed exam",
    cs: "the three-note intercom chime",
    cr: "stomach knots triggered by the chime on a non-exam morning",
  },
  {
    setup: "is startled by an angry dog barking loudly behind a bright yellow garden gate. For months afterward, simply spotting a bright yellow gate causes their heart to pound",
    ucs: "the loud angry dog bark",
    ucr: "startled heart pounding at the sudden bark",
    cs: "the bright yellow garden gate",
    cr: "heart pounding merely at seeing a bright yellow gate",
  },
];

interface OperantCase {
  text: (name: string) => string;
  quadrant: "positive reinforcement" | "negative reinforcement" | "positive punishment" | "negative punishment";
  why: string;
}

const OPERANT_CASES: OperantCase[] = [
  {
    text: (n) => `${n} fastens their car seatbelt immediately every morning because doing so silences the loud dashboard warning chime, strengthening seatbelt use.`,
    quadrant: "negative reinforcement",
    why: "Seatbelt buckling *increases* (reinforcement) because an aversive chime is *removed* (negative).",
  },
  {
    text: (n) => `${n} takes an ibuprofen tablet whenever a tension headache starts; the headache fades quickly, making ${n} much more likely to take ibuprofen in the future.`,
    quadrant: "negative reinforcement",
    why: "Taking ibuprofen *increases* (reinforcement) because aversive pain is *removed* (negative).",
  },
  {
    text: (n) => `${n} submits lab reports two days early because early submission exempts students from Saturday remedial drills, increasing early submissions.`,
    quadrant: "negative reinforcement",
    why: "Early submission *increases* (reinforcement) because an aversive Saturday drill is *removed* (negative).",
  },
  {
    text: (n) => `${n} receives a crisp gold merit badge and praise from the coach after each personal-best sprint, increasing sprint training effort.`,
    quadrant: "positive reinforcement",
    why: "Training effort *increases* (reinforcement) because a desirable badge and praise are *added* (positive).",
  },
  {
    text: (n) => `${n} earns bonus library printing credits every time they tutor a younger classmate, raising weekly tutoring sessions.`,
    quadrant: "positive reinforcement",
    why: "Tutoring *increases* (reinforcement) because valued printing credits are *added* (positive).",
  },
  {
    text: (n) => `${n} gets enthusiastic applause from the audience whenever they add a humorous anecdote to debates, increasing their use of humour.`,
    quadrant: "positive reinforcement",
    why: "Using humour *increases* (reinforcement) because pleasant applause is *added* (positive).",
  },
  {
    text: (n) => `${n} receives a steep speeding fine after driving 20 km/h over the limit, causing ${n} to drive far more slowly afterward.`,
    quadrant: "positive punishment",
    why: "Speeding *decreases* (punishment) because an aversive fine is *added* (positive).",
  },
  {
    text: (n) => `${n} is assigned two extra laps of sprint drills after arriving late to basketball practice, sharply reducing late arrivals.`,
    quadrant: "positive punishment",
    why: "Lateness *decreases* (punishment) because extra unpleasant laps are *added* (positive).",
  },
  {
    text: (n) => `${n} hears a harsh buzzer beep whenever their posture slouches in an ergonomics chair, rapidly decreasing slouching.`,
    quadrant: "positive punishment",
    why: "Slouching *decreases* (punishment) because an aversive buzzer is *added* (positive).",
  },
  {
    text: (n) => `${n} loses weekend gaming privileges for five days after forgetting kitchen chores, decreasing missed chores.`,
    quadrant: "negative punishment",
    why: "Forgetting chores *decreases* (punishment) because a desirable privilege is *removed* (negative).",
  },
  {
    text: (n) => `${n} has points deducted from their house-cup total for talking during silent reading, reducing classroom chatter.`,
    quadrant: "negative punishment",
    why: "Chatter *decreases* (punishment) because valued house points are *removed* (negative).",
  },
  {
    text: (n) => `${n} has their student parking permit revoked for a month after blocking the school bus lane, stopping illegal parking.`,
    quadrant: "negative punishment",
    why: "Illegal parking *decreases* (punishment) because a valued permit is *removed* (negative).",
  },
];

const conditioningDrill: Drill = {
  id: "6-context-learning-cognition.conditioning-and-schedules",
  topicId: "6-context-learning-cognition",
  title: "Conditioning Variables & Operant Schedules",
  level: 1,
  ibLevel: "SL",
  guideRef: "conditioning-social-learning",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(NAMES);

    if (tier === 1) {
      const sc = rng.pick(CLASSICAL_CASES);
      const role = rng.pick(["UCS", "UCR", "CS", "CR"] as const);
      const itemMap = { UCS: sc.ucs, UCR: sc.ucr, CS: sc.cs, CR: sc.cr };
      const fullMap = {
        UCS: ["UCS", "unconditioned stimulus", "US"],
        UCR: ["UCR", "unconditioned response", "UR"],
        CS: ["CS", "conditioned stimulus"],
        CR: ["CR", "conditioned response"],
      };
      const displayMap = {
        UCS: "UCS (unconditioned stimulus)",
        UCR: "UCR (unconditioned response)",
        CS: "CS (conditioned stimulus)",
        CR: "CR (conditioned response)",
      };
      const altRole = role === "CS" ? "UCS" : role === "UCS" ? "CS" : role === "CR" ? "UCR" : "CR";
      return {
        prompt: `${name} ${sc.setup}.\n\nIn classical conditioning, which label (\`UCS\`, \`UCR\`, \`CS\`, or \`CR\`) identifies **${itemMap[role]}**?`,
        answer: { type: "text", accept: fullMap[role], display: displayMap[role] },
        traps: [
          {
            spec: { type: "text", accept: fullMap[altRole] },
            feedback: `Check whether this stimulus/response is unlearned (unconditioned) or acquired through pairing (conditioned).`,
          },
        ],
        hint: "Decide first: stimulus (trigger) or response (reaction)? Then decide: unlearned reflex (U) or learned via pairing (C)?",
        solution: [
          `Unlearned reflex: **${sc.ucs}** (UCS) → **${sc.ucr}** (UCR).`,
          `Learned association: **${sc.cs}** (CS) → **${sc.cr}** (CR).`,
          `Therefore, **${itemMap[role]}** is the **${displayMap[role]}**.`,
        ],
      };
    }

    if (tier === 2) {
      const sc = rng.pick(OPERANT_CASES);
      const frame = rng.pick([
        "Classify the exact operant conditioning quadrant (e.g., positive/negative + reinforcement/punishment).",
        "Identify the Skinnerian operant contingency illustrated here.",
        "Name the exact two-word operant conditioning quadrant shown in this scenario.",
      ]);
      const traps =
        sc.quadrant === "negative reinforcement"
          ? [
              {
                spec: { type: "text" as const, accept: ["positive punishment"] },
                feedback: "Negative reinforcement *increases* behaviour by *removing* an aversive stimulus — it is NOT punishment!",
              },
              {
                spec: { type: "text" as const, accept: ["negative punishment"] },
                feedback: "Check the direction of change: the target behaviour *increased*, so it must be reinforcement.",
              },
            ]
          : sc.quadrant === "positive punishment"
            ? [
                {
                  spec: { type: "text" as const, accept: ["negative reinforcement"] },
                  feedback: "The target behaviour *decreased* (punishment) because an aversive stimulus was *added* (positive).",
                },
              ]
            : undefined;
      return {
        prompt: `${sc.text(name)}\n\n${frame}`,
        answer: {
          type: "text",
          accept: [sc.quadrant, sc.quadrant.replace(" ", "-")],
          display: sc.quadrant.replace(/^\w/, (c) => c.toUpperCase()),
        },
        traps,
        hint: "Step 1: Did the behaviour increase (reinforcement) or decrease (punishment)? Step 2: Was a stimulus added (positive) or removed (negative)?",
        solution: [
          sc.why,
          `Correct operant quadrant: **${sc.quadrant}**.`,
        ],
      };
    }

    // Tier 3: Reinforcement schedules (FR, VR, FI, VI) with randomized parameters
    const schedType = rng.pick(["FR", "VR", "FI", "VI"] as const);
    const nCount = rng.int(4, 18);
    const tMins = rng.int(5, 30);
    const tDays = rng.int(3, 14);
    const minTry = Math.max(2, Math.floor(nCount / 2));
    const maxTry = nCount * 2 + rng.int(1, 5);
    let scenario = "";
    let why = "";
    if (schedType === "FR") {
      scenario = rng.pick([
        `${name} earns a free smoothie strictly after every **${nCount}** gym check-ins logged on a loyalty card.`,
        `A bakery pays ${name} a $15 bonus strictly after decorating every **${nCount}** wedding cakes.`,
        `A study app unlocks a new avatar strictly after ${name} completes every **${nCount}** flashcard decks.`,
      ]);
      why = `Reward depends on a fixed *count of actions* (${nCount}) → **FR (fixed-ratio)**.`;
    } else if (schedType === "VR") {
      scenario = rng.pick([
        `An arcade claw machine drops a prize for ${name} after an unpredictable number of attempts averaging **${nCount}** tries (sometimes ${minTry}, sometimes ${maxTry}).`,
        `A mobile gacha game awards ${name} a rare skin on average every **${nCount}** spins (varying unpredictably from ${minTry} to ${maxTry} spins).`,
        `A sales telemarketer like ${name} closes a commission sale on average once every **${nCount}** phone calls, though the exact call count varies unpredictably.`,
      ]);
      why = `Reward depends on an unpredictable *number of responses* averaging ${nCount} → **VR (variable-ratio)** (steepest steady rate & highest extinction resistance).`;
    } else if (schedType === "FI") {
      scenario = rng.pick([
        `${name}'s teacher administers a graded vocabulary check strictly every **${tDays}** days at 9:00 a.m., causing ${name} to study intensely right before each deadline.`,
        `A bus arrives at ${name}'s stop strictly every **${tMins}** minutes on the dot, so ${name} checks the street most frequently right as minute ${tMins} approaches.`,
        `A bakery timer unlocks fresh pastries for ${name} strictly every **${tMins}** minutes, producing a scalloped checking pattern.`,
      ]);
      why = `First response after a predictable elapsed *clock period* is reinforced → **FI (fixed-interval)** (scalloped curve).`;
    } else {
      scenario = rng.pick([
        `${name}'s supervisor drops in for unannounced quality checks averaging once every **${tDays}** days (sometimes after 2 days, sometimes after ${tDays + 6} days), encouraging steady work.`,
        `${name} refreshes an exam-results portal where grades post at unpredictable times averaging every **${tMins}** minutes.`,
        `A fishing pond rewards ${name}'s cast with a bite after unpredictable waiting periods averaging **${tMins}** minutes, keeping ${name} casting steadily.`,
      ]);
      why = `First response after an unpredictable elapsed *time interval* is reinforced → **VI (variable-interval)** (moderate steady rate).`;
    }

    const acceptMap = {
      FR: ["FR", "fixed ratio", "fixed-ratio", "fixed ratio schedule"],
      VR: ["VR", "variable ratio", "variable-ratio", "variable ratio schedule"],
      FI: ["FI", "fixed interval", "fixed-interval", "fixed interval schedule"],
      VI: ["VI", "variable interval", "variable-interval", "variable interval schedule"],
    };
    const displayMap = {
      FR: "FR (fixed-ratio)",
      VR: "VR (variable-ratio)",
      FI: "FI (fixed-interval)",
      VI: "VI (variable-interval)",
    };
    const swapTrap = schedType === "FR" ? "FI" : schedType === "FI" ? "FR" : schedType === "VR" ? "VI" : "VR";
    return {
      prompt: `${scenario}\n\nEnter the two-letter Skinnerian reinforcement schedule abbreviation (\`FR\`, \`VR\`, \`FI\`, or \`VI\`).`,
      answer: { type: "text", accept: acceptMap[schedType], display: displayMap[schedType] },
      traps: [
        {
          spec: { type: "text", accept: acceptMap[swapTrap] },
          feedback: "Check whether reinforcement depends on a *count of responses* (Ratio) or *elapsed time* (Interval).",
        },
      ],
      hint: "Ask two questions: (1) Number of actions (Ratio) or clock time (Interval)? (2) Predictable (Fixed) or unpredictable (Variable)?",
      solution: [why],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 2: Cognitive Load & Testing-Effect Calculations (SL, level 2)
// ---------------------------------------------------------------------------
interface LoadCase {
  text: (name: string, course: string) => string;
  load: "intrinsic" | "extraneous" | "germane";
  why: string;
}

const LOAD_CASES: LoadCase[] = [
  {
    text: (n, c) => `${n} studies ${withArticle(c)} slideshow where decorative spinning icons flash while the presenter reads dense paragraphs that contradict the slide bullets.`,
    load: "extraneous",
    why: "Decorative clutter and contradictory narration reflect poor instructional design → **extraneous load**.",
  },
  {
    text: (n, c) => `${n} flips back and forth between page 3 (diagram) and page 6 (labels) in ${withArticle(c)} booklet, losing track of how variables connect.`,
    load: "extraneous",
    why: "Split-attention layout wastes working-memory bandwidth → **extraneous load**.",
  },
  {
    text: (n, c) => `${n} revises ${c} notes while glancing at buzzing group-chat notifications every 90 seconds.`,
    load: "extraneous",
    why: "Irrelevant phone distractions consume working memory without aiding schema building → **extraneous load**.",
  },
  {
    text: (n, c) => `${n} works through a clean, uncluttered ${c} problem involving six simultaneously interacting variables that novices must juggle together.`,
    load: "intrinsic",
    why: "High element interactivity built into the subject matter itself produces **intrinsic load**.",
  },
  {
    text: (n, c) => `${n} tackles an inherently complex ${c} multi-stage mechanism whose many interdependent parts cannot be understood in isolation.`,
    load: "intrinsic",
    why: "Inherent conceptual complexity of the material defines **intrinsic load**.",
  },
  {
    text: (n, c) => `${n} actively compares two solved ${c} case studies and draws a concept map linking new principles to prior long-term schemas.`,
    load: "germane",
    why: "Productive mental effort dedicated to integrating concepts into long-term schemas is **germane load**.",
  },
  {
    text: (n, c) => `${n} self-explains why each step works on an uncluttered ${c} worked example to consolidate durable schemas.`,
    load: "germane",
    why: "Effortful schema construction and automation represents **germane load**.",
  },
];

const cognitiveLoadDrill: Drill = {
  id: "6-context-learning-cognition.cognitive-load-testing-effect",
  topicId: "6-context-learning-cognition",
  title: "Cognitive Load & Testing-Effect Gains",
  level: 2,
  ibLevel: "SL",
  guideRef: "neurobiology-memory-cognitive-load",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(NAMES);
    const course = rng.pick(COURSES);

    if (tier === 1) {
      if (rng.bool(0.55)) {
        const sc = rng.pick(LOAD_CASES);
        return {
          prompt: `${sc.text(name, course)}\n\nAccording to Sweller's Cognitive Load Theory, which specific type of load (\`intrinsic\`, \`extraneous\`, or \`germane\`) is primarily illustrated?`,
          answer: {
            type: "text",
            accept: [sc.load, `${sc.load} load`, `${sc.load} cognitive load`],
            display: `${sc.load.replace(/^\w/, (c) => c.toUpperCase())} load`,
          },
          hint: "Intrinsic = inherent task complexity; Extraneous = poor design/distraction; Germane = schema building.",
          solution: [sc.why],
        };
      }
      const wmCap = rng.int(8, 12);
      const intrinsic = rng.int(3, 5);
      const extraneous = rng.int(1, wmCap - intrinsic - 1);
      const germane = wmCap - intrinsic - extraneous;
      return {
        prompt: `In a Sweller working-memory model for ${name}'s ${course} lesson, working-memory capacity is **${wmCap} units**, intrinsic load is **${intrinsic} units**, and extraneous load is **${extraneous} units**. How many units of capacity remain available for **germane** schema building?`,
        answer: { type: "number", value: germane, display: `${germane}` },
        hint: "Use Total Load = Intrinsic + Extraneous + Germane ≤ WM Capacity.",
        solution: [
          `Used before germane processing = {{${intrinsic} + ${extraneous} = ${intrinsic + extraneous}}} units.`,
          `Remaining germane headroom = {{${wmCap} - ${intrinsic + extraneous} = ${germane}}} units.`,
        ],
      };
    }

    if (tier === 2) {
      const total = rng.pick([20, 25, 40, 50] as const);
      const step = total === 20 ? 5 : total === 25 ? 4 : total === 40 ? 2.5 : 2;
      const studyItems = rng.int(Math.ceil(total * 0.25), Math.floor(total * 0.52));
      const testItems = rng.int(studyItems + Math.ceil(total * 0.12), Math.floor(total * 0.88));
      const studyPct = clean(studyItems * step);
      const testPct = clean(testItems * step);
      const ppDiff = clean(testPct - studyPct);
      if (rng.bool(0.5)) {
        return {
          prompt: `In ${withArticle(course)} replication of Roediger & Karpicke (2006), ${name}'s retrieval-practice class recalled a mean of **${testItems} out of ${total}** key concepts one week later. Express this delayed recall score as a percentage (enter the number only).`,
          answer: { type: "number", value: testPct, display: `${testPct}%` },
          hint: "Divide concepts recalled by total concepts and multiply by 100.",
          solution: [
            `Delayed recall = {{${testItems}/${total} * 100 = ${testPct}%}}.`,
          ],
        };
      }
      return {
        prompt: `One week after ${withArticle(course)} lesson, the repeated-reading group recalled **${studyItems}/${total}** (${studyPct}%) while the retrieval-practice group recalled **${testItems}/${total}** (${testPct}%). Calculate the **absolute percentage-point gain** (enter the number only).`,
        answer: { type: "number", value: ppDiff, display: `${ppDiff}` },
        hint: "Subtract the repeated-reading percentage from the retrieval-practice percentage.",
        solution: [
          `Absolute percentage-point gain = {{${testPct} - ${studyPct} = ${ppDiff}}} percentage points.`,
        ],
      };
    }

    // Tier 3: Relative percentage gain (exact integer or 0.5)
    const pairs: Array<[number, number]> = [
      [20, 25], [20, 30], [20, 40], [20, 50], [20, 60], [20, 75], [20, 80],
      [25, 20], [25, 40], [25, 48], [25, 60], [25, 80],
      [30, 20], [30, 30], [30, 40], [30, 50], [30, 60], [30, 70],
      [32, 25], [32, 50], [32, 75],
      [40, 20], [40, 25], [40, 30], [40, 35], [40, 40], [40, 45], [40, 50], [40, 55], [40, 60], [40, 65],
      [45, 20], [45, 40], [45, 60],
      [50, 20], [50, 24], [50, 30], [50, 36], [50, 40], [50, 44], [50, 50], [50, 60],
    ];
    const [base, relGain] = rng.pick(pairs);
    const diff = clean((base * relGain) / 100);
    const tested = clean(base + diff);
    const delay = rng.pick(["5-day", "1-week", "10-day", "2-week"] as const);
    return {
      prompt: `On a ${delay} delayed ${course} test, students using massed rereading averaged **${base}%**, whereas students using spaced retrieval practice averaged **${tested}%**. Calculate the **relative percentage improvement** of retrieval practice over rereading (enter a whole number).`,
      answer: { type: "number", value: relGain, display: `${relGain}%` },
      traps: [
        {
          spec: { type: "number", value: diff },
          feedback: `${diff} is the absolute percentage-point gain (${tested} − ${base}). Divide ${diff} by the baseline (${base}) and multiply by 100 for the relative percentage gain!`,
        },
      ],
      hint: "Relative % improvement = ((Retrieval − Rereading) ÷ Rereading) × 100.",
      solution: [
        `Absolute gain = {{${tested} - ${base} = ${diff}}} percentage points.`,
        `Relative percentage improvement = {{${diff}/${base} * 100 = ${relGain}%}}.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 3: Eyewitness Distortion & Forensic Interviewing (SL, level 3)
// ---------------------------------------------------------------------------
interface EyewitnessCase {
  text: (name: string, place: string) => string;
  accept: string[];
  display: string;
  why: string;
}

const PLACES = [
  "a city tram stop", "a late-night petrol station", "a crowded subway exit",
  "a neighbourhood pharmacy", "a busy downtown intersection", "a quiet corner café",
] as const;

const EYEWITNESS_CASES: EyewitnessCase[] = [
  {
    text: (n, p) => `Before taking a statement about a theft at ${p}, an interviewer asks ${n} to close their eyes and picture the weather, lighting, street sounds, and emotions felt during the incident.`,
    accept: ["context reinstatement", "mental reinstatement of context", "reinstate context"],
    display: "Context reinstatement",
    why: "Recreating physical and emotional encoding cues applies **mental reinstatement of context** (encoding specificity).",
  },
  {
    text: (n, p) => `Interviewing ${n} after a hit-and-run near ${p}, the detective urges ${n} to share every tiny fragment — even partial impressions that seem unimportant — without filtering.`,
    accept: ["report everything", "reporting everything"],
    display: "Report everything",
    why: "Lowering the self-censoring threshold so small cues unlock larger memories is the **report everything** pillar.",
  },
  {
    text: (n, p) => `To prevent schema-driven script filling after a robbery at ${p}, the detective asks ${n} to narrate the event backward from the getaway to the moment the suspect entered.`,
    accept: ["reverse order", "recall in reverse order", "varied order", "change order"],
    display: "Reverse order",
    why: "Narrating backward disrupts chronological event schemas — the **reverse order** Cognitive Interview pillar.",
  },
  {
    text: (n, p) => `After ${n} recounts an assault at ${p} from their own doorway, the officer asks ${n} to describe what the bus driver parked across the street would have seen.`,
    accept: ["change perspective", "changing perspective", "changed perspective"],
    display: "Change perspective",
    why: "Retelling from another bystander's viewpoint applies **change perspective**.",
  },
  {
    text: (n, p) => `During an armed hold-up at ${p}, ${n} stares continuously at the intruder's gleaming knife and later fails to recognize the intruder's face in a photo lineup.`,
    accept: ["weapon focus", "weapon focus effect", "the weapon focus effect"],
    display: "Weapon focus effect",
    why: "Threatening weapons narrow visual fixations away from peripheral facial features (**weapon focus effect**, Loftus et al., 1987).",
  },
  {
    text: (n, p) => `After witnessing a snatch theft at ${p}, ${n} accurately picks out suspects from their own racial group but makes far more false-alarm identifications for suspects of a different racial group.`,
    accept: ["own-race bias", "own race bias", "cross-race effect", "cross race effect", "other-race effect"],
    display: "Own-race bias (cross-race effect)",
    why: "Higher false alarms for out-group faces reflect **own-race bias** (Meissner & Brigham, 2001).",
  },
  {
    text: (n, p) => `After witnessing a minor fender-bender at ${p}, ${n} hears an investigator ask how fast the van went when it 'smashed' into the cyclist, and a week later vividly recalls broken headlights that never existed.`,
    accept: ["misinformation effect", "post-event misinformation", "post-event misinformation effect", "leading questions"],
    display: "Post-event misinformation effect",
    why: "Leading post-event wording blends into reconstructive memory (**post-event misinformation effect**, Loftus & Palmer, 1974).",
  },
];

const VERB_PAIRS: Array<[string, string]> = [
  ["smashed", "contacted"],
  ["rammed", "bumped"],
  ["shattered", "touched"],
  ["slammed", "hit"],
  ["crashed", "grazed"],
  ["struck", "nudged"],
];

const eyewitnessDrill: Drill = {
  id: "6-context-learning-cognition.eyewitness-distortion-metrics",
  topicId: "6-context-learning-cognition",
  title: "Eyewitness Reliability & False-Memory Rates",
  level: 3,
  ibLevel: "SL",
  guideRef: "eyewitness-memory-reliability",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(NAMES);
    const place = rng.pick(PLACES);

    if (tier === 1) {
      const sc = rng.pick(EYEWITNESS_CASES);
      return {
        prompt: `${sc.text(name, place)}\n\nName the specific Cognitive Interview pillar or eyewitness distortion phenomenon shown.`,
        answer: { type: "text", accept: sc.accept, display: sc.display },
        hint: "Check whether this is a Cognitive Interview technique (C-R-R-C) or an encoding/retrieval distortion (weapon focus, own-race bias, misinformation effect).",
        solution: [sc.why],
      };
    }

    if (tier === 2) {
      const total = rng.pick([20, 25, 40, 50, 80, 100] as const);
      const minK = Math.max(3, Math.floor(total * 0.12));
      const maxK = Math.floor(total * 0.48);
      const k = rng.int(minK, maxK);
      const rate = roundTo((k / total) * 100, 1);
      const detail = rng.pick([
        "nonexistent broken glass",
        "being lost in a shopping mall as a child",
        "a stop sign that was actually a yield sign",
        "a shattered rear windshield",
        "a nonexistent red backpack",
      ]);
      return {
        prompt: `In a false-memory experiment led by ${name}, **${k} out of ${total}** adult witnesses falsely endorsed **${detail}**. Calculate the false-memory endorsement rate in percent (give exact value, to 1 d.p. if needed).`,
        answer: { type: "number", value: rate, tolerance: 0.05, display: `${rate}%` },
        hint: "Use False-Memory Rate (%) = (false endorsers ÷ total sample) × 100.",
        solution: [
          `False-memory rate = {{${k}/${total} * 100 = ${rate}%}}.`,
        ],
      };
    }

    // Tier 3: Relative Risk Ratio (Rate_leading / Rate_control)
    const pairs: Array<[number, number]> = [
      [8, 2], [8, 2.5], [8, 3], [8, 3.5], [8, 4],
      [10, 1.5], [10, 2], [10, 2.5], [10, 3], [10, 3.5], [10, 4],
      [12, 1.5], [12, 2], [12, 2.5], [12, 3], [12, 3.5],
      [14, 1.5], [14, 2], [14, 2.5], [14, 3],
      [15, 2], [15, 3], [15, 4],
      [16, 1.5], [16, 2], [16, 2.5], [16, 3],
      [18, 1.5], [18, 2], [18, 2.5], [18, 3],
      [20, 1.5], [20, 2], [20, 2.5], [20, 3],
    ];
    const [ctrl, rr] = rng.pick(pairs);
    const lead = clean(ctrl * rr);
    const [vLead, vCtrl] = rng.pick(VERB_PAIRS);
    const ppDiff = clean(lead - ctrl);
    return {
      prompt: `In a Loftus & Palmer-style study run by ${name}, **${lead}%** of witnesses hearing the verb *'${vLead}'* falsely reported broken glass versus **${ctrl}%** hearing *'${vCtrl}'*. Calculate the **relative risk ratio** (leading rate ÷ control rate).`,
      answer: { type: "number", value: rr, tolerance: 0.01, display: `${rr}` },
      traps: [
        {
          spec: { type: "number", value: ppDiff },
          feedback: `${ppDiff} is the percentage-point difference (${lead} − ${ctrl}). Divide ${lead} by ${ctrl} for the relative risk ratio!`,
        },
      ],
      hint: "Relative Risk Ratio = (Leading-verb false rate) ÷ (Control false rate).",
      solution: [
        `Relative risk ratio = {{${lead} / ${ctrl} = ${rr}}} (leading-verb witnesses were ${rr}× as likely to report nonexistent glass).`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 4: Executive Function & Problem-Solving Barriers (SL, level 1)
// ---------------------------------------------------------------------------
interface ExecCase {
  text: (name: string) => string;
  accept: string[];
  display: string;
  why: string;
}

const EXEC_CASES: ExecCase[] = [
  {
    text: (n) => `${n} must name the ink colour of the word 'BLUE' printed in red ink while suppressing the deeply automated urge to read the printed word aloud.`,
    accept: ["inhibitory control", "inhibition", "response inhibition"],
    display: "Inhibitory control",
    why: "Suppressing a prepotent automatic impulse on the Stroop task operationalizes **inhibitory control** (Miyake et al., 2000).",
  },
  {
    text: (n) => `During a computerized Go/No-Go trial, ${n} rapidly taps for green circles but must withhold pressing whenever a rare red triangle flashes.`,
    accept: ["inhibitory control", "inhibition", "response inhibition"],
    display: "Inhibitory control",
    why: "Halting an automatic motor response on No-Go signals tests prefrontal **inhibitory control**.",
  },
  {
    text: (n) => `On the Wisconsin Card Sorting Test, the hidden rule silently shifts from 'shape' to 'number', and ${n} swiftly abandons the old rule to match the new sorting criterion.`,
    accept: ["cognitive flexibility", "set-shifting", "set shifting", "flexibility", "shifting"],
    display: "Cognitive flexibility (set-shifting)",
    why: "Switching smoothly between changing task rules on the WCST measures **cognitive flexibility (set-shifting)**.",
  },
  {
    text: (n) => `In a bilingual task-switching study, ${n} alternates rapidly between sorting items by size on blue backgrounds and by animacy on yellow backgrounds without perseverative errors.`,
    accept: ["cognitive flexibility", "set-shifting", "set shifting", "flexibility", "shifting"],
    display: "Cognitive flexibility (set-shifting)",
    why: "Shifting smoothly between alternating mental rule sets tests **cognitive flexibility**.",
  },
  {
    text: (n) => `During a 3-back letter stream, ${n} continuously discards letters from four steps ago while actively tracking and refreshing the newest three letters online.`,
    accept: ["working-memory updating", "working memory updating", "updating", "wm updating"],
    display: "Working-memory updating",
    why: "Continuously monitoring and replacing outdated active items on an n-back task measures **working-memory updating**.",
  },
  {
    text: (n) => `Unable to find a hammer while hanging a picture frame, ${n} wastes ten minutes searching instead of realizing their heavy metal stapler could tap the tiny nail cleanly.`,
    accept: ["functional fixedness"],
    display: "Functional fixedness",
    why: "Fixating on an object's customary role (*stapler = paper fastener*) instead of a novel physical affordance is **functional fixedness** (Duncker, 1945).",
  },
  {
    text: (n) => `After solving six algebra exercises using a lengthy quadratic formula, ${n} mechanically applies the full quadratic formula to x² = 16 instead of taking the instant square root.`,
    accept: ["mental set", "einstellung", "mental set (einstellung)", "einstellung effect"],
    display: "Mental set (Einstellung)",
    why: "Blindly repeating a familiar multi-step procedure over an obvious shortcut illustrates **mental set (Einstellung)** (Luchins, 1942).",
  },
  {
    text: (n) => `To recover a forgotten 4-digit padlock code, ${n} methodically tests every combination from 0000 to 9999 in order until the lock guaranteedly opens.`,
    accept: ["algorithm", "an algorithm"],
    display: "Algorithm",
    why: "An exhaustive step-by-step rule guaranteed to find the answer is an **algorithm**.",
  },
  {
    text: (n) => `When troubleshooting a frozen laptop right before class, ${n} immediately tries restarting first because that quick rule of thumb resolves most crashes in seconds.`,
    accept: ["heuristic", "a heuristic"],
    display: "Heuristic",
    why: "A fast, low-load mental shortcut that usually works without guaranteeing certainty is a **heuristic**.",
  },
];

const STROOP_CONTEXTS = [
  "in a quiet university lab",
  "under chronic classroom traffic noise",
  "after a night of sleep restriction",
  "under timed stereotype-threat framing",
  "during a baseline cognitive-control assessment",
  "while suppressing nearby phone alerts",
] as const;

const executiveDrill: Drill = {
  id: "6-context-learning-cognition.executive-function-problem-solving",
  topicId: "6-context-learning-cognition",
  title: "Executive Function, Problem Solving & Stroop Metrics",
  level: 1,
  ibLevel: "SL",
  guideRef: "problem-solving-environmental-cognition",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const name = rng.pick(NAMES);

    if (tier === 1) {
      const sc = rng.pick(EXEC_CASES);
      const qFrame = rng.pick([
        "Identify the executive-function component or problem-solving concept illustrated.",
        "Name the exact Miyake executive function or problem-solving concept shown here.",
        "Which cognitive psychology term best classifies this scenario?",
      ]);
      return {
        prompt: `${sc.text(name)}\n\n${qFrame}`,
        answer: { type: "text", accept: sc.accept, display: sc.display },
        hint: "Choose from Miyake's EF triad (inhibitory control, cognitive flexibility, working-memory updating) or problem-solving concepts (functional fixedness, mental set, algorithm, heuristic).",
        solution: [sc.why],
      };
    }

    if (tier === 2) {
      const ctx = rng.pick(STROOP_CONTEXTS);
      const cong = rng.int(42, 66) * 10;
      const diff = rng.int(17, 53) * 5;
      const incong = cong + diff;
      return {
        prompt: `Tested ${ctx}, ${name} records a mean congruent Stroop latency of **${cong} ms** and an incongruent latency of **${incong} ms**. Calculate ${name}'s **Stroop interference effect** in milliseconds (enter a whole number).`,
        answer: { type: "number", value: diff, display: `${diff} ms` },
        hint: "Stroop interference = RT_incongruent − RT_congruent.",
        solution: [
          `Stroop interference = {{${incong} - ${cong} = ${diff}}} ms.`,
        ],
      };
    }

    // Tier 3: Stroop percentage slowdown (exact integer)
    const ctx = rng.pick(STROOP_CONTEXTS);
    const pairs: Array<[number, number]> = [
      [400, 15], [400, 20], [400, 25], [400, 30], [400, 35], [400, 40], [400, 45],
      [450, 20], [450, 30], [450, 40],
      [500, 14], [500, 18], [500, 22], [500, 26], [500, 30], [500, 34], [500, 38], [500, 42],
      [520, 25], [520, 35], [520, 45],
      [550, 20], [550, 30], [550, 40],
      [600, 15], [600, 20], [600, 25], [600, 30], [600, 35], [600, 40],
      [640, 25], [640, 35],
      [650, 20], [650, 30], [650, 40],
    ];
    const [cong, pct] = rng.pick(pairs);
    const diff = clean((cong * pct) / 100);
    const incong = cong + diff;
    return {
      prompt: `Completing a Stroop task ${ctx}, ${name} averages **${cong} ms** on congruent trials and **${incong} ms** on incongruent trials. Calculate ${name}'s **percentage slowdown** relative to congruent speed (enter a whole number).`,
      answer: { type: "number", value: pct, display: `${pct}%` },
      traps: [
        {
          spec: { type: "number", value: diff },
          feedback: `${diff} ms is the raw latency gap. Divide ${diff} by the congruent baseline (${cong} ms) and multiply by 100 for percentage slowdown!`,
        },
      ],
      hint: "Percentage slowdown = ((RT_incongruent − RT_congruent) ÷ RT_congruent) × 100.",
      solution: [
        `Interference = {{${incong} - ${cong} = ${diff}}} ms.`,
        `Percentage slowdown = {{${diff}/${cong} * 100 = ${pct}%}}.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  conditioningDrill,
  cognitiveLoadDrill,
  eyewitnessDrill,
  executiveDrill,
];
