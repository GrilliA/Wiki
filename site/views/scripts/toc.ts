const initTocMobile = (): void => {
  const tocContainer = document.querySelector('.toc-mobile');
  const trigger = document.querySelector('.js-toc-trigger');
  const closeBtn = document.querySelector('.js-toc-close');
  const tocLinks = document.querySelectorAll('.js-toc-link');

  if (!tocContainer || !trigger) return;

  const openToc = (): void => {
    tocContainer.classList.add('toc-mobile--open');
    trigger.setAttribute('aria-expanded', 'true');
  };

  const closeToc = (): void => {
    tocContainer.classList.remove('toc-mobile--open');
    trigger.setAttribute('aria-expanded', 'false');
  };

  const toggleToc = (): void => {
    const isOpen = tocContainer.classList.contains('toc-mobile--open');
    if (isOpen) {
      closeToc();
    } else {
      openToc();
    }
  };

  trigger.addEventListener('click', toggleToc);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeToc);
  }

  tocLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeToc();
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!tocContainer.contains(target)) {
      closeToc();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tocContainer.classList.contains('toc-mobile--open')) {
      closeToc();
    }
  });
};

const initActiveTracking = (): void => {
  const tocLinks = document.querySelectorAll('.js-toc-link[href^="#"]');
  if (tocLinks.length === 0) return;

  const observerOptions: IntersectionObserverInit = {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        tocLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${targetId}`) {
            link.classList.add('toc-mobile__link--active');
          } else {
            link.classList.remove('toc-mobile__link--active');
          }
        });
      }
    });
  }, observerOptions);

  tocLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        observer.observe(targetElement);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initTocMobile();
  initActiveTracking();
});

export { initTocMobile, initActiveTracking };
