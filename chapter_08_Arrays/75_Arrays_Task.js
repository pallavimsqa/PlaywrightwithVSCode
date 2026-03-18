// tasks
//1. What does `["pass", "fail", "skip"].indexOf("skip")` return?

console.log( ["pass", "fail", "skip"].indexOf("skip")); // 2

//2. Which method returns a NEW array without mutating the original?
// a) `push()` , b) `splice()` ,  c) `filter()` , d) `sort()` 

//3. What is the output?

let arr = [1, 2, 3];
let copy = arr;
copy.push(4);
console.log(arr.length);

// 4. You have `let codes = [200, 404, 500, 201]`. Which correctly checks if ANY request failed (status >= 400)? Answer c) codes.some(c => c >= 400)**
//a) `codes.every(c => c >= 400)` , b) `codes.includes(c => c >= 400)` , c) `codes.some(c => c >= 400)` , d) `codes.find(c => c >= 400) === true`

// What does `[10, 1, 21, 2].sort()` return

//What is the output?

let tests = ["login", "search", "checkout"];
console.log(tests.at(-1));

// Which method would you use to turn `["2024", "03", "07"]` into `"2024-03-07"`? answer join(" - ")

//What does `Array.isArray({length: 3, 0: "a"})` return? answer false

//What is the output? ( deficult)
let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
  acc[r] = (acc[r] || 0) + 1;
  return acc;
}, {});
console.log("Reduce Results:" , counts.pass);



