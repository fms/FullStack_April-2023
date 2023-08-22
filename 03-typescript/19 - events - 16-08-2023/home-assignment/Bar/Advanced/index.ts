// let tabs = document.querySelectorAll(".tab-button") as NodeListOf<HTMLButtonElement>
// let contents = document.querySelectorAll(".content") as NodeListOf<HTMLParagraphElement>

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         tabs.forEach((otherTab) => {
//             otherTab.classList.remove("active");
//         })
//         tab.classList.add("active");

//         contents.forEach((content) => {
//             content.classList.remove("active")
//             if (content.id === tab.dataset.id) {
//                 content.classList.add("active")
//             }
//         })
//     })
// })

const tabs = document.querySelector(".wrapper")
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    
    if (target.className === "tab-button") {
        tabButton.forEach((button) => {
            button.classList.remove("active")
            target.classList.add("active")
        })

        contents.forEach((content) => {
            content.classList.remove("active")
            if (content.id === target.dataset.id) {
                content.classList.add("active")
            }
        })
    }
})



