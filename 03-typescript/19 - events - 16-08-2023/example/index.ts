let step = 50;
function move (element: HTMLElement) {
    // console.log("move");
    let left  = element.offsetLeft;
    let right = element.offsetWidth + left;
    if (   (step > 0 && step + right > window.innerWidth)
        || (step < 0 && step + left < 0)) {
        step = -step;
    }

    element.style.position = "relative";
    element.style.left = `${left + step}px`;
}

let div = document.querySelector("div")!;
let moveTimerId = setInterval(move, 100, div);

// Set up three different methods for starting and stopping the moving box
// 1. Mouse click inside the box, using the function name
div.addEventListener("click", divStopStart);

// 2. Mouse pointer moves into the box, using a simple callback (just invoke the callback)
div.addEventListener("mouseenter", (ev) => divStopStart(ev));

// 3. Press a key on the keyboard.
//    The listener is added to the body, because we don't have any other element that can have
//    keyboard focus.
document.body.addEventListener("keydown", divStopStart)

function divStopStart(event: Event) {
    if (moveTimerId) {
        console.log(`stop ${event.type}`);
        clearInterval(moveTimerId);
        moveTimerId = 0;
    }
    else {
        console.log(`start ${event.type}`);
        moveTimerId = setInterval(move, 100, div);
    }
}