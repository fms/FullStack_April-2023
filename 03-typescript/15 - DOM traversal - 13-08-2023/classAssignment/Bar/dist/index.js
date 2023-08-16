var parents = document.querySelectorAll(".parent");
parents.forEach(function (element) {
    element.style.backgroundColor = "green";
});
var secondParent = parents[1].style.backgroundColor = "yellow";
var grandparents = document.querySelectorAll(".grandparent");
var firstgrandparent = grandparents[0].style.backgroundColor = "black";
