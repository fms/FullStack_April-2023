let hight:string | number | null = prompt("Whats your hight in Meter(Example: 1.82) ? ")
let weight:string | number | null = prompt("whats your weight in kg? ")

if (weight && hight){

    hight = parseFloat(hight)
    weight = parseInt(weight)

    if ( !Number.isNaN(hight) && !Number.isNaN(weight) ){
    
        let bmi:number | string = weight/Math.pow(hight, 2)
    
        bmi = bmi.toFixed(2)
    
        console.log("Your BMI is: "+bmi)
        document.body.innerHTML = JSON.stringify("Your BMI is: "+bmi);

    }else{
        console.log("data inValid")
    }


}else{
    console.log("No Data")
}