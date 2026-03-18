// Arrow function - Ecma script 6

// function Expression
const greet = function (name){
    return `Hello ${name}!`;
}
console.log(greet("Pallavi"));


// Arrow function - remove function keyword, curly braces and return, instead pass the parameter(if required) & mention arrow (=>)
// arrow function works when there is single line of code  
    const greet1 = (name1) => `Hello ${name1}!`;
    console.log(greet1("Deeksha"));


 const doubleIt = n => n*2 ;
 console.log(doubleIt(10));

// No parameters/argument - para/arg are required

const getEnv = () => "Staging";
console.log(getEnv());

// when we have multi-line code can we use the arrow function -  Yes we can use arrow function with curly bracess and return

const getResult = (score) => {
    if(score>70) return "pass";
    return "fail";
};

console.log(getResult(80));
console.log(getResult(60));
