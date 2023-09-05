var deleteButton = document.getElementById("delete");
var myTable = document.getElementById("mytable");
function submitForm() {
    var firstNameInput = document.getElementById("firstName");
    var firstName = firstNameInput.value;
    var lastNameInput = document.getElementById("lastName");
    var lastName = lastNameInput.value;
    var StreetInput = document.getElementById("Street");
    var Street = StreetInput.value;
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
    var cell9 = newRow.insertCell(8);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = Street;
    cell4.innerHTML = Address;
    cell5.innerHTML = phone;
    cell6.innerHTML = additionalTelephone;
    cell7.innerHTML = ID;
    cell8.innerHTML = age;
    cell9.innerHTML = "<button onclick=\"ndelete(" + (myTable.rows.length - 1) + ")\">DELETE</button>";
    firstNameInput.value = "";
    lastNameInput.value = "";
}
// deleteButton.addEventListener("click",function(){
//   console.log("dfdf");
//   myTable.deleteRow(1);
// } ) ;
function ndelete(rowNumber) {
    console.log("dfdf");
    myTable.deleteRow(rowNumber);
}
;
