var savedColor = 'currentColor';
var fontSizeKey = 'currentFSize';
function loadColor() {
    var boxShadow = document.querySelector('.cover');
    var button = document.querySelector('button');
    var saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        boxShadow.style.boxShadow = "1px 1px 15px " + saved;
        button.style.boxShadow = "1px 1px 15px " + saved;
        button.style.color = saved;
    }
}
function loadFS() {
    var saved = localStorage.getItem(fontSizeKey);
    if (saved) {
        document.body.style.fontSize = saved + "px";
    }
}
loadColor();
loadFS();
