"use strict";
const wrapper = document.querySelector(".wrapper");
const mistakes = document.createElement("div");
mistakes.classList.add("mistakes");
wrapper.appendChild(mistakes);
const header = document.createElement("h3");
header.textContent = "MISTAKES:";
let numOfMistakes = document.createElement("p");
const names = document.createElement("span");
names.textContent = "";
mistakes.appendChild(header);
mistakes.appendChild(numOfMistakes);
mistakes.appendChild(names);
class MemoryGame {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.firstCard = null;
        this.counter = 0;
        this.mistakeCounter = 0;
        this.busy = false;
        this.initCards();
    }
    initCards() {
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
        if (this.mistakeCounter == 10) {
            this.container.innerHTML = `<span class="lose-text">You lose!<br>
            Too many mistakes!</span>`;
        }
        if (this.counter == this.images.length) {
            this.container.innerHTML = `<span class="win-text">You win!<br>
            You had ${this.mistakeCounter} mistakes</span>`;
        }
        console.log(this.container);
        this.counter = 0;
        this.mistakeCounter = 0;
        names.textContent = "";
        setTimeout(() => {
            this.container.textContent = "";
            const gameDiv = document.createElement("div");
            gameDiv.className = "memory-game";
            this.container.appendChild(gameDiv);
            cards.forEach((card) => this.createCard(gameDiv, card));
        }, 1000);
        this.howManyMistakes();
    }
    howManyMistakes() {
        numOfMistakes.textContent = `${this.mistakeCounter}/10`;
    }
    gotRight(name) {
        names.textContent += `${name} `;
    }
    createCard(container, imageSrc) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.cardName = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
        container.appendChild(card);
        const front = document.createElement("img");
        front.classList.add("front");
        front.src = imageSrc;
        card.appendChild(front);
        const back = document.createElement("div");
        back.classList.add("back");
        card.appendChild(back);
        card.addEventListener("click", (event) => this.cardFlip(event));
    }
    cardFlip(event) {
        const card = event.target;
        if (this.busy || card.classList.contains("selected")) {
            return;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            card.classList.add("selected");
            return;
        }
        const secondCard = card;
        secondCard.classList.add("selected");
        if (this.firstCard.dataset.cardName === secondCard.dataset.cardName) {
            this.firstCard = null;
            let name = secondCard.dataset.cardName;
            this.counter++;
            this.gotRight(`${name === null || name === void 0 ? void 0 : name.slice(0, name === null || name === void 0 ? void 0 : name.lastIndexOf(".png"))}`);
            if (this.counter == this.images.length) {
                this.initCards();
            }
        }
        else {
            this.busy = true;
            setTimeout(() => {
                var _a;
                (_a = this.firstCard) === null || _a === void 0 ? void 0 : _a.classList.remove("selected");
                secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.remove("selected");
                this.firstCard = null;
                this.busy = false;
            }, 1000);
            this.mistakeCounter++;
            if (this.mistakeCounter == 10) {
                this.initCards();
            }
            this.howManyMistakes();
        }
    }
    randomizeCards(cards) {
        const len = cards.length;
        for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * (len - i));
            [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
        }
    }
}
const gameContainer = document.querySelector(".game-container");
const memoryGame = new MemoryGame(gameContainer, [
    "images/Lebron.png",
    "images/Luka.png",
    "images/Russ.png",
    "images/Deni.png",
    "images/Jokic.png",
    "images/Shai.png",
    "images/Curry.png",
    "images/Giannis.png",
]);
