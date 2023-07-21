function operationWithEarlyReturn (a: number, b: number, op: number): number // | undefined
{
    if (op < 1 || op > 4)
    {
        return NaN;
    }

    if (op === 1)
    {
        return a + b;
    }
    else if (op === 2)
    {
        return a - b;
    }
    else if (op === 3)
    {
        return a * b;
    }

    return a / b;
}

let result:number = operationWithEarlyReturn(5, 5, 5);
if (!Number.isNaN(result)) {
    console.log(`The result is ${result}`);
}
else {
    console.log("Error");
}

function operationWithReturn(a: number, b: number, op: number): number {
    if (op == 1) {
        return a + b
    } else if (op == 2) {
        return a - b
    } else if(op == 3) {
        return a * b
    } else if (op == 4) {
        return a / b
    } else {
        return NaN;
    }
}

function operationWithSwitch(a: number, b: number, op: number | string): number {
    let result:number;
    switch (op)
    {
        case "+":
        case 1:               // if (op === 1 || op === 0 || op === "add")
        case "add":
            result = a + b;
            break;
        case 2:               // if (op ==== 2 || op === "-")
        case "-":
            result = a - b;
            break;
        case 3:
        case "*":
            result = a * b;   // if (op === 3)
            break;
        case 4:
        case "/":
            result = a / b;   // if (op === 4)
            break;
        default:              // Everything else
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
if (inputNum % 2 === 0)
{
    console.log("even");
}
else
{
    console.log("odd");
}

// These are the operations supported by our calculator app
enum numericOps {
    add = 1,
    substruct /* = 2 */,
    multiply /* = 3 */,
    divide /* = 4 */,
};

enum flags {
    option1 = 1,        // 001
    option2 = 2,        // 010
    option3 = 4,        // 100
};

enum flagsWithShift {   // << operator moves bits to left n places 
    option1 = 1 << 0,
    option2 = 1 << 1,
    option3 = 1 << 2,
}

console.log(flags.option1  | flags.option3); // 5

function operationWithSwitchAndEnum(a: number, b: number, op: numericOps): number {
    let result:number;

    switch (op)
    {
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

function calcOp (a: number, b: number, op: numericOps): number {
    return operationEarlyReturnWithSwitchAndEnum(a, b, op);
}

function operationEarlyReturnWithSwitchAndEnum(a: number, b: number, op: numericOps): number {
    switch (op)
    {
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