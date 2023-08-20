const hoverDiv = document.querySelector(".hoverDiv") as HTMLElement;

hoverDiv.addEventListener("mouseenter", hoverFumnc);
hoverDiv.addEventListener("mouseleave", hoverToInit);


function hoverFumnc(event:MouseEvent){
    hoverDiv.style.backgroundColor = "black";
    hoverDiv.style.color = "white";
}

function hoverToInit(event:MouseEvent){
    hoverDiv.style.backgroundColor = "initial";
    hoverDiv.style.color = "initial";
}

const favKEy = document.querySelector('.favKey span') as HTMLElement;
const keyDown = document.querySelector('.favKey input') as HTMLInputElement;

keyDown.addEventListener("keydown", keyUsed);

/*NOt finished! just strated working on it .... */

function keyUsed(event:Event){
    favKEy.innerText = "";
    favKEy.innerText = keyDown.value;
    keyDown.value = "";
}

