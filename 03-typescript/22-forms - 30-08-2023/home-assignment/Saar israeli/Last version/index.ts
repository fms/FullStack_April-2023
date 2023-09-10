let editMode = false;
let currentIndex: number | null;
const submitButton = document.getElementById("submit") as HTMLInputElement;
const cancelButton = document.getElementById("cancel") as HTMLInputElement;
const deleteButton = document.getElementById("delete") as HTMLInputElement;
const updateButton = document.getElementById("update") as HTMLInputElement;
const form = document.querySelector("#new-task-form") as HTMLFormElement;
const taskNameDiv = document.querySelector(".task-name") as HTMLDivElement;
const taskDetailsDiv = document.querySelector(".task-details") as HTMLDivElement;


class Tasks {
    constructor(
        public task: string,
        public details: string,
        public deadline: string,
        public checkedForDelete = false,
    ) { }
}

interface FormElements extends HTMLFormControlsCollection {
    task: HTMLInputElement;
    details: HTMLInputElement;
    deadline: HTMLInputElement;
}

let taskList = loadTasks();
updateRow();

function submitTask(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const element = form.elements as FormElements;

    let newTask: Tasks = {
        task: element.task.value,
        details: element.details.value,
        deadline: element.deadline.value,
        checkedForDelete: false,
    }


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
            taskList.forEach((task, index) => createTaskRow(taskNameDiv, taskDetailsDiv, task, index))
        }
    }
}

function createTaskRow(taskName: Element, taskDetails: Element, task: Tasks, index: number) {
    createNameRow(taskName, task, index);
    createDetailsRow(taskDetails, task, index);
}

function createNameRow(taskName: Element, task: Tasks, index: number) {
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

function createDetailsRow(taskDetails: Element, task: Tasks, index: number) {
    const taskDetailsNew = createElement("div", "task-details-new");
    taskDetailsNew.id = index.toString();
    taskDetailsNew.classList.add("hidden")
    const pDetails = createElement("p", "task-details-text", task.details);
    const dateTime = createInputNonEvent("datetime-local", "data-time", task.deadline);
    // const checkboxDetails = createInputElement("checkbox", "checkbox", markedCheckbox);
    taskDetailsNew.appendChild(pDetails);
    taskDetailsNew.appendChild(dateTime);
    // taskDetailsNew.appendChild(checkboxDetails);
    taskDetails.appendChild(taskDetailsNew);
}

function createElement(typeName: string, className: string, content: string = ""): HTMLElement {
    const element = document.createElement(typeName);
    element.classList.add(className);
    if (content) {
        element.textContent = content;
    }
    return element;
}

function createInputElement(inputType: string, className: string, handler: (event: Event) => void, content: string = ""): HTMLElement {
    const input = document.createElement("input");
    input.type = inputType;
    input.classList.add(className)
    input.addEventListener("click", handler)
    if (content) {
        input.value = content;
    }
    return input;
}

function createInputNonEvent(inputType: string, className: string, content: string = ""): HTMLElement {
    const input = document.createElement("input");
    input.type = inputType;
    input.classList.add(className)
    if (content) {
        input.value = content;
    }
    return input;
}

function selectRow(event: Event): void {
    let target = event.target as HTMLInputElement;
    let id = target.parentElement?.id;
    if (target) {
        let sameTaskDetailsId = document.querySelectorAll(".task-details-new");
        sameTaskDetailsId.forEach((task) => {
            if (task.classList.contains("show")) {
                task.classList.remove("show");
                task.classList.add("hidden")
            }
            if (task.id === id) {
                task.classList.remove("hidden");
                task.classList.add("show")
            }
        })
    }
}


function editRow(event: Event): void {
    let target = event.target as HTMLInputElement;
    let parent = target.parentElement;
    let parentId = parent?.id;
    currentIndex = parseInt(parentId!);
    const taskData = taskList[currentIndex];
    const element = form.elements as FormElements;

    if (!editMode) {
        element.task.value = taskData.task;
        element.details.value = taskData.details;
        element.deadline.value = taskData.deadline;
        toggleHidden()
        editMode = true;
    }

}

function cancelEdit(event: Event): void {
    let target = event.target as HTMLInputElement;
    if (target) {
        form.reset();
        toggleHidden()
        editMode = false;
        currentIndex = null;
    }
}
function updateSubmit(event: Event): void {
    const element = form.elements as FormElements;
    if (event) {
        let taskData = taskList[currentIndex!]
        taskData.task = element.task.value;
        taskData.details = element.details.value;
        taskData.deadline = element.deadline.value;
        editMode = false;
        toggleHidden()
        updateRow();
        form.reset();
        currentIndex = null;
    }
}


function deleteTasks(): void {
    taskList = taskList.filter((task) => !task.checkedForDelete);
    saveTasks();
    updateRow();
}


function toggleHidden(): void {
    cancelButton.classList.toggle("hidden");
    updateButton.classList.toggle("hidden");
    deleteButton.classList.toggle("hidden");
    submitButton.classList.toggle("hidden");
}

function markedCheckbox(event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    let parentId = parseInt(checkbox.parentElement?.id!);
    if (parentId !== -1) {
        taskList[parentId].checkedForDelete = checkbox.checked
    }
}

function saveTasks() {
    const taskListStringify = JSON.stringify(taskList);
    localStorage.setItem("Tasks", taskListStringify);
}

function loadTasks(): Tasks[] {
    const savedTasks = localStorage.getItem("Tasks");
    if (savedTasks) {
        return JSON.parse(savedTasks);
    }

    return new Array<Tasks>();
}