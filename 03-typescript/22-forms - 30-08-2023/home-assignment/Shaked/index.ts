const namee = document.querySelector('#name') as HTMLInputElement;
const lastname = document.querySelector('#lastname') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const confirmpass = document.querySelector('#confirmpass') as HTMLInputElement;
const submitt = document.querySelector('#submit') as HTMLButtonElement;
const deletee = document.querySelector('#delete') as HTMLButtonElement;
const resultt = document.querySelector('#result') as HTMLDivElement;

submitt.addEventListener('click', () => {
    const nameLength = namee.value.length;
    const lastNameLength = lastname.value.length;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmpass.value;

    resultt.style.color = 'red';
    let message = "";
    let currect = `
    Your registration has been successfully received!\n
    Name: ${namee.value}\n
    Last Name: ${lastname.value}\n
    Email: ${emailValue}\n
    Password: ${password.value}`;

    if (nameLength < 2) {
        message += "Your name is too short.\n";
    } else if (nameLength > 10) {
        message += "Your name is too long.\n";
    }

    if (lastNameLength < 2) {
        message += "Your last name is too short.\n";
    } else if (lastNameLength > 10) {
        message += "Your last name is too long.\n";
    }

    if (!emailValue.includes("@")) {
        message += "Invalid email address.\n";
    } else if (
        !emailValue.includes("@walla") &&
        !emailValue.includes("@gmail") &&
        !emailValue.includes("@hotmail")) {
        message += "Make sure your email is of type\n @walla / @gmail / @hotmail.";
    }
    if (passwordValue === "") {
        message += 'Please fill the password.\n';
    } else if (passwordValue !== confirmPasswordValue) {
        message += "Passwords do not match.\n";
    } else if (passwordValue.length < 6) {
        message += "Passwords must contain at least 6 characters";
    } else if (passwordValue.length > 13) {
        message += "Passwords is too long";
    }

    if (message === "") {
        message = currect;
        resultt.style.color = 'green';
    }
    resultt.textContent = message;

    deletee.addEventListener('click', () => {
        namee.value = '';
        lastname.value = '';
        email.value = '';
        password.value = '';
        confirmpass.value = '';
        resultt.textContent = '';
        resultt.style.color = '';
    });
});

