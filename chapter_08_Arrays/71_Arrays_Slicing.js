// Slicing & combining

let arr =[1,2,3,4,5];
console.log(arr.slice(1,3)); // 2,3
// slice (start, end)- returns new array, does not mutate actual -> (start , end -1)
// index starts from 0 always

console.log(arr.slice(2,4));

console.log(arr.slice(2));
// if end is not given it will starts and prints all the elements

console.log(arr.slice(2,6));
// end index is out of box then no error will shown but print all the elements from starting index  mentioned

