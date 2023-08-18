let pass1 = document.querySelector('.pass1') as HTMLInputElement;
let pass2 = document.querySelector('.pass2') as HTMLInputElement;
const error = document.querySelector('.error') as HTMLElement;

let pass1Value:string;
let pass2Value:string;

pass1?.addEventListener('input',(e)=>{
    
    
})
pass2?.addEventListener('input',(e)=>{
    console.log(pass2.value);
   
})



setInterval( ()=>{

    if(pass1.value != pass2.value ) error.style.opacity = `100%`;
    else error.style.opacity = `0`
},10)