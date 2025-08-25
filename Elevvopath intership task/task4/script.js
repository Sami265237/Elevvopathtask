const toggleBtn = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  
    toggleBtn.innerHTML = current === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});
