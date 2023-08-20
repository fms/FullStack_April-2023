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
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    contents.forEach(content => {
        content.classList.remove('active');
    });
    switch (event.target) {
        case buttons[buttonsAndContents.home]:
            buttons[buttonsAndContents.home].classList.add('active');
            contents[buttonsAndContents.home].classList.add('active');
            break;
        case buttons[buttonsAndContents.about]:
            buttons[buttonsAndContents.about].classList.add('active');
            contents[buttonsAndContents.about].classList.add('active');
            break;
        case buttons[buttonsAndContents.contact]:
            buttons[buttonsAndContents.contact].classList.add('active');
            contents[buttonsAndContents.contact].classList.add('active');
            break;
    }
}
