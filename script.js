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
  el.style.opacity = "1";

  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(timer);
      cb && cb();
    }
  }, speed);
}

/* INTRO SEQUENCE */
window.onload = () => {
  // reset
  nameEl.style.opacity = "0";
  taglineEl.style.opacity = "0";
  hireBtn.style.opacity = "0";

  // Name animation (0.88x feel)
  setTimeout(() => {
    typeText(nameText, nameEl, 38, () => {
      // Tagline animation (same style, yellow via CSS)
      typeText(taglineText, taglineEl, 38, () => {
        // Hire Me appears LAST (0.98x smooth)
        setTimeout(() => {
          hireBtn.style.opacity = "1";
          hireBtn.style.transform = "scale(1)";
          hireBtn.style.transition =
            "opacity 0.98s ease, transform 0.98s ease";
        }, 300);
      });
    });
  }, 900);
};

/* HIRE ME CLICK */
hireBtn.addEventListener("click", () => {
  main.style.display = "grid";

  // smooth scroll FIRST
  main.scrollIntoView({ behavior: "smooth" });

  // sections animate AFTER scroll (no speed jump)
  setTimeout(() => {
    sections.forEach((sec, i) => {
      sec.style.animation = `fadeUp ${
        i === 0 ? "1.8s" : "1.2s"
      } ease forwards`;
      sec.style.animationDelay = `${i * 0.7}s`;
    });
  }, 800);
});