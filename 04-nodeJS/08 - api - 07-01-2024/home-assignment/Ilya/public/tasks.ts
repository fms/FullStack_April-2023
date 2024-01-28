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

//get tasks from server
async function processResponse(response: Response) {
    try {
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const { tasks }: { tasks: Task[] } = await response.json();
        renderTasks(tasks, tasksElement);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error(error);
        }
    }
}

const tasksElement: HTMLDivElement | null = document.querySelector('#tasks');

async function handleGetTasks() {
    const response = await fetch('/api/tasks/get');

    await processResponse(response);
}

async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();

    // Get form fields
    const formData = new FormData(event.currentTarget as HTMLFormElement);
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

function renderTask(task: Task) {
    try {
        const html = task.status === TaskStatus.todo
            ? `<li onclick="handleUpdateStatus('done', '${task.id}')">${task.title} - ${task.description}</li>`
            :
            `<li style="text-decoration: line-through;" onclick="handleUpdateStatus('todo', '${task.id}')">${task.title} - ${task.description}</li>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderTasks(tasks: Task[], div: HTMLDivElement | null) {
    try {
        if (!div) {
            throw new Error("no div element");
        }

        let html = "<ul>";
        html += tasks.map(task => renderTask(task)).join("");
        html += "</ul>";

        div.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}