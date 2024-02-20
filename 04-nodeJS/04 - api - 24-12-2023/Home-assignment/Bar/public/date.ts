<<<<<<< HEAD
function getDate() {
  let date = new Date();
  return "Date = " + date;
}

const container = document.querySelector(".container") as HTMLDivElement;
const dateParagaph = document.createElement("p") as HTMLParagraphElement;
container.appendChild(dateParagaph);

function handleButtonClick(event: MouseEvent) {
  let target = event.target as HTMLButtonElement;
  if (target) {
    dateParagaph.textContent = getDate();
  }
}
=======
function getDate() {
  let date = new Date();
  return "Date = " + date;
}

const container = document.querySelector(".container") as HTMLDivElement;
const dateParagaph = document.createElement("p") as HTMLParagraphElement;
container.appendChild(dateParagaph);

function handleButtonClick(event: MouseEvent) {
  let target = event.target as HTMLButtonElement;
  if (target) {
    dateParagaph.textContent = getDate();
  }
}
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
