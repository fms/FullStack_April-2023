var buttons = document.querySelectorAll(".tab-button");
var contents = document.querySelectorAll(".content");
var setActiveTab = function (index) {
    buttons.forEach(function (button, i) {
        button.style.backgroundColor = i === index ? "white" : "#bccbe9";
    });
    contents.forEach(function (content, i) {
        content.style.display = i === index ? "block" : "none";
    });
};
buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        setActiveTab(index);
    });
});
