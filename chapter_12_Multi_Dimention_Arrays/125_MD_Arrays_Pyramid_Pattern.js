//   *   
//  ***
// ***** 
/* 0,0 0,1 0,2 0,3 0,4
   1,0 1,1 1,2 1,3 1,4
   2,0 2,1 2,2 2,3 2,4 */


let n = 3;
for (let i=1; i<=n; i++){
    let row = "";
    for (let j=1; j<=n-i; j++){ // j<=3-1 , 1<=2
        row = row +" ";  
    }
    for(let j=1 ; j<=2*i-1 ; j++){
        row = row + "*";
    }
    console.log(row);
}