/**
 * MAIN JAVASCRIPT CONTROLLER
 * Project: Creative Media Student Portfolio
 * Features: Preloader, Scroll-to-Top, Scroll Reveal, Form Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. Preloader Fade-out
  // ==========================================================================
  const preloader = document.getElementById('preloader');
  
  function hidePreloader() {
    if (preloader) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }
  }

  // Hide preloader when window fully loads or after safe fallback timeout
  window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 1500); // Fallback

  // ==========================================================================
  // 2. Scroll-to-Top Button
  // ==========================================================================
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 3. Scroll Reveal Animation (Intersection Observer)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we can unobserve
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers without observer
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ==========================================================================
  // 4. Contact Form Handling & Toast Feedback
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const toastNotification = document.getElementById('contactToast');

  function showToast(message) {
    if (toastNotification) {
      const toastText = toastNotification.querySelector('.toast-msg');
      if (toastText && message) {
        toastText.textContent = message;
      }
      toastNotification.classList.add('show');
      setTimeout(() => {
        toastNotification.classList.remove('show');
      }, 4000);
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        alert('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน');
        return;
      }

      // Simulate sending with loading state on submit button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        contactForm.reset();
        showToast('ขอบคุณสำหรับข้อความ! ข้อมูลถูกส่งเรียบร้อยแล้ว');
      }, 1000);
    });
  }
});
