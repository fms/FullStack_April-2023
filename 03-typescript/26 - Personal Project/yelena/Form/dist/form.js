"use strict";
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
        const formData = {
            name,
            email,
            age,
            classes,
            phone,
        };
        const formDataJSON = JSON.stringify(formData);
        localStorage.setItem("formData", formDataJSON);
    });
}
