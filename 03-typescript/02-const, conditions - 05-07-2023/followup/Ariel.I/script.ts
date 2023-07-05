const userWeight: any = prompt(`Please sir, what's your weight in Kg?`);
const userHeight: any = prompt(`Please sir, what's your Height in Cm?`);

const BMIClaculate = userWeight / (userHeight * userHeight);

console.log(
  `Well your BMI is ${BMIClaculate} 👌, drink water is hot today! 💧💧💧`
);
