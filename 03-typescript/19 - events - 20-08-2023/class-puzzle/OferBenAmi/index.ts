const table = document.querySelector(".table");

let active: HTMLElement;

table?.addEventListener("click", (e) => {
  // if(e.target === ``)
  let target = e.target as HTMLElement;
  if (target.tagName === `TD`) {
    let a = e.target as HTMLElement;
    a.style.backgroundColor = `black`;

    if (active) {
      active.style.backgroundColor = "initial";
    }
    active = a;
  }
});
