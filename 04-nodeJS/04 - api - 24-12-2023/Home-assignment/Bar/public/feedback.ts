<<<<<<< HEAD
const userInput = document.querySelector(".userInput") as HTMLInputElement;

async function getInput(userInput: string = "") {
  const response = await (userInput ? fetch(`/something/${userInput}`) : fetch("/something"));
  const random = await response.json();
  return random;
}

function handleClick(event: MouseEvent) {
  let target = event.target as HTMLButtonElement;

  if (target) {
    console.log(userInput.value);
    getInput(userInput.value);
  }
}
=======
const userInput = document.querySelector(".userInput") as HTMLInputElement;

async function getInput(userInput: string = "") {
  const response = await (userInput ? fetch(`/something/${userInput}`) : fetch("/something"));
  const random = await response.json();
  return random;
}

function handleClick(event: MouseEvent) {
  let target = event.target as HTMLButtonElement;

  if (target) {
    console.log(userInput.value);
    getInput(userInput.value);
  }
}
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
