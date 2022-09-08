const burger = document.querySelector(".burger");
burger.addEventListener("click", ({ target }) => {
  if (target) {
    target.closest(".burger").classList.toggle("twist");
  }
});