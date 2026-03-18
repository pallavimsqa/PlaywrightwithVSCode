//Scope in functions

let env = "staging"; // global variable

function setConfig(){
    let timeout = 3000; // local variable , block scope
    console.log(env);     // can access global
    console.log(timeout); // can access local

}

setConfig();
console.log(env);     // can access global
//console.log(timeout);   // cant access coz block scope, local variable

// Nested scope | blocked scope
let g_x =5;


function outer(){
    let x= 10;
     console.log("Outer function:", g_x);
        function inner(){
            let y = 20;
            console.log(x); // inner function can access outer function variable
            console.log("Inner function:", g_x);
        }

    inner();
    console.log("Outer function:",g_x);
    //console.log(y); //  outer function can not access inner function variable, block scope
}

outer();
