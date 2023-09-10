const myTable = document.getElementById("mytable") as HTMLTableElement;
const checkbox = document.createElement("input");


function submitForm() {
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const firstName = firstNameInput.value;

    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const lastName = lastNameInput.value;

    const uzerNameInput = document.getElementById("uzerName") as HTMLInputElement;
    const uzerName = uzerNameInput.value;

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
    
    
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = uzerName;
    cell4.innerHTML = Address;
    cell5.innerHTML = phone;
    cell6.innerHTML = additionalTelephone;
    cell7.innerHTML = ID;
    cell8.innerHTML = age;
    
    const cell9 = newRow.insertCell(8);
    const index = myTable.rows.length - 1;
    cell9.innerHTML = `<input type="checkbox" data-index="${index}">`;
    console.log(`${index}`);
    
    



    firstNameInput.value = "";
    lastNameInput.value = "";
    uzerNameInput.value = "";
    AddressInput.value = "";
    phoneInput.value = "";
    additionalTelephoneInput.value = "";
    IDInput.value = "";
    ageInput.value = "";


  };

  function Delete(){
    const checkboxes = myTable.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      const checkboxIndex  = checkbox.getAttribute('data-index');
      console.log(`${checkboxIndex }`);
      
        if (checkboxIndex  !== null) {
            myTable.deleteRow(Number(checkboxIndex ) +1); 
            const remainingCheckboxes = myTable.querySelectorAll('input[type="checkbox"]');
            remainingCheckboxes.forEach((remainingCheckbox, index) => {
                remainingCheckbox.setAttribute('data-index', index);
            });
        }

    }
    );
}
  

