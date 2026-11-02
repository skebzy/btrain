import { manipulationScenarios, argumentScenarios } from "./psychology.ts";
export type Category =
  "Memory" | "Math" | "Reasoning" | "Coding" | "Psychology" | "Attention";
export type ExerciseId =
  | "digits"
  | "grid"
  | "words"
  | "arithmetic"
  | "fractions"
  | "estimation"
  | "deduction"
  | "probability"
  | "trace"
  | "complexity"
  | "bias"
  | "evidence"
  | "reverse"
  | "pairs"
  | "updating"
  | "attention"
  | "manipulation"
  | "arguments"
  | "counterexample";
export interface Exercise {
  id: ExerciseId;
  title: string;
  category: Category;
  description: string;
  method: string;
  minutes: number;
  icon: string;
  color: string;
}
export const exercises: Exercise[] = [
  {
    id: "attention",
    title: "Notice the details",
    category: "Attention",
    description: "One target. A little careful looking.",
    method: "Selective attention",
    minutes: 2,
    icon: "grid",
    color: "blue",
  },

  {
    id: "digits",
    title: "Number recall",
    category: "Memory",
    description: "Hold a sequence. Bring it back.",
    method: "Working memory",
    minutes: 3,
    icon: "digits",
    color: "sage",
  },
  {
    id: "arithmetic",
    title: "Mental math",
    category: "Math",
    description: "Find your own way to the answer.",
    method: "Mixed practice",
    minutes: 4,
    icon: "math",
    color: "peach",
  },
  {
    id: "deduction",
    title: "Logical thinking",
    category: "Reasoning",
    description: "Follow the facts, not your instinct.",
    method: "Deductive reasoning",
    minutes: 4,
    icon: "logic",
    color: "lavender",
  },
  {
    id: "trace",
    title: "Read the code",
    category: "Coding",
    description: "Think it through, line by line.",
    method: "Code tracing",
    minutes: 4,
    icon: "code",
    color: "blue",
  },
  {
    id: "grid",
    title: "Pattern memory",
    category: "Memory",
    description: "A brief look. A lasting impression.",
    method: "Visual recall",
    minutes: 3,
    icon: "grid",
    color: "sage",
  },
  {
    id: "bias",
    title: "Catch the bias",
    category: "Psychology",
    description: "Notice what shapes a decision.",
    method: "Applied psychology",
    minutes: 4,
    icon: "bias",
    color: "rose",
  },
  {
    id: "words",
    title: "Make a connection",
    category: "Memory",
    description: "Turn a list into a small story.",
    method: "Mnemonic practice",
    minutes: 3,
    icon: "words",
    color: "sage",
  },
  {
    id: "fractions",
    title: "Parts & proportions",
    category: "Math",
    description: "Get comfortable with percentages.",
    method: "Retrieval practice",
    minutes: 4,
    icon: "math",
    color: "peach",
  },
  {
    id: "estimation",
    title: "A good estimate",
    category: "Math",
    description: "Build a feel for the size of things.",
    method: "Numerical reasoning",
    minutes: 3,
    icon: "math",
    color: "peach",
  },
  {
    id: "probability",
    title: "Think in probabilities",
    category: "Reasoning",
    description: "Let the numbers challenge a hunch.",
    method: "Base-rate reasoning",
    minutes: 4,
    icon: "logic",
    color: "lavender",
  },
  {
    id: "complexity",
    title: "Count the work",
    category: "Coding",
    description: "See how an algorithm scales.",
    method: "Worked examples",
    minutes: 4,
    icon: "code",
    color: "blue",
  },
  {
    id: "reverse",
    title: "Turn it around",
    category: "Memory",
    description: "Recall the sequence in reverse.",
    method: "Working memory",
    minutes: 2,
    icon: "digits",
    color: "sage",
  },
  {
    id: "pairs",
    title: "Names & connections",
    category: "Memory",
    description: "Remember what belongs together.",
    method: "Associative recall",
    minutes: 2,
    icon: "words",
    color: "sage",
  },
  {
    id: "updating",
    title: "Keep a running total",
    category: "Memory",
    description: "Hold a number and work with it.",
    method: "Memory updating",
    minutes: 2,
    icon: "math",
    color: "sage",
  },
  {
    id: "arguments",
    title: "Find the missing step",
    category: "Reasoning",
    description: "Separate a claim from its support.",
    method: "Argument evaluation",
    minutes: 3,
    icon: "logic",
    color: "lavender",
  },
  {
    id: "counterexample",
    title: "Break the rule",
    category: "Reasoning",
    description: "Find the case that changes the claim.",
    method: "Falsification",
    minutes: 3,
    icon: "logic",
    color: "lavender",
  },
  {
    id: "manipulation",
    title: "See through the pressure",
    category: "Psychology",
    description: "Spot the cue. Keep your choice.",
    method: "Manipulation literacy",
    minutes: 3,
    icon: "bias",
    color: "rose",
  },
  {
    id: "evidence",
    title: "Question the claim",
    category: "Reasoning",
    description: "Find the gap between fact and belief.",
    method: "Evidence evaluation",
    minutes: 4,
    icon: "bias",
    color: "lavender",
  },
];
export interface Question {
  id: string;
  exercise: ExerciseId;
  prompt: string;
  answer: string;
  explanation: string;
  choices?: string[];
  stimulus?: string[];
  grid?: number[];
  code?: string;
  visual?: string[];
  hint: string;
  level: number;
}
export const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const shuffle = <T>(items: T[]): T[] => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const choose = <T>(items: T[]) => items[rand(0, items.length - 1)];
const vocabulary = [
  "river",
  "piano",
  "candle",
  "forest",
  "mirror",
  "lemon",
  "ladder",
  "cloud",
  "anchor",
  "feather",
  "garden",
  "pocket",
  "window",
  "bridge",
  "orange",
  "silver",
  "bottle",
  "planet",
  "basket",
  "clock",
  "velvet",
  "tiger",
  "button",
  "island",
  "pencil",
  "lantern",
  "ribbon",
  "mountain",
  "shell",
  "bicycle",
  "rabbit",
  "compass",
  "coffee",
  "marble",
  "umbrella",
  "sunflower",
  "camera",
  "castle",
  "envelope",
  "whale",
];
const biasScenarios = [
  [
    "A researcher reads only studies that support her prediction and ignores equally strong contrary results.",
    "Confirmation bias",
    "She is selecting evidence by whether it agrees with her belief, rather than by its quality. Look deliberately for evidence that would change the conclusion.",
  ],
  [
    "A shop first shows a price of ₹8,000. After a discount, ₹5,000 feels cheap, before you compare any other shop.",
    "Anchoring",
    "The first number becomes a reference point. Compare independent prices and decide what the item is worth before seeing the suggested discount.",
  ],
  [
    "After watching reports of two plane crashes, a traveler judges flying more dangerous without checking accident rates.",
    "Availability heuristic",
    "Vivid, easily recalled events can feel more frequent. Compare rates with a consistent denominator, rather than the ease of remembering examples.",
  ],
  [
    "A team keeps funding an unsuccessful project because it has already spent two years on it.",
    "Sunk-cost effect",
    "Past, unrecoverable costs should not determine the next investment. Compare the future costs and benefits of continuing with the alternatives.",
  ],
  [
    "After an election, someone says the result was obvious, although their own earlier prediction was different.",
    "Hindsight bias",
    "Knowing an outcome can make it seem more predictable than it was. Keep a record of predictions before outcomes are known.",
  ],
  [
    "An investor studies only successful startups to discover a guaranteed formula, leaving failed companies out of the sample.",
    "Survivorship bias",
    "The selected sample excludes failures. A pattern among survivors does not show whether it distinguishes success from failure.",
  ],
  [
    "A company markets a treatment as having a 90% success rate. Customers prefer it to an identical option with a 10% failure rate.",
    "Framing effect",
    "Equivalent information can lead to different choices depending on its presentation. Restate outcomes in both positive and negative terms.",
  ],
  [
    "A manager assumes an excellent public speaker must also be an excellent programmer, without seeing their code.",
    "Halo effect",
    "A favorable impression in one area is spilling into an unrelated judgment. Assess each skill with evidence specific to it.",
  ],
  [
    "A driver blames another driver’s mistake entirely on their personality without considering the blocked road sign.",
    "Fundamental attribution error",
    "The judgment emphasizes character while overlooking a plausible situational cause. Consider circumstances as well as dispositions.",
  ],
  [
    "A hiring panel favors a candidate because they share the panel’s hobby, even though the hobby is unrelated to the role.",
    "Affinity bias",
    "Similarity is substituting for job-relevant evidence. Use consistent, relevant criteria and structured assessments.",
  ],
  [
    "A student predicts a top score without testing herself, then finds she cannot solve unfamiliar problems.",
    "Overconfidence",
    "Confidence needs evidence. Attempt a representative closed-book problem before estimating mastery.",
  ],
  [
    "A person rejects a new, cheaper service solely because switching from the current one feels uncomfortable.",
    "Status quo bias",
    "The current option receives extra weight merely because it is already in place. Compare switching costs and benefits explicitly.",
  ],
];
const evidenceScenarios = [
  [
    "Students who use an optional study app score higher. What is the main obstacle to concluding the app caused the improvement?",
    "Students chose whether to use it",
    "Self-selection can confound the result: motivation or prior knowledge might explain both app use and scores. Random assignment would make a causal comparison stronger.",
    [
      "The sample contains students",
      "Every correlation is meaningless",
      "The scores are numerical",
    ],
  ],
  [
    "A report says a score rose from 40 to 60. Which description is accurate?",
    "20 points, a 50% relative increase",
    "The absolute change is 60 − 40 = 20 points. Relative to 40, that is 20 / 40 = 50%.",
    [
      "20 points, a 20% relative increase",
      "60 points, a 50% relative increase",
      "50 points, a 20% relative increase",
    ],
  ],
  [
    "A study reports no statistically significant difference. What can you conclude from that fact alone?",
    "It did not establish a difference at its chosen threshold",
    "A non-significant finding does not prove equality. Sample size, uncertainty, effect estimates, and the design still matter.",
    [
      "The treatments are identical",
      "The sample was definitely too small",
      "Neither treatment works",
    ],
  ],
  [
    "A celebrity endorses a learning method. Which would best test whether it helps exam performance?",
    "A randomized comparison using a delayed exam",
    "A relevant outcome, comparison condition, and random assignment are more informative than popularity or testimonials.",
    [
      "The number of followers",
      "The celebrity’s confidence",
      "Whether the method sounds scientific",
    ],
  ],
  [
    "A headline reports that a risk doubled from 1 in 10,000 to 2 in 10,000. What context matters?",
    "The absolute increase is 1 in 10,000",
    "Relative changes can sound large while the absolute change remains small. Both quantities are useful.",
    [
      "It increased by 100 percentage points",
      "Everyone will experience the outcome",
      "The original risk is irrelevant",
    ],
  ],
  [
    "A class scored unusually poorly, then improved after a new poster was installed. What is a plausible alternative explanation?",
    "Regression toward the mean",
    "An unusually low measurement may be followed by a more typical one even without an effective intervention. A comparison group helps.",
    [
      "Posters cannot ever influence behavior",
      "All later measurements are biased",
      "Improvement proves the intervention",
    ],
  ],
  [
    "A product has 500 five-star reviews, all from people who received it free in exchange for a review. What should you examine?",
    "How the reviewers were selected and incentivized",
    "Selection and incentives can affect the evidence. Look for independent, representative comparisons.",
    [
      "Only the total number of stars",
      "Whether the packaging looks professional",
      "Whether the reviews use long words",
    ],
  ],
  [
    "A researcher tests 30 unrelated predictions and publishes only the one that passes a significance threshold. What is the concern?",
    "Selective reporting and multiple comparisons",
    "Many tests create more chances for a false positive. Prespecified hypotheses, correction, and replication improve interpretation.",
    [
      "The result must be false",
      "One test is always enough",
      "All statistical methods are unreliable",
    ],
  ],
];
function options(correct: string, others: string[]) {
  return shuffle([
    correct,
    ...shuffle(others.filter((x) => x !== correct)).slice(0, 3),
  ]);
}
export function generateQuestion(
  exercise: ExerciseId,
  difficulty = 1,
  previous?: string,
): Question {
  const level = Math.max(1, Math.min(5, Math.round(difficulty)));
  const base = {
    id: `${exercise}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    exercise,
    level,
  };
  if (exercise === "attention") {
    const target = choose(["7", "b", "F", "Q"]),
      pool =
        target === "7"
          ? ["1", "7", "T", "2"]
          : target === "b"
            ? ["b", "d", "p", "q"]
            : target === "F"
              ? ["E", "F", "P", "L"]
              : ["O", "Q", "0", "G"];
    const visual = Array.from({ length: 16 + level * 8 }, () => choose(pool));
    return {
      ...base,
      prompt: `How many “${target}” characters can you find?`,
      visual,
      answer: String(visual.filter((x) => x === target).length),
      hint: "Scan one row at a time, keeping a running count.",
      explanation: `There are ${visual.filter((x) => x === target).length} occurrences of ${target}. A systematic scan helps avoid omissions. This measures the practiced task, not your everyday attention span.`,
    };
  }
  if (exercise === "reverse") {
    const stimulus = Array.from({ length: level + 2 }, () =>
      String(rand(0, 9)),
    );
    return {
      ...base,
      prompt: "Recall the digits in reverse order.",
      stimulus,
      answer: [...stimulus].reverse().join(""),
      hint: "Recall the original in small chunks, then work from the end.",
      explanation: `The original was ${stimulus.join(" ")}. Reversing it gives ${[...stimulus].reverse().join(" ")}.`,
    };
  }
  if (exercise === "pairs") {
    const names = shuffle([
        "Mira",
        "Noah",
        "Asha",
        "Leo",
        "Sam",
        "Ravi",
        "Lina",
        "Kai",
      ]).slice(0, level + 1),
      objects = shuffle(vocabulary).slice(0, names.length),
      index = rand(0, names.length - 1);
    return {
      ...base,
      prompt: `What was paired with ${names[index]}?`,
      stimulus: names.map((n, i) => `${n} → ${objects[i]}`),
      answer: objects[index],
      hint: "Make a vivid image linking each name and its object.",
      explanation: `${names[index]} was paired with ${objects[index]}. The full set: ${names.map((n, i) => `${n} → ${objects[i]}`).join("; ")}.`,
    };
  }
  if (exercise === "updating") {
    const initial = rand(3, 20),
      steps = Array.from({ length: level + 1 }, () => rand(-5, 9)),
      answer = initial + steps.reduce((a, b) => a + b, 0);
    return {
      ...base,
      prompt: "What is the final total?",
      stimulus: [
        `Start: ${initial}`,
        ...steps.map((n) => (n >= 0 ? `+ ${n}` : `− ${Math.abs(n)}`)),
      ],
      answer: String(answer),
      hint: "Update the total at each step instead of memorizing every intermediate value.",
      explanation: `Start with ${initial}. Apply ${steps.map((n) => (n >= 0 ? `+${n}` : String(n))).join(", ")}. The final total is ${answer}.`,
    };
  }
  if (exercise === "counterexample") {
    const color = choose(["blue", "red", "green", "amber"]),
      shape = choose(["round", "square", "triangular"]),
      otherColor = choose(["violet", "white", "black"]),
      otherShape = shape === "round" ? "square" : "round",
      answer = `A ${color} ${otherShape} tile`;
    return {
      ...base,
      prompt: `Which tile would refute the rule “Every ${color} tile is ${shape}”?`,
      answer,
      choices: shuffle([
        answer,
        `A ${color} ${shape} tile`,
        `A ${otherColor} ${shape} tile`,
        `A ${otherColor} ${otherShape} tile`,
      ]),
      hint: "Look for something that satisfies the condition but violates its promised consequence.",
      explanation: `The rule promises ${shape} for every ${color} tile. A ${color} ${otherShape} tile satisfies the color condition and breaks that promise. Other colors do not test this rule.`,
    };
  }
  if (exercise === "arguments") {
    const s = choose(argumentScenarios.filter((x) => x.prompt !== previous));
    return {
      ...base,
      prompt: s.prompt,
      answer: s.answer,
      choices: options(s.answer, s.others),
      explanation: s.explanation,
      hint: "What is the claim, what supports it, and what alternative or missing evidence matters?",
    };
  }
  if (exercise === "manipulation") {
    const s = choose(
      manipulationScenarios.filter((x) => x.prompt !== previous),
    );
    return {
      ...base,
      prompt: s.prompt,
      answer: s.answer,
      choices: options(s.answer, s.others),
      explanation: s.explanation,
      hint: "Separate the factual claim from the pressure cue. Choose a check or boundary that preserves your choice.",
    };
  }
  if (exercise === "digits") {
    const stimulus = Array.from({ length: level + 3 }, () =>
      String(rand(0, 9)),
    );
    return {
      ...base,
      prompt: "What was the sequence?",
      stimulus,
      answer: stimulus.join(""),
      hint: "Group the digits into pairs or small chunks.",
      explanation: `The sequence was ${stimulus.join(" ")}. Chunking can make this task easier; performance here measures this particular recall skill.`,
    };
  }
  if (exercise === "words") {
    const stimulus = shuffle(vocabulary).slice(0, level + 2);
    return {
      ...base,
      prompt: "Recall the words in any order.",
      stimulus,
      answer: stimulus.join(" "),
      hint: "Connect the words with a vivid, unusual story.",
      explanation: `The words were ${stimulus.join(", ")}. Give each word a place in one short story, then mentally retrace it.`,
    };
  }
  if (exercise === "grid") {
    const grid = shuffle(Array.from({ length: 16 }, (_, i) => i))
      .slice(0, level + 2)
      .sort((a, b) => a - b);
    return {
      ...base,
      prompt: "Which squares were filled?",
      grid,
      answer: grid.join(","),
      hint: "Look for a shape or a path between the squares.",
      explanation:
        "Compare your selection with the original pattern. Grouping nearby positions may help you reconstruct it.",
    };
  }
  if (exercise === "arithmetic") {
    const a = rand(3, 8 + level * 12),
      b = rand(2, 5 + level * 7),
      op = choose(level < 3 ? ["+", "−", "×"] : ["+", "−", "×", "÷"]);
    let answer = 0,
      prompt = "",
      explanation = "";
    if (op === "+") {
      answer = a + b;
      prompt = `${a} + ${b}`;
      explanation = `Split ${b} into tens and units, then add each part to ${a}. The result is ${answer}.`;
    } else if (op === "−") {
      answer = a;
      prompt = `${a + b} − ${b}`;
      explanation = `Check the inverse: ${a} + ${b} = ${a + b}.`;
    } else if (op === "×") {
      answer = a * b;
      prompt = `${a} × ${b}`;
      explanation = `Distribute the multiplication: ${a} × ${Math.floor(b / 10) * 10} + ${a} × ${b % 10} = ${answer}.`;
    } else {
      answer = a;
      prompt = `${a * b} ÷ ${b}`;
      explanation = `${b} × ${a} = ${a * b}, so the quotient is ${a}.`;
    }
    return {
      ...base,
      prompt,
      answer: String(answer),
      explanation,
      hint: "Break the problem into smaller operations.",
    };
  }
  if (exercise === "fractions") {
    const percent = choose(
        level < 3 ? [10, 20, 25, 50, 75] : [5, 12, 15, 18, 35, 65, 85],
      ),
      n = rand(2, 10 + level * 5) * 20,
      answer = (percent * n) / 100;
    return {
      ...base,
      prompt: `What is ${percent}% of ${n}?`,
      answer: String(answer),
      hint: "Find 10% or 1% first, then build the percentage.",
      explanation: `${percent}% means ${percent}/100. So ${n} × ${percent} ÷ 100 = ${answer}.`,
    };
  }
  if (exercise === "estimation") {
    const a = rand(12, 35 + level * 15),
      b = rand(12, 35 + level * 15),
      product = a * b,
      unit = product < 1000 ? 100 : 1000,
      answer = Math.round(product / unit) * unit;
    return {
      ...base,
      prompt: `Round ${a} × ${b} to the nearest ${unit.toLocaleString()}.`,
      answer: String(answer),
      hint: "Estimate the product, then check which rounding boundary it falls on.",
      explanation: `The exact product is ${product.toLocaleString()}. Rounded to the nearest ${unit.toLocaleString()}, it is ${answer.toLocaleString()}.`,
    };
  }
  if (exercise === "deduction") {
    const [a, b, c] = choose([
      ["amber tokens", "round tokens", "marked tokens"],
      ["red cards", "large cards", "numbered cards"],
      ["striped tiles", "square tiles", "blue tiles"],
      ["small beads", "glass beads", "green beads"],
      ["silver keys", "old keys", "labeled keys"],
      ["printed tickets", "valid tickets", "day tickets"],
    ]);
    const valid = rand(0, 1) === 1;
    return {
      ...base,
      prompt: valid
        ? `Using only these statements: all ${a} are ${b}. All ${b} are ${c}. Must all ${a} be ${c}?`
        : `Using only these statements: all ${a} are ${b}. Some ${b} are ${c}. Must some ${a} be ${c}?`,
      answer: valid ? "Yes, necessarily" : "Not enough information",
      choices: shuffle([
        "Yes, necessarily",
        "No, impossible",
        "Not enough information",
      ]),
      hint: "Draw the groups as circles. Is the overlap guaranteed?",
      explanation: valid
        ? `Yes. The ${a} group sits inside ${b}, which sits inside ${c}. Membership carries through both inclusions.`
        : `The ${b} that are ${c} could all be outside the ${a} group. “Some” does not guarantee the overlap you need.`,
    };
  }
  if (exercise === "probability") {
    const n = choose([100, 200, 500, 1000]),
      baseRate = choose([10, 20, 25, 50]),
      marked = (n * baseRate) / 100,
      trueHits = marked * 0.8,
      falseHits = (n - marked) * 0.2,
      answer = Math.round((trueHits / (trueHits + falseHits)) * 100);
    return {
      ...base,
      prompt: `Of ${n} items, ${marked} are faulty. A detector flags 80% of faulty items and 20% of good items. Of the flagged items, what percentage are faulty? Round to a whole percent.`,
      answer: String(answer),
      hint: "Count the true flags and the false flags separately.",
      explanation: `True flags: ${marked} × 0.8 = ${trueHits}. False flags: ${n - marked} × 0.2 = ${falseHits}. The requested proportion is ${trueHits} / ${trueHits + falseHits} ≈ ${answer}%.`,
    };
  }
  if (exercise === "trace") {
    const start = rand(0, 9),
      step = rand(1, level + 3),
      count = rand(3, level + 4),
      variant = rand(0, 2);
    let code = "",
      answer = 0,
      explanation = "";
    if (variant === 0) {
      code = `let total = ${start};\nfor (let i = 0; i < ${count}; i++) {\n  total += ${step};\n}\nconsole.log(total);`;
      answer = start + step * count;
      explanation = `The loop runs ${count} times. Starting at ${start}, add ${step} each time: ${start} + ${count} × ${step} = ${answer}.`;
    } else if (variant === 1) {
      const arr = Array.from({ length: 4 + level }, () => rand(1, 12));
      code = `const values = [${arr.join(", ")}];\nconst result = values\n  .filter(n => n % 2 === 0)\n  .reduce((sum, n) => sum + n, 0);\nconsole.log(result);`;
      answer = arr.filter((n) => n % 2 === 0).reduce((s, n) => s + n, 0);
      explanation = `Keep only the even values (${arr.filter((n) => n % 2 === 0).join(", ") || "none"}), then sum them from zero. The result is ${answer}.`;
    } else {
      code = `let value = ${step};\nfor (let i = 1; i <= ${count}; i++) {\n  value += i;\n}\nconsole.log(value);`;
      answer = step + (count * (count + 1)) / 2;
      explanation = `Add 1 through ${count} to the initial ${step}. That is ${step} + ${count} × ${count + 1} / 2 = ${answer}.`;
    }
    return {
      ...base,
      prompt: "What does this JavaScript print?",
      code,
      answer: String(answer),
      hint: "Track each variable after every loop iteration.",
      explanation,
    };
  }
  if (exercise === "complexity") {
    const v = choose([
      {
        code: "for (let i = 0; i < n; i++) {\n  visit(i);\n}",
        answer: "O(n)",
        explanation: "There are n iterations, each doing constant work.",
      },
      {
        code: "for (let i = 0; i < n; i++) {\n  for (let j = 0; j < n; j++) {\n    visit(i, j);\n  }\n}",
        answer: "O(n²)",
        explanation:
          "The inner loop runs n times for each of n outer iterations: n × n.",
      },
      {
        code: "for (let i = 1; i < n; i *= 2) {\n  visit(i);\n}",
        answer: "O(log n)",
        explanation:
          "The loop variable doubles each time, so the number of iterations grows logarithmically.",
      },
      {
        code: "visit(values[0]);\nvisit(values[n - 1]);",
        answer: "O(1)",
        explanation: "The number of operations is fixed regardless of n.",
      },
      {
        code: "for (let i = 0; i < n; i++) {\n  visit(i);\n}\nfor (let j = 0; j < n; j++) {\n  visit(j);\n}",
        answer: "O(n)",
        explanation:
          "Two sequential loops do 2n operations. Constant factors are omitted in Big O.",
      },
    ]);
    return {
      ...base,
      ...v,
      prompt:
        "What is the tightest time-complexity bound? Assume visit and array access take constant time.",
      choices: shuffle(["O(1)", "O(log n)", "O(n)", "O(n²)"]),
      hint: "Count how the number of operations grows as n grows.",
    };
  }
  if (exercise === "bias") {
    const candidates = biasScenarios.filter((s) => s[0] !== previous);
    const s = choose(candidates);
    return {
      ...base,
      prompt: s[0],
      answer: s[1],
      explanation: s[2],
      choices: options(
        s[1],
        biasScenarios.map((x) => x[1]),
      ),
      hint: "Identify which information is receiving too much or too little weight.",
    };
  }
  const s = choose(evidenceScenarios.filter((s) => s[0] !== previous));
  return {
    ...base,
    prompt: s[0] as string,
    answer: s[1] as string,
    explanation: s[2] as string,
    choices: options(s[1] as string, s[3] as string[]),
    hint: "Separate what was observed from what the claim assumes.",
  };
}
export function checkAnswer(q: Question, input: string): boolean {
  const normalized = input.trim().toLowerCase();
  if (q.exercise === "words") {
    const words = normalized
      .split(/[\s,;]+/)
      .filter(Boolean)
      .sort();
    return words.join(" ") === q.answer.split(" ").sort().join(" ");
  }
  if (["digits", "reverse"].includes(q.exercise))
    return normalized.replace(/[\s,\-]/g, "") === q.answer;
  if (q.exercise === "grid")
    return (
      normalized
        .split(",")
        .filter(Boolean)
        .map(Number)
        .sort((a, b) => a - b)
        .join(",") === q.answer
    );
  if (
    [
      "arithmetic",
      "fractions",
      "estimation",
      "probability",
      "trace",
      "updating",
      "attention",
    ].includes(q.exercise)
  ) {
    const cleaned = normalized.replace(/,/g, "").replace(/%$/, "").trim();
    return (
      cleaned !== "" &&
      Number.isFinite(Number(cleaned)) &&
      Math.abs(Number(cleaned) - Number(q.answer)) < 0.00001
    );
  }
  return normalized === q.answer.toLowerCase();
}
export interface Attempt {
  id: string;
  exercise: ExerciseId;
  correct: boolean;
  date: string;
  duration: number;
  level: number;
  confidence: number | null;
  assisted?: boolean;
}
export interface Card {
  id: string;
  front: string;
  back: string;
  subject: string;
  due: number;
  interval: number;
  reviews: number;
}
export interface Settings {
  sessionLength: number;
  memorySeconds: number;
  dailyGoal: number;
  name: string;
  intention?: string;
}
export interface JournalEntry {
  id: string;
  prompt: string;
  constraint: string;
  reflectionPrompt: string;
  initial: string;
  revision: string;
  reflection: string;
  date: string;
}
export interface Store {
  version: 1;
  journal?: JournalEntry[];
  attempts: Attempt[];
  cards: Card[];
  settings: Settings;
}
export const defaultStore: Store = {
  version: 1,
  attempts: [],
  cards: [],
  settings: { sessionLength: 5, memorySeconds: 10, dailyGoal: 5, name: "" },
};
export function getLevel(attempts: Attempt[], exercise: ExerciseId): number {
  if (
    [
      "deduction",
      "bias",
      "evidence",
      "complexity",
      "manipulation",
      "arguments",
      "counterexample",
    ].includes(exercise)
  )
    return 1;
  const relevant = attempts
    .filter((a) => a.exercise === exercise && !a.assisted)
    .slice(-5);
  if (!relevant.length) return 1;
  const level = relevant.at(-1)!.level;
  if (relevant.length < 5) return level;
  const recent = relevant.filter((a) => a.level === level);
  if (recent.length < 5) return level;
  const correct = recent.filter((a) => a.correct).length;
  return Math.max(
    1,
    Math.min(5, level + (correct >= 4 ? 1 : correct <= 1 ? -1 : 0)),
  );
}
export function scheduleCard(
  card: Card,
  rating: "again" | "hard" | "good" | "easy",
  now = Date.now(),
): Card {
  let interval: number;
  if (rating === "again") interval = 0;
  else if (rating === "hard")
    interval = Math.max(1, Math.round(card.interval * 1.2));
  else if (rating === "good")
    interval = card.interval === 0 ? 1 : Math.round(card.interval * 2.5);
  else interval = card.interval === 0 ? 4 : Math.round(card.interval * 3.5);
  return {
    ...card,
    interval,
    due: now + (rating === "again" ? 10 * 60 * 1000 : interval * 86400000),
    reviews: card.reviews + 1,
  };
}
export function localDay(date: Date | string | number = new Date()): string {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function streak(attempts: Attempt[], now = new Date()): number {
  const days = new Set(attempts.map((a) => localDay(a.date)));
  const cursor = new Date(now);
  if (!days.has(localDay(cursor))) cursor.setDate(cursor.getDate() - 1);
  let n = 0;
  while (days.has(localDay(cursor))) {
    n++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return n;
}
export function validateStore(value: unknown): value is Store {
  if (!value || typeof value !== "object") return false;
  const s = value as Store;
  return (
    s.version === 1 &&
    Array.isArray(s.attempts) &&
    s.attempts.every(
      (a) =>
        typeof a.id === "string" &&
        exercises.some((e) => e.id === a.exercise) &&
        typeof a.correct === "boolean" &&
        Number.isFinite(Date.parse(a.date)) &&
        Number.isFinite(a.duration) &&
        a.duration >= 0 &&
        Number.isFinite(a.level) &&
        a.level >= 1 &&
        a.level <= 5 &&
        (a.confidence === null ||
          (Number.isFinite(a.confidence) &&
            a.confidence >= 0 &&
            a.confidence <= 100)) &&
        (a.assisted === undefined || typeof a.assisted === "boolean"),
    ) &&
    Array.isArray(s.cards) &&
    s.cards.every(
      (c) =>
        typeof c.id === "string" &&
        typeof c.front === "string" &&
        typeof c.back === "string" &&
        typeof c.subject === "string" &&
        Number.isFinite(c.due) &&
        Number.isFinite(c.interval) &&
        c.interval >= 0 &&
        Number.isInteger(c.reviews) &&
        c.reviews >= 0,
    ) &&
    !!s.settings &&
    typeof s.settings.name === "string" &&
    [2, 5, 8, 12, 20].includes(s.settings.sessionLength) &&
    [4, 7, 10, 15].includes(s.settings.memorySeconds) &&
    [5, 10, 15, 20].includes(s.settings.dailyGoal) &&
    (s.settings.intention === undefined ||
      typeof s.settings.intention === "string") &&
    (s.journal === undefined ||
      (Array.isArray(s.journal) &&
        s.journal.every(
          (j) =>
            typeof j.id === "string" &&
            typeof j.prompt === "string" &&
            typeof j.constraint === "string" &&
            typeof j.reflectionPrompt === "string" &&
            typeof j.initial === "string" &&
            typeof j.revision === "string" &&
            typeof j.reflection === "string" &&
            Number.isFinite(Date.parse(j.date)),
        )))
  );
}

export function makePlan(
  mode: ExerciseId | "daily" | "quick",
  count: number,
): ExerciseId[] {
  if (mode === "quick") return ["attention", "arithmetic"];
  if (mode !== "daily") return Array.from({ length: count }, () => mode);
  const groups: ExerciseId[][] = [
    ["digits", "grid", "words", "reverse", "pairs", "updating"],
    ["arithmetic", "fractions", "estimation"],
    ["deduction", "probability", "evidence", "arguments", "counterexample"],
    ["trace", "complexity"],
    ["bias", "manipulation"],
  ];
  const first = shuffle(groups.map((g) => choose(g)));
  const rest = shuffle(
    exercises.map((e) => e.id).filter((id) => !first.includes(id)),
  );
  const pool = [...first, ...rest];
  return Array.from({ length: count }, (_, i) => pool[i % pool.length]);
}
