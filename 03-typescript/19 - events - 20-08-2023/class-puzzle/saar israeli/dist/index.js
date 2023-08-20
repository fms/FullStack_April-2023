"use strict";
// - Create the multiplication table using <table><tr><td> etc.
// - Clicking on a cell should highlight the cell and remove the highlight from any previously highlighted cell.
let mainDiv = document.querySelector(".table-assignment");
let table = document.createElement("table");
mainDiv.appendChild(table);
for (let row = 1; row <= 10; row++) {
    let rowTd = document.createElement('tr');
    rowTd.id = `tr-${row}`;
    rowTd.className = `tables`;
    table.appendChild(rowTd);
    let newTd = document.querySelector(`#tr-${row}`);
    for (let column = 1; column <= 10; column++) {
        let columnTd = document.createElement(`td`);
        let value = row * column;
        columnTd.id = `td-${column}`;
        columnTd.className = `tables`;
        columnTd.textContent = `${value}`;
        newTd.appendChild(columnTd);
    }
}
let active;
table.addEventListener("click", (e) => {
    let target = e.target;
    let td = target.closest("td");
    if (!td) {
        return;
    }
    if (target.tagName === "TD") {
        if (active) {
            active.classList.remove("highlight");
        }
        active = target;
        active.classList.add("highlight");
    }
});
