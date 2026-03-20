//callback functions - a function is called at the end when the other codes of functions are executed

function runTest(testName , callback){
    console.log("Started the execution of Runtest function");
    let result = "pass"
    console.log("Finished the execution of Runtest function");

    callback(testName, result);
}

function  onComplete(name , result){
    console.log(`Finished ${name} with: ${result}`);   
}

runTest("Login Test", onComplete);

