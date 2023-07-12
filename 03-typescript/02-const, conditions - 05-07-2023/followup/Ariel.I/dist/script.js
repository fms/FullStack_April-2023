var userWeight = prompt("Please sir, what's your weight in Kg? (for example -> 88)") || "0";
var userHeight = prompt("Please sir, what's your Height in Cm? (for example -> 1.84)") || "0";
var BMIClaculate = parseFloat(userWeight) / (parseFloat(userHeight) * parseFloat(userHeight));
if (BMIClaculate > 25) {
    console.log("Well your BMI is " + BMIClaculate + " \uD83D\uDC4C, that mean's your in Overweight! \n drink water is hot today! \uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7");
}
else if (BMIClaculate < 18) {
    console.log("Well your BMI is " + BMIClaculate + " \uD83D\uDC4C, that mean's your in Underweight! \n drink water is hot today! \uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7");
}
else {
    console.log("Well your BMI is " + BMIClaculate + " \uD83D\uDC4C, your healthy! (normal) \n drink water is hot today! \uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7");
}
