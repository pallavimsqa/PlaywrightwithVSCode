// Asynchronous callback is achieved by using setTimeout() function which takes the argument as callback and the delay, setTimeout(Callback(), number)
console.log("Test 1: Started");

setTimeout(function(){
    console.log("Test 2: API response recieved");
} , 2000);

console.log("Test 3: Moving to next test");