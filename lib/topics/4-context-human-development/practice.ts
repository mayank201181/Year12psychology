import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "4-context-human-development-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "brain-maturation-cognitive-dev",
      strategy: "Assimilation vs accommodation",
      question:
        "A 4-year-old who knows only cats sees a raccoon and calls it a 'stripey cat'. After learning that raccoons are wild animals with dexterous paws, she creates a separate mental category for raccoons. Name the Piagetian process of creating this new schema.",
      answer: {
        type: "text",
        accept: ["accommodation", "schema accommodation"],
        display: "accommodation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["assimilation"] },
          feedback:
            "Assimilation was calling the raccoon a 'stripey cat' (fitting it into an existing schema). Building a new category after disequilibrium is accommodation.",
        },
      ],
      hints: [
        "Recall the two ways Piaget said schemas adapt after disequilibrium.",
        "One fits new information into an old box; the other alters or creates a new box.",
      ],
      solution: [
        "Calling the raccoon a 'stripey cat' was **assimilation** into her existing cat schema.",
        "Revising her mental framework to form a distinct raccoon category after disequilibrium is **accommodation**.",
      ],
      commonError: "Confusing assimilation (keeping the old schema) with accommodation (changing/building a schema).",
    },
    {
      id: "4-context-human-development-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "developmental-methods-ethics",
      strategy: "Longitudinal attrition percentage",
      question:
        "A 6-year longitudinal study of childhood emotional regulation begins with **200** participants at age 5. By age 11, **154** participants remain. Calculate the **attrition rate** as a percentage.",
      answer: {
        type: "number",
        value: 23,
        display: "23%",
      },
      traps: [
        {
          spec: { type: "number", value: 77 },
          feedback: "77% is the retention rate (154 ÷ 200). Attrition is the percentage lost: 100% − 77% = 23%.",
        },
        {
          spec: { type: "number", value: 29.9, tolerance: 0.2 },
          feedback: "Divide dropouts (46) by the initial baseline sample (200), not the remaining sample (154).",
        },
      ],
      hints: [
        "Subtract remaining participants (154) from initial participants (200) to get dropouts.",
        "Divide dropouts by 200 and multiply by 100.",
      ],
      solution: [
        "Dropouts: {{200 - 154 = 46}} participants.",
        "Attrition rate: {{46 / 200 * 100 = 23%}}.",
      ],
      commonError: "Reporting the retention rate (77%) or dividing by the final sample size (154).",
    },
    {
      id: "4-context-human-development-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "attachment-caregiving-culture",
      strategy: "Strange Situation classification",
      question:
        "In Ainsworth's Strange Situation, a toddler explores toys independently without checking back with her caregiver, shows minimal visible distress when the caregiver leaves, and avoids eye contact upon reunion. State the exact attachment classification (avoidant, secure, resistant, or disorganized).",
      answer: {
        type: "text",
        accept: ["avoidant", "insecure-avoidant", "insecure avoidant", "type a", "type a avoidant"],
        display: "insecure-avoidant",
      },
      traps: [
        {
          spec: { type: "text", accept: ["resistant", "insecure-resistant", "ambivalent", "type c"] },
          feedback: "Resistant (Type C) infants show intense distress and clinginess while resisting comfort. Calmly turning away on reunion indicates avoidant (Type A).",
        },
      ],
      hints: [
        "Focus on the reunion behaviour: ignoring or turning away rather than seeking comfort or pushing away angrily.",
      ],
      solution: [
        "Low caregiver referencing, minimal overt separation distress, and turning away upon reunion define **insecure-avoidant (Type A)** attachment.",
      ],
    },
    {
      id: "4-context-human-development-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "identity-moral-socioemotional",
      strategy: "Marcia's 2×2 identity status matrix",
      question:
        "Marcus, age 17, has never considered careers outside his family's bakery and feels certain he will take over the business after school without exploring any alternatives. State Marcus's identity status in Marcia's (1966) model.",
      answer: {
        type: "text",
        accept: ["foreclosure", "identity foreclosure"],
        display: "foreclosure",
      },
      traps: [
        {
          spec: { type: "text", accept: ["achievement", "identity achievement"] },
          feedback: "Identity Achievement requires active exploration before commitment; Marcus committed without exploring alternatives.",
        },
        {
          spec: { type: "text", accept: ["diffusion", "identity diffusion"] },
          feedback: "Diffusion has neither exploration nor commitment; Marcus already has a firm commitment.",
        },
      ],
      hints: [
        "Check both dimensions of Marcia's grid: Exploration (low or high?) and Commitment (low or high?).",
        "Low Exploration + High Commitment maps to one specific status.",
      ],
      solution: [
        "Exploration = Low (no alternatives considered); Commitment = High (firm inherited plan).",
        "Low Exploration + High Commitment = **Foreclosure**.",
      ],
    },
    {
      id: "4-context-human-development-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "attachment-caregiving-culture",
      strategy: "Strange Situation prevalence percentage",
      question:
        "A developmental team observes **150** twelve-month-olds in the Strange Situation and classifies **99** as Secure (Type B). Calculate the percentage of infants classified as Secure.",
      answer: {
        type: "number",
        value: 66,
        display: "66%",
      },
      traps: [
        {
          spec: { type: "number", value: 34 },
          feedback: "34% is the combined insecure share (100% − 66%). Re-read what percentage the question asks for.",
        },
      ],
      hints: [
        "Use the proportion formula: {{(n_\"secure\" / N_\"total\") * 100%}}.",
        "Evaluate {{99 / 150 * 100}}.",
      ],
      solution: [
        "Proportion Secure = {{99 / 150 = 0.66}}.",
        "Convert to percentage: {{0.66 * 100 = 66%}}.",
      ],
    },
    {
      id: "4-context-human-development-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "brain-maturation-cognitive-dev",
      strategy: "Vygotskian instructional concepts",
      question:
        "A swimming coach breaks freestyle breathing into smaller sub-skills, gives verbal cues on every stroke, and gradually withdraws those cues as a 7-year-old gains confidence. Name the specific instructional process introduced by Wood, Bruner & Ross (1976) linked to Vygotsky's ZPD.",
      answer: {
        type: "text",
        accept: ["scaffolding", "cognitive scaffolding"],
        display: "scaffolding",
      },
      traps: [
        {
          spec: { type: "text", accept: ["zpd", "zone of proximal development"] },
          feedback: "The ZPD is the learning gap itself; the temporary, gradually faded support inside the ZPD is scaffolding.",
        },
      ],
      hints: [
        "Think of the construction metaphor: temporary support that is dismantled once a structure stands on its own.",
        "It operates inside the Zone of Proximal Development.",
      ],
      solution: [
        "Providing contingent guidance and gradually withdrawing support as independent mastery grows is **scaffolding**.",
      ],
    },
    {
      id: "4-context-human-development-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "developmental-methods-ethics",
      strategy: "Design threat diagnosis",
      question:
        "A study tests 16-year-olds and 66-year-olds on the same day using a smartphone reaction-time app and attributes the entire gap to brain ageing. Name the two-word methodological confound arising because the two groups grew up in different historical eras.",
      answer: {
        type: "text",
        accept: ["cohort effect", "cohort effects", "generational effect", "cohort confound"],
        display: "cohort effect",
      },
      traps: [
        {
          spec: { type: "text", accept: ["practice effect", "practice effects"] },
          feedback: "Practice effects occur when the *same* participants repeat a test in a longitudinal design; comparing different birth eras once creates a cohort effect.",
        },
        {
          spec: { type: "text", accept: ["attrition", "selective attrition"] },
          feedback: "Attrition is sample dropout across waves of a longitudinal study, not a single-day cross-sectional comparison.",
        },
      ],
      hints: [
        "This confound is the classic limitation of cross-sectional developmental designs.",
        "People born in the same era share a birth ____.",
      ],
      solution: [
        "Comparing different generations at one point in time confounds age with generational experience—a **cohort effect**.",
      ],
    },
    {
      id: "4-context-human-development-quiz-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      guideRef: "brain-maturation-cognitive-dev",
      strategy: "Dual-systems neurodevelopmental explanation",
      marks: 3,
      question:
        "Outline how the **adolescent prefrontal–limbic mismatch** (Casey/Steinberg) explains heightened peer-present risk-taking during adolescence.",
      hints: [
        "Name the subcortical reward circuit that matures rapidly at puberty.",
        "Contrast its timeline with the cortical region governing impulse control, and connect to peer presence (Chein et al., 2011).",
      ],
      modelAnswer:
        "During puberty, subcortical limbic reward circuitry—particularly the ventral striatum—matures rapidly and becomes highly sensitive to social rewards. By contrast, prefrontal cortex networks responsible for executive inhibition continue undergoing synaptic pruning and myelination into the mid-20s. Consequently, when peers observe an adolescent (as in Chein et al., 2011), amplified reward salience temporarily outweighs top-down cognitive braking, increasing risky choices.",
      markScheme: [
        {
          point: "Identifies earlier pubertal maturation / heightened sensitivity of limbic reward circuits (e.g., ventral striatum).",
          keywords: ["limbic", "ventral striatum", "reward"],
        },
        {
          point: "Contrasts with slower maturation (synaptic pruning/myelination) of the prefrontal cortex governing executive/impulse control.",
          keywords: ["prefrontal", "pruning", "myelination", "inhibition", "executive"],
        },
        {
          point: "Explains how peer presence amplifies social reward valuation over cognitive braking (e.g., Chein et al., 2011).",
          keywords: ["chein", "social reward", "braking", "outweighs", "salience"],
        },
      ],
      commonError: "Claiming the adolescent prefrontal cortex does not function at all rather than describing an asymmetric maturational imbalance amplified by peers.",
    },
    {
      id: "4-context-human-development-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "attachment-caregiving-culture",
      strategy: "Rutter ERA study and Change",
      marks: 3,
      question:
        "Explain what **Rutter's English and Romanian Adoptees (ERA) study** reveals about the Core Concept of **Change** and the difference between a critical and a sensitive period.",
      hints: [
        "State the key age-at-adoption threshold found by Rutter et al.",
        "Contrast recovery outcomes before vs after that threshold, linking directly to sensitive period vs critical period.",
      ],
      modelAnswer:
        "Rutter tracked Romanian orphans adopted into UK families and found that infants placed before 6 months showed near-complete physical and cognitive catch-up matching UK domestic adoptees. Children enduring institutional privation beyond 6 months—especially past 24 months—experienced elevated persistent disinhibited attachment and cognitive delays. This pattern demonstrates a sensitive period rather than an irreversible critical period: substantial developmental plasticity and recovery remain possible when supportive care arrives early.",
      markScheme: [
        {
          point: "Reports near-complete catch-up for adoptees placed before 6 months compared with UK domestic adoptees.",
          keywords: ["before 6 months", "catch-up", "uk domestic"],
        },
        {
          point: "Contrasts with persistent elevated risk (disinhibited attachment or cognitive delays) after prolonged deprivation past 6 months.",
          keywords: ["disinhibited", "cognitive delays", "beyond 6 months", "after 6 months", "24 months"],
        },
        {
          point: "Links explicitly to developmental plasticity/recovery within a sensitive period rather than a rigid irreversible critical period.",
          keywords: ["plasticity", "recovery", "irreversible"],
        },
      ],
    },
    {
      id: "4-context-human-development-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "developmental-methods-ethics",
      strategy: "Child ethics — consent vs assent",
      marks: 3,
      question:
        "Distinguish between **parental informed consent** and **child assent**, explaining one practical safeguard researchers must apply if a young child becomes reluctant during testing.",
      hints: [
        "Define who gives legal consent versus who gives ongoing developmentally tailored assent.",
        "State what overrides what if a child shows verbal or non-verbal refusal.",
      ],
      modelAnswer:
        "Parental informed consent is formal legal authorization granted by a parent or guardian after receiving full study details, whereas child assent is the minor's own ongoing, voluntary agreement obtained via jargon-free, age-appropriate explanation. Because children are a vulnerable group facing adult power imbalances, a child's verbal refusal or non-verbal distress cue (such as crying or pulling away) must immediately override guardian permission, triggering withdrawal without penalty.",
      markScheme: [
        {
          point: "Defines parental consent as legal authorization from a parent/guardian after study disclosure.",
          keywords: ["legal", "guardian", "authorization"],
        },
        {
          point: "Defines child assent as the minor's voluntary, age-appropriate ongoing agreement.",
          keywords: ["voluntary", "age-appropriate", "jargon-free", "ongoing"],
        },
        {
          point: "Explains safeguard: verbal refusal or non-verbal distress cues immediately override parental permission and halt testing without penalty.",
          keywords: ["override", "non-verbal", "distress", "withdrawal", "penalty"],
        },
      ],
    },
  ],
  papers: [
    {
      id: "4-context-human-development-p1",
      title: "Practice Paper 1 — Data Analysis, Concepts & Developmental Scenarios",
      level: "SL",
      questions: [
        {
          id: "4-context-human-development-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Piaget stage classification",
          question:
            "When identical juice volumes are poured from a short wide beaker into a tall narrow glass, 5-year-old Ravi insists the tall glass holds 'way more juice' because the liquid level looks higher. Name the specific Piagetian cognitive stage Ravi is currently in.",
          answer: {
            type: "text",
            accept: ["preoperational", "preoperational stage", "pre-operational", "pre-operational stage"],
            display: "preoperational",
          },
          traps: [
            {
              spec: { type: "text", accept: ["concrete operational", "concrete operational stage"] },
              feedback: "Children in the concrete operational stage (7–11) have mastered conservation of liquid volume; failing due to centration marks the preoperational stage.",
            },
          ],
          hints: [
            "Notice Ravi fails a classic conservation-of-liquid task because of centration on height.",
          ],
          solution: [
            "Focusing on a single perceptual dimension (height) and failing conservation characterizes Piaget's **preoperational** stage (approx. 2–7 years).",
          ],
        },
        {
          id: "4-context-human-development-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "attachment-caregiving-culture",
          strategy: "Converting Strange Situation % to count",
          question:
            "In a Japanese replication of the Strange Situation with **80** infants, **27.5%** are classified as Insecure-Resistant (Type C). Calculate the exact number of infants classified as Type C.",
          answer: {
            type: "number",
            value: 22,
            display: "22 participants",
          },
          traps: [
            {
              spec: { type: "number", value: 58 },
              feedback: "58 is the number of non-resistant infants (80 − 22). Compute 27.5% of 80 directly.",
            },
          ],
          hints: [
            "Convert 27.5% to the decimal 0.275.",
            "Multiply {{0.275 * 80}}.",
          ],
          solution: [
            "Convert percentage to decimal: {{27.5% = 0.275}}.",
            "Multiply by sample size: {{0.275 * 80 = 22}} participants.",
          ],
        },
        {
          id: "4-context-human-development-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "identity-moral-socioemotional",
          strategy: "Gender theory matching",
          question:
            "A 4-year-old girl sees an illustration of a male nurse and one week later remembers the picture as a male doctor. Name the specific cognitive theory developed by **Martin & Halverson (1981)** that predicts this memory distortion.",
          answer: {
            type: "text",
            accept: ["gender schema theory", "gender schema"],
            display: "gender schema theory",
          },
          traps: [
            {
              spec: { type: "text", accept: ["social cognitive theory", "social learning theory"] },
              feedback: "Social Cognitive Theory (Bandura & Bussey) focuses on modelling and reinforcement; Martin & Halverson (1981) proposed Gender Schema Theory.",
            },
          ],
          hints: [
            "Notice the memory distortion aligns with active mental frameworks for in-group/out-group gender traits.",
            "Which three-word theory connects Bartlett-style schema distortion to gender?",
          ],
          solution: [
            "**Gender Schema Theory** (Martin & Halverson, 1981) proposes that children actively reconstruct counter-stereotypical memories to match internal gender schemas.",
          ],
        },
        {
          id: "4-context-human-development-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "developmental-methods-ethics",
          strategy: "Longitudinal attrition rate",
          question:
            "A longitudinal literacy study starts with **360** six-year-olds. By age 14, **279** participants remain in the study. Calculate the **attrition rate** as a percentage to 1 decimal place.",
          answer: {
            type: "number",
            value: 22.5,
            tolerance: 0.05,
            display: "22.5%",
          },
          traps: [
            {
              spec: { type: "number", value: 77.5, tolerance: 0.05 },
              feedback: "77.5% is the retention rate. Attrition is the percentage of participants lost: 100% − 77.5% = 22.5%.",
            },
            {
              spec: { type: "number", value: 29, tolerance: 0.2 },
              feedback: "You divided 81 by the remaining 279 instead of the initial baseline sample 360.",
            },
          ],
          hints: [
            "First find dropouts: {{360 - 279}}.",
            "Divide dropouts by initial baseline {{N_0 = 360}}, then multiply by 100.",
          ],
          solution: [
            "Dropouts: {{360 - 279 = 81}} participants.",
            "Attrition rate: {{81 / 360 * 100 = 22.5%}}.",
          ],
        },
        {
          id: "4-context-human-development-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "attachment-caregiving-culture",
          strategy: "Bowlby's relational schema",
          question:
            "Name the three-word cognitive representation proposed by Bowlby through which early caregiver responsiveness shapes an individual's lifelong expectations about self-worth and whether others can be trusted.",
          answer: {
            type: "text",
            accept: ["internal working model", "iwm"],
            display: "internal working model",
          },
          hints: [
            "It serves as a mental template for future friendships and romantic bonds (Hazan & Shaver, 1987).",
            "Its initials are IWM.",
          ],
          solution: [
            "Bowlby's **Internal Working Model (IWM)** encodes cognitive expectations of self-worth and caregiver reliability.",
          ],
        },
        {
          id: "4-context-human-development-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "attachment-caregiving-culture",
          strategy: "Comparing two cultural Strange Situation samples",
          question:
            "In Study X, **91 out of 140** infants are classified as Secure (Type B). In Study Y, **90 out of 120** infants are classified as Secure. Calculate the difference in Secure attachment **percentage points** between Study Y and Study X.",
          answer: {
            type: "number",
            value: 10,
            display: "10%",
          },
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "Comparing raw counts (91 vs 90) ignores the different sample sizes (140 vs 120). Convert both to percentages first.",
            },
          ],
          hints: [
            "Convert Study X to a percentage: {{91 / 140 * 100}}.",
            "Convert Study Y to a percentage: {{90 / 120 * 100}}, then subtract.",
          ],
          solution: [
            "Study X Secure share: {{91 / 140 * 100 = 65%}}.",
            "Study Y Secure share: {{90 / 120 * 100 = 75%}}.",
            "Percentage-point difference: {{75 - 65 = 10}} percentage points.",
          ],
        },
        {
          id: "4-context-human-development-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "identity-moral-socioemotional",
          strategy: "Theory of Mind paradigm",
          question:
            "Name the cognitive capacity tested by Baron-Cohen, Leslie & Frith's (1985) Sally-Anne false-belief task—the ability to recognize that other people hold beliefs and desires distinct from one's own and from reality.",
          answer: {
            type: "text",
            accept: ["theory of mind", "tom"],
            display: "theory of mind",
          },
          hints: [
            "It is a three-word cognitive term abbreviated ToM.",
            "Passing requires attributing a false belief to Sally.",
          ],
          solution: [
            "Recognizing that others hold distinct mental states and false beliefs is **Theory of Mind (ToM)**.",
          ],
        },
        {
          id: "4-context-human-development-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "developmental-methods-ethics",
          strategy: "Choosing the optimal developmental design",
          question:
            "A research team wants to measure cognitive Change from age 10 to age 20 *while also testing* whether adolescents born in 2010 differ from those born in 2015 at the exact same age. Name the developmental research design that combines multiple cohorts tracked over time.",
          answer: {
            type: "text",
            accept: ["cross-sequential", "cross sequential", "cross-sequential design", "cohort-sequential", "cohort sequential", "cohort-sequential design"],
            display: "cross-sequential",
          },
          traps: [
            {
              spec: { type: "text", accept: ["longitudinal", "longitudinal design"] },
              feedback: "A single-cohort longitudinal design tracks Change well but cannot compare two different birth cohorts at the exact same age.",
            },
            {
              spec: { type: "text", accept: ["cross-sectional", "cross sectional"] },
              feedback: "A cross-sectional design tests multiple cohorts once, so it cannot track within-person Change from age 10 to age 20.",
            },
          ],
          hints: [
            "It hybridizes longitudinal tracking with cross-sectional multi-cohort comparisons.",
            "Look at the hyphenated design name in Section 4.",
          ],
          solution: [
            "A **cross-sequential (cohort-sequential)** design follows multiple birth cohorts longitudinally, allowing researchers to separate true age Change from cohort effects.",
          ],
        },
        {
          id: "4-context-human-development-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "developmental-methods-ethics",
          strategy: "Calculating retained sample from attrition %",
          question:
            "A longitudinal adolescent identity project recruits **450** thirteen-year-olds at Wave 1. By Wave 2, the study experiences an **18%** attrition rate. Calculate how many participants remain at Wave 2.",
          answer: {
            type: "number",
            value: 369,
            display: "369 participants",
          },
          traps: [
            {
              spec: { type: "number", value: 81 },
              feedback: "81 is the number of dropouts (18% of 450). Subtract 81 from 450 to find how many remained.",
            },
          ],
          hints: [
            "If 18% dropped out, then {{100% - 18% = 82%}} were retained.",
            "Multiply {{450 * 0.82}}.",
          ],
          solution: [
            "Retention proportion = {{1 - 0.18 = 0.82}}.",
            "Remaining participants = {{450 * 0.82 = 369}} participants.",
          ],
        },
        {
          id: "4-context-human-development-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Piaget vs Vygotsky structured comparison",
          marks: 4,
          question:
            "Compare and contrast **Piaget's** and **Vygotsky's** explanations of cognitive development with reference to the Core Concept of **Perspective**.",
          hints: [
            "Give one clear similarity (both view children as active learners constructing understanding, not passive vessels).",
            "Contrast individual stage-based schema construction (Piaget) with social ZPD/scaffolding and cultural language tools (Vygotsky).",
            "Link explicitly to **Perspective**: universalist individual lens vs culturally situated social lens.",
          ],
          modelAnswer:
            "Both Piaget and Vygotsky reject passive learning, viewing children as active builders of knowledge whose thinking grows qualitatively more sophisticated with experience. However, Piaget adopts a universalist cognitive lens in which solo interaction with physical objects drives disequilibrium, accommodation, and invariant stages. By contrast, Vygotsky takes a sociocultural stance in which learning originates socially inside the Zone of Proximal Development through scaffolding from a More Knowledgeable Other and cultural tools such as language. Comparing both frameworks highlights how Perspective shapes developmental theory: cross-cultural work (Rogoff, 1990) shows schooling and local practices govern higher reasoning, challenging universal stage assumptions.",
          markScheme: [
            {
              point: "Identifies a valid similarity: both see children as active constructors of knowledge rather than passive recipients.",
              keywords: ["active", "builders", "construct"],
            },
            {
              point: "Contrasts Piaget's individual/universal stage-based schema accommodation mechanism.",
              keywords: ["accommodation", "disequilibrium", "invariant stages", "universalist"],
            },
            {
              point: "Contrasts Vygotsky's social ZPD, scaffolding from an MKO, and language/cultural tools.",
              keywords: ["zone of proximal development", "scaffolding", "more knowledgeable other", "cultural tools"],
            },
            {
              point: "Evaluates through the Core Concept of Perspective (e.g., cross-cultural evidence such as Rogoff challenging universal stages).",
              keywords: ["rogoff", "schooling", "sociocultural", "cross-cultural"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant comparison or psychological content.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes Piaget and Vygotsky separately with limited direct contrast or no explicit Perspective link.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly states both a similarity and focused contrasts (stages/schemas vs ZPD/scaffolding/language) integrated explicitly with cultural Perspective.",
            },
          ],
        },
        {
          id: "4-context-human-development-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "attachment-caregiving-culture",
          strategy: "Paper 1 Sec B — Strange Situation cross-cultural critique",
          marks: 6,
          question:
            "A city childcare agency plans to assess 14-month-olds from newly immigrated East Asian and European families using Ainsworth's laboratory **Strange Situation** to identify families needing parenting classes. Evaluate this plan using **van IJzendoorn & Kroonenberg (1988)** and the Core Concepts of **Measurement** and **Bias**.",
          hints: [
            "Acknowledge one genuine strength of the Strange Situation (standardized 8-episode procedure, high inter-rater reliability, Type B modal globally).",
            "Cite van IJzendoorn & Kroonenberg (1988) findings: elevated Type C in Japan (27%) vs Type A in West Germany (35%), AND intra-cultural variation (~1.5× inter-cultural variation).",
            "Critique via Measurement & Bias: imposed etic protocol risks mislabelling culturally normative closeness or early independence as 'poor parenting', causing stigma.",
          ],
          modelAnswer:
            "Ainsworth's Strange Situation offers standardized 8-episode observational scoring with strong inter-rater reliability, and van IJzendoorn & Kroonenberg's (1988) meta-analysis of 32 studies across 8 countries confirmed that Type B (Secure) is the modal attachment style worldwide. However, using this laboratory rubric to judge diverse immigrant families introduces severe Measurement and Bias flaws. The protocol functions as an imposed etic built on Western nuclear-family separation routines: Japanese infants (27% Type C in Takahashi, 1986) are seldom left alone with strangers, so intense separation distress reflects unfamiliarity rather than insensitive parenting, while West German norms encouraging early self-reliance elevated Type A classifications (35%, Grossmann et al., 1985). Moreover, intra-cultural variation was roughly 1.5 times greater than inter-cultural variation, warning against stereotyping any nationality. Labeling culturally normative caregiving as deficient risks wrongful stigmatization; the agency should pair home-based naturalistic observations with culturally adapted emic assessments.",
          markScheme: [
            {
              point: "Notes a methodological strength of the Strange Situation (standardized protocol / high inter-rater reliability / global Type B modal finding).",
              keywords: ["inter-rater", "standardized", "modal"],
            },
            {
              point: "Accurately applies van IJzendoorn & Kroonenberg (1988) cross-cultural distribution differences (Japan Type C ~27% / Germany Type A ~35%).",
              keywords: ["27%", "35%", "takahashi", "grossmann"],
            },
            {
              point: "Explains the imposed etic / construct validity threat under Measurement and Bias (Western separation assumptions).",
              keywords: ["imposed etic", "western", "unfamiliarity", "self-reliance"],
            },
            {
              point: "Cites intra-cultural variation (~1.5× inter-cultural variation) to guard against national stereotyping.",
              keywords: ["intra-cultural", "1.5", "stereotyping"],
            },
            {
              point: "Applies evaluation directly to the unseen childcare agency scenario (risk of wrongful labelling/stigmatization).",
              keywords: ["stigmatization", "deficient", "wrongful", "immigrant"],
            },
            {
              point: "Proposes a justified culturally responsive alternative (naturalistic home observation / emic assessment).",
              keywords: ["naturalistic", "emic", "home-based", "culturally adapted"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant evaluation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Generic description of the Strange Situation with minimal application to the agency scenario.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Applies cross-cultural findings and notes cultural bias, though Measurement/imposed etic critique or intra-cultural nuance is partially developed.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Balanced, scenario-grounded evaluation integrating van IJzendoorn & Kroonenberg (including intra-cultural variation), imposed etic Measurement/Bias critique, and constructive recommendation.",
            },
          ],
        },
        {
          id: "4-context-human-development-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "identity-moral-socioemotional",
          strategy: "Werner's Kauai resilience across 3 approaches",
          marks: 6,
          question:
            "A local youth council asks why some teenagers growing up in chronic poverty thrive academically and socially while peers facing identical adversity struggle. Explain how **protective factors** from **Biological, Cognitive, and Sociocultural** approaches promote resilience, citing **Werner's Kauai longitudinal study**.",
          hints: [
            "Introduce Werner & Smith's 40-year Kauai cohort (698 infants; 201 high-risk; ~1/3 resilient).",
            "Dedicate one clear point to each approach: Biological (temperament/health), Cognitive (internal locus of control/problem-solving), Sociocultural (one stable caring adult/community).",
            "Conclude by linking to **Change** and societal **Responsibility** (mentoring and community buffers).",
          ],
          modelAnswer:
            "Emmy Werner and Ruth Smith tracked 698 infants born on Kauai for 40 years; among 201 children exposed to severe cumulative adversity (poverty, perinatal stress, family instability), roughly one-third matured into competent, caring adults, proving early risk is probabilistic rather than deterministic. Three interacting layers of buffers explained this divergence. Biologically, resilient infants often exhibited an easy, affectionate temperament and robust early health, eliciting warmer responses from caregivers and dampening chronic stress reactivity. Cognitively, they developed an internal locus of control, solid reading competence, and active problem-solving beliefs—viewing setbacks as manageable rather than permanent. Socioculturally, virtually every resilient child formed an enduring bond with at least one dependable adult—such as a grandparent, teacher, or coach—alongside supportive school or youth-group networks. Crucially, Werner observed additional recovery during young adulthood, underscoring lifelong Change and civic Responsibility to fund community mentoring.",
          markScheme: [
            {
              point: "Accurately summarizes Werner & Smith's 40-year Kauai longitudinal design and ~1/3 high-risk resilience finding.",
              keywords: ["698", "40 years", "201", "one-third"],
            },
            {
              point: "Explains Biological protective factors (easy temperament / good early health / lower stress reactivity).",
              keywords: ["temperament", "robust", "reactivity"],
            },
            {
              point: "Explains Cognitive protective factors (internal locus of control / reading competence / active problem-solving).",
              keywords: ["locus of control", "problem-solving", "reading"],
            },
            {
              point: "Explains Sociocultural protective factors (at least one dependable caring adult mentor + school/community networks).",
              keywords: ["dependable adult", "grandparent", "teacher", "mentor", "networks"],
            },
            {
              point: "Integrates the levels to show risk is probabilistic rather than deterministic (bio-cog-soc interaction).",
              keywords: ["probabilistic", "deterministic", "interacting"],
            },
            {
              point: "Connects explicitly to FA2027 Core Concepts of Change (adult turnaround) and societal Responsibility (mentoring programmes).",
              keywords: ["young adulthood", "responsibility", "mentoring", "lifelong"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant psychological explanation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists generic resilience tips without accurate Kauai evidence or multi-approach structure.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Cites Werner's Kauai study and covers two approaches clearly, or covers all three briefly without integrating Change/Responsibility.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Thorough, integrated Biological, Cognitive, and Sociocultural explanation grounded in Werner's Kauai findings and explicitly tied to Change and Responsibility.",
            },
          ],
        },
        {
          id: "4-context-human-development-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Measurement critiques of Piaget",
          marks: 4,
          question:
            "Evaluate **Piaget's** theory of early cognitive development with reference to **Measurement** validity, using **two** empirical studies.",
          hints: [
            "Acknowledge Piaget's foundational contribution (active constructivism, clinical interview observations).",
            "Use **Baillargeon & DeVos (1991)** (violation-of-expectation at 3.5 months) to critique sensorimotor motor-search demands.",
            "Use **Hughes (1975)** ('policeman doll', 90% success) to critique Three Mountains egocentrism demands.",
          ],
          modelAnswer:
            "Piaget transformed developmental psychology by demonstrating that children actively build qualitative mental schemas rather than mimicking adults. Nevertheless, modern research exposes critical Measurement weaknesses in his classic paradigms. First, Baillargeon and DeVos (1991) replaced manual blanket-searching with a violation-of-expectation looking-time carrot task and found infants as young as 3.5 months reacted with longer gaze to impossible events—indicating Piaget confounded object permanence with immature motor coordination. Second, Hughes (1975) replaced the abstract Three Mountains display with a relatable policeman-doll hiding task; 90% of 3.5- to 5-year-olds succeeded, showing verbal and spatial unfamiliarity led Piaget to overestimate preoperational egocentrism. Consequently, while schema accommodation remains influential, Piaget's rigid stage ages lack construct validity.",
          markScheme: [
            {
              point: "Acknowledges a genuine strength of Piaget's constructivist framework.",
              keywords: ["actively build", "qualitative", "schema"],
            },
            {
              point: "Uses Baillargeon & DeVos (1991) violation-of-expectation (~3.5 months) to show motor demands underestimated object permanence.",
              keywords: ["baillargeon", "violation-of-expectation", "3.5 months", "motor"],
            },
            {
              point: "Uses Hughes (1975) policeman-doll study (~90% success) to show unfamiliar Three Mountains demands overestimated egocentrism.",
              keywords: ["hughes", "policeman", "90%", "three mountains", "egocentrism"],
            },
            {
              point: "Draws an explicit evaluative conclusion regarding construct / Measurement validity of Piaget's stage timelines.",
              keywords: ["construct validity", "underestimated", "overestimate", "confounded"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant evaluation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes Piaget's stages with one vague criticism or unsupported claim.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balances strength with two accurate empirical critiques (Baillargeon & DeVos; Hughes) framed explicitly around Measurement/construct validity.",
            },
          ],
        },
        {
          id: "4-context-human-development-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "identity-moral-socioemotional",
          strategy: "Scenario application of Marcia's statuses",
          marks: 4,
          question:
            "Twins Zara and Kai are 18. Zara spent two years comparing medical, environmental, and teaching internships before enrolling enthusiastically in marine biology. Kai says he feels overwhelmed whenever career fairs happen, avoids thinking about graduation, and has made no plans. Apply **Marcia's (1966)** model to both twins and briefly note one cultural limitation of this framework.",
          hints: [
            "Classify Zara using Exploration and Commitment first.",
            "Classify Kai using Exploration and Commitment next.",
            "Evaluate one cross-cultural Perspective limitation of ranking individualistic exploration universally above family-guided commitment.",
          ],
          modelAnswer:
            "In Marcia's framework, Zara demonstrates Identity Achievement: she engaged in high exploration across multiple internships and then forged a strong personal commitment to marine biology. By contrast, Kai displays Identity Diffusion, showing low exploration (actively avoiding career reflection) alongside low commitment (no settled direction), which can accompany elevated anxiety. However, evaluating adolescents solely through Marcia's North American rubric carries individualistic cultural bias: in interdependent societies where family duty guides vocational paths, low solo exploration paired with strong commitment (Foreclosure) often fosters social harmony and emotional security rather than immaturity.",
          markScheme: [
            {
              point: "Correctly classifies Zara as Identity Achievement (High Exploration + High Commitment) with scenario evidence.",
              keywords: ["achievement", "high exploration", "personal commitment"],
            },
            {
              point: "Correctly classifies Kai as Identity Diffusion (Low Exploration + Low Commitment) with scenario evidence.",
              keywords: ["diffusion", "low exploration", "low commitment"],
            },
            {
              point: "Identifies individualistic / Western cultural bias in Marcia's framework.",
              keywords: ["individualistic", "western", "north american", "cultural bias"],
            },
            {
              point: "Explains how Foreclosure / family-guided commitment can be adaptive in interdependent/collectivist societies.",
              keywords: ["foreclosure", "interdependent", "collectivist", "family"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid application.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Classifies one or both twins with limited justification and no cultural evaluation.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately maps both twins onto Exploration × Commitment dimensions and adds a sharp cultural Perspective critique.",
            },
          ],
        },
        {
          id: "4-context-human-development-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "developmental-methods-ethics",
          strategy: "Paper 2 unseen study evaluation (2 Core Concepts)",
          marks: 6,
          question:
            "An unseen developmental study tests whether teenage sleep duration predicts maths grades by surveying 120 twelve-year-olds and 120 seventeen-year-olds on a single Tuesday morning. School teachers distributed the questionnaires in class and collected them with students' full names written on top. Evaluate this study with reference to **two** FA2027 Core Concepts (**Causality**, **Measurement**, **Bias**, or **Responsibility**).",
          hints: [
            "First examine the research design: testing two age groups on one day raises a key Measurement confound, and correlational data limits Causality.",
            "Next examine who collected the named questionnaires and how classroom authority affects Bias and ethical Responsibility.",
            "Conclude with concrete redesigns addressing confidentiality, voluntary youth assent, and tracking age versus cohort.",
          ],
          modelAnswer:
            "First, under Measurement and Causality, comparing 12- and 17-year-olds on a single day creates a cross-sectional cohort confound: differences in sleep and grades may reflect generational phone ownership or exam curricula rather than true age Change. Moreover, correlational survey data cannot isolate Causality because bidirectional influences (poor grades causing late-night worry) or third variables like socioeconomic stress may drive both outcomes; single-day self-report sleep estimates also suffer recall inaccuracy. Second, under Responsibility and Bias, having teachers collect named questionnaires compromises confidentiality and exploits classroom power dynamics—pressuring students into coerced compliance rather than free child assent while inflating social-desirability distortion. To strengthen validity and ethics, researchers should use anonymized participant codes collected by external staff, secure parental consent plus opt-out youth assent, replace single-day recall with actigraphy trackers, and adopt a cross-sequential design.",
          markScheme: [
            {
              point: "Identifies cross-sectional cohort confound threatening Measurement of developmental age change.",
              keywords: ["cohort confound", "cross-sectional", "generational"],
            },
            {
              point: "Explains correlational Causality limits (bidirectional relationship or third variables like stress/SES).",
              keywords: ["correlational", "bidirectional", "third variables"],
            },
            {
              point: "Identifies self-report / social-desirability Bias triggered by teachers collecting named surveys.",
              keywords: ["social-desirability", "self-report", "recall"],
            },
            {
              point: "Evaluates Responsibility breach: names compromise confidentiality and teacher authority pressures voluntary child assent.",
              keywords: ["confidentiality", "power dynamics", "assent", "coerced"],
            },
            {
              point: "Proposes concrete ethical improvement (anonymized codes / external researcher / parental consent + free assent).",
              keywords: ["anonymized", "external", "parental consent"],
            },
            {
              point: "Proposes concrete methodological improvement (cross-sequential design or objective sleep tracking/actigraphy).",
              keywords: ["cross-sequential", "actigraphy", "objective"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant methodological or ethical evaluation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies isolated flaws superficially without linking accurately to Core Concepts.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Evaluates the study through two Core Concepts accurately, though causal/cohort analysis or improvements lack depth.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Sharp, integrated evaluation across two+ Core Concepts (cohort confound, bidirectional causality, power/assent & confidentiality) with justified redesigns.",
            },
          ],
        },
      ],
    },
    {
      id: "4-context-human-development-p2",
      title: "Practice Paper 2 — Unseen Developmental Studies & Concept ERQs",
      level: "SL",
      questions: [
        {
          id: "4-context-human-development-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "developmental-methods-ethics",
          strategy: "Two-wave longitudinal retention count",
          question:
            "A longitudinal adolescent study begins with **240** participants at Wave 1. Between Wave 1 and Wave 2, **15%** drop out. Between Wave 2 and Wave 3, **25%** of the *remaining* Wave 2 participants drop out. Calculate the exact number of participants remaining at Wave 3.",
          answer: {
            type: "number",
            value: 153,
            display: "153 participants",
          },
          traps: [
            {
              spec: { type: "number", value: 144 },
              feedback: "144 assumes an additive 40% dropout (15% + 25%). Apply 25% attrition to the Wave 2 survivor count (204), not 240.",
            },
            {
              spec: { type: "number", value: 87 },
              feedback: "87 is the total number of dropouts (240 − 153). The question asks how many participants *remain*.",
            },
          ],
          hints: [
            "First find Wave 2 remaining participants: {{240 * 0.85}}.",
            "Next retain 75% of that Wave 2 group: {{204 * 0.75}}.",
          ],
          solution: [
            "Wave 2 survivors: {{240 * (1 - 0.15) = 240 * 0.85 = 204}}.",
            "Wave 3 survivors: {{204 * (1 - 0.25) = 204 * 0.75 = 153}} participants.",
          ],
        },
        {
          id: "4-context-human-development-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Matching study to cognitive critique",
          question:
            "Name the developmental researcher who used the 1975 'policeman doll' hiding task to demonstrate that 90% of children aged 3.5 to 5 years can take another person's visual perspective when the scenario makes human sense.",
          answer: {
            type: "text",
            accept: ["hughes", "martin hughes"],
            display: "Hughes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["baillargeon", "renee baillargeon"] },
              feedback: "Baillargeon & DeVos (1991) tested infant object permanence via violation-of-expectation; the 1975 policeman-doll study was conducted by Martin Hughes.",
            },
          ],
          hints: [
            "This study directly challenged Piaget's Three Mountains task and was highlighted by Margaret Donaldson.",
            "Single surname starting with H.",
          ],
          solution: [
            "**Martin Hughes (1975)** designed the policeman-doll task, demonstrating preschool perspective-taking far earlier than Piaget's Three Mountains task suggested.",
          ],
        },
        {
          id: "4-context-human-development-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "attachment-caregiving-culture",
          strategy: "Attachment types — Main & Solomon",
          question:
            "An infant in the Strange Situation walks toward her returning mother while abruptly freezing, rocking, and looking away in fear. State the fourth attachment classification added by **Main & Solomon (1986)**.",
          answer: {
            type: "text",
            accept: ["disorganized", "disorganised", "disorganized-disoriented", "disorganised-disoriented", "type d"],
            display: "disorganized",
          },
          hints: [
            "Ainsworth originally described Types A, B, and C; Main & Solomon introduced Type D.",
            "The behaviour lacks any single coherent coping strategy.",
          ],
          solution: [
            "Contradictory approach-and-fear or freezing responses represent **disorganized (Type D)** attachment (Main & Solomon, 1986).",
          ],
        },
        {
          id: "4-context-human-development-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "identity-moral-socioemotional",
          strategy: "Marcia identity status classification",
          question:
            "Eighteen-year-old Sam is currently debating political philosophies, trying out two part-time jobs, and interviewing university graduates, explaining 'I'm still figuring out what matters most to me before I decide.' State Sam's Marcia identity status.",
          answer: {
            type: "text",
            accept: ["moratorium", "identity moratorium"],
            display: "moratorium",
          },
          traps: [
            {
              spec: { type: "text", accept: ["diffusion", "identity diffusion"] },
              feedback: "Diffusion involves *low* exploration; Sam is actively investigating multiple options (high exploration, low commitment).",
            },
          ],
          hints: [
            "Exploration = High; Commitment = Low.",
            "This status is an active pause for exploration before committing.",
          ],
          solution: [
            "High Exploration paired with Low Commitment defines **Moratorium**.",
          ],
        },
        {
          id: "4-context-human-development-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "identity-moral-socioemotional",
          strategy: "Two-stage resilience cohort proportion",
          question:
            "In a new longitudinal resilience study modelled on Werner's Kauai cohort, **600** newborns are enrolled. Exactly **35%** experience high cumulative childhood adversity, and **30%** of those high-risk children develop strong adult resilience. Calculate how many children in this cohort are both high-risk and resilient.",
          answer: {
            type: "number",
            value: 63,
            display: "63 participants",
          },
          traps: [
            {
              spec: { type: "number", value: 180 },
              feedback: "180 is 30% of all 600 newborns, not 30% of the high-risk subgroup (210).",
            },
            {
              spec: { type: "number", value: 210 },
              feedback: "210 is the total number of high-risk newborns; now take 30% of 210.",
            },
          ],
          hints: [
            "Step 1: Find the number of high-risk infants ({{600 * 0.35}}).",
            "Step 2: Take 30% of that high-risk subgroup.",
          ],
          solution: [
            "High-risk subgroup: {{600 * 0.35 = 210}} children.",
            "Resilient high-risk children: {{210 * 0.30 = 63}} participants.",
          ],
        },
        {
          id: "4-context-human-development-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "developmental-methods-ethics",
          strategy: "Identifying longitudinal Measurement confounds",
          question:
            "In a 4-year longitudinal study, children take the exact same vocabulary-and-puzzles test every 6 months, and scores rise much faster than national age norms. Name the two-word methodological threat caused by repeated familiarity with the test items.",
          answer: {
            type: "text",
            accept: ["practice effect", "practice effects", "testing effect", "order effect"],
            display: "practice effect",
          },
          traps: [
            {
              spec: { type: "text", accept: ["cohort effect", "cohort effects"] },
              feedback: "Cohort effects arise between different birth generations in cross-sectional designs, not repeated testing of one cohort.",
            },
          ],
          hints: [
            "Recall the mnemonic Long-LAP: Length/cost, Attrition, and ____ effects.",
            "Taking an identical test repeatedly gives participants familiarity.",
          ],
          solution: [
            "Score inflation caused by repeated exposure to identical test materials is a **practice effect** (also called a testing effect).",
          ],
        },
        {
          id: "4-context-human-development-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Vygotsky's ZPD & classroom application",
          marks: 4,
          question:
            "A Year 3 primary teacher notices that pupils struggle to solve multi-step maths problems silently alone, yet succeed when working in pairs with structured sentence-starter prompts. Explain this improvement using **Vygotsky's sociocultural theory**.",
          hints: [
            "Define the Zone of Proximal Development (ZPD) and More Knowledgeable Other (MKO).",
            "Explain how structured sentence-starter prompts act as **scaffolding** and language as a **cultural tool** (social speech → private speech → inner speech).",
          ],
          modelAnswer:
            "According to Vygotsky, cognitive growth originates through social interaction before becoming internalized within the learner. The multi-step problems sit inside each pupil's Zone of Proximal Development—beyond solo mastery yet achievable with guidance. Pairing pupils allows a stronger partner or teacher to serve as a More Knowledgeable Other, while structured sentence-starter prompts provide contingent scaffolding that reduces overwhelm and can be faded as competence grows. Crucially, talking through steps aloud uses language as a cultural tool, shifting learners from collaborative social speech toward self-regulating private speech and eventually silent inner speech.",
          markScheme: [
            {
              point: "Explains that higher cognition develops first socially before internalization.",
              keywords: ["social interaction", "internalized", "collaborative"],
            },
            {
              point: "Applies the Zone of Proximal Development (gap between solo and assisted performance).",
              keywords: ["zone of proximal development", "solo mastery", "assisted"],
            },
            {
              point: "Identifies paired partner/teacher as MKO and sentence-starter prompts as gradually faded scaffolding.",
              keywords: ["more knowledgeable other", "scaffolding", "faded"],
            },
            {
              point: "Explains role of language as a cultural tool (social speech → private speech → inner speech).",
              keywords: ["cultural tool", "private speech", "inner speech"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant Vygotskian explanation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions ZPD or scaffolding briefly without applying them to the classroom scenario.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Applies ZPD, MKO, fading scaffolding, and language/internalization accurately to the unseen classroom scenario.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "attachment-caregiving-culture",
          strategy: "Integrating Bio, Cog & Soc in attachment",
          marks: 4,
          question:
            "Explain how **attachment formation** integrates **Biological** and **Cognitive** processes, using **Bowlby's theory** and one piece of empirical evidence.",
          hints: [
            "Biological pillar: evolved survival mechanism, innate social releasers (crying/smiling), sensitive period.",
            "Cognitive pillar: Internal Working Model (IWM) encoding self-worth and trust schemas.",
            "Empirical anchor: Hazan & Shaver (1987) linking early attachment to adult romantic models, or Rutter's ERA study showing sensitive-period plasticity.",
          ],
          modelAnswer:
            "Bowlby framed attachment as an evolved biological survival system: human infants possess innate social releasers—such as crying, clinging, and smiling—that trigger caregiver proximity and protection during an early sensitive period. Simultaneously, repeated caregiver responsiveness builds a cognitive Internal Working Model, a mental schema representing whether the self deserves love and whether others are trustworthy. Empirical support comes from Hazan and Shaver (1987), who found that adults reporting warm, consistent childhood caregiving displayed secure romantic schemas and higher trust, whereas Rutter's Romanian adoptee cohort confirmed that early deprivation disrupts these relational templates most strongly after 6 months.",
          markScheme: [
            {
              point: "Explains Biological survival basis (evolutionary adaptation, innate social releasers, sensitive period).",
              keywords: ["evolutionary", "evolved", "social releasers", "sensitive period"],
            },
            {
              point: "Explains Cognitive Internal Working Model (mental schema of self-worth and others' reliability).",
              keywords: ["internal working model", "schema", "trustworthy", "self"],
            },
            {
              point: "Integrates how early caregiving links biological proximity to cognitive expectations.",
              keywords: ["responsiveness", "relational templates", "simultaneously"],
            },
            {
              point: "Supports with relevant empirical evidence (e.g., Hazan & Shaver 1987 or Rutter ERA study).",
              keywords: ["hazan", "shaver", "rutter", "romanian"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant content.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes only biological OR cognitive aspects of Bowlby with minimal evidence.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly integrates Bowlby's biological survival system and cognitive IWM with accurate empirical support.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "identity-moral-socioemotional",
          strategy: "Bio–Cog–Soc gender development",
          marks: 6,
          question:
            "Examine how **Cognitive** and **Sociocultural** factors interact to shape children's **gender identity and gender-typed behaviour**, using empirical research.",
          hints: [
            "Cognitive pillar: Martin & Halverson (1981, 1983) Gender Schema Theory—basic gender labelling (~age 2–3), in-group/out-group schemas, counter-stereotypical memory distortion.",
            "Sociocultural pillar: Bandura & Bussey (1999) Social Cognitive Theory—modelling, vicarious reinforcement, peer/parent/media sanctioning.",
            "Evaluate interaction & Perspective: schemas filter *which* cultural models children attend to, while shifting cultural media norms reshape schema content over time (**Change**).",
          ],
          modelAnswer:
            "Children's gender roles arise from a continuous feedback loop between internal cognitive categorization and external sociocultural norms. Cognitively, Martin and Halverson's (1981) Gender Schema Theory argues that once toddlers label their own gender around age 2 to 3, they build in-group and out-group mental networks that guide attention and toy choices. In Martin and Halverson's (1983) memory experiment, children shown counter-stereotypical images—such as a girl sawing wood or a male nurse—frequently recalled the scenes with swapped genders, demonstrating active schema reconstruction. Socioculturally, Bandura and Bussey's (1999) Social Cognitive Theory explains where schema content originates: children observe same-gender models across parents, peers, and media, internalize differential praise or teasing (vicarious reinforcement), and gradually self-regulate behaviour. Neither explanation suffices alone; cognitive schemas dictate *which* role models receive focused attention, yet cultural shifts in egalitarian media and parenting steadily alter those schemas across generations, reflecting Perspective and Change.",
          markScheme: [
            {
              point: "Explains Gender Schema Theory (Martin & Halverson): self-labelling (~age 2–3) and in-group/out-group categorization.",
              keywords: ["martin", "halverson", "in-group", "out-group", "gender schema"],
            },
            {
              point: "Cites empirical evidence of schema-based memory distortion of counter-stereotypical scenes (Martin & Halverson, 1983).",
              keywords: ["counter-stereotypical", "recalled", "reconstruction", "swapped"],
            },
            {
              point: "Explains Social Cognitive Theory of gender (Bandura & Bussey): modelling, vicarious reinforcement, and peer/media sanctioning.",
              keywords: ["bandura", "bussey", "vicarious", "modelling", "sanctioning"],
            },
            {
              point: "Explains internalization / self-regulation of gendered standards.",
              keywords: ["self-regulate", "internalize", "differential"],
            },
            {
              point: "Explicitly synthesizes how cognitive schemas and sociocultural models interact bidirectionally.",
              keywords: ["feedback loop", "neither explanation", "dictate"],
            },
            {
              point: "Evaluates through FA2027 Core Concepts of Perspective or Change (cultural shifts reshaping schemas across eras).",
              keywords: ["egalitarian", "generations", "perspective", "change"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant analysis.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes gender stereotypes generally with little theoretical or empirical grounding.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains Gender Schema Theory and Social Cognitive Theory accurately, though interaction or empirical detail is limited.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Integrates Martin & Halverson (with empirical memory study) and Bandura & Bussey explicitly, examining bidirectional interaction and cultural Change/Perspective.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "identity-moral-socioemotional",
          strategy: "Theory of Mind Measurement & neurodiversity",
          marks: 4,
          question:
            "Evaluate **Baron-Cohen, Leslie & Frith's (1985)** Sally-Anne false-belief task as a measure of **Theory of Mind** using the Core Concepts of **Measurement** and **Perspective**.",
          hints: [
            "Strength: clever standardized control questions (reality and memory checks) isolated false-belief attribution from simple forgetting (~85% neurotypical & ~86% Down syndrome passed vs ~20% autistic sample).",
            "Measurement critique: high verbal and executive-function demands; Onishi & Baillargeon (2005) found implicit belief tracking at 15 months via eye gaze.",
            "Perspective critique: Milton's (2012) double empathy problem challenges framing social communication differences as a one-sided deficit.",
          ],
          modelAnswer:
            "Baron-Cohen et al.'s (1985) Sally-Anne paradigm had strong internal control: reality and memory control questions confirmed that children who answered wrongly had not merely forgotten the story, while comparing neurotypical (~85% pass), Down syndrome (~86% pass), and autistic (~20% pass) groups suggested specificity beyond general intellectual delay. However, under Measurement, explicit verbal false-belief tasks heavily tax language comprehension and executive inhibition—non-verbal violation-of-expectation eye-gaze studies (Onishi & Baillargeon, 2005) reveal implicit belief tracking in 15-month-olds, suggesting low construct validity for pre-verbal or minimally speaking children. Furthermore, through contemporary neurodiversity Perspective, Milton's (2012) double empathy problem argues that misunderstandings occur bidirectionally between differing neurotypes rather than reflecting a simple one-sided cognitive deficit.",
          markScheme: [
            {
              point: "Notes a methodological strength (reality/memory control questions or Down syndrome comparison group with ~85%/86% vs ~20% finding).",
              keywords: ["control questions", "down syndrome", "85%", "20%"],
            },
            {
              point: "Critiques Measurement validity: verbal/executive task demands confound false-belief competence.",
              keywords: ["verbal", "language", "executive", "construct validity"],
            },
            {
              point: "Cites implicit non-verbal evidence (Onishi & Baillargeon, 2005 eye-gaze at 15 months).",
              keywords: ["onishi", "baillargeon", "15-month", "eye-gaze", "implicit"],
            },
            {
              point: "Applies neurodiversity Perspective via Milton's (2012) double empathy problem (bidirectional misunderstanding).",
              keywords: ["double empathy", "milton", "neurodiversity", "bidirectional"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant evaluation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes the Sally-Anne story with limited critical evaluation.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balances methodological strengths with sharp Measurement (verbal load/Onishi & Baillargeon) and Perspective (double empathy) critiques.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "developmental-methods-ethics",
          strategy: "Longitudinal vs cross-sectional design trade-offs",
          marks: 4,
          question:
            "Compare and contrast **longitudinal** and **cross-sectional** developmental designs, and justify why a **cross-sequential** design improves developmental **Measurement**.",
          hints: [
            "Longitudinal strength (tracks true intra-individual Change, avoids cohort effects) vs weakness (selective attrition, practice effects, cost).",
            "Cross-sectional strength (fast, cheap, zero attrition/practice) vs weakness (cohort effects confound age).",
            "Cross-sequential synthesis: tracks multiple cohorts over overlapping waves to compare different cohorts at the exact same age.",
          ],
          modelAnswer:
            "Both longitudinal and cross-sectional designs investigate age-related psychological patterns without manipulating age experimentally. Longitudinal designs track the same cohort across waves (as in Werner's Kauai study), capturing genuine intra-individual Change free from cohort confounds, yet suffer selective attrition, repeated-testing practice effects, and high expense. Conversely, cross-sectional studies test different age groups at one calendar time—saving time and avoiding dropout or practice effects—but severely confound biological ageing with generational cohort effects. A cross-sequential design sharpens Measurement by following multiple birth cohorts over overlapping intervals, enabling researchers to compare distinct cohorts at the exact same chronological age to isolate cohort bias from true developmental trajectories.",
          markScheme: [
            {
              point: "States longitudinal strength (intra-individual Change / avoids cohort confound) and limitations (selective attrition / practice effects / cost).",
              keywords: ["intra-individual", "attrition", "practice effects"],
            },
            {
              point: "States cross-sectional strengths (rapid / no dropout or practice) and core limitation (cohort effects confounding age).",
              keywords: ["cohort effects", "generational", "calendar time"],
            },
            {
              point: "Identifies a shared feature or direct methodological trade-off between the two designs.",
              keywords: ["without manipulating", "conversely", "age-related"],
            },
            {
              point: "Justifies cross-sequential design: tracks multiple cohorts over time so same-age cross-cohort comparisons separate age from cohort bias.",
              keywords: ["multiple birth cohorts", "overlapping", "same chronological age", "isolate"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists basic features of one or both designs without explaining cohort vs attrition trade-offs.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately contrasts longitudinal and cross-sectional trade-offs and explains precisely how cross-sequential designs separate age from cohort effects.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Paper 1 Sec C Concept ERQ — Change across Bio/Cog/Soc",
          marks: 9,
          question:
            "**Paper 1 Section C Concept ERQ:** Discuss the Core Concept of **Change** in **Human Development**, integrating **Biological, Cognitive, and Sociocultural** approaches with empirical evidence.",
          hints: [
            "Open with a clear thesis: human development involves continuous, plastic, probabilistic Change across biological, cognitive, and sociocultural levels—not rigid determinism.",
            "Biological pillar: synaptic blooming/pruning & myelination + Casey/Steinberg adolescent dual-systems window (Chein et al., 2011) + Rutter ERA neurodevelopmental catch-up before 6 months.",
            "Cognitive pillar: Piagetian schema accommodation across stages (critiqued via Baillargeon/Hughes for earlier continuous competence) + revisable Internal Working Models.",
            "Sociocultural pillar: Vygotsky's ZPD/scaffolding (Rogoff cultural tools) + Werner's 40-year Kauai study showing mentoring and adult life-course recovery; close with methodological limits (attrition/cohort confounds in measuring Change).",
          ],
          modelAnswer:
            "In FA2027 Human Development, the Core Concept of Change captures how individuals undergo continuous, plastic transformation across the lifespan through interacting biological, cognitive, and sociocultural systems—challenging deterministic claims that early traits or deficits are permanent.\n\nBiologically, brain architecture transforms through early synaptogenesis ('blooming') followed by experience-dependent synaptic pruning and myelination extending into the mid-20s (Huttenlocher, 1990). During adolescence, faster pubertal maturation of ventral striatum reward networks relative to prefrontal inhibitory circuits creates a transient risk-taking window amplified by peers (Casey et al., 2008; Chein et al., 2011). Yet biological Change is also powerfully responsive to enriched care: Rutter et al.'s English and Romanian Adoptees (ERA) longitudinal study demonstrated that orphans adopted into UK families before 6 months achieved near-complete physical and cognitive catch-up, supporting a flexible sensitive period rather than an irreversible critical period—though prolonged institutional privation past 24 months left lasting vulnerabilities, and natural-experiment limits prevent ruling out prenatal confounds.\n\nCognitively, Piaget proposed qualitative Change through assimilation, disequilibrium, and schema accommodation across four stages. While active constructivism remains foundational, Baillargeon and DeVos (1991) revealed object permanence at 3.5 months via looking-time measures and Hughes (1975) found 90% of preschoolers passed relatable perspective-taking tasks—showing cognitive Change is often more continuous and task-dependent than Piaget's abrupt stage boundaries implied. Similarly, Bowlby's Internal Working Model evolves cognitively as new supportive relationships revise earlier expectations.\n\nSocioculturally, Vygotsky argued cognitive Change is propelled by collaborative scaffolding within the Zone of Proximal Development and cultural tools such as language (Rogoff, 1990). Across the longer lifespan, Emmy Werner's 40-year Kauai longitudinal study (698 infants) proved that one-third of high-risk youth—and many additional struggling adolescents in young adulthood—redirected their trajectories when buffered by at least one stable adult mentor, internal locus of control, and community networks.\n\nFinally, measuring genuine developmental Change requires methodological rigour: cross-sectional snapshots confound ageing with generational cohort effects, whereas longitudinal studies risk selective attrition and practice effects. Cross-sequential designs therefore provide the strongest lens for understanding lifespan Change as an active, culturally scaffolded interplay of biology, mind, and society.",
          markScheme: [
            {
              point: "Frames Change clearly as continuous, plastic, and non-deterministic across the lifespan.",
              keywords: ["plastic", "deterministic", "lifespan"],
            },
            {
              point: "Integrates Biological neuroplasticity (synaptic blooming, pruning, myelination) and adolescent PFC–limbic mismatch (Casey/Chein).",
              keywords: ["synaptic pruning", "myelination", "ventral striatum", "chein"],
            },
            {
              point: "Evaluates Biological sensitive-period recovery via Rutter's ERA study (before vs after 6 months; natural experiment confound).",
              keywords: ["rutter", "before 6 months", "sensitive period", "prenatal"],
            },
            {
              point: "Integrates Cognitive Change via Piagetian schema accommodation and evaluates stage continuity via Baillargeon/Hughes.",
              keywords: ["accommodation", "baillargeon", "hughes", "continuous"],
            },
            {
              point: "Integrates Cognitive relational Change (revisable Internal Working Model).",
              keywords: ["internal working model", "revise", "expectations"],
            },
            {
              point: "Integrates Sociocultural Change via Vygotsky's ZPD, scaffolding, and cultural tools (Rogoff).",
              keywords: ["zone of proximal development", "scaffolding", "rogoff"],
            },
            {
              point: "Uses Werner's 40-year Kauai study to demonstrate resilience and adult-life-course turnaround via multi-level buffers.",
              keywords: ["werner", "kauai", "698", "mentor", "locus of control"],
            },
            {
              point: "Critically evaluates Measurement of Change (longitudinal attrition/practice vs cross-sectional cohort effects).",
              keywords: ["cohort effects", "selective attrition", "practice effects"],
            },
            {
              point: "Synthesizes across approaches and recommends cross-sequential methodology for capturing authentic Change.",
              keywords: ["cross-sequential", "interplay", "scaffolded"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–3",
              marks: [1, 3],
              descriptor: "Limited descriptive knowledge of developmental theories; minimal integration across approaches or explicit link to Change.",
            },
            {
              band: "4–6",
              marks: [4, 6],
              descriptor: "Accurate explanation of Change across at least two approaches with empirical studies, though evaluation or methodological critique is uneven.",
            },
            {
              band: "7–9",
              marks: [7, 9],
              descriptor: "Coherent, nuanced discussion integrating Biological, Cognitive, and Sociocultural evidence (pruning/Chein, Rutter, Piaget/Baillargeon/Hughes, Vygotsky, Werner) with sharp methodological evaluation of Change.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "To what extent",
          guideRef: "attachment-caregiving-culture",
          strategy: "Paper 1 Sec C Concept ERQ — Perspective & Culture",
          marks: 9,
          question:
            "**Paper 1 Section C Concept ERQ:** To what extent does cultural **Perspective** challenge universal theories of **Human Development**? Refer to empirical research across attachment, cognition, and identity.",
          hints: [
            "Build a balanced 'to what extent' judgment: universal biological/cognitive capacities exist, YET their behavioural expression and measurement are deeply shaped by culture.",
            "Attachment: van IJzendoorn & Kroonenberg (1988)—Type B modal everywhere (supports universal capacity), yet Type A/C vary sharply (Germany 35% vs Japan 27%), imposed etic critique, intra-cultural 1.5× inter-cultural.",
            "Cognition: Piagetian universal stages vs Vygotsky's cultural tools and Rogoff's (1990) guided participation showing Formal Operational tasks depend on formal schooling.",
            "Identity: Marcia's (1966) Western individualistic assumption vs adaptive family-guided Foreclosure in collectivist contexts.",
          ],
          modelAnswer:
            "Cultural Perspective substantially modifies—without wholly erasing—universal theories of Human Development: evolutionary biology provides shared developmental capacities, yet cultural norms govern how attachment, reasoning, and identity are expressed and validly measured.\n\nIn attachment research, Bowlby proposed an evolved universal survival bond, partially supported by van IJzendoorn and Kroonenberg's (1988) meta-analysis of 32 Strange Situation studies (N = 1,990) across 8 countries, where Type B (Secure) was the modal classification everywhere. Nevertheless, cultural Perspective exposes major imposed etic Bias in Ainsworth's laboratory rubric: elevated Avoidant classifications in West Germany (35%, Grossmann et al., 1985) reflected cultural encouragement of early self-reliance, while elevated Resistant classifications in Japan (27%, Takahashi, 1986) reflected distress at unfamiliar maternal separation. Crucially, intra-cultural variation was roughly 1.5 times greater than inter-cultural variation, warning against stereotyping whole nations while proving that Western separation norms cannot serve as an unbiased global benchmark.\n\nIn cognitive development, Piaget claimed universal biological maturation drives four invariant stages. However, Vygotsky's sociocultural Perspective emphasizes that language and cultural tools shape higher cognition via the Zone of Proximal Development. Cross-cultural studies (Rogoff, 1990) reveal that while early sensorimotor milestones appear widely shared, Formal Operational physics reasoning relies heavily on Western schooling, whereas unschooled youth display sophisticated domain-specific reasoning in local weaving, agriculture, or trade.\n\nIn socio-emotional identity, Marcia (1966) operationalized Erikson's adolescent task through autonomous Exploration and Commitment, implicitly ranking Achievement above Foreclosure. From a collectivist Perspective, adopting valued family guidance without solitary rebellion (Foreclosure) often predicts strong belonging, filial harmony, and low anxiety—revealing individualistic assumptions inside Western identity scales.\n\nIn conclusion, cultural Perspective challenges universalism to a considerable extent whenever Western protocols are treated as neutral defaults (Measurement Bias), yet supports a balanced 'universal capacity, culturally diverse expression' synthesis.",
          markScheme: [
            {
              point: "Establishes a clear, balanced 'to what extent' thesis: universal developmental capacities exist alongside culturally shaped expression and measurement.",
              keywords: ["capacities", "expression", "substantially"],
            },
            {
              point: "Uses van IJzendoorn & Kroonenberg (1988) universal modal Type B finding to show partial support for evolutionary universalism.",
              keywords: ["1,990", "modal", "evolutionary"],
            },
            {
              point: "Applies cultural Perspective to attachment variation (West Germany 35% Type A / Japan 27% Type C) and imposed etic critique.",
              keywords: ["35%", "27%", "imposed etic", "self-reliance"],
            },
            {
              point: "Cites intra-cultural variation (~1.5× inter-cultural variation) as nuanced safeguard against ecological fallacy/stereotyping.",
              keywords: ["1.5", "intra-cultural", "stereotyping"],
            },
            {
              point: "Contrasts Piagetian universalism with Vygotsky's cultural tools and ZPD.",
              keywords: ["vygotsky", "cultural tools", "zone of proximal development"],
            },
            {
              point: "Cites cross-cultural cognitive evidence (Rogoff, 1990) showing Formal Operational schooling dependence vs local expertise.",
              keywords: ["rogoff", "schooling", "weaving", "formal operational"],
            },
            {
              point: "Evaluates Marcia's (1966) identity statuses through collectivist vs individualistic Perspective (adaptive Foreclosure).",
              keywords: ["marcia", "foreclosure", "collectivist", "filial"],
            },
            {
              point: "Explicitly links cultural Perspective to Measurement Bias (Western protocols treated as neutral defaults).",
              keywords: ["measurement bias", "neutral defaults", "western protocols"],
            },
            {
              point: "Reaches a justified, nuanced conclusion weighing universalism against cultural diversity.",
              keywords: ["balanced", "synthesis", "considerable extent"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant content.",
            },
            {
              band: "1–3",
              marks: [1, 3],
              descriptor: "One-sided or purely descriptive comments about culture without concrete developmental studies.",
            },
            {
              band: "4–6",
              marks: [4, 6],
              descriptor: "Discusses cultural Perspective across two domains with studies, though 'to what extent' balance or Measurement links remain partial.",
            },
            {
              band: "7–9",
              marks: [7, 9],
              descriptor: "Sustained, balanced 'to what extent' evaluation across attachment (van IJzendoorn & Kroonenberg + intra-cultural nuance), cognition (Piaget vs Vygotsky/Rogoff), and identity (Marcia), tightly anchored in Perspective and Measurement Bias.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Suggest",
          guideRef: "developmental-methods-ethics",
          strategy: "Designing an ethical child study protocol",
          marks: 4,
          question:
            "A university psychology team plans a 3-year longitudinal observation of 4-year-olds solving challenging block puzzles with their parents to study **scaffolding** and frustration regulation. Suggest **four** specific ethical **Responsibility** safeguards tailored to these young participants.",
          hints: [
            "Address consent AND ongoing assent (remembering children age from 4 to 7 over 3 years!).",
            "Include non-verbal distress stopping rules, right to withdraw, positive debriefing, and video anonymization/safeguarding.",
          ],
          modelAnswer:
            "First, researchers must obtain written parental informed consent plus repeated, jargon-free child assent before each annual wave as the children mature from age 4 to 7, treating any verbal or non-verbal refusal as overriding parent permission. Second, strict distress stopping rules should immediately halt a puzzle session if a child cries, freezes, or shows sustained frustration, followed by a quick solvable puzzle to restore confidence. Third, video recordings must be stored on encrypted servers using anonymized ID codes—never publishing identifiable faces without separate consent—while stating mandatory child-safeguarding limits transparently upfront. Fourth, researchers must remind parents and children of their unconditional right to withdraw data at any point over the three years without losing promised thank-you gifts.",
          markScheme: [
            {
              point: "Requires written parental consent plus ongoing, age-appropriate child assent re-confirmed across longitudinal waves (dissent overrides).",
              keywords: ["parental informed consent", "child assent", "overriding", "annual wave"],
            },
            {
              point: "Establishes explicit distress stopping rules for non-verbal frustration cues and confidence-restoring debriefing/solvable task.",
              keywords: ["stopping rules", "freezes", "solvable", "confidence"],
            },
            {
              point: "Protects video confidentiality/anonymity (encrypted storage, anonymized codes) alongside transparent safeguarding limits.",
              keywords: ["encrypted", "anonymized", "safeguarding"],
            },
            {
              point: "Guarantees unconditional right to withdraw across all waves without loss of compensation/gifts.",
              keywords: ["right to withdraw", "unconditional", "gifts"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant ethical safeguards.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists generic adult-research ethics with minimal tailoring to 4–7-year-old longitudinal video observations.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Provides four concrete, age-tailored Responsibility safeguards covering ongoing assent, distress stopping rules, video confidentiality/safeguarding, and penalty-free withdrawal.",
            },
          ],
        },
        {
          id: "4-context-human-development-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "brain-maturation-cognitive-dev",
          strategy: "Policy application of developmental neuroscience",
          marks: 4,
          question:
            "Several jurisdictions restrict newly licensed 16- and 17-year-old drivers from carrying teenage passengers during their first year of solo driving, even though these drivers pass the same hazard-perception exam as adults. Explain the psychological rationale for this **Responsibility**-driven policy using neurodevelopmental and sociocultural evidence.",
          hints: [
            "Explain why adolescents pass the calm solo exam (adequate cool cognitive knowledge).",
            "Explain the hot peer-present shift via Casey/Steinberg dual-systems imbalance and Chein et al. (2011) fMRI driving simulator findings.",
          ],
          modelAnswer:
            "In calm, solitary exam rooms ('cool' cognition), 16- and 17-year-olds possess well-developed hazard knowledge and logical reasoning comparable to adults. However, Casey and Steinberg's dual-systems imbalance model demonstrates that pubertal limbic reward structures—especially the ventral striatum—mature faster than prefrontal cortex inhibitory control circuits, which continue pruning and myelinating into the mid-20s. In Chein et al.'s (2011) fMRI driving-simulator study, adolescents took significantly more red-light risks specifically when friends watched, showing amplified ventral striatum activation absent in adults. Restricting teenage passengers therefore acts as an evidence-based sociocultural guardrail, lowering acute peer-reward arousal while novice drivers consolidate safe automatic habits without penalizing adolescent autonomy unnecessarily.",
          markScheme: [
            {
              point: "Explains why adolescents pass calm solitary hazard exams ('cool' cognitive competence matches adults).",
              keywords: ["solitary", "cool", "comparable"],
            },
            {
              point: "Explains Biological dual-systems mismatch (ventral striatum reward maturation outpacing PFC pruning/myelination).",
              keywords: ["dual-systems", "ventral striatum", "prefrontal", "myelinating"],
            },
            {
              point: "Applies Chein et al. (2011) fMRI driving-simulator evidence showing peer presence triggers heightened reward activation and risk.",
              keywords: ["chein", "fmri", "friends watched", "red-light"],
            },
            {
              point: "Connects to Responsibility-driven policy: modifying social environment reduces hot peer-reward arousal while safe habits consolidate.",
              keywords: ["guardrail", "arousal", "novice", "consolidate"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant psychological explanation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States teenagers are reckless or distracted without neurodevelopmental evidence.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Integrates cool vs hot context, dual-systems brain maturation, Chein et al. (2011), and Responsibility-oriented policy rationale.",
            },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "4-context-human-development-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "developmental-methods-ethics",
      strategy: "Three-wave compound longitudinal attrition",
      question:
        "A 15-year longitudinal birth-cohort study starts with **1,000** infants at Wave 1. Attrition is **20%** from Wave 1 to Wave 2, **15%** of Wave 2 survivors from Wave 2 to Wave 3, and **10%** of Wave 3 survivors from Wave 3 to Wave 4. Calculate the **overall attrition rate** from Wave 1 to Wave 4 as a percentage to 1 decimal place.",
      answer: {
        type: "number",
        value: 38.8,
        tolerance: 0.05,
        display: "38.8%",
      },
      traps: [
        {
          spec: { type: "number", value: 45 },
          feedback: "Simply adding 20% + 15% + 10% = 45% overcounts attrition because each wave's dropout applies to the smaller surviving pool.",
        },
        {
          spec: { type: "number", value: 61.2, tolerance: 0.05 },
          feedback: "61.2% is the overall retention rate (612 ÷ 1000). Subtract from 100% to obtain overall attrition.",
        },
      ],
      hints: [
        "Multiply the retention factors step by step: {{1000 * 0.80 * 0.85 * 0.90}}.",
        "Subtract the Wave 4 survivor count from 1,000 to find total dropouts, then divide by 1,000.",
      ],
      solution: [
        "Wave 2 survivors: {{1000 * 0.80 = 800}}.",
        "Wave 3 survivors: {{800 * 0.85 = 680}}.",
        "Wave 4 survivors: {{680 * 0.90 = 612}}.",
        "Total dropouts: {{1000 - 612 = 388}}, so overall attrition rate = {{388 / 1000 * 100 = 38.8%}}.",
      ],
      commonError: "Adding per-wave attrition percentages linearly (20 + 15 + 10 = 45%) instead of compounding retention multipliers.",
    },
    {
      id: "4-context-human-development-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "developmental-methods-ethics",
      strategy: "Decomposing cross-sequential age vs cohort effects",
      question:
        "In a cross-sequential study of abstract reasoning (0–100 scale): the **2008 birth cohort** scores a mean of **64** at age 10 (in 2018) and **79** at age 15 (in 2023). The **2013 birth cohort** scores a mean of **71** at age 10 (in 2023). Calculate the size of the **cohort effect** (in points) favouring the 2013 cohort over the 2008 cohort at age 10.",
      answer: {
        type: "number",
        value: 7,
        display: "7 points",
      },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "8 points (79 − 71) is the 2023 cross-sectional age difference, which confounds age gain (15) with the cohort effect (7).",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "15 points (79 − 64) is the true longitudinal age gain within the 2008 cohort, not the cohort effect between 2013 and 2008.",
        },
      ],
      hints: [
        "To isolate a cohort effect, hold chronological age constant at age 10.",
        "Compare the 2013 birth cohort at age 10 (71) against the 2008 birth cohort at age 10 (64).",
      ],
      solution: [
        "Hold age constant at 10 years: 2013 cohort mean = 71; 2008 cohort mean = 64.",
        "Cohort effect = {{71 - 64 = 7}} points (notice how this 7-point younger-cohort shift masks nearly half of the 15-point true age gain in the 2023 cross-sectional gap of 8 points!).",
      ],
    },
    {
      id: "4-context-human-development-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "attachment-caregiving-culture",
      strategy: "Weighted meta-analytic attachment proportion",
      question:
        "Two attachment studies from the same country report: Sample 1 has **60** infants with **70%** Secure (Type B); Sample 2 has **140** infants with **60%** Secure (Type B). Calculate the combined **weighted percentage** of Secure infants across all 200 infants.",
      answer: {
        type: "number",
        value: 63,
        display: "63%",
      },
      traps: [
        {
          spec: { type: "number", value: 65 },
          feedback: "65% is the unweighted midpoint of 70% and 60%, which ignores that Sample 2 (140 infants) is much larger than Sample 1 (60 infants).",
        },
      ],
      hints: [
        "Convert each percentage into an exact infant count first (70% of 60, and 60% of 140).",
        "Sum both Secure counts and divide by the combined sample size (200).",
      ],
      solution: [
        "Sample 1 Secure count: {{0.70 * 60 = 42}} infants.",
        "Sample 2 Secure count: {{0.60 * 140 = 84}} infants.",
        "Combined Secure share: {{(42 + 84) / 200 * 100 = 126 / 200 * 100 = 63%}}.",
      ],
      commonError: "Taking an unweighted average of percentages ((70 + 60) ÷ 2 = 65%) instead of weighting by sample size.",
    },
    {
      id: "4-context-human-development-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "attachment-caregiving-culture",
      strategy: "HL Culture (Emic vs Etic) + Measurement critique",
      marks: 6,
      question:
        "**HL Synthesis (Culture × Human Development):** Evaluate why **emic** observational approaches are needed alongside **etic** protocols such as Ainsworth's Strange Situation when studying infant–caregiver bonds globally.",
      hints: [
        "Define etic (seeking universal cross-cultural principles) vs emic (culture-specific insider meanings).",
        "Acknowledge why Ainsworth's etic standardization was useful (comparability across 8 nations in van IJzendoorn & Kroonenberg; Uganda fieldwork roots!).",
        "Critique imposed etic bias (Takahashi Japan, Grossmann Germany, multi-caregiver/alloparenting societies like Efe communities) and propose a derived etic synthesis.",
      ],
      modelAnswer:
        "Etic research seeks universal developmental principles through standardized protocols; Ainsworth's Strange Situation enabled cross-national meta-analysis across 32 studies (van IJzendoorn & Kroonenberg, 1988), revealing Type B Secure attachment as modal everywhere and supporting Bowlby's evolutionary attachment capacity. However, treating a Western laboratory procedure built around nuclear-family solo maternal separation as universal creates an imposed etic that distorts Measurement validity. In Japan, continuous maternal proximity and co-sleeping make brief stranger separations unusually frightening, inflating Type C classifications (27%, Takahashi, 1986), whereas North German values encouraging early independence inflate Type A scores (35%, Grossmann et al., 1985). Similarly, in communal alloparenting societies such as the Efe of Central Africa, infants bond securely with multiple caregivers rather than a single monotropic mother. Emic observational fieldwork—studying caregiving sensitivity inside local homes and cultural meanings—uncovers indigenous expressions of security; combining emic insights with cross-cultural comparison builds a stronger derived etic while minimizing ethnocentrism and Bias.",
      markScheme: [
        {
          point: "Distinguishes etic (universal/standardized) from emic (culture-specific insider) methodology accurately.",
          keywords: ["etic", "emic", "standardized", "indigenous"],
        },
        {
          point: "Notes value of etic standardization (cross-national comparability; modal Type B across 32 studies in van IJzendoorn & Kroonenberg).",
          keywords: ["32 studies", "modal", "evolutionary"],
        },
        {
          point: "Explains imposed etic Measurement distortion using Japan (co-sleeping/separation shock → 27% Type C) and/or Germany (independence → 35% Type A).",
          keywords: ["imposed etic", "co-sleeping", "27%", "35%"],
        },
        {
          point: "Challenges monotropy via multi-caregiver / alloparenting cultural norms (e.g., Efe communities).",
          keywords: ["alloparenting", "multiple caregivers", "monotropic", "efe"],
        },
        {
          point: "Explains how emic home observation captures locally valid caregiver sensitivity.",
          keywords: ["local homes", "sensitivity", "cultural meanings"],
        },
        {
          point: "Synthesizes toward a derived etic approach to reduce ethnocentrism and Bias.",
          keywords: ["derived etic", "ethnocentrism", "bias"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant HL analysis.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Defines emic/etic loosely with minimal empirical attachment detail.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Evaluates Strange Situation cultural bias accurately, though emic alternative or derived etic synthesis is brief.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated HL evaluation balancing etic comparability against imposed etic distortion (Japan, Germany, alloparenting) and advancing a derived etic synthesis.",
        },
      ],
    },
    {
      id: "4-context-human-development-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      guideRef: "brain-maturation-cognitive-dev",
      strategy: "HL Technology × Brain & Socio-Emotional Development",
      marks: 6,
      question:
        "**HL Synthesis (Technology × Human Development):** Examine how **interactive social-media platforms** interact with **adolescent brain maturation** and **identity formation**, integrating Biological, Cognitive, and Sociocultural evidence.",
      hints: [
        "Biological: adolescent ventral striatum sensitivity to peer approval (likes/notifications) outpacing still-pruning PFC control (Casey/Steinberg; Chein et al., 2011).",
        "Cognitive: Marcia's identity exploration (Moratorium) vs gender/appearance schemas and social comparison.",
        "Sociocultural & balanced evaluation: Orben & Przybylski's small-effect-size nuance—digital platforms are neither uniformly toxic nor neutral; supportive niche communities can scaffold identity while algorithmic comparison amplifies vulnerability.",
      ],
      modelAnswer:
        "Social-media ecosystems intersect directly with adolescent neurodevelopment and identity work, producing nuanced bidirectional outcomes rather than uniform harm. Biologically, pubertal surges in ventral striatum reward sensitivity outpace prefrontal cortex pruning and inhibitory maturation (Casey et al., 2008; Chein et al., 2011). Quantified peer metrics—likes, streaks, and variable-ratio notifications—directly tap this social-reward circuitry, intensifying emotional reactivity and sleep-displacing late-night scrolling. Cognitively, adolescents navigating Erikson's Identity vs Role Confusion and Marcia's Moratorium use platforms both to test new hobbies or vocational personas and to absorb appearance-based schemas; idealized algorithmic feeds can heighten upward social comparison and rigid gender schemas. Socioculturally, however, large-scale analyses (Orben & Przybylski) demonstrate that overall screen-time correlations with adolescent well-being are surprisingly small and depend heavily on context: marginalized or shy youth frequently find affirming peer mentoring and Vygotskian creative scaffolding inside niche interest communities. Therefore, evaluating digital technology requires balancing biological vulnerability against active agency and supportive sociocultural framing (Responsibility & Perspective).",
      markScheme: [
        {
          point: "Links Biological adolescent PFC–limbic reward asymmetry (ventral striatum) to quantified social-media peer feedback (likes/notifications).",
          keywords: ["ventral striatum", "prefrontal", "likes", "variable-ratio"],
        },
        {
          point: "Connects to Cognitive identity processes (Erikson / Marcia's Moratorium) and schema/social comparison dynamics.",
          keywords: ["moratorium", "upward social comparison", "gender schemas"],
        },
        {
          point: "Integrates Sociocultural nuance showing supportive niche communities can provide mentoring/scaffolding.",
          keywords: ["niche", "affirming", "scaffolding", "marginalized"],
        },
        {
          point: "Cites empirical nuance (Orben & Przybylski small-effect-size evidence) resisting simplistic technological determinism.",
          keywords: ["orben", "przybylski", "small", "context"],
        },
        {
          point: "Acknowledges secondary developmental mechanisms (e.g., sleep displacement / algorithmic amplification).",
          keywords: ["sleep-displacing", "algorithmic", "scrolling"],
        },
        {
          point: "Draws a balanced evaluative conclusion linking to Responsibility or Perspective.",
          keywords: ["bidirectional", "agency", "responsibility", "perspective"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant content.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "General opinions about phones/social media without developmental neuroscience or identity theory.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Connects adolescent brain/identity theories to social media across two approaches, though empirical nuance is limited.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous HL synthesis integrating limbic–PFC reward sensitivity, Marcia/schemas, supportive peer communities, and Orben & Przybylski effect-size nuance.",
        },
      ],
    },
    {
      id: "4-context-human-development-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "developmental-methods-ethics",
      strategy: "HL Paper 3 mixed-method developmental source critique",
      marks: 6,
      question:
        "**HL Paper 3 Source Critique:** A 6-year mixed-method longitudinal study tracks 300 adolescents (ages 12–18) from three urban high schools to evaluate whether a mentorship programme boosts resilience. At Wave 3 (age 18), 186 remain (attrition = 38%); mean resilience rose from 62.0 (SD = 8.4) to 71.5 (SD = 6.1, {{p = 0.004}}). Semi-structured interviews with 12 volunteers who stayed all 6 years yielded the theme *'My mentor changed my outlook.'* Analyse the **quantitative and qualitative trustworthiness limitations** of concluding that the programme caused a lasting resilience gain.",
      hints: [
        "Quantitative Causality: no randomized control group (maturation / historical school changes could explain the +9.5 jump).",
        "Quantitative Measurement/Bias: 38% selective attrition AND shrinking SD (8.4 → 6.1) strongly suggest lower-resilience / stressed youth dropped out, inflating the mean despite p = 0.004!",
        "Qualitative trustworthiness: interviewing only 12 persistent volunteers creates survivor/selection bias; check transferability (3 urban schools only) and reflexivity/social desirability; note what a p-value does NOT prove.",
      ],
      modelAnswer:
        "Although the quantitative jump (+9.5 points, p = 0.004) appears statistically significant, severe methodological flaws undermine both internal validity and qualitative trustworthiness. First, under Causality, the study lacks a non-mentored control group, so ordinary adolescent maturation (prefrontal development) or broader school-wide reforms could account for the score rise independently of mentoring. Second, under Measurement and Bias, the 38% attrition rate (114 dropouts) coincides with a marked narrowing of dispersion (SD shrinking from 8.4 to 6.1)—a telltale signature of selective attrition where struggling, lower-scoring teens exited, artificially lifting the Wave 3 mean. Crucially, p = 0.004 only indicates the mean shift is unlikely under chance sampling error; it cannot rule out dropout distortion or prove causation. Third, qualitatively, sampling exclusively 12 persistent volunteers introduces severe survivorship and social-desirability bias—silencing the perspectives of the 114 adolescents who left and weakening credibility. Furthermore, recruiting solely from three urban schools limits transferability to rural or diverse socioeconomic settings. Adding a matched wait-list control group, conducting exit interviews with dropouts, and documenting researcher reflexivity plus member checking would substantially strengthen both strands.",
      markScheme: [
        {
          point: "Identifies absence of a control group (maturation or external school changes confound Causality).",
          keywords: ["control group", "maturation", "independently"],
        },
        {
          point: "Analyses selective attrition (38% / 114 dropouts) AND links shrinking SD (8.4 → 6.1) to loss of lower-scoring participants inflating Wave 3 mean.",
          keywords: ["selective attrition", "shrinking", "dispersion", "narrowing", "6.1"],
        },
        {
          point: "Clarifies statistical vs internal validity: p = 0.004 does not prove causation or eliminate dropout bias.",
          keywords: ["chance", "sampling error", "prove causation", "dropout distortion"],
        },
        {
          point: "Evaluates qualitative credibility flaw: interviewing only 12 persistent volunteers creates survivorship/social-desirability bias and excludes dropouts.",
          keywords: ["survivorship", "credibility", "silencing", "114"],
        },
        {
          point: "Evaluates transferability limit (three urban schools may not generalize to rural/diverse populations).",
          keywords: ["transferability", "rural", "socioeconomic"],
        },
        {
          point: "Recommends rigorous mixed-method improvements (control group, dropout exit interviews, reflexivity / member checking).",
          keywords: ["exit interviews", "reflexivity", "member checking", "wait-list"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid source critique.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions small sample or dropouts superficially without connecting SD, p-value, or qualitative trustworthiness criteria.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Analyses quantitative and qualitative limitations accurately, though SD narrowing, p-value nuance, or trustworthiness terms are incomplete.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Incisive HL Paper 3 analysis linking no-control maturation, 38% selective attrition + SD narrowing, p-value scope, survivorship bias (credibility), transferability, and concrete fixes.",
        },
      ],
    },
    {
      id: "4-context-human-development-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "attachment-caregiving-culture",
      strategy: "Causality & Ethics in early-deprivation natural experiments",
      marks: 6,
      question:
        "Evaluate the use of **longitudinal natural experiments** (such as **Rutter's English and Romanian Adoptees study**) to investigate the effects of early childhood adversity on **Human Development**, focusing on **Causality**, **Change**, and **Responsibility**.",
      hints: [
        "Ethical Responsibility strength: researchers can NEVER ethically assign infants to institutional deprivation, so natural experiments make studying severe adversity possible while prioritizing child welfare.",
        "Change strength: longitudinal multi-wave tracking (ages 4, 6, 11, 15, young adulthood) reveals sensitive-period recovery (<6 months) versus long-term disinhibited attachment.",
        "Causality & Measurement limits: no random allocation (prenatal nutrition/genetics/adoptive parent selection bias confound deprivation duration); selective attrition and ongoing ethical Responsibility when sharing sensitive clinical findings with growing adoptees.",
      ],
      modelAnswer:
        "Longitudinal natural experiments like Rutter's English and Romanian Adoptees (ERA) study are indispensable in Human Development because ethical Responsibility strictly prohibits randomly assigning infants to deprivation. By studying pre-existing adoption cohorts against 52 UK domestic adoptees across childhood into young adulthood, ERA delivered high ecological validity and demonstrated crucial lifespan Change: near-complete catch-up among children placed before 6 months alongside elevated disinhibited attachment and quasi-autistic features after prolonged privation—supporting a flexible sensitive period and catalyzing global foster-care reform. However, strong Causality claims remain constrained because natural experiments lack random allocation: unmeasured prenatal malnutrition, maternal stress, or genetic vulnerabilities—and adoptive parents potentially selecting healthier infants earlier—could confound deprivation duration. Moreover, decades-long tracking carries Responsibility challenges: researchers must repeatedly reconfirm adolescent/adult consent, protect deeply personal institutional histories from stigma, and provide clinical referral pathways when distressing difficulties surface.",
      markScheme: [
        {
          point: "Explains ethical Responsibility justification: true experiments manipulating deprivation are unethical, so natural experiments are necessary.",
          keywords: ["prohibits", "unethical", "indispensable", "randomly assigning"],
        },
        {
          point: "Evaluates longitudinal Change & ecological-validity strength using Rutter's <6-month catch-up vs post-6-month persistent risk and UK domestic control group.",
          keywords: ["ecological validity", "52 uk", "before 6 months", "disinhibited", "sensitive period"],
        },
        {
          point: "Notes positive applied Responsibility impact (deinstitutionalization / foster-care policy reform).",
          keywords: ["foster-care", "reform", "policy"],
        },
        {
          point: "Critiques Causality limits: lack of random allocation leaves prenatal malnutrition, genetics, or selection bias as confounds.",
          keywords: ["prenatal", "selection", "confound", "random allocation"],
        },
        {
          point: "Evaluates ongoing longitudinal Responsibility (reconfirming consent as adoptees mature, avoiding stigma, clinical referral support).",
          keywords: ["reconfirm", "stigma", "clinical referral", "histories"],
        },
        {
          point: "Maintains an explicit balanced evaluative judgment weighing ecological/ethical value against causal ambiguity.",
          keywords: ["however", "constrained", "catalyzing", "alongside"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant evaluation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Summarizes Rutter's findings descriptively with minimal methodological or ethical evaluation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Evaluates Causality and Responsibility in natural experiments clearly, though longitudinal ethics or confounding mechanisms need deeper precision.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Balanced, rigorous evaluation integrating ethical necessity, sensitive-period Change, policy Responsibility, prenatal/selection Causality confounds, and ongoing longitudinal safeguarding.",
        },
      ],
    },
    {
      id: "4-context-human-development-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      guideRef: "identity-moral-socioemotional",
      strategy: "HL Synoptic ERQ — Motivation, Culture & Identity",
      marks: 9,
      question:
        "**HL Synoptic Concept ERQ:** To what extent is **adolescent identity formation** a universal individual quest rather than a culturally and motivationally scaffolded process? Integrate **Erikson/Marcia**, **Biological/Cognitive factors**, and **HL Extensions (Culture & Motivation)**.",
      hints: [
        "Thesis: Biological PFC/identity readiness and psychosocial questioning are widespread, YET the pathways, motivational drivers, and healthy outcomes of identity formation are heavily scaffolded by Culture and Motivation.",
        "Individual/Cognitive-Biological pillar: Erikson's Identity vs Role Confusion + Marcia's Exploration × Commitment + adolescent PFC maturation enabling abstract self-reflection (Piaget Formal Operations) and peer social sensitivity.",
        "HL Culture pillar: Critique Western individualistic valuation of Achievement over Foreclosure; collectivist family-embedded identity (Perspective & Bias); bicultural frame-switching among immigrant youth.",
        "HL Motivation pillar: Deci & Ryan's Self-Determination Theory (autonomy, competence, relatedness)—distinguishing autonomous endorsement of cultural heritage from externally controlled pressure; plus Werner's supportive mentors.",
      ],
      modelAnswer:
        "Adolescent identity formation is only partially an individual quest: while biological brain maturation and cognitive self-reflection create a widespread developmental capacity for self-definition, cultural norms and motivational climates profoundly scaffold how young people explore and commit.\n\nSupporting a partially universal developmental foundation, Erikson (1968) identified Identity vs Role Confusion as a central adolescent milestone, operationalized by Marcia (1966) across Exploration and Commitment (Achievement, Moratorium, Foreclosure, Diffusion). Biologically and cognitively, ongoing prefrontal synaptic pruning and myelination expand abstract, hypothetical thinking and perspective-taking, enabling teenagers to compare future selves and integrate internal working models from earlier attachment histories into personal values.\n\nHowever, HL Cultural Perspective reveals that treating solitary rebellion and self-authored Achievement as the single healthy gold standard reflects Western individualistic Bias. In interdependent societies valuing filial harmony and communal duty, adolescents who embrace family-guided vocations or heritage traditions without protracted individual crisis (classified as Foreclosure in Marcia's rubric) frequently report high well-being, emotional security, and lower distress than peers pushed into anxious isolation. Furthermore, bicultural and immigrant youth actively negotiate multiple cultural scripts through frame-switching, showing identity is relational and contextual rather than purely solitary.\n\nIntegrating HL Motivation (Deci & Ryan's Self-Determination Theory) resolves this apparent tension between autonomy and culture. Crucially, SDT distinguishes *autonomy* (willingly endorsing one's values) from Western *independence* (detaching from family). When parents, teachers, and mentors—as seen in Werner's Kauai resilience cohort—satisfy relatedness, competence, and non-coercive autonomy support, adolescents can authentically internalize either self-explored paths or cherished family traditions. By contrast, controlling extrinsic pressure undermines intrinsic motivation, trapping youth in alienated Diffusion or rigid, resentful compliance.\n\nIn conclusion, biological and cognitive maturation opens the developmental capacity for identity synthesis, yet identity formation is predominantly a culturally situated, motivationally scaffolded process best understood by integrating Perspective, Change, and non-biased Measurement.",
      markScheme: [
        {
          point: "Presents a nuanced 'to what extent' thesis balancing shared biological/cognitive capacity against cultural and motivational scaffolding.",
          keywords: ["partially", "capacity", "scaffolded"],
        },
        {
          point: "Explains Erikson's Identity vs Role Confusion and Marcia's 4 statuses (Exploration × Commitment).",
          keywords: ["role confusion", "marcia", "achievement", "moratorium", "foreclosure", "diffusion"],
        },
        {
          point: "Integrates Biological/Cognitive foundations (PFC pruning/myelination enabling abstract hypothetical self-reflection and IWM continuity).",
          keywords: ["prefrontal", "pruning", "hypothetical", "internal working models"],
        },
        {
          point: "Applies HL Culture critique: individualistic Western Bias in ranking Achievement above Foreclosure.",
          keywords: ["individualistic", "bias", "interdependent", "filial"],
        },
        {
          point: "Includes contemporary cultural identity complexity (bicultural/immigrant frame-switching).",
          keywords: ["bicultural", "frame-switching", "relational"],
        },
        {
          point: "Applies HL Motivation via Deci & Ryan's Self-Determination Theory (autonomy, competence, relatedness).",
          keywords: ["self-determination", "deci", "relatedness", "competence"],
        },
        {
          point: "Makes the sophisticated distinction between SDT autonomy (willing endorsement) vs Western detachment/independence.",
          keywords: ["willingly endorsing", "detaching", "non-coercive"],
        },
        {
          point: "Contrasts autonomy-supportive mentoring (e.g., Werner Kauai) against controlling extrinsic pressure leading to Diffusion/resentment.",
          keywords: ["werner", "kauai", "controlling", "extrinsic"],
        },
        {
          point: "Synthesizes conclusion explicitly via FA2027 Core Concepts (Perspective, Change, Measurement).",
          keywords: ["perspective", "change", "measurement", "predominantly"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant psychological argument.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor: "Describes Erikson or Marcia briefly without integrating Biological/Cognitive mechanisms or HL Culture/Motivation.",
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor: "Integrates Marcia with cultural critique or motivation theory clearly, though synthesis between SDT autonomy and culture is underdeveloped.",
        },
        {
          band: "7–9",
          marks: [7, 9],
          descriptor: "Outstanding HL synoptic evaluation weaving PFC/cognitive readiness, Erikson/Marcia, collectivist/bicultural Perspective, and SDT autonomy-vs-independence nuance into a cohesive conclusion.",
        },
      ],
    },
  ],
};
