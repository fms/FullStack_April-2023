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
