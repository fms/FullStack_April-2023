"use strict";

var mainBox = document.querySelector(".mainbox");
var pinkBox = document.createElement("div");
var defaultBox = pinkBox.style.backgroundColor;
pinkBox.classList.add("pinkBox");
mainBox === null || mainBox === void 0 ? void 0 : mainBox.classList.add("mainBox");
pinkBox.addEventListener("mouseenter", function (ev) {
  if (ev.target instanceof HTMLElement) {
    changeColor(ev.target, "white");
  }

  console.log(ev);
});
redBox.addEventListener("mouseleave", function (ev) {
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