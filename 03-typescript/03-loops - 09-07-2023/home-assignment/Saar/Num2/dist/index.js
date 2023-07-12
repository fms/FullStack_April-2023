"use strict";
// 2. Get a number (n) from the user.
//    - Calculate and print the total: 1+2+3+...+n.
//    - Use a loop and not the formula for this arithmetic sequence.
let userInput = parseInt(prompt("Write number") || "0");
let total = 0;
if (Number.isNaN(userInput)) {
    console.log("Invalid number");
}
else if (userInput == 0) {
    console.log("You didnt put any number");
}
else {
    for (let i = 1; i <= userInput; i++) {
        console.log(i);
        total += i;
    }
    console.log(`Your total of numbers is: ${total}`);
}
