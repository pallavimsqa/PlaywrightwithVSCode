// During destructuring index are not used

let [first, second , third] = [10,20,30];
console.log(first);
console.log(second);
console.log(third);

let [a, b , ...c] = [10,20,30,40,50];

console.log(a);
console.log(b);
console.log(c);