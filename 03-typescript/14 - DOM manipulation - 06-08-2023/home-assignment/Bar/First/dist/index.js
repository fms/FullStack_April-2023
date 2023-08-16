var RandomStuff = /** @class */ (function () {
    function RandomStuff(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    return RandomStuff;
}());
var randomStuff = [
    new RandomStuff("Tree", "dist/tree-736885_1280.jpg"),
    new RandomStuff("Kid", "dist/tree-736885_1280.jpg"),
    new RandomStuff("Dog", "dist/tree-736885_1280.jpg")
];
var rootDiv = document.getElementById("root");
if (rootDiv) {
    // let array = ["random", "words", "to", "check", "something"]
    // array.forEach((something) => {
    //     const listElement = document.createElement("li")
    //     listElement.textContent = something
    //     rootDiv.appendChild(listElement)
    // })
    randomStuff.forEach(function (something) {
        var h1Element = document.createElement("h1");
        h1Element.textContent = something.name;
        var imageElement = document.createElement("img");
        imageElement.src = something.picture;
        rootDiv.appendChild(h1Element);
        rootDiv.appendChild(imageElement);
    });
}
