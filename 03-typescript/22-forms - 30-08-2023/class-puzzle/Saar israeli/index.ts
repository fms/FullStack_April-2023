function validPass(event :KeyboardEvent) {
    let target = event.target as HTMLInputElement;
    let p = document.querySelector(".error-pass") as HTMLParagraphElement;
    target.value + event.key == "greatPass" ? p.textContent = "confirmed" : p.textContent = "password too short";
    if(target.value.length > 8) {
        p.textContent = "password too long";
    }
    console.log(`${target.value}`);
    
}