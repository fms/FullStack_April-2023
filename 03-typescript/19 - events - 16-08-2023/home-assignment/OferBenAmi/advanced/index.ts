
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
    console.dir(event)
    let target = event.target as HTMLElement

    buttons.forEach(button =>{
        button.classList.remove('active');
    })

    contents.forEach(content =>{
        content.classList.remove('active');
    })
    buttons.forEach((button, index )=>{
        if(target.id == button.id){            
            buttons[index].classList.add('active');
            contents[index].classList.add('active');
        }
    })
}