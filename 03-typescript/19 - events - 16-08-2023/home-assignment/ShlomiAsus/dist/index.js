var _a;
(_a = document.querySelector("*")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (Event) { print(Event.clientX, Event.clientY); });
var DIV = document.querySelector("div");
function print(x, y) {
    console.log("the x is:" + x);
    console.log("the y is:" + y);
    if (DIV) {
        DIV.style.color = 'white';
        DIV.style.width = '200px';
    }
}
