// *********

// *******

//  *****

//   ***

//    *

let n= 5;
for(let i=n; i>=1; i--){ // 5
    let row = "";
    for(let j=1;j<= n-i; j++){ 
        row = row + " ";
        }
        for(let j=1 ; j<= i ;j++){ 
            row= row + " *";
        }
        console.log(row);

}