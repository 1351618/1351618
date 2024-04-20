const svgUs = document.getElementById("svgBackground");

const parentDiv = svgUs.parentElement; // Получаем родительский элемент
/** width Svg */
let ws = 0;
/** height Svg */
let hs = 0;

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    ws = entry.contentRect.width;
    hs = entry.contentRect.height;

    svgUs.setAttribute("width", ws);
    svgUs.setAttribute("height", hs);
  }
});

resizeObserver.observe(parentDiv);

const figureColor = "#34c300";

let degrees = 0;
setInterval(() => {
  degrees === 360 ? (degrees = 0) : (degrees += 0.1);
  renering();
}, 10);

/**
 * функция отрисовки кругов
 * @param {*} SD количество линий
 * @param {*} R радиус
 * @param {*} D градусы поворота
 */
function circle(SD, R, D) {
  // Создание круга
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", ws / 2);
  circle.setAttribute("cy", hs / 2);
  circle.setAttribute("r", R);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", figureColor);
  circle.style.filter = `drop-shadow(0 0 1px ${figureColor}) drop-shadow(0 0 2px ${figureColor}) drop-shadow(0 0 3px ${figureColor})`;
  circle.setAttribute("stroke-width", "2");
  circle.setAttribute("stroke-dasharray", `${SD}`);
  circle.setAttribute("transform", `rotate(${D}, ${ws / 2}, ${hs / 2})`);
  svgUs.appendChild(circle);
}

function line(SD, X2, Y2, D) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", ws / 2);
  line.setAttribute("y1", hs / 2);
  line.setAttribute("x2", X2);
  line.setAttribute("y2", Y2);
  line.setAttribute("stroke", figureColor);
  line.style.filter = `drop-shadow(0 0 1px ${figureColor}) drop-shadow(0 0 2px ${figureColor}) drop-shadow(0 0 3px ${figureColor})`;
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-dasharray", `${SD}`);
  line.setAttribute("transform", `rotate(${D}, ${ws / 2}, ${hs / 2})`);
  svgUs.appendChild(line);
}

function renering() {
  svgUs.innerHTML = "";

  circle(400, 400, 360 - degrees * 2);
  circle(15, 20, degrees * 2);
  circle(200, 200, 360 - degrees);
  circle(110, 150, degrees - 6);
  circle(400, 300, 0);
  circle(50, 56, 0);
  circle(0, 500, 0);
  circle(0, 320, 0);
  circle(0, 78, 0);

  line(150, 200, 200, degrees);
  line(100, 200, 200, 360 - degrees);
  line(0, 200, 200, 155);
  line(150, ws / 2, hs / 3.8, degrees + 60);
}
