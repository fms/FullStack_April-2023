var userWeight = prompt("What is your weight in KG?: ");
var userHeight = prompt("What is your height in meters?: ")
var BMI = userWeight / userHeight^2

if (BMI > 25) {
    console.log("Overweight")
} else if (BMI < 18.5) {
    console.log("Underweight")
} else {
    console.log("Normal BMI")
}
