function inputPhone(event) {
    var input = document.getElementById('input');
    var message = input.value.length < 10 ? "Phone number is too short" :
        input.value.length > 10 ? "Phone number is too long" :
            input.value;
    console.log(message);
}
var submitButton = document.getElementById('submitButton');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', inputPhone);
