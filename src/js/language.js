const langBtn = document.getElementById("lang-btn");

const dataUrl = "./src/json/language.json";
const lang = [
  "en",
  "ru",
  // "el"
];
let data;
let langIndex = 0; // Индекс выбранного языка

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
  if (data) {
    const selectedLang = lang[langIndex]; // Выбранный язык по текущему индексу
    const writeLeng = data.find((item) => item.hasOwnProperty(selectedLang))[
      selectedLang
    ];
    document.getElementById("name").innerHTML = writeLeng.main.name;
  }
}
