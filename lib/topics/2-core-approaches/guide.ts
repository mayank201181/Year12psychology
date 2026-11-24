import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "2-core-approaches",
  title: "Topic 2: Core Content Foundations — Biological, Cognitive & Sociocultural",
  strand: "Concepts & Core Foundations",
  icon: "🧠",
  level: "SL",
  summary:
    "Master the three core psychological approaches of IB Psychology (FA 2027) — Biological, Cognitive, and Sociocultural — and see how brain mechanisms, mental processes, and social contexts interact across human behaviour.",
  intro:
    "Every context in IB Psychology (FA 2027) — Health, Development, Relationships, and Learning — is built on three complementary lenses: **Biological**, **Cognitive**, and **Sociocultural**. No single approach explains human behaviour completely. A student freezing before an oral exam experiences a cortisol surge and amygdala activation (**Biological**), catastrophizing schemas and working-memory overload (**Cognitive**), and evaluative pressure from peer and cultural norms (**Sociocultural**). In this topic you will build rock-solid command of the core theories, mechanisms, classic and contemporary empirical studies, and quantitative benchmarks that anchor Paper 1 Section A and underpin every concept-driven evaluation.",
  guide: [
    // =========================================================================
    // SECTION 1: BIOLOGICAL APPROACH
    // =========================================================================
    {
      id: "biological-approach",
      heading: "Biological Approach: Brain, Neuroplasticity, Neurotransmitters & Genetics",
      level: "SL",
      discovery: {
        problem:
          "Before sitting the notorious London taxi exam ('The Knowledge'), trainees must memorize 25,000 streets and thousands of landmarks over 3–4 years. Suppose an MRI scan reveals that licensed London cabbies have a significantly larger posterior hippocampus than age-matched non-drivers. **Before reading on:** does this single cross-sectional MRI comparison prove that spatial navigation training *caused* the hippocampus to grow? What alternative explanation could account for the difference, and what study design would resolve it?",
        idea:
          "A single cross-sectional scan shows only a **correlation** — people born with a naturally larger posterior hippocampus might simply be more likely to pass the exam (reverse causality / selection bias). To strengthen **Causality**, researchers check two things: (1) whether hippocampal volume correlates positively with *years spent driving* (which Maguire et al., 2000 found), and (2) a **longitudinal** MRI study scanning trainees *before* and *after* qualifying (Woollett & Maguire, 2011), which confirmed that only trainees who passed the exam showed posterior hippocampal grey-matter growth — clear evidence of experience-driven **neuroplasticity** (**Change**).",
      },
      body: `The **Biological Approach** assumes that behaviour, emotion, and cognition arise from physiological systems — neural architecture, chemical signalling, hormones, and inherited genetic predispositions shaped by evolution — while constantly interacting with the environment.

### 1. Localization of Function vs Distributed Neural Networks
**Strict localization** argues that specific brain regions execute distinct functions, whereas **relative localization / distributed networks** recognizes that complex behaviours rely on dynamic circuits across interacting regions:
- **Hippocampus** (medial temporal lobe): consolidates new explicit/declarative memories and builds spatial maps; bilateral damage produces severe anterograde amnesia (Case of **H.M.**, Milner & Scoville, 1957).
- **Amygdala** (limbic system): evaluates emotional salience, threat detection, and fear conditioning, modulating how strongly emotional memories are consolidated via hippocampal links.
- **Prefrontal Cortex (PFC)**: governs executive functions — working-memory updating, impulse inhibition, decision-making, and emotional regulation (illustrated historically by Phineas Gage and modern fMRI studies).
- **Neuroimaging & Measurement**: **Structural MRI** captures high-resolution static anatomy (grey-matter volume, e.g. Maguire et al., 2000; Draganski et al., 2004), whereas **fMRI** tracks blood-oxygen-level-dependent (BOLD) haemodynamic changes to infer active regions during tasks (strong spatial resolution, ~1–2 s temporal lag, correlational rather than strictly causal).

### 2. Neuroplasticity & Synaptic Pruning (**Change**)
**Neuroplasticity** is the brain's lifelong ability to reorganize synaptic connections in response to experience, learning, or injury:
- **Neural branching & Long-Term Potentiation (LTP)**: repeated co-activation strengthens synapses ("neurons that fire together wire together").
- **Synaptic pruning**: under-used synaptic connections are eliminated to increase network efficiency.
- **Key studies**: **Maguire et al. (2000)** found larger posterior hippocampi in London taxi drivers correlated positively with time on the job (and Woollett & Maguire, 2011 proved growth longitudinally). **Draganski et al. (2004)** randomly assigned non-jugglers to 3 months of juggling practice or a control group; MRI scans showed grey-matter expansion in the mid-temporal visual-motion area (V5/hMT) that partially reversed after 3 months without practice — showing both **Change** and reversibility.

### 3. Neurotransmission, Agonists & Antagonists
Neurons communicate electrochemically across the **synaptic cleft**. When an action potential reaches the presynaptic axon terminal, synaptic vesicles fuse with the membrane and release **neurotransmitters** that diffuse across the cleft and bind to complementary **postsynaptic receptors** (lock-and-key). Signals are terminated by **reuptake** into the presynaptic neuron or **enzymatic breakdown**.

| Neurotransmitter | Primary Functional Role | Exogenous Modulator Example |
|---|---|---|
| **Acetylcholine (ACh)** | Memory consolidation, attention, muscle contraction | **Scopolamine** (antagonist) blocks muscarinic ACh receptors → impairs spatial memory encoding (**Antonova et al., 2011**) |
| **Serotonin (5-HT)** | Mood regulation, sleep, impulse & aggression control | **SSRIs** (e.g. fluoxetine) inhibit serotonin reuptake (functional agonist) → increase cleft serotonin (**Crockett et al., 2010** linked higher 5-HT to harm aversion) |
| **Dopamine (DA)** | Reward prediction, motivation, motor control | **L-DOPA / cocaine** enhance DA signalling (agonists/reuptake blockers); **haloperidol** blocks D2 receptors (antagonist) |

- **Agonist**: mimics a neurotransmitter or increases its synaptic availability (e.g. blocking reuptake), amplifying postsynaptic firing.
- **Antagonist**: binds to postsynaptic receptors without activating them (or inhibits synthesis/release), blocking the endogenous neurotransmitter and reducing postsynaptic firing.

### 4. Hormones & Behavioural Modulation
Unlike rapid, targeted neurotransmitters, **hormones** are secreted by endocrine glands into the bloodstream, acting more slowly and widely:
- **Cortisol** (adrenal cortex, HPA axis): mobilizes glucose under stress; chronically elevated cortisol impairs hippocampal memory retrieval (**Newcomer et al., 1999** found high-dose synthetic cortisol reduced declarative paragraph recall).
- **Adrenaline / Epinephrine** (adrenal medulla, SAM pathway): triggers immediate fight-or-flight arousal and strengthens emotional memory consolidation via vagus-nerve/amygdala signalling (**Cahill & McGaugh, 1995**).
- **Oxytocin** (hypothalamus / posterior pituitary): modulates social affiliation and trust — **Kosfeld et al. (2005)** showed intranasal oxytocin increased investor transfers in a trust game, while **Baumgartner et al. (2008)** found reduced amygdala activation after betrayal under oxytocin (though replication and context-sensitivity show oxytocin also heightens in-group defence).

### 5. Genetics, Twin/Adoption Designs & Evolutionary Explanations
Behavioural geneticists estimate genetic versus environmental contributions using **concordance rates** in **monozygotic (MZ)** twins (~100% shared segregating DNA) vs **dizygotic (DZ)** twins (~50% shared DNA):
- If MZ concordance substantially exceeds DZ concordance (e.g. ~48% vs ~17% for schizophrenia in **Gottesman, 1991**; or **Bouchard et al., 1990** Minnesota Study of Twins Reared Apart reporting ~70% variance in IQ associated with genetics), genetic predisposition is supported — yet MZ concordance below 100% proves **environment matters**.
- **Gene × Environment (G×E) interaction**: **Caspi et al. (2003)** tracked 847 New Zealanders longitudinally and found individuals carrying short alleles of the serotonin transporter gene (**5-HTT**) showed sharply higher depression risk *only* after multiple severe stressful life events — refuting crude genetic determinism.
- **Evolutionary psychology**: argues that adaptive traits enhancing survival or reproductive fitness persisted via natural selection (e.g. **Fessler et al., 2005** showed elevated first-trimester pregnancy disgust sensitivity, hypothesized to protect vulnerable embryos from pathogens). Evolutionary accounts are difficult to falsify (**Measurement / Causality**), as ancestral environments cannot be manipulated experimentally.`,
      diagram: `<svg viewBox="0 0 580 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing key localized brain regions on the left and synaptic transmission showing agonist binding versus antagonist receptor blockade on the right">
  <rect x="0" y="0" width="580" height="310" fill="#ffffff" rx="12"/>
  <text x="145" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1c1630">Key Brain Regions (Network View)</text>
  <text x="430" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1c1630">Synaptic Cleft: Agonist vs Antagonist</text>
  <line x1="285" y1="16" x2="285" y2="294" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Left: Brain silhouette -->
  <path d="M55,170 C40,125 65,65 135,58 C205,52 252,92 250,148 C248,188 220,212 188,218 C172,221 158,242 146,262 L126,258 C132,235 128,216 112,210 C82,205 64,195 55,170 Z" fill="#f1eef9" stroke="#7c3aed" stroke-width="2.2"/>
  <!-- PFC highlight -->
  <path d="M58,150 C52,115 72,78 112,66 L118,142 L68,162 Z" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/>
  <text x="86" y="114" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">PFC</text>
  <text x="86" y="128" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Executive</text>
  <text x="86" y="139" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">control</text>

  <!-- Hippocampus -->
  <path d="M138,162 C152,140 192,138 206,162 C214,176 196,192 174,186 C158,182 148,176 138,162 Z" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="174" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#14532d">Hippocampus</text>

  <!-- Amygdala -->
  <circle cx="132" cy="178" r="14" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="132" y="181" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#9a3412">Amyg.</text>

  <!-- Left callout legend -->
  <rect x="20" y="232" width="248" height="64" rx="8" fill="#f8fafc" stroke="#e2dcf0" stroke-width="1"/>
  <text x="30" y="249" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#14532d">• Hippocampus:</text>
  <text x="112" y="249" font-family="sans-serif" font-size="9.5" fill="#334155">spatial &amp; declarative memory</text>
  <text x="30" y="266" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#9a3412">• Amygdala:</text>
  <text x="112" y="266" font-family="sans-serif" font-size="9.5" fill="#334155">threat &amp; emotional salience</text>
  <text x="30" y="283" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#4c1d95">• PFC:</text>
  <text x="112" y="283" font-family="sans-serif" font-size="9.5" fill="#334155">planning, inhibition, System 2</text>

  <!-- Right: Presynaptic terminal -->
  <path d="M345,42 L515,42 L515,108 C515,126 485,134 430,134 C375,134 345,126 345,108 Z" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="430" y="62" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">Presynaptic Axon Terminal</text>
  <!-- Vesicles -->
  <circle cx="385" cy="96" r="14" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="381" cy="94" r="3" fill="#7c3aed"/><circle cx="389" cy="98" r="3" fill="#7c3aed"/><circle cx="385" cy="91" r="3" fill="#7c3aed"/>
  <circle cx="430" cy="108" r="14" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="426" cy="106" r="3" fill="#7c3aed"/><circle cx="434" cy="110" r="3" fill="#7c3aed"/><circle cx="430" cy="103" r="3" fill="#7c3aed"/>
  <!-- Reuptake pump -->
  <rect x="488" y="102" width="22" height="22" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="499" y="116" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="700" fill="#92400e">RU</text>
  <text x="536" y="110" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#92400e">Reuptake</text>
  <text x="536" y="121" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#92400e">pump</text>

  <!-- Synaptic cleft label -->
  <text x="320" y="168" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#5b5375">Synaptic</text>
  <text x="320" y="180" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#5b5375">Cleft</text>

  <!-- Floating molecules -->
  <circle cx="384" cy="152" r="4.5" fill="#7c3aed"/>
  <polygon points="430,146 436,156 424,156" fill="#15803d"/>
  <rect x="470" y="148" width="10" height="10" rx="2" fill="#c2410c"/>

  <!-- Postsynaptic dendrite -->
  <path d="M335,208 C335,198 525,198 525,208 L525,254 L335,254 Z" fill="#f1eef9" stroke="#5b5375" stroke-width="2"/>
  <text x="430" y="242" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">Postsynaptic Neuron Membrane</text>

  <!-- 3 Receptors -->
  <!-- 1: Native NT -->
  <path d="M372,190 L372,206 L396,206 L396,190 L390,190 L390,198 L378,198 L378,190 Z" fill="#7c3aed"/>
  <circle cx="384" cy="191" r="5" fill="#7c3aed" stroke="#ffffff" stroke-width="1"/>
  <text x="384" y="220" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#4c1d95">Native NT</text>

  <!-- 2: Agonist -->
  <path d="M418,190 L418,206 L442,206 L442,190 L436,190 L436,198 L424,198 L424,190 Z" fill="#15803d"/>
  <polygon points="430,184 436,195 424,195" fill="#15803d" stroke="#ffffff" stroke-width="1"/>
  <text x="430" y="220" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#14532d">Agonist (+)</text>

  <!-- 3: Antagonist -->
  <path d="M464,190 L464,206 L488,206 L488,190 L482,190 L482,198 L470,198 L470,190 Z" fill="#c2410c"/>
  <rect x="470" y="185" width="12" height="10" rx="2" fill="#c2410c" stroke="#ffffff" stroke-width="1"/>
  <text x="476" y="220" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#9a3412">Antagonist (✕)</text>

  <!-- Bottom right key -->
  <rect x="305" y="264" width="260" height="34" rx="8" fill="#f8fafc" stroke="#e2dcf0" stroke-width="1"/>
  <text x="435" y="279" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#14532d"><tspan font-weight="700">Agonist / SSRI:</tspan> mimics NT or blocks reuptake → ↑ firing</text>
  <text x="435" y="292" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#9a3412"><tspan font-weight="700">Antagonist (Scopolamine):</tspan> blocks receptor → ↓ firing</text>
</svg>`,
      diagramCaption:
        "Left: Key interacting brain structures (relative localization). Right: Electrochemical synaptic transmission contrasting endogenous neurotransmitter binding, agonistic amplification, and competitive antagonistic blockade.",
      workedExamples: [
        {
          title: "Evaluating Twin Concordance & Heritability",
          problem:
            "A behavioural genetics study tracks 200 twin pairs for an anxiety trait. Among 100 monozygotic (MZ) twin pairs, 56 pairs are concordant. Among 100 dizygotic (DZ) twin pairs, 28 pairs are concordant. (a) Calculate the MZ and DZ concordance rates and Falconer's rough heritability estimate {{h^2 = 2(r_{MZ} - r_{DZ})}}. (b) Explain what the result implies about **Causality** and the environment.",
          steps: [
            "Compute the MZ concordance proportion: {{r_{MZ} = 56/100 = 0.56}} (56%).",
            "Compute the DZ concordance proportion: {{r_{DZ} = 28/100 = 0.28}} (28%).",
            "Apply Falconer's heritability estimate: {{h^2 = 2(0.56 - 0.28) = 2(0.28) = 0.56}} (56% of population variance attributed to genetic differences).",
            "Interpret **Causality** cautiously: because MZ concordance (56%) is twice DZ concordance (28%), genetics contributes meaningfully — yet 44% of MZ pairs are *discordant* despite sharing ~100% DNA, proving non-shared environmental factors and G×E interactions are essential.",
          ],
          answer:
            "MZ = 56%, DZ = 28%, estimated heritability {{h^2 = 0.56}} (56%); indicates substantial genetic vulnerability but not genetic determinism because 44% of MZ pairs are discordant.",
          yourTurn: {
            question:
              "In a twin study of sleep duration, 72 out of 120 MZ twin pairs are concordant, and 36 out of 120 DZ twin pairs are concordant. Calculate Falconer's heritability estimate {{h^2 = 2(r_{MZ} - r_{DZ})}} as a percentage (write a number without decimals).",
            answer: { type: "number", value: 60, display: "60%" },
            solution:
              "{{r_{MZ} = 72/120 = 0.60}} (60%) and {{r_{DZ} = 36/120 = 0.30}} (30%). Therefore {{h^2 = 2(0.60 - 0.30) = 0.60}}, or **60%**.",
          },
        },
        {
          title: "Linking Scopolamine to Acetylcholine & Causality (Antonova et al., 2011)",
          problem:
            "Outline how **Antonova et al. (2011)** established a causal link between acetylcholine neurotransmission and hippocampal spatial memory encoding.",
          steps: [
            "**Design & IV manipulation**: 20 healthy adult males took part in a **double-blind, placebo-controlled, repeated-measures** experiment receiving either **scopolamine** (an acetylcholine muscarinic **antagonist**) or a placebo 70–90 minutes before entering an fMRI scanner.",
            "**DV measurement**: Participants navigated a virtual-reality Arena task to locate a hidden pole while fMRI recorded BOLD hippocampal activation.",
            "**Findings**: Under scopolamine, participants showed significantly reduced hippocampal activity during encoding and made significantly more spatial navigation errors than under placebo.",
            "**Causality & Limitations**: Random counterbalancing and double-blind placebo control establish strong internal validity for ACh's role in spatial memory, though the small all-male sample (n = 20) limits population generalizability (**Bias**).",
          ],
          answer:
            "By experimentally blocking ACh receptors with scopolamine in a double-blind placebo fMRI design, Antonova et al. (2011) demonstrated that reduced ACh signalling causally lowers hippocampal activation and impairs spatial memory encoding.",
        },
      ],
      keyPoints: [
        "Brain functions show **relative localization within distributed networks** — e.g. hippocampus (declarative/spatial consolidation), amygdala (emotional salience), and PFC (executive regulation) work together.",
        "**Neuroplasticity** (Maguire et al., 2000; Draganski et al., 2004) demonstrates structural and functional **Change** across adulthood via synaptic branching and pruning.",
        "**Agonists** amplify neurotransmitter signalling (mimicking the molecule or blocking reuptake like SSRIs), whereas **antagonists** (e.g. scopolamine on ACh) occupy receptors and block native signalling.",
        "**Hormones** (cortisol, adrenaline, oxytocin) travel via the bloodstream for broader, slower modulation than synaptic neurotransmitters.",
        "Twin concordance below 100% in MZ twins and G×E findings (**Caspi et al., 2003**) refute biological determinism — genes create probabilistic predispositions shaped by environment.",
      ],
      whyItWorks:
        "Understanding mechanisms at three nested scales — **synaptic molecules** (neurotransmitters/drugs), **neural circuits** (plasticity & localized hubs), and **organism-wide biology** (hormones & G×E genetics) — lets you avoid reductionist traps. In IB essays, showing *how* an environmental experience physically alters a synapse or activates a gene immediately earns top-band **Perspective** and **Change** credit.",
      strategies: [
        "Always pair a biological structure or chemical with **one concrete mechanism** (e.g. 'scopolamine antagonizes muscarinic ACh receptors') and **one named empirical study** (Antonova et al., 2011).",
        "When evaluating MRI/fMRI or twin studies, explicitly apply the core concept **Causality**: correlational imaging cannot establish direction of cause unless paired with a longitudinal or experimental intervention.",
        "Avoid biological reductionism by stating what the biological level leaves unexplained (cognitive appraisal, cultural norms) — linking to **Perspective**.",
      ],
      thinkDeeper:
        "If an SSRI increases synaptic serotonin within hours of the first tablet, why do patients typically wait 2–4 weeks before experiencing clinical mood improvement? (Hint: downstream neuroplasticity and receptor downregulation — showing why synaptic chemistry alone is an incomplete account of **Change**.)",
    },

    // =========================================================================
    // SECTION 2: COGNITIVE APPROACH I — ATTENTION, MEMORY & SCHEMAS
    // =========================================================================
    {
      id: "cognitive-memory-schemas",
      heading: "Cognitive Approach I: Attention, Memory Models & Schema Theory",
      level: "SL",
      discovery: {
        problem:
          "Try reading this sentence aloud while simultaneously tapping a steady rhythm with your left hand — easy! Now try reciting the alphabet aloud while silently counting backwards from 100 by threes — almost impossible! **Before reading on:** why does the classic single-box Short-Term Memory store struggle to explain why two simultaneous tasks sometimes run smoothly together and sometimes collide completely?",
        idea:
          "If Short-Term Memory were a single unitary buffer, *any* two demanding tasks would compete for the exact same slot. Because verbal + motor/spatial tasks barely clash whereas two verbal tasks jam each other, Baddeley & Hitch (1974) proposed **Working Memory** with separate specialized subsystems — a **phonological loop** for verbal/auditory material and a **visuospatial sketchpad** for visual/spatial information — coordinated by a **central executive**.",
      },
      body: `The **Cognitive Approach** views the mind as an active information-processing system that encodes, transforms, stores, and reconstructs representations of the world. Because mental processes cannot be observed directly, cognitive psychologists infer them via controlled experiments, reaction times, error patterns, and neuropsychological case studies (**Measurement**).

### 1. Selective Attention & The Multi-Store Model (Atkinson & Shiffrin, 1968)
Because sensory input far exceeds processing bandwidth, **selective attention** filters what enters awareness (e.g. Broadbent's filter model and the 'cocktail party effect'). In Atkinson & Shiffrin's **Multi-Store Model (MSM)**, information flows linearly through three distinct structural stores:

| Store | Coding | Capacity | Duration | Transfer / Forgetting |
|---|---|---|---|---|
| **Sensory Register** | Modality-specific (iconic/echoic) | Very large | ~0.25–2 s | **Attention** → STM; otherwise rapid decay |
| **Short-Term Memory (STM)** | Primarily acoustic | {{7 ± 2}} chunks (Miller, 1956) | ~18–30 s without rehearsal | **Maintenance rehearsal** → LTM; displacement or decay |
| **Long-Term Memory (LTM)** | Primarily semantic | Effectively unlimited | Up to a lifetime | **Retrieval** back to STM; interference / cue failure |

- **Supporting evidence**:
  - **Serial Position Effect (Glanzer & Cunitz, 1966)**: participants recalling a 15-word list remember the earliest words (**primacy effect** — rehearsed into LTM) and the final words (**recency effect** — still active in STM). Inserting a 30-second counting distractor task eliminates the recency effect while leaving primacy intact, confirming separate STM and LTM stores.
  - **Neuropsychological double dissociation**: **H.M. (Milner & Scoville, 1957)** had bilateral hippocampal removal, retaining normal STM digit span (~18 s) while losing the ability to consolidate new explicit LTM (anterograde amnesia); **Clive Wearing** similarly retained procedural piano skill despite devastated episodic LTM.
- **Limitations**: Overly passive and linear — treats STM as a single unitary box and overemphasizes rote maintenance rehearsal over meaningful elaborative encoding (Craik & Lockhart's Levels of Processing).

### 2. The Working Memory Model (Baddeley & Hitch, 1974; Baddeley, 2000)
Replacing MSM's single passive STM, the **Working Memory Model (WMM)** portrays an active, multi-component workspace:
1. **Central Executive**: modality-free attentional controller with very limited capacity; allocates attention, switches tasks, and inhibits distractors (linked to prefrontal networks).
2. **Phonological Loop**: processes speech-based/auditory information (~2 s capacity) via two sub-parts: the **phonological store** ('inner ear') and **articulatory control process** ('inner voice' subvocal rehearsal).
3. **Visuospatial Sketchpad**: holds and manipulates visual images and spatial layouts ('inner eye': **visual cache** + **inner scribe**).
4. **Episodic Buffer** (added by Baddeley, 2000): a limited-capacity multimodal integrator that binds verbal, visual, and chronological details into coherent episodes and links them to LTM.

- **Supporting evidence**:
  - **Dual-task interference (Baddeley et al., 1975)**: tracking a moving visual target (visuospatial) simultaneously with a verbal reasoning task (phonological) succeeds cleanly, whereas two simultaneous visuospatial tasks cause sharp performance breakdown.
  - **Case of K.F. (Shallice & Warrington, 1970)**: after left-hemisphere brain injury, K.F. had severely impaired auditory/verbal STM digit span yet intact visual STM — demonstrating distinct slave systems.
- **Limitations**: The Central Executive remains the least precisely specified component ('homunculus' critique — difficult to operationalize and test falsifiably, **Measurement**).

### 3. Schema Theory & Reconstructive Memory
A **schema** is an organized mental framework of prior knowledge, expectations, and cultural scripts stored in LTM that guides encoding, comprehension, and retrieval.
- **Bartlett (1932) — *The War of the Ghosts***: British participants read and repeatedly reproduced a Native American folk tale. Over serial reproductions, recalls grew shorter (**levelling**), emphasized familiar details (**sharpening**), and replaced unfamiliar cultural concepts ('hunting seals', 'canoes') with British-schema equivalents ('going fishing', 'boats' — **assimilation / rationalization**). Memory is therefore **reconstructive**, not a video playback (**Bias**).
- **Brewer & Treyens (1981) — Office Schema**: participants waited 35 seconds in a staged graduate student's office, then recalled its contents. Most recalled schema-consistent items (desk, chair) and **falsely recalled books** that were absent (30% falsely reported books!), while missing schema-inconsistent items (a picnic basket) — though highly unusual salient objects (a skull) were sometimes well remembered.
- **Loftus & Palmer (1974) — Post-Event Misinformation**: participants watched car-crash films and estimated speed when asked *"About how fast were the cars going when they [hit / smashed / collided / bumped / contacted] into each other?"*. The verb **"smashed"** yielded a mean estimate of **40.5 mph** vs **31.8 mph** for **"contacted"** (34.0 mph for **"hit"**). One week later (Experiment 2), **32%** of the "smashed" group falsely recalled seeing broken glass vs **14%** of "hit" and **12%** of controls — proving leading post-event schemas actively rewrite memory traces (**Bias** & **Responsibility** in eyewitness testimony).`,
      diagram: `<svg viewBox="0 0 580 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram of Atkinson and Shiffrin Multi-Store Model on top versus Baddeley and Hitch Working Memory Model on bottom">
  <rect x="0" y="0" width="580" height="330" fill="#ffffff" rx="12"/>

  <!-- TOP PANEL: MSM -->
  <text x="20" y="24" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#4c1d95">A. Multi-Store Model (Atkinson &amp; Shiffrin, 1968) — Unitary STM</text>

  <rect x="20" y="42" width="118" height="58" rx="8" fill="#f1eef9" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="79" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#1c1630">Sensory Register</text>
  <text x="79" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Iconic / Echoic</text>
  <text x="79" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">~0.25–2 s</text>

  <!-- Arrow 1 -->
  <line x1="138" y1="71" x2="196" y2="71" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="196,66 205,71 196,76" fill="#7c3aed"/>
  <text x="171" y="63" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#6d28d9">Attention</text>

  <!-- STM -->
  <rect x="206" y="42" width="144" height="58" rx="8" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
  <text x="278" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#4c1d95">Short-Term Memory</text>
  <text x="278" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">7 ± 2 chunks · 18–30 s</text>
  <text x="278" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Acoustic coding</text>
  <!-- Rehearsal loop -->
  <path d="M245,42 C245,25 311,25 311,42" fill="none" stroke="#6d28d9" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="278" y="34" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#6d28d9">Rehearsal</text>

  <!-- Arrow 2 & Retrieval -->
  <line x1="350" y1="62" x2="416" y2="62" stroke="#15803d" stroke-width="2"/>
  <polygon points="416,57 425,62 416,67" fill="#15803d"/>
  <text x="387" y="54" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#15803d">Transfer</text>

  <line x1="425" y1="82" x2="359" y2="82" stroke="#0369a1" stroke-width="2"/>
  <polygon points="359,77 350,82 359,87" fill="#0369a1"/>
  <text x="387" y="95" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#0369a1">Retrieval</text>

  <!-- LTM -->
  <rect x="426" y="42" width="134" height="58" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="493" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d">Long-Term Memory</text>
  <text x="493" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#166534">Unlimited · Lifetime</text>
  <text x="493" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#166534">Semantic &amp; Schemas</text>

  <!-- Divider -->
  <line x1="20" y1="122" x2="560" y2="122" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="5 4"/>

  <!-- BOTTOM PANEL: WMM -->
  <text x="20" y="144" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#0369a1">B. Working Memory Model (Baddeley &amp; Hitch, 1974; Baddeley, 2000) — Active Multi-Component STM</text>

  <!-- Central Executive -->
  <rect x="195" y="158" width="190" height="44" rx="9" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
  <text x="290" y="177" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0c4a6e">Central Executive</text>
  <text x="290" y="192" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0369a1">Attentional control &amp; task switching</text>

  <!-- Connector lines -->
  <line x1="230" y1="202" x2="105" y2="226" stroke="#5b5375" stroke-width="1.8"/>
  <line x1="290" y1="202" x2="290" y2="226" stroke="#5b5375" stroke-width="1.8"/>
  <line x1="350" y1="202" x2="475" y2="226" stroke="#5b5375" stroke-width="1.8"/>

  <!-- Phonological Loop -->
  <rect x="20" y="226" width="168" height="54" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="104" y="245" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#92400e">Phonological Loop</text>
  <text x="104" y="260" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Inner ear (store) +</text>
  <text x="104" y="272" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Inner voice (rehearsal)</text>

  <!-- Episodic Buffer -->
  <rect x="206" y="226" width="168" height="54" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="290" y="245" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">Episodic Buffer (2000)</text>
  <text x="290" y="260" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#5b5375">Integrates multimodal</text>
  <text x="290" y="272" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#5b5375">chunks + chronology</text>

  <!-- Visuospatial Sketchpad -->
  <rect x="392" y="226" width="168" height="54" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="476" y="245" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#9a3412">Visuospatial Sketchpad</text>
  <text x="476" y="260" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#7c2d12">Visual cache (shape/colour)</text>
  <text x="476" y="272" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#7c2d12">+ Inner scribe (spatial map)</text>

  <!-- Bottom LTM bar -->
  <rect x="85" y="294" width="410" height="24" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="290" y="310" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#14532d">Long-Term Memory: Language (LTM) ↔ Episodic LTM ↔ Visual Semantics</text>
  <line x1="104" y1="280" x2="104" y2="294" stroke="#15803d" stroke-width="1.5"/>
  <line x1="290" y1="280" x2="290" y2="294" stroke="#15803d" stroke-width="1.5"/>
  <line x1="476" y1="280" x2="476" y2="294" stroke="#15803d" stroke-width="1.5"/>
</svg>`,
      diagramCaption:
        "Contrast between Atkinson & Shiffrin's linear Multi-Store Model (passive unitary STM) and Baddeley & Hitch's Working Memory Model (specialized slave subsystems coordinated by the Central Executive).",
      workedExamples: [
        {
          title: "Quantifying the Serial Position Effect (Glanzer & Cunitz, 1966)",
          problem:
            "In a classroom replication of Glanzer & Cunitz (1966), 40 students hear a 15-word list. In the **immediate recall** condition, the first 3 words are recalled on 96 out of 120 word-trials, the middle 3 words on 42 out of 120, and the final 3 words on 102 out of 120. After a **30-second backwards-counting delay**, recall of the final 3 words drops to 36 out of 120. (a) Calculate the immediate primacy %, immediate recency %, and delayed recency %. (b) Explain how this pattern supports the Multi-Store Model.",
          steps: [
            "Immediate primacy recall: {{(96/120) * 100 = 80%}}.",
            "Immediate recency recall: {{(102/120) * 100 = 85%}} (middle words: {{(42/120) * 100 = 35%}}).",
            "Delayed recency recall: {{(36/120) * 100 = 30%}} — a 55 percentage-point collapse.",
            "Interpretation: Immediate recency reflects items still held in **STM** (~18–30 s). Counting backwards prevents rehearsal and displaces STM items, erasing recency while leaving **primacy** intact because early words had already transferred to **LTM**.",
          ],
          answer:
            "Immediate primacy = 80%, immediate recency = 85%, delayed recency = 30%; selective elimination of recency confirms separate STM and LTM stores.",
          yourTurn: {
            question:
              "In a replication with 25 participants hearing 4 primacy words (100 word-trials) and 4 recency words (100 word-trials), immediate recency recall is 84% and falls to 28% after a 30-second counting delay. By how many percentage points did recency recall drop?",
            answer: { type: "number", value: 56, display: "56" },
            solution:
              "Percentage-point drop = {{84 - 28 = 56}} percentage points (because the 30-second distractor clears STM).",
          },
        },
        {
          title: "Diagnosing Working Memory Interference",
          problem:
            "A student listens to a Mandarin vocabulary podcast while trying to mentally rotate a 3D geometry shape, and performs well on both. When she switches to writing an English essay while listening to the podcast, her accuracy plummets. Explain both outcomes using the Working Memory Model.",
          steps: [
            "**Task pair 1 (low interference)**: Listening to spoken vocabulary relies on the **phonological loop**, whereas mentally rotating a 3D figure uses the **visuospatial sketchpad**. Because these are separate slave systems, capacity is not exceeded.",
            "**Task pair 2 (high interference)**: Writing an essay and listening to speech *both* compete for the limited capacity of the **phonological loop** (and demand executive switching from the **central executive**), producing dual-task interference.",
          ],
          answer:
            "Minimal interference occurs when tasks load separate slave systems (phonological loop + visuospatial sketchpad); severe interference occurs when two concurrent verbal tasks overload the phonological loop.",
        },
      ],
      keyPoints: [
        "MSM separates **Sensory Register**, **STM** ({{7 ± 2}} chunks, ~18–30 s), and **LTM**, supported by Glanzer & Cunitz's serial-position dissociation and patient H.M.",
        "WMM upgrades STM into an active system: **Central Executive**, **Phonological Loop**, **Visuospatial Sketchpad**, and **Episodic Buffer** (2000), supported by dual-task studies and patient K.F.",
        "**Schemas** speed up comprehension and fill gaps, but cause **reconstructive distortion** — levelling, sharpening, assimilation (Bartlett, 1932) and schema-driven false recall (Brewer & Treyens, 1981).",
        "**Loftus & Palmer (1974)** demonstrated that post-event leading verbs alter quantitative speed judgements and implant false memories of broken glass — illustrating **Bias** and legal **Responsibility**.",
      ],
      whyItWorks:
        "Cognitive models treat memory as an *active construction* rather than a filing cabinet. Comparing MSM vs WMM shows how psychology evolves through **falsification** (dual-task data falsified unitary STM), while Schema Theory explains why confident human memory is systematically vulnerable to cultural expectations and leading questions.",
      strategies: [
        "When asked to compare MSM and WMM, build explicit **point-by-point comparisons** (unitary vs multi-component STM; passive maintenance vs active manipulation; predictive power for dual-task performance).",
        "When evaluating Schema Theory, always cite **Measurement** challenges: schemas are hypothetical cognitive constructs inferred indirectly from errors, and Bartlett's early study lacked standardized instructions and control groups.",
        "Connect Loftus & Palmer (1974) to **ecological validity** (watching video clips lacks the emotional arousal of real accidents — contrast with Yuille & Cutshall, 1986 real-world gun-shop witnesses).",
      ],
      thinkDeeper:
        "In Brewer & Treyens's (1981) office study, participants recalled a totally schema-*inconsistent* skull almost as well as a schema-consistent desk. Why does Schema Theory predict *both* forgetting of mildly inconsistent items (picnic basket) and strong memory for bizarrely inconsistent items (skull) — and does this make Schema Theory harder to falsify?",
    },

    // =========================================================================
    // SECTION 3: COGNITIVE APPROACH II — DUAL-PROCESS, HEURISTICS & BIASES
    // =========================================================================
    {
      id: "cognitive-thinking-biases",
      heading: "Cognitive Approach II: Dual-Process Thinking, Heuristics & Biases",
      level: "SL",
      discovery: {
        problem:
          "Read quickly and note your gut answer before checking carefully: *A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?* Almost everyone's immediate instinct shouts **$0.10** — yet if the ball were $0.10, the bat would be $1.10 and the total $1.20! The true price is **$0.05**. **Before reading on:** what does the speed and persistence of the wrong gut answer reveal about how human reasoning operates?",
        idea:
          "Kahneman & Tversky proposed that our mind runs two modes of thinking: an effortless, automatic **System 1** that grabs intuitive shortcuts ('1.10 − 1.00 = 0.10'), and a slower, effortful **System 2** that checks algebraic constraints ({{x + (x + 1.00) = 1.10 => x = 0.05}}). Cognitive biases happen when System 1 fires a plausible heuristic and 'lazy' System 2 endorses it without verification.",
      },
      body: `Human decision-making rarely follows the perfectly rational calculations assumed by classical economics. **Kahneman & Tversky's Dual-Process Model** explains *why* intelligent people make predictable, systematic errors (**Bias**).

### 1. Dual-Process Thinking: System 1 vs System 2
| Feature | System 1 (Intuitive) | System 2 (Deliberative) |
|---|---|---|
| **Speed & Effort** | Fast, automatic, parallel, low cognitive load | Slow, effortful, serial, high working-memory load |
| **Control & Awareness** | Unconscious / involuntary ('gut feel') | Conscious, voluntary, rule-governed monitoring |
| **Strength** | Rapid pattern recognition, everyday efficiency | Abstract reasoning, statistical checks, bias override |
| **Vulnerability** | Relies on **heuristics** → systematic cognitive biases | Easily fatigued under stress, time pressure, or high load |

Note carefully: System 1 and System 2 are **functional metaphors**, not two literal anatomical brain lobes (though prefrontal executive networks are heavily recruited during System 2 override).

### 2. Core Heuristics & Systematic Biases
A **heuristic** is a mental shortcut that reduces cognitive load at the risk of predictable error:
- **Availability Heuristic**: judging how likely or frequent an event is by how easily vivid examples come to mind. **Tversky & Kahneman (1973)** showed most people judge English words starting with *K* to be more common than words with *K* as the third letter — even though third-letter *K* words are twice as common — because first-letter examples are far easier to retrieve. Similarly, sensational media coverage of shark attacks or plane crashes inflates perceived risk over far deadlier everyday hazards.
- **Representativeness Heuristic & Base-Rate Neglect**: judging probability by how closely someone resembles a mental prototype while ignoring underlying statistical base rates. In **Tversky & Kahneman (1983)** (*Linda Problem*), 85% of participants judged *"Linda is a bank teller and is active in the feminist movement"* more probable than *"Linda is a bank teller"* — committing the **conjunction fallacy**, since {{P(A ∩ B) <= P(A)}} mathematically!
- **Anchoring and Adjustment**: relying disproportionately on an initial reference number (**anchor**) — even an obviously arbitrary one — and adjusting insufficiently away from it. **Tversky & Kahneman (1974)** rigged a wheel of fortune to land on **10** or **65** before asking participants to estimate the percentage of African nations in the UN; medians were **25%** vs **45%**! Even experienced German judges gave longer prison sentences after rolling a rigged high-value die (**Englich et al., 2006**).
- **Framing Effect & Prospect Theory (Loss Aversion)**: logically equivalent choices yield opposite decisions depending on whether outcomes are framed as **gains** or **losses**. In **Tversky & Kahneman's (1981) Asian Disease Problem** (600 people at risk):
  - **Gain Frame**: *"200 people will be saved"* (sure) vs *"1/3 chance 600 saved, 2/3 chance nobody saved"* (gamble) → **72% chose the risk-averse sure option**.
  - **Loss Frame**: *"400 people will die"* (sure) vs *"1/3 chance nobody dies, 2/3 chance 600 die"* (gamble) → **78% chose the risk-seeking gamble**!
  - Even though expected lives saved are identical ({{200 = (1/3) * 600}}), **Prospect Theory** explains that losses loom roughly **2× larger** emotionally than equivalent gains (**loss aversion**), making people risk-averse for gains and risk-seeking to avoid sure losses.
- **Confirmation Bias**: seeking, interpreting, and remembering evidence that confirms existing beliefs while ignoring disconfirming evidence. In **Wason's (1966) four-card selection task** (rule: *"If a card has a vowel on one side, it has an even number on the other"*; cards showing **E, K, 4, 7**), fewer than 10% correctly turn **E** and **7** (falsification) — most mistakenly turn **E** and **4** (verification).

### 3. Emotion & Cognition: Flashbulb Memories
How does intense emotion interact with cognitive encoding? **Brown & Kulik (1977)** proposed that shocking, personally consequential public events trigger a special neural **"Now Print!"** mechanism creating vivid, photograph-like **flashbulb memories** (e.g. hearing of JFK's assassination).
- **Critical longitudinal test — Talarico & Rubin (2003)**: surveyed 54 Duke University students on **12 September 2001** (the day after 9/11) about *both* how they heard of the 9/11 attacks and an ordinary everyday event from the previous few days, then re-tested them at 1, 6, or 32 weeks.
- **Key finding**: Objective factual accuracy (consistency with Day-1 reports) **declined equally** for 9/11 flashbulb memories and everyday memories! What remained uniquely high for 9/11 was **subjective confidence and vividness** — demonstrating that emotion inflates *metamemory certainty* rather than guaranteeing photographic accuracy (**Measurement** & **Bias**).`,
      diagram: `<svg viewBox="0 0 580 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing Dual-Process System 1 and System 2 characteristics on the left and Prospect Theory asymmetric value curve for gains and losses on the right">
  <rect x="0" y="0" width="580" height="315" fill="#ffffff" rx="12"/>
  <text x="148" y="24" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Dual-Process Architecture</text>
  <text x="436" y="24" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Prospect Theory: Gain vs Loss Framing</text>
  <line x1="294" y1="16" x2="294" y2="300" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Left: System 1 card -->
  <rect x="18" y="40" width="258" height="106" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="32" y="61" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#9a3412">SYSTEM 1 · Fast &amp; Heuristic</text>
  <text x="32" y="79" font-family="sans-serif" font-size="9.5" fill="#431407">• Automatic, effortless, emotionally charged</text>
  <text x="32" y="96" font-family="sans-serif" font-size="9.5" fill="#431407">• Availability (ease of vivid recall)</text>
  <text x="32" y="113" font-family="sans-serif" font-size="9.5" fill="#431407">• Representativeness (prototype vs base rate)</text>
  <text x="32" y="130" font-family="sans-serif" font-size="9.5" fill="#431407">• Anchoring &amp; Framing (loss aversion)</text>

  <!-- Interaction arrow -->
  <line x1="115" y1="146" x2="115" y2="176" stroke="#c2410c" stroke-width="2"/>
  <polygon points="110,174 115,183 120,174" fill="#c2410c"/>
  <text x="64" y="167" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#9a3412">Intuitive proposal</text>

  <line x1="185" y1="183" x2="185" y2="153" stroke="#0369a1" stroke-width="2"/>
  <polygon points="180,155 185,146 190,155" fill="#0369a1"/>
  <text x="234" y="167" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#0369a1">Deliberate override</text>

  <!-- Left: System 2 card -->
  <rect x="18" y="184" width="258" height="106" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <text x="32" y="205" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0c4a6e">SYSTEM 2 · Slow &amp; Analytical</text>
  <text x="32" y="223" font-family="sans-serif" font-size="9.5" fill="#082f49">• Conscious, effortful, limited WM capacity</text>
  <text x="32" y="240" font-family="sans-serif" font-size="9.5" fill="#082f49">• Checks base rates &amp; logical falsification</text>
  <text x="32" y="257" font-family="sans-serif" font-size="9.5" fill="#082f49">• Compares expected values across frames</text>
  <text x="32" y="274" font-family="sans-serif" font-size="9.5" fill="#082f49">• Often fatigued → endorses System 1 bias</text>

  <!-- Right: Prospect Theory Axes -->
  <line x1="316" y1="152" x2="562" y2="152" stroke="#5b5375" stroke-width="1.6"/>
  <line x1="438" y1="42" x2="438" y2="262" stroke="#5b5375" stroke-width="1.6"/>
  <!-- Axis labels -->
  <text x="558" y="144" text-anchor="end" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#15803d">GAINS (+)</text>
  <text x="318" y="144" text-anchor="start" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">LOSSES (−)</text>
  <text x="444" y="52" font-family="sans-serif" font-size="9" font-weight="700" fill="#1c1630">Subjective Value</text>
  <text x="444" y="165" font-family="sans-serif" font-size="8.5" fill="#5b5375">Reference pt</text>

  <!-- Value Curve: concave in gains, steeper convex in losses -->
  <path d="M438,152 C460,104 504,78 552,70" fill="none" stroke="#15803d" stroke-width="3"/>
  <path d="M438,152 C416,218 378,242 326,252" fill="none" stroke="#c2410c" stroke-width="3"/>

  <!-- Annotations -->
  <rect x="462" y="88" width="98" height="44" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1"/>
  <text x="511" y="103" text-anchor="middle" font-family="sans-serif" font-size="8.8" font-weight="700" fill="#14532d">Gain Frame</text>
  <text x="511" y="116" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#166534">Risk-averse</text>
  <text x="511" y="127" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#166534">(72% sure save)</text>

  <rect x="314" y="170" width="106" height="46" rx="6" fill="#ffedd5" stroke="#c2410c" stroke-width="1"/>
  <text x="367" y="185" text-anchor="middle" font-family="sans-serif" font-size="8.8" font-weight="700" fill="#9a3412">Loss Frame</text>
  <text x="367" y="198" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#7c2d12">~2× steeper pain →</text>
  <text x="367" y="210" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#7c2d12">Risk-seeking (78%)</text>

  <!-- Bottom note -->
  <rect x="312" y="268" width="252" height="32" rx="7" fill="#f8fafc" stroke="#e2dcf0" stroke-width="1"/>
  <text x="438" y="282" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#1c1630"><tspan font-weight="700">Asian Disease (1981):</tspan> Identical EV (200 saved /</text>
  <text x="438" y="294" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#1c1630">400 die), yet preference reverses by 50 pts!</text>
</svg>`,
      diagramCaption:
        "Left: Functional interaction between heuristic System 1 and deliberative System 2. Right: Prospect Theory's steeper loss curve explains why identical expected outcomes trigger risk aversion in gain frames and risk seeking in loss frames.",
      workedExamples: [
        {
          title: "Testing Framing Equivalence via Expected Value",
          problem:
            "A health ministry prepares for an outbreak expected to affect 900 residents. **Program A** saves 300 people for certain. **Program B** offers a {{1/3}} probability that all 900 are saved and a {{2/3}} probability that nobody is saved. In the **Loss Frame**, **Program C** means 600 people will die for certain, while **Program D** offers a {{1/3}} probability that nobody dies and a {{2/3}} probability that 900 die. (a) Verify mathematically that all four options have identical expected lives saved. (b) Predict which option most people choose in each frame and explain why.",
          steps: [
            "Expected lives saved in Program A = {{300}}.",
            "Expected lives saved in Program B = {{(1/3) * 900 + (2/3) * 0 = 300}}.",
            "Expected lives saved in Program C = {{900 - 600 = 300}}.",
            "Expected lives saved in Program D = {{(1/3) * 900 + (2/3) * 0 = 300}} — all four are mathematically equivalent!",
            "By **Prospect Theory / framing effect**, most people choose the **risk-averse sure option (Program A)** in the gain frame to lock in a guaranteed gain, but switch to the **risk-seeking gamble (Program D)** in the loss frame because a certain loss of 600 lives hurts disproportionately (**loss aversion**).",
          ],
          answer:
            "All four programs have an expected value of 300 lives saved; Gain Frame favours Program A (risk-averse) while Loss Frame favours Program D (risk-seeking) due to loss aversion.",
          yourTurn: {
            question:
              "In a framing problem with 1,200 people at risk, the gamble offers a 25% probability that all 1,200 are saved and a 75% probability that nobody is saved. How many lives saved in the sure Gain-Frame option would make the two options mathematically identical in expected value?",
            answer: { type: "number", value: 300, display: "300" },
            solution:
              "Expected lives saved = {{0.25 * 1200 = 300}} lives saved for certain.",
          },
        },
        {
          title: "Distinguishing Availability vs Representativeness vs Anchoring",
          problem:
            "Identify the specific heuristic in each scenario: (i) After seeing three viral news stories on lithium-battery fires, a traveller refuses to pack a power bank despite a 1-in-10-million incident rate. (ii) Meeting a quiet, tidy man who loves poetry, a student assumes he is more likely to be a classics professor than a sales clerk. (iii) Seeing a jacket marked 'Was $400, now $180', a shopper feels $180 is a bargain even though similar jackets cost $120.",
          steps: [
            "**Scenario (i)**: Easily retrieved, emotionally vivid media examples distort perceived probability → **Availability heuristic**.",
            "**Scenario (ii)**: Matching personality traits to a stereotype while neglecting the huge base-rate difference (far more sales clerks than classics professors) → **Representativeness heuristic** (base-rate neglect).",
            "**Scenario (iii)**: The initial '$400' tag serves as a reference point pulling subsequent value judgements upward → **Anchoring bias**.",
          ],
          answer:
            "(i) Availability heuristic; (ii) Representativeness heuristic (base-rate neglect); (iii) Anchoring bias.",
        },
      ],
      keyPoints: [
        "Dual-Process Theory contrasts **System 1** (fast, automatic, heuristic) with **System 2** (slow, effortful, analytical monitoring); both are functional models rather than separate brain regions.",
        "**Availability** relies on recall ease; **representativeness** relies on prototype matching (causing base-rate neglect and the Linda conjunction fallacy); **anchoring** pulls estimates toward arbitrary starting numbers.",
        "**Framing effects** (Tversky & Kahneman, 1981) arise from **loss aversion**: people are risk-averse for gains and risk-seeking to avoid sure losses even when expected values are identical.",
        "**Confirmation bias** (Wason, 1966) leads people to test verifying rather than falsifying evidence.",
        "**Talarico & Rubin (2003)** overturned Brown & Kulik's photographic 'Now Print!' claim: 9/11 flashbulb memories decayed in factual consistency just as fast as ordinary memories, while **confidence** stayed artificially high.",
      ],
      whyItWorks:
        "Heuristics are not design flaws — they are **ecologically adaptive** speed shortcuts (as Gerd Gigerenzer emphasizes) that work remarkably well in ordinary environments. Errors appear when modern statistical problems (base rates, legal sentencing, financial framing) exploit System 1's rules of thumb. Recognizing this nuance elevates your evaluation of **Bias** and **Perspective**.",
      strategies: [
        "Never confuse **availability** (how *easily* examples come to mind) with **representativeness** (how *similar* a person/case is to a mental stereotype).",
        "In **Talarico & Rubin (2003)**, highlight the **longitudinal repeated-measures** design starting *the day after 9/11* — this prevented retrospective memory bias at Time 1 (**Measurement** strength).",
        "Balance critiques of Kahneman & Tversky by noting **ecological validity** limits (hypothetical paper vignettes like Linda or Asian Disease) alongside real-world replications (**Englich et al., 2006** courtroom judges).",
      ],
      thinkDeeper:
        "Could debiasing public-health messages (e.g. stating both survival rates *and* mortality rates simultaneously) ethically reduce framing manipulation (**Responsibility**), or does presenting more numbers overload System 2 and push citizens back to System 1?",
    },

    // =========================================================================
    // SECTION 4: SOCIOCULTURAL APPROACH
    // =========================================================================
    {
      id: "sociocultural-approach",
      heading: "Sociocultural Approach: Identity, Social Learning, Conformity & Culture",
      level: "SL",
      discovery: {
        problem:
          "Suppose a researcher flips a coin in front of a room of teenagers and splits them into 'Team Klee' and 'Team Kandinsky' based solely on a quick guess about which abstract painting they prefer. They never meet their teammates, never speak, and cannot award money to themselves — only to anonymous strangers labelled by team. **Before reading on:** rationally, they should split the points 50/50. What actually happens, and what does that tell us about the origins of prejudice?",
        idea:
          "In **Tajfel et al.'s (1971) Minimal Group Paradigm**, boys overwhelmingly favoured anonymous in-group members — and even sacrificed larger absolute gains for their own group simply to **maximize the gap** over the out-group! Simply placing humans into arbitrary social categories is enough to trigger **in-group favouritism**, forming the empirical core of **Social Identity Theory**.",
      },
      body: `The **Sociocultural Approach** examines how social groups, interpersonal modelling, situational pressures, and shared cultural systems shape individual cognition and behaviour. Humans have a fundamental need to belong, meaning identity and norms are co-constructed through interaction.

### 1. Social Identity Theory (Tajfel & Turner, 1979)
Self-concept comprises both **personal identity** (unique traits) and **social identity** (group memberships). SIT explains intergroup bias via three linked cognitive-motivational steps:
1. **Social Categorization**: sorting people into *us* (**in-group**) and *them* (**out-group**), simplifying the social world while exaggerating perceived out-group similarity (**out-group homogeneity**).
2. **Social Identification**: adopting the norms, symbols, and values of the in-group so group status feeds self-esteem.
3. **Social Comparison & Positive Distinctiveness**: comparing the in-group favourably against out-groups to maintain positive self-esteem, producing **in-group favouritism** and potentially out-group derogation.
- **Key study**: **Tajfel et al. (1971)** assigned 14–15-year-old British schoolboys to trivial groups (dot over/under-estimators or Klee/Kandinsky preference) and gave them point-allocation matrices. Boys chose **maximum difference** in favour of their in-group over maximum joint profit — showing intergroup bias requires neither realistic resource conflict nor prior hostility. (Critique: artificial lab matrices and British boys — **Bias / ecological validity**; SIT also under-explains why people sometimes show out-group favouritism or resist group norms.)

### 2. Social Cognitive Theory (Bandura, 1961, 1977)
**Social Cognitive Theory (SCT)** holds that people learn behaviours indirectly by observing **models** (**vicarious learning**), mediated by four cognitive processes (**ARRM**):
1. **Attention**: noticing the model (heightened when the model is high-status, similar in gender/age, or salient).
2. **Retention**: encoding a symbolic mental representation of the modelled behaviour in memory.
3. **Motor Reproduction**: possessing the physical and cognitive capability to enact the behaviour.
4. **Motivation**: expecting positive outcomes via **vicarious reinforcement** (seeing the model rewarded) and believing in one's own capability (**self-efficacy**).
- **Key study**: **Bandura, Ross & Ross (1961)** exposed 72 preschool children to an aggressive adult punching a Bobo doll, a non-aggressive adult, or no model. Children observing the aggressive model imitated novel verbal and physical aggression far more often — especially when matching the model's gender. Later (**Bandura, 1965**), children who saw the model *punished* imitated less spontaneously, yet reproduced the aggression immediately when offered incentives — proving the distinction between **learning (acquisition)** and **performance**. (Critiques: ethical **Responsibility** of exposing children to adult aggression; Bobo doll is designed to be hit, limiting generalization to real human violence.)

### 3. Conformity & Obedience
- **Conformity (Asch, 1951)**: yielding to real or imagined group pressure. Using unambiguous line-length matching with 7 confederates, naïve participants conformed to blatantly wrong group answers on **32–37%** of critical trials, with **75%** conforming at least once (vs <1% error alone).
  - **Normative Social Influence (NSI)**: conforming publicly to avoid rejection and gain social approval (compliance).
  - **Informational Social Influence (ISI)**: conforming because the situation is ambiguous and the group is assumed to possess accurate knowledge (internalization — Deutsch & Gerard, 1955).
  - **Cultural variation**: **Bond & Smith (1996)** meta-analysed 133 Asch replications across 17 countries and found significantly higher conformity in **collectivist** societies (valuing harmony) than **individualist** societies, and declining US conformity since the 1950s (**Change**). **Berry (1967)** similarly showed high conformity among agricultural **Temne** (high food accumulation/interdependence) vs low conformity among hunter-gatherer **Inuit** (autonomy prized).
- **Obedience (Milgram, 1963)**: complying with direct orders from a perceived authority figure. **65%** of ordinary men delivered the maximum labelled **450 V** shock to a protesting learner, explained by entering an **agentic state** (viewing oneself as an instrument of authority rather than personally responsible) versus an **autonomous state**. Situational shifts (moving to a rundown office → 47.5%; rebel peers → 10%; experimenter giving orders by phone → 20.5%) showed strong situational power, though intense participant distress triggered landmark modern ethical codes (**Responsibility**).

### 4. Cultural Norms, Enculturation & Acculturation
**Culture** is the shared system of norms, values, symbols, and practices transmitted across generations:
- **Cultural Dimensions (Hofstede; Markus & Kitayama, 1991)**: **Individualism** prioritizes personal autonomy and an *independent self-construal*; **Collectivism** prioritizes group harmony, duty, and an *interdependent self-construal*. Avoid the **ecological fallacy** — cultural dimensions describe group averages, not every individual within a nation!
- **Enculturation**: acquiring the norms of one's *own heritage culture* through observation, participation, and instruction (e.g. **Odden & Rochat, 2004** documented Samoan children learning line-fishing and hierarchical rank norms primarily through observational participation rather than direct adult lecturing).
- **Acculturation (Berry, 1997)**: psychological and cultural **Change** following sustained contact between two cultures. Berry mapped four strategies along two independent choices — **(1) Maintaining heritage culture** and **(2) Participating in the host society**:

| Strategy | Maintain Heritage Culture? | Seek Host Society Contact? | Typical Psychological Outcome |
|---|---|---|---|
| **Integration** | Yes | Yes | Lowest acculturative stress; strongest well-being & bicultural competence |
| **Assimilation** | No | Yes | Adopts host culture while shedding heritage identity; moderate stress |
| **Separation** | Yes | No | Preserves heritage enclaves while avoiding host contact; moderate-high stress |
| **Marginalization** | No | No | Loses heritage ties *and* excluded from host society; highest acculturative stress |`,
      diagram: `<svg viewBox="0 0 580 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing Social Identity Theory three-step pathway on the left and Berry four acculturation strategies matrix on the right">
  <rect x="0" y="0" width="580" height="315" fill="#ffffff" rx="12"/>
  <text x="134" y="24" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Social Identity Theory (SIT)</text>
  <text x="430" y="24" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#1c1630">Berry's Acculturation Matrix (1997)</text>
  <line x1="268" y1="16" x2="268" y2="300" stroke="#e2dcf0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Left: SIT 3-step cascade -->
  <rect x="20" y="42" width="226" height="50" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="133" y="61" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#4c1d95">1. Social Categorization</text>
  <text x="133" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5b5375">Divide world into In-group vs Out-group</text>

  <line x1="133" y1="92" x2="133" y2="112" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="128,110 133,118 138,110" fill="#7c3aed"/>

  <rect x="20" y="119" width="226" height="50" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <text x="133" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0c4a6e">2. Social Identification</text>
  <text x="133" y="155" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0369a1">Adopt group norms; tie self-esteem to group</text>

  <line x1="133" y1="169" x2="133" y2="189" stroke="#0369a1" stroke-width="2"/>
  <polygon points="128,187 133,195 138,187" fill="#0369a1"/>

  <rect x="20" y="196" width="226" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="133" y="215" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e">3. Social Comparison</text>
  <text x="133" y="232" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#78350f">Seek positive distinctiveness over out-group</text>

  <line x1="133" y1="246" x2="133" y2="262" stroke="#c2410c" stroke-width="2"/>
  <polygon points="128,260 133,268 138,260" fill="#c2410c"/>

  <rect x="20" y="269" width="226" height="32" rx="7" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="133" y="289" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#9a3412">In-group Favouritism &amp; Out-group Bias</text>

  <!-- Right: Berry 2x2 Matrix -->
  <text x="444" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#1c1630">Maintain Heritage Culture?</text>
  <text x="382" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#15803d">YES</text>
  <text x="506" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">NO</text>

  <!-- Vertical axis label -->
  <text x="292" y="172" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#1c1630" transform="rotate(-90 292 172)">Host Society Contact?</text>
  <text x="312" y="128" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#15803d">YES</text>
  <text x="312" y="224" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">NO</text>

  <!-- Quadrant 1: Integration -->
  <rect x="326" y="76" width="114" height="90" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="383" y="106" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#14532d">Integration</text>
  <text x="383" y="124" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#166534">Bicultural identity</text>
  <text x="383" y="140" text-anchor="middle" font-family="sans-serif" font-size="8.8" font-weight="700" fill="#15803d">Lowest stress</text>

  <!-- Quadrant 2: Assimilation -->
  <rect x="448" y="76" width="114" height="90" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>
  <text x="505" y="106" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0c4a6e">Assimilation</text>
  <text x="505" y="124" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0369a1">Adopts host norms,</text>
  <text x="505" y="138" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0369a1">drops heritage ties</text>

  <!-- Quadrant 3: Separation -->
  <rect x="326" y="174" width="114" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="383" y="204" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#92400e">Separation</text>
  <text x="383" y="222" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">Keeps heritage only,</text>
  <text x="383" y="236" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#78350f">avoids host culture</text>

  <!-- Quadrant 4: Marginalization -->
  <rect x="448" y="174" width="114" height="90" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>
  <text x="505" y="204" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#9a3412">Marginalization</text>
  <text x="505" y="222" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#7c2d12">Disconnected from</text>
  <text x="505" y="236" text-anchor="middle" font-family="sans-serif" font-size="8.8" font-weight="700" fill="#c2410c">both · Highest stress</text>

  <!-- Bottom note -->
  <text x="444" y="286" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#5b5375">Host-society attitudes (multiculturalism vs exclusion) constrain</text>
  <text x="444" y="298" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#5b5375">which strategy immigrants are actually free to adopt.</text>
</svg>`,
      diagramCaption:
        "Left: Tajfel & Turner's three-step Social Identity Theory pathway to in-group favouritism. Right: Berry's 2×2 model of acculturation strategies based on heritage maintenance and host-society participation.",
      workedExamples: [
        {
          title: "Calculating Conformity Rates & Distinguishing NSI vs ISI",
          problem:
            "In a classroom Asch-style study with 20 naïve participants, each participant completes 12 critical trials (240 critical trials total) where 6 confederates give an obviously wrong answer. Participants conform on 84 critical trials. In a second variation where participants write their answers privately on paper, conformity drops to 24 critical trials. (a) Calculate both conformity percentages. (b) Explain what the drop from public to private responding reveals about **normative** vs **informational** social influence.",
          steps: [
            "Public conformity rate = {{(84/240) * 100 = 35%}}.",
            "Private conformity rate = {{(24/240) * 100 = 10%}}.",
            "Reduction = {{35 - 10 = 25}} percentage points.",
            "Interpretation: Because the lines are unambiguous and conformity collapses when answers are hidden from the group, the dominant driver was **normative social influence (NSI)** — public compliance to avoid ridicule, rather than genuine private belief change (ISI).",
          ],
          answer:
            "Public conformity = 35%, private conformity = 10% (a 25 percentage-point drop), demonstrating that normative social influence drove most public compliance.",
          yourTurn: {
            question:
              "In a cross-cultural Asch replication with 25 participants each completing 12 critical trials (300 critical trials total), participants conformed on 135 trials. Calculate the overall conformity rate as a percentage.",
            answer: { type: "number", value: 45, display: "45%" },
            solution:
              "Conformity rate = {{(135/300) * 100 = 45%}}.",
          },
        },
        {
          title: "Applying Berry's Acculturation Framework with Critical Nuance",
          problem:
            "Mei moves from Kuala Lumpur to London for university. She joins a Malaysian cultural society to celebrate Lunar New Year and cook traditional dishes, while also joining the university rowing club and building close British friendships. Identify her acculturation strategy and note one limitation of Berry's model.",
          steps: [
            "Check Dimension 1 (Heritage culture maintenance): **Yes** (Malaysian society, festivals, cuisine).",
            "Check Dimension 2 (Host society participation): **Yes** (rowing club, British friendships).",
            "Intersection of Yes + Yes = **Integration** (associated with lowest acculturative stress).",
            "**Evaluation**: Berry's model can imply that acculturation is purely an individual choice; in reality, discrimination or host-country assimilation policies can block integration regardless of an immigrant's wishes (**Perspective** & **Responsibility**).",
          ],
          answer:
            "Integration; however, Berry's model understates how host-society discrimination and structural barriers constrain whether integration is attainable.",
        },
      ],
      keyPoints: [
        "**Social Identity Theory** (Tajfel & Turner, 1979): categorization → identification → social comparison produces in-group favouritism even in minimal arbitrary groups (**Tajfel et al., 1971**).",
        "**Social Cognitive Theory** (Bandura): observational learning requires **Attention, Retention, Reproduction, Motivation** (plus vicarious reinforcement & self-efficacy); Bandura (1965) separated *learning* from *performance*.",
        "**Asch (1951)** revealed public conformity (~32–37% of critical trials) driven largely by **normative social influence**, while **Bond & Smith (1996)** showed higher conformity in collectivist cultures.",
        "**Milgram (1963)** showed 65% obedience to 450 V under authority (**agentic state**), sparking modern ethical safeguards (**Responsibility**).",
        "**Enculturation** transmits heritage norms (Odden & Rochat, 2004), whereas **acculturation** (Berry, 1997) involves four strategies — **Integration, Assimilation, Separation, Marginalization**.",
      ],
      whyItWorks:
        "Sociocultural psychology protects against the **fundamental attribution error** — the habit of blaming personality or biology alone while ignoring powerful group identities, modelled scripts, and cultural norms. Integrating sociocultural mechanisms with cognitive schemas and biological stress responses gives you true **biopsychosocial** mastery.",
      strategies: [
        "Keep **enculturation** (learning your *own* first culture) strictly distinct from **acculturation** (adapting after moving into a *second/host* culture).",
        "When discussing Hofstede's **individualism–collectivism**, explicitly guard against the **ecological fallacy** (group-level national scores do not stereotype every individual) and note cultural **Change** over time.",
        "Always check whether a question asks about **conformity** (peer/majority pressure without explicit command) vs **obedience** (direct order from a perceived authority).",
      ],
      thinkDeeper:
        "In **Tajfel et al. (1971)**, why did boys choose a matrix that gave their own group *fewer absolute points* (e.g. 7 for in-group vs 1 for out-group) instead of a larger payout for everyone (e.g. 19 vs 25)? What does preferring relative superiority over absolute gain reveal about human social comparison?",
    },
  ],

  // ===========================================================================
  // LEARN SMART PACK
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "Relative Localization vs Strict Localization",
        back: "Strict localization maps one function exclusively to one brain area; relative localization recognizes specialized hubs (e.g. hippocampus, amygdala, PFC) working within distributed, interacting neural networks.",
        level: "SL",
      },
      {
        front: "Neuroplasticity & Synaptic Pruning",
        back: "The brain's lifelong ability to reorganize neural pathways in response to experience (LTP / dendritic branching) while eliminating unused synapses (pruning) to boost network efficiency — demonstrated in Maguire et al. (2000) and Draganski et al. (2004).",
        level: "SL",
      },
      {
        front: "Agonist vs Antagonist",
        back: "An agonist mimics a neurotransmitter or increases its synaptic availability (e.g. SSRIs blocking serotonin reuptake), boosting postsynaptic firing. An antagonist (e.g. scopolamine on ACh) occupies receptors without activating them, blocking signalling.",
        level: "SL",
      },
      {
        front: "Antonova et al. (2011) — Key Finding",
        back: "Double-blind, placebo-controlled fMRI study: scopolamine (ACh muscarinic antagonist) reduced hippocampal activation and impaired virtual-reality spatial memory encoding compared to placebo.",
        level: "SL",
      },
      {
        front: "Gene × Environment (G×E) Interaction (Caspi et al., 2003)",
        back: "Carriers of short alleles of the 5-HTT serotonin transporter gene showed sharply elevated depression risk ONLY when exposed to multiple severe stressful life events — refuting biological determinism.",
        level: "SL",
      },
      {
        front: "Multi-Store Model (Atkinson & Shiffrin, 1968)",
        back: "Linear memory model with Sensory Register (~0.25–2 s), unitary Short-Term Memory (7 ± 2 chunks, ~18–30 s, acoustic), and unlimited Long-Term Memory (semantic). Supported by Glanzer & Cunitz (1966) and H.M.",
        level: "SL",
      },
      {
        front: "Working Memory Model — 4 Components (Baddeley & Hitch, 1974; 2000)",
        back: "Central Executive (attentional control), Phonological Loop (verbal/auditory: store + articulatory process), Visuospatial Sketchpad (visual cache + inner scribe), and Episodic Buffer (multimodal integrator linked to LTM).",
        level: "SL",
      },
      {
        front: "Schema Theory & Bartlett's (1932) Distortions",
        back: "Schemas are organized knowledge frameworks that make memory reconstructive. In 'War of the Ghosts', recalls showed levelling (shortening), sharpening (highlighting familiar details), and assimilation/rationalization into British cultural schemas.",
        level: "SL",
      },
      {
        front: "Loftus & Palmer (1974) — Leading Question Effect",
        back: "Changing a single verb ('smashed' vs 'contacted') raised estimated crash speed from 31.8 mph to 40.5 mph and caused 32% of 'smashed' participants to falsely recall broken glass (vs 14% for 'hit').",
        level: "SL",
      },
      {
        front: "System 1 vs System 2 (Kahneman & Tversky)",
        back: "System 1 is fast, automatic, intuitive, and heuristic-driven (prone to systematic bias); System 2 is slow, effortful, analytical, and capable of statistical override — yet easily fatigued.",
        level: "SL",
      },
      {
        front: "Availability vs Representativeness Heuristic",
        back: "Availability estimates frequency by ease of recalling vivid examples (Tversky & Kahneman, 1973 letter-K task). Representativeness estimates probability by similarity to a prototype, causing base-rate neglect and the Linda conjunction fallacy (1983).",
        level: "SL",
      },
      {
        front: "Framing Effect & Loss Aversion (Asian Disease, 1981)",
        back: "With identical expected value (200 saved / 400 die), 72% chose the sure option in the Gain Frame (risk-averse) while 78% chose the gamble in the Loss Frame (risk-seeking), because losses loom ~2× larger than equivalent gains.",
        level: "SL",
      },
      {
        front: "Talarico & Rubin (2003) — Flashbulb Memory Finding",
        back: "Longitudinal 9/11 study: objective factual consistency declined identically for 9/11 flashbulb memories and everyday memories over 32 weeks, but subjective confidence and vividness stayed uniquely high for 9/11.",
        level: "SL",
      },
      {
        front: "Social Identity Theory (Tajfel & Turner, 1979)",
        back: "Social categorization → social identification → social comparison drives pursuit of positive distinctiveness, generating in-group favouritism even in minimal arbitrary groups (Tajfel et al., 1971).",
        level: "SL",
      },
      {
        front: "Social Cognitive Theory — ARRM Mediators (Bandura)",
        back: "Observational learning requires Attention, Retention, Motor Reproduction, and Motivation (shaped by vicarious reinforcement and self-efficacy). Bandura (1965) distinguished learning from performance.",
        level: "SL",
      },
      {
        front: "Normative vs Informational Social Influence (Asch, 1951)",
        back: "Normative (NSI): public compliance to fit in and avoid rejection (dominant in Asch's unambiguous line task). Informational (ISI): private internalization when a task is ambiguous and the group is trusted as a source of truth.",
        level: "SL",
      },
      {
        front: "Berry's (1997) 4 Acculturation Strategies",
        back: "Integration (keep heritage + join host; lowest stress), Assimilation (drop heritage + join host), Separation (keep heritage + avoid host), Marginalization (lose heritage + excluded from host; highest stress).",
        level: "SL",
      },
      {
        front: "HL Bridge: Cultural Neuroscience & Bicultural Frame-Switching",
        back: "Long-term cultural immersion shapes neural recruitment (e.g. medial PFC activation during self vs mother judgements in East Asian vs Western participants — Zhu et al., 2007), integrating Biological and Sociocultural levels.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Hippocampus consolidates declarative/spatial memory; amygdala tags emotional salience; prefrontal cortex executes cognitive control and inhibition — operating as interacting networks.",
      "Neuroplasticity is lifelong and reversible: Maguire et al. (2000) & Woollett & Maguire (2011) proved posterior hippocampal growth in qualifying London cabbies; Draganski et al. (2004) showed reversible V5 growth in jugglers.",
      "Agonists enhance postsynaptic signalling (mimic NT or block reuptake, e.g. SSRIs); antagonists block receptors (e.g. scopolamine blocking ACh in Antonova et al., 2011).",
      "MZ concordance > DZ concordance supports genetic influence, but MZ concordance < 100% proves environmental mediation; Caspi et al. (2003) established G×E interaction.",
      "Glanzer & Cunitz (1966) validated MSM's STM/LTM split via serial position delay, while Baddeley et al. (1975) dual-task studies and patient K.F. validated Working Memory's separate phonological and visuospatial slave systems.",
      "Bartlett (1932), Brewer & Treyens (1981), and Loftus & Palmer (1974) demonstrate that memory is actively reconstructed by schemas and vulnerable to post-event misinformation.",
      "System 1 heuristics (availability, representativeness, anchoring, framing, confirmation bias) save mental energy but create predictable deviations from statistical rationality.",
      "Talarico & Rubin (2003) proved that intense emotion sustains high *confidence* in flashbulb memories without protecting objective *accuracy* from normal decay.",
      "Tajfel et al. (1971) showed mere categorization produces in-group favouritism; Bandura (1961/1965) showed observational learning operates through ARRM mediators and vicarious reinforcement.",
      "Asch (1951) and Milgram (1963) demonstrated powerful situational pressure (NSI and agentic state), while Bond & Smith (1996) and Berry (1967, 1997) showed how cultural norms and acculturation strategies shape conformity and well-being.",
    ],
    misconceptions: [
      {
        wrong: "Because London taxi drivers had larger posterior hippocampi in Maguire et al. (2000), that single MRI study proves driving caused brain growth.",
        right: "Maguire et al. (2000) was quasi-experimental/correlational; causal evidence came from the correlation with years driven AND the later longitudinal study (Woollett & Maguire, 2011) tracking trainees before and after passing The Knowledge.",
        level: "SL",
      },
      {
        wrong: "SSRIs are antagonists because they block something at the synapse.",
        right: "SSRIs block the *reuptake transporter*, leaving *more* serotonin in the synaptic cleft to stimulate postsynaptic receptors — making them functional **agonists**, not antagonists.",
        level: "SL",
      },
      {
        wrong: "System 1 is located in the right hemisphere (or amygdala) and System 2 is in the left hemisphere.",
        right: "System 1 and System 2 are **functional cognitive modes**, not anatomical brain regions. Both recruit distributed networks across both hemispheres (though executive override heavily engages PFC circuits).",
        level: "SL",
      },
      {
        wrong: "Flashbulb memories are uniquely accurate, photographic recordings of traumatic public events.",
        right: "Talarico & Rubin (2003) showed that factual accuracy of 9/11 flashbulb memories decayed at the *exact same rate* as everyday memories — only subjective confidence and vividness stayed high.",
        level: "SL",
      },
      {
        wrong: "Enculturation and acculturation are synonyms for learning culture.",
        right: "**Enculturation** is acquiring your *first/heritage* culture from childhood (e.g. Odden & Rochat, 2004). **Acculturation** is psychological/cultural adaptation following sustained contact with a *new/host* culture (Berry, 1997).",
        level: "SL",
      },
      {
        wrong: "Every person from a collectivist country conforms more than every person from an individualist country.",
        right: "Assuming a national average applies uniformly to every individual commits the **ecological fallacy**. Individual personality, task ambiguity, and socioeconomic context create wide within-culture variation.",
        level: "SL",
      },
      {
        wrong: "In Bandura's Bobo doll study, children who saw the model punished failed to learn the aggressive actions.",
        right: "In Bandura (1965), children who saw the model punished simply lacked *motivation* to perform the behaviour — when offered incentives, they reproduced it immediately, proving **acquisition ≠ performance**.",
        level: "SL",
      },
      {
        wrong: "HL myth: High-tech neuroimaging (fMRI) eliminates subjective measurement bias in cognitive and cultural psychology.",
        right: "fMRI measures indirect blood-flow (BOLD) signals requiring statistical thresholding, simplified lab tasks, and small WEIRD samples — so **Measurement** and **Bias** critiques remain essential at HL.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Describing a study's procedure in sprawling detail without explicitly linking findings back to the **theory/mechanism** and **command term** (e.g. failing to state *how* scopolamine's ACh antagonism explains hippocampal encoding deficits).",
      "Confusing **neurotransmitters** (fast, synaptic cleft, e.g. ACh, serotonin, dopamine) with **hormones** (slower, bloodstream, e.g. cortisol, adrenaline, oxytocin) in Biological Approach SAQs.",
      "Writing 'Working Memory has better ecological validity than MSM' without explaining *why* (WMM accounts for everyday multitasking via dual-task interference, whereas MSM's unitary STM cannot).",
      "Mixing up the **availability heuristic** (vividness/ease of recall) with the **representativeness heuristic** (stereotype match & base-rate neglect) in scenario questions.",
      "Claiming Loftus & Palmer (1974) proves all eyewitness testimony is useless, rather than evaluating ecological limitations (lab film clips lack real-world stress/consequences — compare Yuille & Cutshall, 1986).",
      "Confusing **conformity** (Asch: yielding to majority peers without an order) with **obedience** (Milgram: complying with a direct command from an authority figure).",
      "Naming Berry's four acculturation strategies without defining the two underlying orthogonal dimensions (heritage culture maintenance × host society participation).",
      "In FA 2027 concept-linked responses, name-dropping a Core Concept ('This shows Bias') in one throwaway sentence instead of weaving **Bias, Causality, Change, Measurement, Perspective, or Responsibility** into the analytical argument.",
    ],
    mnemonics: [
      {
        topic: "Bandura's 4 Mediational Processes (SCT)",
        device: "A–R–R–M (Attention, Retention, Reproduction, Motivation)",
        explanation: "You need an **ARRM** to copy a modelled action: notice it (Attention), store it (Retention), be physically able (Reproduction), and expect a reward or feel capable (Motivation / self-efficacy).",
        level: "SL",
      },
      {
        topic: "Social Identity Theory 3 Steps",
        device: "C–I–C → P (Categorization, Identification, Comparison → Positive Distinctiveness)",
        explanation: "People **C**ategorize into us/them, **I**dentify with the in-group, and **C**ompare favourably to achieve **P**ositive distinctiveness.",
        level: "SL",
      },
      {
        topic: "Working Memory Model 4 Components",
        device: "C–P–V–E ('Clever People Visualize Episodes')",
        explanation: "**C**entral Executive directs the **P**honological Loop (sound/speech), **V**isuospatial Sketchpad (images/space), and **E**pisodic Buffer (multimodal timeline).",
        level: "SL",
      },
      {
        topic: "Berry's 4 Acculturation Strategies",
        device: "I–A–S–M ('In-both, Adopt-host, Stay-heritage, Missing-both')",
        explanation: "**I**ntegration (Yes/Yes), **A**ssimilation (No heritage / Yes host), **S**eparation (Yes heritage / No host), **M**arginalization (No/No).",
        level: "SL",
      },
      {
        topic: "Agonist vs Antagonist",
        device: "A-GO-nist = GO! · ANT-agonist = ANTI (blocks)",
        explanation: "An **agonist** makes the postsynaptic signal **GO** (mimics NT or blocks reuptake); an **antagonist** is **ANTI**-signal (blocks receptor activation).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Eyewitness Reform & the Cognitive Interview",
        emoji: "⚖️",
        detail: "Loftus & Palmer's (1974) research on leading questions directly motivated police reforms worldwide — replacing leading interrogations with non-leading open prompts and double-blind photo line-ups to reduce wrongful convictions (**Responsibility**).",
      },
      {
        title: "Public Health Nudges & Framing",
        emoji: "🏥",
        detail: "Vaccination and cancer-screening campaigns apply Kahneman & Tversky's Prospect Theory: emphasizing preventive health benefits (gain frame) boosts routine check-ups, while loss frames can motivate high-stakes diagnostic testing when paired ethically with base-rate transparency.",
      },
      {
        title: "Stroke Rehabilitation via Neuroplasticity",
        emoji: "🧬",
        detail: "Constraint-induced movement therapy harnesses experience-driven neuroplasticity: restricting a stroke survivor's unaffected limb forces repeated practice with the impaired limb, driving cortical remapping and functional recovery (**Change**).",
      },
      {
        title: "Multicultural Schools & Bicultural Integration",
        emoji: "🌏",
        detail: "International schools (including Singapore's diverse student communities) foster Berry's **Integration** strategy by celebrating heritage languages and festivals alongside shared school culture — lowering acculturative stress and strengthening academic belonging.",
      },
      {
        title: "Algorithmic Echo Chambers & Confirmation Bias",
        emoji: "📱",
        detail: "Social-media recommender systems amplify **confirmation bias** and **Social Identity Theory** polarization by serving content that validates in-group beliefs and provokes System 1 emotional outrage, reducing System 2 fact-checking.",
      },
      {
        title: "Pharmacological Memory & Mood Treatments",
        emoji: "💊",
        detail: "Acetylcholinesterase inhibitors (functional ACh agonists) slow memory decline in early Alzheimer's disease by keeping acetylcholine active longer in hippocampal synapses, while SSRIs remain first-line biomedical tools for major depression.",
      },
    ],
    videos: [
      {
        title: "Neurotransmission, Agonists & Antagonists Explained",
        channel: "YouTube IB Psychology Search",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+neurotransmission+agonist+antagonist+scopolamine+Antonova",
      },
      {
        title: "Multi-Store Model vs Working Memory Model (Baddeley & Hitch)",
        channel: "YouTube IB Psychology Search",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+Multi+Store+Model+vs+Working+Memory+Model+Baddeley",
      },
      {
        title: "Kahneman & Tversky Dual-Process Theory, Heuristics & Framing",
        channel: "YouTube IB Psychology Search",
        url: "https://www.youtube.com/results?search_query=Kahneman+Tversky+System+1+System+2+heuristics+framing+effect+psychology",
      },
      {
        title: "Social Identity Theory (Tajfel) & Minimal Group Paradigm",
        channel: "YouTube IB Psychology Search",
        url: "https://www.youtube.com/results?search_query=Tajfel+Social+Identity+Theory+Minimal+Group+Paradigm+IB+Psychology",
      },
      {
        title: "Berry's Acculturation Strategies & Cultural Dimensions",
        channel: "YouTube IB Psychology Search",
        url: "https://www.youtube.com/results?search_query=Berry+acculturation+strategies+integration+assimilation+IB+Psychology",
      },
    ],
    formulas: [
      {
        name: "Twin Concordance Rate (%)",
        formula: "{{\"Concordance %\" = (\"Concordant pairs\" / \"Total twin pairs\") * 100}}",
        note: "Compare MZ (~100% DNA) vs DZ (~50% DNA); MZ > DZ supports genetic contribution, while MZ < 100% proves environmental impact.",
        level: "SL",
      },
      {
        name: "Falconer's Rough Heritability Estimate",
        formula: "{{h^2 = 2(r_{MZ} - r_{DZ})}}",
        note: "Estimates proportion of *population variance* attributable to genetic differences (not an individual's genetic destiny).",
        level: "SL",
      },
      {
        name: "Short-Term Memory Capacity Benchmark (Miller, 1956)",
        formula: "{{\"STM capacity\" = 7 +- 2 \" chunks\"}}",
        note: "Duration ~18–30 s without rehearsal; chunking packs more raw items into each meaningful slot.",
        level: "SL",
      },
      {
        name: "Serial Position Recall Percentage",
        formula: "{{\"Recall %\" = (\"Correct words recalled\" / \"Total target word-trials\") * 100}}",
        note: "Glanzer & Cunitz (1966): 30 s counting delay collapses recency (STM) while preserving primacy (LTM).",
        level: "SL",
      },
      {
        name: "Expected Value (Framing Equivalence Check)",
        formula: "{{EV = p * X + (1 - p) * Y}}",
        note: "In Tversky & Kahneman's Asian Disease problem (N = 600), EV = 200 lives saved in BOTH sure and gamble options.",
        level: "SL",
      },
      {
        name: "Conjunction Rule (Probability Bound)",
        formula: "{{P(A ∩ B) <= P(A)}}",
        note: "Violated in the Linda problem (representativeness heuristic), where 85% rated 'feminist bank teller' more probable than 'bank teller'.",
        level: "SL",
      },
      {
        name: "Conformity Rate (%)",
        formula: "{{\"Conformity %\" = (\"Conforming critical trials\" / \"Total critical trials\") * 100}}",
        note: "Asch (1951) baseline ≈ 32–37% of critical trials; drops sharply with a dissenting ally or private written response.",
        level: "SL",
      },
      {
        name: "Obedience Rate (%)",
        formula: "{{\"Obedience %\" = (\"Participants reaching 450 V\" / \"Total participants\") * 100}}",
        note: "Milgram (1963) baseline = 65% (26/40); fell to 10% with defiant peers and 20.5% with remote telephone orders.",
        level: "SL",
      },
      {
        name: "Percentage-Point Change (Intervention / Condition Shift)",
        formula: "{{\"Delta pp\" = P_2 - P_1}}",
        note: "Always distinguish percentage-point shift (e.g. 65% → 20% = −45 pp) from relative percentage change.",
        level: "SL",
      },
      {
        name: "HL Link: Relative Percentage Change in Brain Volume / Speed Estimate",
        formula: "{{\"% Change\" = ((V_2 - V_1) / V_1) * 100}}",
        note: "Used to compare neuroimaging grey-matter shifts (Draganski et al.) or Loftus & Palmer mean speed estimates ('smashed' vs 'contacted' = +27.4%).",
        level: "HL",
      },
    ],
  },
};
