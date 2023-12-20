let titleButton = document.querySelector(".header-button") as HTMLButtonElement;

if(titleButton) {
    titleButton.addEventListener('click', (event) => {
        if(event) {
            alert("Clicked!")
        }
    })
}
