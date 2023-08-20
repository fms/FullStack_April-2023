function resize(element: HTMLElement, scale: number) {
    console.log("resize");
    let newSize = Math.random() * scale + 1;
    element.style.width = `${newSize}px`;
    element.style.height = `${newSize}px`;
}

function move (element: HTMLElement, scale: number) {
    console.log("move");
    let newX = Math.random() * scale + 1;
    let newY = Math.random() * scale + 1;
    element.style.position = "relative";
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
}

let div = document.querySelector("div")!;
let resizeTimerId = setInterval(resize, 5000, div, 500);
let moveTimerId = setInterval(move, 1000, div, 500);
// The same as:
// setInterval(() => resize(div, 500), 1000);

// Using in interval to cancel other intervals:
//
// let cancelTimerId = setInterval(() => {
//     console.log("cancel");
//     clearInterval(resizeTimerId);
//     clearInterval(moveTimerId);

//     // We want this to be just one time - let cancel ourselves
//     clearInterval(cancelTimerId);
// }, 20000);

// A better way for a one-time timer: Timeout
let timeoutId = setTimeout(() => {
    console.log("cancel");
    clearInterval(resizeTimerId);
    clearInterval(moveTimerId);
}, 20000);

// Cancel a Timeout - the Timeout callback will not be called.
// clearTimeout(timeoutId);