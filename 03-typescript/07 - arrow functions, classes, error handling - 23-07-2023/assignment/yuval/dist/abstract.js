"use strict";
class Movie {
    constructor(name, length, language, releaseDate, genre) {
        this.name = name;
        this.length = length;
        this.language = language;
        this.releaseDate = releaseDate;
        this.genre = genre;
    }
}
class MarvelMovie extends Movie {
    constructor(name, length, releaseDate, order, phase, hero) {
        super(name, length, "English", releaseDate, "Superhero");
        this.order = order;
        this.phase = phase;
        this.hero = hero;
    }
    describe() {
        console.log(`"${this.name}" is a ${this.genre} film starring ${this.hero} as the main character!
        The movie is ${this.length} long and was released on ${this.releaseDate}.`);
    }
    releaseOrder() {
        switch (this.order) {
            case 1:
            case 21:
            case 31:
                console.log(`"${this.name}" is part of phase ${this.phase} and is the ${this.order}st movie in the MCU!`);
                break;
            case 2:
            case 22:
            case 32:
                console.log(`"${this.name}" is part of phase ${this.phase} and is the ${this.order}nd movie in the MCU!`);
                break;
            case 3:
            case 23:
                console.log(`"${this.name}" is part of phase ${this.phase} and is the ${this.order}rd movie in the MCU!`);
                break;
            default:
                console.log(`"${this.name}" is part of phase ${this.phase} and is the ${this.order}th movie in the MCU!`);
        }
    }
}
let ironMan = new MarvelMovie("Iron Man", "2h 6m", '2008-05-02', 1, 1, "Iron Man");
ironMan.describe();
ironMan.releaseOrder();
let thorRagnarok = new MarvelMovie("Thor: Ragnarok", "2h 10m", '2017-11-03', 17, 3, "Thor");
thorRagnarok.describe();
thorRagnarok.releaseOrder();
let spiderManFFH = new MarvelMovie("Spider-Man: Far From Home", "2h 10m", '2019-07-02', 23, 3, "Spider-Man");
spiderManFFH.describe();
spiderManFFH.releaseOrder();
let gotg3 = new MarvelMovie("Guardians of the Galaxy Vol. 3", "2h 30m", '2023-05-05', 32, 5, "Star-Lord");
gotg3.describe();
gotg3.releaseOrder();
