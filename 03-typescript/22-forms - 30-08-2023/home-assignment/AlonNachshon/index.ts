class taksList{
    name:string;
    tasks: Map<number, Task>;
    constructor(name: string){
        this.name = name;
        this.tasks = new Map();
    }
    addTask(task: Task){
        this.tasks.set(task.id, task);
    }
    deleteTask(taskId: number){
        this.tasks.delete(taskId);
    }
}
class Task{
    static idCounter: number = 0;
    id: number;
    title: string;
    description: string;
    taskDayTime: string;
    dateStemp: string;
    status: boolean;


    constructor(
        id: number,
        title: string,
        description: string,
        taskDayTime: string,
        dateStemp: string,

    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.taskDayTime = taskDayTime;
        this.dateStemp = dateStemp;
        this.status = false;
        this.setTask();
    }


    private setTask(){
        
        const taskContainer = document.createElement("div");
        taskContainer.className = "tasktslist__task";

        const timeCreated = document.createElement("div");
        timeCreated.className = "tasktslist__task__created";
        timeCreated.textContent = this.dateStemp;

        const taskId = document.createElement("div");
        taskId.className = "tasktslist__task__id";
        taskId.textContent = this.id.toString();

        const taskTitle = document.createElement("div");
        taskTitle.className = "tasktslist__task__title";
        taskTitle.textContent = this.title;

        const taskDescription = document.createElement("div");
        taskDescription.className = "tasktslist__task__description";
        taskDescription.textContent = this.description;

        const taskDate = document.createElement("div");
        taskDate.className = "tasktslist__task__date";
        taskDate.textContent = this.taskDayTime;

        const taskActions = document.createElement("div");
        taskActions.className = "tasktslist__task__actions";
        const shouldDelete = document.createElement("input");
        shouldDelete.type = "checkbox";
        taskActions.appendChild(shouldDelete);

        const markAsDone = document.createElement("div");
        const isDone = document.createElement("input");
        isDone.type = "checkbox";
        markAsDone.className = "tasktslist__task__done";
        markAsDone.appendChild(isDone);

        const editTask = document.createElement("div");
        const editBtn = document.createElement("input");
        editBtn.type = "submit";
        editBtn.value = "Edit";
        editTask.className = "tasktslist__task__edit";
        editTask.appendChild(editBtn);
        editBtn.addEventListener("submit", (ev) => {
            ev.preventDefault();

        });

        taskContainer.appendChild(timeCreated);
        taskContainer.appendChild(taskId);
        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(taskDate);
        taskContainer.appendChild(taskActions);
        taskContainer.appendChild(editTask);
        taskContainer.appendChild(markAsDone);

        /*
        ...Need to check if null if any problems while uploading page
         */
        const lastTask = document.querySelector(".tasktslist");
        lastTask?.appendChild(taskContainer);
    }
}

/*
...Also Delete the class instance by pointing to null....
*/
const addNewTask = document.getElementById("addNewTask") as HTMLFormElement;
addNewTask?.addEventListener("submit", (ev) => {
    ev.preventDefault(); 
    const title = document?.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;

    const t1 = new Task(Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString());
    addNewTask.reset();
});

const deleteTask = document.getElementById("delSelected") as HTMLFormElement;
deleteTask?.addEventListener("click", (ev) => {
    ev.preventDefault();
    const tasksToDelete = document.querySelectorAll(".tasktslist__task__actions input");
    console.log(tasksToDelete);
    console.log(tasksToDelete.length);
    let first = true;

    tasksToDelete.forEach((task) => {
        if(task.checked){
            if(first){
                first = false;
                if(prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm")!="DELETE")
                    return;
            }
            task.parentElement?.parentElement?.remove();
        }
    });


});
const privateList = new taksList("Private");

const t1 = new Task(Task.idCounter++, "title", "description", "dateAndTime", new Date().toLocaleString());
const t2 = new Task(Task.idCounter++, "title", "description", "dateAndTime", new Date().toLocaleString());




