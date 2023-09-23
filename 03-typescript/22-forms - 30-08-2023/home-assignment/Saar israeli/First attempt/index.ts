// Let's create a data entry system.

// ## Easy
// Create a form to accept some details. These details may be whatever you want.

// Beneath the form display a tabulated list of the details. This list is initially empty.

// When the form is submitted, add a line to the list with the details.

// ## Medium
// Add a new column to each line in the list. The title of the column should be `Delete?` and for each line it should include a checkbox.

// Add a button marked `Delete selected`. When pressed, delete all the lines from the list in which the checkbox is selected. If there are no lines to delete, display an alert saying so.

// ## Advanced
// Add a button marked `Edit` on each details line. Clicking the button should allow editing the specific line. 

// Editing should include two buttons for `Update` and for `Cancel`.

// ## Hints and Tips
// - Use a class for holding the details.
// - Don't edit a live copy of your details. Only replace the data after the `Update` button is clicked.


// interface TasksTitle {
//     task :string | number,
//     details :string | number,
//     deadLine :string | number,
// }


class Data {
    constructor(
        public task: string,
        public details: string,
        public deadLine: string,
    ) {}
}

interface FormElements extends HTMLFormControlsCollection {
    task : HTMLInputElement;
    details: HTMLInputElement;
    deadline: HTMLInputElement;
    add: HTMLInputElement;
    update: HTMLInputElement;
    cancel: HTMLInputElement;
}


function submitInfo(event: SubmitEvent) {
    let target = event.target as HTMLFormElement;
    let elements = (event.target as HTMLFormElement).elements;

    let task = (elements.namedItem("f1") as HTMLInputElement).value;
    let details = (elements.namedItem("f2") as HTMLInputElement).value;
    let deadLine = (elements.namedItem("f3") as HTMLInputElement).value;
    let tabulated: any[] = [task, details, deadLine];

    const tRow = document.createElement("tr");
    tRow.classList.add("tRow");

    let tableBody = document.querySelector("#tableBody") as HTMLTableElement;




    tabulated.forEach((element) => {
        if (element === task || element === deadLine) {
            let td = document.createElement("td") as HTMLTableCellElement;
            td.classList.add("td-body");
            td.style.width = "19vw";
            td.textContent = element;
            // let p = document.createElement("p") as HTMLParagraphElement;
            // p.classList.add(`p-content`);
            // p.style.marginLeft = "7.5vw"
            // p.textContent = element;
            tRow.appendChild(td);
            // td.appendChild(p);
        } else {
            let td = document.createElement("td") as HTMLTableCellElement;
            td.classList.add("td-body");
            td.style.width = "48vw"
            td.textContent = element;
            // let p = document.createElement("p") as HTMLParagraphElement;
            // p.classList.add(`p-content`);
            // p.style.maxWidth = "900px";
            // p.style.overflowWrap = "break-word";
            // p.textContent = element;
            tRow.appendChild(td);
            // td.appendChild(p);
        }
    })

    // let checkTd = document.createElement("td") as HTMLTableCellElement;
    let checkbox = document.createElement("input") as HTMLInputElement;
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-delete");
    checkbox.style.marginLeft = "30px"
    // checkTd.style.width = "4vw";
    tRow.appendChild(checkbox);
    // checkTd.appendChild(checkbox);


    // let editTd = document.createElement("td") as HTMLTableCellElement;
    let editButton = document.createElement("input");
    editButton.type = "button";
    editButton.classList.add("edit-button");
    // editTd.style.width = "10vw";
    editButton.value = "Edit";
    tRow.appendChild(editButton);
    // editTd.appendChild(editButton)

    tableBody.appendChild(tRow);

    target.reset();
    return false;
}


function deleteSelected() {
    let checkboxes = document.querySelectorAll(".checkbox-delete") as NodeListOf<HTMLInputElement>;
    let deleted = false;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            deleted = true;
            let parent = checkbox.parentElement;
            parent?.parentElement?.remove();
        }
    })
    if (!deleted) {
        alert("there is no lines selected.");
    }
}