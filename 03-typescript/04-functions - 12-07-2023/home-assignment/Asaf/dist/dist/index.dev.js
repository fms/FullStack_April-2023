"use strict";

function negate(num) {
  return -num;
}

console.log(negate(-100));
console.log(negate(5));
console.log(negate(- -50));
console.log(negate(50));
console.log(negate(-40332));

function whosLarger(num1, num2) {
  var largerNum = "";

  if (num1 == num2) {
    console.log("Numbers are even.");
  } else if (num1 > num2) {
    largerNum = num1;
  } else {
    largerNum = num2;
  }

  return largerNum;
}

console.log(whosLarger(2, 5));
console.log(whosLarger(10, 7));
console.log(whosLarger(15, 20));
console.log(whosLarger(2443241, 2443241));
console.log(whosLarger(0, 1));