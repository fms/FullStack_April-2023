"use strict";
let step = 100;
let secondStep = 200;
let stepFaster = 400;
let direction = 1;
let secondDirection = 1;
function moveX(element) {
    let maxWidth = window.innerWidth;
    let left = element.offsetLeft;
    let right = element.offsetWidth + left;
    if ((direction === 1 && step + right > maxWidth + step) ||
        (direction === -1 && step + left < 0 + step)) {
        direction = -direction;
    }
    element.style.position = "relative";
    element.style.left = `${left + step * direction}px`;
}
function moveY(element) {
    let maxHeight = window.innerHeight;
    let top = element.offsetTop;
    let bottom = element.offsetHeight + top;
    if ((secondDirection === 1 && secondStep + bottom > maxHeight + secondStep) ||
        (secondDirection === -1 && secondStep + top < 0 + secondStep)) {
        secondDirection = -secondDirection;
    }
    element.style.position = "relative";
    element.style.top = `${top + secondStep * secondDirection}px`;
}
function toggleSpeed(element) {
    if (step === 100) {
        step += stepFaster;
    }
    else {
        step = 100;
    }
    clearInterval(moveTimerId);
    moveTimerId = setInterval(moveX, 100, element);
}
let firstBox = document.querySelector(".first-box");
let secondBox = document.querySelector(".second-box");
let moveTimerId = setInterval(moveX, step, firstBox);
let fasterOnClick = firstBox.addEventListener("click", () => toggleSpeed(firstBox));
let secondMoveTimerId = setInterval(moveY, secondStep, secondBox);
