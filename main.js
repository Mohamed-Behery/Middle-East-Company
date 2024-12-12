document.querySelector(".scroll-down").addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight - 100,
    behavior: "smooth",
  });
});

const hamburgerIcon = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

document.querySelectorAll(".popup-open").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const popupId = btn.getAttribute("data-popup-id");
    document.querySelector(popupId).classList.add("show");
  });
});

document.querySelectorAll(".popup-close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const popup = closeBtn.closest(".popup");
    if (popup) {
      popup.classList.remove("show");
    }
  });
});
