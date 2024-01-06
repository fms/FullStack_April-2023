const firstName = document.querySelector("#firstName") as HTMLInputElement;
const lastName = document.querySelector("#lastName") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLInputElement;
const formPerson = document.querySelector("#name-form") as HTMLFormElement;

interface FormElements extends HTMLFormControlsCollection {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
}

class Person {
    constructor(public firstName: string, public lastName :string) {

    }
}

async function submitPerson(event: SubmitEvent) {
    event.preventDefault();
    const formPersonElements = formPerson.elements as FormElements;


    const nameFromServer = await getFullName(`${firstName.value} ` + `${lastName.value}`);
    console.log(nameFromServer);

    let newPerson :Person = {
        firstName: formPersonElements.firstName.value,
        lastName: formPersonElements.lastName.value,
    }

    creatingDom(newPerson)
}


function creatingDom(newPerson: Person) {
    let newNamesContainer = document.querySelector(".submited-names") as HTMLDivElement;
    let newDiv = document.createElement("div") as HTMLDivElement;
    newDiv.className = "newPersonContainer";
    let firstNameDiv = document.createElement("div") as HTMLDivElement;
    let lastNameDiv = document.createElement("div") as HTMLDivElement;
    firstNameDiv.classList.add("new-name-div");
    lastNameDiv.classList.add("new-name-div");

    let newFirstName = document.createElement("p") as HTMLInputElement;
    let newLastName = document.createElement("p") as HTMLInputElement;
    let newFirstNameLabel = document.createElement("label") as HTMLLabelElement;
    let newLastNameLabel = document.createElement("label") as HTMLLabelElement;
    newFirstNameLabel.textContent = "First Name:";
    newLastNameLabel.textContent = "Last Name:";

    newFirstName.textContent = newPerson.firstName;
    newLastName.textContent = newPerson.lastName;


    firstNameDiv.appendChild(newFirstNameLabel);
    firstNameDiv.appendChild(newFirstName);
    lastNameDiv.appendChild(newLastNameLabel);
    lastNameDiv.appendChild(newLastName);

    newDiv.appendChild(firstNameDiv)
    newDiv.appendChild(lastNameDiv);
    newNamesContainer.appendChild(newDiv);
}

async function getFullName(fullName: string = "") : Promise<string> {
    const response = await(fullName ? fetch(`/echo/${fullName}`) : fetch("/echo"))
    const name = await response.json();
    return name;
}