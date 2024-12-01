document.querySelector(".scroll-down").addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

const hamburgerIcon = document.querySelector(".toggle-menu");
const nav = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
