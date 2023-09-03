"use strict";
const details = document.querySelector(".details");
let row = 0;
class Form {
    constructor(fullName, week, color, card) {
        this.fullName = fullName;
        this.week = week;
        this.color = color;
        this.card = card;
    }
    submitForm() {
        if (!details.classList.contains("active")) {
            details.classList.add("active");
        }
        row++;
        details.innerHTML = `<p>${row}:`;
    }
}
