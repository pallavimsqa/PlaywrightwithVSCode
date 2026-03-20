// pure functions -  A pure function always returns the same output for the same input and has no side effects.

// to.Fixed(2) - appends decimals to the numbers

// pure functions - where we give values directly while calling
function calculatePassRate(total, passed){
    return ((passed/total)* 100).toFixed(2);
}

console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));

// impure functions - where values are assigned to variable and then passed as argument when function is called



function isPassing(score){
    return score >= threshold ;
}

let threshold = 70
console.log(isPassing(threshold));

threshold = 50
console.log(isPassing(threshold));