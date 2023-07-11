"use strict";
// 3. Get a number (n) from the user.
//     - Use nested loops and calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n).
//     - Use an outer loop from 1 to n (outer)
//     - Use an inner loop for the 1+2+...outer (again, loop, not formula)
let getNumber = prompt("Give me a number please");
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
