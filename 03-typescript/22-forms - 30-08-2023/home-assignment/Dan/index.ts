const main: string = document.querySelector("#name");

function submitInfo(event: Event) {
    const target = event.target as HTMLInputElement;
    if (main) {
        main.textContent = target.value;
    }
}