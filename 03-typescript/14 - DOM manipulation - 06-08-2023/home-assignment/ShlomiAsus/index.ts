class personClasss {
    idNumber: number;
    firstName: string;
    lastName: string;
    fullname: string;

    constructor(idNumber: number, firstName: string, lastName: string) {
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = this.fulName;
    }
    get fulName() {
        return this.firstName + this.lastName
    }
}
const container1 = document.getElementById('container');

let shlomii = new personClasss(1, 'shlomi', 'Asus');
let shani = new personClasss(2, 'shani', 'Asus');
let halely = new personClasss(3, 'halely', 'Asus');


let myArray = [shlomii, shani,halely];

myArray.forEach(arrayName1 => { createDiv(arrayName1.firstName) })

function createDiv(arrayName1: string) {
    let div: HTMLElement = document.createElement('div');
    div.textContent = (`${arrayName1}`);
    div.className = 'div';
    if (container1)
        container1.appendChild(div);
}