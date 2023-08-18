let pass1 = document.querySelector('.pass1') as HTMLInputElement;
let pass2 = document.querySelector('.pass2') as HTMLInputElement;
const error = document.querySelector('.error') as HTMLElement;

setInterval( ()=>{
    if(pass1.value != pass2.value ) error.style.opacity = `100%`;
    else error.style.opacity = `0`
},10)