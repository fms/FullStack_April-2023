"use strict";
let homeButton = document.querySelector(`.tab-button`);
let aboutButton = document.querySelector(`.tab-button:nth-child(2)`);
let contactButton = document.querySelector(`.tab-button:nth-child(3)`);
let homeContent = document.querySelector(`.content`);
let aboutContent = document.querySelector(`.content:nth-child(2)`);
let contactContent = document.querySelector(`.content:nth-child(3)`);
homeButton.addEventListener("click", showActive);
aboutButton.addEventListener("click", showActive);
contactButton.addEventListener("click", showActive);
function showActive(event) {
    homeButton.style.backgroundColor = "#bccbe9";
    aboutButton.style.backgroundColor = "#bccbe9";
    contactButton.style.backgroundColor = "#bccbe9";
    homeContent.style.display = "none";
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
    switch (event.target) {
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
