class TaskList{
    static listsNames: Map<string, TaskList> = new Map(); /* Map of Task lists*/
    tasks: Array<Task>;
    name:string;

    constructor(name: string){
        this.name = name;
        this.tasks = new Array<Task>();
        TaskList.listsNames.set(name, this);
        this.createTaskList();
        console.log(this)

    }
    // public copyConstructor(taskList:TaskList){
        
    //     this.name = TaskList.name;
    //     this.tasks = TaskList.tasks;
    //     TaksList.listsNames.set(this.name, this);
    //     this.createTaskList();
    // }

    public addTaskToList(task: Task){
        this.tasks.push(task);
        Task.tasksMap.get(task.id)?.list = this.name;
        // console.log("added task to list: " +Task.tasksMap.get(task.id)?.list);
        localStorage.setItem(this.name, JSON.stringify(this));
    }
    public deleteTaskFromList(task: Task){
        this.tasks = this.tasks.filter((t) => t != task);
        // console.log("delete task from list: "+ this.tasks)
        localStorage.setItem(this.name, JSON.stringify(this));

    }
    public addDeleteEventListener(){
        /**
         * Del a task event listener
         */
        const deleteTask = document.querySelector(`#delSelected-${this.name}`) as HTMLFormElement;
        // console.log(`#delSelected-${this.name}`);
        // console.log(deleteTask);
        
        deleteTask?.addEventListener("click", (ev) => {
            ev.preventDefault();
            // console.log("del");
        
            const tasksToDelete = document.querySelectorAll(`.tasktslist__task__actions-${this.name} input`);
        
            let first = true;
        
            tasksToDelete.forEach((task) => {
                if(task.checked){
                    if(first){
                        first = false;
                        if(prompt("You are going to delete tasks please type 'DELETE TASKS' to confirm")!="DELETE")
                            return;
                    }
                    
                    const parent = task.parentElement?.parentElement;
                    // console.log(parent);
                    const taskIdDiv = parent?.querySelector(".tasktslist__task__id");
                    const taskId = taskIdDiv?.textContent;
                    TaskList.listsNames.get(this.name)?.deleteTaskFromList(Task.tasksMap.get(parseInt(taskId)));
                    Task.tasksMap.get(parseInt(taskId))?.deleteTask(parseInt(taskId));
                    parent?.remove();
                }
            });
        });
    }

    public createTaskList() {
        const newTaskList = document.createElement("div");
        newTaskList.classList.add(`tasktslist-${this.name}`);

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("tasktslist__task");
        taskDiv.classList.add("titles");
        

        const taskDetails = [
            "Time Created",
            "Task Id",
            "Task Title",
            "Task Description",
            "Task Date",
            "Delete",
            "Edit",
            "done?"
        ];

        const taskClasses =[
            "tasktslist__task__created",
            "tasktslist__task__id",
            "tasktslist__task__title",
            "tasktslist__task__description",
            "tasktslist__task__date",
            "tasktslist__task__actions",
            "tasktslist__task__edit",
            "tasktslist__task__done"
        ]

        for (const detail of taskDetails) {
            const detailDiv = document.createElement("div");
            detailDiv.classList.add(`${taskClasses[taskDetails.indexOf(detail)]}`);
            detailDiv.textContent = detail;
            taskDiv.appendChild(detailDiv);
        }
        const h2 = document.createElement("h2");
        const hr1 = document.createElement("hr");
        const hr2 = document.createElement("hr");

        const deleteSelectedButton = document.createElement("input");
        deleteSelectedButton.type = "submit";
        deleteSelectedButton.value = "Delete Selected";
        deleteSelectedButton.id = `delSelected-${this.name}`;
        h2.textContent = this.name;

        newTaskList.appendChild(h2);
        // newTaskList.appendChild(hr1);
        newTaskList.appendChild(taskDiv);
        newTaskList.appendChild(hr2);
        newTaskList.appendChild(deleteSelectedButton);

        const main = document.querySelector(".listContainer");
        main?.appendChild(newTaskList);
        this.addDeleteEventListener();
        localStorage.setItem(this.name, JSON.stringify(this));

    }      
}
class Task{
    static idCounter: number = 1000;
    static tasksMap: Map<number, Task> = new Map(); /* Map of Task lists*/
    static updateTask: Task;

    id: number;
    title: string;
    description: string;
    taskDayTime: string;
    dateStemp: string;
    status: boolean;
    list:string;

    constructor(
        id: number,
        title: string,
        description: string,
        taskDayTime: string,
        dateStemp: string,
        list?:string,
        status?:boolean
        
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.taskDayTime = taskDayTime;
        this.dateStemp = dateStemp;
        this.status = false;
        this.addTask(id);
        this.list="";
        // console.log(this)

    }

