import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "3-context-health-wellbeing",
  title: "Topic 3: Context 1 — Health and Well-being",
  strand: "Contexts I: Health & Development",
  icon: "💚",
  level: "SL",
  summary:
    "How biological, cognitive, and sociocultural factors interact to shape mental and physical health — from diagnostic bias and biopsychosocial aetiology to evaluating biomedical, psychological, and community interventions, chronic stress pathways, addiction, and health promotion.",
  intro:
    "In the IB Diploma Psychology syllabus (First Assessment May 2027), **Health and Well-being** is **Compulsory Context 1**. Rather than treating mental and physical health as separate silos, you apply all three Approaches (**Biological**, **Cognitive**, and **Sociocultural**) alongside the **6 Core Concepts** (**Bias**, **Causality**, **Change**, **Measurement**, **Perspective**, and **Responsibility**) to understand how distress is classified, why disorders emerge, which interventions create durable change, and how stress, addiction, and public-health campaigns operate across cultures.",
  guide: [
    // =========================================================================
    // SECTION 1: diagnosis-classification-bias
    // =========================================================================
    {
      id: "diagnosis-classification-bias",
      heading: "Mental Health Diagnosis, Validity, Reliability & Concept of Bias",
      level: "SL",
      discovery: {
        problem:
          "Two clinicians interview the same 17-year-old student who reports exhaustion, stomach aches, disrupted sleep, and withdrawing from friends before exams. Clinician A diagnoses **Major Depressive Disorder (MDD)**; Clinician B diagnoses **Generalized Anxiety Disorder (GAD)**; a family physician in East Asia initially notes **neurasthenia** (*shenjing shuairuo*). If all three read the same symptoms, what does this reveal about psychiatric diagnosis compared with diagnosing a broken wrist on an X-ray?",
        idea:
          "Unlike a bone fracture, psychological disorders have **no single objective biomarker**. Diagnosis depends on self-report, clinical interpretation, and culturally shaped manuals (**DSM-5-TR** and **ICD-11**). Because symptoms like insomnia, fatigue, and poor concentration overlap across categories (**symptom overlap** and **comorbidity**), two clinicians can reach different labels (low **inter-rater reliability**) or agree on a label that fails to capture the person's actual lived distress (low **diagnostic validity**). Evaluating diagnosis therefore centres on **Measurement**, **Bias**, **Perspective**, and **Responsibility**.",
      },
      body: `### The Biopsychosocial Model vs the Pure Biomedical Model
Traditional psychiatry relied on a narrow **biomedical model** that treats distress primarily as brain pathology to be classified and medicated. Modern IB Psychology frames health through **Engel's (1977) Biopsychosocial Model**: biological predispositions, cognitive appraisals, and sociocultural environments dynamically interact to produce both resilience and vulnerability.

### Classification Systems: DSM-5-TR and ICD-11
Clinicians rely on two primary manuals to standardize assessment:

| System | Publisher | Scope & Key FA2027 Distinction |
|---|---|---|
| **DSM-5-TR** (2022) | American Psychiatric Association | Mental disorders only; widely used in North America and global research; includes a **Cultural Formulation Interview (CFI)** and updated terminology for Cultural Concepts of Distress. |
| **ICD-11** (WHO, 2022) | World Health Organization | All physical and mental health conditions worldwide; designed for cross-cultural clinical utility and global public-health reporting; introduces dimensional severity specifiers (e.g. for personality disorders). |

### Measurement: Reliability and Validity in Diagnosis
- **Inter-rater reliability**: The degree to which two or more independent clinicians assign the same diagnosis to the same patient using the same manual. Measured statistically via **percentage concordance** or **Cohen's kappa (κ)**, which corrects for chance agreement (κ ≥ 0.60 is typically considered substantial; DSM-5 field trials found κ = 0.28 for Major Depressive Disorder — disappointingly low — compared with κ = 0.67 for PTSD).
- **Test–retest reliability**: Consistency of diagnosis across two assessment points when the patient's condition has not genuinely changed.
- **Construct validity**: Whether the diagnostic category reflects a genuine, coherent underlying psychological construct rather than an arbitrary cluster of symptoms.
- **Concurrent validity**: Agreement between two different diagnostic tools (e.g. DSM-5-TR interview vs Beck Depression Inventory score).
- **Predictive validity**: Whether a diagnosis accurately forecasts prognosis and treatment response (e.g. predicting whether CBT or an SSRI will improve outcomes).
- **Crucial Measurement rule**: A diagnosis can be **reliable without being valid** (clinicians consistently apply a flawed or culturally biased checklist), but it **cannot be valid without adequate reliability**.

### Threats to Validity & Reliability: Comorbidity and Symptom Overlap
- **Comorbidity**: The simultaneous presence of two or more disorders in the same individual (e.g. over 50% of people diagnosed with MDD also meet criteria for an anxiety disorder). High comorbidity challenges whether categories are genuinely distinct entities.
- **Symptom overlap**: Identical criteria appear across multiple diagnoses (sleep disturbance, fatigue, irritability, and concentration difficulties appear in both MDD and GAD), inflating disagreement between clinicians and blurring treatment choice.

### Bias, Labelling & Stigma: Rosenhan (1973) and Modern Critiques
In **Rosenhan's (1973)** classic participant observation (*"On being sane in insane places"*), eight sane pseudopatients visited 12 US psychiatric hospitals reporting a single fabricated auditory hallucination (*"empty, hollow, thud"*), then behaved normally immediately after admission.
- **Findings**: Seven were admitted with schizophrenia and one with manic-depressive psychosis; average stay was **19 days** (range 7–52 days). Every pseudopatient was discharged with **"schizophrenia in remission"** — the diagnostic label acted as a **sticky schema**, triggering **confirmation bias** (normal note-taking was recorded in nursing charts as *"writing behaviour"*). In a follow-up challenge, Rosenhan warned a teaching hospital that pseudopatients would try to gain admission over three months; staff suspected **41 out of 193** genuine patients with high confidence even though **zero** pseudopatients were actually sent.
- **Critical Evaluation (Responsibility & Measurement)**: Rosenhan used **DSM-II** (which lacked explicit operational criteria — unlike modern structured interviews for DSM-5-TR/ICD-11), relied on deception (ethical tension, though justified by public-interest *Responsibility*), and investigative reporting by **Cahalan (2019)** uncovered discrepancies in Rosenhan's original hospital records, reminding psychologists to verify primary data and never generalize a 1973 US hospital study uncritically to modern psychiatry. Nevertheless, **diagnostic overshadowing** (attributing a patient's physical complaints to their psychiatric label) and **self-stigma** remain well-documented contemporary harms.

### Cultural Bias & Perspective (HL Extension Bridge: Culture)
Western manuals often assume an **etic** (universal) symptom template, risking **category fallacy** (Kleinman, 1977) — imposing a Western diagnostic label onto a culture where it lacks local validity.
- **Kleinman (1982)** found that 87% of Chinese psychiatric outpatients diagnosed locally with *shenjing shuairuo* (neurasthenia — emphasizing physical fatigue, dizziness, and headaches) met DSM criteria for depression, yet experienced their distress predominantly somatically rather than through Western cognitive guilt.
- **Cultural Concepts of Distress** in DSM-5-TR (e.g. *ataque de nervios* in Latin American communities, *khyâl cap* among Cambodian refugees, *hikikomori* acute social withdrawal documented in Japan and globally) show why adopting an **emic** (insider) **Perspective** prevents misdiagnosis and promotes culturally safe care.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" role="img" aria-label="Diagnostic reliability versus validity 2 by 2 target matrix showing four clinical accuracy outcomes">
  <rect width="640" height="360" rx="14" fill="#ffffff"/>
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1c1630">Diagnostic Reliability vs Validity (Measurement &amp; Bias)</text>
  <text x="320" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#5b5375">Bullseye = patient's true underlying distress · Dots = independent clinicians' diagnoses</text>

  <!-- Quadrant 1: Low R, Low V -->
  <rect x="24" y="64" width="286" height="132" rx="10" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
  <circle cx="92" cy="130" r="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="92" cy="130" r="27" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="92" cy="130" r="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <circle cx="62" cy="103" r="4.5" fill="#c2410c"/>
  <circle cx="121" cy="112" r="4.5" fill="#c2410c"/>
  <circle cx="70" cy="158" r="4.5" fill="#c2410c"/>
  <circle cx="116" cy="153" r="4.5" fill="#c2410c"/>
  <circle cx="104" cy="96" r="4.5" fill="#c2410c"/>
  <text x="150" y="96" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#9a3412">Low Reliability, Low Validity</text>
  <text x="150" y="116" font-family="system-ui, sans-serif" font-size="11.5" fill="#431407">Clinicians disagree widely AND</text>
  <text x="150" y="132" font-family="system-ui, sans-serif" font-size="11.5" fill="#431407">miss the true condition.</text>
  <text x="150" y="154" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c">Risk: Unstructured interviews,</text>
  <text x="150" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c">high symptom overlap.</text>

  <!-- Quadrant 2: High R, Low V -->
  <rect x="330" y="64" width="286" height="132" rx="10" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
  <circle cx="398" cy="130" r="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="398" cy="130" r="27" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="398" cy="130" r="12" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <circle cx="371" cy="104" r="4.5" fill="#a16207"/>
  <circle cx="379" cy="99" r="4.5" fill="#a16207"/>
  <circle cx="368" cy="112" r="4.5" fill="#a16207"/>
  <circle cx="376" cy="109" r="4.5" fill="#a16207"/>
  <circle cx="383" cy="105" r="4.5" fill="#a16207"/>
  <text x="456" y="96" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#854d0e">High Reliability, Low Validity</text>
  <text x="456" y="116" font-family="system-ui, sans-serif" font-size="11.5" fill="#422006">Clinicians consistently agree —</text>
  <text x="456" y="132" font-family="system-ui, sans-serif" font-size="11.5" fill="#422006">but on a BIASED label!</text>
  <text x="456" y="154" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a16207">Risk: Cultural category fallacy,</text>
  <text x="456" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a16207">Rosenhan confirmation bias.</text>

  <!-- Quadrant 3: Low R, High V (Impossible) -->
  <rect x="24" y="210" width="286" height="132" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="6 4" stroke-width="1.5"/>
  <circle cx="92" cy="276" r="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="92" cy="276" r="27" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="92" cy="276" r="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="244" x2="124" y2="308" stroke="#94a3b8" stroke-width="3"/>
  <line x1="124" y1="244" x2="60" y2="308" stroke="#94a3b8" stroke-width="3"/>
  <text x="150" y="242" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#334155">Low Reliability, High Validity</text>
  <text x="150" y="262" font-family="system-ui, sans-serif" font-size="11.5" fill="#475569">Logically impossible for an</text>
  <text x="150" y="278" font-family="system-ui, sans-serif" font-size="11.5" fill="#475569">individual diagnostic tool.</text>
  <text x="150" y="300" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">Rule: Reliability is NECESSARY</text>
  <text x="150" y="316" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">but NOT SUFFICIENT for validity.</text>

  <!-- Quadrant 4: High R, High V -->
  <rect x="330" y="210" width="286" height="132" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <circle cx="398" cy="276" r="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="398" cy="276" r="27" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="398" cy="276" r="12" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="396" cy="274" r="4.5" fill="#15803d"/>
  <circle cx="401" cy="278" r="4.5" fill="#15803d"/>
  <circle cx="395" cy="280" r="4.5" fill="#15803d"/>
  <circle cx="402" cy="273" r="4.5" fill="#15803d"/>
  <circle cx="398" cy="276" r="4.5" fill="#15803d"/>
  <text x="456" y="242" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#166534">High Reliability, High Validity</text>
  <text x="456" y="262" font-family="system-ui, sans-serif" font-size="11.5" fill="#14532d">Consistent agreement AND true</text>
  <text x="456" y="278" font-family="system-ui, sans-serif" font-size="11.5" fill="#14532d">prediction of prognosis &amp; care.</text>
  <text x="456" y="300" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">Goal: Structured interviews +</text>
  <text x="456" y="316" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">DSM-5-TR Cultural Formulation.</text>
</svg>`,
      diagramCaption:
        "Reliability (clustering of clinicians' diagnoses) vs Validity (hitting the patient's true underlying distress). Consistent agreement on a culturally biased label gives High Reliability but Low Validity.",
      workedExamples: [
        {
          title: "Calculating Inter-Rater Concordance & Evaluating Diagnostic Measurement",
          problem:
            "In a clinical audit of a youth outpatient clinic, two psychiatrists independently assess 80 adolescent referrals using the DSM-5-TR. They agree on the primary diagnosis for 52 patients and disagree on 28 patients (most disagreements occur between MDD and GAD). Calculate the percentage inter-rater concordance and explain one threat to diagnostic validity revealed by the pattern of disagreement.",
          steps: [
            "Compute percentage concordance: {{(52 / 80) * 100}} = 65%.",
            "Interpret reliability: 65% raw agreement does not adjust for chance agreement (unlike Cohen's kappa), meaning true chance-corrected inter-rater reliability is even lower.",
            "Identify validity threat: Disagreements clustered between MDD and GAD reflect **symptom overlap** (shared insomnia, fatigue, restlessness, and poor concentration) and frequent **comorbidity**, undermining **construct** and **predictive validity**.",
          ],
          answer: "65% inter-rater concordance; disagreements between MDD and GAD reflect symptom overlap and comorbidity.",
          yourTurn: {
            question:
              "Two clinicians independently evaluate 120 adult patients using ICD-11 guidelines and agree on the exact primary diagnosis for 93 patients. Calculate the percentage inter-rater concordance (give your answer as a percentage to 1 decimal place).",
            answer: { type: "number", value: 77.5, tolerance: 0.1, display: "77.5%" },
            solution: "Divide agreements by total patients and multiply by 100: {{(93 / 120) * 100}} = **77.5%**.",
          },
        },
        {
          title: "Unseen Vignette: Applying Bias & Perspective to Cultural Distress",
          problem:
            "A 19-year-old university student from a collectivist household reports persistent chest tightness, headaches, and loss of appetite to a Western campus counsellor. Using an unstructured interview, the counsellor assumes somatization is masking denial and records Major Depressive Disorder without exploring family pressures. Identify two Core Concepts relevant here and explain how each applies.",
          steps: [
            "**Bias (Confirmation & Cultural Bias)**: The counsellor relies on an unstructured Western etic template, interpreting somatic distress through a pre-existing expectation of 'denial' rather than checking alternative medical or cultural explanations.",
            "**Perspective**: Adopting an **emic** lens (as in Kleinman, 1982, and the DSM-5-TR Cultural Formulation Interview) recognizes that expressing emotional distress somatically is culturally normative in many societies and avoids **category fallacy**.",
            "**Measurement / Responsibility**: Using a standardized, culturally adapted interview protects diagnostic validity and prevents harmful stigma or misaligned treatment.",
          ],
          answer: "Apply Bias (confirmation/cultural bias via etic assumptions) and Perspective (emic cultural idioms of distress via the Cultural Formulation Interview).",
        },
      ],
      keyPoints: [
        "Diagnostic systems (**DSM-5-TR** and **ICD-11**) improve communication and treatment access, yet lack objective biological markers.",
        "**Reliability** (inter-rater concordance / Cohen's κ) is necessary for **validity** (construct, concurrent, predictive), but high reliability never guarantees validity.",
        "**Comorbidity** and **symptom overlap** (especially between depression and anxiety) erode both inter-rater agreement and diagnostic specificity.",
        "**Confirmation bias** and **labelling** (Rosenhan, 1973) can turn a diagnostic label into a self-fulfilling schema — though modern structured criteria and critiques (Cahalan, 2019) require nuanced evaluation.",
        "**Cultural concepts of distress** (Kleinman, 1982) demonstrate why rigid Western *etic* checklists risk **category fallacy** unless paired with *emic* cultural formulation.",
      ],
      whyItWorks:
        "Psychiatric classification sits at the intersection of **Measurement** and **Bias**. When clinicians compress complex human suffering into categorical checklists, reliability rises whenever operational criteria are explicit — yet validity suffers whenever overlapping symptoms, clinician schemas, or Western-centric norms obscure individual context. Balancing standardization with cultural **Perspective** and ethical **Responsibility** is the central tension of modern mental-health assessment.",
      strategies: [
        "Never confuse reliability and validity in exam essays: explicitly define **inter-rater reliability** (agreement) separately from **predictive/construct validity** (accuracy/usefulness).",
        "When citing **Rosenhan (1973)**, earn top-band evaluation marks by balancing its insight into confirmation bias and labelling with **temporal validity** (DSM-II vs DSM-5-TR structured interviews) and **Cahalan's (2019)** archival critique.",
        "Always link diagnostic critiques directly to FA2027 Core Concepts — **Bias**, **Measurement**, **Perspective**, and **Responsibility** — rather than listing isolated study summaries.",
      ],
      thinkDeeper:
        "Should psychiatry abandon discrete categories (like 'MDD' vs 'GAD') in favour of dimensional spectrums (such as the HiTOP model or RDoC neurocognitive domains)? Consider how dimensional scoring improves **Measurement** accuracy while creating practical challenges for **Responsibility** (insurance reimbursement, clear clinical communication, and school accommodations).",
    },

    // =========================================================================
    // SECTION 2: aetiology-mental-health
    // =========================================================================
    {
      id: "aetiology-mental-health",
      heading: "Biopsychosocial Aetiology of Disorders (Depression & Anxiety)",
      level: "SL",
      discovery: {
        problem:
          "Identical (monozygotic) twins share ~100% of their segregating genes. In **Kendler et al.'s (2006)** Swedish twin registry of over 42,000 twins, heritability of Major Depressive Disorder was estimated at roughly **38%** (slightly higher in women than men) — meaning if one identical twin develops MDD, the co-twin frequently does *not*. What does a concordance rate well below 100% prove about biological **Causality**?",
        idea:
          "Genes do **not** act as a deterministic switch for depression or anxiety. Instead, mental disorders arise through a **diathesis–stress interaction**: biological vulnerabilities (polygenic risk, neurotransmitter sensitivity, HPA-axis reactivity) lower the threshold at which **environmental stressors** and **cognitive appraisal patterns** trigger an episode. Understanding aetiology demands triangulating Biological, Cognitive, and Sociocultural **Perspectives**.",
      },
      body: `### Integrating the Three Approaches: Diathesis–Stress
**Aetiology** means the origin and causal pathways of a health condition. Under FA2027, single-factor explanations (pure genetics or pure negative thinking) commit **reductionism** and oversimplify **Causality**. The **diathesis–stress model** proposes that an underlying predisposition (*diathesis* — genetic, neurochemical, cognitive, or early-life adversity) interacts with acute or chronic life stressors (*stress*) to produce clinical depression or anxiety.

### 1. Biological Approach to Depression & Anxiety
- **Genetics & Gene × Environment (G × E) Interaction**:
  - **Kendler et al. (2006)** studied 42,161 twins in Sweden and estimated MDD heritability at **~38%** (42% in females, 29% in males), demonstrating moderate genetic vulnerability alongside major environmental influence.
  - **Caspi et al. (2003)** followed 847 New Zealanders in the Dunedin longitudinal cohort and reported that carriers of the short (**s**) allele of the serotonin-transporter promoter gene (**5-HTTLPR**) showed significantly higher rates of depression *only* after experiencing four or more stressful life events (33% vs 17% for **l/l** homozygotes).
  - **Critical Measurement & Replication Update**: Large-scale meta-analyses and genome-wide association studies (**Culverhouse et al., 2018**, N > 38,000; **Border et al., 2019**, N > 62,000) failed to replicate a robust single candidate-gene 5-HTTLPR × stress effect. Depression is **polygenic** — shaped by hundreds of tiny-effect genetic variants interacting with environment, not one "depression gene". Citing this replication nuance showcases gold-standard IB **Causality** and **Measurement** evaluation!
- **Neurotransmitters & Neuroplasticity**:
  - The classic **monoamine (serotonin) hypothesis** proposed that low synaptic serotonin causes depression. However, **Moncrieff et al.'s (2022)** umbrella review found no consistent evidence that depression is caused solely by reduced serotonin concentrations or activity. Contemporary neuroscience views serotonin modulation as influencing emotional processing and stimulating **BDNF** (brain-derived neurotrophic factor) and hippocampal **neuroplasticity** rather than correcting a simple "chemical deficit".
  - In **anxiety disorders** (GAD, panic, phobias), overactivity in the **amygdala** (threat detection), reduced top-down inhibitory regulation from the **ventromedial prefrontal cortex (vmPFC)**, and altered **GABA** (inhibitory) signalling heighten physiological alarm.
- **HPA-Axis Dysregulation**: Chronic hypersecretion of **cortisol** impairs hippocampal neurogenesis and disrupts negative-feedback shutoff, linking chronic biological stress directly to depressive mood and memory impairment.

### 2. Cognitive Approach to Depression & Anxiety
- **Beck's (1967, 1976) Cognitive Model of Depression**:
  - Early adverse experiences form **depressogenic schemas** (deep core beliefs like *"I am unlovable"* or *"I must never fail"*). When activated by a stressor, these schemas generate **automatic negative thoughts** and **cognitive distortions** (e.g. *overgeneralization*, *catastrophizing*, *dichotomous all-or-nothing thinking*, *arbitrary inference*, *selective abstraction*).
  - These distortions lock the person into **Beck's Negative Cognitive Triad**: a negative view of the **Self** (*"I am worthless"*), the **World** (*"Everyone is against me"*), and the **Future** (*"Nothing will ever improve"*).
  - **Causality Critique**: Are negative cognitions the *cause* of depression or a *symptom* of low mood (**bidirectional causality**)? Longitudinal evidence (**Alloy et al., 1999**, Temple–Wisconsin Cognitive Vulnerability to Depression project) followed non-depressed first-year university students over 2.5 years: **17%** of the high-cognitive-risk group developed a first episode of MDD compared with only **1%** of the low-risk group — supporting cognitive vulnerability as a genuine precursor, though interaction with stressors remains essential.
- **Learned Helplessness & Attributional Style (Seligman, 1975; Abramson et al., 1978)**:
  - Individuals who explain negative events via **internal** (*"It's my fault"*), **stable** (*"It will last forever"*), and **global** (*"It ruins everything I do"*) attributions develop hopelessness and passivity.
- **Cognitive Mechanisms in Anxiety**: Hypervigilant **attentional bias toward threat** (demonstrated via emotional Stroop and dot-probe tasks), **catastrophic misinterpretation** of benign bodily sensations (Clark's cognitive model of panic: racing heart → *"I'm having a heart attack"* → adrenaline surge → panic loop), and avoidance maintaining fear via **negative reinforcement**.

### 3. Sociocultural Approach to Depression & Anxiety
- **Brown & Harris's (1978) Social Origins of Depression (Camberwell, London)**:
  - Interviewing 458 working-class and middle-class women, they identified four **vulnerability factors** that increased depression risk when combined with a severe life event (**provoking agent**):
    1. Lack of a close, confiding relationship
    2. Loss of mother before age 11
    3. Three or more children under age 14 at home
    4. Lack of employment outside the home
  - **Findings**: Among women experiencing a severe life event, working-class women were roughly four times more likely to develop depression than middle-class women; having a warm, confiding relationship acted as a major **protective factor**.
  - **Evaluation**: High ecological validity and rich qualitative life-event contextualization, yet restricted to 1970s South London women (limited temporal and cross-cultural generalizability) and correlational/retrospective recall risks (**Bias** & **Causality**).
- **Socioeconomic Gradient, Discrimination & Social Isolation**: Chronic poverty, housing insecurity, minority stress, and loneliness sustain elevated allostatic load (linking sociocultural conditions directly to biological HPA cortisol!).
- **Cultural Expression of Distress**: **Ryder et al. (2008)** compared depressed outpatients in Changsha (China) and Toronto (Canada): Chinese outpatients reported significantly more **somatic** symptoms (insomnia, appetite loss, fatigue) on spontaneous interviews, whereas Euro-Canadian outpatients emphasized **psychological/affective** complaints (sadness, guilt), mediated by cultural norms around externally oriented thinking and emotional restraint.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 370" role="img" aria-label="Diathesis stress biopsychosocial model and Beck negative cognitive triad diagram">
  <rect width="640" height="370" rx="14" fill="#ffffff"/>
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1c1630">Biopsychosocial Diathesis–Stress &amp; Beck's Negative Triad</text>

  <!-- Left panel: Diathesis-Stress threshold -->
  <rect x="20" y="44" width="304" height="308" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="172" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">Diathesis × Stress Threshold</text>

  <!-- Threshold line -->
  <line x1="42" y1="138" x2="304" y2="138" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="302" y="132" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">Clinical Episode Threshold</text>

  <!-- Bar 1: Low vulnerability + moderate stress -->
  <rect x="58" y="264" width="56" height="42" rx="4" fill="#7c3aed"/>
  <rect x="58" y="206" width="56" height="58" rx="4" fill="#f59e0b"/>
  <text x="86" y="289" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Low Bio</text>
  <text x="86" y="239" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Stress</text>
  <text x="86" y="324" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d">Resilient</text>
  <text x="86" y="338" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Below threshold</text>

  <!-- Bar 2: High vulnerability + low stress -->
  <rect x="144" y="198" width="56" height="108" rx="4" fill="#7c3aed"/>
  <rect x="144" y="166" width="56" height="32" rx="4" fill="#f59e0b"/>
  <text x="172" y="254" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">High</text>
  <text x="172" y="267" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Diathesis</text>
  <text x="172" y="186" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#ffffff">Low</text>
  <text x="172" y="324" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d">Buffered</text>
  <text x="172" y="338" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Protective support</text>

  <!-- Bar 3: High vulnerability + high stress -->
  <rect x="230" y="198" width="56" height="108" rx="4" fill="#7c3aed"/>
  <rect x="230" y="100" width="56" height="98" rx="4" fill="#ea580c"/>
  <text x="258" y="254" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">High</text>
  <text x="258" y="267" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Diathesis</text>
  <text x="258" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Severe</text>
  <text x="258" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Stress</text>
  <text x="258" y="324" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">Episode</text>
  <text x="258" y="338" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569">Crosses threshold</text>

  <!-- Legend left -->
  <rect x="42" y="78" width="12" height="10" rx="2" fill="#7c3aed"/>
  <text x="58" y="87" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Bio/Cog Vulnerability</text>
  <rect x="172" y="78" width="12" height="10" rx="2" fill="#ea580c"/>
  <text x="188" y="87" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Sociocultural Stressor</text>

  <!-- Right panel: Beck's Cognitive Triad -->
  <rect x="338" y="44" width="282" height="308" rx="12" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="479" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#4c1d95">Beck's Negative Cognitive Triad</text>
  <text x="479" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#5b5375">Self-reinforcing depressogenic schemas</text>

  <!-- Triangle connectors -->
  <line x1="479" y1="146" x2="404" y2="254" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="479" y1="146" x2="554" y2="254" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="404" y1="268" x2="554" y2="268" stroke="#7c3aed" stroke-width="2.5"/>

  <!-- Node 1: Self -->
  <rect x="406" y="102" width="146" height="54" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
  <text x="479" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#5b21b6">Negative View of SELF</text>
  <text x="479" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#4c1d95">"I am inadequate / worthless"</text>

  <!-- Node 2: World -->
  <rect x="350" y="242" width="122" height="56" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
  <text x="411" y="262" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#115e59">Negative WORLD</text>
  <text x="411" y="279" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#134e4a">"Others reject me;</text>
  <text x="411" y="291" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#134e4a">life is unfair"</text>

  <!-- Node 3: Future -->
  <rect x="486" y="242" width="122" height="56" rx="10" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
  <text x="547" y="262" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9d174d">Negative FUTURE</text>
  <text x="547" y="279" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#831843">"Nothing will ever</text>
  <text x="547" y="291" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#831843">change for me"</text>

  <!-- Center cognitive distortions badge -->
  <rect x="419" y="185" width="120" height="38" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.2"/>
  <text x="479" y="201" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#5b21b6">Cognitive Distortions</text>
  <text x="479" y="215" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#4c1d95">Catastrophizing · Overgen.</text>

  <text x="479" y="330" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">Attributional style: Internal · Stable · Global</text>
</svg>`,
      diagramCaption:
        "Left: Diathesis–stress interaction showing why high vulnerability alone does not guarantee an episode when protective buffers exist. Right: Beck's negative cognitive triad sustained by cognitive distortions and internal–stable–global attributions.",
      workedExamples: [
        {
          title: "Interpreting Twin Concordance & Genetic Causality",
          problem:
            "A twin study reports that concordance for Major Depressive Disorder is 44% in monozygotic (MZ) twins reared together and 20% in same-sex dizygotic (DZ) twins reared together. Explain two conclusions about biological and environmental causality that can be drawn from these figures.",
          steps: [
            "**Genetic predisposition exists**: MZ concordance (44%) is more than double DZ concordance (20%) despite both sharing a family environment, indicating a meaningful polygenic heritable contribution.",
            "**Non-genetic factors are essential**: Because MZ twins share ~100% of segregating genes yet are discordant in 56% of pairs (100% − 44%), genes are **not deterministic** — unique environmental stressors, cognitive schemas, and social support shape whether vulnerability becomes clinical depression.",
            "**Methodological caveat (Measurement/Bias)**: The **equal environments assumption** may be violated if parents treat identical twins more similarly than fraternal twins, slightly inflating heritability estimates.",
          ],
          answer: "MZ > DZ (44% vs 20%) supports genetic vulnerability, while 56% MZ discordance proves environmental and cognitive factors are indispensable.",
          yourTurn: {
            question:
              "In a twin study of Generalized Anxiety Disorder, MZ concordance is 36% and DZ concordance is 14%. What percentage of MZ twin pairs are **discordant** (meaning one twin has GAD and the co-twin does not)?",
            answer: { type: "number", value: 64, display: "64%" },
            solution: "Discordance = {{100 - 36}} = **64%** — confirming that environmental stressors and cognitive appraisal strongly moderate genetic risk.",
          },
        },
        {
          title: "Analyzing an Unseen Student Vignette Across All 3 Approaches",
          problem:
            "After moving schools internationally, Maya scores poorly on one chemistry quiz and thinks, 'I am stupid, every teacher here expects perfection, and I will definitely fail the IB.' Her mother has a history of depression, and Maya has not yet formed close friendships. Apply Biological, Cognitive, and Sociocultural explanations to Maya's risk.",
          steps: [
            "**Biological**: Family history suggests polygenic vulnerability (Kendler et al., 2006) and heightened HPA-axis cortisol sensitivity to chronic transition stress.",
            "**Cognitive**: Maya exhibits **Beck's negative cognitive triad** (self: *'I am stupid'*; world: *'every teacher expects perfection'*; future: *'I will fail'*) driven by **overgeneralization** and **internal–stable–global** attributions (Alloy et al., 1999).",
            "**Sociocultural**: Relocation creates a **provoking agent** while stripping away a close confiding support network (Brown & Harris, 1978), removing a critical protective buffer.",
          ],
          answer: "Triangulate polygenic/HPA sensitivity (Bio), Beck's triad & overgeneralization (Cog), and loss of confiding social support after relocation (Socio).",
        },
      ],
      keyPoints: [
        "**Diathesis–stress** integrates all three approaches: biological vulnerability lowers the threshold at which stressors and maladaptive schemas trigger clinical distress.",
        "Depression is **polygenic** (~38% heritability in Kendler et al., 2006); single candidate genes like **Caspi et al.'s (2003) 5-HTTLPR** failed to replicate in large modern meta-analyses (**Border et al., 2019**).",
        "The simplistic 'low serotonin deficit' hypothesis is challenged by **Moncrieff et al. (2022)**; modern models focus on neuroplasticity (BDNF), emotional-processing bias, and HPA-axis cortisol.",
        "**Beck's cognitive triad** (self, world, future), cognitive distortions, and **internal–stable–global** attributions predict onset prospectively (**Alloy et al., 1999**), addressing bidirectional causality.",
        "**Brown & Harris (1978)** highlighted sociocultural vulnerability and protective factors (especially a confiding relationship), while **Ryder et al. (2008)** demonstrated cultural shaping of somatic vs affective symptom presentation.",
      ],
      whyItWorks:
        "No single approach can explain why two people facing identical trauma have opposite outcomes, or why two identical twins diverge in mental health. **Causality** in Health and Well-being is **probabilistic and bidirectional**: chronic social deprivation elevates cortisol, elevated cortisol biases attention toward threat, and threat-focused schemas lead people to withdraw further from social support.",
      strategies: [
        "For FA2027 Paper 1 Section C essays on **Causality** or **Perspective**, structure paragraphs to show *interaction* (e.g. how Brown & Harris's chronic social stress activates HPA-axis cortisol and Beck's latent schemas) rather than writing three disconnected mini-essays.",
        "Upgrade your evaluation of **Caspi et al. (2003)** by citing the replication crisis (**Border et al., 2019** / **Culverhouse et al., 2018**) — IB examiners reward contemporary scientific accuracy.",
        "Always check **bidirectional causality** in correlational studies: low mood can *cause* negative thinking or social withdrawal just as easily as negative thinking or isolation can *cause* low mood.",
      ],
      thinkDeeper:
        "If **Moncrieff et al. (2022)** found no consistent evidence that depression is caused by a baseline serotonin deficiency, why do SSRIs still help many severely depressed patients? Explore the distinction between *aetiology* (what caused the fire) and *mechanism of change* (how water puts the fire out — or how downstream neuroplasticity and emotional-bias shifts work).",
    },

    // =========================================================================
    // SECTION 3: treatments-interventions
    // =========================================================================
    {
      id: "treatments-interventions",
      heading: "Evaluating Treatments: Biomedical, Cognitive (CBT) & Community Care",
      level: "SL",
      discovery: {
        problem:
          "In a 12-week double-blind randomized controlled trial (RCT), patients taking an SSRI improve by 10 points on the Hamilton Depression Rating Scale (HAM-D), while patients taking an inert sugar pill (placebo) improve by 8 points. That 2-point difference is statistically significant (*p* < 0.01) because *N* = 2,000. Does statistical significance automatically mean the drug is clinically transformative for mild depression?",
        idea:
          "No! This is the core insight behind **Kirsch et al.'s (2008)** meta-analysis: statistical significance depends heavily on sample size, whereas **clinical significance** asks whether patients experience a meaningful real-world reduction in suffering (typically ≥ 3 points on HAM-D). Evaluating interventions requires distinguishing statistical vs clinical **Change**, accounting for placebo/expectancy **Bias**, comparing relapse rates after stopping treatment, and weighing ethical **Responsibility** (side effects, access, and cultural fit).",
      },
      body: `### 1. Biomedical Interventions: SSRIs
- **Biological Mechanism**: Selective Serotonin Reuptake Inhibitors (SSRIs, e.g. fluoxetine, sertraline) bind to and block **presynaptic serotonin transporter (SERT)** proteins, preventing rapid reuptake of serotonin (5-HT) from the synaptic cleft. Serotonin remains active in the synapse longer, increasing postsynaptic receptor binding. Because clinical mood improvement takes **2–6 weeks** despite immediate reuptake blockade, modern neuroscience attributes therapeutic **Change** to downstream receptor adaptation, increased **BDNF** expression, hippocampal neurogenesis, and early shifts in positive emotional appraisal (**Harmer et al., 2009**).
- **Evidence & Controversy (Measurement & Bias)**:
  - **Kirsch et al. (2008)** analysed both published and unpublished FDA clinical trial datasets (preventing **publication bias** / the *file-drawer problem*) and found that the drug–placebo difference fell below clinical significance for mild-to-moderate depression, becoming clinically meaningful mainly in **very severe depression** (largely because placebo response dropped in severe cases).
  - **Cipriani et al. (2018)** conducted the largest network meta-analysis of 522 double-blind RCTs (N = 116,477) and concluded that all 21 tested antidepressants were more efficacious than placebo for acute adult MDD, with small-to-moderate effect sizes (odds ratios 1.37–2.13) and substantial variation in tolerability.
- **Limitations & Ethical Responsibility**: Side effects (nausea, insomnia, sexual dysfunction, emotional blunting), withdrawal symptoms upon abrupt discontinuation, **high relapse rates** once medication stops (because underlying cognitive schemas and life stressors remain unchanged), and **biological reductionism**.

### 2. Cognitive Behavioural Therapy (CBT)
- **Cognitive & Behavioural Mechanism**: Developed by Aaron Beck, CBT targets both maladaptive thought patterns and avoidance behaviours through structured, time-limited sessions (typically 12–20 weeks):
  - **Cognitive restructuring**: Identifying automatic negative thoughts via thought records, testing their evidence empirically (*"behavioural experiments"*), and replacing distortions (catastrophizing, all-or-nothing thinking) with balanced appraisals.
  - **Behavioural activation**: Scheduling mastery and pleasure activities to break the withdrawal–low-mood spiral in depression (or **graded exposure** without safety behaviours in anxiety disorders).
- **Evidence (Change & Causality)**:
  - **Elkin et al. (1989)** (NIMH Treatment of Depression Collaborative Research Program, N = 250) found CBT, Interpersonal Therapy (IPT), and antidepressant medication (imipramine) achieved comparable outcomes for mild-to-moderate depression, though medication acted slightly faster in severe cases.
  - **DeRubeis et al. (2005)** and **Hollon et al. (2005)** showed that well-delivered CBT matched SSRIs in moderate-to-severe depression and cut **12-month post-treatment relapse roughly in half** (31% post-CBT vs 76% after withdrawing medication), because clients retain transferable cognitive skills (**enduring Change**).
- **Limitations**: Requires high verbal literacy, cognitive energy, and homework engagement (challenging during acute severe depression); therapist-alliance **confounding** (part of improvement comes from warm therapeutic rapport rather than CBT techniques alone); and potential Western **individualistic Bias** (assuming individuals can simply reframe structural poverty or discrimination).

### 3. Eclectic / Combined Treatment
- **Cuijpers et al. (2014)** meta-analysed trials comparing psychotherapy alone, pharmacotherapy alone, and **combined treatment** (CBT + SSRI): combined care outperformed either monotherapy for moderate-to-severe and chronic depression. Medication can reduce acute neurovegetative distress enough for the patient to engage constructively in CBT skill-building.

### 4. Culturally Adapted & Community Care (Responsibility & Perspective)
Globally, over 75% of people in low- and middle-income countries needing mental-health care receive none — and minority communities in high-income nations face linguistic, financial, and stigma barriers.
- **Griner & Smith (2006)** meta-analysed 76 studies (N = 25,225) and found that **culturally adapted interventions** (delivered in clients' native language, aligning with local family structures and cultural idioms of distress) were significantly more effective (*d* = 0.45) than unadapted Western therapies.
- **The Friendship Bench (Chibanda et al., 2016, Zimbabwe)**: In a landmark cluster RCT (N = 573) in Harare, trained lay community health workers ("grandmothers") delivered 6 structured problem-solving therapy sessions on wooden park benches using culturally resonant Shona concepts (*kufungisisa* — "thinking too much"). At 6 months, depression and anxiety scores dropped dramatically compared with enhanced usual care (**14% vs 50%** remaining above clinical threshold).
- **Digital & Youth Stepped Care (HL Extension Bridge: Technology)**: Guided internet-based CBT (iCBT) and youth-friendly community hubs (such as Singapore's **CHAT** — Community Health Assessment Team) expand early access and reduce stigma, though unguided mental-health apps suffer high dropout rates and data-privacy **Responsibility** concerns.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 365" role="img" aria-label="Comparison of SSRI presynaptic serotonin reuptake blockade and CBT cognitive restructuring">
  <rect width="640" height="365" rx="14" fill="#ffffff"/>
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1c1630">Treatment Comparator: Biomedical (SSRI) vs Cognitive (CBT)</text>

  <!-- Left panel: SSRI Synapse -->
  <rect x="20" y="44" width="292" height="302" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="166" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">Biomedical: SSRI at the Synapse</text>

  <!-- Presynaptic terminal -->
  <path d="M 96 84 C 96 156, 236 156, 236 84 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="166" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Presynaptic Neuron</text>
  <!-- Vesicle -->
  <circle cx="166" cy="128" r="12" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="163" cy="126" r="3" fill="#2563eb"/>
  <circle cx="170" cy="130" r="3" fill="#2563eb"/>

  <!-- SERT Reuptake pump blocked by SSRI -->
  <rect x="97" y="128" width="24" height="14" rx="4" fill="#1e40af"/>
  <text x="72" y="139" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1e3a8a">SERT</text>
  <!-- SSRI blocker X -->
  <rect x="103" y="136" width="14" height="12" rx="3" fill="#dc2626"/>
  <text x="72" y="154" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#dc2626">SSRI blocks</text>
  <text x="72" y="165" text-anchor="end" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#dc2626">reuptake!</text>

  <!-- Synaptic cleft serotonin dots -->
  <circle cx="144" cy="170" r="4" fill="#2563eb"/>
  <circle cx="162" cy="176" r="4" fill="#2563eb"/>
  <circle cx="178" cy="168" r="4" fill="#2563eb"/>
  <circle cx="192" cy="178" r="4" fill="#2563eb"/>
  <circle cx="152" cy="186" r="4" fill="#2563eb"/>
  <circle cx="172" cy="189" r="4" fill="#2563eb"/>
  <text x="206" y="176" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">More 5-HT in</text>
  <text x="206" y="188" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">synaptic cleft</text>

  <!-- Postsynaptic membrane -->
  <path d="M 88 214 Q 166 196 244 214 L 244 248 L 88 248 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <rect x="130" y="201" width="14" height="9" rx="2" fill="#1d4ed8"/>
  <rect x="160" y="198" width="14" height="9" rx="2" fill="#1d4ed8"/>
  <rect x="190" y="201" width="14" height="9" rx="2" fill="#1d4ed8"/>
  <text x="166" y="232" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Postsynaptic Receptors</text>

  <!-- Summary bullets left -->
  <text x="34" y="272" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">• Mechanism: Blocks SERT → BDNF &amp; plasticity</text>
  <text x="34" y="290" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e40af">• Strength: Helps acute / severe MDD; low effort</text>
  <text x="34" y="308" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e40af">• Limit: Side effects; high relapse if stopped;</text>
  <text x="42" y="322" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e40af">placebo &amp; publication bias (Kirsch, 2008)</text>

  <!-- Right panel: CBT Restructuring -->
  <rect x="328" y="44" width="292" height="302" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="474" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#166534">Cognitive: CBT Restructuring Loop</text>

  <!-- Step 1 -->
  <rect x="348" y="84" width="252" height="40" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
  <text x="474" y="101" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#991b1b">1. Catch Automatic Negative Thought</text>
  <text x="474" y="116" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">"I stumbled in speech → everyone thinks I'm a failure"</text>

  <line x1="474" y1="124" x2="474" y2="142" stroke="#15803d" stroke-width="2"/>
  <polygon points="469,138 479,138 474,146" fill="#15803d"/>

  <!-- Step 2 -->
  <rect x="348" y="146" width="252" height="42" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
  <text x="474" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#92400e">2. Test Evidence &amp; Behavioural Experiment</text>
  <text x="474" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#78350f">Spot distortion (catastrophizing) · gather counter-facts</text>

  <line x1="474" y1="188" x2="474" y2="206" stroke="#15803d" stroke-width="2"/>
  <polygon points="469,202 479,202 474,210" fill="#15803d"/>

  <!-- Step 3 -->
  <rect x="348" y="210" width="252" height="42" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="474" y="227" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#14532d">3. Balanced Reappraisal + Activation</text>
  <text x="474" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#166534">"One slip is normal; peers clapped" → stay engaged</text>

  <!-- Summary bullets right -->
  <text x="342" y="274" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">• Mechanism: Rebuilds schemas + stops avoidance</text>
  <text x="342" y="292" font-family="system-ui, sans-serif" font-size="10.5" fill="#14532d">• Strength: Durable skills → lower relapse (Hollon)</text>
  <text x="342" y="310" font-family="system-ui, sans-serif" font-size="10.5" fill="#14532d">• Limit: High cognitive demand; needs cultural</text>
  <text x="350" y="324" font-family="system-ui, sans-serif" font-size="10.5" fill="#14532d">adaptation (Griner &amp; Smith, 2006)</text>
</svg>`,
      diagramCaption:
        "Biomedical SSRIs alter synaptic signalling and downstream neuroplasticity without requiring verbal effort, whereas CBT trains lasting cognitive restructuring and behavioural activation skills. Combining both often optimizes severe cases (Cuijpers et al., 2014).",
      workedExamples: [
        {
          title: "Computing Clinical Effect Metrics: ARR and Number Needed to Treat (NNT)",
          problem:
            "In a 6-month RCT of a community problem-solving therapy (inspired by Chibanda et al.'s Friendship Bench), 68% of intervention patients achieve clinical remission compared with 28% in enhanced usual care. Calculate the Absolute Risk Reduction / Absolute Benefit Increase (ARR) in percentage points and the Number Needed to Treat (NNT).",
          steps: [
            "Convert remission rates to proportions: 0.68 (intervention) and 0.28 (control).",
            "Calculate Absolute Benefit Increase (ARR): {{0.68 - 0.28}} = **0.40** (or **40 percentage points**).",
            "Calculate NNT: {{1 / 0.40}} = **2.5** (clinically rounded up to 3 — meaning treating roughly 3 patients yields 1 extra full remission over usual care).",
          ],
          answer: "ARR = 40 percentage points (0.40); NNT = 2.5 (≈ 3 patients).",
          yourTurn: {
            question:
              "In an RCT evaluating an SSRI against placebo for moderate depression, 52% of SSRI patients and 42% of placebo patients achieve remission. Calculate the **Number Needed to Treat (NNT)** (give an exact whole number).",
            answer: { type: "number", value: 10, display: "10" },
            solution: "Absolute benefit difference = {{0.52 - 0.42}} = 0.10. Therefore NNT = {{1 / 0.10}} = **10** (you must treat 10 patients to achieve 1 extra remission beyond placebo).",
          },
        },
        {
          title: "Evaluating Treatment Choice Using Change, Perspective & Responsibility",
          problem:
            "A rural community clinic serves low-income patients with high stigma toward psychiatric hospitals and limited English literacy. Compare recommending standard Western CBT, SSRIs alone, or a culturally adapted community model.",
          steps: [
            "**SSRIs alone**: Low linguistic demand and affordable generics, but high relapse when stopped, side-effect burden, and leaves social/economic stressors untouched (narrow biological **Perspective**).",
            "**Standard Western CBT**: Strong durable **Change** in Western trials (DeRubeis et al., 2005), yet requires trained specialists and high verbal/written homework literacy, creating access barriers.",
            "**Culturally adapted community intervention**: Task-shifting to trained local peers (Chibanda et al., 2016; Griner & Smith, 2006) integrates local idioms of distress, reduces stigma, and upholds ethical **Responsibility** for equitable care.",
          ],
          answer: "Culturally adapted community problem-solving (with optional medical backup for severe cases) best balances durable Change, cultural Perspective, and equitable Responsibility.",
        },
      ],
      keyPoints: [
        "**SSRIs** block presynaptic **SERT** reuptake transporters, elevating synaptic serotonin and triggering downstream neuroplasticity (**BDNF**) over 2–6 weeks.",
        "Always contrast **Kirsch et al. (2008)** (publication bias & small clinical benefit over placebo in mild/moderate MDD) with **Cipriani et al. (2018)** (all 21 antidepressants outperform placebo in acute adult MDD across 522 RCTs).",
        "**CBT** combines **cognitive restructuring** and **behavioural activation**; it matches SSRIs in moderate–severe depression (**DeRubeis et al., 2005**) and cuts post-treatment relapse (**Hollon et al., 2005**).",
        "**Eclectic / combined therapy** (SSRI + CBT) delivers superior outcomes for severe or chronic depression (**Cuijpers et al., 2014**).",
        "**Culturally adapted and community interventions** (**Griner & Smith, 2006**; **Chibanda et al., 2016** Friendship Bench) tackle stigma, scalability, and Western cultural **Bias**.",
      ],
      whyItWorks:
        "Therapeutic **Change** works across levels of the biopsychosocial system: pharmacotherapy modifies bottom-up limbic reactivity and neural plasticity, while CBT trains top-down prefrontal reappraisal and breaks behavioural avoidance. Evaluating treatments rigorously demands comparing not just short-term symptom drops, but **publication bias**, **active placebo controls**, **long-term relapse**, and **cultural accessibility** (**Responsibility**).",
      strategies: [
        "Never write 'SSRIs don't work' or 'CBT works for everyone'. High-band IB essays weigh **severity** (mild vs severe MDD), **timeframe** (acute response vs 12-month relapse), and **cultural/socioeconomic access**.",
        "Use **NNT** and **effect size / clinical vs statistical significance** to critique pharmaceutical trials — it directly demonstrates FA2027 **Measurement** mastery.",
        "Always mention **common factors** (therapeutic alliance, expectancy/placebo effects) when evaluating why two very different therapies (CBT vs IPT in Elkin et al.) produce similar gains.",
      ],
      thinkDeeper:
        "Active placebos (inert pills engineered to produce mild dry mouth or drowsiness) narrow the measured drug–placebo gap in antidepressant trials because standard double-blind trials can become **unblinded** when patients guess they received the active drug from its side effects. How does this illustrate **Measurement** error and **Bias** in biomedical research?",
    },

    // =========================================================================
    // SECTION 4: stress-addiction-health-promotion
    // =========================================================================
    {
      id: "stress-addiction-health-promotion",
      heading: "Physical Health, Chronic Stress, Addiction & Health Promotion",
      level: "SL",
      discovery: {
        problem:
          "During a 90-second near-miss while crossing a busy road, your heart pounds instantly and calms down within minutes. By contrast, caring for a seriously ill relative for two years leaves you catching colds constantly and cuts taking days longer to heal. Both involve 'stress' — so why is acute stress protective while chronic stress damages physical immunity?",
        idea:
          "Your body runs **two distinct physiological stress systems**: the rapid **SAM (Sympathomedullary) pathway** (adrenaline for seconds-to-minutes fight-or-flight survival) and the slower **HPA (Hypothalamic–Pituitary–Adrenal) axis** (cortisol for sustained energy mobilization). When chronic psychosocial stressors keep cortisol elevated without recovery (**allostatic load**), cortisol suppresses white blood cells (**psychoneuroimmunology**), impairs tissue repair, and accelerates cardiovascular wear.",
      },
      body: `### 1. Physiological Stress Pathways & Psychoneuroimmunology (Biological)
- **Fast Pathway — SAM (Sympathomedullary) System (Acute Stress)**:
  1. Hypothalamus activates the **sympathetic branch of the autonomic nervous system**.
  2. Nerve impulses stimulate the **adrenal medulla** to release **adrenaline (epinephrine)** and **noradrenaline**.
  3. Immediate effects (seconds): elevated heart rate and blood pressure, dilated bronchioles, blood diverted to skeletal muscles, glucose released — adaptive short-term survival. Once threat passes, the **parasympathetic nervous system** restores homeostasis.
- **Slow Pathway — HPA Axis (Chronic Stress)**:
  1. Hypothalamus secretes **CRH** (corticotropin-releasing hormone).
  2. Anterior pituitary gland releases **ACTH** (adrenocorticotropic hormone) into the bloodstream.
  3. **Adrenal cortex** secretes **cortisol**, maintaining blood glucose and suppressing non-urgent functions (digestion, immune inflammation).
  4. Normally, rising cortisol triggers **negative feedback** to the hippocampus and hypothalamus to shut down the axis. Under chronic uncontrollable stress, receptors desensitize and sustained cortisol causes **immune suppression** and hippocampal dendritic atrophy (**Sapolsky**; **allostatic load**).
- **Empirical Evidence (Psychoneuroimmunology)**:
  - **Kiecolt-Glaser et al. (1984)** took blood samples from 75 medical students one month before exams (low stress) and during final exams (high stress): **natural killer (NK) cell activity** dropped significantly during exams, with the sharpest drop in students who also reported high **loneliness** (biological × sociocultural interaction!).
  - **Kiecolt-Glaser et al. (1995)** gave standardized 3.5 mm skin punch biopsies to 13 women caring for relatives with Alzheimer's disease and 13 matched controls: caregivers' wounds took **24% longer to heal** (48.7 vs 39.3 days) and showed reduced interleukin-1β cytokine production.
  - **Gender Bias Critique**: **Taylor et al. (2000)** argued that classic *fight-or-flight* stress research showed **androcentric bias** (overwhelmingly male animal/human samples) and proposed **tend-and-befriend** — modulated by **oxytocin** and social affiliation — as a vital complementary stress response, especially prominent in females.

### 2. Cognitive Appraisal & Coping: Lazarus & Folkman (1984)
In the **Transactional Model of Stress and Coping**, stress is not inherent in an event; it arises from the cognitive transaction between person and environment:
- **Primary Appraisal**: Evaluating whether an event is irrelevant, benign-positive, or stressful (**harm/loss**, **threat**, or **challenge**).
- **Secondary Appraisal**: Evaluating one's perceived coping resources and control (*"Can I handle this?"*). Stress peaks when perceived threat exceeds perceived coping resources.
- **Coping Strategies**:
  - **Problem-focused coping**: Directly modifying the stressor (e.g. creating a revision timetable, negotiating a deadline) — most adaptive when the stressor is **controllable**.
  - **Emotion-focused coping**: Regulating emotional distress (e.g. mindfulness, seeking empathy, cognitive reappraisal, or maladaptive avoidance/substance use) — especially useful when a stressor is **uncontrollable** (e.g. bereavement).

### 3. Biopsychosocial Mechanisms of Addiction (Substance & Behavioural)
Addiction (nicotine, alcohol, opioids, or behavioural addictions such as gambling and compulsive gaming) involves compulsive use despite severe harm:
- **Biological**: Repeated reward surges hijack the **mesolimbic dopamine pathway** (ventral tegmental area **VTA** → **nucleus accumbens**). **Berridge & Robinson's Incentive Sensitization Theory** distinguishes **"wanting"** (hyper-sensitized dopamine cue-driven craving) from **"liking"** (pleasure, which declines as **tolerance** develops). Avoiding painful **withdrawal** traps users in **negative reinforcement**.
- **Cognitive**: **Classical cue reactivity** (seeing a café, phone notification, or cigarette pack triggers conditioned craving), biased **positive outcome expectancies** (*"One drink relaxes me"*), impaired prefrontal **inhibitory control**, and low **self-efficacy** driving the **abstinence violation effect** (one slip → *"I've ruined everything"* → full relapse).
- **Sociocultural (HL Extension Bridge: Motivation & Technology)**: Peer modelling (Bandura's Social Cognitive Theory), cultural drinking/smoking norms, targeted commercial marketing, socioeconomic stress, and **variable-ratio reinforcement schedules** engineered into gambling apps and infinite-scroll platforms.

### 4. Health Promotion Models & Public-Health Responsibility
How do psychologists shift population health behaviours (vaccination, exercise, sugar/tobacco reduction, screening)?

| Model / Approach | Core Constructs | Strengths & Limitations |
|---|---|---|
| **Health Belief Model (HBM)** (Rosenstock, 1974; Becker) | **Perceived susceptibility** + **perceived severity** (= perceived threat); **perceived benefits** minus **perceived barriers**; **cues to action**; **self-efficacy** | Predicts one-off preventive actions (e.g. screening, vaccines) well; weak on habitual/emotional behaviours and ignores social norms & poverty. |
| **Theory of Planned Behaviour (TPB)** (Ajzen, 1991) | **Attitudes** + **subjective norms** + **perceived behavioural control (PBC)** → **Behavioural Intention** → **Behaviour** | Stronger predictive power than HBM by adding social norms & control; still suffers the **intention–behaviour gap** (good intentions fail under stress or temptation). |
| **Nudges & Structural Policy** (Thaler & Sunstein; WHO) | Choice architecture (defaults, front-of-pack labels like Singapore's **Nutri-Grade**, graphic warnings) + **structural policy** (sugar/tobacco taxes, smoke-free laws, safe cycling paths) | Reaches whole populations without relying solely on individual willpower; avoids **victim-blaming** and reduces socioeconomic health inequities (**Responsibility**). |`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 375" role="img" aria-label="Dual physiological stress pathways SAM and HPA axis alongside Health Belief Model predictors">
  <rect width="640" height="375" rx="14" fill="#ffffff"/>
  <text x="320" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1c1630">Dual Stress Pathways (SAM vs HPA) &amp; Health Belief Model</text>

  <!-- Left panel: SAM vs HPA -->
  <rect x="18" y="42" width="322" height="316" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
  <text x="179" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#9a3412">Physiological Stress Response</text>

  <!-- Hypothalamus top -->
  <rect x="104" y="76" width="150" height="30" rx="8" fill="#1c1630"/>
  <text x="179" y="95" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Stressor → Hypothalamus</text>

  <!-- Branch arrows -->
  <line x1="140" y1="106" x2="96" y2="128" stroke="#ea580c" stroke-width="2"/>
  <line x1="218" y1="106" x2="262" y2="128" stroke="#7c3aed" stroke-width="2"/>

  <!-- Fast SAM column -->
  <rect x="30" y="128" width="134" height="34" rx="7" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
  <text x="97" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#9a3412">FAST: SAM Pathway</text>
  <text x="97" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7c2d12">Sympathetic NS (seconds)</text>

  <line x1="97" y1="162" x2="97" y2="178" stroke="#ea580c" stroke-width="2"/>
  <rect x="30" y="178" width="134" height="36" rx="7" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/>
  <text x="97" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#9a3412">Adrenal Medulla</text>
  <text x="97" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7c2d12">Adrenaline + Noradrenaline</text>

  <line x1="97" y1="214" x2="97" y2="230" stroke="#ea580c" stroke-width="2"/>
  <rect x="30" y="230" width="134" height="58" rx="7" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="97" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e">Acute Fight-or-Flight</text>
  <text x="97" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f">↑ HR &amp; BP · ↑ Glucose</text>
  <text x="97" y="275" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f">Short-term adaptive</text>

  <!-- Slow HPA column -->
  <rect x="194" y="128" width="134" height="34" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="261" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">SLOW: HPA Axis</text>
  <text x="261" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#4c1d95">CRH → Pituitary (ACTH)</text>

  <line x1="261" y1="162" x2="261" y2="178" stroke="#7c3aed" stroke-width="2"/>
  <rect x="194" y="178" width="134" height="36" rx="7" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="261" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6">Adrenal Cortex</text>
  <text x="261" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#4c1d95">Releases Cortisol</text>

  <line x1="261" y1="214" x2="261" y2="230" stroke="#7c3aed" stroke-width="2"/>
  <rect x="194" y="230" width="134" height="58" rx="7" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="261" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b">Chronic Allostatic Load</text>
  <text x="261" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d">↓ NK cells &amp; wound heal</text>
  <text x="261" y="275" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d">(Kiecolt-Glaser, 1984/95)</text>

  <text x="179" y="312" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12">Moderated by Lazarus &amp; Folkman Appraisal</text>
  <text x="179" y="328" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#7c2d12">(Primary Threat/Challenge → Secondary Coping Resources)</text>
  <text x="179" y="344" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#9a3412">+ Taylor (2000) Tend-and-Befriend (Oxytocin)</text>

  <!-- Right panel: Health Belief Model -->
  <rect x="352" y="42" width="270" height="316" rx="12" fill="#f0fdfa" stroke="#5eead4" stroke-width="1.5"/>
  <text x="487" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#115e59">Health Belief Model (HBM)</text>

  <rect x="368" y="80" width="112" height="44" rx="7" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
  <text x="424" y="99" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59">Perceived</text>
  <text x="424" y="113" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59">Susceptibility</text>

  <rect x="494" y="80" width="112" height="44" rx="7" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
  <text x="550" y="99" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59">Perceived</text>
  <text x="550" y="113" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59">Severity</text>

  <line x1="424" y1="124" x2="465" y2="144" stroke="#0d9488" stroke-width="1.8"/>
  <line x1="550" y1="124" x2="509" y2="144" stroke="#0d9488" stroke-width="1.8"/>

  <rect x="386" y="144" width="202" height="32" rx="7" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/>
  <text x="487" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#134e4a">Perceived Health Threat</text>

  <rect x="368" y="190" width="238" height="38" rx="7" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
  <text x="487" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59">Perceived Benefits − Perceived Barriers</text>
  <text x="487" y="221" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#134e4a">(Cost, inconvenience, stigma, side-effect fears)</text>

  <rect x="368" y="240" width="112" height="34" rx="7" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="424" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1">Cues to Action</text>

  <rect x="494" y="240" width="112" height="34" rx="7" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="550" y="261" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1">Self-Efficacy</text>

  <line x1="487" y1="274" x2="487" y2="294" stroke="#0f766e" stroke-width="2"/>
  <polygon points="482,290 492,290 487,298" fill="#0f766e"/>

  <rect x="378" y="298" width="218" height="44" rx="9" fill="#0f766e"/>
  <text x="487" y="317" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Likelihood of Health Behaviour</text>
  <text x="487" y="333" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#ccfbf1">Strengthen with nudges &amp; structural policy</text>
</svg>`,
      diagramCaption:
        "Left: Fast SAM (adrenaline) vs slow HPA (cortisol) pathways explaining why chronic psychosocial stress suppresses immunity. Right: Health Belief Model cognitive predictors of preventive behaviour.",
      workedExamples: [
        {
          title: "Quantifying Chronic Stress Impact on Wound Healing (Kiecolt-Glaser et al., 1995)",
          problem:
            "In Kiecolt-Glaser et al.'s (1995) controlled study, caregivers' standardized skin wounds took a mean of 48.7 days to heal compared with 39.3 days for matched non-caregiving controls. Calculate the percentage increase in healing time for caregivers (to 1 decimal place) and explain the biological pathway responsible.",
          steps: [
            "Find the difference in healing days: {{48.7 - 39.3}} = 9.4 days longer.",
            "Divide by the control baseline and multiply by 100: {{(9.4 / 39.3) * 100}} ≈ **23.9%** (commonly cited as ~24% longer).",
            "Explain mechanism: Chronic caregiving activates the **HPA axis** (hypothalamus CRH → pituitary ACTH → adrenal cortex **cortisol**), suppressing pro-inflammatory cytokines (IL-1β) needed in early tissue repair.",
          ],
          answer: "23.9% longer healing time (~24%), mediated by chronic HPA-axis cortisol suppressing early immune cytokine repair.",
          yourTurn: {
            question:
              "In a student psychoneuroimmunology study, mean natural killer (NK) cell activity falls from 40 units during term break to 31 units during final IB examinations. Calculate the **percentage decrease** in NK cell activity.",
            answer: { type: "number", value: 22.5, tolerance: 0.1, display: "22.5%" },
            solution: "Decrease = {{40 - 31}} = 9 units. Percentage decrease = {{(9 / 40) * 100}} = **22.5%**.",
          },
        },
        {
          title: "Designing an Evidence-Based Teen Vaping Reduction Campaign",
          problem:
            "A Ministry of Health launches posters showing diseased lungs to deter adolescent vaping, but teen uptake remains stubbornly high. Use the Health Belief Model, Theory of Planned Behaviour, and structural health-promotion principles to explain why fear posters alone fail and propose two stronger interventions.",
          steps: [
            "**Why fear posters underperform**: Adolescents often hold low **perceived susceptibility** (*'that happens to older smokers, not me'*) and face strong peer **subjective norms** and nicotine's **mesolimbic dopamine** reinforcement, creating a wide **intention–behaviour gap**.",
            "**Intervention 1 (Cognitive / Social Norms)**: Peer-led norm-correction workshops lowering perceived peer approval (TPB **subjective norms**) and building refusal **self-efficacy** (HBM/TPB **PBC**).",
            "**Intervention 2 (Structural / Responsibility)**: Flavour bans, retail density limits, and excise taxation — modifying the choice environment rather than relying solely on adolescent willpower.",
          ],
          answer: "Fear alone fails due to low perceived susceptibility and peer norms; pair peer norm/self-efficacy training with structural restrictions (flavour bans, taxation).",
        },
      ],
      keyPoints: [
        "**SAM pathway** (adrenal medulla → adrenaline/noradrenaline) drives rapid fight-or-flight survival; **HPA axis** (CRH → ACTH → adrenal cortex → cortisol) drives sustained stress mobilization and, when chronic, suppresses immune function (**Kiecolt-Glaser et al., 1984, 1995**).",
        "**Taylor et al. (2000)** challenged androcentric stress **Bias** with **tend-and-befriend** (oxytocin and social affiliation).",
        "**Lazarus & Folkman's (1984) Transactional Model** shows stress depends on **primary** (threat/challenge) and **secondary** (coping resources) appraisal, guiding problem-focused vs emotion-focused coping.",
        "**Addiction** is biopsychosocial: mesolimbic dopamine (**wanting > liking** incentive sensitization), cue reactivity & self-efficacy, and peer/cultural/commercial reinforcement environments.",
        "Individual cognitive health-promotion models (**Health Belief Model**, **Theory of Planned Behaviour**) face the **intention–behaviour gap** and work best when combined with **nudges** and **structural upstream policies** (**Responsibility**).",
      ],
      whyItWorks:
        "Physical and mental health form a single feedback loop. Cognitive appraisals (Lazarus & Folkman) gate whether a stressor activates chronic biological HPA cortisol; social support buffers NK-cell suppression; and structural health environments shape whether individuals can translate HBM/TPB intentions into sustained healthy **Change** without inequitable victim-blaming.",
      strategies: [
        "Never mix up **adrenal medulla** (SAM → adrenaline, neural, fast) with **adrenal cortex** (HPA → cortisol, hormonal CRH/ACTH cascade, slow) — examiners test this distinction constantly.",
        "When evaluating **Kiecolt-Glaser et al. (1984, 1995)**, highlight **Causality** (quasi-experimental natural stressors cannot randomly assign someone to become an Alzheimer's caregiver, so sleep loss or diet may mediate outcomes alongside cortisol).",
        "Contrast **downstream individual campaigns** (posters targeting HBM beliefs) with **upstream structural interventions** (taxation, labelling, urban design) to earn top **Responsibility** marks.",
      ],
      thinkDeeper:
        "Can public-health 'nudges' (such as opt-out organ donation or traffic-light sugar labels) ever cross an ethical line from helpful **Responsibility** into paternalistic manipulation? Compare the ethics of nudges against commercial 'sludges' and variable-ratio app designs that promote ultra-processed food or compulsive gaming.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What is the key difference between diagnostic **reliability** and diagnostic **validity**?",
        back: "**Reliability** is consistency of diagnosis across clinicians (**inter-rater**) or time (**test–retest**). **Validity** is whether the diagnosis accurately reflects a real construct (**construct**), matches other tools (**concurrent**), and predicts prognosis/treatment (**predictive**). Reliability is necessary but not sufficient for validity.",
      },
      {
        front: "Define **comorbidity** and **symptom overlap** in DSM-5-TR / ICD-11 diagnosis.",
        back: "**Comorbidity** is the co-occurrence of two or more disorders in the same person (e.g. MDD + GAD). **Symptom overlap** occurs when identical criteria (insomnia, fatigue, poor concentration) appear in multiple categories, lowering inter-rater reliability and construct validity.",
      },
      {
        front: "What did **Rosenhan (1973)** demonstrate about psychiatric diagnosis, and what are two major critiques?",
        back: "Eight sane pseudopatients reporting one fake hallucination were all admitted (mean stay 19 days) and discharged 'in remission', showing **confirmation bias** and **labelling** effects. Critiques: used outdated **DSM-II** (low temporal validity vs DSM-5-TR structured interviews) and **Cahalan (2019)** uncovered data inconsistencies in Rosenhan's records.",
      },
      {
        front: "What is **category fallacy** (**Kleinman, 1977/1982**)?",
        back: "Imposing a Western (*etic*) diagnostic category onto a non-Western culture where it lacks local validity — e.g. labelling Chinese *shenjing shuairuo* (predominantly somatic exhaustion/pain) purely as Western affective depression without an *emic* cultural formulation.",
        level: "HL",
      },
      {
        front: "Explain the **diathesis–stress model** of mental health aetiology.",
        back: "Disorders arise when an underlying predisposition (**diathesis** — polygenic vulnerability, neurochemical/HPA sensitivity, or latent negative schemas) interacts with environmental **stressors** (provoking agents) to cross a clinical threshold.",
      },
      {
        front: "Why must **Caspi et al. (2003)** (5-HTTLPR × stress) be evaluated cautiously today?",
        back: "Caspi reported that short-allele carriers of 5-HTTLPR had higher MDD rates after 4+ life stressors, but massive meta-analyses (**Culverhouse et al., 2018**; **Border et al., 2019**, N > 62,000) failed to replicate a single candidate-gene interaction — MDD is **polygenic**.",
      },
      {
        front: "What are the three elements of **Beck's Negative Cognitive Triad**?",
        back: "Negative views of the **Self** (*'I am worthless'*), the **World** (*'Others reject me; demands are impossible'*), and the **Future** (*'Nothing will ever improve'*), sustained by cognitive distortions like catastrophizing and overgeneralization.",
      },
      {
        front: "How did **Alloy et al. (1999)** address **bidirectional causality** in Beck's cognitive model?",
        back: "By prospectively tracking non-depressed university students over 2.5 years: 17% of high-cognitive-risk students developed a first MDD episode vs only 1% of low-risk students — showing negative cognitive style precedes onset rather than merely resulting from low mood.",
      },
      {
        front: "List the four vulnerability factors in **Brown & Harris (1978)**.",
        back: "1) Lack of a close, confiding relationship; 2) Loss of mother before age 11; 3) Three or more children under age 14 at home; 4) Lack of employment outside the home — interacting with a severe **provoking agent**.",
      },
      {
        front: "How do **SSRIs** work biologically, and why do clinical effects take 2–6 weeks?",
        back: "SSRIs block presynaptic **SERT** reuptake transporters, keeping serotonin in the synaptic cleft longer. Delayed symptom relief (2–6 weeks) reflects downstream **receptor adaptation**, increased **BDNF** / hippocampal neuroplasticity, and gradual shifts in positive emotional appraisal.",
      },
      {
        front: "Contrast **Kirsch et al. (2008)** and **Cipriani et al. (2018)** on antidepressant efficacy.",
        back: "**Kirsch (2008)** included unpublished FDA trials to show drug–placebo differences fell below clinical significance in mild/moderate MDD (reaching significance mainly in very severe MDD). **Cipriani (2018)** meta-analysed 522 RCTs (N = 116,477) and found all 21 antidepressants beat placebo overall with small-to-moderate effect sizes.",
      },
      {
        front: "Why does **CBT** show lower post-treatment relapse than stopping SSRIs (**DeRubeis, 2005; Hollon, 2005**)?",
        back: "CBT equips clients with durable **cognitive restructuring** and **behavioural activation** skills that continue protecting against future stressors after therapy ends, whereas stopping SSRIs leaves underlying depressogenic schemas and social triggers intact.",
      },
      {
        front: "What did **Chibanda et al. (2016)** demonstrate with Zimbabwe's **Friendship Bench**?",
        back: "Trained lay community health workers delivering 6 culturally adapted problem-solving therapy sessions on park benches cut depression/anxiety caseness dramatically at 6 months (**14% vs 50%** in enhanced usual care), demonstrating scalable, culturally safe care.",
      },
      {
        front: "Contrast the **SAM pathway** and the **HPA axis**.",
        back: "**SAM** (fast, seconds, neural): Hypothalamus → Sympathetic NS → **Adrenal Medulla** → **Adrenaline/Noradrenaline** (fight-or-flight). **HPA** (slow, minutes–chronic, hormonal): Hypothalamus CRH → Anterior Pituitary ACTH → **Adrenal Cortex** → **Cortisol** (chronic elevation suppresses immunity).",
      },
      {
        front: "Summarize **Kiecolt-Glaser et al.'s (1984 & 1995)** psychoneuroimmunology findings.",
        back: "**1984**: Medical students' natural killer (NK) cell activity dropped significantly during final exams, especially among lonelier students. **1995**: Alzheimer's caregivers' standardized skin wounds took **24% longer to heal** than matched controls due to chronic HPA cortisol suppressing IL-1β cytokines.",
      },
      {
        front: "Distinguish **'wanting'** from **'liking'** in **Berridge & Robinson's Incentive Sensitization Theory** of addiction.",
        back: "Repeated substance or digital-reward exposure hypersensitizes the mesolimbic dopamine system (**VTA → nucleus accumbens**), intensifying compulsive cue-driven **'wanting'** (craving) even as hedonic **'liking'** (actual pleasure) decreases due to tolerance.",
        level: "HL",
      },
      {
        front: "Name the key constructs of the **Health Belief Model (HBM)** vs **Theory of Planned Behaviour (TPB)**.",
        back: "**HBM**: Perceived susceptibility, perceived severity, perceived benefits minus barriers, cues to action, self-efficacy. **TPB**: Attitudes, **subjective norms**, and **perceived behavioural control** predicting **intention** → behaviour (though both face an **intention–behaviour gap**).",
      },
      {
        front: "How do **HL Technology** factors create both opportunities and risks in Health and Well-being?",
        back: "Guided **iCBT** and youth telehealth hubs reduce stigma and expand access (**Change** & **Responsibility**), whereas algorithmically engineered **variable-ratio schedules**, social comparison feeds, and unvalidated commercial mental-health apps raise addiction, dropout, and data-privacy risks.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Health and Well-being is FA2027 **Compulsory Context 1** — every exam question requires integrating Biological, Cognitive, and Sociocultural Approaches with the **6 Core Concepts** (Bias, Causality, Change, Measurement, Perspective, Responsibility).",
      "**Reliability** (agreement/consistency) is necessary for **validity** (accuracy/usefulness), but clinicians can reliably agree on a culturally biased or overlapping label (High R, Low V).",
      "**Comorbidity** (co-occurring disorders) and **symptom overlap** (shared criteria across MDD and GAD) challenge categorical manuals like DSM-5-TR and ICD-11.",
      "Mental disorders follow a **diathesis–stress** biopsychosocial model — **Kendler et al. (2006)** (~38% MDD heritability), **Border et al. (2019)** (polygenic critique of 5-HTTLPR), **Beck's cognitive triad** + **Alloy et al. (1999)**, and **Brown & Harris (1978)**.",
      "Evaluating **SSRIs** requires balancing presynaptic **SERT** blockade & **Cipriani et al. (2018)** efficacy against **Kirsch et al. (2008)** publication/placebo bias, side effects, and post-discontinuation relapse.",
      "**CBT** delivers comparable acute gains to SSRIs in moderate–severe depression (**DeRubeis et al., 2005**) with significantly lower relapse (**Hollon et al., 2005**); **combined therapy** (**Cuijpers et al., 2014**) and **culturally adapted community care** (**Chibanda et al., 2016**) maximize real-world outcomes.",
      "Acute **SAM** stress (adrenal medulla → adrenaline) is survival-adaptive; chronic **HPA** stress (CRH → ACTH → adrenal cortex → cortisol) suppresses NK cells and slows wound healing (**Kiecolt-Glaser et al., 1984, 1995**).",
      "**Lazarus & Folkman (1984)** link stress to **primary** (threat/challenge) and **secondary** (coping resources) appraisal; **Taylor et al. (2000)** corrects androcentric stress bias with **tend-and-befriend**.",
      "Addiction combines **mesolimbic dopamine** incentive sensitization (wanting > liking), classical cue reactivity & negative reinforcement, and sociocultural/commercial availability.",
      "Health promotion succeeds best when individual cognitive models (**HBM**, **TPB**) are paired with **nudges** and **upstream structural policies** (taxation, labelling, access) to close the **intention–behaviour gap**.",
    ],
    misconceptions: [
      {
        wrong: "High inter-rater reliability proves that a DSM-5-TR diagnosis is valid.",
        right: "Reliability only shows clinicians **agree**; they can consistently apply a flawed, Western-centric, or overlapping label (**High Reliability, Low Validity**).",
      },
      {
        wrong: "Depression is caused by a single defective serotonin gene (5-HTTLPR) or a simple serotonin deficit.",
        right: "Large replications (**Border et al., 2019**) refuted a single 5-HTTLPR effect and **Moncrieff et al. (2022)** found no simple baseline serotonin deficit; MDD involves **polygenic** vulnerability, neuroplasticity (BDNF), HPA cortisol, schemas, and social stressors.",
      },
      {
        wrong: "Kirsch et al. (2008) proved that SSRIs are completely useless placebos.",
        right: "Kirsch found clinically meaningful benefits in **very severe** depression while questioning mild–moderate clinical significance; **Cipriani et al. (2018)** later showed all 21 antidepressants outperformed placebo overall, especially when matched to severity.",
      },
      {
        wrong: "Adrenaline is released by the adrenal cortex via the HPA axis during chronic stress.",
        right: "**Adrenaline** comes from the **adrenal medulla** via the fast **SAM** neural pathway; **cortisol** comes from the **adrenal cortex** via the slower **HPA** hormonal axis (CRH → ACTH).",
      },
      {
        wrong: "Fear-based health posters (e.g. graphic warnings alone) reliably change teen health behaviour.",
        right: "High fear without **self-efficacy**, supportive **subjective norms**, or low **perceived barriers** often triggers defensive avoidance; combining norm shifts with **structural policies** (taxes, defaults) is far more effective.",
      },
      {
        wrong: "Cultural adaptation of therapy simply means translating English CBT worksheets word-for-word.",
        right: "Genuine cultural adaptation (**Griner & Smith, 2006**; **Chibanda et al., 2016**) integrates **emic** idioms of distress, local family/community norms, and trusted delivery settings — not literal translation alone.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Treating Health and Well-being as an isolated pre-2027 option rather than FA2027 **Compulsory Context 1**, which requires integrating Biological, Cognitive, and Sociocultural Approaches with the 6 Core Concepts.",
      "Writing 'low reliability' when the clinical problem described is actually **low validity** (e.g. cultural category fallacy or poor prediction of treatment response).",
      "Citing **Caspi et al. (2003)** or **Rosenhan (1973)** uncritically as timeless proof without mentioning replication failures (**Border et al., 2019**), **DSM-II temporal limits**, or **Cahalan (2019)**.",
      "Describing Biological, Cognitive, and Sociocultural causes in three isolated silos instead of explicitly explaining **biopsychosocial interaction** (e.g. how social poverty drives HPA cortisol and cognitive hopelessness).",
      "Confusing **statistical significance** (*p* < 0.05 in a giant sample) with **clinical significance** (real-world symptom relief and reasonable **NNT**) when evaluating SSRI trials.",
      "Mixing up **problem-focused** vs **emotion-focused coping** — forgetting that emotion-focused coping (e.g. acceptance, mindfulness, social venting) is *adaptive* for uncontrollable stressors like grief.",
      "Ignoring the **intention–behaviour gap** and **socioeconomic barriers** when evaluating the Health Belief Model or Theory of Planned Behaviour.",
    ],
    mnemonics: [
      {
        topic: "Brown & Harris (1978) Vulnerability Factors",
        device: "C-M-3-U ('Confide, Mother, 3 kids, Unemployed')",
        explanation: "No **C**onfiding partner, loss of **M**other before age 11, **3**+ children under 14 at home, **U**nemployed outside the home — interacting with a severe provoking agent.",
      },
      {
        topic: "SAM vs HPA Stress Pathways",
        device: "SAM = Speed, Adrenaline, Medulla · HPA = Hours/Chronic, Pituitary ACTH, Adrenal cortex Cortisol",
        explanation: "Locks the anatomy (medulla vs cortex), signal speed (fast neural vs slow hormonal), and key hormone (adrenaline vs cortisol) so you never swap them in Paper 1.",
      },
      {
        topic: "Health Belief Model Core Constructs",
        device: "SS-BB-CS ('Susceptibility, Severity; Benefits minus Barriers; Cues & Self-efficacy')",
        explanation: "First pair builds **Perceived Threat**; second pair weighs net cost–benefit; final pair triggers and sustains **Action**.",
      },
    ],
    realWorld: [
      {
        title: "Singapore's CHAT & National Mental Health Strategy",
        detail: "Singapore's Community Health Assessment Team (**CHAT**) offers free, confidential youth mental-health checks outside psychiatric hospitals, directly reducing stigma and perceived barriers (HBM) while using stepped care from community counselling to specialist support.",
        emoji: "🇸🇬",
      },
      {
        title: "Zimbabwe's Friendship Bench Scaling Globally",
        detail: "Born out of a shortage of psychiatrists in Harare, **Chibanda et al.'s (2016)** task-shifted problem-solving therapy delivered by trained community 'grandmothers' has now expanded to Malawi, Kenya, Vietnam, and New York City — proving culturally rooted **Perspective** saves lives.",
        emoji: "🪑",
      },
      {
        title: "Singapore's Nutri-Grade Labels & Sugar Reduction",
        detail: "Mandatory A–D **Nutri-Grade** colour-coded nutrition labels and advertising bans on high-sugar Grade D drinks combine cognitive **nudges** (salient cues to action) with **upstream structural reformulation** by beverage manufacturers.",
        emoji: "🥤",
      },
      {
        title: "ICD-11 Recognition of Gaming Disorder & Cultural Idioms",
        detail: "WHO's **ICD-11** formally classified Gaming Disorder as a behavioural addiction while embedding cross-cultural guidance — sparking lively debate over **Measurement** thresholds vs pathologizing normal youth leisure (**Bias** & **Responsibility**).",
        emoji: "🎮",
      },
      {
        title: "FDA Trial Registries & Open Science After Kirsch (2008)",
        detail: "Exposing unpublished null antidepressant trials accelerated global mandatory pre-registration (e.g. ClinicalTrials.gov) so pharmaceutical companies cannot hide unfavourable trials in the 'file drawer'.",
        emoji: "📊",
      },
    ],
    videos: [
      {
        title: "IB Psychology Health & Well-being: Diagnosis, Validity, Reliability & Rosenhan",
        channel: "YouTube IB Psychology Revision Search",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+diagnosis+validity+reliability+Rosenhan+DSM+ICD",
      },
      {
        title: "Biopsychosocial Aetiology of Depression: Genetics, Beck's Triad & Brown & Harris",
        channel: "YouTube IB Psychology Revision Search",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+etiology+of+depression+Beck+Brown+Harris+diathesis+stress",
      },
      {
        title: "Evaluating SSRIs vs CBT: Kirsch, DeRubeis & Culturally Adapted Therapy",
        channel: "YouTube IB Psychology Revision Search",
        url: "https://www.youtube.com/results?search_query=IB+Psychology+SSRI+vs+CBT+Kirsch+DeRubeis+treatment+evaluation",
      },
      {
        title: "SAM vs HPA Stress Pathways, Kiecolt-Glaser & Health Belief Model",
        channel: "YouTube IB Psychology Revision Search",
        url: "https://www.youtube.com/results?search_query=SAM+HPA+axis+stress+Kiecolt+Glaser+Health+Belief+Model+psychology",
      },
    ],
    formulas: [
      {
        name: "Inter-Rater Diagnostic Concordance (%)",
        formula: "{{\"Concordance %\" = (\"Agreed cases\" / \"Total cases\") * 100}}",
        note: "Raw clinician agreement; does not remove chance agreement (unlike Cohen's kappa κ).",
      },
      {
        name: "Cohen's Kappa (κ) — Chance-Corrected Reliability",
        formula: "{{kappa = (P_o - P_e) / (1 - P_e)}}",
        note: "P_o = observed agreement, P_e = chance agreement; κ ≥ 0.60 is typically substantial clinical reliability.",
        level: "HL",
      },
      {
        name: "Twin Discordance Rate (%)",
        formula: "{{\"Discordance %\" = 100 - \"Concordance %\"}}",
        note: "In MZ twins (~100% shared genes), discordance directly highlights non-genetic environmental & cognitive causality.",
      },
      {
        name: "Absolute Risk Reduction / Benefit Increase (ARR)",
        formula: "{{\"ARR\" = P_\"treatment\" - P_\"control\"}}",
        note: "Proportion difference in remission or non-relapse between active intervention and control/placebo.",
      },
      {
        name: "Number Needed to Treat (NNT)",
        formula: "{{\"NNT\" = 1 / \"ARR\"}}",
        note: "Patients who must receive the treatment for 1 additional patient to benefit over control; lower NNT = stronger clinical impact.",
      },
      {
        name: "Symptom Percentage Improvement",
        formula: "{{\"Improvement %\" = ((S_\"pre\" - S_\"post\") / S_\"pre\") * 100}}",
        note: "Used on rating scales like HAM-D or BDI-II; compare against active placebo and clinical-significance cut-offs.",
      },
      {
        name: "Relative Percentage Change in Healing / Immune Biomarker",
        formula: "{{\"% Change\" = ((\"Stress\" - \"Baseline\") / \"Baseline\") * 100}}",
        note: "E.g. Kiecolt-Glaser (1995): caregivers took (48.7 − 39.3)/39.3 × 100 = 23.9% longer to heal.",
      },
      {
        name: "Diathesis–Stress Interaction Model",
        formula: "{{\"Clinical Risk\" = \"Diathesis\" * \"Stressor\" - \"Protective Buffers\"}}",
        note: "Conceptual equation: high vulnerability stays sub-threshold when strong social/cognitive buffers keep stress low.",
      },
      {
        name: "Health Belief Model (HBM) Action Balance",
        formula: "{{\"Threat\" = \"Susceptibility\" + \"Severity\"; \"Net Value\" = \"Benefits\" - \"Barriers\"}}",
        note: "Action likelihood rises when Threat, Net Value, Cues to Action, and Self-Efficacy are all high.",
      },
      {
        name: "Theory of Planned Behaviour (TPB) Chain",
        formula: "{{\"Attitudes\" + \"Subjective Norms\" + \"PBC\" -> \"Intention\" -> \"Behaviour\"}}",
        note: "PBC (Perceived Behavioural Control) can also influence behaviour directly when control reflects actual constraints.",
      },
    ],
  },
};
