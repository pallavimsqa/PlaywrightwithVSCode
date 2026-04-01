// One dimentional array , list of String - duplicate elements are allowed

let results = ["pass", "fail", "skip"];

// 2 Dimentional arrays
// rows x columns , when rows and columns are equal then its called matrix(3x3, 2x2,0x0)

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matrix_2D = [
    [1,2,3,4],
]

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(grid[i][j]);
    }
}

