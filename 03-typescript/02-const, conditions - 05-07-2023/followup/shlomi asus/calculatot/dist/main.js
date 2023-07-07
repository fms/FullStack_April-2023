function submit() {
    var heightinput = document.getElementById("heightUser");
    var heightInputValue = heightinput.value;
    var weightinput = document.getElementById("weightUser");
    var weightInputValue = weightinput.value;
    var numberHeightInputValue = parseFloat(heightInputValue);
    var numberWeightInputValue = parseFloat(weightInputValue);
    //בדיקה אם זה לא ריק
    if (heightInputValue.trim() === "" || weightInputValue.trim() === "") {
        console.log("Input is empty.");
        return;
    }
    //בדיקה אם זה לא אותיות
    if (isNaN(numberHeightInputValue) || isNaN(numberWeightInputValue)) {
        console.log("Input is not a valid number.");
        return;
    }
    else {
        numberHeightInputValue = numberHeightInputValue / 100;
        var bmi = ((numberWeightInputValue / (numberHeightInputValue * numberHeightInputValue)));
        bmi = Math.floor(bmi);
        var outputElement = document.getElementById("output");
        if (outputElement)
            outputElement.innerText = bmi.toString();
    }
}
