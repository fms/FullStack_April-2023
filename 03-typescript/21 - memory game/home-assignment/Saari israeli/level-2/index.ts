class MemoryGame {
    firstCard: HTMLElement | null = null;
    counter = 0;
    busy = false;
    selectedClicks = 0;
    won = false;

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

        if (this.busy || card.classList.contains("selected")) {
            return;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            card.classList.add("selected");
            this.selectedClicks++
            return;
        }

        const secondCard = card;
        secondCard.classList.add("selected");
        this.selectedClicks++

        if (this.firstCard.dataset.cardName === secondCard.dataset.cardName) {
            this.firstCard = null;
            this.counter++;
            if (this.counter == this.images.length) {
                this.endGame()
                const win = document.querySelector(".win") as HTMLParagraphElement;
                win.style.display = "block";
                win.textContent = `You won with ${this.selectedClicks} clicks`
                this.won = true;
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

    randomizeCards(cards: string[]) {
        cards.sort(() => Math.random() > 0.5 ? 1 : -1);
    }

    endGame() {
        const win = document.querySelector(".win") as HTMLParagraphElement;
        const main = document.querySelector(".main") as HTMLButtonElement;
        const next = document.querySelector(".next") as HTMLButtonElement;
        const reset = document.querySelector(".reset") as HTMLButtonElement;
        const buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
        let lose = document.querySelector(".lose") as HTMLParagraphElement;

        buttons.forEach((button) => {
            button.style.display = "inline-block"
        })
        reset.addEventListener("click",(event) => {
            let target = event.target as HTMLElement;
            if (target) {
                this.initCards()
                win.style.display = "none";
                main.style.display = "none";
                next.style.display = "none";
                reset.style.display = "none";
                lose.style.display = "none";
            }
        })
    }


    timer() {
        let timer = document.querySelector(".timer") as HTMLParagraphElement;
        let seconds = 120;
        let timerStart = setInterval(() => {
            timer.textContent = `time left ${--seconds}`
            if(seconds === 0) {
                clearInterval(timerStart);
                this.loseTime();
                this.endGame();
            }
            if(this.won) {
                clearInterval(timerStart)
            }
        },1000)
    }

    loseTime() {
        let lose = document.querySelector(".lose") as HTMLParagraphElement;
        lose.textContent = "you lost, Time over!"
        lose.style.display = "block"
    }
    
}

const wrapper = document.querySelector(".game-container")!;
let medium = [    
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
"../images/image-12.png"]
const memoryGame = new MemoryGame(wrapper,medium);