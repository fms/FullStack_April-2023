"use strict";
let userInput = prompt("Enter a number");
let total = 0;
while (userInput) {
    let parsedUserInput = parseInt(userInput);
    let parsedTotal = parseInt(total);
    if (!Number.isNaN(parsedUserInput)) {
        parsedTotal += parsedUserInput;
        total = parsedTotal;
        console.log(`Your total  is: ${total}`);
    }
    else {
        console.log("Not a valid number");
    }
    userInput = prompt("Enter another number, Cancel to exit");
}
