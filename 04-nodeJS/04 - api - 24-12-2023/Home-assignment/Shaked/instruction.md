1. Write a new server in Typescript.
2. The server should have two endpoints (URL patterns it listens to):
   - /now - this returns the current date as a JSON:
      ```
      GET /now
      {
        "date": "2023-12-25T11:12:30.469Z"
      }
      ```
   - /echo/:text - this is similar to our class code. Just echo the text back to the user in a JSON:
      ```
      GET /echo/Hello%20World
      {
        "message": "Hello World"
      }
      ```
3. You can test your endpoint using **Postman** (https://www.postman.com/downloads/) or using the **Thunder Client** VS.code extension (https://www.thunderclient.com/)
4. Include a page for getting some user text and sending it to the server (again, this is similar to our class code). Also include a button for getting the date and showing the output to the user.

   The page should use the endpoints defined in step 2.



