// Strings are collections of characters

let url = "https://app.vwo.com";
let status = 'pass';    
let message = `Test completed in ${320}ms`;

// single quotes
let a = 'Hello';

// double quotes
let b = "world";

// template literals(backticks)- allows expressions and multi line

let name1 = "Allice";
let msg = `Hello ${name1}! 2+2 = ${2+2}`;
console.log(msg);


// Multiline

let reeport = `
Test = Login
Status: Pass
Duration : 320ms`;
//or let reeport = `Test = Login Status: Pass Duration : 320ms`;

// String() constructor (converts other types into String) - can be create srting using "String()"
console.log(String(200));
String(true); // "true"
String(null); //"null"
String([1,2]); //"[1,2]"