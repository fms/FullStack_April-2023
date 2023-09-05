"use strict";
let editMode = false;
let entries = new Array();
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    // This requires using ES2019:
    // const formData = new FormData(form);
    // let newEntry: Entry = Object.fromEntries(formData);
    // newEntry.markedForDeletion = false;
    let newEntry = {
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        eMail: elements.eMail.value,
        markedForDeletion: false,
    };
    if (editMode) {
        const elements = form.elements;
        let index = getId(elements.update);
        entries[index] = newEntry;
        toggleEditControls(elements);
        editMode = false;
    }
    else {
        entries.push(newEntry);
    }
    form.reset();
    showEntries();
}
function showEntries() {
    const location = document.querySelector(".entries");
    if (location) {
        if (entries.length !== 0) {
            location.replaceChildren(...createHeader());
            entries.forEach((entry, index) => createEntryDom(location, entry, index));
            location.appendChild(createInputElement("button", "button", deleteSelected, "Delete selected"));
        }
        else {
            location.replaceChildren();
        }
    }
}
function createEntryDom(body, entry, index) {
    body.appendChild(createElement("div", "entry", entry.firstName));
    body.appendChild(createElement("div", "entry", entry.lastName));
    body.appendChild(createElement("div", "entry", entry.eMail));
    const checkbox = createInputElement("checkbox", "checkbox", markSelected);
    checkbox.dataset["id"] = index.toString();
    body.appendChild(checkbox);
    const editButton = createInputElement("button", "button", editItem, "Edit");
    editButton.dataset["id"] = index.toString();
    body.appendChild(editButton);
}
function createHeader() {
    return [
        createElement("div", "header", "First Name"),
        createElement("div", "header", "Last Name"),
        createElement("div", "header", "E-Mail address"),
        createElement("div", "header", "Delete?"),
        createElement("div", "header", ""),
    ];
}
function createElement(tagName, className, content) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    return element;
}
function createInputElement(inputType, className, handler, content = "") {
    const element = document.createElement("input");
    element.type = inputType;
    element.className = className;
    element.addEventListener("click", handler);
    if (content) {
        element.value = content;
    }
    return element;
}
function deleteSelected(event) {
    if (entries.some((entry) => entry.markedForDeletion)) {
        if (editMode) {
            exitEditMode();
        }
        entries = entries.filter((entry) => !entry.markedForDeletion);
        showEntries();
    }
    else {
        alert("Nothing marked for deletion!");
    }
}
function markSelected(event) {
    const checkbox = event.target;
    let index = getId(checkbox);
    entries[index].markedForDeletion = !entries[index].markedForDeletion;
}
function editItem(event) {
    const button = event.target;
    let index = getId(button);
    const form = document.querySelector("#inputForm");
    if (form) {
        const elements = form.elements;
        elements.firstName.value = entries[index].firstName;
        elements.lastName.value = entries[index].lastName;
        elements.eMail.value = entries[index].eMail;
        elements.update.dataset.id = index.toString();
        if (!editMode) {
            toggleEditControls(elements);
        }
        editMode = true;
    }
}
function exitEditMode() {
    const form = document.querySelector("#inputForm");
    if (form) {
        const elements = form.elements;
        toggleEditControls(elements);
        form.reset();
        editMode = false;
    }
}
function toggleEditControls(elements) {
    elements.add.classList.toggle("hidden");
    elements.update.classList.toggle("hidden");
    elements.cancel.classList.toggle("hidden");
}
function getId(element) {
    var _a;
    return parseInt((_a = element.dataset['id']) !== null && _a !== void 0 ? _a : "0", 10);
}
