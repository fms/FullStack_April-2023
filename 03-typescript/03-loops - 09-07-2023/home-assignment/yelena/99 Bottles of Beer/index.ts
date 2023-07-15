

for(let bottleCount = 99 ; bottleCount > 0 ; bottleCount--)
{
    if(bottleCount == 1){
        console.log('${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`Take one down and pass it around, Take one down and pass it around, theres no more bottles of beer on the wall!')      
    }
    else {
    console.log(`${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`);
    console.log(
      `Take one down and pass it around, now there's ${
        bottleCount - 1
      } more bottles of beer on the wall!`
    );
  }
}
