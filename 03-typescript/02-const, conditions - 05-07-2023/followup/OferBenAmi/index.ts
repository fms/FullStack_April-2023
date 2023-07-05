let weight = prompt("enter your weight(in kg)") || "0";
let height = prompt("enter your height(in meters)")|| "0";

const bmi = parseInt(weight) / Math.pow(parseFloat(height),2);
console.log(`your bmi is ${bmi}`);