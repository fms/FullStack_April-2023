let italy = document.getElementById("italy");
console.log(`italy style: ${italy?.style}`);
if (italy) {
    italy.style.backgroundColor = "green";
    italy.style.color = "white";
    italy.style.fontSize = "50px";
}

let milano = document.querySelector(".milano") as HTMLSpanElement;
if (milano) {
    milano.style.backgroundColor = "black";
}

let rome = document.querySelector(".rome") as HTMLSpanElement;
if (rome) {
    rome.style.backgroundColor = "black";
}
