const overweight = 25;
const underweight = 18.5;

var weight = prompt("Enter your weight:");
var height = prompt("Enter your height:");

var weightnum = parseInt(weight || "");

var heightnum = parseInt(height || "");
var heightnum = heightnum / 100;
var heightnum = heightnum * heightnum;


var bmi = weightnum / heightnum;

// console.log(bmi)

if (bmi > overweight) {

    console.log("Overweight");
}
else if (bmi < underweight) {

    console.log("Underweight");
}
else {
    console.log("normal")
}