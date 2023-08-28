"use strict";
//## Easy
// ### Simulate the :hover pseudo class.
// - Use events, not `:hover` to solve this.
// - Draw a box on the screen.
// - When the mouse enters the box the color changes.
// - When the mouse leaves the box the color changes back to the original value (use the special value `initial` for this).
const thisBox = document.querySelector(".box");
let thisInitial = getComputedStyle(thisBox).backgroundColor;
if (thisBox) {
    thisBox.addEventListener("mouseenter", () => {
        thisBox.style.backgroundColor = "pink";
    });
    thisBox.addEventListener("mouseleave", () => {
        thisBox.style.backgroundColor = thisInitial;
    });
}
