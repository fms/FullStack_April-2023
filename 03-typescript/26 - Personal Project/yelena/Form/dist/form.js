"use strict";
const form = document.querySelector("#form");
if (form) {
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        debugger;
        /**
         * TODO: add age, class-select, and phone
         */
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const name = nameField ? nameField.value : "";
        const email = emailField ? emailField.value : "";
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
        // alert(`Name: ${name}\nEmail: ${email}`);
        // Or you can send the data to a server using AJAX or fetch.
    });
}
