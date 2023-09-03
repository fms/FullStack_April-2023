"use strict";
let input = document.querySelector("input");
function handleClick(event) {
    let target = event.target;
    if (target) {
        let divElement = document.createElement("div");
        divElement.classList.add("box");
        document.body.appendChild(divElement);
    }
}
