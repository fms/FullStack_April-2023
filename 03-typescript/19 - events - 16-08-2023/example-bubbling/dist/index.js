"use strict";
/**
 * This is the event listener we want to register.
 *
 * @remarks
 * We could have used an arrow function, but since we want to register the same
 * callback to multiple listeners we're using a single implementation (this function)
 * and use it instead.
 *
 * @param event
 */
function report(event) {
    let clicked = event.target; // The element originating the event
    let actual = event.currentTarget; // The element processing the event (bubbling)
    let prefix = clicked === actual ? "|" : " ";
    console.log(`${prefix}${event.type}${prefix}: ${clicked.tagName} ${actual.tagName}`);
    if (clicked.className === "red") {
        clicked.style.backgroundColor = "yellow";
    }
}
// Get the entire hierarchy...
let tags = document.querySelectorAll("*");
// ... and set up the same lister on all
tags.forEach((x) => x.addEventListener("click", report));
// ... also for the keyboard.
// Without focus on an element input, this will only be triggered on the body.
tags.forEach((x) => x.addEventListener("keydown", report));
// Using the current page, this is the same as:
//
// document.querySelector("p").addEventListener("click", report);
// document.querySelector("div").addEventListener("click", report);
// document.querySelector("form").addEventListener("click", report);
// document.body.addEventListener("click", report);
// document.addEventListener("click", report);
// window.addEventListener("click", report);
// This is an example for using the code as in the report() function above,
// using an arrow function.
// 
// let div = document.querySelector("div")!;
// div.addEventListener("click", (event: Event) => {
//     let clicked = event.target as HTMLElement;                          // The element originating the event
//     let actual  = event.currentTarget as HTMLElement;                   // The element processing the event (bubbling)
//     let prefix = clicked === actual ? "|" : " ";
//     console.log(`${prefix}${event.type}${prefix}: ${clicked.tagName} ${actual.tagName}`);
// 
//     if (clicked.className === "red") {
//         clicked.style.backgroundColor = "yellow";
//     }
// })
