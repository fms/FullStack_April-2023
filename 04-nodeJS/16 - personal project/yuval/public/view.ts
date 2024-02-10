const playersElement: HTMLDivElement | null = document.querySelector('#players');
const errorsElement: HTMLDivElement = document.querySelector('#errors')!;
const formDiv: HTMLDivElement = document.querySelector('.form_div')!;
const form: HTMLFormElement = document.querySelector('#player_form')!;
const addButton: HTMLButtonElement = document.querySelector('#add_button')!;

document.addEventListener('DOMContentLoaded', () => {
    renderPlayerButton();
});