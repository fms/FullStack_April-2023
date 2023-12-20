var inputTextName = document.body.querySelector("#message-name");
var nameButton = document.body.querySelector('#inputName');
var firstMessage = document.body.querySelector("#customer-first-message");
var ourmessage1 = document.body.querySelector(".our-message1");
var ourmessage2 = document.body.querySelector(".our-message2");
var ourmessage3 = document.body.querySelector(".our-message3");
var ourmessage4 = document.body.querySelector(".our-message4");
var agentPIC = document.body.querySelector("#customer-service2");
var guestPIC = document.body.querySelector("#guest-picture");
guestPIC.style.display = 'none';
function showElements(elements) {
    elements.forEach(function (element) {
        if (element instanceof HTMLElement) {
            element.style.display = 'block';
        }
    });
}
function hideElements(elements) {
    elements.forEach(function (element) {
        if (element instanceof HTMLElement) {
            element.style.display = 'none';
        }
    });
}
inputTextName.addEventListener('input', function () {
    var inputValue = inputTextName.value;
    nameButton.textContent = inputValue;
});
var customerMessage = document.body.querySelector(".customer-message1");
function namePart() {
    var customerName = inputTextName.value;
    if (inputTextName.value !== '') {
        var confirmation = confirm("Are you sure your name is " + customerName);
        if (confirmation) {
            var elements = [customerMessage, guestPIC, agentPIC, ourmessage3];
            showElements(elements);
            customerMessage.style.animation = 'fade-in 1s';
            customerMessage.innerHTML = "\n        <div class=\"guest\">Me:</div><br>\n        Hello, my name is " + customerName + "<br><br>\n        <div class=\"timing-messages\">12:20\n        <img id=\"blueV\" src=\"../Images/VV.png\">\n    </div>";
            ourmessage2.style.display = 'none';
            ourmessage3.style.animation = 'fade-in 2s';
        }
    }
    else {
        alert("Make sure you've filled in the name value.");
    }
}
var phoneNumber = document.querySelector('#phone-number');
var confirmPN = document.querySelector('#confirmPN');
function phonePart() {
    if (phoneNumber.value !== '') {
        ourmessage3.style.display = 'none';
        customerMessage.innerHTML = "\n        <div class=\"guest\">Me:</div><br>\n        My phone number is " + phoneNumber.value + "<br><br>\n        <div class=\"timing-messages\">12:21\n        <img id=\"blueV\" src=\"../Images/VV.png\">\n    </div>";
        ourmessage4.style.display = 'block';
        ourmessage4.style.animation = 'fade-in 1s';
    }
    else {
        alert("Please make sure you've filled in the phone number");
    }
}
var confirmEmail = document.querySelector('#confirmEmail');
function emailPart() {
    var emailInput = document.querySelector('#costumer-email');
    if (emailInput.value !== '') {
        var originalName_1 = inputTextName.value;
        var originalPhone_1 = phoneNumber.value;
        var originalEmail_1 = emailInput.value;
        var hide = [ourmessage4, agentPIC];
        customerMessage.style.display = 'block';
        customerMessage.style.animation = 'fade-in 2s';
        hideElements(hide);
        customerMessage.innerHTML = "\n            <div class=\"guest\">Me:</div><br>\n            My email is:<br>" + originalEmail_1 + "<br>\n            <p id=\"changes\">New name:</p><input type=\"text\" class=\"editInput\" id=\"editNameInput\" value=\"" + originalName_1 + "\">\n            <p id=\"changes\">New phone:</p><input type=\"text\" class=\"editInput\" id=\"editPhoneInput\" value=\"" + originalPhone_1 + "\">\n            <p id=\"changes\">New email:</p><input type=\"text\" class=\"editInput\" id=\"editEmailInput\" value=\"" + originalEmail_1 + "\">\n            <br><button id=\"editButton\">Edit my details</button>\n            <br><button id=\"saveChanges\">Finish</button>\n            <div class=\"timing-messages\">12:23\n            <img id=\"blueV\" src=\"../Images/VV.png\">\n        ";
        var changesElements = document.querySelectorAll("#changes");
        changesElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.style.display = 'none';
            }
        });
        var editInputs = document.querySelectorAll(".editInput");
        editInputs.forEach(function (input) {
            if (input instanceof HTMLInputElement) {
                input.style.display = 'none';
            }
        });
        var editButton_1 = document.querySelector("#editButton");
        editButton_1.addEventListener('click', function () {
            showValues();
        });
        var saveChanges = document.querySelector("#saveChanges");
        saveChanges.addEventListener('click', function () {
            var editNameInput = document.querySelector('#editNameInput');
            var editPhoneInput = document.querySelector('#editPhoneInput');
            var editEmailInput = document.querySelector('#editEmailInput');
            originalName_1 = editNameInput.value;
            originalPhone_1 = editPhoneInput.value;
            originalEmail_1 = editEmailInput.value;
            saveToLocalStorage(originalName_1, originalPhone_1, originalEmail_1);
            finish();
        });
        function finish() {
            var elements = [ourmessage4, ourmessage1, ourmessage2, customerMessage, guestPIC];
            hideElements(elements);
            finishMessage.style.display = 'block';
            finishMessage.style.animation = 'fade-in 3s';
            finishMessage.innerHTML = "\n        Great! <br>You've successfully registered. <br>An agent will get back to you within 4 business days.\uD83C\uDF3A\n        <br><br>Your details:<br>\n        Your name : " + originalName_1 + "<br>Your phone number : " + originalPhone_1 + "<br>Your email : " + originalEmail_1;
        }
        function showValues() {
            editButton_1.style.display = 'none';
            var changesElements = document.querySelectorAll("#changes");
            changesElements.forEach(function (element) {
                if (element instanceof HTMLElement) {
                    element.style.display = 'block';
                }
            });
            var editInputs = document.querySelectorAll(".editInput");
            editInputs.forEach(function (input) {
                if (input instanceof HTMLInputElement) {
                    input.style.display = 'block';
                }
            });
        }
    }
    else {
        alert("Please make sure you've filled in the email");
    }
}
function saveToLocalStorage(name, phone, email) {
    var guestData = {
        Name: name,
        Phone: phone,
        Email: email
    };
    localStorage.setItem('Guest', JSON.stringify(guestData));
}
function deleteUserFromLS() {
    var confirmm = confirm('Are you sure you want to delete your user?');
    if (confirmm) {
        localStorage.removeItem('Guest');
        location.reload();
        alert('Successfully deleted.');
    }
    else {
        alert('Alright, have a good day 😊');
    }
}
var finishMessage = document.body.querySelector(".finishMessage");
function displayFinishMessage() {
    var guestData = localStorage.getItem('Guest');
    if (guestData) {
        var guest = JSON.parse(guestData);
        finishMessage.style.display = 'block';
        finishMessage.innerHTML = "<center>\n            I see you've already registered!<br>\n            An agent will get back to you within a few days.\uD83C\uDF3A<br><br>\n            Your details\u2B07\uFE0F<br>\n            Your name: " + guest.Name + "<br>\n            Your phone number: " + guest.Phone + "<br>\n            Your email: " + guest.Email + "\n            <br><br>Do you want to change details?<br><br>\n            <button id=\"changeMyDetails\">Change my details</button>\n            <button id=\"noThanks\">No thanks</button>\n            <button id=\"deleteUser\">Delete my details</button>\n            </center>\n        ";
        var changeMyDetails = document.querySelector("#changeMyDetails");
        changeMyDetails.addEventListener('click', function () {
            var show = [ourmessage1, ourmessage2];
            showElements(show);
            finishMessage.style.display = 'none';
        });
        var noThanks = document.querySelector("#noThanks");
        noThanks.addEventListener('click', function () {
            finishMessage.style.display = 'none';
            ourmessage1.style.display = 'block';
            ourmessage1.textContent = 'Alright, have a good day!💗';
        });
        var deleteMyDetails = document.querySelector("#deleteUser");
        deleteMyDetails.addEventListener('click', deleteUserFromLS);
    }
    else {
        var show = [ourmessage1, ourmessage2];
        showElements(show);
    }
}
window.addEventListener('load', function () { return displayFinishMessage(); });
nameButton.addEventListener('click', function () { return namePart(); });
confirmPN.addEventListener('click', function () { return phonePart(); });
confirmEmail.addEventListener('click', function () { return emailPart(); });
