const form = document.querySelector("#new-task-form") as HTMLFormElement;
const textInput = document.querySelector("#new-task-text") as HTMLInputElement;
const taskList = document.querySelector("#tasks") as HTMLDivElement;
const submitButton = document.querySelector("#new-task-submit") as HTMLInputElement;
let editMode = false;


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = textInput.value;
    if (!task) {
        alert("write a task");
        return;
    }
    createDom(task)


})

function createDom(task: string) {

    const divTask = document.createElement("div") as HTMLDivElement;
    divTask.classList.add("task")

    const divTaskContent = document.createElement("div") as HTMLDivElement;
    divTaskContent.classList.add("content");

    divTask.appendChild(divTaskContent);

    let taskText = document.createElement("input") as HTMLInputElement;
    taskText.classList.add("text")
    taskText.type = "text"
    taskText.value = task;
    taskText.setAttribute("readonly", "readonly");
    divTaskContent.appendChild(taskText);

    const actionsDiv = document.createElement("div") as HTMLDivElement;
    actionsDiv.classList.add("actions");


    let editButton = document.createElement("button") as HTMLButtonElement;
    editButton.textContent = "Edit";
    editButton.classList.add("edit");

    let cancelButton = document.createElement("input") as HTMLInputElement;
    cancelButton.value = "Cancel";
    cancelButton.type = "reset";
    cancelButton.id = "cancel-button"
    cancelButton.classList.add("hidden");

    let deleteButton = document.createElement("button") as HTMLButtonElement;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    actionsDiv.appendChild(cancelButton);

    divTask.appendChild(actionsDiv);

    taskList.appendChild(divTask);

    textInput.value = "";


    editButton.addEventListener("click", () => {
        if (editButton.textContent == "Edit") {
            if(!editMode){
            textInput.value = taskText.value;
            textInput.focus();
            deleteButton.classList.toggle("hidden");
            cancelButton.classList.toggle("hidden");
            submitButton.classList.toggle("hidden");
            editButton.textContent = "Save";
            editMode = true;
        }
        } else {
            taskText.value = textInput.value;
            taskText.setAttribute("readonly", "readonly");
            editButton.textContent = "Edit";
            deleteButton.classList.toggle("hidden");
            cancelButton.classList.toggle("hidden");
            submitButton.classList.toggle("hidden");
            form.reset();
            editMode = false;
        }

    })


    deleteButton.addEventListener("click", () => {
        taskList.removeChild(divTask);
    })

    cancelButton.addEventListener("click" , () => {
        form.reset();
        deleteButton.classList.toggle("hidden");
        cancelButton.classList.toggle("hidden");
        submitButton.classList.toggle("hidden");
        editButton.textContent = "Edit";
        editMode = false;
    })
}
