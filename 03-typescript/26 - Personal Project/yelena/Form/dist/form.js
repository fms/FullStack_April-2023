"use strict";
const form = document.querySelector("#form");
if (form) {
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        debugger;
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const ageField = document.getElementById("age");
        const classesField = document.getElementById("classes");
        const phoneField = document.getElementById("phone");
        const name = nameField ? nameField.value : "";
        const email = emailField ? emailField.value : "";
        const age = ageField ? ageField.value : "";
        const classes = classesField ? classesField.value : "";
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
}
