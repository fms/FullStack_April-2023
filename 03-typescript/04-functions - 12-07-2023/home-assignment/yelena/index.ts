/* Write a function to negate the number passed to it:
5 ==> -5
-100 ==> 100*/


let numId = parseInt(prompt("please pick a number") || "0")

function  negate(num :number) :number
{
    return (-num === -0 ? 0 : -num );
}
console.log(negate(numId));






/*Write a function that returns the larger of two numbers.
5, 9 ==> 9
10,8 ==> 10*/

let first = parseInt(prompt("please pick a number") || "0");
let second = parseInt(prompt("please pick a second number") || "0");

function largerNumber(num1 :number , num2 :number) :number
{
    return num1 >= num2 ? num1 : num2;
}
console.log(largerNumber(first,second));






/*Convert a Fahrenheit temperature to a Celsius one.
The formula is: C = (F - 32) * 5 / 9*/

let numTemperature = parseInt(prompt("please pick a number") || "0");

function temperature(num :number) :number 
{
    return (num -32) * 5 / 9;
}
console.log(temperature(numTemperature));






/*Write a function that accepts three arguments: two numbers and an operation (1-4): a, b , op
If operation is 1, return the sum of both numbers (a + b)
If operation is 2, return the difference of both numbers (a -b)
If operation is 3, return the product of both numbers (a * b)
If operation is 4, return the quotient of both numbers (a / b)
Otherwise, report an error */



let firstNumArgument = parseInt(prompt("please pick a number") || "0");
let secondNumArgument = parseInt(prompt("please pick a number") || "0");
let operation = parseInt(prompt("please pick a number from 1 to 4") || "0");

function userMath(num1 :number,num2 :number ,op :number) :number {
    let result :number
switch(op) {
    case 1:
        result = num1 + num2;
        break;
    case 2:
        result = num1 - num2;
        break;
    case 3: 
        result = num1 * num2;
        break;
    case 4: 
        result = num1 / num2;
        break;
    default: 
        result = NaN;
        break;
}
return result

}
console.log(userMath(firstNumArgument,secondNumArgument,operation));