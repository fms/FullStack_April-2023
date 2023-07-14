"use strict";
let userInput = parseInt(prompt("Enter a number") || "0");
let total = 0;
if (!Number.isNaN(userInput)) {
    for (let i = 0; i <= userInput; i++) {
        total += i;
    }
    console.log(total);
}
else {
    console.log("Invalid value");
}
