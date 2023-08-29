"use strict";
class MemoryGame {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.firstCard = null;
        this.counter = 0;
        this.busy = false;
        this.isClicked = false;
        this.Interval = 0;
        this.time = 0;
        this.initCards();
    }
    timeformat() {
        let timer = document.querySelector('.time');
        console.log(this.time);
        this.time++;
        let minutes = Math.floor(this.time / 60);
        let min = minutes < 10 ? `0${minutes}` : minutes;
        let seconds = Math.ceil(this.time % 60);
        let sec = seconds < 10 ? `0${seconds}` : seconds;
        timer.innerHTML = `${min}:${sec}`;
    }
    initCards() {
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
        if (this.counter == this.images.length) {
            this.container.textContent = "You win!";
            clearInterval(this.Interval);
        }
        console.log(this.container);
        this.counter = 0;
        setTimeout(() => {
            this.container.textContent = "";
            const gameDiv = document.createElement("div");
            gameDiv.className = "memory-game";
            this.container.appendChild(gameDiv);
            cards.forEach((card) => this.createCard(gameDiv, card));
        }, 1000);
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
        if (this.isClicked == false) {
            let time = 0;
            this.Interval = setInterval(() => this.timeformat(), 1000);
            this.isClicked = true;
        }
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
            this.counter++;
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
        }
    }
    randomizeCards(cards) {
        const len = cards.length;
        // cards.sort(() => Math.random() > 0.5 ? 1 : -1);
        for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * (len - i));
            [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
        }
    }
}
const wrapper = document.querySelector(".game-container");
const memoryGame = new MemoryGame(wrapper, [
    "images/image-1.png",
    "images/image-2.png",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.png",
    "images/image-7.png",
    "images/image-8.png",
]);
// Example of adding another, independent game on the same page
// const wrapper2 = document.querySelector(".another-game-container")!;
// const memoryGame2 = new MemoryGame(wrapper2, [
//     "https://wallup.net/wp-content/uploads/2015/07/Little-children-on-the-field.jpg",
//     "https://c.pxhere.com/photos/1e/f8/happy_kid_girl_happy_fun_people_child_cute_childhood-1198853.jpg!d",
//     "images/image-3.png",
//     "images/image-4.png",
//     "images/image-5.png",
//     "images/image-6.png",
// ]);
