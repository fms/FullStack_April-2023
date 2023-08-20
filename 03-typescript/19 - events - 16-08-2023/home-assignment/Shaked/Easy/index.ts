const div = document.body.querySelector('div') as HTMLElement;
const colors: string[] = ['yellow', 'blue', 'red', 'brown', 'black', 'green', 'purple'];
const originalColor = getComputedStyle(div).backgroundColor;

div.addEventListener('mouseover', () => {
    const index = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = `${colors[index]}`;
});

div.addEventListener('mouseleave', () =>
div.style.backgroundColor = originalColor);

div.addEventListener('keydown', (event) => {
    console.log(event.key);
});
