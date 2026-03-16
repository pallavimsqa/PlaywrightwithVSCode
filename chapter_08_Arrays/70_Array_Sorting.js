//sorting 

let fruits = ["banana", "apple","cherry"];
fruits.sort();
console.log(fruits); // alphabetical by default
console.log("---------------------------");

let nums = [10,1,21,2];
nums.sort(); // 1, 10, 2, 21 // converts into string and then compares
consol.log(nums);
console.log("---------------------------");

nums.sort((a,b) => a-b); // ascending, compares numbers  // a & b are not variable to declare and is a  function to compare
consol.log(nums); // 1,2,10,21
console.log("---------------------------");

nums.sort((a, b) => b-a); // decending compares numbers , ((a, b) => b-a) is a  function to compare
consol.log(nums); // 1,2,10,21
consol.log(nums); // 21,10,2,1
console.log("---------------------------");
