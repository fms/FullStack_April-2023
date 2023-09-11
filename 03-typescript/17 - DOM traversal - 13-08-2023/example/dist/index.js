"use strict";
function resetColors() {
    const elements = document.querySelectorAll("*");
    elements.forEach(element => element.style.backgroundColor = '');
}
function grandparentUsingId(color = "grey") {
    let grandparent = document.getElementById("grandparent-id");
    if (grandparent) {
        changeColor(grandparent, color);
    }
}
function grandparentUsingQuerySelector(color = "grey") {
    let grandparent = document.querySelector("#grandparent-id"); // This is a regular CSS selector.
    if (grandparent) {
        changeColor(grandparent, color);
    }
}
function parentsUsingClassNames(color = "grey") {
    let parents = document.getElementsByClassName("parent");
    if (parents) {
        // getElementsByClassName() returns HTMLCollectionOf<Element>
        // This is a collection that does not include the forEach() method
        // Convert to an Array using Array.from(parents) or [...parents]
        let parentAsArray = [...parents];
        // This also works: let parentAsArray = Array.from(parents);
        parentAsArray.forEach(parent => changeColor(parent, color));
    }
}
function parentsUsingQuerySelectorAll(color = "grey") {
    let parents = document.querySelectorAll(".parent");
    if (parents) {
        // querySelectorAll() returns NodeListOf<Element>
        // This is a collection that does include the forEach() method
        parents.forEach(parent => changeColor(parent, color));
    }
}
function firstParentUsingQuerySelector(color = "grey") {
    let parent = document.querySelector(".parent"); // The first match only
    if (parent) {
        changeColor(parent, color);
    }
}
function usingHierarchy() {
    let grandparent = document.querySelector("#grandparent-id");
    if (grandparent) {
        changeColor(grandparent, "grey");
        let parents = grandparent.children; // HTMLCollectionOf<Element>
        if (parents) {
            let parentAsArray = Array.from(parents);
            parentAsArray.forEach(parent => changeColor(parent, "blue"));
            let children = parents[1].children;
            if (children) {
                let childrenAsArray = [...children];
                childrenAsArray.forEach(child => changeColor(child, "teal"));
            }
        }
    }
}
function usingReverseHierarchy() {
    let child = document.querySelector("#second-child");
    if (child) {
        changeColor(child, "teal");
        let parent = child.parentElement; // Don't use child.parentNode - it might return non-visual nodes
        if (parent) {
            changeColor(parent, "purple");
            let grandparent = parent.parentElement;
            if (grandparent) {
                changeColor(grandparent, "pink");
            }
        }
    }
}
function usingClosest() {
    let child = document.querySelector("#first-child");
    if (child) {
        changeColor(child, "teal");
        let grandparent = child.closest(".grandparent"); // Search up for closest match of the selector
        if (grandparent) {
            changeColor(grandparent, "pink");
        }
    }
}
function usingSiblings() {
    let child = document.querySelector("#second-child");
    if (child) {
        changeColor(child, "grey");
        let previous = child.previousElementSibling; // Don't use child.previousSibling
        let next = child.nextElementSibling; // Don't use child.nextSibling
        previous && changeColor(previous, "darkblue");
        next && changeColor(next, "darkred");
    }
}
// This should use HTMLElement, but the getElement*() functions sometimes return regular Element
function changeColor(element /*: HTMLElement */, color = "gray") {
    element.style.backgroundColor = color;
}
