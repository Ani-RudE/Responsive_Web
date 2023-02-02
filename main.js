const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
     
primaryNav.toggleAttribute("data-visible");
});

const slider = new A11YSlider(document.querySelector(".slider"));