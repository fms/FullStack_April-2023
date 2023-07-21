function maxWithVarAndElse (num1: number, num2: number): number {
    let largerNum:number;       // result
    
    if (num1 > num2) {
        largerNum = num1;       // num1 is larger, set result
    } else {
        largerNum = num2;       // num2 is larger, set result
    }

    return largerNum;           // Return the result
}

function maxWithVar (num1: number, num2: number): number {
    let largerNum = num2;       // Assume num2 is larger

    if (num1 > num2) {
        largerNum = num1;       // No, actually num1 is larger
    }

    return largerNum;           // Return result
}

function maxEarlyReturn (num1: number, num2: number): number {
    if (num1 > num2) {
        return num1;        // Return from function if num1 > num2
    }

    // Continue here if not num1 > num2
    return num2;
}

// Unary, Binary, Trinary
// Trinary syntax: cond ? true : false
function maxTrinary (num1: number, num2: number): number {
    return (
        num1 > num2 ?                   // cond
                        num1 :          // true result
                        num2);          // false result
}
