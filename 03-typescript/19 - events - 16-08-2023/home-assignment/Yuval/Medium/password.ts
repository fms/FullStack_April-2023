// Passwords
const newPass = document.getElementById("newPass") as HTMLInputElement;
const confirmPass = document.getElementById("confirmPass") as HTMLInputElement;
const isEqual = document.querySelector("p")!;

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