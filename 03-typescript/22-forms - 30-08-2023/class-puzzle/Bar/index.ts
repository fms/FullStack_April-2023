let input = document.querySelector("input");

function handleClick(event: Event) {
    let target = event.target as HTMLElement;
    if (target) {
        let divElement = document.createElement("div");
        divElement.classList.add("box");
        document.body.appendChild(divElement);
    }
}
