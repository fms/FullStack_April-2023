function changeSize(element: HTMLElement, size: number) {
    const newSize = Math.floor(Math.random() * size);
    element.style.width = `${newSize}px`;
    element.style.height = `${newSize}px`;
}

function move(element: HTMLElement, colors: string[]) {
    const moveRight = window.innerWidth;
    const moveLeft = 10;
    element.style.position = 'relative';
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        element.style.backgroundColor = randomColor;

        if (element.style.left === `${moveLeft}px`) {
            element.style.left = `${moveRight}px`
            element.style.transform = 'rotate(360deg)';
        } else {
            element.style.left = `${moveLeft}px`;
            element.style.transform = 'rotate(10deg)';
        }
    }, 2000);
}

const div = document.querySelector('div') as HTMLElement;
const colors = ['yellow', 'brown', 'gray', 'purple', 'green', 'black'];
let setTime = setTimeout(() => {
    setInterval(() => changeSize(div, 350), 2000)
});
let mov = move(div, colors)!;
div.addEventListener("click", () => clearInterval(mov));
