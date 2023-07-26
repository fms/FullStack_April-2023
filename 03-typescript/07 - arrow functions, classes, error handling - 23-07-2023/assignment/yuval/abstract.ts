abstract class Movie {
    name: string;
    length: string;
    releaseDate: Date;
    genre: string;
    mainCharacter: string;
    director: string;

    constructor(name: string, length: string, releaseDate: Date, genre: string, mainCharacter: string, director: string) {
        this.name = name;
        this.length = length;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.mainCharacter = mainCharacter;
        this.director = director;
    }

    describe() {
        console.log(`"${this.name}" is a ${this.genre} film direted by ${this.director} and starring ${this.mainCharacter} as the main character!
        The movie is ${this.length} long and was released on ${this.releaseDate}.`)
    }
}

class MarvelMovie extends Movie {
    order: number;
    phase: number;
    
    constructor(name: string, length: string, releaseDate: Date, mainCharacter: string, director: string, order: number, phase: number) {
        super(name, length, releaseDate, "Superhero", mainCharacter, director);
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
                console.log(`"${this.name}" is part of phase ${this.phase} and is the ${this.order}th movie in the MCU!`)         
        }
    }
}

let ironMan = new MarvelMovie("Iron Man", "2h 6m", '2008-05-02', "Iron Man", "Jon Favreau", 1, 1);
ironMan.describe();
ironMan.releaseOrder();

let thorRagnarok = new MarvelMovie("Thor: Ragnarok", "2h 10m", '2017-11-03', "Thor", "Taika Waititi", 17, 3);
thorRagnarok.describe();
thorRagnarok.releaseOrder();

let spiderManFFH = new MarvelMovie("Spider-Man: Far From Home", "2h 10m", '2019-07-02', "Spider-Man", "Jon Watts", 23, 3);
spiderManFFH.describe();
spiderManFFH.releaseOrder();

let gotg3 = new MarvelMovie("Guardians of the Galaxy Vol. 3", "2h 30m", '2023-05-05', "Star-Lord", "James Gunn", 32, 5);
gotg3.describe();
gotg3.releaseOrder();

class FantasyMovie extends Movie {
    author: string;
    franchise: String;

    constructor(name: string, length: string, releaseDate: Date, mainCharacter: string, director: string, author: string, franchise: string){
        super(name, length, releaseDate, "fantasy", mainCharacter, director);
        this.author = author;
        this.franchise = franchise;
    }

    basedOn(){
        console.log(`"${this.name}" is a film based on the book series ${this.franchise} originally written by ${this.author}.`)
    }
}

let tlotr1 = new FantasyMovie("The Lord of the Rings: The Fellowship of the Ring", "2h 58m", '2001-12-20', "Frodo Baggins", "Peter Jackson","John R.R. Tolkien", "The Lord of the Rings");
tlotr1.describe();
tlotr1.basedOn();

class ForeignFilm extends Movie {
    countryOfOrigin: string;
    language: string;

    constructor(name: string, length: string, releaseDate: Date, genre: string, mainCharacter: string, director: string, countryOfOrigin: string, language: string) {
        super(name, length,releaseDate, genre, mainCharacter,director);
        this.countryOfOrigin = countryOfOrigin;
        this.language =language;
    }

    origin() {
        console.log(`"${this.name}" is a foreign film from ${this.countryOfOrigin} and is in the ${this.language} language.`)
    }
}

let lifeIsBeautiful = new ForeignFilm("Life Is Beautiful", "1h 56m", '1997-12-20', "war", "Guido Orefice", "Roberto Benigni", "Italy", "Italian");
lifeIsBeautiful.describe();
lifeIsBeautiful.origin();