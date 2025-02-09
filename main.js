window.addEventListener("load", () => {
  const loadingElement = document.getElementById("loading");
  const contentElement = document.getElementById("page-content");

  loadingElement.style.display = "none";
  contentElement.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  // Language toggle
  const langToggleBtn = document.getElementById("lang-toggle");

  // تحميل اللغة المحفوظة مسبقًا
  let currentLang = localStorage.getItem("lang") || "ar";
  setLanguage(currentLang);

  // عند الضغط على زر تغيير اللغة
  langToggleBtn.addEventListener("click", function () {
    currentLang = currentLang === "ar" ? "en" : "ar";
    setLanguage(currentLang);
  });

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // تغيير جميع النصوص بناءً على اللغة المختارة
    document.querySelectorAll("[data-ar]").forEach((el) => {
      el.innerText = el.getAttribute(`data-${lang}`);
    });

    // تغيير نص زر التبديل
    langToggleBtn.innerText = lang === "ar" ? "English" : "العربية";

    // حفظ اللغة المختارة في localStorage
    localStorage.setItem("lang", lang);
  }

  // hero scroll button
  if (document.querySelector(".scroll-down")) {
    document.querySelector(".scroll-down").addEventListener("click", () => {
      window.scrollBy({
        top: window.innerHeight - 100,
        behavior: "smooth",
      });
    });
  }

  // toggle menu
  const hamburgerIcon = document.querySelector(".toggle-menu");
  const nav = document.querySelector(".nav");

  hamburgerIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // projects
  if (document.querySelector(".projects")) {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
      const images = slider.querySelectorAll("img");
      let currentIndex = 0;
      const dotsContainer = slider.parentElement.querySelector(".dots");
      const sliderContainer = slider.parentElement;

      // إنشاء الـ dots بناءً على عدد الصور
      images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll(".dot");

      // const updateBackground = () => {
      //   sliderContainer.style.setProperty(
      //     "--background-image",
      //     `url(${images[currentIndex].src})`
      //   );
      //   sliderContainer.style.backgroundImage = `url(${images[currentIndex].src})`;
      // };

      const updateSlider = (newIndex) => {
        images[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = newIndex;

        images[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");

        // updateBackground();
      };

      // زر السابق
      slider.parentElement
        .querySelector(".prev")
        .addEventListener("click", () => {
          const newIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
          updateSlider(newIndex);
        });

      // زر التالي
      slider.parentElement
        .querySelector(".next")
        .addEventListener("click", () => {
          const newIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;
          updateSlider(newIndex);
        });

      // تغيير الصورة عند الضغط على dots
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          updateSlider(index);
        });
      });

      // تشغيل السلايدر تلقائياً
      setInterval(() => {
        const newIndex = (currentIndex + 1) % images.length;
        updateSlider(newIndex);
      }, 3000); // كل 3 ثواني
    });
  }

  // reveal elements on scroll
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

  // to top button
  const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTopBtn.classList.add("show");
    } else {
      toTopBtn.classList.remove("show");
    }
  });

  // عند النقر على الزر
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Testimonials Section
  if (document.querySelector(".testimonials")) {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentSlide = 0;

    // Function to update slides
    function updateSlides(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        indicators[i].classList.toggle("active", i === index);
      });
    }

    // Event Listeners for arrows
    leftArrow.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides(currentSlide);
    });

    rightArrow.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides(currentSlide);
    });

    // Event Listeners for indicators
    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        currentSlide = i;
        updateSlides(currentSlide);
      });
    });
  }
});
