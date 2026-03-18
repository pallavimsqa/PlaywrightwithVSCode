// What is the output? a) ReferenceError b) undefined c) "Hello, Alice!" d) TypeError
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

// What is the output? a) "ok" b) "error" c) undefined d) ReferenceError

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

//What does this function return? a) undefined b) 0 c) null d) TypeError

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();

//What is the output? a) 1 b) 2 c) 3 d) 0

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

// Which is a pure function? 
// a) function log(msg) { console.log(msg); } 
// b) function add(a, b) { return a + b; } 
// c) function getTime() { return Date.now(); } 
// d) function push(arr, val) { arr.push(val); return arr; }


//  What is the output? a) 1 b) undefined c) 4 d) TypeError

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);

//What is the output? a) "staging" b) undefined c) null d) TypeError
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());

//What does this return? a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);

//What is the output? a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));

//What is the output? a) 20 b) 30 c) 40 d) 10

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());

/* Answers
1.c, 
2.d, 
3.b, 
4.c, 
5.b, 
6.c, 
7.b, 
8.b, 
9.b, 
10.b */