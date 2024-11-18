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
    const writeLeng = data[selectedLang];

    DG("name").innerHTML = writeLeng.main.name;
    DG("jobTitle").innerHTML = writeLeng.main.jobTitle;
    DG("intro").innerHTML = writeLeng.aboutMe.aboutMeText;
    DG("skills").querySelector("h2").innerHTML = writeLeng.techStack.title;
    DG("experience").querySelector("h2").innerHTML =
      writeLeng.devAchievements.title;
    DG("experienceCont").innerHTML = writeLeng.devAchievements.workplaces
      .map((val) => {
        return `
            <div class="experience-item">
              <h3>${val.jobTitle}</h3>
              <p class="date">${val.company} / ${val.period}</p>
             
              <ul>
                ${val.achievements.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>`;
      })
      .join("");
    DG("works").querySelector("h2").innerHTML = writeLeng.projects.title;
    DG("contact").querySelector("h2").innerHTML = writeLeng.contacts.title;
    DG("projects").querySelector("h2").innerHTML = writeLeng.section3.title;

    DG("projects-grid").innerHTML = writeLeng.section3.section3Cont
      .map((val) => {
        return `
      <div class="project-item">
        <h3 class="project-title">${val.name}</h3>
        <p class="project-description">
          ${val.description}
        </p>
      </div>
      `;
      })
      .join("");

    DG("education").querySelector("h2").innerHTML = writeLeng.aboutMe.education;
    DG("education-items").innerHTML = writeLeng.aboutMe.educationText
      .map((val) => {
        return `
        <div class="education-item">
        <h3>${val.year}</h3>
        <p class="date">${val.institution} | ${val.year}</p>
        <p>
        ${val.specialty}
        </p>
      </div>
        `;
      })
      .join("");
  }
}
