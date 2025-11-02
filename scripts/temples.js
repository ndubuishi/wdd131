document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const modSpan   = document.getElementById('lastModified');

  yearSpan.textContent = new Date().getFullYear();
  modSpan.textContent  = document.lastModified;

  const menuBtn = document.getElementById('menu');
  const nav     = document.querySelector('.navigation');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', expanded);
    menuBtn.textContent = expanded ? '✖' : '☰';
  });
});