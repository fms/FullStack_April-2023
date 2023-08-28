// let a= prompt()!;
let a = "some text that will be removed later in this example";
const body = document.body;
console.dir(body.innerText);
console.dir(body.textContent);
// body.innerHTML = "<H1>Hello world from Typescript</H1>";
let h1 = document.createElement("h1");
body.appendChild(h1);
h1.append(a);
let myDiv = document.createElement("div");
body.removeChild(h1);
h1.remove();

// Making some changes to the page
let root = document.getElementById("root"); // Our div
console.log(`root style: ${root?.style}`);
if (root) {
    root.style.backgroundColor = "yellow";
}

let spans = document.getElementsByClassName("child");
if (spans) {
    let spanArray = [...spans];
    // spanArray.forEach(setColorBrown);
    spanArray.forEach(span => (span as HTMLSpanElement).style.backgroundColor = "brown");       // );
}

// : HTMLCollectionOf<HTMLSpanElement>

function setColorBrown(span: Element) {
    (span as HTMLSpanElement).style.backgroundColor = "brown";
}

let classes = document.querySelector(".child") as HTMLSpanElement;
if (classes) {
    // let spanArray = [...classes];
    // spanArray.forEach(setColorBrown);
    // spanArray.forEach(span => (span as HTMLSpanElement).style.backgroundColor = "brown");       // );
    classes.style.backgroundColor = "green";
}

let allClasses: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".child");
if (allClasses) {
    // spanArray.forEach(setColorBrown);
    allClasses.forEach(span => span.style.color = "white");
}


root = document.querySelector("#root");