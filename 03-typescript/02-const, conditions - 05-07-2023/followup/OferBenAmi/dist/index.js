var weight = prompt("enter your weight(in kg)") || "0";
var height = prompt("enter your height(in meters)") || "0";
var bmi = parseInt(weight) / Math.pow(parseFloat(height), 2);
console.log("your bmi is " + bmi);
