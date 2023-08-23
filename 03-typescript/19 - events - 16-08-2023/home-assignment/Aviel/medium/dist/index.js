/////////// next-img 
var imageStorage = [
    "js1.png",
    "js2.png",
    "js3.png",
];
var images = document.querySelector("#img-slider");
var nextButton = document.querySelector("#next-button");
var backButton = document.querySelector("#back-button");
var imageNum = 0;
images.src = "image/" + imageStorage[imageNum];
function next_image() {
    var imge = document.querySelector('#aviel-next-button');
    if (imageNum === imageStorage.length - 1) {
        imageNum = -1;
    }
    imageNum++;
    images.src = "image/" + imageStorage[imageNum];
}
function prev_image() {
    var imge = document.querySelector('#aviel-prev-button');
    if (imageNum === imageStorage.length - 1) {
        imageNum = -1;
    }
    imageNum++;
    images.src = "image/" + imageStorage[imageNum];
}
/////////// password 
var firstPassword = document.querySelector("#id_pass1");
var secondPassword = document.querySelector("#id_pass2");
var passwordError = document.querySelector("#error");
function check() {
    var firstPass = firstPassword.value;
    var secondPass = secondPassword.value;
    if (firstPass === secondPass) {
        passwordError.textContent = "password confirm!";
        passwordError.style.color = "green";
    }
    else {
        passwordError.style.color = "red";
        passwordError.textContent = "error, not the same password";
    }
}
