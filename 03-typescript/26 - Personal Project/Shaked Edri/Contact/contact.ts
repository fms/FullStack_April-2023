const inputTextName = document.body.querySelector("#message-name") as HTMLTextAreaElement;
const nameButton = document.body.querySelector('#inputName') as HTMLButtonElement;

const firstMessage = document.body.querySelector("#customer-first-message") as HTMLTextAreaElement;

const ourmessage1 = document.body.querySelector(".our-message1") as HTMLTextAreaElement;
const ourmessage2 = document.body.querySelector(".our-message2") as HTMLTextAreaElement;
const ourmessage3 = document.body.querySelector(".our-message3") as HTMLTextAreaElement;
const ourmessage4 = document.body.querySelector(".our-message4") as HTMLTextAreaElement;

const agentPIC = document.body.querySelector("#customer-service2") as HTMLImageElement;

const guestPIC = document.body.querySelector("#guest-picture") as HTMLImageElement;
guestPIC.style.display = 'none';

function showElements(elements) {
    elements.forEach(element => {
        if (element instanceof HTMLElement) {
            element.style.display = 'block';
        }
    });
}

function hideElements(elements) {
    elements.forEach(element => {
        if (element instanceof HTMLElement) {
            element.style.display = 'none';
        }
    });
}

inputTextName.addEventListener('input', () => {
    const inputValue = inputTextName.value;
    nameButton.textContent = inputValue;
});

const customerMessage = document.body.querySelector(".customer-message1") as HTMLTextAreaElement;

function namePart() {
    const customerName = inputTextName.value;
    if (inputTextName.value !== '') {
        const confirmation = confirm(`Are you sure your name is ${customerName}`)
        if (confirmation) {
            const elements = [customerMessage, guestPIC, agentPIC, ourmessage3];
            showElements(elements);
            customerMessage.style.animation = 'fade-in 1s';
            customerMessage.innerHTML = `
        <div class="guest">Me:</div><br>
        Hello, my name is ${customerName}<br><br>
        <div class="timing-messages">12:20
        <img id="blueV" src="../Images/VV.png">
    </div>`
            ourmessage2.style.display = 'none';
            ourmessage3.style.animation = 'fade-in 2s';
        }
    } else {
        alert("Make sure you've filled in the name value.")
    }
}

const phoneNumber = document.querySelector('#phone-number') as HTMLInputElement;
const confirmPN = document.querySelector('#confirmPN') as HTMLButtonElement;

function phonePart() {
    if (phoneNumber.value !== '') {
        ourmessage3.style.display = 'none';
        customerMessage.innerHTML = `
        <div class="guest">Me:</div><br>
        My phone number is ${phoneNumber.value}<br><br>
        <div class="timing-messages">12:21
        <img id="blueV" src="../Images/VV.png">
    </div>`
        ourmessage4.style.display = 'block';
        ourmessage4.style.animation = 'fade-in 1s';
    } else {
        alert(`Please make sure you've filled in the phone number`);
    }
}

