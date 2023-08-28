### Easy
Additions to the previous home assignment:
1. Add a method to the `Board` class to position a new piece on the board.
    * `placePiece(piece: ChessPiece)`
    * The new piece must not overlap existing pieces
1. Change the piece moving logic to fail if the new position in already taken on the board.
1. Add a method for printing the current layout of the board. Use the first letter of the class name to indicate a piece (i.e., R for **R**ook, Q for **Q**ueen, etc.)
### Medium

1. Write a class named `Person`
    * In the constructor accept `first name`, `last name` and `genre`
    * Add a getter to get the fullName (\``${lastName} ${firstName}`\`)
2. Write a class named `SocialNetwork`
    * In the constructor accept the `Social Network name` and the `account identifier`
    * Add method `addFollower(person: Person)`
      * Don't add a follower if it's already in the list (use `fullName` to identify the user)
    * Add method `removeFollower(fullName: string) : Person`
      * Removes the follower from the list of followers
      * Returns the removed follower, `null` is the follower was not found.
    * Add a method `print()` to output the type of the social network and the list of followers (full name) in alphabetical order.
        > **Example:**
        >
        > Twitter: Fishman Shmuel, Nachshon Alon
***

### Advanced
1. Write a class names `Celeb` which is based on `Person`.
    * Add method `addFollower(socialNetwork, person: Person)`
      * Add the follower to the correct social network
       * Don't add a follower if it's already in the list (use `fullName` to identify the user)
    * Add method `removeFollower(socialNetwork, fullName: string) : Person`
      * Removes the follower from the list of followers of the specific social network
      * Returns the removed follower, `null` is the follower was not found.
    * Add method `details()` to return the details of the celeb, the list of networks and the number of followers for each network
        ```javascript
        {
            firstName: "Shmuel",
            lastName:  "Fishman",
            socialNetworks: [
                {network: "twitter",  count: 5},
                {network: "facebook", count: 3},
            ]
        }
        ```
    * Add method `print(minFollowers?: number)` to print the details of the celeb, the list of networks and the number of followers for each network, sorted by the number of followers in ascending order
        > **Example:**<br>
        >
        > Shmuel Fishman: Facebook (3) Twitter (5)<br>
    
        The optional `minFollowers` will only include social networks with at least that number of followers.
        > **Example: `print(4)`**<br>
        > Shmuel Fishman: Twitter (5)<br>
***
2. Write a function `mostPopular(celeb[], socialNetwork): Celeb[]` to return the celebs with the most followers on that specific social media.
