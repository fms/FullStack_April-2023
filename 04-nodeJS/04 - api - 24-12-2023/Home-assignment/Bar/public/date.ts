function getDate() {
  let date = new Date();
  return "Date = " + date;
}

const container = document.querySelector(".container") as HTMLDivElement;
const dateParagaph = document.createElement("p") as HTMLParagraphElement;
container.appendChild(dateParagaph);

function handleClick(event: MouseEvent) {
  let target = event.target as HTMLButtonElement;
  if (target) {
    dateParagaph.textContent = getDate();
  }
}
