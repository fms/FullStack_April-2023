"use strict";
const phoneImages = document.querySelector('.phone-images');
const form = document.querySelector('#fill-user-details');
const submitButton = document.querySelector('#submitButton');
const table = document.querySelector('#columnTable');
let selectedRow = null;
const buyers = [];
const p = document.querySelector('#formAddition');
const addABuyerB = document.querySelector('#addForm');
const removeABuyerB = document.querySelector('#removeForm');
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#lastname');
const eMailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phonenumber');
const textAreaInput = document.querySelector('#textarea');
const delButton = document.createElement('button');
const selectedRows = [];
const fieldName = 'Buyers';
function hideForm() {
    form.style.display = 'none';
}
function showForm() {
    if (!selectedRow) {
        hideImagesAndForm();
        form.style.display = 'block';
        table.style.display = 'block';
        window.scrollTo(0, 0);
    }
}
function handleFormSubmission() {
    const nameValue = nameInput.value;
    const lastNameValue = lastNameInput.value;
    const eMailValue = eMailInput.value;
    const phoneNumberValue = phoneNumberInput.value;
    const textAreaValue = textAreaInput.value;
    try {
        if (nameValue !== '' && lastNameValue !== '' && eMailValue !== '' && phoneNumberValue !== '' && textAreaValue !== '') {
            if (selectedRow) {
                updateRow();
            }
            else {
                const newBuyer = new Buyer(nameValue, lastNameValue, eMailValue, parseInt(phoneNumberValue), textAreaValue);
                addToTable(newBuyer);
                saveBuyerToLS(newBuyer.name, newBuyer.lastName, newBuyer.eMail, newBuyer.phoneNumber.toString(), newBuyer.textArea);
            }
            hideForm();
            table.style.display = 'block';
        }
        else {
            throw new Error('Please make sure you fill all the details');
        }
    }
    catch (error) {
        alert(error.message);
    }
}
function deleteSelectedRows() {
    if (selectedRows.length === 0) {
        alert(`You've to choose a row to delete`);
    }
    else {
        let e = confirm("Are you sure about it?");
        if (e) {
            selectedRows.forEach((row) => {
                row.remove();
                localStorage.removeItem(buyerName + ' Name:');
                localStorage.removeItem(buyerName + ' Last Name:');
                localStorage.removeItem(buyerName + ' Email:');
                localStorage.removeItem(buyerName + ' Phone Number:');
                localStorage.removeItem(buyerName + ' Request:');
            });
            selectedRows.length = 0;
        }
    }
}
function addToTable(buyer) {
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${buyer.name}</td>
      <td>${buyer.lastName}</td>
      <td>${buyer.eMail}</td>
      <td>${buyer.phoneNumber}</td>
      <td>${buyer.textArea}</td>
      <td><button class="edit-button" style="display: block;">Edit</button></td>
      <td><input type="checkbox" id="delete-button"></td>
    `;
    delButton.className = 'deleteButton';
    delButton.textContent = 'Delete Selected';
    table.appendChild(delButton);
    p.style.display = 'block';
    addABuyerB.style.display = 'block';
    removeABuyerB.style.display = 'block';
    const editButton = newRow.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
        editRow(newRow);
    });
}
function editRow(row) {
    const cells = row.querySelectorAll('td');
    nameInput.value = cells[0].textContent || '';
    lastNameInput.value = cells[1].textContent || '';
    eMailInput.value = cells[2].textContent || '';
    phoneNumberInput.value = cells[3].textContent || '';
    textAreaInput.value = cells[4].textContent || '';
    showForm();
    table.style.display = 'none';
    selectedRow = row;
}
function updateRow() {
    if (!selectedRow) {
        return;
    }
    const cells = selectedRow.querySelectorAll('td');
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const email = eMailInput.value;
    const phoneNumber = phoneNumberInput.value;
    const request = textAreaInput.value;
    cells[0].textContent = name;
    cells[1].textContent = lastName;
    cells[2].textContent = email;
    cells[3].textContent = phoneNumber;
    cells[4].textContent = request;
    resetValues();
    table.style.display = 'block';
    hideForm();
    selectedRow = null;
    const savedName = localStorage.getItem(buyerName + ' Name:');
    const savedLastName = localStorage.getItem(buyerName + ' Last Name:');
    const savedEmail = localStorage.getItem(buyerName + ' Email:');
    const savedPhoneNumber = localStorage.getItem(buyerName + ' Phone Number:');
    const savedRequest = localStorage.getItem(buyerName + ' Request:');
    if (name !== savedName) {
        localStorage.setItem(buyerName + ' Name:', name);
    }
    if (lastName !== savedLastName) {
        localStorage.setItem(buyerName + ' Last Name:', lastName);
    }
    if (email !== savedEmail) {
        localStorage.setItem(buyerName + ' Email:', email);
    }
    if (phoneNumber !== savedPhoneNumber) {
        localStorage.setItem(buyerName + ' Phone Number:', phoneNumber);
    }
    if (request !== savedRequest) {
        localStorage.setItem(buyerName + ' Request:', request);
    }
}
function hideImagesAndForm() {
    phoneImages.style.display = 'none';
}
function hideTable() {
    table.style.display = 'none';
}
function resetValues() {
    form.reset();
}
function checkBox(e) {
    const target = e.target;
    if (target.type === 'checkbox') {
        if (target.checked) {
            const row = target.closest('tr');
            selectedRows.push(row);
        }
        else {
            const row = target.closest('tr');
            const index = selectedRows.indexOf(row);
            if (index > -1) {
                selectedRows.splice(index, 1);
            }
        }
    }
}
const buyerName = 'Buyer ';
function saveBuyerToLS(name, lastName, email, phoneNumber, request) {
    localStorage.setItem(buyerName + ' Name:', name);
    localStorage.setItem(buyerName + ' Last Name:', lastName);
    localStorage.setItem(buyerName + ' Email:', email);
    localStorage.setItem(buyerName + ' Phone Number:', phoneNumber);
    localStorage.setItem(buyerName + ' Request:', request);
}
table.addEventListener('click', checkBox);
phoneImages.addEventListener('click', () => { showForm(), hideTable(); });
submitButton.addEventListener('click', handleFormSubmission);
addABuyerB.addEventListener('click', () => { showForm(), resetValues(); });
removeABuyerB.addEventListener('click', hideForm);
delButton.addEventListener('click', deleteSelectedRows);
let savedColor = 'currentColor';
let fontSizeKey = 'currentFSize';
function loadColor() {
    const boxShadow = document.querySelector('.cover');
    const borderElement = document.querySelectorAll('.phone-images img');
    const buttons = document.querySelectorAll('button');
    const saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        borderElement.forEach((element) => {
            element.style.border = `1px ${saved} solid`;
            element.style.boxShadow = `0px 0px 15px ${saved}`;
        });
        boxShadow.style.boxShadow = `1px 1px 15px ${saved}`;
        buttons.forEach(button => {
            button.style.boxShadow = `1px 1px 15px ${saved}`;
            button.style.color = saved;
        });
    }
}
function loadFS() {
    const saved = localStorage.getItem(fontSizeKey);
    if (saved) {
        document.body.style.fontSize = `${saved}px`;
    }
}
loadColor();
loadFS();
