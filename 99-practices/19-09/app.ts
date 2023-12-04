console.log("connected");

function logger() {
  console.log("Hello");
}

// const interval = setInterval(logger, 1000)

const btn = document.querySelector("#btn") as HTMLButtonElement;
btn.addEventListener("click", logger);
btn.addEventListener("click", scroller);

const btn2 = document.querySelector("#btn2") as HTMLButtonElement;

btn2.addEventListener("click", () => {
  btn.removeEventListener("click", logger);
  btn.disabled = true
});

function scroller() {
    window.scrollTo(0,0)
}

function getRandomArbitrary(min:number, max:number):number {
    return Math.random() * (max - min) + min;
}