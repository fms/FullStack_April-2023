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


// Initial load of data
const tasksElement: HTMLDivElement | null = document.querySelector('#tasks');
const errorsElement: HTMLDivElement = document.querySelector('#errors')!;
handleGetTasks();

// Common response handling (and get tasks) from server
async function processResponse(response: Response) {
    try {
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        errorsElement.innerText = "";
        const { tasks }: { tasks: Task[] } = await response.json();
        renderTasks(tasks, tasksElement);
    } catch (error) {
        if (error instanceof Error) {
            errorsElement.innerText = error.message;
            console.error("Error: ", error.message);
        }
        else {
            errorsElement.innerText = error as string;
            console.error("Error: ", error);
        }
    }
}

async function handleGetTasks() {
    const response = await fetch('/api/tasks/get');

    await processResponse(response);
}

async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();

    // Get form fields
    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get('title');
    const description = formData.get('description');

    // New task to add
    const newTask = { title, description };

    const response = await fetch('/api/tasks/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });

    await processResponse(response);
}

async function handleDelete(id: string) {
    const body = { id };
    const response = await fetch('/api/tasks/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    await processResponse(response);
}

async function handleUpdateStatus(status: TaskStatus, id: string) {
    const body = { id, status };
    const response = await fetch('/api/tasks/update', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    await processResponse(response);
}

function renderTask(body: HTMLDivElement, task: Task) {
    try {
        const title = createElement("div", "task", task.title);
        const description = createElement("div", "task", task.description);

        if (task.status === TaskStatus.done) {
            title.classList.add("task-done");
            description.classList.add("task-done");
        }
        
        body.appendChild(title);
        body.appendChild(description);

        const checkbox = createInputElement("checkbox", "checkbox", () => handleUpdateStatus(task.status === TaskStatus.done ? TaskStatus.todo : TaskStatus.done, task.id));
        checkbox.checked = (task.status === TaskStatus.done);
        body.appendChild(checkbox);
        body.appendChild(createInputElement("button", "task", () => handleDelete(task.id), "Delete"));
    } catch (error) {
        console.error(error);
    }
}

function renderTasks(tasks: Task[], div: HTMLDivElement | null) {
    try {
        if (!div) {
            throw new Error("no div element");
        }

        div.replaceChildren();
        if (tasks.length !== 0) {
            div.append(...createHeader());
            tasks.forEach(task => renderTask(div, task));
        }
    } catch (error) {
        console.error(error);
    }
}

function createElement(tagName: string, className: string, content: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    return element;
}

function createInputElement(inputType: string, className: string, handler: ((event: Event) => void) | null, content: string = ""): HTMLInputElement {
    const element = document.createElement("input");
    element.type = inputType;
    element.className = className;
    if (handler) {
        element.addEventListener("click", handler);
    }
    if (content) {
        element.value = content;
    }
    return element;
}

function createHeader(): Node[] {
    return [
        createElement("div", "header", "Title"),
        createElement("div", "header", "Description"),
        createElement("div", "header", "Done?"),
        createElement("div", "header", "")
    ];
}