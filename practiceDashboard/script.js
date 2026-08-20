 
const database = {
  math: {
    easy: [
      "Find derivative of x^2",
      "Integrate x dx",
      "Solve linear equation",
      "Find trigonometric value",
      "Matrix operation",
      "Find limit",
      "Find slope",
      "Distance formula",
      "Area of triangle",
      "Probability basic",
    ],

    medium: [
      "Differentiate sinx",
      "Integrate cosx",
      "Solve logarithmic equation",
      "Matrix multiplication",
      "Complex numbers",
      "Permutation combination",
      "3D geometry",
      "Definite integral",
      "Vector product",
      "Sequence series",
    ],

    hard: [
      "Integration by parts",
      "Differential equation",
      "Double integration",
      "Laplace transform",
      "Fourier series",
      "Advanced probability",
      "Vector calculus",
      "Linear algebra",
      "Complex integration",
      "Optimization problem",
    ],
  },

  english: {
    easy: [
      "Write paragraph",
      "Define noun",
      "Define verb",
      "Types of sentences",
      "Write about school",
      "Synonyms",
      "Antonyms",
      "Tense",
      "Articles",
      "Pronoun",
    ],

    medium: [
      "Write formal letter",
      "Write informal letter",
      "Active voice",
      "Passive voice",
      "Essay writing",
      "Story writing",
      "Notice writing",
      "Report writing",
      "Dialogue writing",
      "Grammar rules",
    ],

    hard: [
      "Essay 300 words",
      "Speech writing",
      "Debate writing",
      "Editorial writing",
      "Creative writing",
      "Literature analysis",
      "Advanced grammar",
      "Comprehension",
      "Critical analysis",
      "Formal report",
    ],
  },

  os: {
    easy: [
      "What is OS",
      "Kernel",
      "Process",
      "Thread",
      "Memory",
      "File system",
      "Deadlock",
      "System call",
      "CPU scheduling",
      "Types of OS",
    ],
    medium: [
      "Scheduling",
      "Deadlock prevention",
      "Paging",
      "Segmentation",
      "Disk scheduling",
      "Semaphore",
      "Thread vs process",
      "Synchronization",
      "Memory management",
      "File allocation",
    ],
    hard: [
      "Virtual memory",
      "Banker algorithm",
      "Deadlock detection",
      "Multithreading",
      "Concurrency",
      "Page replacement",
      "Distributed OS",
      "Real time OS",
      "Cache memory",
      "Advanced scheduling",
    ],
  },

  ds: {
    easy: [
      "Array",
      "Stack",
      "Queue",
      "Linked list",
      "Types of DS",
      "Traversal",
      "Searching",
      "Stack ops",
      "Queue ops",
      "Basic DS",
    ],
    medium: [
      "Linked list ops",
      "Binary tree",
      "Recursion",
      "Sorting",
      "Hashing",
      "Tree traversal",
      "Binary search",
      "Queue array",
      "Stack array",
      "Searching algo",
    ],
    hard: [
      "AVL tree",
      "Graph algo",
      "Dijkstra",
      "Heap",
      "Dynamic programming",
      "Greedy",
      "Backtracking",
      "Graph traversal",
      "Complexity",
      "Advanced sorting",
    ],
  },

  python: {
    easy: [
      "What is Python",
      "Variables",
      "Data types",
      "Input output",
      "If condition",
      "For loop",
      "While loop",
      "List",
      "Tuple",
      "Basic syntax",
    ],
    medium: [
      "Functions",
      "Lambda",
      "List comprehension",
      "Dictionary",
      "File handling",
      "Exception handling",
      "Modules",
      "OOP",
      "Class",
      "Inheritance",
    ],
    hard: [
      "Decorators",
      "Generators",
      "Multithreading",
      "Async",
      "Advanced OOP",
      "Memory",
      "Data structures",
      "Recursion",
      "API handling",
      "Project",
    ],
  },

  js: {
    easy: [
      "JavaScript",
      "Variables",
      "Data types",
      "Functions",
      "Events",
      "DOM",
      "Alert",
      "Operators",
      "Loops",
      "Console",
    ],
    medium: [
      "DOM manipulation",
      "Events",
      "Array methods",
      "Objects",
      "ES6",
      "Arrow function",
      "Callback",
      "Promises",
      "Fetch API",
      "Local storage",
    ],
    hard: [
      "Async await",
      "Closures",
      "Event loop",
      "Prototype",
      "Advanced DOM",
      "API integration",
      "Performance",
      "Design pattern",
      "State management",
      "Error handling",
    ],
  },

  ai: {
    easy: [
      "What is AI",
      "ML",
      "Applications",
      "Types",
      "Supervised",
      "Unsupervised",
      "Dataset",
      "Model",
      "Training",
      "Prediction",
    ],
    medium: [
      "Regression",
      "Classification",
      "Clustering",
      "Decision tree",
      "Naive Bayes",
      "KNN",
      "Overfitting",
      "Underfitting",
      "Evaluation",
      "Preprocessing",
    ],
    hard: [
      "Neural network",
      "Deep learning",
      "CNN",
      "RNN",
      "NLP",
      "Reinforcement",
      "Gradient descent",
      "Backpropagation",
      "Tuning",
      "Optimization",
    ],
  },

  de: {
    easy: [
      "Logic gate",
      "AND",
      "OR",
      "NOT",
      "Boolean",
      "Truth table",
      "Binary",
      "Conversion",
      "Circuits",
      "Electronics",
    ],
    medium: [
      "Flip flop",
      "Registers",
      "Counters",
      "K map",
      "Multiplexer",
      "Decoder",
      "Encoder",
      "Sequential",
      "Simplification",
      "Logic design",
    ],
    hard: [
      "Advanced K map",
      "Timing diagram",
      "Memory unit",
      "Digital system",
      "ALU",
      "Control unit",
      "Pipeline",
      "Bus system",
      "Architecture",
      "Processor",
    ],
  },

  science: {
    easy: [
      "Atom",
      "Molecule",
      "Matter",
      "Energy",
      "Force",
      "Gravity",
      "Work",
      "Speed",
      "Light",
      "Sound",
    ],
    medium: [
      "Newton laws",
      "Motion",
      "Heat",
      "Electricity",
      "Magnetism",
      "Reaction",
      "Periodic table",
      "Acid base",
      "Refraction",
      "Reflection",
    ],
    hard: [
      "Quantum",
      "Relativity",
      "Thermodynamics",
      "Electromagnetism",
      "Organic chemistry",
      "Nuclear",
      "Wave",
      "Optics",
      "Bonding",
      "Mechanics",
    ],
  },
};
 




// ================= EXPAND (10 → 50) =================
function expandQuestions(base, total=50){
//   let result = [];
//   for(let i=0;i<total;i++){
//     result.push(base[i % base.length]);
//   }
 let prefixes = ["Explain", "Define", "Solve", "Find", "Describe"];
  let result = [];

  for (let i = 0; i < total; i++) {
    let q = base[i % base.length];
    let p = prefixes[i % prefixes.length];
    result.push(p + ": " + q);
  }

  return result;
  
//   return result;
}


// ================= RANDOM =================
function getRandomQuestions(arr, count){
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
}


// ================= SUBJECT =================
function selectSubject(sub){
  localStorage.setItem("subject", sub);
  window.location.href = "questions.html";
}


// ================= LEVEL =================
function openPaper(level){
  localStorage.setItem("level", level);
  localStorage.removeItem("mode");
  window.location.href = "paper.html";
}


// ================= FULL =================
function generatePaper(){
  localStorage.setItem("mode", "full");
  localStorage.removeItem("level");
  window.location.href = "paper.html";
}

 