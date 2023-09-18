"use strict";
let editMode = false;
let currentIndex;
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const deleteButton = document.getElementById("delete");
const updateButton = document.getElementById("update");
const addButton = document.getElementById("add");
const form = document.querySelector("#new-task-form");
const taskNameDiv = document.querySelector(".task-name");
const taskDetailsDiv = document.querySelector(".task-details");
class Tasks {
    constructor(task, details, deadline, checkedForDelete = false) {
        this.task = task;
        this.details = details;
        this.deadline = deadline;
        this.checkedForDelete = checkedForDelete;
    }
}
let taskList = loadTasks();
updateRow();
function submitTask(event) {
    event.preventDefault();
    const form = event.target;
    const element = form.elements;
    let newTask = {
        task: element.task.value,
        details: element.details.value,
        deadline: element.deadline.value,
        checkedForDelete: false,
    };
    taskList.push(newTask);
    form.reset();
    saveTasks();
    updateRow();
}
function updateRow() {
    if (taskNameDiv && taskDetailsDiv) {
        taskNameDiv.replaceChildren();
        taskDetailsDiv.replaceChildren();
        if (taskList.length !== 0) {
            taskNameDiv.classList.remove("hidden");
            taskDetailsDiv.classList.remove("hidden");
            taskList.forEach((task, index) => createTaskRow(taskNameDiv, taskDetailsDiv, task, index));
        }
        else {
            taskNameDiv.classList.add("hidden");
            taskDetailsDiv.classList.add("hidden");
        }
    }
}
function createTaskRow(taskName, taskDetails, task, index) {
    createNameRow(taskName, task, index);
    createDetailsRow(taskDetails, task, index);
}
function createNameRow(taskName, task, index) {
    const taskNameNew = createElement("div", "task-name-new");
    taskNameNew.id = index.toString();
    const pName = createElement("p", "task-name-text", task.task);
    const selectName = createInputElement("button", "button", selectRow, "Select");
    const editName = createInputElement("button", "button", editRow, "Edit");
    const checkboxName = createInputElement("checkbox", "checkbox", markedCheckbox);
    taskNameNew.appendChild(pName);
    taskNameNew.appendChild(selectName);
    taskNameNew.appendChild(editName);
    taskNameNew.appendChild(checkboxName);
    taskName.appendChild(taskNameNew);
}
function createDetailsRow(taskDetails, task, index) {
    const taskDetailsNew = createElement("div", "task-details-new");
    taskDetailsNew.id = index.toString();
    taskDetailsNew.classList.add("hidden");
    const pDetails = createElement("p", "task-details-text", task.details);
    const dateTime = createInputNonEvent("datetime-local", "data-time", task.deadline);
    // const checkboxDetails = createInputElement("checkbox", "checkbox", markedCheckbox);
    taskDetailsNew.appendChild(pDetails);
    taskDetailsNew.appendChild(dateTime);
    // taskDetailsNew.appendChild(checkboxDetails);
    taskDetails.appendChild(taskDetailsNew);
}
function createElement(typeName, className, content = "") {
    const element = document.createElement(typeName);
    element.classList.add(className);
    if (content) {
        element.textContent = content;
    }
    return element;
}
function createInputElement(inputType, className, handler, content = "") {
    const input = document.createElement("input");
    input.type = inputType;
    input.classList.add(className);
    input.addEventListener("click", handler);
    if (content) {
        input.value = content;
    }
    return input;
}
function createInputNonEvent(inputType, className, content = "") {
    const input = document.createElement("input");
    input.type = inputType;
    input.classList.add(className);
    if (content) {
        input.value = content;
    }
    return input;
}
function selectRow(event) {
    var _a;
    let target = event.target;
    let id = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
    let taskData = taskList[parseInt(id)];
    let element = form.elements;
    if (target && !editMode) {
        SelectedTask(id);
        element.task.value = taskData.task;
        element.deadline.value = taskData.deadline;
        // toggleHiddenEdit();
    }
}
function editRow(event) {
    if (!editMode) {
        let target = event.target;
        let parent = target.parentElement;
        let parentId = parent === null || parent === void 0 ? void 0 : parent.id;
        currentIndex = parseInt(parentId);
        const taskData = taskList[currentIndex];
        const element = form.elements;
        SelectedTask(parentId);
        element.task.value = taskData.task;
        element.details.value = taskData.details;
        element.deadline.value = taskData.deadline;
        toggleHiddenEdit();
        editMode = true;
    }
}
function cancelEdit(event) {
    let target = event.target;
    if (target) {
        form.reset();
        toggleHiddenEdit();
        editMode = false;
        currentIndex = null;
    }
}
function updateSubmit(event) {
    let target = event.target;
    const element = form.elements;
    if (event) {
        let taskData = taskList[currentIndex];
        taskData.task = element.task.value;
        taskData.details = element.details.value;
        taskData.deadline = element.deadline.value;
        editMode = false;
        toggleHiddenEdit();
        updateRow();
        form.reset();
        SelectedTask(currentIndex === null || currentIndex === void 0 ? void 0 : currentIndex.toString());
        currentIndex = null;
    }
    if (target.value === "Add") {
        console.log('1');
    }
}
function deleteTasks() {
    taskList = taskList.filter((task) => !task.checkedForDelete);
    saveTasks();
    updateRow();
}
function toggleHiddenEdit() {
    cancelButton.classList.toggle("hidden");
    updateButton.classList.toggle("hidden");
    deleteButton.classList.toggle("hidden");
    submitButton.classList.toggle("hidden");
}
function SelectedTask(id) {
    let tasks = document.querySelectorAll(".task-details-new");
    tasks.forEach((task) => {
        if (task.classList.contains("show")) {
            task.classList.remove("show");
            task.classList.add("hidden");
        }
        if (task.id === id) {
            task.classList.remove("hidden");
            task.classList.add("show");
        }
    });
}
function markedCheckbox(event) {
    var _a;
    const checkbox = event.target;
    let parentId = parseInt((_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.id);
    if (parentId !== -1) {
        taskList[parentId].checkedForDelete = checkbox.checked;
    }
}
function saveTasks() {
    const taskListStringify = JSON.stringify(taskList);
    localStorage.setItem("Tasks", taskListStringify);
}
function loadTasks() {
    const savedTasks = localStorage.getItem("Tasks");
    if (savedTasks) {
        return JSON.parse(savedTasks);
    }
    return new Array();
}
// function addDetails(event :MouseEvent) {
//     let target = event.target as HTMLInputElement;
//     if(target) {
//     }
// }
