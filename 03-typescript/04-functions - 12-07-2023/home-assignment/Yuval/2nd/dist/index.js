"use strict";
function larger(num1, num2) {
    if (num1 > num2) {
        return (num1);
    }
    return (num2);
}
function larger2(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(`The larger number between 15 and 22 is ${larger(15, 22)}`);
console.log(`The larger number between 27 and 2 is ${larger(27, 2)}`);
console.log(`The larger number between -99999 and 0 is ${larger2(-99999, 0)}`);
console.log(`The larger number between 14523 and 14523 is ${larger2(14523, 14523)}`);
