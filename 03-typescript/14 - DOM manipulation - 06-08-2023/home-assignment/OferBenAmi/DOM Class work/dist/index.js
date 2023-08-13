var grandparant = document.querySelector(".grandparant");
var parants = document.querySelectorAll(".parant");
var children = document.querySelectorAll(".child");
console.log(children);
var tenthChild = children[10];
if (tenthChild) {
    changeColor(tenthChild, 'black');
    var next = tenthChild.nextElementSibling;
    var previous = tenthChild.previousElementSibling;
    next && changeSize(next, "200%");
    previous && changeSize(previous, "150%");
}
function changeColor(element /*: HTMLElement */, color) {
    if (color === void 0) { color = "gray"; }
    element.style.backgroundColor = color;
}
function changeSize(element /*: HTMLElement */, size) {
    if (size === void 0) { size = "100%"; }
    element.style.width = size;
    element.style.height = size;
}
