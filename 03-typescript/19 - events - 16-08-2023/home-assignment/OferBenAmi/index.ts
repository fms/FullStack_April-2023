
const container = document.querySelector(".containar");

const box = document.createElement("div");

box.style.width = `500px`
box.style.height = `500px`
box.style.display = `flex`
box.style.justifyContent = `center`
box.style.alignItems = `center`

const boxColor = `blue`;
box.style.backgroundColor = `blue`;
container?.appendChild(box);

const keyPressed = document.createElement('h1');
keyPressed.style.fontSize = `180px`;
keyPressed.style.fontFamily = `Courier New`;

box.appendChild(keyPressed);

document.addEventListener('keypress', (event) => keyPressed.textContent = event.key);

box.addEventListener('mouseover', ()=>{
    box.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255}, ${Math.random()*255})`;

})

box.addEventListener('mouseleave', () =>{
    box.style.backgroundColor = 'blue'
})
