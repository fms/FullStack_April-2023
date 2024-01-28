enum UserStatus {
    logedIn,
    logedOut
}

interface User {
    email: string,
    logedIn: UserStatus,
    tasks: Task[],
}

const sumbitWrapper = document.querySelector(".submit-wrapper") as HTMLDivElement;
const loginWrapper = document.querySelector(".login-wrapper") as HTMLDivElement;
const registerWrapper = document.querySelector(".register-wrapper") as HTMLDivElement;
const tasksHeaderWrapper = document.querySelector(".tasks-main-header") as HTMLDivElement;


function renderUsers(users: User[]) {
    const logedIn = users.find(user => user.logedIn === 1);
    if (!logedIn) {
        throw new Error("No user is logedin");
    }
    toggleDom();
    logedIn.tasks.forEach(task => createTaskDomByUsers(task));
}

function createTaskDomByUsers(task: Task) {
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

function toggleDom() {
    sumbitWrapper.classList.toggle("invisible")
    loginWrapper.classList.toggle("invisible")
    registerWrapper.classList.toggle("invisible")
    tasksHeaderWrapper.classList.toggle("invisible")
}

async function processResponseUsers(response: Response) {
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const { users }: { users: User[] } = await response.json();
        renderUsers(users);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.error(error);
        }
    }
}

async function updateUserStatus(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const formData = new FormData(target.parentElement as HTMLFormElement);
    const email = formData.get('login-email');
    const newUser = { email };
    const response = await fetch(`/api/users/updateStatus`, {
        method: "PATCH",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(newUser)
    });
    await processResponse(response);
    toggleDom();
}

async function newUser(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const formData = new FormData(target.parentElement as HTMLFormElement);
    const email = formData.get('register-email');
    const newUser = { email };
    const response = await fetch(`/api/users/addUser`, {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(newUser)
    });

    await processResponse(response);
}

