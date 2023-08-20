function resize(element, scale) {
    console.log("resize");
    var newSize = Math.random() * scale + 1;
    element.style.width = newSize + "px";
    element.style.height = newSize + "px";
}
function move(element, scale) {
    console.log("move");
    var newX = Math.random() * scale + 1;
    var newY = Math.random() * scale + 1;
    element.style.position = "relative";
    element.style.left = newX + "px";
    element.style.top = newY + "px";
}
var div = document.querySelector("div");
var resizeTimerId = setInterval(resize, 5000, div, 500);
var moveTimerId = setInterval(move, 1000, div, 500);
// The same as:
// setInterval(() => resize(div, 500), 1000);
// Using in interval to cancel other intervals:
//
// let cancelTimerId = setInterval(() => {
//     console.log("cancel");
//     clearInterval(resizeTimerId);
//     clearInterval(moveTimerId);
//     // We want this to be just one time - let cancel ourselves
//     clearInterval(cancelTimerId);
// }, 20000);
// A better way for a one-time timer: Timeout
var timeoutId = setTimeout(function () {
    console.log("cancel");
    clearInterval(resizeTimerId);
    clearInterval(moveTimerId);
}, 20000);
// Cancel a Timeout - the Timeout callback will not be called.
// clearTimeout(timeoutId);
