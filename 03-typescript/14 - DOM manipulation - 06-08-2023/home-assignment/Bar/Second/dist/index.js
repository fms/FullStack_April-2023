var divElement = document.createElement("div");
var h1Element = document.createElement("h1");
var buttonElement = document.createElement("BUTTON");
var inputElement = document.createElement("input");
h1Element.innerText = "To Do List";
buttonElement.innerText = "Add Task";
var inputValue = "";
function addToList(item) {
    var arrayTodo = [];
    arrayTodo.push(item);
    arrayTodo.forEach(function (something) {
        var listElement = document.createElement("li");
        listElement.innerHTML = something;
        divElement.appendChild(listElement);
    });
}
inputElement.addEventListener("input", function (event) {
    var target = event.target;
    inputValue = target.value;
});
buttonElement.addEventListener("click", function () {
    addToList(inputValue);
});
divElement.appendChild(h1Element);
divElement.appendChild(inputElement);
divElement.appendChild(buttonElement);
document.body.appendChild(divElement);
