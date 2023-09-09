// Model - my data - classes, objects
// View - HTML/CSS - whatever is on the screen
// Controller - Business logic

// Data
class Entry {
  constructor(
    public firstName: string,
    public lastName: string,
    public eMail: string,
    public markedForDeletion: boolean
  ) {}
}

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  eMail: HTMLInputElement;
  add: HTMLInputElement;
  update: HTMLInputElement;
  cancel: HTMLInputElement;
}

const fieldName = "entries";
let activeItemIndex: number | null = null;
let entries = loadEntries();

function submitForm(event: SubmitEvent) {
  // -------------------------
  // Get data from the View
  // -------------------------
  const form = event.target as HTMLFormElement;
  const elements = form.elements as FormElements;

  // This requires using ES2019:
  // const formData = new FormData(form);
  // let newEntry: Entry = Object.fromEntries(formData);
  // newEntry.markedForDeletion = false;

  let newEntry: Entry = {
    firstName: elements.firstName.value,
    lastName: elements.lastName.value,
    eMail: elements.eMail.value,
    markedForDeletion: false,
  };

  // -------------------------
  // Business logic: The Controller
  // -------------------------
  if (inEditMode()) {
    // @ts-expect-error: inEditMode makes sure activeItemIndex is not null
    entries[activeItemIndex] = newEntry;
    exitEditMode();
  } else {
    entries.push(newEntry);
  }

  // -------------------------
  // Save the data: Model
  // -------------------------
  saveEntries();

  // -------------------------
  // Update the View
  // -------------------------
  event.preventDefault();
  form.reset();
  updateEntriesList();
}

function updateEntriesList() {
  const entriesDiv = document.querySelector(".entries");
  if (entriesDiv) {
    entriesDiv.replaceChildren();
    if (entries.length !== 0) {
      createHeader(entriesDiv);
      entries.forEach((entry, index) =>
        createEntryRow(entriesDiv, entry, index)
      );
      entriesDiv.appendChild(
        createInputElement(
          "button",
          "button",
          deleteSelected,
          "Delete selected"
        )
      );
    }
  }
}

function createEntryRow(container: Element, entry: Entry, index: number) {
  const entryDiv = document.createElement("div");
  entryDiv.className = "entry__header";
  entryDiv.dataset["id"] = `${index}`;
  entryDiv.appendChild(createElement("div", "entry", entry.firstName));
  entryDiv.appendChild(createElement("div", "entry", entry.lastName));
  entryDiv.appendChild(createElement("div", "entry", entry.eMail));
  entryDiv.appendChild(
    createInputElement("checkbox", "checkbox", markSelected)
  );
  entryDiv.appendChild(
    createInputElement("button", "button", editItem, "Edit")
  );
  container.appendChild(entryDiv);
}

function createHeader(container: Element) {
  const entryDiv = document.createElement("div");
  entryDiv.className = "entry__header";
  entryDiv.appendChild(createElement("div", "header", "First Name"));
  entryDiv.appendChild(createElement("div", "header", "Last Name"));
  entryDiv.appendChild(createElement("div", "header", "E-Mail address"));
  entryDiv.appendChild(createElement("div", "header", "Delete?"));
  container.appendChild(entryDiv);
}

function createElement(
  tagName: string,
  className: string,
  content: string = ""
): HTMLElement {
  const element = document.createElement(tagName);
  element.className = className;
  if (content) {
    element.textContent = content;
  }

  return element;
}

function createInputElement(
  inputType: string,
  className: string,
  handler: (event: Event) => void,
  content: string = ""
): HTMLElement {
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

function deleteSelected(event: Event): void {
  // -------------------------
  // Some business logic
  // -------------------------
  if (entries.some((entry) => entry.markedForDeletion)) {
    if (inEditMode()) {
      exitEditMode();
    }

    entries = entries.filter((entry) => !entry.markedForDeletion);

    // -------------------------
    // Read or update the model
    // -------------------------
    saveEntries();

    // -------------------------
    // Update the View
    // -------------------------
    updateEntriesList();
  } else {
    alert("Nothing marked for deletion!");
  }
}

function markSelected(event: Event): void {
  const checkbox = event.target as HTMLInputElement;

  let index = getId(checkbox);
  if (index !== -1) {
    entries[index].markedForDeletion = checkbox.checked;
  }
}

function editItem(event: Event): void {
  const button = event.target as HTMLInputElement;
  let index = getId(button);

  const form = document.querySelector<HTMLFormElement>("#inputForm");
  if (form && index !== -1) {
    const elements = form.elements as FormElements;
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
  const form = document.querySelector<HTMLFormElement>("#inputForm");

  if (form) {
    const elements = form.elements as FormElements;
    toggleEditControls(elements);
    form.reset();
    activeItemIndex = null;
  }
}

function toggleEditControls(elements: FormElements) {
  elements.add.classList.toggle("hidden");
  elements.update.classList.toggle("hidden");
  elements.cancel.classList.toggle("hidden");
}

function getId(element: HTMLInputElement): number {
  const target = element.closest<HTMLElement>("[data-id]");
  return parseInt(target?.dataset["id"] ?? "-1");
}

function inEditMode() {
  return activeItemIndex !== null;
}
function saveEntries() {
  const entriesStringified = JSON.stringify(entries);
  localStorage.setItem(fieldName, entriesStringified);
}

function loadEntries(): Entry[] {
  const savedEntries = localStorage.getItem(fieldName);
  if (savedEntries) {
    return JSON.parse(savedEntries);
  }

  return new Array<Entry>();
}
