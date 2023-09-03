var input_name = document.querySelector("#name");
var input_age = document.querySelector("#age1");
var input_state = document.querySelector("#state");
var error = document.querySelector("#error");
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
function add_row() {
    var user_input_name = input_name.value;
    var user_input_age = input_age.value;
    var user_input_state = input_state.value;
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = user_input_name;
    cell2.innerHTML = user_input_age;
    cell3.innerHTML = user_input_state;
    var checkbox = document.createElement("input"), id = "ff";
    checkbox.type = "checkbox";
    row.appendChild(checkbox);
    checkbox.style.backgroundColor = "red";
}
function dlt_row(x) {
    var table = document.getElementById("myTable");
    var row = table.rows.length;
    var counter = 0;
    if (table.rows.length > 1) {
        for (var i = 0; i < table.rows.length; i++) {
            var chk = table.rows[i].cells[0].childNodes[0];
            if (chk.checked) {
                table.deleteRow(i);
                row--;
                i--;
                counter = counter + 1;
            }
        }
        if (counter == 0) {
            alert("Please select the row that you want to delete.");
        }
    }
    else {
        alert("There are no rows being added");
    }
}
