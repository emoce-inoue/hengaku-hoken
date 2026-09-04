(() => {
  const toggleButton = document.querySelector('.js-toggle');
  const navigationElement = document.querySelector('.l-navigation');

  if (!toggleButton || !navigationElement) {
    return;
  }

  const openClassName = 'is-open';
  const activeClassName = 'active';
  const bodyOpenClassName = 'is-navigation-open';
  const navigationLinkElements = navigationElement.querySelectorAll('.l-hamburger__link');

  if (!navigationElement.id) {
    navigationElement.id = 'globalNavigation';
  }

  toggleButton.setAttribute('role', 'button');
  toggleButton.setAttribute('tabindex', '0');
  toggleButton.setAttribute('aria-controls', navigationElement.id);
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.setAttribute('aria-label', 'メニューを開く');

  const closeNavigation = () => {
    toggleButton.classList.remove(activeClassName);
    navigationElement.classList.remove(openClassName);
    document.body.classList.remove(bodyOpenClassName);
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'メニューを開く');
  };

  const openNavigation = () => {
    toggleButton.classList.add(activeClassName);
    navigationElement.classList.add(openClassName);
    document.body.classList.add(bodyOpenClassName);
    toggleButton.setAttribute('aria-expanded', 'true');
    toggleButton.setAttribute('aria-label', 'メニューを閉じる');
  };

  const toggleNavigation = () => {
    if (navigationElement.classList.contains(openClassName)) {
      closeNavigation();
      return;
    }
    openNavigation();
  };

  toggleButton.addEventListener('click', () => {
    toggleNavigation();
  });

  toggleButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleNavigation();
    }
  });

  navigationLinkElements.forEach((navigationLinkElement) => {
    navigationLinkElement.addEventListener('click', () => {
      closeNavigation();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
      closeNavigation();
    }
  });
})();

(() => {
  const fixedCtaElement = document.querySelector('.l-fixed-cta');
  const triggerSectionElement = document.querySelector('.l-section--mv');

  if (!fixedCtaElement || !triggerSectionElement) {
    return;
  }

  const activeClassName = 'is-active';

  const toggleFixedCta = (isInMvSection) => {
    fixedCtaElement.classList.toggle(activeClassName, !isInMvSection);
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        toggleFixedCta(entry.isIntersecting);
      });
    },
    {
      threshold: 0.01,
    },
  );

  sectionObserver.observe(triggerSectionElement);
})();

document.addEventListener('DOMContentLoaded', () => {
  const pageTopBtn = document.querySelector('.js-page-top');
  if (pageTopBtn) {
    pageTopBtn.addEventListener('click', () => {
      window.scroll({ top: 0, behavior: 'smooth' });
    });
  }
});

window.addEventListener('load', () => {
  const loadElement = document.querySelector('.js-page');
  loadElement.classList.add('js-page--loaded');
});
