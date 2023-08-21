
const buttons = document.querySelector('.buttonWrapper')?.querySelectorAll('.tab-button') as NodeListOf<HTMLButtonElement>
const contents = document.querySelector('.contentWrapper')?.querySelectorAll('.content') as NodeListOf<HTMLElement>

buttons.forEach(button =>{
    button.addEventListener('click',buttonClicked)
})

function buttonClicked(event :MouseEvent){
    let target = event.target as HTMLElement;

    [...contents,...buttons].forEach(something =>{
        something.classList.remove('active');
    })
    buttons.forEach((button, index )=>{
        if(target.id == button.id){            
            buttons[index].classList.add('active');
            contents[index].classList.add('active');
        }
    })
}