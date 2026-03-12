//sorting

let fruits = ["banana", "apple","cherry"];
fruits.sort();
console.log(fruits); // alphabetical by default

let nums = [10,1,21,2];
nums.sort(); // 1, 10, 2, 21 // converts into string then compares
consol.log(nums);
nums.sort((a,b) => a-b); // ascending
// a & b are not variable to declare
consol.log(nums); // 1,2,10,21
nums.sort((a, b) => b-a); // decending
consol.log(nums); // 21,10,2,1

