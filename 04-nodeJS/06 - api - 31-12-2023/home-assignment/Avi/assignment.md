Complete the view we started in class.

To do this:
1. Copy the **example** folder into **home-assignment**
2. Rename **example** to your name.

Add the missing functionality in the view. This should include:
- Adding a new product. Use a form to accept the product name and the price.

    Change ```handleAddBanana``` (also rename it) to handle the form submission and POST the changes to the server.
- Renaming an existing product. Use ```PATCH /api/products/product/:name``` for this.
- Updating the price for the product. Use ```PATCH``` for this (pick your own)
- Replace the product (update both name and price). Use  ```PUT``` for this.
- Delete a product. use ```DELETE``` for this.

The actual layout, styling of the page, and the user experience is entirely up to you.

Don't forget to show errors to the user.