function addCustomer() {
  const fullName = document.getElementById('fullName').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const country = document.getElementById('country').value;
  const address = document.getElementById('address').value;

  const customer = {
    fullName,
    dob,
    gender,
    email,
    telephone,
    country,
    address
  };

  const customerList = document.getElementById('customer-list');
  const listItem = document.createElement('li');
  listItem.textContent = fullName,email,country,telephone;


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
function createHeader() {
  return [
      createElement("div", "header", "First Name"),
      createElement("div", "header", "Last Name"),
      createElement("div", "header", "E-Mail address"),
      createElement("div", "header", "Delete?"),
      createElement("div", "header", ""),
  ];
}
