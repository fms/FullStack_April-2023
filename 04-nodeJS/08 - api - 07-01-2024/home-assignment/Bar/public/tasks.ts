<<<<<<< HEAD
interface Task {
  title: string;
  description: string;
  id: string;
  status:boolean;
  userId:string
}

interface User {
  userId: string
  username:string,
  email:string
}

let currentUserId:string;

async function getUsers() {
  let response;
    response = await fetch("/api/users", {});
    await processResponse(response);
}


const taskOutput = document.querySelector(".taskOutput") as HTMLDivElement;
const chooseUser = document.querySelector(".chooseUser") as HTMLDivElement;
getUsers();
getTasks();

async function renderUsers(users:User[]){
chooseUser.innerHTML = "";
users.forEach((user) => {
  createUserTemplate(user);
});
}

async function renderTasks(tasks: Task[]) {
  taskOutput.innerHTML = "";
  tasks.forEach((task) => {
    if (task.userId === currentUserId) {
      createTaskTemplate(task);
    }
  });
}

function createUserTemplate(user:User){
  const userDiv = document.createElement("div") as HTMLDivElement;
  const userArea = document.createElement("div") as HTMLDivElement;
  const usernameParagarph = document.createElement("p") as HTMLParagraphElement;
  const chooseButton = document.createElement("button") as HTMLButtonElement;

  usernameParagarph.textContent = user.username;
  chooseButton.textContent = "Choose";
  chooseButton.addEventListener("click",(event) => chooseButtonHandler(event,user) )

  userArea.appendChild(usernameParagarph);
  userDiv.appendChild(userArea);
  userDiv.appendChild(chooseButton);
  chooseUser.appendChild(userDiv);
}

async function chooseButtonHandler(event:MouseEvent,user:User){
  event.preventDefault();

  if (event.target){
    currentUserId = user.userId
    console.log(user.userId);
    const response = await fetch(`/api/user/${user.userId}/tasks`, {});
    await processResponse(response);
  }
}

function createTaskTemplate(task: Task) {
  const taskDetails = document.createElement("div") as HTMLDivElement;
  const title = document.createElement("p") as HTMLParagraphElement;
  const description = document.createElement("p") as HTMLParagraphElement;
  const deleteButton = document.createElement("button") as HTMLButtonElement;
  const editButton = document.createElement("button") as HTMLButtonElement;
  const checkbox = document.createElement("input") as HTMLInputElement;

  taskDetails.classList.add("taskDetails");
  title.textContent = task.title;
  description.textContent = task.description;
  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";
  checkbox.type = "checkbox";
  checkbox.checked = (task.status === true);
  taskDetails.classList.add("todo");
  
  if (checkbox.checked){
    taskDetails.classList.add("completed");
    taskDetails.classList.remove("todo");
  }

  editButton.addEventListener("click", (event) => handleEditButton(event, taskDetails, task.id,task.status));
  deleteButton.addEventListener("click", () => handleDeleteButton(task.id));
  checkbox.addEventListener("change", () => handleTaskStatus(task.id,task.status,taskDetails));

  taskDetails.appendChild(title);
  taskDetails.appendChild(description);
  taskDetails.appendChild(checkbox);
  taskDetails.appendChild(deleteButton);
  taskDetails.appendChild(editButton);
  taskOutput.appendChild(taskDetails);
}

async function getTasks() {
  let response;
    response = await fetch("/api/tasks", {});
    await processResponse(response);
}

async function createTask(event: MouseEvent) {
  event.preventDefault();
  let response;
    const titleValue = (document.querySelector(".title") as HTMLInputElement).value;
    const descriptionValue = ( document.querySelector(".description") as HTMLInputElement).value;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: titleValue,
      description: descriptionValue,
      status: false,
      userId:currentUserId
    };

    console.log(newTask);

    response = await fetch("/api/task", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    });
    await processResponse(response);
}

async function handleDeleteButton(id: string) {
    const response = await fetch("/api/task", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    });

    await processResponse(response);
}

