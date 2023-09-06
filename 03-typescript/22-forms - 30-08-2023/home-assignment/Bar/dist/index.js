"use strict";
let checkboxElements = [];
let detailsDiv = document.querySelector(".details");
let update = document.getElementById("update");
let cancel = document.getElementById("cancel");
let submit = document.getElementById("submit-btn");
let username = "";
let password = "";
let email = "";
let isEditing = false;
function handleSubmit(event) {
    event.preventDefault();
    let userDetailsDiv = document.createElement("div");
    let userDetails = document.createElement("li");
    let checkBox = document.createElement("input");
    let editButton = document.createElement("input");
    userDetails.textContent = `Email: ${email} Username: ${username} Password: ${password}`;
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            checkboxElements.push(checkBox);
        }
    });
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.addEventListener("click", () => editDetails(event, userDetailsDiv, userDetails, editButton));
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
function editDetails(event, userDetailsDiv, userDetails, editButton) {
    if (isEditing) {
        return;
    }
    isEditing = true;
    editButton.disabled = true;
    toggleButtons(event);
    function updateClickHandler() {
        userDetails.textContent = `Email: ${email} Username: ${username} Password: ${password}`;
        toggleButtons(event);
        isEditing = false;
        editButton.disabled = false;
        update.removeEventListener("click", updateClickHandler);
    }
    update.addEventListener("click", updateClickHandler);
}
function toggleButtons(event) {
    let target = event.target;
    if (target) {
        update === null || update === void 0 ? void 0 : update.classList.toggle("hidden");
        cancel === null || cancel === void 0 ? void 0 : cancel.classList.toggle("hidden");
        submit === null || submit === void 0 ? void 0 : submit.classList.toggle("hidden");
    }
}
