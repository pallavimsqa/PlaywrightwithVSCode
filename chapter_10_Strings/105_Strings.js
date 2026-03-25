//Extracting Substrings

let str = "Login_Test_Pass_001";

// slice(start , end-1) - negative indexes supported
console.log(str.slice(0,5)); // (0,4)
console.log(str.slice(11)); // starts from index 11 to end 
console.log(str.slice(-3)); // starts from  end till -3
let testresult = str.slice(-3); // starts from  end till -3

// substring(start, end-1) - no negatives (treats as 0)
console.log(str.substring(6,10) ); //(6,9)

// at() for single characters
console.log(str.at(0)); // L
console.log(str.at(-1)); // 1
