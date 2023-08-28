var table = document.getElementById('multiplicationTable');
var tbody = table.getElementsByTagName('tbody')[0];
// Function to generate the multiplication table
function generateTable() {
    var size = 10; // Customize this value to change the size of the table
    var isClicked = false;
    // Create the table rows
    for (var i = 1; i <= size; i++) {
        var row = tbody.insertRow();
        for (var j = 1; j <= size; j++) {
            var cell = row.insertCell();
            cell.className = (i + j) % 2 === 0 ? 'even' : 'odd';
            cell.addEventListener('click', function (event) {
                isClicked = !isClicked;
                if (isClicked) {
                    event.target.classList.add('highlight');
                }
                else {
                    event.target.classList.remove('highlight');
                    event.target.classList.add('clicked');
                }
            });
        }
    }
}
// Generate the table when the page is loaded
window.addEventListener('load', generateTable);
