//transforming - making alteration to the array
// filter — keeps elements that pass a test

let scores = [45, 82, 91, 60, 73];
 console.log(scores);
// map - transforms every element , returns new array, length will be same

let grades = scores.map(s=> s > 70 ? "Pass" : "Fail");
console.log(grades);
console.log("---------------------------");


// filter — keeps elements that pass a test , alters the length of an array

let passing = scores.filter(s=> s >= 70);
console.log(passing);
console.log("---------------------------");

// reduce -  accumulates into single value - reduce the array length

let total = scores.reduce((sum,s) => sum + s,0);
console.log(total);
console.log("---------------------------");

// flat -  flatens the nested array , gives the single array

let nested = [[1,2],[3,4],[5,6]];
console.log(nested.flat());
