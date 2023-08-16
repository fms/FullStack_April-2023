let grandparant = document.querySelector(".grandparant");
let parants = document.querySelectorAll(".parant");
let children = document.querySelectorAll(".child");
console.log(children);
let tenthChild = children[10];
if(tenthChild){
  changeColor(tenthChild, 'black')
  let next = tenthChild.nextElementSibling;
  let previous = tenthChild.previousElementSibling;
  next && changeSize(next, "200%" );
  previous && changeSize(previous, "150%" );
}


function changeColor(element :Element /*: HTMLElement */, color: string = "gray") {
  (element as HTMLElement).style.backgroundColor = color;
}

function changeSize(element :Element /*: HTMLElement */, size: string = "100%") {
  (element as HTMLElement).style.width = size;
  (element as HTMLElement).style.height = size;
}