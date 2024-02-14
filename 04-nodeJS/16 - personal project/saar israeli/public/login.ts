const logInForm = document.querySelector('#login') as HTMLFormElement;
const registerForm = document.querySelector('#register') as HTMLFormElement;
const closeErrorButton = document.querySelector('.error__main--button') as HTMLButtonElement;
const errorDiv = document.querySelector('.error') as HTMLDialogElement;
const errorText = document.querySelector('.error__main--p') as HTMLParagraphElement;
const errorTitle = document.querySelector('.error__main--h2') as HTMLTitleElement;

closeErrorButton.addEventListener("click", () => {
    errorDiv.classList.remove("open");
})

class Note {
    constructor(public title: string, public description: string, public id: string , public noteOwner?: string ) {
    }
}

class User {
    constructor(
        public fullName: string,
        public email: string,
        public password: string,
    ) {

    }
}

interface FormElements extends HTMLFormControlsCollection {
    emailLogin: HTMLInputElement;
    passwordLogin: HTMLInputElement;
    emailRegister: HTMLInputElement;
    passwordRegister: HTMLInputElement;
    fullNameRegister: HTMLInputElement;
}


async function newJoinForm(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get('emailLogin');
    const password = formData.get('passwordLogin');
    if (email && password) {
        const user = { email, password }

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( user ),
            });
            if (!response.ok) {

                const errorResponse = await response.json();
                errorTitle.textContent = "Error"
                errorText.textContent = errorResponse.error;
                errorDiv.classList.add("open")
            } else {

                window.location.href = 'notelist.html';
            }
        } catch (error) {
            console.error('Error:', error instanceof Error ? error.message : error)
        }
    }
}

async function newRegisterForm(event: SubmitEvent): Promise<any> {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get('emailRegister')?.toString();
    const fullName = formData.get('fullNameRegister')?.toString();
    const password = formData.get('passwordRegister')?.toString();

    if (email && fullName && password) {
        const newUser = { fullName, email, password }

        try {
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {

                const errorResponse = await response.json();
                errorText.textContent = errorResponse.error;
                errorDiv.classList.add("open");
            } else {

                const responseData = await response.json();
                console.log(responseData);
            }
        } catch (error) {
            console.error('Error:', error instanceof Error ? error.message : error);
        }
    }
}
