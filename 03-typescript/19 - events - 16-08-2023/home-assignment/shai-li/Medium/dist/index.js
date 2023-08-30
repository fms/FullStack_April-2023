// Create an image gallery
// - Set up an array of images (either local or remote).
// - Add a button for cycling forward to the next image.
// - Add a button for cycling backward to the previous image.
var myImages = [
    "img/flowers.jpg",
    "img/flowers2.jpg",
    "img/flowers3.jpg",
    "img/flowers4.jpg",
    "img/flowers5.jpg",
    "img/flowers6.jpg",
    "img/flowers7.jpg",
];
var currentImag = 0;
var myGallery = document.querySelector("#gallery");
var previousOne = document.querySelector("#previous");
var nextOne = document.querySelector("#next");
previousOne.addEventListener("click", function () {
    currentImag = (currentImag + 1) % myImages.length;
    changeTheImg();
});
nextOne.addEventListener("click", function () {
    currentImag = (currentImag - 1 + myImages.length) % myImages.length;
    changeTheImg();
});
function changeTheImg() {
    myGallery.setAttribute("src", myImages[currentImag]);
}
