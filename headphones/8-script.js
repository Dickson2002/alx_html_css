const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    // update accessible state
    hamburger.setAttribute('aria-expanded', String(isActive));
  });
}

// close menu when a nav link is clicked
document.querySelectorAll('.nav-menu a').forEach(n => {
  n.addEventListener('click', () => {
    if (hamburger && navMenu) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
// ...existing code...