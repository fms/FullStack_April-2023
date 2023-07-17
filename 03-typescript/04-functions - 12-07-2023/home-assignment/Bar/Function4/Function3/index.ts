function operationOnNumber(num: number, num2: number, op: number) {
        let result = 0
        if (op <= 4 && op >= 1) {
                if (op === 1) {
                        result = num + num2
                }
                else if (op === 2) {
                        result = num - num2
                }
                else if (op === 3) {
                        result = num * num2
                }
                else if (op === 4) {
                        result = num / num2
                }
                console.log(result);
        }
        else {
                console.log("Invalid number");

        }
}

// operationOnNumber(2, 2, 1)
// operationOnNumber(2, 2, 2)
// operationOnNumber(2, 2, 3)
// operationOnNumber(2, 2, 4)

enum operator {
        add = 1,
        substruct = 2,
        multiply = 3,
        divide = 4
}

function opreationWithSwitch(num: number, num2: number, op: number) {
        let result = 0
        switch (op) {
                case operator.add:
                        result = num + num2
                        break
                case operator.substruct:
                        result = num - num2
                        break
                case operator.multiply:
                        result = num * num2
                        break
                case operator.divide:
                        result = num / num2

                default: NaN
        }
        return result
}

opreationWithSwitch(2, 2, operator.add)
opreationWithSwitch(2, 2, operator.substruct)
opreationWithSwitch(2, 2, operator.multiply)
opreationWithSwitch(2, 2, operator.divide)