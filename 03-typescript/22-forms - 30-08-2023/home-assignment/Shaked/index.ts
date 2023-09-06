const namee = document.querySelector('#name') as HTMLInputElement;
const lastname = document.querySelector('#lastname') as HTMLInputElement;
const emaill = document.querySelector('#email') as HTMLInputElement;
const passwordd = document.querySelector('#password') as HTMLInputElement;
const confirmpass = document.querySelector('#confirmpass') as HTMLInputElement;
const bdate = document.querySelector('#bdate') as HTMLInputElement;
const submitt = document.querySelector('#submit') as HTMLButtonElement;
const male = document.querySelector('#male') as HTMLButtonElement;
const female = document.querySelector('#female') as HTMLButtonElement;
const deletee = document.querySelector('#delete') as HTMLButtonElement;
const edit = document.querySelector('#edit') as HTMLButtonElement;
const resultt = document.querySelector('#result') as HTMLDivElement;

let genderSelected: string | null = null;

male.addEventListener('click', () => {
    genderSelected = 'Male';
});

female.addEventListener('click', () => {
    genderSelected = 'Female';
});

let originalName = '';
let originalLastName = '';
let originalEmail = '';
let originalPassword = '';
let originalConfirmPassword = '';
let originalGender: string | null = null;
let originalBirthday = '';

function updateOriginalValues() {
    originalName = namee.value;
    originalLastName = lastname.value;
    originalEmail = emaill.value;
    originalPassword = passwordd.value;
    originalConfirmPassword = confirmpass.value;
    originalBirthday = bdate.value;
}

submitt.addEventListener('click', () => {
    const nameLength = namee.value.length;
    const lastNameLength = lastname.value.length;
    const emailValue = emaill.value;
    const passwordValue = passwordd.value;
    const confirmPasswordValue = confirmpass.value;
    const birthday = bdate.value;

    resultt.style.color = 'red';
    let message = '';

    if (nameLength < 2) {
        message += 'Your name is too short.\n';
    } else if (nameLength > 10) {
        message += 'Your name is too long.\n';
    }

    if (lastNameLength < 2) {
        message += 'Your last name is too short.\n';
    } else if (lastNameLength > 10) {
        message += 'Your last name is too long.\n';
    }

    if (!emailValue.includes('@')) {
        message += 'Invalid email address.\n';
    } else if (
        !emailValue.includes('@walla') &&
        !emailValue.includes('@gmail') &&
        !emailValue.includes('@hotmail')
    ) {
        message += 'Make sure your email is of type\n @walla / @gmail / @hotmail.';
    }
    if (passwordValue === '') {
        message += 'Please fill the password.\n';
    } else if (passwordValue !== confirmPasswordValue) {
        message += 'Passwords do not match.\n';
    } else if (passwordValue.length < 6) {
        message += 'Passwords must contain at least 6 characters';
    } else if (passwordValue.length > 13) {
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
        message = `
        Your registration has been successfully received!\n
        Name: ${originalName}\n
        Last Name: ${originalLastName}\n
        Email: ${originalEmail}\n
        Password: ${originalPassword}\n
        Birthday: ${originalBirthday}\n
        Gender: ${originalGender}`;
    }

    resultt.textContent = message;
});

edit.addEventListener('click', () => {
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

deletee.addEventListener('click', () => {
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