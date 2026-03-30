// Primitive data Types -  Call by value - always creates the copy
// Primitive , number, String, boolean, null, undefined 

let a =10;
let b = a;
b=99;
console.log(a);
console.log(b);

a = 90;
console.log(a);
console.log(b);

// Objects always copies the reffernce - call by Refference
// Refference - objects, arrays, functions
let obj1 = {val: 10};
let obj2 = obj1;
console.log(obj1.val);
obj2.val = 20;
console.log(obj2);
console.log(obj1);
console.log(obj1["val"]);