    public addTask(id:number){
        Task.tasksMap.set(this.id, this);
        console.log(Task.tasksMap.get(this.id)); 
        // localStorage.setItem(this.id.toString(),JSON.stringify(this));
    }
    public deleteTask(id:number){
        Task.tasksMap.delete(this.id);
        console.log(Task.tasksMap.get(this.id)); 
        // localStorage.removeItem(this.id.toString());


    }

    public setTask(selectedList:string){ 
/**
 * Task row
 */
        const taskContainer = document.createElement("div");
        taskContainer.className = "tasktslist__task";
        
        /**
         * Tasks fields start
         */
        const timeCreated = document.createElement("div");
        timeCreated.className = "tasktslist__task__created";
        timeCreated.textContent = this.dateStemp;

        const taskId = document.createElement("div");
        taskId.className = "tasktslist__task__id";
        taskId.id = `${this.id}`;
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
        taskActions.className = `tasktslist__task__actions-${selectedList}`;
        taskActions.classList.add(`tasktslist__task__actions`);

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
        editBtn.className = `editBtn`;
        editTask.className = "tasktslist__task__edit";
        editTask.appendChild(editBtn);

    /** End */

    /** appending task to container*/
        taskContainer.appendChild(timeCreated);
        taskContainer.appendChild(taskId);
        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(taskDate);
        taskContainer.appendChild(taskActions);
        taskContainer.appendChild(editTask);
        taskContainer.appendChild(markAsDone);


    /** Appending the last task to the list */
        const lastTask = document.querySelector(`.tasktslist-${selectedList}`);
        const titleTasks = lastTask?.querySelector(".tasktslist__task");
        titleTasks?.insertAdjacentElement("afterend", taskContainer);


        editBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            editMode(true);

            const title = document.getElementById("title");
            const description = document.getElementById("description");
            const dateAndTime = document.getElementById("dateAndTime");

            const taskLine = editBtn.closest(".tasktslist__task");
            const taskIdDiv = taskLine?.querySelector(".tasktslist__task__id");
            const taskId = taskIdDiv?.textContent;

            Task.updateTask = Task.tasksMap.get(parseInt(taskId)) as Task;

            title.value = Task.updateTask.title;
            console.log(title.value);
            description.value = Task.updateTask.description;
            dateAndTime.value = Task.updateTask.taskDayTime;
            // selectTask.value = "*";

        });
 
        /*
        *  Added event listener to mark down and move it down. 
        */
        isDone.addEventListener("change", (ev) => {
            const parent = isDone.parentElement?.parentElement;
                parent?.querySelector(".tasktslist__task__title")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__description")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__date")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__id")?.classList.toggle("--done");
                parent?.querySelector(".tasktslist__task__created")?.classList.toggle("--done");
                this.status? false:true;
                parent?.insertAdjacentElement("afterend" ,parent);
        });

       document.getElementById("adsdNewTask")?.classList.toggle('hide');
        
    }
}



/**
 * Adding  event listener for new task  
 */
const addNewTask = document.getElementById("addNewTask") as HTMLFormElement;


addNewTask?.addEventListener("submit", (ev) => {
    ev.preventDefault(); 
    const title = document?.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dateAndTime = document.getElementById("dateAndTime").value;
    const selectTask = document.getElementById("chooseTaskList");
    const selectedList = selectTask?.value;
    const list = TaskList.listsNames.get(selectedList)
    
    const formatedDate = new Date(dateAndTime);
    let dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear();
    // console.log(dateString);
    // dateString.

    
    const t1 = new Task(Task.idCounter++, title, description, dateAndTime.toLocaleString(), new Date().toLocaleString());
    
    t1.setTask(selectedList);
    list?.addTaskToList(t1);
    
    addNewTask.reset();
    // addNewTask.classList.toggle('hide');

    /*If it's the first List and first task=>  show titles */
    if(list?.tasks.length == 1 && TaskList.listsNames.size == 1){
        /**/
        const listContainer = document.querySelector(".listContainer");
        listContainer?.classList.remove('hide');

    }
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

/**
 * 
 *  edit mode , disable buttons and show update and cancel
 * 
 */
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
 * Add new task list, first use of system
 */
const newTaskList = document.getElementById("newTaskList") as HTMLFormElement;
newTaskList?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const listName = document.getElementById("taskListName") as HTMLInputElement;
    const newList = new TaskList(listName.value);
    newTaskList.reset();

    const addNewTask = document.getElementById("addNewTask");
    addNewTask?.classList.toggle('hide');
    newTaskList.classList.toggle('hide');

    // console.log(TaskList.listsNames);

    const selectTask = document.getElementById("chooseTaskList") as HTMLSelectElement;

    const option = document.createElement("option");
    option.value = newList.name;
    option.textContent = newList.name;
    selectTask?.appendChild(option );
   
});

