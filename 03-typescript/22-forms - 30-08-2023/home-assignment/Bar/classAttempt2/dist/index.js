"use strict";
let editMode = false;
let selectedForDelete = [];
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
    const checkboxForDelete = document.createElement("input");
    checkboxForDelete.type = "checkbox";
    checkboxForDelete.addEventListener("change", () => addToCheckedList(checkboxForDelete));
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);
    buttonsCell.appendChild(checkboxForDelete);
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
        const add = document.querySelector(".add");
        const editButton = buttonsCell.querySelector("input:nth-child(1)");
        const deleteButton = buttonsCell.querySelector("input:nth-child(2)");
        const checkboxButton = buttonsCell.querySelector("input:nth-child(3)");
        add.classList.add("hidden");
        buttonsCell.appendChild(update);
        buttonsCell.appendChild(cancel);
        editButton === null || editButton === void 0 ? void 0 : editButton.classList.add("hidden");
        deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.classList.add("hidden");
        checkboxButton === null || checkboxButton === void 0 ? void 0 : checkboxButton.classList.add("hidden");
        editMode = true;
    }
}
function removeEditButtons(cancel, update, buttonsCell) {
    const add = document.querySelector(".add");
    const editButton = buttonsCell.querySelector("input:nth-child(1)");
    const deleteButton = buttonsCell.querySelector("input:nth-child(2)");
    const checkboxButton = buttonsCell.querySelector("input:nth-child(3)");
    add.classList.toggle("hidden");
    buttonsCell.removeChild(cancel);
    buttonsCell.removeChild(update);
    editButton === null || editButton === void 0 ? void 0 : editButton.classList.remove("hidden");
    deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.classList.remove("hidden");
    checkboxButton === null || checkboxButton === void 0 ? void 0 : checkboxButton.classList.remove("hidden");
    editMode = false;
}
function updateButtonHandler(event) {
    var _a;
    let target = event.target;
    const userId = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    const emailCell = userId.querySelector("td:nth-child(1)");
    const usernameCell = userId.querySelector("td:nth-child(2)");
    const passwordCell = userId.querySelector("td:nth-child(3)");
    const buttonsCell = userId.querySelector("td:nth-child(4)");
    const cancel = buttonsCell === null || buttonsCell === void 0 ? void 0 : buttonsCell.lastChild;
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
function addToCheckedList(checkBox) {
    const deleteSelectedButton = document.querySelector(".deleteSelected");
    if (checkBox.checked) {
        selectedForDelete.push(checkBox);
    }
    else {
        selectedForDelete = selectedForDelete.filter(item => item !== checkBox);
    }
    toggleDeleteButton(deleteSelectedButton);
}
function deleteSelected(event) {
    const deleteSelectedButton = document.querySelector(".deleteSelected");
    let target = event.target;
    if (target && selectedForDelete.length > 0) {
        selectedForDelete.forEach((checkbox) => {
            var _a, _b;
            if (checkbox.checked) {
                (_b = (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
                deleteSelectedButton === null || deleteSelectedButton === void 0 ? void 0 : deleteSelectedButton.classList.add("hidden");
            }
        });
    }
}
function toggleDeleteButton(deleteSelectedButton) {
    if (selectedForDelete.length > 0) {
        deleteSelectedButton === null || deleteSelectedButton === void 0 ? void 0 : deleteSelectedButton.classList.remove("hidden");
    }
    else {
        deleteSelectedButton === null || deleteSelectedButton === void 0 ? void 0 : deleteSelectedButton.classList.add("hidden");
    }
}
// Use user id to delete and update
// Relocate the overused vairables
