let parents = document.querySelectorAll(".parent")
parents.forEach((element) => {
    (element as HTMLElement).style.backgroundColor = "green"
})

let secondParent = (parents[1] as HTMLElement).style.backgroundColor = "yellow"

let grandparents = document.querySelectorAll(".grandparent")
let firstgrandparent = (grandparents[0] as HTMLElement).style.backgroundColor = "black"

