"use strict";
function validPass(event) {
    let target = event.target;
    let p = document.querySelector(".error-pass");
    target.value + event.key == "greatPass" ? p.textContent = "confirmed" : p.textContent = "password too short";
    if (target.value.length > 8) {
        p.textContent = "password too long";
    }
    console.log(`${target.value}`);
}
