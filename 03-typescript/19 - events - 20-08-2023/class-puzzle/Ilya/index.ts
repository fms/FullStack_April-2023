const table = document.getElementById('multiplicationTable');
const tbody = table.getElementsByTagName('tbody')[0];

// Function to generate the multiplication table
function generateTable() {
  const size = 10; // Customize this value to change the size of the table
  let isClicked = false;

  // Create the table rows
  for (let i = 1; i <= size; i++) {
    const row = tbody.insertRow();
    for (let j = 1; j <= size; j++) {
      const cell = row.insertCell();
      cell.className = (i + j) % 2 === 0 ? 'even' : 'odd';
      cell.addEventListener('click', function(event) {
        isClicked = !isClicked;
        if (isClicked) {
          event.target.classList.add('highlight');
        } else {
          event.target.classList.remove('highlight');
          event.target.classList.add('clicked');
        }
      });
    }
  }
}

// Generate the table when the page is loaded
window.addEventListener('load', generateTable);