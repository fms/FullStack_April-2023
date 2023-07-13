// 4. Write a function that accepts three arguments: two numbers and an operation (1-4): a, b , op
// - If operation is 1, return the sum of both numbers (a + b)
// - If operation is 2, return the difference of both numbers (a -b)
// - If operation is 3, return the product of both numbers (a * b)
// - If operation is 4, return the quotient of both numbers (a / b)
// - Otherwise, report an error

let firstNumberFromUser = parseInt(prompt("Write first number") || "0");
let secondNumberFromUser = parseInt(prompt("Write second number") || "0");
let operationNumberFromUser = parseInt(prompt("Write a number from 1 to 4") || "0");

function userMath(num1 :number,num2 :number ,op :number) : void {
    let result = 0;
    if (Number.isNaN(num1 || num2 || op)) {
        console.log("Invalid number");
    }
    else if (op <= 0 || op > 4) {
        console.log("Give me number from 1 to 4");
    }
    else if (op == 1) {
        result = num1 + num2;
    }
    else if (op == 2) {
        result = num1 - num2;
    }
    else if (op == 3) {
        result = num1 * num2;
    }
    else if (op == 4) {
        result = num1 / num2;
    }
    console.log(result)

}

userMath(firstNumberFromUser,secondNumberFromUser,operationNumberFromUser);