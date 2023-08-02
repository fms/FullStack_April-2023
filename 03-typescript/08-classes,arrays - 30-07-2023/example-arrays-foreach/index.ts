const array = [5, 1 ,3];

// Array.forEach using a callback with one parameter 
array.forEach((item => console.log(`item = ${item}`)));

// Array.forEach using a callback with two parameters
array.forEach(((item, index) => console.log(`array[${index}] = ${item}`)));

// Array.forEach using a callback with three parameters
array.forEach(((item, index, entireArray) => console.log(`array[${index}] = ${item}, entire array: ${entireArray}`)));

// Sample usage: build a decimal number from the array, right to left:
let total = 0;
array.forEach((digit, power) => total += digit * 10**power );
console.log(total);

// Sample usage: build a decimal number from the array, left to right
total = 0;
array.forEach((digit, power, allDigits) => total += digit * 10**(allDigits.length - power -1));
console.log(total);
