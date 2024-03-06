interface User {
    username: string;
    password: string;
}

const users: User[] = [];

const section: Record<string, HTMLDivElement | null> = {
    login: document.querySelector('#login'),
    register: document.querySelector('#register'),
};

const button: Record<string, HTMLButtonElement | null> = {
    login: document.querySelector('#loginButton'),
    register: document.querySelector('#registerButton'),
};

const inputVal: Record<string, HTMLInputElement> = {
    username: document.querySelector('#username')!,
    password: document.querySelector('#password')!,
};

button.login?.addEventListener('click', LoggedUser)

button.register?.addEventListener('click', newUser)


function show(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'block';
        }
    });
}

function hide(...elements: (HTMLButtonElement | null | HTMLDivElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
        if (element !== null) {
            element.style.display = 'none';
        }
    });
}

async function LoggedUser() {
    if (!inputVal.username || !inputVal.password) {
        console.error('Username or password input elements not found!');
        return;
    }

    const username = inputVal.username.value;
    const password = inputVal.password.value;

    const user = { username, password };

    try {
        const response = await fetch(`/api/user/login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Failed to login. Status: ${response.status}`);
        }

        alert(`Welcome! ${username}`);
        window.location.href = 'http://localhost:3000/loginPage.html';
    } catch (error: any) {
        console.error('Error during login:', error.message);
    }
}

async function newUser() {
    if (!inputVal.username || !inputVal.password) {
        console.error('New username or password input elements not found!');
        return;
    }
    const username = inputVal.username.value;
    const password = inputVal.password.value;
    const foundUser = findUser(username);
    const newUser: User = {
        username: username,
        password: password,
    };
    try {
        const response = await fetch(`/api/user/register`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(`Failed to register user. Status: ${response.status}`);
        }
        if (foundUser) {
            alert('Username is already exist, please choose another username!');
        } else {
            users.push(newUser);
            alert('Successfully registered!');
        }
    } catch (error: any) {
        console.error('Error registering user:', error.message);
    }
}


function findUser(username: string) {
    return users.find(user => user.username === username) || null;
}