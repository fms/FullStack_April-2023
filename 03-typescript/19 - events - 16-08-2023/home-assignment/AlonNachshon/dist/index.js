var hoverDiv = document.querySelector(".hoverDiv");
hoverDiv.addEventListener("mouseenter", hoverFumnc);
hoverDiv.addEventListener("mouseleave", hoverToInit);
function hoverFumnc(event) {
    hoverDiv.style.backgroundColor = "black";
    hoverDiv.style.color = "white";
}
function hoverToInit(event) {
    hoverDiv.style.backgroundColor = "initial";
    hoverDiv.style.color = "initial";
}
var favKEy = document.querySelector('.favKey span');
var keyDown = document.querySelector('.favKey input');
keyDown.addEventListener("keydown", keyUsed);
/*NOt finished! just strated working on it .... */
function keyUsed(event) {
    favKEy.innerText = "";
    favKEy.innerText = keyDown.value;
    keyDown.value = "";
}
