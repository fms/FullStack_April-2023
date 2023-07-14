"use strict";
function fahrenheitConverter(fahrenheit) {
    let celcius = Math.round(fahrenheit - 32) * (5 / 9);
    console.log(celcius);
}
fahrenheitConverter(50);
