interface Entryy {
    name: string;
    lastname: string;
    age: number;
    birthday: string;
    gender: string;
}


const dataEntriess: Entryy[] = [];

const dataForm = document.getElementById("data-form") as HTMLFormElement;
const dataTable = document.getElementById("data-table") as HTMLTableElement;

dataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
    const age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    const birthday = (document.getElementById("birthday") as HTMLInputElement).value;
    const gender = (document.getElementById("gender") as HTMLSelectElement).value;

    dataEntriess.push({
        name, lastname, age, birthday, gender,});
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("lastname") as HTMLInputElement).value = "";
    (document.getElementById("age") as HTMLInputElement).value = "";
    (document.getElementById("birthday") as HTMLInputElement).value = "";
    (document.getElementById("gender") as HTMLSelectElement).value = "";
    displayDataEntriess();
});


function displayDataEntriess() {
    const tbody = dataTable.querySelector("tbody") as HTMLElement;
    tbody.innerHTML = "";

    dataEntriess.forEach((entry, index) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td")!;
        nameCell.textContent = entry.name;

        const lastnameCell = document.createElement("td")!;
        lastnameCell.textContent = entry.lastname;

        const ageCell = document.createElement("td")!;
        ageCell.textContent = entry.age.toString();

        const birthdayCell = document.createElement("td")!;
        birthdayCell.textContent = entry.birthday;

        const genderCell = document.createElement("td")!;
        genderCell.textContent = entry.gender;

        const deleteCell = document.createElement("td")!;
        const deleteButton = document.createElement("button") as HTMLButtonElement;
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            deleteDataEntry(index);
        });
        deleteCell.appendChild(deleteButton);

        const editCell = document.createElement("td");
        const editButton = document.createElement("button") as HTMLButtonElement;
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", () => {
            editDataEntry(index);
        });
        editCell.appendChild(editButton);

        const updateCell = document.createElement("td");
        const updateButton = document.createElement("button") as HTMLButtonElement;
        updateButton.textContent = "Update";
        updateButton.className = "update-button";
        updateButton.style.display = "none"; 
        updateButton.addEventListener("click", () => {
            updateDataEntry(index);
        });
        updateCell.appendChild(updateButton);

        const cancelCell = document.createElement("td");
        const cancelButton = document.createElement("button") as HTMLButtonElement;
        cancelButton.textContent = "Cancel";
        cancelButton.className = "cancel-button";
        cancelButton.style.display = "none"; 
        cancelButton.addEventListener("click", () => {
            cancelEdit(index);
        });
        cancelCell.appendChild(cancelButton);

        row.appendChild(nameCell);
        row.appendChild(lastnameCell);
        row.appendChild(ageCell);
        row.appendChild(birthdayCell);
        row.appendChild(genderCell);
        row.appendChild(deleteCell);
        row.appendChild(editCell);
        row.appendChild(updateCell);
        row.appendChild(cancelCell);

        tbody.appendChild(row);
    });
}


