document.querySelector("*")?.addEventListener("click",(Event)=> {print(Event.clientX, Event.clientY);}); 
let DIV  = document.querySelector("div") as HTMLElement;
function print (x: number,y: number){
    console.log(`the x is:${x}`);
    console.log(`the y is:${y}`);
    if (DIV){
    DIV.style.color ='white';
    DIV.style.width = '200px';
}
}

