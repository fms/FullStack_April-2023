// for( let Bottles = 99; Bottles>1; Bottles--){
//     console.log(`${Bottles} bottles of beer on the wall,${Bottles} bottles of beer, Take one down and pass it around, now there's ${Bottles-1} more bottles of beer on the wall!`);
// }
// console.log("1 bottle of beer on the wall, 1 bottle of beer, Take one down and pass it around, there's no more bottles of beer on the wall! exit when there are no more bottles")
var an = prompt("giv a number");
for (var x = 1, y = 2; y <= an; y++) {
    x = x + y;
}
console.log(x);
