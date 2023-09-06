console.log("connected");
var form = document.querySelector(".giliform");
var list = document.querySelector("#list");
function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    //   const email = ev.target.email.value
    //   const password = ev.target.password.value
    var emailInput = document.querySelector("#email");
    var PasswordInput = document.querySelector("#password");
    var email = emailInput.value;
    var password = PasswordInput.value;
    var id = 3;
    //  addUserToArray()
    addUserToList(email, password, id);
    //reset
    emailInput.value = "";
    PasswordInput.value = "";
}
function addUserToList(userEmail, userPassword, id) {
    var html = "<li>\n  <div>\n  Email: " + userEmail + ", Password: " + userPassword + "\n  </div>\n  <button onclick=\"deleteUser(id)\">DELETE</button>\n  <input type=\"checkbox\" />\n  </li>";
    list.innerHTML += html;
}
// function reset() {
// }
