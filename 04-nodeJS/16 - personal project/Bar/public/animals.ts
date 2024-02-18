interface Animal {
  _id: string;
  name: string;
  age: number;
  species: string;
  ownerId: string;
}

const animals = document.querySelector(".animals") as HTMLDivElement;
handleGetAnimal();

async function processAnimalsResponse(response: Response) {
  try {
    if (!response.ok) {
      if (response.statusText === "Validation error") {
        const { errors } = await response.json();
        throw new Error(errors);
      }
      throw new Error(response.statusText);
    }
    const { animals }: { animals: Animal[] } = await response.json();
    console.log(animals);

    renderAnimals(animals);
  } catch (error) {
    console.log(error);
  }
}

function renderAnimals(animalsArray: Animal[]) {
  animals.innerHTML = "";
  animalsArray.forEach((animal) => {
    animalTemplate(animal);
  });
}

async function handleGetAnimal() {
  const response = await fetch("/api/animals/find");

  console.log(response);

  await processAnimalsResponse(response);
}

function animalTemplate(animal: Animal) {
  const animalDiv = document.createElement("div") as HTMLDivElement;
  const updateButton = buttonCreate("edit", "Edit", () => createUpdateFormElement(animalDiv, animal._id));
  const deleteButton = buttonCreate("delete", "Delete", () => handleDeleteAnimal(animal._id));
  const name = document.createElement("p") as HTMLParagraphElement;
  const age = document.createElement("p") as HTMLParagraphElement;
  const species = document.createElement("p") as HTMLParagraphElement;

  name.textContent = animal.name;
  age.textContent = animal.age.toString();
  species.textContent = animal.species;

  animalDiv.appendChild(name);
  animalDiv.appendChild(age);
  animalDiv.appendChild(species);
  animalDiv.appendChild(updateButton);
  animalDiv.appendChild(deleteButton);
  animals.appendChild(animalDiv);
}

async function handleAddAnimal(event: SubmitEvent) {
  event.preventDefault();
  const animalForm = document.querySelector(".animalForm") as HTMLFormElement;
  const nameValue = (document.querySelector(".animalName") as HTMLInputElement).value;
  const ageValue = Number((document.querySelector(".animalAge") as HTMLInputElement).value);
  const speciesValue = (document.querySelector(".animalSpecies") as HTMLInputElement).value;
  animalForm.reset();
  
  const newAnimal = { name: nameValue, age: ageValue, species: speciesValue };

  const response = await fetch("/api/animals/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAnimal),
  });

  processAnimalsResponse(response);
}

async function handleDeleteAnimal(id: String) {
  const body = { id };
  const response = await fetch("/api/animals/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  processAnimalsResponse(response);
}

async function handleUpdateAnimal(id: string, nameValue: string, ageValue: number, speciesValue: string) {
  const updatedAnimal = { id, name: nameValue, age: ageValue, species: speciesValue };

  const response = await fetch("/api/animals/update", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedAnimal),
  });

  processAnimalsResponse(response);
}

async function handleLogoutButton(event: MouseEvent) {
  event.preventDefault();

  if (event.target) {
    const response = await fetch("/api/users/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "index.html";
    console.log(response);

    processAnimalsResponse(response);
  }
}

function createUpdateFormElement(div: HTMLDivElement, id: string) {
  const updateAnimalForm = document.createElement("div") as HTMLDivElement;
  const newNameInput = document.createElement("input") as HTMLInputElement;
  const newAgeInput = document.createElement("input") as HTMLInputElement;
  const newSpeciesInput = document.createElement("input") as HTMLInputElement;
  const updateButton = buttonCreate("update", "Update", () =>
    handleUpdateAnimal(id, newNameInput.value, Number(newAgeInput.value), newSpeciesInput.value)
  );
  const cancelButton = buttonCreate("cancel", "Cancel", (event: MouseEvent) =>
    handleCancelButton(event, updateAnimalForm)
  );

  newNameInput.placeholder = "Name";
  newAgeInput.placeholder = "Age";
  newSpeciesInput.placeholder = "Species";

  updateAnimalForm.appendChild(newNameInput);
  updateAnimalForm.appendChild(newAgeInput);
  updateAnimalForm.appendChild(newSpeciesInput);
  updateAnimalForm.appendChild(cancelButton);
  updateAnimalForm.appendChild(updateButton);
  div.appendChild(updateAnimalForm);
}

function handleCancelButton(event: MouseEvent, newUpdateDiv: HTMLDivElement) {
  let target = event.target;
  if (target) {
    newUpdateDiv.remove();
  }
}

function buttonCreate(className: string, textContent: string, clickHandler: any) {
  const button = document.createElement("button") as HTMLButtonElement;
  button.className = className;
  button.textContent = textContent;
  button.addEventListener("click", clickHandler);
  return button;
}
