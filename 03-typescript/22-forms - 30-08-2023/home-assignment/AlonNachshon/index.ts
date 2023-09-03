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
        taskActions.textContent = "Future action come here";

        const markAsDone = document.createElement("div");
        const isDone = document.createElement("input");
        isDone.type = "checkbox";
        markAsDone.className = "tasktslist__task__done";
        markAsDone.appendChild(isDone);

        taskContainer.appendChild(timeCreated);
        taskContainer.appendChild(taskId);
        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(taskDate);
        taskContainer.appendChild(taskActions);
        taskContainer.appendChild(markAsDone);

        /*Need to check if null if any problems while uploading page,,,,... */
        const lastTask = document.querySelector(".tasktslist");
        lastTask?.appendChild(taskContainer);

    }

}

const addNewTask = document.getElementById("addNewTask") as HTMLFormElement;
addNewTask?.addEventListener("submit", (ev) => {
    ev.preventDefault(); 
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;

    const t1 = new Task(Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString());
    addNewTask.reset();
});




