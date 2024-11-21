/** lineSection */
const lineSection = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".lineSection");
    lines.forEach((line, index) => {
      line.style.height = `${Math.random() * 2 + 1}px`;
    });
  });
};
lineSection();

/** table-btn */
const tableBtn = () => {
  const buttons = document.querySelectorAll(".table-btn");
  let currentIndex = 0;

  function animateNextButton() {
    buttons.forEach((btn) => btn.classList.remove("animated"));

    buttons[currentIndex].classList.add("animated");

    currentIndex = (currentIndex + 1) % buttons.length;

    setTimeout(animateNextButton, 1500);
  }

  animateNextButton();

  buttons.forEach((button) => {
    button.addEventListener("click", function () {});
  });
};
tableBtn();
