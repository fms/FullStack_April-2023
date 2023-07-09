"use strict";
let hight = Number(prompt("Whats your hight in Meter(Example: 1.82) ? "));
let weight = Number(prompt("whats your weight in kg? "));
/*
    If the user input a string than the values of hight & weight will be NaN and the if will be false.
    If the user will press the cancel than the values that number will recieve will be null, and if will be false.
    If the user wouldn't input and just press ok , this will evaluate to "" empyu string , and if will be false.
*/
if (weight && hight) {
    let bmi = weight / Math.pow(hight, 2);
    bmi = bmi.toFixed(2);
    console.log("Your BMI is: " + bmi);
}
else {
    console.log("No Data");
}
