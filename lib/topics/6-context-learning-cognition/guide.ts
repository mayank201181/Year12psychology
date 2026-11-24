import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "6-context-learning-cognition",
  title: "Topic 6: Context 4 — Learning and Cognition",
  strand: "Contexts II: Relationships & Learning",
  icon: "📚",
  level: "SL",
  summary:
    "How organisms acquire behaviour, consolidate synaptic memories under working-memory limits, reconstruct fallible recollections, and solve problems across biological, cognitive, and sociocultural contexts.",
  intro:
    "In **IB Psychology FA2027 Compulsory Context 4: Learning and Cognition**, learning is never reduced to one level of analysis. A single classroom or courtroom moment simultaneously involves **Biological** mechanisms (synaptic Long-Term Potentiation, stress hormones, biological preparedness), **Cognitive** architecture (working-memory cognitive load, retrieval practice, reconstructive schemas, executive function), and **Sociocultural** contexts (observational models, cross-race perceptual familiarity, socioeconomic resources, stereotype threat, and bilingual environments). Throughout this context, anchor every claim in the **6 FA2027 Core Concepts**: **Bias**, **Causality**, **Change**, **Measurement**, **Perspective**, and **Responsibility**.",

  guide: [
    // =========================================================================
    // SECTION 1: conditioning-social-learning
    // =========================================================================
    {
      id: "conditioning-social-learning",
      heading: "Acquisition of Behaviour: Classical, Operant & Observational Learning",
      level: "SL",
      discovery: {
        problem:
          "Before reading the theory, consider two everyday puzzles:\n\n1. A Year 12 student feels a sudden knot in their stomach the instant they hear the three-note chime of the school exam hall — even when walking past the hall on a non-exam Tuesday.\n2. Players tap a loot-box mobile game far more persistently when rare rewards drop *unpredictably* (averaging every 10 taps) than when a reward is guaranteed on *every* 10th tap.\n\n**Pause and predict:** What different learning mechanism drives each puzzle, and what happens if the exam chime plays 20 times with no exam, or the loot-box stops paying out altogether?",
        idea:
          "Puzzle 1 is **classical conditioning**: an involuntary physiological response (anxiety) became paired with a previously neutral cue (the chime). Repeated chime-only exposure triggers **extinction**, though the knot can briefly reappear days later (**spontaneous recovery**). Puzzle 2 is **operant conditioning** under a **variable-ratio (VR)** schedule: voluntary tapping is strengthened by unpredictable rewards, creating the highest response rate and the greatest resistance to extinction — because the learner never knows whether the *next* tap will pay off.",
      },
      body: `Psychologists explain behavioural **Change** through three complementary acquisition frameworks that progressively expand from pure stimulus–response associations to cognitive mediation and social **Perspective**.

### 1. Classical Conditioning (Pavlov, 1927)
Classical conditioning pairs an initially neutral stimulus with a biologically potent stimulus until the neutral cue elicits a learned, typically involuntary response:
- **Unconditioned Stimulus (UCS):** Naturally triggers a reflex without prior learning (e.g., food powder; loud steel-bar bang; chemotherapy drug).
- **Unconditioned Response (UCR):** Unlearned reflex triggered by the UCS (e.g., salivation; startle/fear; nausea).
- **Neutral Stimulus (NS):** Initially produces no target response (e.g., metronome tone; white rat; clinic waiting-room smell).
- **Conditioned Stimulus (CS):** The former NS after repeated pairing with the UCS, now capable of triggering the learned response alone.
- **Conditioned Response (CR):** Learned response elicited by the CS (similar to the UCR, though often weaker or anticipatory).

Key temporal dynamics illustrate behavioural **Change**:
- **Acquisition:** Strength of the CR climbs rapidly across early CS → UCS pairings (forward conditioning works best because the CS predicts the UCS).
- **Extinction:** Repeated presentation of the CS *without* the UCS suppresses the CR (new inhibitory learning rather than total erasure).
- **Spontaneous recovery:** After a rest pause following extinction, presenting the CS alone briefly revives a weakened CR.
- **Stimulus generalization** occurs when stimuli similar to the CS (e.g., any fluffy white object) also elicit the CR; **stimulus discrimination** occurs when the organism learns to respond only to the specific CS.

**Ethics & Biological Boundaries:** Watson & Rayner (1920) conditioned 9-month-old **"Little Albert"** to fear a white rat (NS) by clanging a steel bar (UCS) behind his head, observing generalization to a rabbit and fur coat. From an FA2027 **Responsibility** lens, the study violated protection from psychological harm, right to withdraw, and debriefing/deconditioning; from a **Measurement** lens, it was a single-case observation vulnerable to experimenter bias. Moreover, classical conditioning is not infinitely flexible: **Garcia & Koelling (1966)** showed that rats rapidly learned **conditioned taste aversion** (linking sweetened water to radiation-induced nausea hours later) but failed to link flashing lights/noise to nausea, supporting Seligman's **biological preparedness** (evolutionary constraints from a Biological **Perspective**).

### 2. Operant Conditioning (Skinner, 1938)
Building on Thorndike's **Law of Effect** (behaviours followed by satisfying consequences strengthen), Skinner showed that *voluntary* behaviours are shaped by their consequences:

| Operant Quadrant | Stimulus Operation | Effect on Behaviour Frequency | Concrete Example |
|---|---|---|---|
| **Positive reinforcement** | Add pleasant/appetitive stimulus | **Increases** behaviour | Earning praise or tokens after finishing flashcards |
| **Negative reinforcement** | Remove aversive/unpleasant stimulus | **Increases** behaviour | Buckling a seatbelt to silence a piercing car alarm |
| **Positive punishment** | Add aversive/unpleasant stimulus | **Decreases** behaviour | Receiving a speeding fine after exceeding the limit |
| **Negative punishment** | Remove pleasant/valued stimulus | **Decreases** behaviour | Losing phone privileges after missing curfew |

Complex new skills (e.g., a pigeon turning in a figure-eight or a child writing letters) are built via **shaping** — reinforcing successive approximations toward the target behaviour. Once acquired, behaviour persistence depends critically on the **schedule of reinforcement**:
- **Fixed Ratio (FR):** Reward after a fixed *number* of responses (e.g., FR-10 = bonus after every 10 sales) → high rate with a brief **post-reinforcement pause**.
- **Variable Ratio (VR):** Reward after an unpredictable *number* of responses around an average (e.g., slot machines, gacha apps) → **highest, steadiest response rate** and **strongest resistance to extinction**.
- **Fixed Interval (FI):** Reward for the first response after a fixed *time* elapses (e.g., weekly quiz every Friday) → characteristic **scalloped curve** (low activity right after reward, frantic surge before deadline).
- **Variable Interval (VI):** Reward for the first response after unpredictable *time* intervals (e.g., unannounced pop quizzes, checking email) → moderate, steady responding with solid extinction resistance.

*(HL Extension Bridge — Motivation & Technology)*: Deci & Ryan's Self-Determination Theory warns that adding tangible extrinsic rewards to an already enjoyable activity can trigger the **overjustification effect** (Lepper et al., 1973), reducing intrinsic motivation once rewards cease — demonstrating why operant reinforcement requires cognitive and motivational **Perspective**.

### 3. Observational Learning & Mirror Neurons (Sociocultural–Biological Bridge)
**Bandura, Ross & Ross (1961)** demonstrated in the **Bobo doll experiment** that children imitate aggressive adult models *without* direct reinforcement, and **Bandura et al. (1963)** showed **vicarious reinforcement** (imitation rose when the model was rewarded and dropped when punished). Bandura's Social Cognitive Theory bridges behaviourism and cognition through four internal mediational steps — **Attention, Retention, Reproduction, and Motivation (ARRM)** — plus **self-efficacy**.

Biologically, **Rizzolatti et al. (1996)** discovered **mirror neurons** in macaque ventral premotor cortex (F5) that fired both when a monkey grasped food and when it watched an experimenter grasp food; human fMRI reveals an analogous fronto-parietal mirror network (Iacoboni). Yet FA2027 **Causality** and **Measurement** rigor demand caution: fMRI voxels average millions of neurons, and generalizing directly from macaque motor cells to complex human cultural learning risks biological reductionism.`,
      diagram: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pavlovian conditioning stages and Skinner operant reinforcement schedules cumulative response curves">
  <rect x="0" y="0" width="640" height="320" rx="12" fill="#ffffff"/>
  <!-- Panel A: Classical Conditioning -->
  <rect x="12" y="12" width="296" height="296" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="160" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">A. Classical Conditioning (Pavlov)</text>

  <!-- Stage 1 -->
  <text x="24" y="58" font-size="10.5" font-weight="700" fill="#6d28d9">1. Before Conditioning</text>
  <rect x="24" y="66" width="84" height="30" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.2"/>
  <text x="66" y="85" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1c1630">UCS (Food)</text>
  <line x1="112" y1="81" x2="148" y2="81" stroke="#4b5563" stroke-width="1.8"/>
  <polygon points="148,77 156,81 148,85" fill="#4b5563"/>
  <rect x="160" y="66" width="134" height="30" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.2"/>
  <text x="227" y="85" text-anchor="middle" font-size="10.5" font-weight="700" fill="#14532d">UCR (Salivation)</text>

  <rect x="24" y="102" width="84" height="28" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.2"/>
  <text x="66" y="120" text-anchor="middle" font-size="10.5" font-weight="700" fill="#374151">NS (Tone)</text>
  <line x1="112" y1="116" x2="148" y2="116" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 3"/>
  <polygon points="148,112 156,116 148,120" fill="#9ca3af"/>
  <rect x="160" y="102" width="134" height="28" rx="6" fill="#f9fafb" stroke="#d1d5db" stroke-width="1.2"/>
  <text x="227" y="120" text-anchor="middle" font-size="10" fill="#6b7280">No target reflex</text>

  <!-- Stage 2 -->
  <text x="24" y="152" font-size="10.5" font-weight="700" fill="#6d28d9">2. Acquisition (Repeated Pairing)</text>
  <rect x="24" y="160" width="128" height="32" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.3"/>
  <text x="88" y="180" text-anchor="middle" font-size="10.5" font-weight="700" fill="#78350f">NS (Tone) + UCS</text>
  <line x1="156" y1="176" x2="180" y2="176" stroke="#d97706" stroke-width="1.8"/>
  <polygon points="180,172 188,176 180,180" fill="#d97706"/>
  <rect x="192" y="160" width="102" height="32" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.2"/>
  <text x="243" y="180" text-anchor="middle" font-size="10.5" font-weight="700" fill="#14532d">UCR (Reflex)</text>

  <!-- Stage 3 -->
  <text x="24" y="214" font-size="10.5" font-weight="700" fill="#6d28d9">3. After Conditioning</text>
  <rect x="24" y="222" width="104" height="32" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>
  <text x="76" y="242" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0c4a6e">CS (Tone alone)</text>
  <line x1="132" y1="238" x2="162" y2="238" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="162,234 170,238 162,242" fill="#0369a1"/>
  <rect x="174" y="222" width="120" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.4"/>
  <text x="234" y="242" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e3a8a">CR (Salivation)</text>

  <rect x="24" y="266" width="270" height="30" rx="6" fill="#fff7ed" stroke="#fb923c" stroke-width="1"/>
  <text x="159" y="285" text-anchor="middle" font-size="9.5" font-weight="600" fill="#9a3412">CS alone repeatedly → Extinction; rest → Spontaneous Recovery</text>

  <!-- Panel B: Operant Cumulative Response Curves -->
  <rect x="320" y="12" width="308" height="296" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="474" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">B. Operant Schedules (Cumulative Record)</text>

  <!-- Axes -->
  <line x1="360" y1="224" x2="608" y2="224" stroke="#374151" stroke-width="1.6"/>
  <line x1="360" y1="224" x2="360" y2="54" stroke="#374151" stroke-width="1.6"/>
  <text x="484" y="242" text-anchor="middle" font-size="10" font-weight="700" fill="#4b5563">Time →</text>
  <text x="340" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#4b5563" transform="rotate(-90 340 140)">Cumulative Responses</text>

  <!-- VR: steepest straight line -->
  <polyline points="360,224 415,175 468,128 525,78 552,56" fill="none" stroke="#7c3aed" stroke-width="2.6"/>
  <text x="556" y="61" font-size="10" font-weight="800" fill="#7c3aed">VR (steepest)</text>

  <!-- FR: steep steps with post-reinforcement pause -->
  <polyline points="360,224 396,184 414,184 450,144 468,144 504,104 522,104 556,74" fill="none" stroke="#0d9488" stroke-width="2.4"/>
  <text x="560" y="82" font-size="10" font-weight="800" fill="#0d9488">FR (pauses)</text>

  <!-- VI: steady moderate slope -->
  <polyline points="360,224 420,196 480,168 540,140 594,116" fill="none" stroke="#2563eb" stroke-width="2.3"/>
  <text x="568" y="110" font-size="10" font-weight="800" fill="#2563eb">VI (steady)</text>

  <!-- FI: classic scalloped curve -->
  <path d="M 360 224 Q 400 223 418 196 Q 456 195 476 168 Q 516 167 536 142 Q 574 141 596 122" fill="none" stroke="#ea580c" stroke-width="2.4"/>
  <text x="546" y="160" font-size="10" font-weight="800" fill="#ea580c">FI (scallop)</text>

  <!-- 2x2 Operant summary strip -->
  <rect x="332" y="252" width="138" height="22" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="401" y="266" text-anchor="middle" font-size="9.5" font-weight="700" fill="#14532d">+Reinf: Add good → ↑</text>
  <rect x="478" y="252" width="138" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
  <text x="547" y="266" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0c4a6e">−Reinf: Remove bad → ↑</text>
  <rect x="332" y="278" width="138" height="22" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="1"/>
  <text x="401" y="292" text-anchor="middle" font-size="9.5" font-weight="700" fill="#9a3412">+Punish: Add bad → ↓</text>
  <rect x="478" y="278" width="138" height="22" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1"/>
  <text x="547" y="292" text-anchor="middle" font-size="9.5" font-weight="700" fill="#831843">−Punish: Remove good → ↓</text>
</svg>`,
      diagramCaption:
        "Left: Pavlov's three-stage classical conditioning sequence. Right: Skinner's cumulative response curves showing why variable-ratio (VR) schedules sustain the steepest steady rate, plus the 2×2 operant consequences matrix.",
      workedExamples: [
        {
          title: "Dissecting Anticipatory Nausea in Clinical Oncology",
          problem:
            "A patient receiving hospital chemotherapy feels severe nausea after each infusion. After four visits, merely smelling the hospital's lemon disinfectant in the waiting room triggers nausea before treatment begins. Later, the patient also feels queasy smelling lemon dish soap at home. Identify the UCS, UCR, NS/CS, CR, and the secondary conditioning phenomenon shown at home.",
          steps: [
            "Locate the unlearned biological reflex: chemotherapy drugs naturally induce nausea without prior training → **UCS = chemotherapy infusion**, **UCR = nausea from infusion**.",
            "Locate the previously neutral cue paired with treatment: the lemon disinfectant initially caused no nausea (**NS**), then acquired predictive power → **CS = lemon disinfectant smell**.",
            "Identify the learned reaction elicited by the CS alone → **CR = anticipatory nausea in the waiting room**.",
            "Classify the transfer to a similar stimulus (lemon dish soap at home) → **stimulus generalization**.",
          ],
          answer:
            "UCS: chemotherapy drug; UCR: drug-induced nausea; NS→CS: hospital lemon disinfectant smell; CR: waiting-room anticipatory nausea; Home reaction: stimulus generalization.",
          yourTurn: {
            question:
              "A dog receives a mild static shock every time it crosses a buried garden wire that emits a high-pitched beep one second earlier. Soon, the dog retreats as soon as it hears the beep. What classical conditioning label applies to the **beep** after learning?",
            answer: { type: "text", accept: ["CS", "conditioned stimulus"], display: "CS (conditioned stimulus)" },
            solution:
              "The beep started as a neutral stimulus (NS). After pairing with the shock (UCS), the beep alone elicits retreat (CR), making the beep the **conditioned stimulus (CS)**.",
          },
        },
        {
          title: "Distinguishing Operant Quadrants & Schedules",
          problem:
            "A teenager silences a loud morning alarm by tapping a maths-puzzle app (increasing morning wake-up speed), while a mobile fitness app awards a mystery badge on average after every 6 completed runs (sometimes 2, sometimes 11). Classify both operant mechanisms and predict which habit will resist extinction longest.",
          steps: [
            "Alarm puzzle: Check direction first — waking up quickly *increases*, so it is **reinforcement** (not punishment). Check stimulus operation — an aversive buzzing alarm is *removed*, so it is **negative reinforcement**.",
            "Fitness badge: Rewards depend on *number of responses* (completed runs), not clock time → **ratio** schedule. The exact count varies unpredictably around an average of 6 → **variable-ratio (VR-6)** schedule.",
            "Compare extinction resistance: Partial, unpredictable ratio schedules (**VR**) produce the highest resistance to extinction because the learner cannot easily detect when rewards have permanently stopped.",
          ],
          answer:
            "Alarm puzzle = negative reinforcement; Fitness badge = variable-ratio (VR) schedule, which produces the highest resistance to extinction.",
          yourTurn: {
            question:
              "A teacher gives unannounced pop quizzes on average once every two weeks (sometimes after 4 days, sometimes after 19 days), keeping students studying steadily each evening. Which reinforcement schedule abbreviation (`FR`, `VR`, `FI`, or `VI`) best describes these pop quizzes?",
            answer: {
              type: "text",
              accept: ["VI", "variable interval", "variable-interval", "variable interval schedule"],
              display: "VI (variable-interval)",
            },
            solution:
              "Quizzes depend on elapsed *time* (interval), not a fixed count of study sessions (ratio), and the timing is unpredictable (variable) → **VI (variable-interval)**.",
          },
        },
      ],
      keyPoints: [
        "Classical conditioning explains involuntary associative reflexes (UCS/UCR/NS/CS/CR); operant conditioning explains voluntary behaviours shaped by consequences.",
        "Always check **effect on behaviour** first (↑ = reinforcement, ↓ = punishment), then **stimulus operation** (+ = added, − = removed): negative reinforcement is NOT punishment.",
        "VR schedules yield the steepest response rates and greatest extinction resistance; FI schedules generate scalloped pause-and-surge curves.",
        "Garcia's taste-aversion findings prove **biological preparedness** constrains associative learning, while Bandura's **ARRM** steps prove cognitive mediation and social observation go beyond direct reinforcement.",
      ],
      whyItWorks:
        "Associative and operant mechanisms survived across evolution because predicting biologically significant events (classical) and repeating actions that produce adaptive outcomes (operant) maximize survival. Adding Bandura's observational learning lets humans bypass costly trial-and-error entirely by simulating others' contingencies cognitively.",
      strategies: [
        "Use a two-step flowchart for every operant vignette: Step 1 = Did the behaviour increase (Reinforcement) or decrease (Punishment)? Step 2 = Was a stimulus added (Positive) or removed (Negative)?",
        "For schedules, ask two binary questions: Count of actions (Ratio) vs Clock time (Interval)? Predictable (Fixed) vs Unpredictable (Variable)?",
        "In IB Paper 1 essays, never stop at Pavlov or Skinner alone — triangulate **Perspective** by pairing behavioural contingencies with Garcia's biological preparedness and Bandura's cognitive ARRM mediation.",
      ],
      thinkDeeper:
        "If variable-ratio reinforcement powers both gambling machines and educational gamification apps, where should psychologists draw the **Responsibility** boundary between ethical motivation design and exploitative compulsion?",
    },

    // =========================================================================
    // SECTION 2: neurobiology-memory-cognitive-load
    // =========================================================================
    {
      id: "neurobiology-memory-cognitive-load",
      heading: "Biological & Cognitive Learning: LTP, Cognitive Load & Metacognition",
      level: "SL",
      discovery: {
        problem:
          "Two IB Psychology classes study a dense 250-word passage for identical total time:\n- **Group SSSS** reads the passage four times consecutively and predicts they will recall **78%** one week later.\n- **Group STTT** reads it once, then writes three closed-book free-recall tests (no feedback) and predicts they will recall only **61%**.\n\n**Before looking ahead:** Which group scores higher 5 minutes later, which scores dramatically higher 1 week later, and *why* do students' confidence ratings point in the exact wrong direction?",
        idea:
          "In **Roediger & Karpicke (2006)**, repeated reading slightly edged out testing after 5 minutes (81% vs 75%), creating a dangerous **metacognitive illusion of competence** from reading fluency. Yet after **1 week**, repeated reading collapsed to **40%** while retrieval practice retained **61%** — a **52.5% relative advantage** — because effortful retrieval actively drives synaptic consolidation (**LTP**) and strengthens retrieval cues.",
      },
      body: `To explain how temporary study experiences become durable expertise, FA2027 Context 4 integrates cellular **Biological** plasticity with information-processing **Cognitive** constraints.

### 1. Long-Term Potentiation (LTP) & Sleep Consolidation (Biological Perspective)
Donald Hebb (1949) proposed that repeated co-activation strengthens synaptic connections (*"neurons that fire together wire together"*). **Bliss & Lømo (1973)** directly observed this **Change** in rabbit hippocampal pathways as **Long-Term Potentiation (LTP)** — a persistent enhancement of synaptic transmission following high-frequency stimulation:
1. High-frequency presynaptic impulses release **glutamate** into the synaptic cleft.
2. Glutamate binds **AMPA receptors**, allowing Na⁺ entry and depolarizing the postsynaptic membrane.
3. Strong depolarization expels the magnesium ion (**Mg²⁺**) plug blocking **NMDA receptors**, permitting **Ca²⁺** influx.
4. Calcium activates intracellular kinases (e.g., CaMKII), inserting *additional* AMPA receptors into the postsynaptic membrane (early LTP) and eventually triggering gene transcription and dendritic spine growth (late LTP).

**Consolidation during Sleep:** Newly encoded hippocampal LTP traces remain fragile until **slow-wave sleep (SWS)** replays neural firing patterns, gradually integrating them into stable neocortical semantic networks (**active systems consolidation**; Diekelmann & Born, 2010). From an FA2027 **Responsibility** and **Causality** angle, invasive LTP studies use rodents (requiring **3Rs** justification: Replacement, Reduction, Refinement), so extrapolating cellular slice mechanisms to complex human classroom learning requires converging human neuroimaging and behavioural **Measurement**.

### 2. Cognitive Load Theory (Sweller, 1988)
Human **working memory (WM)** is severely bottlenecked (roughly 4±1 chunks of novel information; Cowan, 2001), whereas **long-term memory (LTM)** stores vast organized **schemas** that act as single low-cost chunks when retrieved. Sweller's **Cognitive Load Theory (CLT)** partitions WM demand into three additive components:

{{Total Load = Intrinsic Load + Extraneous Load + Germane Load <= WM Capacity}}

- **Intrinsic Load:** Inherent conceptual complexity and *element interactivity* of the material itself (e.g., solving a multi-step inferential statistics problem has higher intrinsic load than memorizing isolated dates). Cannot be eliminated without simplifying the task, though it shrinks as prior LTM schemas grow.
- **Extraneous Load:** Wasted mental effort imposed by *poor instructional design* — split-attention layouts (text far from diagrams), decorative animations, redundant verbatim narration over dense slides, or phone-notification switching.
- **Germane Load:** Productive effort devoted directly to integrating new concepts into LTM schemas (e.g., comparing worked examples, self-explaining, mapping cause-and-effect links).

**Instructional Design Implication:** Because WM capacity is fixed, reducing **extraneous load** frees precious capacity for **germane load**. **Paivio's Dual Coding Theory** complements CLT: combining a concise visual diagram with integrated spoken/brief labels engages both the visuospatial sketchpad and phonological loop in parallel without overloading either channel.

### 3. Retrieval Practice, Spaced Repetition & Schema Expertise
- **Testing Effect (Roediger & Karpicke, 2006):** Effortful retrieval from LTM strengthens memory traces and builds durable retrieval routes far more effectively than passive rereading or highlighting. Moreover, passive rereading fosters an **illusion of fluency** (a metacognitive **Bias** where recognition feels like mastery).
- **Spaced Repetition (Cepeda et al., 2006):** Distributing practice across time (spacing) allows slight forgetting between sessions, forcing effortful reconstruction and repeated LTP/sleep consolidation cycles — consistently beating massed "cramming" on delayed retention tests.
- **Schema-Based Expertise (Chase & Simon, 1973):** Chess masters recalled real mid-game board positions vastly better than novices by chunking multi-piece constellations into LTM schemas — yet when pieces were placed *randomly*, masters' recall dropped near novice levels! Expertise reflects domain-specific LTM schemas reducing intrinsic load, not an expanded raw WM hard drive.`,
      diagram: `<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Synaptic Long-Term Potentiation strengthening mechanism and Sweller Cognitive Load Theory working memory capacity bars">
  <rect x="0" y="0" width="640" height="310" rx="12" fill="#ffffff"/>
  <!-- Panel A: LTP Synaptic Plasticity -->
  <rect x="12" y="12" width="298" height="286" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="161" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">A. Long-Term Potentiation (LTP)</text>

  <!-- Before LTP -->
  <text x="86" y="56" text-anchor="middle" font-size="10.5" font-weight="700" fill="#6b7280">Before Practice (Weak)</text>
  <path d="M 46 66 L 126 66 L 116 112 Q 86 124 56 112 Z" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="86" y="92" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4c1d95">Presynaptic</text>
  <circle cx="76" cy="126" r="3" fill="#7c3aed"/>
  <circle cx="96" cy="129" r="3" fill="#7c3aed"/>
  <path d="M 44 148 Q 86 136 128 148 L 128 194 L 44 194 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>
  <rect x="64" y="139" width="12" height="14" rx="2" fill="#0d9488"/>
  <rect x="96" y="139" width="12" height="14" rx="2" fill="#9ca3af"/>
  <text x="86" y="172" text-anchor="middle" font-size="9" font-weight="700" fill="#0c4a6e">Few AMPA</text>
  <text x="86" y="184" text-anchor="middle" font-size="8.5" fill="#475569">NMDA Mg²⁺ plug</text>

  <!-- Transition arrow -->
  <line x1="136" y1="126" x2="176" y2="126" stroke="#ea580c" stroke-width="2.2"/>
  <polygon points="176,121 185,126 176,131" fill="#ea580c"/>
  <text x="158" y="114" text-anchor="middle" font-size="8.5" font-weight="800" fill="#c2410c">Repeated</text>
  <text x="158" y="142" text-anchor="middle" font-size="8.5" font-weight="800" fill="#c2410c">Ca²⁺ influx</text>

  <!-- After LTP -->
  <text x="236" y="56" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">After LTP (Potentiated)</text>
  <path d="M 194 66 L 278 66 L 268 112 Q 236 125 204 112 Z" fill="#ddd6fe" stroke="#6d28d9" stroke-width="1.8"/>
  <text x="236" y="92" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4c1d95">More Glutamate</text>
  <circle cx="214" cy="124" r="3" fill="#6d28d9"/>
  <circle cx="228" cy="129" r="3" fill="#6d28d9"/>
  <circle cx="243" cy="125" r="3" fill="#6d28d9"/>
  <circle cx="258" cy="129" r="3" fill="#6d28d9"/>
  <path d="M 192 148 Q 236 135 280 148 L 280 194 L 192 194 Z" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <rect x="200" y="139" width="11" height="14" rx="2" fill="#15803d"/>
  <rect x="216" y="137" width="11" height="14" rx="2" fill="#15803d"/>
  <rect x="232" y="136" width="11" height="14" rx="2" fill="#15803d"/>
  <rect x="248" y="137" width="11" height="14" rx="2" fill="#15803d"/>
  <rect x="263" y="139" width="11" height="14" rx="2" fill="#0369a1"/>
  <text x="236" y="172" text-anchor="middle" font-size="9" font-weight="700" fill="#14532d">Extra AMPA</text>
  <text x="236" y="184" text-anchor="middle" font-size="8.5" fill="#166534">Stronger EPSP</text>

  <!-- Summary note Panel A -->
  <rect x="24" y="210" width="274" height="74" rx="8" fill="#ffffff" stroke="#d8d0ee" stroke-width="1"/>
  <text x="34" y="228" font-size="10" font-weight="800" fill="#1c1630">Hebbian Chain of Plasticity:</text>
  <text x="34" y="244" font-size="9.5" fill="#374151">1. Co-active firing releases glutamate → AMPA + NMDA open.</text>
  <text x="34" y="259" font-size="9.5" fill="#374151">2. Ca²⁺ triggers extra AMPA insertion &amp; spine growth.</text>
  <text x="34" y="274" font-size="9.5" fill="#374151">3. Slow-wave sleep replays &amp; consolidates cortical schemas.</text>

  <!-- Panel B: Sweller Cognitive Load Theory -->
  <rect x="322" y="12" width="306" height="286" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="475" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">B. Sweller's Cognitive Load Capacity</text>

  <!-- Capacity line -->
  <line x1="564" y1="54" x2="564" y2="212" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="564" y="49" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">WM Limit</text>

  <!-- Bar 1: Poor Design (Overload) -->
  <text x="336" y="72" font-size="10.5" font-weight="700" fill="#9a3412">Cluttered Slide + Phone Alerts (Overload!)</text>
  <rect x="336" y="80" width="110" height="34" rx="4" fill="#f59e0b"/>
  <text x="391" y="101" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">Intrinsic</text>
  <rect x="448" y="80" width="152" height="34" rx="4" fill="#ea580c"/>
  <text x="524" y="101" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">Extraneous (Spills Past Limit!)</text>
  <text x="336" y="128" font-size="9" font-weight="600" fill="#c2410c">0 capacity left for Germane schema building → learning stalls.</text>

  <!-- Bar 2: Optimized Design -->
  <text x="336" y="156" font-size="10.5" font-weight="700" fill="#15803d">Dual-Coded Integrated Layout (Optimal)</text>
  <rect x="336" y="164" width="110" height="34" rx="4" fill="#f59e0b"/>
  <text x="391" y="185" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">Intrinsic</text>
  <rect x="448" y="164" width="32" height="34" rx="4" fill="#fb923c"/>
  <text x="464" y="185" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">Ext</text>
  <rect x="482" y="164" width="80" height="34" rx="4" fill="#16a34a"/>
  <text x="522" y="185" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">Germane</text>
  <text x="336" y="212" font-size="9" font-weight="600" fill="#15803d">Low extraneous load frees WM for deep schema encoding.</text>

  <!-- Legend / Strategy Strip -->
  <rect x="334" y="226" width="282" height="58" rx="8" fill="#ffffff" stroke="#d8d0ee" stroke-width="1"/>
  <text x="344" y="244" font-size="10" font-weight="800" fill="#1c1630">Evidence-Based Boosters:</text>
  <text x="344" y="260" font-size="9.5" fill="#374151">• Dual Coding + Integrated labels → cuts Extraneous load</text>
  <text x="344" y="275" font-size="9.5" fill="#374151">• Spaced Retrieval Practice → boosts Germane + LTP</text>
</svg>`,
      diagramCaption:
        "Left: Hebbian LTP strengthens synaptic transmission through NMDA Ca²⁺ influx and postsynaptic AMPA insertion. Right: Reducing extraneous cognitive load frees limited working-memory capacity for germane schema construction.",
      workedExamples: [
        {
          title: "Quantifying the Testing Effect (Roediger & Karpicke Style)",
          problem:
            "In a classroom replication of Roediger & Karpicke (2006), students who reread notes four times recalled a mean of **40%** of idea units after 1 week, whereas students who spent equal time on retrieval practice recalled **62%**. Calculate (a) the absolute percentage-point gain and (b) the relative percentage improvement produced by retrieval practice.",
          steps: [
            "Absolute percentage-point gain: subtract the rereading baseline from the retrieval-practice score: {{62 - 40 = 22}} percentage points.",
            "Relative percentage improvement: divide the gain by the baseline (rereading) score and multiply by 100: {{(62 - 40)/40 * 100 = 22/40 * 100 = 55%}}.",
            "Link to FA2027 Core Concepts: random allocation establishes experimental **Causality**, while contrasting actual 1-week recall with students' inflated confidence ratings exposes metacognitive **Bias**.",
          ],
          answer: "Absolute gain = 22 percentage points; relative improvement = 55%.",
          yourTurn: {
            question:
              "In a spaced-retrieval experiment, the massed-rereading group recalls **32%** after one week while the spaced-testing group recalls **48%**. Calculate the **relative percentage improvement** (as a whole number, without the % sign).",
            answer: { type: "number", value: 50, display: "50%" },
            solution: "Relative gain = {{(48 - 32)/32 * 100 = 16/32 * 100 = 50%}}.",
          },
        },
        {
          title: "Diagnosing Cognitive Load in an Instructional Slide",
          problem:
            "A teacher presents an IB Psychology slide on LTP containing 180 words of dense text on the left, an unlabelled neuron diagram on the right, animated spinning arrows, and simultaneously reads a slightly different textbook paragraph aloud. Identify which type of cognitive load is unnecessarily inflated and recommend two CLT/Dual-Coding fixes.",
          steps: [
            "The underlying synaptic biology (AMPA/NMDA receptors) is the **intrinsic load** — high element interactivity, unchanged by slide layout.",
            "The unlabelled separated diagram (split-attention effect), spinning decorative arrows, and conflicting spoken vs printed text inflate **extraneous load**, consuming WM capacity without building schemas.",
            "Fix 1 (Split-attention reduction): place brief labels directly onto the neuron diagram so eyes do not jump back and forth.",
            "Fix 2 (Dual Coding / Modality principle): remove redundant dense paragraphs and animations, using concise spoken explanation alongside the annotated diagram to free capacity for **germane load**.",
          ],
          answer:
            "Extraneous cognitive load is inflated; integrate labels directly onto the visual diagram and pair concise spoken narration with uncluttered visuals.",
          yourTurn: {
            question:
              "According to Sweller's Cognitive Load Theory, which specific type of load (`intrinsic`, `extraneous`, or `germane`) represents productive working-memory effort spent integrating new information into long-term schemas?",
            answer: {
              type: "text",
              accept: ["germane", "germane load", "germane cognitive load"],
              display: "Germane load",
            },
            solution:
              "**Germane load** is the desirable mental effort dedicated to building and automating long-term schemas.",
          },
        },
      ],
      keyPoints: [
        "LTP provides the primary cellular mechanism of memory **Change**: high-frequency glutamate → AMPA depolarization → Mg²⁺ unblock of NMDA → Ca²⁺ influx → extra postsynaptic AMPA receptors & structural spine growth.",
        "Slow-wave sleep replays hippocampal patterns to consolidate long-term neocortical schemas.",
        "Sweller's Cognitive Load Theory divides WM demand into **intrinsic** (task complexity), **extraneous** (poor presentation/distraction), and **germane** (schema construction).",
        "Retrieval practice (Roediger & Karpicke, 2006) and spaced repetition (Cepeda et al., 2006) dramatically outperform rereading on delayed tests despite feeling harder in the moment.",
        "Expertise (Chase & Simon, 1973) comes from rich LTM schemas reducing intrinsic load, not larger raw working-memory capacity.",
      ],
      whyItWorks:
        "Working memory is a narrow workbench; trying to assemble complex ideas while juggling cluttered visuals or phone alerts leaves zero bench space for schema building. Conversely, effortful spaced retrieval forces the brain to reactivate and reconstruct neural circuits, repeatedly triggering NMDA-dependent LTP and sleep-mediated cortical integration.",
      strategies: [
        "Distinguish **percentage-point difference** (`62 − 40 = 22 pp`) from **relative percentage gain** (`(62 − 40) / 40 × 100 = 55%`) in Paper 1/Paper 3 data prompts.",
        "Whenever evaluating biological learning (LTP), bridge to human cognition and mention animal-research **Responsibility** (3Rs) and generalization limits from rodent slices.",
        "In Cognitive Load vignettes, never claim the goal is 'zero cognitive load' — specify reducing *extraneous* load to maximize *germane* load within WM capacity.",
      ],
      thinkDeeper:
        "Why do students reliably judge effortless rereading to be more effective than effortful retrieval practice — and how does this metacognitive **Bias** mirror System 1 fluency heuristics?",
    },

    // =========================================================================
    // SECTION 3: eyewitness-memory-reliability
    // =========================================================================
    {
      id: "eyewitness-memory-reliability",
      heading: "Reliability of Memory, Eyewitness Testimony & Reconstructive Distortion",
      level: "SL",
      discovery: {
        problem:
          "Forty-five university students watch identical short film clips of a traffic collision and answer a single question:\n- Group A: *'About how fast were the cars going when they **contacted** each other?'*\n- Group B: *'About how fast were the cars going when they **smashed** into each other?'*\n\nOne week later, a separate group of 150 witnesses is asked: *'Did you see any broken glass?'* (There was **no** broken glass in the video.)\n\n**Predict:** How could a *single verb* spoken *after* the event alter both estimated speed and a visual memory of broken glass that never occurred?",
        idea:
          "Human memory is **reconstructive**, not a video playback. In **Loftus & Palmer (1974)**, the verb *smashed* activated a high-severity accident schema, raising mean speed estimates from **31.8 mph** (*contacted*) to **40.8 mph** (*smashed*) — and a week later, **32%** of *smashed* witnesses falsely recalled nonexistent broken glass versus **14%** for *hit* and **12%** for controls, showing post-event misinformation actually blended into their stored representation.",
      },
      body: `Eyewitness testimony remains one of the most consequential real-world applications of Learning and Cognition because memory distortion directly threatens courtroom justice (**Responsibility**).

### 1. Reconstructive Memory & Post-Event Misinformation (Cognitive Perspective)
Following Bartlett's (1932) demonstration that recall is shaped by cultural schemas, **Loftus & Palmer (1974)** tested how leading post-event wording reshapes eyewitness memory:
- **Experiment 1 (45 US students):** Participants watched 7 car-accident films and estimated speed using one of five verbs: *smashed* (**40.8 mph**), *collided* (**39.3 mph**), *bumped* (**38.1 mph**), *hit* (**34.0 mph**), or *contacted* (**31.8 mph**).
- **Experiment 2 (150 US students):** Participants watched a 1-minute crash clip and answered either the *smashed* question, the *hit* question, or no speed question (control). One week later, **32%** of the *smashed* group falsely reported seeing broken glass versus **14%** (*hit*) and **12%** (control). Because broken glass was never implied merely as a guess about speed, this supports the **memory-alteration (blending) hypothesis** rather than pure demand/response bias.
- **Implanting Whole False Memories:** **Loftus & Pickrell (1995)** presented 24 adults with three true childhood stories supplied by relatives plus one fabricated story (*"lost in a shopping mall at age 5"*). **25% (6 of 24)** developed partial or full false memories of the fabricated episode — highlighting both reconstructive vulnerability and ethical **Responsibility** (planting stressful memories requires thorough debriefing).

**Critical Measurement & Causality Evaluation:** Laboratory misinformation experiments boast high internal validity (tight control of IV verb manipulation establishes **Causality**), yet face serious **ecological validity** critiques: watching a low-stakes video clip differs sharply from witnessing a violent crime. In a landmark field study of a real Canadian gun-shop shooting, **Yuille & Cutshall (1986)** interviewed 13 actual witnesses 4–5 months later and found ~79–84% accuracy *despite* introducing misleading questions — showing real-life personal involvement can sometimes buffer against lab-style misinformation.

### 2. Weapon Focus, High-Arousal Stress & Own-Race Bias
Memory errors begin even before questioning — at **encoding**:
- **Weapon Focus Effect (Loftus, Loftus & Messo, 1987):** Participants saw a slide sequence of a customer holding either a cheque or a handgun. Eye-tracking showed significantly more and longer fixations on the gun than the cheque; subsequent lineup identification of the perpetrator plummeted from **38.9%** (cheque) to **11.1%** (gun). Explained via **Easterbrook's cue-utilization hypothesis**: acute threat narrows attentional bandwidth onto the threat cue at the expense of peripheral facial features.
- **High-Arousal Stress (Biological–Cognitive Bridge):** Moderate arousal aids alertness (Yerkes–Dodson inverted-U), but extreme threat floods the amygdala and elevates cortisol, impairing prefrontal encoding and hippocampal consolidation. **Deffenbacher et al.'s (2004)** meta-analysis across 27 facial-identification studies confirmed that high stress significantly degrades accurate lineup identification and recall of crime details.
- **Own-Race Bias / Cross-Race Effect (Sociocultural Perspective & Bias):** **Meissner & Brigham's (2001)** meta-analysis of 39 studies (~5,000 participants) revealed that witnesses are **1.40×** more likely to correctly recognize own-race faces and **1.56×** more likely to make **false-alarm misidentifications** of other-race faces. Mechanisms combine differential **perceptual expertise** (less routine contact with out-group facial variations) and **social categorization** (processing in-group faces individually vs out-group faces by broad category features).

### 3. The Cognitive Interview (Fisher & Geiselman, 1992): Responsibility in Action
Recognizing that standard police questioning uses rapid closed/leading questions that interrupt recall and implant bias, **Fisher & Geiselman (1992)** engineered the **Cognitive Interview (CI)** from memory theory (Tulving's **encoding specificity** and associative retrieval networks):
1. **Mental Reinstatement of Context:** Mentally recreate the physical environment (lighting, sounds, smells) and internal emotional/physiological state at encoding to activate context-dependent retrieval cues.
2. **Report Everything:** Encourage reporting every fragment — even seemingly trivial or incomplete impressions — without self-censoring, since small details can cue larger memories.
3. **Recall in Reverse / Varied Temporal Order:** Narrate backward from the end or from the most vivid moment, disrupting schema-driven *"what usually happens"* script-filling.
4. **Change Perspective:** Describe the scene from another witness's viewpoint to access alternative associative pathways *(note: practitioners apply this carefully to prevent speculative guessing)*.

**Köhnken et al.'s (1999)** meta-analysis of 55 studies confirmed the CI elicits roughly **35–41% more correct details** than standard interviews, though with a small increase in minor inaccurate details and greater time/training demands for officers. Paired with **double-blind sequential lineups** (preventing administrator expectation bias), the CI exemplifies psychologically informed legal **Change** and **Responsibility**.`,
      diagram: `<svg viewBox="0 0 640 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loftus and Palmer 1974 mean speed estimates bar chart and four pillars of the Cognitive Interview">
  <rect x="0" y="0" width="640" height="315" rx="12" fill="#ffffff"/>
  <!-- Panel A: Loftus & Palmer (1974) -->
  <rect x="12" y="12" width="318" height="291" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="171" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">A. Loftus &amp; Palmer (1974) Exp 1</text>
  <text x="171" y="49" text-anchor="middle" font-size="10" fill="#5b5375">Mean Estimated Speed (mph) by Critical Verb</text>

  <!-- Chart axes -->
  <line x1="48" y1="205" x2="316" y2="205" stroke="#374151" stroke-width="1.5"/>
  <line x1="48" y1="205" x2="48" y2="64" stroke="#374151" stroke-width="1.5"/>
  <!-- Y ticks: 0 to 45 mph -> 135px tall (3px per mph) -->
  <line x1="44" y1="145" x2="316" y2="145" stroke="#e5e7eb" stroke-width="1"/>
  <text x="41" y="148" text-anchor="end" font-size="9" fill="#6b7280">20</text>
  <line x1="44" y1="85" x2="316" y2="85" stroke="#e5e7eb" stroke-width="1"/>
  <text x="41" y="88" text-anchor="end" font-size="9" fill="#6b7280">40</text>
  <text x="41" y="208" text-anchor="end" font-size="9" fill="#6b7280">0</text>

  <!-- Bars (scale: y = 205 - v*3) -->
  <!-- Smashed 40.8 -> h=122.4 y=82.6 -->
  <rect x="60" y="83" width="38" height="122" rx="4" fill="#dc2626"/>
  <text x="79" y="77" text-anchor="middle" font-size="9.5" font-weight="800" fill="#991b1b">40.8</text>
  <text x="79" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#1c1630">Smashed</text>

  <!-- Collided 39.3 -> h=117.9 y=87.1 -->
  <rect x="111" y="87" width="38" height="118" rx="4" fill="#ea580c"/>
  <text x="130" y="81" text-anchor="middle" font-size="9.5" font-weight="800" fill="#9a3412">39.3</text>
  <text x="130" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#1c1630">Collided</text>

  <!-- Bumped 38.1 -> h=114.3 y=90.7 -->
  <rect x="162" y="91" width="38" height="114" rx="4" fill="#d97706"/>
  <text x="181" y="85" text-anchor="middle" font-size="9.5" font-weight="800" fill="#92400e">38.1</text>
  <text x="181" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#1c1630">Bumped</text>

  <!-- Hit 34.0 -> h=102 y=103 -->
  <rect x="213" y="103" width="38" height="102" rx="4" fill="#2563eb"/>
  <text x="232" y="97" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e40af">34.0</text>
  <text x="232" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#1c1630">Hit</text>

  <!-- Contacted 31.8 -> h=95.4 y=109.6 -->
  <rect x="264" y="110" width="38" height="95" rx="4" fill="#0d9488"/>
  <text x="283" y="104" text-anchor="middle" font-size="9.5" font-weight="800" fill="#115e59">31.8</text>
  <text x="283" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#1c1630">Contacted</text>

  <!-- Exp 2 callout -->
  <rect x="24" y="236" width="294" height="54" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.2"/>
  <text x="171" y="254" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">Exp 2 (1 week later — False "Broken Glass"):</text>
  <text x="171" y="272" text-anchor="middle" font-size="10" font-weight="700" fill="#7f1d1d">Smashed: 32%  |  Hit: 14%  |  Control: 12%</text>

  <!-- Panel B: Cognitive Interview 4 Pillars -->
  <rect x="342" y="12" width="286" height="291" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="485" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">B. Cognitive Interview (4 Pillars)</text>
  <text x="485" y="49" text-anchor="middle" font-size="10" fill="#5b5375">Fisher &amp; Geiselman (1992)</text>

  <rect x="356" y="62" width="258" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.3"/>
  <text x="368" y="80" font-size="10.5" font-weight="800" fill="#4c1d95">1. Reinstate Context</text>
  <text x="368" y="96" font-size="9.5" fill="#374151">Mentally rebuild scene, weather, sounds &amp; mood.</text>

  <rect x="356" y="116" width="258" height="46" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.3"/>
  <text x="368" y="134" font-size="10.5" font-weight="800" fill="#14532d">2. Report Everything</text>
  <text x="368" y="150" font-size="9.5" fill="#374151">Include minor/partial fragments without filtering.</text>

  <rect x="356" y="170" width="258" height="46" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.3"/>
  <text x="368" y="188" font-size="10.5" font-weight="800" fill="#0c4a6e">3. Reverse / Varied Order</text>
  <text x="368" y="204" font-size="9.5" fill="#374151">Recall backward to block schema script-filling.</text>

  <rect x="356" y="224" width="258" height="46" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.3"/>
  <text x="368" y="242" font-size="10.5" font-weight="800" fill="#78350f">4. Change Perspective</text>
  <text x="368" y="258" font-size="9.5" fill="#374151">Retell from another bystander's spatial angle.</text>

  <text x="485" y="292" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Köhnken et al. (1999): ~35–41% more correct details</text>
</svg>`,
      diagramCaption:
        "Left: Loftus & Palmer's (1974) progressive shift in estimated crash speed across leading verbs and false glass recall one week later. Right: The four memory-theory pillars of Fisher & Geiselman's Cognitive Interview.",
      workedExamples: [
        {
          title: "Quantifying False-Memory Distortion & Evaluating Validity",
          problem:
            "In a replication of Loftus & Palmer's Experiment 2, **80** witnesses hear a leading verb (*'smashed'*) and **28** later falsely report seeing broken glass, while **80** control witnesses hear a neutral verb and **10** falsely report broken glass. (a) Calculate the false-memory rate (%) in each group and the relative risk ratio. (b) State one **Measurement** strength and one limitation of applying this finding to real-world policing.",
          steps: [
            "Leading-verb false-memory rate: {{28/80 * 100 = 35%}}.",
            "Control false-memory rate: {{10/80 * 100 = 12.5%}}.",
            "Relative risk ratio: {{35 / 12.5 = 2.8}} (leading-verb witnesses are 2.8 times more likely to report nonexistent glass).",
            "Measurement evaluation: Standardized video clips and random allocation provide strong **internal validity** (clear **Causality**), but artificial lab footage lacks real-world emotional stakes (**low ecological validity**; contrast Yuille & Cutshall's 1986 gun-shop field study).",
          ],
          answer:
            "Leading = 35%, Control = 12.5%, Relative risk = 2.8×. High internal validity for causality, but limited ecological validity compared to field crime studies.",
          yourTurn: {
            question:
              "In a replication of Loftus & Pickrell (1995), **9 out of 36** adult participants endorse a fabricated childhood event as a real memory. What is the false-memory endorsement rate in percent (enter a whole number)?",
            answer: { type: "number", value: 25, display: "25%" },
            solution: "{{9/36 * 100 = 25%}}.",
          },
        },
        {
          title: "Diagnosing Eyewitness Risk & Recommending Legal Reforms",
          problem:
            "Minutes after an armed robbery at a dimly lit convenience store, an officer asks the shaken cashier: *'How tall was the masked man who aimed the silver pistol at you — around 6 feet?'* The officer later runs a single-suspect show-up where the suspect is of a different racial background from the cashier. Identify three psychological distortion risks and propose two evidence-based reforms.",
          steps: [
            "Risk 1 (**Post-event misinformation / leading question**): Suggesting *'around 6 feet'* supplies an anchoring/PEI cue that can contaminate the cashier's reconstructed memory.",
            "Risk 2 (**Weapon focus + high-arousal stress**): Fixating on the pistol narrows attentional bandwidth (Loftus et al., 1987) while acute cortisol/amygdala stress degrades facial encoding (Deffenbacher et al., 2004).",
            "Risk 3 (**Own-race bias**): Cross-race identification carries substantially higher false-alarm rates (Meissner & Brigham, 2001).",
            "Reforms (**Responsibility**): Replace leading questions with the **Cognitive Interview** (context reinstatement, report everything, reverse order) and replace the biased show-up with a **double-blind sequential lineup** containing matched fillers.",
          ],
          answer:
            "Risks: leading-question misinformation, weapon focus/stress narrowing, and own-race bias. Reforms: Cognitive Interview protocol + double-blind sequential lineup.",
          yourTurn: {
            question:
              "Which Cognitive Interview technique specifically disrupts schema-based script-filling by asking the witness to narrate the event backward from the final moment?",
            answer: {
              type: "text",
              accept: ["reverse order", "recall in reverse order", "varied order", "change order"],
              display: "Reverse order",
            },
            solution:
              "**Reverse order** (or varied temporal order) prevents witnesses from relying on chronological schemas to fill memory gaps.",
          },
        },
      ],
      keyPoints: [
        "Memory is reconstructive: post-event misinformation (Loftus & Palmer, 1974) and suggestive family narratives (Loftus & Pickrell, 1995) can distort or implant vivid yet false recollections.",
        "Always balance lab internal validity (Loftus) against real-world field evidence (Yuille & Cutshall, 1986) when discussing **Measurement** and **Causality**.",
        "Encoding accuracy suffers under **weapon focus** (attentional narrowing), extreme stress (amygdala/cortisol impairment), and **own-race bias** (1.56× higher cross-race false alarms).",
        "The **Cognitive Interview** (context reinstatement, report everything, reverse order, change perspective) boosts correct recall by ~35–41%, illustrating applied psychological **Responsibility**.",
      ],
      whyItWorks:
        "Reconstructive memory is actually an adaptive feature for everyday learning — updating schemas with new post-event facts lets us refine models of the world. That same flexibility becomes a legal liability when police questions inject inaccurate post-event details into a fragile episodic trace.",
      strategies: [
        "Never equate eyewitness **confidence** with **accuracy** — post-identification feedback can artificially inflate witness certainty even when the choice is wrong.",
        "Pair every eyewitness bias with a concrete **Responsibility** reform (e.g., leading questions → Cognitive Interview; administrator cueing → double-blind lineups).",
        "For Paper 1 Sec B unseen eyewitness vignettes, structure paragraphs by stage: **Encoding** (weapon focus, stress, own-race bias) → **Storage/Retention** (post-event misinformation) → **Retrieval** (Cognitive Interview).",
      ],
      thinkDeeper:
        "If the Cognitive Interview boosts accurate detail recall by ~40% *and* slightly raises minor inaccurate details, how should legal systems weigh completeness against precision when setting forensic **Responsibility** standards?",
    },

    // =========================================================================
    // SECTION 4: problem-solving-environmental-cognition
    // =========================================================================
    {
      id: "problem-solving-environmental-cognition",
      heading: "Higher-Order Thinking, Executive Function & Environmental Contexts",
      level: "SL",
      discovery: {
        problem:
          "You are handed a wax candle, a book of matches, and a cardboard box **filled with thumbtacks**, and asked to mount the lit candle upright onto a cork wall so no wax drips onto the floor.\n\nIn **Adamson's (1952)** replication of **Duncker (1945)**, **86%** of people solved the puzzle within 20 minutes when the tacks were dumped *beside* the empty box — compared to only **41%** when the tacks sat *inside* the box.\n\n**Think first:** Why did simply seeing tacks *inside* the box cut problem-solving success by more than half?",
        idea:
          "Seeing the box actively holding tacks locked participants into **functional fixedness** — a cognitive **Bias** where prior schema knowledge (*'box = container'*) blocks seeing a novel affordance (*'empty box tacked to the wall = candle shelf'*). Emptying the box breaks the mental set and enables Gestalt **restructuring** (insight).",
      },
      body: `Higher-order cognition encompasses how learners deploy flexible strategies to solve unfamiliar problems, regulate attention through **executive function**, and how broader **Sociocultural** and material environments shape those neural systems.

### 1. Problem-Solving Strategies & Cognitive Barriers (Cognitive Perspective)
- **Algorithms:** Step-by-step formal procedures guaranteed to yield the correct answer when applied accurately (e.g., long division, testing every possible PIN). High accuracy, high working-memory cost.
- **Heuristics:** Fast rules of thumb (e.g., *means–ends analysis* reducing the gap to a goal, *working backward*, *analogical transfer*). Efficient under limited WM, but fallible.
- **Functional Fixedness (Duncker, 1945; Adamson, 1952):** Fixating on an object's customary function blinds solvers to creative uses (candle-and-tack-box problem: 41% solved with filled box vs 86% with empty box).
- **Mental Set / Einstellung (Luchins, 1942):** In the **Water-Jar Problem**, participants solved five consecutive puzzles requiring a complex formula (Jar B − Jar A − 2×Jar C). On critical test jars solvable via a trivial two-step shortcut (A − C), over 80% of practiced participants blindly persisted with the cumbersome memorized rule (versus < 5% of controls). Prior learning can create rigid inertia!
- **Insight ("Aha!"):** Sudden Gestalt **representational restructuring** when a solver reframes a problem's assumptions — often aided by an **incubation** break that lets fixated cues fade.

### 2. Executive Function: Miyake's Unity-and-Diversity Triad (Biological + Cognitive)
Anchored in **prefrontal cortex (PFC)** networks interacting with parietal and striatal loops, **Executive Function (EF)** enables top-down goal-directed control over automatic habits (**Miyake et al., 2000**):
1. **Inhibitory Control:** Suppressing prepotent automatic impulses and irrelevant distractors. Operationalized (**Measurement**) via the **Stroop Colour–Word Task** (naming ink colour of the word *"RED"* printed in blue ink; the latency penalty {{RT_incongruent - RT_congruent}} quantifies interference control) and Go/No-Go tasks.
2. **Cognitive Flexibility (Set-Shifting):** Shifting smoothly between rules, task goals, or mental frames when contingencies change. Measured via the **Wisconsin Card Sorting Test (WCST)** — tracking *perseverative errors* after the sorting rule silently switches.
3. **Working-Memory Updating:** Actively monitoring, replacing, and manipulating information online. Measured via the **n-back** or backward digit-span tasks.

### 3. Socioeconomic, Stereotype & Bilingual Contexts (Sociocultural Perspective)
Executive function does not develop in a social vacuum — environmental contexts powerfully sculpt cognitive performance and neural maturation (**Change & Perspective**):
- **Socioeconomic Status (SES), Chronic Stress & Nutrition:** **Farah et al. (2006)** and **Noble et al. (2015)** found SES disparities are steepest in language and prefrontal executive-function systems (including reduced prefrontal/hippocampal surface area in severely under-resourced households). Mediators include **chronic HPA-axis cortisol stress** (which impairs PFC synaptic plasticity), micronutrient deficiencies (iron/iodine; Grantham-McGregor), crowded noisy housing, and reduced cognitive scaffolding. Crucial **Causality** warning: SES studies are predominantly correlational/quasi-experimental; poverty is a modifiable environmental risk cluster, NOT biological determinism — early-enrichment trials (e.g., Abecedarian Project) and unconditional income-support trials demonstrate measurable cognitive **Change** and societal **Responsibility**.
- **Stereotype Threat (Steele & Aronson, 1995; Schmader & Johns, 2003):** When learners fear confirming a negative cultural stereotype about their group's intellectual ability, physiological stress and anxious self-monitoring hijack **working-memory capacity**, directly depressing executive and maths/verbal problem solving. (Evaluation: later field meta-analyses highlight smaller, context-sensitive effect sizes — illustrating **Measurement** and ecological nuance.)
- **Bilingualism & Executive Control (The Replication & Bias Debate):** **Bialystok et al. (2004, 2009)** argued that continuously inhibiting a non-target language while switching languages trains domain-general inhibitory control and cognitive flexibility. However, **Paap & Greenberg (2013)** failed to replicate the advantage across multiple EF tasks, and **Lehtonen et al.'s (2018)** meta-analysis of 152 studies found that once **publication bias** (journals preferentially publishing positive findings while null studies sit in the "file drawer") and **SES/immigrant-status confounds** were controlled, the domain-general bilingual EF advantage fell essentially to **zero**! This debate is a gold-standard FA2027 exemplar of **Bias**, **Causality**, and **Measurement** in action.`,
      diagram: `<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Duncker functional fixedness candle problem comparison and Miyake executive function triad with environmental contexts">
  <rect x="0" y="0" width="640" height="310" rx="12" fill="#ffffff"/>
  <!-- Panel A: Functional Fixedness -->
  <rect x="12" y="12" width="290" height="286" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="157" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">A. Functional Fixedness (Duncker)</text>

  <!-- Filled vs Empty Box bars -->
  <text x="26" y="58" font-size="10" font-weight="700" fill="#9a3412">Tacks INSIDE box (Container schema)</text>
  <rect x="26" y="65" width="110" height="24" rx="5" fill="#ea580c"/>
  <text x="142" y="81" font-size="10.5" font-weight="800" fill="#9a3412">41% solved</text>

  <text x="26" y="110" font-size="10" font-weight="700" fill="#15803d">Box EMPTY beside tacks (Insight easier)</text>
  <rect x="26" y="117" width="230" height="24" rx="5" fill="#16a34a"/>
  <text x="262" y="133" font-size="10.5" font-weight="800" fill="#15803d">86%</text>

  <!-- Restructuring Sketch -->
  <rect x="26" y="156" width="262" height="128" rx="8" fill="#ffffff" stroke="#d8d0ee" stroke-width="1.2"/>
  <text x="157" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#4c1d95">Insight Restructuring: Box → Shelf</text>
  <!-- Cork wall -->
  <rect x="46" y="186" width="14" height="86" rx="2" fill="#d97706" opacity="0.35" stroke="#b45309" stroke-width="1.2"/>
  <text x="36" y="232" text-anchor="middle" font-size="8.5" font-weight="700" fill="#92400e" transform="rotate(-90 36 232)">Cork Wall</text>
  <!-- Tack holding box -->
  <circle cx="62" cy="236" r="4" fill="#374151"/>
  <!-- Box mounted as platform -->
  <rect x="60" y="226" width="54" height="26" rx="3" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
  <text x="87" y="243" text-anchor="middle" font-size="8.5" font-weight="700" fill="#78350f">Box</text>
  <!-- Candle upright on box -->
  <rect x="81" y="196" width="12" height="30" rx="2" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.2"/>
  <ellipse cx="87" cy="190" rx="4" ry="6" fill="#f59e0b"/>
  <!-- Notes right of sketch -->
  <text x="128" y="204" font-size="9.5" font-weight="700" fill="#1c1630">Mental Set (Luchins):</text>
  <text x="128" y="219" font-size="9" fill="#374151">Repeated B−A−2C habit</text>
  <text x="128" y="233" font-size="9" fill="#374151">blocks easy A−C shortcut.</text>
  <text x="128" y="253" font-size="9" font-weight="700" fill="#6d28d9">Overcome via incubation</text>
  <text x="128" y="266" font-size="9" font-weight="700" fill="#6d28d9">&amp; cognitive flexibility.</text>

  <!-- Panel B: Executive Function Triad + Environmental Ring -->
  <rect x="314" y="12" width="314" height="286" rx="10" fill="#f8f7fc" stroke="#d8d0ee" stroke-width="1.5"/>
  <text x="471" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="#1c1630">B. Executive Function &amp; Contexts</text>

  <!-- Outer environmental context ellipse -->
  <ellipse cx="471" cy="166" rx="142" ry="112" fill="#ede9fe" opacity="0.45" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="471" y="70" text-anchor="middle" font-size="9.5" font-weight="800" fill="#5b21b6">Environmental &amp; Sociocultural Modulators</text>

  <!-- Connecting triangle lines -->
  <line x1="471" y1="108" x2="396" y2="210" stroke="#4b5563" stroke-width="1.6"/>
  <line x1="471" y1="108" x2="546" y2="210" stroke="#4b5563" stroke-width="1.6"/>
  <line x1="396" y1="210" x2="546" y2="210" stroke="#4b5563" stroke-width="1.6"/>

  <!-- Center PFC badge -->
  <circle cx="471" cy="176" r="24" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="471" y="174" text-anchor="middle" font-size="9.5" font-weight="800" fill="#4c1d95">PFC</text>
  <text x="471" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="#6b7280">Control</text>

  <!-- Top node: Inhibitory Control -->
  <rect x="411" y="84" width="120" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.4"/>
  <text x="471" y="102" text-anchor="middle" font-size="10" font-weight="800" fill="#1e3a8a">Inhibitory Control</text>
  <text x="471" y="117" text-anchor="middle" font-size="8.5" fill="#1d4ed8">Stroop / Go–No-Go</text>

  <!-- Bottom-left node: Cognitive Flexibility -->
  <rect x="336" y="192" width="120" height="44" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.4"/>
  <text x="396" y="210" text-anchor="middle" font-size="10" font-weight="800" fill="#14532d">Flexibility</text>
  <text x="396" y="225" text-anchor="middle" font-size="8.5" fill="#15803d">Set-shifting / WCST</text>

  <!-- Bottom-right node: WM Updating -->
  <rect x="486" y="192" width="120" height="44" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.4"/>
  <text x="546" y="210" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">WM Updating</text>
  <text x="546" y="225" text-anchor="middle" font-size="8.5" fill="#b45309">n-back / Digit span</text>

  <!-- Context chips at bottom -->
  <text x="471" y="256" text-anchor="middle" font-size="9" font-weight="700" fill="#4c1d95">SES &amp; Chronic Stress • Nutrition • Stereotype Threat</text>
  <text x="471" y="270" text-anchor="middle" font-size="9" font-weight="700" fill="#4c1d95">Bilingualism (Publication Bias &amp; Confound Debate)</text>
</svg>`,
      diagramCaption:
        "Left: Adamson's (1952) replication of Duncker's candle problem illustrating functional fixedness and insight restructuring. Right: Miyake's prefrontal executive-function triad embedded within environmental and sociocultural modulators.",
      workedExamples: [
        {
          title: "Measuring Inhibitory Control via Stroop Interference",
          problem:
            "A student completes a computerized Stroop task: mean reaction time on congruent trials (*'GREEN'* in green ink) is **600 ms**, and mean reaction time on incongruent trials (*'GREEN'* in red ink) is **780 ms**. Calculate (a) the Stroop interference effect in milliseconds and (b) the percentage slowdown, and explain which executive function component is being operationalized.",
          steps: [
            "Stroop interference effect = {{RT_incongruent - RT_congruent = 780 - 600 = 180}} ms.",
            "Percentage slowdown = {{180/600 * 100 = 30%}}.",
            "Operational **Measurement**: Reading the printed word is an automatic prepotent habit; suppressing it to name the ink colour specifically measures **inhibitory control** within Miyake's prefrontal EF triad.",
          ],
          answer: "Stroop interference = 180 ms (30% slowdown), operationalizing inhibitory control.",
          yourTurn: {
            question:
              "A participant has a mean congruent Stroop reaction time of **520 ms** and a mean incongruent reaction time of **695 ms**. Calculate the Stroop interference effect in milliseconds (enter a number only).",
            answer: { type: "number", value: 175, display: "175 ms" },
            solution: "{{695 - 520 = 175}} ms.",
          },
        },
        {
          title: "Critically Evaluating the 'Bilingual Executive Advantage' Using FA2027 Core Concepts",
          problem:
            "A viral newspaper headline reads: *'Speaking Two Languages Rewires Your Brain for Superior Self-Control!'* Evaluate this claim using at least three FA2027 Core Concepts.",
          steps: [
            "**Causality:** Bilingualism cannot be randomly assigned in real life (quasi-experimental design). Bilingual and monolingual samples frequently differ in **SES, parental education, and immigrant selection factors** — potential third-variable confounds.",
            "**Bias:** Lehtonen et al.'s (2018) meta-analysis of 152 studies showed that **publication bias** (journals disproportionately publishing positive findings while null replications go unpublished) inflated early effect estimates; after bias correction, the domain-general advantage vanished.",
            "**Measurement:** Laboratory tasks like Simon, Flanker, and Stroop suffer from *task impurity* and low convergent validity across labs (Paap & Greenberg, 2013), questioning whether they measure a single unified executive advantage.",
          ],
          answer:
            "Quasi-experimental SES confounds weaken Causality; publication bias inflates positive findings (Lehtonen et al., 2018); low cross-task convergence challenges Measurement validity.",
          yourTurn: {
            question:
              "What methodological bias occurs when journals preferentially accept studies showing a statistically significant bilingual advantage while null replications remain unpublished in researchers' 'file drawers'?",
            answer: {
              type: "text",
              accept: ["publication bias", "file-drawer effect", "file drawer effect", "file-drawer bias"],
              display: "Publication bias",
            },
            solution:
              "**Publication bias** (also called the file-drawer effect) skews published literature toward positive findings.",
          },
        },
      ],
      keyPoints: [
        "Algorithms guarantee accuracy at high cognitive cost; heuristics trade certainty for speed, while **functional fixedness** (Duncker) and **mental set / Einstellung** (Luchins) show prior learning can block insight.",
        "Miyake's executive-function triad comprises **inhibitory control** (Stroop), **cognitive flexibility** (WCST), and **working-memory updating** (n-back), underpinned by prefrontal networks.",
        "Low SES harms executive function through modifiable environmental pathways (chronic cortisol stress, nutrition, resource scarcity) — highlighting **Causality** limits and policy **Responsibility**.",
        "Stereotype threat drains working-memory capacity (Schmader & Johns, 2003), demonstrating Sociocultural → Cognitive interaction.",
        "Bilingual executive-control claims must be evaluated critically using **Bias** (publication bias; Lehtonen et al., 2018) and **Causality** (SES/immigrant confounds; Paap & Greenberg, 2013).",
      ],
      whyItWorks:
        "Higher-order thinking is a tug-of-war between fast, automated LTM schemas (great for routine speed, vulnerable to Einstellung and functional fixedness) and effortful prefrontal executive control (great for novel adaptation, vulnerable to stress, poverty, and stereotype threat).",
      strategies: [
        "Keep Duncker (**functional fixedness** = fixed use of an *object*) cleanly separated from Luchins (**mental set / Einstellung** = fixed reuse of a *strategy/formula*).",
        "In Paper 1 Sec C Concept essays on **Bias** or **Causality**, the bilingualism controversy (Bialystok vs Paap & Greenberg / Lehtonen) and SES–cognition interventions provide top-band critical evaluation.",
        "Link biological cortisol stress directly to cognitive working-memory/prefrontal narrowing and sociocultural poverty/stereotype threat for genuine three-approach **Perspective**.",
      ],
      thinkDeeper:
        "How could a school redesign timed high-stakes exams to reduce **extraneous cognitive load** and **stereotype threat** simultaneously without lowering intellectual rigor?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Classical Conditioning: What converts a Neutral Stimulus (NS) into a Conditioned Stimulus (CS)?",
        back: "Repeated contingent pairing of the NS right before an Unconditioned Stimulus (UCS) until the NS alone reliably triggers a learned Conditioned Response (CR).",
        level: "SL",
      },
      {
        front: "Distinguish Negative Reinforcement from Positive Punishment.",
        back: "**Negative reinforcement** *removes* an unpleasant stimulus to **increase** a behaviour (e.g., fastening a seatbelt stops the alarm). **Positive punishment** *adds* an unpleasant stimulus to **decrease** a behaviour (e.g., a speeding fine).",
        level: "SL",
      },
      {
        front: "Which Skinnerian reinforcement schedule produces the steepest response rate and strongest resistance to extinction?",
        back: "**Variable-Ratio (VR)** — rewards arrive after an unpredictable number of responses around an average (e.g., slot machines), making extinction hard to detect.",
        level: "SL",
      },
      {
        front: "What did Garcia & Koelling (1966) prove about classical conditioning?",
        back: "**Biological preparedness**: rats easily learned conditioned taste aversion (sweet water → nausea even hours later) but not light/noise → nausea, showing evolution constrains associative learning.",
        level: "SL",
      },
      {
        front: "List Bandura's four cognitive mediational processes (ARRM) in observational learning.",
        back: "**Attention** (noticing the model), **Retention** (encoding mental representation), **Reproduction** (motor capability), and **Motivation** (expected/vicarious reinforcement & self-efficacy).",
        level: "SL",
      },
      {
        front: "Outline the core synaptic steps of Long-Term Potentiation (LTP).",
        back: "High-frequency **glutamate** binds **AMPA** receptors → depolarization expels **Mg²⁺** from **NMDA** receptors → **Ca²⁺** influx → extra postsynaptic AMPA receptors inserted + dendritic spine growth = stronger future EPSP.",
        level: "SL",
      },
      {
        front: "Name the three components of Sweller's Cognitive Load Theory.",
        back: "**Intrinsic load** (inherent task complexity), **Extraneous load** (wasted effort from poor design/distraction), and **Germane load** (productive effort constructing LTM schemas).",
        level: "SL",
      },
      {
        front: "What was the key crossover finding of Roediger & Karpicke's (2006) testing-effect study?",
        back: "After 5 minutes, repeated reading slightly beat testing (~81% vs 75%); after **1 week**, retrieval practice vastly outperformed rereading (~61% vs 40%), exposing students' metacognitive illusion of fluency.",
        level: "SL",
      },
      {
        front: "What did Chase & Simon's (1973) chess study reveal about expertise and working memory?",
        back: "Masters excelled at recalling *real* game boards via LTM schema chunking, but dropped near novice levels on *random* piece layouts — proving expertise relies on LTM schemas, not larger raw WM.",
        level: "SL",
      },
      {
        front: "Summarize Experiment 1 and Experiment 2 of Loftus & Palmer (1974).",
        back: "Exp 1: Critical verb shifted speed estimates from **31.8 mph** (*contacted*) to **40.8 mph** (*smashed*). Exp 2 (1 week later): **32%** (*smashed*) vs **14%** (*hit*) vs **12%** (control) falsely remembered broken glass.",
        level: "SL",
      },
      {
        front: "Why is Yuille & Cutshall (1986) a vital counterweight to Loftus & Palmer (1974)?",
        back: "In a real Canadian gun-shop shooting, 13 witnesses interviewed 4–5 months later stayed ~79–84% accurate despite misleading questions, challenging the ecological validity of lab film studies.",
        level: "SL",
      },
      {
        front: "What are the four pillars of Fisher & Geiselman's (1992) Cognitive Interview?",
        back: "1. **Mental reinstatement of context**, 2. **Report everything**, 3. **Recall in reverse/varied order**, 4. **Change perspective** — boosting accurate detail recall by ~35–41% (Köhnken et al., 1999).",
        level: "SL",
      },
      {
        front: "Distinguish Functional Fixedness (Duncker) from Mental Set / Einstellung (Luchins).",
        back: "**Functional fixedness** restricts how you perceive an *object's* use (tack box as container, not shelf). **Mental set (Einstellung)** locks you into repeating a previously successful *problem-solving formula* even when a simpler shortcut exists.",
        level: "SL",
      },
      {
        front: "List Miyake et al.'s (2000) three core Executive Functions and a task measuring each.",
        back: "**Inhibitory control** (Stroop / Go–No-Go), **Cognitive flexibility / set-shifting** (Wisconsin Card Sorting Test), and **Working-memory updating** (n-back / backward digit span).",
        level: "SL",
      },
      {
        front: "[HL] How does the Overjustification Effect qualify Skinnerian operant conditioning in classrooms?",
        back: "Lepper et al. (1973) & Deci's Self-Determination Theory show expected tangible rewards for intrinsically enjoyable tasks can crowd out autonomy, lowering voluntary engagement once rewards stop.",
        level: "HL",
      },
      {
        front: "[HL] Why did Lehtonen et al. (2018) challenge Bialystok's bilingual executive-control advantage?",
        back: "Across 152 studies, correcting for **publication bias** (unpublished null results) and SES/immigrant confounds reduced the domain-general bilingual EF advantage to near zero (Hedges' g ≈ 0).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Always evaluate Context 4 through **3 Approaches** (Biological, Cognitive, Sociocultural) and the **6 FA2027 Core Concepts** (Bias, Causality, Change, Measurement, Perspective, Responsibility).",
      "Negative reinforcement **increases** behaviour by *removing* an aversive stimulus; punishment **decreases** behaviour.",
      "Variable-Ratio (VR) schedules create the highest steady response rate and greatest resistance to extinction; Fixed-Interval (FI) schedules create scalloped curves.",
      "LTP depends on glutamate, AMPA depolarization, Mg²⁺ removal from NMDA receptors, Ca²⁺ influx, and insertion of additional postsynaptic AMPA receptors, consolidated during slow-wave sleep.",
      "Total Cognitive Load = Intrinsic + Extraneous + Germane ≤ Working-Memory Capacity; effective teaching minimizes *extraneous* load to expand *germane* schema building.",
      "Retrieval practice (Roediger & Karpicke, 2006) and spaced repetition (Cepeda et al., 2006) outperform rereading on delayed recall despite feeling less fluent during study.",
      "Post-event misinformation (Loftus & Palmer, 1974), weapon focus (Loftus et al., 1987), extreme stress (Deffenbacher et al., 2004), and own-race bias (Meissner & Brigham, 2001) compromise eyewitness accuracy.",
      "Fisher & Geiselman's (1992) Cognitive Interview uses 4 memory-grounded pillars to increase accurate witness details (~35–41%) while lowering leading-question contamination.",
      "Miyake's prefrontal executive-function triad (inhibitory control, cognitive flexibility, WM updating) helps overcome functional fixedness (Duncker) and mental set (Luchins).",
      "SES and stereotype threat impair cognition via environmental stress and working-memory depletion — not fixed genetic limits — while bilingual EF claims face serious publication-bias and confound critiques.",
    ],
    misconceptions: [
      {
        wrong: "Negative reinforcement is a mild form of punishment because the word 'negative' means bad.",
        right: "In Skinner's operant framework, 'negative' means *subtracting/removing* a stimulus, and 'reinforcement' ALWAYS *increases* behaviour frequency (e.g., taking painkillers removes a headache, strengthening pill-taking).",
        level: "SL",
      },
      {
        wrong: "Good teaching aims to eliminate all cognitive load so learning feels effortless.",
        right: "Sweller's theory targets eliminating **extraneous** load, NOT germane load. Productive **germane** effort (and desirable difficulty like retrieval practice) is required to build durable LTM schemas.",
        level: "SL",
      },
      {
        wrong: "If an eyewitness is 100% confident and remembers vivid details like broken glass, their testimony is reliable.",
        right: "Confidence correlates weakly with accuracy once post-event misinformation or lineup feedback intervenes; false memories (Loftus & Palmer; Loftus & Pickrell) can feel just as vivid and certain as true memories.",
        level: "SL",
      },
      {
        wrong: "Extinction in classical conditioning permanently erases the original learned association.",
        right: "Spontaneous recovery proves extinction builds *new inhibitory learning* that suppresses the CR rather than deleting the original CS–UCS trace.",
        level: "SL",
      },
      {
        wrong: "Lower average executive-function scores in low-SES children prove genetic or permanent cognitive deficits.",
        right: "SES correlates with modifiable environmental stressors (chronic cortisol, poor nutrition, noisy housing). Early-enrichment and poverty-reduction interventions demonstrate substantial neurocognitive plasticity (**Change**).",
        level: "SL",
      },
      {
        wrong: "Mirror neurons alone fully explain human observational learning and empathy.",
        right: "Direct single-cell mirror-neuron recordings come primarily from macaques; human fMRI provides correlational voxel-level activation, so Bandura's cognitive ARRM processes and cultural context remain indispensable.",
        level: "SL",
      },
      {
        wrong: "[HL] Bilingualism has been conclusively proven to cause superior domain-general executive function across all ages.",
        right: "While early small-sample studies (Bialystok) reported advantages, large replications (Paap & Greenberg, 2013) and bias-corrected meta-analyses (Lehtonen et al., 2018) find negligible domain-general effects once publication bias and SES confounds are controlled.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Labelling the UCR and CR identically without specifying the triggering stimulus — always link UCR to the UCS and CR to the CS.",
      "Confusing Fixed Interval (FI) with Fixed Ratio (FR): check whether the contingency counts *clock time* or *number of responses*.",
      "Describing Loftus & Palmer (1974) Experiment 1 without mentioning Experiment 2's broken-glass finding — Exp 2 is essential to counter the 'response-bias only' critique.",
      "Evaluating Loftus & Palmer only with 'low ecological validity' as a one-liner — contrast it explicitly with Yuille & Cutshall (1986) to show nuanced **Measurement** evaluation.",
      "Mixing up **functional fixedness** (Duncker: rigid use of an object) with **mental set / Einstellung** (Luchins: rigid repetition of a strategy/formula).",
      "Forgetting to anchor Paper 1 Sec C Concept ERQs explicitly in the named FA2027 Core Concept (e.g., weaving **Causality**, **Bias**, or **Responsibility** into every paragraph, not merely the conclusion).",
      "Confusing percentage-point difference (`61% − 40% = 21 pp`) with relative percentage gain (`(61 − 40)/40 × 100 = 52.5%`) in quantitative prompts.",
      "Treating Cognitive Load Theory as purely 'avoid multitasking' without defining intrinsic, extraneous, and germane load within limited working memory.",
    ],
    mnemonics: [
      {
        topic: "Bandura's Observational Learning Mediators",
        device: "ARRM",
        explanation: "**A**ttention → **R**etention → **R**eproduction → **M**otivation (the four cognitive bridges between seeing a model and performing the behaviour).",
        level: "SL",
      },
      {
        topic: "Sweller's Cognitive Load Triad",
        device: "I-E-G (Inherent, Extra clutter, Growth)",
        explanation: "**I**ntrinsic (inherent complexity) + **E**xtraneous (extra wasted clutter) + **G**ermane (growth of LTM schemas) ≤ Working-Memory Capacity.",
        level: "SL",
      },
      {
        topic: "Cognitive Interview 4 Pillars",
        device: "C-R-R-C (Context, Report, Reverse, Change)",
        explanation: "**C**ontext reinstatement, **R**eport everything, **R**everse order, **C**hange perspective.",
        level: "SL",
      },
      {
        topic: "Miyake's Executive Function Triad",
        device: "I-F-U (Inhibit, Flex, Update)",
        explanation: "**I**nhibitory control (Stroop), Cognitive **F**lexibility (WCST), Working-memory **U**pdating (n-back).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Forensic Reform & The Innocence Project",
        emoji: "⚖️",
        detail:
          "Eyewitness misidentification contributed to roughly two-thirds of early US DNA-exonerated wrongful convictions. Police forces worldwide now adopt Fisher & Geiselman's Cognitive Interview and double-blind sequential lineups to honour psychological **Responsibility**.",
      },
      {
        title: "Spaced-Retrieval Apps & Exam Revision",
        emoji: "🗂️",
        detail:
          "Flashcard engines like Anki schedule reviews right before forgetting sets in — combining Roediger & Karpicke's testing effect, Cepeda's spacing intervals, and Hebbian LTP consolidation.",
      },
      {
        title: "Gamified Variable-Ratio Design",
        emoji: "🎮",
        detail:
          "Loot boxes, infinite social-media feeds, and mystery-streak rewards harness Skinnerian variable-ratio (VR) schedules and dopaminergic prediction errors — driving intense engagement and raising ethical **Responsibility** debates for minors.",
      },
      {
        title: "Anticipatory Nausea in Oncology Clinics",
        emoji: "🏥",
        detail:
          "Roughly 20–30% of chemotherapy patients develop Pavlovian anticipatory nausea triggered by clinic sights or smells. Clinics apply classical conditioning principles (novel flavour 'scapegoats' and systematic relaxation) to blunt conditioned distress.",
      },
      {
        title: "Singapore Multilingual Classrooms & Educational Equity",
        emoji: "🇸🇬",
        detail:
          "Bilingual education in Singapore illustrates why researchers separate language richness from socioeconomic confounders — while evidence-based cognitive-load lesson design and early-childhood support directly strengthen students' executive functioning.",
      },
    ],
    videos: [
      {
        title: "Classical & Operant Conditioning — CrashCourse Psychology",
        channel: "CrashCourse",
        url: "https://www.youtube.com/results?search_query=CrashCourse+Psychology+How+to+Train+a+Brain+classical+operant+conditioning",
      },
      {
        title: "Long-Term Potentiation (LTP) & Synaptic Plasticity Explained",
        channel: "2-Minute Neuroscience",
        url: "https://www.youtube.com/results?search_query=2+Minute+Neuroscience+Long+Term+Potentiation+LTP+NMDA+AMPA",
      },
      {
        title: "How Reliable Is Your Memory? — Elizabeth Loftus (TED)",
        channel: "TED",
        url: "https://www.youtube.com/results?search_query=Elizabeth+Loftus+How+reliable+is+your+memory+TED",
      },
      {
        title: "Cognitive Load Theory & Retrieval Practice for IB Students",
        channel: "The Learning Scientists",
        url: "https://www.youtube.com/results?search_query=Cognitive+Load+Theory+Sweller+Retrieval+Practice+Roediger+Karpicke",
      },
    ],
    formulas: [
      {
        name: "Classical Conditioning Association",
        formula: "{{NS + UCS -> UCR}}  then  {{CS -> CR}}",
        note: "Forward pairing (CS slightly preceding UCS) maximizes predictive acquisition.",
        level: "SL",
      },
      {
        name: "Sweller's Working-Memory Budget",
        formula: "{{Load_total = Load_intrinsic + Load_extraneous + Load_germane <= WM_max}}",
        note: "Cut extraneous load to protect germane schema-building headroom.",
        level: "SL",
      },
      {
        name: "Testing-Effect Relative Percentage Gain",
        formula: "{{\"Relative Gain (%)\" = ((R_test - R_study) / R_study) * 100}}",
        note: "Distinguish from simple percentage-point difference (R_test − R_study).",
        level: "SL",
      },
      {
        name: "False-Memory Endorsement Rate (%)",
        formula: "{{\"False Rate (%)\" = (n_false / N_total) * 100}}",
        note: "Used in Loftus & Palmer Exp 2 and Loftus & Pickrell 'lost in the mall' analyses.",
        level: "SL",
      },
      {
        name: "Misinformation Relative Risk Ratio",
        formula: "{{RR = Rate_leading / Rate_control}}",
        note: "RR = 2.5 means leading-question witnesses were 2.5× as likely to endorse false details.",
        level: "SL",
      },
      {
        name: "Stroop Interference Effect (ms)",
        formula: "{{Interference = RT_incongruent - RT_congruent}}",
        note: "Larger positive latency gap = greater demand on inhibitory control.",
        level: "SL",
      },
      {
        name: "Stroop Percentage Slowdown",
        formula: "{{\"Slowdown (%)\" = ((RT_incongruent - RT_congruent) / RT_congruent) * 100}}",
        note: "Normalizes interference against individual baseline reading speed.",
        level: "SL",
      },
      {
        name: "Operant Contingency Rule",
        formula: "{{\"Reinforcement\" -> Behaviour up;  \"Punishment\" -> Behaviour down}}",
        note: "Positive = stimulus added; Negative = stimulus removed.",
        level: "SL",
      },
      {
        name: "LTP Synaptic Cascade",
        formula: "{{\"Glutamate\" -> \"AMPA (Na+)\" -> \"NMDA (Mg2+ out, Ca2+ in)\" -> \"More AMPA\"}}",
        note: "Cellular basis of Hebbian synaptic strengthening in hippocampus.",
        level: "SL",
      },
      {
        name: "Effect Size (Cohen's d) for Replication Audits",
        formula: "{{d = (M_1 - M_2) / SD_pooled}}",
        note: "[HL] Quantifies practical magnitude (small ≈ 0.2, medium ≈ 0.5, large ≈ 0.8) in bilingual & testing-effect meta-analyses.",
        level: "HL",
      },
    ],
  },
};
