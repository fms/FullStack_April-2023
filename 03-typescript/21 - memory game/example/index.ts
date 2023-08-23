const container = document.querySelector(".game-container")!;

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

function createCard(container: Element, imageSrc: string) {
    const card = document.createElement("div");
    card.classList.add("item");
    container.appendChild(card);

    const image = document.createElement("img");
    image.src = imageSrc;
    card.appendChild(image);

    card.addEventListener("click", (event) => cardFlip(event));
}

let firstCard: HTMLImageElement | null = null;
let secondCard: HTMLImageElement | null = null;
let counter = 0;
function cardFlip(event: MouseEvent) {
    const card = event.target as HTMLImageElement;
    if (card.classList.contains("selected") ||
    card.classList.contains("matched"))
    {
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
            firstCard?.classList.remove("selected");
            firstCard?.classList.add("matched");
            secondCard?.classList.remove("selected");
            secondCard?.classList.add("matched");
            firstCard = null;
            secondCard = null;
        } else {
            console.log("Wrong");
            setTimeout(() => {
                firstCard?.classList.remove("selected");
                secondCard?.classList.remove("selected");
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}
