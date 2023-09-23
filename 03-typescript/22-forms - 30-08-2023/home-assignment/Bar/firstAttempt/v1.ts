// let checkBox = document.getElementById("checkBox")
// let detailsDiv = document.querySelector(".details") as HTMLElement
// let username = ""
// let password = ""
// let email = ""

// checkBox?.addEventListener("click", (event) => deleteAll(event))

// function handleSubmit(event: MouseEvent) {
//     event.preventDefault();
//     let userDetails = document.createElement("p");
//     let deleteButton = document.createElement("button")

//     userDetails.textContent = ` Email: ${email} Username:${username} Password:${password} `;


//     deleteButton.textContent = "Delete"
//     deleteButton.addEventListener("click", () => deleteFromList(event, userDetails, deleteButton))

//     detailsDiv.appendChild(userDetails);
//     detailsDiv.appendChild(deleteButton);
// }

// function handleKeyup(event: KeyboardEvent) {
//     let target = event.target as HTMLInputElement
//     if (target.tagName === "INPUT") {
//         if (target.type === "text")
//             username = target.value
//         else if (target.type === "password")
//             password = target.value
//         else if (target.type === "email")
//             email = target.value
//     }
// }

// function deleteFromList(event: MouseEvent, listItem: HTMLElement, button: HTMLElement) {
//     let target = event.target as HTMLButtonElement
//     if (target) {
//         detailsDiv.removeChild(listItem)
//         detailsDiv.removeChild(button)
//     }
// }

// function deleteAll(event: MouseEvent) {
//     const target = event.target as HTMLInputElement;

//     if (target.type === "checkbox" && detailsDiv.textContent != "") {
//         detailsDiv.textContent = "";
//     } else {
//         alert("Nothing to delete");
//     }
// }
