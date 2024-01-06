class IdCard {
    constructor(public name: string, public lastName: string, public email: string) { }
}
function createCard(event: MouseEvent) {
    const form = document.querySelector(".cardForm") as HTMLFormElement;
    const userName = document.querySelector(".name") as HTMLInputElement;
    const lastName = document.querySelector(".lastName") as HTMLInputElement;
    const email = document.querySelector(".email") as HTMLInputElement;

    const card = new IdCard(userName.value, lastName.value, email.value);
    cardTemplate(card);
}

function cardTemplate(card: IdCard) {
    const userCards = document.querySelector(".userCard") as HTMLDivElement;
    const userName = document.createElement("p") as HTMLParagraphElement;
    const userLastName = document.createElement("p") as HTMLParagraphElement;
    const userEmail = document.createElement("p") as HTMLParagraphElement;

    userName.textContent = card.name;
    userLastName.textContent = card.lastName;
    userEmail.textContent = card.email;

    userCards.append(userName);
    userCards.append(userLastName);
    userCards.append(userEmail);
}
