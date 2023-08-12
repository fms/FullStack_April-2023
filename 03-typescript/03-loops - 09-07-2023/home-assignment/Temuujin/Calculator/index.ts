const dugaar: string | null = prompt("Enter value of n!");

if(dugaar){
    var dugaarInt=parseInt(dugaar);
    console.log(dugaarInt);
    let sumDugaar=0;

    for(let tooloh=0; tooloh<=dugaarInt; tooloh++){
        sumDugaar+=tooloh;
    }

    console.log(sumDugaar);
}




