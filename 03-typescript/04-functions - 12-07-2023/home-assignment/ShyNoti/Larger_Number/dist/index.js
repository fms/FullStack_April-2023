console.log(largerNumber(55, 5));
function largerNumber(num1, num2) {
    if (num1 > num2) {
        return "Number 1 is larger then number 2: " + num1;
    }
    else if (num1 < num2) {
        return "Number 2 is larger then number 1: " + num2;
    }
    return "The two numbers are equal";
}
