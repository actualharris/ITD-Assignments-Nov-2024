// Write a code which can give grades to students according to theirs marks using Conditionals
// 80%-100%, Distinction
// 608-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 08-34%, FAIL

let totalMarks = 600
let userInput  = prompt("Enter total marks scored by you (b/w 0-600): ")

let studentMarks = parseInt(userInput, 10);

if (studentMarks < 0 || studentMarks > totalMarks || isNaN(studentMarks)) {
    console.log("Invalid input! Please enter marks between 0 and 600.");

} else {
    let percentage = (studentMarks / totalMarks) * 100;
    
    percentage = Math.round(percentage * 100) / 100;
    console.log("Your percentage is: " + percentage + "%")

    if (percentage >= 80 && percentage <= 100) {
        console.log("Grade: Distinction");
    } else if (percentage >= 60 && percentage < 80) {
        console.log("Grade: First Class");
    } else if (percentage >= 50 && percentage < 60) {
        console.log("Grade: Second Class");
    } else if (percentage >= 35 && percentage < 50) {
        console.log("Grade: Pass");
    } else if (percentage >= 0 && percentage < 35) {
        console.log("Grade: FAIL");
    }
}