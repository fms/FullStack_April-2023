"use strict";
function changeColor(element, color = "brown") {
    element.style.backgroundColor = color;
}
function grandparentChangeColor(color = "brown") {
    let gp = document.getElementById("grandparent-id");
    if (gp) {
        changeColor(gp, color);
    }
}
function changeHeight(element, height = 50) {
    element.style.height = `${height}px`;
}
function childrenChangeHeight(height = 50) {
    let children = document.getElementsByClassName("child");
    let childArray = [...children];
    childArray.forEach(child => changeHeight(child, height));
}
