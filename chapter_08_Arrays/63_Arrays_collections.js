// Array

let fruits = []; //empty array with []  
let fruits_fresh = ["apple", "banana", "cherry"];

let arr =[10,20,30,40]; // index  - 0-3 total 4 items
console.log(arr.length); // length is the property 
console.log(arr[0]); // 10
console.log(arr[2]); //30
console.log(arr[3]);//40
console.log(arr[4]);// defined

let testResults=["pass","fail","pass", "skip"]; // JS allows duplicate values
let mixed = ["hello",1, true, null]; // JS arrays can hold any type, array is hetrogenous

// creation of array - with the let can be assigned arrays literal to variable with square brackets

let browsers=["chrome", "Firefox", "Safari"];

// Array.of()
let test = Array.of(10,20,30,40,50); // creates an array using of function 
console.log(test); // [100,200,300,400]
console.log(test[0]); // 100

// Array.from()
let chars = Array.from("hello"); //creates an array of characters ["h","e","l","l","o"]


// Array Constructor

let scores = new Array(3); // creats empty 
let scores1 = new Array(1,2,3); // creates array [1,2,3]

let numbers = new Array(100,200,300,400); // index 0-4: 4
console.log(numbers); // [100,200,300,400]
console.log(numbers[0]); // 100


