let flag = 0;
let forwordButton = document.querySelector("button");
let leftButton = document.querySelector("#buttonLeft");
let imageBox = document.querySelector("#boxId") as HTMLElement;
forwordButton?.addEventListener("click", () => { movePic(imageBox, "right") });
leftButton?.addEventListener("click", () => { movePic(imageBox, "left") });
let someImages = [`1.jpg`, "2.jpg", "3.jpeg"];

function movePic(imageBox: HTMLElement, direction: string) {
    if (direction == "right") {
        if (flag < 2)
            flag++;
        else
            flag = 0;
    }
    else {
        if (flag == 0)
            flag=2;
        else
            flag --;
    }
    imageBox.style.backgroundImage = `url(${someImages[flag]})`;
}

