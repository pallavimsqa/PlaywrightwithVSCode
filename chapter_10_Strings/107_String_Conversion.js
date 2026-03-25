// String Conversion
 
// To string
console.log((200).toString());
console.log(true.toString());
console.log(Number("43"));
console.log(parseInt("43px"));
console.log(parseFloat("3.14rem"));

// String are immutable/ not changable
let str = "hello";
str[0] = "H";
console.log("str:", str);

let upper = str.toUpperCase();
console.log("Upper:" , upper);
console.log("str:", str);
