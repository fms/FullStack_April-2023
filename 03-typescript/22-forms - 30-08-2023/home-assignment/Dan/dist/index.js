var userInfo = /** @class */ (function () {
    function userInfo(userName, userBirth, email) {
        this.userName = userName;
        this.userBirth = userBirth;
        this.email = email;
    }
    return userInfo;
}());
var allUserInfo = [];
function submitForm(event) {
    var submittedUserDetails = new userInfo(event.target.elements.userName.value, event.target.elements.userBirth.value, event.target.elements.email.value);
    allUserInfo.push(submitForm);
    pushRow(submitForm);
}
function info(submitForm) {
    var userTable = document.querySelector(".usersTable");
    var newRow = document.createElement("tr");
    var userNametd = document.createElement("td");
    var userBirth = document.createElement("td");
    var emailtd = document.createElement("td");
    userNametd.textContent = submitForm.userName;
    userBirth.textContent = submitForm.userBirth;
    emailtd.textContent = submitForm.email;
    newRow.appendChild(userNametd);
    newRow.appendChild(userBirth);
    newRow.appendChild(emailtd);
    userTable === null || userTable === void 0 ? void 0 : userTable.appendChild(newRow);
}
