function changeSize(element, size) {
    var newSize = Math.floor(Math.random() * size);
    element.style.width = newSize + "px";
    element.style.height = newSize + "px";
}
function move(element, colors) {
    var moveRight = window.innerWidth;
    var moveLeft = 10;
    element.style.position = 'relative';
    setInterval(function () {
        var randomIndex = Math.floor(Math.random() * colors.length);
        var randomColor = colors[randomIndex];
        element.style.backgroundColor = randomColor;
        if (element.style.left === moveLeft + "px") {
            element.style.left = moveRight + "px";
            element.style.transform = 'rotate(360deg)';
        }
        else {
            element.style.left = moveLeft + "px";
            element.style.transform = 'rotate(10deg)';
        }
    }, 2000);
}
var div = document.querySelector('div');
var colors = ['yellow', 'brown', 'gray', 'purple', 'green', 'black'];
var setTime = setTimeout(function () {
    setInterval(function () { return changeSize(div, 350); }, 2000);
});
var mov = move(div, colors);
div.addEventListener("click", function () { return clearInterval(mov); });
