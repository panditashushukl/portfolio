function main() {
  "use strict";

  // 1. Header Toggle
  try {
    const headerToggleBtn = document.querySelector('.header-toggle');
    if (headerToggleBtn) {
      function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      }
      headerToggleBtn.addEventListener('click', headerToggle);
    } else {
      console.warn("header-toggle button not found.");
    }
  } catch (err) {
    console.error("Header toggle error:", err);
  }

  // 2. Hide mobile nav on nav link click
  try {
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          document.querySelector('.header-toggle')?.click();
        }
      });
    });
  } catch (err) {
    console.error("Nav link click error:", err);
  }

  // 3. Toggle mobile nav dropdowns
  try {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  } catch (err) {
    console.error("Dropdown toggle error:", err);
  }


  // 5. Scroll top button
  try {
    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
      if (scrollTop) {
        scrollTop.classList.toggle('active', window.scrollY > 100);
      }
    }

    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  } catch (err) {
    console.error("Scroll top button error:", err);
  }

  // 6. AOS Animation
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    try {
      aosInit();
    } catch (err) {
      console.error("AOS init error:", err);
    }
  });

  // 7. Typed.js
  try {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings?.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  } catch (err) {
    console.error("Typed.js init error:", err);
  }

  // 8. PureCounter
  try {
    new PureCounter();
  } catch (err) {
    console.error("PureCounter error:", err);
  }

  // 9. Skills animation with Waypoints
  try {
    const skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  } catch (err) {
    console.error("Skills animation error:", err);
  }

  // 10. GLightbox
  try {
    GLightbox({ selector: '.glightbox' });
  } catch (err) {
    console.error("GLightbox error:", err);
  }

  // 11. Isotope filtering
  try {
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope?.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') aosInit();
        });
      });
    });
  } catch (err) {
    console.error("Isotope layout error:", err);
  }

  // 12. Swiper slider init
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      try {
        const configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) throw new Error("Missing .swiper-config");
        let config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement, config);
      } catch (err) {
        console.error("Swiper init error:", err);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  // 13. Scroll to hash on load
  window.addEventListener('load', () => {
    try {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    } catch (err) {
      console.error("Scroll to hash error:", err);
    }
  });

  // 14. Navmenu Scrollspy
  try {
    let navmenulinks = document.querySelectorAll('.navmenu a');
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  } catch (err) {
    console.error("Scrollspy error:", err);
  }

}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await includeHTML();

    if (typeof renderProjects === "function" && typeof projects !== "undefined") {
      renderProjects(projects);
    }

    main()
    AOS.init();
    try {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    } catch (err) {
      console.error("Preloader error:", err);
    }
  } catch (error) {
    console.error("Error during page initialization:", error);
  }
});