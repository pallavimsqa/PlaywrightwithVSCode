// Object keys can be altered anytime
const user ={ 
    name : "Pallavi",
    age : 20,
    email: "pallavi1234@gmail.com"
}

console.log(user);

// Accessing properties
console.log(user.age);
console.log(user["name"]);

// Dynamic property access - assigned new varibale then access using []
const key = "age";
console.log(user[key]);

// Adding/ Modifying properties
user.city = "NYC";
user.age = 32;
console.log(user);