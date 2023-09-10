"use strict";
// let checkboxElements: HTMLInputElement[] = [];
// let detailsDiv = document.querySelector(".details") as HTMLElement;
// let update = document.getElementById("update") as HTMLElement;
// let cancel = document.getElementById("cancel") as HTMLElement;
// let submit = document.getElementById("submit-btn") as HTMLElement;
// class UserDetails {
//     constructor(public email: string,
//         public username: string,
//         public password: string,
//     ) { }
// }
// interface FormElements extends HTMLFormControlsCollection {
//     email: HTMLInputElement;
//     username: HTMLInputElement;
//     password: HTMLInputElement;
// }
// let isEditing = false;
// function handleSubmit(event: MouseEvent) {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const elements = form.elements as FormElements;
//     let newUser: UserDetails = {
//         email: elements.email.value,
//         username: elements.username.value,
//         password: elements.password.value,
//     };
//     let userDetailsDiv = document.createElement("div");
//     let userDetails = document.createElement("li");
//     let checkBox = document.createElement("input");
//     let editButton = document.createElement("input");
//     userDetails.textContent = `Email: {${newUser.email}} Username: {${newUser.username}} Password: {${newUser.password}}`;
//     checkBox.type = "checkbox";
//     checkBox.className = "checkbox";
//     checkBox.addEventListener("change", () => {
//         if (checkBox.checked) {
//             checkboxElements.push(checkBox);
//         }
//     });
//     editButton.type = "button";
//     editButton.value = "Edit";
//     editButton.addEventListener("click", () => editDetails(event, userDetailsDiv, userDetails, editButton, newUser));
//     userDetailsDiv.appendChild(userDetails);
//     userDetailsDiv.appendChild(checkBox);
//     userDetailsDiv.appendChild(editButton);
//     detailsDiv.appendChild(userDetailsDiv);
// }
// function deleteCheckboxes() {
//     if (checkboxElements.length > 0) {
//         checkboxElements.forEach((checkbox) => {
//             if (checkbox.checked) {
//                 checkbox.parentElement?.remove();
//                 checkboxElements = [];
//             }
//         });
//     } else {
//         alert("Nothing to delete");
//     }
// }
// function editDetails(event: MouseEvent, userDetailsDiv: HTMLElement, userDetails: HTMLElement, editButton: HTMLInputElement, newUser: UserDetails) {
//     if (isEditing) {
//         return;
//     }
//     isEditing = true;
//     editButton.disabled = true;
//     toggleButtons(event);
//     function updateClickHandler() {
//         userDetails.textContent = `Email: {${newUser.email}} Username: {${newUser.username}} Password: {${newUser.password}}`;
//         toggleButtons(event);
//         isEditing = false;
//         editButton.disabled = false;
//         update.removeEventListener("click", updateClickHandler);
//         cancel.removeEventListener("click", cancelClickHandler);
//     }
//     function cancelClickHandler() {
//         isEditing = false;
//         editButton.disabled = false;
//         toggleButtons(event);
//         update.removeEventListener("click", updateClickHandler);
//         cancel.removeEventListener("click", cancelClickHandler);
//     }
//     update.addEventListener("click", updateClickHandler);
//     cancel.addEventListener("click", cancelClickHandler);
// }
// function toggleButtons(event: MouseEvent) {
//     let target = event.target as HTMLElement;
//     if (target) {
//         update?.classList.toggle("hidden");
//         cancel?.classList.toggle("hidden");
//         submit?.classList.toggle("hidden");
//     }
// }
