//- Get weight and height from the user (prompt for each)
// - Calculate BMI (BMI = weight (kg) / [height (m)]^2
// - if BMI is greater then 25 write "Overweight"
// - if BMI is lower then 18.5 write "Underweight"
// - otherwise write "Normal"

const weight: string | null = prompt("what is your weight? (kg)");
const height: string | null = prompt("what is your height? (cm)");

if (weight && height) {
  let weightToNum = parseInt(weight);
  console.log(weightToNum);
  let heightToNum = parseInt(height);
  console.log(heightToNum);
  if (!Number.isNaN(weightToNum && heightToNum)) {
    let calBMI = weightToNum / Math.pow(heightToNum, 2);
    const BMI = calBMI * 10000;
    console.log(BMI);
    if (BMI >= 25) {
      alert("You are overweight");
    } else if (BMI <= 18.5) {
      alert("You are underweight");
    } else {
      alert("Your BMI is normal");
    }
  } else {
    alert("You did not gave me numbers");
  }
} else {
  alert("You canceled!");
}
