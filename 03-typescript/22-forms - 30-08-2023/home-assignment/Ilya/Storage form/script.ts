function addCustomer() {
  const fullName = document.getElementById('fullName').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const country = document.getElementById('country').value;
  const address = document.getElementById('address').value;



  const customerList = document.getElementById('customer-list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <div style="display: grid; grid-template-columns: repeat(7,1fr)">
    <div class='header'>Fullname</div>
    <div class='header'>Dob</div>
    <div class='header'>Gender</div>
    <div class='header'>Email</div>
    <div class='header'>Telephone</div>
    <div class='header'>Country</div>
    <div class='header'>Address</div>

    <div class='entry'>${fullName}</div>
  <div class='entry'>${dob}</div>
  <div class='entry'>${gender}</div>
  <div class='entry'>${email}</div>
  <div class='entry'>${telephone}</div>
  <div class='entry'>${country}</div>
  <div class='entry'>${address}</div>
  </div>
  <div>
  
  
</div>
  `;

  //listItem.append(...createHeader(), ...createEntry(fullName, email));
  


  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  editButton.addEventListener('click', () => editCustomer(customer));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => deleteCustomer(listItem));

  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  customerList.appendChild(listItem);

  clearForm();
}

function editCustomer(customer) {
  const { fullName, dob, gender, email, telephone, country, address } = customer;

  document.getElementById('fullName').value = fullName;
  document.getElementById('dob').value = dob;
  document.getElementById('gender').value = gender;
  document.getElementById('email').value = email;
  document.getElementById('telephone').value = telephone;
  document.getElementById('country').value = country;
  document.getElementById('address').value = address;
}

function deleteCustomer(listItem) {
  listItem.remove();
}

function clearForm() {
  document.getElementById('fullName').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telephone').value = '';
  document.getElementById('country').value = '';
  document.getElementById('address').value = '';
}
function createHeader(): Node[]  {
  return [
      createElement("div", "header", "Fullname"),
      createElement("div", "header", "E-Mail address"),
      createElement("div", "header", "Delete?"),
      createElement("div", "header", ""),
  ];
}

function createEntry(fullname: string, email:string): Node[]  {
  return [
      createElement("div", "entry", fullname),
      createElement("div", "entry", email),
      createElement("div", "entry", "Delete?"),
      
  ];
}


function createElement(type: string, clazz: string, content: string): HTMLElement {
  const el = document.createElement(type);
  el.className = clazz;
  el.innerHTML = content;
  return el;
}
