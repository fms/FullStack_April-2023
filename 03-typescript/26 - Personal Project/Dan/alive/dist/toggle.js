var toggle = document.querySelector('.toggle');
var toggleIcon = document.querySelector('.toggle i');
var dropdown = document.querySelector('.dropdown');
toggle.onclick = function () {
    dropdown.classList.toggle('open');
    var isOpen = dropdown.classList.contains('open');
    toggleIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
