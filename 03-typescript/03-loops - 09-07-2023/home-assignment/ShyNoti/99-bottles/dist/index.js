for (var counter = 99; counter > 0; counter--) {
    counter == 1 ?
        console.log(" " + counter + " bottles of beer on the wall, " + counter + " bottles of beer.\n    Take one down and pass it around, now there's no more bottles of beer on the wall!") :
        console.log(" " + counter + " bottles of beer on the wall, " + counter + " bottles of beer.\n    Take one down and pass it around, now there's " + (counter - 1) + " more bottles of beer on the wall!");
}
