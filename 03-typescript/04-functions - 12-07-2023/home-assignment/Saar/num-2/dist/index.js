"use strict";
// 2. Write a function that returns the larger of two numbers.
// - 5, 9 ==> 9
// - 10,8 ==> 10
let firstNumFromUser = parseInt(prompt("Write a number") || "0");
let secondNumFromUser = parseInt(prompt("Write a number") || "0");
function largerNumber(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}
console.log(largerNumber(firstNumFromUser, secondNumFromUser));
