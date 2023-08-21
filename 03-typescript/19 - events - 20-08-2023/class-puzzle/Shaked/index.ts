const tablee = document.querySelector('table') as HTMLElement;
const bod = document.querySelector('body') as HTMLElement;
let currentColoredBox: HTMLElement | null = null;

tablee?.addEventListener('click', (box) => {
    const targetBox = box.target as HTMLElement;
    const colors = ['yellow', 'blue', 'red', 'black', 'purple', 'green'];
    const index = Math.floor(Math.random() * colors.length);

    if (targetBox.tagName === "TD") {
        if (currentColoredBox) {
            currentColoredBox.style.backgroundColor = '';
            currentColoredBox.style.boxShadow = ''; 
        }
        if (targetBox !== currentColoredBox) {
            targetBox.style.backgroundColor = colors[index];
            targetBox.style.borderRadius = '40px';
            targetBox.style.opacity = '0.5';
            targetBox.style.boxShadow = 'inset 0 0 0 10px rgba(255, 255, 255, 0.3)';
            currentColoredBox = targetBox;
        } else {
            currentColoredBox = null;
        }
    }
});
bod.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target == tablee) {
        const backgroundColors = ['aqua', 'pink', 'orange', 'lightgray'];
        const index = Math.floor(Math.random() * backgroundColors.length);
        document.body.style.backgroundColor = backgroundColors[index];
    }
});