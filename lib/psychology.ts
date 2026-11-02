export const manipulationScenarios: {
  prompt: string;
  answer: string;
  others: string[];
  explanation: string;
}[] = [
  {
    prompt:
      "A checkout says “Only 90 seconds left,” but the timer returns to 90 whenever you reload. What is the best next step?",
    answer: "Ignore the timer and independently compare the offer",
    others: [
      "Buy before thinking",
      "Assume every discounted item is fraudulent",
      "Share payment details to hold the price",
    ],
    explanation:
      "The resetting timer is evidence that this urgency cue is unreliable. Check the actual price and terms. It does not, by itself, establish that every product claim is false.",
  },
  {
    prompt:
      "An exam board publishes a registration deadline on its official site and explains the late-registration policy. Is the deadline alone evidence of manipulation?",
    answer: "No; a verifiable deadline can be legitimate",
    others: [
      "Yes, every deadline is manipulation",
      "Yes, any authority claim is false",
      "No, therefore every other claim on the site is true",
    ],
    explanation:
      "Check the original notice, relevant date, and policy. Pressure and a real time limit are not the same thing. Judge each claim on its evidence.",
  },
  {
    prompt:
      "“If you cared about me, you would share your password.” What reply best preserves your choice?",
    answer: "I care about you, and I do not share passwords",
    others: [
      "Share it to prove loyalty",
      "Diagnose the person from one sentence",
      "Give a fake password and escalate the argument",
    ],
    explanation:
      "The wording ties affection to compliance. You can acknowledge the relationship while keeping a clear boundary. You do not need to infer a diagnosis or intention to decline.",
  },
  {
    prompt:
      "A message says “Choose this policy or admit you hate progress.” What is missing?",
    answer: "Other possible positions and reasons",
    others: [
      "A stronger insult",
      "Proof that every policy is bad",
      "A more impressive title for the speaker",
    ],
    explanation:
      "The message presents a false dichotomy. Ask which other options exist and what evidence supports each. The policy itself still needs to be evaluated.",
  },
  {
    prompt:
      "A seller calls a required monthly subscription a “free gift” and places the recurring price only in an expandable footnote. What should you check?",
    answer: "The total recurring cost and cancellation terms",
    others: [
      "Only the headline price",
      "The number of colors in the logo",
      "Whether the seller sounds enthusiastic",
    ],
    explanation:
      "Important costs are obscured by the presentation. Find the complete terms and compare the total cost before consenting.",
  },
  {
    prompt:
      "A climate researcher summarizes measurements in her field and links the underlying data. How should you treat the expertise?",
    answer: "As relevant context while checking the evidence",
    others: [
      "As proof that every claim is infallible",
      "As manipulation because she is an expert",
      "As irrelevant because opinions are all equal",
    ],
    explanation:
      "Relevant expertise is useful evidence about reliability, especially with transparent methods. Authority is neither automatic proof nor automatic manipulation.",
  },
  {
    prompt:
      "A celebrity with no relevant expertise says a memory product is scientifically proven, but provides no study. What would be most useful?",
    answer: "Independent evidence testing the specific claim",
    others: [
      "The celebrity’s follower count",
      "How expensive the product is",
      "Whether the endorsement is confident",
    ],
    explanation:
      "Popularity and unrelated status do not establish effectiveness. Look for relevant studies, a fair comparison, and outcomes that match the promise.",
  },
  {
    prompt:
      "A post describes a frightening event and links a report. What follows from the emotional wording alone?",
    answer: "The facts still need to be checked",
    others: [
      "The post must be false",
      "The post must be true",
      "The author must have a psychological disorder",
    ],
    explanation:
      "Emotion can draw attention, but it does not determine truth. Check the original source, context, date, and corroborating evidence.",
  },
  {
    prompt:
      "A page makes “Accept all” large and bright, while declining requires navigating several hidden screens. What is the concern?",
    answer: "Unequal effort may steer a choice away from your preference",
    others: [
      "Bright colors prove every claim is false",
      "You must accept because it is recommended",
      "All options are equally easy to choose",
    ],
    explanation:
      "Interface friction can influence decisions. Identify your preference first, then find the relevant control instead of treating prominence as endorsement.",
  },
  {
    prompt:
      "Someone gives you an unsolicited small gift, then demands a large favor as repayment. What is a reasonable response?",
    answer: "Acknowledge the gift and decide on the request separately",
    others: [
      "You now owe any favor they choose",
      "All generosity is manipulation",
      "You must respond with an insult",
    ],
    explanation:
      "Reciprocity can create a sense of obligation, but an unsolicited gift does not remove your choice. Consider the new request on its own terms.",
  },
  {
    prompt:
      "A charity shares a genuine urgent need, shows its accounts, and accepts a refusal without pressure. What is supported by this description?",
    answer: "The request alone does not establish manipulation",
    others: [
      "All emotional appeals are deceptive",
      "You must donate to be a good person",
      "Transparency guarantees the charity can never err",
    ],
    explanation:
      "A request may be emotional and legitimate. Examine the evidence, your priorities, and whether your choice is respected.",
  },
  {
    prompt:
      "A speaker dismisses a study by mocking the researcher’s appearance. What should the discussion return to?",
    answer: "The study’s methods, data, and inference",
    others: [
      "A harsher personal insult",
      "Whether the researcher dresses well",
      "The speaker’s confidence",
    ],
    explanation:
      "A personal attack does not address the research. Relevant conflicts of interest can matter, but appearance is not a test of a finding.",
  },
  {
    prompt:
      "A service advertises “Everyone agrees this works,” without stating who was asked or how. What information is missing?",
    answer: "The sample, question, and supporting results",
    others: [
      "A louder slogan",
      "The most popular testimonial only",
      "Proof that agreement can never be informative",
    ],
    explanation:
      "Social proof can be meaningful when the group and measurement are relevant. An unsupported consensus claim needs a source and context.",
  },
  {
    prompt:
      "A headline blames a complex problem entirely on one group and offers no data. What is the strongest first response?",
    answer: "Ask for causal evidence and consider alternative explanations",
    others: [
      "Accept the blame because it is simple",
      "Assume the opposite group caused everything",
      "Repeat the accusation until it feels familiar",
    ],
    explanation:
      "Scapegoating substitutes a target for a causal account. Look for evidence that distinguishes the proposed cause from alternatives.",
  },
  {
    prompt:
      "A salesperson first asks for an enormous purchase, then presents a smaller one. What should guide the second decision?",
    answer: "Whether the smaller offer fits your needs and alternatives",
    others: [
      "Its price relative only to the enormous request",
      "The embarrassment of declining twice",
      "An obligation to compromise",
    ],
    explanation:
      "The first request can create an anchor or pressure to reciprocate a concession. Evaluate the actual offer independently.",
  },
  {
    prompt:
      "A message claims your bank account will close in 10 minutes and links to a password form. What is the best verification step?",
    answer: "Contact the bank through its independently known official channel",
    others: [
      "Use the message’s link immediately",
      "Reply with your password",
      "Forward it to everyone before checking",
    ],
    explanation:
      "Urgency plus a credential request is a reason to verify independently. Use a known official app, website, or contact method rather than the supplied link.",
  },
];
export interface Guide {
  id: string;
  category: string;
  title: string;
  summary: string;
  steps: string[];
  question: string;
  answer: string;
  application: string;
  source: string;
}
export const guides: Guide[] = [
  {
    id: "recall",
    category: "Memory",
    title: "Recall before you look",
    summary: "Familiar is not the same as remembered.",
    steps: [
      "Read one short section, then close it.",
      "Write its main idea from memory, even if incomplete.",
      "Reopen the source and correct specific gaps.",
      "Return tomorrow and try again.",
    ],
    question: "Why can rereading feel easier without proving you remember?",
    answer:
      "The visible material supplies cues. You may recognize it without being able to retrieve it later. A closed-book attempt reveals which parts you can produce.",
    application:
      "Turn one paragraph from your current subject into a question in your study space.",
    source: "1",
  },
  {
    id: "spacing",
    category: "Memory",
    title: "Let some time pass",
    summary: "Return to useful material after a gap.",
    steps: [
      "Create one clear question with a checked answer.",
      "Attempt recall before revealing it.",
      "Use Again for a miss, not for a slow but correct answer.",
      "Rate honestly so the next interval reflects your experience.",
    ],
    question: "Why does endless new content not replace spaced review?",
    answer:
      "New questions can train a procedure, but they do not necessarily revisit the specific fact or explanation you forgot. Spacing is about returning to learned material.",
    application:
      "Add one formula you need next month, including what its variables mean.",
    source: "3",
  },
  {
    id: "chunking",
    category: "Memory",
    title: "Make meaningful chunks",
    summary: "Group details using a structure you understand.",
    steps: [
      "Look for familiar units in a sequence or idea.",
      "Name each group rather than treating every detail separately.",
      "Reconstruct the parts from the groups.",
      "Check that the grouping has not changed the information.",
    ],
    question: "Why is arbitrary grouping different from understanding a chunk?",
    answer:
      "A useful chunk connects details through existing knowledge or a meaningful pattern. Drawing separators alone does not guarantee you can reconstruct the contents.",
    application:
      "Group the steps of an algorithm into initialize, repeat, and return. Recall what each part does.",
    source: "14",
  },
  {
    id: "loci",
    category: "Memory",
    title: "A familiar route",
    summary: "Use places to organize an ordered list.",
    steps: [
      "Choose five familiar places along a real route.",
      "Attach one vivid image to each location.",
      "Walk the route mentally to recall the items.",
      "Check omissions, then retrieve again after a gap.",
    ],
    question:
      "What does a memory palace help you store—and what does it not teach by itself?",
    answer:
      "It can organize items for recall. It does not automatically teach their meaning, how to solve related problems, or when a concept applies.",
    application:
      "Use five locations to remember five steps of a process. Then explain why the steps are in that order.",
    source: "8",
  },
  {
    id: "elaboration",
    category: "Learning",
    title: "Ask why the step works",
    summary: "Connect a worked answer to its principle.",
    steps: [
      "Solve or inspect one worked example.",
      "For each step, explain why it is permitted.",
      "Name an assumption the step needs.",
      "Try a new example without the solution visible.",
    ],
    question: "What makes “I just copied the next step” a weak explanation?",
    answer:
      "It does not connect the step to a rule or principle. A useful explanation says why the move is valid and when it would fail.",
    application:
      "Explain why multiplying both sides of an equation by the same nonzero number preserves equality.",
    source: "6",
  },
  {
    id: "interleaving",
    category: "Learning",
    title: "Choose the method",
    summary: "Mix related problems once you know the basics.",
    steps: [
      "Learn enough of two or three methods to attempt them.",
      "Mix problems without labels telling you which method to use.",
      "Before solving, choose a strategy and say why.",
      "Check both the strategy and the calculation.",
    ],
    question: "What extra skill does mixed math practice demand?",
    answer:
      "Recognizing which method fits the problem, rather than assuming the last method is still appropriate.",
    application:
      "Alternate a percentage change, a fraction of a quantity, and an average.",
    source: "5",
  },
  {
    id: "offloading",
    category: "Independent thinking",
    title: "Use help deliberately",
    summary: "Decide whether your goal is completion or learning.",
    steps: [
      "Name the skill you want to practice.",
      "Make a small first attempt without an answer generator.",
      "Ask for a hint or example when stuck.",
      "Close the help and solve a fresh version yourself.",
    ],
    question:
      "Why can an excellent assisted answer be weak evidence of your own learning?",
    answer:
      "The tool may have supplied the reasoning. Later performance without that help is a different outcome and should be checked directly.",
    application:
      "Predict a short program’s output before running it or asking AI. Compare your reasoning with the result.",
    source: "15–16",
  },
  {
    id: "friction",
    category: "Attention",
    title: "Make starting smaller",
    summary: "A clear first action is easier to begin.",
    steps: [
      "Choose a concrete cue, such as finishing breakfast.",
      "Attach one small action: answer one question.",
      "Prepare the material so starting needs no setup.",
      "After a missed day, use the same small action again.",
    ],
    question:
      "How is “after breakfast, recall one definition” different from “get smarter”?",
    answer:
      "It specifies an opportunity and a visible action. A broad aspiration does not say what to do when the moment arrives.",
    application:
      "Write an if–then plan in Settings. Keep the action small enough for an ordinary day.",
    source: "19",
  },
  {
    id: "breaks",
    category: "Attention",
    title: "Leave room for a pause",
    summary: "A break is a choice, not a failed session.",
    steps: [
      "Notice when you are rereading without processing.",
      "Pause at a natural boundary.",
      "Keep the next action written down.",
      "Return to that action, or stop with progress saved.",
    ],
    question:
      "Does a fixed timer guarantee restored attention or better performance?",
    answer:
      "No. Break research supports some fatigue and vigor benefits, but performance results depend on the task and the person. A timer is a practical structure.",
    application:
      "Before a break, write the next concrete step of your current task.",
    source: "21",
  },
  {
    id: "generation",
    category: "Independent thinking",
    title: "Make a first contribution",
    summary: "Produce something before comparing answers.",
    steps: [
      "Write a prediction, one equation, or a rough explanation.",
      "Keep the attempt small enough to be possible.",
      "Compare it with reliable feedback.",
      "Correct the reason, not just the final word.",
    ],
    question: "Why does generating an answer still need feedback?",
    answer:
      "A generated answer can be wrong. Feedback helps correct misconceptions; effort alone does not establish accuracy.",
    application:
      "Write the first two steps of a solution before opening a worked example.",
    source: "17–18",
  },
  {
    id: "calibration",
    category: "Psychology",
    title: "Check your confidence",
    summary: "A feeling of certainty is a prediction.",
    steps: [
      "Estimate confidence before seeing the answer.",
      "Check the answer using reliable evidence.",
      "Notice high-confidence errors and low-confidence successes.",
      "Ask what cue led you to that confidence.",
    ],
    question: "Why inspect a correct answer you guessed?",
    answer:
      "Correct guessing does not establish reliable retrieval. Feedback can strengthen knowledge even when the original response happened to be right.",
    application:
      "For your next five exam questions, mark confidence before checking the solutions.",
    source: "4",
  },
  {
    id: "confirmation",
    category: "Psychology",
    title: "Look for a reason to revise",
    summary: "Test a belief, not just its defense.",
    steps: [
      "State the claim precisely.",
      "Write what evidence would weaken it.",
      "Look for that evidence as seriously as supporting evidence.",
      "Update in proportion to quality, not comfort.",
    ],
    question:
      "Is finding one contrary story enough to overturn a well-supported claim?",
    answer:
      "No. Weigh the reliability, representativeness, and relevance of all the evidence. Considering alternatives is not treating all claims as equally likely.",
    application:
      "Choose a low-stakes belief about how you study and design a fair comparison.",
    source: "10–12",
  },
  {
    id: "base-rates",
    category: "Reasoning",
    title: "Count the right group",
    summary: "Ask what belongs in the denominator.",
    steps: [
      "Write a concrete total, such as 1,000 cases.",
      "Split it into the relevant base-rate groups.",
      "Count true and false flags separately.",
      "Divide the target group by the group named in the question.",
    ],
    question: "Among flagged items, what is the denominator?",
    answer:
      "All flagged items: true flags plus false flags. It is not all items, and it is not only the faulty items.",
    application: "Work through a detector example in Think in probabilities.",
    source: "13",
  },
  {
    id: "causality",
    category: "Reasoning",
    title: "Separate association from cause",
    summary: "Ask what else could explain the pattern.",
    steps: [
      "State exactly what was observed.",
      "Check whether selection or a third factor could matter.",
      "Consider whether the direction of cause might be reversed.",
      "Ask which comparison or experiment would distinguish explanations.",
    ],
    question:
      "Why might voluntary app users score better even if the app has no effect?",
    answer:
      "Users may already be more motivated, knowledgeable, or well resourced. Those differences can affect both app use and scores.",
    application:
      "Rewrite a causal headline as the narrower observation actually supported by its study.",
    source: "11–12",
  },
  {
    id: "pressure",
    category: "Manipulation literacy",
    title: "Notice manufactured urgency",
    summary: "A time limit is a cue to verify, not a verdict.",
    steps: [
      "Identify the exact deadline and its source.",
      "Look for checkable terms or an original announcement.",
      "Notice a timer that resets or a refusal to provide details.",
      "Pause a nonessential decision until you have enough information.",
    ],
    question:
      "How do a real registration deadline and a resetting sales timer differ?",
    answer:
      "The registration deadline can be checked against a published policy. A resetting timer undermines its claim that time is running out. Neither decides every other claim automatically.",
    application:
      "Compare one real deadline with one pressure cue. Name the evidence that distinguishes them.",
    source: "24–26",
  },
  {
    id: "boundaries",
    category: "Manipulation literacy",
    title: "Keep a choice available",
    summary: "You can acknowledge a feeling and decline a request.",
    steps: [
      "Separate the relationship from the particular request.",
      "Name your boundary clearly and briefly.",
      "Avoid debating whether you are a good person.",
      "Ask for time or written terms when you need them.",
    ],
    question: "What is the pressure cue in “if you cared, you would do this”?",
    answer:
      "The sentence makes affection or moral worth conditional on compliance. You can care about someone without accepting a particular request.",
    application:
      "Write a respectful refusal to an unreasonable request without insulting or diagnosing the other person.",
    source: "24–26",
  },
  {
    id: "verification",
    category: "Manipulation literacy",
    title: "Check before sharing",
    summary: "Emotional impact and factual accuracy are separate.",
    steps: [
      "State the factual claim without the emotional language.",
      "Find the original source, date, and context.",
      "Check whether other reliable evidence agrees.",
      "If the evidence is insufficient, say so instead of forwarding certainty.",
    ],
    question: "Does a frightening tone prove that a message is false?",
    answer:
      "No. A message can be emotionally worded and accurate, inaccurate, or uncertain. The facts need independent evaluation.",
    application:
      "For a headline, write one specific fact you would verify before sharing.",
    source: "24–27",
  },
  {
    id: "dark-patterns",
    category: "Manipulation literacy",
    title: "Read the choice architecture",
    summary: "Look beyond the biggest button.",
    steps: [
      "Decide what you want before following a highlighted option.",
      "Find the full cost, renewal terms, and cancellation path.",
      "Check defaults and preselected extras.",
      "Compare the effort required to accept and decline.",
    ],
    question: "Why can a hidden recurring charge change the meaning of “free”?",
    answer:
      "The headline omits a material future cost. Consent should be based on the complete offer, including renewal and cancellation terms.",
    application:
      "Describe how you would redesign an unequal accept/decline screen to make both choices clear.",
    source: "26",
  },
  {
    id: "divergence",
    category: "Creativity",
    title: "Change the category",
    summary: "Seek a different kind of idea, not just another wording.",
    steps: [
      "Generate a few rough answers without polishing them.",
      "Notice what category they share.",
      "Switch material, user, purpose, or constraint.",
      "Choose one idea and make it more workable.",
    ],
    question:
      "How can three different idea categories be more useful than ten near-identical ideas?",
    answer:
      "They explore different assumptions and solution spaces. More text alone is not evidence of originality or usefulness.",
    application:
      "Use the thinking notebook to invent three uses for an everyday object, then change the audience.",
    source: "22–23",
  },
  {
    id: "incubation",
    category: "Creativity",
    title: "Return with another angle",
    summary: "Step away after making a real attempt.",
    steps: [
      "Write down the problem and an initial idea.",
      "Take an undemanding break if it suits you.",
      "Return and propose an alternative.",
      "Compare what each idea explains or solves.",
    ],
    question: "Why does incubation not mean waiting indefinitely for an idea?",
    answer:
      "The evidence concerns a pause after engagement with a problem. You still need preparation, a return to the task, and evaluation of the idea.",
    application:
      "Save a rough idea in the notebook. Reopen it later and add a revision rather than replacing your first attempt.",
    source: "22–23",
  },
];
export const creativePrompts = [
  {
    prompt: "Find three unusual but useful uses for a paper clip.",
    constraint: "Now design one use for someone who cannot grip small objects.",
    reflection: "Which assumption did you change? What would you test?",
  },
  {
    prompt:
      "A student remembers definitions but struggles with new problems. Give three possible explanations.",
    constraint:
      "Design a small test that distinguishes two of your explanations.",
    reflection: "What result would make you change your mind?",
  },
  {
    prompt: "Design a way to remember appointments without a phone.",
    constraint: "Now make it work without reading or writing.",
    reflection: "Who would find this useful? Where could it fail?",
  },
  {
    prompt: "Explain a computer loop using two everyday analogies.",
    constraint: "Find where each analogy stops matching real code.",
    reflection: "Which analogy is clearer, and for which learner?",
  },
  {
    prompt: "Invent three ways to make a library easier to navigate.",
    constraint: "You have no budget and cannot add signs.",
    reflection:
      "Which idea could you try this week? What would count as improvement?",
  },
  {
    prompt:
      "List three explanations for a plant growing faster beside a window.",
    constraint: "Describe a comparison that separates light from temperature.",
    reflection: "What else would need to stay the same?",
  },
  {
    prompt: "Redesign your morning routine to remove one unnecessary decision.",
    constraint: "Make the change work even on a low-energy day.",
    reflection: "What concrete cue would start the new routine?",
  },
  {
    prompt: "Invent a simple game using only five stones.",
    constraint: "Make it cooperative instead of competitive.",
    reflection: "Which rule creates the interesting decision?",
  },
  {
    prompt: "Give three ways to explain fractions without using a pizza.",
    constraint: "One explanation must work without a picture.",
    reflection: "What common misunderstanding does each explanation prevent?",
  },
  {
    prompt: "Describe three uses for a cardboard box that are not storage.",
    constraint: "Combine two ideas into something useful for a classroom.",
    reflection: "Which feature serves the user, and which is decoration?",
  },
  {
    prompt:
      "A website gets more visitors but fewer purchases. Propose three causes.",
    constraint: "Design one measurement that would distinguish two causes.",
    reflection: "Which assumption would be most costly to leave untested?",
  },
  {
    prompt: "Design a reminder that does not interrupt someone.",
    constraint: "The person should be able to ignore it without guilt.",
    reflection: "How will they discover it at the right moment?",
  },
];

