"use strict";
const main = document.querySelector(".main");
const div = document.createElement("div");
const h2 = document.createElement("h2");
const input = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");
h2.textContent = "Enter some text";
button.textContent = "Click";
button.addEventListener("click", (event) => {
    console.log(event);
});
div.append(h2);
div.append(button);
div.append(input);
div.append(input2);
main.append(div);
