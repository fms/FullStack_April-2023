var array = [5, 1, 3];
// Array.forEach using a callback with one parameter 
array.forEach((function (item) { return console.log("item = " + item); }));
// Array.forEach using a callback with two parameters
array.forEach((function (item, index) { return console.log("array[" + index + "] = " + item); }));
// Array.forEach using a callback with three parameters
array.forEach((function (item, index, entireArray) { return console.log("array[" + index + "] = " + item + ", entire array: " + entireArray); }));
// Sample usage: build a decimal number from the array, right to left:
var total = 0;
array.forEach(function (digit, power) { return total += digit * Math.pow(10, power); });
console.log(total);
// Sample usage: build a decimal number from the array, left to right
total = 0;
array.forEach(function (digit, power, allDigits) { return total += digit * Math.pow(10, (allDigits.length - power - 1)); });
console.log(total);
