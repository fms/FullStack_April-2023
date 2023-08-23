"use strict";
const links = document.querySelectorAll("a");
links.forEach(link => link.addEventListener("click", (event) => {
    alert("clicked");
    if (event.target.dataset.link === "disabled") {
        event.preventDefault();
    }
}));
