function birthYear() { // event: KeyboardEvent
    // if(event.key == "Enter") {
        let input = document.querySelector("input")!;
        age = parseInt(input.value);
        // document.body.innerHTML = `<span>You were born in the year ${2023 - age}!</span>`;
        console.log(`You were born in the year ${2023 - age}`);
    // }
}