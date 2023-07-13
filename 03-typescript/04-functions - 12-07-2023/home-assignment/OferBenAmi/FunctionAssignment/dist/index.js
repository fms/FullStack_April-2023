function negateNum(num) {
    return num * -1;
}
function largerNum(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}
function fahrenheitToCelsius(num) {
    return ((num - 32) * 5) / 9;
}
function MathSelect(num1, num2, op) {
    switch (op) {
        case 1: {
            return num1 + num2;
        }
        case 2: {
            return num1 - num2;
        }
        case 3: {
            return num1 * num2;
        }
        case 4: {
            return num1 / num2;
        }
        default: {
            return op + " is not a valid input";
        }
    }
}
console.log(negateNum(-50));
console.log(largerNum(10, 20));
console.log(fahrenheitToCelsius(100));
console.log(MathSelect(3, 5, 6));
