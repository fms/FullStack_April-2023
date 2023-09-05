"use strict";
class TaksList {
    constructor(name) {
        this.name = name;
        this.tasks = new Map();
    }
    addTask(task) {
        this.tasks.set(task.id, task);
        console.log(this.tasks);
    }
    deleteTask(taskId) {
        this.tasks.delete(taskId);
        console.log(this.tasks);
    }
}
let Task = /** @class */ (() => {
    class Task {
        // (Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString(), privateList);
        constructor(id, title, description, taskDayTime, dateStemp, taskList) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.taskDayTime = taskDayTime;
            this.dateStemp = dateStemp;
            this.status = false;
            taskList.addTask(this);
            this.setTask();
        }
        setTask() {
            const taskContainer = document.createElement("div");
            taskContainer.className = "tasktslist__task";
            const timeCreated = document.createElement("div");
            timeCreated.className = "tasktslist__task__created";
            timeCreated.textContent = this.dateStemp;
            const taskId = document.createElement("div");
            taskId.className = "tasktslist__task__id";
            taskId.textContent = this.id.toString();
            const taskTitle = document.createElement("div");
            taskTitle.className = "tasktslist__task__title";
            taskTitle.textContent = this.title;
            const taskDescription = document.createElement("div");
            taskDescription.className = "tasktslist__task__description";
            taskDescription.textContent = this.description;
            const taskDate = document.createElement("div");
            taskDate.className = "tasktslist__task__date";
            taskDate.textContent = this.taskDayTime;
            const taskActions = document.createElement("div");
            taskActions.className = "tasktslist__task__actions";
            const shouldDelete = document.createElement("input");
            shouldDelete.type = "checkbox";
            taskActions.appendChild(shouldDelete);
            const markAsDone = document.createElement("div");
            const isDone = document.createElement("input");
            isDone.type = "checkbox";
            markAsDone.className = "tasktslist__task__done";
            markAsDone.appendChild(isDone);
            const editTask = document.createElement("div");
            const editBtn = document.createElement("input");
            editBtn.type = "submit";
            editBtn.value = "Edit";
            editBtn.className = "editBtn";
            editTask.className = "tasktslist__task__edit";
            editTask.appendChild(editBtn);
            taskContainer.appendChild(timeCreated);
            taskContainer.appendChild(taskId);
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDescription);
            taskContainer.appendChild(taskDate);
            taskContainer.appendChild(taskActions);
            taskContainer.appendChild(editTask);
            taskContainer.appendChild(markAsDone);
            /*
            ...Need to check if null if any problems while uploading page
             */
            const lastTask = document.querySelector(".tasktslist");
            lastTask === null || lastTask === void 0 ? void 0 : lastTask.appendChild(taskContainer);
            editBtn.addEventListener("click", (ev) => {
                var _a;
                ev.preventDefault();
                const parent = (_a = editBtn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                const title = document.getElementById("title");
                const description = document.getElementById("description");
                const dateAndTime = document.getElementById("dateAndTime");
                title.value = this.title;
                description.value = this.description;
                dateAndTime.value = this.taskDayTime;
                editMode(true);
                const update = document.getElementById("updateTask");
                update === null || update === void 0 ? void 0 : update.addEventListener("click", (ev) => {
                    var _a, _b, _c, _d;
                    this.title = title === null || title === void 0 ? void 0 : title.value;
                    this.description = description === null || description === void 0 ? void 0 : description.value;
                    this.taskDayTime = dateAndTime === null || dateAndTime === void 0 ? void 0 : dateAndTime.value;
                    (_a = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__title")) === null || _a === void 0 ? void 0 : _a.textContent = this.title;
                    (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__description")) === null || _b === void 0 ? void 0 : _b.textContent = this.description;
                    (_c = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__date")) === null || _c === void 0 ? void 0 : _c.textContent = this.taskDayTime;
                    editMode(false);
                    const addNewTask = (_d = document.getElementById("addNewTask")) === null || _d === void 0 ? void 0 : _d.reset();
                });
            });
            isDone.addEventListener("change", (ev) => {
                var _a, _b, _c, _d, _e, _f, _g;
                const parent = (_a = isDone.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__title")) === null || _b === void 0 ? void 0 : _b.classList.toggle("--done");
                (_c = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__description")) === null || _c === void 0 ? void 0 : _c.classList.toggle("--done");
                (_d = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__date")) === null || _d === void 0 ? void 0 : _d.classList.toggle("--done");
                (_e = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id")) === null || _e === void 0 ? void 0 : _e.classList.toggle("--done");
                (_f = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__created")) === null || _f === void 0 ? void 0 : _f.classList.toggle("--done");
                this.status ? false : true;
                (_g = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _g === void 0 ? void 0 : _g.appendChild(parent);
            });
        }
    }
    Task.idCounter = 1000;
    return Task;
})();
const addNewTask = document.getElementById("addNewTask");
addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const title = document === null || document === void 0 ? void 0 : document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;
    const t1 = new Task(Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString(), privateList);
    addNewTask.reset();
});
const deleteTask = document.getElementById("delSelected");
deleteTask === null || deleteTask === void 0 ? void 0 : deleteTask.addEventListener("click", (ev) => {
    ev.preventDefault();
    const tasksToDelete = document.querySelectorAll(".tasktslist__task__actions input");
    let first = true;
    tasksToDelete.forEach((task) => {
        var _a, _b;
        if (task.checked) {
            if (first) {
                first = false;
                if (prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm") != "DELETE")
                    return;
            }
            const parent = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            let getId = (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id")) === null || _b === void 0 ? void 0 : _b.textContent;
            privateList.deleteTask(parseInt(getId));
            parent === null || parent === void 0 ? void 0 : parent.remove();
        }
    });
});
const cancel = document.getElementById("cancelEdit");
cancel.addEventListener("click", (ev) => {
    ev.preventDefault();
    const addNewTask = document.getElementById("addNewTask");
    addNewTask.reset();
    editMode(false);
});
function editMode(status) {
    const submit = document.getElementById("submitTask");
    submit === null || submit === void 0 ? void 0 : submit.classList.toggle('hide');
    const update = document.getElementById("updateTask");
    update === null || update === void 0 ? void 0 : update.classList.toggle('hide');
    const cancel = document.getElementById("cancelEdit");
    cancel === null || cancel === void 0 ? void 0 : cancel.classList.toggle('hide');
    document.querySelectorAll('.editBtn').forEach((btn) => {
        btn.disabled = (status);
    });
}
const privateList = new TaksList("Private");
const t1 = new Task(Task.idCounter++, "title1", "description1", "dateAndTime1", new Date().toLocaleString(), privateList);
const t2 = new Task(Task.idCounter++, "title2", "description2", "dateAndTime2", new Date().toLocaleString(), privateList);
const t3 = new Task(Task.idCounter++, "title3", "description3", "dateAndTime3", new Date().toLocaleString(), privateList);
