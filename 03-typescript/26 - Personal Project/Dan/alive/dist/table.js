window.onload = function () {
    var savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    savedUserInfo.forEach(function (userInfo, index) {
        var newRow = table.insertRow(index);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = userInfo.fullName;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = userInfo.email;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = userInfo.description;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = '<button onclick="editUserInfo(this)">Edit</button> | <button onclick="deleteUserInfo(this)">Delete</button>';
    });
};
function addUserInfo() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = description;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<button onclick="editUserInfo(this)">Edit</button> | <button onclick="deleteUserInfo(this)">Delete</button>';
    var savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    savedUserInfo.push({ fullName: fullName, email: email, description: description });
    localStorage.setItem('userInfo', JSON.stringify(savedUserInfo));
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("description").value = "";
}
function editUserInfo(button) {
    var row = button.parentNode.parentNode;
    document.getElementById("fullName").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("description").value = row.cells[2].innerHTML;
    row.remove();
}
function deleteUserInfo(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}
function deleteUserInfo(button) {
    var row = button.parentNode.parentNode;
    var rowIndex = row.rowIndex - 1;
    var savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    if (rowIndex >= 0 && rowIndex < savedUserInfo.length) {
        savedUserInfo.splice(rowIndex, 1);
        var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
        table.removeChild(row);
        localStorage.setItem('userInfo', JSON.stringify(savedUserInfo));
    }
}
