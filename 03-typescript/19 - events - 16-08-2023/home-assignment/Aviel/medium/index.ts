

/////////// next-img 

let imageStorage :string[]= [
  "js1.png",
  "js2.png",
  "js3.png",
  
];

let images = document.querySelector("#img-slider") as HTMLImageElement;
let nextButton = document.querySelector("#next-button") as HTMLElement;
let backButton = document.querySelector("#back-button") as HTMLElement;
let imageNum = 0;

images.src = `image/${imageStorage[imageNum]}`;


function next_image() {
  
  const imge = document.querySelector('#aviel-next-button') as HTMLInputElement | null;
  
  if(imageNum === imageStorage.length - 1) {
    imageNum = -1;
}
imageNum++;
images.src = `image/${imageStorage[imageNum]}`
}


function prev_image() {
  
  const imge = document.querySelector('#aviel-prev-button') as HTMLInputElement | null;
  
  if(imageNum === imageStorage.length - 1) {
    imageNum = -1;
}
imageNum++;
images.src = `image/${imageStorage[imageNum]}`
}




/////////// password 


let firstPassword = document.querySelector("#id_pass1") as HTMLInputElement;
let secondPassword = document.querySelector("#id_pass2") as HTMLInputElement;
let passwordError = document.querySelector("#error") as HTMLParagraphElement;


function check () {

  const firstPass = firstPassword.value;
  const secondPass = secondPassword.value;

  if (firstPass === secondPass) {
    passwordError.textContent = "password confirm!"
    passwordError.style.color = "green" 
}else {
    passwordError.style.color = "red"
    passwordError.textContent = "error, not the same password - try again"
}

}

