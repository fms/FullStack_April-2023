const details = document.querySelector(".details")!;
let row = 0;

class Form {
    fullName: string;
    week: string;
    color: string;
    card: string;

    constructor(fullName: string, week: string, color: string, card: string) {
        this.fullName = fullName;
        this.week = week;
        this.color = color;
        this.card = card;
    }

    submitForm() {
        if(!details.classList.contains("active")) {
            details.classList.add("active");
        }
        row++;
        details.innerHTML = `<p>${row}:`
    }
}