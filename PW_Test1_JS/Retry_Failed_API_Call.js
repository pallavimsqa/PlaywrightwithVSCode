//Retry Failed API Call
//In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
//Log each attempt and print the final result.

 let attempts=1;
 let isSucess =  Math.random()>0.6;


do{
    console.log("API call attempt- ", attempts);
    if(isSucess)


    attempts ++;
}while();
