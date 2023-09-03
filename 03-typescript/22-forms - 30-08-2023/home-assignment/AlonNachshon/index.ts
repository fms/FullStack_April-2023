class TaksList{
    static listsNames: Map<string, TaksList> = new Map();
    tasks: Map<number, Task> = new Map();
    name:string;

    constructor(name: string){
        this.name = name;
        this.tasks = new Map();
        TaksList.listsNames.set(name, this);
    }
    addTask(task: Task){
        this.tasks.set(task.id, task);
        console.log(this.tasks); 
    }
    deleteTask(taskId: number){
        this.tasks.delete(taskId);
        console.log(this.tasks); 
    }
}
class Task{
    static idCounter: number = 1000;
    id: number;
    title: string;
    description: string;
    taskDayTime: string;
    dateStemp: string;
    status: boolean;
    taskList: TaksList;

    constructor(
        id: number,
        title: string,
        description: string,
        taskDayTime: string,
        dateStemp: string,
        taskList:TaksList
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.taskDayTime = taskDayTime;
        this.dateStemp = dateStemp;
        this.status = false;
        taskList.addTask(this);
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
        editBtn.className = "editBtn";
        editTask.className = "tasktslist__task__edit";
        editTask.appendChild(editBtn);


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

        editBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            const parent = editBtn.parentElement?.parentElement;
            const title = document.getElementById("title");

            const description = document.getElementById("description")  ;
            const dateAndTime = document.getElementById("dateAndTime")  ;

            title.value = this.title;
            description.value = this.description;
            dateAndTime.value = this.taskDayTime;

            editMode(true);

            const update = document.getElementById("updateTask");

            update?.addEventListener("click", (ev) => {

                this.title = title?.value;
                this.description = description?.value;
                this.taskDayTime = dateAndTime?.value;

                parent?.querySelector(".tasktslist__task__title")?.textContent = this.title;
                parent?.querySelector(".tasktslist__task__description")?.textContent = this.description;
                parent?.querySelector(".tasktslist__task__date")?.textContent = this.taskDayTime;

                editMode(false); 
                const addNewTask = document.getElementById("addNewTask")?.reset();
            });
        });

        isDone.addEventListener("change", (ev) => {
            const parent = isDone.parentElement?.parentElement;
                parent?.querySelector(".tasktslist__task__title")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__description")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__date")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__id")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__created")?.classList.toggle("--done");
                this.status? false:true;
                parent?.parentElement?.appendChild(parent);
        });
        const addNewTask = document.getElementById("addNewTask");
        addNewTask.classList.toggle('hide');
        
    }
}



/**
 * Adding new task using evebt listener
 */
const addNewTask = document.getElementById("addNewTask") as HTMLFormElement;
addNewTask?.addEventListener("submit", (ev) => {
    ev.preventDefault(); 
    const title = document?.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;
    const selectTask = document.getElementById("chooseTaskList");
    const selectedList = selectTask?.value;
    const list = TaksList.listsNames.get(selectedList)
    console.log(selectedList);

    const t1 = new Task(Task.idCounter++, title, description, dateAndTime, new Date().toLocaleString(),list );
    addNewTask.reset();
    addNewTask.classList.toggle('hide');

});

/**
 * Del a task
 */
const deleteTask = document.getElementById("delSelected") as HTMLFormElement;
deleteTask?.addEventListener("click", (ev) => {
    ev.preventDefault();
    const tasksToDelete = document.querySelectorAll(".tasktslist__task__actions input");

    let first = true;

    tasksToDelete.forEach((task) => {
        if(task.checked){
            if(first){
                first = false;
                if(prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm")!="DELETE")
                    return;
            }
            const parent = task.parentElement?.parentElement;
            let getId = parent?.querySelector(".tasktslist__task__id")?.textContent;
            privateList.deleteTask(parseInt(getId));
            parent?.remove();
        }
    });
});

/**
 * Cancel edit
 */
const cancel = document.getElementById("cancelEdit") as HTMLFormElement;
cancel.addEventListener("click", (ev) => {
    ev.preventDefault();
    const addNewTask = document.getElementById("addNewTask") as HTMLFormElement;
    addNewTask.reset();
    editMode(false);
});

function editMode(status:boolean){
    const submit = document.getElementById("submitTask");
    submit?.classList.toggle('hide');
    const update = document.getElementById("updateTask");
    update?.classList.toggle('hide');
    const cancel = document.getElementById("cancelEdit");
    cancel?.classList.toggle('hide');
    document.querySelectorAll('.editBtn').forEach((btn) => {
        btn.disabled = (status);
    });
}

/**
 * Add new task list
 */
const newTaskList = document.getElementById("newTaskList") as HTMLFormElement;
newTaskList?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const listName = document.getElementById("taskListName") as HTMLInputElement;
    const newList = new TaksList(listName.value);
    newTaskList.reset();

    const addNewTask = document.getElementById("addNewTask");
    addNewTask?.classList.toggle('hide');

    newTaskList.classList.toggle('hide');

    const selectTask = document.getElementById("chooseTaskList");
       TaksList.listsNames.forEach((list) => {
        const option = document.createElement("option");
        option.value = list.name;
        option.textContent = list.name;
        selectTask?.appendChild(option);
       });
});

// const test = new TaksList("Private");
// console.log(TaksList.listsNames);
// const t1 = new Task(Task.idCounter++, "title1", "description1", "dateAndTime1", new Date().toLocaleString(),test);
// const t2 = new Task(Task.idCounter++, "title2", "description2", "dateAndTime2", new Date().toLocaleString(),test);
// const t3 = new Task(Task.idCounter++, "title3", "description3", "dateAndTime3", new Date().toLocaleString(),test);

/**
 * TODO:
 * 
 * hide task list until first tak is created
 * 
 * add that a list is oppened with h2 heading
 * 
 * change the task date format to be like the date format in a task
 * 
 * add all information of a task in storage like thought in the class
 * 
 */




