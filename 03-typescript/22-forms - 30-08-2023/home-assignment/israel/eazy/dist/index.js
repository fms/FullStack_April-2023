var myTable = document.getElementById("mytable");
var checkbox = document.createElement("input");
function submitForm() {
    var firstNameInput = document.getElementById("firstName");
    var firstName = firstNameInput.value;
    var lastNameInput = document.getElementById("lastName");
    var lastName = lastNameInput.value;
    var uzerNameInput = document.getElementById("uzerName");
    var uzerName = uzerNameInput.value;
    var AddressInput = document.getElementById("Address");
    var Address = AddressInput.value;
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value;
    var additionalTelephoneInput = document.getElementById("additionalTelephone");
    var additionalTelephone = additionalTelephoneInput.value;
    var IDInput = document.getElementById("ID");
    var ID = IDInput.value;
    var ageInput = document.getElementById("age");
    var age = ageInput.value;
    var myTable = document.getElementById("mytable");
    var newRow = myTable.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = uzerName;
    cell4.innerHTML = Address;
    cell5.innerHTML = phone;
    cell6.innerHTML = additionalTelephone;
    cell7.innerHTML = ID;
    cell8.innerHTML = age;
    var cell9 = newRow.insertCell(8);
    var index = myTable.rows.length - 1;
    cell9.innerHTML = "<input type=\"checkbox\" data-index=\"" + index + "\">";
    console.log("" + index);
    firstNameInput.value = "";
    lastNameInput.value = "";
    uzerNameInput.value = "";
    AddressInput.value = "";
    phoneInput.value = "";
    additionalTelephoneInput.value = "";
    IDInput.value = "";
    ageInput.value = "";
}
;
function Delete() {
    var checkboxes = myTable.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        var checkboxIndex = checkbox.getAttribute('data-index');
        console.log("" + checkboxIndex);
        if (checkboxIndex !== null) {
            myTable.deleteRow(Number(checkboxIndex) + 1);
            var remainingCheckboxes = myTable.querySelectorAll('input[type="checkbox"]');
            remainingCheckboxes.forEach(function (remainingCheckbox, index) {
                remainingCheckbox.setAttribute('data-index', index);
            });
        }
    });
}
