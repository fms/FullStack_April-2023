"use strict";

var num = 5;
var str = 'string has a " inside of it';
var thisIsUndefined;
var isThisEnabled = false;
var nullValue = null;
var userSelectedColor = 'red';

if (userSelectedColor) {
  console.log("add 'color: " + userSelectedColor + "' to user CSS");
}

console.log(isThisEnabled + 7);
isThisEnabled = 42; // Hey, this is supposed to be a boolean!!

console.log(isThisEnabled);
var test = true;

if (
/* condition: expression that evaluates to true/false */
test) {
  console.log('true');
} // False values in Javascript:
// 0, null, undefined, "", false