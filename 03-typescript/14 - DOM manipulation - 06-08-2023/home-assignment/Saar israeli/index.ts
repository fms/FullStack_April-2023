// ### Easy
// - Create a class (whatever you'd like) to hold some data.
// - Create an array that holds some instances of the class you created above.
// - Dump the array into the HTML page using `innerHTML`.
// - Use an external CSS file to format the page.

// Notes
// - `innerHTML` only accepts a single value. Use array methods to create a single HTML fragment (string) to populate it.
// - The actual HTML elements used for `innerHTML` doesn't matter (use `<p>`, a `<ul>` `<li>` combo or anything else).

// ### Medium
// - Add an image property to the class above pointing a local image file for each instance.
// - Include the image in the HTML output.

// ### Advanced
// - Repeat the medium assignment using `document.createElement()` 
// - Don't use `innerHTML` at all.

// body
const body = document.body

// pushing container element into body
const container = document.createElement(`div`);
container.id = `container`;
body.appendChild(container)


//class person 

class Person {
    firstName :string
    lastName :string
    image :any
constructor(
    firstName :string,
    lastName :string,
    image :any,
){
    this.firstName = firstName,
    this.lastName = lastName
    this.image = image
}

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

// persons array.
let persons = [
    new Person(`saar`,`israeli`,`saar.jpg`),
    new Person(`moshe`,`kedem`,`moshe.jpg`),
    new Person(`natan`,`meron`,`natan.jpg`),
    new Person(`moti`,`vatzia`,`moti.jpg`),
    new Person(`daniel`,`cohen`,`daniel.jpg`),
]


//for loop to make everything inside body -> inside contianer -> inside div.
persons.forEach(person => {
    const personDiv = document.createElement(`div`);
    personDiv.className = `personDiv`;

    const fullNamePara = document.createElement(`p`);
    fullNamePara.textContent = `${person.fullName}`;
    fullNamePara.className = `person-fullName`

    const imageElement = document.createElement(`img`);
    imageElement.src = `images/${person.image}`;
    imageElement.className = `person-image`


    
    container.appendChild(personDiv);
    personDiv.appendChild(imageElement);
    personDiv.appendChild(fullNamePara)
})






