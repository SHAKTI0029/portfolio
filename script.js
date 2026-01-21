/* ================= TEXT CONTENT ================= */
const nameText = "Shakti Kanta Behera";
const taglineText = "BCA Student • Web Developer Intern";

/* ================= ELEMENTS ================= */
const nameEl = document.getElementById("name");
const taglineEl = document.getElementById("tagline");
const hireBtn = document.getElementById("hireBtn");
const main = document.getElementById("content");
const sections = document.querySelectorAll(".section");
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");
const clickSound = document.getElementById("clickSound");

/* ================= TYPE EFFECT ================= */
function typeText(text, el, speed, callback) {
  let i = 0;
  el.textContent = "";
  el.style.opacity = "1";

  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

/* ================= INTRO ANIMATION ================= */
window.addEventListener("load", () => {
  nameEl.style.opacity = "0";
  taglineEl.style.opacity = "0";
  hireBtn.style.opacity = "0";
  hireBtn.style.transform = "scale(0.7)";

  setTimeout(() => {
    typeText(nameText, nameEl, 40, () => {
      typeText(taglineText, taglineEl, 40, () => {
        hireBtn.style.opacity = "1";
        hireBtn.style.transform = "scale(1)";
      });
    });
  }, 600);
});

/* ================= SOUND SAFE PLAY ================= */
function playSound() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }
}

/* ================= HIRE ME CLICK ================= */
hireBtn.addEventListener("click", () => {
  playSound();

  main.style.display = "grid";
  main.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    sections.forEach((section, index) => {
      const duration = index === 0 ? "2.2s" : "1.2s"; // About slower
      section.style.animation = `fadeUp ${duration} ease forwards`;
      section.style.animationDelay = `${index * 0.35}s`;
    });
  }, 500);
});

/* ================= PROFILE VIEWS ================= */
let views = localStorage.getItem("profileViews");
views = views ? parseInt(views) + 1 : 1;
localStorage.setItem("profileViews", views);

const viewsEl = document.getElementById("views");
if (viewsEl) viewsEl.textContent = views;

/* ================= SCROLL TO TOP ================= */
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  playSound();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= DARK / LIGHT MODE ================= */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  playSound();

  // icon switch
  themeToggle.innerHTML = document.body.classList.contains("light-mode")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

/* ================= CERTIFICATE POPUP ================= */
const certImages = document.querySelectorAll(".cert-img");
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    playSound();
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* ================= CLICK SOUND FOR BUTTONS ================= */
document.querySelectorAll("button, a").forEach(el => {
  el.addEventListener("click", playSound);
});