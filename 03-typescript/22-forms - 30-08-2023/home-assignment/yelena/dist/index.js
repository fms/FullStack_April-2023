"use strict";
let editMode = false;
let entries = new Array();
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    let newEntry = {
        childName: elements.childName.value,
        familyName: elements.familyName.value,
        checkbox: false,
        age: 4,
        kidClass: elements.kidClass.value,
        markedForDeletion: false,
    };
}
