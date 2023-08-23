var flag = 0;
var forwordButton = document.querySelector("button");
var leftButton = document.querySelector("#buttonLeft");
var imageBox = document.querySelector("#boxId");
forwordButton === null || forwordButton === void 0 ? void 0 : forwordButton.addEventListener("click", function () { movePic(imageBox, "right"); });
leftButton === null || leftButton === void 0 ? void 0 : leftButton.addEventListener("click", function () { movePic(imageBox, "left"); });
var someImages = ["1.jpg", "2.jpg", "3.jpeg"];
function movePic(imageBox, direction) {
    if (direction == "right") {
        if (flag < someImages.length - 1)
            flag++;
        else
            flag = 0;
    }
    else {
        if (flag == 0)
            flag = someImages.length - 1;
        else
            flag--;
    }
    imageBox.style.backgroundImage = "url(" + someImages[flag] + ")";
}
