// Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns the first matching element index or -1 if the element not found

console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));

// lastIndexOf - searches from the end or -1 if the element not found

console.log(results.lastIndexOf("pass"));
console.log(results.lastIndexOf("skip"));

//includes - returs boolean( true/false)

console.log(results.includes("error"));
console.log(results.includes("skip"));

// find - returs the first matching element or undefined if the element not found

let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 45)); 
console.log(nums.find(x => x > 25)); 

//findLast - searches from the end 

console.log(nums.findLast(x => x > 20)); 
console.log(nums.findLast(x => x > 45));

// findIndex - returns the index of first matching element or -1 if the element not found

console.log(nums.findIndex(x => x > 45)); 
console.log(nums.findIndex(x => x > 25)); 

// findLastIndex - returns the index of last matching element or -1 if the element not found
console.log(nums.findLastIndex(x => x > 45)); 
console.log(nums.findLastIndex(x => x > 25)); 