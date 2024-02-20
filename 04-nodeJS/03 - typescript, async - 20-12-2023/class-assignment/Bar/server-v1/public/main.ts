<<<<<<< HEAD
const main = document.querySelector(".main") as HTMLDivElement;
const div = document.createElement("div") as HTMLDivElement;
const h2 = document.createElement("h2") as HTMLElement;
const input = document.createElement("input") as HTMLInputElement;
const input2 = document.createElement("input") as HTMLInputElement;
const button = document.createElement("button") as HTMLButtonElement;

h2.textContent = "Enter some text";
button.textContent = "Click";

button.addEventListener("click", (event: MouseEvent) => {
    console.log(event);
})

div.append(h2);
div.append(button);
div.append(input);
div.append(input2);
main.append(div);
=======
const main = document.querySelector(".main") as HTMLDivElement;
const div = document.createElement("div") as HTMLDivElement;
const h2 = document.createElement("h2") as HTMLElement;
const input = document.createElement("input") as HTMLInputElement;
const input2 = document.createElement("input") as HTMLInputElement;
const button = document.createElement("button") as HTMLButtonElement;

h2.textContent = "Enter some text";
button.textContent = "Click";

button.addEventListener("click", (event: MouseEvent) => {
    console.log(event);
})

div.append(h2);
div.append(button);
div.append(input);
div.append(input2);
main.append(div);
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
