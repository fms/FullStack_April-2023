// Images and buttons
const images = ["images/kenny.jpg", "images/mjf.jpg", "images/yb.jpg", "images/jericho.jpg", "images/hangman.jpg", "images/mox.jpg"];
let currentIndex = 0;

let displayedImage = document.getElementById("displayed")!;
let next = document.getElementById("next")!;
let prev = document.getElementById("previous")!;

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImg();
});
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImg();
});

function changeImg() {
    displayedImage.setAttribute("src", images[currentIndex]);
}


