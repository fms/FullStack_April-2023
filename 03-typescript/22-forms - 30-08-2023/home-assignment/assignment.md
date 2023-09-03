Let's create a data entry system.

## Easy
Create a form to accept some details. These details may be whatever you want.

Beneath the form display a tabulated list of the details. This list is initially empty.

When the form is submitted, add a line to the list with the details.

## Medium
Add a new column to each line in the list. The title of the column should be `Delete?` and for each line it should include a checkbox.

Add a button marked `Delete selected`. When pressed, delete all the lines from the list in which the checkbox is selected. If there are no lines to delete, display an alert saying so.

## Advanced
Add a button marked `Edit` on each details line. Clicking the button should allow editing the specific line. 

Editing should include two buttons for `Update` and for `Cancel`.

## Hints and Tips
- Use a class for holding the details.
- Don't edit a live copy of your details. Only replace the data after the `Update` button is clicked.