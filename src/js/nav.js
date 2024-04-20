const navA = document.querySelectorAll(".nav a");

navA.forEach((link, index) => {
  link.addEventListener("click", function () {
    navTogle(index);
  });
});

// ==============================================
const sections = document.querySelectorAll('section[id^="section"]');
document.addEventListener("scroll", function () {
  let SectionI = 0;
  let closDist = window.innerHeight;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const distanceToTop = Math.abs(rect.top);

    if (distanceToTop < closDist) {
      closDist = distanceToTop;
      SectionI = index;
    }
  });

  navTogle(SectionI);
});
function navTogle(index) {
  navA.forEach((link) => {
    link.classList.remove("active");
  });
  navA[index].classList.add("active");
}
