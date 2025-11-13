// =========================
// MOBILE MENU TOGGLE
// =========================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// =========================
// AUTO YEAR IN FOOTER
// =========================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================
// SCROLL ANIMATIONS
// =========================
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 1s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  observer.observe(section);
});
