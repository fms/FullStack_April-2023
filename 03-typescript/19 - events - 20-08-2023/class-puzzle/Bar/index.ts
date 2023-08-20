let tds = document.querySelectorAll("td");

tds.forEach(td => {
    td.addEventListener("click", () => highlight(td));
});

function highlight(td: any) {
    td.style.backgroundColor = "yellow";
}

console.log(tds);
