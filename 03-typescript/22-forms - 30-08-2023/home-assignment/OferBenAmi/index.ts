class userDetailsClass {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public gender: string,
        public deleteRow: boolean = false
    ) {}
}
let allUserDetails: userDetailsClass[] = [];

function submitted(event:SubmitEvent){
    const submittedUserDetails = new userDetailsClass(
        event.target.elements.userName.value,
        event.target.elements.email.value,
        event.target.elements.password.value,
        event.target.elements.gender.value,
    )
    allUserDetails.push(submittedUserDetails)
    // console.log(allUserDetails);
    pushRow(submittedUserDetails);
}


function pushRow(submittedUserDetails: userDetailsClass) {
    const userTable = document.querySelector(".usersTable");

    const newRow = document.createElement("tr");
    const userNametd = document.createElement("td");
    const emailtd = document.createElement("td");
    const passwordtd = document.createElement("td");
    const gendertd = document.createElement("td");
    const deletetd = document.createElement("td");
    const deleteCheckBox = document.createElement("input");
    deleteCheckBox.setAttribute("type", "checkBox");
    deletetd.appendChild(deleteCheckBox);

    userNametd.textContent = submittedUserDetails.userName;
    emailtd.textContent = submittedUserDetails.email;
    passwordtd.textContent = submittedUserDetails.password;
    gendertd.textContent = submittedUserDetails.gender;

    newRow.appendChild(userNametd);
    newRow.appendChild(emailtd);
    newRow.appendChild(passwordtd);
    newRow.appendChild(gendertd);
    newRow.appendChild(deletetd);
    userTable?.appendChild(newRow);
}

function deleteRows(allUserDetails: userDetailsClass[]) {
    const userTable = document.querySelector(".usersTable");
    userTable?.childNodes.forEach((Element,index)=>{
        if(index < 2) return;
        if(Element.lastChild?.firstChild.checked) {
            console.log(`index is ${index}, element ${Element} is removed`);
            Element.remove();
        }
    })
}