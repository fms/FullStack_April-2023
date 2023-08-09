class RandomStuff {
    name: string
    picture: string
    constructor(name: string, picture: string) {
        this.name = name
        this.picture = picture
    }
}

const randomStuff: RandomStuff[] = [
    new RandomStuff("Tree", "dist/tree-736885_1280.jpg"),
    new RandomStuff("Kid", "dist/tree-736885_1280.jpg"),
    new RandomStuff("Dog", "dist/tree-736885_1280.jpg")
];

const rootDiv = document.getElementById("root");

if (rootDiv) {
    // let array = ["random", "words", "to", "check", "something"]
    // array.forEach((something) => {
    //     const listElement = document.createElement("li")
    //     listElement.textContent = something
    //     rootDiv.appendChild(listElement)
    // })

    randomStuff.forEach((something) => {

        const h1Element = document.createElement("h1");
        h1Element.textContent = something.name;

        const imageElement = document.createElement("img");
        imageElement.src = something.picture;

        rootDiv.appendChild(h1Element);
        rootDiv.appendChild(imageElement);
    });
}


