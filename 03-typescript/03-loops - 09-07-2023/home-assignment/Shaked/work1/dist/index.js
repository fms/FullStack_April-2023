for (var i = 99; 0 < i; i--) {
    if (i == 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer  Take one down \n and pass it around theres no more bottles of beer on the wall!");
    }
    else {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\n    Take one down and pass it around, now there's " + (i - 1) + " more bottles of beer on the wall!");
    }
}
