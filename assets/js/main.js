(() => {
  "use strict";

  // Cached selectors
  const header = document.querySelector('#header');
  const headerToggleBtn = document.querySelector('.header-toggle');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const navmenu = document.querySelector('#navmenu');
  const navmenuLinks = navmenu ? navmenu.querySelectorAll('a') : [];

  // Header toggle handler
  const toggleHeader = () => {
    if (!header || !headerToggleBtn) return;
    header.classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  };
  headerToggleBtn?.addEventListener('click', toggleHeader);

  // Hide mobile nav on navmenu link click (event delegation)
  navmenu?.addEventListener('click', e => {
    const target = e.target.closest('a');
    if (target && header?.classList.contains('header-show')) {
      toggleHeader();
    }
  });

  // Toggle mobile nav dropdowns (event delegation)
  navmenu?.querySelectorAll('.toggle-dropdown').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      const parent = toggle.parentNode;
      if (!parent) return;
      parent.classList.toggle('active');
      parent.nextElementSibling?.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  // Scroll top button toggle
  const toggleScrollTop = () => {
    if (!scrollTopBtn) return;
    window.scrollY > 100 ? scrollTopBtn.classList.add('active') : scrollTopBtn.classList.remove('active');
  };

  scrollTopBtn?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Debounce helper
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // Debounced scroll handler for performance
  const onScroll = debounce(() => {
    toggleScrollTop();
    navmenuScrollspy();
  }, 100);

  window.addEventListener('load', () => {
    toggleScrollTop();
    aosInit();
    navmenuScrollspy();
    initSwiper();
  });

  document.addEventListener('scroll', onScroll);

  // AOS init
  function aosInit() {
    if (typeof AOS !== 'undefined' && AOS.init) {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }

  // Typed.js init
  const typedEl = document.querySelector('.typed');
  if (typedEl && typeof Typed !== 'undefined') {
    const typedStrings = typedEl.getAttribute('data-typed-items')?.split(',') ?? [];
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // PureCounter init
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  // Skills animation (Waypoint)
  const skillsAnimation = document.querySelectorAll('.skills-animation');
  if (typeof Waypoint !== 'undefined') {
    skillsAnimation.forEach(item => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: () => {
          item.querySelectorAll('.progress .progress-bar').forEach(bar => {
            bar.style.width = bar.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }

  // GLightbox init
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  // Isotope init with filters
  document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
    const container = isotopeItem.querySelector('.isotope-container');
    if (!container) return;

    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
      imagesLoaded(container, () => {
        initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
      filterBtn.addEventListener('click', () => {
        isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
        filterBtn.classList.add('filter-active');
        initIsotope?.arrange({ filter: filterBtn.getAttribute('data-filter') });
        aosInit();
      });
    });
  });

  // Swiper init
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      const configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;

      let config;
      try {
        config = JSON.parse(configEl.textContent.trim());
      } catch {
        console.warn('Invalid JSON in swiper config');
        return;
      }

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  // Fix scroll position for hash links on load
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
          window.scrollTo({
            top: section.offsetTop - scrollMarginTop,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  // Navmenu scrollspy
  function navmenuScrollspy() {
    navmenuLinks.forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navmenu.querySelectorAll('a.active').forEach(activeLink => activeLink.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

})();
