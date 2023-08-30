"use strict";
let myContainer = document.querySelector(".container");
let imagesArray = ["image1", "image1", "image2", "image2", "image3", "image3", "image4", "image4"];
imagesArray.forEach((imagesArray, index) => createImage(imagesArray, myContainer, index));
function createImage(tempImage, myContainer, index) {
    let createDiv = document.createElement("DIV");
    createDiv.classList.add("my_Image");
    createDiv.id = "image" + imagesArray[index];
    createDiv.innerHTML = `${tempImage}`;
    createDiv.addEventListener("click", (event) => check(event));
    myContainer.appendChild(createDiv);
}
let flag = "no";
let choiseOne, choiseTwo;
function check(event) {
    if (flag == "no") {
        let card1 = event.target;
        card1.classList.add("my_Image1");
        console.log(`card class: ${card1.className}`);
        choiseOne = card1;
        flag = " ";
    }
    else {
        let card2 = event.target;
        card2.classList.add("my_Image1");
        console.log(`card class: ${card2.className}`);
        choiseTwo = card2;
        if (choiseOne.innerHTML == choiseTwo.innerHTML)
            alert("win");
        flag = "no";
        choiseOne.classList.remove("my_Image1");
        choiseTwo.classList.remove("my_Image1");
    }
}
