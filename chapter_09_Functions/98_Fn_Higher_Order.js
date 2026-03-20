//Higher-Order Functions - A function that takes a function as argument or returns a function. calls/runs the function anytime

function runWithLogging(testfn, testName){

    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished: ${testName} - ${result}`);
    return result; // commiting this line output is same 

}

function loginTest(){
    return "passed";
}

function loginTestFailed(){
    return "failed";
}

console.log(runWithLogging(loginTest, "Login Test")); 
console.log(runWithLogging(loginTestFailed, "Dashboard Test"));
/* output for above code
Starting: Login Test
Finished: Login Test - passed
passed
Starting: Dashboard Test
Finished: Dashboard Test - failed
failed */


runWithLogging(loginTest, "Login Test")
runWithLogging(loginTestFailed, "Dashboard Test")
/* output for above code
Starting: Login Test
Finished: Login Test - passed
Starting: Dashboard Test
Finished: Dashboard Test - failed */