const confirmEmail = document.querySelector('#confirmEmail') as HTMLButtonElement;
function emailPart() {
    const emailInput = document.querySelector('#costumer-email') as HTMLInputElement;
    if (emailInput.value !== '') {
        let originalName = inputTextName.value;
        let originalPhone = phoneNumber.value;
        let originalEmail = emailInput.value;
        const hide = [ourmessage4, agentPIC];
        customerMessage.style.display = 'block';
        customerMessage.style.animation = 'fade-in 2s';
        hideElements(hide);
        customerMessage.innerHTML = `
            <div class="guest">Me:</div><br>
            My email is:<br>${originalEmail}<br>
            <p id="changes">New name:</p><input type="text" class="editInput" id="editNameInput" value="${originalName}">
            <p id="changes">New phone:</p><input type="text" class="editInput" id="editPhoneInput" value="${originalPhone}">
            <p id="changes">New email:</p><input type="text" class="editInput" id="editEmailInput" value="${originalEmail}">
            <br><button id="editButton">Edit my details</button>
            <br><button id="saveChanges">Finish</button>
            <div class="timing-messages">12:23
            <img id="blueV" src="../Images/VV.png">
        `;

        const changesElements = document.querySelectorAll("#changes");
        changesElements.forEach(element => {
            if (element instanceof HTMLElement) {
                element.style.display = 'none';
            }
        });

        const editInputs = document.querySelectorAll(".editInput");
        editInputs.forEach(input => {
            if (input instanceof HTMLInputElement) {
                input.style.display = 'none';
            }
        });

        const editButton = document.querySelector("#editButton") as HTMLButtonElement;
        editButton.addEventListener('click', () => {
            showValues();
        });

        const saveChanges = document.querySelector("#saveChanges") as HTMLButtonElement;
        saveChanges.addEventListener('click', () => {
            const editNameInput = document.querySelector('#editNameInput') as HTMLInputElement;
            const editPhoneInput = document.querySelector('#editPhoneInput') as HTMLInputElement;
            const editEmailInput = document.querySelector('#editEmailInput') as HTMLInputElement;
            originalName = editNameInput.value;
            originalPhone = editPhoneInput.value;
            originalEmail = editEmailInput.value;
            saveToLocalStorage(originalName, originalPhone, originalEmail);
            finish();
        });

        function finish() {
            const elements = [ourmessage4, ourmessage1, ourmessage2, customerMessage, guestPIC];
            hideElements(elements);
            finishMessage.style.display = 'block';
            finishMessage.style.animation = 'fade-in 3s';
            finishMessage.innerHTML = `
        Great! <br>You've successfully registered. <br>An agent will get back to you within 4 business days.🌺
        <br><br>Your details:<br>
        Your name : ${originalName}<br>Your phone number : ${originalPhone}<br>Your email : ${originalEmail}`
        }

        function showValues() {
            editButton.style.display = 'none';
            const changesElements = document.querySelectorAll("#changes");
            changesElements.forEach(element => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'block';
                }
            });

            const editInputs = document.querySelectorAll(".editInput");
            editInputs.forEach(input => {
                if (input instanceof HTMLInputElement) {
                    input.style.display = 'block';
                }
            });
        }
    } else {
        alert(`Please make sure you've filled in the email`);
    }
}

function saveToLocalStorage(name: string, phone: string, email: string) {
    const guestData = {
        Name: name,
        Phone: phone,
        Email: email
    };
    localStorage.setItem('Guest', JSON.stringify(guestData));
}

function deleteUserFromLS() {
    const confirmm = confirm('Are you sure you want to delete your user?');
    if (confirmm) {
        localStorage.removeItem('Guest');
        location.reload();
        alert('Successfully deleted.')
    } else {
        alert('Alright, have a good day 😊');
    }
}

const finishMessage = document.body.querySelector(".finishMessage") as HTMLDivElement;
function displayFinishMessage() {
    const guestData = localStorage.getItem('Guest');
    if (guestData) {
        const guest = JSON.parse(guestData);
        finishMessage.style.display = 'block';
        finishMessage.innerHTML = `<center>
            I see you've already registered!<br>
            An agent will get back to you within a few days.🌺<br><br>
            Your details⬇️<br>
            Your name: ${guest.Name}<br>
            Your phone number: ${guest.Phone}<br>
            Your email: ${guest.Email}
            <br><br>Do you want to change details?<br><br>
            <button id="changeMyDetails">Change my details</button>
            <button id="noThanks">No thanks</button>
            <button id="deleteUser">Delete my details</button>
            </center>
        `;

        const changeMyDetails = document.querySelector("#changeMyDetails") as HTMLButtonElement;
        changeMyDetails.addEventListener('click', () => {
            const show = [ourmessage1, ourmessage2];
            showElements(show);
            finishMessage.style.display = 'none';
        });

        const noThanks = document.querySelector("#noThanks") as HTMLButtonElement;
        noThanks.addEventListener('click', () => {
            finishMessage.style.display = 'none';
            ourmessage1.style.display = 'block';
            ourmessage1.textContent = 'Alright, have a good day!💗';
        });

        const deleteMyDetails = document.querySelector("#deleteUser") as HTMLButtonElement;
        deleteMyDetails.addEventListener('click', deleteUserFromLS);
    } else {
        const show = [ourmessage1, ourmessage2];
        showElements(show);
    }
}


window.addEventListener('load', () => displayFinishMessage());
nameButton.addEventListener('click', () => namePart());
confirmPN.addEventListener('click', () => phonePart());
confirmEmail.addEventListener('click', () => emailPart());

