"use strict";
function changeBrColor(element, color) {
    element.style.backgroundColor = color;
}
function changeFpColor() {
    let fP = document.querySelector(`.parent`);
    if (fP) {
        changeBrColor(fP, `blue`);
    }
}
function usingHierarchy() {
    let gP = document.querySelector(`#grandparent-id`);
    if (gP) {
        changeBrColor(gP, `black`);
        let parents = gP.children;
        if (parents) {
            let parentsAsArray = [...parents];
            parentsAsArray.forEach(parent => {
                changeBrColor(parent, `red`);
            });
            let thirdChildren = parents[0].children;
            if (thirdChildren) {
                let thirdChildrenColor = thirdChildren[2];
                changeBrColor(thirdChildrenColor, `blue`);
            }
        }
    }
}
function changeParentsColor() {
    let parents = document.getElementsByClassName(`parent`);
    let parentAsArray = [...parents];
    parentAsArray && parentAsArray.forEach(parent => {
        changeBrColor(parent, `teal`);
    });
}
function changeGpById() {
    let gP = document.getElementById(`grandparent-id`);
    gP && changeBrColor(gP, `orange`);
}
