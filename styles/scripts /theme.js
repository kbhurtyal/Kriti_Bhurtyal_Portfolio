// theme.js - Handles light/dark toggle and stores preference
(function () {
    const body = document.body;
    const toggle = document.getElementById('themeToggle');
  
    // Apply saved theme on load
    const saved = localStorage.getItem('site-theme');
    if (saved === 'dark') body.classList.add('theme-dark');
  
    // Update toggle button text
    function updateToggleText() {
      if (!toggle) return;
      toggle.textContent = body.classList.contains('theme-dark') ? '🌞' : '🌗';
    }
    updateToggleText();
  
    if (toggle) {
      toggle.addEventListener('click', () => {
        body.classList.toggle('theme-dark');
        const isDark = body.classList.contains('theme-dark');
        localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
        updateToggleText();
      });
    }
  })();
  