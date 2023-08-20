const boxes = document.querySelectorAll('td');
let currentHighlightedBox: HTMLElement | null = null;

boxes.forEach(box => {
    box.addEventListener('click', () => {
    if (currentHighlightedBox) {
        currentHighlightedBox.classList.remove('highlighted');
    }
    box.classList.add('highlighted');
    currentHighlightedBox = box;
    });
});