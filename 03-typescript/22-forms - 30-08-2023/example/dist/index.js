"use strict";
function handleClick(event) {
    console.log(`click`);
}
const validValues = ["Hello", "There"];
function printValue(event) {
    const target = event.target;
    if (target) {
        console.log(`key up ${target.value} ${target.valueAsNumber}`);
    }
}
function submitForm(event) {
    console.dir(event);
    const elements = event.target.elements;
    // @ts-ignore
    const text = elements.f1.value;
    // const number = event.target[1].valueAsNumber;
    // @ts-ignore
    const number = elements.numeric.valueAsNumber;
    console.log(`Text: "${text}" number: "${number}"`);
    return false;
}
function handleKeyup(event) {
    const target = event.target;
    if (target.tagName === "INPUT") {
        console.log(`key up ${event.key} ${target.value.length}`);
        const p = document.querySelector("#error-text");
        if (p) {
            p.textContent = target.value;
            // p.textContent = validValues.indexOf(target.value) === -1 ?
            //          "Bad value" : "";
        }
    }
    else {
        console.log(`key up ${event.key}`);
    }
}
