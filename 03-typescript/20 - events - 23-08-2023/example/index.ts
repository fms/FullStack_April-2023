const disableLink = document.querySelector(".link-disabled")!;

disableLink.addEventListener("click", (event) => {
    alert("clicked");
    event.preventDefault();
});

const stillEnableLink = document.querySelector(".link-still-active")!;
stillEnableLink.addEventListener("click", (event) => {
  alert("clicked");
});


disableLink.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("menu on link");
});

document.addEventListener("contextmenu", (event) => {
    if(!event.defaultPrevented) {
        alert("menu on document");
        event.preventDefault();
    }
});
