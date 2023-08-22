var tds = document.querySelectorAll("td");
var highlighted;
tds.forEach(function (td) {
    td.addEventListener("click", function () { return highlight(td); });
});
function highlight(td) {
    if (highlighted) {
        highlighted.style.background = "initial";
    }
    td.style.background = "yellow";
    highlighted = td;
}
