"use strict";
const images = [
    'dist/images/firstImg.jpg',
    'dist/images/secondImg.jpg',
    'dist/images/3rdImg.jpg',
    'dist/images/4thImg.jpg',
    'dist/images/5thImg.png',
    'dist/images/6thImg.png',
    'dist/images/7thImg.webp'
];
const image = document.querySelector('.picture');
const privBtn = document.querySelector('.privBtn');
const nextBtn = document.querySelector('.nextBtn');
let imageCounter = 0;
image.src = images[imageCounter];
privBtn === null || privBtn === void 0 ? void 0 : privBtn.addEventListener('click', () => {
    if (imageCounter <= 0) {
        imageCounter = images.length;
    }
    image.src = images[--imageCounter];
});
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', () => {
    if (imageCounter >= images.length - 1) {
        imageCounter = -1;
    }
    image.src = images[++imageCounter];
});
