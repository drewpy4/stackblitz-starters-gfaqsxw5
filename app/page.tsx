"use client";
import React, { useState, useMemo } from "react";
export default function StudyHubApp() {
  
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
              "PCA reduces many correlated variables into a smaller number of components.",
              "Exploratory Factor Analysis models latent traits rather than just compressing variance.",
              "Big Five is empirically derived and dimensional; MBTI is typological and less empirically supported."
            ],
            concepts: [
              {
                heading: "PCA",
                bullets: [
                  "Creates orthogonal principal components.",
                  "First component captures maximum variance.",
                  "Descriptive transformation rather than a latent-cause model."
                ]
              },
              {
                heading: "Exploratory Factor Analysis",
                bullets: [
                  "Assumes hidden latent traits influence observed variables.",
                  "Separates common variance, unique variance, and error.",
                  "Explains where variance comes from rather than only summarizing it."
                ]
              },
              {
                heading: "Scree Plot",
                bullets: [
                  "Plots eigenvalue by component.",
                  "Retain components near the elbow where added variance begins flattening."
                ]
              }
            ],
            keyTakeaways: [
              "PCA = summarize variance.",
              "EFA = model latent structure.",
              "Big Five has stronger empirical support than MBTI."
            ],
            workedExample: {
              prompt: "You have 20 correlated personality survey items and need to simplify them.",
              steps: [
                "Build the correlation matrix.",
                "Run PCA or EFA depending on whether the goal is compression or latent explanation.",
                "Use a scree plot to estimate the number of dimensions.",
                "Interpret loadings to label components or factors."
              ]
            },
            mistakes: [
              "Saying PCA finds true underlying causes.",
              "Confusing orthogonal components with latent traits.",
              "Treating MBTI as equally supported as Big Five."
            ],
            practice: [
              {
                type: "short",
                question: "What is the key conceptual difference between PCA and EFA?",
                answer: "PCA compresses variance into components, while EFA models hidden latent factors that generate shared variance."
              },
              {
                type: "short",
                question: "Why is a scree plot useful?",
                answer: "It helps determine how many components to retain by showing where additional components stop adding much variance."
              },
              {
                type: "mcq",
                question: "Principal components are typically:",
                options: ["Correlated", "Orthogonal", "Categorical", "Random"],
                correctIndex: 1,
                answer: "Orthogonal."
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
              "Culture shapes expectations, coordination, and what feels normal.",
              "Culture creates similarities within groups and differences across groups.",
              "Trust is an important economic variable and varies widely across societies."
            ],
            concepts: [
              {
                heading: "Culture Frameworks",
                bullets: [
                  "Tylor: culture as a complex whole of beliefs, customs, and practices.",
                  "Boas: reactions and behavior in relation to environment and others.",
                  "Bourdieu: habitus as durable dispositions that feel natural."
                ]
              },
              {
                heading: "Comparisons",
                bullets: [
                  "Hot vs cold cultures = openness to change vs stability.",
                  "Individualistic vs collectivistic cultures = autonomy vs interdependence.",
                  "Tight vs loose cultures = strong norms vs tolerant norms."
                ]
              },
              {
                heading: "Trust",
                bullets: [
                  "Trust supports cooperation and exchange.",
                  "The World Values Survey measures cross-country trust differences.",
                  "Culture acts as a coordination mechanism, not just a symbolic system."
                ]
              }
            ],
            keyTakeaways: [
              "Culture affects reasoning, hospitality, coordination, and public behavior.",
              "Trust has economic significance.",
              "Cultural dimensions can be measured statistically."
            ],
            workedExample: {
              prompt: "Compare a tight culture with a loose culture in a public transit setting.",
              steps: [
                "Identify the strength of norms.",
                "Describe tolerance for deviance.",
                "Explain how behavior in shared public spaces would differ."
              ]
            },
            mistakes: [
              "Reducing culture to food or tradition only.",
              "Ignoring culture’s role in coordination.",
              "Assuming trust is purely individual rather than also societal."
            ],
            practice: [
              {
                type: "short",
                question: "What does Bourdieu mean by habitus?",
                answer: "Durable, socially shaped dispositions and practices that feel natural even when not explicitly taught."
              },
              {
                type: "mcq",
                question: "Tight cultures are generally associated with:",
                options: ["Weak norms", "High tolerance for deviance", "Strong norms", "No coordination"],
                correctIndex: 2,
                answer: "Strong norms."
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
              "Emotion sits at the intersection of personality and culture.",
              "Some emotions are biologically universal, but display rules vary across cultures.",
              "Emotional intelligence affects adaptation, coordination, and leadership."
            ],
            concepts: [
              {
                heading: "Universal Emotion",
                bullets: [
                  "Ekman’s universal emotions include anger, fear, sadness, happiness, disgust, surprise, and contempt.",
                  "Micro-expressions can reveal hidden emotion."
                ]
              },
              {
                heading: "Emotional Intelligence",
                bullets: [
                  "EI involves perceiving, understanding, and regulating emotion.",
                  "Theory of Mind helps infer others’ beliefs and intentions.",
                  "EI overlaps with personality more than IQ does."
                ]
              },
              {
                heading: "Team Effects",
                bullets: [
                  "Emotional contagion spreads mood through groups.",
                  "High-EI teams adapt and recover faster.",
                  "Emotion is information rather than irrational noise."
                ]
              }
            ],
            keyTakeaways: [
              "Positive and negative mood influence thinking.",
              "Contempt is a powerful signal in relationships and organizations.",
              "Emotion improves leadership when it is recognized and used constructively."
            ],
            workedExample: {
              prompt: "A team is tense, quiet, and defensive after a setback. How might EI improve performance?",
              steps: [
                "Surface the emotional tone instead of ignoring it.",
                "Encourage reappraisal rather than suppression.",
                "Use open communication to reduce contagion of negative affect."
              ]
            },
            mistakes: [
              "Calling emotion irrational noise.",
              "Confusing fake smiles with genuine Duchenne smiles.",
              "Assuming emotional labor has no cost."
            ],
            practice: [
              {
                type: "short",
                question: "What is emotional contagion?",
                answer: "The spread of emotion from one person to others within a group."
              },
              {
                type: "mcq",
                question: "A Duchenne smile involves:",
                options: ["Only the mouth", "Only the eyebrows", "Mouth and eye muscles", "No facial muscles"],
                correctIndex: 2,
                answer: "Mouth and eye muscles."
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
              "Human thinking involves fast and slow systems.",
              "Biases like anchoring, loss aversion, and sunk cost shape judgment.",
              "Reason may have evolved partly for justification and argument in social groups."
            ],
            concepts: [
              {
                heading: "System 1 vs System 2",
                bullets: [
                  "System 1 = fast, automatic, intuitive.",
                  "System 2 = slow, deliberate, effortful but often lazy."
                ]
              },
              {
                heading: "Key Biases",
                bullets: [
                  "Anchoring: first number influences judgment.",
                  "Loss aversion: losses loom larger than gains.",
                  "Sunk cost: continuing because resources were already spent."
                ]
              },
              {
                heading: "Social Reasoning",
                bullets: [
                  "Reason supports justification and argumentation.",
                  "Groups can outperform individuals at spotting flaws in logic.",
                  "Better decisions come from broadening futures, objectives, and options."
                ]
              }
            ],
            keyTakeaways: [
              "Bias is systematic, not random.",
              "System 2 does not always rescue us.",
              "Structured reflection improves judgment."
            ],
            workedExample: {
              prompt: "How can you outsmart your own bias before a major decision?",
              steps: [
                "Generate low, medium, and high future scenarios.",
                "Run a premortem.",
                "Use an outside view.",
                "Compare multiple options side by side."
              ]
            },
            mistakes: [
              "Assuming experience automatically removes bias.",
              "Treating gut feeling as always wrong or always right.",
              "Evaluating only one future or one option."
            ],
            practice: [
              {
                type: "short",
                question: "What is loss aversion?",
                answer: "The tendency to feel losses more strongly than equivalent gains."
              },
              {
                type: "mcq",
                question: "System 2 is best described as:",
                options: ["Fast and intuitive", "Slow and effortful", "Emotional only", "Always accurate"],
                correctIndex: 1,
                answer: "Slow and effortful."
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
            title: "Session 6 — Bias, Diversity, Foxes vs Hedgehogs",
            studyTime: "15 min",
            importance: "High",
            difficulty: "Low",
            overview: [
              "Decision making can be viewed through cognitive, emotional, and behavioral lenses.",
              "Bias shapes judgment in many predictable ways.",
              "Diverse groups often make better predictions than homogeneous experts."
            ],
            concepts: [
              { heading: "Three Lenses", bullets: ["Cognitive: risk and payoffs.", "Emotional: what you feel.", "Behavioral: what actions you take."] },
              { heading: "Biases", bullets: ["Confirmation, conformity, authority, loss aversion, action bias, framing, anchoring, base rate neglect, and more."] },
              { heading: "Diversity", bullets: ["Crowd error = average error − diversity.", "Different models capture different parts of the system.", "Foxes use many models; hedgehogs stick to one."] }
            ],
            keyTakeaways: ["Process matters more than people think.", "Model diversity improves prediction.", "Bias distorts every phase of judgment."],
            workedExample: {
              prompt: "Why might a diverse forecasting team beat a team of individual stars?",
              steps: ["Different people use different models.", "Those models capture different parts of reality.", "Diversity reduces aggregate error."]
            },
            mistakes: ["Assuming confidence equals accuracy.", "Ignoring base rates.", "Choosing a team only by individual excellence."],
            practice: [
              { type: "short", question: "What is the difference between a fox and a hedgehog thinker?", answer: "Foxes use many models; hedgehogs commit strongly to one dominant model." },
              { type: "mcq", question: "Which bias involves overweighting the first number you hear?", options: ["Sunk cost", "Anchoring", "Optimism bias", "Conformity"], correctIndex: 1, answer: "Anchoring." }
            ]
          },
          {
            id: "l8",
            title: "Session 8 — Feedback and Shapley Value",
            studyTime: "12 min",
            importance: "Medium",
            difficulty: "Medium",
            overview: [
              "Feedback mostly redirects attention rather than motivation.",
              "Good feedback is positive, task-focused, and specific.",
              "Shapley value measures average marginal contribution in cooperative settings."
            ],
            concepts: [
              { heading: "Feedback Intervention Theory", bullets: ["Helpful feedback directs attention to task and approach.", "Bad feedback is personal, negative, or comparative."] },
              { heading: "Sandwich Method", bullets: ["Places criticism between two positive statements."] },
              { heading: "Shapley Value", bullets: ["Consider every ordering of players.", "Compute each person’s average added value.", "Useful for thinking about contribution in teams."] }
            ],
            keyTakeaways: ["Feedback should improve the work, not attack the person.", "Shapley value formalizes contribution."],
            workedExample: { prompt: "Why can negative, person-focused feedback fail?", steps: ["It shifts attention from task to self.", "It can trigger defensiveness.", "That reduces learning and improvement."] },
            mistakes: ["Using feedback mainly for comparison.", "Confusing loudness with contribution.", "Ignoring the structure of contribution."],
            practice: [
              { type: "short", question: "What does a Shapley value represent?", answer: "A person’s average marginal contribution across all possible coalition orders." }
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
              "Some problems are easy only under the right representation.",
              "Diverse teams outperform when they bring different peaks, perspectives, and search tools."
            ],
            concepts: [
              { heading: "Landscapes", bullets: ["Mount Fuji = one clear best peak.", "Rugged landscape = many local optima."] },
              { heading: "Heuristics", bullets: ["Topological, gradient, error-allowing/simulated annealing, and population/genetic heuristics."] },
              { heading: "Diversity Logic", bullets: ["A team peak is only a peak if it is a peak for every member.", "Different perspectives reveal paths others cannot see."] }
            ],
            keyTakeaways: ["Representation changes problem difficulty.", "No free lunch: no heuristic is best for all problems.", "Diversity is a search advantage."],
            workedExample: { prompt: "Why can a diverse team escape a local optimum?", steps: ["One member may see a better neighbor from a different perspective.", "That path becomes visible to the team."] },
            mistakes: ["Thinking one best thinker always forms the best team.", "Using one heuristic on every problem."],
            practice: [
              { type: "mcq", question: "A rugged landscape is hard because it has:", options: ["No solutions", "One obvious peak", "Many local optima", "No information"], correctIndex: 2, answer: "Many local optima." }
            ]
          },
          {
            id: "l10",
            title: "Session 10 — Creativity and Pecha Kucha",
            studyTime: "14 min",
            importance: "Medium",
            difficulty: "Low",
            overview: [
              "Creativity is largely recombination.",
              "Ideas move through origination, development, evaluation, and adoption.",
              "Strong presentations are simple, unexpected, concrete, credible, emotional, and story-driven."
            ],
            concepts: [
              { heading: "Creativity", bullets: ["New ideas often recombine old parts.", "Start point matters: familiar marks yield incremental ideas, novel marks can spark creativity."] },
              { heading: "Adjacent Possible", bullets: ["Innovation moves stepwise based on what already exists."] },
              { heading: "Made to Stick", bullets: ["Simple, Unexpected, Concrete, Credible, Emotional, Stories."] }
            ],
            keyTakeaways: ["Creativity is not magic.", "Novel ideas often need familiarity infused into them.", "Presentation quality depends on memorable structure."],
            workedExample: { prompt: "How might you make a wild idea usable?", steps: ["Start with a novel mark.", "Blend in familiar elements.", "Make the result legible and practical to others."] },
            mistakes: ["Equating creativity with randomness.", "Forgetting adoption matters too."],
            practice: [
              { type: "short", question: "What does it mean that creativity is recombination?", answer: "Most new ideas combine existing elements in a new way rather than appearing from nothing." }
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
            title: "Leadership — High-Performing Teams",
            studyTime: "20 min",
            importance: "Very High",
            difficulty: "Medium",
            overview: [
              "Teams can generate synergy or major process losses.",
              "Structure explains much of team performance.",
              "Psychological safety enables learning behaviors that improve results."
            ],
            concepts: [
              { heading: "Hackman", bullets: ["Actual performance = potential − process losses.", "Common failures: bad structure, unclear direction, poor support, weak coaching."] },
              { heading: "Edmondson", bullets: ["Psychological safety means it feels safe to ask, admit, and challenge.", "Safety drives learning, which then improves performance."] },
              { heading: "Collective Intelligence", bullets: ["Equal participation and social awareness beat one dominant star."] }
            ],
            keyTakeaways: ["Structure matters enormously.", "Safety supports learning and speaking up.", "Diversity helps only with good process."],
            workedExample: { prompt: "A team is smart but underperforming. Diagnose it.", steps: ["Check for process losses.", "Check role clarity and direction.", "Assess psychological safety.", "Look for poor discussion structure or dominance by a few members."] },
            mistakes: ["Assuming talent alone guarantees team performance.", "Equating harmony with effectiveness.", "Ignoring shared mental models."],
            practice: [
              { type: "short", question: "Why does psychological safety matter?", answer: "It enables people to speak up, share mistakes, ask questions, and learn faster as a team." },
              { type: "mcq", question: "According to Hackman, teams often fail mainly because of:", options: ["Low raw IQ", "Bad structure", "Too much motivation", "Too many meetings only"], correctIndex: 1, answer: "Bad structure." }
            ]
          },
          {
            id: "l12",
            title: "Everest Simulation",
            studyTime: "14 min",
            importance: "High",
            difficulty: "Low",
            overview: [
              "The simulation shows that coordination and information sharing beat individual brilliance.",
              "Teams often over-discuss shared information and ignore unique information.",
              "Leadership quality strongly changes outcomes."
            ],
            concepts: [
              { heading: "Information Sharing", bullets: ["Shared info feels safer, so teams repeat it too much.", "Unique info often holds the real key to the decision."] },
              { heading: "Leadership", bullets: ["Good leaders surface hidden information and delay judgment.", "Bad leaders decide early and dominate discussion."] },
              { heading: "Conflict", bullets: ["Task conflict can help.", "Relationship conflict hurts."] }
            ],
            keyTakeaways: ["Talk quality beats talk quantity.", "Shared and unique info must be integrated.", "Engagement predicts performance."],
            workedExample: { prompt: "Why did some Everest teams fail despite smart members?", steps: ["They discussed shared info only.", "Unique role-specific info stayed hidden.", "Goals were not aligned.", "Leaders locked in too early."] },
            mistakes: ["Believing discussion volume equals good teamwork.", "Ignoring incentive conflicts between roles."],
            practice: [
              { type: "short", question: "What is the core information problem in Everest?", answer: "Teams focus too much on shared information and fail to surface unique information held by individual roles." }
            ]
          },
          {
            id: "l13",
            title: "Firm Structure",
            studyTime: "18 min",
            importance: "High",
            difficulty: "Medium",
            overview: [
              "Organizations can be viewed as machines, social groups, or open systems.",
              "Structure shapes incentives, communication, and coordination.",
              "There is no universally best structure; fit matters."
            ],
            concepts: [
              { heading: "Core Dimensions", bullets: ["Specialization, departmentalization, chain of command, span of control, centralization, formalization, boundary spanning."] },
              { heading: "Structures", bullets: ["Functional, product, customer, geographic, team-based, matrix, hybrid, network."] },
              { heading: "Congruence", bullets: ["Strategy, structure, people, and process must align.", "Mismatches reduce performance."] }
            ],
            keyTakeaways: ["Structure changes information flow.", "Structural holes create brokerage value.", "Efficiency and flexibility trade off."],
            workedExample: { prompt: "Why might a matrix structure create problems?", steps: ["Two bosses increase collaboration potential.", "But they can also create confusion and power struggles."] },
            mistakes: ["Looking for one perfect org chart.", "Ignoring how structure changes culture and incentives."],
            practice: [
              { type: "mcq", question: "A matrix structure is characterized by:", options: ["No managers", "Two reporting lines", "No specialization", "Full outsourcing only"], correctIndex: 1, answer: "Two reporting lines." }
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
            title: "Networks, Negotiation, and Motivation",
            studyTime: "20 min",
            importance: "Very High",
            difficulty: "Medium",
            overview: [
              "Networks create social capital, especially through weak ties and bridging positions.",
              "Negotiation works best when framed as problem-solving instead of zero-sum combat.",
              "Motivation depends on both what people value and how incentives are structured."
            ],
            concepts: [
              { heading: "Networks", bullets: ["Degree, path length, betweenness, clustering coefficient.", "Weak ties provide non-redundant information.", "Bridging and bonding serve different purposes."] },
              { heading: "Negotiation", bullets: ["BATNA, reservation point, target point, ZOPA.", "Distributive = claim value; integrative = create value.", "Anchors work especially well when precise."] },
              { heading: "Motivation", bullets: ["SMART goals structure effort.", "Herzberg distinguishes hygiene factors from motivators.", "Goodhart, Campbell, and Cobra effects warn against bad metrics."] }
            ],
            keyTakeaways: ["Bridge ties matter in critical moments.", "Preparation is central in negotiation.", "Metrics can distort behavior if they become the target."],
            workedExample: { prompt: "How can someone improve job search outcomes using network theory?", steps: ["Reactivate dormant ties.", "Reach outside the immediate friend group.", "Target bridge contacts for novel information."] },
            mistakes: ["Relying only on close contacts.", "Walking into a negotiation without a BATNA.", "Assuming any metric always improves performance."],
            practice: [
              { type: "short", question: "What is BATNA?", answer: "Your best alternative to a negotiated agreement—your fallback option if the deal fails." },
              { type: "mcq", question: "Which network position often has brokerage power?", options: ["Isolated node", "High betweenness node", "Lowest degree node", "Random node"], correctIndex: 1, answer: "A high betweenness node." }
            ]
          },
          {
            id: "l20",
            title: "RACI, Organizational Change, and Influence",
            studyTime: "16 min",
            importance: "High",
            difficulty: "Low",
            overview: [
              "RACI clarifies who does what in a project.",
              "Change is more successful when urgency, coalition, communication, and short wins are present.",
              "Influence tactics work, but each has corresponding defenses."
            ],
            concepts: [
              { heading: "RACI", bullets: ["Responsible does the work.", "Accountable owns the result.", "Consulted gives input.", "Informed stays updated."] },
              { heading: "Kotter", bullets: ["Urgency, coalition, vision, communication, removing obstacles, short-term wins, building change, anchoring change."] },
              { heading: "Cialdini", bullets: ["Reciprocity, liking, social proof, authority, commitment/consistency, scarcity, unity."] }
            ],
            keyTakeaways: ["Role clarity prevents confusion.", "Change requires sustained communication.", "Influence methods are powerful but should be recognized critically."],
            workedExample: { prompt: "How does RACI help a group project?", steps: ["Assign one responsible owner per task.", "Assign one accountable person.", "Define who must be consulted and informed.", "Reduce ambiguity and bottlenecks."] },
            mistakes: ["Giving one task multiple owners without clarity.", "Thinking change will happen just because the idea is good."],
            practice: [
              { type: "mcq", question: "In RACI, the person who owns the final result is:", options: ["Responsible", "Accountable", "Consulted", "Informed"], correctIndex: 1, answer: "Accountable." }
            ]
          },
          {
            id: "l24",
            title: "The Choice, Matching, AI, and Power",
            studyTime: "18 min",
            importance: "Medium",
            difficulty: "Medium",
            overview: [
              "Allocation can happen through markets, hierarchies, democracy, self-organization, or algorithms.",
              "Matching systems have desirable properties like efficiency and strategy-proofness.",
              "Multi-agent AI can divide complex problems into coordinated subroles."
            ],
            concepts: [
              { heading: "Allocation Systems", bullets: ["Markets reveal preferences via prices.", "Hierarchies centralize decisions.", "Algorithms allocate from input rules and data."] },
              { heading: "Matching", bullets: ["Gale-Shapley is central for two-sided matching.", "Desiderata include Pareto efficiency, monotonicity, consistency, and strategy-proofness."] },
              { heading: "AI + Power", bullets: ["Multiple agents can tackle subproblems in parallel.", "Power also involves brand, network, presence, and use of influence."] }
            ],
            keyTakeaways: ["Institution choice shapes culture and behavior.", "Matching systems are design problems.", "AI can mirror organizational structure."],
            workedExample: { prompt: "Why might a matching algorithm beat a simple market in some settings?", steps: ["Some systems need fairness or strategy-proofness.", "Markets may reward wealth or manipulation instead of fit."] },
            mistakes: ["Assuming all allocation mechanisms optimize the same thing.", "Ignoring the culture produced by structure."],
            practice: [
              { type: "short", question: "What makes Gale-Shapley important?", answer: "It provides a systematic way to produce stable two-sided matches and is strategy-proof on one side in common formulations." }
            ]
          }
        ]
      }
    ];
  
    const finalExam = [
      {
        section: "Part A — Concepts",
        items: [
          "Define psychological safety and explain why it affects team learning.",
          "Define BATNA, reservation point, and ZOPA.",
          "Explain the difference between PCA and EFA.",
          "What is the strength of weak ties?",
          "What problem does RACI solve?"
        ]
      },
      {
        section: "Part B — Application",
        items: [
          "Your team has high talent but poor performance. Diagnose the problem using Hackman and Edmondson.",
          "A manager wants to improve motivation using only metrics. Explain the danger using Goodhart’s Law and the Cobra Effect.",
          "A negotiator receives an aggressive first offer. Explain how anchoring works and how to respond.",
          "An Everest-style team is failing under pressure. Give three concrete process fixes."
        ]
      },
      {
        section: "Part C — Cases",
        items: [
          "Compare a tight culture and a loose culture in handling public rule violations.",
          "Explain why a diverse team may outperform a team of top individuals on a rugged landscape.",
          "Give one situation where an algorithmic allocation system is better than a hierarchy, and one where it is worse."
        ]
      }
    ];
  
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
      ).slice(0, 6)
    })), []);
  
    const [view, setView] = useState("home");
    const [activeModule, setActiveModule] = useState(modules[0].id);
    const [activeLecture, setActiveLecture] = useState(modules[0].lectures[0].id);
    const [revealed, setRevealed] = useState({});
    const [quizAnswers, setQuizAnswers] = useState({});
  
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
  
    const navButton = (label, target) => (
      <button
        onClick={() => setView(target)}
        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${view === target ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"}`}
      >
        {label}
      </button>
    );
  
    const StatPill = ({ label, value }) => (
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
                <p className="mt-2 max-w-3xl text-sm text-slate-600">
                  A clean, structured study site built from the lecture summary packet. Use the lecture pages for quick review, the module checks for active recall, and the final practice section for exam prep.
                </p>
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
                              {q.options.map((opt, i) => (
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
                          {q.options.map((option, i) => {
                            const isChosen = selected === i;
                            const isCorrect = selected !== undefined && q.answer === i;
                            const isWrongChoice = selected === i && q.answer !== i;
                            return (
                              <button
                                key={option}
                                onClick={() => setQuizAnswers((prev) => ({ ...prev, [`${activeModule}-${index}`]: i }))}
                                className={`rounded-2xl px-4 py-3 text-left text-sm ring-1 transition ${isCorrect ? "bg-emerald-50 ring-emerald-300" : isWrongChoice ? "bg-rose-50 ring-rose-300" : isChosen ? "bg-slate-200 ring-slate-300" : "bg-white ring-slate-200 hover:bg-slate-100"}`}
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
              <div className="border-b border-slate-200 pb-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Assessment Deliverable</div>
                <h2 className="mt-2 text-2xl font-bold">Final Practice Exam</h2>
                <p className="mt-2 max-w-3xl text-sm text-slate-600">
                  These prompts are designed to match the class style: comparisons, frameworks, and applications rather than memorization only.
                </p>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {finalExam.map((section) => (
                  <div key={section.section} className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <h3 className="text-lg font-semibold">{section.section}</h3>
                    <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {section.items.map((item, i) => <li key={item}><span className="font-semibold">{i + 1}.</span> {item}</li>)}
                    </ol>
                  </div>
                ))}
              </div>
  
              <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-semibold">Suggested Grading Rubric</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  {[
                    ["Accuracy", "Concepts are correct and use the right framework."],
                    ["Clarity", "Explanation is organized and easy to follow."],
                    ["Application", "Uses theory to diagnose or solve a scenario."],
                    ["Comparison", "Distinguishes between similar frameworks cleanly."]
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl bg-white/10 p-4">
                      <div className="font-semibold">{title}</div>
                      <div className="mt-2 text-sm text-slate-200">{body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
