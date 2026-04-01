// Accessing and Modifying
let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,70]
];

// Access - [row][col]
console.log(grid[0][0]); // 10
console.log(grid[2][1]); // 80
console.log(grid[1][2]); // 60

// modifying 
grid[0][0] = 99;
console.log(grid[0][0]);
console.log(grid);

console.log(grid.length); // gives the number of rows
console.log(grid[0].length); // gives the number of column

console.log(grid[grid.length-1][grid[0].length -1]); // gives the last element - grid[2][2]  - 90

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0;i < testMatrix.length;i++){
    for(let j=0; j< testMatrix[i].length;j++){
        console.log(testMatrix[i][j] + " ")
    }
    console.log(); // adds new line 

}

for (let row of testMatrix){
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log(); // adds new line 
}

// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

