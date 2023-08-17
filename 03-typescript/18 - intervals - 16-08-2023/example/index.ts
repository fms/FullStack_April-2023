/**
 * Resized an element to a random size.
 * 
 * @remarks
 * Both width and height are set to the same value
 * 
 * @param element - the element to resize
 * @param scale - the maximum possible size
 */

function resize(element: HTMLElement, scale: number) {
    console.log("resize");
    let newSize = Math.random() * scale + 1;
    element.style.width = `${newSize}px`;
    element.style.height = `${newSize}px`;
}

/**
 * Randomly move an element on the screen
 * 
 * @remarks
 * X and Y coordinates are generated independently.
 * There's no check to make sure the element fits in the screen.
 * 
 * @param element - the element to move
 * @param scale - the maximum value for the new X and Y values
 */
function move (element: HTMLElement, scale: number) {
    console.log("move");
    let newX = Math.random() * scale + 1;
    let newY = Math.random() * scale + 1;
    element.style.position = "absolute";
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
}

// The element we want to work with
let div = document.querySelector("div")!;

// Set up a timer for resizing the div every 5 seconds.
// We store the timer id to be able to cancel it later.
let resizeTimerId = setInterval(resize, 5000, div, 500);
// The same using a direct callback instead of the parameters of the setInterval() call
//
// let resizeTimerId = setInterval(() => resize(div, 500), 5000);

// Set up another timer for moving the element every second.
// We store the timer id to be able to cancel it later.
let moveTimerId = setInterval(move, 1000, div, 500);
// The same using a direct callback instead of the parameters of the setInterval() call
// 
// let moveTimerId = setInterval(() => move(div, 500), 1000);


// It is possible to use another setInterval in order to cancel the already running ones:
// In this case, we also need to remember to cancel ourself (the cancel interval)
//
// let cancelTimerId = setInterval(() => {
//     console.log("cancel");
//     clearInterval(resizeTimerId);            // Stop the resize timer
//     clearInterval(moveTimerId);              // Stop the move timer

//     // We want this to be just one time - let cancel ourselves
//     clearInterval(cancelTimerId);            // Stop the cancel timer (ourself)
// }, 20000);

// A better way for a one-time timer using setTimeout():
let timeoutId = setTimeout(() => {
    console.log("cancel");
    clearInterval(resizeTimerId);               // Stop the resize timer
    clearInterval(moveTimerId);                 // Stop the move timer
}, 20000);

// If we need to cancel a timeout we previously set, clearTimeout() will cancel the pending setTimeout().
// The callback will never be called, not even once.
// clearTimeout(timeoutId);