const langBtn = document.getElementById("lang-btn");

const dataUrl = "./src/json/language.json";
const lang = ["en", "ru", "el"];
let data;
let langIndex = 0; // Индекс выбранного языка

/**
 * сокращение document.getElementById(id)
 * @param {string} id
 */
const DG = (id) => document.getElementById(id);

// Загрузка языка из localStorage
const savedLang = localStorage.getItem("selectedLang");
if (savedLang && lang.includes(savedLang)) {
  langIndex = lang.indexOf(savedLang);
}

fetch(dataUrl)
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    translation(); // Вызов функции перевода после загрузки данных
  })
  .catch((error) => console.log("error"));

langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % lang.length; // Увеличение индекса и обработка возврата к началу массива
  translation();
});

function translation() {
  langBtn.textContent = `${lang[langIndex]}`;

  if (data) {
    const selectedLang = lang[langIndex]; // Выбранный язык по текущему индексу
    localStorage.setItem("selectedLang", selectedLang);
    const writeLeng = data.find((item) => item.hasOwnProperty(selectedLang))[
      selectedLang
    ];
    DG("name").innerHTML = writeLeng.main.name;
    DG("jobTitle").innerHTML = writeLeng.main.jobTitle;
    DG("intro").innerHTML = writeLeng.aboutMe.aboutMeText;
    DG("skills").querySelector("h2").innerHTML = writeLeng.techStack.title;
    DG("works").querySelector("h2").innerHTML = writeLeng.projects.title;
    //   document.getElementById("education").innerHTML =
    //     writeLeng.section1.education;
    //   document.getElementById("educationText").innerHTML =
    //     writeLeng.section1.educationText;
    //   document.getElementById("workExperience").innerHTML =
    //     writeLeng.section2.workExperience;
    //   document.getElementById("workExperienceText").innerHTML =
    //     writeLeng.section2.workExperienceText;
    //   document.getElementById("skills").innerHTML = writeLeng.section2.skills;
    //   document.getElementById("skillsText").innerHTML =
    //     writeLeng.section2.skillsText;
  }
}
