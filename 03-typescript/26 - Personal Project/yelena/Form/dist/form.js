"use strict";
console.log("shalom");
const form = document.querySelector("#form");
if (form) {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const ageField = document.getElementById("age");
    const classesField = document.getElementById("classes");
    const phoneField = document.getElementById("phone");
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const name = nameField ? nameField.value : "";
        const email = emailField ? emailField.value : "";
        const age = ageField ? +ageField.value : "";
        const classes = classesField ? classesField.value : "";
        const phone = phoneField ? phoneField.value : "";
        const fromData = {
            name,
            email,
            age,
            classes,
            phone,
        };
        debugger;
        /**
         * Create an Object with all the data
         * the properties in the object should be like the interface above
         * the object will be of type FormObject
         */
        // const formData: FormObject = {}
        /**
         * Adding the object to localStorage
         * I gave you an example in WhatsApp
         */
    });
    local;
    storage;
    set;
    item;
}
