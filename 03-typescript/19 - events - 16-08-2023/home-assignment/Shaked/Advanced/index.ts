const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

const setActiveTab = (index) => {
  buttons.forEach((button, i) => {
    button.style.backgroundColor = i === index ? "white" : "#bccbe9";
  });

  contents.forEach((content, i) => {
    content.style.display = i === index ? "block" : "none";
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    setActiveTab(index);
  });
});