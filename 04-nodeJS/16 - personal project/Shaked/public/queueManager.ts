class Queue {
    constructor(
        public name: string,
        public phonenumber: number,
        public city: City,
        public date: Date,
        public time: Time,
    ) { }
}

enum City {
    Gedera = "Gedera",
    Ashdod = "Ashdod",
    Yavne = "Yavne"
}

class Time {
    constructor(public hours: number, public minutes: number) {
    }
}

const queues: Queue[] = [];
const userRequest = document.querySelector('.request') as HTMLDivElement;
const queueTable = document.querySelector('#queues') as HTMLTableElement;
const cityInput = document.querySelector('#cities') as HTMLSelectElement;

const inputValues: Record<string, HTMLInputElement> = {
    nameInput: document.querySelector('#nameinput')!,
    phoneInput: document.querySelector('#phoneinput')!,
    dateInput: document.querySelector('#dateinput')!,
    newNameInput: document.querySelector('#newName')!,
    timeInput: document.querySelector('#timeinput')!,
};

const buttons: Record<string, HTMLButtonElement | null> = {
    yes: document.querySelector('#yes'),
    no: document.querySelector('#no'),
    send: document.querySelector('#submitButton'),
    deleteOne: document.querySelector('#deleteName'),
    deleteAll: document.querySelector('#deleteAll'),
    updateQueue: document.querySelector('#updateQueue'),
    updateName: document.querySelector('#updateName'),
    logOutButton: document.querySelector('#logoutButton'),
};
let hours: number;
let minutes: number;


buttons.yes?.addEventListener('click', () => { showElements(userRequest); })
buttons.no?.addEventListener('click', () => { hideElements(userRequest); })
buttons.send?.addEventListener('click', () => { createQueueTable(); })
buttons.deleteOne?.addEventListener('click', () => { showElements(inputValues.newNameInput), deleteByName(inputValues.newNameInput.value) })
buttons.deleteAll?.addEventListener('click', deleteAll)
buttons.updateQueue?.addEventListener('click', () => { showElements(userRequest), replaceQueue() })
buttons.updateName?.addEventListener('click', () => { showElements(userRequest, inputValues.newNameInput), updateName(inputValues.newNameInput.value, inputValues.nameInput.value), inputValues.newNameInput.setAttribute('placeholder', 'Old Name') })
buttons.logOutButton?.addEventListener('click', logOut)


function deleteAll() {
    const result = confirm('Are you sure you want to delete all of them?');
    if (result) {
        deleteAllQueues();
        alert('Succesed!');
    } else {
        alert('Canceled');
    }
}

async function replaceQueue() {
    const selectedTime = inputValues.timeInput.value;
    [hours, minutes] = selectedTime.split(":").map(Number);

    if (!isNaN(hours) && !isNaN(minutes)) {
        hours = hours;
        minutes = minutes;
        replaceQueueByName(
            inputValues.nameInput.value,
            parseInt(inputValues.phoneInput.value),
            getCityFromSelectValue(cityInput.value),
            new Date(inputValues.dateInput.value),
            new Time(hours, minutes)
        );
    } else {
        console.error("Invalid time format");
    }
}

function getCityFromSelectValue(value: string): City {
    switch (value) {
        case "Gedera":
            return City.Gedera;
        case "Ashdod":
            return City.Ashdod;
        case "Yavne":
            return City.Yavne;
        default:
            throw new Error(`Unknown city: ${value}`);
    }
}
function showData(element: HTMLDivElement, dataOfQueue: any[], hours: number, minutes: number) {
    if (dataOfQueue !== undefined) {
        if (Array.isArray(dataOfQueue)) {
            element.innerHTML += `
                <tbody>
                    ${dataOfQueue.map((user: any) => `
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.phonenumber}</td>
                            <td>${user.city}</td>
                            <td>${new Date(user.date).toISOString().split('T')[0]}</td>
                            <td>${user.time ? user.time.hours + ':' + user.time.minutes : ''}</td>
                        </tr>
                    `).join('')}
                </tbody>`;
        } else {
            console.error('Data of queue is not an array:', dataOfQueue);
        }
    } else {
        console.error('Data of queue is undefined');
    }
}




