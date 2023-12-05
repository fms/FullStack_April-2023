function handleClick(event: MouseEvent) {
    console.log(event)
    console.log(`click`);
}

const validValues = [ "Hello", "There"];

function printValue(event: KeyboardEvent) {
    const target: HTMLInputElement | null = event.target;
    console.log(event)
    if (target) {
        console.log(`key up ${target.value} ${target.valueAsNumber}`);
    }
}

function submitForm(event: SubmitEvent) {
    console.dir(event);
    const elements = (event.target as HTMLFormElement)!.elements;
    // @ts-ignore
    const text = elements.f1.value;
    // const number = event.target[1].valueAsNumber;
    // @ts-ignore
    const number = elements.numeric.valueAsNumber;
    console.log(`Text: "${text}" number: "${number}"`);
    
    return false;
}

function handleKeyup(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT")
    {
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

