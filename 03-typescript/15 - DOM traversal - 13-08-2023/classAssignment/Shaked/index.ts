let body = document.body;
let grandparent = body.querySelector('.grandparent') as HTMLElement;
let parent1 = body.querySelectorAll('.parent');
let parent2 = body.querySelector('.parent + .parent') as HTMLElement;
let firstchild = body.querySelector('#first-child+ .child');
let child = body.querySelectorAll('.child');
let secondchild = body.querySelector('#second-child2') as HTMLElement;

if (grandparent && firstchild && parent1 && parent2 && child) {
    changeColor(grandparent, 'pink');
    grandparent.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoHXWaNoXKuhTQ8j3eV-NxoCOxrpOfXEYwpg3gF-vMw&s")';
    changeFontColor(grandparent, 'darkgrey');
    changeFontColor(parent2, 'white');
    parent1.forEach(element => changeColor(element, 'white'));
    child.forEach(element => changeColor(element, 'purple'));
    changeColor(firstchild, 'red');
    parent2.style.backgroundColor = 'grey';
}

function changeColor(element: Element, color: string = 'purple') {
    (element as HTMLElement).style.backgroundColor = color;
}

function changeFontColor(element: Element, color: string = 'white') {
    (element as HTMLElement).style.color = color;
}
function previousChild(selector: string, color: string) {
    let element = body.querySelector(selector) as Element;
    if (element) {
        let previousSibling = element.previousElementSibling as Element;
        changeColor(previousSibling, color);
    }
}
function nextChild(selector: string, color: string) {
    let element = body.querySelector(selector) as Element;
    if (element) {
        let nextChi1d = element.nextElementSibling as Element;
        changeColor(nextChi1d, color);
    }
}

if (secondchild) {
    nextChild(`#${secondchild.id}`, 'green');
    previousChild(`#${secondchild.id}`, 'blue');
}