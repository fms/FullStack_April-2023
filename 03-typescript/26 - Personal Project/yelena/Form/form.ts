console.log("shalom");

interface FormObject {
  name: string;
  email: string;
  age: number| string;
  classes: string;
  phone: string;
}

const form = document.querySelector<HTMLFormElement>("#form");
if (form) {
  const nameField = document.getElementById("name") as HTMLInputElement;
  const emailField = document.getElementById("email") as HTMLInputElement;
  const ageField = document.getElementById("age") as HTMLInputElement;
  const classesField = document.getElementById("classes") as HTMLInputElement;
  const phoneField = document.getElementById("phone") as HTMLInputElement;


  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    const name = nameField ? nameField.value : "";
    const email = emailField ? emailField.value : "";
    const age = ageField ? +ageField.value : "";
    const classes = classesField ? classesField.value : "";
    const phone = phoneField ? phoneField.value : "";

    const fromData: FormObject = {
        name, 
        email,
        age,
        classes,
        phone,
    }

    debugger;
    
    /**
     * Create an Object with all the data
     * the properties in the object should be like the interface above
     * the object will be of type FormObject
     */
    // const formData: FormObject = {}

    /**
     * Adding the object to localStorage
     * I gave you an example in WhatsApp
     */
  });

local storage set item
}
