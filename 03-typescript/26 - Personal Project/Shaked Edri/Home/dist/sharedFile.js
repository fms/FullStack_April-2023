var topButton = document.querySelector('#topButton');
topButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
var previousPosition = window.scrollY;
window.addEventListener('scroll', function () {
    var currentPosition = window.scrollY;
    if (currentPosition > previousPosition) {
        topButton.style.display = 'block';
    }
    else {
        topButton.style.display = 'none';
    }
    previousPosition = currentPosition;
});
var savedBackGround = 'currentBG';
function loadBG() {
    var saved = localStorage.getItem(savedBackGround);
    if (saved) {
        document.body.style.backgroundImage = "url('" + saved + "')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }
}
loadBG();
