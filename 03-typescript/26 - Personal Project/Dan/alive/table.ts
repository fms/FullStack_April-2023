window.onload = function () {
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];

    const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];

    savedUserInfo.forEach((userInfo, index) => {
        const newRow = table.insertRow(index);

        const cell1 = newRow.insertCell(0);
        cell1.innerHTML = userInfo.fullName;

        const cell2 = newRow.insertCell(1);
        cell2.innerHTML = userInfo.email;

        const cell3 = newRow.insertCell(2);
        cell3.innerHTML = userInfo.description;

        const cell4 = newRow.insertCell(3);
        cell4.innerHTML = '<button onclick="editUserInfo(this)">Edit</button> | <button onclick="deleteUserInfo(this)">Delete</button>';
    });
}

function addUserInfo() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = fullName;

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = description;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<button onclick="editUserInfo(this)">Edit</button> | <button onclick="deleteUserInfo(this)">Delete</button>';

    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    savedUserInfo.push({ fullName, email, description });
    localStorage.setItem('userInfo', JSON.stringify(savedUserInfo));

    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("description").value = "";
}

function editUserInfo(button) {
    const row = button.parentNode.parentNode;

    document.getElementById("fullName").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("description").value = row.cells[2].innerHTML;

    row.remove();
}

function deleteUserInfo(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

function deleteUserInfo(button) {
    const row = button.parentNode.parentNode;
    const rowIndex = row.rowIndex - 1; 

    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || [];

    if (rowIndex >= 0 && rowIndex < savedUserInfo.length) {
        savedUserInfo.splice(rowIndex, 1);

        const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
        table.removeChild(row);

        localStorage.setItem('userInfo', JSON.stringify(savedUserInfo));
    }
}