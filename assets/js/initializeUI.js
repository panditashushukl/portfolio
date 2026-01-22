function initializeUI() {
  "use strict";
  
  //1. Toggle  Header
  let headerToggleBtn;
  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  try {
    headerToggleBtn = document.querySelector('#header-toggle');
    if (headerToggleBtn) {
      headerToggleBtn.addEventListener('click', headerToggle);
      // Add event listener to nav menu links
      const navLinks = document.querySelectorAll('#navmenu a');
      navLinks.forEach(link => {
        link.addEventListener('click', headerToggle);
      });
    } else {
      console.warn("header-toggle button not found.");
    }
  } catch (err) {
    console.error("Header toggle error:", err);
  }

  // 2. Scroll top button
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

  // 3. Typed.js
  try {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings?.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 120,
        backSpeed: 60,
        backDelay: 2100
      });
    }
  } catch (err) {
    console.error("Typed.js init error:", err);
  }

  // 4. PureCounter
  try {
    new PureCounter();
  } catch (err) {
    console.error("PureCounter error:", err);
  }

  // 5. AOS initialization
  try {
    AOS.init();
  } catch (error) {
    console.error("AOS initialization error:", error);
  }

  // 6. Active nav link on scroll
  try{
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("#navmenu a");

    function activateNav() {
      let scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + section.id) {
              link.classList.add("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", activateNav);
    activateNav();
  } catch (error) {
    console.error("Active nav link error:", error);
  }

  //7.  Remove preloader after everything is loaded
  try {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  } catch (err) {
    console.error("Preloader error:", err);
  }

}