/*
* Add new Task list when already in tasks
*/
const addAnotherList  = document.getElementById("addNewTaskList") as HTMLFormElement;
addAnotherList?.addEventListener("click", (ev) => {
    ev.preventDefault();
    const newTaskList = document.getElementById("newTaskList");
    newTaskList?.classList.toggle('hide');
    const addNewTask = document.getElementById("addNewTask");
    addNewTask?.classList.toggle('hide');
});

const editbtns = document.querySelectorAll('.editBtn');

const update = document.getElementById("updateTask");
update?.addEventListener("click", (ev) => {
    ev.preventDefault();
    if(Task.updateTask == null) return;
    /**
     * Getting elements value from form
     */
    const title = document.getElementById("title") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const dateAndTime = document.getElementById("dateAndTime") as HTMLDataElement;
    const selectTask = document.getElementById("chooseTaskList") as HTMLSelectElement;
    const selectedList = selectTask?.value;


    const taskId = document.getElementById(Task.updateTask.id.toString()) as HTMLInputElement;
    const task = taskId.closest(".tasktslist__task");
    const titleDiv = task?.querySelector(".tasktslist__task__title");
    const descriptionDiv = task?.querySelector(".tasktslist__task__description");
    const dateAndTimeDiv = task?.querySelector(".tasktslist__task__date");

    const list = TaskList.listsNames.get(selectedList)

    if(selectedList!=""){/* Selected list is not an empty string, so need to change between lists (assuming) in the future take care of same list choosen*/ 
        
        TaskList.listsNames.get(Task.updateTask.list)?.deleteTaskFromList(Task.updateTask);
        Task.updateTask.list = selectedList;
        list?.addTaskToList(Task.updateTask);

        const taskList = document?.querySelector(`.tasktslist-${Task.updateTask.list}`);
        const lastTask = taskList?.querySelector('.tasktslist__task')
        lastTask?.insertAdjacentElement("afterend", task);
    }
    
    // const formatedDate = new Date(dateAndTime);
    // let dateString = formatedDate.getDate() + "/" + (formatedDate.getMonth() + 1) + "/" + formatedDate.getFullYear();
    // console.log(dateString);


    titleDiv.textContent = title.value;
    descriptionDiv.textContent = description.value;
    dateAndTimeDiv?.textContent = dateAndTime.value.toLocaleString();
    // const taskId = taskIdDiv.textContent;

    
    Task.updateTask.title = title.value;
    Task.updateTask.description = description.value;
    Task.updateTask.taskDayTime = dateAndTime.toLocaleString();

    addNewTask.reset();
    editMode(false);
    // addNewTask.classList.toggle('hide');
    /*If it's the first List and first task=>  show titles */
    if(list?.tasks.length == 1 && TaskList.listsNames.size == 1){
        /**/
        const listContainer = document.querySelector(".listContainer");
        listContainer?.classList.remove('hide');
    }
});

function initPage(){

    let tasklist = new Array<TaskList>();
    let tasks = new Array<Task>();
    
    for (let i=0; i< localStorage.length; i++){
        /**
         * https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
         */
        // console.log(localStorage.getItem(localStorage.key(i)));
        const objects = Array<Object>();
         objects.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

        // console.log(obj);
        objects.forEach((list:TaskList) => {
            // const newList = new TaskList(list.name);
            // tasklist.push(newList);
            console.log(list);
            list.tasks.forEach((task:Task) => {
                const newTask = new Task(task.id, task.title, task.description, task.taskDayTime, task.dateStemp, task.list, task.status);
                // newTask.setTask("fasfa");
                // list?.addTaskToList(t1);
            });
        });

        
    }

        // tasklist.push(object);
        // else tasks.push(object);
    
    // console.log("tasks: ");
    // console.log({tasks});
    // console.log("taskslist: ");
    // console.log({tasklist});

    /**
     * Maybe keep the tasks not in local storage? since i have all the object information in task list?  
     *
    */

    
    if(localStorage.length > 0){
        addNewTask?.classList.toggle('hide');
        newTaskList.classList.toggle('hide');
    }
}

initPage();
/**
 * TODO:
 * First system use should show the lists... 
 * 
 * Fix Add new List after first use. 
 * 
 * remove list if all tasks are deleted
 * 
 * change the task date format to be like the date format in a task
 * 
 * add all information of a task in storage like thought in the class
 * 
 * use find where evere i can with objects. 
 *  * 
 * Deleted items will be removed from list, but will stay in task object as archives
 * 
 * Check if list name already exsist before creating it. 
 * 
 * 
 * 
 * 
 */




