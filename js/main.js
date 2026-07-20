/**
 * Portfolio interactions: nav, scroll, form, reveal animations
 */
(function () {
  "use strict";

  const CONTACT_EMAIL = "edufz10@gmail.com"; 

  /* ---------- Init i18n ---------- */
  if (window.portfolioI18n) {
    window.portfolioI18n.initI18n();
  }

  /* ---------- Year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  function setMenuOpen(open) {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") !== "true";
      setMenuOpen(open);
    });
  }

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById("header");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 20);
    if (backToTop) backToTop.classList.toggle("show", y > 500);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Smooth scroll for anchor links (offset for fixed header) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 88;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Contact form (mailto fallback) ---------- */
  const form = document.getElementById("contact-form");
  const successEl = document.getElementById("form-success");

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showError(field, show) {
    const input = form.querySelector(`#${field}`);
    const err = form.querySelector(`[data-error-for="${field}"]`);
    if (input) input.classList.toggle("invalid", show);
    if (err) err.classList.toggle("hidden", !show);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = (form.name.value || "").trim();
      const email = (form.email.value || "").trim();
      const message = (form.message.value || "").trim();

      let ok = true;
      if (!name) {
        showError("name", true);
        ok = false;
      } else showError("name", false);

      if (!email || !isValidEmail(email)) {
        showError("email", true);
        ok = false;
      } else showError("email", false);

      if (!message || message.length < 5) {
        showError("message", true);
        ok = false;
      } else showError("message", false);

      if (!ok) return;

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      if (successEl) {
        successEl.classList.remove("hidden");
        setTimeout(() => successEl.classList.add("hidden"), 6000);
      }

      form.reset();
    });

    // Clear errors on input
    ["name", "email", "message"].forEach((field) => {
      const input = form.querySelector(`#${field}`);
      if (input) {
        input.addEventListener("input", () => showError(field, false));
      }
    });
  }

  /* ---------- Resume button: graceful fallback if PDF missing ---------- */
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
      // If user hasn't added assets/resume.pdf yet, show a friendly note
      // Browser will still try to download; this is optional UX
      resumeBtn.setAttribute("title", "Add your PDF at assets/resume.pdf");
    });
  }
})();
