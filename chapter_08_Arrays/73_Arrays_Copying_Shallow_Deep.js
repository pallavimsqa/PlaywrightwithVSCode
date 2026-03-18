// Copying an array

let original = [1,2,3];
console.log("Original : " , original);

// Shallow copying of an array
let copy1 = [...original]; // spread 
console.log("Copy1 : " , copy1);

let copy2 = original.slice(); // using slice() without index means it prints all the element
console.log("Copy2 : " , copy2);

let copy3 = Array.from(original); // using from function
console.log("Copy3 : " , copy3);

let copy4 = original.concat(); // using concat() , nothing inside the brackets means  not with other array(empty)
console.log("Copy4 : " , copy4);


copy1.push(99);
copy2.push(98);
copy3.push(97);
copy4.push(96);

console.log("Copy1 : " , copy1);
console.log("Copy2 : " , copy2);
console.log("Copy3 : " , copy3);
console.log("Copy4 : " , copy4);
console.log("Original : " , original);

console.log("--------------------------------");

//Deep copy - done with JSON


let copy = original;  // reference copy 
console.log("Copy : " , copy);
copy.push(101);
console.log("Copy : " , copy);

original.push(100);
console.log("Original : " , original);
console.log("Copy : " , copy);
console.log("Copy1 : " , copy1);
console.log("Copy2 : " , copy2);
console.log("Copy3 : " , copy3);
console.log("Copy4 : " , copy4);