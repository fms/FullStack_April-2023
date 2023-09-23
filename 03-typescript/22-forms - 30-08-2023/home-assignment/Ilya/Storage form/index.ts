// Define a Customer interface
interface Customer {
  fullName: string;
  email: string;
  telephone: string;
  address: string;
}

// Array to store the list of customers
const customerList: Customer[] = [];

// Function to handle the form submission
function addCustomer() {
  // Get the input values from the form
  const fullName = (<HTMLInputElement>document.getElementById('fullName')).value;
  const email = (<HTMLInputElement>document.getElementById('email')).value;
  const telephone = (<HTMLInputElement>document.getElementById('telephone')).value;
  const address = (<HTMLInputElement>document.getElementById('address')).value;

  // Create a new customer object
  const newCustomer: Customer = {
    fullName,
    email,
    telephone,
    address,
  };

  // Add the customer to the customer list
  customerList.push(newCustomer);

  // Clear the input fields
  (<HTMLInputElement>document.getElementById('fullName')).value = '';
  (<HTMLInputElement>document.getElementById('email')).value = '';
  (<HTMLInputElement>document.getElementById('telephone')).value = '';
  (<HTMLInputElement>document.getElementById('address')).value = '';

  // Call the function to display the customer list
  displayCustomerList();
}

// Function to display the customer list
function displayCustomerList() {
  // Get the customer list container element
  const customerListContainer = document.getElementById('customerListContainer');

  // Clear the existing content of the customer list container
  customerListContainer.innerHTML = '';

  // Iterate over the customerList array and create HTML elements to display the customers
  customerList.forEach((customer, index) => {
    // Create a div element for each customer
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');

    // Create a paragraph element for each customer detail
    const fullNamePara = document.createElement('p');
    fullNamePara.textContent = `Full Name: ${customer.fullName}`;

    const emailPara = document.createElement('p');
    emailPara.textContent = `Email: ${customer.email}`;

    const telephonePara = document.createElement('p');
    telephonePara.textContent = `Telephone: ${customer.telephone}`;

    const addressPara = document.createElement('p');
    addressPara.textContent = `Address: ${customer.address}`;

    // Create buttons for delete and edit actions
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteCustomer(index));

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editCustomer(index));

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
function deleteCustomer(index: number) {
  // Remove the customer from the customerList array based on the index
  customerList.splice(index, 1);

  // Call the function to display the updated customer list
  displayCustomerList();
}

// Function to edit a customer's details
function editCustomer(index: number) {
  // Get the customer object based on the index
  const customer = customerList[index];

  // Update the input fields with the customer's details
  (<HTMLInputElement>document.getElementById('fullName')).value = customer.fullName;
  (<HTMLInputElement>document.getElementById('email')).value = customer.email;
  (<HTMLInputElement>document.getElementById('telephone')).value = customer.telephone;
  (<HTMLInputElement>document.getElementById('address')).value = customer.address;

  // Delete the customer from the customerList array
  customerList.splice(index, 1);

  // Call the function to display the updated customer list
  displayCustomerList();
}

// Add event listener to the add button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addCustomer);