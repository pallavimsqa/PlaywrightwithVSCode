//Task 1: Grade Calculator: Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) 
// based on the following grading scale:A: 90-100 , B: 80-89 , C: 70-79  , D: 60-69 , F: 0-59

//let score = 100; 

//if (score>= 90)
//{
   // console.log("Grade for your score : A");
   // }
   // else if (score >= 80){
  //      console.log("Grade for your score : B");
  //  }
  //  else if (score >= 70){
  //      console.log("Grade for your score : C");
  //  }
  //  else if (score >= 60){
  //      console.log("Grade for your score : D");
   // }
   // else{
   //     console.log("Grade for your score : F and you have Failed");

//}

let grade;
let score = "Pramod";

if (typeof score !== "number") {
    console.log("Are you fool,why you are gving score as not a number");
    return;
}

if (score < 0 || score > 100) {
    console.log("Are you fool,why you are gving score <0 or. > 100");
    return;
}

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("For the score", score, "Grade is ->", grade);
console.log(`For the score ${score} "Grade is -> ", ${grade}`);