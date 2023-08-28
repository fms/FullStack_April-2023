"use strict";
var _a, _b;
const buttons = (_a = document.querySelector('.buttonWrapper')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.tab-button');
const contents = (_b = document.querySelector('.contentWrapper')) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.content');
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked);
});
function buttonClicked(event) {
    let target = event.target;
    [...contents, ...buttons].forEach(something => {
        something.classList.remove('active');
    });
    buttons.forEach((button, index) => {
        if (target.id == button.id) {
            buttons[index].classList.add('active');
            contents[index].classList.add('active');
        }
    });
}
