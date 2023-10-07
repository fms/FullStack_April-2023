

function add_data(e) {
  
  let Sales_agent = document.querySelector("#Sales_agent") as HTMLInputElement | null;
  let client_name = document.querySelector('#client_name') as HTMLInputElement | null;
  let Car_type = document.querySelector('#Car_type') as HTMLInputElement | null;
  let Car_price = document.querySelector('#Car_price') as HTMLInputElement | null;
  let Date_of_meeting = document.querySelector('#Date_of_meeting') as HTMLInputElement | null;
  let all_data = document.getElementById('storeList')

  const Sales_agent_value = Sales_agent?.value
  const client_name_value = client_name?.value;
  const Car_type_value = Car_type?.value;
  const Car_price_value = Car_price?.value;
  const Date_of_meeting_value = Date_of_meeting?.value;
  


  //////////validateform


      if ( Sales_agent_value  ) {
}
else{
  alert("client_name Code is Required"); 
}


if ( client_name_value  ) {
}
else{
  alert("client_name Name is Required"); 
}


if ( Car_type_value  ) {
}
else{
  alert("Price  is Required"); 
}


if ( Car_price_value  ) {
}
else{
  alert("Price  is Required"); 
}


if ( Date_of_meeting_value  ) {
}
else{
  alert("Date_of_meeting  is Required"); 
}



const formData = readFormData();
     
event.preventDefault();
insertNewRecord(formData);
resetForm();

// let old = localStorage.getItem('users');
// localStorage.setItem("users", JSON.stringify(formData)) ;
// let user = Sales_agent_value
localStorage.setItem("users", localStorage.getItem("users") + JSON.stringify(formData)) ;



}


//Retrieve the data
function readFormData() {
    const formData = {};
    formData["Sales_agent"] = document.getElementById("Sales_agent").value;
    formData["client_name"] = document.getElementById("client_name").value;
    formData["Car_type"] = document.getElementById("Car_type").value;
    formData["Car_price"] = document.getElementById("Car_price").value;
    formData["Date_of_meeting"] = document.getElementById("Date_of_meeting").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    const table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Sales_agent;

    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.client_name;

    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Car_type;

    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Car_price;

    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Date_of_meeting;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button> <button onClick="update(this)">Update</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Sales_agent").value = selectedRow.cells[0].innerHTML;
    document.getElementById("client_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Car_type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Car_price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Date_of_meeting").value = selectedRow.cells[4].innerHTML;
    
  }


//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}




//update the data after edit
function update(td) {
  if (confirm('Do you want to update this record?')) {
    add_data(this) ;
      row = td.parentElement.parentElement;
      document.getElementById('storeList').deleteRow(row.rowIndex );
      resetForm();
  }
}



//Reset the data
function resetForm() {
  document.getElementById("Sales_agent").value = '';
  document.getElementById("client_name").value = '';
  document.getElementById("Car_type").value = '';
  document.getElementById("Car_price").value = '';
  document.getElementById("Date_of_meeting").value = '';
  selectedRow = null;
}




function chack2 () {
  
   
    let bbb = document.querySelector("#id_h1") as HTMLParagraphElement;
    bbb.textContent = `wellcom ${localStorage["user"]} to the sales dashboard `;
   event?.preventDefault();
  
  }

 


function view_events () {


    const aaa = document.querySelector("#mail_input") as HTMLInputElement | null;
    let input_val = aaa.value
  
    localStorage.setItem("user" , input_val);

  
    chack2 ();
    // event?.preventDefault;

    
        // Redirect to the second page
          window.location.href = 'index.html';

         

  } 


  function SearchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("storeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }