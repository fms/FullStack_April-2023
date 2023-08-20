var tds = document.querySelectorAll("td");
tds.forEach(function (td) {
    td.addEventListener("click", function () { return highlight(td); });
});
function highlight(td) {
    td.style.backgroundColor = "yellow";
}
console.log(tds);
