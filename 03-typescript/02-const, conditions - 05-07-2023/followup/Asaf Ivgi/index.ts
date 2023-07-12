var userWeight: string|null = prompt("What is your weight in KG?: ") || "0"
var userHeight = prompt("What is your height in meters?: ") || "0"
var height = parseInt(userHeight)
var weight = parseInt(userWeight)
var BMI = userWeight / userHeight^2

if (BMI > 25) {
    console.log("Overweight")
} else if (BMI < 18.5) {
    console.log("Underweight")
} else {
    console.log("Normal BMI")
}
