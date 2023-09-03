let checkboxElements: HTMLInputElement[] = []
let detailsDiv = document.querySelector(".details") as HTMLElement;
let username = "";
let password = "";
let email = "";

function handleSubmit(event: MouseEvent) {
    event.preventDefault();

    let userDetailsDiv = document.createElement("div");
    let userDetails = document.createElement("li");
    let checkBox = document.createElement("input");
    let editButton = document.createElement("input");

    userDetails.textContent = `Email: {${email}} Username: {${username}} Password: {${password}}`;

    checkBox.type = "checkbox";
    checkBox.className = "checkbox"
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            checkboxElements.push(checkBox)
        }
    });

    editButton.type = "button"
    editButton.value = "Edit"

    editButton.addEventListener("click", () => editDetails(userDetailsDiv))

    userDetailsDiv.appendChild(userDetails);
    userDetailsDiv.appendChild(checkBox);
    userDetailsDiv.appendChild(editButton);
    detailsDiv.appendChild(userDetailsDiv);
}

function handleKeyup(event: KeyboardEvent) {
    let target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT") {
        if (target.type === "text") { username = target.value }
        else if (target.type === "password") { password = target.value }
        else if (target.type === "email") { email = target.value };
    }
}

function deleteCheckboxes() {
    if (checkboxElements.length > 0) {
        checkboxElements.forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.parentElement?.remove()
                checkboxElements = []
            }
        })
    }
    else {
        alert("Nothing to delete")
    }
}

function editDetails(userDetailsDiv: HTMLDivElement) {
    let update = document.createElement("button");
    let cancel = document.createElement("button");

    update.type = "button"; 
    cancel.type = "button"; 

    update.textContent = "Update";
    cancel.textContent = "Cancel";

    userDetailsDiv.appendChild(update);
    userDetailsDiv.appendChild(cancel);
}
