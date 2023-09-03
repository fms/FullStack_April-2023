const Images: string[] = [
    "https://www.lametayel.co.il/limages/5fd43d3b726c271870c59b8bfe171704.jpeg?size=798x416",
    "https://static.wixstatic.com/media/ef3613_6ba0ed2ea96a4243bdc0c49c83eec395.jpg/v1/fill/w_560,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ef3613_6ba0ed2ea96a4243bdc0c49c83eec395.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-3ig0NooHR64VhZmTEP49223pYa1-l8B72Qo0IwoQMCcu6sE7YcGPyAEZBSCY1Nt4Vg&usqp=CAU"
];

//הופך את האלמנטים של התיבה והכפתורים לJS
let box: HTMLElement = document.querySelector(".box")!;
let nextbuton: HTMLElement = document.querySelector(".nextbuton")!;
let backbuton: HTMLElement = document.querySelector(".backbuton")!;

//מאתחל את התמונה שיש בBOX
let i = 0;
box.style.backgroundImage = `url(${Images[i]})`;

//כפתור להעביר קדימה
nextbuton.addEventListener("click", () => {
    if(i<Images.length -1){
    i++;
    box.style.backgroundImage = `url(${Images[i]})`;
    console.log(`${i}`);
    
    }
})

//כפתור להעביר אחורה
backbuton.addEventListener("click", () => {
    if(i>0){        
        i--;
        box.style.backgroundImage = `url(${Images[i]})`;
    }
})
