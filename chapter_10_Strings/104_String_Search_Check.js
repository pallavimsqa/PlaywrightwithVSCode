// Searching & Checking the string

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() -  returns boolean
console.log(url.includes("https")); // true
console.log(url.includes("staging")); // true
console.log(url.includes("Production")); //False

//startsWith() & endsWith() - returns boolean
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http://")); // false
console.log(url.endsWith("true")); // true

// indexOf() & lastIndexOf() -  returns the index og given caharacter if not returns -1
console.log(url.indexOf("a"));// 10
console.log(url.indexOf("d")); // -1
console.log(url.lastIndexOf("t")); // 40
console.log(url.lastIndexOf("f")); // -1
console.log(url.indexOf("nothere")); // -1


// search() - accepts regex(regular expression) and returns index/-1
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // /login/ is regex pattern // 28
console.log(url.search(/\d+/)); // /d means any digit , no digits present so returns -1
