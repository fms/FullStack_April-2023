Getform.init("#form", { // Form selector
    formId: "your-form-id", // Form ID from getform.io
    toggleOnSuccess: ".w-form-done",  // Element toggles on submit
    toggleOnError: ".w-form-fail",  // Element toggles on error
    onSuccess: function (form, event) { }, // Success callback
    onError: function (err) { } // Error callback
});

// Get all radio buttons on the page
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Add change event listener to each radio button
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', (event) => {
        const selectedRadio = event.target;

        // Check if the selected radio button is checked
        if (selectedRadio.checked) {
            // Uncheck all other radio buttons except the selected one
            radioButtons.forEach((radio) => {
                if (radio !== selectedRadio) {
                    radio.checked = false;
                }
            });
        }
    });
});


// Get the necessary elements from the HTML document
const dropArea = document.querySelector('.drop-area');
const fileInput = document.querySelector('#file-input');
const previewContainer = document.querySelector('.preview-container');
const previewImage = document.querySelector('.preview-image');
const closeButton = document.querySelector('.close-button');
const fileName = document.querySelector('.file-name');


// Add event listener to the form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    previewContainer.classList.add('hidden'); // Hide the preview container
});

// Add event listener to the drop area to handle when a file is being dragged over it
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default behavior of browser
    dropArea.classList.add('active'); // Add "active" class to the drop area
});

// Add event listener to the drop area to handle when a file is no longer being dragged over it
dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active'); // Remove "active" class from the drop area
});

// Add event listener to the drop area to handle when a file is dropped onto it
dropArea.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior of browser
    const file = event.dataTransfer.files[0]; // Get the file that was dropped
    showPreview(file); // Show a preview of the file
    showFileName(file); // Show the name of the file
});

// Add event listener to the file input element to handle when a file is selected
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]; // Get the file that was selected
    showPreview(file); // Show a preview of the file
    showFileName(file); // Show the name of the file
});

// Add event listener to the close button to handle when it is clicked
closeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior of button
    fileInput.value = ''; // Clear the file input value
    previewImage.style.backgroundImage = ''; // Clear the preview image
    fileName.textContent = ''; // Clear the file name
    previewImage.classList.add('hidden'); // Hide the preview image
    previewContainer.classList.add('hidden'); // Hide the preview container
    previewImage.classList.remove('flex'); // Remove "flex" class from preview image
});

// Function to show a preview of the file
function showPreview(file) {
    if (file.type.startsWith('image/')) { // Check if the file is an image
        const reader = new FileReader(); // Create a new FileReader object
        reader.readAsDataURL(file); // Read the file as a data URL
        reader.onload = () => { // When the file has been read
            previewImage.style.backgroundImage = `url(${reader.result})`; // Set the background image of the preview container to the data URL
            previewImage.classList.remove('hidden'); // Show the preview image
            dropArea.classList.remove('active'); // Remove "active" class from drop area
            previewContainer.classList.remove('hidden'); // Show the preview container
            previewContainer.classList.add('flex'); // Add "flex" class to preview container
        };
    }
}

// Function to show the name of the file
function showFileName(file) {
    fileName.textContent = file.name; // Set the text content of the file name element to the name of the file
    fileName.style.display = 'block'; // Show the file name element
}