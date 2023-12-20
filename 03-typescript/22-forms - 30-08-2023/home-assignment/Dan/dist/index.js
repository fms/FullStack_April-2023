var main = document.querySelector("#name");
function submitInfo(event) {
    var target = event.target;
    if (main) {
        main.textContent = target.value;
    }
}
