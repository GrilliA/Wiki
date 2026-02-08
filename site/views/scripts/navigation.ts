const navbar = document.querySelector("nav");
const [openMenuButton, closeMenuButton] =
  document.querySelectorAll(".navbar .menu");
const mobileNav = document.querySelector(".mobile-nav");

openMenuButton!.addEventListener("click", () => {
  navbar!.classList.add("active");
  mobileNav!.classList.add("active");
});

closeMenuButton!.addEventListener("click", () => {
  navbar!.classList.remove("active");
  mobileNav!.classList.remove("active");
});
