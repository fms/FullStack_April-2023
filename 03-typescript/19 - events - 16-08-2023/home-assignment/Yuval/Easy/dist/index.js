"use strict";
let div = document.querySelector("div");
let initial = getComputedStyle(div).backgroundColor;
div.addEventListener("mouseenter", () => { div.style.backgroundColor = "green"; });
div.addEventListener("mouseleave", () => { div.style.backgroundColor = initial; });
document.body.addEventListener(`keydown`, (event) => console.log(event.key));
