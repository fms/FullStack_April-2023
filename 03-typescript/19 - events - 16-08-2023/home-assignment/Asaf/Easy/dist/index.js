var box = document.querySelector(".box");
var char = document.querySelector(".userChar");
box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
    char.style.color = "white";
});
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "aquamarine";
    char.style.color = "black";
});
document.addEventListener("keypress", function (ev) {
    char.textContent = ev.key;
});
