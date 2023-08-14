var dugaar = prompt("Enter value of n!");
if (dugaar) {
    var dugaarInt = parseInt(dugaar);
    console.log(dugaarInt);
    var sumDugaar = 0;
    for (var tooloh = 0; tooloh <= dugaarInt; tooloh++) {
        sumDugaar += tooloh;
    }
    console.log(sumDugaar);
}
