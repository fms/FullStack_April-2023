console.log(calculator(12, 5, 15));
function calculator(num1, operator, num2) {
    switch (operator) {
        case 1:
            return num1 + " + " + num2 + " = " + (num1 + num2);
            break;
        case 2:
            return num1 + " - " + num2 + " = " + (num1 - num2);
            break;
        case 3:
            return num1 + " * " + num2 + " = " + (num1 * num2);
            break;
        case 4:
            return num1 + " / " + num2 + " = " + (num1 / num2);
            break;
        default:
            return "Error";
    }
}
