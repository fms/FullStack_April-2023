"use strict";
const table = document.querySelector('table');
let currentHighlightedBox;
table.addEventListener('click', (event) => {
    let targetBox = event.target;
    if (targetBox.tagName === "TD") {
        if (currentHighlightedBox) {
            currentHighlightedBox.classList.remove('highlighted');
        }
        targetBox.classList.add('highlighted');
        currentHighlightedBox = targetBox;
    }
});
