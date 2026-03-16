// Iterate - going from one to another - traiversing

let tests = ["login", "checkout", "search"];

for (let i=0; i< tests.length;i++){
    console.log(tests[i]);
}
console.log("---------------------------");

// for...of (cleanest for values)

for (let test of tests){
    console.log(test);
}
console.log("---------------------------");

//forEach - no return value

tests.forEach((test,index) =>{

    console.log(index ,":" ,test);
    // console.log(`${index} : ${test}); // literal template method
});
console.log("---------------------------");

//entries() - index + value

for (let [i,test] of tests.entries()){
    console.log(i ,test);
    // console.log(`${i} : ${test}); // literal template method
}