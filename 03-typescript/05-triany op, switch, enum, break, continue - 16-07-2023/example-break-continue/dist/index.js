"use strict";
const upperLimit = 100;
console.log(`Got: ${findPrimaryNumbers(upperLimit)}`);
function findPrimaryNumbers(upperLimit) {
    outer: for (let thisNumber = 2; thisNumber <= upperLimit; thisNumber++) {
        let primary = true; // We assume the number is primary
        if (thisNumber % 2 === 0 && thisNumber !== 2) { // Skips multiplies of 2
            continue;
        }
        let firstDivisor = 0;
        inner: for (let divisor = 2; divisor < thisNumber; divisor++) {
            if (thisNumber % 3 === 0 && thisNumber !== 3) { // Skips multiplies of 3
                continue outer; // continue the outer loop
            }
            console.log(`tried ${thisNumber} / ${divisor}`);
            if (thisNumber % divisor === 0) {
                primary = false; // It divides exactly by divisor. It's not primary
                firstDivisor = divisor;
                break; // No need to try the next divisor.
                // Go to line 19 - the line after this loop
            }
            console.log(primary);
        }
        if (primary) {
            console.log(`${thisNumber} is primay`);
        }
        else {
            console.log(`${thisNumber} divides by ${firstDivisor}`);
        }
    }
}
function readNextLineFromFile() {
    return "quit";
}
while (true) {
    let userInput = readNextLineFromFile();
    if (userInput === "quit") {
        break;
    }
    if (userInput === "next" || userInput === "skip") {
        continue;
    }
    // Do something with userInput here
    console.log(userInput);
}
