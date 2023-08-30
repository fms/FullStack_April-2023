function inputPhone(event: KeyboardEvent) {
    const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
    const message =
        input.value.length < 10 ? "Phone number is too short" :
        input.value.length > 10 ? "Phone number is too long" :
        input.value;
    alert(message);
}

const submitButton = document.getElementById('submitButton');
submitButton?.addEventListener('click', inputPhone);