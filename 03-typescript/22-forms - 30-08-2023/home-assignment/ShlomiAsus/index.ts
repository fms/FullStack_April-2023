
let chechkBoxes = document.querySelectorAll(".treatment") as NodeListOf<HTMLInputElement>;
let sentItems = document.querySelector(".sentItems") as HTMLElement;
let userName = document.querySelector(".name") as HTMLInputElement;


let temp = document.querySelector("form"); //prevet from the form to refresh automaticly
if (temp)
    temp.addEventListener("submit", function (event) {
        event.preventDefault();
        Submit();
    });


function Submit() {
    let sentArray: Array<HTMLInputElement> = [];
    console.log(chechkBoxes.forEach((chechkBox, index) => {
        if (chechkBox.checked) {
            console.log(chechkBoxes[index]);
            sentArray.push(chechkBoxes[index]);
        }
    }));
    print(sentArray);
    temp?.reset;
    
}

function print(sentArray: Array<HTMLInputElement>) {
    sentItems.innerText = " ";
    console.log(`the user ${userName.value} needs the flowings:`);
    console.log("------------------------------------------------------------------");
    sentItems.innerText = "The costumer asked for: "
    sentArray.forEach((vv, index) => {
        console.log(`the value for sentArray index ${index} is:   ${vv.value}`);
        sentItems.innerText += ` ` + vv.value;
    });
    console.log("------------------------------------------------------------------");
}