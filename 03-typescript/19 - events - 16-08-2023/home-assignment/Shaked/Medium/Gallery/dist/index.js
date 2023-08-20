var imageUrls = [
    'https://i.pinimg.com/550x/37/e5/ba/37e5ba98784e235fd50cf8d176028834.jpg',
    'https://i.pinimg.com/736x/e8/84/fb/e884fb6e0540fd99c7793fffa68b425e.jpg',
    'https://img.freepik.com/premium-photo/flying-through-glowing-rotating-neon-triangles-creating-tunnel_250994-2542.jpg',
];
var imagesDiv = document.querySelector('.images');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var currentImage = imagesDiv.querySelector('img');
var index = 0;
prevButton.addEventListener('click', function () {
    index = index - 1;
    if (index < 0) {
        index = imageUrls.length - 1;
    }
    updateImg();
});
nextButton.addEventListener('click', function () {
    index = index + 1;
    if (index >= imageUrls.length) {
        index = 0;
    }
    updateImg();
});
function updateImg() {
    currentImage.src = imageUrls[index];
}
updateImg();
