var namee = document.querySelector('#name');
var lastname = document.querySelector('#lastname');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmpass = document.querySelector('#confirmpass');
var submitt = document.querySelector('#submit');
var deletee = document.querySelector('#delete');
var resultt = document.querySelector('#result');
submitt.addEventListener('click', function () {
    var nameLength = namee.value.length;
    var lastNameLength = lastname.value.length;
    var emailValue = email.value;
    var passwordValue = password.value;
    var confirmPasswordValue = confirmpass.value;
    resultt.style.color = 'red';
    var message = "";
    var currect = "\n    Your registration has been successfully received!\n\n    Name: " + namee.value + "\n\n    Last Name: " + lastname.value + "\n\n    Email: " + emailValue + "\n\n    Password: " + password.value;
    if (nameLength < 2) {
        message += "Your name is too short.\n";
    }
    else if (nameLength > 10) {
        message += "Your name is too long.\n";
    }
    if (lastNameLength < 2) {
        message += "Your last name is too short.\n";
    }
    else if (lastNameLength > 10) {
        message += "Your last name is too long.\n";
    }
    if (!emailValue.includes("@")) {
        message += "Invalid email address.\n";
    }
    else if (!emailValue.includes("@walla") &&
        !emailValue.includes("@gmail") &&
        !emailValue.includes("@hotmail")) {
        message += "Make sure your email is of type\n @walla / @gmail / @hotmail.";
    }
    if (passwordValue === "") {
        message += 'Please fill the password.\n';
    }
    else if (passwordValue !== confirmPasswordValue) {
        message += "Passwords do not match.\n";
    }
    else if (passwordValue.length < 6) {
        message += "Passwords must contain at least 6 characters";
    }
    else if (passwordValue.length > 13) {
        message += "Passwords is too long";
    }
    if (message === "") {
        message = currect;
        resultt.style.color = 'green';
    }
    resultt.textContent = message;
    deletee.addEventListener('click', function () {
        namee.value = '';
        lastname.value = '';
        email.value = '';
        password.value = '';
        confirmpass.value = '';
        resultt.textContent = '';
        resultt.style.color = '';
    });
});
