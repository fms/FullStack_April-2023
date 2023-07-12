"use strict";
let firstNumber = 1;
let initial = firstNumber;
for (let index = 1; index < 100; index++) {
    if (index % 7 == 0 || index.toString().includes('7'))
        console.log(`number is: ${index}  BOOM!`);
}
