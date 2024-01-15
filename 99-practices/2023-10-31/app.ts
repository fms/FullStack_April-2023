console.log("connected");

const handleSubmit = (event) => {
  event.preventDefault();
  const task = event.target.task.value;

  if (!task) {
    alert("Please Enter Task!");
    return;
  }
  sessionStorage.setItem("taskContent", task);

  const root = document.querySelector(".root") as HTMLDivElement;
  root.innerHTML = `<p>${task}</p>`;
};

const handleLoad = () => {
  const task = sessionStorage.getItem("taskContent");
  if (!task) {
    addToRoot("<p>Please enter a task!</p>");
  } else {
    addToRoot(`<p>${task}</p>`);
  }
};

const handleDelete = () => {
  // sessionStorage.removeItem("taskContent");
  addToRoot("");
};

const addToRoot = (contentToAdd) => {
  const root = document.querySelector(".root") as HTMLDivElement;
  root.innerHTML = contentToAdd;
};

const handleAdd = () => {
    const task = sessionStorage.getItem("taskContent");
    addToRoot(task)
};

// const form = document.querySelector("#formTask") as HTMLFormElement
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log(event)
// })
