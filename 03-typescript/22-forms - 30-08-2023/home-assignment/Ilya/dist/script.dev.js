"use strict";

var form = document.getElementById('registrationForm');
var confirmationMessage = document.getElementById('confirmationMessage');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var countryCode = document.getElementById('countryCode').value;
  var phone = document.getElementById('phone').value;
  confirmationMessage.innerText = "Thank you, ".concat(name, ", we accept your details! We will send you a confirmation letter to your email address: ").concat(email, ".");
  confirmationMessage.classList.remove('hide');
});