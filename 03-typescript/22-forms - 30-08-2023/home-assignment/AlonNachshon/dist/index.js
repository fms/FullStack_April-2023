"use strict";
let TaskList = /** @class */ (() => {
    class TaskList {
        constructor(name) {
            this.name = name;
            this.tasks = new Array();
            TaskList.listsNames.set(name, this);
            this.createTaskList();
            // console.log(this)
        }
        // public copyConstructor(taskList:TaskList){
        //     this.name = TaskList.name;
        //     this.tasks = TaskList.tasks;
        //     TaksList.listsNames.set(this.name, this);
        //     this.createTaskList();
        // }
        addTaskToList(task) {
            var _a;
            this.tasks.push(task);
            (_a = Task.tasksMap.get(task.id)) === null || _a === void 0 ? void 0 : _a.list = this.name;
            // console.log("added task to list: " +Task.tasksMap.get(task.id)?.list);
            localStorage.setItem(this.name, JSON.stringify(this));
        }
        deleteTaskFromList(task) {
            this.tasks = this.tasks.filter((t) => t != task);
            // console.log("delete task from list: "+ this.tasks)
            localStorage.setItem(this.name, JSON.stringify(this));
        }
        addDeleteEventListener() {
            /**
             * Del a task event listener
             */
            const deleteTask = document.querySelector(`#delSelected-${this.name}`);
            // console.log(`#delSelected-${this.name}`);
            // console.log(deleteTask);
            deleteTask === null || deleteTask === void 0 ? void 0 : deleteTask.addEventListener("click", (ev) => {
                ev.preventDefault();
                // console.log("del");
                const tasksToDelete = document.querySelectorAll(`.tasktslist__task__actions-${this.name} input`);
                let first = true;
                tasksToDelete.forEach((task) => {
                    var _a, _b, _c;
                    if (task.checked) {
                        if (first) {
                            first = false;
                            if (prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm") != "DELETE")
                                return;
                        }
                        const parent = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                        // console.log(parent);
                        const taskIdDiv = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id");
                        const taskId = taskIdDiv === null || taskIdDiv === void 0 ? void 0 : taskIdDiv.textContent;
                        (_b = TaskList.listsNames.get(this.name)) === null || _b === void 0 ? void 0 : _b.deleteTaskFromList(Task.tasksMap.get(parseInt(taskId)));
                        (_c = Task.tasksMap.get(parseInt(taskId))) === null || _c === void 0 ? void 0 : _c.deleteTask(parseInt(taskId));
                        parent === null || parent === void 0 ? void 0 : parent.remove();
                    }
                });
            });
        }
        createTaskList() {
            const newTaskList = document.createElement("div");
            newTaskList.classList.add(`tasktslist-${this.name}`);
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("tasktslist__task");
            taskDiv.classList.add("titles");
            const taskDetails = [
                "Time Created",
                "Task Id",
                "Task Title",
                "Task Description",
                "Task Date",
                "Delete",
                "Edit",
                "done?"
            ];
            const taskClasses = [
                "tasktslist__task__created",
                "tasktslist__task__id",
                "tasktslist__task__title",
                "tasktslist__task__description",
                "tasktslist__task__date",
                "tasktslist__task__actions",
                "tasktslist__task__edit",
                "tasktslist__task__done"
            ];
            for (const detail of taskDetails) {
                const detailDiv = document.createElement("div");
                detailDiv.classList.add(`${taskClasses[taskDetails.indexOf(detail)]}`);
                detailDiv.textContent = detail;
                taskDiv.appendChild(detailDiv);
            }
            const h2 = document.createElement("h2");
            const hr1 = document.createElement("hr");
            const hr2 = document.createElement("hr");
            const deleteSelectedButton = document.createElement("input");
            deleteSelectedButton.type = "submit";
            deleteSelectedButton.value = "Delete Selected";
            deleteSelectedButton.id = `delSelected-${this.name}`;
            h2.textContent = this.name;
            newTaskList.appendChild(h2);
            // newTaskList.appendChild(hr1);
            newTaskList.appendChild(taskDiv);
            newTaskList.appendChild(hr2);
            newTaskList.appendChild(deleteSelectedButton);
            const main = document.querySelector(".listContainer");
            main === null || main === void 0 ? void 0 : main.appendChild(newTaskList);
            this.addDeleteEventListener();
            localStorage.setItem(this.name, JSON.stringify(this));
        }
    }
    TaskList.listsNames = new Map(); /* Map of Task lists*/
    return TaskList;
})();
let Task = /** @class */ (() => {
    class Task {
        constructor(id, title, description, taskDayTime, dateStemp, list, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.taskDayTime = taskDayTime;
            this.dateStemp = dateStemp;
            this.status = false;
            this.list = "";
            this.addTask(id);
            // console.log(this)
        }
        addTask(id) {
            Task.tasksMap.set(this.id, this);
            console.log(Task.tasksMap.get(this.id));
            // localStorage.setItem(this.id.toString(),JSON.stringify(this));
        }
        deleteTask(id) {
            Task.tasksMap.delete(this.id);
            console.log(Task.tasksMap.get(this.id));
            // localStorage.removeItem(this.id.toString());
        }
        setTask(selectedList) {
            var _a;
            /**
             * Task row
             */
            const taskContainer = document.createElement("div");
            taskContainer.className = "tasktslist__task";
            /**
             * Tasks fields start
             */
            const timeCreated = document.createElement("div");
            timeCreated.className = "tasktslist__task__created";
            timeCreated.textContent = this.dateStemp;
            const taskId = document.createElement("div");
            taskId.className = "tasktslist__task__id";
            taskId.id = `${this.id}`;
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
            taskActions.className = `tasktslist__task__actions-${selectedList}`;
            taskActions.classList.add(`tasktslist__task__actions`);
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
            editBtn.className = `editBtn`;
            editTask.className = "tasktslist__task__edit";
            editTask.appendChild(editBtn);
            /** End */
            /** appending task to container*/
            taskContainer.appendChild(timeCreated);
            taskContainer.appendChild(taskId);
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDescription);
            taskContainer.appendChild(taskDate);
            taskContainer.appendChild(taskActions);
            taskContainer.appendChild(editTask);
            taskContainer.appendChild(markAsDone);
            /** Appending the last task to the list */
            const lastTask = document.querySelector(`.tasktslist-${selectedList}`);
            const titleTasks = lastTask === null || lastTask === void 0 ? void 0 : lastTask.querySelector(".tasktslist__task");
            titleTasks === null || titleTasks === void 0 ? void 0 : titleTasks.insertAdjacentElement("afterend", taskContainer);
            editBtn.addEventListener("click", function (ev) {
                ev.preventDefault();
                editMode(true);
                const title = document.getElementById("title");
                const description = document.getElementById("description");
                const dateAndTime = document.getElementById("dateAndTime");
                const taskLine = editBtn.closest(".tasktslist__task");
                const taskIdDiv = taskLine === null || taskLine === void 0 ? void 0 : taskLine.querySelector(".tasktslist__task__id");
                const taskId = taskIdDiv === null || taskIdDiv === void 0 ? void 0 : taskIdDiv.textContent;
                Task.updateTask = Task.tasksMap.get(parseInt(taskId));
                title.value = Task.updateTask.title;
                console.log(title.value);
                description.value = Task.updateTask.description;
                dateAndTime.value = Task.updateTask.taskDayTime;
                // selectTask.value = "*";
            });
            /*
            *  Added event listener to mark down and move it down.
            */
            isDone.addEventListener("change", (ev) => {
                var _a, _b, _c, _d, _e, _f;
                const parent = (_a = isDone.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__title")) === null || _b === void 0 ? void 0 : _b.classList.toggle("--done");
                (_c = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__description")) === null || _c === void 0 ? void 0 : _c.classList.toggle("--done");
                (_d = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__date")) === null || _d === void 0 ? void 0 : _d.classList.toggle("--done");
                (_e = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id")) === null || _e === void 0 ? void 0 : _e.classList.toggle("--done");
                (_f = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__created")) === null || _f === void 0 ? void 0 : _f.classList.toggle("--done");
                this.status ? false : true;
                parent === null || parent === void 0 ? void 0 : parent.insertAdjacentElement("afterend", parent);
            });
            (_a = document.getElementById("adsdNewTask")) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide');
        }
    }
    Task.idCounter = 1000;
    Task.tasksMap = new Map(); /* Map of Task lists*/
    return Task;
})();
/**
 * Adding  event listener for new task
 */
const addNewTask = document.getElementById("addNewTask");
addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const title = document === null || document === void 0 ? void 0 : document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;
    const selectTask = document.getElementById("chooseTaskList");
    const selectedList = selectTask === null || selectTask === void 0 ? void 0 : selectTask.value;
    const list = TaskList.listsNames.get(selectedList);
    const formatedDate = new Date(dateAndTime);
    let dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear();
    // console.log(dateString);
    // dateString.
    const t1 = new Task(Task.idCounter++, title, description, dateAndTime.toLocaleString(), new Date().toLocaleString());
    t1.setTask(selectedList);
    list === null || list === void 0 ? void 0 : list.addTaskToList(t1);
    addNewTask.reset();
    // addNewTask.classList.toggle('hide');
    /*If it's the first List and first task=>  show titles */
    if ((list === null || list === void 0 ? void 0 : list.tasks.length) == 1 && TaskList.listsNames.size == 1) {
        /**/
        const listContainer = document.querySelector(".listContainer");
        listContainer === null || listContainer === void 0 ? void 0 : listContainer.classList.remove('hide');
    }
});
/**
 * Cancel edit
 */
const cancel = document.getElementById("cancelEdit");
cancel.addEventListener("click", (ev) => {
    ev.preventDefault();
    const addNewTask = document.getElementById("addNewTask");
    addNewTask.reset();
    editMode(false);
});
/**
 *
 *  edit mode , disable buttons and show update and cancel
 *
 */
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
/**
 * Add new task list, first use of system
 */
const newTaskList = document.getElementById("newTaskList");
newTaskList === null || newTaskList === void 0 ? void 0 : newTaskList.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const listName = document.getElementById("taskListName");
    const newList = new TaskList(listName.value);
    newTaskList.reset();
    const addNewTask = document.getElementById("addNewTask");
    addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.classList.toggle('hide');
    newTaskList.classList.toggle('hide');
    // console.log(TaskList.listsNames);
    const selectTask = document.getElementById("chooseTaskList");
    const option = document.createElement("option");
    option.value = newList.name;
    option.textContent = newList.name;
    selectTask === null || selectTask === void 0 ? void 0 : selectTask.appendChild(option);
});
/*
* Add new Task list when already in tasks
*/
const addAnotherList = document.getElementById("addNewTaskList");
addAnotherList === null || addAnotherList === void 0 ? void 0 : addAnotherList.addEventListener("click", (ev) => {
    ev.preventDefault();
    const newTaskList = document.getElementById("newTaskList");
    newTaskList === null || newTaskList === void 0 ? void 0 : newTaskList.classList.toggle('hide');
    const addNewTask = document.getElementById("addNewTask");
    addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.classList.toggle('hide');
});
const editbtns = document.querySelectorAll('.editBtn');
const update = document.getElementById("updateTask");
update === null || update === void 0 ? void 0 : update.addEventListener("click", (ev) => {
    var _a;
    ev.preventDefault();
    if (Task.updateTask == null)
        return;
    /**
     * Getting elements value from form
     */
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dateAndTime = document.getElementById("dateAndTime");
    const selectTask = document.getElementById("chooseTaskList");
    const selectedList = selectTask === null || selectTask === void 0 ? void 0 : selectTask.value;
    const taskId = document.getElementById(Task.updateTask.id.toString());
    const task = taskId.closest(".tasktslist__task");
    const titleDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__title");
    const descriptionDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__description");
    const dateAndTimeDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__date");
    const list = TaskList.listsNames.get(selectedList);
    if (selectedList != "") { /* Selected list is not an empty string, so need to change between lists (assuming) in the future take care of same list choosen*/
        (_a = TaskList.listsNames.get(Task.updateTask.list)) === null || _a === void 0 ? void 0 : _a.deleteTaskFromList(Task.updateTask);
        Task.updateTask.list = selectedList;
        list === null || list === void 0 ? void 0 : list.addTaskToList(Task.updateTask);
        const taskList = document === null || document === void 0 ? void 0 : document.querySelector(`.tasktslist-${Task.updateTask.list}`);
        const lastTask = taskList === null || taskList === void 0 ? void 0 : taskList.querySelector('.tasktslist__task');
        lastTask === null || lastTask === void 0 ? void 0 : lastTask.insertAdjacentElement("afterend", task);
    }
    // const formatedDate = new Date(dateAndTime);
    // let dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear();
    // console.log(dateString);
    titleDiv.textContent = title.value;
    descriptionDiv.textContent = description.value;
    dateAndTimeDiv === null || dateAndTimeDiv === void 0 ? void 0 : dateAndTimeDiv.textContent = dateAndTime.value.toLocaleString();
    // const taskId = taskIdDiv.textContent;
    Task.updateTask.title = title.value;
    Task.updateTask.description = description.value;
    Task.updateTask.taskDayTime = dateAndTime.toLocaleString();
    addNewTask.reset();
    editMode(false);
    // addNewTask.classList.toggle('hide');
    /*If it's the first List and first task=>  show titles */
    if ((list === null || list === void 0 ? void 0 : list.tasks.length) == 1 && TaskList.listsNames.size == 1) {
        /**/
        const listContainer = document.querySelector(".listContainer");
        listContainer === null || listContainer === void 0 ? void 0 : listContainer.classList.remove('hide');
    }
});
function initPage() {
    let tasklist = new Array();
    let tasks = new Array();
    for (let i = 0; i < localStorage.length; i++) {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
         */
        // console.log(localStorage.getItem(localStorage.key(i)));
        const objects = Array();
        objects.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // console.log(obj);
        objects.forEach((list) => {
            // const newList = new TaskList(list.name);
            // tasklist.push(newList);
            // console.log(list);
            list.tasks.forEach((task) => {
                console.log("in new task from localStorage");
                const newTask = new Task(task.id, task.title, task.description, task.taskDayTime, task.dateStemp, task.list, task.status);
                newTask.setTask(list.name);
                // console.log(newTask);
                // list?.addTaskToList(t1);
            });
        });
    }
    /**
     * Maybe keep the tasks not in local storage? since i have all the object information in task list?
     *
    */
    if (localStorage.length > 0) {
        addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.classList.toggle('hide');
        newTaskList.classList.toggle('hide');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    initPage();
});
/**
 * TODO:
 * First system use should show the lists...
 *
 * Fix Add new List after first use.
 *
 * remove list if all tasks are deleted
 *
 * change the task date format to be like the date format in a task
 *
 * add all information of a task in storage like thought in the class
 *
 * use find where evere i can with objects.
 *  *
 * Deleted items will be removed from list, but will stay in task object as archives
 *
 * Check if list name already exsist before creating it.
 *
 *
 *
 *
 */
