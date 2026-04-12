// sync call back with return type

function calculate(a,b, operation){  // operation is callback
    return operation(a,b);
}

let sum = calculate(10,5, function(x,y){
    return x+y;
});

console.log(sum);


//Async callback with return type

console.log("step1 -> perform addition on 2 numbers");

setTimeout(function() {
    console.log("step 2  -> 10+5 = 15");
}, 500);

console.log("step3 -> Sum of 2 number is");