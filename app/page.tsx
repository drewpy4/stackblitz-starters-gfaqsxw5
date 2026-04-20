"use client";
import React, { useState, useMemo } from "react";

const modules = [
  {
    id: "m1",
    title: "Sessions 2–5",
    subtitle: "Dimensional Reduction, Culture, Emotion, and Heuristics",
    lectures: [
      {
        id: "l2",
        title: "Lecture 2 — PCA, Factor Analysis, Big Five vs MBTI",
        studyTime: "18 min",
        importance: "High",
        difficulty: "Medium",
        overview: [
          "Dimensional reduction means reducing many correlated variables into a smaller number of meaningful dimensions while preserving the main variance–covariance structure.",
          "PCA creates orthogonal principal components from weighted linear combinations of original variables — the first captures maximum variance, each subsequent captures remaining variance.",
          "Exploratory Factor Analysis (EFA) assumes hidden latent traits underlie observed variables and separates common variance, unique variance, and error.",
          "The Big Five was derived using EFA and is dimensional and empirically grounded; MBTI is typological, categorical, and has weaker empirical support."
        ],
        concepts: [
          {
            heading: "PCA",
            bullets: [
              "Creates orthogonal principal components — each uncorrelated with the previous.",
              "First component captures maximum variance in the data.",
              "Descriptive geometric transformation — does not model latent causes.",
              "Focuses on total variance and does not distinguish signal from noise."
            ]
          },
          {
            heading: "Exploratory Factor Analysis",
            bullets: [
              "Assumes hidden latent traits influence observed variables.",
              "Separates common variance (shared), unique variance (per variable), and random error.",
              "Explains where variance comes from rather than only summarizing it.",
              "Used to develop the Big Five personality model from many trait adjectives."
            ]
          },
          {
            heading: "Scree Plot",
            bullets: [
              "X-axis = component number; Y-axis = eigenvalue (variance explained).",
              "Curve shows steep drop then flattening — retain components near the elbow.",
              "Used to determine how many components are meaningful to keep."
            ]
          },
          {
            heading: "Big Five vs MBTI",
            bullets: [
              "Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
              "Big Five is dimensional (continuous), empirically derived, high reliability and predictive validity.",
              "MBTI is based on Jung's typology — categorical, not derived from factor analysis.",
              "MBTI has weaker empirical support and lower test-retest reliability."
            ]
          }
        ],
        keyTakeaways: [
          "PCA = summarize and compress variance.",
          "EFA = model latent structure that generates variance.",
          "Big Five has far stronger empirical support than MBTI.",
          "Practical workflow: correlation matrix → PCA/EFA → scree plot → interpret loadings."
        ],
        workedExample: {
          prompt: "You have 20 correlated personality survey items. How do you simplify them?",
          steps: [
            "Build a correlation matrix across all 20 items.",
            "Decide: PCA (compression) or EFA (latent explanation)?",
            "Run chosen method and generate a scree plot.",
            "Identify the elbow — retain components up to that point.",
            "Interpret factor loadings to label what each dimension represents."
          ]
        },
        mistakes: [
          "Saying PCA finds true underlying causes — it only compresses variance.",
          "Confusing orthogonal components with latent traits.",
          "Treating MBTI as equally empirically supported as Big Five.",
          "Forgetting that EFA separates unique variance from common variance — PCA does not."
        ],
        practice: [
          {
            type: "short",
            question: "What is the key conceptual difference between PCA and EFA?",
            answer: "PCA compresses variance into components. EFA models hidden latent factors that generate shared variance across variables."
          },
          {
            type: "short",
            question: "Why is a scree plot useful?",
            answer: "It shows where adding components stops meaningfully increasing variance explained — the elbow marks how many to retain."
          },
          {
            type: "mcq",
            question: "Principal components are typically:",
            options: ["Correlated", "Orthogonal", "Categorical", "Random"],
            correctIndex: 1,
            answer: "Orthogonal — each component is uncorrelated with all others."
          },
          {
            type: "mcq",
            question: "Which model is categorical rather than dimensional?",
            options: ["Big Five", "EFA", "MBTI", "PCA"],
            correctIndex: 2,
            answer: "MBTI — it places people into discrete types, not on a continuum."
          }
        ]
      },
      {
        id: "l3",
        title: "Lecture 3 — Culture, Trust, and Coordination",
        studyTime: "15 min",
        importance: "High",
        difficulty: "Low",
        overview: [
          "Culture shapes expectations, coordination, and what feels normal — illustrated by the Ketchup Question showing how culture shapes even simple everyday choices.",
          "Culture creates similarities within groups and differences across groups, and can produce behavior that seems non-optimal from an outside perspective.",
          "Trust is a key economic variable — Kenneth Arrow argues economic transactions depend on mutual confidence.",
          "Cultural dimensions (hot/cold, individual/collective, tight/loose) can be measured statistically using PCA on World Values Survey data."
        ],
        concepts: [
          {
            heading: "Definitions of Culture",
            bullets: [
              "Tylor (1871): Culture is a complex whole — knowledge, belief, art, law, morals, customs.",
              "Boas (1911): Culture is the totality of mental and physical reactions to environment and others.",
              "Bourdieu: Habitus — durable dispositions that feel natural, transmitted socially without explicit teaching.",
              "Culture shapes perception and action without conscious planning."
            ]
          },
          {
            heading: "Cultural Dimensions",
            bullets: [
              "Hot vs. Cold (Levi-Strauss): Hot = change is normal; Cold = stability and tradition valued.",
              "Individualistic vs. Collectivistic (Markus & Kitayama): autonomy vs. interdependence.",
              "Tight vs. Loose: Strong norms and low deviance tolerance vs. weak norms and more variation.",
              "Holistic vs. Object-focused thinking (Nisbett): relationships/context vs. discrete entities."
            ]
          },
          {
            heading: "Trust",
            bullets: [
              "Arrow: Economic transactions rely on trust — lack of mutual confidence drives underdevelopment.",
              "Solow: Concepts like social capital must be measurable to be useful.",
              "World Values Survey measures trust: Do you think most people can be trusted?",
              "Trust levels vary widely — Sweden vs. Italy vs. Turkey show dramatically different levels."
            ]
          },
          {
            heading: "Culture as Coordination",
            bullets: [
              "Culture aligns expectations so people can cooperate without explicit negotiation.",
              "Inglehart used PCA on World Values Survey data to find two dimensions: secular/traditional and individual/collective.",
              "Culture is not just symbols — it is a coordination mechanism that shapes behavior and economic outcomes."
            ]
          }
        ],
        keyTakeaways: [
          "Culture is a coordination mechanism, not just symbols or food.",
          "Trust has measurable economic significance.",
          "Cultural dimensions can be derived statistically (Inglehart's PCA).",
          "Tight cultures have strong norms; loose cultures tolerate more variation."
        ],
        workedExample: {
          prompt: "Compare a tight culture and a loose culture in a public transit setting.",
          steps: [
            "Identify norm strength in each culture.",
            "Describe tolerance for deviance (e.g., talking loudly, eating on the train).",
            "Predict how bystanders would react to norm violations.",
            "Connect to broader coordination: tight = more predictable public behavior."
          ]
        },
        mistakes: [
          "Reducing culture to food or tradition only.",
          "Ignoring culture's role in coordination and economic exchange.",
          "Assuming trust is purely individual rather than also a societal property.",
          "Treating cultural categories as fixed — cultures shift over time."
        ],
        practice: [
          {
            type: "short",
            question: "What does Bourdieu mean by habitus?",
            answer: "Durable, socially shaped dispositions and practices that feel natural even when not explicitly taught."
          },
          {
            type: "short",
            question: "Why does Kenneth Arrow connect trust to economic development?",
            answer: "Economic transactions require mutual confidence. Without trust, the cost of exchange rises and development slows."
          },
          {
            type: "mcq",
            question: "Tight cultures are generally associated with:",
            options: ["Weak norms", "High tolerance for deviance", "Strong norms", "No coordination"],
            correctIndex: 2,
            answer: "Strong norms — tight cultures enforce behavioral consistency."
          }
        ]
      },
      {
        id: "l4",
        title: "Lecture 4 — Emotion, Emotional Intelligence, and Contagion",
        studyTime: "17 min",
        importance: "High",
        difficulty: "Medium",
        overview: [
          "Emotion sits at the intersection of personality and culture — it connects individual dispositions to shared social norms.",
          "Paul Ekman identified biologically universal emotions with distinct facial expressions across cultures: anger, fear, sadness, happiness, disgust, surprise, contempt.",
          "Emotional intelligence (EI) involves perceiving, understanding, and regulating emotion — it overlaps more with personality than with IQ.",
          "Emotional contagion spreads mood through groups and has measurable financial and performance consequences (Barsade: 4–6% market-adjusted EPS difference)."
        ],
        concepts: [
          {
            heading: "Universal Emotions (Ekman)",
            bullets: [
              "Anger, Fear, Sadness, Happiness, Disgust, Surprise, Contempt — cross-culturally consistent.",
              "Micro-expressions reveal emotion even when people try to hide it.",
              "Contempt is especially powerful: Gottman research shows it strongly predicts divorce and org dysfunction.",
              "Duchenne smile (genuine) activates eye muscles; non-Duchenne smile (fake) uses only the mouth."
            ]
          },
          {
            heading: "Caruso & Salovey — 6 EI Principles",
            bullets: [
              "Emotion is information — it signals important facts about people and situations.",
              "Emotions motivate adaptive behavior and can prevent harm.",
              "We cannot ignore emotion — suppression reduces memory performance (Baumeister).",
              "We cannot hide emotion well — emotional labor causes burnout (Hochschild).",
              "Decisions must incorporate emotion — mood affects cognitive processing (Bower, Isen).",
              "Emotions follow logical patterns — Plutchik's intensity continua."
            ]
          },
          {
            heading: "EI vs IQ",
            bullets: [
              "IQ: well-defined, psychometrically strong, predictive across domains.",
              "EI: more loosely defined, overlaps with personality (Agreeableness, Conscientiousness, Neuroticism).",
              "Theory of Mind — inferring others beliefs and desires — contributes to collective intelligence.",
              "Reading the Mind in the Eyes test measures emotion perception ability."
            ]
          },
          {
            heading: "Emotional Contagion & Teams",
            bullets: [
              "Barsade: Emotional tone of management teams affects earnings by 4–6% market-adjusted EPS.",
              "Jordan & Ashkanasy: High-EI teams adapt and recover faster than low-EI teams.",
              "Fredrickson broaden-and-build: positive emotions expand thinking; negative emotions improve focus.",
              "Emotional reappraisal (reframing) is more effective than emotional suppression.",
              "53% of people report expressing anger at work; only 19% report expressing joy."
            ]
          }
        ],
        keyTakeaways: [
          "Emotion is not irrational noise — it is information.",
          "Contempt is a critical warning signal in relationships and organizations.",
          "Emotional reappraisal beats suppression for performance.",
          "Emotional contagion shapes group dynamics and financial outcomes."
        ],
        workedExample: {
          prompt: "A team is tense, quiet, and defensive after a setback. How might high EI improve performance?",
          steps: [
            "Surface the emotional tone rather than ignoring it — emotion is information.",
            "Encourage reappraisal: reframe the setback as a learning opportunity.",
            "Reduce negative contagion by modeling calm, open communication.",
            "Use Theory of Mind to understand each member's concerns before making decisions."
          ]
        },
        mistakes: [
          "Calling emotion irrational noise — it carries information.",
          "Confusing fake (non-Duchenne) smiles with genuine (Duchenne) ones.",
          "Assuming emotional labor has no cost — it is linked to burnout.",
          "Ignoring that suppression impairs memory and performance."
        ],
        practice: [
          {
            type: "short",
            question: "What is emotional contagion?",
            answer: "The spread of emotion from one person to others within a group — mood is infectious and affects performance."
          },
          {
            type: "short",
            question: "What did Barsade find about team emotions and financial performance?",
            answer: "Teams sharing emotional outlooks had 4–6% higher market-adjusted earnings per share than emotionally fragmented teams."
          },
          {
            type: "mcq",
            question: "A Duchenne smile involves:",
            options: ["Only the mouth", "Only the eyebrows", "Mouth and eye muscles", "No facial muscles"],
            correctIndex: 2,
            answer: "Mouth and eye muscles — genuine smiles activate the orbicularis oculi around the eyes."
          }
        ]
      },
      {
        id: "l5",
        title: "Lecture 5 — Heuristics, Biases, and Reasoning",
        studyTime: "16 min",
        importance: "High",
        difficulty: "Medium",
        overview: [
          "System 1 (fast, automatic, intuitive) keeps us alive but produces predictable cognitive errors; System 2 (slow, deliberate) is supposed to correct errors but is lazy and tires easily.",
          "Key biases: anchoring, loss aversion, sunk cost, optimism bias, and base rate neglect.",
          "Mercier and Sperber argue reason evolved not for solo thinking but for social justification and argumentation — we are bad at logic alone but good at spotting flaws in others' arguments.",
          "You can outsmart bias by deliberately broadening thinking about futures, objectives, and options — the Rule of Three."
        ],
        concepts: [
          {
            heading: "System 1 vs System 2",
            bullets: [
              "System 1 = fast, automatic, intuitive — runs constantly, keeps us alive.",
              "System 2 = slow, deliberate, effortful — but lazy and tires under stress.",
              "Stress and fatigue push decisions toward System 1 when stakes are highest.",
              "Kahneman & Tversky: people systematically violate rational choice (Linda problem, prospect theory)."
            ]
          },
          {
            heading: "Key Biases",
            bullets: [
              "Anchoring: first number heard disproportionately influences judgment.",
              "Loss Aversion: losses feel roughly twice as painful as equivalent gains feel good.",
              "Sunk Cost: continuing because you already invested time or money.",
              "Optimism Bias: focusing on positives, ignoring negatives — helps motivation but distorts risk.",
              "Base Rate Neglect: ignoring background probability in favor of vivid case information.",
              "Peak-End Rule: we remember the peak intensity and end of experiences, not their duration."
            ]
          },
          {
            heading: "Mercier & Sperber — Social Reason",
            bullets: [
              "Reason evolved to justify our actions to others and to evaluate others' arguments.",
              "My-side bias is a feature, not a bug — it helps win arguments in groups.",
              "Groups outperform individuals at spotting logical flaws through debate.",
              "Causal thinking (X causes Y) helps coordinate in social groups."
            ]
          },
          {
            heading: "Outsmarting Bias (HBR)",
            bullets: [
              "Three tunnels of bias: one future, one objective, one option — widen each deliberately.",
              "Fix futures: make three estimates (low/medium/high), run a premortem, use an outside view.",
              "Fix objectives: generate goals before consulting others, evaluate one at a time.",
              "Fix options: compare side-by-side (joint evaluation), use vanishing options test.",
              "Rule of Three: aim for 3 futures, 3 objectives, 3 options for every major decision."
            ]
          }
        ],
        keyTakeaways: [
          "Bias is systematic and predictable — not random.",
          "System 2 does not automatically save us from System 1 errors.",
          "Reason evolved for social argumentation, not solo truth-seeking.",
          "Structured broadening (futures, objectives, options) measurably improves judgment."
        ],
        workedExample: {
          prompt: "How do you outsmart your own bias before a major strategic decision?",
          steps: [
            "Generate three future scenarios: low, medium, high.",
            "Run a premortem: imagine the plan failed — why?",
            "Use an outside view: what is the base rate for this type of decision?",
            "Compare at least three options side-by-side rather than evaluating one at a time.",
            "List objectives before deliberating so you do not anchor on others' framings."
          ]
        },
        mistakes: [
          "Assuming experience automatically removes bias — experts are still systematically biased.",
          "Treating gut feeling as always wrong or always right.",
          "Evaluating only one future or one option.",
          "Confusing the experiencing self (real-time feelings) with the remembering self (peak-end driven)."
        ],
        practice: [
          {
            type: "short",
            question: "What is loss aversion?",
            answer: "The tendency to feel losses more strongly than equivalent gains — losses weigh roughly twice as much psychologically."
          },
          {
            type: "short",
            question: "According to Mercier and Sperber, what did reason evolve for?",
            answer: "Social justification and argumentation — helping us explain actions to others and evaluate others' claims in groups."
          },
          {
            type: "mcq",
            question: "System 2 is best described as:",
            options: ["Fast and intuitive", "Slow and effortful", "Emotional only", "Always accurate"],
            correctIndex: 1,
            answer: "Slow and effortful — and often too lazy to override System 1 errors."
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Sessions 6–10",
    subtitle: "Decision Making, Diversity, Feedback, Teams, and Creativity",
    lectures: [
      {
        id: "l6",
        title: "Session 6 — Bias, Diversity, and Foxes vs Hedgehogs",
        studyTime: "15 min",
        importance: "High",
        difficulty: "Low",
        overview: [
          "Decision making involves three lenses: cognitive (risk/payoffs), emotional (feelings), and behavioral (actions taken).",
          "Twelve major biases distort judgment — from confirmation bias to base rate neglect.",
          "Crowd Error = Average Error − Diversity: more model diversity in a group reduces aggregate prediction error.",
          "Foxes use many models; hedgehogs commit to one — diverse fox-teams outpredict confident hedgehogs."
        ],
        concepts: [
          {
            heading: "Spiegelhalter's Three Lenses",
            bullets: [
              "Cognitive: How are you representing risk and computing payoffs?",
              "Emotional: What are you feeling about the choice?",
              "Behavioral: What actions are you actually taking?"
            ]
          },
          {
            heading: "12 Key Biases",
            bullets: [
              "Confirmation, conformity/bandwagon, authority bias.",
              "Loss aversion, action bias, self-serving bias.",
              "Framing, ambiguity, anchoring bias.",
              "Status-quo, optimism bias, base rate neglect.",
              "Process matters more than any individual factor — skill is secondary to process quality."
            ]
          },
          {
            heading: "Diversity and Crowd Error",
            bullets: [
              "Crowd Error = Average Error − Diversity.",
              "A large diversity term shrinks aggregate error.",
              "People use different models that each capture different parts of the system.",
              "Good models, bad models, and noise all exist in the crowd — diversity wins on average."
            ]
          },
          {
            heading: "Foxes vs Hedgehogs",
            bullets: [
              "Foxes: pursue many models even if contradictory — flexible and adaptive.",
              "Hedgehogs: commit to one model all the way through — confident but brittle.",
              "Accuracy, noise, and bias of each model all matter.",
              "Diverse fox-teams outpredict expert hedgehogs on complex predictions."
            ]
          }
        ],
        keyTakeaways: [
          "Process matters more than people in most decisions.",
          "Model diversity reduces aggregate error.",
          "Bias distorts every phase — from perception to action.",
          "Pick teams for perspective diversity, not just individual excellence."
        ],
        workedExample: {
          prompt: "Why might a diverse forecasting team beat a team of individual stars?",
          steps: [
            "Each person uses a different model of the system.",
            "Different models capture different dynamics.",
            "Errors partially cancel out across models.",
            "Crowd Error = Average Error − Diversity — higher diversity term shrinks error."
          ]
        },
        mistakes: [
          "Assuming confidence equals accuracy.",
          "Ignoring base rates when evaluating specific cases.",
          "Building a team only by individual excellence — this produces a homogeneous perspective pool."
        ],
        practice: [
          {
            type: "short",
            question: "What is the difference between a fox and a hedgehog thinker?",
            answer: "Foxes use many models flexibly; hedgehogs commit strongly to one dominant model and stick with it."
          },
          {
            type: "mcq",
            question: "Which bias involves overweighting the first number you hear?",
            options: ["Sunk cost", "Anchoring", "Optimism bias", "Conformity"],
            correctIndex: 1,
            answer: "Anchoring — initial information disproportionately shapes subsequent judgment."
          }
        ]
      },
      {
        id: "l7",
        title: "Session 7 — Eight Scholars of Creativity",
        studyTime: "12 min",
        importance: "Medium",
        difficulty: "Low",
        overview: [
          "Eight major scholars of creativity each offer a different framework for understanding where creative ideas come from.",
          "Creativity is not magic — it is a system involving person, domain, field, and process.",
          "Key theories range from flow states and componential models to evolutionary and cultural frameworks."
        ],
        concepts: [
          {
            heading: "Eight Scholars",
            bullets: [
              "Csikszentmihalyi: Systems Model (Person–Domain–Field) + Flow Theory — optimal experience drives creativity.",
              "Amabile: Componential Theory — domain skills, creativity skills, and intrinsic motivation must all combine.",
              "Gardner: Domain-Specific Creativity — multiple intelligences mean creativity varies by field.",
              "Simonton: Evolutionary (Darwinian) Theory — creative ideas vary and are selected by the field.",
              "Boden: Conceptual Spaces — combinational, exploratory, and transformational creativity.",
              "Kaufman: Four-C Model — Mini-c (personal), Little-c (everyday), Pro-c (professional), Big-C (legendary).",
              "Sternberg: Investment Theory (buy low, sell high in idea space) + WICS Model.",
              "Carol D. Lee: Cultural Modeling Theory — cultural practices scaffold creative thinking."
            ]
          }
        ],
        keyTakeaways: [
          "Creativity is a system, not a solo talent.",
          "Flow (Csikszentmihalyi): optimal creative state — challenge matches skill.",
          "Intrinsic motivation is central to creative output (Amabile).",
          "Different domains require different kinds of intelligence (Gardner)."
        ],
        workedExample: {
          prompt: "Use two creativity theories to explain why a solo genius might fail where a team succeeds.",
          steps: [
            "Csikszentmihalyi: the field validates ideas — a genius without field recognition gets nowhere.",
            "Simonton: variation requires diverse attempts; a team produces more variation for selection.",
            "Combined: systems need person, domain, AND field — one person cannot cover all three alone."
          ]
        },
        mistakes: [
          "Treating creativity as purely individual inspiration.",
          "Ignoring the field's role in validating and adopting ideas.",
          "Assuming intrinsic motivation is always enough without domain skill."
        ],
        practice: [
          {
            type: "short",
            question: "What is Csikszentmihalyi's flow state?",
            answer: "A state of optimal experience where challenge and skill are balanced, producing deep engagement and creative output."
          },
          {
            type: "mcq",
            question: "Amabile's componential theory says creativity requires:",
            options: ["IQ alone", "Domain skills, creativity skills, and intrinsic motivation", "Social proof", "Only expertise"],
            correctIndex: 1,
            answer: "Domain skills, creativity skills, and intrinsic motivation — all three must be present."
          }
        ]
      },
      {
        id: "l8",
        title: "Session 8 — Feedback and Shapley Value",
        studyTime: "12 min",
        importance: "Medium",
        difficulty: "Medium",
        overview: [
          "Feedback Intervention Theory: feedback mostly redirects attention, not motivation.",
          "Good feedback is positive, task-focused, and specific; bad feedback is personal, negative, or comparative.",
          "The Shapley value measures a person's average marginal contribution across all possible orderings of team members — a fair measure of individual value in cooperative settings."
        ],
        concepts: [
          {
            heading: "Feedback Intervention Theory",
            bullets: [
              "Feedback primarily changes where attention goes, not how motivated someone is.",
              "Good feedback: positive, directs attention to the task, focuses on specific approaches.",
              "Bad feedback: negative, focuses on the person, makes normative comparisons.",
              "The Sandwich Method: wrap criticism between two positive statements."
            ]
          },
          {
            heading: "Shapley Value",
            bullets: [
              "Consider all N! orderings of team members.",
              "For each ordering, compute how much value this person adds when they join.",
              "Average those marginal contributions across all orderings = Shapley value.",
              "Sum of all Shapley values = total game value; a player adding no value gets zero.",
              "Useful for thinking fairly about contribution when collaboration complicates attribution."
            ]
          }
        ],
        keyTakeaways: [
          "Feedback should improve the work, not attack the person.",
          "Attention — not motivation — is what feedback primarily moves.",
          "Shapley value formalizes fair individual contribution in cooperative settings."
        ],
        workedExample: {
          prompt: "Why does negative, person-focused feedback often fail to improve performance?",
          steps: [
            "It shifts attention from the task to the self.",
            "Self-focused attention triggers defensiveness, not improvement.",
            "Defensiveness reduces openness to learning.",
            "Result: performance stagnates or worsens."
          ]
        },
        mistakes: [
          "Using feedback mainly to compare people rather than improve work.",
          "Confusing loudness or confidence with actual contribution.",
          "Ignoring the structure of contribution — Shapley reminds us to account for sequencing."
        ],
        practice: [
          {
            type: "short",
            question: "What does a Shapley value represent?",
            answer: "A person's average marginal contribution to team value across all possible orderings of team members."
          },
          {
            type: "mcq",
            question: "According to Feedback Intervention Theory, feedback primarily affects:",
            options: ["Motivation", "Attention", "Personality", "IQ"],
            correctIndex: 1,
            answer: "Attention — feedback redirects where people focus, not how much they care."
          }
        ]
      },
      {
        id: "l9",
        title: "Session 9 — Perspectives, Heuristics, and Diversity",
        studyTime: "16 min",
        importance: "High",
        difficulty: "Medium",
        overview: [
          "A perspective is a way of mapping reality; a heuristic is a rule for searching within that perspective.",
          "The same problem can be easy or hard depending on which perspective you use — Sum to 15 and Tic Tac Toe are the same game viewed differently.",
          "No Free Lunch Theorem: no single heuristic is best for all problems.",
          "Diverse teams often outperform teams of the best individuals because best individuals share the same perspective and get stuck at the same peaks."
        ],
        concepts: [
          {
            heading: "Landscapes",
            bullets: [
              "Mount Fuji landscape: one clear best peak — easy to solve by moving upward.",
              "Rugged landscape: many local optima — you get stuck because every move seems worse.",
              "Savant Existence Theorem: for every problem, a perspective exists that makes it Mount Fuji — but rare.",
              "Representation changes difficulty: magic square transforms Sum to 15 into easy Tic Tac Toe."
            ]
          },
          {
            heading: "Four Types of Heuristics",
            bullets: [
              "Topological: search neighbors of current solution.",
              "Gradient: move in the direction of steepest immediate improvement.",
              "Error-Allowing (Simulated Annealing): occasionally accept worse solutions to escape local optima.",
              "Population (Genetic Algorithms): combine DNA of two good solutions and see if offspring is better."
            ]
          },
          {
            heading: "Diversity Logic",
            bullets: [
              "A solution is only a peak for a team if it is a peak for every member.",
              "If one person has a different perspective, they can see a path upward others cannot.",
              "Best individuals often share perspectives — diversity adds a search advantage on rugged landscapes.",
              "Team of Me Test: tests that pick only by individual score usually pick clones — bad for complex problems.",
              "Real examples: Watson and Crick combined physics, chemistry, zoology; Mendeleyev used a puzzle perspective."
            ]
          }
        ],
        keyTakeaways: [
          "Representation changes problem difficulty.",
          "No Free Lunch: no single heuristic wins everywhere.",
          "Diversity is a search advantage on complex, rugged landscapes.",
          "Shared perspectives and heuristics have driven human growth through social learning."
        ],
        workedExample: {
          prompt: "Why can a diverse team escape a local optimum that a team of stars cannot?",
          steps: [
            "The stars all share the same perspective — they all see the same peak.",
            "A diverse member's perspective maps the landscape differently.",
            "From that perspective, the current peak is NOT a peak — a better neighbor is visible.",
            "The team can follow that member's path to a higher solution."
          ]
        },
        mistakes: [
          "Thinking the best individual always makes the best team.",
          "Using one heuristic on every type of problem.",
          "Ignoring that shared perspective creates collective blind spots."
        ],
        practice: [
          {
            type: "mcq",
            question: "A rugged landscape is hard because it has:",
            options: ["No solutions", "One obvious peak", "Many local optima", "No information"],
            correctIndex: 2,
            answer: "Many local optima — you can get stuck because every nearby move looks worse."
          },
          {
            type: "short",
            question: "What does the No Free Lunch Theorem say?",
            answer: "No single heuristic is best for all problems — a tool that works perfectly in one context may fail in another."
          }
        ]
      },
      {
        id: "l10",
        title: "Session 10 — Creativity and Pecha Kucha",
        studyTime: "14 min",
        importance: "Medium",
        difficulty: "Low",
        overview: [
          "Creativity is largely recombination — most new ideas combine existing elements in novel ways (Kindle = Book + Screen; Uber = Taxi + GPS).",
          "Ideas move through four stages: Origination, Development, Evaluation, Adoption.",
          "The primal mark (what you start with) shapes the creative path — familiar marks yield incremental ideas, novel marks yield creative but potentially impractical ones.",
          "Pecha Kucha format: 12 slides at 12 seconds each — requires simple, memorable, story-driven presentation using the Made to Stick model."
        ],
        concepts: [
          {
            heading: "Creativity = Recombination",
            bullets: [
              "New ideas combine old parts — the Adjacent Possible: each innovation enables the next step.",
              "Four stages: Origination (primal mark), Development (recombine/refine), Evaluation, Adoption.",
              "Familiar mark → incremental improvement; Novel mark → creative but potentially impractical.",
              "Secret: start with a novel mark, then infuse familiarity to make it usable."
            ]
          },
          {
            heading: "Where Creativity Lives",
            bullets: [
              "Content / Problem Structure: properties of ideas, conceptual spaces, recombination.",
              "Person: abilities, traits, motivation, judgment.",
              "State or Process: mindset, flow, exploration, developmental stage.",
              "Social or Cultural System: fields, institutions, communities that validate ideas."
            ]
          },
          {
            heading: "Made to Stick (SUCCESs)",
            bullets: [
              "Simple: core message, cut everything else.",
              "Unexpected: surprise the audience to grab attention.",
              "Concrete: visceral, sensory words — not we want excellence but donors will tell their neighbors.",
              "Credible: data and experts back your claims.",
              "Emotional: variable intonation and energy.",
              "Stories: narrative path keeps people engaged.",
              "The Science of Being Interesting: What you think is X is actually not X."
            ]
          }
        ],
        keyTakeaways: [
          "Creativity is not magic — it is recombination plus adoption.",
          "The starting point (primal mark) constrains the creative path.",
          "Novel ideas need familiarity infused to get adopted.",
          "Presentation quality depends on memorable structure — SUCCESs framework."
        ],
        workedExample: {
          prompt: "How might you make a wild creative idea actually usable?",
          steps: [
            "Start with a novel mark (unusual starting point).",
            "Develop through recombination with existing familiar elements.",
            "Evaluate: is it good? Would others use it?",
            "Infuse familiarity: find the analogous familiar form to reduce adoption friction.",
            "Present using Made to Stick principles so the idea spreads."
          ]
        },
        mistakes: [
          "Equating creativity with randomness — recombination is deliberate.",
          "Forgetting that adoption is the hardest stage — a great idea no one uses is a failed idea.",
          "Anchoring on the first obvious idea rather than exploring novel marks."
        ],
        practice: [
          {
            type: "short",
            question: "What does it mean that creativity is recombination?",
            answer: "Most new ideas combine existing elements in a new way rather than appearing from nothing — the Adjacent Possible moves step by step."
          },
          {
            type: "mcq",
            question: "In Made to Stick, Concrete means:",
            options: ["Using abstract principles", "Using visceral sensory specific language", "Being brief", "Being statistical"],
            correctIndex: 1,
            answer: "Using visceral, sensory, specific language — not excellence but donors will tell their neighbors."
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title: "Sessions 11–14",
    subtitle: "Leadership, Team Performance, Psychological Safety, and Structure",
    lectures: [
      {
        id: "l11",
        title: "Sessions 11–12 — High-Performing Teams",
        studyTime: "20 min",
        importance: "Very High",
        difficulty: "Medium",
        overview: [
          "Teams can generate synergy or catastrophic process losses — they are amplifiers, not averagers. Only 11% of team performance follows a normal distribution.",
          "Hackman: actual performance = potential − process losses; structure explains roughly 80% of performance.",
          "Edmondson: psychological safety enables learning behaviors, which drive performance indirectly.",
          "Google's Project Aristotle studied 180 teams and found psychological safety is the single most important factor."
        ],
        concepts: [
          {
            heading: "Hackman's 6 Conditions",
            bullets: [
              "Clear team boundaries (who is on the team).",
              "Compelling goal (clear purpose everyone understands).",
              "Right people (skills match the task).",
              "Clear structure (roles and norms defined).",
              "Supportive environment (resources, rewards).",
              "Coaching and leadership.",
              "If your team underperforms, suspect bad structure before bad people."
            ]
          },
          {
            heading: "Edmondson — Psychological Safety",
            bullets: [
              "Definition: team belief that it is safe to take interpersonal risks.",
              "With safety: people speak up, admit errors, ask questions, experiment.",
              "Without safety: people hide mistakes, stay quiet, avoid risk.",
              "Key path: Safety → Learning behavior → Better performance (indirect).",
              "Best teams report MORE mistakes — because they are more open, not less competent."
            ]
          },
          {
            heading: "Collective Intelligence (Woolley)",
            bullets: [
              "Smart teams do not require the smartest individuals.",
              "What matters: equal participation, social awareness, communication quality.",
              "One person dominating = worse collective intelligence.",
              "Shared Mental Models (Mathieu): everyone must understand goals, roles, and plan."
            ]
          },
          {
            heading: "Team Performance Distribution",
            bullets: [
              "Teams cluster at extremes: very good or very bad — not normally distributed.",
              "Performance spirals: good teams learn → improve → dominate; bad teams fail → disengage → worsen.",
              "Cognitive diversity (knowledge, perspectives, heuristics) is most important type.",
              "Diverse teams produce 4.5x more high-impact work than individuals.",
              "Lencioni's 5 Dysfunctions: lack of trust, fear of conflict, lack of commitment, avoiding accountability, ignoring results."
            ]
          }
        ],
        keyTakeaways: [
          "Structure matters more than motivation — fix structure first.",
          "Psychological safety is the number one driver (Google Aristotle).",
          "Diversity helps only with good structure and process.",
          "Knowing what good teamwork looks like is not the same as doing it."
        ],
        workedExample: {
          prompt: "A smart team is underperforming. Diagnose it using Hackman and Edmondson.",
          steps: [
            "Check Hackman's 6 conditions: goal clarity, role clarity, right people, structure, support, coaching.",
            "Check for process losses: coordination failures, motivation problems.",
            "Assess psychological safety: do people speak up? Admit mistakes? Challenge ideas?",
            "Check discussion quality: is one person dominating? Is unique information being surfaced?",
            "Diagnose: likely bad structure or low safety — not individual talent."
          ]
        },
        mistakes: [
          "Assuming talent alone guarantees team performance.",
          "Equating harmony with effectiveness — harmony can mask conflict avoidance.",
          "Ignoring shared mental models — silent misalignment is deadly.",
          "Thinking that knowing good teamwork equals doing good teamwork."
        ],
        practice: [
          {
            type: "short",
            question: "Why does psychological safety matter for team learning?",
            answer: "It enables people to speak up, share mistakes, ask questions, and experiment — all behaviors that drive learning and then performance."
          },
          {
            type: "mcq",
            question: "According to Hackman, teams often fail mainly because of:",
            options: ["Low raw IQ", "Bad structure", "Too much motivation", "Too many meetings"],
            correctIndex: 1,
            answer: "Bad structure — structure accounts for roughly 80% of team performance variance."
          }
        ]
      },
      {
        id: "l12",
        title: "Everest Simulation",
        studyTime: "14 min",
        importance: "High",
        difficulty: "Low",
        overview: [
          "Everest teaches team decision-making under pressure with incomplete, role-specific information.",
          "Success is not about being smart — it is about how the team integrates information across roles.",
          "Teams consistently over-discuss shared information and fail to surface unique information held by individual roles.",
          "Leadership quality dramatically changes outcomes — good leaders facilitate information flow, bad leaders dominate it."
        ],
        concepts: [
          {
            heading: "The Core Information Problem",
            bullets: [
              "Shared info feels safer — teams repeat it too much because it makes people look smart.",
              "Unique info is harder to raise — it may conflict with others or seem irrelevant.",
              "Good teams actively pull unique info; bad teams just discuss without surfacing new information.",
              "Fix: the leader should manage information flow; delay decisions until all info is shared."
            ]
          },
          {
            heading: "Goal Conflicts",
            bullets: [
              "Each role has different incentives: summit, safety, team cohesion — all compete.",
              "Hidden disagreements cause people to push different implicit strategies.",
              "Fix: make goals explicit and align on priorities — teams can look aligned when they are not."
            ]
          },
          {
            heading: "Leadership in Everest",
            bullets: [
              "Good leaders: pull info from everyone, delay judgment, facilitate, align on facts.",
              "Bad leaders: talk too much, decide too early, dominate discussion.",
              "Task conflict (debating ideas) helps; relationship conflict (personal attacks) hurts.",
              "Psychological safety: best teams challenge ideas and admit uncertainty."
            ]
          },
          {
            heading: "Engagement and Process",
            bullets: [
              "Talking more does not produce better decisions — quality beats quantity.",
              "In best teams, everyone participates; in worst teams, a few dominate.",
              "Fair process: people perform better when they feel heard, even if outcome is imperfect.",
              "Good decisions = shared info + unique info combined."
            ]
          }
        ],
        keyTakeaways: [
          "Surface unique information — that is where the real insight lives.",
          "Talk quality beats talk quantity every time.",
          "Leaders must manage information flow, not dominate it.",
          "Align goals explicitly — implicit alignment is usually an illusion."
        ],
        workedExample: {
          prompt: "Why did some Everest teams fail despite having smart members?",
          steps: [
            "They discussed shared information only — repeating what everyone already knew.",
            "Unique role-specific information stayed hidden.",
            "Role incentives were not aligned — different roles had different silent goals.",
            "Leaders locked in early rather than gathering full information first.",
            "Result: poor integration of critical facts led to wrong decisions."
          ]
        },
        mistakes: [
          "Believing discussion volume equals good teamwork.",
          "Ignoring incentive conflicts between roles.",
          "Letting leaders dominate before all information is on the table."
        ],
        practice: [
          {
            type: "short",
            question: "What is the core information problem in Everest?",
            answer: "Teams over-discuss shared information and fail to surface unique information held by individual roles — where the real decision-critical data lives."
          },
          {
            type: "mcq",
            question: "Task conflict in the Everest simulation is:",
            options: ["Always harmful", "The same as relationship conflict", "Helpful for decisions", "Irrelevant"],
            correctIndex: 2,
            answer: "Helpful — debating ideas improves decision quality. Relationship conflict is what hurts performance."
          }
        ]
      },
      {
        id: "l13",
        title: "Firm Structure",
        studyTime: "18 min",
        importance: "High",
        difficulty: "Medium",
        overview: [
          "Organizations can be viewed as machines (rational), social groups (natural), or organisms (open systems).",
          "Structure shapes incentives, information flow, coordination, and culture.",
          "Congruence Theory: strategy, structure, people, and processes must align — mismatches reduce performance.",
          "There is no perfect structure; the best depends on size, strategy, and environment."
        ],
        concepts: [
          {
            heading: "Three Perspectives on Organizations",
            bullets: [
              "Rational: org = machine. Focus on goals, efficiency, optimization.",
              "Natural: org = social group. Focus on people's interests, culture, relationships.",
              "Open Systems: org = organism. Focus on environment, adaptation, external pressures."
            ]
          },
          {
            heading: "Core Structural Dimensions",
            bullets: [
              "Work specialization, departmentalization, chain of command.",
              "Span of control (number of people per manager), centralization, formalization.",
              "Boundary spanning: working across teams and external partners."
            ]
          },
          {
            heading: "8 Structure Types",
            bullets: [
              "Functional: grouped by function — expertise plus silos.",
              "Product: grouped by product line — innovation plus duplication.",
              "Customer: organized by customer type — customer focus plus weak brand consistency.",
              "Geographic: by location — local responsiveness plus hard to manage.",
              "Team-Based: cross-functional teams — innovation plus free riding risk.",
              "Matrix: two bosses (function plus product) — flexibility plus power struggles.",
              "Hybrid: mix of the above — best when it matches the task (Congruence Theory).",
              "Network: outsource to external partners — low cost, flexible, less control."
            ]
          },
          {
            heading: "Structural Holes and Sturgis Simulation",
            bullets: [
              "Structural holes are gaps between groups — no communication = missed opportunities.",
              "People who bridge structural holes have high brokerage value.",
              "Sturgis simulation showed: divisional-by-product = fast but siloed; divisional-by-process = consistent but inflexible; network = cheap but principal-agent risk.",
              "Structure determines incentives, information flow, and coordination outcomes."
            ]
          }
        ],
        keyTakeaways: [
          "Structure changes information flow and culture.",
          "Structural holes create brokerage value — bridge them.",
          "Congruence: strategy + structure + people + process must all align.",
          "Efficiency and flexibility trade off — no structure gets both maximally."
        ],
        workedExample: {
          prompt: "Why might a matrix structure create problems even though it looks collaborative?",
          steps: [
            "Two reporting lines increase collaboration potential across dimensions.",
            "But two bosses create ambiguity about who has final authority.",
            "Ambiguity produces power struggles and confused accountability.",
            "Result: flexibility gains can be offset by coordination costs."
          ]
        },
        mistakes: [
          "Looking for one perfect org chart that works everywhere.",
          "Ignoring how structure shapes culture and incentives, not just efficiency.",
          "Assuming network structures solve principal-agent problems — they often create them."
        ],
        practice: [
          {
            type: "mcq",
            question: "A matrix structure is characterized by:",
            options: ["No managers", "Two reporting lines", "No specialization", "Full outsourcing"],
            correctIndex: 1,
            answer: "Two reporting lines — e.g., reporting to both a product head and a functional head simultaneously."
          },
          {
            type: "short",
            question: "What does Congruence Theory say?",
            answer: "Strategy, structure, people, and processes must all align. Mismatches between any two reduce organizational performance."
          }
        ]
      }
    ]
  },
  {
    id: "m4",
    title: "Sessions 15–26",
    subtitle: "Networks, Negotiation, Motivation, Change, AI, and Power",
    lectures: [
      {
        id: "l15",
        title: "Sessions 15–18 — Networks, Negotiation, and Motivation",
        studyTime: "25 min",
        importance: "Very High",
        difficulty: "Medium",
        overview: [
          "Networks: the logic (how connections form), structure (nodes and edges), and function (what people accomplish) explain social capital.",
          "53 to 56% of jobs come from personal connections — and most from weak ties, not strong ones.",
          "Negotiation: BATNA, reservation point, target point, and ZOPA are the core framework — preparation is step one.",
          "Motivation: SMART goals plus understanding what motivates versus what merely prevents dissatisfaction."
        ],
        concepts: [
          {
            heading: "Network Metrics",
            bullets: [
              "Degree: number of edges at a node — higher degree = more information and trust.",
              "Path Length: minimum distance between nodes — shorter = faster communication.",
              "Betweenness: number of shortest paths through a node — high betweenness = broker with informal power.",
              "Clustering Coefficient: percentage of neighbors who are also connected — high CC = tight community or echo chamber.",
              "Self-Similarity (homophily) and Proximity Principle drive how connections form.",
              "Weak ties (rare contacts) provide non-redundant diverse information — 53–56% of job leads."
            ]
          },
          {
            heading: "Strategic Network Concepts",
            bullets: [
              "Rainmaker Network: Bonding (clique, high trust) combined with Bridging (open, crosses structural holes).",
              "Myerson Value: Shapley variation for networks — average marginal contribution when coalitions require connection.",
              "Reactivate dormant connections — they have moved into different social worlds and hold novel information.",
              "Face-in-door: large request first then smaller; Foot-in-door: small request first then larger."
            ]
          },
          {
            heading: "Negotiation Framework",
            bullets: [
              "BATNA: Best Alternative to a Negotiated Agreement — your outside option and primary source of power.",
              "Reservation Point: your walk-away point (indifferent between deal and impasse).",
              "Target Point: your ambitious but realistic ideal outcome.",
              "ZOPA: Zone of Possible Agreement — the range between both parties' reservation points.",
              "Distributive: single-issue, win/lose, claim value. Integrative: multi-issue, create value, reveal interests.",
              "Anchoring: precise first offers are more powerful than round numbers.",
              "Logrolling and bundling: trade across issues based on different priorities."
            ]
          },
          {
            heading: "Motivation Theories",
            bullets: [
              "SMART Goals: Specific, Measurable, Agreed-upon, Reasonable, Time-bound.",
              "Herzberg: Hygiene factors (pay, conditions) prevent dissatisfaction; Motivators (achievement, the work itself) drive effort.",
              "Maslow: physiological to self-actualization — no empirical support for strict ordering.",
              "Pink's DRIVE: Autonomy, Mastery, Purpose.",
              "Goodhart's Law: when a measure becomes a target, it ceases to be a good measure.",
              "Campbell's Law: high-stakes indicators are subject to corruption and distort social processes.",
              "Cobra Effect: perverse incentives that worsen the original problem."
            ]
          }
        ],
        keyTakeaways: [
          "Weak ties outperform strong ties for novel information and job leads.",
          "Preparation — knowing your BATNA — is the most important step in negotiation.",
          "Hygiene factors only prevent dissatisfaction; motivators actually drive effort.",
          "Metrics that become targets stop measuring what they were meant to measure."
        ],
        workedExample: {
          prompt: "How can someone improve job search outcomes using network theory?",
          steps: [
            "Reactivate dormant connections — they live in different social worlds now.",
            "Reach outside your immediate friend group — avoid the echo chamber of strong ties.",
            "Target bridge contacts with high betweenness — they have non-redundant information.",
            "Use foot-in-door: small ask first to establish relationship before larger request.",
            "Contact multiple people — do not rely on one contact."
          ]
        },
        mistakes: [
          "Relying only on close contacts for job leads — they share your information.",
          "Walking into a negotiation without knowing your BATNA.",
          "Assuming any metric automatically improves what it measures (Goodhart's Law).",
          "Mixing up hygiene factors and motivators — paying people more rarely increases intrinsic motivation."
        ],
        practice: [
          {
            type: "short",
            question: "What is BATNA and why does it matter?",
            answer: "Your Best Alternative to a Negotiated Agreement — your fallback if the deal fails. It is your primary source of power in any negotiation."
          },
          {
            type: "short",
            question: "What is Goodhart's Law?",
            answer: "When a measure becomes a target, it ceases to be a good measure — people optimize for the metric, not the underlying goal."
          },
          {
            type: "mcq",
            question: "Which network position often has brokerage power?",
            options: ["Isolated node", "High betweenness node", "Lowest degree node", "Highest clustering node"],
            correctIndex: 1,
            answer: "High betweenness — that node sits on the most shortest paths and controls information flow."
          }
        ]
      },
      {
        id: "l20",
        title: "Sessions 19–21 — Org Change, RACI, and Influence",
        studyTime: "16 min",
        importance: "High",
        difficulty: "Low",
        overview: [
          "RACI (Responsible, Accountable, Consulted, Informed) clarifies who does what — eliminating confusion, bottlenecks, and accountability gaps.",
          "Kotter's 8-step process guides large-scale organizational change from urgency through anchoring.",
          "Cialdini's 7 universal influence principles: reciprocity, liking, social proof, authority, commitment/consistency, scarcity, unity.",
          "Waterfall, Agile, and Scrum are project management approaches with different tradeoffs between structure and flexibility."
        ],
        concepts: [
          {
            heading: "RACI",
            bullets: [
              "Responsible: actually performs the task — only 1 R per task.",
              "Accountable: owns the final result — only 1 A (more creates conflict and confusion).",
              "Consulted: experts whose input is sought — two-way communication.",
              "Informed: kept in the loop — one-way communication.",
              "If one person has too many R assignments = bottleneck. Update RACI as project evolves."
            ]
          },
          {
            heading: "Kotter's 8-Step Change",
            bullets: [
              "1. Create urgency — discuss threats, spark motivation to act now.",
              "2. Build a powerful coalition — get key people on your side.",
              "3. Create a vision — inspire people to want to be part of change.",
              "4. Communicate the vision — frequently and powerfully, with confidence.",
              "5. Remove obstacles — identify and clear what is blocking change.",
              "6. Create short-term wins — visible early successes build momentum.",
              "7. Build on change — use wins to drive further transformation.",
              "8. Anchor the change — embed it in culture and systems."
            ]
          },
          {
            heading: "Cialdini's 7 Influence Principles",
            bullets: [
              "Reciprocity: give first — they feel grateful and reciprocate.",
              "Liking: people say yes to people they like.",
              "Social Proof: most popular, positive reviews signal correctness.",
              "Authority: people follow legitimate expertise — indicate credentials confidently.",
              "Commitment/Consistency: get a small yes first (foot-in-door).",
              "Scarcity: people want what is rare — creates urgency.",
              "Unity: shared identity drives compliance."
            ]
          },
          {
            heading: "Project Management Approaches",
            bullets: [
              "Waterfall: linear, sequential, well-defined — inflexible and risky if requirements change.",
              "Agile: sprints with feedback loops — flexible, fast, requires high commitment and experience.",
              "Scrum: fixed-length sprints, deliverable after each — highly organized, steep learning curve."
            ]
          }
        ],
        keyTakeaways: [
          "RACI eliminates confusion and ensures single-point accountability.",
          "Change requires sustained, repeated communication — not just a good idea.",
          "Know the influence principles and their defenses — recognize when they are being used on you.",
          "Agile beats Waterfall when requirements are uncertain and evolving."
        ],
        workedExample: {
          prompt: "How does RACI prevent a group project from falling apart?",
          steps: [
            "List all tasks and all roles.",
            "Assign exactly one R per task — who actually does it.",
            "Assign exactly one A per task — who is accountable for the outcome.",
            "Define who must be Consulted and who stays Informed.",
            "Review for bottlenecks: does one person have too many R assignments?"
          ]
        },
        mistakes: [
          "Assigning multiple people as Accountable — creates confusion about final ownership.",
          "Thinking change will succeed just because the idea is good.",
          "Accepting gifts without recognizing the reciprocity trigger they activate."
        ],
        practice: [
          {
            type: "mcq",
            question: "In RACI, the person who owns the final result is:",
            options: ["Responsible", "Accountable", "Consulted", "Informed"],
            correctIndex: 1,
            answer: "Accountable — they ensure the task is done and own the outcome, even if they do not perform the work."
          },
          {
            type: "short",
            question: "What is the first step in Kotter's change model and why does it matter?",
            answer: "Create urgency — without a sense that change is necessary now, people will not move. Urgency sparks the motivation to act."
          }
        ]
      },
      {
        id: "l23",
        title: "Sessions 22–24 — Change, Choice Systems, and Matching",
        studyTime: "18 min",
        importance: "Medium",
        difficulty: "Medium",
        overview: [
          "Six Sigma is a data-driven quality method — DMAIC for fixing existing processes, DMADV for designing new ones. Target: fewer than 3.4 defects per million opportunities.",
          "Allocation systems (markets, hierarchies, democracy, self-organization, algorithms) each reveal preferences differently and produce different cultures.",
          "Matching algorithms (Gale-Shapley) solve two-sided matching with desirable properties: stability, efficiency, strategy-proofness.",
          "Structure and institutions drive culture — and culture in turn shapes the institutions people choose."
        ],
        concepts: [
          {
            heading: "Six Sigma",
            bullets: [
              "Goal: fewer than 3.4 defects per million opportunities — near-perfect quality.",
              "DMAIC (existing process): Define → Measure → Analyze → Improve → Control.",
              "DMADV (new product/service): Define → Measure → Analyze → Design → Verify.",
              "Netflix lesson: if you are not failing, you are not trying hard enough — failure creates learning."
            ]
          },
          {
            heading: "Allocation Systems",
            bullets: [
              "Markets: preferences revealed through prices and voluntary action.",
              "Hierarchies: assigned roles; leaders decide based on information passed up.",
              "Democracy: votes and discussion; weak individual incentives; majority wins.",
              "Self-Organization: behavior driven by norms and culture without prices or rules.",
              "Algorithms: information input → rule-based allocation (Cornell food bank: 7.73% utility improvement)."
            ]
          },
          {
            heading: "Matching Algorithms",
            bullets: [
              "Two-sided matching: both groups have preferences (dating, medical residency).",
              "One-sided matching: one group has preferences (housing allocation, school assignment).",
              "Desiderata: Pareto efficiency, monotonicity, consistency, strategy-proofness.",
              "Gale-Shapley: residents rank hospitals, assigned to top choice, bumped to next if oversubscribed, repeat. Both group-strategy-proof.",
              "Boston School Algorithm: strategy-proof matching for school assignment."
            ]
          },
          {
            heading: "Structure Drives Culture",
            bullets: [
              "Commission pay → increases effort, inequality, competitive culture.",
              "Culture affects which institutions people choose; those institutions then reshape culture.",
              "Want alignment between your culture and your institution — but be aware of what culture your institution will produce."
            ]
          }
        ],
        keyTakeaways: [
          "Institution choice shapes culture — choose deliberately.",
          "Matching systems are design problems with measurable desiderata.",
          "Gale-Shapley is stable and strategy-proof — important for fairness-sensitive contexts.",
          "Six Sigma: use DMAIC to fix existing processes, DMADV to build new ones."
        ],
        workedExample: {
          prompt: "Why might a matching algorithm outperform a market in some settings?",
          steps: [
            "Some contexts need fairness or stability — not just price efficiency.",
            "Markets can reward wealth or manipulation rather than fit or merit.",
            "Gale-Shapley produces stable matches no pair prefers to leave.",
            "Being strategy-proof means honest preferences are the best strategy — reduces gaming."
          ]
        },
        mistakes: [
          "Assuming all allocation mechanisms optimize the same goal.",
          "Ignoring the culture that a structure or institution will produce over time.",
          "Treating strategy-proofness as a minor technical detail — it is central to fairness."
        ],
        practice: [
          {
            type: "short",
            question: "What makes Gale-Shapley important?",
            answer: "It produces stable two-sided matches and is strategy-proof — honest preferences are the best strategy for at least one side."
          },
          {
            type: "mcq",
            question: "DMAIC is used when:",
            options: ["Building a new product", "Fixing an existing process", "Designing a matching algorithm", "Running an experiment"],
            correctIndex: 1,
            answer: "Fixing an existing process — Define, Measure, Analyze, Improve, Control."
          }
        ]
      },
      {
        id: "l25",
        title: "Sessions 25–26 — Multi-Agent AI and Power",
        studyTime: "15 min",
        importance: "Medium",
        difficulty: "Medium",
        overview: [
          "Multi-agent AI systems use multiple LLMs working in tandem — like wisdom of crowds — assigning different tasks simultaneously and operating like a specialized firm.",
          "The multi-dimensional backpack problem illustrates how AI agents optimize value under multiple simultaneous constraints.",
          "Power involves 7 rules: getting out of your own way, breaking rules strategically, showing up powerfully, developing a brand, networking relentlessly, using your power, and recognizing that success excuses almost everything.",
          "Bloom's Taxonomy frames the levels of understanding expected on the final exam."
        ],
        concepts: [
          {
            heading: "Multi-Agent AI",
            bullets: [
              "Multiple LLMs in tandem = more efficient than one — mirrors wisdom of crowds.",
              "Can assign different tasks simultaneously, like a company with specialized roles.",
              "Example firm: 15 backpack fillers, 3 middle managers, 1 CEO — each with defined roles.",
              "Backpack filler types: starter agent, feasibility agent, swap agent, rank projects agent."
            ]
          },
          {
            heading: "Multi-Dimensional Backpack Problem",
            bullets: [
              "Goal: select a subset of projects to maximize value given multiple constraints.",
              "Constraints: space (100), weight (100), energy (100), time (100).",
              "Example: Telescope (value 50, space 40, weight 30, energy 30, time 10).",
              "Multi-agent AI finds ways to maximize total value across all dimensions simultaneously."
            ]
          },
          {
            heading: "7 Rules of Power",
            bullets: [
              "Get out of your own way.",
              "Break the rules (strategically).",
              "Show up in powerful fashion.",
              "Develop a powerful brand.",
              "Network relentlessly.",
              "Use your power.",
              "Success excuses almost everything."
            ]
          }
        ],
        keyTakeaways: [
          "Multi-agent AI mirrors organizational structure — division of labor applies to AI.",
          "Constraints in the backpack problem mirror real resource allocation challenges.",
          "Power is built through brand, network, presence, and willingness to use it.",
          "AI can operate like a firm — parallel specialization increases efficiency and robustness."
        ],
        workedExample: {
          prompt: "How does multi-agent AI improve on a single model for complex optimization?",
          steps: [
            "A single model must handle all tasks sequentially — slow and potentially myopic.",
            "Multiple agents handle subproblems in parallel — like specialists in a firm.",
            "Middle managers aggregate and coordinate across agents.",
            "CEO agent makes final decisions with synthesized information.",
            "Result: faster, more robust optimization across multiple constraint dimensions."
          ]
        },
        mistakes: [
          "Assuming one powerful AI agent is always better than multiple specialized ones.",
          "Ignoring incentive and coordination design even within AI systems.",
          "Treating power as only formal authority — brand, network, and presence matter equally."
        ],
        practice: [
          {
            type: "short",
            question: "What is the multi-dimensional backpack problem?",
            answer: "Selecting a subset of projects to maximize total value subject to multiple simultaneous constraints such as space, weight, energy, and time."
          },
          {
            type: "mcq",
            question: "Multi-agent AI systems are compared to which human concept?",
            options: ["Individual genius", "Wisdom of crowds", "Emotional contagion", "Tight cultures"],
            correctIndex: 1,
            answer: "Wisdom of crowds — multiple agents with different perspectives produce better aggregate results."
          }
        ]
      }
    ]
  }
];

const finalExam = [
  {
    section: "Part A — Concepts",
    items: [
      "Define psychological safety and explain why it affects team learning (Edmondson).",
      "Define BATNA, reservation point, and ZOPA. How do they interact in a negotiation?",
      "Explain the difference between PCA and EFA — what does each assume and what does each produce?",
      "What is the strength of weak ties? Why do weak ties outperform strong ties for job leads?",
      "What problem does RACI solve, and what happens if two people are listed as Accountable?"
    ]
  },
  {
    section: "Part B — Application",
    items: [
      "Your team has high talent but poor performance. Diagnose the problem using Hackman and Edmondson.",
      "A manager wants to improve motivation using only metrics. Explain the danger using Goodhart's Law and the Cobra Effect.",
      "A negotiator receives an aggressive first offer. Explain how anchoring works and how to counter it.",
      "An Everest-style team is failing under pressure. Give three concrete process fixes using the simulation lessons.",
      "You are running a hiring process. Why might the best individual team lose to a diverse team on a rugged landscape?"
    ]
  },
  {
    section: "Part C — Cases",
    items: [
      "Compare a tight culture and a loose culture in handling public rule violations. Use at least two frameworks.",
      "Explain why a diverse team may outperform a team of top individuals on a rugged landscape. Use the Team Peak Rule.",
      "Give one situation where an algorithmic allocation system outperforms a hierarchy, and one where it does not.",
      "Use Kotter's 8 steps to explain why a well-intentioned change initiative might fail at step 4."
    ]
  }
];

export default function StudyHubApp() {
  const moduleQuiz = useMemo(() => modules.map((module) => ({
    id: module.id,
    title: `${module.title} Check`,
    questions: module.lectures.flatMap((lecture) =>
      lecture.practice
        .filter((q) => q.type === "mcq")
        .map((q) => ({
          prompt: q.question,
          options: q.options,
          answer: q.correctIndex,
          explanation: q.answer
        }))
    ).slice(0, 8)
  })), []);

  const [view, setView] = useState("home");
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [activeLecture, setActiveLecture] = useState(modules[0].lectures[0].id);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];
  const currentLecture = currentModule.lectures.find((l) => l.id === activeLecture) || currentModule.lectures[0];
  const currentQuiz = moduleQuiz.find((q) => q.id === activeModule);

  const scoreQuiz = (quizId: string) => {
    const quiz = moduleQuiz.find((q) => q.id === quizId);
    if (!quiz) return { correct: 0, total: 0 };
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (quizAnswers[`${quizId}-${i}`] === q.answer) correct += 1;
    });
    return { correct, total: quiz.questions.length };
  };

  const navButton = (label: string, target: string) => (
    <button
      onClick={() => setView(target)}
      className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${view === target ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"}`}
    >
      {label}
    </button>
  );

  const StatPill = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-2xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-800">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Course Deliverable</div>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">Final Study Hub</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {navButton("Home", "home")}
              {navButton("Lectures", "lectures")}
              {navButton("Module Quiz", "quiz")}
              {navButton("Final Practice", "final")}
            </div>
          </div>
        </header>

        {view === "home" && (
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Start Here</div>
              <h2 className="mt-2 text-2xl font-bold">How to use this</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  ["1. Learn", "Read the Overview, Core Concepts, and Key Takeaways for each lecture."],
                  ["2. Test", "Use the practice questions and module quizzes to check recall."],
                  ["3. Apply", "Use Final Practice for comparison, framework, and case-style questions."]
                ].map(([title, body]) => (
                  <div key={title} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="text-sm font-semibold">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Module Map</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => {
                        setActiveModule(module.id);
                        setActiveLecture(module.lectures[0].id);
                        setView("lectures");
                      }}
                      className="rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{module.title}</div>
                      <div className="mt-2 text-lg font-semibold">{module.subtitle}</div>
                      <div className="mt-3 text-sm text-slate-600">{module.lectures.length} lecture pages</div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
            <aside className="space-y-6">
              <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Assessment</div>
                <h3 className="mt-2 text-xl font-bold">Built-in study checks</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li>• Practice questions inside every lecture</li>
                  <li>• Module-level multiple choice checks</li>
                  <li>• Final practice prompts for application</li>
                  <li>• One page per lecture — full PDF coverage</li>
                </ul>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Best exam prep flow</div>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
                  <li><span className="font-semibold">Night 1:</span> Home + Lecture summaries</li>
                  <li><span className="font-semibold">Night 2:</span> Module quizzes + weak areas</li>
                  <li><span className="font-semibold">Night 3:</span> Final practice responses</li>
                </ol>
              </div>
            </aside>
          </div>
        )}

        {view === "lectures" && (
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <aside className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Modules</div>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div key={module.id} className="rounded-3xl bg-slate-50 p-3 ring-1 ring-slate-200">
                    <button
                      onClick={() => {
                        setActiveModule(module.id);
                        setActiveLecture(module.lectures[0].id);
                      }}
                      className={`w-full rounded-2xl px-3 py-2 text-left text-sm font-semibold ${activeModule === module.id ? "bg-slate-900 text-white" : "bg-white text-slate-800 ring-1 ring-slate-200"}`}
                    >
                      {module.title}
                    </button>
                    <div className="mt-3 space-y-2">
                      {module.lectures.map((lecture) => (
                        <button
                          key={lecture.id}
                          onClick={() => {
                            setActiveModule(module.id);
                            setActiveLecture(lecture.id);
                          }}
                          className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${activeLecture === lecture.id ? "bg-slate-200 text-slate-900" : "hover:bg-white"}`}
                        >
                          {lecture.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <main className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{currentModule.title}</div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">{currentLecture.title}</h2>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <StatPill label="Study Time" value={currentLecture.studyTime} />
                  <StatPill label="Importance" value={currentLecture.importance} />
                  <StatPill label="Difficulty" value={currentLecture.difficulty} />
                </div>
              </div>

              <section className="mt-6">
                <h3 className="text-lg font-semibold">Overview</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {currentLecture.overview.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="text-lg font-semibold">Core Concepts</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {currentLecture.concepts.map((block) => (
                    <div key={block.heading} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <div className="text-base font-semibold">{block.heading}</div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {block.bullets.map((b) => <li key={b}>• {b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-900 p-5 text-white">
                  <h3 className="text-lg font-semibold">Key Takeaways</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-100">
                    {currentLecture.keyTakeaways.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <div className="rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200">
                  <h3 className="text-lg font-semibold text-slate-900">Common Mistakes</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {currentLecture.mistakes.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </section>

              <section className="mt-8 rounded-3xl bg-white p-5 ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold">Worked Example</h3>
                <p className="mt-3 text-sm font-medium text-slate-900">{currentLecture.workedExample.prompt}</p>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {currentLecture.workedExample.steps.map((step, index) => (
                    <li key={step}><span className="font-semibold">Step {index + 1}:</span> {step}</li>
                  ))}
                </ol>
              </section>

              <section className="mt-8">
                <h3 className="text-lg font-semibold">Practice Questions</h3>
                <div className="mt-4 space-y-4">
                  {currentLecture.practice.map((q, index) => {
                    const revealKey = `${currentLecture.id}-${index}`;
                    return (
                      <div key={q.question} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                        <div className="text-sm font-semibold text-slate-900">{index + 1}. {q.question}</div>
                        {q.type === "mcq" && (
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {q.options && q.options.map((opt, i) => (
                              <div key={opt} className="rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200">{String.fromCharCode(65 + i)}. {opt}</div>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() => setRevealed((prev) => ({ ...prev, [revealKey]: !prev[revealKey] }))}
                          className="mt-4 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                          {revealed[revealKey] ? "Hide Answer" : "Show Answer"}
                        </button>
                        {revealed[revealKey] && (
                          <div className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900 ring-1 ring-emerald-200">
                            {q.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </main>
          </div>
        )}

        {view === "quiz" && (
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <aside className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Choose Module</div>
              <div className="mt-4 space-y-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold ${activeModule === module.id ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800 ring-1 ring-slate-200"}`}
                  >
                    {module.title}
                  </button>
                ))}
              </div>
            </aside>

            <main className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Module Assessment</div>
                  <h2 className="mt-2 text-2xl font-bold">{currentQuiz?.title || "Quiz"}</h2>
                </div>
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                  Score: {scoreQuiz(activeModule).correct}/{scoreQuiz(activeModule).total}
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {(currentQuiz?.questions || []).length === 0 && (
                  <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600 ring-1 ring-slate-200">No multiple choice questions are loaded for this module yet.</div>
                )}
                {(currentQuiz?.questions || []).map((q, index) => {
                  const selected = quizAnswers[`${activeModule}-${index}`];
                  return (
                    <div key={q.prompt} className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
                      <div className="text-sm font-semibold text-slate-900">{index + 1}. {q.prompt}</div>
                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        {(q.options ?? []).map((option, i) => {
                          const isCorrect = selected !== undefined && q.answer === i;
                          const isWrongChoice = selected === i && q.answer !== i;
                          return (
                            <button
                              key={option}
                              onClick={() => setQuizAnswers((prev) => ({ ...prev, [`${activeModule}-${index}`]: i }))}
                              className={`rounded-2xl px-4 py-3 text-left text-sm ring-1 transition ${isCorrect ? "bg-emerald-50 ring-emerald-300" : isWrongChoice ? "bg-rose-50 ring-rose-300" : selected === i ? "bg-slate-200 ring-slate-300" : "bg-white ring-slate-200 hover:bg-slate-100"}`}
                            >
                              <span className="font-semibold">{String.fromCharCode(65 + i)}.</span> {option}
                            </button>
                          );
                        })}
                      </div>
                      {selected !== undefined && (
                        <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                          <span className="font-semibold">Explanation:</span> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </main>
          </div>
        )}

        {view === "final" && (
          <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Assessment Deliverable</div>
            <h2 className="mt-2 text-2xl font-bold">Final Practice Exam</h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Open the full AI-powered practice doc to test yourself with comparisons, frameworks, and application questions.
            </p>
            <a
              href="https://v0-mo302-exam-simulator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open Full Practice Doc →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}