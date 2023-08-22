

document.querySelector("div")?.addEventListener("mouseenter", () => {
    let temp = document.querySelector("div") as HTMLElement;
    temp.style.backgroundColor = "black"
});

document.querySelector("div")?.addEventListener("mouseleave", () =>  {
        let temp = document.querySelector("div") as HTMLElement;
            temp.style.backgroundColor = "initial"
    });

    document.addEventListener("keydown", (event) => {
        const keyPressed = event.key;
        console.log(`The User Was Pressing: ${keyPressed}`);
    });
    
// document.querySelector("div")?.addEventListener("keypress",(Event)=> console.log(Event.key)); ////---->>>>why this line is not working?

// function handelMouseOnMyObject(Ev: Event) {
//     let temp = document.querySelector("div") as HTMLElement;
//     if (Ev)
//         temp.style.backgroundColor = "black"
// }
// function handelMouseOnMyObjectExit(Ev: Event) {
//     let temp = document.querySelector("div") as HTMLElement;
//     if (Ev)
//         temp.style.backgroundColor = "initial"
// }
// function handelKeyPress(Ev: HTMLHeadingElement) {
//     let temp = Ev;
//     console.log(`the key was pressed by the user is:${temp}`)
// }

