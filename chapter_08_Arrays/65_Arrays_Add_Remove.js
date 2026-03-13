// Add array
let arr = [1,2,3];
console.log(arr);

// Add to end
arr.push(4);
console.log(arr);

// Adding 2 to more 
arr.push(5,6);
console.log(arr);

// Remove last element
arr.pop();
console.log(arr);

// Add to Begining
arr.unshift(0);
console.log(arr);

// Remove from Begining
arr.shift();
console.log(arr);

//splice(start, deletcount, .....itemsToAdd)
arr.splice(2,1); // removes 1 element at the index 2 - 3
console.log(arr);

arr.splice(2,0,99); // removes o element at index 2 and adds 99 at index 2 - [1,2,99,4,5]
console.log(arr);

arr.splice(1,2,10,20); // removes 2 element at index 1 and adds 10,20 at index 1 - [1,10,20,4,5]
console.log(arr);