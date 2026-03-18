// Immediately Invoked Function Expression (IIFE) - they no need to called , they are called by themselfs
 
// normal function
function name1(){
    console.log("Hi");
}
name1();

//IIFE -  remove the name add a brakets and it will call by itself

(function () {
    console.log("Hi");
})();



function getEnv(){
    console.log("Staging");
}

getEnv();

//IIFE
(function(){
    console.log("Staging");
})();


// arrow function as IIFE

(() => {
    console.log("Arrow Function as IIFE");
})();
