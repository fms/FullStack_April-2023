// Array to store the list of customers
var customerList = [];
// Function to handle the form submission
function addCustomer() {
    // Get the input values from the form
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var address = document.getElementById('address').value;
    // Create a new customer object
    var newCustomer = {
        fullName: fullName,
        email: email,
        telephone: telephone,
        address: address
    };
    // Add the customer to the customer list
    customerList.push(newCustomer);
    // Clear the input fields
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('address').value = '';
    // Call the function to display the customer list
    displayCustomerList();
}
// Function to display the customer list
function displayCustomerList() {
    // Get the customer list container element
    var customerListContainer = document.getElementById('customerListContainer');
    // Clear the existing content of the customer list container
    customerListContainer.innerHTML = '';
    // Iterate over the customerList array and create HTML elements to display the customers
    customerList.forEach(function (customer, index) {
        // Create a div element for each customer
        var customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');
        // Create a paragraph element for each customer detail
        var fullNamePara = document.createElement('p');
        fullNamePara.textContent = "Full Name: " + customer.fullName;
        var emailPara = document.createElement('p');
        emailPara.textContent = "Email: " + customer.email;
        var telephonePara = document.createElement('p');
        telephonePara.textContent = "Telephone: " + customer.telephone;
        var addressPara = document.createElement('p');
        addressPara.textContent = "Address: " + customer.address;
        // Create buttons for delete and edit actions
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () { return deleteCustomer(index); });
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () { return editCustomer(index); });
        // Append the details and buttons to the customerDiv
        customerDiv.appendChild(fullNamePara);
        customerDiv.appendChild(emailPara);
        customerDiv.appendChild(telephonePara);
        customerDiv.appendChild(addressPara);
        customerDiv.appendChild(deleteBtn);
        customerDiv.appendChild(editBtn);
        // Append the customerDiv to the customerListContainer
        customerListContainer.appendChild(customerDiv);
    });
}
// Function to delete a customer from the list
function deleteCustomer(index) {
    // Remove the customer from the customerList array based on the index
    customerList.splice(index, 1);
    // Call the function to display the updated customer list
    displayCustomerList();
}
// Function to edit a customer's details
function editCustomer(index) {
    // Get the customer object based on the index
    var customer = customerList[index];
    // Update the input fields with the customer's details
    document.getElementById('fullName').value = customer.fullName;
    document.getElementById('email').value = customer.email;
    document.getElementById('telephone').value = customer.telephone;
    document.getElementById('address').value = customer.address;
    // Delete the customer from the customerList array
    customerList.splice(index, 1);
    // Call the function to display the updated customer list
    displayCustomerList();
}
// Add event listener to the add button
var addButton = document.getElementById('addButton');
addButton.addEventListener('click', addCustomer);
