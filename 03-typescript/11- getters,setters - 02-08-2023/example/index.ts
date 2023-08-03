class Person {

    constructor(public firstName: string,
                public lastName: string) {
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// This is the same as above. The above version is much shorter.
class SamePerson {
    public firstName: string;
    public lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName: string) {
        let splitName = newName.split(" ");
        this.firstName = splitName[0];
        this.lastName = splitName[1];
    }
}

let person = new Person("Shmuel", "Fishman");
console.log(person);
console.log(person.fullName());

let samePerson = new SamePerson("Shmuel", "Fishman");
console.log(samePerson);
console.log(samePerson.fullName);

samePerson.fullName = "Avi Vertsman";
console.log(samePerson);



