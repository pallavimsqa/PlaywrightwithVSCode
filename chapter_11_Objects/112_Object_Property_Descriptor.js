// Property Descriptor gives the deatils of the obj elements - used in API Automation
let obj = {name : "Login"};
console.log(Object.getOwnPropertyDescriptor(obj , "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }