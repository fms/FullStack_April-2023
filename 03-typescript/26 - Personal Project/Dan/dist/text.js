"use strict";
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
];
let currentIndex = 0;
const galleryImage = document.getElementById("gallery-image");
const imageName = document.getElementById("image-name");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
function updateImage() {
    galleryImage.src = images[currentIndex];
    imageName.textContent = `Image ${currentIndex + 1}`;
}
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
galleryImage.addEventListener("mouseenter", () => {
    imageName.style.display = "block";
});
galleryImage.addEventListener("mouseleave", () => {
    imageName.style.display = "none";
});
updateImage();
