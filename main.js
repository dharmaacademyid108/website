/* ============================================================
   DHARMA ACADEMY INDONESIA — main.js
   Mobile nav, scroll-reveal, scroll-to-top
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation ────────────────────────────────────── */
  const toggle = document.querySelector('.site-nav__toggle');
  const drawer = document.querySelector('.site-nav__drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = !drawer.hidden;
      drawer.hidden = isOpen;
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.textContent = isOpen ? '☰' : '✕';
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.hidden) {
        drawer.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
        toggle.focus();
      }
    });
  }

  /* ── Scroll-Reveal (IntersectionObserver) ─────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Scroll-to-Top ────────────────────────────────────────── */
  const scrollBtn = document.getElementById('scroll-top');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.hidden = window.scrollY < 400;
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Active nav link ──────────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__links a, .site-nav__drawer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.style.color = 'var(--color-accent)';
    }
  });

})();