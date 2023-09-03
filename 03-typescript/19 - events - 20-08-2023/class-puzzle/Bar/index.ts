// let tds = document.querySelectorAll("td");
// let highlighted: HTMLElement;

// tds.forEach(td => {
//     td.addEventListener("click", () => highlight(td));
// });

// function highlight(td: any) {
//     if (highlighted) {
//         highlighted.style.background = "initial"
//     }
//     td.style.background = "yellow"
//     highlighted = td
// }

let theTable = document.querySelector("table")
let tds = document.querySelectorAll("td")

theTable?.addEventListener("click", (event) => {
    let target = event.target as HTMLElement
    if (target.tagName === "TD") {
        tds.forEach((td) => {
            td.classList.remove("highlited")
        })
        target.classList.add("highlited")
    }
})
