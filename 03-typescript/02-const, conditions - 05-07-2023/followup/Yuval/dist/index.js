var height = prompt("What is your height in meters?") || "1";
var weight = prompt("What is your weight in kilos?") || "1";
var overweight = 25;
var underweight = 18.5;
var heightAsNum = parseFloat(height);
var weightAsNum = parseFloat(weight);
var bmi = (weightAsNum / heightAsNum / heightAsNum);
if (bmi >= overweight) {
    console.log("You are overweight");
}
else if (bmi >= underweight) {
    console.log("You are A-Okay!");
}
else {
    console.log("You are underweight");
}
