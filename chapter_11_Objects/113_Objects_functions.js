// functions in objects - can have function in objects
// normal object
const user = {
    name : "Pallavi",
    age : 28
};

// functions in objects

const calculator = {
    value : 0,  // 5 THEN -1

    add(n){
        this.value += n; // 5 
        return this;
    },

    substract(n){
        this.value -= n; // -1
        return this;
    }
}

console.log(calculator.add(5).substract(6));
// { value: 0, add: [Function: add], substract: [Function: substract] }