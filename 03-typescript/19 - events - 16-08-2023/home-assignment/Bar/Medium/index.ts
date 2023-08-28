let arrayImg = document.querySelectorAll("img")
let prevButton = document.querySelector(".prev")
let nextButton = document.querySelector(".next")
let firstPassword = document.querySelector(".firstPassword")
let secondPassword = document.querySelector(".secondPassword")
let errorMes = document.querySelector(".error") as HTMLElement
let currentIndex = 0

function displayImage(index: number) {
    arrayImg.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
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
        currentIndex = arrayImg.length - 1;
    }
    displayImage(currentIndex);
}


nextButton?.addEventListener("click", () => nextImage())
prevButton?.addEventListener("click", () => prevImage())

displayImage(currentIndex)


//Passwords input check
function isValidPassword(pass1: any, pass2: any) {
    if (pass1.value === pass2.value) {
        console.log("Passwords match.");
        errorMes.style.display = "none"
    } else {
        console.log("Passwords do not match.");
        errorMes.style.display = "block"
    }
}

firstPassword!.addEventListener("input", () => {
    isValidPassword(firstPassword, secondPassword);
});

secondPassword!.addEventListener("input", () => {
    isValidPassword(firstPassword, secondPassword);
});


