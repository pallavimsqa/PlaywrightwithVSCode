// IQ 1 -  what is the answer
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";  
    if (code >= 400 && code < 500) return "client error";
   if (code >= 500) return "server error";
 }

 getStatus(200);
 getStatus(404);
 getStatus(500);


// IQ 2 - what is the answer - undefined coz no return type
 function logTest(name) {
   console.log(`Running: ${name}`);
   // no return statement
 }
let result = logTest("Login");
console.log(result);


// IQ 3 - Is this possible - Yes it is coz of Hoisting
greet("Alice");

function greet(name1) {
 return `Hello, ${name1}!`;
}

//IQ 4 - Hoisting is not possible with Function expression coz hoisting not possible with let & const
sayHi("Bob");

const sayHi = function (name2) {
    return `Hi, ${name2}!`;
};