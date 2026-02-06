const navbar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-item.menu");
const menuList = document.querySelector(".menu-list");

const getMenuIcon = () => {
  navMenu!.innerHTML = navbar!.classList.contains("active") ? "x" : "menu";
};

getMenuIcon();

navMenu!.addEventListener("click", () => {
  navbar!.classList.toggle("active");
  getMenuIcon();
});
