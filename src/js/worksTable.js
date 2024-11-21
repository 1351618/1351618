let indTable = 0;

const tableBtnS = document.querySelectorAll("#worksTaleBtnS button"); // Получаем все кнопки
const tableActive = {
  0: document.getElementById("works-grid"),
  1: document.getElementById("works-animation"),
};

tableBtnS.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indTable = index;
    updateTable();
  });
});

function updateTable() {
  tableBtnS.forEach((btn) => btn.classList.remove("active"));
  Object.values(tableActive).forEach((el) => el.classList.add("hide"));
  tableActive[indTable].classList.remove("hide");
  tableBtnS[indTable].classList.add("active");
}

updateTable();
