"use strict";

function addCustomer() {
  var fullName = document.getElementById('fullName').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  var email = document.getElementById('email').value;
  var telephone = document.getElementById('telephone').value;
  var country = document.getElementById('country').value;
  var address = document.getElementById('address').value;
  var customer = {
    fullName: fullName,
    dob: dob,
    gender: gender,
    email: email,
    telephone: telephone,
    country: country,
    address: address
  };
  var customerList = document.getElementById('customer-list');
  var listItem = document.createElement('li');
  listItem.textContent = fullName;
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  editButton.addEventListener('click', function () {
    return editCustomer(customer);
  });
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function () {
    return deleteCustomer(listItem);
  });
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  customerList.appendChild(listItem);
  clearForm();
}

function editCustomer(customer) {
  var fullName = customer.fullName,
      dob = customer.dob,
      gender = customer.gender,
      email = customer.email,
      telephone = customer.telephone,
      country = customer.country,
      address = customer.address;
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
  return [createElement("div", "header", "First Name"), createElement("div", "header", "Last Name"), createElement("div", "header", "E-Mail address"), createElement("div", "header", "Delete?"), createElement("div", "header", "")];
}