let age = parseInt(prompt("Please enter your age:"));

if (age >= 18) {
    console.log("You can vote!");
} else {
    let yearsToWait = 18 - age;
    console.log("You need to wait " + yearsToWait + " more year(s) to be eligible to vote.");
}

