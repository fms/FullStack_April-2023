var body = document.body;
var grandparent = body.querySelector('.grandparent');
var parent1 = body.querySelectorAll('.parent');
var parent2 = body.querySelector('.parent + .parent');
var firstchild = body.querySelector('#first-child+ .child');
var child = body.querySelectorAll('.child');
var secondchild = body.querySelector('#second-child2');
if (grandparent && firstchild && parent1 && parent2 && child) {
    changeColor(grandparent, 'pink');
    grandparent.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoHXWaNoXKuhTQ8j3eV-NxoCOxrpOfXEYwpg3gF-vMw&s")';
    changeFontColor(grandparent, 'darkgrey');
    changeFontColor(parent2, 'white');
    parent1.forEach(function (element) { return changeColor(element, 'white'); });
    child.forEach(function (element) { return changeColor(element, 'purple'); });
    changeColor(firstchild, 'red');
    parent2.style.backgroundColor = 'grey';
}
function changeColor(element, color) {
    if (color === void 0) { color = 'purple'; }
    element.style.backgroundColor = color;
}
function changeFontColor(element, color) {
    if (color === void 0) { color = 'white'; }
    element.style.color = color;
}
function previousChild(selector, color) {
    var element = body.querySelector(selector);
    if (element) {
        var previousSibling = element.previousElementSibling;
        changeColor(previousSibling, color);
    }
}
function nextChild(selector, color) {
    var element = body.querySelector(selector);
    if (element) {
        var nextChi1d = element.nextElementSibling;
        changeColor(nextChi1d, color);
    }
}
if (secondchild) {
    nextChild("#" + secondchild.id, 'green');
    previousChild("#" + secondchild.id, 'blue');
}
