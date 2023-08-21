let tds = document.querySelectorAll("td");
let highlighted: HTMLElement;

tds.forEach(td => {
    td.addEventListener("click", () => highlight(td));
});

function highlight(td: any) {
    if (highlighted) {
        highlighted.style.background = "initial"
    }
    td.style.background = "yellow"
    highlighted = td
}