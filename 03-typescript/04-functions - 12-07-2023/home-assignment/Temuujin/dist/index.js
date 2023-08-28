function negate(num) {
    return -num;
}
console.log(negate(-100));
console.log(negate(5));
function largerNum(num1, num2) {
    if (num1 < num2) {
        return num2;
    }
    else if (num1 > num2) {
        return num1;
    }
    else if (num1 == num2) {
        return 0;
    }
    else {
        return -1;
    }
}
console.log(largerNum(5, 9));
console.log(largerNum(10, 8));
function fahToCel(num) {
    return ((num - 32) * (5 / 9));
}
console.log(fahToCel(100));
function fourt(num1, num2, op) {
    if (op == 1) {
        return num1 + num2;
    }
    else if (op == 2) {
        return num1 - num2;
    }
    else if (op == 3) {
        return num1 * num2;
    }
    else if (op == 4) {
        return num1 / num2;
    }
    else {
        return "There is an error!";
    }
}
console.log(fourt(1, 2, 4 - 2));
