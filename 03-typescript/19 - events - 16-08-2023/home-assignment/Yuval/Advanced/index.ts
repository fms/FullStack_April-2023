let homeButton = document.querySelector(`.tab-button`) as HTMLButtonElement;
let aboutButton = document.querySelector(`.tab-button:nth-child(2)`) as HTMLButtonElement;
let contactButton = document.querySelector(`.tab-button:nth-child(3)`) as HTMLButtonElement;

let homeContent = document.querySelector(`.content`) as HTMLElement;
let aboutContent = document.querySelector(`.content:nth-child(2)`) as HTMLElement;
let contactContent = document.querySelector(`.content:nth-child(3)`) as HTMLElement;

homeButton.addEventListener("click", showActive);
aboutButton.addEventListener("click", showActive);
contactButton.addEventListener("click", showActive);


function showActive(event: Event) {
    homeButton.style.backgroundColor = "#bccbe9"
    aboutButton.style.backgroundColor = "#bccbe9"
    contactButton.style.backgroundColor = "#bccbe9"
    homeContent.style.display = "none";
    aboutContent.style.display = "none";
    contactContent.style.display = "none";

    switch(event.target) {
        case homeButton:
            homeButton.style.backgroundColor = "white";
            homeContent.style.display = "block";
            break;
        case aboutButton:
            aboutButton.style.backgroundColor = "white";
            aboutContent.style.display = "block";
            break;
        case contactButton:
            contactButton.style.backgroundColor = "white";
            contactContent.style.display = "block";
            break;        
    }
}