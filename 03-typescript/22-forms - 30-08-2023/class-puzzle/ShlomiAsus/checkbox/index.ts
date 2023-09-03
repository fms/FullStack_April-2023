let checkBoxes = document.querySelectorAll(".checkBox") as NodeListOf<HTMLElement>;
let myDiv = document.querySelector(".myDiv") as HTMLElement;
let submit: string = "";


checkBoxes.forEach(checkBox => {
    checkBox.addEventListener("click", (event: Event) => print(event, checkBox));
});


function print(event: Event, checkBox: HTMLElement) {
    myDiv.innerHTML += " " + checkBox.value;
    submit += " " + checkBox.value;
    console.log(submit);
}

function submitForm() {
    let whatIsOn: string = "";
    checkBoxes.forEach(checkBox => {
        if (checkBox.checked) {
            whatIsOn += checkBox.value + ",";
        }
    });
    alert("the submit values are:" + whatIsOn);
}

