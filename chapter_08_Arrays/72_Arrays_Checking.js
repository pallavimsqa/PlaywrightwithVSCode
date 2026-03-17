// checking the arrays

//isArray - to check the array - returns boolean
 
let result = Array.isArray([1,2,3,4]);
let result1 = Array.isArray("a");
let result2 = Array.isArray( "hello" );
console.log(result);
console.log(result1);
console.log(result2);
console.log("--------------------------------------------");

// every - all the element should pass the condition

let a = [80, 90, 85].every(s => s >=70);
console.log(a);

let b = [80, 90, 85].every(s => s <=70);
console.log(b);

console.log("--------------------------------------------");
//some - at least one must pass the condition

let c = [80, 90, 85].some(s=> s < 70);
console.log(c);

let d = [80, 60, 85].some(s=> s > 70);
console.log(d);