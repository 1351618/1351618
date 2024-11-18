const one = document.querySelector(".one");
const two = document.querySelector(".two");

const skills = document.querySelector(".skills");

const mySkillsData = [
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    link: "https://www.python.org/",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    name: "Next",
    icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    link: "https://www.w3.org/TR/CSS/#css",
  },
  {
    name: "Sass",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
    link: "https://sass-lang.com/",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "Webpack",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
    link: "https://webpack.js.org/",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    link: "https://nodejs.org/en/",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    link: "https://www.mysql.com/",
  },
  {
    name: "Heroku",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
    link: "https://www.heroku.com/",
  },
  {
    name: "Arduino",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg",
    link: "https://store.arduino.cc/?gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8uueBifykWcsSS4LPESeGQfxGVKJYnzV7bz471XfknQJy_1VINVWM8aAkLtEALw_wcB",
  },
  {
    name: "Blender",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/blender-colored.svg",
    link: "https://www.blender.org/",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Raspberry Pi",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/raspberrypi-colored.svg",
    link: "https://www.raspberrypi.org/",
  },
  {
    name: "TensorFlow",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
    link: "https://www.tensorflow.org/",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    link: "https://www.figma.com/",
  },
  {
    name: "Photoshop",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg",
    link: "https://www.adobe.com/uk/products/photoshop.html",
  },
  {
    name: "D3.js",
    icon: "https://d3js.org/logo.svg",
    link: "https://d3js.org/",
  },
  {
    name: "Express",
    icon: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    link: "https://expressjs.com/",
  },
  {
    name: "WordPress",
    icon: "https://static.vecteezy.com/system/resources/thumbnails/020/975/579/small/wordpress-logo-wordpress-icon-transparent-free-png.png",
    link: "https://wordpress.com/",
  },
  {
    name: "Moguta",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyqhUPdFVd4l2U-XvXxypZ2G2QVRvPYDB5g&s",
    link: "https://moguta.ru/",
  },
];

mySkillsData.forEach((val) => {
  const skill = `
    <a href=${val.link}>
      <img
        src=${val.icon}
        alt=${val.name}/>
    </a>
    `;

  one.innerHTML += skill;
  two.innerHTML += skill;

  const skilP = document.createElement("span");
  skilP.classList.add("skill");
  skilP.textContent = val.name;

  skills.appendChild(skilP);
});
