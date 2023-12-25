console.log("connected");

async function handleGetUsers() {
  try {
    const response = await fetch("/users");

    const { users, ok } = await response.json();
    if (ok) {
      console.log(users);
      const root = document.querySelector<HTMLDivElement>("#root");
      if (root) {
        let html = "";
        users.forEach((user) => {
          html += `<div>${user.name} ${user.lastname}</div>`;
        });

        root.innerHTML = html;
      }
    } else {
      throw new Error("No data on FUNCTION handleGetUsers in FILE app.ts");
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleSubmit(event) {
  try {
    event.preventDefault();
    const id = event.target.userid.value;
    if (!id) throw new Error("no id from client");
    const response = await fetch(`/users/${id}`);
    const { userDB, ok } = await response.json();
    if (!ok) {
      throw new Error("something went wrong!");
    }
    console.log(userDB);
  } catch (error) {
    console.error(error);
  }
}
