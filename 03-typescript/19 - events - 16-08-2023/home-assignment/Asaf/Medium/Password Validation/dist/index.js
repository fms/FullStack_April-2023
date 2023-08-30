var input1 = document.querySelector(".frstInput");
var input2 = document.querySelector(".secInput");
var message = document.querySelector(".msg");
var continueBtn = document.querySelector("button");
function checkPass() {
    var pass1 = input1.value;
    var pass2 = input2.value;
    if (pass1 != pass2) {
        message.textContent = "Passwords do not MATCH!";
        continueBtn.style.visibility = "hidden";
    }
    else {
        message.textContent = "Youre good to go.";
        continueBtn.style.visibility = "visible";
    }
}
input2.addEventListener("input", checkPass);
