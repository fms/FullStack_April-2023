"use strict";
let number5 = 5;
let number100 = -100;
let number9 = 9;
let number8 = 8;
let number10 = 10;
var fer = 42;
let numA;
let numB;
let opp;
function convert(fer) {
    Math.round(fer - 32) * (5 / 9);
    console.log(`the tempurte 42 Fahrenheit  in Celsius ' is: ${Math.round((fer - 32) * (5 / 9))}:`);
    //math.round for round number
}
function opposite(num1, num2) {
    console.log(`the number: ${num1} turning to: ${num1 * -1} `);
    console.log(`the number ${num2} turning to: ${num2 * -1} `);
}
function larger(num1, num2, num3, num4) {
    if (num2 > num1) {
        console.log(`the number:${num2} is bigger then the number: ${num1} `);
    }
    else {
        console.log(`the number:${num1} is bigger then the number: ${num2} `);
    }
    if (num4 > num3) {
        console.log(`the number:${num3} is bigger then the number: ${num4} `);
    }
    else {
        console.log(`the number:${num4} is bigger then the number: ${num3} `);
    }
}
function LastFunction(num1, num2, opp) {
    if (Number.isNaN(opp) || opp > 4 || opp < 1) {
        console.log(`not a valid opp nmber`);
        callingLastFunction();
    }
    else if (opp == 1) {
        console.log(`opperation Sum: ${num1 + num2} `);
    }
    else if (opp == 2) {
        console.log(`opperation Difference: ${num1 - num2} `);
    }
    else if (opp == 3) {
        console.log(`opperation product: ${num1 * num2} `);
    }
    else if (opp == 4) {
        console.log(`opperation quotient : ${num1 / num2} `);
    }
}
function callingconvert() { convert(fer); }
function callingOpposite() { opposite(number5, number100); }
function callingLarger() { larger(number5, number9, number8, number10); }
function callingLastFunction() {
    var temp1 = prompt("insert number 1:") || "0";
    var temp2 = prompt("insert number 1:") || "0";
    var tempOpp = prompt("insert number 1:") || "0";
    numA = parseFloat(temp1);
    numB = parseFloat(temp2);
    opp = parseFloat(tempOpp);
    LastFunction(numA, numB, opp);
}
