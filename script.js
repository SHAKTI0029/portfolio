const photo = document.querySelector(".photo");
const nameEl = document.getElementById("name");
const taglineEl = document.getElementById("tagline");
const hireBtn = document.getElementById("hireBtn");

const sections = document.querySelectorAll(".section");

/* split text into letters */
function splitText(el) {
  const text = el.innerText;
  el.innerHTML = "";
  text.split("").forEach(ch => {
    const span = document.createElement("span");
    span.innerText = ch === " " ? "\u00A0" : ch;
    el.appendChild(span);
  });
}

splitText(nameEl);
splitText(taglineEl);

/* PAGE LOAD SEQUENCE */
window.addEventListener("load", () => {

  // PHOTO
  setTimeout(() => {
    photo.style.opacity = "1";
    photo.style.transform = "scale(1)";
  }, 300);

  // NAME
  setTimeout(() => {
    document.querySelectorAll(".name span").forEach((s, i) => {
      setTimeout(() => {
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
      }, i * 80);
    });
  }, 900);

  // TAGLINE
  setTimeout(() => {
    document.querySelectorAll(".tagline span").forEach((s, i) => {
      setTimeout(() => {
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
      }, i * 60);
    });
  }, 1400);

  // HIRE ME
  setTimeout(() => {
    hireBtn.style.opacity = "1";
    hireBtn.style.transform = "translateY(0)";
  }, 2200);
});

/* HIRE ME CLICK */
hireBtn.addEventListener("click", () => {

  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    sections.forEach((sec, i) => {
      setTimeout(() => {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }, i * 900);
    });
  }, 900);
});