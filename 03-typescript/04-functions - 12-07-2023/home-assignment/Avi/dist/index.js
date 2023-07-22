// function to negate the number
function NegateNumber(negate) {
    var sum = negate - negate * 2;
    console.log("the negate number is: " + sum);
}
NegateNumber(30);
// function that returns the larger of two numbers
function LargeNumber(first, second) {
    var larger = 0;
    if (first > second) {
        larger = first;
    }
    else {
        larger = second;
    }
    console.log("the larger number is: " + larger);
}
LargeNumber(50, 2);
// Convert a Fahrenheit temperature to a Celsius one.
function ConvertFahrenheit(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit + " degrees is " + celsius + " degrees Celsius");
}
ConvertFahrenheit(86);
// accepts three arguments: two numbers and an operation
function operation(a, b, op) {
    switch (op) {
        case 1:
            console.log(a + b);
            break;
        case 2:
            console.log(a - b);
            break;
        case 3:
            console.log(a * b);
            break;
        case 4:
            console.log(a / b);
            break;
        default:
            console.log("Error");
    }
}
operation(5, 5, 1);
