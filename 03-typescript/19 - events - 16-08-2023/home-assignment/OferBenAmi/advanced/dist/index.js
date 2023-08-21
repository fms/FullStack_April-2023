"use strict";
var _a, _b;
const buttons = (_a = document.querySelector('.buttonWrapper')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.tab-button');
const contents = (_b = document.querySelector('.contentWrapper')) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.content');
var buttonsAndContents;
(function (buttonsAndContents) {
    buttonsAndContents[buttonsAndContents["home"] = 0] = "home";
    buttonsAndContents[buttonsAndContents["about"] = 1] = "about";
    buttonsAndContents[buttonsAndContents["contact"] = 2] = "contact";
})(buttonsAndContents || (buttonsAndContents = {}));
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked);
});
function buttonClicked(event) {
    console.dir(event);
    let target = event.target;
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    contents.forEach(content => {
        content.classList.remove('active');
    });
    buttons.forEach((button, index) => {
        if (target.id == button.id) {
            buttons[index].classList.add('active');
            contents[index].classList.add('active');
        }
    });
}