export const argumentScenarios = [
  {
    prompt:
      "“This method works because it is effective. We know it is effective because it works.” What would improve the argument?",
    answer: "Independent evidence of the claimed outcome",
    others: [
      "Repeating the same claim more confidently",
      "Replacing one word with a synonym",
      "A longer version of the same conclusion",
    ],
    explanation:
      "The reasons restate the conclusion. Circular reasoning supplies no independent support. Define an outcome and compare it with an appropriate alternative.",
  },
  {
    prompt:
      "A team says its new process helped because output rose. What comparison would be most informative?",
    answer:
      "A comparable group over the same period, with relevant differences addressed",
    others: [
      "The team’s favorite testimonial",
      "The new process’s name",
      "Output from an unrelated industry ten years earlier",
    ],
    explanation:
      "Changes over time can have other causes. A relevant comparison helps distinguish the intervention from background trends; random assignment would strengthen a causal design.",
  },
  {
    prompt:
      "“All successful founders wake at 5 a.m., so waking at 5 guarantees success.” What is missing?",
    answer:
      "People who wake at 5 and do not succeed, plus other explanatory factors",
    others: [
      "More photos of successful founders",
      "A stricter alarm clock",
      "A definition of sunrise",
    ],
    explanation:
      "The sample selects on success and mistakes an association for a sufficient cause. Include non-successes and consider competing explanations.",
  },
  {
    prompt:
      "A small study finds a benefit in one school. Which conclusion is most defensible?",
    answer:
      "The finding is promising in that setting; broader claims need more evidence",
    others: [
      "It works for every learner",
      "It cannot ever work elsewhere",
      "A small study proves nothing at all",
    ],
    explanation:
      "Avoid both overgeneralization and reflexive dismissal. Assess the design, uncertainty, and similarity of the new setting to the studied one.",
  },
  {
    prompt:
      "A bus route has twice as many incidents as another, but carries ten times as many trips. What should you compare?",
    answer: "Incident rates per comparable number of trips",
    others: [
      "Only the total incident count",
      "The routes’ colors",
      "The largest individual incident",
    ],
    explanation:
      "A fair denominator matters. Totals alone may make a higher-volume route appear riskier even when its per-trip rate is lower.",
  },
  {
    prompt:
      "A friend proposes a rule: “If a tile is blue, it must be round.” Which observation would refute it?",
    answer: "A blue tile that is not round",
    others: ["A round blue tile", "A round red tile", "A square red tile"],
    explanation:
      "To refute “if A, then B,” find A together with not-B. Cases without A do not test the promised consequence.",
  },
  {
    prompt:
      "Two explanations fit an observation equally well. What is the most useful next step?",
    answer: "Find a test on which their predictions differ",
    others: [
      "Choose the more vivid story",
      "Assume both are proven",
      "Repeat the original observation without a new prediction",
    ],
    explanation:
      "A discriminating test separates explanations. A result compatible with both does little to decide between them.",
  },
  {
    prompt:
      "An article calls a proposal bad because its supporter once made an unrelated mistake. What should you evaluate?",
    answer: "The proposal’s relevant reasons and evidence",
    others: [
      "Every mistake the supporter has ever made",
      "Whether the supporter is likable",
      "Whether the criticism is memorable",
    ],
    explanation:
      "A relevant reliability concern can matter, but an unrelated personal failure does not refute the proposal itself.",
  },
  {
    prompt:
      "You are certain a plan will succeed. What is a useful way to expose hidden assumptions?",
    answer: "Imagine it failed, then list plausible causes and checks for them",
    others: [
      "Avoid any contrary information",
      "Treat confidence as a guarantee",
      "List only the plan’s benefits",
    ],
    explanation:
      "A prospective failure review is a structured prompt for alternatives. It does not predict the future; test the risks it surfaces rather than treating every imagined failure as likely.",
  },
  {
    prompt:
      "A prediction is revised after the result is known. What record would help evaluate the original reasoning?",
    answer: "The original dated prediction, confidence, and reasons",
    others: [
      "Only the final explanation",
      "The most confident later statement",
      "A memory of what seemed obvious",
    ],
    explanation:
      "An advance record separates prediction from hindsight. Evaluate outcomes across several comparable predictions rather than one lucky or unlucky result.",
  },
  {
    prompt:
      "A debater argues against an extreme version of a moderate proposal. What is the constructive response?",
    answer:
      "Restate the actual proposal and address its strongest relevant reasons",
    others: [
      "Invent an even weaker version",
      "Assume agreement is required",
      "Avoid discussing the evidence",
    ],
    explanation:
      "A distorted position is easier to defeat but does not settle the real disagreement. An accurate restatement makes criticism more useful.",
  },
  {
    prompt:
      "You have one free hour. A task has some benefit, but another feasible task may have more. What additional cost matters?",
    answer: "The value of the best alternative you give up",
    others: [
      "Only money already spent",
      "Every imaginable alternative added together",
      "How long you have wanted the first task",
    ],
    explanation:
      "Opportunity cost is the value of the best forgone feasible alternative. Past investment alone should not determine the next choice.",
  },
];

