"use strict";
var level = 0;
separator();
console.log(indentText("indentText() is a pure function"));
logIndented("so is seperator()", 2);
separator();
logIndented("Impure enterCall() and exitCall() depend on global variable level");
logIndented("Impure getRandomToIndex() depends on changing environment Math.random() call", 1);
function separator() {
    console.log("<---------------------->");
}
function indentText(text, level = 0) {
    let indented = "";
    for (let thisLevel = 1; thisLevel <= level; thisLevel++) {
        indented += "   ";
    }
    indented += text;
    return indented;
}
let userName = 'Shmuel';
function greet(text) {
    return `${text} ${userName}`;
}
console.log(greet("Impure - the name is outside the function: "));
userName = "Ofer";
console.log(greet("Impure - the name is outside the function: "));
getName1("Shlomi"); /// ==> Shlomi
getName1("Yuval"); /// ==> Yuval
console.log(indentText("Always the same output - we're pure", 10));
console.log(indentText("Always the same output - we're pure", 10));
console.log(indentText("Always the same output - we're pure", 10));
console.log(indentText("Also, same output, purity FTW!", 4));
console.log(indentText("Also, same output, purity FTW!", 4));
function getName1(userName) {
    return userName;
}
function logIndented(text, level = 0) {
    console.log("==>" + indentText(text, level));
}
function getRandomToIndex(randomRange) {
    return Math.floor(Math.random() * (randomRange + 1));
}
console.log(getRandomToIndex(1000));
console.log(getRandomToIndex(1000));
function enterCall(functionName) {
    console.log('==> ' + indentText(functionName, level));
    level++;
}
function exitCall() {
    console.log(indentText('<==', level));
    level--;
}
