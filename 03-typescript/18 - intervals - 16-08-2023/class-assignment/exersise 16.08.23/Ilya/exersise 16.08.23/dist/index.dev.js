"use strict";

// Get the blue square element
var blueSquare = document.getElementById('blue-square'); // Set initial position and size

var position = 0;
var size = 50; // Set up timer interval

var timerInterval = setInterval(moveAndResizeSquare, 10); // Move and resize the square

function moveAndResizeSquare() {
  if (position >= window.innerWidth) {
    // Reset position and randomize size
    position = -size;
    size = getRandomSize();
  } else {
    // Move the square to the right
    position += 2;
    blueSquare.style.left = position + 'px';
  } // Change the size of the square


  blueSquare.style.width = size + 'px';
  blueSquare.style.height = size + 'px';
} // Generate random size between 20 and 100


function getRandomSize() {
  return Math.floor(Math.random() * 80) + 20;
} // Stop the animation after 20 seconds


setTimeout(function () {
  clearInterval(timerInterval);
}, 20000);