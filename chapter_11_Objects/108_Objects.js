// objects - elements are stored in Key value pairs with the curly braces and no double quotes are used for keys

let student1 = {name : "Pallavi" , age : 40};
let student2 = {name : "Kajol"};
let student3 = {name : "Laddu" , age : 25 , phone : 9807645345};// No double quotes are used for keys

// below key in doubt is actually JSON
let JSON_Student1 = { "name" : "Lilly" , "age" : 15 , "phone" : 5348692301};

// accessing object elements with . and []
let a = {status : "pass"};
console.log(a.status);
console.log(a["status"]); // both possible returns the same output

let a1 = { status : 'pass'}; // single quotes can be used for value
console.log(a1.status);

// keys are case sensitive
let a22 = {status : "pass" , Status : "Fail" }
// let a = {status id: "pass"};  // space is not allowed in keys

console.log(a22.status);
console.log(a22["Status"]);

let b = a; // b copies the referrence of a and not the object
b.status = "fail";
console.log(a.status);

// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "skip" };
console.log(c === d);

const t_json = {
    "name" : "Pallavi",
    "age" : 15
};
console.log(t_json);

const t_js = {
    name : "Pallavi",
    age : 15
};
console.log(t_js);