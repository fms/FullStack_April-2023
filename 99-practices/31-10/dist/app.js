console.log("connected");
var handleSubmit = function (event) {
    event.preventDefault();
    var task = event.target.task.value;
    if (!task) {
        alert("Please Enter Task!");
        return;
    }
    sessionStorage.setItem("taskContent", task);
    var root = document.querySelector(".root");
    root.innerHTML = "<p>" + task + "</p>";
};
var handleLoad = function () {
    var task = sessionStorage.getItem("taskContent");
    if (!task) {
        addToRoot("<p>Please enter a task!</p>");
    }
    else {
        addToRoot("<p>" + task + "</p>");
    }
};
var handleDelete = function () {
    // sessionStorage.removeItem("taskContent");
    addToRoot("");
};
var addToRoot = function (contentToAdd) {
    var root = document.querySelector(".root");
    root.innerHTML = contentToAdd;
};
var handleAdd = function () {
    var task = sessionStorage.getItem("taskContent");
    addToRoot(task);
};
// const form = document.querySelector("#formTask") as HTMLFormElement
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log(event)
// })
