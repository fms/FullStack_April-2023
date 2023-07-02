let num = 5;
let str = 'string has a " inside of it';
let thisIsUndefined;
let isThisEnabled = false;
let nullValue = null;
let userSelectedColor = 'red';

if (userSelectedColor)
{
    console.log("add 'color: " + userSelectedColor + "' to user CSS");
}

console.log(isThisEnabled + 7);
isThisEnabled = 42;     // Hey, this is supposed to be a boolean!!
console.log(isThisEnabled);

let test = true;
if (/* condition: expression that evaluates to true/false */ test)
{
    console.log('true');
}

// False values in Javascript:
// 0, null, undefined, "", false