guides.push(
  {
    id: "counterexample",
    category: "Reasoning",
    title: "Look for the breaking case",
    summary: "One true counterexample can refute a universal rule.",
    steps: [
      "Write the exact claim, including words like all and always.",
      "Ask what would have to exist for it to be false.",
      "Search for that case rather than another confirming example.",
      "Check that the example really meets the rule’s conditions.",
    ],
    question: "What refutes “every blue tile is round”?",
    answer:
      "A blue tile that is not round. A red square is not a counterexample because the rule says nothing about red tiles.",
    application:
      "Take a rule from your code and test the smallest input that might violate it.",
    source: "11–12",
  },
  {
    id: "opposite",
    category: "Reasoning",
    title: "Consider the opposite",
    summary: "Give an alternative a fair test.",
    steps: [
      "Write your current conclusion.",
      "Describe the strongest plausible alternative.",
      "List what each would predict.",
      "Look for evidence that separates those predictions.",
    ],
    question: "Why is merely imagining an alternative insufficient?",
    answer:
      "An alternative also needs evidence. The useful step is comparing predictions and checking which explanation fits reliable observations.",
    application:
      "Before adopting a study method, write another explanation for why a successful student uses it.",
    source: "10–12",
  },
  {
    id: "premortem",
    category: "Reasoning",
    title: "Imagine a plan that failed",
    summary: "Use a possible failure to discover a checkable risk.",
    steps: [
      "Choose a specific plan and outcome.",
      "Imagine the outcome was missed.",
      "List a few plausible causes, not every disaster you can invent.",
      "Choose one risk you can check or reduce now.",
    ],
    question: "Does an imagined failure show that it is likely to happen?",
    answer:
      "No. It generates hypotheses about risks. You still need evidence about their probability and impact.",
    application:
      "Before an exam plan, check whether you have left time for practice questions and correction. This is a reasoning prompt, not a validated forecast.",
    source: "10–12",
  },
  {
    id: "steelman",
    category: "Reasoning",
    title: "State the strongest fair version",
    summary: "Understand a position before criticizing it.",
    steps: [
      "Write the other position without insults or exaggeration.",
      "Identify its strongest relevant reason.",
      "Check whether the person would recognize your description.",
      "Critique the actual inference or evidence.",
    ],
    question: "Does stating an argument fairly require agreeing with it?",
    answer:
      "No. It helps identify the real disagreement so you can evaluate it accurately. A fair statement can still be followed by a strong criticism.",
    application:
      "Rewrite a disagreement about a learning method as two specific, testable claims.",
    source: "11–12",
  },
  {
    id: "estimates",
    category: "Reasoning",
    title: "Break a big estimate apart",
    summary: "Make assumptions visible before calculating.",
    steps: [
      "Define the quantity and its units.",
      "Split it into simpler factors you can roughly estimate.",
      "Use a plausible range for uncertain factors.",
      "Check which assumption changes the answer most.",
    ],
    question:
      "Why can a range be more honest than one precise-looking estimate?",
    answer:
      "Uncertain assumptions propagate into the result. Extra decimal places do not create reliable information.",
    application:
      "Estimate your weekly study time as sessions per week × minutes per session. Compare the estimate with your record.",
    source: "11–13",
  },
  {
    id: "teach-back",
    category: "Learning",
    title: "Teach it without the notes",
    summary: "Explain a small idea in plain language.",
    steps: [
      "Choose one concept, not a whole chapter.",
      "Explain it to an imagined beginner without looking.",
      "Give an example and a non-example.",
      "Check your explanation and repair the exact gap.",
    ],
    question: "Why include a non-example?",
    answer:
      "It tests the concept’s boundary: what looks similar but does not satisfy the definition. That helps distinguish understanding from memorized wording.",
    application:
      "Explain a loop invariant, then name a property that changes each iteration and is not invariant.",
    source: "1, 6",
  },
  {
    id: "prediction-log",
    category: "Psychology",
    title: "Write the prediction first",
    summary: "Give hindsight something concrete to compare with.",
    steps: [
      "Before an outcome, write what you expect.",
      "Include confidence and your main reason.",
      "Afterward, preserve the original entry.",
      "Review what was predictable, uncertain, or misjudged.",
    ],
    question: "Why keep a wrong prediction instead of editing it away?",
    answer:
      "It preserves information about your reasoning at the time. You can then distinguish a bad assumption from a reasonable prediction that had an unlikely outcome.",
    application:
      "Predict which exam topics you can answer without notes. Test them and compare.",
    source: "4, 10",
  },
  {
    id: "opportunity",
    category: "Reasoning",
    title: "Compare the next best use",
    summary: "A useful activity can still be the wrong priority.",
    steps: [
      "Name the decision you face now.",
      "List a few feasible alternatives.",
      "Compare future costs and benefits.",
      "Consider the best alternative you would give up.",
    ],
    question:
      "Why should an unrecoverable past cost not decide a new investment by itself?",
    answer:
      "The past cost cannot be changed. The current choice should compare future outcomes, including the best feasible alternative.",
    application:
      "Choose between another easy quiz and reviewing a weak exam topic. Compare what each is likely to help you do.",
    source: "10–12",
  },
);
