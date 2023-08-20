"use strict";
// ## Easy
// ### Simulate the :hover pseudo class.
// - Use events, not `:hover` to solve this.
// - Draw a box on the screen.
// - When the mouse enters the box the color changes.
// - When the mouse leaves the box the color changes back to the original value (use the special value `initial` for this).
// ### Add a key logger
// - Using the `keydown` event, display the key pressed by the user.
// ## Medium
// ### Create an image gallery
// - Set up an array of images (either local or remote).
// - Add a button for cycling forward to the next image.
// - Add a button for cycling backward to the previous image.
// ### Password validation
// - Add two password input fields.
// - Using the `input` event make sure the second password matches the first one.
// - Display an error (on the page, don't use `alert()`) if the passwords don't match.
// ## Advanced
// ### Tabs
// - Start with the HTML and CSS from https://codepen.io/Fikri-Code/pen/GRZgOWo
// - Write the javascript needed to switch the displayed contents whenever a tab is clicked.
let firstBox = document.querySelector(".first-box");
function changeColor(element, color = "red") {
    element.style.backgroundColor = `${color}`;
}
function randomSize(element) {
    let maxNum = 500;
    let randomNum = Math.floor(Math.random() * maxNum);
    element.style.width = `${randomNum}px`;
    element.style.height = `${randomNum}px`;
}
let changeColorEvent = firstBox.addEventListener("mouseenter", () => changeColor(firstBox, "black"));
let changeColorEventOut = firstBox.addEventListener("mouseleave", () => changeColor(firstBox, "red"));
let keyEvent = document.body.addEventListener("keydown", event => {
    const pressedKey = event.key;
    console.log(`pressed key is "${pressedKey}"`);
    randomSize(firstBox);
});
