// Mobile nav toggle + sticky WhatsApp FAB
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const fab = document.querySelector('.wa-fab');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.classList.toggle('nav-open', open);
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });
  }

  if (fab) {
    const hero = document.querySelector('.hero');
    const showFab = () => {
      if (!hero) return;
      const pastHero = window.scrollY > hero.offsetHeight * 0.55;
      fab.classList.toggle('visible', pastHero);
    };
    showFab();
    window.addEventListener('scroll', showFab, { passive: true });
  }
})();
