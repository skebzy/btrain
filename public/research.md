# Btrain: evidence and design rationale

Research checked 2 November 2026. This is a targeted evidence synthesis for the product, not a systematic review of every learning intervention. It uses original experiments, author manuscripts, original systematic reviews, and publisher records. The interface implements practical adaptations; the studies below did not test Btrain. Product implications are design judgments, not experimentally validated prescriptions.

## The useful distinction

Three activities can look like “brain training” while doing different things:

1. **Practising a task:** remembering sequences, calculating, tracing code, or evaluating arguments. Improvement is most defensible on that task and closely related tasks.
2. **Learning material:** remembering a formula, a psychology definition, a proof, or exam content. Retrieval, corrective feedback, and repeated practice across days address this directly.
3. **Transferring a skill:** applying knowledge to a substantially different problem. This needs varied examples and direct assessment of that new problem; a better game score is insufficient evidence.

Btrain should help the user practise identifiable skills and retain personally useful knowledge. It should not describe a composite activity score as intelligence, brain age, a diagnosis, or proof that all cognitive abilities improved. The transfer constraint is central to the working-memory evidence in source 9.

## Evidence ledger

### 1. Retrieve an answer before looking at it

**Roediger & Karpicke (2006), _Test-enhanced learning: Taking memory tests improves long-term retention_.** [Publisher record](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/), [DOI](https://doi.org/10.1111/j.1467-9280.2006.01693.x).

In two experiments using prose passages, retrieval improved delayed retention relative to additional study. Immediate performance and confidence could favour restudy even when delayed retention favoured testing. This separates the feeling of fluency from durable learning.

**Limit:** The experiment does not establish that every quiz format, timing, or subject produces the same effect, or that recall alone replaces understanding.

**Product implication:** Hide the answer until an attempt; permit “I don't know”; show the correct explanation afterward. Personal study cards should support recalling an answer before revealing it. Reward completed practice without treating initial mistakes as a failure of ability.

### 2. Retrieval has classroom evidence, with population limits

**Agarwal, Nunes & Blunt (2021), _Retrieval practice consistently benefits student learning: A systematic review of applied research in schools and classrooms_.** [Open publisher article](https://doi.org/10.1007/s10648-021-09595-9).

The original systematic review coded 50 classroom experiments, encompassing 5,374 participants. Most effect sizes indicated medium or large benefits, across several subjects and educational settings. Only 6% of experiments occurred outside WEIRD countries, limiting broad cultural generalisation.

**Limit:** Benefits vary with comparison activity, context, and implementation. A standalone consumer app is not equivalent to a teacher-supported classroom intervention.

**Product implication:** Make exam-specific questions and user-authored cards first-class activities. General trivia should not crowd out the material the learner actually needs. The research supports using retrieval, not marketing a particular proprietary score.

### 3. Spread practice across time

**Cepeda, Vul, Rohrer, Wixted & Pashler (2008), _Spacing effects in learning: A temporal ridgeline of optimal retention_.** [Publisher record](https://doi.org/10.1111/j.1467-9280.2008.02209.x), [author manuscript](https://laplab.ucsd.edu/articles/Cepeda%20et%20al%202008_psychsci.pdf).

More than 1,350 participants learned facts, reviewed them after varying gaps, and were tested after delays extending up to a year. The useful gap depended on the desired retention interval; longer spacing was not indefinitely better.

**Limit:** This does not validate any single universal interval sequence or the exact parameters of an app scheduler.

**Product implication:** Persist due dates, bring missed items back sooner, and increase intervals after successful recall. Distinguish same-session correction from next-day review. Explain that scheduling is a practical heuristic. Do not call a fixed schedule “scientifically optimal,” and do not equate endless fresh content with retention practice.

### 4. Feedback matters even after a correct guess

**Butler, Karpicke & Roediger (2008), _Correcting a metacognitive error: Feedback increases retention of low-confidence correct responses_.** [Research record](https://pubmed.ncbi.nlm.nih.gov/18605878/), [author PDF](https://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Butler-et-al-2008_JEPLMC.pdf).

Two experiments combined general-knowledge questions, confidence judgments, feedback, and later recall. Feedback supported correction of wrong answers and retention of answers initially correct with low confidence.

**Limit:** Confidence on a small quiz is noisy; this does not make confidence a personality trait or clinical measure.

**Product implication:** An optional confidence judgment before feedback can reveal confident errors and lucky answers. Show explanations for correct answers too. Any calibration display should compare predictions with observed outcomes and disclose the sample size; one day's score should not imply a stable change.

### 5. Mix related mathematics strategies

**Rohrer, Dedrick, Hartwig & Cheung (2020), _A randomized controlled trial of interleaved mathematics practice_.** [Author PDF](https://uweb.cas.usf.edu/~drohrer/pdfs/Rohrer_et_al_2020JEdPsych.pdf), [original abstract](https://eric.ed.gov/?id=EJ1237752).

In a preregistered cluster trial, 54 seventh-grade classes completed blocked or interleaved assignments over four months. The interleaved group performed better on an unannounced test about a month after the common review. Mixing required learners to identify the appropriate strategy from the problem.

**Limit:** This was curriculum practice with specific school mathematics; randomly switching among unrelated games is not the same intervention. Spacing also changes when topics are interleaved.

**Product implication:** Mix percentages, ratios, arithmetic, and algebra once the learner can attempt each. Include feedback that names the strategy. Generated variation should change both numbers and problem structure rather than only cosmetic wording.

### 6. Explain why a worked step is valid

**Chi, Bassok, Lewis, Reimann & Glaser (1989), _Self-explanations: How students study and use examples in learning to solve problems_.** [Open publisher article](https://doi.org/10.1207/s15516709cog1302_1).

Analysis of students studying mechanics examples associated successful learning with explanations that connected solution steps to underlying principles and monitored understanding.

**Limit:** This foundational study analysed differences between learners; it should not be represented as a large randomized trial of a generic “explain anything” button. Incorrect self-explanations need correction.

**Product implication:** Use prompts such as “Why does this step preserve equality?” and “What changes if the input is empty?” Follow an attempt with a clear worked solution. Prefer a meaningful explanation over a motivational message or a bare right/wrong indicator.

### 7. Teach coding through subgoals

**Margulieux, Morrison & Decker (2020), _Reducing withdrawal and failure rates in introductory programming with subgoal labeled worked examples_.** [Open original study](https://link.springer.com/article/10.1186/s40594-020-00222-7).

A semester-long quasi-experiment analysed 265 students. Subgoal instruction improved formative quizzes and was associated with fewer failures and withdrawals; mean exam performance was not significantly better.

**Limit:** Sections were not individually randomized. The mixed outcome is important: the study does not show that labels guarantee stronger exam results or general programming expertise.

**Product implication:** Break a trace into “initialise state,” “check the condition,” “update state,” and “read the result.” Include boundary cases and explain an off-by-one error. Code-output drills are a foundation; writing programs, debugging real projects, and testing solutions remain distinct skills needing direct practice.

### 8. Mnemonics can improve deliberately encoded recall

**Dresler and colleagues (2017), _Mnemonic training reshapes brain networks to support superior memory_.** [Original article](https://pmc.ncbi.nlm.nih.gov/articles/PMC5439266), [research record](https://pubmed.ncbi.nlm.nih.gov/28279356/).

The study compared memory athletes and controls and tested six weeks of mnemonic training. Method-of-loci training improved memory performance, with benefits followed over months and associated connectivity changes.

**Limit:** A small, specialised training study is not evidence of higher general intelligence or a whole-brain upgrade. Brain-imaging changes alone do not establish educational benefit.

**Product implication:** Offer the method of loci as an explicit encoding strategy: choose a familiar route, attach distinctive images to ordered places, then retrieve along that route. Chunking and imagery should be optional strategies for suitable material. Learning a list in order does not by itself teach its meaning.

### 9. Working-memory gains are usually narrower than the marketing

**Melby-Lervåg, Redick & Hulme (2016), _Working memory training does not improve performance on measures of intelligence or other measures of “far transfer”: Evidence from a meta-analytic review_.** [Original review](https://journals.sagepub.com/doi/10.1177/1745691616635612), [author repository](https://discovery.ucl.ac.uk/id/eprint/10120081/).

The meta-analysis found improvements on trained and closely related working-memory tasks, but no convincing generalisation to intelligence or academic skills, particularly against active controls. Small studies and weak comparison groups can inflate apparent benefits.

**Limit:** This is evidence about the reviewed training programmes, not proof that every form of learning cannot transfer. It does constrain broad claims about memory games.

**Product implication:** Label sequence and grid activities as recall practice. Track task accuracy, span, and exposure time. Never convert those results into IQ or “brain power,” or promise that longer sequences automatically improve coding, exams, or judgement.

### 10. Practise decisions, not just bias names

**Morewedge and colleagues (2015), _Debiasing decisions: Improved decision making with a single training intervention_.** [Original study](https://journals.sagepub.com/doi/pdf/10.1177/2372732215600886?download=true), [author manuscript](https://openaccess.city.ac.uk/12324/1/Debiasing_Decisions_PIBBS.pdf).

Two longitudinal experiments found reduced measured decision biases after videos or games; games with practice and personalised feedback produced larger effects. Improvements persisted at least two months and appeared across differing problem contexts.

**Limit:** Reduced bias on studied tasks does not establish immunity to bias in everyday life. Learning the vocabulary of bias is weaker evidence than making better decisions.

**Product implication:** Ask what evidence would weaken a claim, which comparison group is missing, or whether a sunk cost should affect a future choice. Explain the reasoning and revisit the same principle in a new context. Avoid labelling a person “irrational” from an answer.

### 11. Critical thinking needs repeated comparison and revision

**Holmes, Wieman & Bonn (2015), _Teaching critical thinking_.** [Research record](https://pubmed.ncbi.nlm.nih.gov/26283351/), [author manuscript](https://arxiv.org/abs/1508.04870).

Students practised comparing data with other data and with models, then acting on those comparisons. The study reported improvements in the measured scientific-reasoning behaviours following this explicit instruction.

**Limit:** Laboratory science reasoning is a particular setting; a multiple-choice argument game is only a partial adaptation.

**Product implication:** Include “What observation would change your conclusion?” and “Which next test distinguishes these explanations?” Teach uncertainty and alternative hypotheses. A plausible story should not automatically count as evidence for causation.

### 12. Explicit critical-thinking instruction has modest, varied effects

**Abrami and colleagues (2015), _Strategies for teaching students to think critically: A meta-analysis_.** [DOI](https://doi.org/10.3102/0034654314551063), [author-uploaded paper](https://www.researchgate.net/profile/Robert-Bernard-2/publication/281952187_Strategies_for_Teaching_Students_to_Think_Critically_A_Meta-Analysis/links/597c64bea6fdcc1a9aa08c1c/Strategies-for-Teaching-Students-to-Think-Critically-A-Meta-Analysis.pdf).

The review analysed 341 effect sizes from experimental and quasi-experimental work, finding a positive average effect with substantial variation between studies. Instructional context matters.

**Limit:** An aggregate effect does not validate every reasoning exercise. Dialogue, subject knowledge, and authentic problems are difficult to reproduce with short solo questions.

**Product implication:** Teach an identifiable reasoning move, demonstrate it, practise it in varied examples, and explain why alternatives fail. Treat canned scenarios as a starting collection with finite conceptual coverage; parameter changes do not create new theories.

### 13. Represent conditional probability as counts

**Gigerenzer & Hoffrage (1995), _How to improve Bayesian reasoning without instruction: Frequency formats_.** [Original paper in the Max Planck repository](https://pure.mpg.de/rest/items/item_2543495_7/component/file_2562163/content).

Experiments found that natural-frequency representations could make Bayesian problems easier to solve than conditional-probability representations. Representing the correct nested subsets reduces unnecessary calculation difficulty.

**Limit:** Frequencies do not ensure correct reasoning, and simply replacing percentages with arbitrary counts is not sufficient. Base rates and conditional groups must remain consistent.

**Product implication:** Use neutral examples such as defective components: among 1,000 items, count faulty items, true flags, and false flags; divide true flags by all flags. Show the denominator explicitly. Avoid using invented diagnostic examples as personal medical guidance.

### 14. Give stronger study methods priority over attractive rituals

**Dunlosky, Rawson, Marsh, Nathan & Willingham (2013), _Improving students' learning with effective learning techniques_.** [Original review](https://journals.sagepub.com/doi/full/10.1177/1529100612453266), [research record](https://pubmed.ncbi.nlm.nih.gov/26173288/).

The review evaluates ten techniques and rates practice testing and distributed practice highly. Other techniques have narrower or more conditional support; familiarity from rereading and highlighting is not a reliable substitute for demonstrating recall.

**Limit:** Utility ratings summarise a body of research at that time, not a universal ranking for every learner and task. Low general utility does not mean a technique can never help.

**Product implication:** Put answer retrieval, review scheduling, explanatory feedback, and relevant problem solving ahead of decorative gamification. Offer elaboration and mnemonic guidance when the material fits. Do not turn a preferred presentation format into an unsupported fixed learner type.

## Product rules derived from this research

These are implementation recommendations, with exact values chosen for usability rather than claimed as research findings.

### Immediate practice and long-term learning need separate records

For a generated drill, record the domain, problem family, difficulty, correctness, and completion time. For a retained learning item, also record the last review, next due date, successful recalls, and lapses. A new random arithmetic instance can practise a procedure; it cannot replace revisiting the specific definition or formula the learner forgot.

A reasonable scheduler can begin with short intervals and lengthen them after recall, resetting or shortening after an error. Display the actual due date and permit the learner to resume after missing a day. Calendar review should use the user's local day. Do not call a missed day lost learning, and do not make streak preservation more valuable than accurate practice.

### Use controlled variation

Procedural generators can supply many combinations of arithmetic operands, percentages, ratios, number patterns, grids, and loop parameters. The generator must calculate its own answer from the same parameters and reject invalid cases. Multiple-choice answers need to be distinct, plausible, and shuffled; answer position must not leak correctness. Numerical input needs a clear rounding or tolerance rule.

For critical thinking and psychology, retain an authored bank of correct concepts and explanations. Vary scenarios only where their causal or logical structure remains valid. “Never ending” should mean reusable practice with fresh instances, not an assertion of infinite authored knowledge. Repetition of principles is useful; constant novelty is not a learning objective by itself.

### Adapt to performance without pretending to measure intelligence

Raise difficulty after sustained success and reduce it after repeated difficulty. Avoid changing difficulty after every isolated mistake, and let the user select a level. Difficulty may mean more steps, fewer supports, or a longer delay—not only a faster clock. Exact thresholds are product heuristics requiring evaluation.

Timing should be optional except where presentation duration is the task. Slow correct reasoning is valuable in mathematics and argument evaluation. Memory tasks should explain whether order matters, how long items remain visible, and whether a repeat is a fresh attempt.

### Make errors useful

After an attempt, show the answer, the relevant reasoning, and a route to another example. Feedback should identify the operation or principle rather than praising intelligence. Give explanations for correct answers too, because correct guessing happens. A compact explanation can be expanded without interrupting the main practice flow.

### Keep the surface quiet

One clear task, one primary action, readable text, keyboard support, optional motion, and no countdown pressure by default are design choices appropriate to the user's request. A daily session can end cleanly while allowing more practice. Do not imply an exact session length has special neuroscience benefits. Research belongs in a readable reference view, with brief, honest descriptions beside exercises.

## What would count as improvement?

Show observed performance, not a synthetic biological claim. Useful measures include accuracy by skill, review completion, delayed recall on a card, and performance on a new instance of a familiar problem family. Keep speed separate from accuracy. If difficulty or problem mix changes, raw scores are not directly comparable.

A stronger evaluation would use an initial sample, comparable held-out problems, delayed checks, and separate transfer tasks. For example, better loop tracing should be checked separately from writing a function; better list recall separately from remembering an exam chapter. None of the cited studies establishes the effectiveness of this particular app. The appropriate promise is a calm place to practise and review, with methods chosen from the evidence above.

## Independent thinking, attention, frustration, creativity, and manipulation literacy

This extension responds to a learner who finds starting difficult, becomes annoyed or quits quickly, and wants to rely less on AI for thinking. Those experiences do not establish a diagnosis, permanent decline, or a cause. The design goal is to make useful independent practice easier to start and return to. The evidence supports particular learning behaviours, not a promise to cure an attention problem or reverse supposed damage from AI.

### 15. Assisted performance and independent learning are different outcomes

**Bastani and colleagues (2025), _Generative AI without guardrails can harm learning: Evidence from high school mathematics_.** PNAS, 122(26), e2422633122. [Original article](https://doi.org/10.1073/pnas.2422633122), [open full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/).

A randomized field experiment with nearly 1,000 students compared a standard GPT-4 interface, a tutor with instructional safeguards, and a control condition. Both AI conditions improved assisted practice; the standard interface impaired subsequent unaided performance relative to control. Tutor safeguards largely mitigated that harm, without establishing a positive unaided exam effect.

**Limit:** One school, mathematics, particular tools and instructional conditions. This does not show that all AI use harms cognition. The publisher notes an August 2025 affiliation correction; use the updated article.

**Product implication:** Ask for a first attempt, offer a small hint, then show a worked explanation; finish with a fresh unaided problem. Record use of help separately from independent correctness. An “I don't know yet” route should remain available so this does not become a forced wait.

### 16. Offloading is a strategy whose value depends on the goal

**Risko & Gilbert (2016), _Cognitive offloading_.** Trends in Cognitive Sciences, 20(9), 676–688. [Publisher record](https://doi.org/10.1016/j.tics.2016.07.002), [author manuscript](https://samgilbert.net/pubs/Risko2016TiCS.pdf).

This review examines using actions and external resources to reduce mental demand, and the role of metacognitive judgments in deciding to offload. Notes and reminders can improve task completion; their usefulness is distinct from remembering unaided.

**Limit:** This review predates current generative AI. It does not establish that keeping notes or using tools causes a general loss of ability.

**Product implication:** Encourage selecting the goal: complete a real task with appropriate tools, or practise a target skill unaided. In study mode, try recall before opening notes. Keep tools available for genuine assistance and avoid moralising about their use. “No help used” is a description of an attempt, not a badge of personal worth.

### 17. Generate part of an answer instead of only recognising it

**Slamecka & Graf (1978), _The generation effect: Delineation of a phenomenon_.** Journal of Experimental Psychology: Human Learning and Memory, 4(6), 592–604. [DOI](https://doi.org/10.1037/0278-7393.4.6.592), [author-uploaded original paper](https://www.researchgate.net/profile/Peter-Graf/publication/232485723_The_Generation_Effect_Delineation_of_a_Phenomenon/links/53f5eedf0cf2888a7491f9cb/The-Generation-Effect-Delineation-of-a-Phenomenon.pdf).

Five experiments found better memory for words participants generated than for equivalent words they read. These were constrained generation tasks, not open-ended expertise training.

**Limit:** The effect depends on the task and material. Generating an incorrect explanation without feedback can preserve a misconception.

**Product implication:** Let the user produce a number, predict an output, finish a definition, or write one reasoning step before seeing choices or examples. Ask for a manageable contribution rather than a polished essay. The answer and explanation remain necessary.

### 18. Productive struggle requires subsequent instruction

**Sinha & Kapur (2021), _When problem solving followed by instruction works: Evidence for productive failure_.** Review of Educational Research, 91(5), 761–798. [Open original meta-analysis](https://journals.sagepub.com/doi/full/10.3102/00346543211019105).

Across 53 studies and 166 comparisons, problem solving before instruction showed a moderate average advantage, especially where designs followed the intervention's principles. Results differed by learners and task; some comparisons favoured instruction first.

**Limit:** Deliberately designed exploration plus consolidation is not the same as withholding help, endless failure, or forcing a beginner to invent a method. The exact app sequence remains untested.

**Product implication:** Offer one bounded attempt, a smaller hint, and a worked example. “Make this easier” should reduce complexity without removing the underlying concept. After a miss, use a simpler related example, then return to a new version of the original problem. Do not require several failures to unlock help.

### 19. Connect a small action to a concrete cue

**Gollwitzer & Brandstätter (1997), _Implementation intentions and effective goal pursuit_.** Journal of Personality and Social Psychology, 73(1), 186–199. [Original paper](https://sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/gollwitzer_brandstatter_1997_-_implementation_intentions_effective_goal_pursuit.pdf), [author publication record](https://www.socmot.uni-konstanz.de/publications/implementation-intentions-and-effective-goal-pursuit).

The research distinguishes wanting an outcome from specifying when and how to act. Experiments supported linking action initiation to a planned opportunity.

**Limit:** A plan is not a guarantee of adherence. The study does not validate a universal habit duration, two-minute training dose, or a reminder schedule.

**Product implication:** Allow a short user-authored plan such as “After I open my laptop, I will do one recall question.” Make the first action immediately available. A two-minute option lowers the commitment requested; that duration is a usability choice. Reopening after an interruption should lead to a small next step, not a lecture about consistency.

### 20. Preserve meaningful choice

**Patall, Cooper & Robinson (2008), _The effects of choice on intrinsic motivation and related outcomes: A meta-analysis of research findings_.** Psychological Bulletin, 134(2), 270–300. [Research record](https://pubmed.ncbi.nlm.nih.gov/18298272/), [original paper](https://selfdeterminationtheory.org/wp-content/uploads/2019/10/2008_PatallCooperRobinson_PsychBulletin.pdf).

The meta-analysis of 41 studies found positive average effects of choice on motivation and related outcomes, with meaningful moderators and context dependence.

**Limit:** More choices are not necessarily better, and these findings do not validate a specific interface or prove that every optional feature improves retention.

**Product implication:** Offer a small number of meaningful choices: a brief session, a normal session, or one chosen exercise. Keep pause, skip, and easier-level controls obvious. The product should recommend a next action without trapping the learner in it. Avoid large setup forms before the first question.

### 21. Breaks may reduce fatigue without boosting every performance measure

**Albulescu, Macsinga, Rusu, Sulea, Bodnaru & Tulbure (2022), _“Give me a break!” A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance_.** PLOS ONE, 17(8), e0272460. [Open original review](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0272460).

Across 22 samples involving 2,335 participants, brief breaks showed small benefits for fatigue and vigour. The overall performance effect was not statistically significant; task demands and break duration mattered.

**Limit:** This does not support a single ideal work/rest interval or show that frequent interruptions repair attention. A two-minute session is not a micro-break intervention.

**Product implication:** Provide a natural stopping point and an optional pause between rounds. Keep the screen calm during a pause rather than supplying another stream of stimuli. Never display a made-up “attention restored” percentage or promise that a fixed timer increases cognition.

### 22. Incubation can help after engaging with a problem

**Sio & Ormerod (2009), _Does incubation enhance problem solving? A meta-analytic review_.** Psychological Bulletin, 135(1), 94–120. [Research record](https://pubmed.ncbi.nlm.nih.gov/19210055/), [DOI](https://doi.org/10.1037/a0014212).

The review found positive average incubation effects, with differences across problem types and preparation. High-demand activities during the break tended to reduce the advantage; divergent-thinking tasks benefited more than some insight tasks.

**Limit:** Stepping away does not ensure a solution. The evidence does not establish that unconscious thought will solve any difficult problem or that endless distraction improves creativity.

**Product implication:** Let the user save an initial idea, step away, and later add an alternative. Preserve both versions so they can compare what changed. A return prompt is optional, and the app should not infer originality from response length.

### 23. Divergent thinking can be practised without pretending to measure creativity

**Baird, Smallwood, Mrazek, Kam, Franklin & Schooler (2012), _Inspired by distraction: Mind wandering facilitates creative incubation_.** Psychological Science, 23(10), 1117–1122. [Original article](https://doi.org/10.1177/0956797612446024), [author PDF](https://labs.psych.ucsb.edu/schooler/jonathan/sites/labs.psych.ucsb.edu.schooler.jonathan/files/pubs/inspired_by_distraction.pdf).

On an unusual-uses task, an undemanding intervening activity improved later performance on previously encountered problems relative to comparison conditions. This is evidence about an incubation arrangement and a specific creativity task.

**Limit:** Short divergent-thinking tasks are not comprehensive measures of creative achievement. The study does not validate automated scoring of a user's ideas.

**Product implication:** Use open prompts such as alternative uses, explanations, or designs under a constraint. Ask the user to select an idea, make it more practical, and name a different category of approach. Save reflection and revision; do not mark a creative response correct or assign an invented creativity score.

### 24. Teach manipulation techniques before asking the learner to spot them

**Roozenbeek, van der Linden, Goldberg, Rathje & Lewandowsky (2022), _Psychological inoculation improves resilience against misinformation on social media_.** Science Advances, 8(34), eabo6254. [Research record](https://pubmed.ncbi.nlm.nih.gov/36001675/), [original article](https://pmc.ncbi.nlm.nih.gov/articles/PMC9401631/).

Experiments and a platform field study tested short explanations of manipulation techniques. Reported benefits included improved technique recognition and aspects of information discernment and sharing decisions. The investigated techniques included false dichotomies, scapegoating, personal attacks, incoherence, and emotional language.

**Limit:** Recognising a technique does not prove that the associated factual claim is false. These interventions do not confer permanent immunity to manipulation, and the app is not the tested video intervention.

**Product implication:** Teach one tactic with an example and refutation, then ask the user to identify its cue in a new scenario and choose a verification step. Include ordinary, non-manipulative comparison examples. Keep the focus on judging a message rather than diagnosing its author.

### 25. Evaluate false alarms as well as missed misinformation

**Hoes, Aitken, Zhang, Gackowski & Wojcieszak (2024), _Prominent misinformation interventions reduce misperceptions but increase scepticism_.** Nature Human Behaviour, 8, 1545–1553. [Updated original article](https://www.nature.com/articles/s41562-024-01884-x), [research record](https://pubmed.ncbi.nlm.nih.gov/38858544/). The publication has an [author correction](https://doi.org/10.1038/s41562-024-01958-w); the updated article is the reference here.

Online experiments in the United States, Poland, and Hong Kong tested different misinformation interventions. Some reductions in belief in false statements accompanied increased scepticism toward true statements; patterns varied by intervention and location.

**Limit:** This does not mean all literacy instruction causes distrust. It establishes that success must consider both accurate and inaccurate information rather than counting suspicion alone.

**Product implication:** Some scenarios should correctly resolve to “The evidence supports this,” or “Not enough information.” A deadline can be real, an expert can be relevant, and a popular claim can be correct. Score reasons and verification choices rather than reflexively distrusting everything.

### 26. Pressure can be built into an interface

**Luguri & Strahilevitz (2021), _Shining a light on dark patterns_.** Journal of Legal Analysis, 13(1), 43–109. [Original article](https://academic.oup.com/jla/article/13/1/43/6180579), [original paper hosted by California's Attorney General](https://oag.ca.gov/sites/all/files/agweb/pdfs/privacy/shining-a-light-on-dark-patterns.pdf).

Two large experiments tested interface patterns that steer consumer decisions. Some designs substantially increased enrolment in an unwanted service. Effects differed across patterns; deceptive interfaces are not one uniform treatment.

**Limit:** This is evidence of influence in specific consumer experiments, not proof of a universal coercion mechanism or a person's intent in a particular interaction.

**Product implication:** Teach users to inspect hidden recurring costs, obstructed refusal, misleading defaults, confusing choices, and unverified urgency. Ask what information is missing and how to regain a deliberate choice. Btrain itself should use a clear stop button, no guilt copy, no fabricated scarcity, and no punitive streak loss.

### 27. Redirect attention toward evidence at the decision point

**Pennycook, Epstein, Mosleh, Arechar, Eckles & Rand (2021), _Shifting attention to accuracy can reduce misinformation online_.** Nature, 592, 590–595. [Original article](https://www.nature.com/articles/s41586-021-03344-2), [original PDF](https://www.nature.com/articles/s41586-021-03344-2.pdf).

Survey experiments and a Twitter field experiment found that drawing attention toward accuracy could improve the quality of subsequent sharing. Sharing intentions and judgments of factual accuracy were not identical.

**Limit:** A prompt cannot ensure verification, and the effect does not imply that all sharing of inaccurate information comes from inattention.

**Product implication:** Before an answer, ask “What evidence supports this?” or “What would you check first?” In scenarios, separate judging a claim from deciding whether to forward it. Prefer a concrete accuracy check to warnings that merely tell the learner to be more careful.

### 28. Respond to a setback without shame

**Breines & Chen (2012), _Self-compassion increases self-improvement motivation_.** Personality and Social Psychology Bulletin, 38(9), 1133–1143. [Research record](https://pubmed.ncbi.nlm.nih.gov/22645164/), [original paper](https://self-compassion.org/wp-content/uploads/publications/selfimp.motivation.pdf).

Across four experiments, a compassionate response to mistakes supported several measures of motivation to improve. In one experiment, participants spent longer studying after an initial test failure.

**Limit:** Brief experimental manipulations do not establish a long-term adherence guarantee or a treatment for persistent frustration. Kind wording alone is not an effective learning programme.

**Product implication:** Say what happened and offer a useful next step: “The loop runs once more because the boundary is inclusive. Try a smaller example.” Avoid “You broke your streak,” guilt, identity judgments, or fake celebration. Let the learner stop with saved progress and resume normally.

## Concrete design mapping for the expanded scope

The following specification is an engineering interpretation of the sources, not a claim that each exact setting has been experimentally validated. It describes the intended behaviour and should be checked against the actual implementation before being labelled shipped.

| User need | Concrete interaction | Honest evidence boundary |
| --- | --- | --- |
| Starting feels too large | A two-minute entry or one-question entry, already on a suitable level | Short duration reduces the commitment requested; two minutes is not a proven training dose |
| Stuck and annoyed | First attempt or “not sure,” a small hint, an easier worked example, then a fresh try | Supported exploration needs instruction; prolonged forced failure is not the intervention |
| Leaning on AI | Write the first step, predict, explain, then compare with the solution; later try without help | Independent recall is measured separately; tool use is not diagnosed as addiction |
| Quitting after a miss | Save the attempt; offer an easier next item or a clean exit | Neutral feedback and autonomy are design interpretations; no promise of curing frustration |
| Learning exam content | Recall a personally relevant item, reveal the explanation, schedule it again | Actual delayed retention matters more than completing new random items |
| Losing focus | One task per screen, optional pause, visible endpoint, resumable draft | An attention game score is not a measurement of everyday attention span |
| Creativity | Generate alternatives, switch category or constraint, select and revise one | No objective correct answer or invented originality ranking |
| Manipulation literacy | Spot the tactic, point to its cue, choose a verification or boundary action | Tactics are cues to examine; they do not establish falsity or someone's diagnosis |
| Maintaining momentum | Optional cue-action plan; return to one small next task after a gap | No punishment, mandatory streak, or claimed fixed number of days to build a habit |

### A practical help ladder

The default should invite a real attempt without requiring a long text response. For arithmetic, an answer or a first calculation is enough; for code, a predicted output or state change; for an argument, the strongest available evidence. “Not sure” is a valid starting response. The first hint should point to the relevant concept without doing all the work. A second request can reveal a worked example. A follow-up question should use new parameters so success requires some understanding rather than copying the visible answer.

Store whether an answer was unaided, followed a hint, or followed a revealed solution. Do not convert seeing an explanation into an incorrect score, and do not silently count it as independent mastery. A user can learn from help while retaining an accurate view of what they can currently do alone. The app cannot observe outside AI or note use; it should never claim that “unaided” means externally verified.

### Manipulation-literacy exercise structure

Use short fictional scenarios with authored explanations. A complete scenario asks for three separate judgments: what tactic might be present; what wording or interface element supports that inference; and what action would provide information or preserve choice. Useful actions include asking for written terms, checking an original source, comparing relevant alternatives, delaying a nonessential decision, or declining without argument. Choosing a calm response is a skill distinct from guessing the tactic's name.

A countdown is not automatically false scarcity: contrast a timer that resets on reload with a published registration deadline. Authority is not automatically manipulation: contrast a relevant expert giving checkable evidence with an unrelated credential substituted for evidence. Social proof is not automatically false: contrast a verifiable attendance count with an unsupported “everyone agrees” claim. A request expressing a genuine need is not automatically guilt manipulation: the pressure signal concerns how refusal is framed and whether choice is respected. These distinctions are authored teaching examples, not forensic tests of a real person's motives.

### Creativity practice should preserve authorship

Begin with a specific prompt, let the learner write their own response, then offer a constraint or lens. Examples include finding multiple uses for an ordinary object, inventing two explanations for an observation, redesigning a routine with half the resources, or expressing one idea through two analogies. Ask which response is most useful, what assumption it changes, and what would make it testable. Optional exemplar answers belong after the user's attempt and should be labelled examples, not the correct answer.

Word count and number of entries can describe participation but must not be used as intelligence or creativity scores. A private reflection can remain ungraded. A saved initial response plus a later revision gives a useful record without false precision. Incubation suggestions should leave the learner free to return later; they should not turn every break into another task.

### What to test before making stronger claims

Measure independent performance on fresh problems, delayed recall of actual study material, voluntary return after a setback, and false-positive as well as true-positive judgments in manipulation scenarios. Keep denominators and assistance status visible. Compare similar difficulties before showing a trend. Distinguish successful use of the product from improvement in the skill: more sessions are engagement, not direct evidence of better reasoning. Do not infer ADHD, low intelligence, emotional dysregulation, AI dependency, or a medical need from this product's records.

## Implemented scope and evaluation boundary

The current local app has 19 exercise families, 28 field-guide lessons, 12 open-ended creative prompts, and a 12-card starter collection. Numerical, recall, and visual exercises generate new instances; psychology, argument, and manipulation questions draw from authored examples. Daily sessions sample across several domains; this variety is not itself the mathematics interleaving intervention studied above.

The guide uses read → hide → recall → compare → optional spaced card. Notebook entries preserve an initial idea, a changed-constraint revision, and reflection. The UI has a two-question entry, pause and fresh/easier-example controls, optional confidence ratings, separate in-app hint records, and no score for creativity. These are implemented design choices, not tested therapeutic claims.

Additional lessons on counterexamples, fair restatement, prospective failure review, estimation, prediction logs, and opportunity cost are educational reasoning frameworks. References to the broader critical-thinking literature provide context; they should not be read as a controlled evaluation of each named technique or its exact interface. In particular, the app does not have direct evidence that its premortem prompt improves an individual's future decisions.

Software checks establish that generators, grading, scheduling, persistence validation, and the user interface work as specified. They do not establish a cognitive or clinical benefit. That would require the delayed, comparable, and independently assessed outcomes described above.
