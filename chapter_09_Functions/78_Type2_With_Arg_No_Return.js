// type2 functions

// with argument/parameter but without return type

function greetByName(name){  // name is parameter
    console.log("Hi", name);

}

greetByName("Pallavi");
greetByName("Pramod"); // Pramod is argument
greetByName("Deeksha");
greetByName("Jiya");
greetByName("Dharani");

function begger(money){
    console.log("Thanks for", money,"rupees");
}

let returnMeSomething = begger(100);
console.log(returnMeSomething);

let name1 = greetByName("How are You");
console.log(name1);
