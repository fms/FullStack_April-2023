const deleteButton = document.getElementById("delete")!;
const myTable = document.getElementById("mytable") as HTMLTableElement;
function submitForm() {
const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
const firstName = firstNameInput.value;

const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
const lastName = lastNameInput.value;

const StreetInput = document.getElementById("Street") as HTMLInputElement;
const Street = StreetInput.value;

const AddressInput = document.getElementById("Address") as HTMLInputElement;
const Address = AddressInput.value;

const phoneInput = document.getElementById("phone") as HTMLInputElement;
const phone = phoneInput.value;

const additionalTelephoneInput = document.getElementById("additionalTelephone") as HTMLInputElement;
const additionalTelephone = additionalTelephoneInput.value;

const IDInput = document.getElementById("ID") as HTMLInputElement;
const ID = IDInput.value;

const ageInput = document.getElementById("age") as HTMLInputElement;
const age = ageInput.value;

    
  
    const myTable = document.getElementById("mytable") as HTMLTableElement;
  
    const newRow = myTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);


    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = Street;
    cell4.innerHTML = Address;
    cell5.innerHTML = phone;
    cell6.innerHTML = additionalTelephone;
    cell7.innerHTML = ID;
    cell8.innerHTML = age;
    cell9.innerHTML = `<button onclick="ndelete(${myTable.rows.length - 1})">DELETE</button>`;



    firstNameInput.value = "";
    lastNameInput.value = "";

    
  }

  // deleteButton.addEventListener("click",function(){

  //   console.log("dfdf");
  //   myTable.deleteRow(1);

  // } ) ;

  function ndelete(rowNumber:any){
    console.log("dfdf");
    
    myTable.deleteRow(rowNumber);
  };