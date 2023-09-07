let checkboxElements: HTMLInputElement[] = [];
let detailsDiv = document.querySelector(".details") as HTMLElement;
let update = document.getElementById("update") as HTMLElement;
let cancel = document.getElementById("cancel") as HTMLElement;
let submit = document.getElementById("submit-btn") as HTMLElement;
let username = "";
let password = "";
let email = "";
let isEditing = false;

function handleSubmit(event: MouseEvent) {
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
        userDetails.textContent = `Email: ${email} Username: ${username} Password: ${password}`;
        toggleButtons(event);
        isEditing = false;
        editButton.disabled = false;
        update.removeEventListener("click", updateClickHandler);
    }

    update.addEventListener("click", updateClickHandler);
}

function toggleButtons(event: MouseEvent) {
    let target = event.target as HTMLElement;

    if (target) {
        update?.classList.toggle("hidden");
        cancel?.classList.toggle("hidden");
        submit?.classList.toggle("hidden");
    }
}
