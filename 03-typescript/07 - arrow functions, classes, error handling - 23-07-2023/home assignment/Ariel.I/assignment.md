### Easy

1. Write a class named Board

- In the constructor accept two numbers for the width and height of the board.
- The board starts at coordinates 1,1.
<hr>

2. Write a class named Rook

- In the constructor accept a board and two numbers for the initial coordinates of the rook.
  - Confirm that the rook is inside the board.
- Include a method <strong>getLocation()</strong> for reporting the current position of the rook.
- Include functions for moving on the board:
  - <strong>goRight()</strong>
  - <strong>goLeft()</strong>
  - <strong>goUp()</strong>
  - <strong>goDown()</strong>
  - Accept as a parameter the number of steps
  - Only allow movement if the new position is still inside the board (<em>Hint:</em> Write a method to report if a set of coordinates is inside the board)
  - Report the new position of the rook.
  <hr>

3. Write a class named Bishop that behaves in the same manner as the Rook.

- Include these methods for moving on the board:
_ <strong>goRightUp()</strong>
_ <strong>goLeftUp()</strong>
_ <strong>goRightDown()</strong>
_ <strong>goLeftDown()</strong>
<hr>

### Medium

4. Write a class named Queen that behaves in the same manner as the Rook and Bishop combined.
<hr>

5. Write a class named King that behaves in the same manner as the Queen, but is limited to a single step.
<hr>

### Advanced

6. Read up on Abstract classes.

- Convert Rook, Bishop, Queen and King to use a new abstract class ChessPiece.
