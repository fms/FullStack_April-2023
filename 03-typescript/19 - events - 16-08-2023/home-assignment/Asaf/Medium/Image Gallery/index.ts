const images: string[] = [
    "https://picsum.photos/600",
    "https://picsum.photos/600?random=1",
    "https://picsum.photos/600?random=2",
    "https://picsum.photos/600?random=3",
    "https://picsum.photos/600?random=4",
    "https://picsum.photos/600?random=5",
];
const imgHolder = document.querySelector(".shownImg") as HTMLImageElement;
const preImg = document.querySelector(".preBtn") as HTMLElement;
const fwdImg = document.querySelector(".fwdBtn") as HTMLElement;
var currentImg = 0;
imgHolder.src = images[currentImg]

preImg.addEventListener("click", () => {
    if (currentImg === 0){
        currentImg = images.length - 1;
    } else {
        currentImg--;
    }
    imgHolder.src = images[currentImg];
})
fwdImg.addEventListener("click", () => {
    if (currentImg === images.length - 1) {
        currentImg = 0;
    } else {
        currentImg++;
    }
    imgHolder.src = images[currentImg];
})
