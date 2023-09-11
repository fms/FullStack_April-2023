var dataEntriess = [];
var dataForm = document.getElementById("data-form");
var dataTable = document.getElementById("data-table");
dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = parseInt(document.getElementById("age").value);
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementById("gender").value;
    dataEntriess.push({
        name: name, lastname: lastname, age: age, birthday: birthday, gender: gender
    });
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("gender").value = "";
    displayDataEntriess();
});
function displayDataEntriess() {
    var tbody = dataTable.querySelector("tbody");
    tbody.innerHTML = "";
    dataEntriess.forEach(function (entry, index) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.textContent = entry.name;
        var lastnameCell = document.createElement("td");
        lastnameCell.textContent = entry.lastname;
        var ageCell = document.createElement("td");
        ageCell.textContent = entry.age.toString();
        var birthdayCell = document.createElement("td");
        birthdayCell.textContent = entry.birthday;
        var genderCell = document.createElement("td");
        genderCell.textContent = entry.gender;
        var deleteCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            deleteDataEntry(index);
        });
        deleteCell.appendChild(deleteButton);
        var editCell = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", function () {
            editDataEntry(index);
        });
        editCell.appendChild(editButton);
        var updateCell = document.createElement("td");
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.className = "update-button";
        updateButton.style.display = "none";
        updateButton.addEventListener("click", function () {
            updateDataEntry(index);
        });
        updateCell.appendChild(updateButton);
        var cancelCell = document.createElement("td");
        var cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.className = "cancel-button";
        cancelButton.style.display = "none";
        cancelButton.addEventListener("click", function () {
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
function editDataEntry(index) {
    var editButton = dataTable.rows[index + 1].cells[6].querySelector(".edit-button");
    var updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button");
    var cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button");
    editButton.style.display = "none";
    updateButton.style.display = "inline";
    cancelButton.style.display = "inline";
    var nameCell = dataTable.rows[index + 1].cells[0];
    var lastnameCell = dataTable.rows[index + 1].cells[1];
    var ageCell = dataTable.rows[index + 1].cells[2];
    var birthdayCell = dataTable.rows[index + 1].cells[3];
    var genderCell = dataTable.rows[index + 1].cells[4];
    var deleteCell = dataTable.rows[index + 1].cells[5];
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameCell.textContent;
    nameCell.innerHTML = "";
    nameCell.appendChild(nameInput);
    var lastnameInput = document.createElement("input");
    lastnameInput.type = "text";
    lastnameInput.value = lastnameCell.textContent;
    lastnameCell.innerHTML = "";
    lastnameCell.appendChild(lastnameInput);
    var ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.value = ageCell.textContent;
    ageCell.innerHTML = "";
    ageCell.appendChild(ageInput);
    var birthdayInput = document.createElement("input");
    birthdayInput.type = "date";
    birthdayInput.value = birthdayCell.textContent;
    birthdayCell.innerHTML = "";
    birthdayCell.appendChild(birthdayInput);
    var genderInput = document.createElement("select");
    genderInput.id = "gender";
    genderInput.innerHTML = "\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        <option value=\"other\">Other</option>\n    ";
    genderInput.value = genderCell.textContent;
    genderCell.innerHTML = "";
    genderCell.appendChild(genderInput);
    var deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox");
    deleteCheckbox.disabled = true;
}
function updateDataEntry(index) {
    var updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button");
    var cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button");
    updateButton.style.display = "none";
    cancelButton.style.display = "none";
    var nameInput = dataTable.rows[index + 1].cells[0].querySelector("input");
    var lastnameInput = dataTable.rows[index + 1].cells[1].querySelector("input");
    var ageInput = dataTable.rows[index + 1].cells[2].querySelector("input");
    var birthdayInput = dataTable.rows[index + 1].cells[3].querySelector("input");
    var genderInput = dataTable.rows[index + 1].cells[4].querySelector("select");
    var deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox");
    dataEntriess[index].name = nameInput.value;
    dataEntriess[index].lastname = lastnameInput.value;
    dataEntriess[index].age = parseInt(ageInput.value);
    dataEntriess[index].birthday = birthdayInput.value;
    dataEntriess[index].gender = genderInput.value;
    deleteCheckbox.disabled = false;
    displayDataEntriess();
}
function cancelEdit(index) {
    var updateButton = dataTable.rows[index + 1].cells[7].querySelector(".update-button");
    var cancelButton = dataTable.rows[index + 1].cells[8].querySelector(".cancel-button");
    updateButton.style.display = "none";
    cancelButton.style.display = "none";
    var nameInput = dataTable.rows[index + 1].cells[0].querySelector("input");
    var lastnameInput = dataTable.rows[index + 1].cells[1].querySelector("input");
    var ageInput = dataTable.rows[index + 1].cells[2].querySelector("input");
    var birthdayInput = dataTable.rows[index + 1].cells[3].querySelector("input");
    var genderInput = dataTable.rows[index + 1].cells[4].querySelector("select");
    var deleteCheckbox = dataTable.rows[index + 1].cells[5].querySelector(".delete-checkbox");
    nameInput.remove();
    lastnameInput.remove();
    ageInput.remove();
    birthdayInput.remove();
    genderInput.remove();
    deleteCheckbox.disabled = false;
    var nameCell = dataTable.rows[index + 1].cells[0];
    var lastnameCell = dataTable.rows[index + 1].cells[1];
    var ageCell = dataTable.rows[index + 1].cells[2];
    var birthdayCell = dataTable.rows[index + 1].cells[3];
    var genderCell = dataTable.rows[index + 1].cells[4];
    nameCell.textContent = dataEntriess[index].name;
    lastnameCell.textContent = dataEntriess[index].lastname;
    ageCell.textContent = dataEntriess[index].age.toString();
    birthdayCell.textContent = dataEntriess[index].birthday;
    genderCell.textContent = dataEntriess[index].gender;
}
function deleteDataEntry(index) {
    dataEntriess.splice(index, 1);
    displayDataEntriess();
}
displayDataEntriess();
