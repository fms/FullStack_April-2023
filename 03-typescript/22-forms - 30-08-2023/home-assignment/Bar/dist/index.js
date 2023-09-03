"use strict";
let checkboxElements = [];
let detailsDiv = document.querySelector(".details");
let username = "";
let password = "";
let email = "";
function handleSubmit(event) {
    event.preventDefault();
    let userDetailsDiv = document.createElement("div");
    let userDetails = document.createElement("li");
    let checkBox = document.createElement("input");
    let editButton = document.createElement("input");
    userDetails.textContent = `Email: {${email}} Username: {${username}} Password: {${password}}`;
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            checkboxElements.push(checkBox);
        }
    });
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.addEventListener("click", () => editDetails(userDetailsDiv));
    userDetailsDiv.appendChild(userDetails);
    userDetailsDiv.appendChild(checkBox);
    userDetailsDiv.appendChild(editButton);
    detailsDiv.appendChild(userDetailsDiv);
}
function handleKeyup(event) {
    let target = event.target;
    if (target.tagName === "INPUT") {
        if (target.type === "text") {
            username = target.value;
        }
        else if (target.type === "password") {
            password = target.value;
        }
        else if (target.type === "email") {
            email = target.value;
        }
        ;
    }
}
function deleteCheckboxes() {
    if (checkboxElements.length > 0) {
        checkboxElements.forEach((checkbox) => {
            var _a;
            if (checkbox.checked) {
                (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                checkboxElements = [];
            }
        });
    }
    else {
        alert("Nothing to delete");
    }
}
function editDetails(userDetailsDiv) {
    let update = document.createElement("button");
    let cancel = document.createElement("button");
    update.type = "button";
    cancel.type = "button";
    update.textContent = "Update";
    cancel.textContent = "Cancel";
    userDetailsDiv.appendChild(update);
    userDetailsDiv.appendChild(cancel);
}
