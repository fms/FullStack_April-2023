"use strict";
// 2. Write a function that returns the larger of two numbers.
// - 5, 9 ==> 9
// - 10,8 ==> 10
function largerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger then ${num2}`);
    }
    else if (num2 > num1) {
        console.log(`${num2} is larger then ${num1}`);
    }
    else {
        console.log(`${num1} and ${num2} are even`);
    }
}
console.log(largerNumber(5, 9));
console.log(largerNumber(10, 8));
console.log(largerNumber(13, 13));
