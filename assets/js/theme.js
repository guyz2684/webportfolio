/**
 * THEME CONTROLLER (Dark / Light Mode)
 * Manages theme switching with persistence in localStorage
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_theme';
  const root = document.documentElement;

  // Retrieve saved theme or default to 'dark'
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark mode for creative media aesthetic
    return 'dark';
  }

  // Apply theme to document
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button icon
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      const icon = themeBtn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'fa-solid fa-moon';
          themeBtn.setAttribute('title', 'เปลี่ยนเป็นโหมดมืด (Dark Mode)');
          themeBtn.setAttribute('aria-label', 'Switch to Dark Mode');
        } else {
          icon.className = 'fa-solid fa-sun';
          themeBtn.setAttribute('title', 'เปลี่ยนเป็นโหมดสว่าง (Light Mode)');
          themeBtn.setAttribute('aria-label', 'Switch to Light Mode');
        }
      }
    }
  }

  // Toggle theme between dark & light
  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  // Initialize theme on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }
  });

  // Expose toggleTheme globally if needed
  window.toggleTheme = toggleTheme;
})();
