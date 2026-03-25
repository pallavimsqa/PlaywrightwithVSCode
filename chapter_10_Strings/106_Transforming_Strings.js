// Transforming Strings - 

let str = " Hello, World! "

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim - removes whitespaces

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Replace 
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg);
console.log(msg.replace("FAIL" , "PASS")); // only first one will be replaced
console.log(msg.replaceAll("FAIL" , "PASS")); // replaces everything
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with regex - it works as replaceAll()

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g , "qa"));

//Concatenation

console.log("Hello" + " " + "World!"); // + operator
console.log("Hello".concat(" ", "World!")); // concat keyword
console.log(`${"Hello"} ${"World!"}`);

// Splitting and joining
console.log("pass,fail,pass".split(","));
console.log("passfailpass".split(""));
console.log("hello".split(""));
console.log("test_login_pass".split("_").join(" "));

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
