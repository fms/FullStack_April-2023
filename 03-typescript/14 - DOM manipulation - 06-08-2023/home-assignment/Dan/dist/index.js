var italy = document.getElementById("italy");
console.log("italy style: " + (italy === null || italy === void 0 ? void 0 : italy.style));
if (italy) {
    italy.style.backgroundColor = "green";
    italy.style.color = "white";
    italy.style.fontSize = "50px";
}
var milano = document.querySelector(".milano");
if (milano) {
    milano.style.backgroundColor = "black";
}
var rome = document.querySelector(".rome");
if (rome) {
    rome.style.backgroundColor = "black";
}
