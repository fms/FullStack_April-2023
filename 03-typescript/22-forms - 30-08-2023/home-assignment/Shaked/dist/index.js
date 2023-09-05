var namee = document.querySelector('#name');
var lastname = document.querySelector('#lastname');
var emaill = document.querySelector('#email');
var passwordd = document.querySelector('#password');
var confirmpass = document.querySelector('#confirmpass');
var bdate = document.querySelector('#bdate');
var submitt = document.querySelector('#submit');
var male = document.querySelector('#male');
var female = document.querySelector('#female');
var deletee = document.querySelector('#delete');
var edit = document.querySelector('#edit');
var resultt = document.querySelector('#result');
var genderSelected = null;
male.addEventListener('click', function () {
    genderSelected = 'Male';
});
female.addEventListener('click', function () {
    genderSelected = 'Female';
});
var originalName = '';
var originalLastName = '';
var originalEmail = '';
var originalPassword = '';
var originalConfirmPassword = '';
var originalGender = null;
var originalBirthday = '';
function updateOriginalValues() {
    originalName = namee.value;
    originalLastName = lastname.value;
    originalEmail = emaill.value;
    originalPassword = passwordd.value;
    originalConfirmPassword = confirmpass.value;
    originalBirthday = bdate.value;
}
submitt.addEventListener('click', function () {
    var nameLength = namee.value.length;
    var lastNameLength = lastname.value.length;
    var emailValue = emaill.value;
    var passwordValue = passwordd.value;
    var confirmPasswordValue = confirmpass.value;
    var birthday = bdate.value;
    resultt.style.color = 'red';
    var message = '';
    if (nameLength < 2) {
        message += 'Your name is too short.\n';
    }
    else if (nameLength > 10) {
        message += 'Your name is too long.\n';
    }
    if (lastNameLength < 2) {
        message += 'Your last name is too short.\n';
    }
    else if (lastNameLength > 10) {
        message += 'Your last name is too long.\n';
    }
    if (!emailValue.includes('@')) {
        message += 'Invalid email address.\n';
    }
    else if (!emailValue.includes('@walla') &&
        !emailValue.includes('@gmail') &&
        !emailValue.includes('@hotmail')) {
        message += 'Make sure your email is of type\n @walla / @gmail / @hotmail.';
    }
    if (passwordValue === '') {
        message += 'Please fill the password.\n';
    }
    else if (passwordValue !== confirmPasswordValue) {
        message += 'Passwords do not match.\n';
    }
    else if (passwordValue.length < 6) {
        message += 'Passwords must contain at least 6 characters';
    }
    else if (passwordValue.length > 13) {
        message += 'Passwords is too long';
    }
    if (!birthday) {
        message += 'Please fill the birthday\n';
    }
    if (!genderSelected) {
        message += 'Please choose one of genders\n';
    }
    if (message === '') {
        originalName = namee.value;
        originalLastName = lastname.value;
        originalEmail = emaill.value;
        originalPassword = passwordd.value;
        originalConfirmPassword = confirmpass.value;
        originalGender = genderSelected;
        originalBirthday = bdate.value;
        namee.value = '';
        lastname.value = '';
        emaill.value = '';
        passwordd.value = '';
        confirmpass.value = '';
        genderSelected = '';
        bdate.value = '';
        resultt.style.color = 'green';
        message = "\n        Your registration has been successfully received!\n\n        Name: " + originalName + "\n\n        Last Name: " + originalLastName + "\n\n        Email: " + originalEmail + "\n\n        Password: " + originalPassword + "\n\n        Birthday: " + originalBirthday + "\n\n        Gender: " + originalGender;
    }
    resultt.textContent = message;
});
edit.addEventListener('click', function () {
    namee.value = originalName;
    lastname.value = originalLastName;
    emaill.value = originalEmail;
    passwordd.value = originalPassword;
    confirmpass.value = originalConfirmPassword;
    genderSelected = originalGender;
    bdate.value = originalBirthday;
    resultt.textContent = '';
    resultt.style.color = '';
});
deletee.addEventListener('click', function () {
    namee.value = '';
    lastname.value = '';
    emaill.value = '';
    passwordd.value = '';
    confirmpass.value = '';
    bdate.value = '';
    genderSelected = null;
    resultt.textContent = '';
    resultt.style.color = '';
});
