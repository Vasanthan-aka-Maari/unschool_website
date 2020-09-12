const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Navbar
    nav.classList.toggle("nav-active");

    // Animate Nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 5 + .1}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');

  });
};

navSlide();
