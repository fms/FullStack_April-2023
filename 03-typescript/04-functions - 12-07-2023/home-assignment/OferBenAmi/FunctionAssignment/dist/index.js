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
function biggestUpCount(n) {
    var privNum = parseInt(prompt("Please enter the first number") || "0");
    var biggetCount = 0;
    var currentCount = 1;
    for (var i = 1; i < n; i++) {
        var currNum = parseInt(prompt("Please enter the " + (i + 1) + "th number") || "0");
        if (currNum > privNum) {
            currentCount++;
            console.log("the current count is" + currentCount);
            if (currentCount > biggetCount) {
                biggetCount = currentCount;
                console.log("the biggest count is" + biggetCount);
            }
            else {
                currentCount = 0;
            }
        }
    }
    return biggetCount;
}
// console.log(negateNum(-50));
// console.log(largerNum(10, 20));
// console.log(fahrenheitToCelsius(100));
// console.log(MathSelect(3, 5, 6));
console.log(biggestUpCount(9));
