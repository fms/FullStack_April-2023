"use strict";

// List of all school classes
var schoolClasses = [{
  title: "Karate",
  description: "this is a karate class",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/karate_small.png"
}, {
  title: "hip hop",
  description: "this is a karate class2",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/hiphop_small"
}, {
  title: "ballroom",
  description: "this is a karate class3",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/hiphop_small.png"
}, {
  title: "violin",
  description: "this is a karate class4",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/karate_small.png"
}, {
  title: "singing",
  description: "this is a karate class",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/karate_small.png"
}, {
  title: "teacher",
  description: "this is a karate class",
  time: "May 2023",
  teacher: "Yelena",
  image: "./dist/images/karate_small.png"
}]; //  Output school class card for each class inside their container

var classesContainer = document.querySelector("#schoolClassesContainer");
schoolClasses.forEach(function (schoolClass) {
  classesContainer.insertAdjacentHTML("beforeend", "<div class=\"image school-class\" data-title=\"".concat(schoolClass.title, "\">\n        <img src=\"").concat(schoolClass.image, "\" alt=\"").concat(schoolClass.title, "\">\n        <div class=\"details\">\n            <h2>").concat(schoolClass.title, "</h2>\n            <p>").concat(schoolClass.description, "</p>\n            <div class=\"more\">\n                <a href=\"#\" class=\"read-more\">Read<span>More</span></a>\n            </div>\n        </div>\n      </div>"));
});
/**
 * Popup (Modal) functionality
 */

var popup = document.querySelector('#popup');
var popupText = popup.querySelector('#popup_text'); // Display the popup after user clicks on a school class

classesContainer.addEventListener('click', function (event) {
  var selectedSchoolClass = hasClassInAncestors(event.target, 'school-class');

  if (!selectedSchoolClass) {
    return;
  }

  var schoolClassObj = schoolClasses.find(function (schoolClass) {
    return schoolClass.title === selectedSchoolClass;
  });
  showPopup(schoolClassObj.description);
}); // Hide the popup if user clicks outside the popup or on the cancel button

popup.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup') || event.target.id === 'exit_popup') {
    hidePopup();
    return;
  }
});
/**
 * Hide the popup
 */

function hidePopup() {
  popup.style.display = 'none';
}
/**
 * Show the popup with the description of the school class
 * @param {string} description 
 */


function showPopup(description) {
  popup.style.display = 'flex';
  popupText.innerHTML = description;
}
/**
 * Find if class is exists on the element or in his ancestors
 * @param {*} element 
 * @param {string} className 
 * @returns 
 */


function hasClassInAncestors(element, className) {
  // Start with the target element
  var currentElement = element; // Continue traversing up the DOM tree until we reach the top (body element)

  while (currentElement !== null && currentElement !== document.body) {
    // Check if the current element has the specified class
    if (currentElement.classList.contains(className)) {
      return currentElement.dataset.title;
    } // Move up to the parent element


    currentElement = currentElement.parentElement;
  } // If no ancestor has the class, return false


  return false;
}