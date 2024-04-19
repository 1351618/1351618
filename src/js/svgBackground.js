const svgUs = document.getElementById("svgBackground");

const parentDiv = svgUs.parentElement; // Получаем родительский элемент

let widthSvg = 0;
let heightSvg = 0;

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    widthSvg = entry.contentRect.width;
    heightSvg = entry.contentRect.height;

    svgUs.setAttribute("width", widthSvg);
    svgUs.setAttribute("height", heightSvg);
  }
});

resizeObserver.observe(parentDiv);

const figureColor = "#34c300";

function circlePath(percentage, R) {
  const circumference = 2 * Math.PI * R;
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", widthSvg / 2);
  circle.setAttribute("cy", heightSvg / 2);
  circle.setAttribute("r", R);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", figureColor);
  circle.style.filter = `drop-shadow(0 0 1px ${figureColor}) drop-shadow(0 0 2px ${figureColor}) drop-shadow(0 0 3px ${figureColor})`;
  circle.setAttribute("stroke-width", "2");
  circle.setAttribute("stroke-dasharray", `${circumference}`);

  circle.setAttribute(
    "stroke-dashoffset",
    (1 - percentage / 100) * circumference
  );
  svgUs.appendChild(circle);
}

let percent = 0;
setInterval(() => {
  percent === 100 ? (percent = 0) : percent++;
  renering();
}, 50);

function renering() {
  svgUs.innerHTML = "";
  circlePath(percent, 20);
  circlePath(percent, 80);
  circlePath(percent, 300);
}

// // Создание круга
// const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// circle.setAttribute("cx", 300);
// circle.setAttribute("cy", 300);
// circle.setAttribute("r", 50);
// circle.setAttribute("fill", "none");
// circle.setAttribute("stroke", "#000");
// circle.setAttribute("stroke-width", "1");
// svgUs.appendChild(circle);

// // Создание дуги
// const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
// path.setAttribute(
//   "d",
//   `M ${400 + 20 * Math.cos((0 * Math.PI) / 180)} ${
//     400 + 20 * Math.sin((0 * Math.PI) / 180)
//   } A ${20} ${20} 0 ${345 - 0 <= 180 ? 0 : 1} 1 ${
//     400 + 20 * Math.cos((345 * Math.PI) / 180)
//   } ${400 + 20 * Math.sin((345 * Math.PI) / 180)}`
// );
// path.setAttribute("fill", "none");
// path.setAttribute("stroke", "#000");
// path.setAttribute("stroke-width", "1");
// svgUs.appendChild(path);
