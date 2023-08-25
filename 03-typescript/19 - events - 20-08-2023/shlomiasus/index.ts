let table = document.getElementById('myTable');
let cell = table?.getElementsByTagName('block') ;

if (cell) {
    for (let i = 0; i < cell.length; i++) {
        let oneCell = cell[i] as HTMLElement;
        oneCell.onclick =  ()=> {

            oneCell.style.color = "yellow";
        }

    }
}