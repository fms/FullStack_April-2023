console.log("connected");
function logger() {
    console.log("Hello");
}
// const interval = setInterval(logger, 1000)
var btn = document.querySelector("#btn");
btn.addEventListener("click", logger);
btn.addEventListener("click", scroller);
var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    btn.removeEventListener("click", logger);
    btn.disabled = true;
});
function scroller() {
    window.scrollTo(0, 0);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
