class Task {
    constructor(
        public id: number,
        public taskname: string,
        public description: string,
        public status: Status) {
    }
}

enum Status {
    ToDo = "ToDo",
    DONE = "DONE"
}

const addTaskButton = document.querySelector('#addTask') as HTMLButtonElement;

const h2 = document.querySelector('h2') as HTMLDivElement;
const h3 = document.querySelector('h3') as HTMLDivElement;

const statusSelectElement = document.querySelector('#status') as HTMLSelectElement;
const showDiv = document.querySelector('.showDiv') as HTMLDivElement;
const taskList: Task[] = [];
let statusVal: Status;

const inputValues: Record<string, HTMLInputElement> = {
    taskNameInput: document.querySelector('#taskname')!,
    taskDesInput: document.querySelector('#taskdes')!,
    newtaskName: document.querySelector('#newtaskName')!,
    newtaskDes: document.querySelector('#newtaskDes')!,
}
const buttons: Record<string, HTMLButtonElement | null> = {
    changedetails: document.querySelector('#changeDetails'),
    updateName: document.querySelector('#updateNameButton'),
    delete: document.querySelector('#deleteButton'),
    replace: document.querySelector('#replaceButton'),
    changeStatus: document.querySelector('#changeStatusButton'),
};

getTasks();

buttons.changedetails?.addEventListener('click', () => {
    showElements(buttons.updateName, buttons.delete, buttons.replace, buttons.changeStatus);
});

addTaskButton.addEventListener('click', () => {
    statusVal = checkStatus(statusSelectElement);
    createNewTask();
    hideElements(inputValues.newtaskDes, inputValues.newtaskName);
});

buttons.updateName?.addEventListener('click', () => {
    updateTaskName(inputValues.taskNameInput.value, inputValues.newtaskName.value);
});

buttons.delete?.addEventListener('click', () => {
    deleteTask(inputValues.taskNameInput.value);
});

buttons.replace?.addEventListener('click', () => {
    statusVal = checkStatus(statusSelectElement);
    replaceTask(inputValues.taskNameInput.value, inputValues.newtaskName.value, inputValues.newtaskDes.value, statusVal);
});

buttons.changeStatus?.addEventListener('click', () => {
    updateStatus(inputValues.taskNameInput.value);
});

function showData(element: HTMLDivElement, dataOfTask: Task[]) {
    element.innerHTML =
        dataOfTask.map(element => `
        <div class="wrapper">
        <p><h2 style="color: blue;">${element.taskname}</h2><hr>
         Description: <br>${element.description},<br>
        Status:  <p id="statusStyle">${element.status}</p></p><br>
         </div> `).join('<br>');
}

function showElements(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'block';
        }
    });
}

function hideElements(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'none';
        }
    });
}

async function getTasks() {
    const response = await fetch('/api/tasks/gettasks', {
        method: "GET",
        headers: { "content-type": "application/json" }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.tasks)
        console.error('Missing products in the response:', data);

    showData(showDiv, data.tasks);
}

async function createNewTask() {
    showElements(h2, h3, inputValues.taskDesInput, statusSelectElement);
    const newTask: Task = {
        id: generateUniqueId(),
        taskname: inputValues.taskNameInput.value,
        description: inputValues.taskDesInput.value,
        status: statusVal
    };

    console.log(newTask);
    const response = await fetch(`/api/tasks`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTask)
    });

    if (!response.ok) {
        throw new Error(`Failed to add task. Status: ${response.status}`);
    }

    taskList.push(newTask);

    const data = await response.json();
    if (!data || !data.tasks) {
        console.error('Missing products in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}
async function deleteTaskByID(id: number) {
    hideElements(h2, h3, inputValues.taskDesInput, statusSelectElement, inputValues.newtaskName, inputValues.newtaskDes);
    const response = await fetch(`/api/tasks/delete/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ taskid: id }),
    });

    if (!response.ok) {
        throw new Error(`Failed to delete task. Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.tasks) {
        console.error('Missing products in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}


async function deleteTask(name: string) {
    hideElements(h2, h3, inputValues.taskDesInput, statusSelectElement, inputValues.newtaskName, inputValues.newtaskDes);
    const response = await fetch(`/api/tasks/delete/${name}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ taskname: name }),
    });

    if (!response.ok) {
        throw new Error(`Failed to delete task. Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.tasks) {
        console.error('Missing products in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}

async function updateTaskName(name: string, newTaskName: string) {
    hideElements(h2, h3, inputValues.taskDesInput, statusSelectElement, inputValues.newtaskDes);
    showElements(inputValues.newtaskName);
    const response = await fetch(`/api/tasks/updateTN/${name}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskname: newTaskName }),
    });

    if (!response.ok) {
        throw new Error(`Failed to change task name. Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.tasks) {
        console.error('Missing tasks in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}

async function replaceTask(name: string, newTaskName: string, newTaskDes: string, status: Status) {
    hideElements(h2, inputValues.taskDesInput);
    showElements(inputValues.newtaskName, h3, statusSelectElement, inputValues.newtaskDes);
    const newTask: Task = {
        id: generateUniqueId(),
        taskname: newTaskName,
        description: newTaskDes,
        status: checkStatus(statusSelectElement)
    };

    const response = await fetch(`/api/tasks/replace/${name}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
    });

    if (!response.ok) {
        throw new Error(`Failed to change task name. Status: ${response.status}`);
    }

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
    if (!data || !data.tasks) {
        console.error('Missing tasks in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}

async function updateStatus(name: string) {
    hideElements(h2, inputValues.taskDesInput, inputValues.newtaskName, inputValues.newtaskDes);
    showElements(h3, statusSelectElement);

    statusVal = checkStatus(statusSelectElement);
    const response = await fetch(`/api/tasks/changeStatus/${name}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: statusVal }),
    });
    if (!response.ok) {
        throw new Error(`Failed to change status. Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.tasks) {
        console.error('Missing tasks in the response:', data);
    }
    showData(showDiv, data.tasks);
    changeStatusColor();
}
function checkStatus(statusSelectElement: HTMLSelectElement): Status {
    const selectedStatusValue = statusSelectElement.value.toLowerCase();
    let status: Status;

    if (selectedStatusValue.includes('todo')) {
        status = Status.ToDo;
    } else if (selectedStatusValue.includes('done')) {
        status = Status.DONE;
    } else {
        console.error('Invalid status value');
        status = Status.ToDo;
    }

    return status;
}

function changeStatusColor() {
    const wrappers = document.querySelectorAll('.wrapper') as NodeListOf<HTMLDivElement>;

    wrappers.forEach(wrapper => {
        const statusElement = wrapper.querySelector('#statusStyle') as HTMLDivElement;
        
        if (!statusElement) {
            console.error('Status element not found in wrapper:', wrapper);
            return;
        }

        const elementStatus = statusElement.textContent?.trim() as Status;

        if (elementStatus === Status.ToDo) {
            wrapper.style.color = 'red';
        } else if (elementStatus === Status.DONE) {
            wrapper.style.color = 'green';
        } else {
            console.error('Invalid status value:', elementStatus);
        }
    });
}

function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.floor(10000 + Math.random() * 10000);
    return timestamp + randomId;
}

function findByID(taskID: number) {
    const index = taskList.findIndex(task => task.id === taskID);
    if (index !== -1) {
        return taskList[index];
    } else {
        throw new Error('Cannot find id');
    }
}
