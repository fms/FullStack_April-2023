var currentImageIndex = 0;
var images = document.querySelectorAll('.pics');
function showImage(index) {
    images.forEach(function (image, i) {
        if (i === index) {
            image.style.display = 'block';
        }
        else {
            image.style.display = 'none';
        }
    });
}
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
// Initially show the first image
showImage(currentImageIndex);
