document.addEventListener("DOMContentLoaded", (event) => {
  // Эффект появления секций
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0) scale(1)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px) scale(0.9)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(section);
  });

  // Эффект свечения для навыков
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("mousemove", (e) => {
      const rect = skill.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      skill.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 157, 0.3), rgba(0, 255, 157, 0.1) 40%, rgba(0, 255, 157, 0) 60%)`;
    });
    skill.addEventListener("mouseleave", () => {
      skill.style.background = "rgba(0, 255, 157, 0.1)";
    });
  });

  // Эффект свечения для проектов и работ
  const items = document.querySelectorAll(".project-item, .work-item");
  items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.background = `
          radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0, 255, 157, 0.3) 0%,
            rgba(0, 255, 157, 0.1) 20%,
            rgba(0, 255, 157, 0) 50%
          ),
          rgba(0, 255, 157, 0.05)
        `;

      item.style.transform = `
          perspective(1000px)
          rotateY(${(x - rect.width / 2) / 10}deg)
          rotateX(${(y - rect.height / 2) / -10}deg)
          translateZ(10px)
        `;
    });

    item.addEventListener("mouseleave", () => {
      item.style.background = "rgba(0, 255, 157, 0.05)";
      item.style.transform = "none";
    });
  });

  // Эффект глитча для имени
  const name = document.querySelector(".name");
  let glitchInterval;

  name.addEventListener("mouseover", () => {
    clearInterval(glitchInterval);
    glitchInterval = setInterval(() => {
      name.style.textShadow = `
          ${Math.random() * 10 - 5}px ${
        Math.random() * 10 - 5
      }px rgba(0, 255, 157, 0.7),
          ${Math.random() * 10 - 5}px ${
        Math.random() * 10 - 5
      }px rgba(127, 255, 0, 0.7)
        `;
    }, 50);
  });

  name.addEventListener("mouseout", () => {
    clearInterval(glitchInterval);
    name.style.textShadow = "0 0 10px rgba(0, 255, 157, 0.7)";
  });
});

// Добавляем эффект кибер-частиц
const particlesContainer = document.createElement("div");
particlesContainer.style.position = "fixed";
particlesContainer.style.top = "0";
particlesContainer.style.left = "0";
particlesContainer.style.width = "100%";
particlesContainer.style.height = "100%";
particlesContainer.style.pointerEvents = "none";
particlesContainer.style.zIndex = "-1";
document.body.appendChild(particlesContainer);

function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = "2px";
  particle.style.height = "2px";
  particle.style.background = `rgba(0, 255, 157, ${Math.random() * 0.5 + 0.5})`;
  particle.style.borderRadius = "50%";
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animation = `floatParticle ${
    Math.random() * 5 + 5
  }s linear infinite`;
  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 200);

const style = document.createElement("style");
style.textContent = `
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0);
      }
      100% {
        transform: translateY(-100vh) translateX(${
          Math.random() * 200 - 100
        }px);
      }
    }
  `;
document.head.appendChild(style);
