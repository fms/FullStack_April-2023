"use strict";
// 3. Get a number (n) from the user.
//     - Use nested loops and calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n).
//     - Use an outer loop from 1 to n (outer)
//     - Use an inner loop for the 1+2+...outer (again, loop, not formula)
let userInput = parseInt(prompt("Write number") || "0");
let total = 0;
let total2 = 0;
for (let outerLoop = 1; outerLoop <= userInput; outerLoop++) {
    console.log(outerLoop);
    for (let innerLoop = 0; innerLoop <= outerLoop; innerLoop++) {
        total2 += outerLoop - innerLoop;
    }
    total += outerLoop;
}
console.log(total2);
console.log(total);
