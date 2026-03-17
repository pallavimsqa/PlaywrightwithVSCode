// Slicing & combining

// slice (start, end)- returns new array, does not mutate actual -> (start , end -1) ,  index starts from 0 always
let arr =[1,2,3,4,5];
console.log(arr.slice(1,3)); // 2,3

console.log(arr.slice(2,4));
console.log(arr.slice(-2)); // it counts from the end starting with -1, -2, -3 etc and it prints till mentioned index, starts from -1 to -2
console.log(arr.slice(-6)); // it will starts from -1 and prints all 
console.log(arr.slice(2)); // if end is not given it will starts form given index and prints all the elements
console.log(arr.slice(0)); // prints all the element, starts from 0 to end

console.log(arr.slice(2,6)); // end index is out of box then no error will shown but print all the elements from starting index  mentioned

// concatination - adding 2 things 

let a = [1,2];
let b = [3,4];
let c = a.concat(b, [5,6]);
console.log(c);
let arr2 = a.concat(b);
console.log(arr2);


// spread (modern way) - concatenation. (...)

let d = [...a, ...b];
console.log(d);

//join 

let s = ["pass","Fail","skip"].join(" = ");
let j = ["pass","Fail","skip"].join(" , ");
let k = ["pass","Fail","skip"].join(" | ");
console.log(s);
console.log(j);
console.log(k);