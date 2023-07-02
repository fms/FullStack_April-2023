let num: number = 5;
let str: string = 'string has a " inside of it';
str = '"some other string"';
let thisIsUndefined: number;
let isThisEnabled: boolean = false;
let nullValue = null;
let userSelectedColor = 'red';

if (thisIsUndefined) {
    console.log("add 'color: " + userSelectedColor + "' to user CSS");
}

console.log(isThisEnabled + 7);
isThisEnabled = 42;     // Hey, this is supposed to be a boolean!!
console.log(isThisEnabled);

let test = null;
if (/* condition: expression that evaluates to true/false */ test) {
    console.log('true');
}

// False values in Javascript:
// 0, null, undefined, "", false
