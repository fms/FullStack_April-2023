"use strict";
var testString1 = "12";
console.log(parseInt(testString1));
console.log(Number(testString1));
testString1 = "12 345";
console.log(parseInt(testString1));
console.log(Number(testString1));
testString1 = "12px";
console.log(parseInt(testString1));
console.log(Number(testString1));
// parseInt(stringValue [, numericBase])
// default for numericBase is 10
testString1 = "101"; // 1 + 4
console.log(parseInt(testString1, 2));
console.log(Number(testString1));
testString1 = "25e1"; // 1 + 4
console.log(parseInt(testString1));
console.log(Number(testString1));
// 134 ==> 4 * 10^0 (1) + 3 * 10^1 (10) + 1 * 10^2 (100)
// 101 basis 2 ==> 1 * 2^0 (1) + 0 * 2 (2^1) + 1 * 4 (2^2) ==> 5
// ASCII table: https://www.ascii-code.com/
