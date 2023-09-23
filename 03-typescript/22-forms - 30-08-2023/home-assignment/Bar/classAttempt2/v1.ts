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







// let editMode = false;

// class UserDetails {
//     constructor(public email: string, public username: string, public password: string) { }
// }

// function submitForm(event: SubmitEvent) {
//     event.preventDefault();

//     let email = (document.querySelector(".email") as HTMLInputElement).value;
//     let username = (document.querySelector(".username") as HTMLInputElement).value;
//     let password = (document.querySelector(".password") as HTMLInputElement).value;
//     let user = new UserDetails(email, username, password);

//     createTable(user);
// }

// function createButton(value: string, clickHandler: any) {
//     const button = document.createElement("input");
//     button.type = "button";
//     button.value = value;
//     button.addEventListener("click", clickHandler);
//     return button;
// }

// function createTable(user: UserDetails) {
//     const userDetailsTable = document.querySelector(".userDetailsTable table") as HTMLTableElement;
//     const userId = document.createElement("tr");
//     const buttonsCell = document.createElement("td");

//     const editButton = createButton("Edit", () => editButtonHandler());
//     const deleteButton = createButton("Delete", (event: MouseEvent) => deleteHandler(event));

//     buttonsCell.appendChild(editButton);
//     buttonsCell.appendChild(deleteButton);

//     let selectDelete = document.createElement("input");
//     selectDelete.type = "checkbox";
//     buttonsCell.appendChild(selectDelete);

//     let emailCell = document.createElement("td");
//     emailCell.textContent = user.email;
//     userId.appendChild(emailCell);

//     let usernameCell = document.createElement("td");
//     usernameCell.textContent = user.username;
//     userId.appendChild(usernameCell);

//     let passwordCell = document.createElement("td");
//     passwordCell.textContent = user.password;
//     userId.appendChild(passwordCell);

//     userId.appendChild(buttonsCell);
//     userDetailsTable.appendChild(userId);
// }


// function editButtonHandler() {
//     const add = document.querySelector(".add") as HTMLInputElement;
//     const form = document.querySelector("form") as HTMLFormElement;
//     const update = createButton("Update", (event: MouseEvent) => updateButtonHandler(event));
//     const cancel = createButton("Cancel", () => editButtonHandler());

//     if (!editMode) {
//         form.appendChild(update);
//         form.appendChild(cancel);
//         add.classList.add("hidden");

//         editMode = true;

//     }

//     else if (editMode) {
//         form.removeChild(cancel);
//         form.removeChild(update);
//         add.classList.remove("hidden")

//         editMode = false
//     }
// }

// function updateButtonHandler(event: MouseEvent) {
//     let target = event.target as HTMLInputElement;
//     let userId = target.parentElement?.parentElement as HTMLTableRowElement;

//     let emailCell = userId.querySelector("td:nth-child(1)");
//     let usernameCell = userId.querySelector("td:nth-child(2)");
//     let passwordCell = userId.querySelector("td:nth-child(3)");

//     let email = (document.querySelector(".email") as HTMLInputElement).value;
//     let username = (document.querySelector(".username") as HTMLInputElement).value;
//     let password = (document.querySelector(".password") as HTMLInputElement).value;


//     if (emailCell && usernameCell && passwordCell) {
//         emailCell.textContent = email;
//         usernameCell.textContent = username;
//         passwordCell.textContent = password;
//     }
// }

// function deleteHandler(event: MouseEvent) {
//     let target = event.target as HTMLInputElement;
//     target.parentElement?.parentElement!.remove()
// }







// let editMode = false;

// class UserDetails {
//     constructor(public email: string, public username: string, public password: string) { }
// }

// function submitForm(event: SubmitEvent) {
//     event.preventDefault();

//     let email = (document.querySelector(".email") as HTMLInputElement).value;
//     let username = (document.querySelector(".username") as HTMLInputElement).value;
//     let password = (document.querySelector(".password") as HTMLInputElement).value;
//     let user = new UserDetails(email, username, password);

//     createTable(user);
// }

// function createButton(value: string, clickHandler: any) {
//     const button = document.createElement("input");
//     button.type = "button";
//     button.value = value;
//     button.addEventListener("click", clickHandler);
//     return button;
// }

// function createTable(user: UserDetails) {
//     const userDetailsTable = document.querySelector(".userDetailsTable table") as HTMLTableElement;
//     const userId = document.createElement("tr");
//     const buttonsCell = document.createElement("td");

//     const editButton = createButton("Edit", () => editUser());
//     const deleteButton = createButton("Delete", (event: MouseEvent) => deleteHandler(event));

//     buttonsCell.appendChild(editButton);
//     buttonsCell.appendChild(deleteButton);

//     let selectDelete = document.createElement("input");
//     selectDelete.type = "checkbox";
//     buttonsCell.appendChild(selectDelete);

//     let emailCell = document.createElement("td");
//     emailCell.textContent = user.email;
//     userId.appendChild(emailCell);

//     let usernameCell = document.createElement("td");
//     usernameCell.textContent = user.username;
//     userId.appendChild(usernameCell);

//     let passwordCell = document.createElement("td");
//     passwordCell.textContent = user.password;
//     userId.appendChild(passwordCell);

//     userId.appendChild(buttonsCell);
//     userDetailsTable.appendChild(userId);
// }

// function editUser() {
//     if (!editMode) {
//         let form = document.querySelector("form") as HTMLFormElement;

//         const update = createButton("Update", (event: MouseEvent) => updateButtonHandler(event));
//         const cancel = createButton("Cancel", () => removeEditButtons(cancel, update, form));
//         const add = document.querySelector(".add") as HTMLInputElement;

//         form.appendChild(update);
//         form.appendChild(cancel);
//         add.classList.add("hidden")

//         editMode = true;
//     }
// }

// function removeEditButtons(cancel: HTMLInputElement, update: HTMLInputElement, form: HTMLFormElement) {
//     const add = document.querySelector(".add") as HTMLInputElement;

//     form.removeChild(cancel);
//     form.removeChild(update);
//     add.classList.remove("hidden")
//     editMode = false
// }

// function updateButtonHandler(event: MouseEvent) {
//     let target = event.target as HTMLInputElement;
//     let userId = target.parentElement?.parentElement as HTMLTableRowElement;

//     let emailCell = userId.querySelector("td:nth-child(1)");
//     let usernameCell = userId.querySelector("td:nth-child(2)");
//     let passwordCell = userId.querySelector("td:nth-child(3)");
//     let form = document.querySelector("form") as HTMLFormElement;
//     let cancel = form?.lastChild as HTMLInputElement;

//     let email = (document.querySelector(".email") as HTMLInputElement).value;
//     let username = (document.querySelector(".username") as HTMLInputElement).value;
//     let password = (document.querySelector(".password") as HTMLInputElement).value;


//     if (emailCell && usernameCell && passwordCell) {
//         emailCell.textContent = email;
//         usernameCell.textContent = username;
//         passwordCell.textContent = password;
//         removeEditButtons(cancel, target, form)
//     }
// }

// function deleteHandler(event: MouseEvent) {
//     let target = event.target as HTMLInputElement;
//     target.parentElement?.parentElement!.remove()
// }



