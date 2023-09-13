// let editMode = false

// class UserDetails {
//     constructor(public email: string,
//         public username: string,
//         public password: string) { }
// }

// function submitForm(event: MouseEvent) {
//     event.preventDefault()

//     let email = (document.querySelector(".email") as HTMLInputElement).value;
//     let username = (document.querySelector(".username") as HTMLInputElement).value;
//     let password = (document.querySelector(".password") as HTMLInputElement).value;
//     let user = new UserDetails(email, username, password)


//     createTable(user, event)
// }

// function createTable(user: UserDetails, event: MouseEvent) {
//     let userDetailsTable = document.querySelector(".userDetailsTable table") as HTMLTableElement;
//     let tr = document.createElement("tr");
//     let buttonsCell = document.createElement("td")

//     let editButton = document.createElement("input")
//     editButton.type = "button"
//     editButton.value = "Edit"
//     editButton.id = "Edit"
//     buttonsCell.appendChild(editButton)
//     editButton.addEventListener("click", () => editUser(event, buttonsCell, user, emailCell, usernameCell, passwordCell))


//     let deleteButton = document.createElement("input")
//     deleteButton.type = "button"
//     deleteButton.value = "Delete"
//     editButton.id = "Delete"
//     buttonsCell.appendChild(deleteButton)

//     let selectDelete = document.createElement("input")
//     selectDelete.type = "checkbox"
//     buttonsCell.appendChild(selectDelete)

//     let emailCell = document.createElement("td");
//     emailCell.textContent = user.email;
//     tr.appendChild(emailCell);

//     let usernameCell = document.createElement("td");
//     usernameCell.textContent = user.username;
//     tr.appendChild(usernameCell);

//     let passwordCell = document.createElement("td");
//     passwordCell.textContent = user.password;
//     tr.appendChild(passwordCell);

//     tr.appendChild(buttonsCell);
//     userDetailsTable.appendChild(tr);
// }

// function editUser(event: MouseEvent, buttonsCell: HTMLTableCellElement, user: UserDetails, emailCell: HTMLTableCellElement, usernameCell: HTMLTableCellElement, passwordCell: HTMLTableCellElement) {
//     let target = event.target as HTMLInputElement;

//     if (target && !editMode) {
//         let update = document.createElement("input")
//         update.type = "button"
//         update.value = "Update"
//         buttonsCell.appendChild(update)
//         updateButtonHandler("click", () => updateButtonHandler(user, emailCell, usernameCell, passwordCell))

//         let cancel = document.createElement("input")
//         cancel.type = "button"
//         cancel.value = "Cancel"
//         buttonsCell.appendChild(cancel)
//         cancelButtonHandler(cancel, update, buttonsCell)

//         editMode = true
//     }
// }

// function cancelButtonHandler(cancel: HTMLInputElement, update: HTMLInputElement, buttonsCell: HTMLTableCellElement) {
//     cancel.addEventListener("click", () => {
//         buttonsCell.removeChild(cancel)
//         buttonsCell.removeChild(update)
//         editMode = false
//     })
// }

// function updateButtonHandler(user: UserDetails, emailCell: HTMLTableCellElement, usernameCell: HTMLTableCellElement, passwordCell: HTMLTableCellElement) {
//     emailCell.textContent = user.email;
//     usernameCell.textContent = user.username;
//     passwordCell.textContent = user.password;
// }