function editDataEntry(index: number) {
    const editButton = dataTable.rows[index + 1].cells[6].querySelector(".edit-button") as HTMLButtonElement;
    const updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button") as HTMLButtonElement;
    const cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button") as HTMLButtonElement;

    editButton.style.display = "none"; 
    updateButton.style.display = "inline"; 
    cancelButton.style.display = "inline"; 

    const nameCell = dataTable.rows[index + 1].cells[0];
    const lastnameCell = dataTable.rows[index + 1].cells[1];
    const ageCell = dataTable.rows[index + 1].cells[2];
    const birthdayCell = dataTable.rows[index + 1].cells[3];
    const genderCell = dataTable.rows[index + 1].cells[4];
    const deleteCell = dataTable.rows[index + 1].cells[5];

    const nameInput = document.createElement("input") as HTMLInputElement;
    nameInput.type = "text";
    nameInput.value = nameCell.textContent!;
    nameCell.innerHTML = "";
    nameCell.appendChild(nameInput);

    const lastnameInput = document.createElement("input") as HTMLInputElement;
    lastnameInput.type = "text";
    lastnameInput.value = lastnameCell.textContent!;
    lastnameCell.innerHTML = "";
    lastnameCell.appendChild(lastnameInput);

    const ageInput = document.createElement("input") as HTMLInputElement;
    ageInput.type = "number";
    ageInput.value = ageCell.textContent!;
    ageCell.innerHTML = "";
    ageCell.appendChild(ageInput);

    const birthdayInput = document.createElement("input") as HTMLInputElement;
    birthdayInput.type = "date";
    birthdayInput.value = birthdayCell.textContent!;
    birthdayCell.innerHTML = "";
    birthdayCell.appendChild(birthdayInput);

    const genderInput = document.createElement("select") as HTMLSelectElement;
    genderInput.id = "gender";
    genderInput.innerHTML = `
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    `;
    genderInput.value = genderCell.textContent!;
    genderCell.innerHTML = "";
    genderCell.appendChild(genderInput);

    const deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox") as HTMLInputElement;
    deleteCheckbox.disabled = true;
}


function updateDataEntry(index: number) {
    const updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button") as HTMLButtonElement;
    const cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button") as HTMLButtonElement;

    updateButton.style.display = "none"; 
    cancelButton.style.display = "none";

    const nameInput = dataTable.rows[index + 1].cells[0].querySelector("input") as HTMLInputElement;
    const lastnameInput = dataTable.rows[index + 1].cells[1].querySelector("input") as HTMLInputElement;
    const ageInput = dataTable.rows[index + 1].cells[2].querySelector("input") as HTMLInputElement;
    const birthdayInput = dataTable.rows[index + 1].cells[3].querySelector("input") as HTMLInputElement;
    const genderInput = dataTable.rows[index + 1].cells[4].querySelector("select") as HTMLSelectElement;
    const deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox") as HTMLInputElement;

    dataEntriess[index].name = nameInput.value;
    dataEntriess[index].lastname = lastnameInput.value;
    dataEntriess[index].age = parseInt(ageInput.value);
    dataEntriess[index].birthday = birthdayInput.value;
    dataEntriess[index].gender = genderInput.value;
    deleteCheckbox.disabled = false;

    displayDataEntriess();
}

function cancelEdit(index: number) {
    const updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button") as HTMLButtonElement;
    const cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button") as HTMLButtonElement;

    updateButton.style.display = "none";
    cancelButton.style.display = "none"; 

    const nameInput = dataTable.rows[index + 1].cells[0].querySelector("input") as HTMLInputElement;
    const lastnameInput = dataTable.rows[index + 1].cells[1].querySelector("input") as HTMLInputElement;
    const ageInput = dataTable.rows[index + 1].cells[2].querySelector("input") as HTMLInputElement;
    const birthdayInput = dataTable.rows[index + 1].cells[3].querySelector("input") as HTMLInputElement;
    const genderInput = dataTable.rows[index + 1].cells[4].querySelector("select") as HTMLSelectElement;
    const deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox") as HTMLInputElement;

    nameInput.remove();
    lastnameInput.remove();
    ageInput.remove();
    birthdayInput.remove();
    genderInput.remove();
    deleteCheckbox.disabled = false;

    const nameCell = dataTable.rows[index + 1].cells[0];
    const lastnameCell = dataTable.rows[index + 1].cells[1];
    const ageCell = dataTable.rows[index + 1].cells[2];
    const birthdayCell = dataTable.rows[index + 1].cells[3];
    const genderCell = dataTable.rows[index + 1].cells[4];

    nameCell.textContent = dataEntriess[index].name;
    lastnameCell.textContent = dataEntriess[index].lastname;
    ageCell.textContent = dataEntriess[index].age.toString();
    birthdayCell.textContent = dataEntriess[index].birthday;
    genderCell.textContent = dataEntriess[index].gender;
}


function deleteDataEntry(index: number) {
    dataEntriess.splice(index, 1);
    displayDataEntriess();
}

displayDataEntriess();