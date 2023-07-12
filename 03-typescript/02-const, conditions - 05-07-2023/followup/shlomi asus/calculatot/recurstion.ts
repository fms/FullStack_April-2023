export function recurtion (){
    
    let numberInput = document.getElementById("numerUser") as HTMLInputElement;
    const numberInputValue = numberInput.value;
    var   numberHeightInputValue = parseFloat(numberInputValue);
    let result;
    result = numberHeightInputValue / 2;
    alert("result:" + result);

}
