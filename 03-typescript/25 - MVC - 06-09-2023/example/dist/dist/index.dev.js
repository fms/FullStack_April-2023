"use strict"; // Model - my data - classes, objects
// View - HTML/CSS - whatever is on the screen
// Controller - Business logic
// Data

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = function Entry(firstName, lastName, eMail, markedForDeletion) {
  _classCallCheck(this, Entry);

  this.firstName = firstName;
  this.lastName = lastName;
  this.eMail = eMail;
  this.markedForDeletion = markedForDeletion;
};

var fieldName = "entries";
var activeItemIndex = null;
var entries = loadEntries();

function submitForm(event) {
  // -------------------------
  // Get data from the View
  // -------------------------
  var form = event.target;
  var elements = form.elements; // This requires using ES2019:
  // const formData = new FormData(form);
  // let newEntry: Entry = Object.fromEntries(formData);
  // newEntry.markedForDeletion = false;

  var newEntry = {
    firstName: elements.firstName.value,
    lastName: elements.lastName.value,
    eMail: elements.eMail.value,
    markedForDeletion: false
  }; // -------------------------
  // Business logic: The Controller
  // -------------------------

  if (inEditMode()) {
    // @ts-expect-error: inEditMode makes sure activeItemIndex is not null
    entries[activeItemIndex] = newEntry;
    exitEditMode();
  } else {
    entries.push(newEntry);
  } // -------------------------
  // Save the data: Model
  // -------------------------


  saveEntries(); // -------------------------
  // Update the View
  // -------------------------

  event.preventDefault();
  form.reset();
  updateEntriesList();
}

function updateEntriesList() {
  var entriesDiv = document.querySelector(".entries");

  if (entriesDiv) {
    entriesDiv.replaceChildren();

    if (entries.length !== 0) {
      createHeader(entriesDiv);
      entries.forEach(function (entry, index) {
        return createEntryRow(entriesDiv, entry, index);
      });
      entriesDiv.appendChild(createInputElement("button", "button", deleteSelected, "Delete selected"));
    }
  }
}

function createEntryRow(container, entry, index) {
  var entryDiv = document.createElement("div");
  entryDiv.className = "entry__header";
  entryDiv.dataset["id"] = "".concat(index);
  entryDiv.appendChild(createElement("div", "entry", entry.firstName));
  entryDiv.appendChild(createElement("div", "entry", entry.lastName));
  entryDiv.appendChild(createElement("div", "entry", entry.eMail));
  entryDiv.appendChild(createInputElement("checkbox", "checkbox", markSelected));
  entryDiv.appendChild(createInputElement("button", "button", editItem, "Edit"));
  container.appendChild(entryDiv);
}

function createHeader(container) {
  var entryDiv = document.createElement("div");
  entryDiv.className = "entry__header";
  entryDiv.appendChild(createElement("div", "header", "First Name"));
  entryDiv.appendChild(createElement("div", "header", "Last Name"));
  entryDiv.appendChild(createElement("div", "header", "E-Mail address"));
  entryDiv.appendChild(createElement("div", "header", "Delete?"));
  container.appendChild(entryDiv);
}

function createElement(tagName, className) {
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var element = document.createElement(tagName);
  element.className = className;

  if (content) {
    element.textContent = content;
  }

  return element;
}

function createInputElement(inputType, className, handler) {
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var element = createElement("div", className);
  var input = document.createElement("input");
  input.type = inputType;
  input.addEventListener("click", handler);

  if (content) {
    input.value = content;
  }

  element.appendChild(input);
  return element;
}

function deleteSelected(event) {
  // -------------------------
  // Some business logic
  // -------------------------
  if (entries.some(function (entry) {
    return entry.markedForDeletion;
  })) {
    if (inEditMode()) {
      exitEditMode();
    }

    entries = entries.filter(function (entry) {
      return !entry.markedForDeletion;
    }); // -------------------------
    // Read or update the model
    // -------------------------

    saveEntries(); // -------------------------
    // Update the View
    // -------------------------

    updateEntriesList();
  } else {
    alert("Nothing marked for deletion!");
  }
}

function markSelected(event) {
  var checkbox = event.target;
  var index = getId(checkbox);

  if (index !== -1) {
    entries[index].markedForDeletion = checkbox.checked;
  }
}

function editItem(event) {
  var button = event.target;
  var index = getId(button);
  var form = document.querySelector("#inputForm");

  if (form && index !== -1) {
    var elements = form.elements;
    var entry = entries[index];
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
  var form = document.querySelector("#inputForm");

  if (form) {
    var elements = form.elements;
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

  var target = element.closest("[data-id]");
  return parseInt((_a = target === null || target === void 0 ? void 0 : target.dataset["id"]) !== null && _a !== void 0 ? _a : "-1");
}

function inEditMode() {
  return activeItemIndex !== null;
}

function saveEntries() {
  var entriesStringified = JSON.stringify(entries);
  localStorage.setItem(fieldName, entriesStringified);
}

function loadEntries() {
  var savedEntries = localStorage.getItem(fieldName);

  if (savedEntries) {
    return JSON.parse(savedEntries);
  }

  return new Array();
}