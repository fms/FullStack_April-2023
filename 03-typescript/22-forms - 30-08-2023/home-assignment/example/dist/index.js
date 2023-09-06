"use strict";
class Entry {
    constructor(firstName, lastName, eMail, markedForDeletion) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.markedForDeletion = markedForDeletion;
    }
}
let activeItemIndex = null;
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
    if (inEditMode()) {
        // @ts-expect-error: inEditMode makes sure activeItemIndex is not null
        entries[activeItemIndex] = newEntry;
        exitEditMode();
    }
    else {
        entries.push(newEntry);
    }
    form.reset();
    updateEntriesList();
}
function updateEntriesList() {
    const entriesDiv = document.querySelector(".entries");
    if (entriesDiv) {
        entriesDiv.replaceChildren();
        if (entries.length !== 0) {
            createHeader(entriesDiv);
            entries.forEach((entry, index) => createEntryRow(entriesDiv, entry, index));
            entriesDiv.appendChild(createInputElement("button", "button", deleteSelected, "Delete selected"));
        }
    }
}
function createEntryRow(container, entry, index) {
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry__header";
    entryDiv.dataset['id'] = `${index}`;
    entryDiv.appendChild(createElement("div", "entry", entry.firstName));
    entryDiv.appendChild(createElement("div", "entry", entry.lastName));
    entryDiv.appendChild(createElement("div", "entry", entry.eMail));
    entryDiv.appendChild(createInputElement("checkbox", "checkbox", markSelected));
    entryDiv.appendChild(createInputElement("button", "button", editItem, "Edit"));
    container.appendChild(entryDiv);
}
function createHeader(container) {
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry__header";
    entryDiv.appendChild(createElement("div", "header", "First Name"));
    entryDiv.appendChild(createElement("div", "header", "Last Name"));
    entryDiv.appendChild(createElement("div", "header", "E-Mail address"));
    entryDiv.appendChild(createElement("div", "header", "Delete?"));
    container.appendChild(entryDiv);
}
function createElement(tagName, className, content = "") {
    const element = document.createElement(tagName);
    element.className = className;
    if (content) {
        element.textContent = content;
    }
    return element;
}
function createInputElement(inputType, className, handler, content = "") {
    const element = createElement("div", className);
    const input = document.createElement("input");
    input.type = inputType;
    input.addEventListener("click", handler);
    if (content) {
        input.value = content;
    }
    element.appendChild(input);
    return element;
}
function deleteSelected(event) {
    if (entries.some((entry) => entry.markedForDeletion)) {
        if (inEditMode()) {
            exitEditMode();
        }
        entries = entries.filter((entry) => !entry.markedForDeletion);
        updateEntriesList();
    }
    else {
        alert("Nothing marked for deletion!");
    }
}
function markSelected(event) {
    const checkbox = event.target;
    let index = getId(checkbox);
    if (index !== -1) {
        entries[index].markedForDeletion = checkbox.checked;
    }
}
function editItem(event) {
    const button = event.target;
    let index = getId(button);
    const form = document.querySelector("#inputForm");
    if (form && index !== -1) {
        const elements = form.elements;
        const entry = entries[index];
        elements.firstName.value = entry.firstName;
        elements.lastName.value = entry.lastName;
        elements.eMail.value = entry.eMail;
        if (!inEditMode()) {
            toggleEditControls(elements);
        }
        activeItemIndex = index;
    }
}
function exitEditMode() {
    const form = document.querySelector("#inputForm");
    if (form) {
        const elements = form.elements;
        toggleEditControls(elements);
        form.reset();
        activeItemIndex = null;
    }
}
function toggleEditControls(elements) {
    elements.add.classList.toggle("hidden");
    elements.update.classList.toggle("hidden");
    elements.cancel.classList.toggle("hidden");
}
function getId(element) {
    var _a;
    const target = element.closest("[data-id]");
    return parseInt((_a = target === null || target === void 0 ? void 0 : target.dataset['id']) !== null && _a !== void 0 ? _a : "-1");
}
function inEditMode() {
    return activeItemIndex !== null;
}
