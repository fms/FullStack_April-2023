"use strict";
let arrayImg = document.querySelectorAll("img");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let currentIndex = 0;
function displayImage(index) {
    arrayImg.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        }
        else {
            img.style.display = "none";
        }
    });
}
function nextImage() {
    currentIndex += 1;
    if (currentIndex >= arrayImg.length) {
        currentIndex = 0;
    }
    displayImage(currentIndex);
}
function prevImage() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    displayImage(currentIndex);
}
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", () => nextImage());
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", () => prevImage());
displayImage(currentIndex);
