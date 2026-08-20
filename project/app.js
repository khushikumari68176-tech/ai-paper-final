
 


     
      /* ===== SIDEBAR ===== */
      let sidebar = document.getElementById("sidebar");
      let overlay = document.getElementById("overlay");

      document.getElementById("menu").onclick = () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
      };

      document.getElementById("close").onclick = () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      };

    //   overlay.onclick = () => {
    //     sidebar.classList.remove("active");
    //     overlay.classList.remove("active");
    //   };

      /* ===== QUESTIONS ===== */
    
  const questions = {

math:{
easy:[
"Find derivative of x².",
"Evaluate ∫x dx.",
"Find slope between (1,2) and (3,6).",
"Compute sin(30°).",
"Solve 2x+5=15.",
"Find distance between (2,3) and (6,7).",
"Evaluate lim(x→0) sinx/x.",
"Find area of triangle.",
"Probability of coin toss.",
"Matrix addition.",
"Find value of cos(60°).",
"Solve linear equation 3x=9.",
"Find perimeter of square.",
"Basic algebra solve.",
"Evaluate 5².",
"Find midpoint formula.",
"Simple interest calculation.",
"Find radius from diameter.",
"Convert degree to radian.",
"Basic trigonometry identity."
],

medium:[
"Find derivative of sin(x²).",
"Evaluate ∫0→1 x² dx.",
"Solve dy/dx = x+y.",
"Find eigenvalues of matrix.",
"Partial derivative of z=x²y.",
"Solve complex number z²+1=0.",
"3D distance problem.",
"Solve log(x)=2.",
"Find vector magnitude.",
"Verify Rolle’s theorem.",
"Chain rule application.",
"Integration by parts.",
"Find inverse function.",
"Solve quadratic equation.",
"Matrix multiplication.",
"Determinant solve.",
"Vector addition.",
"Binomial expansion.",
"Trigonometric equation solve.",
"Limits using L’Hospital."
],

hard:[
"Q. Solve:<br>(a) Prove Mean Value Theorem.<br>(b) Example.<br>(c) Geometric meaning.<br>(d) Applications.",
"Q. Attempt:<br>(a) Differential equation.<br>(b) Boundary condition.<br>(c) Solution.<br>(d) Application.",
"Q. Solve:<br>(a) Double integration.<br>(b) Method.<br>(c) Area.<br>(d) Application.",
"Q. Answer:<br>(a) Laplace transform.<br>(b) Solve.<br>(c) Inverse.<br>(d) Use.",
"Q. Attempt:<br>(a) Fourier series.<br>(b) Expansion.<br>(c) Result.<br>(d) Application.",
"Q. Solve:<br>(a) Vector calculus.<br>(b) Divergence.<br>(c) Curl.<br>(d) Application.",
"Q. Answer:<br>(a) Probability distribution.<br>(b) Solve.<br>(c) Mean.<br>(d) Variance.",
"Q. Attempt:<br>(a) PDE.<br>(b) Solve.<br>(c) Condition.<br>(d) Interpretation.",
"Q. Solve:<br>(a) Optimization.<br>(b) Method.<br>(c) Result.<br>(d) Application.",
"Q. Attempt:<br>(a) Numerical method.<br>(b) Solve.<br>(c) Compare.<br>(d) Accuracy.",
"Q. Solve:<br>(a) Taylor series.<br>(b) Expand.<br>(c) Approximate.<br>(d) Use.",
"Q. Answer:<br>(a) Complex analysis.<br>(b) Residue.<br>(c) Solve.<br>(d) Application.",
"Q. Attempt:<br>(a) Green theorem.<br>(b) Proof.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Stokes theorem.<br>(b) Proof.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Divergence theorem.<br>(b) Proof.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Series convergence.<br>(b) Test.<br>(c) Solve.<br>(d) Result.",
"Q. Solve:<br>(a) Matrix diagonalization.<br>(b) Steps.<br>(c) Solve.<br>(d) Use.",
"Q. Answer:<br>(a) Eigenvectors.<br>(b) Solve.<br>(c) Interpret.<br>(d) Use.",
"Q. Attempt:<br>(a) Multivariable calculus.<br>(b) Solve.<br>(c) Interpret.<br>(d) Use.",
"Q. Solve:<br>(a) Advanced integration.<br>(b) Solve.<br>(c) Method.<br>(d) Application."
]
},
os:{
easy:[
"Define Operating System.",
"Explain process.",
"Define thread.",
"Explain kernel.",
"Types of OS.",
"Define scheduling.",
"Explain memory.",
"File system basics.",
"CPU role.",
"System calls.",
"Define multitasking.",
"Explain user mode & kernel mode.",
"Define deadlock.",
"Explain booting.",
"Define interrupt.",
"Explain virtual memory basic.",
"Define paging.",
"Explain process state.",
"Define OS structure.",
"Explain resource management."
],

medium:[
"Explain CPU scheduling algorithms.",
"Deadlock conditions explain.",
"Paging system explain.",
"Synchronization problem.",
"Virtual memory working.",
"IPC methods.",
"Disk scheduling algorithms.",
"Semaphores explain.",
"Process lifecycle diagram.",
"File system structure.",
"Multithreading explain.",
"Context switching.",
"Memory allocation techniques.",
"Fragmentation explain.",
"Demand paging.",
"Producer-consumer problem.",
"Banker’s concept.",
"Thread vs process.",
"Scheduling comparison.",
"System call types."
],

hard:[
"Q. Answer:<br>(a) Banker’s Algorithm.<br>(b) Example.<br>(c) Safe state.<br>(d) Limitations.",
"Q. Attempt:<br>(a) Virtual memory.<br>(b) Paging vs segmentation.<br>(c) Example.<br>(d) Issues.",
"Q. Solve:<br>(a) Concurrency.<br>(b) Critical section.<br>(c) Solution.<br>(d) Application.",
"Q. Answer:<br>(a) Kernel types.<br>(b) Compare.<br>(c) Advantages.<br>(d) Disadvantages.",
"Q. Attempt:<br>(a) Distributed OS.<br>(b) Architecture.<br>(c) Communication.<br>(d) Challenges.",
"Q. Solve:<br>(a) Scheduling.<br>(b) Example.<br>(c) Compare.<br>(d) Analysis.",
"Q. Answer:<br>(a) Memory management.<br>(b) Fragmentation.<br>(c) Solution.<br>(d) Analysis.",
"Q. Attempt:<br>(a) File system.<br>(b) Implementation.<br>(c) Security.<br>(d) Issues.",
"Q. Solve:<br>(a) Deadlock detection.<br>(b) Example.<br>(c) Analysis.<br>(d) Prevention.",
"Q. Answer:<br>(a) Multithreading.<br>(b) Issues.<br>(c) Solution.<br>(d) Performance.",
"Q. Attempt:<br>(a) IPC.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Scheduling algorithm.<br>(b) Solve.<br>(c) Compare.<br>(d) Result.",
"Q. Answer:<br>(a) OS structure.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Synchronization.<br>(b) Tools.<br>(c) Example.<br>(d) Analysis.",
"Q. Solve:<br>(a) Paging.<br>(b) Solve.<br>(c) Example.<br>(d) Result.",
"Q. Answer:<br>(a) Virtual memory.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Thread.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) CPU scheduling.<br>(b) Solve.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) Deadlock.<br>(b) Prevention.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Disk scheduling.<br>(b) Types.<br>(c) Example.<br>(d) Use."
]
},

ds:{
easy:[
"Define data structure.",
"Explain array.",
"Stack operations.",
"Queue explain.",
"Linked list.",
"Searching.",
"Traversal.",
"Sorting basics.",
"Memory structure.",
"Importance of DS.",
"Define node.",
"Types of DS.",
"Linear vs non-linear.",
"Array indexing.",
"Push and pop.",
"Queue operations.",
"Define pointer.",
"Static vs dynamic.",
"Basic recursion.",
"Simple sorting."
],

medium:[
"Binary tree explain.",
"BST operations.",
"Recursion explain.",
"Sorting algorithms.",
"Hashing explain.",
"Graph traversal.",
"Heap explain.",
"Priority queue.",
"Divide and conquer.",
"Searching techniques.",
"Merge sort.",
"Quick sort.",
"Binary search.",
"Tree traversal.",
"Graph representation.",
"Hash collision.",
"Stack applications.",
"Queue applications.",
"Linked list types.",
"Recursion problems."
],

hard:[
"Q. Attempt:<br>(a) AVL tree.<br>(b) Insert.<br>(c) Balance.<br>(d) Complexity.",
"Q. Solve:<br>(a) BFS.<br>(b) DFS.<br>(c) Compare.<br>(d) Analysis.",
"Q. Answer:<br>(a) Dijkstra.<br>(b) Solve.<br>(c) Path.<br>(d) Complexity.",
"Q. Attempt:<br>(a) DP.<br>(b) Solve.<br>(c) Compare.<br>(d) Efficiency.",
"Q. Solve:<br>(a) Greedy.<br>(b) Solve.<br>(c) Compare.<br>(d) Application.",
"Q. Answer:<br>(a) Backtracking.<br>(b) Solve.<br>(c) Steps.<br>(d) Compare.",
"Q. Attempt:<br>(a) Heap.<br>(b) Operations.<br>(c) Solve.<br>(d) Complexity.",
"Q. Solve:<br>(a) Hashing.<br>(b) Collision.<br>(c) Solve.<br>(d) Analysis.",
"Q. Answer:<br>(a) Complexity.<br>(b) Analyze.<br>(c) Compare.<br>(d) Result.",
"Q. Attempt:<br>(a) Trees.<br>(b) Operations.<br>(c) Balance.<br>(d) Application.",
"Q. Solve:<br>(a) Graph.<br>(b) Representation.<br>(c) Solve.<br>(d) Use.",
"Q. Answer:<br>(a) Sorting.<br>(b) Types.<br>(c) Example.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Searching.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Linked list.<br>(b) Operations.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Stack.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Queue.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Recursion.<br>(b) Example.<br>(c) Solve.<br>(d) Analysis.",
"Q. Answer:<br>(a) DP.<br>(b) Example.<br>(c) Solve.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Greedy.<br>(b) Example.<br>(c) Solve.<br>(d) Use.",
"Q. Solve:<br>(a) Trees.<br>(b) Example.<br>(c) Solve.<br>(d) Analysis."
]
},

ai:{
easy:[
"Define AI.",
"Define ML.",
"Dataset explain.",
"Types of AI.",
"Applications of AI.",
"Define model.",
"Explain features.",
"Training vs testing.",
"Supervised learning.",
"Unsupervised learning.",
"Define algorithm.",
"AI examples.",
"Define data.",
"Explain prediction.",
"Define classification.",
"Explain clustering.",
"Define accuracy.",
"AI uses.",
"Define neural network basic.",
"Explain automation."
],

medium:[
"Regression explain.",
"KNN explain.",
"Decision tree.",
"Clustering explain.",
"Evaluation metrics.",
"Overfitting explain.",
"Feature engineering.",
"Naive Bayes.",
"Cross validation.",
"AI pipeline.",
"Bias vs variance.",
"Hyperparameter tuning.",
"Confusion matrix.",
"Precision recall.",
"SVM explain.",
"Dimensionality reduction.",
"Feature scaling.",
"Model selection.",
"Training process.",
"Data preprocessing."
],

hard:[
"Q. Answer:<br>(a) Neural network.<br>(b) Architecture.<br>(c) Training.<br>(d) Applications.",
"Q. Attempt:<br>(a) Deep learning.<br>(b) CNN.<br>(c) Example.<br>(d) Applications.",
"Q. Solve:<br>(a) Backpropagation.<br>(b) Steps.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) NLP.<br>(b) Techniques.<br>(c) Example.<br>(d) Applications.",
"Q. Attempt:<br>(a) Reinforcement learning.<br>(b) Model.<br>(c) Example.<br>(d) Use case.",
"Q. Solve:<br>(a) ML pipeline.<br>(b) Steps.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) SVM.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) KNN.<br>(b) Solve.<br>(c) Example.<br>(d) Analysis.",
"Q. Solve:<br>(a) Decision tree.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Regression.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Clustering.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Neural network.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Overfitting.<br>(b) Solution.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Feature selection.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Data preprocessing.<br>(b) Steps.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Evaluation.<br>(b) Metrics.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) AI ethics.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Deep learning.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) NLP.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Reinforcement learning.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
},
js:{
easy:[
"Define JavaScript.",
"Explain variables.",
"Data types in JS.",
"Explain loop.",
"DOM basics.",
"Functions define.",
"Events explain.",
"Operators in JS.",
"Arrays basic.",
"Objects basic.",
"String methods.",
"Boolean values.",
"Console.log use.",
"Type conversion.",
"Conditional statements.",
"Switch case.",
"For loop example.",
"While loop.",
"Basic syntax.",
"JS uses."
],

medium:[
"Explain closures.",
"Async vs sync.",
"Promises explain.",
"Fetch API.",
"Event loop.",
"Arrow functions.",
"Hoisting explain.",
"Callback functions.",
"Array methods.",
"Object methods.",
"Map filter reduce.",
"Destructuring.",
"Spread operator.",
"Rest operator.",
"Modules in JS.",
"Error handling.",
"Timers in JS.",
"Local storage.",
"Session storage.",
"DOM manipulation."
],

hard:[
"Q. Answer:<br>(a) Closure.<br>(b) Example.<br>(c) Use case.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Async JS.<br>(b) Promise.<br>(c) Async/await.<br>(d) Application.",
"Q. Solve:<br>(a) Event loop.<br>(b) Execution.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) DOM manipulation.<br>(b) Methods.<br>(c) Example.<br>(d) Application.",
"Q. Attempt:<br>(a) Objects.<br>(b) Methods.<br>(c) Example.<br>(d) Use case.",
"Q. Solve:<br>(a) Error handling.<br>(b) Try-catch.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Fetch API.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Promises.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Async/await.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Local storage.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Event handling.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Functions.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Arrays.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Objects.<br>(b) Properties.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) DOM.<br>(b) Access.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Events.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Closures.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Hoisting.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Modules.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) JS engine.<br>(b) Working.<br>(c) Example.<br>(d) Use."
]
},

python:{
easy:[
"Define Python.",
"Variables in Python.",
"Data types.",
"Loops in Python.",
"Functions define.",
"List explain.",
"Tuple explain.",
"Dictionary explain.",
"Operators.",
"Input/output.",
"String basics.",
"Indentation.",
"Comments.",
"Conditional statements.",
"For loop.",
"While loop.",
"Basic syntax.",
"Print function.",
"Type casting.",
"Boolean values."
],

medium:[
"OOP in Python.",
"File handling.",
"Exception handling.",
"List comprehension.",
"Lambda function.",
"Modules explain.",
"Recursion.",
"Decorators.",
"Generators.",
"String methods.",
"Classes and objects.",
"Inheritance.",
"Polymorphism.",
"Encapsulation.",
"Error handling.",
"Virtual environment.",
"Packages.",
"Iterators.",
"Map filter.",
"Python libraries."
],

hard:[
"Q. Answer:<br>(a) OOP.<br>(b) Classes.<br>(c) Example.<br>(d) Application.",
"Q. Attempt:<br>(a) File handling.<br>(b) Modes.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Exception.<br>(b) Handling.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) Decorators.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Generators.<br>(b) Yield.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Recursion.<br>(b) Example.<br>(c) Solve.<br>(d) Analysis.",
"Q. Answer:<br>(a) Modules.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) OOP.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) File.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Exception.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Decorators.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Generators.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Classes.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Inheritance.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Polymorphism.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Encapsulation.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Libraries.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Virtual env.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Packages.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Iterators.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
},

de:{
easy:[
"Define AND gate.",
"Define OR gate.",
"Define NOT gate.",
"Truth table.",
"Boolean algebra.",
"Logic gates.",
"Binary numbers.",
"Basic circuits.",
"Flip flop basic.",
"Digital system.",
"Define XOR.",
"Define NAND.",
"Define NOR.",
"Number system.",
"Binary addition.",
"Binary subtraction.",
"Logic expressions.",
"Truth tables.",
"Basic electronics.",
"Switching theory."
],

medium:[
"K-map solve.",
"Flip flop types.",
"MUX explain.",
"DEMUX explain.",
"Encoder/Decoder.",
"Sequential circuits.",
"Combinational circuits.",
"Registers.",
"Counters.",
"Timing diagram.",
"Boolean simplification.",
"Logic design.",
"Adder circuits.",
"Subtractor circuits.",
"Shift registers.",
"Memory basics.",
"Clock signal.",
"Propagation delay.",
"Logic families.",
"State diagram."
],

hard:[
"(a) ALU.<br>(b) Design.<br>(c) Example.<br>(d) Application.",
"(a) CPU.<br>(b) Architecture.<br>(c) Example.<br>(d) Use.",
"(a) K-map.<br>(b) Simplify.<br>(c) Example.<br>(d) Analysis.",
"(a) Flip flop.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"(a) Counters.<br>(b) Design.<br>(c) Example.<br>(d) Use.",
"(a) Registers.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"(a) Logic design.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"(a) Sequential circuit.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"(a) Combinational circuit.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"(a) Memory.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"(a) ALU.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"(a) CPU.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"(a) K-map.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Flip flop.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Counters.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Registers.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Logic design.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Sequential.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Combinational.<br>(b) Solve.<br>(c) Example.<br>(d) Use.",
"(a) Memory.<br>(b) Solve.<br>(c) Example.<br>(d) Use."
]
},
cn:{
easy:[
"Define network.",
"Types of network.",
"OSI model.",
"TCP/IP model.",
"IP address.",
"MAC address.",
"Protocols.",
"Topology.",
"Bandwidth.",
"Latency.",
"Define router.",
"Define switch.",
"Define hub.",
"LAN vs WAN.",
"Network devices.",
"Transmission media.",
"Define DNS.",
"Define HTTP.",
"Define FTP.",
"Basic networking."
],

medium:[
"Routing algorithms.",
"Switching techniques.",
"Subnetting.",
"DNS explain.",
"HTTP protocol.",
"TCP vs UDP.",
"Error detection.",
"Congestion control.",
"Firewall.",
"VPN.",
"IP addressing.",
"Network security.",
"OSI layers explanation.",
"TCP working.",
"UDP working.",
"Data transmission.",
"Flow control.",
"Routing protocols.",
"Network performance.",
"Wireless networks."
],

hard:[
"Q. Answer:<br>(a) OSI model.<br>(b) Layers.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) TCP/IP.<br>(b) Layers.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Routing.<br>(b) Algorithm.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) Switching.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Subnetting.<br>(b) Solve.<br>(c) Example.<br>(d) Analysis.",
"Q. Solve:<br>(a) Congestion control.<br>(b) Methods.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) Firewall.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) VPN.<br>(b) Working.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) DNS.<br>(b) Working.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) HTTP.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) TCP.<br>(b) Working.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) UDP.<br>(b) Working.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Routing protocols.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Network security.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Wireless network.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) OSI vs TCP/IP.<br>(b) Compare.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Flow control.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Error detection.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Data transmission.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Network performance.<br>(b) Analysis.<br>(c) Example.<br>(d) Use."
]
},

dbms:{
easy:[
"Define DBMS.",
"Database types.",
"Tables explain.",
"Keys define.",
"Schema.",
"SQL basics.",
"Insert query.",
"Select query.",
"Update query.",
"Delete query.",
"Primary key.",
"Foreign key.",
"Constraints.",
"Database models.",
"Data types.",
"Simple queries.",
"Record and field.",
"DBMS uses.",
"Advantages of DBMS.",
"Basic operations."
],

medium:[
"Normalization.",
"ER diagram.",
"Joins explain.",
"Transactions.",
"ACID properties.",
"Indexing.",
"Views.",
"Triggers.",
"Constraints.",
"Data models.",
"Functional dependency.",
"Keys types.",
"Relational algebra.",
"SQL joins.",
"Subqueries.",
"Transaction states.",
"Concurrency control.",
"Locking mechanism.",
"Database security.",
"Backup recovery."
],

hard:[
"Q. Answer:<br>(a) Normalization.<br>(b) Forms.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) ER model.<br>(b) Diagram.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Joins.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Transactions.<br>(b) ACID.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Indexing.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Concurrency.<br>(b) Control.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Recovery.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) SQL.<br>(b) Queries.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) ER diagram.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Relational algebra.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Functional dependency.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Keys.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Constraints.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Views.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Triggers.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Indexing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Security.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Backup.<br>(b) Methods.<br>(c) Example.<br>(d) Use.",
"Q. Answer:<br>(a) Transactions.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) DB design.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
},

cd:{
easy:[
"Define compiler.",
"Phases of compiler.",
"Lexical analysis.",
"Syntax analysis.",
"Parser.",
"Token.",
"Grammar.",
"Code generation.",
"Errors.",
"Interpreter.",
"Define linker.",
"Define loader.",
"Symbol table.",
"Basic parsing.",
"Compiler types.",
"High level language.",
"Low level language.",
"Translation process.",
"Compilation steps.",
"Error types."
],

medium:[
"LL parser.",
"LR parser.",
"Intermediate code.",
"Symbol table.",
"Optimization.",
"Parsing techniques.",
"CFG.",
"Ambiguity.",
"Error handling.",
"Code optimization.",
"Recursive descent parser.",
"Shift reduce parser.",
"Syntax tree.",
"Semantic analysis.",
"Code generation techniques.",
"Data flow analysis.",
"Loop optimization.",
"Register allocation.",
"Memory management.",
"Compiler design phases."
],

hard:[
"Q. Answer:<br>(a) Compiler phases.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Lexical analysis.<br>(b) Tokens.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Parsing.<br>(b) LL/LR.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) Symbol table.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Optimization.<br>(b) Types.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Code generation.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) CFG.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Parsing.<br>(b) Techniques.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Error handling.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Intermediate code.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Optimization.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Register allocation.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Memory mgmt.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Loop optimization.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Syntax tree.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Semantic analysis.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Data flow.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Parsing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Code gen.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Compiler design.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
},

ml:{
easy:[
"Define ML.",
"Types of ML.",
"Dataset.",
"Features.",
"Model.",
"Training.",
"Testing.",
"Overfitting.",
"Underfitting.",
"Applications.",
"Define algorithm.",
"Supervised learning.",
"Unsupervised learning.",
"Data preprocessing.",
"Model evaluation.",
"Basic prediction.",
"Classification.",
"Clustering.",
"AI vs ML.",
"Simple ML uses."
],

medium:[
"Regression.",
"Classification.",
"Clustering.",
"Decision tree.",
"KNN.",
"SVM.",
"Evaluation metrics.",
"Cross validation.",
"Feature selection.",
"Bias variance.",
"Hyperparameter tuning.",
"Confusion matrix.",
"Precision recall.",
"Feature scaling.",
"Model training.",
"Data cleaning.",
"Dimensionality reduction.",
"Overfitting solution.",
"Model selection.",
"Pipeline."
],

hard:[
"Q. Answer:<br>(a) Regression.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Classification.<br>(b) Algorithms.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Clustering.<br>(b) K-means.<br>(c) Example.<br>(d) Analysis.",
"Q. Answer:<br>(a) SVM.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Decision tree.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Neural network.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Deep learning.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) NLP.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Reinforcement learning.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Evaluation.<br>(b) Metrics.<br>(c) Example.<br>(d) Use.",
"Q. Attempt:<br>(a) Feature engineering.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Preprocessing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Model tuning.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Bias variance.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Pipeline.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Clustering.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Regression.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Classification.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Neural net.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) ML system.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
},

english:{
easy:[
"Define noun.",
"Define verb.",
"Sentence types.",
"Tense basics.",
"Articles.",
"Prepositions.",
"Pronouns.",
"Adjectives.",
"Adverbs.",
"Basic comprehension.",
"Simple sentence.",
"Parts of speech.",
"Active voice.",
"Passive voice.",
"Basic grammar.",
"Synonyms.",
"Antonyms.",
"Fill in blanks.",
"Simple reading.",
"Vocabulary basics."
],

medium:[
"Essay writing.",
"Letter writing.",
"Voice change.",
"Speech writing.",
"Report writing.",
"Paragraph writing.",
"Comprehension passage.",
"Grammar rules.",
"Synonyms antonyms.",
"Idioms phrases.",
"Story writing.",
"Notice writing.",
"Email writing.",
"Formal letter.",
"Informal letter.",
"Editing sentences.",
"Error correction.",
"Reading skills.",
"Writing skills.",
"Language usage."
],

hard:[
"Q. Answer:<br>(a) Essay writing.<br>(b) Structure.<br>(c) Example.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Letter writing.<br>(b) Format.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Comprehension.<br>(b) Passage.<br>(c) Answer.<br>(d) Analysis.",
"Q. Answer:<br>(a) Speech.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Grammar.<br>(b) Rules.<br>(c) Example.<br>(d) Use.",
"Q. Solve:<br>(a) Report writing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Essay.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Letter.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Grammar.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Comprehension.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Speech.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Writing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Editing.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Reading.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Vocabulary.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Idioms.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Phrases.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Solve:<br>(a) Grammar rules.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Answer:<br>(a) Writing skills.<br>(b) Example.<br>(c) Use.<br>(d) Analysis.",
"Q. Attempt:<br>(a) Language.<br>(b) Example.<br>(c) Use.<br>(d) Analysis."
]
}
  };

 



      /* ===== GENERATE PAPER ===== */

 
function generatePaper(){

let subject = document.getElementById("subject").value;
let difficulty = document.getElementById("difficulty").value;

// copy array (important for no repeat)
let selected = [...questions[subject][difficulty]];

// shuffle (random unique)
selected.sort(() => Math.random() - 0.5);

// check enough questions
if(selected.length < 15){
alert("Not enough questions!");
return;
}

// divide sections
let sectionA = selected.slice(0,5);
let sectionB = selected.slice(5,10);
let sectionC = selected.slice(10,15);

// store
let data = {
subject: subject.toUpperCase(),
sectionA: sectionA,
sectionB: sectionB,
sectionC: sectionC
};

// localStorage.setItem("paperData", JSON.stringify(data));
sessionStorage.setItem("paperData", JSON.stringify(data));

// open paper page
window.open("paper1.html","_blank");
}
      /* ===== CHART ===== */
      new Chart(document.getElementById("difficultyChart"), {
        type: "pie",
        data: {
          labels: ["Easy", "Medium", "Hard"],
          datasets: [{ data: [40, 35, 25] }],
        },
      });
    