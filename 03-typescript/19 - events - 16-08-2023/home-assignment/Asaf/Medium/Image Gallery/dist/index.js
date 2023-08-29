var images = [
    "https://picsum.photos/600",
    "https://picsum.photos/600?random=1",
    "https://picsum.photos/600?random=2",
    "https://picsum.photos/600?random=3",
    "https://picsum.photos/600?random=4",
    "https://picsum.photos/600?random=5",
];
var imgHolder = document.querySelector(".shownImg");
var preImg = document.querySelector(".preBtn");
var fwdImg = document.querySelector(".fwdBtn");
var currentImg = 0;
imgHolder.src = images[currentImg];
preImg.addEventListener("click", function () {
    if (currentImg === 0) {
        currentImg = images.length - 1;
    }
    else {
        currentImg--;
    }
    imgHolder.src = images[currentImg];
});
fwdImg.addEventListener("click", function () {
    if (currentImg === images.length - 1) {
        currentImg = 0;
    }
    else {
        currentImg++;
    }
    imgHolder.src = images[currentImg];
});
