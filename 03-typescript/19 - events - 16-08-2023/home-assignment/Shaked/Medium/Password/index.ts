// Password validation
// Add two password input fields.
// Using the input event make sure the second password matches the first one.
// Display an error (on the page, don't use alert()) if the passwords don't match.

const firstpass = document.querySelector('#firstpass') as HTMLInputElement;
const secondpass = document.querySelector('#secondpass') as HTMLInputElement;
const submit = document.querySelector('#submit') as HTMLOutputElement;
const outputtext = document.querySelector('#output') as HTMLTextAreaElement;
outputtext.style.marginLeft = '25%';
submit.addEventListener('click', () => {
    const valueof1 = firstpass.value;
    const valueof2 = secondpass.value;

    if (valueof1 === valueof2) {
        outputtext.innerText = 'Equal';
        outputtext.style.color = 'green';
    } else {
        outputtext.innerText = 'Not equal';
        outputtext.style.color = 'red';
    }
});
