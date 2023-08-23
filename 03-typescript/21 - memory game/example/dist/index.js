"use strict";
const container = document.querySelector(".game-container");
const dimension = 4;
const images = [
    "images/image-1.png",
    "images/image-2.png",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.png",
    "images/image-7.png",
    "images/image-8.png",
];
const cards = [...images, ...images];
console.log(container);
cards.forEach((card) => createCard(container, card));
function createCard(container, imageSrc) {
    const card = document.createElement("div");
    card.classList.add("item");
    container.appendChild(card);
    const image = document.createElement("img");
    image.src = imageSrc;
    card.appendChild(image);
    card.addEventListener("click", (event) => cardFlip(event));
}
let firstCard = null;
let secondCard = null;
let counter = 0;
function cardFlip(event) {
    const card = event.target;
    if (card.classList.contains("selected") ||
        card.classList.contains("matched")) {
        return;
    }
    if (!firstCard) {
        firstCard = card;
        card.classList.add("selected");
        return;
    }
    if (!secondCard) {
        secondCard = card;
        card.classList.add("selected");
        if (firstCard.src === secondCard.src) {
            console.log("match");
            firstCard === null || firstCard === void 0 ? void 0 : firstCard.classList.remove("selected");
            firstCard === null || firstCard === void 0 ? void 0 : firstCard.classList.add("matched");
            secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.remove("selected");
            secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.add("matched");
            firstCard = null;
            secondCard = null;
        }
        else {
            console.log("Wrong");
            setTimeout(() => {
                firstCard === null || firstCard === void 0 ? void 0 : firstCard.classList.remove("selected");
                secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.remove("selected");
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}
