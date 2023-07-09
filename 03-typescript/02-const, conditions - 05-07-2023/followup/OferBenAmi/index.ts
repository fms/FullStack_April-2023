const weight = document.getElementById("weight") as HTMLInputElement;
const height = document.getElementById("height") as HTMLInputElement;
const submit = document.getElementById("submit") as HTMLInputElement;

submit?.addEventListener("click", function (event) {
  const weightInt = parseInt(weight?.value || "0");
  const heightInt = parseFloat(height?.value || "0");
  console.log(weightInt);
  console.log(heightInt);
  if (weightInt === 0 || heightInt === 0) {
    alert(`Your values are not correct`);
  } else alert(`Your BMI is ${weightInt / heightInt ** 2}`);
});
