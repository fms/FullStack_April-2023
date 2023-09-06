console.log("connected");

const form = document.querySelector(".giliform") as HTMLFormElement;
const list = document.querySelector("#list") as HTMLUListElement;

function handleSubmit(ev: any) {
  ev.preventDefault();
  console.log(ev);

  //   const email = ev.target.email.value
  //   const password = ev.target.password.value

  const emailInput = document.querySelector("#email") as HTMLInputElement;
  const PasswordInput = document.querySelector("#password") as HTMLInputElement;

  const email = emailInput.value;
  const password = PasswordInput.value;
  const id = 3
//  addUserToArray()
  addUserToList(email,password, id)

  //reset
  emailInput.value = "";
  PasswordInput.value = "";

}

function addUserToList(userEmail, userPassword, id) {
  let html = `<li>
  <div>
  Email: ${userEmail}, Password: ${userPassword}
  </div>
  <button onclick="deleteUser(id)">DELETE</button>
  <input type="checkbox" />
  </li>`;
  list.innerHTML += html;
}

interface User {
    email: string,
    password: string,
    id: 3
}



// function reset() {

// }
