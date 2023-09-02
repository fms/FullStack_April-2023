// Create an image gallery
// - Set up an array of images (either local or remote).
// - Add a button for cycling forward to the next image.
// - Add a button for cycling backward to the previous image.

const myImages = [
  "img/flowers.jpg",
  "img/flowers2.jpg",
  "img/flowers3.jpg",
  "img/flowers4.jpg",
  "img/flowers5.jpg",
  "img/flowers6.jpg",
  "img/flowers7.jpg",
];
let currentImag = 0;
let myGallery = document.querySelector("#gallery")!;
let previousOne = document.querySelector("#previous")!;
let nextOne = document.querySelector("#next")!;

previousOne.addEventListener("click", () => {
  currentImag = (currentImag + 1) % myImages.length;
  changeTheImg();
});

nextOne.addEventListener("click", () => {
  currentImag = (currentImag - 1 + myImages.length) % myImages.length;
  changeTheImg();
});

function changeTheImg() {
  myGallery.setAttribute("src", myImages[currentImag]);
}
