//RADIO

let form = document.querySelector("form")!;
let login: HTMLElement = document.querySelector("#log")!;

form.addEventListener(
  "submit",
  (ev) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}/r`;
    }
    login.innerText = output;
    ev.preventDefault();
  },
  false
);
