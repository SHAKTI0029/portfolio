const photo = document.querySelector(".photo-circle");
const name = document.querySelector(".name");
const tagline = document.querySelector(".tagline");
const hireBtn = document.getElementById("hireBtn");

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

/* helper: split text into letters */
function splitText(el) {
  const text = el.innerText;
  el.innerHTML = "";
  text.split("").forEach(ch => {
    const span = document.createElement("span");
    span.innerText = ch === " " ? "\u00A0" : ch;
    el.appendChild(span);
  });
}

splitText(name);
splitText(tagline);

/* PAGE LOAD SEQUENCE */
window.addEventListener("load", () => {

  // PHOTO – 1x
  setTimeout(() => {
    photo.style.opacity = "1";
    photo.style.transform = "scale(1)";
  }, 300);

  // NAME – 0.88x
  setTimeout(() => {
    document.querySelectorAll(".name span").forEach((sp, i) => {
      setTimeout(() => {
        sp.style.opacity = "1";
        sp.style.transform = "translateY(0)";
      }, i * 80);
    });
  }, 900);

  // TAGLINE – same animation
  setTimeout(() => {
    document.querySelectorAll(".tagline span").forEach((sp, i) => {
      setTimeout(() => {
        sp.style.opacity = "1";
        sp.style.transform = "translateY(0)";
      }, i * 60);
    });
  }, 1400);

  // HIRE ME – after all (0.75x)
  setTimeout(() => {
    hireBtn.classList.add("animate");
  }, 2200);
});

/* HIRE ME CLICK → SECTIONS (0.90x) */
hireBtn.addEventListener("click", () => {

  // scroll first
  about.scrollIntoView({ behavior: "smooth" });

  // then animate sections
  setTimeout(() => {

    about.style.opacity = "1";
    about.style.transform = "translateY(0)";

    setTimeout(() => {
      skills.style.opacity = "1";
      skills.style.transform = "translateY(0)";
    }, 900);

    setTimeout(() => {
      project.style.opacity = "1";
      project.style.transform = "translateY(0)";
    }, 1800);

    setTimeout(() => {
      contact.style.opacity = "1";
      contact.style.transform = "translateY(0)";
    }, 2700);

  }, 1000);
});