var body = document.body;
var someClass = /** @class */ (function () {
    function someClass(fullName, codeName, image) {
        this.fullName = fullName;
        this.codeName = codeName;
        this.image = image;
        this.fullName = fullName,
            this.codeName = codeName,
            this.image = image;
    }
    return someClass;
}());
var someArray = [
    new someClass("Asaf Ivgi", "Ivgi36", "dist/images/cat-typing.gif"),
    new someClass("abc", "ABC", "dist/images/cat-typing.gif"),
    new someClass("123", "321", "dist/images/cat-typing.gif"),
    new someClass("ABC", "abc", "dist/images/cat-typing.gif"),
    new someClass("321", "123", "dist/images/cat-typing.gif"),
];
someArray.forEach(function (_) {
    var h1Name = document.createElement("h1");
    h1Name.textContent = _.fullName;
    var pCName = document.createElement("p");
    pCName.textContent = _.codeName;
    var img = document.createElement("img");
    img.src = _.image;
    body.appendChild(h1Name);
    body.appendChild(pCName);
    body.appendChild(img);
});
