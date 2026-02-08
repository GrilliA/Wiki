const initTableOfContents = (): void => {
  const tocGroups = document.querySelectorAll('.toc__group');

  tocGroups.forEach((group) => {
    const header = group.querySelector('.toc__group-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = group.classList.contains('toc__group--open');

      if (isOpen) {
        group.classList.remove('toc__group--open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        group.classList.add('toc__group--open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

const initActiveTracking = (): void => {
  const tocLinks = document.querySelectorAll('.toc__link[href^="#"]');
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
            link.classList.add('toc__link--active');
          } else {
            link.classList.remove('toc__link--active');
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
  initTableOfContents();
  initActiveTracking();
});

export { initTableOfContents, initActiveTracking };
