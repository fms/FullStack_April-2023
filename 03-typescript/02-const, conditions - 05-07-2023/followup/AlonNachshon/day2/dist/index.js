"use strict";
let hight = prompt("Whats your hight in Meter? ");
let weight = prompt("whats your weight in kg? ");
if (weight && hight) {
    hight = parseFloat(hight);
    weight = parseInt(weight);
    if (!Number.isNaN(hight) && !Number.isNaN(weight)) {
        let bmi = weight / Math.pow(hight, 2);
        bmi = bmi.toFixed(2);
        console.log("Your BMI is: " + bmi);
    }
    else {
        console.log("data inValid");
    }
}
else {
    console.log("No Data");
}
