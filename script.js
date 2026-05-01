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


// V2.1 subtle scroll animations
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const revealItems = document.querySelectorAll('[data-reveal], .reveal-up');

  revealItems.forEach((item, index) => {
    if (item.classList.contains('service-card') || item.classList.contains('gallery-card') || item.classList.contains('feature-item')) {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach((item) => observer.observe(item));

  const parallaxItems = document.querySelectorAll('[data-parallax]');
  let ticking = false;

  function updateParallax() {
    const viewportHeight = window.innerHeight || 1;

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0.08);
      const rect = item.getBoundingClientRect();
      const centerOffset = (rect.top + rect.height / 2) - viewportHeight / 2;
      const translateY = Math.max(Math.min(-centerOffset * speed, 24), -24);
      item.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });

    ticking = false;
  }

  function requestParallax() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestParallax, { passive: true });
  window.addEventListener('resize', requestParallax, { passive: true });
  requestParallax();
}