async function replaceQueueByName(oldname: string, phonenumber: number, city: City, date: Date, time: Time) {
    const newCustomer: Queue = {
        name: inputValues.nameInput.value,
        phonenumber: parseInt(inputValues.phoneInput.value),
        city: getCityFromSelectValue(cityInput.value),
        date: new Date(inputValues.dateInput.value),
        time: new Time(hours, minutes)
    };

    const response = await fetch(`/api/queues/replace/${oldname}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
    });

    if (!response.ok) {
        throw new Error(`Failed to replace customer name.`);
    }

    const data = await response.json();
    if (!data || !data.userqueues) {
        console.error('Missing queues in the response:', data);
    }

    showData(queueTable, data.userqueues, hours, minutes);
}

async function createQueueTable() {
    const timeSelected = inputValues.timeInput.value;
    const [hours, minutes] = timeSelected.split(':').map(Number);

    const newUser: Queue = {
        name: inputValues.nameInput.value,
        phonenumber: parseInt(inputValues.phoneInput.value),
        city: getCityFromSelectValue(cityInput.value),
        date: new Date(inputValues.dateInput.value),
        time: new Time(hours, minutes)
    };

    try {
        const response = await fetch(`/api/queues/add`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(`Failed to add queue. Status: ${response.status}`);
        }

        const data = await response.json();
        if (!data || !data.userqueues) {
            console.error('Missing new queue data in the response:', data);
            return;
        }

        queues.push(newUser);
        showData(queueTable, data.userqueues, hours, minutes);
        console.log(hours, minutes);

    } catch (error: any) {
        console.error('Error adding queue:', error.message);
    }
}


function showElements(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'block';
        }
    });
}

function hideElements(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'none';
        }
    });
}

async function getQueues() {
    const response = await fetch('/api/queues/get', {
        method: "GET",
        headers: { "content-type": "application/json" }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch queues. Status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.userQueues)
        console.error('Missing products in the response:', data);
    showData(queueTable, data.userQueues, hours, minutes);
}

getQueues();

async function deleteByName(customerName: string) {
    try {
        const response = await fetch(`/api/queues/delete/${customerName}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: customerName }),
        });

        if (!response.ok) {
            throw new Error(`Failed to delete customer. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response from server:", data);

        if (!data || !data.userqueues) {
            console.error('Missing queues in the response:', data);
            return;
        }

        showData(queueTable, data.userqueues, hours, minutes);
    } catch (error) {
        console.error("Error deleting customer:", error);
        alert("Error deleting customer. Please try again later.");
    }
}

async function deleteAllQueues() {
    try {
        const response = await fetch(`/api/queues/deleteall`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to delete. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response from server:", data);
        alert(data.message);
        if (!data || !data.userqueues) {
            console.error('Missing queues in the response:', data);
            return;
        }

        showData(queueTable, data.userqueues, hours, minutes);
    } catch (error) {
        console.error("Error deleting all queues:", error);
        alert("Error deleting all queues. Please try again later.");
    }
}


async function logOut() {
    const response = await fetch('/api/user/logout', {
        method: "POST",
        headers: { "content-type": "application/json" }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch logout. Status: ${response.status}`);
    }
    
    alert('Loggedout succesfuly!')
    window.location.href = 'http://localhost:3000/';
}

function findByName(customerName: string) {
    const index = queues.findIndex(customer => customer.name === customerName);
    if (index !== -1) {
        return queues[index];
    } else {
        return undefined;
    }
}

async function updateName(name: string, newName: string) {
    const response = await fetch(`/api/queues/update/${name}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
    });

    if (!response.ok) {
        throw new Error(`Failed to change name. Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.userqueues) {
        console.error('Missing queues in the response:', data);
    }
    showData(queueTable, data.userqueues, hours, minutes);
}
