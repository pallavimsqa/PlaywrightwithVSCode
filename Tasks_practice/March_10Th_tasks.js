// Exercise 3 — Deep vs Shallow Copy (Tricky)
//What is the output and why? How would you fix it? javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);// output- fail

console.log("-------------------------------------------------");

//Exercise 2 — Spot the Bug
//What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);// output - Fastest: 1200
let acsendSorted = responseTimes.sort((a , b) => a - b); // ascending order 
console.log("Fastest:", acsendSorted[0]);// output - Fastest: 85
let decendSorted = responseTimes.sort((a , b) => b - a); // ascending order 
console.log("Fastest:", decendSorted[1]);// output - Fastest: 1200

console.log("-------------------------------------------------");

//Exercise 1 : API Response Validation
//You receive an array of API response codes. Write code to:
// 1.Check if ALL responses are successful (200–299)
// 2.Find the FIRST non-success code
//Return all unique error codes


let responses = [200, 201, 404, 500, 404, 200, 503];