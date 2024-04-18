const svgUs = document.getElementById("svgBackground");

svgUs.setAttribute("width", 400);
svgUs.setAttribute("height", 100);

// квадрат
const rectB = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rectB.setAttribute("x", 10);
rectB.setAttribute("y", 10);
rectB.setAttribute("width", 20);
rectB.setAttribute("height", 20);
rectB.setAttribute("rx", 6);
rectB.setAttribute("fill", "#000");
svgUs.appendChild(rectB);
