let weight: string | null = prompt("What is your weight in kg?") || "0";
let height: string | null = prompt("What is your height in cm?") || "0";

let bmi: any = ((parseInt(weight) / parseFloat(height)**2));

if (bmi) {                           
    let bmiAsNum = parseInt(bmi);    
    console.log(bmiAsNum);
    if (bmiAsNum) {
        if (bmiAsNum > 25) {
            console.log("Overweight");
        } else if (bmiAsNum < 18.5) {        
                console.log("Underweight");
        } else {
            console.log("Normal");
        }
    }
}