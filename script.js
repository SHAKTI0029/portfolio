const nameText = "Shakti Kanta Behera";
const taglineText = "BCA Student • Web Developer Intern";

const nameEl = document.getElementById("name");
const taglineEl = document.getElementById("tagline");
const hireBtn = document.getElementById("hireBtn");
const sections = document.querySelectorAll(".section");
const main = document.getElementById("content");

/* TYPE EFFECT */
function typeText(text, el, speed, cb) {
  let i = 0;
  el.textContent = "";
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(timer);
      cb && cb();
    }
  }, speed);
}

/* SEQUENCE */
window.onload = () => {
  setTimeout(() => {
    typeText(nameText, nameEl, 40, () => {
      typeText(taglineText, taglineEl, 40, () => {
        hireBtn.style.opacity = "1";
        hireBtn.style.transition = "opacity 0.98s ease";
      });
    });
  }, 1000);
};

/* HIRE CLICK */
hireBtn.onclick = () => {
  main.style.display = "grid";
  main.scrollIntoView({ behavior: "smooth" });

  sections.forEach((sec, i) => {
    sec.style.animation = `fadeUp ${i === 0 ? "1.2s" : "0.88s"} ease forwards`;
    sec.style.animationDelay = `${i * 0.3}s`;
  });
};