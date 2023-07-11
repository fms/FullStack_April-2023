"use strict";
let final_Result = document.getElementById("result1");
const finalResultValue = final_Result.innerHTML;
function question1() {
    var index = 20;
    for (; index <= 99 && index > 0; index--) {
        if (index != 1) {
            console.log(index + ' bottles of beer on the wall ' + index, "bottles of beer Take one down and pass it around, now theres ", +(index - 1), " more bottles of beer on the wall");
        }
        else {
            console.log(index + ' bottle of beer on the wall ' + index, "bottle of beer. Take one down and pass it around, now theres  more bottles of beer on the wall!");
        }
    }
}
function question2() {
    let result = 0;
    var userNumber = prompt("please enter number:") || 0;
    var loopIndex = 0;
    for (; loopIndex != userNumber; loopIndex++) {
        result = result + (loopIndex + 1);
        console.log(`result is: ${result} = ${result}+ ${loopIndex + 1}`);
    }
    final_Result.innerText = "result is: " + `${result}= ${result}+ ${loopIndex + 1}`;
}
function question3() {
    var userInput = prompt("please enter number:") || 0;
    let outerLoopIndex = 0, result = 0, innerLoopIndex = 0;
    var userNumber = parseFloat(userInput);
    while (outerLoopIndex < userNumber) {
        for (; innerLoopIndex < userNumber; innerLoopIndex++) {
            result = result + innerLoopIndex;
            console.log('result is:' + `${result}`, `=`, `${result}, '+' `, `${outerLoopIndex}`);
            outerLoopIndex++;
            final_Result.innerText = 'result is:' + `${result}`, `=`, `${result}, '+' `, `${outerLoopIndex}`;
        }
    }
}
