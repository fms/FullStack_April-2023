var userDetailsClass = /** @class */ (function () {
    function userDetailsClass(userName, email, password, gender, deleteRow) {
        if (deleteRow === void 0) { deleteRow = false; }
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.deleteRow = deleteRow;
    }
    return userDetailsClass;
}());
var allUserDetails = [];
function submitted(event) {
    var submittedUserDetails = new userDetailsClass(event.target.elements.userName.value, event.target.elements.email.value, event.target.elements.password.value, event.target.elements.gender.value);
    allUserDetails.push(submittedUserDetails);
    // console.log(allUserDetails);
    pushRow(submittedUserDetails);
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
function deleteRows(allUserDetails) {
    var userTable = document.querySelector(".usersTable");
    userTable === null || userTable === void 0 ? void 0 : userTable.childNodes.forEach(function (Element, index) {
        var _a;
        if (index < 2)
            return;
        if ((_a = Element.lastChild) === null || _a === void 0 ? void 0 : _a.firstChild.checked) {
            console.log("index is " + index + ", element " + Element + " is removed");
            Element.remove();
        }
    });
}
