var grid = document.querySelector('.grid');
var collections = document.querySelectorAll('.collection');
var appleimg = document.querySelector('#apple-img');
var lgimg = document.querySelector('#lg-img');
var samsungimg = document.querySelector('#samsung-img');
var xiaomiimg = document.querySelector('#xiaomi-img');
var asusimg = document.querySelector('#asus-img');
var nokiaimg = document.querySelector('#nokia-img');
var backButton = document.querySelectorAll('.back-button');
backButton.forEach(function (button) {
    button.addEventListener('click', function () {
        window.location.href = '../Home/index.html';
    });
});
var images = [appleimg, lgimg, samsungimg, xiaomiimg, asusimg, nokiaimg];
images.forEach(function (img, index) {
    img === null || img === void 0 ? void 0 : img.addEventListener('click', function () {
        hideGrid();
        collections[index].style.display = 'block';
    });
});
function hideGrid() {
    grid.style.display = 'none';
}
var savedColor = 'currentColor';
function loadColor() {
    var boxShadow = document.querySelector('.cover');
    var saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        document.querySelectorAll('#btitle, .grid img').forEach(function (element) {
            if (element instanceof HTMLElement) {
                if (element.id === 'btitle') {
                    element.style.color = saved;
                }
                else {
                    element.style.boxShadow = "0px 0px 15px " + saved;
                }
            }
        });
        document.querySelectorAll('button').forEach(function (e) {
            e.style.color = "" + saved, e.style.boxShadow = "0px 0px 15px " + saved;
        });
        boxShadow.style.boxShadow = "1px 1px 15px " + saved;
    }
}
loadColor();
