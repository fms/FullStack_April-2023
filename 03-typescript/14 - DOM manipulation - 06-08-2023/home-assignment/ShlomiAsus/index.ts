class personClasss {
    idNumber: number;
    firstName : string;
    lastName : string;
    fullname: string;
    
    constructor (idNumber: number ,firstName:string,lastName:string,fullname?:string){
        this.idNumber =idNumber ;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = this.fulName;
    }
    get fulName(){
        return this.firstName + this.lastName
    }
}

let shlomii = new personClasss (1,'shlomi','Asus');
let shani = new personClasss (2,'shani','Asus');
let halely = new personClasss (3,'halely','Asus');
const htmlBody = document.body;

let myArray = [shlomii,shani];

myArray.forEach(htmlBody.appendChild(div));