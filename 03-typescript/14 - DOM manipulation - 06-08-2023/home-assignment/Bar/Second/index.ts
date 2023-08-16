let divElement = document.createElement("div")
let h1Element = document.createElement("h1")
let buttonElement = document.createElement("BUTTON")
let inputElement = document.createElement("input")


h1Element.innerText = "To Do List"
buttonElement.innerText = "Add Task"

let inputValue = ""

function addToList(item: string) {
    let arrayTodo: string[] = []
    arrayTodo.push(item)
    arrayTodo.forEach((something) => {
        let listElement = document.createElement("li")
        listElement.innerHTML = something
        divElement.appendChild(listElement)
    })
}

inputElement.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLInputElement
    inputValue = target.value
})

buttonElement.addEventListener("click", () => {
    addToList(inputValue)
});

divElement.appendChild(h1Element)
divElement.appendChild(inputElement)
divElement.appendChild(buttonElement)

document.body.appendChild(divElement);




