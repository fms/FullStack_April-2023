var checkBoxes = document.querySelectorAll(".checkBox");
var myDiv = document.querySelector(".myDiv");
var submit = "";
checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("click", function () { return print(checkBox); });
});
function print(checkBox) {
    // @ts-ignore
    myDiv.innerHTML += " " + checkBox.value;
    // @ts-ignore
    submit += " " + checkBox.value;
    console.log(submit);
}
function submitForm() {
    var whatIsOn = "";
    checkBoxes.forEach(function (checkBox) {
        // @ts-ignore
        if (checkBox.checked) {
            // @ts-ignore
            whatIsOn += checkBox.value + ",";
        }
    });
    alert("the submit values are:" + whatIsOn);
}
