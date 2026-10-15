(function () {
  'use strict';

  /* ── 1. Nav scroll ── */
  var nav = document.querySelector('.nav');
  if (nav) {
    function handleNavScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  /* ── 2. Mobile menu ── */
  var burger  = document.querySelector('.nav__burger');
  var mobileNav = document.querySelector('.nav__mobile');
  var mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  function openMenu() {
    burger && burger.setAttribute('aria-expanded', 'true');
    mobileNav && mobileNav.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    burger && burger.setAttribute('aria-expanded', 'false');
    mobileNav && mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  if (burger) {
    burger.addEventListener('click', function () {
      var isOpen = mobileNav && mobileNav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* ── 3. Active nav link ── */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var hrefFile = href.split('/').pop();
    if (hrefFile === currentFile || (currentFile === '' && hrefFile === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── 4. Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    /* Fallback for older browsers */
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── 5. FAQ accordion ── */
  document.querySelectorAll('.faq-item__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── 6. Contact form ── */
  var form = document.querySelector('.contact-form');
  var formSuccess = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Slanje…';
        submitBtn.disabled = true;
      }

      /* Integrate Formspree or Netlify Forms here:
         fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form) })
           .then(() => showSuccess())
           .catch(() => { submitBtn.textContent = 'Pokušajte ponovo'; submitBtn.disabled = false; });
      */

      setTimeout(function () {
        if (formSuccess) {
          form.style.display = 'none';
          formSuccess.classList.add('show');
        }
      }, 800);
    });
  }

  /* ── 7. Dropdown — hover with delay so mouse can reach menu items ── */
  var dropdowns = document.querySelectorAll('.nav__dropdown');
  dropdowns.forEach(function (dropdown) {
    var timer;

    dropdown.addEventListener('mouseenter', function () {
      clearTimeout(timer);
      dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
      dropdown.classList.add('is-open');
    });

    dropdown.addEventListener('mouseleave', function () {
      timer = setTimeout(function () {
        dropdown.classList.remove('is-open');
      }, 200);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__dropdown')) {
      dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
    }
  });

  /* ── 8. Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 9. Rondo footer widget ── */
  (function(){
    var btn  = document.getElementById('footer-rondo-btn');
    var wrap = document.getElementById('footer-rondo');
    var lbl  = document.getElementById('footer-rondo-label');
    if(btn && wrap) btn.addEventListener('click', function(){
      var open = wrap.classList.toggle('open');
      if(lbl){ lbl.setAttribute('aria-hidden', String(!open)); lbl.tabIndex = open ? 0 : -1; }
    });
  })();


  /* ── brand logo animacija ── */
/* ============================================================
   MAISONDENTAL — pokretanje logotipa u headeru
   Dodati na kraj js/main.js
   ============================================================ */
(function () {
  'use strict';

  var brand = document.querySelector('.brand');
  if (!brand) return;

  // ---- podesavanja -------------------------------------------------
  // 'session' — animacija se igra jednom po poseti (preporuceno)
  // 'always'  — na svakom ucitavanju stranice
  var PLAY = 'session';

  // true — pri skrolovanju nadole logo se skupi nazad u pecat
  var COLLAPSE_ON_SCROLL = false;
  // ------------------------------------------------------------------

  var reduce = window.matchMedia &&
               window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var seen = false;
  try { seen = sessionStorage.getItem('md-brand') === '1'; } catch (e) {}

  function open() { brand.classList.add('is-open'); }

  if (reduce || (PLAY === 'session' && seen)) {
    open();                                   // odmah konacno stanje
  } else {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(open, 260);                // kratka pauza pa odmotavanje
      });
    });
    try { sessionStorage.setItem('md-brand', '1'); } catch (e) {}
  }

  if (COLLAPSE_ON_SCROLL && !reduce) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        brand.classList.toggle('is-open', window.scrollY < 120);
        ticking = false;
      });
    }, { passive: true });
  }
})();

})();
