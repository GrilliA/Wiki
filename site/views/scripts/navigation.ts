const navbar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-item.menu");
const menuList = document.querySelector(".menu-list");

navMenu!.addEventListener("click", () => {
  navbar!.classList.toggle("active");
});
