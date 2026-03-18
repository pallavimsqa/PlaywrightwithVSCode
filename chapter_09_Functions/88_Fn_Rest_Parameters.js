// Rest of the Parameters  - ... means rest of the parameters

function logResults(suiteName, ...results){
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(",")}`);
}

 logResults("Auth Suite", "pass","fail","pass","skip");

function add(a,b,c){
    return a+b+c;
}

let nums = [1,2,3];
console.log(add(...nums)); // same as add(1,2,3)



// spread response into validator
function hasError(...codes){
    return codes.some(c => c>=400);
}

let responseCodes = [200,201,404];
console.log(hasError(...responseCodes));