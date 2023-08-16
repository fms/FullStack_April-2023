function move (element: HTMLElement, scale: number) {
    for(let newLeft = element.offsetLeft; newLeft <= 1000; newLeft++) {
        console.log("move left");
        element.style.position = "relative";
        element.style.left = `${newLeft}px`;
    }
}

let div = document.querySelector("div")!;
let left = setInterval(() => move(div, 1000));


