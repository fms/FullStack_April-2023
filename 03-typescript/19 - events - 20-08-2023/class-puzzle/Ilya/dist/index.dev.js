"use strict";

var table = document.getElementById('multiplicationTable');
var tbody = table.getElementsByTagName('tbody')[0]; // Function to generate the multiplication table

function generateTable() {
  var size = 10; // Customize this value to change the size of the table
  // Create the table headers

  var headerRow = table.getElementsByTagName('thead')[0].insertRow();

  for (var i = 1; i <= size; i++) {
    var th = document.createElement('th');
    th.innerText = i;
    headerRow.appendChild(th);
  } // Create the table rows


  for (var _i = 1; _i <= size; _i++) {
    var row = tbody.insertRow();

    for (var j = 1; j <= size; j++) {
      var cell = row.insertCell();
      cell.innerText = _i * j;
      cell.addEventListener('click', highlightCell);
    }
  }
} // Function to highlight the clicked cell and remove highlight from previous cells


function highlightCell(event) {
  var cells = table.getElementsByTagName('td');

  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove('highlight');
  }

  event.target.classList.add('highlight');
} // Generate the table when the page is loaded


window.addEventListener('load', generateTable);