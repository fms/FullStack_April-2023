// const userWeight: string | null =
//   prompt(`Please sir, what's your weight in Kg? (for example -> 88)`) || "0";
// const userHeight: string | null =
//   prompt(`Please sir, what's your Height in Cm? (for example -> 1.84)`) || "0";
// const BMIClaculate =
//   parseFloat(userWeight) / (parseFloat(userHeight) * parseFloat(userHeight));
// if (BMIClaculate > 25) {
//   console.log(
//     `Well your BMI is ${BMIClaculate} 👌, that mean's your in Overweight! \n drink water is hot today! 💧💧💧`
//   );
// } else if (BMIClaculate < 18) {
//   console.log(
//     `Well your BMI is ${BMIClaculate} 👌, that mean's your in Underweight! \n drink water is hot today! 💧💧💧`
//   );
// } else {
//   console.log(
//     `Well your BMI is ${BMIClaculate} 👌, your healthy! (normal) \n drink water is hot today! 💧💧💧`
//   );
// }
// Attempt #2
// - Get weight and height from the user (prompt for each)
// - Calculate BMI (BMI = weight (kg) / [height (m)]^2
// - if BMI is greater then 25 write "Overweight"
// - if BMI is lower then 18.5 write "Underweight"
// - otherwise write "Normal"
var userWeightNumber = prompt("What is your weight on Kg?") || "0";
var userHeightNumber = prompt("What is your height on Cm?") || "0";
var convertWeight = parseFloat(userWeightNumber);
var convertHeight = parseFloat(userHeightNumber);
var calcBmi = convertWeight / (convertHeight ^ 2);
if (calcBmi > 25)
    console.log("Overweight " + calcBmi);
else if (calcBmi < 18)
    console.log("Underweight " + calcBmi);
else
    console.log("Normal " + calcBmi);
