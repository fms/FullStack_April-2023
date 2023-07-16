function negate (num: number): number {
    return -num
}

console.log(negate(-100))
console.log(negate(5))
console.log(negate(-(-50)))
console.log(negate(50))
console.log(negate(-40332))
function whosLarger (num1: number, num2: number): number {

    let largerNum = ""
    if (num1 == num2) {
        console.log("Numbers are even.");
    } else if (num1 > num2) {
        largerNum = num1;
    } else {
        largerNum = num2
    }
    return largerNum
}

console.log("The larger number is " + whosLarger(2, 5))
console.log("The larger number is " + whosLarger(10, 7))
console.log("The larger number is " + whosLarger(15, 20))
console.log("The larger number is " + whosLarger(2443241, 2443241))
console.log("The larger number is " + whosLarger(0, 1))

function farToCel (num: number): number {
    return (num - 32) * 5 / 9
}

console.log("150 Fahrenheit in celcius is around: " + Math.round(farToCel(150)))
console.log("75 Fahrenheit in celcius is around: " + Math.round(farToCel(75)))
console.log("0 Fahrenheit in celcius is around: " + Math.round(farToCel(0)))
console.log("20 Fahrenheit in celcius is around: " + Math.round(farToCel(20)))
console.log("50 Fahrenheit in celcius is around: " + Math.round(farToCel(50)))


function calculator(a: number, b: number, op: number): number | string {
    if (op == 1) {
        return a + b
    } else if (op == 2) {
        return a - b
    } else if(op == 3) {
        return a * b
    } else if (op == 4) {
        return a / b
    } else {
        return "There was an error."
    }
}

console.log(calculator(5, 4, 1))
console.log(calculator(10, 4, 2))
console.log(calculator(5, 3, 3))
console.log(calculator(20, 4, 4))
console.log(calculator(5, 4, 5))