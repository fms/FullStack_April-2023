"use strict";
// This Map holds the active cells for each table.
// The key of the Map is the table element.
// The value of the Map entry is the active cell (or undefined)
//                      Map<Key type,        Value type>
const activeCells = new Map();
// We set up a single EventListener for each table
const tables = document.querySelectorAll(".table");
tables.forEach(thisTable => thisTable.addEventListener("click", (e) => {
    const target = e.target;
    // Try and see if the target is inside a TD tag. If so, this is the element.
    const cell = target.closest("td");
    // What table does the element belong to?
    // We use optional chaining (?.) to avoid issues if cell is null (not inside a TD).
    const table = cell === null || cell === void 0 ? void 0 : cell.closest("table");
    if (!cell || !table) {
        // not inside <TD> and not inside <TABLE>
        return;
    }
    console.dir(table);
    // Get the active cell from the map using the table as key.
    // This returns undefined if table is not a key of the map.
    const activeCell = activeCells.get(table);
    if (activeCell) {
        // There's a previously active cell for this table - remove highlight
        activeCell.classList.remove("highlight");
    }
    // Highlight the clicked cell
    cell.classList.add("highlight");
    // Update the map with the new cell for entry with key table.
    // This creates a new entry of the key does not already exist in the map.
    activeCells.set(table, cell);
}));
