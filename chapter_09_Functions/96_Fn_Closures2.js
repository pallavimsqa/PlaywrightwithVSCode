// closures means the inner functions will 
// remember the variable of outer function if the execution of outer function is completed 

function makeRetryTracker(max){
    let attempts = 0;

    function tryAgain(testName){

        attempts ++;
         if (attempts > max){
            return `${testName} exceeded max retries ${max}`;
         }
        
         return `Attempt ${attempts}/${max} for ${testName}`;

    };

    return tryAgain;

}

let retry = makeRetryTracker(3);
console.log(retry);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));