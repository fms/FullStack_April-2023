let checkboxElements: HTMLInputElement[] = [];
let containerDetails = document.querySelector(".container-details") as HTMLElement;
let update = document.getElementById("update") as HTMLElement;
let cancel = document.getElementById("cancel") as HTMLElement;
let submit = document.getElementById("submit-btn") as HTMLElement;
let username = "";
let password = "";
let email = "";
let isEditing = false;

loadFromLocalStorage()

function handleSubmit(event: MouseEvent) {
    if (event) {
        event.preventDefault()
    }

    let detailsDiv = document.createElement("div");
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

    editButton.addEventListener("click", () => editDetails(event, detailsDiv, userDetails, editButton));

    detailsDiv.appendChild(userDetails);
    detailsDiv.appendChild(checkBox);
    detailsDiv.appendChild(editButton);
    containerDetails.appendChild(detailsDiv);

    if (event) {
        saveToLocalStorage()
    }

}

function handleKeyup(event: KeyboardEvent) {
    let target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT") {
        if (target.type === "text") {
            username = target.value;
        } else if (target.type === "password") {
            password = target.value;
        } else if (target.type === "email") {
            email = target.value;
        }
    }
}

function deleteCheckboxes() {
    if (checkboxElements.length > 0) {
        checkboxElements.forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.parentElement?.remove();
                checkboxElements = [];
            }
            saveToLocalStorage()
        });
    } else {
        alert("Nothing to delete");
    }
}

function editDetails(event: MouseEvent, userDetailsDiv: HTMLElement, userDetails: HTMLElement, editButton: HTMLInputElement) {
    if (isEditing) {
        return;
    }

    isEditing = true;
    editButton.disabled = true;
    toggleButtons(event);

    function updateClickHandler() {
        userDetails.textContent = `Email: {${email}} Username: {${username}} Password: {${password}}`;
        toggleButtons(event);
        isEditing = false;
        editButton.disabled = false;
        update.removeEventListener("click", updateClickHandler);
        cancel.removeEventListener("click", cancelClickHandler);
        saveToLocalStorage()
    }

    function cancelClickHandler() {
        isEditing = false;
        editButton.disabled = false;
        toggleButtons(event);
        update.removeEventListener("click", updateClickHandler);
        cancel.removeEventListener("click", cancelClickHandler);
    }

    update.addEventListener("click", updateClickHandler);
    cancel.addEventListener("click", cancelClickHandler);
}


function toggleButtons(event: MouseEvent) {
    let target = event.target as HTMLElement;

    if (target) {
        update?.classList.toggle("hidden");
        cancel?.classList.toggle("hidden");
        submit?.classList.toggle("hidden");
    }
}

function attachEventListeners() {
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if ((checkbox as HTMLInputElement).checked) {
                checkboxElements.push(checkbox as HTMLInputElement);
            }
        });
    });

    let editButtons = document.querySelectorAll("[value='Edit']");
    editButtons.forEach((editButton) => {
        editButton.addEventListener("click", (event) => {
            let userDetailsDiv = editButton.parentElement;
            let userDetails = userDetailsDiv!.querySelector("li");
            editDetails(event as MouseEvent, userDetailsDiv!, userDetails!, editButton as HTMLInputElement);
        });
    });
}

function saveToLocalStorage() {
    let detailsDivHtml = containerDetails.innerHTML
    if (detailsDivHtml) {
        localStorage.setItem("detailsDivHtml", detailsDivHtml)
    }
}

function loadFromLocalStorage() {
    let savedDetailsDiv = localStorage.getItem("detailsDivHtml")
    if (savedDetailsDiv) {
        containerDetails.innerHTML = savedDetailsDiv;
        attachEventListeners();
    }
}

// function saveToLocalStorage() {
//     let userDetails = {
//         email,
//         username,
//         password
//     }
//     let users = localStorage.getItem("users");
//     let parsedUsers = users ? JSON.parse(users) : [];

//     if (users) {
//         parsedUsers.push(userDetails)
//     }
//     else {
//         parsedUsers = [userDetails]
//     }

//     localStorage.setItem("users", JSON.stringify(parsedUsers))
// }

// function loadFromLocalStorage() {
//     let users = localStorage.getItem("users")
//     let parsedUsers = JSON.parse(users!)

//     parsedUsers.forEach((user) => {
//         email = user.email
//         username = user.username
//         password = user.password
//         handleSubmit()
//     })
// }