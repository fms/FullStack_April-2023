"use strict";
let pass1 = document.querySelector('.pass1');
let pass2 = document.querySelector('.pass2');
const error = document.querySelector('.error');
let pass1Value;
let pass2Value;
pass1 === null || pass1 === void 0 ? void 0 : pass1.addEventListener('input', (e) => {
});
pass2 === null || pass2 === void 0 ? void 0 : pass2.addEventListener('input', (e) => {
    console.log(pass2.value);
});
setInterval(() => {
    if (pass1.value != pass2.value)
        error.style.opacity = `100%`;
    else
        error.style.opacity = `0`;
}, 10);
