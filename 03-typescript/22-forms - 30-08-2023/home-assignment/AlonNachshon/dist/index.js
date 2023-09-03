"use strict";
class taksList {
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
        updateTask() {
            const taskTitle = document.createElement("div");
            taskTitle.className = "tasktslist__task__title";
            taskTitle.textContent = this.title;
            const taskDescription = document.createElement("div");
            taskDescription.className = "tasktslist__task__description";
            taskDescription.textContent = this.description;
            const taskDate = document.createElement("div");
            taskDate.className = "tasktslist__task__date";
            taskDate.textContent = this.taskDayTime;
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
                var _a, _b, _c, _d;
                ev.preventDefault();
                console.log("edit");
                const parent = (_a = editBtn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                let getId = (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id")) === null || _b === void 0 ? void 0 : _b.textContent;
                const title = document.getElementById("title");
                const description = document.getElementById("description");
                const dateAndTime = document.getElementById("dateAndTime");
                title.value = this.title;
                description.value = this.description;
                dateAndTime.value = this.taskDayTime;
                const submit = (_c = document.getElementById("submitTask")) === null || _c === void 0 ? void 0 : _c.classList.toggle('hide');
                const update = document.getElementById("updateTask");
                update === null || update === void 0 ? void 0 : update.classList.toggle('hide');
                const cancel = (_d = document.getElementById("cancelEdit")) === null || _d === void 0 ? void 0 : _d.classList.toggle('hide');
                editBtn.disabled = true;
                update === null || update === void 0 ? void 0 : update.addEventListener("click", (ev) => {
                    console.log("in update");
                    ev.preventDefault();
                    console.log(this.taskDayTime);
                    this.title = title === null || title === void 0 ? void 0 : title.value;
                    this.description = description === null || description === void 0 ? void 0 : description.value;
                    this.taskDayTime = dateAndTime === null || dateAndTime === void 0 ? void 0 : dateAndTime.value;
                    // parent?.querySelector(".tasktslist__task__title")?.textContent = this.title;
                    // parent?.querySelector(".tasktslist__task__description")?.textContent = this.description;
                    // parent?.querySelector(".tasktslist__task__date")?.textContent = this.taskDayTime;
                    editBtn.disabled = false;
                });
            });
        }
    }
    Task.idCounter = 1000;
    return Task;
})();
/*
...Also Delete the class instance by pointing to null....
*/
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
    console.log(tasksToDelete);
    console.log(tasksToDelete.length);
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
const privateList = new taksList("Private");
const t1 = new Task(Task.idCounter++, "title1", "description1", "dateAndTime1", new Date().toLocaleString(), privateList);
const t2 = new Task(Task.idCounter++, "title2", "description2", "dateAndTime2", new Date().toLocaleString(), privateList);
const t3 = new Task(Task.idCounter++, "title3", "description3", "dateAndTime3", new Date().toLocaleString(), privateList);
