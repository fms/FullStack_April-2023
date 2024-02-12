handleGetPlayers();

async function processResponse(response: Response) {
    try {
        if (!response.ok) {
            if (response.statusText === "Validation error") {
                const { errors } = await response.json();
                throw new Error(errors.join("\n"));
            }
            throw new Error(response.statusText)
        }
        errorsElement.innerText = "";
        const { players }: { players: Player[] } = await response.json();
        renderPlayers(players, playersElement);
    }
    catch (error) {
        if (error instanceof Error) {
            errorsElement.innerText = error.message;
            console.error("Error: ", error.message);
        }
        else {
            errorsElement.innerText = error as string;
            console.error("Error: ", error);
        }
    }
}

async function handleGetPlayers() {
    const response = await fetch('/api/players/get/players');

    await processResponse(response);
}

async function handleAddPlayer(event: SubmitEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const age = formData.get('age');
    const jerseyNumber = formData.get('jerseyNumber');
    const height = formData.get('height');
    const position = formData.get('position');

    const newPlayer = { name, age, jerseyNumber, height, position };

    const response = await fetch('/api/players/add/player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlayer)
    });

    await processResponse(response);
    form.reset();
    await renderPlayerButton();
}

async function handleDelete(name: string) {
    const body = { name };
    const response = await fetch('/api/players/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    await processResponse(response);
    await renderPlayerButton();
}

async function handleUpdate(propertyToUpdate: string, name: string, newValue: number) {
    let bodyJSON;
    if(propertyToUpdate === "JerseyNumber") {
        bodyJSON = JSON.stringify({ name, jerseyNumber: newValue });
    }
    else if(propertyToUpdate === "Position") {
        bodyJSON = bodyJSON = JSON.stringify({ name, position: newValue });
    }
    
    const response = await fetch(`/api/players/update/${propertyToUpdate}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyJSON
    });

    await processResponse(response);
    getAddForm();
}

async function fetchPlayerCount(): Promise<number> {
    try {
        const response = await fetch('/playerCount');
        if (!response.ok) {
            throw new Error('Failed to fetch player count');
        }
        const data = await response.json();
        console.log(data, data.count);
        return data.count;
    }
    catch (error) {
        console.error('Error fetching player count:', error);
        return -1;
    }
}

async function renderPlayerButton() {
    const playerCount = await fetchPlayerCount();
    console.log(playerCount);

    let message = document.getElementById('message');
    if (!message) {
        message = document.createElement('p');
        message.id = 'message';
        form.appendChild(message);
    }
    if (playerCount >= 15) {
        addButton.style.display = "none";
        message.textContent = 'Maximum limit reached. You cannot add more players.';
        message.style.display = "block";
    }
    else {
        addButton.style.display = "block";
        message.style.display = "none";
    }
}

function renderPlayer(body: HTMLDivElement, player: Player) {
    try {
        const name = createElement("div", "player", player.name);
        const age = createElement("div", "player", player.age.toString());
        const jerseyNumber = createElement("div", "player", player.jerseyNumber.toString());
        const height = createElement("div", "player", player.height.toString());
        let position;
        switch (player.position) {
            case Position.PG:
                position = createElement("div", "player", "PG");
                break;
            case Position.SG:
                position = createElement("div", "player", "SG");
                break;
            case Position.SF:
                position = createElement("div", "player", "SF");
                break;
            case Position.PF:
                position = createElement("div", "player", "PF");
                break;
            case Position.C:
                position = createElement("div", "player", "C");
                break;
        }

        body.appendChild(name);
        body.appendChild(age);
        body.appendChild(jerseyNumber);
        body.appendChild(height);
        body.appendChild(position);
        body.appendChild(createInputElement("button", "player_button", () => callForUpdate("JerseyNumber", player.name), "Change Jersey"));
        body.appendChild(createInputElement("button", "player_button", () => callForUpdate("Position", player.name), "Change Position"));
        body.appendChild(createInputElement("button", "player_button", () => handleDelete(player.name), "Delete"));
    } catch (error) {
        console.error(error);
    }
}

function callForUpdate(propertyToUpdate: string, name: string) {
    console.log("entered callForUpdate, propertyToUpdate: " + propertyToUpdate);

    if (propertyToUpdate === "JerseyNumber") {
        formDiv.innerHTML = `
            <form id="update_form">
                <input id="jerseyNumberInput" type="number" required min="0" max="99" placeholder="Jersey number" />
            </form>
            <button id="update_button">Update</button>`;

        const jerseyNumberInput = document.getElementById('jerseyNumberInput') as HTMLInputElement;
        const updateButton = document.getElementById('update_button') as HTMLButtonElement;

        updateButton.addEventListener('click', () => {
            const newValue = jerseyNumberInput.valueAsNumber;
            handleUpdate(propertyToUpdate, name, newValue);
        });
    }
    else if (propertyToUpdate === "Position") {
        formDiv.innerHTML = `
            <form id="update_form">
                <input id="positionInput" type="number" required placeholder="Position" />
            </form>
            <button id="update_button">Update</button>`;

        const positionInput = document.getElementById('positionInput') as HTMLInputElement;
        const updateButton = document.getElementById('update_button') as HTMLButtonElement;

        updateButton.addEventListener('click', () => {
            const newValue = positionInput.valueAsNumber;
            handleUpdate(propertyToUpdate, name, newValue);
        });
    }
}

function renderPlayers(players: Player[], div: HTMLDivElement | null) {
    try {
        if (!div) {
            throw new Error("no div element");
        }

        div.replaceChildren();
        if (players.length !== 0) {
            div.append(...createHeader());
            players.forEach(player => renderPlayer(div, player));
        }
    } catch (error) {
        console.error(error);
    }
}

function createElement(tagName: string, className: string, content: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    return element;
}

function createInputElement(inputType: string, className: string, handler: ((event: Event) => void) | null, content: string = ""): HTMLInputElement {
    const element = document.createElement("input");
    element.type = inputType;
    element.className = className;
    if (handler) {
        element.addEventListener("click", handler);
    }
    if (content) {
        element.value = content;
    }
    return element;
}

async function getAddForm() {
    if(await fetchPlayerCount() == 15) {
        formDiv.innerHTML = `
            <h1>Welcome to MY BASKETBALL TEAM</h1>
            <form id="player_form" onsubmit="handleAddPlayer(event)">
                <input name="name" type="text" required placeholder="Name" />
                <input name="age" type="number" required min="18" placeholder="Age" />
                <input name="jerseyNumber" type="number" required min="0" max="99" placeholder="Jersey number" />
                <input name="height" type="number" required placeholder="Height in centimeters" />
                <input name="position" type="text" required placeholder="Position" />
            </form>
            <p>Maximum limit reached. You cannot add more players.</p>`;
    } 
    else {
        formDiv.innerHTML = `
            <h1>Welcome to MY BASKETBALL TEAM</h1>
            <form id="player_form" onsubmit="handleAddPlayer(event)">
                <input name="name" type="text" required placeholder="Name" />
                <input name="age" type="number" required min="18" placeholder="Age" />
                <input name="jerseyNumber" type="number" required min="0" max="99" placeholder="Jersey number" />
                <input name="height" type="number" required placeholder="Height in centimeters" />
                <input name="position" type="text" required placeholder="Position" />
                <button id="add_button" type="submit">Add Player</button>
            </form>`;
    }
}

function createHeader(): Node[] {
    return [
        createElement("div", "header", "Name"),
        createElement("div", "header", "Age"),
        createElement("div", "header", "Jersey Number"),
        createElement("div", "header", "Height"),
        createElement("div", "header", "Position"),
        createElement("div", "header", "Change Jersey"),
        createElement("div", "header", "Change Position"),
        createElement("div", "header", "Delete Player"),
    ];
}