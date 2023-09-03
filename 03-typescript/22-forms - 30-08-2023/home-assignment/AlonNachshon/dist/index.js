"use strict";
let Task = /** @class */ (() => {
    class Task {
        constructor(id, title, description, taskDayTime, dateStemp) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.taskDayTime = taskDayTime;
            this.dateStemp = dateStemp;
            this.status = false;
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
            editTask.className = "tasktslist__task__edit";
            editTask.appendChild(editBtn);
            const btm;
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
        }
    }
    Task.idCounter = 0;
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
    const t1 = new Task(Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString());
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
            (_b = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        }
    });
});
const t1 = new Task(Task.idCounter++, "title", "description", "dateAndTime", new Date().toLocaleString());
const t2 = new Task(Task.idCounter++, "title", "description", "dateAndTime", new Date().toLocaleString());
