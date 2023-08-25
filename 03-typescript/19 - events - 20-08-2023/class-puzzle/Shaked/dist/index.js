var tablee = document.querySelector('table');
var bod = document.querySelector('body');
var currentColoredBox = null;
tablee === null || tablee === void 0 ? void 0 : tablee.addEventListener('click', function (box) {
    var targetBox = box.target;
    var colors = ['yellow', 'blue', 'red', 'black', 'purple', 'green'];
    var index = Math.floor(Math.random() * colors.length);
    if (targetBox.tagName === "TD") {
        if (currentColoredBox) {
            currentColoredBox.style.backgroundColor = '';
            currentColoredBox.style.boxShadow = '';
        }
        if (targetBox !== currentColoredBox) {
            targetBox.style.backgroundColor = colors[index];
            targetBox.style.borderRadius = '40px';
            targetBox.style.opacity = '0.5';
            targetBox.style.boxShadow = 'inset 0 0 0 10px rgba(255, 255, 255, 0.3)';
            currentColoredBox = targetBox;
        }
        else {
            currentColoredBox = null;
        }
    }
});
bod.addEventListener('click', function (event) {
    var target = event.target;
    if (target == tablee) {
        var backgroundColors = ['aqua', 'pink', 'orange', 'lightgray'];
        var index = Math.floor(Math.random() * backgroundColors.length);
        document.body.style.backgroundColor = backgroundColors[index];
    }
});
