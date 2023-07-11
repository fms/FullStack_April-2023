"use strict";
//2. Get a number (n) from the user.
// - Calculate and print the total: 1+2+3+...+n.
// - Use a loop and not the formula for this arithmetic sequence.
const getNumber = prompt("Give me a number please :)");
if (getNumber) {
    let num = parseInt(getNumber);
    console.log(num);
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
        console.log(sum);
    }
    if (Number.isNaN(num)) {
        console.log("You didn't gave me number!");
    }
}