async function handlePatchButton(id: string,title: string,description: string) {
    const response = await fetch(`/api/task`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: id, title: title, description: description }),
    });

    await processResponse(response);
}

async function handlePutButton(id: string, title: string, description: string,status:boolean) {
    const response = await fetch(`/api/task/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title, description: description, status: status }),
    });

    await processResponse(response);
}

function handleEditButton(event: MouseEvent,div: HTMLDivElement,id: string,status:boolean) {
let target = event.target as HTMLButtonElement;

  if (target) {
    const newTitleInput = document.createElement("input") as HTMLInputElement;
    const newDescriptionInput = document.createElement("input") as HTMLInputElement;
    const patch = document.createElement("button") as HTMLButtonElement;
    const put = document.createElement("button") as HTMLButtonElement;

    patch.textContent = "Patch";
    put.textContent = "Put";

    patch.addEventListener("click", () => handlePatchButton(id, newTitleInput.value, newDescriptionInput.value));
    put.addEventListener("click", () => handlePutButton(id, newTitleInput.value, newDescriptionInput.value,status));

    div.appendChild(newTitleInput);
    div.appendChild(newDescriptionInput);
    div.appendChild(patch);
    div.appendChild(put);
  }
}

async function handleTaskStatus( taskId: string, taskStatus: boolean,taskDetails:HTMLDivElement) {
  taskStatus = !taskStatus;

  if (taskStatus){
    taskDetails.classList.toggle("completed", taskStatus);
  }

  const response = await fetch(`/api/task/${taskId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({id:taskId, status: taskStatus }),
  });
  await processResponse(response);
  
}

async function processResponse(response: Response) {
  try {
      if (!response.ok) {
          throw new Error(response.statusText)
      }
      
      const responseData = await response.json();
      
      if ('users' in responseData) {
          const { users }: { users: User[] } = responseData;
          renderUsers(users);
      }

      if ('tasks' in responseData) {
          const { tasks }: { tasks: Task[] } = responseData;
          renderTasks(tasks);
      }

  } catch (error) {
      if (error instanceof Error) {
          console.error(error.message);
      } else {
          console.error(error);
      }
  }
}

=======
interface Task {
  title: string;
  description: string;
  id: string;
  status:boolean;
  userId:string
}

interface User {
  userId: string
  username:string,
  email:string
}

let currentUserId:string;

async function getUsers() {
  let response;
    response = await fetch("/api/users", {});
    await processResponse(response);
}


const taskOutput = document.querySelector(".taskOutput") as HTMLDivElement;
const chooseUser = document.querySelector(".chooseUser") as HTMLDivElement;
getUsers();
getTasks();

async function renderUsers(users:User[]){
chooseUser.innerHTML = "";
users.forEach((user) => {
  createUserTemplate(user);
});
}

async function renderTasks(tasks: Task[]) {
  taskOutput.innerHTML = "";
  tasks.forEach((task) => {
    if (task.userId === currentUserId) {
      createTaskTemplate(task);
    }
  });
}

function createUserTemplate(user:User){
  const userDiv = document.createElement("div") as HTMLDivElement;
  const userArea = document.createElement("div") as HTMLDivElement;
  const usernameParagarph = document.createElement("p") as HTMLParagraphElement;
  const chooseButton = document.createElement("button") as HTMLButtonElement;

  usernameParagarph.textContent = user.username;
  chooseButton.textContent = "Choose";
  chooseButton.addEventListener("click",(event) => chooseButtonHandler(event,user) )

  userArea.appendChild(usernameParagarph);
  userDiv.appendChild(userArea);
  userDiv.appendChild(chooseButton);
  chooseUser.appendChild(userDiv);
}

async function chooseButtonHandler(event:MouseEvent,user:User){
  event.preventDefault();

  if (event.target){
    currentUserId = user.userId
    console.log(user.userId);
    const response = await fetch(`/api/user/${user.userId}/tasks`, {});
    await processResponse(response);
  }
}

