let checkBoxes = document.querySelectorAll(".checkBox") as NodeListOf<HTMLElement>;
let myDiv = document.querySelector(".myDiv") as HTMLElement;
let submit: string = "";
 
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener("click", () => print(checkBox));
});

function print( checkBox: HTMLElement) {
// @ts-ignore
    myDiv.innerHTML += " " + checkBox.value;
// @ts-ignore
    submit += " " + checkBox.value;
    console.log(submit);
}

function submitForm() {
    let whatIsOn: string = "";
    checkBoxes.forEach(checkBox => {
 // @ts-ignore
        if (checkBox.checked) {
 // @ts-ignore
            whatIsOn += checkBox.value + ",";
        }
    });
    alert("the submit values are:" + whatIsOn);
}

