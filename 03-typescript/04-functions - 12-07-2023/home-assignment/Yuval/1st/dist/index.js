"use strict";
function negative(num) {
    let negativeNum;
    return (negativeNum = num - num - num);
}
console.log(`Original number: 5, negated number: ${negative(5)}`);
console.log(`Original number: -21, negated number: ${negative(-21)}`);
