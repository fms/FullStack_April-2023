// ## Advanced
// ### Tabs
// - Start with the HTML and CSS from https://codepen.io/Fikri-Code/pen/GRZgOWo
// - Write the javascript needed to switch the displayed contents whenever a tab is clicked.

let wrapper = document.querySelector(".wrapper") as HTMLDivElement;
let buttons = document.querySelectorAll(".tab-button") as NodeListOf<HTMLButtonElement>;
let contents = document.querySelectorAll(".content") as NodeListOf<HTMLParagraphElement>;

wrapper.addEventListener("click",making)

function making(event :Event){
    let target = event.target as HTMLElement;

    if(target.tagName === "BUTTON" && target.classList.contains("tab-button")){
        buttons.forEach(button => { 
            button.classList.remove("active")
            target.classList.add("active")

            contents.forEach(content => {
                content.classList.remove("active")
                if(content.id === target.dataset.id){
                    content.classList.add("active")
                }
            })
})
    }
}