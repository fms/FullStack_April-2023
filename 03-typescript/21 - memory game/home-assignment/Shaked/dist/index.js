"use strict";
const images = [
    'images/image-1.png',
    'images/image-2.png',
    'images/image-3.png',
    'images/image-4.png',
    'images/image-5.png',
    'images/image-6.png',
    'images/image-7.png',
    'images/image-8.png',
];
const cardsarray = [...images, ...images];
const container = document.querySelector('#game-container');
const shuffledCards = shuffleArray(cardsarray);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let firstCard = null;
let secondCard = null;
let canFlip = true;
let timeLeft = 120;
const timerElement = document.querySelector('#timer');
function updateTimer() {
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    }
    else {
        timerElement.textContent = 'Time is up!';
        resetGame();
    }
}
function resetGame() {
    const cards = document.querySelectorAll('.item');
    cards.forEach((card) => {
        card.classList.remove('flipped', 'correct');
    });
    const shuffledCards = shuffleArray(cardsarray);
    const backs = document.querySelectorAll('.back img');
    backs.forEach((back, index) => {
        back.src = shuffledCards[index];
    });
    firstCard = null;
    secondCard = null;
    canFlip = true;
    timeLeft = 120;
    updateTimer();
}
shuffledCards.forEach((imageSRC) => {
    const card = document.createElement('div');
    card.classList.add('item');
    container.appendChild(card);
    const front = document.createElement('div');
    front.classList.add('front');
    card.appendChild(front);
    const back = document.createElement('div');
    back.classList.add('back');
    card.appendChild(back);
    const image = document.createElement('img');
    image.src = imageSRC;
    back.appendChild(image);
    card.addEventListener('click', () => {
        if (canFlip && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            if (!firstCard) {
                firstCard = card;
            }
            else if (!secondCard) {
                secondCard = card;
                canFlip = false;
                setTimeout(() => {
                    if (firstCard && secondCard) {
                        const img1 = firstCard.querySelector('.back img');
                        const img2 = secondCard.querySelector('.back img');
                        if (img1.src === img2.src) {
                            firstCard.classList.add('correct');
                            secondCard.classList.add('correct');
                            firstCard = null;
                            secondCard = null;
                        }
                        else {
                            firstCard.classList.remove('flipped');
                            secondCard.classList.remove('flipped');
                            firstCard = null;
                            secondCard = null;
                        }
                        canFlip = true;
                    }
                }, 1000);
            }
        }
    });
});
resetGame();
