var _a, _b;
(_a = document.querySelector("div")) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseenter", function () {
    var temp = document.querySelector("div");
    temp.style.backgroundColor = "black";
});
(_b = document.querySelector("div")) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseleave", function () {
    var temp = document.querySelector("div");
    temp.style.backgroundColor = "initial";
});
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    console.log("The User Was Pressing: " + keyPressed);
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
