interface Entry {
    childName: string;
    familyName: string;
    checkbox: boolean;
    age: number;
    kidClass: string;
    dateStart: Date;
    markedForDeletion: boolean;
}

interface FormElements extends HTMLFormControlsCollection {
    childName: HTMLInputElement;
    familyName: HTMLInputElement;
    checkbox: HTMLInputElement;
    age: HTMLInputElement;
    kidClass: HTMLInputElement;
    dateStart: HTMLInputElement;
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

let newEntry: Entry = {
    childName: elements.childName.value,
    familyName: elements. familyName.value,
    checkbox: false,
    age: 4,
    kidClass: elements.kidClass.value,
    markedForDeletion: false,


};
}