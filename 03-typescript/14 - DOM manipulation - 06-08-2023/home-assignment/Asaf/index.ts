const body = document.body;
class someClass {
    constructor(public fullName: string, public codeName: string, public image: string) {
        this.fullName = fullName,
        this.codeName = codeName,
        this.image = image
    }
}

let someArray: someClass[] = [
    new someClass("Asaf Ivgi", "Ivgi36", "dist/images/cat-typing.gif"),
    new someClass("abc", "ABC", "dist/images/cat-typing.gif"),
    new someClass("123", "321", "dist/images/cat-typing.gif"),
    new someClass("ABC", "abc", "dist/images/cat-typing.gif"),
    new someClass("321", "123", "dist/images/cat-typing.gif"),
]

someArray.forEach((_) => {
    const h1Name = document.createElement("h1");
    h1Name.textContent = _.fullName;
    const pCName = document.createElement("p");
    pCName.textContent = _.codeName;
    const img = document.createElement("img");
    img.src = _.image;

    body.appendChild(h1Name);
    body.appendChild(pCName);
    body.appendChild(img);
})
