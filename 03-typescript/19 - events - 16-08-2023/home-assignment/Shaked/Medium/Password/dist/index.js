// Password validation
// Add two password input fields.
// Using the input event make sure the second password matches the first one.
// Display an error (on the page, don't use alert()) if the passwords don't match.
var firstpass = document.querySelector('#firstpass');
var secondpass = document.querySelector('#secondpass');
var sumbit = document.querySelector('#sumbit');
var outputtext = document.querySelector('#output');
outputtext.style.marginLeft = '25%';
sumbit.addEventListener('click', function () {
    var valueof1 = firstpass.value;
    var valueof2 = secondpass.value;
    if (valueof1 === valueof2) {
        outputtext.innerText = 'Equal';
        outputtext.style.color = 'green';
    }
    else {
        outputtext.innerText = 'Not equal';
        outputtext.style.color = 'red';
    }
});
