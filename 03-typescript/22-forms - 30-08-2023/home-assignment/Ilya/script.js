const form = document.getElementById('registrationForm');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('phone').value;

    confirmationMessage.innerText = `Thank you, ${name}, we accept your details! We will send you a confirmation letter to your email address: ${email}.`;
    confirmationMessage.classList.remove('hide');
});

