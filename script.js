const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});
