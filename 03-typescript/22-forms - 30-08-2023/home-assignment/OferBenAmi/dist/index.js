var allUserDetails = [];
function submitted(event) {
    var submittedUserDetails = {
        userName: event.target.elements.userName.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
        gender: event.target.elements.gender.value
    };
    pushRow(submittedUserDetails);
    allUserDetails.push(submittedUserDetails);
}
function pushRow(submittedUserDetails) {
    var userTable = document.querySelector(".usersTable");
    var newRow = document.createElement("tr");
    var userNametd = document.createElement("td");
    var emailtd = document.createElement("td");
    var passwordtd = document.createElement("td");
    var gendertd = document.createElement("td");
    var deletetd = document.createElement("td");
    var deleteCheckBox = document.createElement("input");
    deleteCheckBox.setAttribute("type", "checkBox");
    deletetd.appendChild(deleteCheckBox);
    userNametd.textContent = submittedUserDetails.userName;
    emailtd.textContent = submittedUserDetails.email;
    passwordtd.textContent = submittedUserDetails.password;
    gendertd.textContent = submittedUserDetails.gender;
    newRow.appendChild(userNametd);
    newRow.appendChild(emailtd);
    newRow.appendChild(passwordtd);
    newRow.appendChild(gendertd);
    newRow.appendChild(deletetd);
    userTable === null || userTable === void 0 ? void 0 : userTable.appendChild(newRow);
}
function deleteRows(event) {
    console.log(event);
}
