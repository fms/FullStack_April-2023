"use strict";

var cards = document.querySelectorAll(".card"),
    timeTag = document.querySelector(".time b"),
    flipsTag = document.querySelector(".flips b"),
    refreshBtn = document.querySelector(".details button");
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
  timeTag.innerText = timeLeft;
}

function flipCard(_ref) {
  var clickedCard = _ref.target;

  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }

  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");

    if (!cardOne) {
      return cardOne = clickedCard;
    }

    cardTwo = clickedCard;
    disableDeck = true;
    var cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
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
    cardOne = cardTwo = "";
    return disableDeck = false;
  }

  setTimeout(function () {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);
  setTimeout(function () {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  timeLeft = maxTime;
  flips = matchedCard = 0;
  cardOne = cardTwo = "";
  clearInterval(timer);
  timeTag.innerText = timeLeft;
  flipsTag.innerText = flips;
  disableDeck = isPlaying = false;
  var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  arr.sort(function () {
    return Math.random() > 0.5 ? 1 : -1;
  });
  cards.forEach(function (card, index) {
    card.classList.remove("flip");
    var imgTag = card.querySelector(".back-view img");
    setTimeout(function () {
      imgTag.src = "images/img-".concat(arr[index], ".png");
    }, 500);
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();
refreshBtn.addEventListener("click", shuffleCard);
cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});