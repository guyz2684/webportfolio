/**
 * NAVIGATION CONTROLLER
 * Handles sticky navbar styling, active page highlighting, and mobile collapse
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');

  // 1. Sticky Navbar background on scroll
  function handleNavbarScroll() {
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // 2. Determine and highlight Active Page
  function highlightActivePage() {
    const currentPath = window.location.pathname;
    let pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if (!pageName || pageName === '' || pageName === 'webportfolio' || pageName === 'index.php') {
      pageName = 'index.html';
    }

    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;

      // Extract filename from link href (e.g. "about.html#section" -> "about.html")
      const targetPage = linkHref.split('#')[0];

      if (targetPage === pageName || (pageName === 'index.html' && (targetPage === 'index.html' || targetPage === './'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActivePage();

  // 3. Auto-close mobile navbar on clicking link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
