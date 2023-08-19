"use strict";
let mainRoot = document.querySelector(".mainRoot");
let redBox = document.createElement("div");
const defaultColor = redBox.style.backgroundColor;
redBox.classList.add("redBox");
mainRoot === null || mainRoot === void 0 ? void 0 : mainRoot.classList.add("mainRoot");
redBox.addEventListener("mouseenter", (ev) => {
    if (ev.target instanceof HTMLElement) {
        changeColor(ev.target, "blue");
    }
    console.log(ev);
});
redBox.addEventListener("mouseleave", (ev) => {
    if (ev.target instanceof HTMLElement) {
        changeColor(ev.target, defaultColor);
    }
    console.log(ev);
});
function changeColor(element, color) {
    element.style.backgroundColor = color;
}
if (mainRoot) {
    mainRoot.appendChild(redBox);
}
