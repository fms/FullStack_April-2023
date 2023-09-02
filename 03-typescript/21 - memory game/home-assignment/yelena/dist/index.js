var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MemoryGame = /** @class */ (function () {
    function MemoryGame(container, images) {
        this.container = container;
        this.images = images;
        this.firstCard = null;
        this.counter = 0;
        this.busy = false;
        this.initCards();
    }
    MemoryGame.prototype.initCards = function () {
        var _this = this;
        var cards = __spreadArrays(this.images, this.images);
        this.randomizeCards(cards);
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
        if (this.counter == this.images.length) {
            this.container.textContent = "You win!";
        }
        console.log(this.container);
        this.counter = 0;
        setTimeout(function () {
            _this.container.textContent = "";
            var gameDiv = document.createElement("div");
            gameDiv.className = "memory-game";
            _this.container.appendChild(gameDiv);
            cards.forEach(function (card) { return _this.createCard(gameDiv, card); });
        }, 1000);
    };
    MemoryGame.prototype.createCard = function (container, imageSrc) {
        var _this = this;
        var card = document.createElement("div");
        card.classList.add("card");
        card.dataset.cardName = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
        container.appendChild(card);
        var front = document.createElement("img");
        front.classList.add("front");
        front.src = imageSrc;
        card.appendChild(front);
        var back = document.createElement("div");
        back.classList.add("back");
        card.appendChild(back);
        card.addEventListener("click", function (event) { return _this.cardFlip(event); });
    };
    MemoryGame.prototype.cardFlip = function (event) {
        var _this = this;
        var card = event.target;
        if (this.busy || card.classList.contains("selected")) {
            return;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            card.classList.add("selected");
            return;
        }
        var secondCard = card;
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
            setTimeout(function () {
                var _a;
                (_a = _this.firstCard) === null || _a === void 0 ? void 0 : _a.classList.remove("selected");
                secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.remove("selected");
                _this.firstCard = null;
                _this.busy = false;
            }, 1000);
        }
    };
    MemoryGame.prototype.randomizeCards = function (cards) {
        var _a;
        var len = cards.length;
        // cards.sort(() => Math.random() > 0.5 ? 1 : -1);
        for (var i = 0; i < len; i++) {
            var randomIndex = Math.floor(Math.random() * (len - i));
            _a = [cards[randomIndex], cards[i]], cards[i] = _a[0], cards[randomIndex] = _a[1];
        }
    };
    return MemoryGame;
}());
var wrapper = document.querySelector(".game-container");
var memoryGame = new MemoryGame(wrapper, [
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
