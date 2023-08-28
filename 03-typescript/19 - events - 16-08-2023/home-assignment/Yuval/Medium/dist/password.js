"use strict";
// Passwords
const newPass = document.getElementById("newPass");
const confirmPass = document.getElementById("confirmPass");
const isEqual = document.querySelector("p");
confirmPass.addEventListener("input", matchingPasswords);
function matchingPasswords() {
    let pass1 = newPass.value;
    let pass2 = confirmPass.value;
    if (pass1 != pass2) {
        isEqual.textContent = "Passwords don't match!";
    }
    else {
        isEqual.textContent = "";
    }
}
