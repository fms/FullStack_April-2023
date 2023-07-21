"use strict";
// 3. Convert a Fahrenheit temperature to a Celsius one.
// - The formula is: C = (F - 32) * 5 / 9
function convertFahrenheitToCelsius(fahrenheit) {
    const cel = ((fahrenheit - 32) * 5) / 9;
    return cel;
}
console.log(convertFahrenheitToCelsius(98.6));
console.log(convertFahrenheitToCelsius(89.6));
