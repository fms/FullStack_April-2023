function handleClick(event: MouseEvent) {
    console.log(`click`);
}

const validValues = [ "Hello", "There"];

function handleKeyup(event: KeyboardEvent) {
    const target: HTMLInputElement | null = event.target;
    if (target) {
        console.log(`key up ${event.key} ${target.value.length}`);
        const p = document.querySelector("#error-text");
        if (p) {
            p.textContent = target.value;
            // p.textContent = validValues.indexOf(target.value) === -1 ?
            //          "Bad value" : "";
        }
    }
}

