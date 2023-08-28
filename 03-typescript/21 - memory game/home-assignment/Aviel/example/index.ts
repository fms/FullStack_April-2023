

// var counter = 10; var timerId: number | undefined;

//         timerId = setInterval("ShowAlert()", 1000);

//         function ShowAlert() {
//             if (counter != 0) {
//                 alert(counter);
//                 counter = counter - 1;
//             }
//             else {
//                 clearInterval(timerId);
//             }
//         }


class MemoryGame {
    firstCard: HTMLElement | null = null;
    counter = 0;
    wrong_counter = 0;
    busy = false;

    constructor(private container: Element, private images: string[]) {
        this.initCards();
    }

    initCards() {
        let cards = [...this.images, ...this.images];
        this.randomizeCards(cards);

        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
        if (this.counter == this.images.length) {
            this.container.textContent = "You win!";
           


        }

        console.log(this.container);
        this.counter = 0;
        setTimeout(() => {
            this.container.textContent = "";
            const gameDiv = document.createElement("div");
            gameDiv.className = "memory-game";
            this.container.appendChild(gameDiv);
            cards.forEach((card) => this.createCard(gameDiv, card));
        }, 1000);
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
            return;
        }

        const secondCard = card;
        secondCard.classList.add("selected");

        if (this.firstCard.dataset.cardName === secondCard.dataset.cardName) {
            this.firstCard = null;
            this.counter++;
           
            let my_total_points = document.querySelector("#H1_COUNTER") as HTMLParagraphElement
            my_total_points.textContent = this.counter + " " + "Good points"

           
            
                
            if (this.counter == this.images.length) {
                this.initCards();
            }
        } else {
            this.busy = true;
            setTimeout(() => {
                this.firstCard?.classList.remove("selected");
                secondCard?.classList.remove("selected");
                this.firstCard = null;
                this.busy = false;
            }, 1000);
            this.wrong_counter++;
            let my_wrong_points = document.querySelector("#wrong_COUNTER") as HTMLParagraphElement
            my_wrong_points.textContent = this.wrong_counter + " " + "Bad points"

        }
    }

    randomizeCards(cards: string[]) {
        const len = cards.length;
        // cards.sort(() => Math.random() > 0.5 ? 1 : -1);
        for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * (len - i));
            [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
        }
    }
}

const wrapper = document.querySelector(".game-container")!;
const memoryGame = new MemoryGame(wrapper, [
    "images/image-1.png",
    "images/image-2.png",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.png",
    "images/image-7.png",
    "images/image-8.png",
]





);

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