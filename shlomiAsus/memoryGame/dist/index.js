"use strict";
let myContainer = document.querySelector(".container");
let imagesArray = ["image-1.png", "image-1.png", "image-2.png", "image-2.png", "image-3.png", "image-3.png", "image-4.png", "image-4.png"];
imagesArray.forEach((imagesArray, index) => createImage(imagesArray, myContainer, index));
function createImage(tempImage, myContainer, index) {
    let createDiv = document.createElement("DIV");
    createDiv.classList.add("my_Image");
    createDiv.id = "image" + imagesArray[index];
    createDiv.style.backgroundImage = `url(images/${imagesArray[index]})`;
    createDiv.addEventListener("click", (event) => check(event));
    myContainer.appendChild(createDiv);
}
let flag = false;
let choiseOne, choiseTwo;
function check(event) {
    if (flag == false) {
        let card1 = event.target;
        card1.classList.add("my_Image1");
        console.log(`card class: ${card1.className}`);
        choiseOne = card1;
        flag = true;
    }
    else {
        let card2 = event.target;
        card2.classList.add("my_Image1");
        console.log(`card class: ${card2.className}`);
        choiseTwo = card2;
        if (choiseOne.innerHTML == choiseTwo.innerHTML)
            alert("win");
        flag = false;
        choiseOne.classList.remove("my_Image1");
        choiseTwo.classList.remove("my_Image1");
    }
}
