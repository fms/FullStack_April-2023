var weight = prompt("What is your weight in kg?") || "0";
var height = prompt("What is your height in cm?") || "0";
var bmi = ((parseInt(weight) / Math.pow(parseFloat(height), 2)));
if (bmi) {
    var bmiAsNum = parseInt(bmi);
    console.log(bmiAsNum);
    if (bmiAsNum) {
        if (bmiAsNum > 25) {
            console.log("Overweight");
        }
        else if (bmiAsNum < 18.5) {
            console.log("Underweight");
        }
        else {
            console.log("Normal");
        }
    }
}
