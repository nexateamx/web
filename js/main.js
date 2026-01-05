// Menu mobile
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "20px";
  nav.style.background = "rgba(11,15,26,0.95)";
  nav.style.padding = "1rem";
  nav.style.borderRadius = "14px";
});

// Scroll reveal
const elements = document.querySelectorAll(
  ".section, .about-card, .plan-card, .coverage-item, .payment-item"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

elements.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
