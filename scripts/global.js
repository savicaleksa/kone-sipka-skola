//mobile nav functionality
const burger = document.querySelector("#nav-burger");
const mobileNav = document.querySelector("#mobile-navbar");
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  burger.classList.toggle("open");
});

//adding tabindex to all links, buttons and inputs
const focusableElements = document.querySelectorAll(
  "a, button, input, textarea, select"
);
focusableElements.forEach((element) => {
  element.setAttribute("tabindex", "0");
});
