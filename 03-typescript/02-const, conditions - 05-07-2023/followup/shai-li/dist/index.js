//- Get weight and height from the user (prompt for each)
// - Calculate BMI (BMI = weight (kg) / [height (m)]^2
// - if BMI is greater then 25 write "Overweight"
// - if BMI is lower then 18.5 write "Underweight"
// - otherwise write "Normal"
var weight = prompt("what is your weight? (kg)");
var height = prompt("what is your height? (cm)");
if (weight && height) {
    var weightToNum = parseInt(weight);
    console.log(weightToNum);
    var heightToNum = parseInt(height);
    console.log(heightToNum);
    if (!Number.isNaN(weightToNum && heightToNum)) {
        var calBMI = weightToNum / Math.pow(heightToNum, 2);
        var BMI = calBMI * 10000;
        console.log(BMI);
        if (BMI >= 25) {
            alert("Overweight");
        }
        else if (BMI <= 18.5) {
            alert("Underweight");
        }
        else {
            alert("Normal");
        }
    }
    else {
        alert("You did not gave me numbers");
    }
}
else {
    alert("you canceled!");
}
