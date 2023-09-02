interface userDetails{
    userName:string,
    email:string,
    password:string,
    gender:string,
    delete?:HTMLInputElement,
}

let allUserDetails: userDetails[] = [];


function submitted(event: SubmitEvent){
    let submittedUserDetails: userDetails = {
        userName: event.target.elements.userName.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
        gender: event.target.elements.gender.value,
    };
    pushRow(submittedUserDetails)
    allUserDetails.push(submittedUserDetails)
}

function pushRow(submittedUserDetails: userDetails){
    const userTable = document.querySelector(".usersTable");

    const newRow = document.createElement("tr");
    const userNametd = document.createElement("td");
    const emailtd = document.createElement("td");
    const passwordtd = document.createElement("td");
    const gendertd = document.createElement("td");
    const deletetd = document.createElement("td");
    const deleteCheckBox = document.createElement("input");
    deleteCheckBox.setAttribute("type", "checkBox");
    deletetd.appendChild(deleteCheckBox)

    userNametd.textContent = submittedUserDetails.userName;
    emailtd.textContent = submittedUserDetails.email;
    passwordtd.textContent = submittedUserDetails.password;
    gendertd.textContent = submittedUserDetails.gender;
    
    newRow.appendChild(userNametd)
    newRow.appendChild(emailtd)
    newRow.appendChild(passwordtd)
    newRow.appendChild(gendertd)
    newRow.appendChild(deletetd)
    userTable?.appendChild(newRow)
}

function deleteRows(event: Event){
    console.log(event);
    
}