"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskSystem = function TaskSystem() {
  _classCallCheck(this, TaskSystem);

  this.idCounter = 1000;
  this.listsNames = new Map();
  this.tasksMap = new Map();
  /* Map of Task lists*/

  this.idCounter = 1000;
  this.listsNames = new Map();
  this.tasksMap = new Map();
  this.updateTask = new Task(0, "", "", "", "");
};

var TaskList =
/*#__PURE__*/
function () {
  function TaskList(name) {
    _classCallCheck(this, TaskList);

    this.name = name;
    this.tasks = new Array();
    taskHomePage.listsNames.set(name, this);
    this.createTaskList(); // console.log(this)
  } // public copyConstructor(taskList:TaskList){
  //     this.name = TaskList.name;
  //     this.tasks = TaskList.tasks;
  //     TaksList.listsNames.set(this.name, this);
  //     this.createTaskList();
  // }


  _createClass(TaskList, [{
    key: "addTaskToList",
    value: function addTaskToList(task) {
      var _a;

      this.tasks.push(task);
      (_a = taskHomePage.tasksMap.get(task.id)) === null || _a === void 0 ? void 0 : _a.list = this.name; // console.log("added task to list: " +Task.tasksMap.get(task.id)?.list);

      localStorage.setItem(this.name, JSON.stringify(this));
    }
  }, {
    key: "deleteTaskFromList",
    value: function deleteTaskFromList(task) {
      this.tasks = this.tasks.filter(function (t) {
        return t != task;
      }); // console.log("delete task from list: "+ this.tasks)

      localStorage.setItem(this.name, JSON.stringify(this));
    }
  }, {
    key: "addDeleteEventListener",
    value: function addDeleteEventListener() {
      var _this = this;

      /**
       * Del a task event listener
       */
      var deleteTask = document.querySelector("#delSelected-".concat(this.name)); // console.log(`#delSelected-${this.name}`);
      // console.log(deleteTask);

      deleteTask === null || deleteTask === void 0 ? void 0 : deleteTask.addEventListener("click", function (ev) {
        ev.preventDefault(); // console.log("del");

        var tasksToDelete = document.querySelectorAll(".tasktslist__task__actions-".concat(_this.name, " input"));
        var first = true;
        tasksToDelete.forEach(function (task) {
          var _a, _b, _c;

          if (task.checked) {
            if (first) {
              first = false;
              if (prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm") != "DELETE") return;
            }

            var parent = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement; // console.log(parent);

            var taskIdDiv = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id");
            var taskId = taskIdDiv === null || taskIdDiv === void 0 ? void 0 : taskIdDiv.textContent;
            (_b = taskHomePage.listsNames.get(_this.name)) === null || _b === void 0 ? void 0 : _b.deleteTaskFromList(taskHomePage.tasksMap.get(parseInt(taskId)));
            (_c = taskHomePage.tasksMap.get(parseInt(taskId))) === null || _c === void 0 ? void 0 : _c.deleteTask(parseInt(taskId));
            parent === null || parent === void 0 ? void 0 : parent.remove();
          }
        });
      });
    }
  }, {
    key: "createTaskList",
    value: function createTaskList() {
      var newTaskList = document.createElement("div");
      newTaskList.classList.add("tasktslist-".concat(this.name));
      var taskDiv = document.createElement("div");
      taskDiv.classList.add("tasktslist__task");
      taskDiv.classList.add("titles");
      var taskDetails = ["Time Created", "Task Id", "Task Title", "Task Description", "Task Date", "Delete", "Edit", "done?"];
      var taskClasses = ["tasktslist__task__created", "tasktslist__task__id", "tasktslist__task__title", "tasktslist__task__description", "tasktslist__task__date", "tasktslist__task__actions", "tasktslist__task__edit", "tasktslist__task__done"];

      for (var _i = 0, _taskDetails = taskDetails; _i < _taskDetails.length; _i++) {
        var detail = _taskDetails[_i];
        var detailDiv = document.createElement("div");
        detailDiv.classList.add("".concat(taskClasses[taskDetails.indexOf(detail)]));
        detailDiv.textContent = detail;
        taskDiv.appendChild(detailDiv);
      }

      var h2 = document.createElement("h2");
      var hr1 = document.createElement("hr");
      var hr2 = document.createElement("hr");
      var deleteSelectedButton = document.createElement("input");
      deleteSelectedButton.type = "submit";
      deleteSelectedButton.value = "Delete Selected";
      deleteSelectedButton.id = "delSelected-".concat(this.name);
      h2.textContent = this.name;
      newTaskList.appendChild(h2); // newTaskList.appendChild(hr1);

      newTaskList.appendChild(taskDiv);
      newTaskList.appendChild(hr2);
      newTaskList.appendChild(deleteSelectedButton);
      var main = document.querySelector(".listContainer");
      main === null || main === void 0 ? void 0 : main.appendChild(newTaskList);
      this.addDeleteEventListener();
      localStorage.setItem(this.name, JSON.stringify(this));
    }
  }]);

  return TaskList;
}();

var Task =
/*#__PURE__*/
function () {
  function Task(id, title, description, taskDayTime, dateStemp, list, status) {
    _classCallCheck(this, Task);

    this.id = id;
    this.title = title;
    this.description = description;
    this.taskDayTime = taskDayTime;
    this.dateStemp = dateStemp;
    this.status = false;
    this.list = "";
    this.addTask(id); // console.log(this)
  }

  _createClass(Task, [{
    key: "addTask",
    value: function addTask(id) {
      taskHomePage.tasksMap.set(this.id, this);
      console.log(taskHomePage.tasksMap.get(this.id)); // localStorage.setItem(this.id.toString(),JSON.stringify(this));
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      taskHomePage.tasksMap["delete"](this.id);
      console.log(taskHomePage.tasksMap.get(this.id)); // localStorage.removeItem(this.id.toString());
    }
  }, {
    key: "setTask",
    value: function setTask(selectedList) {
      var _this2 = this;

      var _a;
      /**
       * Task row
       */


      var taskContainer = document.createElement("div");
      taskContainer.className = "tasktslist__task";
      /**
       * Tasks fields start
       */

      var timeCreated = document.createElement("div");
      timeCreated.className = "tasktslist__task__created";
      timeCreated.textContent = this.dateStemp;
      var taskId = document.createElement("div");
      taskId.className = "tasktslist__task__id";
      taskId.id = "".concat(this.id);
      taskId.textContent = this.id.toString();
      var taskTitle = document.createElement("div");
      taskTitle.className = "tasktslist__task__title";
      taskTitle.textContent = this.title;
      var taskDescription = document.createElement("div");
      taskDescription.className = "tasktslist__task__description";
      taskDescription.textContent = this.description;
      var taskDate = document.createElement("div");
      taskDate.className = "tasktslist__task__date";
      taskDate.textContent = this.taskDayTime;
      var taskActions = document.createElement("div");
      taskActions.className = "tasktslist__task__actions-".concat(selectedList);
      taskActions.classList.add("tasktslist__task__actions");
      var shouldDelete = document.createElement("input");
      shouldDelete.type = "checkbox";
      taskActions.appendChild(shouldDelete);
      var markAsDone = document.createElement("div");
      var isDone = document.createElement("input");
      isDone.type = "checkbox";
      markAsDone.className = "tasktslist__task__done";
      markAsDone.appendChild(isDone);
      var editTask = document.createElement("div");
      var editBtn = document.createElement("input");
      editBtn.type = "submit";
      editBtn.value = "Edit";
      editBtn.className = "editBtn";
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

      var lastTask = document.querySelector(".tasktslist-".concat(selectedList));
      var titleTasks = lastTask === null || lastTask === void 0 ? void 0 : lastTask.querySelector(".tasktslist__task");
      titleTasks === null || titleTasks === void 0 ? void 0 : titleTasks.insertAdjacentElement("afterend", taskContainer);
      editBtn.addEventListener("click", function (ev) {
        ev.preventDefault();
        editMode(true);
        var title = document.getElementById("title");
        var description = document.getElementById("description");
        var dateAndTime = document.getElementById("dateAndTime");
        var taskLine = editBtn.closest(".tasktslist__task");
        var taskIdDiv = taskLine === null || taskLine === void 0 ? void 0 : taskLine.querySelector(".tasktslist__task__id");
        var taskId = taskIdDiv === null || taskIdDiv === void 0 ? void 0 : taskIdDiv.textContent;
        taskHomePage.updateTask = taskHomePage.tasksMap.get(parseInt(taskId));
        title.value = taskHomePage.updateTask.title;
        console.log(title.value);
        description.value = taskHomePage.updateTask.description;
        dateAndTime.value = taskHomePage.updateTask.taskDayTime; // selectTask.value = "*";
      });
      /*
      *  Added event listener to mark down and move it down.
      */

      isDone.addEventListener("change", function (ev) {
        var _a, _b, _c, _d, _e, _f;

        var parent = (_a = isDone.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        (_b = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__title")) === null || _b === void 0 ? void 0 : _b.classList.toggle("--done");
        (_c = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__description")) === null || _c === void 0 ? void 0 : _c.classList.toggle("--done");
        (_d = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__date")) === null || _d === void 0 ? void 0 : _d.classList.toggle("--done");
        (_e = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__id")) === null || _e === void 0 ? void 0 : _e.classList.toggle("--done");
        (_f = parent === null || parent === void 0 ? void 0 : parent.querySelector(".tasktslist__task__created")) === null || _f === void 0 ? void 0 : _f.classList.toggle("--done");
        _this2.status ? false : true;
        parent === null || parent === void 0 ? void 0 : parent.insertAdjacentElement("afterend", parent);
      });
      (_a = document.getElementById("adsdNewTask")) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide');
    }
  }]);

  return Task;
}();
/**
 * Adding  event listener for new task
 */


var addNewTask = document.getElementById("addNewTask");
addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var title = document === null || document === void 0 ? void 0 : document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var dateAndTime = document.getElementById("dateAndTime").value;
  var selectTask = document.getElementById("chooseTaskList");
  var selectedList = selectTask === null || selectTask === void 0 ? void 0 : selectTask.value;
  var list = taskHomePage.listsNames.get(selectedList);
  var formatedDate = new Date(dateAndTime);
  var dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear(); // console.log(dateString);
  // dateString.

  var t1 = new Task(taskHomePage.idCounter++, title, description, dateAndTime.toLocaleString(), new Date().toLocaleString());
  t1.setTask(selectedList);
  list === null || list === void 0 ? void 0 : list.addTaskToList(t1);
  addNewTask.reset(); // addNewTask.classList.toggle('hide');

  /*If it's the first List and first task=>  show titles */

  if ((list === null || list === void 0 ? void 0 : list.tasks.length) == 1 && taskHomePage.listsNames.size == 1) {
    /**/
    var listContainer = document.querySelector(".listContainer");
    listContainer === null || listContainer === void 0 ? void 0 : listContainer.classList.remove('hide');
  }
});
/**
 * Cancel edit
 */

var cancel = document.getElementById("cancelEdit");
cancel.addEventListener("click", function (ev) {
  ev.preventDefault();
  var addNewTask = document.getElementById("addNewTask");
  addNewTask.reset();
  editMode(false);
});
/**
 *
 *  edit mode , disable buttons and show update and cancel
 *
 */

function editMode(status) {
  var submit = document.getElementById("submitTask");
  submit === null || submit === void 0 ? void 0 : submit.classList.toggle('hide');
  var update = document.getElementById("updateTask");
  update === null || update === void 0 ? void 0 : update.classList.toggle('hide');
  var cancel = document.getElementById("cancelEdit");
  cancel === null || cancel === void 0 ? void 0 : cancel.classList.toggle('hide');
  document.querySelectorAll('.editBtn').forEach(function (btn) {
    btn.disabled = status;
  });
}
/**
 * Add new task list, first use of system
 */


var newTaskList = document.getElementById("newTaskList");
newTaskList === null || newTaskList === void 0 ? void 0 : newTaskList.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var listName = document.getElementById("taskListName");
  var newList = new TaskList(listName.value);
  newTaskList.reset();
  var addNewTask = document.getElementById("addNewTask");
  addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.classList.toggle('hide');
  newTaskList.classList.toggle('hide'); // console.log(TaskList.listsNames);

  var selectTask = document.getElementById("chooseTaskList");
  var option = document.createElement("option");
  option.value = newList.name;
  option.textContent = newList.name;
  selectTask === null || selectTask === void 0 ? void 0 : selectTask.appendChild(option);
});
/*
* Add new Task list when already in tasks
*/

var addAnotherList = document.getElementById("addNewTaskList");
addAnotherList === null || addAnotherList === void 0 ? void 0 : addAnotherList.addEventListener("click", function (ev) {
  ev.preventDefault();
  var newTaskList = document.getElementById("newTaskList");
  newTaskList === null || newTaskList === void 0 ? void 0 : newTaskList.classList.toggle('hide');
  var addNewTask = document.getElementById("addNewTask");
  addNewTask === null || addNewTask === void 0 ? void 0 : addNewTask.classList.toggle('hide');
});
var editbtns = document.querySelectorAll('.editBtn');
var update = document.getElementById("updateTask");
update === null || update === void 0 ? void 0 : update.addEventListener("click", function (ev) {
  var _a;

  ev.preventDefault();
  if (taskHomePage.updateTask == null) return;
  /**
   * Getting elements value from form
   */

  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var dateAndTime = document.getElementById("dateAndTime");
  var selectTask = document.getElementById("chooseTaskList");
  var selectedList = selectTask === null || selectTask === void 0 ? void 0 : selectTask.value;
  var taskId = document.getElementById(taskHomePage.updateTask.id.toString());
  var task = taskId.closest(".tasktslist__task");
  var titleDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__title");
  var descriptionDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__description");
  var dateAndTimeDiv = task === null || task === void 0 ? void 0 : task.querySelector(".tasktslist__task__date");
  var list = taskHomePage.listsNames.get(selectedList);

  if (selectedList != "") {
    /* Selected list is not an empty string, so need to change between lists (assuming) in the future take care of same list choosen*/
    (_a = taskHomePage.listsNames.get(taskHomePage.updateTask.list)) === null || _a === void 0 ? void 0 : _a.deleteTaskFromList(taskHomePage.updateTask);
    taskHomePage.updateTask.list = selectedList;
    list === null || list === void 0 ? void 0 : list.addTaskToList(taskHomePage.updateTask);
    var taskList = document === null || document === void 0 ? void 0 : document.querySelector(".tasktslist-".concat(taskHomePage.updateTask.list));
    var lastTask = taskList === null || taskList === void 0 ? void 0 : taskList.querySelector('.tasktslist__task');
    lastTask === null || lastTask === void 0 ? void 0 : lastTask.insertAdjacentElement("afterend", task);
  } // const formatedDate = new Date(dateAndTime);
  // let dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear();
  // console.log(dateString);


  titleDiv.textContent = title.value;
  descriptionDiv.textContent = description.value;
  dateAndTimeDiv === null || dateAndTimeDiv === void 0 ? void 0 : dateAndTimeDiv.textContent = dateAndTime.value.toLocaleString(); // const taskId = taskIdDiv.textContent;

  taskHomePage.updateTask.title = title.value;
  taskHomePage.updateTask.description = description.value;
  taskHomePage.updateTask.taskDayTime = dateAndTime.toLocaleString();
  addNewTask.reset();
  editMode(false); // addNewTask.classList.toggle('hide');

  /*If it's the first List and first task=>  show titles */

  if ((list === null || list === void 0 ? void 0 : list.tasks.length) == 1 && taskHomePage.listsNames.size == 1) {
    /**/
    var listContainer = document.querySelector(".listContainer");
    listContainer === null || listContainer === void 0 ? void 0 : listContainer.classList.remove('hide');
  }
});

function initPage() {
  var tasklist = new Array();
  var tasks = new Array();

  for (var i = 0; i < localStorage.length; i++) {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
     */
    // console.log(localStorage.getItem(localStorage.key(i)));
    var objects = Array();
    objects.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); // console.log(obj);

    objects.forEach(function (list) {
      // const newList = new TaskList(list.name);
      // tasklist.push(newList);
      // console.log(list);
      list.tasks.forEach(function (task) {
        console.log("in new task from localStorage");
        var newTask = new Task(task.id, task.title, task.description, task.taskDayTime, task.dateStemp, task.list, task.status);
        newTask.setTask(list.name); // console.log(newTask);
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
/**?????? */


document.addEventListener('DOMContentLoaded', function () {
  initPage();
});
/**
 * #TODO:
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
 *
 * Deleted items will be removed from list, but will stay in task object as archives
 *
 * Check if list name already exsist before creating it.
 *
 * Fix Date Format.
 *
 * Class that holds the logic of the app -> hold the static Map() and array in it.
 *
 */