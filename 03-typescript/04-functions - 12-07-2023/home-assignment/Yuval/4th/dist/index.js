"use strict";
function operation(a, b, op) {
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
console.log(`Operation 1 on 5 and 6: ${operation(5, 6, 1)}`);
console.log(`Operation 2 on 23 and 15: ${operation(23, 15, 2)}`);
console.log(`Operation 3 on 8 and 8: ${operation(8, 8, 3)}`);
console.log(`Operation 4 on 98 and 7: ${operation(98, 7, 4)}`);
console.log(`Operation 5 on 2 and 0: ${operation(2, 0, 5)}`);
