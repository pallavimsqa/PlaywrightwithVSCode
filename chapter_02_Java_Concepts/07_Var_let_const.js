// var, let, const
// let is most used in JS



// variables are function scoped
var a = 10; //Global scope
console.log(a);

//Defination of Function
function printHello(){
    console.log("Hello ThetestingAcademy");
   
    console.log(a);
    if(true){
        var a= 30;
        console.log(a);
    }
    console.log(a);
}

printHello();

console.log("----------------------------------------------------------");

var x = 10;
console.log("Global variable vlaue - ", x);

function test(){
    console.log("Function scope variable value is - ", x);
    console.log("Hello tester");
    //var x= 20;
    console.log("Local variable value - ", x);
    if(true){
        var x = 30;
        console.log("if block variable value - ", x);
    
    }
    console.log("Function block variable value - ", x);
}

test();


// // var also allows re-declaration:
// var a = 10;
// var a = 20; // No error, re-declaration is allowed
// console.log(a); // 20 

console.log("----------------------------------------------------------");


//  let - blocked scoped

let b = 10;
console.log(b);

function printHello(){
    console.log("Hello TheTestingAcademy");
    let b = 20;
    console.log(b);
    if(true){
        let b = 30;
        console.log(b);
    }
    console.log(b);
}

printHello();

// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;
let a = 10;
a = 20; // reassignment is possible
console.log(a); // 20 

// var nn = "Pramod";
// let nn = "Pramod";   // Error: Identifier 'nn' has already been declared


console.log("----------------------------------------------------------");

// constants - block scope

const pi = 3.14; // Constant variable
console.log(pi);
pi = 3.14159; // Error: Assignment to constant variable
