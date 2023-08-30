class MemoryGame {
    firstCard: HTMLElement | null = null;
    counter = 0;
    busy = false;
    selectedClicks = 0;
    gameEnd = false;
    seconds = 90;
    clicks = document.querySelector(".clicks") as HTMLParagraphElement;
    constructor(private container: Element, private images: string[]) {
        this.initCards();
    }

    initCards() {
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }

        console.log(this.container);
        this.counter = 0;
        this.gameEnd = false;
        this.selectedClicks = 0;
        const gameDiv = document.createElement("div");
        gameDiv.className = "memory-game";
        this.container.appendChild(gameDiv);
        this.timer();
        cards.forEach((card) => this.createCard(gameDiv, card));
    }

    createCard(container: Element, imageSrc: string) {
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

    cardFlip(event: MouseEvent) {
        const card = event.target as HTMLElement;

        if (this.busy || card.classList.contains("selected") || this.gameEnd) {
            return;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            card.classList.add("selected");
            this.selectedClicks++
            this.clickCount()
            return;
        }
        const secondCard = card;
        secondCard.classList.add("selected");
        this.selectedClicks++
        this.clickCount()


        if(this.selectedClicks >= 99) {
            let lose = document.querySelector(".lose") as HTMLElement;
            lose.textContent = `max clicks! you lose with ${this.selectedClicks} clicks and ${this.seconds} seconds`;
            lose.style.display = "block";
            this.removeAllSelectedClass();
            this.endGame();
            this.timer();
            this.selectedClicks = 0;
        }

        if (this.firstCard.dataset.cardName === secondCard.dataset.cardName) {
            this.firstCard = null;
            this.counter++;
            if (this.counter == this.images.length) {
                this.endGame()
                const win = document.querySelector(".win") as HTMLParagraphElement;
                win.style.display = "block";
                win.textContent = `You won with ${this.selectedClicks} clicks`
                this.gameEnd = true;
            }
        } else {
            this.busy = true;
            setTimeout(() => {
                this.firstCard?.classList.remove("selected");
                secondCard?.classList.remove("selected");
                this.firstCard = null;
                this.busy = false;
            }, 1000);
        }
    }


    clickCount(){
        this.clicks.textContent = `number of click remaining ${(-this.selectedClicks + (100))}`
        if(this.clicks.style.display = "inline-block") {
            return;
        }
        this.clicks.style.display = "inline-block";
    }

    randomizeCards(cards: string[]) {
        cards.sort(() => Math.random() > 0.5 ? 1 : -1);
    }

    endGame() {
        const win = document.querySelector(".win") as HTMLParagraphElement;
        const main = document.querySelector(".main") as HTMLButtonElement;
        const reset = document.querySelector(".reset") as HTMLButtonElement;
        const buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
        let lose = document.querySelector(".lose") as HTMLParagraphElement;
        this.gameEnd = true;
        this.clicks.style.display = "none";


        buttons.forEach((button) => {
            button.style.display = "inline-block"
        })
        reset.addEventListener("click", (event) => {
            let target = event.target as HTMLElement;
            if (target) {
                this.initCards()
                win.style.display = "none";
                main.style.display = "none";
                reset.style.display = "none";
                lose.style.display = "none";
                this.seconds = 90;
            }
        })
    }

    removeAllSelectedClass() {
        if (this.gameEnd) {
            const cardElements = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
            cardElements.forEach(card => {
                card.classList.remove('selected');
            });
        }
    }


    timer() {
        let timer = document.querySelector(".timer") as HTMLParagraphElement;
        timer.style.display = "block"
        let timerStart = setInterval(() => {
            timer.textContent = `time left ${--this.seconds}`
            if (this.seconds === 0) {
                clearInterval(timerStart);
                this.lose();
                this.endGame();
                this.removeAllSelectedClass();
                timer.style.display = "none";
            }
        }, 1000)
        if (this.gameEnd) {
            clearInterval(timerStart);
            timer.style.display = "none";
        }
    }

    lose() {
        let lose = document.querySelector(".lose") as HTMLParagraphElement;
        this.gameEnd = true;
        lose.textContent = `times over! you lose with ${this.selectedClicks} clicks and ${this.seconds} seconds`;
        lose.style.display = "block";
    }

}


const wrapper = document.querySelector(".game-container")!;
let hard = [
    "../images/image-1.png",
    "../images/image-2.png",
    "../images/image-3.png",
    "../images/image-4.png",
    "../images/image-5.png",
    "../images/image-6.png",
    "../images/image-7.png",
    "../images/image-8.png",
    "../images/image-9.png",
    "../images/image-10.png",
    "../images/image-11.png",
    "../images/image-12.png",
    "../images/image-13.png",
    "../images/image-14.png",
    "../images/image-15.png",
    "../images/image-16.png"]
const memoryGame = new MemoryGame(wrapper, hard);