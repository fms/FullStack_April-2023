let Weight;
let Height;

while (isNaN(Weight) || isNaN(Height)) {
    Weight = prompt("what is your weight?");
    Height = prompt("what is your Height?");

    if (isNaN(Weight) || isNaN(Height)) {
        console.log("Please enter your weight (in kilograms)");
    } else {
        var bmi = (parseFloat(Weight) / parseFloat(Height) ** 2)
        if (bmi > 25) {
            console.log("Overweight");
        }
        else if (bmi < 18.5) {
            console.log("Underweight");
        }
        else {
            console.log("Normal");
        }
    }
}








