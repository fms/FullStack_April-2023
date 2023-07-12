const userWeight: string | null =
  prompt(`Please sir, what's your weight in Kg? (for example -> 88)`) || "0";
const userHeight: string | null =
  prompt(`Please sir, what's your Height in Cm? (for example -> 1.84)`) || "0";

const BMIClaculate =
  parseFloat(userWeight) / (parseFloat(userHeight) * parseFloat(userHeight));

if (BMIClaculate > 25) {
  console.log(
    `Well your BMI is ${BMIClaculate} 👌, that mean's your in Overweight! \n drink water is hot today! 💧💧💧`
  );
} else if (BMIClaculate < 18) {
  console.log(
    `Well your BMI is ${BMIClaculate} 👌, that mean's your in Underweight! \n drink water is hot today! 💧💧💧`
  );
} else {
  console.log(
    `Well your BMI is ${BMIClaculate} 👌, your healthy! (normal) \n drink water is hot today! 💧💧💧`
  );
}
