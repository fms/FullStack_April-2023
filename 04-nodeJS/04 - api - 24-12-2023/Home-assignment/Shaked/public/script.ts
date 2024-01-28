const dateButton = document.querySelector('#datebutton') as HTMLButtonElement;

dateButton.addEventListener('click', async () => {
  window.location.href = '/now';
 });

const submitButton = document.querySelector('#submitbutton') as HTMLButtonElement;

submitButton.addEventListener('click', () => {
    getData();
});


async function getData() {
    const formData: { id: string, value: string }[] = [];
  
    const inputArray = ['nameinput', 'lastnameinput', 'emailinput', 'passwordinput'];
  
    for (const id of inputArray) {
        let inputElement = document.getElementById(id) as HTMLInputElement;
        formData.push({ id, value: inputElement.value });
    }

    let isValid = true;

    for (const item of formData) {
        if (item.value === '') {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        const formattedData = formData.map(item => `${item.id}: ${item.value}`).join(', ');
        alert(formattedData);
        try {
        } catch (error) {
            console.error('Async: An error occurred:', error);
        }
    } else {
        alert("Please fill in all fields");
    }
}