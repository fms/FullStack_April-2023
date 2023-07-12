let n = prompt("Input a number please") || "0";
let intn = parseInt(n);
let total = 0;
if (Number.isNaN(intn)) {
    alert(`This is not a number`);
} else {
    for (let i = 0; i <= intn; i++) {
        total += i;
        console.log(`Numbers:\n ${i}`)
    }
    alert(`Total sum of all the numbers- ${total},\nCheck console for more details`);
}
