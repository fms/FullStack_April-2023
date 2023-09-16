let editMode = false;
let selectedForDelete: HTMLInputElement[] = []

class UserDetails {
    constructor(public email: string, public username: string, public password: string) { }
}

function submitForm(event: SubmitEvent) {
    event.preventDefault();

    let email = (document.querySelector(".email") as HTMLInputElement).value;
    let username = (document.querySelector(".username") as HTMLInputElement).value;
    let password = (document.querySelector(".password") as HTMLInputElement).value;
    let user = new UserDetails(email, username, password);

    createTable(user);
}

function createButton(value: string, clickHandler: any) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = value;
    button.addEventListener("click", clickHandler);
    return button;
}

function createTable(user: UserDetails) {
    const userDetailsTable = document.querySelector(".userDetailsTable table") as HTMLTableElement;
    const userId = document.createElement("tr");
    const buttonsCell = document.createElement("td");

    const editButton = createButton("Edit", () => editUser(buttonsCell));
    const deleteButton = createButton("Delete", (event: MouseEvent) => deleteHandler(event));
    const checkboxForDelete = document.createElement("input") as HTMLInputElement;

    checkboxForDelete.type = "checkbox";
    checkboxForDelete.addEventListener("change", () => addToCheckedList(checkboxForDelete))

    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);
    buttonsCell.appendChild(checkboxForDelete)

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

function editUser(buttonsCell: HTMLTableCellElement) {
    if (!editMode) {
        const update = createButton("Update", (event: MouseEvent) => updateButtonHandler(event));
        const cancel = createButton("Cancel", () => removeEditButtons(cancel, update, buttonsCell));
        const add = document.querySelector(".add") as HTMLInputElement;

        const editButton = buttonsCell.querySelector("input:nth-child(1)")
        const deleteButton = buttonsCell.querySelector("input:nth-child(2)")
        const checkboxButton = buttonsCell.querySelector("input:nth-child(3)")

        add.classList.add("hidden")
        buttonsCell.appendChild(update);
        buttonsCell.appendChild(cancel);

        editButton?.classList.add("hidden")
        deleteButton?.classList.add("hidden")
        checkboxButton?.classList.add("hidden")

        editMode = true;
    }
}

function removeEditButtons(cancel: HTMLInputElement, update: HTMLInputElement, buttonsCell: HTMLTableCellElement) {
    const add = document.querySelector(".add") as HTMLInputElement;
    const editButton = buttonsCell.querySelector("input:nth-child(1)")
    const deleteButton = buttonsCell.querySelector("input:nth-child(2)")
    const checkboxButton = buttonsCell.querySelector("input:nth-child(3)")

    add.classList.toggle("hidden")

    buttonsCell.removeChild(cancel);
    buttonsCell.removeChild(update);

    editButton?.classList.remove("hidden")
    deleteButton?.classList.remove("hidden")
    checkboxButton?.classList.remove("hidden")

    editMode = false
}

function updateButtonHandler(event: MouseEvent) {
    let target = event.target as HTMLInputElement;
    const userId = target.parentElement?.parentElement as HTMLTableRowElement;

    const emailCell = userId.querySelector("td:nth-child(1)") as HTMLTableCellElement;
    const usernameCell = userId.querySelector("td:nth-child(2)") as HTMLTableCellElement;
    const passwordCell = userId.querySelector("td:nth-child(3)") as HTMLTableCellElement;
    const buttonsCell = userId.querySelector("td:nth-child(4)") as HTMLTableCellElement;
    const cancel = buttonsCell?.lastChild as HTMLInputElement;

    let email = (document.querySelector(".email") as HTMLInputElement).value;
    let username = (document.querySelector(".username") as HTMLInputElement).value;
    let password = (document.querySelector(".password") as HTMLInputElement).value;


    if (emailCell && usernameCell && passwordCell) {
        emailCell.textContent = email;
        usernameCell.textContent = username;
        passwordCell.textContent = password;
        removeEditButtons(cancel, target, buttonsCell)
    }
}

function deleteHandler(event: MouseEvent) {
    let target = event.target as HTMLInputElement;
    target.parentElement?.parentElement!.remove()
}

function addToCheckedList(checkBox: HTMLInputElement) {
    const deleteSelectedButton = document.querySelector(".deleteSelected") as HTMLInputElement;
    if (checkBox.checked) {
        selectedForDelete.push(checkBox);
    } else {
        selectedForDelete = selectedForDelete.filter(item => item !== checkBox);
    }

    toggleDeleteButton(deleteSelectedButton)
}

function deleteSelected(event: MouseEvent) {
    const deleteSelectedButton = document.querySelector(".deleteSelected")
    let target = event.target as HTMLInputElement;

    if (target && selectedForDelete.length > 0) {
        selectedForDelete.forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.parentElement?.parentElement?.remove();
                deleteSelectedButton?.classList.add("hidden")
            }
        })
    }
}

function toggleDeleteButton(deleteSelectedButton: HTMLInputElement) {
    if (selectedForDelete.length > 0) {
        deleteSelectedButton?.classList.remove("hidden");
    } else {
        deleteSelectedButton?.classList.add("hidden");
    }
}

// Use user id to delete and update
// Relocate the overused vairables