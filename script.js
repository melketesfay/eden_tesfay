const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// V2.2 smooth repeatable scroll reveals, no hero parallax jitter
const reduceMotionV22 = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotionV22) {
  const revealItems = document.querySelectorAll('[data-reveal], .reveal-up, .service-card, .gallery-card, .feature-item, .intro-ribbon article, .real-photo-strip img');

  revealItems.forEach((item, index) => {
    if (
      item.classList.contains('service-card') ||
      item.classList.contains('gallery-card') ||
      item.classList.contains('feature-item') ||
      item.tagName === 'IMG'
    ) {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else if (entry.boundingClientRect.top > window.innerHeight) {
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -7% 0px'
  });

  revealItems.forEach((item) => observer.observe(item));
}
