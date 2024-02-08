enum Position {
    PG = 1,
    SG,
    SF,
    PF,
    C
}

interface Person {
    firstName: string,
    lastName: string,
    age: number
}

interface Player {
    personId: string,
    jerseyNumber: number,
    height: number,
    position: Position
}


// Initial load of data
const playersElement: HTMLDivElement | null = document.querySelector('#players');
const errorsElement: HTMLDivElement = document.querySelector('#errors')!;
handleGetPlayers();

// Common response handling (and get players) from server
async function processResponse(response: Response) {
    try {
        if (!response.ok) {
            if (response.statusText === "Validation error") {
                // There's no real method for checking for a failed validation - we rely on the status message.
                // Use the response body (JSON) to get the actual list of errors.
                const { errors } = await response.json();
                throw new Error(errors.join("\n"));
            }

            throw new Error(response.statusText)
        }

        errorsElement.innerText = "";
        const { players }: { players: Player[] } = await response.json();
        // renderPlayers(players, playersElement);
    } catch (error) {
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

async function handleAddPerson(event: SubmitEvent) {
    event.preventDefault();

    // Get form fields
    const formData = new FormData(event.target as HTMLFormElement);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const age = formData.get('age');

    // New player to add
    const newPerson = { firstName, lastName, age };

    const response = await fetch('/api/players/add/person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson)
    });

    await processResponse(response);
}

async function handleAddPlayer(event: SubmitEvent) {
    event.preventDefault();

    // Get form fields
    const formData = new FormData(event.target as HTMLFormElement);
    const jerseyNumber = formData.get('jersey_number');
    const height = formData.get('height');
    const position = formData.get('position');

    // New player to add
    const newPlayer = { jerseyNumber, height, position };

    const response = await fetch('/api/players/add/player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlayer)
    });

    await processResponse(response);
}

// async function handleDelete(id: string) {
//     const body = { id };
//     const response = await fetch('/api/players/delete', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     });

//     await processResponse(response);
// }

// async function handleUpdateStatus(status: playerStatus, id: string) {
//     const body = { id, status };
//     const response = await fetch('/api/players/update', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     });

//     await processResponse(response);
// }

// function renderPlayers(players: Player[], body: HTMLDivElement, player: Player, person: Person) {
//     try {
//         const name = createElement("div", "player", `${person.firstName} ${person.lastName}, ${person.age}`);
//         const jerseyNumber = createElement("div", "player", player.jerseyNumber.toString());
//         const height = createElement("div", "player", player.height.toString());
//         const position = createElement("div", "player", player.position.toString());
//         body.replaceChildren();
//         if (players.length !== 0) {
//             body.append(...createHeader());
//             players.forEach(() => {
//                 body.appendChild(name);
//                 body.appendChild(jerseyNumber);
//                 body.appendChild(height);
//                 body.appendChild(position);
//             });
//         }



//         // body.appendChild(createInputElement("button", "player", () => handleDelete(player.id), "Delete"));
//     } catch (error) {
//         console.error(error);
//     }
// }

// function renderPlayers(players: Player[], div: HTMLDivElement | null) {
//     try {
//         if (!div) {
//             throw new Error("no div element");
//         }

//         div.replaceChildren();
//         if (players.length !== 0) {
//             div.append(...createHeader());
//             players.forEach(player => renderPlayer(div, player));
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

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

function createHeader(): Node[] {
    return [
        createElement("div", "header", "Title"),
        createElement("div", "header", "Description"),
        createElement("div", "header", "Done?"),
        createElement("div", "header", "")
    ];
}