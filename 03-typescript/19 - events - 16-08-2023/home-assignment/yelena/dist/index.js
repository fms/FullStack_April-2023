"use strict";
let mainBox = document.querySelector(".mainbox");
let pinkBox = document.createElement("div");
const defaultBox = pinkBox.style.backgroundColor;
pinkBox.classList.add("pinkBox");
mainBox === null || mainBox === void 0 ? void 0 : mainBox.classList.add("mainBox");
pinkBox.addEventListener("mouseenter", (ev) => {
    if (ev.target instanceof HTMLElement) {
        changeColor(ev.target, "white");
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
if (mainBox) {
    mainBox.appendChild(pinkBox);
}
