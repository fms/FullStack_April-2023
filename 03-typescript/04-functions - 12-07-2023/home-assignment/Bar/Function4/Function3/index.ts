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

operationOnNumber(2, 2, 1)
operationOnNumber(2, 2, 2)
operationOnNumber(2, 2, 3)
operationOnNumber(2, 2, 4)