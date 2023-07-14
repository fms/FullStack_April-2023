"use strict";
let userNum = parseInt(prompt("Enter your number between 1 and N!") || "0");
let total = "";
let plus = "+";
let sum = 0;
while (Number.isNaN(userNum) || userNum == 0) {
    userNum = parseInt(prompt("This is not a valid number!! Enter your number between 1 and N!") || "0");
}
for (let counter = 1; counter <= userNum; counter++) {
    for (let innerCounter = 1; innerCounter <= counter; innerCounter++) {
        if (counter == userNum && innerCounter == userNum) {
            plus = "=";
        }
        total += `${innerCounter} ${plus} `;
        sum += innerCounter;
    }
}
console.log(`${total}${sum}`);
