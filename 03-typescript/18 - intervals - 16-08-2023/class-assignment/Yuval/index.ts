let step = 100;
function move (element: HTMLElement) {
    let left = element.offsetLeft;
    let right = element.offsetWidth + left;
    console.log("move");

    if((left > 0 && right + step > window.innerWidth) || (right > 0 && left + step < 0)) {
        step = -step;
    }

    element.style.position = "relative";
    element.style.left = `${left + step}px`;
}

let div = document.querySelector("div")!;
setInterval(() => move(div), 200);


