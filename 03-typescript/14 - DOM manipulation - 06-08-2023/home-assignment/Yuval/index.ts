const body = document.body
const container = document.createElement(`div`);
container.id = `container`;
body.appendChild(container)

class Person {
    firstName: string;
    lastName: string;
    img: any;

    constructor(firstName: string, lastName: string, img: any){
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let shayne = new Person(`Shayne`, `Topp`, `shayne.jpg`);
let court = new Person(`Courtney`, `Miller`, `courtney.jpg`);
let ian = new Person(`Ian`, `Hecox`, `ian.jpg`);
let angela = new Person(`Angela`, `Giarratana`, `angela.jpg`);
let noah = new Person(`Noah`, `Grossman`, `noah.jpg`);
let people = [shayne, court, ian, angela, noah];

people.forEach(x => {
    const div = document.createElement(`div`);
    div.className = `people`;

    const fullName = document.createElement(`p`);
    fullName.textContent = `${x.fullName}`;
    fullName.className = `person-fullName`

    const image = document.createElement(`img`);
    image.src = `images/${x.img}`;
    image.className = `person-image`


    
    container.appendChild(div);
    div.appendChild(image);
    div.appendChild(fullName)
});

