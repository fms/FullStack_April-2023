var colors = document.querySelectorAll('.colors');
var selectButton = document.querySelector('#selectButton');
var colorSelect = document.querySelector('#colorSelect');
var BGButton = document.querySelector('#BGButton');
var BGSelect = document.querySelector('#BGSelect');
var FSButton = document.querySelector('#FSButton');
var FSSelect = document.querySelector('#FSSelect');
var savedBackGround = 'currentBG';
var savedColor = 'currentColor';
var fontSizeKey = 'currentFSize';
FSButton.addEventListener('click', function () {
    var selectedFS = FSSelect.value;
    document.body.style.fontSize = selectedFS + "px";
    saveFSToLS(selectedFS);
});
function saveFSToLS(fontsize) {
    localStorage.setItem(fontSizeKey, fontsize);
}
function loadFS() {
    var saved = localStorage.getItem(fontSizeKey);
    if (saved) {
        document.body.style.fontSize = saved + "px";
    }
}
BGButton.addEventListener('click', function () {
    var selectedBG = BGSelect.value;
    document.body.style.backgroundImage = "url('" + selectedBG + "')";
    saveBGToLS(selectedBG);
});
function saveBGToLS(background) {
    localStorage.setItem(savedBackGround, background);
}
selectButton.addEventListener('click', function () {
    var selectedColor = colorSelect.value;
    document.body.style.color = selectedColor;
    saveColorToLS(selectedColor);
    location.reload();
});
function saveColorToLS(color) {
    localStorage.setItem(savedColor, color);
}
function loadColor() {
    var boxShadow = document.querySelector('.cover');
    var buttons = document.querySelectorAll('button');
    var saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        boxShadow.style.boxShadow = "1px 1px 15px " + saved;
        buttons.forEach(function (button) {
            button.style.boxShadow = "1px 1px 15px " + saved;
            button.style.color = saved;
        });
    }
}
loadColor();
loadFS();
