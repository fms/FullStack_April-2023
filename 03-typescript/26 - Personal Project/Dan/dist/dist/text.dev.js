"use strict";

var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var currentIndex = 0;
var galleryImage = document.getElementById("gallery-image");
var imageName = document.getElementById("image-name");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

function updateImage() {
  galleryImage.src = images[currentIndex];
  imageName.textContent = "Image ".concat(currentIndex + 1);
}

prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
galleryImage.addEventListener("mouseenter", function () {
  imageName.style.display = "block";
});
galleryImage.addEventListener("mouseleave", function () {
  imageName.style.display = "none";
});
updateImage();