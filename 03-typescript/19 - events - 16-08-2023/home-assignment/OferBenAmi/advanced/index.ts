
const buttons = document.querySelector('.buttonWrapper')?.querySelectorAll('.tab-button') as NodeListOf<HTMLButtonElement>
const contents = document.querySelector('.contentWrapper')?.querySelectorAll('.content') as NodeListOf<HTMLButtonElement>

enum buttonsAndContents {
    home,
    about,
    contact
}

buttons.forEach(button =>{
    button.addEventListener('click',buttonClicked)
})

function buttonClicked(event :MouseEvent){

    buttons.forEach(button =>{
        button.classList.remove('active');
    })

    contents.forEach(content =>{
        content.classList.remove('active');
    })
    
    switch(event.target){
        case buttons[buttonsAndContents.home]:
            buttons[buttonsAndContents.home].classList.add('active');
            contents[buttonsAndContents.home].classList.add('active');
            break;
        
        case buttons[buttonsAndContents.about]:
            buttons[buttonsAndContents.about].classList.add('active');
            contents[buttonsAndContents.about].classList.add('active');
            break;

        case buttons[buttonsAndContents.contact]:
            buttons[buttonsAndContents.contact].classList.add('active');
            contents[buttonsAndContents.contact].classList.add('active');
            break;
    }
}