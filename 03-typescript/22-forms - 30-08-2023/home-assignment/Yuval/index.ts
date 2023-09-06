interface Entry {
    firstName: string;
    lastName: string;
    eMail: string;
    markedForDeletion: boolean;
}

interface FormElements extends HTMLFormControlsCollection {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    eMail: HTMLInputElement;
    add: HTMLInputElement;
    update: HTMLInputElement;
    cancel: HTMLInputElement;
}

let editMode = false;
let entries = new Array<Entry>();

function submitForm(event: SubmitEvent) {
    event.preventDefault();
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

    if (editMode) {
        const elements = form.elements as FormElements;
        let index = getId(elements.update);
        entries[index] = newEntry;
        toggleEditControls(elements);
        editMode = false;
    } else {
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
            entries.forEach((entry, index) =>
                createEntryDom(location, entry, index)
            );
            location.appendChild(createInputElement("button", "button", deleteSelected, "Delete selected"));
        }
        else {
            location.replaceChildren();
        }
    }
}

function createEntryDom(body: Element, entry: Entry, index: number) {
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

function createHeader(): Node[] {
    return [
        createElement("div", "header", "First Name"),
        createElement("div", "header", "Last Name"),
        createElement("div", "header", "E-Mail address"),
        createElement("div", "header", "Delete?"),
        createElement("div", "header", ""),
    ];
}

function createElement(tagName: string, className: string, content: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    return element;
}

function createInputElement(inputType: string, className: string, handler: (event: Event) => void, content: string = ""): HTMLElement {
    const element = document.createElement("input");
    element.type = inputType;
    element.className = className;
    element.addEventListener("click", handler);
    if (content) {
        element.value = content;
    }
    return element;
}

function deleteSelected(event: Event): void {
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
function markSelected(event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    let index = getId(checkbox);
    entries[index].markedForDeletion = !entries[index].markedForDeletion;
}

function editItem(event: Event): void {
    const button = event.target as HTMLInputElement;
    let index = getId(button);

    const form = document.querySelector<HTMLFormElement>("#inputForm");
    if (form) {
        const elements = form.elements as FormElements;
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
    const form = document.querySelector<HTMLFormElement>("#inputForm");

    if (form) {
        const elements = form.elements as FormElements;
        toggleEditControls(elements);
        form.reset();
        editMode = false;
    }
}

function toggleEditControls(elements: FormElements) {
    elements.add.classList.toggle("hidden");
    elements.update.classList.toggle("hidden");
    elements.cancel.classList.toggle("hidden");
}

function getId(element: HTMLInputElement): number {
    return parseInt(element.dataset['id'] ?? "0", 10);
}