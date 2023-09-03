class userInfo {
    constructor (
        public userName: string,
        public userBirth: number,
        public email: string,
        
        
    ) {}
}

let allUserInfo: userInfo[] = [];

function submitForm (event: SubmitEvent){
    const submittedUserDetails = new userInfo (
        event.target.elements.userName.value,
        event.target.elements.userBirth.value,
        event.target.elements.email.value,
    )

    allUserInfo.push(submitForm);
    pushRow(submitForm);
}

function info (submitForm: userInfo) {
    const userTable = document.querySelector(".usersTable");

    const newRow = document.createElement("tr");
    const userNametd = document.createElement("td");
    const userBirth = document.createElement("td");
    const emailtd = document.createElement("td");

    userNametd.textContent = submitForm.userName;
    userBirth.textContent = submitForm.userBirth;
    emailtd.textContent = submitForm.email;

    newRow.appendChild(userNametd);
    newRow.appendChild(userBirth);
    newRow.appendChild(emailtd);

    userTable?.appendChild(newRow);
}