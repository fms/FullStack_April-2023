"use strict";
let editMode = false;
class UserDetails {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
function submitForm(event) {
    event.preventDefault();
    let email = document.querySelector(".email").value;
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let user = new UserDetails(email, username, password);
    createTable(user);
}
function createButton(value, clickHandler) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = value;
    button.addEventListener("click", clickHandler);
    return button;
}
function createTable(user) {
    const userDetailsTable = document.querySelector(".userDetailsTable table");
    const userId = document.createElement("tr");
    const buttonsCell = document.createElement("td");
    const editButton = createButton("Edit", () => editUser(buttonsCell));
    const deleteButton = createButton("Delete", (event) => deleteHandler(event));
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);
    let selectDelete = document.createElement("input");
    selectDelete.type = "checkbox";
    buttonsCell.appendChild(selectDelete);
    let emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    userId.appendChild(emailCell);
    let usernameCell = document.createElement("td");
    usernameCell.textContent = user.username;
    userId.appendChild(usernameCell);
    let passwordCell = document.createElement("td");
    passwordCell.textContent = user.password;
    userId.appendChild(passwordCell);
    userId.appendChild(buttonsCell);
    userDetailsTable.appendChild(userId);
}
function editUser(buttonsCell) {
    if (!editMode) {
        const update = createButton("Update", (event) => updateButtonHandler(event));
        const cancel = createButton("Cancel", () => removeEditButtons(cancel, update, buttonsCell));
        buttonsCell.appendChild(update);
        buttonsCell.appendChild(cancel);
        editMode = true;
    }
}
function removeEditButtons(cancel, update, buttonsCell) {
    buttonsCell.removeChild(cancel);
    buttonsCell.removeChild(update);
    editMode = false;
}
function updateButtonHandler(event) {
    var _a;
    let target = event.target;
    let userId = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    let emailCell = userId.querySelector("td:nth-child(1)");
    let usernameCell = userId.querySelector("td:nth-child(2)");
    let passwordCell = userId.querySelector("td:nth-child(3)");
    let buttonsCell = userId.querySelector("td:nth-child(4)");
    let cancel = buttonsCell === null || buttonsCell === void 0 ? void 0 : buttonsCell.lastChild;
    let email = document.querySelector(".email").value;
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    if (emailCell && usernameCell && passwordCell) {
        emailCell.textContent = email;
        usernameCell.textContent = username;
        passwordCell.textContent = password;
        removeEditButtons(cancel, target, buttonsCell);
    }
}
function deleteHandler(event) {
    var _a;
    let target = event.target;
    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement.remove();
}
