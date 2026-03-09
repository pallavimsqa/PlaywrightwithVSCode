// Test Case Result Counter
//After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped.
// Print a test report with total tests, counts, pass rate percentage, 
// and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

let testResults = ["pass", "pass", "fail" , "pass", "skip", "pass", "fail", "pass"];
let passed_test =0, failed_test=0, skipped_test=0;
let total_testcount=0;



for(let i=0; i<= testResults.length; i++){

    if(testResults[i] ==="pass"){

        passed_test += 1;
        
    }
    else if (testResults[i] === "fail")
    {
        failed_test += 1;
     
    }
    else if (testResults[i] === "skip"){
        skipped_test += 1;
        
    }else if (i === testResults.length)
    {
        
    console.log("total number of test executed are -", total_testcount);
    console.log("The total number of test passed are -", passed_test);
    console.log("The total number of test failed are -", failed_test);
    console.log("The total number of test skiped are -", skipped_test);
    console.log("The Report of current Test is  -", (passed_test / total_testcount) * 100);
    verdict();
    }

    total_testcount +=1;
}

//verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release)

function verdict(){
     passed_test === total_testcount ? console.log("All Passed - Ready for release") 
            :(failed_test <= 2 || failed_test >= 2)? console.log("Review - less than 2 tests are failed")
            :console.log("Block Release - more that 2 tests are failed");
}