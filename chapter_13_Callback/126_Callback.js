// CallBack
function placeOrder(item, callback){ // here callback is keyword and it can be any variable
    console.log("....Placeing order");
    callback(); // calling a function, name should be same in the function
// It can be called anywhere but should be last one to call
// can have more than one callback, order will how we call/mention, its line by line
}
// definition of function
function print(){
    console.log("callback - Done with the order");

}
// 3 ways to callback
//first way - normal function
placeOrder("Burger", print);

console.log("----------------------------------");

// second way - Expression/annonymous function
placeOrder("Burger", function(){
    console.log("Annonyomous, I am also a function without name")
});
console.log("----------------------------------");

// Third way - arrow function
placeOrder("Burger", () => {
    console.log("Arrow function, I am also a function with arrow")
});


// Example 

test('has title', async ({ page }) => {

});


function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

test('has title', async ({ page }) => {

});