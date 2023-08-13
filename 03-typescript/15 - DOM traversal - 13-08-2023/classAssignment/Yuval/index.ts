function changeColor(element :Element, color: string = "brown") {
    (element as HTMLElement).style.backgroundColor = color;
}

function grandparentChangeColor(color: string= "brown") {
    let gp = document.getElementById("grandparent-id");
    if(gp) {
        changeColor(gp, color);
    }
}

function changeHeight(element: Element, height: number = 50) {
    (element as HTMLElement).style.height = `${height}px`;
}

function childrenChangeHeight(height: number = 50) {
    let children = document.getElementsByClassName("child");
    let childArray = [...children];
    childArray.forEach(child => changeHeight(child, height));
}