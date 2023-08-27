var box = document.querySelector(".box") as HTMLElement;
var char = document.querySelector(".userChar") as HTMLElement;

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
    char.style.color = "white";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "aquamarine";
    char.style.color = "black";
});

document.addEventListener("keypress", (ev) => {
    char.textContent = ev.key;
});
