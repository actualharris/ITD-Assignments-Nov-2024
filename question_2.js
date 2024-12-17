// Write logic to check if the user is 18 years or older than 18 years allow him to vote, 
// else infrom him how many more years he needs to become a voter.

let age = parseInt(prompt("Please enter your age:"));

if (age >= 18) {
    console.log("You can vote!");
} else {
    let yearsToWait = 18 - age;
    console.log("You need to wait " + yearsToWait + " more year(s) to be eligible to vote.");
}

