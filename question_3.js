// Write a program that prints the multiplication table of a given number (1 through 10) using a for loop.


function multiplication(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}


let number = 5;
multiplication(number);