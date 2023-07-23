// Syntax for try/catch/finally
// try{
//     // some code
// }
// catch (error_variable) {
//     // do something with error_variable
// }
// finally {
//     // Cleanup code - always executes
// }

enum numericOps {
    add = 1,
    substruct /* = 2 */,
    multiply /* = 3 */,
    divide /* = 4 */,
};

function operation(a: number, b: number, op: numericOps): number {
    try {
        switch (op) {
            case numericOps.add:
                return a + b;
            case numericOps.substruct:
                return a - b;
            case numericOps.multiply:
                return a * b;
            case numericOps.divide:
                if (b === 0) {
                    throw new Error("division by zero");
                }

                return a / b;
        }

        return a / c;
        throw "unsupported operation";
    }
    catch (ofer) {
        if (ofer instanceof Error)
        {
            console.log(`caught error: ${ofer.message}`);
        }
        else {
            console.log(`caught error: ${ofer}`);
        }
        return NaN;
    }
    finally {
        console.log("Some cleanup");
    }
}

try {
    let result = operation(8, 0, 5);
    console.log(result);

    result = operation(8, 0, numericOps.divide)
    console.log(result);

    result = operation(8, 0, numericOps.add)
    console.log(result);
}
catch (ex) {
    console.log(`Calc failed. caught outside: ${ex}`);
}
