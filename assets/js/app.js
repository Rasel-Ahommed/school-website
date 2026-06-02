document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".main-navbar");

  const updateNavbarState = () => {
    if (!navbar) {
      return;
    }

    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState);

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (!linkPath || linkPath.startsWith("#") || linkPath === "") {
      return;
    }

    const normalizedLinkPath = linkPath.split("#")[0] || "index.html";

    if (normalizedLinkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");

      const dropdownToggle = link.closest(".dropdown")?.querySelector(".dropdown-toggle");

      if (dropdownToggle) {
        dropdownToggle.classList.add("active");
        dropdownToggle.setAttribute("aria-current", "page");
      }
    }
  });

  const toBengaliNumber = (value) => value.toLocaleString("bn-BD");

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 2000;
    const suffix = element.dataset.suffix || "";
    const prefix = element.dataset.prefix || "";
    const startTime = performance.now();

    const easeOutQuart = (time) => 1 - Math.pow(1 - time, 4);

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = easeOutQuart(progress);
      const currentValue = Math.round(target * eased);

      element.textContent = `${prefix}${toBengaliNumber(currentValue)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const statNumbers = document.querySelectorAll(".stat-card__number");

  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statNumbers.forEach((number) => counterObserver.observe(number));
  }

  const animationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".animate-fade-up").forEach((element) => {
    animationObserver.observe(element);
  });

  document.querySelectorAll('.row > [class*="col"] .animate-fade-up').forEach((element, index) => {
    element.style.transitionDelay = `${(index % 4) * 0.1}s`;
  });

  const heroSliderElement = document.querySelector(".hero-slider");

  if (heroSliderElement) {
    const heroSlider = {
      slides: [...document.querySelectorAll(".hero-slide")],
      dots: [...document.querySelectorAll(".hero-dot")],
      counter: document.querySelector(".hero-counter"),
      progress: document.querySelector(".hero-progress"),
      current: 0,
      total: 0,
      timer: null,
      interval: 5000,

      updateCounter() {
        if (!this.counter) {
          return;
        }

        const currentNumber = String(this.current + 1).padStart(2, "0");
        const totalNumber = String(this.total).padStart(2, "0");
        this.counter.textContent = `${currentNumber} / ${totalNumber}`;
      },

      resetProgress() {
        if (!this.progress) {
          return;
        }

        this.progress.style.animation = "none";
        void this.progress.offsetHeight;
        this.progress.style.animation = "hero-slide-progress 5s linear infinite";
      },

      goTo(index) {
        if (!this.total) {
          return;
        }

        this.slides[this.current]?.classList.remove("active");
        this.dots[this.current]?.classList.remove("active");
        this.current = (index + this.total) % this.total;
        this.slides[this.current]?.classList.add("active");
        this.dots[this.current]?.classList.add("active");
        this.updateCounter();
        this.resetProgress();
      },

      next() {
        this.goTo(this.current + 1);
      },

      prev() {
        this.goTo(this.current - 1);
      },

      pauseAuto() {
        if (this.timer) {
          window.clearInterval(this.timer);
          this.timer = null;
        }
      },

      startAuto() {
        this.pauseAuto();

        if (this.total <= 1) {
          return;
        }

        this.timer = window.setInterval(() => this.next(), this.interval);
      },

      bindControls() {
        document.querySelector(".hero-next")?.addEventListener("click", () => {
          this.next();
          this.startAuto();
        });

        document.querySelector(".hero-prev")?.addEventListener("click", () => {
          this.prev();
          this.startAuto();
        });

        this.dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            this.goTo(index);
            this.startAuto();
          });
        });

        document.querySelector("#hero")?.addEventListener("mouseenter", () => this.pauseAuto());
        document.querySelector("#hero")?.addEventListener("mouseleave", () => this.startAuto());
      },

      init() {
        this.total = this.slides.length;

        if (!this.total) {
          return;
        }

        this.goTo(0);
        this.bindControls();
        this.startAuto();
      }
    };

    heroSlider.init();
  }
});
