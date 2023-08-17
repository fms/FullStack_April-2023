function moveRight (element: HTMLElement, scale: number) {
    console.log("moveRight");
    element.style.position = "absolute";
    element.style.right = `10px`;
    element.style.top = `${20}px`;
}
function moveLeft (element: HTMLElement, scale: number) {
    console.log("moveLeft");
    element.style.left = `10px`;
    element.style.top = `${20}px`;
}

let div = document.querySelector("div")!;
// The same as:
let stopMoveRight = setInterval(() => moveRight(div, 500), 1000);
let stopMoveLeft = setInterval(() => setInterval(() => moveLeft(div, 500), 1000),500);

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
    clearInterval(stopMoveRight);
    clearInterval(stopMoveLeft);
}, 20000);

// Cancel a Timeout - the Timeout callback will not be called.
// clearTimeout(timeoutId);
