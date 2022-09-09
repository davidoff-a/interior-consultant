const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-nav");
const nav = document.querySelector(".nav");

burger.addEventListener("click", ({ target }) => {
  if (target) {
    target.closest(".burger").classList.toggle("twist");
    if (nav) {
      nav.classList.toggle("showMenu");
    }
  }
});

menu.addEventListener("click", ({ target }) => {
  if (target && target.classList.contains("menu-nav__item")) {
    nav.classList.toggle("showMenu");
    target.closest(".burger").classList.toggle("twist");
  }
});