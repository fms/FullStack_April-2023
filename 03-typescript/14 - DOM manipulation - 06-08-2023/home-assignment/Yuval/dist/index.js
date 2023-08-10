"use strict";
class Movie {
    constructor(name, length, releaseDate, genre, mainCharacter, director, budget, boxOffice) {
        this.name = name;
        this.length = length;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.mainCharacter = mainCharacter;
        this.director = director;
        this.budget = budget;
        this.boxOffice = boxOffice;
    }
    describe() {
        console.log(`"${this.name}" is a ${this.genre} film direted by ${this.director} and starring ${this.mainCharacter} as the main character!
        The movie is ${this.length} long and was released on ${this.releaseDate}.`);
    }
    profit() {
        console.log(`"${this.name}" made $${this.boxOffice} at the box office on a $${this.budget} budget!`);
        let profit = this.boxOffice - this.budget;
        if (profit > 0) {
            console.log(`This was a hit! It has a $${profit} profit!`);
        }
        else if (profit < 0) {
            console.log(`It lost $${-profit}, probably won't have a sequal.`);
        }
        else {
            console.log(`It broke even at the box office! Probably should've save money on props.`);
        }
    }
}
class MarvelMovie extends Movie {
    constructor(name, length, releaseDate, mainCharacter, director, budget, boxOffice, order, phase) {
        super(name, length, releaseDate, "Superhero", mainCharacter, director, budget, boxOffice);
        this.order = order;
        this.phase = phase;
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
let ironMan = new MarvelMovie("Iron Man", "2h 6m", '2008-05-02', "Iron Man", "Jon Favreau", 140000000, 585800000, 1, 1);
ironMan.describe();
ironMan.releaseOrder();
let thorRagnarok = new MarvelMovie("Thor: Ragnarok", "2h 10m", '2017-11-03', "Thor", "Taika Waititi", 180000000, 854000000, 17, 3);
thorRagnarok.describe();
thorRagnarok.releaseOrder();
let spiderManFFH = new MarvelMovie("Spider-Man: Far From Home", "2h 10m", '2019-07-02', "Spider-Man", "Jon Watts", 160000000, 1132000000, 23, 3);
spiderManFFH.describe();
spiderManFFH.releaseOrder();
spiderManFFH.profit();
let gotg3 = new MarvelMovie("Guardians of the Galaxy Vol. 3", "2h 30m", '2023-05-05', "Star-Lord", "James Gunn", 250000000, 843500000, 32, 5);
gotg3.describe();
gotg3.releaseOrder();
class FantasyMovie extends Movie {
    constructor(name, length, releaseDate, mainCharacter, director, budget, boxOffice, author, franchise) {
        super(name, length, releaseDate, "fantasy", mainCharacter, director, budget, boxOffice);
        this.author = author;
        this.franchise = franchise;
    }
    basedOn() {
        console.log(`"${this.name}" is a film based on the book series ${this.franchise} originally written by ${this.author}.`);
    }
}
let tlotr1 = new FantasyMovie("The Lord of the Rings: The Fellowship of the Ring", "2h 58m", '2001-12-20', "Frodo Baggins", "Peter Jackson", 93000000, 898200000, "John R.R. Tolkien", "The Lord of the Rings");
tlotr1.describe();
tlotr1.basedOn();
let cats = new FantasyMovie("Cats", "1h 50m", '2019-12-20', "Bombalurina", "Tom Hooper", 95000000, 75500000, "T.S. Eliot", "Old Possum's Book of Practical Cats");
cats.describe();
cats.profit();
class ForeignFilm extends Movie {
    constructor(name, length, releaseDate, genre, mainCharacter, director, budget, boxOffice, countryOfOrigin, language) {
        super(name, length, releaseDate, genre, mainCharacter, director, budget, boxOffice);
        this.countryOfOrigin = countryOfOrigin;
        this.language = language;
    }
    origin() {
        console.log(`"${this.name}" is a foreign film from ${this.countryOfOrigin} and is in the ${this.language} language.`);
    }
}
let lifeIsBeautiful = new ForeignFilm("Life Is Beautiful", "1h 56m", '1997-12-20', "war", "Guido Orefice", "Roberto Benigni", 20000000, 230100000, "Italy", "Italian");
lifeIsBeautiful.describe();
lifeIsBeautiful.origin();
