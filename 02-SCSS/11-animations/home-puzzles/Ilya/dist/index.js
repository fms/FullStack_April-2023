var #cat = document.getElementById('cat');
var #mouse = document.getElementById('mouse');
var catX = 0;
var catY = 0;
cat.style.left = catX + "px";
cat.style.top = catY + "px";
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        catY -= 10;
    }
    else if (event.key === 'ArrowDown') {
        catY += 10;
    }
    else if (event.key === 'ArrowLeft') {
        catX -= 10;
    }
    else if (event.key === 'ArrowRight') {
        catX += 10;
    }
    #cat.style.left = catX + "px";
    cat.style.top = catY + "px";
});
var isCatDrag = false;
cat.addEventListener('mousedown', function () {
    isCatDrag = true;
});
document.addEventListener('mouseup', function () {
    isCatDrag = false;
});
document.addEventListener('mousemove', function (event) {
    if (isCatDrag) {
        catX = event.clientX;
        catY = event.clientY;
        cat.style.left = catX + "px";
        cat.style.top = catY + "px";
    }
});
