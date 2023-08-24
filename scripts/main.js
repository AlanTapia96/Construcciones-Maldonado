document.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  let navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY < 50) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href");
      const section = document.querySelector(sectionId);
      // const navbarHeight = document.querySelector("nav").offsetHeight;
      const navbarHeight = 100;
      const offset = 5; // Distancia antes de la sección donde detener el desplazamiento

      if (section) {
        const topOffset = section.offsetTop - navbarHeight + offset;
        window.scroll({
          top: topOffset,
          behavior: "smooth",
        });
      }
    });
  });

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

AOS.init({
  startEvent: "load",
  // duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true,
});
