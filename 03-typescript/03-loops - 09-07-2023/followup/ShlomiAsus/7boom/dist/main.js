"use strict";
let firstNumber = 1;
let initial = firstNumber;
for (let i = 1; i < 100; i++) {
    if (i % 7 == 0 || i.toString().includes('7')) {
        console.log('number is:', +i, "BOOM!");
    }
}
