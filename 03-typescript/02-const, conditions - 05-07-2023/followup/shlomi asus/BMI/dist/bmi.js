var height = prompt("please insert your height in numbers only:") || "0";
var weight = prompt("please insert your weight in numbers only:") || "0";
var result = (Math.pow((parseInt(weight) / parseInt(height)), 2)) * 100;
if (result >= 25) {
    window.alert("you are fat,your BMI is:" + result);
}
else {
    window.alert("you are lean,your BMI is:" + result);
}
