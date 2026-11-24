import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "7-hl-extensions-quiz-q01",
      kind: "mcq",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Distinguish",
      guideRef: "hl-culture-emic-etic",
      strategy: "Berry's Imposed Etic vs Derived Etic",
      question:
        "A research team collects indigenous idioms of stress in Nigeria, Peru, and Thailand before synthesizing overlapping dimensions into a multi-site screening scale. What approach have they produced?",
      options: [
        "An imposed-etic framework transferring a single Western checklist globally",
        "A derived-etic framework grounded in verified local emic evidence",
        "An ecological-fallacy model predicting scores from national GDP averages",
        "A reference-group design eliminating all qualitative interviewing",
      ],
      answerIndex: 1,
      hints: [
        "Notice they built insider (emic) knowledge in three cultures *before* comparing across them.",
      ],
      explanation:
        "Integrating multiple **emic** investigations before establishing cross-cultural comparisons creates a **derived etic**, avoiding the construct bias of an **imposed etic**.",
    },
    {
      id: "7-hl-extensions-quiz-q02",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "hl-culture-emic-etic",
      strategy: "WEIRD sample percentage",
      question:
        "A cross-cultural memory meta-analysis pools 450 participants in total, of whom 360 are from WEIRD societies. Calculate the **percentage** of WEIRD participants in the sample.",
      answer: { type: "number", value: 80, display: "80%" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20% is the non-WEIRD share (90 ÷ 450). The question asks for the WEIRD percentage.",
        },
        {
          spec: { type: "number", value: 0.8 },
          feedback: "Multiply the decimal proportion (0.8) by 100 to convert it into a percentage.",
        },
      ],
      hints: [
        "Divide the number of WEIRD participants (360) by the total sample size (450).",
        "Multiply your decimal by 100 to obtain a percentage.",
      ],
      solution: [
        "Proportion WEIRD = {{360 / 450 = 0.8}}.",
        "Percentage WEIRD = {{0.8 * 100 = 80%}}.",
      ],
      commonError: "Reporting the remaining non-WEIRD share (20%) or forgetting to multiply by 100.",
    },
    {
      id: "7-hl-extensions-quiz-q03",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      guideRef: "hl-motivation-reward-sdt",
      strategy: "Dopamine RPE vs Pleasure myth",
      question:
        "In Berridge and Robinson's (1998) incentive-salience model, what happens when mesolimbic dopamine signalling is selectively depleted in laboratory animals offered sweet sucrose?",
      options: [
        "Both sensory pleasure ('liking') and effortful pursuit ('wanting') vanish completely",
        "Effortful pursuit ('wanting') rises sharply while facial pleasure responses disappear",
        "Effortful pursuit ('wanting') drops away while facial pleasure reactions ('liking') stay intact",
        "Animals permanently refuse food even when sucrose is placed directly onto the tongue",
      ],
      answerIndex: 2,
      hints: [
        "Recall which psychological function mesolimbic dopamine controls vs opioid hotspots.",
        "Separate motivational craving ('wanting') from hedonic enjoyment ('liking').",
      ],
      explanation:
        "Dopamine depletion abolishes motivational **'wanting'** (working to seek sucrose) while leaving opioid-mediated sensory **'liking'** (positive tongue-licking reactions when sucrose is tasted) intact.",
    },
    {
      id: "7-hl-extensions-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "hl-motivation-reward-sdt",
      strategy: "SDT Basic Psychological Needs (CAR)",
      question:
        "A teacher switches from dictating every essay topic to letting students select their own research angle while offering supportive scaffolding. Which **single** Self-Determination Theory basic psychological need is most directly enhanced by this choice and ownership?",
      answer: {
        type: "text",
        accept: ["autonomy", "need for autonomy"],
        display: "Autonomy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["competence", "relatedness"] },
          feedback: "Competence concerns feeling capable/effective and Relatedness concerns belonging; volition and choice directly satisfy Autonomy.",
        },
      ],
      hints: [
        "Recall the CAR triad in Deci and Ryan's Self-Determination Theory.",
        "Which of the three needs represents experiencing volition, choice, and personal ownership?",
      ],
      solution: [
        "Offering meaningful choice and volitional ownership directly satisfies the basic psychological need for **Autonomy**.",
      ],
    },
    {
      id: "7-hl-extensions-quiz-q05",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Analyse",
      guideRef: "hl-technology-cognition-social",
      strategy: "Ward et al. (2017) Brain Drain conditions",
      question:
        "In Ward et al.'s (2017) 'Brain Drain' experiment, which group achieved the **highest** available working-memory scores on the automated operation span (OSpan) task?",
      options: [
        "Participants who left their silenced smartphone in another room outside the testing booth",
        "Participants who placed their silenced smartphone face-down beside their keyboard",
        "Participants who kept their smartphone unlocked on vibrate inside a shirt pocket",
        "Participants who checked a single benign notification right before starting OSpan",
      ],
      answerIndex: 0,
      hints: [
        "Higher physical salience of one's own phone imposes greater inhibitory load on working memory.",
        "Which location removed the phone completely from immediate perceptual reach?",
      ],
      explanation:
        "Leaving the smartphone in **another room** minimized attentional pull and freed central-executive working memory, producing the highest OSpan scores compared to pocket/bag and face-down on the desk.",
    },
    {
      id: "7-hl-extensions-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "hl-motivation-reward-sdt",
      strategy: "Overjustification percentage decrease",
      question:
        "Prior to an expected cash-for-reading scheme, pupils averaged 80 minutes per week of voluntary reading. After the scheme ended, voluntary reading fell to 60 minutes per week. Calculate the **percentage decrease** in voluntary reading.",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20 is the raw drop in minutes. Divide 20 by the baseline (80) and multiply by 100.",
        },
        {
          spec: { type: "number", value: 33.3, tolerance: 0.2 },
          feedback: "Divide the drop (20) by the original baseline (80), not the post-reward score (60).",
        },
      ],
      hints: [
        "Subtract the post-scheme reading time (60) from the baseline (80).",
        "Divide that decrease by the baseline (80), then multiply by 100.",
      ],
      solution: [
        "Drop = {{80 - 60 = 20}} minutes.",
        "Percentage decrease = {{(20 / 80) * 100 = 25%}}.",
      ],
    },
    {
      id: "7-hl-extensions-quiz-q07",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Evaluate",
      guideRef: "hl-technology-cognition-social",
      strategy: "Orben & Przybylski (2019) effect-size interpretation",
      question:
        "Why did Orben and Przybylski (2019) compare the association between adolescent digital technology use and well-being (~0.4% variance) to eating potatoes or wearing glasses?",
      options: [
        "To prove dietary carbohydrates directly neutralize smartphone sleep disruption",
        "To claim adolescents should avoid wearing spectacles while studying on laptops",
        "To show small negative correlations never reach statistical significance in surveys",
        "To contextualize a tiny practical effect size that looks huge under p-values alone",
      ],
      answerIndex: 3,
      hints: [
        "Remember that in datasets with N > 350,000, almost any tiny correlation achieves p < 0.001.",
        "Comparing tech's 0.4% variance to everyday benign benchmarks helps readers gauge *practical* significance.",
      ],
      explanation:
        "Benchmarking ~0.4% variance against neutral everyday variables like eating potatoes illustrated that statistical significance (`p < 0.001`) in giant datasets does not imply a large practical effect (**Measurement**).",
    },
    {
      id: "7-hl-extensions-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "hl-technology-cognition-social",
      strategy: "Task-switching RT % cost",
      question:
        "During a cognitive-control experiment, a participant averages 500 ms per trial in a focused single-task block and 675 ms per trial when switching rapidly between two rule sets. Calculate the **percentage reaction-time switching cost**.",
      answer: { type: "number", value: 35, display: "35%" },
      traps: [
        {
          spec: { type: "number", value: 175 },
          feedback: "175 ms is the raw delay. Divide by the 500 ms single-task baseline and multiply by 100.",
        },
        {
          spec: { type: "number", value: 25.9, tolerance: 0.2 },
          feedback: "Use the focused baseline (500 ms) as the denominator, not the switching RT (675 ms).",
        },
      ],
      hints: [
        "Compute the extra latency: 675 − 500 ms.",
        "Divide the extra latency by the focused single-task baseline (500 ms) and multiply by 100.",
      ],
      solution: [
        "RT increase = {{675 - 500 = 175}} ms.",
        "Percentage switching cost = {{(175 / 500) * 100 = 35%}}.",
      ],
    },
    {
      id: "7-hl-extensions-quiz-q09",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Outline",
      guideRef: "hl-culture-emic-etic",
      strategy: "Concise 2-mark cultural explanation",
      marks: 2,
      question:
        "Outline **one** finding from Hong et al. (2000) and state what it demonstrates about how culture influences cognition. [2 marks]",
      hints: [
        "Recall the visual primes (icons) and the ambiguous animated fish task.",
        "Link the shift in attributions to bicultural frame-switching as a dynamic schema.",
      ],
      modelAnswer:
        "When Chinese-American biculturals were shown American icons, they interpreted a lone fish swimming ahead of a group using dispositional attributions (leading), whereas Chinese icons triggered situational attributions (being chased). This demonstrates bicultural frame-switching, showing culture operates as dynamic, context-activated cognitive schemas rather than a fixed trait.",
      markScheme: [
        {
          point: "Accurate finding linking American vs Chinese cultural primes to dispositional vs situational attributions on the fish task.",
          keywords: ["dispositional", "situational", "fish", "icons"],
        },
        {
          point: "Explicit conceptual takeaway: bicultural frame-switching / culture acts as dynamic, context-activated schemas.",
          keywords: ["frame-switching", "frame switching", "dynamic", "schema"],
        },
      ],
      commonError: "Describing the fish task without connecting it to dynamic bicultural frame-switching.",
    },
    {
      id: "7-hl-extensions-quiz-q10",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      guideRef: "hl-synthesizing-extensions",
      strategy: "Cross-extension 4-mark synthesis",
      marks: 4,
      question:
        "Explain how **one** biological mechanism and **one** cognitive mechanism work together to sustain compulsive checking of gamified smartphone apps. [4 marks]",
      hints: [
        "Biological: link unpredictable alerts or mystery chests to mesolimbic dopamine Reward Prediction Error (+RPE) and 'wanting'.",
        "Cognitive: connect controlling streak cues to SDT external regulation or Ward's attentional salience / inhibitory drain.",
      ],
      modelAnswer:
        "Biologically, unpredictable likes and mystery bonus chests generate positive Reward Prediction Errors in the VTA to nucleus accumbens mesolimbic dopamine pathway (Schultz et al., 1997), driving intense cue-triggered incentive salience ('wanting') even after hedonic 'liking' fades (Berridge & Robinson, 1998). Cognitively, salient notifications capture central-executive attention and impose ongoing inhibitory drain (Ward et al., 2017), while controlling daily streak counters shift users toward external or introjected regulation on the Self-Determination Theory continuum, keeping users checking compulsively out of fear of breaking a streak rather than genuine enjoyment.",
      markScheme: [
        {
          point: "Names and accurately describes the biological mesolimbic dopamine RPE / incentive salience ('wanting') mechanism.",
          keywords: ["dopamine", "prediction error", "mesolimbic", "wanting", "salience"],
        },
        {
          point: "Links unpredictable app rewards (likes, mystery chests, alerts) explicitly to triggering that neural craving.",
          keywords: ["unpredictable", "variable", "chest", "cue", "vta", "accumbens"],
        },
        {
          point: "Names and explains a relevant cognitive mechanism (SDT external/introjected regulation, overjustification, or Ward attentional drain).",
          keywords: ["external", "introjected", "overjustification", "executive", "working memory", "salient"],
        },
        {
          point: "Clearly synthesizes how both mechanisms reinforce compulsive checking beyond mere enjoyment.",
          keywords: ["streak", "enjoyment", "liking", "inhibit", "compulsive", "reinforce"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor:
            "Basic or partial explanation addressing only one approach accurately, or stating dopamine/SDT loosely without linking to gamified app mechanisms.",
          indicators: ["Calls dopamine a simple 'pleasure chemical'", "Misses either the biological or cognitive mechanism"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor:
            "Clear, accurate integration of both a biological (mesolimbic RPE / wanting) and a cognitive (SDT regulation / Ward attentional salience) mechanism explaining sustained app checking.",
          indicators: ["Distinguishes 'wanting' / +RPE accurately", "Synthesizes biological and cognitive layers coherently"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "7-hl-extensions-p1",
      title: "Practice Paper 1 · Culture & Motivation HL Applications",
      level: "HL",
      questions: [
        {
          id: "7-hl-extensions-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "hl-culture-emic-etic",
          strategy: "WEIRD over-representation factor",
          question:
            "A social-cognition review contains 300 participants, of whom 270 come from WEIRD nations. Relative to the 12% global WEIRD population share, calculate the **WEIRD over-representation factor** (give a decimal to 1 d.p.).",
          answer: { type: "number", value: 7.5, tolerance: 0.05, display: "7.5" },
          traps: [
            {
              spec: { type: "number", value: 90 },
              feedback: "90% is the WEIRD share of the sample. Divide 90% by the 12% global population share to get the over-representation factor.",
            },
            {
              spec: { type: "number", value: 9 },
              feedback: "9 is the ratio of WEIRD to non-WEIRD participants (270 ÷ 30), not the over-representation relative to humanity's 12% WEIRD share.",
            },
          ],
          hints: [
            "First find the WEIRD percentage of the sample: (270 ÷ 300) × 100.",
            "Divide that percentage by 12% to obtain the over-representation factor.",
          ],
          solution: [
            "WEIRD percentage = {{(270 / 300) * 100 = 90%}}.",
            "Over-representation factor = {{90 / 12 = 7.5}}×.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "hl-culture-emic-etic",
          strategy: "Berry's cross-cultural bias label",
          question:
            "Researchers export a Western parenting questionnaire unchanged to rural Ghana and score strict directive guidance as 'low warmth'. Name the two-word term from Berry's framework describing this uncritical export of a local instrument as universal.",
          answer: {
            type: "text",
            accept: ["imposed etic", "an imposed etic", "imposed-etic"],
            display: "Imposed etic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["derived etic", "emic"] },
              feedback: "A derived etic synthesizes validated local emic studies; exporting one culture's tool unchanged is an imposed etic.",
            },
          ],
          hints: [
            "It pairs a verb meaning 'forced onto another context' with 'etic'.",
          ],
          solution: [
            "Exporting one culture's measurement scale directly without local adaptation is an **imposed etic**.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-culture-emic-etic",
          strategy: "Non-WEIRD participant count",
          question:
            "An international journal issue publishes data from 800 participants across 10 studies, of whom 85% come from WEIRD countries. How many participants come from **non-WEIRD** countries?",
          answer: { type: "number", value: 120, display: "120" },
          traps: [
            {
              spec: { type: "number", value: 680 },
              feedback: "680 is the number of WEIRD participants (85% of 800). Subtract from 800 to find the non-WEIRD count.",
            },
            {
              spec: { type: "number", value: 15 },
              feedback: "15% is the percentage of non-WEIRD participants — now calculate 15% of 800.",
            },
          ],
          hints: [
            "Find the non-WEIRD percentage first: 100% − 85% = 15%.",
            "Calculate 15% of 800 participants.",
          ],
          solution: [
            "Non-WEIRD share = {{100% - 85% = 15%}}.",
            "Non-WEIRD count = {{0.15 * 800 = 120}} participants.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-culture-emic-etic",
          strategy: "Group-to-individual reasoning error",
          question:
            "Name the two-word logical error committed when someone assumes a country's average Hofstede Individualism score automatically describes the personality of every individual citizen from that nation.",
          answer: {
            type: "text",
            accept: ["ecological fallacy", "the ecological fallacy"],
            display: "Ecological fallacy",
          },
          hints: [
            "In cross-cultural methodology, this fallacy confuses aggregate ('ecological') group means with individual traits.",
            "The second word is 'fallacy'.",
          ],
          solution: [
            "Projecting an aggregate national mean directly onto an individual commits the **ecological fallacy**.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-culture-emic-etic",
          strategy: "Cultural neuroscience brain region (Zhu et al., 2007)",
          question:
            "In Zhu et al.'s (2007) cultural neuroscience fMRI study, which specific prefrontal brain region activated comparably for **both self and mother** in Chinese participants but distinctively for **self** in Western participants? (Full name or 4-letter abbreviation.)",
          answer: {
            type: "text",
            accept: ["mPFC", "medial prefrontal cortex", "ventral medial prefrontal cortex", "vmPFC"],
            display: "medial prefrontal cortex (mPFC)",
          },
          hints: [
            "It sits along the inner midline of the frontal lobe and handles self-referential judgement.",
            "Its common abbreviation is four letters starting with 'm'.",
          ],
          solution: [
            "Zhu et al. (2007) found overlapping **medial prefrontal cortex (mPFC)** activation for self and mother in Chinese participants.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Crowding-out of intrinsic drive (Lepper et al., 1973)",
          question:
            "When promising an expected, tangible gold-star certificate for an already enjoyable art task causes children's later voluntary drawing time to fall sharply, what is this motivational phenomenon called?",
          answer: {
            type: "text",
            accept: ["overjustification effect", "overjustification", "the overjustification effect", "crowding out", "motivation crowding out"],
            display: "Overjustification effect",
          },
          hints: [
            "The name reflects giving an external 'justification' on top of an already sufficient intrinsic enjoyment.",
            "Studied classically by Lepper, Greene, and Nisbett (1973).",
          ],
          solution: [
            "Undermining existing intrinsic enjoyment with expected controlling rewards is the **overjustification effect**.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Percentage drop in free-choice engagement",
          question:
            "In a classroom replication of Lepper et al. (1973), free-choice painting time declined from a baseline of 45 minutes to 27 minutes after expected vouchers were withdrawn. Calculate the **percentage decrease** in free-choice painting time.",
          answer: { type: "number", value: 40, display: "40%" },
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "18 minutes is the absolute decrease. Divide 18 by the 45-minute baseline and multiply by 100.",
            },
            {
              spec: { type: "number", value: 60 },
              feedback: "60% is the percentage of time *remaining* (27 ÷ 45). The question asks for the percentage *decrease*.",
            },
          ],
          hints: [
            "Calculate the reduction in minutes: 45 − 27.",
            "Divide 18 by the baseline of 45 and multiply by 100.",
          ],
          solution: [
            "Decrease = {{45 - 27 = 18}} minutes.",
            "Percentage decrease = {{(18 / 45) * 100 = 40%}}.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "SDT Regulation Continuum",
          question:
            "A student revises piano scales solely because she would feel deep shame and guilt if she failed to practise — even though nobody is threatening punishment or offering cash. Which specific stage on Deci and Ryan's **SDT continuum** does this illustrate?",
          answer: {
            type: "text",
            accept: ["introjected regulation", "introjected", "introjection"],
            display: "Introjected regulation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["external regulation", "external"] },
              feedback: "External regulation requires outside rewards or punishments; internal guilt and ego pressure define introjected regulation.",
            },
          ],
          hints: [
            "It sits between External regulation and Identified regulation on the SDT continuum.",
            "External pressure has been swallowed inward as guilt, shame, or conditional ego pride.",
          ],
          solution: [
            "Acting to avoid internal guilt or protect fragile self-esteem represents **introjected regulation**.",
          ],
        },
        {
          id: "7-hl-extensions-p1-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Quantitative Reward Prediction Error (RPE)",
          question:
            "Using the model `RPE = R_actual − R_expected`, a primate has learned that a chime reliably predicts 10 drops of fruit juice, but on a probe trial only 4 drops are delivered. Calculate the **numerical value** (including sign) of the Reward Prediction Error.",
          answer: { type: "number", value: -6, display: "−6" },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "Check the sign! Actual reward (4) is *less* than expected (10), producing a negative RPE.",
            },
          ],
          hints: [
            "Substitute R_actual = 4 and R_expected = 10 into RPE = R_actual − R_expected.",
            "Keep the negative sign to indicate firing dips below baseline.",
          ],
          solution: [
            "{{RPE = 4 - 10 = -6}} drops (a negative RPE causing VTA dopamine firing to dip below baseline).",
          ],
        },
        {
          id: "7-hl-extensions-p1-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Distinguish",
          guideRef: "hl-culture-emic-etic",
          strategy: "Clear conceptual contrast (2 marks)",
          marks: 2,
          question:
            "Distinguish between **enculturation** and **bicultural frame-switching** in the context of globalization. [2 marks]",
          hints: [
            "Define enculturation as the gradual lifelong acquisition of heritage cultural norms.",
            "Contrast this with bicultural frame-switching as rapid, cue-triggered shifting between two internalized cultural knowledge networks.",
          ],
          modelAnswer:
            "Enculturation is the gradual, lifelong learning and internalization of the norms, values, and behaviours of one's heritage culture from family and community. By contrast, bicultural frame-switching is the rapid, situation-dependent activation of one of two already-internalized cultural schemas in response to immediate environmental cues (such as icons or language in Hong et al., 2000).",
          markScheme: [
            {
              point: "Accurately characterizes enculturation as gradual lifelong internalization of heritage cultural norms.",
              keywords: ["lifelong", "heritage", "norms", "internaliz"],
            },
            {
              point: "Clearly contrasts frame-switching as rapid, cue-triggered shifting between two cultural schemas.",
              keywords: ["rapid", "cue", "two", "schema", "hong", "switch"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p1-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "hl-culture-emic-etic",
          strategy: "Linking WEIRD bias to validity (3 marks)",
          marks: 3,
          question:
            "Explain how **WEIRD sampling bias** (Henrich et al., 2010) threatens the validity of psychological theories claiming to describe human universals. [3 marks]",
          hints: [
            "State what WEIRD stands for and the 12% vs 96% skew.",
            "Explain *why* WEIRD samples are often behavioural outliers (e.g. Müller-Lyer carpentered world or analytic vs holistic reasoning).",
            "Name the specific validity threats: population validity and construct validity (imposed etic).",
          ],
          modelAnswer:
            "Henrich et al. (2010) showed that Western, Educated, Industrialized, Rich, and Democratic populations represent only 12% of humanity yet make up 96% of participants in top journals, severely restricting population validity. Crucially, WEIRD participants are frequently psychological outliers — for example, showing extreme susceptibility to the Müller-Lyer optical illusion compared to San foragers due to carpentered visual ecologies. Generalizing such findings uncritically creates an imposed etic that undermines cross-cultural construct validity.",
          markScheme: [
            {
              point: "Unpacks WEIRD and identifies the stark 12% global share vs 96% journal sample skew.",
              keywords: ["western", "educated", "96", "12"],
            },
            {
              point: "Explains that WEIRD groups are often statistical outliers with a concrete empirical example (e.g. Müller-Lyer, Ultimatum Game, self-construal).",
              keywords: ["outlier", "müller", "muller", "san", "forager", "carpentered", "ultimatum"],
            },
            {
              point: "Explicitly links the skew to threats to population validity and/or imposed-etic construct validity.",
              keywords: ["population validity", "construct validity", "imposed etic", "generaliz"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p1-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Biological dissociation (4 marks)",
          marks: 4,
          question:
            "Explain the biological role of the **mesolimbic dopamine pathway** in motivation, distinguishing between **Reward Prediction Error** and **'wanting' vs 'liking'**. [4 marks]",
          hints: [
            "Trace the anatomical pathway: VTA → nucleus accumbens (NAc) → prefrontal cortex.",
            "Explain Schultz et al. (1997): +RPE bursts for unexpected rewards/cues, 0 RPE for predicted rewards, −RPE dips when omitted.",
            "Distinguish Berridge & Robinson (1998): dopamine = incentive salience ('wanting'), opioid hotspots = hedonic pleasure ('liking').",
          ],
          modelAnswer:
            "The mesolimbic pathway projects dopamine neurons from the ventral tegmental area (VTA) to the nucleus accumbens (NAc) and prefrontal cortex. Schultz et al. (1997) showed this circuit encodes Reward Prediction Error: neurons fire phasic bursts to unexpected rewards and predictive cues (+RPE), remain at baseline for fully expected rewards, and dip below baseline when an expected reward is omitted (−RPE). Complementing this, Berridge and Robinson (1998) demonstrated that dopamine specifically powers incentive salience ('wanting' or cue-driven craving), whereas separate opioid and endocannabinoid hotspots mediate sensory pleasure ('liking'). Together, these findings refute the simplistic 'pleasure chemical' myth and explain why compulsive pursuit persists even when enjoyment fades.",
          markScheme: [
            {
              point: "Identifies the anatomical mesolimbic circuit (VTA projecting to nucleus accumbens / prefrontal cortex).",
              keywords: ["vta", "ventral tegmental", "nucleus accumbens", "nac"],
            },
            {
              point: "Accurately explains Schultz's Reward Prediction Error (+RPE unexpected/cue burst, flat expected, −RPE omitted dip).",
              keywords: ["schultz", "unexpected", "omitted", "dip", "cue"],
            },
            {
              point: "Accurately explains Berridge & Robinson's dissociation between dopamine-driven 'wanting' (incentive salience) and opioid-mediated 'liking' (pleasure).",
              keywords: ["berridge", "incentive salience", "opioid", "pleasure", "hedonic"],
            },
            {
              point: "Synthesizes the significance for motivation (refuting the pleasure myth / explaining craving without enjoyment).",
              keywords: ["craving", "compulsive", "myth", "enjoyment", "pursuit"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not meet any descriptor below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Describes dopamine broadly in reward learning with limited neuroanatomical detail or blurred distinction between prediction error and wanting/liking.",
              indicators: ["Omits VTA/NAc circuitry", "Treats dopamine as direct hedonic pleasure"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Accurate, well-structured explanation tracing VTA–NAc circuitry, Schultz's RPE dynamics, and Berridge's wanting-vs-liking dissociation.",
              indicators: ["Specifies +RPE, 0 RPE, and −RPE clearly", "Separates dopamine incentive salience from opioid hedonic hotspots"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p1-q13",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Balanced evaluation of mindset theory (4 marks)",
          marks: 4,
          question:
            "Evaluate **Dweck's growth mindset theory** of achievement motivation using empirical evidence and at least **one** FA2027 Core Concept. [4 marks]",
          hints: [
            "Briefly define growth vs fixed mindset and mastery vs performance goals.",
            "Cite Sisk et al.'s (2018) meta-analysis (r ≈ 0.10, d ≈ 0.08 overall, yet stronger effects for at-risk / lower-SES students).",
            "Anchor critique in Measurement (small practical effect size) and/or Responsibility (not replacing funding with effort slogans).",
          ],
          modelAnswer:
            "Dweck proposed that learners holding a growth mindset view intelligence as malleable and adopt mastery goals, persisting better after setbacks than fixed-mindset learners focused on performance validation. A strength of the theory is its clear cognitive mechanism and low-cost scalability in classrooms. However, from a Measurement perspective, Sisk et al.'s (2018) meta-analysis across 273 studies (N > 365,000) found a weak average link with grades (r ≈ 0.10) and tiny overall intervention effects (d ≈ 0.08), showing early claims were overstated. Crucially, benefits were meaningfully stronger for academically at-risk and lower-SES pupils; therefore, ethical Responsibility requires pairing mindset support with structural educational resources rather than blaming under-resourced students for systemic barriers.",
          markScheme: [
            {
              point: "Accurately outlines growth vs fixed mindset and mastery vs performance goal orientation.",
              keywords: ["malleable", "mastery", "fixed", "performance"],
            },
            {
              point: "Provides quantitative replication nuance via Sisk et al. (2018) showing small overall correlation/effect size.",
              keywords: ["sisk", "meta-analysis", "0.10", "0.08", "small"],
            },
            {
              point: "Notes key moderating nuance (larger gains for academically at-risk or lower-SES students).",
              keywords: ["at-risk", "at risk", "lower-ses", "ses", "disadvantaged"],
            },
            {
              point: "Integrates an explicit FA2027 Core Concept critique (Measurement practical significance or Responsibility against individualizing poverty).",
              keywords: ["measurement", "responsibility", "structural", "systemic", "resources"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not meet any descriptor below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Describes growth vs fixed mindset accurately but offers generic or unsupported evaluation without replication data or Core Concept grounding.",
              indicators: ["No meta-analytic evidence", "Assertion-only critique"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Balanced, evidence-based evaluation citing Sisk et al. (2018) effect-size nuances and applying Measurement and/or Responsibility incisively.",
              indicators: ["Distinguishes tiny overall effect from at-risk subgroup gains", "Links explicitly to structural Responsibility"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Discuss",
          guideRef: "hl-culture-emic-etic",
          strategy: "Cultural neuroscience + bicultural switching (6 marks)",
          marks: 6,
          question:
            "Discuss how research in **cultural neuroscience** and **bicultural frame-switching** challenges static, essentialist views of culture. [6 marks]",
          hints: [
            "Define essentialism / ecological fallacy (treating nationality as a fixed inner trait).",
            "Integrate Biological evidence: Zhu et al. (2007) mPFC overlap & Chiao et al. (2009) showing endorsed cultural values — not mere passport nationality — predict neural processing.",
            "Integrate Cognitive-Sociocultural evidence: Hong et al. (2000) experimental priming causing rapid attribution shifts.",
            "Evaluate via Change (neuroplasticity), Causality (correlational fMRI vs randomized priming), and Measurement (fMRI small samples / reverse inference).",
          ],
          modelAnswer:
            "Static essentialism treats culture as a rigid label tied to nationality, often sliding into the ecological fallacy of projecting national Hofstede averages onto individuals. Cultural neuroscience directly bridges biology and culture while showing plasticity: Zhu et al. (2007) found Chinese participants recruited the medial prefrontal cortex (mPFC) similarly for self and mother, whereas Western participants reserved mPFC uniquely for self. Extending this, Chiao et al. (2009) demonstrated that individually endorsed individualistic vs collectivistic values predicted mPFC activation patterns above mere nationality, underscoring within-group diversity and neuroplastic Change. Complementing fMRI evidence, Hong et al. (2000) randomly exposed Chinese-American biculturals to Chinese or American icons and shifted their fish-task causal attributions between situational and dispositional frames within minutes. Methodologically, Hong et al.'s randomized priming offers strong Causality compared to correlational cross-national brain scans, while fMRI studies face Measurement limitations including small university samples, high cost, and artificial scanner settings. Together, both research lines prove culture is a dynamic, embodied cognitive-neural system shaped by context and globalization rather than an immutable national essence.",
          markScheme: [
            {
              point: "Defines static essentialism / ecological fallacy clearly as the target of critique.",
              keywords: ["ecological fallacy", "hofstede", "nationality", "static"],
            },
            {
              point: "Accurately applies Zhu et al. (2007) mPFC self-vs-mother neural finding.",
              keywords: ["zhu", "mpfc", "medial prefrontal", "mother"],
            },
            {
              point: "Integrates Chiao et al. (2009) showing endorsed cultural values predict neural patterns beyond nationality.",
              keywords: ["chiao", "endorsed", "within-group", "individualistic"],
            },
            {
              point: "Accurately applies Hong et al. (2000) experimental priming and bicultural frame-switching on the fish task.",
              keywords: ["hong", "icons", "fish", "situational", "dispositional"],
            },
            {
              point: "Evaluates Causality (randomized priming vs correlational cross-national neuroimaging).",
              keywords: ["causality", "random", "correlational", "priming"],
            },
            {
              point: "Evaluates Measurement / Change (fMRI small samples/artificiality, neuroplasticity, globalization).",
              keywords: ["measurement", "scanner", "plasticity", "change", "globalization"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Limited description of one study or general statements about culture without linking to neural or dynamic cognitive evidence.",
              indicators: ["Describes Hofstede only", "No empirical fMRI or priming evidence"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Accurate explanation of both cultural neuroscience and frame-switching studies with some evaluation, though methodological depth or concept links remain uneven.",
              indicators: ["Cites Zhu and Hong accurately", "Brief critique of fMRI or ecological fallacy"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor:
                "Focused, multi-approach HL discussion synthesizing Zhu/Chiao and Hong to dismantle essentialism, with sharp evaluation via Causality, Measurement, and Change.",
              indicators: ["Explicitly contrasts correlational fMRI with experimental priming", "Links Chiao to avoiding the ecological fallacy"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "To what extent",
          guideRef: "hl-motivation-reward-sdt",
          strategy: "Culture × SDT universalism debate (6 marks)",
          marks: 6,
          question:
            "To what extent is **Self-Determination Theory's** emphasis on Autonomy universally applicable across diverse cultural contexts? [6 marks]",
          hints: [
            "Outline SDT's claim that Autonomy, Competence, and Relatedness are universal psychological needs, citing Lepper et al. (1973) on controlling rewards.",
            "Present the cultural challenge: Iyengar & Lepper (1999) Anglo-American vs Asian-American anagram study and Yu & Yang's IOAM vs SOAM.",
            "Present the SDT synthesis reply: Autonomy means volitional endorsement, not isolated independence.",
            "Evaluate using Perspective (emic/etic), Bias (WEIRD origin of SDT), and avoid the ecological fallacy.",
          ],
          modelAnswer:
            "Deci and Ryan's Self-Determination Theory (SDT) asserts that Autonomy, Competence, and Relatedness are universal basic psychological needs, supported by Western experiments such as Lepper et al. (1973) showing controlling expected rewards undermine intrinsic drawing. However, cross-cultural research challenges an imposed-etic reading of Autonomy as solo personal choice. In Iyengar and Lepper's (1999) experiment, Anglo-American children showed peak motivation when choosing anagrams themselves, whereas Asian-American children performed best and stayed most motivated when a trusted mother or in-group peer chose — aligning with Yu and Yang's Socially Oriented Achievement Motivation (SOAM) rather than Individual-Oriented Achievement Motivation (IOAM). Yet SDT theorists convincingly counter that Autonomy denotes volitional endorsement rather than isolated independence: Asian-American children willingly embraced trusted maternal guidance, harmonizing Autonomy with Relatedness while still rejecting coercive outsider control (experimenter choice). From a Perspective and Bias lens, early SDT studies relied heavily on WEIRD samples, risking construct bias if Autonomy is operationalized solely as individual choice, while cultural comparisons must likewise avoid the ecological fallacy of assuming every Asian student rejects personal choice. Overall, Autonomy appears broadly applicable across cultures as felt volition, but its behavioural expression is powerfully moderated by cultural norms.",
          markScheme: [
            {
              point: "Explains SDT's universal claim regarding Autonomy, Competence, Relatedness (and overjustification via Lepper/Deci).",
              keywords: ["deci", "competence", "relatedness", "lepper", "controlling"],
            },
            {
              point: "Accurately presents Iyengar & Lepper's (1999) cross-cultural challenge (personal vs trusted mother/peer choice).",
              keywords: ["iyengar", "mother", "asian-american", "anglo-american", "anagram"],
            },
            {
              point: "Connects findings to Yu & Yang's IOAM vs SOAM cultural achievement distinction.",
              keywords: ["soam", "ioam", "socially oriented", "yu"],
            },
            {
              point: "Presents SDT's nuanced synthesis distinguishing volitional endorsement from isolated independence.",
              keywords: ["volition", "endorse", "independence", "synerg", "harmon"],
            },
            {
              point: "Applies Core Concept evaluation (WEIRD Bias / imposed etic in operationalization AND avoiding ecological fallacy).",
              keywords: ["weird", "imposed etic", "ecological fallacy", "bias", "perspective"],
            },
            {
              point: "Reaches a clear, qualified 'to what extent' conclusion balancing universal volition with cultural moderation.",
              keywords: ["extent", "moderated", "overall", "broadly", "expression"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Describes SDT or cultural differences superficially with a one-sided conclusion and minimal study evidence.",
              indicators: ["Equates Autonomy purely with working alone", "No cross-cultural study cited"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Contrasts SDT with Iyengar & Lepper (1999) accurately, though the volition-vs-independence reconciliation or Core Concept critique is underdeveloped.",
              indicators: ["Accurately summarizes Iyengar & Lepper", "Limited methodological evaluation"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor:
                "Nuanced, balanced 'to what extent' judgement integrating Lepper, Iyengar & Lepper, IOAM/SOAM, volitional endorsement, and WEIRD/ecological-fallacy evaluation.",
              indicators: ["Distinguishes Autonomy from Independence sharply", "Delivers explicit qualified judgement"],
            },
          ],
        },
      ],
    },
    {
      id: "7-hl-extensions-p2",
      title: "Practice Paper 2 · Technology, AI & Cross-Extension HL Synthesis",
      level: "HL",
      questions: [
        {
          id: "7-hl-extensions-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "hl-technology-cognition-social",
          strategy: "Task-switching RT % cost",
          question:
            "In a task-switching trial, a participant responds in 400 ms on focused single-task items and 540 ms when toggling between two screens. Calculate the **percentage reaction-time switching cost**.",
          answer: { type: "number", value: 35, display: "35%" },
          traps: [
            {
              spec: { type: "number", value: 140 },
              feedback: "140 ms is the raw delay. Divide by the focused baseline (400 ms) and multiply by 100.",
            },
            {
              spec: { type: "number", value: 25.9, tolerance: 0.2 },
              feedback: "Divide by the baseline single-task RT (400 ms), not the switching RT (540 ms).",
            },
          ],
          hints: [
            "Find the increase in ms: 540 − 400.",
            "Divide 140 by 400, then multiply by 100.",
          ],
          solution: [
            "Increase = {{540 - 400 = 140}} ms.",
            "Percentage cost = {{(140 / 400) * 100 = 35%}}.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "hl-technology-cognition-social",
          strategy: "Sparrow et al. (2011) mechanism",
          question:
            "Relying on smartphones, search engines, or cloud folders to store facts externally so internal working memory is freed is known by what two-word cognitive term?",
          answer: {
            type: "text",
            accept: ["cognitive offloading", "transactive memory"],
            display: "Cognitive offloading",
          },
          hints: [
            "The first word is 'cognitive'; the second describes moving load off the mind onto an external tool.",
          ],
          solution: [
            "Delegating memory or mental storage to external digital devices is called **cognitive offloading** (forming a digital transactive memory system).",
          ],
        },
        {
          id: "7-hl-extensions-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-technology-cognition-social",
          strategy: "Brain-drain % working-memory reduction",
          question:
            "In a replication of Ward et al. (2017), students averaged 60 points on a working-memory test with their silenced phone in another room, vs 51 points with their silenced phone face-down on the desk. Calculate the **percentage decrease** in working-memory score.",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "9 points is the raw drop. Divide 9 by the other-room baseline (60) and multiply by 100.",
            },
            {
              spec: { type: "number", value: 17.6, tolerance: 0.2 },
              feedback: "Use the baseline score (60, phone in another room) as the denominator.",
            },
          ],
          hints: [
            "Find the point drop: 60 − 51 = 9.",
            "Compute (9 ÷ 60) × 100.",
          ],
          solution: [
            "Point drop = {{60 - 51 = 9}} points.",
            "Percentage decrease = {{(9 / 60) * 100 = 15%}}.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-technology-cognition-social",
          strategy: "Suler (2004) digital social mechanism",
          question:
            "Name the psychological effect described by Suler (2004) in which anonymity, invisibility, and asynchronicity lower social restraints online, leading to either heightened openness or cyberbullying.",
          answer: {
            type: "text",
            accept: ["online disinhibition", "online disinhibition effect", "the online disinhibition effect", "disinhibition effect"],
            display: "Online disinhibition effect",
          },
          hints: [
            "It describes the loosening of normal social 'inhibitions' in digital spaces.",
            "A three-word phrase starting with 'online'.",
          ],
          solution: [
            "Suler (2004) termed this the **online disinhibition effect** (comprising benign and toxic disinhibition).",
          ],
        },
        {
          id: "7-hl-extensions-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-technology-cognition-social",
          strategy: "Variance explained R² from Pearson r",
          question:
            "A large-scale adolescent survey finds a correlation of `r = −0.05` between daily screen time and well-being. Calculate the **percentage of variance** (`R² × 100%`) in well-being explained by screen time (give an exact decimal).",
          answer: { type: "number", value: 0.25, tolerance: 0.005, display: "0.25%" },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "You multiplied |r| by 100 without squaring r first! Compute (−0.05)² × 100.",
            },
            {
              spec: { type: "number", value: 0.0025 },
              feedback: "0.0025 is the decimal proportion R². Multiply by 100 to express it as a percentage.",
            },
          ],
          hints: [
            "Square the correlation coefficient first: (−0.05)² = 0.0025.",
            "Multiply 0.0025 by 100 to turn it into a percentage.",
          ],
          solution: [
            "{{R^2 = (-0.05)^2 = 0.0025}}.",
            "Percentage variance explained = {{0.0025 * 100 = 0.25%}}.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-technology-cognition-social",
          strategy: "Verduyn et al. (2015) usage mode",
          question:
            "In Verduyn et al.'s (2015) typology of social-media behaviour, silently browsing curated highlight reels without posting or messaging triggers upward social comparison and envy. Name the **one-word usage mode** (contrasted with 'active' use) describing this behaviour.",
          answer: {
            type: "text",
            accept: ["passive", "passive use", "passive social media use", "passive scrolling"],
            display: "Passive",
          },
          hints: [
            "Compare direct two-way social exchange against silent, one-way content consumption.",
            "It is the direct antonym of 'active' in Verduyn et al.'s (2015) framework.",
          ],
          solution: [
            "Silently consuming curated feeds without direct interaction is **passive** social-media use.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-technology-cognition-social",
          strategy: "Forward RT calculation from % cost",
          question:
            "A heavy media multitasker averages 600 ms per trial under single-task focus. Introducing rapid app switching adds a **30%** reaction-time cost. Calculate the participant's new average reaction time in **milliseconds**.",
          answer: { type: "number", value: 780, display: "780 ms" },
          traps: [
            {
              spec: { type: "number", value: 180 },
              feedback: "180 ms is the added penalty. Add it onto the 600 ms baseline to get the total reaction time.",
            },
            {
              spec: { type: "number", value: 630 },
              feedback: "30% of 600 ms is 180 ms, not 30 ms!",
            },
          ],
          hints: [
            "Find 30% of 600 ms.",
            "Add that penalty to the 600 ms single-task baseline.",
          ],
          solution: [
            "Penalty = {{0.30 * 600 = 180}} ms.",
            "Switching RT = {{600 + 180 = 780}} ms.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-synthesizing-extensions",
          strategy: "FA2027 Core Concept diagnosis",
          question:
            "A cross-sectional survey finds a negative correlation between heavy gaming hours and GCSE grades, and headlines immediately declare gaming *ruins* academic attainment while ignoring pre-existing ADHD or home stress. Which **single** FA2027 Core Concept is most directly violated by this headline?",
          answer: {
            type: "text",
            accept: ["causality"],
            display: "Causality",
          },
          hints: [
            "Recall the six FA2027 Core Concepts: Bias, Causality, Change, Measurement, Perspective, Responsibility.",
            "Inferring direct cause-and-effect from correlational data ignores reverse directionality and third variables.",
          ],
          solution: [
            "Treating a cross-sectional correlation as proof of cause-and-effect directly violates the Core Concept of **Causality**.",
          ],
        },
        {
          id: "7-hl-extensions-p2-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-synthesizing-extensions",
          strategy: "FA2027 Core Concept diagnosis — Temporal Validity",
          question:
            "A policymaker cites a 2010 study of desktop message boards to regulate 2027 generative-AI companions, ignoring how rapidly platform affordances have evolved. Which **single** FA2027 Core Concept specifically highlights this temporal-validity gap?",
          answer: {
            type: "text",
            accept: ["change"],
            display: "Change",
          },
          hints: [
            "Recall the six FA2027 Core Concepts: Bias, Causality, Change, Measurement, Perspective, Responsibility.",
            "Which concept tracks transformation over time, lifespan shifts, and rapid technological evolution?",
          ],
          solution: [
            "Ignoring how rapidly digital ecosystems evolve over time directly engages the Core Concept of **Change** (temporal validity).",
          ],
        },
        {
          id: "7-hl-extensions-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Outline",
          guideRef: "hl-technology-cognition-social",
          strategy: "Concise 2-mark replication critique",
          marks: 2,
          question:
            "Outline the main finding of **Sparrow, Liu, and Wegner (2011)** regarding saved vs erased trivia files, and state **one** critical evaluation point from later replication work. [2 marks]",
          hints: [
            "Describe what participants remembered better when files were saved (folder locations vs raw facts).",
            "Mention Camerer et al.'s (2018) mixed replication of Experiment 1.",
          ],
          modelAnswer:
            "Sparrow et al. (2011) found that participants who expected typed trivia statements to remain saved on a computer recalled fewer facts themselves yet remembered which digital folders stored them (transactive memory). However, Camerer et al.'s (2018) multi-lab replication failed to cleanly reproduce the original Study 1 computer-priming reaction-time effect, urging caution about the robustness of subtle priming measures.",
          markScheme: [
            {
              point: "Accurately states saved-file participants recalled fewer facts but better retrieval locations / folder names.",
              keywords: ["folder", "location", "fewer", "transactive", "where"],
            },
            {
              point: "Notes Camerer et al. (2018) mixed/failed replication of Experiment 1 or limits to generalizability.",
              keywords: ["camerer", "replicat", "priming", "2018"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p2-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "hl-technology-cognition-social",
          strategy: "Causality & Measurement critique of Ophir et al. (3 marks)",
          marks: 3,
          question:
            "Explain the primary finding of **Ophir, Nass, and Wagner (2009)** on media multitasking and evaluate it using **Causality** and **Measurement**. [3 marks]",
          hints: [
            "State how Heavy Media Multitaskers (HMMs) performed relative to Light Media Multitaskers (LMMs) on distractor filtering and task switching.",
            "Causality: quasi-experimental grouping of pre-existing habits cannot exclude self-selection.",
            "Measurement: self-reported Media Multitasking Index (MMI) vs laboratory artificial rectangle/letter tasks.",
          ],
          modelAnswer:
            "Ophir et al. (2009) found that Heavy Media Multitaskers performed significantly worse than Light Media Multitaskers at filtering irrelevant distractors and suffered larger task-switching latencies, debunking the myth that constant multitasking builds superior attentional control. Regarding Causality, because participants were grouped by pre-existing habits rather than randomly allocated, reverse causality remains plausible — distractible individuals may gravitate toward multitasking. Regarding Measurement, the self-reported Media Multitasking Index is vulnerable to estimation bias, and abstract lab rectangle-filtering tasks have limited ecological validity.",
          markScheme: [
            {
              point: "Accurately reports HMMs filtered distractors worse / suffered greater task-switching costs than LMMs.",
              keywords: ["worse", "distractor", "filter", "switching", "heavy"],
            },
            {
              point: "Evaluates Causality: quasi-experimental/correlational pre-existing groups cannot rule out reverse causality or third variables.",
              keywords: ["quasi", "correlational", "reverse", "self-select", "random"],
            },
            {
              point: "Evaluates Measurement: self-report MMI bias or low ecological validity of artificial lab cognitive tasks.",
              keywords: ["self-report", "mmi", "ecological", "artificial", "rectangle"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "hl-technology-cognition-social",
          strategy: "Algorithmic bias & AI Responsibility (4 marks)",
          marks: 4,
          question:
            "Analyse **two** ethical **Responsibility** risks posed by deploying generative AI or algorithmic screening tools in healthcare or education, linking to **Bias** and **Measurement**. [4 marks]",
          hints: [
            "Risk 1: WEIRD training-data Bias producing imposed-etic errors or demographic disparity in non-Western populations.",
            "Risk 2: Privacy/informed consent erosion OR cognitive deskilling through uncritical offloading of student reasoning.",
            "Tie both risks cleanly back to Measurement validity and ethical Responsibility.",
          ],
          modelAnswer:
            "First, AI diagnostics and automated essay scorers trained predominantly on WEIRD English-language datasets embed cultural and demographic Bias into Measurement: algorithms may misread somatic distress idioms or culturally distinct rhetorical styles as pathology or low ability, creating an automated imposed etic that harms equity. Second, opaque commercial AI tutors and mental-health chatbots raise acute Responsibility concerns around youth data privacy, informed consent, and cognitive deskilling — when students uncritically offload reasoning to generative AI instead of engaging in retrieval practice, long-term schema consolidation can weaken. Ethical deployment therefore requires diverse non-WEIRD validation audits, transparent data governance, and human oversight.",
          markScheme: [
            {
              point: "Identifies training-data / WEIRD algorithmic Bias producing inequitable cross-cultural or demographic errors.",
              keywords: ["weird", "training", "demographic", "imposed etic", "somatic"],
            },
            {
              point: "Connects algorithmic misclassification explicitly to construct / Measurement invalidity.",
              keywords: ["construct", "misclassif", "misread", "valid", "audit"],
            },
            {
              point: "Identifies a second distinct ethical Responsibility risk (youth privacy/consent, surveillance, or cognitive deskilling via uncritical offloading).",
              keywords: ["privacy", "consent", "deskill", "offload", "surveillance"],
            },
            {
              point: "Proposes concrete Responsibility safeguards (diverse validation, transparency, human oversight).",
              keywords: ["safeguard", "transparent", "oversight", "diverse", "governance"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not meet any descriptor below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "States general worries about AI (e.g. 'cheating' or 'errors') without linking to WEIRD training bias, Measurement validity, or psychological mechanisms.",
              indicators: ["Vague media opinion", "No link to WEIRD bias or offloading"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Sharp, well-grounded analysis of two distinct AI risks explicitly integrating Bias, Measurement, and ethical Responsibility safeguards.",
              indicators: ["Links WEIRD training data to imposed-etic misclassification", "Includes concrete governance/oversight criteria"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p2-q13",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Compare and contrast",
          guideRef: "hl-technology-cognition-social",
          strategy: "Twenge vs Orben & Przybylski synthesis (6 marks)",
          marks: 6,
          question:
            "Compare and contrast the conclusions and methodologies of **Twenge et al. (2018)** and **Orben and Przybylski (2019)** regarding digital technology and adolescent well-being. [6 marks]",
          hints: [
            "Similarity: Both analyse huge archival adolescent self-report survey datasets (correlational, limiting Causality).",
            "Difference 1 (Conclusions): Twenge emphasizes post-2012 depression trends & displacement hypothesis; Orben finds tiny ~0.4% variance explained (~potatoes).",
            "Difference 2 (Methodology): Twenge selected specific survey pairings, whereas Orben ran Specification Curve Analysis across hundreds of thousands of models to curb researcher Bias.",
            "Synthesize via Verduyn et al. (2015) active vs passive Measurement nuance.",
          ],
          modelAnswer:
            "Both Twenge et al. (2018) and Orben and Przybylski (2019) draw on massive archival self-report survey datasets of UK and US adolescents, meaning both rely on largely cross-sectional correlational data that cannot independently establish Causality and suffer from retrospective screen-time Measurement error. However, they diverge sharply in analytical strategy and conclusions. Twenge et al. highlighted post-2012 rises in adolescent depressive symptoms coinciding with smartphone adoption, attributing harm to the displacement hypothesis (screens crowding out sleep and face-to-face socializing). By contrast, Orben and Przybylski applied Specification Curve Analysis across 355,358 adolescents, testing hundreds of thousands of theoretically defensible variable combinations to eliminate researcher analytical Bias; they found digital technology accounted for only ~0.4% of variance in well-being — comparable to eating potatoes and dwarfed by bullying or sleep loss. Ultimately, reconciling these contrasting interpretations requires shifting Measurement away from crude total hours toward qualitative usage modes: Verduyn et al. (2015) showed passive upward-comparison browsing lowers mood while active social connection does not.",
          markScheme: [
            {
              point: "Identifies key methodological similarity (large archival adolescent self-report surveys; correlational limits on Causality).",
              keywords: ["archival", "self-report", "correlational", "causality", "cross-sectional"],
            },
            {
              point: "Accurately outlines Twenge et al.'s (2018) conclusion (post-2012 trends and displacement hypothesis).",
              keywords: ["2012", "displacement", "sleep", "depressive"],
            },
            {
              point: "Accurately outlines Orben & Przybylski's (2019) method (Specification Curve Analysis curbing researcher Bias).",
              keywords: ["specification curve", "355", "bias", "combinations", "cherry"],
            },
            {
              point: "Accurately states Orben's practical effect-size benchmark (~0.4% variance / eating potatoes / dwarfed by bullying).",
              keywords: ["0.4", "potato", "bullying", "variance"],
            },
            {
              point: "Critiques Measurement limitations shared by raw screen-time hours (retrospective recall / undifferentiated construct).",
              keywords: ["measurement", "retrospective", "crude", "hours"],
            },
            {
              point: "Synthesizes the debate using Verduyn et al. (2015) active vs passive social-media use nuance.",
              keywords: ["verduyn", "passive", "active", "comparison"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Summarizes one study loosely or lists opinions on social media without genuine comparison of methodology or effect sizes.",
              indicators: ["Omits Specification Curve Analysis", "No clear similarity and difference structure"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Identifies clear differences between Twenge and Orben with accurate key findings, though methodological similarities or Verduyn synthesis remain brief.",
              indicators: ["States ~0.4% and displacement accurately", "Limited critique of correlational Causality"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor:
                "Rigorous, balanced comparison contrasting analytical Bias, Causality, and practical vs statistical Measurement, synthesized cleanly via active vs passive use.",
              indicators: ["Explicitly compares shared correlational limits alongside contrasting methods", "Integrates Verduyn et al. seamlessly"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Examine",
          guideRef: "hl-synthesizing-extensions",
          strategy: "Tech × Culture × Online Disinhibition (6 marks)",
          marks: 6,
          question:
            "Examine how **online disinhibition** and **algorithmic echo chambers** interact with cultural norms and cognitive biases to reshape social behaviour. [6 marks]",
          hints: [
            "Explain Suler's (2004) Online Disinhibition (anonymity, invisibility, asynchronicity → benign vs toxic).",
            "Explain how engagement-maximizing recommender algorithms amplify confirmation bias and out-group outrage.",
            "Integrate Culture: how high vs low Power Distance or harmony norms interact with anonymity (e.g. safe disclosure vs cyber-aggression), avoiding the ecological fallacy.",
            "Evaluate via Causality (bidirectional polarization), Change (algorithm evolution), and Responsibility (platform design ethics).",
          ],
          modelAnswer:
            "Suler's (2004) Online Disinhibition Effect shows that dissociative anonymity, invisibility of facial cues, and asynchronicity lower everyday social restraints, generating both benign disinhibition (candid help-seeking in stigma-heavy environments) and toxic disinhibition (hostility and cyberbullying). Simultaneously, engagement-maximizing recommender algorithms exploit human confirmation bias and emotional arousal by repeatedly surfacing identity-validating or outrage-inducing posts, forming polarized echo chambers. Culturally, these affordances interact dynamically with local norms: in high power-distance or strong face-saving contexts, anonymity can empower benign help-seeking that feels risky offline, while equally eroding communal accountability when toxic mobs form — though analysts must avoid the ecological fallacy by recognizing huge individual variation within any society. Evaluating the evidence requires attending to Causality (users with stronger partisan attitudes also seek out biased feeds, creating bidirectional loops), rapid Change (2027 short-form AI feeds differ markedly from early text forums), and platform Responsibility to audit algorithmic amplification of harm rather than treating toxicity as purely individual moral failure.",
          markScheme: [
            {
              point: "Accurately explains Suler's (2004) mechanisms (anonymity, invisibility, asynchronicity) and distinguishes benign vs toxic disinhibition.",
              keywords: ["suler", "anonymity", "invisibility", "benign", "toxic"],
            },
            {
              point: "Explains how engagement-maximizing algorithms amplify confirmation bias and high-arousal outrage.",
              keywords: ["confirmation bias", "engagement", "outrage", "polariz", "arousal"],
            },
            {
              point: "Integrates cultural moderation (e.g. power distance / face-saving shaping benign disclosure vs accountability).",
              keywords: ["power distance", "face-saving", "harmony", "stigma", "accountability"],
            },
            {
              point: "Explicitly avoids cultural essentialism / notes the ecological fallacy.",
              keywords: ["ecological fallacy", "within", "individual variation", "essentialis"],
            },
            {
              point: "Evaluates Causality (bidirectional self-selection + algorithmic loop) and/or Change (platform evolution).",
              keywords: ["bidirectional", "self-select", "causality", "change", "temporal"],
            },
            {
              point: "Applies ethical Responsibility to platform algorithm design and governance.",
              keywords: ["responsibility", "platform", "audit", "governance", "amplif"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor:
                "Describes cyberbullying or echo chambers generally without grounding in Suler's mechanisms, confirmation bias, or cultural interaction.",
              indicators: ["Mentions only toxic disinhibition", "No cultural integration"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor:
                "Accurate explanation of Suler's disinhibition and algorithmic confirmation bias with some reference to culture or ethics, though critical depth is partial.",
              indicators: ["Distinguishes benign and toxic disinhibition", "Mentions algorithms and confirmation bias"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor:
                "Cohesive HL examination weaving Suler, algorithmic confirmation bias, nuanced cultural moderation (avoiding ecological fallacy), and sharp Causality/Responsibility critique.",
              indicators: ["Balances benign vs toxic effects across norms", "Identifies bidirectional loops and platform Responsibility"],
            },
          ],
        },
        {
          id: "7-hl-extensions-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Discuss",
          guideRef: "hl-synthesizing-extensions",
          strategy: "Full 9-mark FA2027 HL 3×3×6 Synthesis Essay",
          marks: 9,
          question:
            "Discuss how **digital technology** interacts with **motivation** and **culture** to influence adolescent learning or well-being. Reference all **three** core approaches and at least **three** FA2027 Core Concepts. [9 marks]",
          hints: [
            "Plan with the 3×3×6 grid: Biological (mesolimbic dopamine +RPE / wanting vs liking + sleep displacement), Cognitive (SDT Autonomy/Competence/overjustification + Ward Brain Drain / Ophir switching costs), Sociocultural (Iyengar & Lepper / SOAM vs IOAM / WEIRD design bias / Orben & Verduyn nuance).",
            "Weave at least three Core Concepts explicitly: Bias (WEIRD tech/research samples), Causality (Ward/Lepper randomized experiments vs Ophir/Twenge correlations), Measurement (Orben's 0.4% vs active/passive use), Change (platform evolution), Responsibility (ethical humane EdTech).",
            "Conclude with an integrated synthesis rather than treating each approach as an isolated paragraph.",
          ],
          modelAnswer:
            "Adolescent engagement with gamified learning platforms and social apps can only be fully understood by integrating Biological, Cognitive, and Sociocultural mechanisms across Culture, Motivation, and Technology. Biologically, platforms deploying variable-ratio bonus chests, likes, and unpredictable notifications trigger phasic VTA-to-nucleus-accumbens dopamine Reward Prediction Errors (Schultz et al., 1997), driving cue-triggered incentive salience ('wanting') even when hedonic 'liking' declines (Berridge & Robinson, 1998); late-night alerts can additionally displace restorative sleep. Cognitively, Deci and Ryan's Self-Determination Theory explains how controlling daily streak pressures and expected badges risk the overjustification effect (Lepper et al., 1973) by thwarting Autonomy, whereas informational mastery feedback sustains Competence. Simultaneously, Ward et al.'s (2017) randomized 'Brain Drain' experiment proved that merely keeping a silenced smartphone on a study desk drains central-executive working memory, while Ophir et al. (2009) showed heavy media multitaskers suffer larger rule-switching costs — though unlike Ward's randomized Causality, Ophir's quasi-experimental design cannot rule out self-selection. Socioculturally, digital incentives do not land identically worldwide: Iyengar and Lepper (1999) and Yu and Yang's IOAM-vs-SOAM distinction suggest solo leaderboards may fit individualist preferences whereas teacher- or peer-endorsed group quests align with Relatedness and Socially Oriented Achievement Motivation — while warning against WEIRD Bias (Henrich et al., 2010: 96% samples) and the ecological fallacy of stereotyping students by nationality. Critically, Measurement rigour demands rejecting screen-time panic: Orben and Przybylski's (2019) Specification Curve Analysis (N > 355,000) found raw tech hours explain only ~0.4% of adolescent well-being variance, whereas Verduyn et al. (2015) showed passive upward social comparison harms mood far more than active messaging. Finally, rapid technological Change limits temporal validity of older studies, placing clear ethical Responsibility on educators and designers to curb manipulative dark-pattern streaks, adopt classroom phone-free spaces, and validate global EdTech across diverse non-WEIRD youth.",
          markScheme: [
            {
              point: "Integrates accurate Biological mechanism (mesolimbic dopamine +RPE / Schultz and/or wanting-vs-liking / Berridge).",
              keywords: ["dopamine", "schultz", "prediction error", "berridge", "wanting"],
            },
            {
              point: "Integrates Cognitive motivation mechanism (SDT Autonomy/Competence, overjustification / Lepper et al., 1973).",
              keywords: ["autonomy", "overjustification", "lepper", "competence", "self-determination"],
            },
            {
              point: "Integrates Cognitive technology mechanism (Ward et al. Brain Drain working memory and/or Ophir multitasking switching costs).",
              keywords: ["ward", "working memory", "brain drain", "ophir", "switching"],
            },
            {
              point: "Integrates Sociocultural/Cultural moderation (Iyengar & Lepper, IOAM vs SOAM, Relatedness across norms).",
              keywords: ["iyengar", "soam", "ioam", "relatedness", "socially oriented"],
            },
            {
              point: "Applies Bias critique (WEIRD sampling/design bias via Henrich et al. and/or ecological fallacy).",
              keywords: ["weird", "henrich", "ecological fallacy", "bias"],
            },
            {
              point: "Applies Causality critique contrasting randomized experiments (Ward/Lepper) with correlational/quasi-experimental designs (Ophir/Twenge).",
              keywords: ["causality", "randomized", "quasi-experimental", "self-selection", "correlational"],
            },
            {
              point: "Applies Measurement critique distinguishing Orben & Przybylski's ~0.4% raw-hours effect size from Verduyn's active vs passive use.",
              keywords: ["orben", "0.4", "specification curve", "verduyn", "passive"],
            },
            {
              point: "Applies Change (temporal validity of rapidly evolving platforms) and/or ethical Responsibility (curbing manipulative streaks, non-WEIRD validation).",
              keywords: ["responsibility", "temporal", "dark-pattern", "manipulative", "validate"],
            },
            {
              point: "Demonstrates genuine cross-extension synthesis linking Culture, Motivation, and Technology coherently into an overarching judgement.",
              keywords: ["integrat", "simultaneously", "leaderboard", "quests", "phone-free"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–3",
              marks: [1, 3],
              descriptor:
                "Descriptive or narrow response covering only one or two approaches with general claims, sparse empirical support, and minimal Core Concept evaluation.",
              indicators: ["Treats extensions separately without synthesis", "No quantitative or methodological evaluation"],
            },
            {
              band: "4–6",
              marks: [4, 6],
              descriptor:
                "Sound explanation spanning all three approaches with accurate studies (e.g. Ward, Lepper, Iyengar, Orben) and relevant Core Concepts, though synthesis or evaluation is uneven.",
              indicators: ["Covers Biological, Cognitive, Sociocultural clearly", "Includes 2–3 Core Concepts with moderate depth"],
            },
            {
              band: "7–9",
              marks: [7, 9],
              descriptor:
                "Sustained, authoritative HL synthesis seamlessly uniting Culture, Motivation, and Technology across all three approaches with rigorous Bias, Causality, Measurement, Change, and Responsibility analysis.",
              indicators: ["Contrasts experimental vs correlational Causality sharply", "Balances effect-size realism (Orben/Verduyn) with ethical Responsibility"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "7-hl-extensions-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "hl-culture-emic-etic",
      strategy: "Multi-step WEIRD pool recomputation",
      question:
        "A cross-cultural meta-analysis initially pools 400 participants, of whom **90%** come from WEIRD nations. To improve population validity, the team adds a new non-WEIRD dataset of **100 participants** from Ghana and Indonesia. Relative to the **12%** global WEIRD population share, calculate the **new WEIRD over-representation factor** after adding this dataset.",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 72 },
          feedback: "72% is the new WEIRD percentage (360 ÷ 500). Divide 72% by 12% to obtain the over-representation factor.",
        },
        {
          spec: { type: "number", value: 7.5 },
          feedback: "7.5× was the *original* over-representation factor (90% ÷ 12%) before adding the 100 non-WEIRD participants.",
        },
      ],
      hints: [
        "First find the exact count of WEIRD participants in the initial pool: 90% of 400 = 360.",
        "Add the 100 non-WEIRD participants to get the new total sample size: 400 + 100 = 500.",
        "Compute the new WEIRD percentage (360 ÷ 500 × 100), then divide by 12%.",
      ],
      solution: [
        "Initial WEIRD participants = {{0.90 * 400 = 360}}.",
        "New total sample size = {{400 + 100 = 500}}.",
        "New WEIRD percentage = {{(360 / 500) * 100 = 72%}}.",
        "New over-representation factor = {{72 / 12 = 6}}× (reduced from 7.5× to 6.0×, yet still substantially skewed).",
      ],
    },
    {
      id: "7-hl-extensions-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "hl-technology-cognition-social",
      strategy: "Effect-size variance ratio (R² comparison)",
      diagram: `<svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing Pearson correlation magnitudes with adolescent well-being for three predictors in a mock specification curve dataset"><rect x="0" y="0" width="540" height="190" rx="10" fill="#ffffff"/><text x="270" y="24" font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1c1630">Correlation Magnitude (|r|) with Adolescent Well-Being (N = 280,000)</text><text x="20" y="64" font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#1c1630">Total Screen Hours</text><rect x="175" y="50" width="60" height="20" rx="4" fill="#7c3aed"/><text x="243" y="65" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#7c3aed">|r| = 0.05</text><text x="20" y="102" font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#1c1630">Wearing Glasses</text><rect x="175" y="88" width="72" height="20" rx="4" fill="#0d9488"/><text x="255" y="103" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#0d9488">|r| = 0.06</text><text x="20" y="140" font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#1c1630">Peer Bullying</text><rect x="175" y="126" width="240" height="20" rx="4" fill="#c2410c"/><text x="423" y="141" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#c2410c">|r| = 0.20</text><text x="20" y="174" font-family="system-ui,sans-serif" font-size="10.5" fill="#5b5375">All correlations p &lt; 0.001 due to large N. Remember: variance explained = r².</text></svg>`,
      question:
        "Using the chart above (modelled on Orben & Przybylski, 2019), calculate how many **times larger** the percentage of variance explained (`R²`) by **Peer Bullying** (`|r| = 0.20`) is compared to **Total Screen Hours** (`|r| = 0.05`).",
      answer: { type: "number", value: 16, display: "16" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "4 is the ratio of raw correlations (0.20 ÷ 0.05). Because variance explained scales as r², square both correlations first!",
        },
      ],
      hints: [
        "Convert each correlation |r| into variance explained: R² = r².",
        "Peer Bullying R² = (0.20)² = 0.04 (4.00%); Total Screen Hours R² = (0.05)² = 0.0025 (0.25%).",
        "Divide Bullying's R² by Screen Hours' R².",
      ],
      solution: [
        "Peer Bullying variance explained: {{(0.20)^2 = 0.04}} (4.00%).",
        "Total Screen Hours variance explained: {{(0.05)^2 = 0.0025}} (0.25%).",
        "Ratio = {{4.00 / 0.25 = 16}} times larger.",
      ],
      commonError: "Dividing raw r values (0.20 ÷ 0.05 = 4) instead of squaring them to compare R² variance explained.",
    },
    {
      id: "7-hl-extensions-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "hl-technology-cognition-social",
      strategy: "Compounded attentional-load percentage loss",
      question:
        "A student scores **75 points** on a working-memory task when her silenced phone is in another room. Placing the silenced phone face-down on the desk reduces her score by **12%**, and enabling live chat pop-ups reduces that desk score by a **further 25%**. Calculate the **overall percentage drop** from her original 75-point score.",
      answer: { type: "number", value: 34, display: "34%" },
      traps: [
        {
          spec: { type: "number", value: 37 },
          feedback: "Successive percentage drops compound rather than simply add (12% + 25% = 37% ignores that the 25% cut applies to the already-lowered desk score).",
        },
        {
          spec: { type: "number", value: 49.5 },
          feedback: "49.5 is the final working-memory score in points. Convert the drop (75 − 49.5) into a percentage of 75.",
        },
      ],
      hints: [
        "First reduce 75 by 12%: 75 × 0.88 = 66 points.",
        "Next reduce 66 by 25%: 66 × 0.75 = 49.5 points.",
        "Compute the total drop (75 − 49.5) as a percentage of 75 (or compute 1 − 0.88 × 0.75).",
      ],
      solution: [
        "Desk score = {{75 * 0.88 = 66}} points.",
        "Desk + pop-ups score = {{66 * 0.75 = 49.5}} points.",
        "Overall drop = {{75 - 49.5 = 25.5}} points → {{(25.5 / 75) * 100 = 34%}}.",
      ],
    },
    {
      id: "7-hl-extensions-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "hl-culture-emic-etic",
      strategy: "Designing a Derived-Etic Cross-Cultural Study (6 marks)",
      marks: 6,
      question:
        "A researcher wants to investigate academic stress across secondary students in Singapore, Finland, and Brazil without repeating **WEIRD sampling bias** or creating an **imposed etic**. Evaluate how combining **emic** and **derived-etic** methods strengthens **Measurement** and **Perspective**, while noting practical trade-offs. [6 marks]",
      hints: [
        "Explain Step 1 (Emic phase): local semi-structured interviews/focus groups in each country to capture culture-specific idioms of stress (e.g. family honour/tuition pressure vs solo perfectionism).",
        "Explain Step 2 (Derived-etic phase): identifying overlapping core indicators plus culturally adapted local items, guarding against Likert reference-group effects (Heine et al., 2002).",
        "Evaluate trade-offs: time/cost, reduced direct score comparability across locally adapted items, and avoiding the ecological fallacy across urban/SES subgroups inside each nation.",
      ],
      modelAnswer:
        "Beginning with an emic qualitative phase in Singapore, Finland, and Brazil — using local-language interviews and inductive thematic coding — allows researchers to uncover culture-specific stressors (such as family-oriented exam expectations vs individualistic performance anxiety) that a single Western questionnaire would miss. Synthesizing shared constructs across all three local datasets then builds a derived-etic instrument with markedly stronger construct validity (Measurement) and multi-cultural Perspective, avoiding the imposed-etic distortion criticized by Berry and Henrich et al. (2010). Pairing self-report scales with behavioural or physiological indicators (e.g. sleep logs or cortisol) also mitigates the reference-group effect (Heine et al., 2002) that distorts Likert means across nations. Nevertheless, rigorous derived-etic designs carry real trade-offs: multi-site local adaptation is costly and slow, locally unique items reduce exact statistical comparability across sites, and researchers must still sample across socioeconomic strata within each city to avoid the ecological fallacy of treating Singaporean, Finnish, or Brazilian youth as homogeneous national blocks.",
      markScheme: [
        {
          point: "Specifies a local emic qualitative phase capturing indigenous idioms/stressors inside each site.",
          keywords: ["interview", "qualitative", "idiom", "local", "thematic"],
        },
        {
          point: "Explains how synthesizing overlapping constructs builds a derived etic with superior construct validity.",
          keywords: ["construct validity", "overlap", "synthesiz", "berry", "henrich"],
        },
        {
          point: "Addresses Likert reference-group effects (Heine et al., 2002) via methodological triangulation (behavioural/physiological).",
          keywords: ["reference-group", "reference group", "heine", "triangulat", "likert"],
        },
        {
          point: "Evaluates practical trade-offs (time, resource cost, translation/expertise demands).",
          keywords: ["cost", "slow", "resource", "time"],
        },
        {
          point: "Evaluates statistical Measurement trade-off (locally adapted items reduce exact cross-site standardization/comparability).",
          keywords: ["comparab", "standardiz", "trade-off", "trade off"],
        },
        {
          point: "Notes within-country diversity / socioeconomic sampling to prevent the ecological fallacy.",
          keywords: ["ecological fallacy", "socioeconomic", "homogeneous", "within"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor:
            "Describes translating a questionnaire or simply 'asking people from three countries' without clearly separating emic and derived-etic stages.",
              indicators: ["Equates back-translation with derived etic", "No trade-offs discussed"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor:
            "Explains emic-to-derived-etic design clearly with relevant Measurement strengths, though reference-group bias or statistical trade-offs remain brief.",
          indicators: ["Clear two-stage logic", "Mentions cost/time trade-off"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor:
            "Sophisticated methodological evaluation combining emic discovery, derived-etic construct validity, reference-group mitigation, comparability trade-offs, and anti-ecological-fallacy sampling.",
          indicators: ["Cites Heine reference-group effect", "Balances comparability vs local depth accurately"],
        },
      ],
    },
    {
      id: "7-hl-extensions-ch-q05",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "hl-motivation-reward-sdt",
      strategy: "Neurobiology vs SDT reductionism debate (6 marks)",
      marks: 6,
      question:
        "Evaluate the claim that **human motivation can be fully explained by mesolimbic dopamine activity**. [6 marks]",
      hints: [
        "Acknowledge biological strengths: Schultz et al. (1997) RPE and Berridge & Robinson (1998) 'wanting' provide causal neural precision across species and explain compulsive cue-driven craving.",
        "Challenge biological reductionism using Cognitive SDT: why the *exact same* certificate lowers drawing when expected vs unexpected (Lepper et al., 1973) depends on cognitive appraisal of Autonomy.",
        "Challenge with Sociocultural evidence: Iyengar & Lepper (1999) mother-choice effect & Yu & Yang's SOAM show social meaning transforms reward value.",
        "Anchor critique in Perspective (reductionism vs biopsychosocial holism) and Measurement (animal electrophysiology generalization limits).",
      ],
      modelAnswer:
        "Neurobiological models demonstrate undeniable explanatory power: Schultz et al. (1997) proved that VTA-to-nucleus-accumbens dopamine firing computes precise Reward Prediction Errors (+RPE, 0 RPE, −RPE), while Berridge and Robinson (1998) showed dopamine powers incentive salience ('wanting') independently of opioid 'liking', clarifying compulsive gaming and addiction. However, claiming dopamine *fully* explains human motivation commits biological reductionism and narrows Perspective. First, animal electrophysiology raises cross-species Measurement and generalization limits when extrapolating to complex human goals. Second, cognitive appraisals determine whether an external cue motivates or demotivates: in Lepper et al. (1973), an identical gold-star certificate halved later free-choice drawing when expected (thwarting SDT Autonomy via the overjustification effect) yet preserved intrinsic motivation when unexpected — a meaning-driven reversal that dopamine firing alone cannot predict without cognitive evaluation. Third, sociocultural context reshapes reward value itself: Iyengar and Lepper (1999) showed Asian-American children peaked in motivation when choices were made by a trusted mother (aligning with Socially Oriented Achievement Motivation), whereas Anglo-American children peaked under personal choice. Consequently, mesolimbic dopamine is a necessary biological substrate for pursuit, but a complete account requires synthesizing neural dynamics with cognitive SDT needs and cultural meaning.",
      markScheme: [
        {
          point: "Validates biological contribution via Schultz et al. (1997) Reward Prediction Error and/or VTA–NAc circuitry.",
          keywords: ["schultz", "prediction error", "vta", "accumbens"],
        },
        {
          point: "Includes Berridge & Robinson's (1998) 'wanting' vs 'liking' distinction as a biological strength.",
          keywords: ["berridge", "wanting", "liking", "opioid", "salience"],
        },
        {
          point: "Identifies biological reductionism / Perspective limits and animal-model generalization critiques.",
          keywords: ["reductionism", "perspective", "animal", "generaliz", "species"],
        },
        {
          point: "Uses Cognitive SDT / Lepper et al. (1973) to show appraisal of expected vs unexpected rewards flips motivational outcomes.",
          keywords: ["lepper", "overjustification", "autonomy", "appraisal", "expected"],
        },
        {
          point: "Uses Sociocultural evidence (Iyengar & Lepper, 1999; SOAM) to show cultural meaning moderates what feels motivating.",
          keywords: ["iyengar", "mother", "soam", "cultural", "socially oriented"],
        },
        {
          point: "Reaches an integrated biopsychosocial conclusion rejecting 'fully explained' while retaining dopamine as necessary substrate.",
          keywords: ["necessary", "substrate", "biopsychosocial", "synthesiz", "complete"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor:
                "Simply agrees or disagrees with vague references to dopamine or intrinsic motivation without named studies or reductionism critique.",
          indicators: ["Treats dopamine as 'pleasure'", "No cognitive or cultural counter-evidence"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor:
            "Balances dopamine evidence with SDT or cultural evidence clearly, though animal-model limits or explicit Perspective critique remain partial.",
          indicators: ["Cites Schultz and Lepper accurately", "Identifies reductionism briefly"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor:
            "Rigorous multi-perspective evaluation uniting Schultz/Berridge strengths with Lepper cognitive appraisal, Iyengar cultural moderation, and explicit reductionism critique.",
          indicators: ["Shows how identical certificates flip motivation via cognitive meaning", "Reaches nuanced biopsychosocial verdict"],
        },
      ],
    },
    {
      id: "7-hl-extensions-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      guideRef: "hl-technology-cognition-social",
      strategy: "Experimental design + HL Core Concepts (8 marks)",
      marks: 8,
      question:
        "A university suspects that allowing students to use generative-AI summarizers during lectures reduces deep long-term retention compared to active note-taking, and that smartphone proximity worsens the gap. **Design** a controlled experiment to test this hypothesis, justifying your **Measurement**, **Causality** controls, ethical **Responsibility**, and cultural **Bias** safeguards. [8 marks]",
      hints: [
        "Define IV(s) cleanly (e.g. 2×2 or 3-group independent-measures design: AI summarizer vs active retrieval notes, and/or phone on desk vs phone in locker) and operationalize DV (delayed conceptual comprehension test after 48 hours, not just immediate recall).",
        "Causality controls: random allocation, standardized lecture video, identical study time, counterbalancing or blinding of essay graders.",
        "Measurement: pilot-tested comprehension rubric + inter-rater reliability + measuring baseline smartphone dependence (Ward et al., 2017).",
        "Ethics (Responsibility) & Culture (Bias): informed consent, equal post-study access to effective revision notes, recruiting culturally/linguistically diverse participants beyond a narrow WEIRD pool.",
      ],
      modelAnswer:
        "To test causal effects cleanly, use a 2 × 2 between-subjects randomized experiment (independent-measures design) manipulating Study Mode (active self-generated note-taking vs generative-AI lecture summarizer) and Smartphone Salience (silenced personal phone face-down on desk vs locked in an outer locker, modelled on Ward et al., 2017). Operationalize deep retention (DV) as scores on a 48-hour delayed conceptual-application and transfer quiz rather than immediate verbatim recall, preventing ceiling effects and capturing true consolidation. For Causality, randomly allocate N = 160 participants across the four cells, present an identical 20-minute standardized recorded lecture, equate total study duration, and use blind graders unaware of condition to prevent researcher expectancy bias. For Measurement rigour, verify inter-rater reliability (Cohen's kappa ≥ 0.80) on open-ended transfer items and administer a pre-test smartphone-dependence scale as a covariate, ensuring construct validity beyond crude 'screen time'. To minimize WEIRD Bias, stratify recruitment across diverse international and non-WEIRD student cohorts and verify linguistic clarity of lecture materials rather than assuming a narrow Western sample generalizes universally. Finally, uphold ethical Responsibility via written informed consent, right to withdraw without academic penalty, anonymized storage of AI prompt logs, and full debriefing supplying all participants with evidence-based study guides so no group suffers educational disadvantage.",
      markScheme: [
        {
          point: "Specifies a clear experimental design and manipulated IV(s) (AI summarizer vs active notes and smartphone desk vs locker).",
          keywords: ["independent", "between-subjects", "2 × 2", "2x2", "locker", "summarizer"],
        },
        {
          point: "Operationalizes the DV rigorously (delayed conceptual comprehension/transfer test after e.g. 24–48h).",
          keywords: ["delayed", "conceptual", "transfer", "quiz", "48"],
        },
        {
          point: "Justifies Causality via random allocation and standardized extraneous controls (identical video, equal duration).",
          keywords: ["random", "standardized", "identical", "duration", "allocate"],
        },
        {
          point: "Controls researcher/grader Bias via blind marking.",
          keywords: ["blind", "expectancy", "unaware"],
        },
        {
          point: "Strengthens Measurement via inter-rater reliability / rubric check and/or smartphone-dependence covariate.",
          keywords: ["inter-rater", "kappa", "covariate", "dependence", "construct"],
        },
        {
          point: "Addresses cultural/WEIRD Bias via diverse/stratified international recruitment and linguistic equivalence.",
          keywords: ["weird", "stratif", "diverse", "linguistic", "international"],
        },
        {
          point: "Addresses core participant ethics (informed consent, right to withdraw, anonymized AI data privacy).",
          keywords: ["consent", "withdraw", "anonym", "privacy"],
        },
        {
          point: "Includes equitable debriefing ensuring no group suffers educational harm from being in a less effective condition.",
          keywords: ["debrief", "disadvantage", "guides", "equitable"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor:
            "Outlines a vague comparison between AI and note-taking without clear IV/DV operationalization, randomization, or ethical/cultural safeguards.",
          indicators: ["No delayed retention measure", "Missing randomization or ethics"],
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor:
            "Workable experimental design with clear IV/DV and basic controls/ethics, though Measurement reliability, blind marking, or WEIRD Bias safeguards are underdeveloped.",
          indicators: ["Includes random allocation and consent", "Superficial treatment of cultural Bias or inter-rater reliability"],
        },
        {
          band: "6–8",
          marks: [6, 8],
          descriptor:
            "Comprehensive, publication-grade HL experimental design explicitly justifying Causality controls, delayed conceptual Measurement reliability, non-WEIRD Bias mitigation, and equitable Responsibility.",
          indicators: ["Includes blind grading + delayed transfer DV", "Protects educational equity and AI prompt privacy"],
        },
      ],
    },
    {
      id: "7-hl-extensions-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "To what extent",
      guideRef: "hl-synthesizing-extensions",
      strategy: "Extended HL synthesis: Cognitive offloading vs cognitive erosion (9 marks)",
      marks: 9,
      question:
        "To what extent does **digital technology** enhance rather than impair human cognition? Evaluate with reference to **cognitive offloading**, **attention**, **motivation**, and at least **three** FA2027 Core Concepts. [9 marks]",
      hints: [
        "Argue the 'enhances' side: adaptive transactive memory / cognitive offloading (Sparrow et al., 2011) frees limited working memory for higher-order synthesis; assistive EdTech & informational feedback can scaffold Competence (SDT).",
        "Argue the 'impairs' side: Ward et al. (2017) Brain Drain working-memory loss; Ophir et al. (2009) HMM distractor-filtering deficits; compulsive dopamine +RPE checking (Schultz / Berridge) fragmenting sustained focus.",
        "Evaluate rigorously via Change (Camerer et al., 2018 replication nuance + rapid AI evolution), Causality (Ward's randomized experiment vs Ophir's correlational grouping), Measurement (lab tasks vs real-world cognition; Orben's practical effect-size caution), and Bias (WEIRD college samples in Sparrow, Ward, and Ophir).",
        "Conclude with a conditional judgement: cognitive outcome depends on *design intent* and *metacognitive self-regulation*.",
      ],
      modelAnswer:
        "Digital technology neither uniformly upgrades nor uniformly degrades human cognition; instead, its cognitive impact hinges on whether tools act as deliberate external scaffolds or attention-fragmenting competitors. On the enhancement side, Sparrow, Liu, and Wegner (2011) conceptualized search engines and cloud storage as adaptive transactive memory systems: by engaging in cognitive offloading of low-level trivia, users can preserve finite working memory for creative synthesis, problem-solving, and cross-cultural collaboration. Motivationally, well-designed digital learning tools that provide timely informational feedback rather than controlling points can nurture SDT Competence and Autonomy (Deci & Ryan), accelerating mastery. Yet compelling evidence reveals acute cognitive impairments when devices intrude upon executive control. Ward et al.'s (2017) randomized experiment demonstrated that even a silent smartphone face-down on a desk imposes a 'Brain Drain', consuming central-executive capacity to suppress checking urges — an impulse biologically amplified by cue-triggered VTA–NAc dopamine Reward Prediction Errors (Schultz et al., 1997) and incentive salience ('wanting', Berridge & Robinson, 1998). Likewise, Ophir et al. (2009) found Heavy Media Multitaskers performed worse at filtering irrelevant stimuli and switching task rules. Evaluating these competing claims through FA2027 Core Concepts sharpens the verdict. Under Causality, Ward et al.'s random allocation confirms immediate attentional costs, whereas Ophir et al.'s quasi-experimental grouping cannot eliminate reverse causality (distractible people self-selecting into multitasking). Under Change and Measurement, Camerer et al.'s (2018) mixed replication of Sparrow's Study 1 cautions against overstating fragile priming effects, while artificial lab matrices and WEIRD undergraduate Bias (Henrich et al., 2010) limit generalization across older adults and non-WEIRD learners who rely on varied digital literacies. Echoing Orben and Przybylski's (2019) effect-size caution, the Responsibility for cognitive flourishing lies in intentional design and habit architecture: deliberate offloading paired with phone-free deep-work zones enhances cognition, whereas ambient variable-ratio interruptions erode it.",
      markScheme: [
        {
          point: "Explains cognitive enhancement via adaptive cognitive offloading / transactive memory (Sparrow et al., 2011).",
          keywords: ["sparrow", "transactive", "scaffold", "higher-order", "synthesis"],
        },
        {
          point: "Integrates positive motivational scaffolding (SDT Competence / informational feedback).",
          keywords: ["competence", "informational", "deci", "autonomy"],
        },
        {
          point: "Explains cognitive impairment via Ward et al. (2017) Brain Drain central-executive working-memory cost.",
          keywords: ["ward", "brain drain", "central-executive", "working memory", "desk"],
        },
        {
          point: "Integrates biological/motivational driver of distraction (dopamine RPE / Schultz or 'wanting' / Berridge) AND/OR Ophir multitasking costs.",
          keywords: ["schultz", "berridge", "wanting", "ophir", "multitask"],
        },
        {
          point: "Evaluates Causality cleanly (Ward randomized design vs Ophir quasi-experimental self-selection).",
          keywords: ["causality", "random", "quasi-experimental", "reverse"],
        },
        {
          point: "Evaluates Change via scientific replication self-correction (Camerer et al., 2018).",
          keywords: ["camerer", "replicat", "change", "2018"],
        },
        {
          point: "Evaluates Bias / Measurement (WEIRD student samples in Sparrow/Ward/Ophir, lab ecological validity, Orben effect-size nuance).",
          keywords: ["weird", "henrich", "ecological", "orben", "measurement"],
        },
        {
          point: "Applies Responsibility (humane design, intentional offloading vs ambient interruption / phone-free zones).",
          keywords: ["responsibility", "phone-free", "intentional", "habit", "ambient"],
        },
        {
          point: "Delivers a clear, conditional 'to what extent' judgement weighing enhancement against impairment.",
          keywords: ["hinges", "verdict", "extent", "conditional", "deliberate"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor:
            "One-sided essay claiming technology simply harms or helps brains, with limited named studies and minimal methodological evaluation.",
          indicators: ["No balance between offloading and distraction", "No replication or causality critique"],
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor:
            "Balanced discussion citing Sparrow, Ward, and Ophir with relevant motivation links and 2–3 Core Concepts, though synthesis or replication nuance is uneven.",
          indicators: ["Covers both enhancement and impairment accurately", "Mentions Causality and Bias briefly"],
        },
        {
          band: "7–9",
          marks: [7, 9],
          descriptor:
            "Authoritative, conditional HL judgement weaving Sparrow/Camerer, Ward, Ophir, dopamine/SDT motivation, and explicit Causality, Change, Measurement, Bias, and Responsibility analysis.",
          indicators: ["Integrates Camerer (2018) replication nuance", "Delivers sharp design-dependent synthesis verdict"],
        },
      ],
    },
    {
      id: "7-hl-extensions-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "hl-synthesizing-extensions",
      strategy: "Unseen HL Paper 3-style cross-extension scenario evaluation (9 marks)",
      marks: 9,
      question:
        "A global health startup launches an English-language AI wellness app targeting teenagers in Tokyo, London, and Nairobi. The app sends random 'mystery wellness coin' push notifications every evening, scores emotional distress using a US undergraduate anxiety inventory, and tracks total daily screen hours as its sole well-being metric. **Evaluate** this intervention across **Culture**, **Motivation**, and **Technology**, applying at least **four** FA2027 Core Concepts. [9 marks]",
      hints: [
        "Culture (Bias & Measurement): US undergraduate inventory exported unchanged to Tokyo and Nairobi = imposed etic + WEIRD training/scale bias (Henrich et al., 2010), plus Likert reference-group effects (Heine et al., 2002) and ignoring somatic/emic distress idioms.",
        "Motivation (Biological & Cognitive): random mystery coins hijack mesolimbic dopamine +RPE ('wanting' vs 'liking') and risk SDT overjustification (Lepper et al., 1973) by turning self-care into controlling external regulation, while solo coin tracking ignores SOAM / Relatedness (Iyengar & Lepper, 1999).",
        "Technology (Measurement, Causality & Change): evening notifications risk Ward-style attentional drain & sleep displacement; tracking raw daily screen hours fails Measurement validity (Orben & Przybylski ~0.4% vs Verduyn active/passive distinction); pre-post app metrics lack randomized Causality.",
        "Responsibility: ethical duty to co-design locally validated derived-etic tools, protect adolescent data privacy, and replace manipulative variable-ratio alerts with autonomy-supportive care.",
      ],
      modelAnswer:
        "Although scalable digital wellness tools could expand youth mental-health access, this startup's rollout exhibits compounding flaws across Culture, Motivation, and Technology. Culturally, deploying an English-language US undergraduate anxiety checklist directly in Tokyo and Nairobi exemplifies WEIRD sampling Bias (Henrich et al., 2010) and Berry's imposed etic: it compromises Measurement construct validity by overlooking local emic or somatic idioms of distress and ignoring cross-cultural Likert reference-group effects (Heine et al., 2002), while assuming uniform cultural fit risks the ecological fallacy. Motivationally, delivering random 'mystery wellness coins' exploits mesolimbic VTA–NAc dopamine Reward Prediction Errors (Schultz et al., 1997) and incentive salience ('wanting' over genuine 'liking', Berridge & Robinson, 1998). Under Self-Determination Theory, attaching expected tangible gamified coins to well-being habits triggers the overjustification effect (Lepper et al., 1973), shifting healthy self-care from autonomous value to controlling external regulation; meanwhile, individual coin tracking neglects Relatedness and Socially Oriented Achievement Motivation (Iyengar & Lepper, 1999; Yu & Yang) that often support adolescent coping. Technologically, evening push notifications risk circadian sleep displacement and Ward et al.'s (2017) smartphone 'Brain Drain' during homework, while using raw daily screen hours as the sole outcome metric fails Measurement rigour — Orben and Przybylski (2019) showed total screen hours explain only ~0.4% of teen well-being variance, whereas Verduyn et al. (2015) proved active social support vs passive upward comparison is what truly matters. Without a randomized control group, any observed mood shift also lacks Causality due to placebo or maturation effects, and rapid platform Change demands iterative re-validation. Ultimately, ethical Responsibility requires replacing manipulative variable-ratio coins with autonomy-supportive reflection, auditing AI models on diverse non-WEIRD youth to build a derived-etic tool, and safeguarding minors' sensitive emotional data.",
      markScheme: [
        {
          point: "Diagnoses WEIRD Bias and Berry's imposed etic in exporting a US undergraduate inventory to Tokyo and Nairobi.",
          keywords: ["weird", "imposed etic", "henrich", "emic", "somatic"],
        },
        {
          point: "Notes cross-cultural Measurement threats (construct validity / Heine reference-group effect / ecological fallacy).",
          keywords: ["construct validity", "reference-group", "heine", "ecological fallacy"],
        },
        {
          point: "Analyses mystery coins biologically via mesolimbic dopamine +RPE (Schultz) and 'wanting' vs 'liking' (Berridge).",
          keywords: ["dopamine", "schultz", "prediction error", "berridge", "wanting"],
        },
        {
          point: "Analyses motivational crowding-out via SDT overjustification (Lepper) and controlling external regulation.",
          keywords: ["overjustification", "lepper", "autonomy", "external regulation", "self-determination"],
        },
        {
          point: "Links solo coin design to cultural Motivation / Relatedness & SOAM (Iyengar & Lepper / Yu & Yang).",
          keywords: ["relatedness", "soam", "iyengar", "socially oriented"],
        },
        {
          point: "Critiques evening alerts via Ward Brain Drain / sleep displacement.",
          keywords: ["ward", "brain drain", "sleep", "displacement"],
        },
        {
          point: "Critiques total screen hours via Measurement (Orben ~0.4% variance vs Verduyn active/passive nuance).",
          keywords: ["orben", "0.4", "verduyn", "passive", "active"],
        },
        {
          point: "Evaluates Causality (lack of randomized control / placebo) and/or Change (rapid digital evolution).",
          keywords: ["causality", "control group", "placebo", "change"],
        },
        {
          point: "Formulates concrete ethical Responsibility reforms (derived-etic local validation, youth data privacy, removing manipulative alerts).",
          keywords: ["responsibility", "derived-etic", "derived etic", "privacy", "manipulative"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–3",
          marks: [1, 3],
          descriptor:
            "Identifies surface flaws (e.g. 'English won't work in Tokyo' or 'coins are distracting') with minimal psychological theory or Core Concept grounding.",
          indicators: ["Common-sense critique only", "Covers fewer than two extensions systematically"],
        },
        {
          band: "4–6",
          marks: [4, 6],
          descriptor:
            "Solid evaluation spanning Culture, Motivation, and Technology with named studies and 2–3 Core Concepts, though synthesis or concrete derived-etic reforms remain uneven.",
          indicators: ["Applies WEIRD bias, SDT/dopamine, and Orben/Verduyn accurately", "Brief treatment of Causality or Responsibility"],
        },
        {
          band: "7–9",
          marks: [7, 9],
          descriptor:
            "Exemplary HL cross-extension critique integrating Culture, Motivation, and Technology with precise studies and 4–6 Core Concepts (Bias, Measurement, Causality, Change, Responsibility), ending with actionable ethical reforms.",
          indicators: ["Links imposed etic + dopamine +RPE + SDT crowding-out + Orben/Verduyn seamlessly", "Proposes derived-etic, privacy-protecting alternatives"],
        },
      ],
    },
  ],
};
