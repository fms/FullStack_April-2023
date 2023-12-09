import React from 'react';

const cards: NodeListOf<Element> = document.querySelectorAll(".card");
const timeTag: HTMLElement = document.querySelector(".time b");
const flipsTag: HTMLElement = document.querySelector(".flips b");
const refreshBtn: HTMLElement = document.querySelector(".details button");

let maxTime: number = 90;
let timeLeft: number = maxTime;
let flips: number = 0;
let matchedCard: number = 0;
let disableDeck: boolean = false;
let isPlaying: boolean = false;
let cardOne: Element, cardTwo: Element, timer: number;

function initTimer(): void {
  if (timeLeft <= 0) {
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerText = timeLeft.toString();
}

function flipCard({ target: clickedCard }: { target: Element }): void {
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
    let cardOneImg: string = cardOne.querySelector(".back-view img").src,
      cardTwoImg: string = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1: string, img2: string): void {
  if (img1 === img2) {
    matchedCard++;
    if (matchedCard == 6 && timeLeft > 0) {
      return clearInterval(timer);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = null;
    disableDeck = false;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = null;
      disableDeck = false;
    }, 1200);
  }
}

function shuffleCard(): void {
  timeLeft = maxTime;
  flips = matchedCard = 0;
  cardOne = cardTwo = null;
  clearInterval(timer);
  timeTag.innerText = timeLeft.toString();
  flipsTag.innerText = flips.toString();
  disableDeck = isPlaying = false;

  let arr: number[] = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  cards.forEach((card: Element, index: number) => {
    card.classList.remove("flip");
    let imgTag: HTMLImageElement = card.querySelector(".back-view img");
    setTimeout(() => {
      imgTag.src = `images/img-${arr[index]}.png`;
    }, 500);
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach((card: Element) => {
  card.addEventListener("click", flipCard);
});