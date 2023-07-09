"use strict";
exports.__esModule = true;
exports.recurtion = void 0;
function recurtion() {
    var numberInput = document.getElementById("numerUser");
    var numberInputValue = numberInput.value;
    var numberHeightInputValue = parseFloat(numberInputValue);
    var result;
    result = numberHeightInputValue / 2;
    alert("result:" + result);
}
exports.recurtion = recurtion;
