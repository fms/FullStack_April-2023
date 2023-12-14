"use strict";
exports.__esModule = true;
var cards = document.querySelectorAll(".card");
var timeTag = document.querySelector(".time b");
var flipsTag = document.querySelector(".flips b");
var refreshBtn = document.querySelector(".details button");
var maxTime = 90;
var timeLeft = maxTime;
var flips = 0;
var matchedCard = 0;
var disableDeck = false;
var isPlaying = false;
var cardOne, cardTwo, timer;
function initTimer() {
    if (timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft.toString();
}
function flipCard(_a) {
    var clickedCard = _a.target;
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips.toString();
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return (cardOne = clickedCard);
        }
        cardTwo = clickedCard;
        disableDeck = true;
        var cardOneImg = cardOne.querySelector(".back-view img").src, cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;
        if (matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = null;
        disableDeck = false;
    }
    else {
        setTimeout(function () {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
        setTimeout(function () {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = null;
            disableDeck = false;
        }, 1200);
    }
}
function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = null;
    clearInterval(timer);
    timeTag.innerText = timeLeft.toString();
    flipsTag.innerText = flips.toString();
    disableDeck = isPlaying = false;
    var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(function () { return (Math.random() > 0.5 ? 1 : -1); });
    cards.forEach(function (card, index) {
        card.classList.remove("flip");
        var imgTag = card.querySelector(".back-view img");
        setTimeout(function () {
            imgTag.src = "images/img-" + arr[index] + ".png";
        }, 500);
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
refreshBtn.addEventListener("click", shuffleCard);
cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});
