"use strict";
class MemoryGame {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.firstCard = null;
        this.counter = 0;
        this.busy = false;
        this.initCards();
    }
    initCards() {
        var _a, _b, _c;
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);
        // while (this.container.firstChild) {
        //   this.container.firstChild.remove();
        // }
        setTimeout(() => {
            this.container.textContent = "";
            const gameDiv = document.createElement("div");
            gameDiv.className = "memory-game";
            // this.createCunter();
            this.container.appendChild(gameDiv);
            cards.forEach((card) => this.createCard(gameDiv, card));
            this.container.addEventListener("click", () => this.createCunter(this.container));
        }, 1300);
        console.dir(this.container);
        if (this.counter == this.images.length) {
            this.container.textContent = `You win, your time is 
	  ${(_a = this.container.querySelector(".minutesP")) === null || _a === void 0 ? void 0 : _a.textContent}:
	  ${(_b = this.container.querySelector(".secondsP")) === null || _b === void 0 ? void 0 : _b.textContent}:
	  ${(_c = this.container.querySelector(".miliSecondsP")) === null || _c === void 0 ? void 0 : _c.textContent}`;
        }
        this.counter = 0;
    }
    createCunter(container) {
        const counterDiv = document.createElement("div");
        counterDiv.className = "counter";
        const miliSecondsP = document.createElement("p");
        const colon1 = document.createElement("p");
        const colon2 = document.createElement("p");
        const secondsP = document.createElement("p");
        const minutesP = document.createElement("p");
        miliSecondsP.className = `miliSecondsP`;
        secondsP.className = `secondsP`;
        minutesP.className = `minutesP`;
        colon1.textContent = `:`;
        colon2.textContent = `:`;
        miliSecondsP.textContent = `0`;
        secondsP.textContent = `0`;
        minutesP.textContent = `0`;
        counterDiv.appendChild(minutesP);
        counterDiv.appendChild(colon1);
        counterDiv.appendChild(secondsP);
        counterDiv.appendChild(colon2);
        counterDiv.appendChild(miliSecondsP);
        container.appendChild(counterDiv);
        const counterInterval = setInterval(() => {
            miliSecondsP.textContent = String(parseInt(miliSecondsP.textContent || `0`) + 1);
            if (parseInt(miliSecondsP.textContent || `0`) >= 10) {
                miliSecondsP.textContent = `0`;
                secondsP.textContent = String(parseInt(secondsP.textContent || `0`) + 1);
            }
            if (parseInt(secondsP.textContent || ``) >= 60) {
                secondsP.textContent = `00`;
                minutesP.textContent = String(parseInt(minutesP.textContent || `00`) + 1);
            }
        }, 100);
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
const wrapper2 = document.querySelector(".another-game-container");
const memoryGame2 = new MemoryGame(wrapper2, [
    "https://wallup.net/wp-content/uploads/2015/07/Little-children-on-the-field.jpg",
    "https://c.pxhere.com/photos/1e/f8/happy_kid_girl_happy_fun_people_child_cute_childhood-1198853.jpg!d",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.png",
]);
