var checkBoxes = document.querySelectorAll(".checkBox");
var myDiv = document.querySelector(".myDiv");
var submit = "";
checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("click", function (event) { return print(event, checkBox); });
});
function print(event, checkBox) {
    myDiv.innerHTML += " " + checkBox.value;
    submit += " " + checkBox.value;
    console.log(submit);
}
function submitForm() {
    var whatIsOn = "";
    checkBoxes.forEach(function (checkBox) {
        if (checkBox.checked) {
            whatIsOn += checkBox.value + ",";
        }
    });
    alert("the submit values are:" + whatIsOn);
}