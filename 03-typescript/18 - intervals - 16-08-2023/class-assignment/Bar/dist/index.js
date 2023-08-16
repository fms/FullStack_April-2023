"use strict";
let step = 500;
function move(element) {
    let left = element.offsetLeft;
    let right = element.offsetLeft + left;
    if ((step > 0 && step + right > window.innerWidth) || (step < 0 && step + left < 0)) {
        step = -step;
    }
    element.style.position = "relative";
    element.style.left = `${left + step}px`;
}
let div = document.querySelector("div");
let moveTimerId = setInterval(move, 1000, div, 500);
