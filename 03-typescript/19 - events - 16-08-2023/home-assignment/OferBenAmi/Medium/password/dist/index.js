"use strict";
let pass1 = document.querySelector('.pass1');
let pass2 = document.querySelector('.pass2');
const error = document.querySelector('.error');
setInterval(() => {
    if (pass1.value != pass2.value)
        error.style.opacity = `100%`;
    else
        error.style.opacity = `0`;
}, 10);
