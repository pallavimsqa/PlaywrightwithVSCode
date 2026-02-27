//Task: Triangle Classifier:
//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, 
//determine if the triangle is equilateral (all sides are equal), 
//isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 14, b=13, c=11;

if(a===b && a===c)
    {
        console.log("All the sides are qual , The Triangle is equilateral");
    }
    else if(a!=b && a!=c)
    {
        console.log("No sides are equal, The Triangle is scalene ");
    }
    else
    {
        console.log("Exactly two sides are equal , The triangel is Isosceles ");
    }
