// Function Expression  - remove name give to function and assign it to const variable, and call with the const variable 

const greet = function (name) {
    return `Hello ${name}!`;
};
console.log(greet("Pallavi"));

// Type 4 Function 
function greet1(name1) {
    return `Hello ${name1}!`;
}
console.log(greet1("Deeksha"));

// Functions as Expression - 
const greet2 = function (name1) {
    return `Hello ${name1}`;
}
console.log(greet2("Jiya"));