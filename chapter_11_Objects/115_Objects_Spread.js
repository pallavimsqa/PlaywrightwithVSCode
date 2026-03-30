// using spread objects can be copied and merged
 
let obj1 = {a:1, b:2};
let obj2 = {c:3, d:4};

const copy = {...obj1};
console.log(obj1);
const merge = {...obj1, ...obj2};
console.log(merge);


// this keyword

const user= {
    greet : "Hello ",
    saymyname(name){
        this.greet += name;
        return this.greet;

    }
}
console.log(user.saymyname("Pallavi"));