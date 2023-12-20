let titleButton = document.querySelector(".header-button") as HTMLButtonElement;
// let titleHeader = document.querySelector(".header-container-title") as HTMLParagraphElement;

// const colors = ["red","blue","yellow","green"];

// function randomColor() {
//     colors.splice(Math.floor(Math.random() * (colors.length - 1)))
// }

if(titleButton) {
    titleButton.addEventListener('click', (event) => {
        if(event) {
            alert("Clicked!")
        }
    })
}
