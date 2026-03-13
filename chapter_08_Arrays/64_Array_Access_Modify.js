// Accessing
let statues = ["pass", "fail", "skip"];
console.log(statues[0]); // pass
console.log(statues[2]); // skip

console.log(statues.at(-1));// skip - statues.at() start pointing from last element to first and starts with -1
console.log(statues.at(-2));// fail
console.log(statues.at(-3)); // pass
console.log(statues.at(-4)); // undefined // index values does not exist retuns undefined

//  Modifying Arrays
statues[1]= "blocked";
console.log(statues); // pass, blocked, skip
console.log(statues.length);
