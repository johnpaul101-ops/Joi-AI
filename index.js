const buttons = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sections.forEach((section, j) => {
      if (i === j) {
        section.scrollIntoView();
      }
    });
  });
});
