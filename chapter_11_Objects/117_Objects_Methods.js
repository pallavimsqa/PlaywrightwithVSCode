const obj ={ a:1, b:2, c:3};

console.log(Object.keys(obj));  // prints keys
console.log(Object.values(obj)); // prints values
console.log(Object.entries(obj)); // prints key values pair


// For loops
const user = { name: "John, age : 30"};

for (const key in user){
    console.log(`${key}: ${user[key]}`);
}

// For each loop , Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key)
});

Object.entries(user).forEach(([key , value]) =>{
    console.log(`${key}:${value}`)

});