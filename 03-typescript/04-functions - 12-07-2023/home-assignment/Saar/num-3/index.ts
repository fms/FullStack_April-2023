// 3. Convert a Fahrenheit temperature to a Celsius one.
// - The formula is: C = (F - 32) * 5 / 9
// <hr>

let numFromUser = parseInt(prompt("Write a number") || "0");

function Fahrenheit(num :number) :number {
    return (num -32) * 5 / 9;
}


console.log(Fahrenheit(numFromUser));