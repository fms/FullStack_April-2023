let step = 100;
function move (element: HTMLElement) {
    let maxWidth= window.innerWidth;
    let left = element.offsetLeft;
    let right = element.offsetWidth + left;
    if((step > 0 && step + right > maxWidth) ||
    (step < 0 && step + left < 0)){
        step = -step;
    }
    element.style.position = "relative";
    element.style.left = `${left + step}px`
}

let div = document.querySelector("div")!;
let moveTimerId = setInterval(move, 100, div);
