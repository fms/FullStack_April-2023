"use strict";
function operationWithEarlyReturn(a, b, op) {
    if (op < 1 || op > 4) {
        return NaN;
    }
    if (op === 1) {
        return a + b;
    }
    else if (op === 2) {
        return a - b;
    }
    else if (op === 3) {
        return a * b;
    }
    return a / b;
}
let result = operationWithEarlyReturn(5, 5, 5);
if (!Number.isNaN(result)) {
    console.log(`The result is ${result}`);
}
else {
    console.log("Error");
}
function operationWithReturn(a, b, op) {
    if (op == 1) {
        return a + b;
    }
    else if (op == 2) {
        return a - b;
    }
    else if (op == 3) {
        return a * b;
    }
    else if (op == 4) {
        return a / b;
    }
    else {
        return NaN;
    }
}
function operationWithSwitch(a, b, op) {
    let result;
    switch (op) {
        case "+":
        case 1: // if (op === 1 || op === 0 || op === "add")
        case "add":
            result = a + b;
            break;
        case 2: // if (op ==== 2 || op === "-")
        case "-":
            result = a - b;
            break;
        case 3:
        case "*":
            result = a * b; // if (op === 3)
            break;
        case 4:
        case "/":
            result = a / b; // if (op === 4)
            break;
        default: // Everything else
            result = NaN;
            break;
    }
    return result;
}
console.log(`Operation 1 on 5 and 6: ${operationWithSwitch(5, 6, 1)}`);
console.log(`Operation 1 on 5 and 6: ${operationWithSwitch(5, 6, "+")}`);
console.log(`Operation 1 on 5 and 6: ${operationWithSwitch(5, 6, "add")}`);
// console.log(`Operation 2 on 23 and 15: ${operation(23, 15, 2)}`);
// console.log(`Operation 3 on 8 and 8: ${operation(8, 8, 3)}`);
// console.log(`Operation 4 on 98 and 7: ${operation(98, 7, 4)}`);
// console.log(`Operation 5 on 2 and 0: ${operation(2, 0, 5)}`);
let inputNum = 5;
switch (inputNum % 2) {
    case 0:
        console.log("even");
        break;
    default:
        console.log("odd");
}
// Using an if
if (inputNum % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
// These are the operations supported by our calculator app
var numericOps;
(function (numericOps) {
    numericOps[numericOps["add"] = 1] = "add";
    numericOps[numericOps["substruct"] = 2] = "substruct"; /* = 2 */
    numericOps[numericOps["multiply"] = 3] = "multiply"; /* = 3 */
    numericOps[numericOps["divide"] = 4] = "divide"; /* = 4 */
})(numericOps || (numericOps = {}));
;
var flags;
(function (flags) {
    flags[flags["option1"] = 1] = "option1";
    flags[flags["option2"] = 2] = "option2";
    flags[flags["option3"] = 4] = "option3";
})(flags || (flags = {}));
;
var flagsWithShift;
(function (flagsWithShift) {
    flagsWithShift[flagsWithShift["option1"] = 1] = "option1";
    flagsWithShift[flagsWithShift["option2"] = 2] = "option2";
    flagsWithShift[flagsWithShift["option3"] = 4] = "option3";
})(flagsWithShift || (flagsWithShift = {}));
console.log(flags.option1 | flags.option3); // 5
function operationWithSwitchAndEnum(a, b, op) {
    let result;
    switch (op) {
        case numericOps.add:
            result = a + b;
            break;
        case numericOps.substruct:
            result = a - b;
            break;
        case numericOps.multiply:
            result = a * b;
            break;
        case numericOps.divide:
            result = a / b;
            break;
        default:
            result = NaN;
            break;
    }
    return result;
}
function calcOp(a, b, op) {
    return operationEarlyReturnWithSwitchAndEnum(a, b, op);
}
function operationEarlyReturnWithSwitchAndEnum(a, b, op) {
    switch (op) {
        case numericOps.add:
            return a + b;
        case numericOps.substruct:
            return a - b;
        case numericOps.multiply:
            return a * b;
        case numericOps.divide:
            return a / b;
    }
    return NaN;
}
console.log(`Operation 1 on 5 and 6: ${operationWithSwitchAndEnum(5, 6, numericOps.add)}`);
console.log(`Operation 1 on 5 and 6: ${operationWithSwitchAndEnum(5, 6, 5)}`);
console.log(calcOp(calcOp(1, 2, numericOps.add), calcOp(9, 57, numericOps.multiply), numericOps.substruct));
