var height: string = prompt("please insert your height in numbers only:") || "0";
var weight: string = prompt("please insert your weight in numbers only:") || "0";

var result: number | null = ((parseInt(weight) / parseInt(height)) ** 2) * 100;

if (result >= 25) {
    console.log("you are fat,your BMI is:", + result);
}
else
    console.log("you are lean,your BMI is:", + result);