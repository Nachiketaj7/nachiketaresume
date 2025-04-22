// Typewriter
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = "";
let i = 0;
function type() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
window.addEventListener('load', type);

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const trigger = window.innerHeight * 0.9;
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Back to top button
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
