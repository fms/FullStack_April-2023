"use strict";
const table = document.querySelector(".table");
let active;
table === null || table === void 0 ? void 0 : table.addEventListener("click", (e) => {
    // if(e.target === ``)
    let target = e.target;
    if (target.tagName === `TD`) {
        let a = e.target;
        a.style.backgroundColor = `black`;
        if (active) {
            active.style.backgroundColor = "initial";
        }
        active = a;
    }
});
