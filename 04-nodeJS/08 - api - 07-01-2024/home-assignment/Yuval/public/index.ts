interface Task {
    id: number,
    title: string,
    description: string,
    status: Status
}

enum Status {
    TO_DO = "To-Do",
    DONE = "Done"
}

const rootElement = document.querySelector(".root") as HTMLDivElement;
const taskListElement = document.querySelector(".task_list") as HTMLDivElement;
const form = document.querySelector("form") as HTMLFormElement;
const addTaskButton = document.querySelector("#addTaskButton") as HTMLButtonElement;

addTaskButton.addEventListener('click', addTask);

async function getTasks() {
    try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderTasks(taskListElement, data.tasks);

    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

function renderTasks(element: HTMLDivElement, tasks: Task[]) {
    element.replaceChildren();
    const header = document.createElement("h3");
    header.innerText = "Your Tasks:";
    tasks.map(task => {
        const taskLine = document.createElement("p");
        taskLine.innerText = `ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`;
        if(task.status === Status.DONE) {
            taskLine.style.textDecoration = "line-through";
        }
        const taskButtons = document.createElement("div");
        taskButtons.innerHTML = `
        <button onclick="changeStatus('${task.id}')">Change task status</button> 
        <button onclick="deleteProduct('${task.id}')">Delete</button>`
        element.appendChild(taskLine);
        element.appendChild(taskButtons);
    }).join('<hr>');
}

async function addTask(ev: Event) {
    ev.preventDefault();
    try {
        const taskTitle = (form.querySelector('[name="title"]') as HTMLInputElement).value;
        const taskDescription = (form.querySelector('[name="description"]') as HTMLInputElement).value;
        const response = await fetch("/api/tasks/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title: taskTitle, description: taskDescription })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        form.reset();
        console.log(data);
        renderTasks(taskListElement, data.tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

async function changeStatus(id: number) {
    try {
        console.log(id);
        const response = await fetch(`/api/tasks/status`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(id)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderTasks(rootElement, data.tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }    
    }
}

async function deleteProduct(id: number) {
    try {
        console.log(id);
        const response = await fetch("/api/tasks/delete", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderTasks(rootElement, data.tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
