const mainTasksDiv = document.querySelector("#tasks-main") as HTMLDivElement;
const mainTasksBodyDiv = document.querySelector(".tasks-main-body") as HTMLDivElement;

enum TaskStatus {
    todo,
    done
}

interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

let editMode = false;

function renderTasks(tasks: Task[]) {
    mainTasksBodyDiv.replaceChildren();

    tasks.forEach(task => createTaskDom(task));
}

function createTaskDom(task: Task) {
    const taskDiv = document.createElement("div") as HTMLDivElement;
    taskDiv.classList.add("task-div");
    const newTitleSpan = createspan("span-title", task.title);
    const newDescriptionSpan = createspan("span-description", task.description);
    const newEditButton = createButton("edit-button", "Edit Task", () => editTask(taskDiv, task));
    const newCheckBox = createCheckBox("taskCheckbox");
    newCheckBox.addEventListener("click", () => checkBoxHandler(task.id, task.status));
    newCheckBox.checked = (task.status === TaskStatus.done);
    taskDiv.appendChild(newCheckBox);
    taskDiv.appendChild(newTitleSpan);
    taskDiv.appendChild(newDescriptionSpan);
    taskDiv.appendChild(newEditButton);
    mainTasksBodyDiv.appendChild(taskDiv);
}

function editTask(element: HTMLDivElement, task: Task) {
    if (editMode) {
        return;
    }
    const newTitleInput = createInput("title-input", task.title, "text");
    const newDescriptionInput = createInput("description-input", task.description, "text");
    element.appendChild(newTitleInput);
    element.appendChild(newDescriptionInput);
    const newUpdateButton = createButton("update-button", "Update Task", () => updateTask(task.id, task.status, newTitleInput.value, newDescriptionInput.value));
    const newDeleteButton = createButton("delete-button", "Delete Task", () => deleteTask(task.id));
    element.appendChild(newUpdateButton);
    element.appendChild(newDeleteButton);
    editMode = true;
}

async function processResponse(response: Response) {
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const { tasks }: { tasks: Task[] } = await response.json();
        renderTasks(tasks);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.error(error);
        }
    }
}

async function getTasks() {
    const response = await fetch('/api/tasks/get');
    hideTasks();
    await processResponse(response);
}

async function submitTask(event: SubmitEvent) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const formData = new FormData(target.parentElement as HTMLFormElement);
    const title = formData.get('title');
    const description = formData.get('description');

    const newTask = { title, description };
    const response = await fetch('/api/tasks/add', {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(newTask)
    });

    await processResponse(response);
}

async function deleteTask(id: string) {
    const body = { id };
    const response = await fetch('/api/tasks/delete', {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    editMode = false;
    await processResponse(response);
}

async function updateTask(id: string, status: TaskStatus, title: string, description: string) {
    const body = { title, description, status, id };
    const response = await fetch('/api/tasks/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    editMode = false;
    await processResponse(response);
}

async function checkBoxHandler(id: string, status: TaskStatus) {
    const body = { id, status};
    const response = await fetch('/api/tasks/updateStatus', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    await processResponse(response);
}

async function clearTasksCheckbox() {
    
}


function hideTasks(): void {
    const getTasksButton = document.querySelector("#show-tasks") as HTMLButtonElement;
    const hideTasksButton = document.querySelector("#hide-tasks") as HTMLButtonElement;
    getTasksButton.classList.toggle("invisible");
    hideTasksButton.classList.toggle("invisible");
    mainTasksBodyDiv.classList.toggle("invisible");
}

function createButton(className: string, value: string, handler: () => void): HTMLButtonElement {
    const newButton = document.createElement("button") as HTMLButtonElement;
    newButton.classList.add(className);
    newButton.textContent = value;
    newButton.addEventListener("click", handler);
    return newButton;
}

function createspan(className: string, value: string | number,): HTMLSpanElement {
    const newSpan = document.createElement("span") as HTMLSpanElement;
    newSpan.textContent = value.toString();
    newSpan.classList.add(className);
    return newSpan;
}

function createInput(className: string, placeholder: string, type: string): HTMLInputElement {
    const newInput = document.createElement("input") as HTMLInputElement;
    newInput.placeholder = placeholder;
    newInput.classList.add(className);
    newInput.type = type;
    return newInput;
}

function createCheckBox(className: string): HTMLInputElement {
    const newCheckbox = document.createElement("input") as HTMLInputElement;
    newCheckbox.classList.add(className);
    newCheckbox.type = "checkbox";
    return newCheckbox;
}