interface User {
  username: string;
  password: string;
}

async function handleRegisterSubmit(event: MouseEvent) {
  event.preventDefault();

  const username = (document.querySelector(".registerUsername") as HTMLInputElement).value;
  const password = (document.querySelector(".registerPassword") as HTMLInputElement).value;

  if (event.target) {
    const newUser = { username: username, password: password };
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const responseData = await response.json();

    alert(responseData.message);

    processUsersResponse(response);
  }
}

async function handleLoginSubmit(event: MouseEvent) {
  event.preventDefault();

  const username = (document.querySelector(".username") as HTMLInputElement).value;
  const password = (document.querySelector(".password") as HTMLInputElement).value;

  const credentials = { username, password };

  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const loginResponse = await response.json();

  if (response.ok) {
    window.location.href = "animalForm.html";
    await handleGetAnimal();
  } else {
    alert(loginResponse.error);

    processUsersResponse(response);
  }
}

async function processUsersResponse(response: Response) {
  try {
    if (!response.ok) {
      if (response.statusText === "Validation error") {
        const { errors } = await response.json();
        throw new Error(errors);
      }
      throw new Error(response.statusText);
    }
    const { users: users }: { users: User[] } = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