function createTaskTemplate(task: Task) {
  const taskDetails = document.createElement("div") as HTMLDivElement;
  const title = document.createElement("p") as HTMLParagraphElement;
  const description = document.createElement("p") as HTMLParagraphElement;
  const deleteButton = document.createElement("button") as HTMLButtonElement;
  const editButton = document.createElement("button") as HTMLButtonElement;
  const checkbox = document.createElement("input") as HTMLInputElement;

  taskDetails.classList.add("taskDetails");
  title.textContent = task.title;
  description.textContent = task.description;
  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";
  checkbox.type = "checkbox";
  checkbox.checked = (task.status === true);
  taskDetails.classList.add("todo");
  
  if (checkbox.checked){
    taskDetails.classList.add("completed");
    taskDetails.classList.remove("todo");
  }

  editButton.addEventListener("click", (event) => handleEditButton(event, taskDetails, task.id,task.status));
  deleteButton.addEventListener("click", () => handleDeleteButton(task.id));
  checkbox.addEventListener("change", () => handleTaskStatus(task.id,task.status,taskDetails));

  taskDetails.appendChild(title);
  taskDetails.appendChild(description);
  taskDetails.appendChild(checkbox);
  taskDetails.appendChild(deleteButton);
  taskDetails.appendChild(editButton);
  taskOutput.appendChild(taskDetails);
}

async function getTasks() {
  let response;
    response = await fetch("/api/tasks", {});
    await processResponse(response);
}

async function createTask(event: MouseEvent) {
  event.preventDefault();
  let response;
    const titleValue = (document.querySelector(".title") as HTMLInputElement).value;
    const descriptionValue = ( document.querySelector(".description") as HTMLInputElement).value;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: titleValue,
      description: descriptionValue,
      status: false,
      userId:currentUserId
    };

    console.log(newTask);

    response = await fetch("/api/task", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    });
    await processResponse(response);
}

async function handleDeleteButton(id: string) {
    const response = await fetch("/api/task", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    });

    await processResponse(response);
}

async function handlePatchButton(id: string,title: string,description: string) {
    const response = await fetch(`/api/task`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: id, title: title, description: description }),
    });

    await processResponse(response);
}

async function handlePutButton(id: string, title: string, description: string,status:boolean) {
    const response = await fetch(`/api/task/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title, description: description, status: status }),
    });

    await processResponse(response);
}

function handleEditButton(event: MouseEvent,div: HTMLDivElement,id: string,status:boolean) {
let target = event.target as HTMLButtonElement;

  if (target) {
    const newTitleInput = document.createElement("input") as HTMLInputElement;
    const newDescriptionInput = document.createElement("input") as HTMLInputElement;
    const patch = document.createElement("button") as HTMLButtonElement;
    const put = document.createElement("button") as HTMLButtonElement;

    patch.textContent = "Patch";
    put.textContent = "Put";

    patch.addEventListener("click", () => handlePatchButton(id, newTitleInput.value, newDescriptionInput.value));
    put.addEventListener("click", () => handlePutButton(id, newTitleInput.value, newDescriptionInput.value,status));

    div.appendChild(newTitleInput);
    div.appendChild(newDescriptionInput);
    div.appendChild(patch);
    div.appendChild(put);
  }
}

async function handleTaskStatus( taskId: string, taskStatus: boolean,taskDetails:HTMLDivElement) {
  taskStatus = !taskStatus;

  if (taskStatus){
    taskDetails.classList.toggle("completed", taskStatus);
  }

  const response = await fetch(`/api/task/${taskId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({id:taskId, status: taskStatus }),
  });
  await processResponse(response);
  
}

async function processResponse(response: Response) {
  try {
      if (!response.ok) {
          throw new Error(response.statusText)
      }
      
      const responseData = await response.json();
      
      if ('users' in responseData) {
          const { users }: { users: User[] } = responseData;
          renderUsers(users);
      }

      if ('tasks' in responseData) {
          const { tasks }: { tasks: Task[] } = responseData;
          renderTasks(tasks);
      }

  } catch (error) {
      if (error instanceof Error) {
          console.error(error.message);
      } else {
          console.error(error);
      }
  }
}

>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
