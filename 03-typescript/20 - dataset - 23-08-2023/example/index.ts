const links = document.querySelectorAll("a")!;

links.forEach(link => link.addEventListener("click", (event) => {
    alert("clicked");
    if ((event.target as HTMLElement).dataset.link === "disabled") {
        event.preventDefault();
    }
}));
