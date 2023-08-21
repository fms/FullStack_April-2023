// ## Medium
// ### Create an image gallery
// - Set up an array of images (either local or remote).
// - Add a button for cycling forward to the next image.
// - Add a button for cycling backward to the previous image.

// ### Password validation
// - Add two password input fields.
// - Using the `input` event make sure the second password matches the first one.
// - Display an error (on the page, don't use `alert()`) if the passwords don't match.


let imageStorage :string[]= [
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "forth.jpg",
    "fifth.jpg",
];

let images = document.querySelector("#img-slider") as HTMLImageElement;
let nextButton = document.querySelector("#next-button") as HTMLElement;
let backButton = document.querySelector("#back-button") as HTMLElement;
let imageNum = 0;

images.src = `images/${imageStorage[imageNum]}`;

nextButton.addEventListener("click",() => {
    if(imageNum === imageStorage.length - 1) {
        imageNum = -1;
    }
    imageNum++;
    images.src = `images/${imageStorage[imageNum]}`
})

backButton.addEventListener("click",() => {
    if(imageNum - 1 < 0) {
        imageNum = imageStorage.length;
    }
    imageNum--;
    images.src = `images/${imageStorage[imageNum]}`
})

let firstPassword = document.querySelector("#first-password") as HTMLInputElement;
let secondPassword = document.querySelector("#second-password") as HTMLInputElement;
let passwordError = document.querySelector("#error") as HTMLParagraphElement;

secondPassword.addEventListener("input",() => {
    const firstPass = firstPassword.value;
    const secondPass = secondPassword.value;

    if (firstPass === secondPass) {
        passwordError.textContent = "password confirm!"
        passwordError.style.color = "green" 
    }else {
        passwordError.style.color = "red"
        passwordError.textContent = "error, not the same password"
    }
})