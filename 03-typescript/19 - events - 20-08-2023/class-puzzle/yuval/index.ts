const table = document.querySelector('table')!;
let currentHighlightedBox: HTMLElement;

table.addEventListener('click', (event) => {
    let targetBox = event.target as HTMLElement
    if(targetBox.tagName === "TD") {
        if (currentHighlightedBox) {
            currentHighlightedBox.classList.remove('highlighted');
        }
        targetBox.classList.add('highlighted');
        currentHighlightedBox = targetBox;
    }
});