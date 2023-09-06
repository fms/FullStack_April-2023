"use strict";
// Let's create a data entry system.
function submitInfo(event) {
    let target = event.target;
    let elements = event.target.elements;
    let task = elements.namedItem("f1").value;
    let details = elements.namedItem("f2").value;
    let deadLine = elements.namedItem("f3").value;
    let tabulated = [task, details, deadLine];
    let newData = {
        task: task,
        details: details,
        deadLine: deadLine,
    };
    const tRow = document.createElement("tr");
    tRow.classList.add("tRow");
    let tableBody = document.querySelector("#tableBody");
    tabulated.forEach((element) => {
        if (element === task || element === deadLine) {
            let td = document.createElement("td");
            td.classList.add("td-body");
            td.style.width = "19vw";
            let p = document.createElement("p");
            p.classList.add("p-content");
            p.style.marginLeft = "7.5vw";
            p.textContent = element;
            tRow.appendChild(td);
            td.appendChild(p);
        }
        else {
            let td = document.createElement("td");
            td.classList.add("td-body");
            td.style.width = "48vw";
            let p = document.createElement("p");
            p.classList.add("p-content");
            p.style.maxWidth = "900px";
            p.style.overflowWrap = "break-word";
            p.textContent = element;
            tRow.appendChild(td);
            td.appendChild(p);
        }
    });
    let checkTd = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-delete");
    checkbox.style.marginLeft = "30px";
    checkTd.style.width = "4vw";
    tRow.appendChild(checkTd);
    checkTd.appendChild(checkbox);
    let editTd = document.createElement("td");
    let editButton = document.createElement("input");
    editButton.type = "button";
    editButton.classList.add("edit-button");
    // editButton.addEventListener("click", editButtonn)
    editTd.style.width = "10vw";
    editButton.value = "Edit";
    tRow.appendChild(editTd);
    editTd.appendChild(editButton);
    tableBody.appendChild(tRow);
    target.reset();
    return false;
}
function deleteSelected() {
    let checkboxes = document.querySelectorAll(".checkbox-delete");
    let deleted = false;
    checkboxes.forEach((checkbox) => {
        var _a;
        if (checkbox.checked) {
            deleted = true;
            let parent = checkbox.parentElement;
            (_a = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    });
    if (!deleted) {
        alert("there is no lines selected.");
    }
}
