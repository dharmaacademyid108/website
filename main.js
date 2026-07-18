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

  /* ── Scroll-Reveal (IntersectionObserver) ───────────────────
     Content is visible by default in CSS. We only opt into the
     hidden-then-reveal behaviour once we know we can drive it, so
     nothing can leave the page blank. */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    document.documentElement.classList.add('js-reveal');

    const reveal = el => el.classList.add('visible');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    revealEls.forEach(el => observer.observe(el));

    // Hidden tabs are throttled, so the observer never runs while the
    // page is in the background. Catch up whatever is on screen once
    // the visitor actually looks at it.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) return;
      revealEls.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
      });
    });
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

  /* ── Hero Carousel ────────────────────────────────────────── */
  const carousel = document.getElementById('hero-carousel');
  const dotsWrap = document.getElementById('hero-dots');

  if (carousel && dotsWrap) {
    const slides = carousel.querySelectorAll('img');
    const dots = dotsWrap.querySelectorAll('button');
    let current = 0;

    function goTo(index) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = index;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
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