## Easy

1. Create a users page and link to 5 users.

2. Prepare a route for `/user/:id`. This route should display a UserPage component.

3. In the UserPage component, use the `id` param to fetch and display the user details.

4. User API details are available at https://dummyjson.com/docs/users

## Advanced (research required)

1. Create a new project and install the react-router-dom module.

2. Add two paths:

   - `/` for the home page. The page should include a header and links to other routes.

   - `/settings` for the setting page.

3. The settings page:

   - The page should include a button for returning to `home`.

   - The page should include a form with two fields: first name and last name.

   - If both fields are empty, clicking the button should switch to the home page.

   - If either fields has a value, clicking the button should display a confirmation message ("Leaving would result in data loss", or anything similar you'd like). The confirmation should have two options:
     - I understand - continue navigating to home.
     - No, go back - stay on the settings page.

### Tips

1. The confirmation should use a component. <strong>Don't use the javascript prompt() for the confirmation.</strong>

2. Think in advance: What and when should the navigate button do when clicked?

3. The documentation for react-router-dom is at https://reactrouter.com.

<details>
<summary>Spoiler Alert</summary>
 
 To block navigation look at the hooks...
 <details>
 <summary>Final chance to avoid the spoiler</summary>

Look at the useBlocker hook

 </details>
</details>
