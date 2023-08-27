"use strict";
class MemoryGame {
    constructor(container) {
        this.container = container;
        this.images = [
            "images/image-1.png",
            "images/image-2.png",
            "images/image-3.png",
            "images/image-4.png",
            "images/image-5.png",
            "images/image-6.png",
            "images/image-7.png",
            "images/image-8.png",
        ];
        this.firstCard = null;
        this.counter = 0;
        this.busy = false;
        this.initCards();
    }
    initCards() {
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
        if (this.counter == 1) {
            this.container.textContent = "You win!";
        }
        console.log(this.container);
        this.counter = 0;
        setTimeout(() => {
            this.container.textContent = "";
            cards.forEach((card) => this.createCard(this.container, card));
        }, 1000);
    }
    // this.initCards();
    createCard(container, imageSrc) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.cardName = imageSrc;
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
            this.counter++;
            if (this.counter == 1) {
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
const memoryGame = new MemoryGame(wrapper);
